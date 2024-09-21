import { IBaseField } from './BaseField.vue';
export interface IFieldDate extends IBaseField {
    min?: Date;
    max?: Date;
    timestamp?: boolean;
    modelValue?: string | number;
}
declare const _default: import('vue').DefineComponent<IFieldDate, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<IFieldDate> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
