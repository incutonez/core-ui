<script setup lang="ts">
import { IconCopy, IconDelete, IconEdit, IconImport } from "@/assets";
import { BaseButton, TableCellActions, TableGrid } from "@/components";
import { ITableCellActions, ITableColumn } from "@/types";

export interface IUser {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	birthDate?: unknown;
	gender: string;
}

const records = [{
	id: 1,
	firstName: "Karel",
	lastName: "Hounsom",
	email: "khounsom0@sun.com",
	gender: "Male",
	ipAddress: "30.28.250.196",
}, {
	id: 2,
	firstName: "Edgar",
	lastName: "Scrivener",
	email: "escrivener1@hud.gov",
	gender: "Male",
	ipAddress: "223.254.37.231",
}, {
	id: 3,
	firstName: "Dukie",
	lastName: "Brooksby",
	email: "dbrooksby2@ucoz.ru",
	gender: "Male",
	ipAddress: "223.67.182.170",
}];

const columns: ITableColumn<IUser>[] = [{
	lock: "left",
	showMenu: false,
	cellDisplay(record, data) {
		return data.indexOf(record) + 1;
	},
}, {
	lock: "left",
	title: "Actions",
	titleAlign: "center",
	showMenu: false,
	cellComponent: TableCellActions,
	cellParams(record: IUser) {
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
					alert(`Delete User ${record.firstName} ${record.lastName}`);
				},
			}],
		} as ITableCellActions;
	},
}, {
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
}];

function onClickImportUsers() {

}
</script>

<template>
	<TableGrid
		ref="usersGrid"
		:columns="columns"
		:records="records"
		title="Users"
	>
		<template #headerEnd>
			<BaseButton
				text="Import"
				:icon="IconImport"
				@click="onClickImportUsers"
			/>
		</template>
	</TableGrid>
</template>
