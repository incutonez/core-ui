<script setup lang="ts">
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
		<section class="flex-1 overflow-hidden p-4">
			<RouterView />
		</section>
	</article>
</template>
