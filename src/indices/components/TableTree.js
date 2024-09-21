import { mergeProps as p, openBlock as a, createElementBlock as f, createBlock as b, resolveDynamicComponent as O, createCommentVNode as h, toDisplayString as x, resolveComponent as K, createElementVNode as C, normalizeProps as Ue, resolveDirective as ft, withDirectives as ht, Fragment as z, normalizeClass as w, withCtx as g, createTextVNode as bt, renderList as D, renderSlot as y, createSlots as fe, defineComponent as mt, ref as yt, watch as Ce, unref as m, isRef as gt, createVNode as B } from "vue";
import { F as Pe, _ as vt, a as se } from "../../../FieldComboBox.vue_vue_type_script_setup_true_lang-CAyE7HkZ.js";
import { s as St } from "../../../index-ByOyn7eV.js";
import { B as wt, _ as kt, h as q, r as I, j as T, k as Ct, l as ze, m as Oe, n as Te, o as Pt, p as Ve, q as te, t as N, u as zt, U as Ot, s as Q, v as me, w as ye, x as Me, y as H, f as ce } from "../../../index-CJIVb0yO.js";
import { s as We } from "../../../index-DZMkFJAM.js";
import { s as Tt, a as xe, b as Ke, c as Ee } from "../../../index-BKqrnQny.js";
import { a as Mt } from "../../../index-BShP_Z4A.js";
import { s as xt } from "../../../index-BI3EJS6X.js";
import { s as Kt } from "../../../index-3nHrF7Me.js";
import { s as Et } from "../../../index-CbPBlwqd.js";
import { s as jt, a as It } from "../../../index-CFoki49b.js";
import { R as Rt } from "../../../index-DeU8Bpar.js";
import { _ as Ft } from "../../../IconAdd.vue_vue_type_script_setup_true_lang-CkOx0Uax.js";
import { _ as Dt } from "../../../IconPageLeft.vue_vue_type_script_setup_true_lang-DKj0DVwW.js";
import { _ as Nt } from "../../../IconPageRight.vue_vue_type_script_setup_true_lang-CjKgoa7x.js";
import { _ as Lt } from "../../../IconSort.vue_vue_type_script_setup_true_lang-CmOOjFoB.js";
import { _ as de } from "../../../BaseButton.vue_vue_type_script_setup_true_lang-bOENwSBS.js";
import { _ as At } from "../../../FieldNumber.vue_vue_type_script_setup_true_lang-BGXtpaGu.js";
import { _ as Bt } from "../../../FieldText.vue_vue_type_script_setup_true_lang-CjTRB3P1.js";
import { _ as Ht } from "../../../TableCellMenu.vue_vue_type_script_setup_true_lang-C9Zr7abk.js";
import { i as je } from "../../../common-CIsHxfXV.js";
import { u as _t, R as $t } from "../../../table-BZxemoEX.js";
import { clone as Ut } from "../utils/common.js";
var Vt = function(e) {
  var t = e.dt;
  return `
.p-treetable {
    position: relative;
}

.p-treetable-table {
    border-spacing: 0;
    width: 100%;
}

.p-treetable-scrollable > .p-treetable-table-container {
    position: relative;
}

.p-treetable-scrollable-table > .p-treetable-thead {
    top: 0;
    z-index: 1;
}

.p-treetable-scrollable-table > .p-treetable-frozen-tbody {
    position: sticky;
    z-index: 1;
}

.p-treetable-scrollable-table>.p-treetable-tfoot {
    bottom: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-treetable-frozen-column {
    position: sticky;
    background: inherit;
}

.p-treetable-scrollable th.p-treetable-frozen-column {
    z-index: 1;
}

.p-treetable-scrollable > .p-treetable-table-container > .p-treetable-table > .p-treetable-thead {
    background: `.concat(t("treetable.header.cell.background"), `;
}

.p-treetable-scrollable > .p-treetable-table-container > .p-treetable-table > .p-treetable-tfoot  {
    background: `).concat(t("treetable.footer.cell.background"), `;
}

.p-treetable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-treetable-flex-scrollable > .p-treetable-table-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-treetable-scrollable-table > .p-treetable-tbody > .p-treetable-row-group-header {
    position: sticky;
    z-index: 1;
}

.p-treetable-resizable-table > .p-treetable-thead > tr > th,
.p-treetable-resizable-table > .p-treetable-tfoot > tr > td,
.p-treetable-resizable-table > .p-treetable-tbody > tr > td {
    overflow: hidden;
    white-space: nowrap;
}

.p-treetable-resizable-table > .p-treetable-thead > tr > th.p-treetable-resizable-column:not(.p-treetable-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-treetable-resizable-table-fit > .p-treetable-thead > tr > th.p-treetable-resizable-column:last-child .p-treetable-column-resizer {
    display: none;
}

.p-treetable-column-resizer {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    width: `).concat(t("treetable.column.resizer.width"), `;
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}

.p-treetable-column-header-content {
    display: flex;
    align-items: center;
    gap: `).concat(t("treetable.header.cell.gap"), `;
}

.p-treetable-column-resize-indicator {
    width: `).concat(t("treetable.resize.indicator.width"), `;
    position: absolute;
    z-index: 10;
    display: none;
    background: `).concat(t("treetable.resize.indicator.color"), `;
}

.p-treetable-mask {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.p-treetable-paginator-top {
    border-color: `).concat(t("treetable.paginator.top.border.color"), `;
    border-style: solid;
    border-width: `).concat(t("treetable.paginator.top.border.width"), `;
}

.p-treetable-paginator-bottom {
    border-color: `).concat(t("treetable.paginator.bottom.border.color"), `;
    border-style: solid;
    border-width: `).concat(t("treetable.paginator.bottom.border.width"), `;
}

.p-treetable-header {
    background: `).concat(t("treetable.header.background"), `;
    color: `).concat(t("treetable.header.color"), `;
    border-color: `).concat(t("treetable.header.border.color"), `;
    border-style: solid;
    border-width: `).concat(t("treetable.header.border.width"), `;
    padding: `).concat(t("treetable.header.padding"), `;
}

.p-treetable-footer {
    background: `).concat(t("treetable.footer.background"), `;
    color: `).concat(t("treetable.footer.color"), `;
    border-color: `).concat(t("treetable.footer.border.color"), `;
    border-style: solid;
    border-width: `).concat(t("treetable.footer.border.width"), `;
    padding: `).concat(t("treetable.footer.padding"), `;
}

.p-treetable-header-cell {
    padding: `).concat(t("treetable.header.cell.padding"), `;
    background: `).concat(t("treetable.header.cell.background"), `;
    border-color: `).concat(t("treetable.header.cell.border.color"), `;
    border-style: solid;
    border-width: 0 0 1px 0;
    color: `).concat(t("treetable.header.cell.color"), `;
    font-weight: normal;
    text-align: left;
    transition: background `).concat(t("treetable.transition.duration"), ", color ").concat(t("treetable.transition.duration"), ", border-color ").concat(t("treetable.transition.duration"), `,
            outline-color `).concat(t("treetable.transition.duration"), ", box-shadow ").concat(t("treetable.transition.duration"), `;
}

.p-treetable-column-title {
    font-weight: `).concat(t("treetable.column.title.font.weight"), `;
}

.p-treetable-tbody > tr {
    outline-color: transparent;
    background: `).concat(t("treetable.row.background"), `;
    color: `).concat(t("treetable.row.color"), `;
    transition: background `).concat(t("treetable.transition.duration"), ", color ").concat(t("treetable.transition.duration"), ", border-color ").concat(t("treetable.transition.duration"), `,
            outline-color `).concat(t("treetable.transition.duration"), ", box-shadow ").concat(t("treetable.transition.duration"), `;
}

.p-treetable-tbody > tr > td {
    text-align: left;
    border-color: `).concat(t("treetable.body.cell.border.color"), `;
    border-style: solid;
    border-width: 0 0 1px 0;
    padding: `).concat(t("treetable.body.cell.padding"), `;
}

.p-treetable-hoverable .p-treetable-tbody > tr:not(.p-treetable-row-selected):hover {
    background: `).concat(t("treetable.row.hover.background"), `;
    color: `).concat(t("treetable.row.hover.color"), `;
}

.p-treetable-tbody > tr.p-treetable-row-selected {
    background: `).concat(t("treetable.row.selected.background"), `;
    color: `).concat(t("treetable.row.selected.color"), `;
}

.p-treetable-tbody > tr:has(+ .p-treetable-row-selected) > td {
    border-bottom-color: `).concat(t("treetable.body.cell.selected.border.color"), `;
}

.p-treetable-tbody > tr.p-treetable-row-selected > td {
    border-bottom-color: `).concat(t("treetable.body.cell.selected.border.color"), `;
}

.p-treetable-tbody > tr:focus-visible,
.p-treetable-tbody > tr.p-treetable-contextmenu-row-selected {
    box-shadow: `).concat(t("treetable.body.cell.focus.ring.shadow"), `;
    outline: `).concat(t("treetable.body.cell.focus.ring.width"), " ").concat(t("treetable.body.cell.focus.ring.style"), " ").concat(t("treetable.body.cell.focus.ring.color"), `;
    outline-offset: `).concat(t("treetable.body.cell.focus.ring.offset"), `;
}

.p-treetable-tfoot > tr > td {
    text-align: left;
    padding: `).concat(t("treetable.footer.cell.padding"), `;
    border-color: `).concat(t("treetable.footer.cell.border.color"), `;
    border-style: solid;
    border-width: 0 0 1px 0;
    color: `).concat(t("treetable.footer.cell.color"), `;
    background: `).concat(t("treetable.footer.cell.background"), `;
}

.p-treetable-column-footer {
    font-weight: `).concat(t("treetable.column.footer.font.weight"), `;
}

.p-treetable-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
}

.p-treetable-column-title,
.p-treetable-sort-icon,
.p-treetable-sort-badge {
    vertical-align: middle;
}

.p-treetable-sort-icon {
    color: `).concat(t("treetable.sort.icon.color"), `;
    transition: color `).concat(t("treetable.transition.duration"), `;
}

.p-treetable-sortable-column:not(.p-treetable-column-sorted):hover {
    background: `).concat(t("treetable.header.cell.hover.background"), `;
    color: `).concat(t("treetable.header.cell.hover.color"), `;
}

.p-treetable-sortable-column:not(.p-treetable-column-sorted):hover .p-treetable-sort-icon {
    color: `).concat(t("treetable.sort.icon.hover.color"), `;
}

.p-treetable-column-sorted {
    background: `).concat(t("treetable.header.cell.selected.background"), `;
    color: `).concat(t("treetable.header.cell.selected.color"), `;
}

.p-treetable-column-sorted .p-treetable-sort-icon {
    color: `).concat(t("treetable.header.cell.selected.color"), `;
}

.p-treetable-sortable-column:focus-visible {
    box-shadow: `).concat(t("treetable.header.cell.focus.ring.shadow"), `;
    outline: `).concat(t("treetable.header.cell.focus.ring.width"), " ").concat(t("treetable.header.cell.focus.ring.style"), " ").concat(t("treetable.header.cell.focus.ring.color"), `;
    outline-offset: `).concat(t("treetable.header.cell.focus.ring.offset"), `;
}

.p-treetable-hoverable .p-treetable-selectable-row {
    cursor: pointer;
}

.p-treetable-loading-icon {
    font-size: `).concat(t("treetable.loading.icon.size"), `;
    width: `).concat(t("treetable.loading.icon.size"), `;
    height: `).concat(t("treetable.loading.icon.size"), `;
}

.p-treetable-gridlines .p-treetable-header {
    border-width: 1px 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-footer {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-paginator-top {
    border-width: 1px 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-paginator-bottom {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-thead > tr > th {
    border-width: 1px 0 1px 1px;
}

.p-treetable-gridlines .p-treetable-thead > tr > th:last-child {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr > td {
    border-width: 1px 0 0 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr > td:last-child {
    border-width: 1px 1px 0 1px;
}

p-treetable-gridlines .p-treetable-tbody > tr:last-child > td {
    border-width: 1px 0 1px 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr:last-child > td:last-child {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tfoot >tr > td {
    border-width: 1px 0 1px 1px;
}

.p-treetable-gridlines .p-treetable-tfoot > tr > td:last-child {
    border-width: 1px 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-thead + .p-treetable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-thead + .p-treetable-tfoot > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-thead):has(.p-treetable-tbody) .p-treetable-tbody > tr > td {
    border-width: 0 0 1px 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-thead):has(.p-treetable-tbody) .p-treetable-tbody > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-tbody):has(.p-treetable-tfoot) .p-treetable-tbody > tr:last-child > td {
    border-width: 0 0 0 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-tbody):has(.p-treetable-tfoot) .p-treetable-tbody > tr:last-child > td:last-child {
    border-width: 0 1px 0 1px;
}

.p-treetable.p-treetable-sm .p-treetable-header {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-thead > tr > th {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-footer {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-lg .p-treetable-header {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-thead > tr > th {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-tbody>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-tfoot>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-footer {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-body-cell-content {
    display: flex;
    align-items: center;
    gap: `).concat(t("treetable.body.cell.gap"), `;
}

.p-treetable-tbody > tr.p-treetable-row-selected .p-treetable-node-toggle-button {
    color: inherit;
}

.p-treetable-node-toggle-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: `).concat(t("treetable.node.toggle.button.size"), `;
    height: `).concat(t("treetable.node.toggle.button.size"), `;
    color: `).concat(t("treetable.node.toggle.button.color"), `;
    border: 0 none;
    background: transparent;
    cursor: pointer;
    border-radius: `).concat(t("treetable.node.toggle.button.border.radius"), `;
    transition: background `).concat(t("treetable.transition.duration"), ", color ").concat(t("treetable.transition.duration"), ", border-color ").concat(t("treetable.transition.duration"), `,
            outline-color `).concat(t("treetable.transition.duration"), ", box-shadow ").concat(t("treetable.transition.duration"), `;
    outline-color: transparent;
    user-select: none;
}

.p-treetable-node-toggle-button:enabled:hover {
    color: `).concat(t("treetable.node.toggle.button.hover.color"), `;
    background: `).concat(t("treetable.node.toggle.button.hover.background"), `;
}

.p-treetable-tbody > tr.p-treetable-row-selected .p-treetable-node-toggle-button:hover {
    background: `).concat(t("treetable.node.toggle.button.selected.hover.background"), `;
    color: `).concat(t("treetable.node.toggle.button.selected.hover.color"), `;
}

.p-treetable-node-toggle-button:focus-visible {
    box-shadow: `).concat(t("treetable.node.toggle.button.focus.ring.shadow"), `;
    outline: `).concat(t("treetable.node.toggle.button.focus.ring.width"), " ").concat(t("treetable.node.toggle.button.focus.ring.style"), " ").concat(t("treetable.node.toggle.button.focus.ring.color"), `;
    outline-offset: `).concat(t("treetable.node.toggle.button.focus.ring.offset"), `;
}
`);
}, Wt = {
  root: function(e) {
    var t = e.instance, r = e.props;
    return ["p-treetable p-component", {
      "p-treetable-hoverable": r.rowHover || t.rowSelectionMode,
      "p-treetable-resizable": r.resizableColumns,
      "p-treetable-resizable-fit": r.resizableColumns && r.columnResizeMode === "fit",
      "p-treetable-scrollable": r.scrollable,
      "p-treetable-flex-scrollable": r.scrollable && r.scrollHeight === "flex",
      "p-treetable-gridlines": r.showGridlines,
      "p-treetable-sm": r.size === "small",
      "p-treetable-lg": r.size === "large"
    }];
  },
  loading: "p-treetable-loading",
  //TODO: required?
  mask: "p-treetable-mask p-overlay-mask",
  loadingIcon: "p-treetable-loading-icon",
  header: "p-treetable-header",
  paginator: function(e) {
    var t = e.position;
    return "p-treetable-paginator-" + t;
  },
  tableContainer: "p-treetable-table-container",
  table: function(e) {
    var t = e.props;
    return ["p-treetable-table", {
      "p-treetable-scrollable-table": t.scrollable,
      "p-treetable-resizable-table": t.resizableColumns,
      "p-treetable-resizable-table-fit": t.resizableColumns && t.columnResizeMode === "fit"
    }];
  },
  thead: "p-treetable-thead",
  headerCell: function(e) {
    var t = e.instance, r = e.props, l = e.context;
    return ["p-treetable-header-cell", {
      "p-treetable-sortable-column": t.columnProp("sortable"),
      "p-treetable-resizable-column": r.resizableColumns,
      "p-treetable-column-sorted": l == null ? void 0 : l.sorted,
      "p-treetable-frozen-column": t.columnProp("frozen")
    }];
  },
  columnResizer: "p-treetable-column-resizer",
  columnHeaderContent: "p-treetable-column-header-content",
  columnTitle: "p-treetable-column-title",
  sortIcon: "p-treetable-sort-icon",
  pcSortBadge: "p-treetable-sort-badge",
  tbody: "p-treetable-tbody",
  row: function(e) {
    var t = e.instance;
    return [{
      "p-treetable-row-selected": t.selected
    }];
  },
  bodyCell: function(e) {
    var t = e.instance;
    return [{
      "p-treetable-frozen-column": t.columnProp("frozen")
    }];
  },
  bodyCellContent: function(e) {
    var t = e.instance;
    return ["p-treetable-body-cell-content", {
      "p-treetable-body-cell-content-expander": t.columnProp("expander")
    }];
  },
  nodeToggleButton: "p-treetable-node-toggle-button",
  nodeToggleIcon: "p-treetable-node-toggle-icon",
  pcNodeCheckbox: "p-treetable-node-checkbox",
  emptyMessage: "p-treetable-empty-message",
  tfoot: "p-treetable-tfoot",
  footerCell: function(e) {
    var t = e.instance;
    return [{
      "p-treetable-frozen-column": t.columnProp("frozen")
    }];
  },
  footer: "p-treetable-footer",
  columnResizeIndicator: "p-treetable-column-resize-indicator"
}, Gt = {
  tableContainer: {
    overflow: "auto"
  },
  thead: {
    position: "sticky"
  },
  tfoot: {
    position: "sticky"
  }
}, Xt = wt.extend({
  name: "treetable",
  theme: Vt,
  classes: Wt,
  inlineStyles: Gt
}), qt = {
  name: "BaseTreeTable",
  extends: Q,
  props: {
    value: {
      type: null,
      default: null
    },
    dataKey: {
      type: [String, Function],
      default: "key"
    },
    expandedKeys: {
      type: null,
      default: null
    },
    selectionKeys: {
      type: null,
      default: null
    },
    selectionMode: {
      type: String,
      default: null
    },
    metaKeySelection: {
      type: Boolean,
      default: !1
    },
    rows: {
      type: Number,
      default: 0
    },
    first: {
      type: Number,
      default: 0
    },
    totalRecords: {
      type: Number,
      default: 0
    },
    paginator: {
      type: Boolean,
      default: !1
    },
    paginatorPosition: {
      type: String,
      default: "bottom"
    },
    alwaysShowPaginator: {
      type: Boolean,
      default: !0
    },
    paginatorTemplate: {
      type: String,
      default: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    },
    pageLinkSize: {
      type: Number,
      default: 5
    },
    rowsPerPageOptions: {
      type: Array,
      default: null
    },
    currentPageReportTemplate: {
      type: String,
      default: "({currentPage} of {totalPages})"
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    loadingMode: {
      type: String,
      default: "mask"
    },
    rowHover: {
      type: Boolean,
      default: !1
    },
    autoLayout: {
      type: Boolean,
      default: !1
    },
    sortField: {
      type: [String, Function],
      default: null
    },
    sortOrder: {
      type: Number,
      default: null
    },
    defaultSortOrder: {
      type: Number,
      default: 1
    },
    multiSortMeta: {
      type: Array,
      default: null
    },
    sortMode: {
      type: String,
      default: "single"
    },
    removableSort: {
      type: Boolean,
      default: !1
    },
    filters: {
      type: Object,
      default: null
    },
    filterMode: {
      type: String,
      default: "lenient"
    },
    filterLocale: {
      type: String,
      default: void 0
    },
    resizableColumns: {
      type: Boolean,
      default: !1
    },
    columnResizeMode: {
      type: String,
      default: "fit"
    },
    indentation: {
      type: Number,
      default: 1
    },
    showGridlines: {
      type: Boolean,
      default: !1
    },
    scrollable: {
      type: Boolean,
      default: !1
    },
    scrollHeight: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    tableStyle: {
      type: null,
      default: null
    },
    tableClass: {
      type: [String, Object],
      default: null
    },
    tableProps: {
      type: Object,
      default: null
    }
  },
  style: Xt,
  provide: function() {
    return {
      $pcTreeTable: this,
      $parentInstance: this
    };
  }
}, Ge = {
  name: "FooterCell",
  hostName: "TreeTable",
  extends: Q,
  props: {
    column: {
      type: Object,
      default: null
    },
    index: {
      type: Number,
      default: null
    }
  },
  data: function() {
    return {
      styleObject: {}
    };
  },
  mounted: function() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  updated: function() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  methods: {
    columnProp: function(e) {
      return q(this.column, e);
    },
    getColumnPT: function(e) {
      var t, r = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index: this.index,
          frozen: this.columnProp("frozen"),
          size: (t = this.$parentInstance) === null || t === void 0 ? void 0 : t.size
        }
      };
      return p(this.ptm("column.".concat(e), {
        column: r
      }), this.ptm("column.".concat(e), r), this.ptmo(this.getColumnProp(), e, r));
    },
    getColumnProp: function() {
      return this.column.props && this.column.props.pt ? this.column.props.pt : void 0;
    },
    updateStickyPosition: function() {
      if (this.columnProp("frozen")) {
        var e = this.columnProp("alignFrozen");
        if (e === "right") {
          var t = 0, r = me(this.$el, '[data-p-frozen-column="true"]');
          r && (t = N(r) + parseFloat(r.style.right || 0)), this.styleObject.right = t + "px";
        } else {
          var l = 0, o = ye(this.$el, '[data-p-frozen-column="true"]');
          o && (l = N(o) + parseFloat(o.style.left || 0)), this.styleObject.left = l + "px";
        }
      }
    }
  },
  computed: {
    containerClass: function() {
      return [this.columnProp("footerClass"), this.columnProp("class"), this.cx("footerCell")];
    },
    containerStyle: function() {
      var e = this.columnProp("footerStyle"), t = this.columnProp("style");
      return this.columnProp("frozen") ? [t, e, this.styleObject] : [t, e];
    }
  }
};
function $(n) {
  "@babel/helpers - typeof";
  return $ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $(n);
}
function Ie(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Re(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ie(Object(t), !0).forEach(function(r) {
      Qt(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Ie(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Qt(n, e, t) {
  return (e = Jt(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Jt(n) {
  var e = Yt(n, "string");
  return $(e) == "symbol" ? e : e + "";
}
function Yt(n, e) {
  if ($(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if ($(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
var Zt = ["data-p-frozen-column"];
function en(n, e, t, r, l, o) {
  return a(), f("td", p({
    style: o.containerStyle,
    class: o.containerClass,
    role: "cell"
  }, Re(Re({}, o.getColumnPT("root")), o.getColumnPT("footerCell")), {
    "data-p-frozen-column": o.columnProp("frozen")
  }), [t.column.children && t.column.children.footer ? (a(), b(O(t.column.children.footer), {
    key: 0,
    column: t.column
  }, null, 8, ["column"])) : h("", !0), o.columnProp("footer") ? (a(), f("span", p({
    key: 1,
    class: n.cx("columnFooter")
  }, o.getColumnPT("columnFooter")), x(o.columnProp("footer")), 17)) : h("", !0)], 16, Zt);
}
Ge.render = en;
var Xe = {
  name: "HeaderCell",
  hostName: "TreeTable",
  extends: Q,
  emits: ["column-click", "column-resizestart"],
  props: {
    column: {
      type: Object,
      default: null
    },
    resizableColumns: {
      type: Boolean,
      default: !1
    },
    sortField: {
      type: [String, Function],
      default: null
    },
    sortOrder: {
      type: Number,
      default: null
    },
    multiSortMeta: {
      type: Array,
      default: null
    },
    sortMode: {
      type: String,
      default: "single"
    },
    index: {
      type: Number,
      default: null
    }
  },
  data: function() {
    return {
      styleObject: {}
    };
  },
  mounted: function() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  updated: function() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  methods: {
    columnProp: function(e) {
      return q(this.column, e);
    },
    getColumnPT: function(e) {
      var t, r = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index: this.index,
          sorted: this.isColumnSorted(),
          frozen: this.$parentInstance.scrollable && this.columnProp("frozen"),
          resizable: this.resizableColumns,
          scrollable: this.$parentInstance.scrollable,
          showGridlines: this.$parentInstance.showGridlines,
          size: (t = this.$parentInstance) === null || t === void 0 ? void 0 : t.size
        }
      };
      return p(this.ptm("column.".concat(e), {
        column: r
      }), this.ptm("column.".concat(e), r), this.ptmo(this.getColumnProp(), e, r));
    },
    getColumnProp: function() {
      return this.column.props && this.column.props.pt ? this.column.props.pt : void 0;
    },
    updateStickyPosition: function() {
      if (this.columnProp("frozen")) {
        var e = this.columnProp("alignFrozen");
        if (e === "right") {
          var t = 0, r = me(this.$el, '[data-p-frozen-column="true"]');
          r && (t = N(r) + parseFloat(r.style.right || 0)), this.styleObject.right = t + "px";
        } else {
          var l = 0, o = ye(this.$el, '[data-p-frozen-column="true"]');
          o && (l = N(o) + parseFloat(o.style.left || 0)), this.styleObject.left = l + "px";
        }
        var d = this.$el.parentElement.nextElementSibling;
        if (d) {
          var s = Ve(this.$el);
          d.children[s].style.left = this.styleObject.left, d.children[s].style.right = this.styleObject.right;
        }
      }
    },
    onClick: function(e) {
      this.$emit("column-click", {
        originalEvent: e,
        column: this.column
      });
    },
    onKeyDown: function(e) {
      (e.code === "Enter" || e.code === "NumpadEnter" || e.code === "Space") && e.currentTarget.nodeName === "TH" && T(e.currentTarget, "data-p-sortable-column") && (this.$emit("column-click", {
        originalEvent: e,
        column: this.column
      }), e.preventDefault());
    },
    onResizeStart: function(e) {
      this.$emit("column-resizestart", e);
    },
    getMultiSortMetaIndex: function() {
      for (var e = -1, t = 0; t < this.multiSortMeta.length; t++) {
        var r = this.multiSortMeta[t];
        if (r.field === this.columnProp("field") || r.field === this.columnProp("sortField")) {
          e = t;
          break;
        }
      }
      return e;
    },
    isMultiSorted: function() {
      return this.columnProp("sortable") && this.getMultiSortMetaIndex() > -1;
    },
    isColumnSorted: function() {
      return this.sortMode === "single" ? this.sortField && (this.sortField === this.columnProp("field") || this.sortField === this.columnProp("sortField")) : this.isMultiSorted();
    }
  },
  computed: {
    containerClass: function() {
      return [this.columnProp("headerClass"), this.columnProp("class"), this.cx("headerCell")];
    },
    containerStyle: function() {
      var e = this.columnProp("headerStyle"), t = this.columnProp("style");
      return this.columnProp("frozen") ? [t, e, this.styleObject] : [t, e];
    },
    sortState: function() {
      var e = !1, t = null;
      if (this.sortMode === "single")
        e = this.sortField && (this.sortField === this.columnProp("field") || this.sortField === this.columnProp("sortField")), t = e ? this.sortOrder : 0;
      else if (this.sortMode === "multiple") {
        var r = this.getMultiSortMetaIndex();
        r > -1 && (e = !0, t = this.multiSortMeta[r].order);
      }
      return {
        sorted: e,
        sortOrder: t
      };
    },
    sortableColumnIcon: function() {
      var e = this.sortState, t = e.sorted, r = e.sortOrder;
      if (t) {
        if (t && r > 0) return Ke;
        if (t && r < 0) return Ee;
      } else return xe;
      return null;
    },
    ariaSort: function() {
      if (this.columnProp("sortable")) {
        var e = this.sortState, t = e.sorted, r = e.sortOrder;
        return t && r < 0 ? "descending" : t && r > 0 ? "ascending" : "none";
      } else
        return null;
    }
  },
  components: {
    Badge: Mt,
    SortAltIcon: xe,
    SortAmountUpAltIcon: Ke,
    SortAmountDownIcon: Ee
  }
};
function U(n) {
  "@babel/helpers - typeof";
  return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, U(n);
}
function Fe(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function De(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Fe(Object(t), !0).forEach(function(r) {
      tn(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Fe(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function tn(n, e, t) {
  return (e = nn(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function nn(n) {
  var e = rn(n, "string");
  return U(e) == "symbol" ? e : e + "";
}
function rn(n, e) {
  if (U(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (U(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
var on = ["tabindex", "aria-sort", "data-p-sortable-column", "data-p-resizable-column", "data-p-sorted", "data-p-frozen-column"];
function ln(n, e, t, r, l, o) {
  var d = K("Badge");
  return a(), f("th", p({
    class: o.containerClass,
    style: [o.containerStyle],
    onClick: e[1] || (e[1] = function() {
      return o.onClick && o.onClick.apply(o, arguments);
    }),
    onKeydown: e[2] || (e[2] = function() {
      return o.onKeyDown && o.onKeyDown.apply(o, arguments);
    }),
    tabindex: o.columnProp("sortable") ? "0" : null,
    "aria-sort": o.ariaSort,
    role: "columnheader"
  }, De(De({}, o.getColumnPT("root")), o.getColumnPT("headerCell")), {
    "data-p-sortable-column": o.columnProp("sortable"),
    "data-p-resizable-column": t.resizableColumns,
    "data-p-sorted": o.isColumnSorted(),
    "data-p-frozen-column": o.columnProp("frozen")
  }), [t.resizableColumns && !o.columnProp("frozen") ? (a(), f("span", p({
    key: 0,
    class: n.cx("columnResizer"),
    onMousedown: e[0] || (e[0] = function() {
      return o.onResizeStart && o.onResizeStart.apply(o, arguments);
    })
  }, o.getColumnPT("columnResizer")), null, 16)) : h("", !0), C("div", p({
    class: n.cx("columnHeaderContent")
  }, o.getColumnPT("columnHeaderContent")), [t.column.children && t.column.children.header ? (a(), b(O(t.column.children.header), {
    key: 0,
    column: t.column
  }, null, 8, ["column"])) : h("", !0), o.columnProp("header") ? (a(), f("span", p({
    key: 1,
    class: n.cx("columnTitle")
  }, o.getColumnPT("columnTitle")), x(o.columnProp("header")), 17)) : h("", !0), o.columnProp("sortable") ? (a(), f("span", Ue(p({
    key: 2
  }, o.getColumnPT("sort"))), [(a(), b(O(t.column.children && t.column.children.sorticon || o.sortableColumnIcon), p({
    sorted: o.sortState.sorted,
    sortOrder: o.sortState.sortOrder,
    class: n.cx("sortIcon")
  }, o.getColumnPT("sortIcon")), null, 16, ["sorted", "sortOrder", "class"]))], 16)) : h("", !0), o.isMultiSorted() ? (a(), b(d, p({
    key: 3,
    class: n.cx("pcSortBadge")
  }, o.getColumnPT("pcSortBadge"), {
    value: o.getMultiSortMetaIndex() + 1,
    size: "small"
  }), null, 16, ["class", "value"])) : h("", !0)], 16)], 16, on);
}
Xe.render = ln;
var qe = {
  name: "BodyCell",
  hostName: "TreeTable",
  extends: Q,
  emits: ["node-toggle", "checkbox-toggle"],
  props: {
    node: {
      type: Object,
      default: null
    },
    column: {
      type: Object,
      default: null
    },
    level: {
      type: Number,
      default: 0
    },
    indentation: {
      type: Number,
      default: 1
    },
    leaf: {
      type: Boolean,
      default: !1
    },
    expanded: {
      type: Boolean,
      default: !1
    },
    selectionMode: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: !1
    },
    partialChecked: {
      type: Boolean,
      default: !1
    },
    templates: {
      type: Object,
      default: null
    },
    index: {
      type: Number,
      default: null
    },
    loadingMode: {
      type: String,
      default: "mask"
    }
  },
  data: function() {
    return {
      styleObject: {}
    };
  },
  mounted: function() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  updated: function() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  methods: {
    toggle: function() {
      this.$emit("node-toggle", this.node);
    },
    columnProp: function(e) {
      return q(this.column, e);
    },
    getColumnPT: function(e) {
      var t, r = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index: this.index,
          selectable: this.$parentInstance.rowHover || this.$parentInstance.rowSelectionMode,
          selected: this.$parent.selected,
          frozen: this.columnProp("frozen"),
          scrollable: this.$parentInstance.scrollable,
          showGridlines: this.$parentInstance.showGridlines,
          size: (t = this.$parentInstance) === null || t === void 0 ? void 0 : t.size
        }
      };
      return p(this.ptm("column.".concat(e), {
        column: r
      }), this.ptm("column.".concat(e), r), this.ptmo(this.getColumnProp(), e, r));
    },
    getColumnProp: function() {
      return this.column.props && this.column.props.pt ? this.column.props.pt : void 0;
    },
    getColumnCheckboxPT: function(e) {
      var t = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          checked: this.checked,
          partialChecked: this.partialChecked
        }
      };
      return p(this.ptm("column.".concat(e), {
        column: t
      }), this.ptm("column.".concat(e), t), this.ptmo(this.getColumnProp(), e, t));
    },
    updateStickyPosition: function() {
      if (this.columnProp("frozen")) {
        var e = this.columnProp("alignFrozen");
        if (e === "right") {
          var t = 0, r = me(this.$el, '[data-p-frozen-column="true"]');
          r && (t = N(r) + parseFloat(r.style.right || 0)), this.styleObject.right = t + "px";
        } else {
          var l = 0, o = ye(this.$el, '[data-p-frozen-column="true"]');
          o && (l = N(o) + parseFloat(o.style.left || 0)), this.styleObject.left = l + "px";
        }
      }
    },
    resolveFieldData: function(e, t) {
      return I(e, t);
    },
    toggleCheckbox: function() {
      this.$emit("checkbox-toggle");
    }
  },
  computed: {
    containerClass: function() {
      return [this.columnProp("bodyClass"), this.columnProp("class"), this.cx("bodyCell")];
    },
    containerStyle: function() {
      var e = this.columnProp("bodyStyle"), t = this.columnProp("style");
      return this.columnProp("frozen") ? [t, e, this.styleObject] : [t, e];
    },
    togglerStyle: function() {
      return {
        marginLeft: this.level * this.indentation + "rem",
        visibility: this.leaf ? "hidden" : "visible"
      };
    },
    checkboxSelectionMode: function() {
      return this.selectionMode === "checkbox";
    }
  },
  components: {
    Checkbox: jt,
    ChevronRightIcon: Et,
    ChevronDownIcon: Kt,
    CheckIcon: xt,
    MinusIcon: It,
    SpinnerIcon: We
  },
  directives: {
    ripple: Rt
  }
};
function V(n) {
  "@babel/helpers - typeof";
  return V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, V(n);
}
function Ne(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Le(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ne(Object(t), !0).forEach(function(r) {
      an(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Ne(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function an(n, e, t) {
  return (e = sn(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function sn(n) {
  var e = cn(n, "string");
  return V(e) == "symbol" ? e : e + "";
}
function cn(n, e) {
  if (V(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (V(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
var dn = ["data-p-frozen-column"];
function un(n, e, t, r, l, o) {
  var d = K("SpinnerIcon"), s = K("Checkbox"), c = ft("ripple");
  return a(), f("td", p({
    style: o.containerStyle,
    class: o.containerClass,
    role: "cell"
  }, Le(Le({}, o.getColumnPT("root")), o.getColumnPT("bodyCell")), {
    "data-p-frozen-column": o.columnProp("frozen")
  }), [C("div", p({
    class: n.cx("bodyCellContent")
  }, o.getColumnPT("bodyCellContent")), [o.columnProp("expander") ? ht((a(), f("button", p({
    key: 0,
    type: "button",
    class: n.cx("nodeToggleButton"),
    onClick: e[0] || (e[0] = function() {
      return o.toggle && o.toggle.apply(o, arguments);
    }),
    style: o.togglerStyle,
    tabindex: "-1"
  }, o.getColumnPT("nodeToggleButton"), {
    "data-pc-group-section": "rowactionbutton"
  }), [t.node.loading && t.loadingMode === "icon" ? (a(), f(z, {
    key: 0
  }, [t.templates.nodetoggleicon ? (a(), b(O(t.templates.nodetoggleicon), {
    key: 0
  })) : h("", !0), t.templates.nodetogglericon ? (a(), b(O(t.templates.nodetogglericon), {
    key: 1
  })) : (a(), b(d, p({
    key: 2,
    spin: ""
  }, n.ptm("nodetoggleicon")), null, 16))], 64)) : (a(), f(z, {
    key: 1
  }, [t.column.children && t.column.children.rowtoggleicon ? (a(), b(O(t.column.children.rowtoggleicon), {
    key: 0,
    node: t.node,
    expanded: t.expanded,
    class: w(n.cx("rowToggleIcon"))
  }, null, 8, ["node", "expanded", "class"])) : h("", !0), t.column.children && t.column.children.rowtogglericon ? (a(), b(O(t.column.children.rowtogglericon), {
    key: 1,
    node: t.node,
    expanded: t.expanded,
    class: w(n.cx("rowToggleIcon"))
  }, null, 8, ["node", "expanded", "class"])) : t.expanded ? (a(), b(O(t.node.expandedIcon ? "span" : "ChevronDownIcon"), p({
    key: 2,
    class: n.cx("rowToggleIcon")
  }, o.getColumnPT("rowToggleIcon")), null, 16, ["class"])) : (a(), b(O(t.node.collapsedIcon ? "span" : "ChevronRightIcon"), p({
    key: 3,
    class: n.cx("rowToggleIcon")
  }, o.getColumnPT("rowToggleIcon")), null, 16, ["class"]))], 64))], 16)), [[c]]) : h("", !0), o.checkboxSelectionMode && o.columnProp("expander") ? (a(), b(s, {
    key: 1,
    modelValue: t.checked,
    binary: !0,
    class: w(n.cx("pcNodeCheckbox")),
    onChange: o.toggleCheckbox,
    tabindex: -1,
    indeterminate: t.partialChecked,
    unstyled: n.unstyled,
    pt: o.getColumnCheckboxPT("pcNodeCheckbox"),
    "data-p-partialchecked": t.partialChecked
  }, {
    icon: g(function(u) {
      return [t.templates.checkboxicon ? (a(), b(O(t.templates.checkboxicon), {
        key: 0,
        checked: u.checked,
        partialChecked: t.partialChecked,
        class: w(u.class)
      }, null, 8, ["checked", "partialChecked", "class"])) : h("", !0)];
    }),
    _: 1
  }, 8, ["modelValue", "class", "onChange", "indeterminate", "unstyled", "pt", "data-p-partialchecked"])) : h("", !0), t.column.children && t.column.children.body ? (a(), b(O(t.column.children.body), {
    key: 2,
    node: t.node,
    column: t.column
  }, null, 8, ["node", "column"])) : (a(), f(z, {
    key: 3
  }, [bt(x(o.resolveFieldData(t.node.data, o.columnProp("field"))), 1)], 64))], 16)], 16, dn);
}
qe.render = un;
function W(n) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, W(n);
}
function ue(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!t) {
    if (Array.isArray(n) || (t = Qe(n)) || e) {
      t && (n = t);
      var r = 0, l = function() {
      };
      return { s: l, n: function() {
        return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
      }, e: function(u) {
        throw u;
      }, f: l };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, d = !0, s = !1;
  return { s: function() {
    t = t.call(n);
  }, n: function() {
    var u = t.next();
    return d = u.done, u;
  }, e: function(u) {
    s = !0, o = u;
  }, f: function() {
    try {
      d || t.return == null || t.return();
    } finally {
      if (s) throw o;
    }
  } };
}
function Ae(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function pe(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ae(Object(t), !0).forEach(function(r) {
      pn(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Ae(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function pn(n, e, t) {
  return (e = fn(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function fn(n) {
  var e = hn(n, "string");
  return W(e) == "symbol" ? e : e + "";
}
function hn(n, e) {
  if (W(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (W(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Be(n) {
  return yn(n) || mn(n) || Qe(n) || bn();
}
function bn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qe(n, e) {
  if (n) {
    if (typeof n == "string") return he(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? he(n, e) : void 0;
  }
}
function mn(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function yn(n) {
  if (Array.isArray(n)) return he(n);
}
function he(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
  return r;
}
var Je = {
  name: "TreeTableRow",
  hostName: "TreeTable",
  extends: Q,
  emits: ["node-click", "node-toggle", "checkbox-change", "nodeClick", "nodeToggle", "checkboxChange"],
  props: {
    node: {
      type: null,
      default: null
    },
    dataKey: {
      type: [String, Function],
      default: "key"
    },
    parentNode: {
      type: null,
      default: null
    },
    columns: {
      type: null,
      default: null
    },
    expandedKeys: {
      type: null,
      default: null
    },
    selectionKeys: {
      type: null,
      default: null
    },
    selectionMode: {
      type: String,
      default: null
    },
    level: {
      type: Number,
      default: 0
    },
    indentation: {
      type: Number,
      default: 1
    },
    tabindex: {
      type: Number,
      default: -1
    },
    ariaSetSize: {
      type: Number,
      default: null
    },
    ariaPosInset: {
      type: Number,
      default: null
    },
    loadingMode: {
      type: String,
      default: "mask"
    },
    templates: {
      type: Object,
      default: null
    }
  },
  nodeTouched: !1,
  methods: {
    columnProp: function(e, t) {
      return q(e, t);
    },
    toggle: function() {
      this.$emit("node-toggle", this.node);
    },
    onClick: function(e) {
      Me(e.target) || T(e.target, "data-pc-section") === "nodetogglebutton" || T(e.target, "data-pc-section") === "rowtoggleicon" || e.target.tagName === "path" || (this.setTabIndexForSelectionMode(e, this.nodeTouched), this.$emit("node-click", {
        originalEvent: e,
        nodeTouched: this.nodeTouched,
        node: this.node
      }), this.nodeTouched = !1);
    },
    onTouchEnd: function() {
      this.nodeTouched = !0;
    },
    nodeKey: function(e) {
      return I(e, this.dataKey);
    },
    onKeyDown: function(e, t) {
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(e);
          break;
        case "ArrowRight":
          this.onArrowRightKey(e);
          break;
        case "Home":
          this.onHomeKey(e);
          break;
        case "End":
          this.onEndKey(e);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          Me(e.target) || this.onEnterKey(e, t);
          break;
        case "Tab":
          this.onTabKey(e);
          break;
      }
    },
    onArrowDownKey: function(e) {
      var t = e.currentTarget.nextElementSibling;
      t && this.focusRowChange(e.currentTarget, t), e.preventDefault();
    },
    onArrowUpKey: function(e) {
      var t = e.currentTarget.previousElementSibling;
      t && this.focusRowChange(e.currentTarget, t), e.preventDefault();
    },
    onArrowRightKey: function(e) {
      var t = this, r = H(e.currentTarget, "button").style.visibility === "hidden", l = H(this.$refs.node, '[data-pc-section="nodetogglebutton"]');
      r || (!this.expanded && l.click(), this.$nextTick(function() {
        t.onArrowDownKey(e);
      }), e.preventDefault());
    },
    onArrowLeftKey: function(e) {
      if (!(this.level === 0 && !this.expanded)) {
        var t = e.currentTarget, r = H(t, "button").style.visibility === "hidden", l = H(t, '[data-pc-section="nodetogglebutton"]');
        if (this.expanded && !r) {
          l.click();
          return;
        }
        var o = this.findBeforeClickableNode(t);
        o && this.focusRowChange(t, o);
      }
    },
    onHomeKey: function(e) {
      var t = H(e.currentTarget.parentElement, 'tr[aria-level="'.concat(this.level + 1, '"]'));
      t && ce(t), e.preventDefault();
    },
    onEndKey: function(e) {
      var t = te(e.currentTarget.parentElement, 'tr[aria-level="'.concat(this.level + 1, '"]')), r = t[t.length - 1];
      ce(r), e.preventDefault();
    },
    onEnterKey: function(e) {
      if (e.preventDefault(), this.setTabIndexForSelectionMode(e, this.nodeTouched), this.selectionMode === "checkbox") {
        this.toggleCheckbox();
        return;
      }
      this.$emit("node-click", {
        originalEvent: e,
        nodeTouched: this.nodeTouched,
        node: this.node
      }), this.nodeTouched = !1;
    },
    onTabKey: function() {
      var e = Be(te(this.$refs.node.parentElement, "tr")), t = e.some(function(l) {
        return T(l, "data-p-selected") || l.getAttribute("aria-checked") === "true";
      });
      if (e.forEach(function(l) {
        l.tabIndex = -1;
      }), t) {
        var r = e.filter(function(l) {
          return T(l, "data-p-selected") || l.getAttribute("aria-checked") === "true";
        });
        r[0].tabIndex = 0;
        return;
      }
      e[0].tabIndex = 0;
    },
    focusRowChange: function(e, t) {
      e.tabIndex = "-1", t.tabIndex = "0", ce(t);
    },
    findBeforeClickableNode: function(e) {
      var t = e.previousElementSibling;
      if (t) {
        var r = t.querySelector("button");
        return r && r.style.visibility !== "hidden" ? t : this.findBeforeClickableNode(t);
      }
      return null;
    },
    toggleCheckbox: function() {
      var e = this.selectionKeys ? pe({}, this.selectionKeys) : {}, t = !this.checked;
      this.propagateDown(this.node, t, e), this.$emit("checkbox-change", {
        node: this.node,
        check: t,
        selectionKeys: e
      });
    },
    propagateDown: function(e, t, r) {
      if (t ? r[this.nodeKey(e)] = {
        checked: !0,
        partialChecked: !1
      } : delete r[this.nodeKey(e)], e.children && e.children.length) {
        var l = ue(e.children), o;
        try {
          for (l.s(); !(o = l.n()).done; ) {
            var d = o.value;
            this.propagateDown(d, t, r);
          }
        } catch (s) {
          l.e(s);
        } finally {
          l.f();
        }
      }
    },
    propagateUp: function(e) {
      var t = e.check, r = pe({}, e.selectionKeys), l = 0, o = !1, d = ue(this.node.children), s;
      try {
        for (d.s(); !(s = d.n()).done; ) {
          var c = s.value;
          r[this.nodeKey(c)] && r[this.nodeKey(c)].checked ? l++ : r[this.nodeKey(c)] && r[this.nodeKey(c)].partialChecked && (o = !0);
        }
      } catch (u) {
        d.e(u);
      } finally {
        d.f();
      }
      t && l === this.node.children.length ? r[this.nodeKey(this.node)] = {
        checked: !0,
        partialChecked: !1
      } : (t || delete r[this.nodeKey(this.node)], o || l > 0 && l !== this.node.children.length ? r[this.nodeKey(this.node)] = {
        checked: !1,
        partialChecked: !0
      } : r[this.nodeKey(this.node)] = {
        checked: !1,
        partialChecked: !1
      }), this.$emit("checkbox-change", {
        node: e.node,
        check: e.check,
        selectionKeys: r
      });
    },
    onCheckboxChange: function(e) {
      var t = e.check, r = pe({}, e.selectionKeys), l = 0, o = !1, d = ue(this.node.children), s;
      try {
        for (d.s(); !(s = d.n()).done; ) {
          var c = s.value;
          r[this.nodeKey(c)] && r[this.nodeKey(c)].checked ? l++ : r[this.nodeKey(c)] && r[this.nodeKey(c)].partialChecked && (o = !0);
        }
      } catch (u) {
        d.e(u);
      } finally {
        d.f();
      }
      t && l === this.node.children.length ? r[this.nodeKey(this.node)] = {
        checked: !0,
        partialChecked: !1
      } : (t || delete r[this.nodeKey(this.node)], o || l > 0 && l !== this.node.children.length ? r[this.nodeKey(this.node)] = {
        checked: !1,
        partialChecked: !0
      } : r[this.nodeKey(this.node)] = {
        checked: !1,
        partialChecked: !1
      }), this.$emit("checkbox-change", {
        node: e.node,
        check: e.check,
        selectionKeys: r
      });
    },
    setTabIndexForSelectionMode: function(e, t) {
      if (this.selectionMode !== null) {
        var r = Be(te(this.$refs.node.parentElement, "tr"));
        e.currentTarget.tabIndex = t === !1 ? -1 : 0, r.every(function(l) {
          return l.tabIndex === -1;
        }) && (r[0].tabIndex = 0);
      }
    }
  },
  computed: {
    containerClass: function() {
      return [this.node.styleClass, this.cx("row")];
    },
    expanded: function() {
      return this.expandedKeys && this.expandedKeys[this.nodeKey(this.node)] === !0;
    },
    leaf: function() {
      return this.node.leaf === !1 ? !1 : !(this.node.children && this.node.children.length);
    },
    selected: function() {
      return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.nodeKey(this.node)] === !0 : !1;
    },
    checked: function() {
      return this.selectionKeys ? this.selectionKeys[this.nodeKey(this.node)] && this.selectionKeys[this.nodeKey(this.node)].checked : !1;
    },
    partialChecked: function() {
      return this.selectionKeys ? this.selectionKeys[this.nodeKey(this.node)] && this.selectionKeys[this.nodeKey(this.node)].partialChecked : !1;
    },
    getAriaSelected: function() {
      return this.selectionMode === "single" || this.selectionMode === "multiple" ? this.selected : null;
    },
    ptmOptions: function() {
      return {
        context: {
          selectable: this.$parentInstance.rowHover || this.$parentInstance.rowSelectionMode,
          selected: this.selected,
          scrollable: this.$parentInstance.scrollable
        }
      };
    }
  },
  components: {
    TTBodyCell: qe
  }
}, gn = ["tabindex", "aria-expanded", "aria-level", "aria-setsize", "aria-posinset", "aria-selected", "aria-checked", "data-p-selected"];
function vn(n, e, t, r, l, o) {
  var d = K("TTBodyCell"), s = K("TreeTableRow", !0);
  return a(), f(z, null, [C("tr", p({
    ref: "node",
    class: o.containerClass,
    style: t.node.style,
    tabindex: t.tabindex,
    role: "row",
    "aria-expanded": t.node.children && t.node.children.length ? o.expanded : void 0,
    "aria-level": t.level + 1,
    "aria-setsize": t.ariaSetSize,
    "aria-posinset": t.ariaPosInset,
    "aria-selected": o.getAriaSelected,
    "aria-checked": o.checked || void 0,
    onClick: e[1] || (e[1] = function() {
      return o.onClick && o.onClick.apply(o, arguments);
    }),
    onKeydown: e[2] || (e[2] = function() {
      return o.onKeyDown && o.onKeyDown.apply(o, arguments);
    }),
    onTouchend: e[3] || (e[3] = function() {
      return o.onTouchEnd && o.onTouchEnd.apply(o, arguments);
    })
  }, n.ptm("row", o.ptmOptions), {
    "data-p-selected": o.selected
  }), [(a(!0), f(z, null, D(t.columns, function(c, u) {
    return a(), f(z, {
      key: o.columnProp(c, "columnKey") || o.columnProp(c, "field") || u
    }, [o.columnProp(c, "hidden") ? h("", !0) : (a(), b(d, {
      key: 0,
      column: c,
      node: t.node,
      level: t.level,
      leaf: o.leaf,
      indentation: t.indentation,
      expanded: o.expanded,
      selectionMode: t.selectionMode,
      checked: o.checked,
      partialChecked: o.partialChecked,
      templates: t.templates,
      onNodeToggle: e[0] || (e[0] = function(i) {
        return n.$emit("node-toggle", i);
      }),
      onCheckboxToggle: o.toggleCheckbox,
      index: u,
      loadingMode: t.loadingMode,
      unstyled: n.unstyled,
      pt: n.pt
    }, null, 8, ["column", "node", "level", "leaf", "indentation", "expanded", "selectionMode", "checked", "partialChecked", "templates", "onCheckboxToggle", "index", "loadingMode", "unstyled", "pt"]))], 64);
  }), 128))], 16, gn), o.expanded && t.node.children && t.node.children.length ? (a(!0), f(z, {
    key: 0
  }, D(t.node.children, function(c) {
    return a(), b(s, {
      key: o.nodeKey(c),
      dataKey: t.dataKey,
      columns: t.columns,
      node: c,
      parentNode: t.node,
      level: t.level + 1,
      expandedKeys: t.expandedKeys,
      selectionMode: t.selectionMode,
      selectionKeys: t.selectionKeys,
      indentation: t.indentation,
      ariaPosInset: t.node.children.indexOf(c) + 1,
      ariaSetSize: t.node.children.length,
      templates: t.templates,
      onNodeToggle: e[4] || (e[4] = function(u) {
        return n.$emit("node-toggle", u);
      }),
      onNodeClick: e[5] || (e[5] = function(u) {
        return n.$emit("node-click", u);
      }),
      onCheckboxChange: o.onCheckboxChange,
      unstyled: n.unstyled,
      pt: n.pt
    }, null, 8, ["dataKey", "columns", "node", "parentNode", "level", "expandedKeys", "selectionMode", "selectionKeys", "indentation", "ariaPosInset", "ariaSetSize", "templates", "onCheckboxChange", "unstyled", "pt"]);
  }), 128)) : h("", !0)], 64);
}
Je.render = vn;
function G(n) {
  "@babel/helpers - typeof";
  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, G(n);
}
function ee(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!t) {
    if (Array.isArray(n) || (t = Ye(n)) || e) {
      t && (n = t);
      var r = 0, l = function() {
      };
      return { s: l, n: function() {
        return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
      }, e: function(u) {
        throw u;
      }, f: l };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, d = !0, s = !1;
  return { s: function() {
    t = t.call(n);
  }, n: function() {
    var u = t.next();
    return d = u.done, u;
  }, e: function(u) {
    s = !0, o = u;
  }, f: function() {
    try {
      d || t.return == null || t.return();
    } finally {
      if (s) throw o;
    }
  } };
}
function He(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function j(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? He(Object(t), !0).forEach(function(r) {
      Sn(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : He(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Sn(n, e, t) {
  return (e = wn(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function wn(n) {
  var e = kn(n, "string");
  return G(e) == "symbol" ? e : e + "";
}
function kn(n, e) {
  if (G(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (G(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function _(n) {
  return zn(n) || Pn(n) || Ye(n) || Cn();
}
function Cn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ye(n, e) {
  if (n) {
    if (typeof n == "string") return be(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? be(n, e) : void 0;
  }
}
function Pn(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function zn(n) {
  if (Array.isArray(n)) return be(n);
}
function be(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
  return r;
}
var Ze = {
  name: "TreeTable",
  extends: qt,
  inheritAttrs: !1,
  emits: ["node-expand", "node-collapse", "update:expandedKeys", "update:selectionKeys", "node-select", "node-unselect", "update:first", "update:rows", "page", "update:sortField", "update:sortOrder", "update:multiSortMeta", "sort", "filter", "column-resize-end"],
  provide: function() {
    return {
      $columns: this.d_columns
    };
  },
  data: function() {
    return {
      d_expandedKeys: this.expandedKeys || {},
      d_first: this.first,
      d_rows: this.rows,
      d_sortField: this.sortField,
      d_sortOrder: this.sortOrder,
      d_multiSortMeta: this.multiSortMeta ? _(this.multiSortMeta) : [],
      hasASelectedNode: !1,
      d_columns: new kt({
        type: "Column"
      })
    };
  },
  documentColumnResizeListener: null,
  documentColumnResizeEndListener: null,
  lastResizeHelperX: null,
  resizeColumnElement: null,
  watch: {
    expandedKeys: function(e) {
      this.d_expandedKeys = e;
    },
    first: function(e) {
      this.d_first = e;
    },
    rows: function(e) {
      this.d_rows = e;
    },
    sortField: function(e) {
      this.d_sortField = e;
    },
    sortOrder: function(e) {
      this.d_sortOrder = e;
    },
    multiSortMeta: function(e) {
      this.d_multiSortMeta = e;
    }
  },
  mounted: function() {
    this.$el.setAttribute(this.attributeSelector, "");
  },
  beforeUnmount: function() {
    this.destroyStyleElement(), this.d_columns.clear();
  },
  methods: {
    columnProp: function(e, t) {
      return q(e, t);
    },
    ptHeaderCellOptions: function(e) {
      return {
        context: {
          frozen: this.columnProp(e, "frozen")
        }
      };
    },
    onNodeToggle: function(e) {
      var t = this.nodeKey(e);
      this.d_expandedKeys[t] ? (delete this.d_expandedKeys[t], this.$emit("node-collapse", e)) : (this.d_expandedKeys[t] = !0, this.$emit("node-expand", e)), this.d_expandedKeys = j({}, this.d_expandedKeys), this.$emit("update:expandedKeys", this.d_expandedKeys);
    },
    onNodeClick: function(e) {
      if (this.rowSelectionMode && e.node.selectable !== !1) {
        var t = e.nodeTouched ? !1 : this.metaKeySelection, r = t ? this.handleSelectionWithMetaKey(e) : this.handleSelectionWithoutMetaKey(e);
        this.$emit("update:selectionKeys", r);
      }
    },
    nodeKey: function(e) {
      return I(e, this.dataKey);
    },
    handleSelectionWithMetaKey: function(e) {
      var t = e.originalEvent, r = e.node, l = this.nodeKey(r), o = t.metaKey || t.ctrlKey, d = this.isNodeSelected(r), s;
      return d && o ? (this.isSingleSelectionMode() ? s = {} : (s = j({}, this.selectionKeys), delete s[l]), this.$emit("node-unselect", r)) : (this.isSingleSelectionMode() ? s = {} : this.isMultipleSelectionMode() && (s = o ? this.selectionKeys ? j({}, this.selectionKeys) : {} : {}), s[l] = !0, this.$emit("node-select", r)), s;
    },
    handleSelectionWithoutMetaKey: function(e) {
      var t = e.node, r = this.nodeKey(t), l = this.isNodeSelected(t), o;
      return this.isSingleSelectionMode() ? l ? (o = {}, this.$emit("node-unselect", t)) : (o = {}, o[r] = !0, this.$emit("node-select", t)) : l ? (o = j({}, this.selectionKeys), delete o[r], this.$emit("node-unselect", t)) : (o = this.selectionKeys ? j({}, this.selectionKeys) : {}, o[r] = !0, this.$emit("node-select", t)), o;
    },
    onCheckboxChange: function(e) {
      this.$emit("update:selectionKeys", e.selectionKeys), e.check ? this.$emit("node-select", e.node) : this.$emit("node-unselect", e.node);
    },
    isSingleSelectionMode: function() {
      return this.selectionMode === "single";
    },
    isMultipleSelectionMode: function() {
      return this.selectionMode === "multiple";
    },
    onPage: function(e) {
      this.d_first = e.first, this.d_rows = e.rows;
      var t = this.createLazyLoadEvent(e);
      t.pageCount = e.pageCount, t.page = e.page, this.d_expandedKeys = {}, this.$emit("update:expandedKeys", this.d_expandedKeys), this.$emit("update:first", this.d_first), this.$emit("update:rows", this.d_rows), this.$emit("page", t);
    },
    resetPage: function() {
      this.d_first = 0, this.$emit("update:first", this.d_first);
    },
    getFilterColumnHeaderClass: function(e) {
      return [this.cx("headerCell", {
        column: e
      }), this.columnProp(e, "filterHeaderClass")];
    },
    onColumnHeaderClick: function(e) {
      var t = e.originalEvent, r = e.column;
      if (this.columnProp(r, "sortable")) {
        var l = t.target, o = this.columnProp(r, "sortField") || this.columnProp(r, "field");
        if (T(l, "data-p-sortable-column") === !0 || T(l, "data-pc-section") === "columntitle" || T(l, "data-pc-section") === "columnheadercontent" || T(l, "data-pc-section") === "sorticon" || T(l.parentElement, "data-pc-section") === "sorticon" || T(l.parentElement.parentElement, "data-pc-section") === "sorticon" || l.closest('[data-p-sortable-column="true"]')) {
          if (Ct(), this.sortMode === "single")
            this.d_sortField === o ? this.removableSort && this.d_sortOrder * -1 === this.defaultSortOrder ? (this.d_sortOrder = null, this.d_sortField = null) : this.d_sortOrder = this.d_sortOrder * -1 : (this.d_sortOrder = this.defaultSortOrder, this.d_sortField = o), this.$emit("update:sortField", this.d_sortField), this.$emit("update:sortOrder", this.d_sortOrder), this.resetPage();
          else if (this.sortMode === "multiple") {
            var d = t.metaKey || t.ctrlKey;
            d || (this.d_multiSortMeta = this.d_multiSortMeta.filter(function(s) {
              return s.field === o;
            })), this.addMultiSortField(o), this.$emit("update:multiSortMeta", this.d_multiSortMeta);
          }
          this.$emit("sort", this.createLazyLoadEvent(t));
        }
      }
    },
    addMultiSortField: function(e) {
      var t = this.d_multiSortMeta.findIndex(function(r) {
        return r.field === e;
      });
      t >= 0 ? this.removableSort && this.d_multiSortMeta[t].order * -1 === this.defaultSortOrder ? this.d_multiSortMeta.splice(t, 1) : this.d_multiSortMeta[t] = {
        field: e,
        order: this.d_multiSortMeta[t].order * -1
      } : this.d_multiSortMeta.push({
        field: e,
        order: this.defaultSortOrder
      }), this.d_multiSortMeta = _(this.d_multiSortMeta);
    },
    sortSingle: function(e) {
      return this.sortNodesSingle(e);
    },
    sortNodesSingle: function(e) {
      var t = this, r = _(e), l = ze();
      return r.sort(function(o, d) {
        var s = I(o.data, t.d_sortField), c = I(d.data, t.d_sortField);
        return Oe(s, c, t.d_sortOrder, l);
      }), r;
    },
    sortMultiple: function(e) {
      return this.sortNodesMultiple(e);
    },
    sortNodesMultiple: function(e) {
      var t = this, r = _(e);
      return r.sort(function(l, o) {
        return t.multisortField(l, o, 0);
      }), r;
    },
    multisortField: function(e, t, r) {
      var l = I(e.data, this.d_multiSortMeta[r].field), o = I(t.data, this.d_multiSortMeta[r].field), d = ze();
      return l === o ? this.d_multiSortMeta.length - 1 > r ? this.multisortField(e, t, r + 1) : 0 : Oe(l, o, this.d_multiSortMeta[r].order, d);
    },
    filter: function(e) {
      var t = [], r = this.filterMode === "strict", l = ee(e), o;
      try {
        for (l.s(); !(o = l.n()).done; ) {
          for (var d = o.value, s = j({}, d), c = !0, u = !1, i = 0; i < this.columns.length; i++) {
            var v = this.columns[i], M = this.columnProp(v, "filterField") || this.columnProp(v, "field");
            if (Object.prototype.hasOwnProperty.call(this.filters, M)) {
              var ne = this.columnProp(v, "filterMatchMode") || "startsWith", re = this.filters[M], oe = Pe.filters[ne], L = {
                filterField: M,
                filterValue: re,
                filterConstraint: oe,
                strict: r
              };
              if ((r && !(this.findFilteredNodes(s, L) || this.isFilterMatched(s, L)) || !r && !(this.isFilterMatched(s, L) || this.findFilteredNodes(s, L))) && (c = !1), !c)
                break;
            }
            if (this.hasGlobalFilter() && !u) {
              var E = j({}, s), le = this.filters.global, ie = Pe.filters.contains, R = {
                filterField: M,
                filterValue: le,
                filterConstraint: ie,
                strict: r
              };
              (r && (this.findFilteredNodes(E, R) || this.isFilterMatched(E, R)) || !r && (this.isFilterMatched(E, R) || this.findFilteredNodes(E, R))) && (u = !0, s = E);
            }
          }
          var J = c;
          this.hasGlobalFilter() && (J = c && u), J && t.push(s);
        }
      } catch (Z) {
        l.e(Z);
      } finally {
        l.f();
      }
      var Y = this.createLazyLoadEvent(event);
      return Y.filteredValue = t, this.$emit("filter", Y), t;
    },
    findFilteredNodes: function(e, t) {
      if (e) {
        var r = !1;
        if (e.children) {
          var l = _(e.children);
          e.children = [];
          var o = ee(l), d;
          try {
            for (o.s(); !(d = o.n()).done; ) {
              var s = d.value, c = j({}, s);
              this.isFilterMatched(c, t) && (r = !0, e.children.push(c));
            }
          } catch (u) {
            o.e(u);
          } finally {
            o.f();
          }
        }
        if (r)
          return !0;
      }
    },
    isFilterMatched: function(e, t) {
      var r = t.filterField, l = t.filterValue, o = t.filterConstraint, d = t.strict, s = !1, c = I(e.data, r);
      return o(c, l, this.filterLocale) && (s = !0), (!s || d && !this.isNodeLeaf(e)) && (s = this.findFilteredNodes(e, {
        filterField: r,
        filterValue: l,
        filterConstraint: o,
        strict: d
      }) || s), s;
    },
    isNodeSelected: function(e) {
      return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.nodeKey(e)] === !0 : !1;
    },
    isNodeLeaf: function(e) {
      return e.leaf === !1 ? !1 : !(e.children && e.children.length);
    },
    createLazyLoadEvent: function(e) {
      var t = this, r;
      return this.hasFilters() && (r = {}, this.columns.forEach(function(l) {
        t.columnProp(l, "field") && (r[l.props.field] = t.columnProp(l, "filterMatchMode"));
      })), {
        originalEvent: e,
        first: this.d_first,
        rows: this.d_rows,
        sortField: this.d_sortField,
        sortOrder: this.d_sortOrder,
        multiSortMeta: this.d_multiSortMeta,
        filters: this.filters,
        filterMatchModes: r
      };
    },
    onColumnResizeStart: function(e) {
      var t = Te(this.$el).left;
      this.resizeColumnElement = e.target.parentElement, this.columnResizing = !0, this.lastResizeHelperX = e.pageX - t + this.$el.scrollLeft, this.bindColumnResizeEvents();
    },
    onColumnResize: function(e) {
      var t = Te(this.$el).left;
      this.$el.setAttribute("data-p-unselectable-text", "true"), !this.isUnstyled && Pt(this.$el, {
        "user-select": "none"
      }), this.$refs.resizeHelper.style.height = this.$el.offsetHeight + "px", this.$refs.resizeHelper.style.top = "0px", this.$refs.resizeHelper.style.left = e.pageX - t + this.$el.scrollLeft + "px", this.$refs.resizeHelper.style.display = "block";
    },
    onColumnResizeEnd: function() {
      var e = this.$refs.resizeHelper.offsetLeft - this.lastResizeHelperX, t = this.resizeColumnElement.offsetWidth, r = t + e, l = this.resizeColumnElement.style.minWidth || 15;
      if (t + e > parseInt(l, 10)) {
        if (this.columnResizeMode === "fit") {
          var o = this.resizeColumnElement.nextElementSibling, d = o.offsetWidth - e;
          r > 15 && d > 15 && this.resizeTableCells(r, d);
        } else if (this.columnResizeMode === "expand") {
          var s = this.$refs.table.offsetWidth + e + "px", c = function(i) {
            i && (i.style.width = i.style.minWidth = s);
          };
          this.resizeTableCells(r), c(this.$refs.table);
        }
        this.$emit("column-resize-end", {
          element: this.resizeColumnElement,
          delta: e
        });
      }
      this.$refs.resizeHelper.style.display = "none", this.resizeColumn = null, this.$el.removeAttribute("data-p-unselectable-text"), !this.isUnstyled && (this.$el.style["user-select"] = ""), this.unbindColumnResizeEvents();
    },
    resizeTableCells: function(e, t) {
      var r = Ve(this.resizeColumnElement), l = [], o = te(this.$refs.table, 'thead[data-pc-section="thead"] > tr > th');
      o.forEach(function(c) {
        return l.push(N(c));
      }), this.destroyStyleElement(), this.createStyleElement();
      var d = "", s = '[data-pc-name="treetable"]['.concat(this.attributeSelector, '] > [data-pc-section="tablecontainer"] > table[data-pc-section="table"]');
      l.forEach(function(c, u) {
        var i = u === r ? e : t && u === r + 1 ? t : c, v = "width: ".concat(i, "px !important; max-width: ").concat(i, "px !important");
        d += `
                    `.concat(s, ' > thead[data-pc-section="thead"] > tr > th:nth-child(').concat(u + 1, `),
                    `).concat(s, ' > tbody[data-pc-section="tbody"] > tr > td:nth-child(').concat(u + 1, `),
                    `).concat(s, ' > tfoot[data-pc-section="tfoot"] > tr > td:nth-child(').concat(u + 1, `) {
                        `).concat(v, `
                    }
                `);
      }), this.styleElement.innerHTML = d;
    },
    bindColumnResizeEvents: function() {
      var e = this;
      this.documentColumnResizeListener || (this.documentColumnResizeListener = document.addEventListener("mousemove", function(t) {
        e.columnResizing && e.onColumnResize(t);
      })), this.documentColumnResizeEndListener || (this.documentColumnResizeEndListener = document.addEventListener("mouseup", function() {
        e.columnResizing && (e.columnResizing = !1, e.onColumnResizeEnd());
      }));
    },
    unbindColumnResizeEvents: function() {
      this.documentColumnResizeListener && (document.removeEventListener("document", this.documentColumnResizeListener), this.documentColumnResizeListener = null), this.documentColumnResizeEndListener && (document.removeEventListener("document", this.documentColumnResizeEndListener), this.documentColumnResizeEndListener = null);
    },
    onColumnKeyDown: function(e, t) {
      (e.code === "Enter" || e.code === "NumpadEnter") && e.currentTarget.nodeName === "TH" && T(e.currentTarget, "data-p-sortable-column") && this.onColumnHeaderClick(e, t);
    },
    hasColumnFilter: function() {
      if (this.columns) {
        var e = ee(this.columns), t;
        try {
          for (e.s(); !(t = e.n()).done; ) {
            var r = t.value;
            if (r.children && r.children.filter)
              return !0;
          }
        } catch (l) {
          e.e(l);
        } finally {
          e.f();
        }
      }
      return !1;
    },
    hasFilters: function() {
      return this.filters && Object.keys(this.filters).length > 0 && this.filters.constructor === Object;
    },
    hasGlobalFilter: function() {
      return this.filters && Object.prototype.hasOwnProperty.call(this.filters, "global");
    },
    getItemLabel: function(e) {
      return e.data.name;
    },
    createStyleElement: function() {
      var e;
      this.styleElement = document.createElement("style"), this.styleElement.type = "text/css", zt(this.styleElement, "nonce", (e = this.$primevue) === null || e === void 0 || (e = e.config) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce), document.head.appendChild(this.styleElement);
    },
    destroyStyleElement: function() {
      this.styleElement && (document.head.removeChild(this.styleElement), this.styleElement = null);
    },
    setTabindex: function(e, t) {
      if (this.isNodeSelected(e))
        return this.hasASelectedNode = !0, 0;
      if (this.selectionMode) {
        if (!this.isNodeSelected(e) && t === 0 && !this.hasASelectedNode) return 0;
      } else if (!this.selectionMode && t === 0)
        return 0;
      return -1;
    }
  },
  computed: {
    columns: function() {
      return this.d_columns.get(this);
    },
    processedData: function() {
      if (this.lazy)
        return this.value;
      if (this.value && this.value.length) {
        var e = this.value;
        return this.sorted && (this.sortMode === "single" ? e = this.sortSingle(e) : this.sortMode === "multiple" && (e = this.sortMultiple(e))), this.hasFilters() && (e = this.filter(e)), e;
      } else
        return null;
    },
    dataToRender: function() {
      var e = this.processedData;
      if (this.paginator) {
        var t = this.lazy ? 0 : this.d_first;
        return e.slice(t, t + this.d_rows);
      } else
        return e;
    },
    empty: function() {
      var e = this.processedData;
      return !e || e.length === 0;
    },
    sorted: function() {
      return this.d_sortField || this.d_multiSortMeta && this.d_multiSortMeta.length > 0;
    },
    hasFooter: function() {
      var e = !1, t = ee(this.columns), r;
      try {
        for (t.s(); !(r = t.n()).done; ) {
          var l = r.value;
          if (this.columnProp(l, "footer") || l.children && l.children.footer) {
            e = !0;
            break;
          }
        }
      } catch (o) {
        t.e(o);
      } finally {
        t.f();
      }
      return e;
    },
    paginatorTop: function() {
      return this.paginator && (this.paginatorPosition !== "bottom" || this.paginatorPosition === "both");
    },
    paginatorBottom: function() {
      return this.paginator && (this.paginatorPosition !== "top" || this.paginatorPosition === "both");
    },
    singleSelectionMode: function() {
      return this.selectionMode && this.selectionMode === "single";
    },
    multipleSelectionMode: function() {
      return this.selectionMode && this.selectionMode === "multiple";
    },
    rowSelectionMode: function() {
      return this.singleSelectionMode || this.multipleSelectionMode;
    },
    totalRecordsLength: function() {
      if (this.lazy)
        return this.totalRecords;
      var e = this.processedData;
      return e ? e.length : 0;
    },
    attributeSelector: function() {
      return Ot();
    }
  },
  components: {
    TTRow: Je,
    TTPaginator: Tt,
    TTHeaderCell: Xe,
    TTFooterCell: Ge,
    SpinnerIcon: We
  }
};
function X(n) {
  "@babel/helpers - typeof";
  return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, X(n);
}
function _e(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function $e(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _e(Object(t), !0).forEach(function(r) {
      On(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : _e(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function On(n, e, t) {
  return (e = Tn(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Tn(n) {
  var e = Mn(n, "string");
  return X(e) == "symbol" ? e : e + "";
}
function Mn(n, e) {
  if (X(n) != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (X(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
var xn = ["colspan"];
function Kn(n, e, t, r, l, o) {
  var d = K("TTPaginator"), s = K("TTHeaderCell"), c = K("TTRow"), u = K("TTFooterCell");
  return a(), f("div", p({
    class: n.cx("root"),
    "data-scrollselectors": ".p-treetable-scrollable-body"
  }, n.ptmi("root")), [y(n.$slots, "default"), n.loading && n.loadingMode === "mask" ? (a(), f("div", p({
    key: 0,
    class: n.cx("loading")
  }, n.ptm("loading")), [C("div", p({
    class: n.cx("mask")
  }, n.ptm("mask")), [y(n.$slots, "loadingicon", {
    class: w(n.cx("loadingIcon"))
  }, function() {
    return [(a(), b(O(n.loadingIcon ? "span" : "SpinnerIcon"), p({
      spin: "",
      class: [n.cx("loadingIcon"), n.loadingIcon]
    }, n.ptm("loadingIcon")), null, 16, ["class"]))];
  })], 16)], 16)) : h("", !0), n.$slots.header ? (a(), f("div", p({
    key: 1,
    class: n.cx("header")
  }, n.ptm("header")), [y(n.$slots, "header")], 16)) : h("", !0), o.paginatorTop ? (a(), b(d, {
    key: 2,
    rows: l.d_rows,
    first: l.d_first,
    totalRecords: o.totalRecordsLength,
    pageLinkSize: n.pageLinkSize,
    template: n.paginatorTemplate,
    rowsPerPageOptions: n.rowsPerPageOptions,
    currentPageReportTemplate: n.currentPageReportTemplate,
    class: w(n.cx("pcPaginator", {
      position: "top"
    })),
    onPage: e[0] || (e[0] = function(i) {
      return o.onPage(i);
    }),
    alwaysShow: n.alwaysShowPaginator,
    unstyled: n.unstyled,
    pt: n.ptm("pcPaginator")
  }, fe({
    _: 2
  }, [n.$slots.paginatorstart ? {
    name: "start",
    fn: g(function() {
      return [y(n.$slots, "paginatorstart")];
    }),
    key: "0"
  } : void 0, n.$slots.paginatorend ? {
    name: "end",
    fn: g(function() {
      return [y(n.$slots, "paginatorend")];
    }),
    key: "1"
  } : void 0, n.$slots.paginatorfirstpagelinkicon ? {
    name: "firstpagelinkicon",
    fn: g(function(i) {
      return [y(n.$slots, "paginatorfirstpagelinkicon", {
        class: w(i.class)
      })];
    }),
    key: "2"
  } : void 0, n.$slots.paginatorprevpagelinkicon ? {
    name: "prevpagelinkicon",
    fn: g(function(i) {
      return [y(n.$slots, "paginatorprevpagelinkicon", {
        class: w(i.class)
      })];
    }),
    key: "3"
  } : void 0, n.$slots.paginatornextpagelinkicon ? {
    name: "nextpagelinkicon",
    fn: g(function(i) {
      return [y(n.$slots, "paginatornextpagelinkicon", {
        class: w(i.class)
      })];
    }),
    key: "4"
  } : void 0, n.$slots.paginatorlastpagelinkicon ? {
    name: "lastpagelinkicon",
    fn: g(function(i) {
      return [y(n.$slots, "paginatorlastpagelinkicon", {
        class: w(i.class)
      })];
    }),
    key: "5"
  } : void 0, n.$slots.paginatorjumptopagedropdownicon ? {
    name: "jumptopagedropdownicon",
    fn: g(function(i) {
      return [y(n.$slots, "paginatorjumptopagedropdownicon", {
        class: w(i.class)
      })];
    }),
    key: "6"
  } : void 0, n.$slots.paginatorrowsperpagedropdownicon ? {
    name: "rowsperpagedropdownicon",
    fn: g(function(i) {
      return [y(n.$slots, "paginatorrowsperpagedropdownicon", {
        class: w(i.class)
      })];
    }),
    key: "7"
  } : void 0]), 1032, ["rows", "first", "totalRecords", "pageLinkSize", "template", "rowsPerPageOptions", "currentPageReportTemplate", "class", "alwaysShow", "unstyled", "pt"])) : h("", !0), C("div", p({
    class: n.cx("tableContainer"),
    style: [n.sx("tableContainer"), {
      maxHeight: n.scrollHeight
    }]
  }, n.ptm("tableContainer")), [C("table", p({
    ref: "table",
    role: "table",
    class: [n.cx("table"), n.tableClass],
    style: n.tableStyle
  }, $e($e({}, n.tableProps), n.ptm("table"))), [C("thead", p({
    class: n.cx("thead"),
    style: n.sx("thead"),
    role: "rowgroup"
  }, n.ptm("thead")), [C("tr", p({
    role: "row"
  }, n.ptm("headerRow")), [(a(!0), f(z, null, D(o.columns, function(i, v) {
    return a(), f(z, {
      key: o.columnProp(i, "columnKey") || o.columnProp(i, "field") || v
    }, [o.columnProp(i, "hidden") ? h("", !0) : (a(), b(s, {
      key: 0,
      column: i,
      resizableColumns: n.resizableColumns,
      sortField: l.d_sortField,
      sortOrder: l.d_sortOrder,
      multiSortMeta: l.d_multiSortMeta,
      sortMode: n.sortMode,
      onColumnClick: e[1] || (e[1] = function(M) {
        return o.onColumnHeaderClick(M);
      }),
      onColumnResizestart: e[2] || (e[2] = function(M) {
        return o.onColumnResizeStart(M);
      }),
      index: v,
      unstyled: n.unstyled,
      pt: n.pt
    }, null, 8, ["column", "resizableColumns", "sortField", "sortOrder", "multiSortMeta", "sortMode", "index", "unstyled", "pt"]))], 64);
  }), 128))], 16), o.hasColumnFilter() ? (a(), f("tr", Ue(p({
    key: 0
  }, n.ptm("headerRow"))), [(a(!0), f(z, null, D(o.columns, function(i, v) {
    return a(), f(z, {
      key: o.columnProp(i, "columnKey") || o.columnProp(i, "field") || v
    }, [o.columnProp(i, "hidden") ? h("", !0) : (a(), f("th", p({
      key: 0,
      class: o.getFilterColumnHeaderClass(i),
      style: [o.columnProp(i, "style"), o.columnProp(i, "filterHeaderStyle")],
      ref_for: !0
    }, n.ptm("headerCell", o.ptHeaderCellOptions(i))), [i.children && i.children.filter ? (a(), b(O(i.children.filter), {
      key: 0,
      column: i,
      index: v
    }, null, 8, ["column", "index"])) : h("", !0)], 16))], 64);
  }), 128))], 16)) : h("", !0)], 16), C("tbody", p({
    class: n.cx("tbody"),
    role: "rowgroup"
  }, n.ptm("tbody")), [o.empty ? (a(), f("tr", p({
    key: 1,
    class: n.cx("emptyMessage")
  }, n.ptm("emptyMessage")), [C("td", p({
    colspan: o.columns.length
  }, n.ptm("emptyMessageCell")), [y(n.$slots, "empty")], 16, xn)], 16)) : (a(!0), f(z, {
    key: 0
  }, D(o.dataToRender, function(i, v) {
    return a(), b(c, {
      key: o.nodeKey(i),
      dataKey: n.dataKey,
      columns: o.columns,
      node: i,
      level: 0,
      expandedKeys: l.d_expandedKeys,
      indentation: n.indentation,
      selectionMode: n.selectionMode,
      selectionKeys: n.selectionKeys,
      ariaSetSize: o.dataToRender.length,
      ariaPosInset: v + 1,
      tabindex: o.setTabindex(i, v),
      loadingMode: n.loadingMode,
      templates: n.$slots,
      onNodeToggle: o.onNodeToggle,
      onNodeClick: o.onNodeClick,
      onCheckboxChange: o.onCheckboxChange,
      unstyled: n.unstyled,
      pt: n.pt
    }, null, 8, ["dataKey", "columns", "node", "expandedKeys", "indentation", "selectionMode", "selectionKeys", "ariaSetSize", "ariaPosInset", "tabindex", "loadingMode", "templates", "onNodeToggle", "onNodeClick", "onCheckboxChange", "unstyled", "pt"]);
  }), 128))], 16), o.hasFooter ? (a(), f("tfoot", p({
    key: 0,
    class: n.cx("tfoot"),
    style: n.sx("tfoot"),
    role: "rowgroup"
  }, n.ptm("tfoot")), [C("tr", p({
    role: "row"
  }, n.ptm("footerRow")), [(a(!0), f(z, null, D(o.columns, function(i, v) {
    return a(), f(z, {
      key: o.columnProp(i, "columnKey") || o.columnProp(i, "field") || v
    }, [o.columnProp(i, "hidden") ? h("", !0) : (a(), b(u, {
      key: 0,
      column: i,
      index: v,
      unstyled: n.unstyled,
      pt: n.pt
    }, null, 8, ["column", "index", "unstyled", "pt"]))], 64);
  }), 128))], 16)], 16)) : h("", !0)], 16)], 16), o.paginatorBottom ? (a(), b(d, {
    key: 3,
    rows: l.d_rows,
    first: l.d_first,
    totalRecords: o.totalRecordsLength,
    pageLinkSize: n.pageLinkSize,
    template: n.paginatorTemplate,
    rowsPerPageOptions: n.rowsPerPageOptions,
    currentPageReportTemplate: n.currentPageReportTemplate,
    class: w(n.cx("pcPaginator", {
      position: "bottom"
    })),
    onPage: e[3] || (e[3] = function(i) {
      return o.onPage(i);
    }),
    alwaysShow: n.alwaysShowPaginator,
    unstyled: n.unstyled,
    pt: n.ptm("pcPaginator")
  }, fe({
    _: 2
  }, [n.$slots.paginatorstart ? {
    name: "start",
    fn: g(function() {
      return [y(n.$slots, "paginatorstart")];
    }),
    key: "0"
  } : void 0, n.$slots.paginatorend ? {
    name: "end",
    fn: g(function() {
      return [y(n.$slots, "paginatorend")];
    }),
    key: "1"
  } : void 0, n.$slots.paginatorfirstpagelinkicon ? {
    name: "firstpagelinkicon",
    fn: g(function(i) {
      return [y(n.$slots, "paginatorfirstpagelinkicon", {
        class: w(i.class)
      })];
    }),
    key: "2"
  } : void 0, n.$slots.paginatorprevpagelinkicon ? {
    name: "prevpagelinkicon",
    fn: g(function(i) {
      return [y(n.$slots, "paginatorprevpagelinkicon", {
        class: w(i.class)
      })];
    }),
    key: "3"
  } : void 0, n.$slots.paginatornextpagelinkicon ? {
    name: "nextpagelinkicon",
    fn: g(function(i) {
      return [y(n.$slots, "paginatornextpagelinkicon", {
        class: w(i.class)
      })];
    }),
    key: "4"
  } : void 0, n.$slots.paginatorlastpagelinkicon ? {
    name: "lastpagelinkicon",
    fn: g(function(i) {
      return [y(n.$slots, "paginatorlastpagelinkicon", {
        class: w(i.class)
      })];
    }),
    key: "5"
  } : void 0, n.$slots.paginatorjumptopagedropdownicon ? {
    name: "jumptopagedropdownicon",
    fn: g(function(i) {
      return [y(n.$slots, "paginatorjumptopagedropdownicon", {
        class: w(i.class)
      })];
    }),
    key: "6"
  } : void 0, n.$slots.paginatorrowsperpagedropdownicon ? {
    name: "rowsperpagedropdownicon",
    fn: g(function(i) {
      return [y(n.$slots, "paginatorrowsperpagedropdownicon", {
        class: w(i.class)
      })];
    }),
    key: "7"
  } : void 0]), 1032, ["rows", "first", "totalRecords", "pageLinkSize", "template", "rowsPerPageOptions", "currentPageReportTemplate", "class", "alwaysShow", "unstyled", "pt"])) : h("", !0), n.$slots.footer ? (a(), f("div", p({
    key: 4,
    class: n.cx("footer")
  }, n.ptm("footer")), [y(n.$slots, "footer")], 16)) : h("", !0), C("div", p({
    ref: "resizeHelper",
    class: n.cx("columnResizeIndicator"),
    style: {
      display: "none"
    }
  }, n.ptm("columnResizeIndicator")), null, 16)], 16);
}
Ze.render = Kn;
const En = { class: "flex" }, jn = { key: 0 }, In = { class: "ml-auto flex gap-x-2" }, Rn = { class: "flex items-center justify-between" }, Fn = { class: "flex items-center gap-x-2" }, Dn = { class: "text-sm" }, Nn = { class: "text-sm" }, ar = /* @__PURE__ */ mt({
  __name: "TableTree",
  props: {
    records: {},
    title: {},
    showHeader: { type: Boolean },
    showHoverRow: { type: Boolean, default: !0 },
    showLinesColumn: { type: Boolean, default: !0 },
    showLinesRow: { type: Boolean, default: !0 },
    showStripedRows: { type: Boolean, default: !0 },
    showRowsPerPage: { type: Boolean, default: !0 },
    showSearch: { type: Boolean, default: !0 },
    showPagination: { type: Boolean },
    showAddEntity: { type: Boolean, default: !1 },
    hideHeaders: { type: Boolean },
    multiSelect: { type: Boolean, default: !1 },
    columns: {},
    columnsResize: { type: Boolean, default: !0 },
    columnsReorder: { type: Boolean, default: !0 },
    rowsPerPage: {},
    load: {},
    remote: { type: Boolean },
    remoteMax: {},
    addEntityConfig: {}
  },
  emits: ["load"],
  setup(n, { expose: e, emit: t }) {
    const r = n, l = t, o = yt([]), { columnsConfig: d, search: s, rowsPerPage: c, propsComponent: u, loading: i, recordsCached: v, start: M, isPageFirst: ne, isPageLast: re, totalPages: oe, recordsTotal: L, currentPage: E, startDisplay: le, endDisplay: ie, loadRecords: R, getColumnMenuConfig: J, getNodeDisplay: Y, getCellClass: Z, getNodeParams: et, previousPage: tt, nextPage: nt, changePage: rt, changeRowsPerPage: ot, filters: ae } = _t(r, l);
    function lt() {
      v.value = [];
    }
    function it() {
      E.value = 1;
    }
    async function at() {
      return lt(), R();
    }
    function st() {
      tt();
    }
    function ct() {
      nt();
    }
    function dt(S) {
      ot(S);
    }
    function ut(S) {
      rt(S);
    }
    function ge() {
      r.remote ? (it(), at()) : ae.global = {
        value: s.value,
        matchMode: se.CONTAINS
      };
    }
    function ve({ record: S, filters: F, filterFields: k }) {
      let P = je(k);
      const { data: we } = S;
      for (const A of k) {
        const { matchMode: pt, value: ke } = F[A];
        switch (pt) {
          case se.EQUALS:
            P = we[A] === ke;
            break;
          case se.NOT_EQUALS:
            P = we[A] !== ke;
            break;
        }
        if (P)
          break;
      }
      return S.children && (S.children = S.children.filter((A) => ve({
        filters: F,
        filterFields: k,
        record: A
      })), P = !je(S.children)), P;
    }
    function Se() {
      const S = m(ae), F = Object.keys(S), k = Ut(v.value);
      o.value = k.filter((P) => ve({
        record: P,
        filters: S,
        filterFields: F
      }));
    }
    return Ce(ae, () => Se(), {
      deep: !0,
      immediate: !0
    }), Ce(v, () => Se(), {
      immediate: !0,
      deep: !0
    }), R(), e({
      records: v
    }), (S, F) => (a(), b(m(Ze), p(m(u), {
      value: m(i) ? [] : o.value,
      first: m(M),
      loading: m(i),
      rows: m(c),
      "filter-mode": "strict",
      class: ["w-full", S.hideHeaders ? "table-hide-headers" : void 0]
    }), {
      header: g(() => [
        C("section", En, [
          S.title ? (a(), f("h2", jn, x(S.title), 1)) : h("", !0),
          C("section", In, [
            y(S.$slots, "beforeSearch"),
            S.showSearch ? (a(), b(Bt, {
              key: 0,
              modelValue: m(s),
              "onUpdate:modelValue": F[0] || (F[0] = (k) => gt(s) ? s.value = k : null),
              label: "Search",
              onInputClear: ge,
              onInputEnd: ge
            }, null, 8, ["modelValue"])) : h("", !0),
            S.showAddEntity ? y(S.$slots, "addEntity", { key: 1 }, () => [
              B(de, p(S.addEntityConfig, { icon: Ft }), null, 16)
            ]) : h("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        C("article", Rn, [
          S.showRowsPerPage ? (a(), b(vt, {
            key: 0,
            "model-value": m(c),
            class: "w-auto",
            "label-cls": "text-sm",
            label: "Rows",
            options: m($t),
            "onUpdate:modelValue": dt
          }, null, 8, ["model-value", "options"])) : h("", !0),
          C("section", Fn, [
            B(de, {
              title: "Previous",
              disabled: m(ne),
              plain: "",
              class: "!p-0",
              icon: Dt,
              "icon-cls": "h-8 w-8",
              onClick: st
            }, null, 8, ["disabled"]),
            B(At, {
              label: "Page",
              "input-width": "w-10",
              "input-cls": "text-center !px-2 !py-1",
              "label-cls": "text-sm",
              min: 1,
              "model-value": m(E),
              "onUpdate:modelValue": ut
            }, null, 8, ["model-value"]),
            C("span", Dn, "of " + x(m(oe)), 1),
            B(de, {
              title: "Next",
              disabled: m(re),
              plain: "",
              class: "!p-0",
              icon: Nt,
              "icon-cls": "h-8 w-8",
              onClick: ct
            }, null, 8, ["disabled"])
          ]),
          C("span", Nn, x(m(le)) + " - " + x(m(ie)) + " of " + x(m(L)), 1)
        ])
      ]),
      default: g(() => [
        (a(!0), f(z, null, D(m(d), (k) => (a(), b(m(St), p({
          key: k.id,
          ref_for: !0
        }, k.props), fe({
          sorticon: g((P) => [
            P.sorted ? (a(), b(Lt, {
              key: 0,
              class: w(["ml-1.5 size-4", P.sortOrder === 1 ? "rotate-180 -scale-x-100" : ""])
            }, null, 8, ["class"])) : h("", !0)
          ]),
          body: g((P) => [
            k.cellComponent ? (a(), b(O(k.cellComponent), p({
              key: 0,
              ref_for: !0
            }, m(et)(k, P.node), {
              class: m(Z)(k, P.node)
            }), null, 16, ["class"])) : (a(), f("span", {
              key: 1,
              class: w(m(Z)(k, P.node))
            }, x(m(Y)(k, P)), 3))
          ]),
          _: 2
        }, [
          k.showMenu ?? !0 ? {
            name: "header",
            fn: g(() => [
              B(Ht, {
                "button-config": { plain: !0 },
                "menu-config": m(J)(k),
                class: "absolute right-1"
              }, null, 8, ["menu-config"])
            ]),
            key: "0"
          } : void 0
        ]), 1040))), 128))
      ]),
      _: 3
    }, 16, ["value", "first", "loading", "rows", "class"]));
  }
});
export {
  ar as TableTree
};
