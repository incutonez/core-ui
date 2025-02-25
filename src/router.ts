import { createRouter, createWebHashHistory } from "vue-router";
import ViewBaseButton from "@/views/ViewBaseButton.vue";
import ViewTableGrid from "@/views/ViewTableGrid.vue";

export const RouteBaseButton = "route-base-button";

export const RouteTableGrid = "route-table-grid";

export const routes = [{
	path: "/BaseButton",
	name: RouteBaseButton,
	component: ViewBaseButton,
}, {
	path: "/TableGrid",
	name: RouteTableGrid,
	component: ViewTableGrid,
}];

export const router = createRouter({
	routes,
	history: createWebHashHistory(),
});
