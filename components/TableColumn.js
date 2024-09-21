import { defineComponent as t, openBlock as n, createBlock as a, unref as e, normalizeProps as p, guardReactiveProps as s } from "vue";
import { s as r } from "../index-ByOyn7eV.js";
import { getColumnProps as i } from "../utils/table.js";
const B = /* @__PURE__ */ t({
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
    return (c, m) => (n(), a(e(r), p(s(e(i)(l))), null, 16));
  }
});
export {
  B as TableColumn
};
