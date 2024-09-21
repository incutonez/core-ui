import { openBlock as n, createElementBlock as o, createElementVNode as r, defineComponent as c, createBlock as _, unref as m } from "vue";
import { _ as s } from "./BaseIcon.vue_vue_type_script_setup_true_lang-m0tdX16K.js";
const i = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 -960 960 960"
};
function l(t, e) {
  return n(), o("svg", i, e[0] || (e[0] = [
    r("path", { d: "M120-240v-60h240v60zm0-210v-60h480v60zm0-210v-60h720v60z" }, null, -1)
  ]));
}
const p = { render: l }, u = /* @__PURE__ */ c({
  __name: "IconSort",
  setup(t) {
    return (e, a) => (n(), _(s, { icon: m(p) }, null, 8, ["icon"]));
  }
});
export {
  u as _
};
