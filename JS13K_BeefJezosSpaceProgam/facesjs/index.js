export { default as display } from "./display.js"; // Switch back to one line like the others after TypeScript 3.8, see below

import generate from "./generate.js";
export { generate }; // Usually not needed, but just in case...

export { default as svgs } from "./svgs.js";
export { default as svgsIndex } from "./svgs-index.js"; // Uncomment this when TypeScript 3.8 is out. Otherwise importing and re-exporting breaks
// export type { Face } from "./generate";