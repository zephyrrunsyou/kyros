import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const source = readFileSync(new URL("../script.js", import.meta.url), "utf8");
const context = vm.createContext({});
vm.runInContext(source.slice(source.indexOf("function spParseWordLines("), source.indexOf("function spParseLrc(")), context);
const parse = context.spParseWordLines;
const index = context.spWordIndex;

test("word timings follow timestamps, gaps, and backward seeks", () => {
  const [line] = parse([{ text: "One two", start_ms: 1000, end_ms: 4000, words: [
    { text: "One ", start_ms: 1000, end_ms: 1800 },
    { text: "two", start_ms: 2200, end_ms: 3500 },
  ] }]);
  assert.equal(index(line, .9), -1);
  assert.equal(index(line, 1.2), 0);
  assert.equal(index(line, 2), -1);
  assert.equal(index(line, 2.5), 1);
  assert.equal(index(line, 3.8), -1);
  assert.equal(index(line, 1.2), 0);
});

test("missing word end uses next timestamp; mismatched text falls back to line timing", () => {
  const [line] = parse([{ text: "One two", start_ms: 1000, end_ms: 4000, words: [
    { text: "One ", start_ms: 1000 }, { text: "two", start_ms: 2200 },
  ] }]);
  assert.equal(index(line, 2.1), 0);
  assert.equal(index(line, 2.2), 1);
  assert.equal(index(line, 4), -1);
  const [fallback] = parse([{ text: "Other words", start_ms: 1000, words: [{ text: "Mismatch", start_ms: 1000 }] }]);
  assert.equal(fallback.words.length, 0);
  assert.equal(fallback.text, "Other words");
});

test("last played separators are free of encoding corruption", () => {
  assert.ok(source.includes('"last played · "'));
  assert.ok(!source.includes("Â·"));
});

test("lyrics search rejects different versions and prefers word timings only among matching recordings", () => {
  vm.runInContext(source.slice(source.indexOf("function spChooseLyricsRecord("), source.indexOf("function spParseResult(")), context);
  const candidates = [
    { trackName: "Example", artistName: "Artist", duration: 180, hasWordSync: true, lyricsfile: "wrong version" },
    { trackName: "Example", artistName: "Artist", duration: 215, syncedLyrics: "correct" },
    { trackName: "Example (Live)", artistName: "Artist", duration: 215, hasWordSync: true, lyricsfile: "live" },
  ];
  const selected = context.spChooseLyricsRecord(candidates, { title: "Example", artist: "Artist" }, 215);
  assert.equal(selected.syncedLyrics, "correct");
});

test("local monotonic playback clock is unaffected by a remote clock offset", () => {
  const SP = { paused: false, track: { direct: true, progress: 42000, duration: 180000, receivedAt: 1000, observedAt: 0 } };
  const clockContext = vm.createContext({ SP, performance: { now: () => 2000 }, Date });
  vm.runInContext(source.slice(source.indexOf("function spPosition()"), source.indexOf("function spSetLoop()")), clockContext);
  assert.equal(clockContext.spPosition().pos, 43000);
  SP.paused = true;
  assert.equal(clockContext.spPosition().pos, 42000);
});
