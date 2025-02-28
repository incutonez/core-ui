// TODOJEF: Add Symbol for disabled options, and then set it up to use that in the optionDisabled fn
import type { Component, HTMLAttributes, InputTypeHTMLAttribute, ObjectEmitsOptions } from "vue";
// eslint-disable-next-line vue/prefer-import-from-vue
import { UnionToIntersection } from "@vue/shared";
import { TreeNode } from "primevue/treenode";

// Taken from Vue source, as it's not exported by them...
export type EmitFn<Options = ObjectEmitsOptions, Event extends keyof Options = keyof Options> = Options extends Array<infer V> ? (event: V, ...args: unknown[]) => void : object extends Options ? (event: string, ...args: unknown[]) => void : UnionToIntersection<{
	[key in Event]: Options[key] extends (...args: infer Args) => unknown ? (event: key, ...args: Args) => void : Options[key] extends unknown[] ? (event: key, ...args: Options[key]) => void : (event: key, ...args: unknown[]) => void;
}[Event]>;

export interface IOption {
	id?: string | number;
	name?: string;
	[key: string]: unknown;
}

export interface IFieldLabel {
	text: string;
	position?: "top" | "left";
	separator?: string;
	size?: "small" | "medium";
}

export interface IBaseField {
	label?: string;
	labelPosition?: IFieldLabel["position"];
	labelCls?: string;
}

// TODOJEF: Can this be combined into types/table.ts:ITreeNode?
export interface ITreeOption<T = string> extends TreeNode {
	children?: ITreeOption<T>[];
	data?: T;
}

/**
 * @patch https://github.com/vuejs/core/issues/8286
 * In order to use HTMLAttributes, we MUST specify the @vue-ignore comment, otherwise we get a vite error
 */
export interface IBaseButton extends /** @vue-ignore */ HTMLAttributes {
	text?: string;
	icon?: Component;
	iconCls?: string;
	disabled?: boolean;
	loading?: boolean;
	size?: "small" | "large";
	plain?: boolean;
	severity?: "normal" | "warn" | "danger" | "secondary";
}

export interface IMenuItem {
	text?: string;
	icon?: string | Component;
	iconCls?: string;
	visible?: boolean;
	click?: () => void;
	items?: IMenuItem[];
}

export interface ITableCellActions {
	actions: IBaseButton[];
}

export interface IFieldText extends IBaseField {
	showClear?: boolean;
	disabled?: boolean;
	type?: InputTypeHTMLAttribute;
	/**
	 * Number of ms to delay before firing inputEnd event
	 */
	delay?: number;
	inputWidth?: string;
	autoFocus?: boolean;
	autoSelect?: boolean;
}

export interface IFieldTextArea extends IBaseField {
	disabled?: boolean;
	/**
	 * Number of ms to delay before firing inputEnd event
	 */
	delay?: number;
	inputWidth?: string;
	autoFocus?: boolean;
	inputClasses?: string;
}

export interface IFieldDate extends IBaseField {
	min?: Date;
	max?: Date;
	timestamp?: boolean;
	modelValue?: string | number | Date;
	inputClasses?: string;
}

export interface IFieldCheckbox extends IBaseField {
	binary?: boolean;
}

export interface IFieldComboBox<TOption = IOption, TData = IOption> extends IBaseField {
	options?: TOption[];
	optionLabel?: string | ((data: TData) => string) | undefined;
	optionValue?: string | ((data: TData) => unknown) | undefined;
	disabled?: boolean;
	showClear?: boolean;
	valueOnly?: boolean;
	modelValue?: TData;
	dropdownCls?: string;
}

/**
 * PrimeVue returns a weird object when a selection is made... it's usually the key + whether that value is selected
 * or not, which is why boolean is the value.
 */
export type IFieldTreeBox = IFieldComboBox<ITreeOption, string | Record<string, boolean>>;
