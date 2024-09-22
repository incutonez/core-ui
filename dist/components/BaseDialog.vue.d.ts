interface IProps {
    title?: string;
    modal?: boolean;
    bodyCls?: string;
}
declare let __VLS_typeProps: IProps;
declare function close(): void;
declare function cancel(): void;
type __VLS_PublicProps = {
    "modelValue"?: boolean;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: {
        header?(_: {}): any;
        body?(_: {}): any;
        footer?(_: {}): any;
        beforeCancel?(_: {}): any;
        afterCancel?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {
    close: typeof close;
    cancel: typeof cancel;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    "click-cancel": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
    "onClick-cancel"?: ((...args: any[]) => any) | undefined;
}>, {
    title: string;
    modal: boolean;
    bodyCls: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
