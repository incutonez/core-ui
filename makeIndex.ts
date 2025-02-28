/**
 * This script is intended to generate all the index.ts files we need for exporting the library.  Because we don't have
 * a single entry point, we need to have multiple entry points, and I wanted to automate this with a script.
 * Source: https://www.reddit.com/r/vuejs/comments/1fls4pn/comment/loae1z3/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
 *
 * The alternate way of doing this would be to simply export individual files, which would require running vue-tsc after
 * running the vite build.  vue-tsc would generate the type definitions for each file.  You would need to glob the files
 * in the vite config file and pass it to the entries, like I outlined above in the reddit post.
 *
 * There are tradeoffs to both.  index files seem kind of frowned upon, even the creator of Node has expressed regret of
 * creating the initial index file concept.  index files do give the flexibility of changing the internals without
 * affecting the consumer (as they wouldn't need to change file paths if that changed, etc.).
 */
import { writeFileSync } from "fs";
import { glob } from "glob";
import { existsSync, rmSync } from "node:fs";
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
const mainIndex: string[] = ["export * as theme from \"@/theme\";"];
for (const { dir, match, name } of Dirs) {
	const output: string[] = [];
	if (existsSync(`${dir}/index.ts`)) {
		rmSync(`${dir}/index.ts`);
	}
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
