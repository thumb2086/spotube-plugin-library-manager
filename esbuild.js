import esbuild from "esbuild";
import fs from "fs/promises";
import path from "path";
import JSZip from "jszip";

const args = process.argv.slice(2);

async function build() {
  await esbuild
    .build({
      entryPoints: ["src/index.ts"],
      outfile: "dist/bundle.js",
      format: "cjs",
      bundle: true,
      minify: true,
      platform: "browser",
      target: "es2021",
    })
    .catch(() => process.exit(1));

  const archiveDir = path.join(process.cwd(), "build");
  const pluginJsonPath = path.join(process.cwd(), "plugin.json");
  const pluginLogoPath = path.join(process.cwd(), "assets", "logo.png");
  const pluginJsPath = path.join(process.cwd(), "dist", "bundle.js");
  const pluginOutPath = path.join(archiveDir, "plugin.smplug");

  await fs.mkdir(archiveDir, { recursive: true });

  const zip = new JSZip();
  zip.file("plugin.json", await fs.readFile(pluginJsonPath));
  zip.file("logo.png", await fs.readFile(pluginLogoPath));
  zip.file("plugin.js", await fs.readFile(pluginJsPath));

  const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });
  await fs.writeFile(pluginOutPath, zipBuffer);
}

build();
