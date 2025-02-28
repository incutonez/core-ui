<template>
	<BaseField v-bind="$props">
		<PrimeComponent
			v-model="input"
			class="flex-1"
			:min-date="min"
			:max-date="max"
			:input-class="inputClasses"
		/>
	</BaseField>
</template>

<script setup lang="ts">
import { computed } from "vue";
import PrimeComponent from "primevue/datepicker";
import BaseField from "@/components/BaseField.vue";
import { IFieldDate } from "@/types/components";

const props = defineProps<IFieldDate>();
const emit = defineEmits(["update:modelValue"]);
const input = computed({
	get() {
		const { modelValue } = props;
		if (modelValue instanceof Date) {
			return modelValue;
		}
		return modelValue ? new Date(modelValue) : undefined;
	},
	set(value) {
		if (props.timestamp) {
			if (value && !(value instanceof Date)) {
				value = new Date(value);
			}
			emit("update:modelValue", value?.getTime());
		}
		else {
			emit("update:modelValue", value);
		}
	},
});
</script>
