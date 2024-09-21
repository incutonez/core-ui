import vue from "@vitejs/plugin-vue";
import { glob } from "glob";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgLoader from "vite-svg-loader";

export default defineConfig({
	base: "/core-ui/",
	plugins: [vue(), svgLoader(), dts({
		copyDtsFiles: true,
		tsconfigPath: "./tsconfig.build.json",
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
			entry: Object.fromEntries(glob.sync("./src/indices/**/*.ts").map((file) => {
				return [file.replace("src\\indices\\", "").replace(/\.ts$/, "").replace(/\\/g, "/"), file];
			})),
			formats: ["es"],
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				dir: "dist",
				format: "es",
			},
		},
	},
});
