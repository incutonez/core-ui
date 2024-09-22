import { IBaseField } from './BaseField.vue';
import { ITreeOption } from '../types/components';
export type IFieldTreeBoxSelection = Record<string, boolean>;
export interface IFieldTreeBox extends IBaseField {
    options?: ITreeOption[];
    optionLabel?: string | undefined;
    optionValue?: string | undefined;
    disabled?: boolean;
    showClear?: boolean;
    valueOnly?: boolean;
    modelValue?: string | IFieldTreeBoxSelection;
}
declare let __VLS_typeProps: IFieldTreeBox;
type __VLS_PublicProps = {
    "selected"?: ITreeOption;
} & typeof __VLS_typeProps;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    options: ITreeOption[];
    optionLabel: string;
    optionValue: string;
    valueOnly: boolean;
    modelValue: string | IFieldTreeBoxSelection;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
