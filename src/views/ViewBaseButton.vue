<script setup lang="ts">
import { IconCopy, IconDelete, IconEdit, IconPageLeft } from "@/assets";
import { BaseButton, TableCellActions } from "@/components";
import { IBaseButton } from "@/types";

const actions: IBaseButton[] = [{
	icon: IconEdit,
	title: "Edit",
}, {
	icon: IconCopy,
	title: "Copy",
}, {
	icon: IconDelete,
	title: "Delete",
}];
</script>

<template>
	<article class="flex flex-col gap-4 items-start">
		<BaseButton text="Normal" />
		<BaseButton
			text="Disabled"
			disabled
		/>
		<BaseButton
			text="Warn"
			severity="warn"
		/>
		<BaseButton
			text="Danger"
			severity="danger"
		/>
		<BaseButton
			text="Secondary"
			severity="secondary"
		/>
		<BaseButton :icon="IconPageLeft" />
		<TableCellActions :actions="actions" />
	</article>
</template>
