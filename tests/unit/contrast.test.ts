import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const css = readFileSync(new URL('../../src/styles/tokens.css', import.meta.url), 'utf8');
function token(name: string): string {
  const match = css.match(new RegExp(`--${name}: (#[a-f0-9]{6});`));
  if (!match?.[1]) throw new Error(`Missing primitive token: ${name}`);
  return match[1];
}
function luminance(hex: string): number {
  return [0.2126, 0.7152, 0.0722].reduce((sum, weight, index) => {
    const value = Number.parseInt(hex.slice(1 + index * 2, 3 + index * 2), 16) / 255;
    return sum + weight * (value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  }, 0);
}
for (const [foreground, background] of [['charcoal', 'paper'], ['text-secondary', 'paper'], ['terracotta-hover', 'paper'], ['surface', 'terracotta'], ['paper', 'charcoal'], ['clay', 'charcoal']]) {
  test(`${foreground} on ${background} meets 4.5:1 text contrast`, () => {
    assert.ok(foreground && background);
    const a = luminance(token(foreground));
    const b = luminance(token(background));
    assert.ok((Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05) >= 4.5);
  });
}
