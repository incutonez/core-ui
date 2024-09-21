import { defineComponent as i, ref as f, openBlock as l, createElementBlock as p, createVNode as r, mergeProps as t, withModifiers as u } from "vue";
import { _ as c } from "./IconMenu.vue_vue_type_script_setup_true_lang-RoT2pdyV.js";
import { _ } from "./BaseButton.vue_vue_type_script_setup_true_lang-bOENwSBS.js";
import { _ as a } from "./BaseMenu.vue_vue_type_script_setup_true_lang-BBLCXCi-.js";
const b = /* @__PURE__ */ i({
  __name: "TableCellMenu",
  props: {
    buttonConfig: { default() {
      return {};
    } },
    menuConfig: {}
  },
  setup(s) {
    const o = f();
    function m(e) {
      var n;
      (n = o.value) == null || n.toggle(e);
    }
    return (e, n) => (l(), p("article", null, [
      r(_, t(e.buttonConfig, {
        icon: c,
        onClick: u(m, ["stop"])
      }), null, 16),
      r(a, t({
        ref_key: "menuComponent",
        ref: o
      }, e.menuConfig, { popup: "" }), null, 16)
    ]));
  }
});
export {
  b as _
};
