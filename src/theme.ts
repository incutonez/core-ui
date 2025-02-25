import "@/style.css";
import { App } from "vue";
import PrimeVue from "primevue/config";

export default {
	install(app: App) {
		app.use(PrimeVue, {
			theme: "none",
		});
	},
};
