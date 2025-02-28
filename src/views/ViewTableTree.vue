<script setup lang="ts">
import { onMounted, ref, unref } from "vue";
import { faker } from "@faker-js/faker";
import { IconImport } from "@/assets";
import { BaseButton } from "@/components";
import TableTree from "@/components/TableTree.vue";
import { ITableColumn, ITreeNode } from "@/types";
import { capitalizeWords } from "@/utils";

const fields = ["fieldOne", "fieldTwo", "FieldThree", "fieldFour"];
const options = generateTreeOption();
const treeCmp = ref<InstanceType<typeof TableTree>>();
const columns: ITableColumn[] = fields.map((field, index) => {
	return {
		field,
		title: capitalizeWords(field),
		expandable: !index,
	};
});

function generateTreeOption(length = faker.number.int({
	min: 10,
	max: 50,
}), depth = 0) {
	const treeOptions: ITreeNode[] = [];
	if (depth < 4) {
		for (let i = 0; i < length; i++) {
			const children = generateTreeOption(faker.number.int({
				min: 0,
				max: 10,
			}), depth + 1);
			const data: Record<string, string> = {};
			for (const field of fields) {
				data[field] = faker.word.words({
					count: {
						min: 1,
						max: 10,
					},
				});
			}
			treeOptions.push({
				data,
				children,
				key: faker.string.uuid(),
			});
		}
	}
	return treeOptions;
}

onMounted(() => {
	const $treeCmp = unref(treeCmp);
	if ($treeCmp) {
		$treeCmp.records = options;
	}
});
</script>

<template>
	<article class="flex size-full">
		<TableTree
			ref="treeCmp"
			title="Table Tree"
			:columns="columns"
			remote
			:remote-max="20"
		>
			<template #headerEnd>
				<BaseButton
					text="Import"
					:icon="IconImport"
				/>
			</template>
		</TableTree>
	</article>
</template>
