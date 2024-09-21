interface IProps {
    entityName?: string;
    loading?: boolean;
    action?: string;
}
declare function __VLS_template(): {
    slots: {
        body?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    confirm: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<IProps> & Readonly<{
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {
    action: string;
    entityName: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
