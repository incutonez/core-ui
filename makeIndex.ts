import { writeFileSync } from "fs";
import { glob } from "glob";

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
for (const { dir, match } of Dirs) {
	const files = glob.sync(`${dir}${match}`);
	for (const file of files) {
		let output = "";
		const [, componentName, extension] = file.match(ComponentNameRe);
		if (extension === "ts") {
			continue;
		}
		output = `export { default as ${componentName} } from "${file.replace(SrcRe, "@").replace(/\\/g, "/")}";`;
		writeFileSync(`${dir}${componentName}.ts`, output);
	}
}
