<script setup lang="ts" generic="TOptions = IOption[], TData = IOption">
import { computed, watch } from "vue";
import PrimeDropdown from "primevue/select";
import BaseField from "@/components/BaseField.vue";
import { IFieldComboBox, IOption } from "@/types/components";
import { extractBaseFieldProps, isObject } from "@/utils/common";

const props = withDefaults(defineProps<IFieldComboBox<TOptions, TData>>(), {
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
	set(value: TData) {
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
