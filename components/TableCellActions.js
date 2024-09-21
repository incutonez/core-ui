import { defineComponent as s, openBlock as e, createElementBlock as r, Fragment as l, renderList as c, createBlock as a, mergeProps as i } from "vue";
import { _ as p } from "../BaseButton.vue_vue_type_script_setup_true_lang-bOENwSBS.js";
const _ = { class: "flex" }, d = /* @__PURE__ */ s({
  __name: "TableCellActions",
  props: {
    actions: {}
  },
  setup(m) {
    return (t, f) => (e(), r("article", _, [
      (e(!0), r(l, null, c(t.actions, (n, o) => (e(), a(p, i({
        key: o,
        plain: "",
        class: "!h-6 !p-1",
        ref_for: !0
      }, n), null, 16))), 128))
    ]));
  }
});
export {
  d as TableCellActions
};
