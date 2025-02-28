<template>
	<BaseField v-bind="$props">
		<span>{{ value }}</span>
	</BaseField>
</template>

<script setup lang="ts">
import BaseField from "@/components/BaseField.vue";
import { IBaseField } from "@/types/components";

interface IProps extends IBaseField {
	value?: string | number | Date | boolean;
}
defineProps<IProps>();
</script>
