import { openBlock as n, createElementBlock as o, createElementVNode as r, defineComponent as c, createBlock as _, unref as i } from "vue";
import { _ as s } from "./BaseIcon.vue_vue_type_script_setup_true_lang-m0tdX16K.js";
const l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 -960 960 960"
};
function m(t, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    r("path", { d: "M530-481 332-679l43-43 241 241-241 241-43-43z" }, null, -1)
  ]));
}
const a = { render: m }, f = /* @__PURE__ */ c({
  __name: "IconPageRight",
  setup(t) {
    return (e, p) => (n(), _(s, { icon: i(a) }, null, 8, ["icon"]));
  }
});
export {
  f as _
};
