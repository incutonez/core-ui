<template>
	<PrimeButton
		:label="text"
		:disabled="disabled"
		:size="size"
		:plain="plain"
		:loading="loading"
		:severity="severity"
	>
		<template #icon="slotProps">
			<slot name="icon">
				<Component
					:is="icon"
					:class="getIconCls(slotProps, iconCls)"
				/>
			</slot>
		</template>
	</PrimeButton>
</template>

<script setup lang="ts">
import { VNode } from "vue";
import PrimeButton from "primevue/button";
import { IBaseButton } from "@/types/components";

withDefaults(defineProps<IBaseButton>(), {
	size: "large",
	text: undefined,
	icon: undefined,
	iconCls: undefined,
	severity: "normal",
});
defineSlots<{
	icon(): VNode;
}>();

function getIconCls(slotProps: {class: string}, iconCls = "") {
	iconCls += ` ${slotProps.class}`;
	return iconCls;
}
</script>
