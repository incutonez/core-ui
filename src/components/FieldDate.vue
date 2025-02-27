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
		return new Date(props.modelValue ?? "");
	},
	set(value) {
		if (props.timestamp) {
			if (!(value instanceof Date)) {
				value = new Date(value);
			}
			emit("update:modelValue", value.getTime());
		}
		else {
			emit("update:modelValue", value);
		}
	},
});
</script>
