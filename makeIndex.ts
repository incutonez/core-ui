import { writeFileSync } from "fs";
import { glob } from "glob";
import path from "path";

const Dirs = [{
	dir: "./src/components/",
	match: "**/*",
	name: "components",
}, {
	dir: "./src/assets/",
	match: "**/*.vue",
	name: "icons",
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
for (const { dir, match, name } of Dirs) {
	const output: string[] = [];
	const files = glob.sync(`${dir}${match}`);
	for (const file of files) {
		const extension = path.extname(file);
		const componentName = path.basename(file, extension);
		if (extension === ".ts") {
			output.push(`export * from "${file.replace(SrcRe, "@").replace(/\\/g, "/").replace(extension, "")}";`);
		}
		else {
			output.push(`export { default as ${componentName} } from "${file.replace(SrcRe, "@").replace(/\\/g, "/")}";`);
		}
	}
	writeFileSync(`src/${name}.ts`, output.join("\n"));
}
