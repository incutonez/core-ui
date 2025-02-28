<script setup lang="ts">
import { IconCopy, IconDelete, IconEdit } from "@/assets";
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
		<section class="flex gap-4">
			<BaseButton text="Text" />
			<BaseButton
				text="Text + Icon"
				:icon="IconDelete"
			/>
			<BaseButton :icon="IconDelete" />
		</section>
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
		<TableCellActions :actions="actions" />
	</article>
</template>
