<script setup lang="ts">
import { ref } from "vue";
import { faker } from "@faker-js/faker";
import { IconCopy, IconDelete, IconEdit, IconImport } from "@/assets";
import { BaseButton, DialogConfirm, TableGrid } from "@/components";
import { ITableCellActions, ITableColumn, ITableLoad } from "@/types";
import { sleep, useColumnActions, useColumnIndex } from "@/utils";

export interface IUser {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	birthDate?: unknown;
	gender: string;
}

const LocalUsers: IUser[] = [];
const selectedUser = ref<IUser>();
const deleting = ref(false);
const showDeleteDialog = ref(false);
const columns: ITableColumn<IUser>[] = [
	useColumnIndex(),
	useColumnActions((record: IUser): ITableCellActions => {
		return {
			actions: [{
				title: "Edit",
				icon: IconEdit,
				onClick() {
					alert(`Edit User ${record.firstName} ${record.lastName}`);
				},
			}, {
				title: "Copy",
				icon: IconCopy,
				async onClick() {
					alert(`Copy User ${record.firstName} ${record.lastName}`);
				},
			}, {
				title: "Delete",
				icon: IconDelete,
				onClick() {
					selectedUser.value = record;
					showDeleteDialog.value = true;
				},
			}],
		};
	}), {
		field: "firstName",
		title: "First Name",
		cls: "min-w-32",
		lock: "left",
	}, {
		field: "lastName",
		title: "Last Name",
		cls: "min-w-32",
		lock: "left",
	}, {
		field: "phone",
		title: "Phone",
	}, {
		field: "email",
		title: "Email",
	}, {
		field: "gender",
		title: "Gender",
	}, {
		field: "birthDate",
		title: "Birth Date",
	}, {
		cellComponent: BaseButton,
		cellParams(data: IUser) {
			return {
				text: data.email,
			};
		},
	},
];

async function loadUsers(request: ITableLoad) {
	for (let i = request.start; i < request.limit + request.start; i++) {
		LocalUsers[i] ??= {
			id: faker.string.uuid(),
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			email: faker.internet.email(),
			phone: faker.phone.number(),
			birthDate: faker.date.birthdate().getTime(),
			gender: faker.person.gender(),
		};
	}
	return {
		total: LocalUsers.length < 500 ? 500 : LocalUsers.length,
		data: LocalUsers.slice(request.start, request.start + request.limit),
	};
}

function onClickImportUsers() {
}

async function onDeleteUser() {
	deleting.value = true;
	// Simulate lag to show deleting spinner
	await sleep(2000);
	deleting.value = false;
	showDeleteDialog.value = false;
}
</script>

<template>
	<article class="flex size-full">
		<TableGrid
			title="Users"
			:columns="columns"
			:load="loadUsers"
			:show-add-entity="false"
			remote
			:remote-max="15"
		>
			<template #headerEnd>
				<BaseButton
					text="Import"
					:icon="IconImport"
					@click="onClickImportUsers"
				/>
			</template>
		</TableGrid>
		<DialogConfirm
			v-model="showDeleteDialog"
			action="Delete"
			:entity-name="selectedUser?.firstName"
			:loading="deleting"
			@confirm="onDeleteUser"
		/>
	</article>
</template>
