<template>
	<BaseField
		v-bind="baseFieldProps"
		class="flex-start"
	>
		<PrimeDropdown
			v-bind="dropdownProps"
			v-model="model"
			class="flex-1 overflow-hidden"
		>
			<template #header>
				<slot name="header" />
			</template>
			<template #footer>
				<slot name="footer" />
			</template>
		</PrimeDropdown>
	</BaseField>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import PrimeDropdown from "primevue/select";
import BaseField from "@/components/BaseField.vue";
import { IBaseField } from "@/types/components";
import { extractBaseFieldProps, isObject } from "@/utils/common";

export interface IFieldComboBox extends IBaseField {
	options?: any[];
	optionLabel?: string | ((data: any) => string) | undefined;
	optionValue?: string | ((data: any) => any) | undefined;
	disabled?: boolean;
	showClear?: boolean;
	valueOnly?: boolean;
	modelValue?: any;
	dropdownCls?: string;
}

const props = withDefaults(defineProps<IFieldComboBox>(), {
	optionLabel: "name",
	optionValue: "id",
	valueOnly: true,
	options: () => [],
	modelValue: undefined,
	dropdownCls: undefined,
});
const emit = defineEmits(["update:modelValue"]);
const model = computed({
	get() {
		const { modelValue } = props;
		if (isObject(modelValue)) {
			return modelValue[props.optionValue as keyof typeof modelValue];
		}
		return modelValue;
	},
	set(value) {
		emit("update:modelValue", props.valueOnly ? value : getSelected(value));
	},
});
const selected = defineModel<unknown>("selected");
const baseFieldProps = computed(() => extractBaseFieldProps(props));
const dropdownProps = computed(() => {
	const { options, optionValue, optionLabel, valueOnly, disabled, showClear, dropdownCls } = props;

	return {
		options,
		optionValue,
		optionLabel,
		valueOnly,
		disabled,
		showClear,
		class: dropdownCls,
	};
});

function getSelected(value = props.modelValue) {
	const { optionValue } = props;
	return props.options.find((option) => option[optionValue as keyof typeof option] === value);
}

watch(() => props.modelValue, () => selected.value = getSelected(), {
	immediate: true,
});
</script>
