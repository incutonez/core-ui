import vue from "@vitejs/plugin-vue";
import { glob } from "glob";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgLoader from "vite-svg-loader";

const entries: Record<string, string> = {
	theme: "src/theme.ts",
};
glob.sync("src/components/**/*.ts").forEach((file) => {
	entries[file.replace(/\\/g, "/").replace("src/", "").replace(".ts", "")] = file;
});
glob.sync("src/utils/**/*.ts").forEach((file) => {
	entries[file.replace(/\\/g, "/").replace("src/", "").replace(".ts", "")] = file;
});
glob.sync("src/types/**/*.ts").forEach((file) => {
	entries[file.replace(/\\/g, "/").replace("src/", "").replace(".ts", "")] = file;
});
glob.sync("src/assets/**/*.ts").forEach((file) => {
	entries[file.replace(/\\/g, "/").replace("src/", "").replace(".ts", "")] = file;
});

export default defineConfig({
	base: "/core-ui/",
	plugins: [vue(), svgLoader(), dts({
		tsconfigPath: "tsconfig.build.json",
	})],
	resolve: {
		alias: [{
			find: "@",
			replacement: path.resolve(path.resolve(), "./src"),
		}, {
			/**
			 * Apparently needed for mime-types package
			 * Source: https://github.com/jshttp/mime-types/issues/124
			 */
			find: "path",
			replacement: "path-browserify",
		}],
	},
	build: {
		emptyOutDir: true,
		outDir: "dist",
		lib: {
			entry: {
				"components/index": "src/components/index.ts",
				"types/index": "src/types/index.ts",
				"utils/index": "src/utils/index.ts",
				"assets/index": "src/assets/index.ts",
				tailwind: "src/tailwind.config.ts",
				theme: "src/theme.ts",
				index: "src/index.ts",
			},
			formats: ["es"],
		},
		rollupOptions: {
			external: ["vue"],
		},
	},
});
