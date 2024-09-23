import { writeFileSync } from "fs";
import { glob } from "glob";
import { rmSync } from "node:fs";
import path from "path";

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
const mainIndex: string[] = [];
for (const { dir, match, name } of Dirs) {
	const output: string[] = [];
	rmSync(`${dir}/index.ts`);
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
	writeFileSync(`${dir}/index.ts`, output.join("\n"));
	mainIndex.push(`export * as ${name} from "@/${name}/index";`);
}
writeFileSync("src/index.ts", mainIndex.join("\n"));
