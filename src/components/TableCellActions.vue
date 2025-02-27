<template>
	<article class="flex gap-1">
		<BaseButton
			v-for="(action, index) in actions"
			:key="index"
			plain
			class="w-auto hover:bg-sky-300"
			size="small"
			v-bind="action"
		/>
	</article>
</template>

<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import { ITableCellActions } from "@/types/components";

defineProps<ITableCellActions>();
</script>
