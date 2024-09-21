import { InputTypeHTMLAttribute } from 'vue';
import { IBaseField } from './BaseField.vue';
interface IFieldText extends IBaseField {
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
declare let __VLS_typeProps: IFieldText;
type __VLS_PublicProps = {
    modelValue?: string;
} & typeof __VLS_typeProps;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (...args: any[]) => void;
    inputEnd: (...args: any[]) => void;
    inputClear: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onBlur?: ((...args: any[]) => any) | undefined;
    onInputEnd?: ((...args: any[]) => any) | undefined;
    onInputClear?: ((...args: any[]) => any) | undefined;
}>, {
    type: InputTypeHTMLAttribute;
    showClear: boolean;
    delay: number;
    inputWidth: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
