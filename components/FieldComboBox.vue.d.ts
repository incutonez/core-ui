import { IBaseField } from './BaseField.vue';
export interface IFieldComboBox extends IBaseField {
    options?: any[];
    optionLabel?: string | ((data: any) => string) | undefined;
    optionValue?: string | ((data: any) => any) | undefined;
    disabled?: boolean;
    showClear?: boolean;
    valueOnly?: boolean;
    modelValue?: any;
}
declare let __VLS_typeProps: IFieldComboBox;
type __VLS_PublicProps = {
    "selected"?: unknown;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: {
        header?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    options: any[];
    optionLabel: string | ((data: any) => string);
    optionValue: string | ((data: any) => any);
    valueOnly: boolean;
    modelValue: any;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
