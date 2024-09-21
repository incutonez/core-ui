import { openBlock as n, createElementBlock as o, createElementVNode as r, defineComponent as c, createBlock as _, unref as s } from "vue";
import { _ as i } from "./BaseIcon.vue_vue_type_script_setup_true_lang-m0tdX16K.js";
const l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 -960 960 960"
};
function m(t, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    r("path", { d: "M561-240 320-481l241-241 43 43-198 198 198 198z" }, null, -1)
  ]));
}
const a = { render: m }, d = /* @__PURE__ */ c({
  __name: "IconPageLeft",
  setup(t) {
    return (e, p) => (n(), _(i, { icon: s(a) }, null, 8, ["icon"]));
  }
});
export {
  d as _
};
