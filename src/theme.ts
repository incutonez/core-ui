import { App } from "vue";
import PrimeVue from "primevue/config";
import { TailwindTheme } from "@/assets/theme";

export default {
	install(app: App) {
		app.use(PrimeVue, {
			unstyled: true,
			pt: TailwindTheme,
		});
	},
};
