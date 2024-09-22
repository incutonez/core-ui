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
				theme: "src/theme.ts",
				components: "src/components.ts",
				types: "src/types.ts",
				utils: "src/utils.ts",
				icons: "src/icons.ts",
			},
			formats: ["es"],
		},
		rollupOptions: {
			external: ["vue"],
		},
	},
});
