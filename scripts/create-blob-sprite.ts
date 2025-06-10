#!/usr/bin/env node

import { promises as fs } from "fs";
import path from "path";
import { load } from "cheerio";

const [, , inDirArg, outFileArg] = process.argv;
const inDir = inDirArg ?? "blobs";
const outFile = outFileArg ?? "blob-sprite.svg";

// 1. gather SVG filenames
const dirEntries = await fs.readdir(inDir, { withFileTypes: true });
const svgFiles = dirEntries
  .filter((d) => d.isFile() && d.name.toLowerCase().endsWith(".svg"))
  .map((d) => d.name)
  .sort();

if (!svgFiles.length) {
  console.error(`⛔  No *.svg files found in ${inDir}`);
  process.exit(1);
}

// 2. turn each file into a <symbol>
const symbols = [];

for (const [, filename] of svgFiles.entries()) {
  const src = await fs.readFile(path.join(inDir, filename), "utf8");
  const id = filename.split("=")[1].split(".svg")[0];
  const $ = load(src, { xmlMode: true }); // ✅ root function

  const $path = $("path:first")!;
  $path.removeAttr("fill");

  symbols.push(
    `<symbol id="${id}" viewBox="0 0 120 120">\n${$path.toString()}\n</symbol>`
  );
}

// 3. write the sprite
const sprite =
  `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n` +
  symbols.join("\n") +
  `\n</svg>\n`;

await fs.writeFile(outFile, sprite, "utf8");
console.log(`✅  Sprite built with ${symbols.length} symbols → ${outFile}`);
