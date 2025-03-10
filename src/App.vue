<script setup lang="ts">
import { version } from "@/../package.json";
import { routes } from "@/router.ts";

const pathSplitRe = /[A-Z][a-z]+/g;

function getPathName(path: string) {
	if (path === "/") {
		return "Home";
	}
	return path.replace("/", "").match(pathSplitRe)!.join(" ");
}
</script>

<template>
	<article class="flex flex-col size-full">
		<section class="flex space-x-4 p-2">
			<RouterLink
				v-for="route in routes"
				:key="route.path"
				:to="route.path"
				class="underline text-blue-500"
			>
				{{ getPathName(route.path) }}
			</RouterLink>
		</section>
		<main class="flex-1 p-2 overflow-hidden">
			<RouterView />
		</main>
		<section class="flex p-2">
			<span class="ml-auto">v{{ version }}</span>
		</section>
	</article>
</template>
