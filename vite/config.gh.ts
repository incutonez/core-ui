import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), svgLoader(), tailwindcss()],
	base: "/core-ui/",
	build: {
		outDir: "dist-gh",
	},
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
});
