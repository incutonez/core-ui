import { defineComponent as t, openBlock as n, createBlock as a, unref as e, normalizeProps as s, guardReactiveProps as p } from "vue";
import { s as r } from "../../../index-ByOyn7eV.js";
import { g as i } from "../../../table-BZxemoEX.js";
const g = /* @__PURE__ */ t({
  __name: "TableColumn",
  props: {
    field: {},
    title: {},
    titleCls: {},
    titleAlign: {},
    id: {},
    key: {},
    sortable: { type: Boolean },
    cellComponent: {},
    cellParams: {},
    cellDisplay: { type: Function },
    cellClass: { type: [String, Function] },
    lock: { type: [String, Boolean] },
    cls: {},
    showMenu: { type: Boolean },
    state: {},
    indexOriginal: {},
    props: {},
    stateful: { type: Boolean },
    expandable: { type: Boolean },
    rowspan: {},
    colspan: {},
    classes: {}
  },
  setup(o) {
    const l = o;
    return (c, m) => (n(), a(e(r), s(p(e(i)(l))), null, 16));
  }
});
export {
  g as TableColumn
};
