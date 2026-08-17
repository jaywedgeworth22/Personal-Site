import { useEffect, useRef } from "react";
import { contourCell, curl, fbm, hexToRgb } from "@/lib/topo";

/**
 * Animated topographic contour field — same construction as jayw.grok.me
 * (Perlin fBm + marching squares + curl-noise dust).
 */
export function TopoBackground({ intensity = 0.85 }: { intensity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let t = 0;
    let raf = 0;
    let running = true;

    type Dust = { x: number; y: number; vx: number; vy: number; life: number };
    let dust: Dust[] = [];

    const spawn = (randomLife: boolean): Dust => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: 0,
      vy: 0,
      life: randomLife ? Math.random() : 0,
    });

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, coarse ? 1.25 : 1.75);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.floor((coarse ? 220 : 760) * intensity);
      dust = Array.from({ length: n }, () => spawn(true));
    };

    const drawContours = (rgb: [number, number, number]) => {
      const cols = coarse ? 18 : 32;
      const rows = coarse ? 12 : 20;
      const field: number[][] = [];
      const drift = t * 0.04;
      for (let r = 0; r <= rows; r++) {
        const row: number[] = [];
        for (let c = 0; c <= cols; c++) {
          row.push(fbm((c / cols) * 2.4 + drift, (r / rows) * 2.4 - drift * 0.6, 3));
        }
        field.push(row);
      }
      ctx.lineWidth = 1;
      const isos = [-0.28, 0.02, 0.3];
      isos.forEach((iso, i) => {
        ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${0.055 + i * 0.018})`;
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const segs = contourCell(
              (c / cols) * w,
              (r / rows) * h,
              ((c + 1) / cols) * w,
              ((r + 1) / rows) * h,
              field[r]![c]!,
              field[r]![c + 1]!,
              field[r + 1]![c + 1]!,
              field[r + 1]![c]!,
              iso,
            );
            for (const [x1, y1, x2, y2] of segs) {
              ctx.moveTo(x1!, y1!);
              ctx.lineTo(x2!, y2!);
            }
          }
        }
        ctx.stroke();
      });
    };

    const tick = () => {
      if (!running) return;
      t += 0.016;
      const css = getComputedStyle(document.documentElement).getPropertyValue("--color-fg").trim();
      const rgb = hexToRgb(css.startsWith("#") ? css : "#141417");
      ctx.clearRect(0, 0, w, h);
      drawContours(rgb);

      if (!reduced) {
        const ptr = pointer.current;
        ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.08)`;
        for (const p of dust) {
          const n = curl(p.x * 0.0018 + t * 0.08, p.y * 0.0018);
          p.vx = n.x * 18 * intensity;
          p.vy = n.y * 18 * intensity;
          if (ptr.active) {
            const dx = ptr.x - p.x;
            const dy = ptr.y - p.y;
            const pull = 14000 / (dx * dx + dy * dy + 80);
            p.vx += dx * pull * 0.02;
            p.vy += dy * pull * 0.02;
          }
          p.x += p.vx * 0.35;
          p.y += p.vy * 0.35;
          p.life += 0.004;
          if (p.x < -8 || p.x > w + 8 || p.y < -8 || p.y > h + 8 || p.life > 1) {
            Object.assign(p, spawn(false), { life: 0 });
          }
          ctx.fillRect(p.x, p.y, 1.1, 1.1);
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const onVis = () => {
      running = document.visibilityState !== "hidden";
      if (running) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
      pointer.current.active = true;
    };
    const onLeave = () => {
      pointer.current.active = false;
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [intensity]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden
      />
      <div className="page-grain" aria-hidden />
    </>
  );
}
