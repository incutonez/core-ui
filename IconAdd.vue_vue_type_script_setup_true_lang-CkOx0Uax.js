import { openBlock as n, createElementBlock as o, createElementVNode as r, defineComponent as c, createBlock as _, unref as s } from "vue";
import { _ as i } from "./BaseIcon.vue_vue_type_script_setup_true_lang-m0tdX16K.js";
const m = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 -960 960 960"
};
function h(t, e) {
  return n(), o("svg", m, e[0] || (e[0] = [
    r("path", { d: "M450-450H200v-60h250v-250h60v250h250v60H510v250h-60z" }, null, -1)
  ]));
}
const l = { render: h }, u = /* @__PURE__ */ c({
  __name: "IconAdd",
  setup(t) {
    return (e, p) => (n(), _(i, { icon: s(l) }, null, 8, ["icon"]));
  }
});
export {
  u as _
};
