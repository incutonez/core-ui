import { openBlock as n, createElementBlock as o, createElementVNode as r, defineComponent as c, createBlock as m, unref as s } from "vue";
import { _ } from "./BaseIcon.vue_vue_type_script_setup_true_lang-m0tdX16K.js";
const h = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 -960 960 960"
};
function i(t, e) {
  return n(), o("svg", h, e[0] || (e[0] = [
    r("path", { d: "M140-160q-24.75 0-42.37-17.63Q80-195.25 80-220v-520q0-24.75 17.63-42.38Q115.25-800 140-800h680q24.75 0 42.38 17.62Q880-764.75 880-740v520q0 24.75-17.62 42.37Q844.75-160 820-160zm0-60h70v-520h-70zm130 0h420v-520H270zm480 0h70v-520h-70zM270-740v520z" }, null, -1)
  ]));
}
const l = { render: i }, v = /* @__PURE__ */ c({
  __name: "IconResetColumn",
  setup(t) {
    return (e, p) => (n(), m(_, { icon: s(l) }, null, 8, ["icon"]));
  }
});
export {
  v as _
};
