<template>
	<BaseField v-bind="$props">
		<PrimeCheckbox
			v-model="modelValue"
			:binary="binary"
		/>
	</BaseField>
</template>

<script setup lang="ts">
import PrimeCheckbox from "primevue/checkbox";
import BaseField from "@/components/BaseField.vue";
import { IFieldCheckbox } from "@/types/components";

withDefaults(defineProps<IFieldCheckbox>(), {
	binary: true,
});
const modelValue = defineModel<boolean>("modelValue");
</script>
