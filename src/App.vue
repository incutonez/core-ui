<script setup lang="ts">
import { routes } from "@/router.ts";

const pathSplitRe = /[A-Z][a-z]+/g;
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
				{{ route.path.replace("/", "").match(pathSplitRe)!.join(" ") }}
			</RouterLink>
		</section>
		<section class="flex-1 overflow-hidden p-4">
			<RouterView />
		</section>
	</article>
</template>
