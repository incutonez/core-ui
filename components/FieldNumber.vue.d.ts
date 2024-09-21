import { IBaseField } from './BaseField.vue';
interface IFieldNumber extends IBaseField {
    disabled?: boolean;
    /**
     * Number of ms to delay before firing inputEnd event
     */
    delay?: number;
    inputWidth?: string;
    inputCls?: string;
    min?: number;
    max?: number;
    decimalPlaces?: number;
}
declare let __VLS_typeProps: IFieldNumber;
type __VLS_PublicProps = {
    modelValue?: number;
} & typeof __VLS_typeProps;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    inputEnd: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onInputEnd?: ((...args: any[]) => any) | undefined;
}>, {
    label: string;
    delay: number;
    inputWidth: string;
    inputCls: string;
    min: number;
    max: number;
    decimalPlaces: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
