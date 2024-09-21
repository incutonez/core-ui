import { ITableGrid } from '../types/table';
declare function reloadRecords(): Promise<void>;
declare function __VLS_template(): {
    slots: {
        addEntity?(_: {}): any;
        headerEnd?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ITableGrid<any, any>, {
    loadRecords: (loadCount?: number) => Promise<void>;
    reloadRecords: typeof reloadRecords;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    load: () => any;
}, string, import('vue').PublicProps, Readonly<ITableGrid<any, any>> & Readonly<{
    onLoad?: (() => any) | undefined;
}>, {
    showHeader: boolean;
    showHoverRow: boolean;
    showLinesColumn: boolean;
    showLinesRow: boolean;
    showStripedRows: boolean;
    showRowsPerPage: boolean;
    showSearch: boolean;
    showPagination: boolean;
    showAddEntity: boolean;
    multiSelect: boolean;
    columnsResize: boolean;
    columnsReorder: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
