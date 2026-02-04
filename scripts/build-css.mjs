import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFilePath);
const rootDirectory = path.resolve(currentDirectory, "..");
const manifestPath = path.join(rootDirectory, "styles", "mono.parts.json");
const outputPath = path.join(rootDirectory, "mono.css");

const manifestRaw = await readFile(manifestPath, "utf8");
const cssParts = JSON.parse(manifestRaw);
const partContents = await Promise.all(
  cssParts.map(async (cssPart) => {
    const partPath = path.join(rootDirectory, cssPart);
    return readFile(partPath, "utf8");
  })
);
const normalizedContents = partContents.map((content) =>
  content.endsWith("\n") ? content : `${content}\n`
);
const outputContent = normalizedContents.join("\n");

await writeFile(outputPath, outputContent);
