import { createRouter, createWebHashHistory } from "vue-router";
import ViewBaseButton from "@/views/ViewBaseButton.vue";
import ViewFieldInputs from "@/views/ViewFieldInputs.vue";
import ViewHome from "@/views/ViewHome.vue";
import ViewTableGrid from "@/views/ViewTableGrid.vue";
import ViewTableTree from "@/views/ViewTableTree.vue";

export const RouteBaseButton = "route-base-button";

export const RouteFieldInputs = "route-field-inputs";

export const RouteTableGrid = "route-table-grid";

export const RouteTableTree = "route-table-tree";

export const routes = [{
	path: "/",
	name: "route-home",
	component: ViewHome,
}, {
	path: "/BaseButton",
	name: RouteBaseButton,
	component: ViewBaseButton,
}, {
	path: "/FieldInputs",
	name: RouteFieldInputs,
	component: ViewFieldInputs,
}, {
	path: "/TableGrid",
	name: RouteTableGrid,
	component: ViewTableGrid,
}, {
	path: "/TableTree",
	name: RouteTableTree,
	component: ViewTableTree,
}];

export const router = createRouter({
	routes,
	history: createWebHashHistory(),
});
