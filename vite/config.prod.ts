import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";
import svgLoader from "vite-svg-loader";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	base: "/core-ui/",
	plugins: [vue(), svgLoader(), tailwindcss(), dts({
		tsconfigPath: "tsconfig.build.json",
	}), cssInjectedByJsPlugin()],
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
