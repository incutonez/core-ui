import vue from "@vitejs/plugin-vue";
import { glob } from "glob";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgLoader from "vite-svg-loader";

export default defineConfig({
	base: "/core-ui/",
	plugins: [vue(), svgLoader(), dts({
		rollupTypes: true,
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
				index: "src/index.ts",
			},
			formats: ["es"],
		},
		rollupOptions: {
			external: ["vue"],
		},
	},
});
