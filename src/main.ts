import "@/app.css";
import { createApp } from "vue";
import App from "@/App.vue";
import { router } from "@/router";
import theme from "@/theme.ts";

const app = createApp(App);
app.use(theme);
app.use(router);
app.mount("#app");
