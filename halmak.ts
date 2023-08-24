import {
  ifInputSource,
  map,
  withCondition,
} from "https://deno.land/x/karabinerts@1.24.0/deno.ts";

const ifEnglishLayout = ifInputSource({ language: "en" });
// const ifEnglishLayout = ifInputSource({ input_source_id: "^com\\.apple\\.keylayout\\.Australian$" });

export const halmakRules = [
  ...[undefined, "shift"].flatMap((mod: any) => [
    map("`", mod).to("`", mod),
    map("1", mod).to("1", mod),
    map("2", mod).to("2", mod),
    map("3", mod).to("3", mod),
    map("4", mod).to("4", mod),
    map("5", mod).to("5", mod),
    map("6", mod).to("6", mod),
    map("7", mod).to("7", mod),
    map("8", mod).to("8", mod),
    map("9").to("9"),
    map("9", "shift").to(",", "shift"),
    map("0").to("0"),
    map("0", "shift").to(".", "shift"),
    map("-", mod).to("-", mod),
    map("=", mod).to("=", mod),

    map("q", mod).to("w", mod),
    map("w", mod).to("l", mod),
    map("e", mod).to("r", mod),
    map("r", mod).to("b", mod),
    map("t", mod).to("z", mod),
    map("y", mod).to(";", mod),
    map("u", mod).to("q", mod),
    map("i", mod).to("u", mod),
    map("o", mod).to("d", mod),
    map("p", mod).to("j", mod),
    map("[", mod).to("[", mod),
    map("]", mod).to("]", mod),
    map("\\", mod).to("\\", mod),

    map("a", mod).to("s", mod),
    map("s", mod).to("h", mod),
    map("d", mod).to("n", mod),
    map("f", mod).to("t", mod),
    map("g").to(","),
    map("g", "shift").to("9", "shift"),
    map("h").to("."),
    map("h", "shift").to("0", "shift"),
    map("j", mod).to("a", mod),
    map("k", mod).to("e", mod),
    map("l", mod).to("o", mod),
    map(";", mod).to("i", mod),
    map("'", mod).to("'", mod),

    map("z", mod).to("f", mod),
    map("x", mod).to("m", mod),
    map("c", mod).to("v", mod),
    map("v", mod).to("c", mod),
    map("b", mod).to("/", mod),
    map("n", mod).to("g", mod),
    map("m", mod).to("p", mod),
    map(",", mod).to("x", mod),
    map(".", mod).to("k", mod),
    map("/", mod).to("y", mod),
  ]),
];

export const halmak = withCondition(ifEnglishLayout)(halmakRules);
