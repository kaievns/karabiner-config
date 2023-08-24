import {
  ifDevice,
  map,
  rule,
  writeToProfile,
} from "https://deno.land/x/karabinerts@1.24.0/deno.ts";

import { halmak } from "./halmak.ts";

const ifInternalKeyboard = ifDevice({ vendor_id: 1452, product_id: 834 });
const ifExternalKaiboard = ifDevice({ vendor_id: 7504, product_id: 24926 });

// writeToProfile("Default", [
//   rule("internal-halmak", ifInternalKeyboard).manipulators([
//     halmak,
//   ]),
//   rule("kaiboard-controls-swap", ifExternalKaiboard).manipulators([
//     map("left⌘").to("left⌃"),
//     map("left⌃").to("left⌘"),
//     map("right⌘").to("right⌃"),
//     map("right⌃").to("right⌘"),
//   ]),
// ]);

console.log(JSON.stringify(
  {
    title: "Halmak setup",
    rules: [
      rule("internal-keyboard-halmak", ifInternalKeyboard).manipulators([
        halmak,
      ]).build(),
      rule("kaiboard-controls-swap", ifExternalKaiboard).manipulators([
        map("left⌘").to("left⌃"),
        map("left⌃").to("left⌘"),
        map("right⌘").to("right⌃"),
        map("right⌃").to("right⌘"),

        // patching the ctrl-tilda weirdness
        map("`", ["left_control", "left_shift"]).to("`", "left_command"),
      ]).build(),
    ],
  },
  null,
  2,
));
