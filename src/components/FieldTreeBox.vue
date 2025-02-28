<script setup lang="ts">
import { computed, ref } from "vue";
import PrimeTreeSelect from "primevue/treeselect";
import BaseField from "@/components/BaseField.vue";
import { ITreeNode } from "@/types";
import { IFieldTreeBox, ITreeOption } from "@/types/components";
import { extractBaseFieldProps, isEmpty } from "@/utils/common";

const props = withDefaults(defineProps<IFieldTreeBox>(), {
	optionLabel: "label",
	optionValue: "key",
	valueOnly: true,
	modelValue: undefined,
	options: () => [],
});
const emit = defineEmits(["update:modelValue"]);
/* We use any here because we can't use InstanceType<typeof PrimeTreeSelect>, as it doesn't expose $refs, which
 * we need access to for the tree component, so we can toggle nodes at will */
const cmpRoot = ref<any>();
const baseFieldProps = computed(() => extractBaseFieldProps(props));
const selected = defineModel<ITreeOption>("selected");
const model = computed({
	get() {
		const { modelValue } = props;
		if (typeof modelValue === "string") {
			// The TreeSelect expects a specific key-value pair, which is weird
			return {
				[modelValue]: true,
			};
		}
		return modelValue;
	},
	set(value) {
		emit("update:modelValue", value);
		const selections = Object.keys(value ?? {});
		selected.value = getSelected(props.options, selections[0]);
	},
});
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

function getSelected(options: ITreeOption[], value: string): ITreeOption | undefined {
	const { optionValue } = props;
	return options.find((option) => {
		if (option[optionValue as keyof typeof option] === value) {
			return option;
		}
		else if (option.children) {
			return getSelected(option.children, value);
		}
	});
}

function toggleNode(node: ITreeNode) {
	const $tree = cmpRoot.value?.$refs.tree;
	if ($tree) {
		$tree.onNodeToggle(node);
	}
}

function onNodeSelect(node: ITreeNode) {
	if (!isEmpty(node.children) && node.selectable === false) {
		toggleNode(node);
	}
}
</script>

<template>
	<BaseField v-bind="baseFieldProps">
		<PrimeTreeSelect
			ref="cmpRoot"
			v-bind="dropdownProps"
			v-model="model"
			@click="onNodeSelect"
		>
			<template #option="{node}">
				<span
					class="flex-1"
					@click.prevent="onNodeSelect(node)"
				>{{ node[optionLabel as keyof typeof node] }}</span>
			</template>
		</PrimeTreeSelect>
	</BaseField>
</template>
