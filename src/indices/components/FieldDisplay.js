import { defineComponent as a, openBlock as l, createBlock as o, normalizeProps as r, guardReactiveProps as p, withCtx as s, createElementVNode as t, toDisplayString as i } from "vue";
import { _ as n } from "../../../BaseField.vue_vue_type_script_setup_true_lang-LU5T51M2.js";
const d = /* @__PURE__ */ a({
  __name: "FieldDisplay",
  props: {
    value: {},
    label: {},
    labelPosition: {},
    labelCls: {}
  },
  setup(m) {
    return (e, _) => (l(), o(n, r(p(e.$props)), {
      default: s(() => [
        t("span", null, i(e.value), 1)
      ]),
      _: 1
    }, 16));
  }
});
export {
  d as FieldDisplay
};
