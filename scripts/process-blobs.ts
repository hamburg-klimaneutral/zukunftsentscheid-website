#!/usr/bin/env node

import { promises as fs } from "fs";
import path from "path";
import { load } from "cheerio";

const [, , inDirArg, outFileArg] = process.argv;
const inDir = inDirArg ?? "blobs";
const outDir = outFileArg ?? "public/blobs";

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

for (const [, filename] of svgFiles.entries()) {
  const src = await fs.readFile(path.join(inDir, filename), "utf8");
  const id = filename.split("=blob")[1].split(".svg")[0];
  const $ = load(src, { xmlMode: true }); // ✅ root function

  const $path = $("path:first")!;
  $path.removeAttr("fill");

  const clip = `<symbol id="${id}" viewBox="0 0 120 120">\n${$path.toString()}\n</symbol>`;
  const use = `<use href="#${id}" fill="white"/>`;
  const output = `<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">${clip}\n${use}\n</svg>`;

  await fs.writeFile(`${outDir}/${id}.svg`, output, "utf8");
}

console.log(`✅ Processed ${svgFiles.length} files`);
