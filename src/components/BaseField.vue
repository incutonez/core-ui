<template>
	<article
		class="flex min-w-0"
		:class="cls"
	>
		<FieldLabel
			v-if="!!label"
			:text="label"
			:position="labelPosition"
			:class="labelCls"
		/>
		<slot />
	</article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import FieldLabel from "@/components/FieldLabel.vue";
import { IBaseField } from "@/types/components";

const props = withDefaults(defineProps<IBaseField>(), {
	label: undefined,
	labelPosition: "left",
	labelCls: undefined,
});
const cls = computed(() => {
	return {
		"flex-col": props.labelPosition === "top",
		"items-center": props.labelPosition === "left",
	};
});
</script>
