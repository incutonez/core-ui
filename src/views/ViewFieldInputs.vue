<script setup lang="ts">
import { ref } from "vue";
import { faker } from "@faker-js/faker";
import {
	FieldCheckbox,
	FieldComboBox,
	FieldDate,
	FieldDisplay,
	FieldNumber,
	FieldText,
	FieldTextArea, FieldTreeBox,
} from "@/components";
import { IOption, ITreeOption } from "@/types";

const comboOptions: IOption[] = [];
const treeComboOptions: ITreeOption[] = generateTreeOption();
const selectedOption = ref<IOption>();
const selectedTreeOption = ref<ITreeOption>();
const isChecked = ref(true);
const textAreaValue = ref("");
const dateValue = ref("");
const numberValue = ref(10);
const comboLength = faker.number.int({
	min: 10,
	max: 100,
});

for (let i = 0; i < comboLength; i++) {
	comboOptions.push({
		label: faker.person.fullName(),
		value: i,
	});
}

selectedOption.value = comboOptions[2];

function generateTreeOption(treeComboLength = faker.number.int({
	min: 10,
	max: 100,
}), depth = 0) {
	const treeOptions: ITreeOption[] = [];
	if (depth < 6) {
		for (let i = 0; i < treeComboLength; i++) {
			const children = generateTreeOption(faker.number.int({
				min: 0,
				max: 10,
			}), depth + 1);
			treeOptions.push({
				children,
				label: faker.person.fullName(),
				key: faker.string.uuid(),
				selectable: !children.length,
			});
		}
	}
	return treeOptions;
}
</script>

<template>
	<article class="gap-4 flex flex-col">
		<FieldText
			label="Label Left"
			input-width="w-64"
		/>
		<section class="flex gap-4">
			<FieldText
				label="Label Top"
				input-width="w-64"
				label-position="top"
			/>
			<FieldCheckbox
				v-model="isChecked"
				label="Checkbox"
				label-position="top"
			/>
		</section>
		<FieldText
			label="Disabled"
			input-width="w-64"
			disabled
		/>
		<FieldNumber
			v-model="numberValue"
			label="Number"
			class="w-64"
		/>
		<FieldDate
			v-model="dateValue"
			label="Date"
			class="w-64"
		/>
		<FieldDisplay
			:value="dateValue"
			label="Display"
		/>
		<FieldTextArea
			v-model="textAreaValue"
			label="Text Area"
			label-position="top"
			input-width="w-64"
		/>
		<FieldComboBox
			v-model="selectedOption"
			label="Combo Box"
			dropdown-cls="max-w-64"
			:options="comboOptions"
			option-label="label"
			option-value="value"
		/>
		<FieldTreeBox
			v-model="selectedTreeOption"
			:options="treeComboOptions"
			label="Tree"
		/>
	</article>
</template>
