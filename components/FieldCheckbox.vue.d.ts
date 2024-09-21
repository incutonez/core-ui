import { IBaseField } from './BaseField.vue';
export interface IFieldCheckbox extends IBaseField {
    binary?: boolean;
}
declare let __VLS_typeProps: IFieldCheckbox;
type __VLS_PublicProps = {
    "modelValue"?: boolean;
} & typeof __VLS_typeProps;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
}>, {
    binary: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
