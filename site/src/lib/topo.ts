/** Classic Perlin + marching-squares contour field (same approach as jayw.grok.me). */

const PERM = new Uint8Array(512);
{
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  let seed = 2654435769;
  for (let i = 255; i > 0; i--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = seed % (i + 1);
    const tmp = p[i];
    p[i] = p[j]!;
    p[j] = tmp!;
  }
  for (let i = 0; i < 512; i++) PERM[i] = p[i & 255]!;
}

function fade(t: number) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function grad(hash: number, x: number, y: number) {
  const h = hash & 3;
  const u = h < 2 ? x : y;
  const v = h < 2 ? y : x;
  return (h & 1 ? -u : u) + (h & 2 ? -v : v);
}

function perlin(x: number, y: number) {
  const xi = Math.floor(x) & 255;
  const yi = Math.floor(y) & 255;
  const xf = x - Math.floor(x);
  const yf = y - Math.floor(y);
  const u = fade(xf);
  const v = fade(yf);
  const aa = PERM[PERM[xi]! + yi]!;
  const ab = PERM[PERM[xi]! + yi + 1]!;
  const ba = PERM[PERM[xi + 1]! + yi]!;
  const bb = PERM[PERM[xi + 1]! + yi + 1]!;
  return lerp(
    lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u),
    lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u),
    v,
  );
}

export function fbm(x: number, y: number, octaves = 4) {
  let sum = 0;
  let amp = 0.5;
  let freq = 1;
  for (let i = 0; i < octaves; i++) {
    sum += perlin(x * freq, y * freq) * amp;
    freq *= 2;
    amp *= 0.5;
  }
  return sum;
}

export function curl(x: number, y: number, eps = 0.001) {
  return {
    x: (fbm(x, y + eps) - fbm(x, y - eps)) / (2 * eps),
    y: -((fbm(x + eps, y) - fbm(x - eps, y)) / (2 * eps)),
  };
}

const EDGES: number[][][] = [
  [],
  [[0, 3]],
  [[0, 1]],
  [[1, 3]],
  [[1, 2]],
  [
    [0, 1],
    [2, 3],
  ],
  [[0, 2]],
  [[2, 3]],
  [[2, 3]],
  [[0, 2]],
  [
    [0, 3],
    [1, 2],
  ],
  [[1, 2]],
  [[1, 3]],
  [[0, 1]],
  [[0, 3]],
  [],
];

function interp(a: number, b: number, iso: number) {
  const d = b - a;
  return Math.abs(d) < 1e-6 ? 0.5 : (iso - a) / d;
}

/** Marching-squares segments for one cell. Returns [x1,y1,x2,y2][] */
export function contourCell(
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  v00: number,
  v10: number,
  v11: number,
  v01: number,
  iso: number,
): number[][] {
  const segs = EDGES[(v00 > iso ? 1 : 0) | (v10 > iso ? 2 : 0) | (v11 > iso ? 4 : 0) | (v01 > iso ? 8 : 0)];
  if (!segs) return [];
  const pt = (edge: number): [number, number] => {
    if (edge === 0) return [x0 + (x1 - x0) * interp(v00, v10, iso), y0];
    if (edge === 1) return [x1, y0 + (y1 - y0) * interp(v10, v11, iso)];
    if (edge === 2) return [x0 + (x1 - x0) * interp(v01, v11, iso), y1];
    return [x0, y0 + (y1 - y0) * interp(v00, v01, iso)];
  };
  return segs.map(([a, b]) => {
    const p = pt(a!);
    const q = pt(b!);
    return [p[0], p[1], q[0], q[1]];
  });
}

export function hexToRgb(hex: string, fallback: [number, number, number] = [20, 20, 23]): [number, number, number] {
  const h = hex.startsWith("#") ? hex.slice(1) : hex;
  if (h.length !== 6) return fallback;
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}
