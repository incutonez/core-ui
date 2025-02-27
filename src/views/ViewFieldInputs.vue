<script setup lang="ts">
import { ref } from "vue";
import { faker } from "@faker-js/faker";
import { FieldCheckbox, FieldComboBox, FieldDate, FieldText } from "@/components";
import { IOption } from "@/types";

const comboOptions: IOption[] = [];
const selectedOption = ref<IOption>();
const isChecked = ref(true);
const dateValue = ref(Date.now());

for (let i = 0; i < faker.number.int({
	min: 10,
	max: 100,
}); i++) {
	comboOptions.push({
		label: faker.person.fullName(),
		value: i,
	});
}

selectedOption.value = comboOptions[2];
</script>

<template>
	<article class="gap-4 flex flex-col">
		<FieldText
			label="Label Left"
			input-width="w-64"
		/>
		<FieldText
			label="Label Top"
			input-width="w-64"
			label-position="top"
		/>
		<FieldText
			label="Disabled"
			input-width="w-64"
			disabled
		/>
		<FieldDate
			v-model="dateValue"
			label="Date"
			class="w-64"
		/>
		<FieldComboBox
			v-model="selectedOption"
			label="Combo Box"
			dropdown-cls="max-w-64"
			:options="comboOptions"
			option-label="label"
			option-value="value"
		/>
		<FieldCheckbox
			v-model="isChecked"
			label="Checkbox"
		/>
	</article>
</template>
