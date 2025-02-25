<script setup lang="ts">
</script>

<template>
	<article class="flex flex-col size-full">
		<section class="flex space-x-4 p-2">
			<RouterLink
				to="/BaseButton"
				class="underline text-blue-500"
			>
				Base Button
			</RouterLink>
			<RouterLink
				to="/TableGrid"
				class="underline text-blue-500"
			>
				Table Grid
			</RouterLink>
		</section>
		<RouterView class="flex-1" />
	</article>
</template>
