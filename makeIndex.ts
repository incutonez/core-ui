import { mkdirSync, writeFileSync } from "fs";
import { glob } from "glob";
import { existsSync } from "node:fs";

// TODOJEF: Need to include loading the theme in PrimeVue
const Dirs = [{
	dir: "./src/components/",
	match: "**/*",
	name: "components",
}, {
	dir: "./src/assets/",
	match: "**/*.vue",
	name: "assets",
}, {
	dir: "./src/types/",
	match: "**/*",
	name: "types",
}, {
	dir: "./src/utils/",
	match: "**/*",
	name: "utils",
}];
const SrcRe = /^src/;
const ComponentNameRe = /(\w+)\.(\w+)$/;
for (const { dir, match, name } of Dirs) {
	const files = glob.sync(`${dir}${match}`);
	for (const file of files) {
		let output = "";
		if (file.endsWith("index.ts")) {
			continue;
		}
		const [, componentName, extension] = file.match(ComponentNameRe);
		if (extension === "ts") {
			output = `export * from "${file.replace(SrcRe, "@").replace(/\\/g, "/")}";`;
		}
		else {
			output = `export { default as ${componentName} } from "${file.replace(SrcRe, "@").replace(/\\/g, "/")}";`;
		}
		const outDir = `./src/indices/${name}/`;
		if (!existsSync(outDir)) {
			mkdirSync(outDir, {
				recursive: true,
			});
		}
		writeFileSync(`${outDir}${componentName}.ts`, output);
	}
}
