import { openBlock as n, createElementBlock as o, createElementVNode as r, defineComponent as c, createBlock as m, unref as _ } from "vue";
import { _ as i } from "./BaseIcon.vue_vue_type_script_setup_true_lang-m0tdX16K.js";
const l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 -960 960 960"
};
function s(t, e) {
  return n(), o("svg", l, e[0] || (e[0] = [
    r("path", { d: "m634-448 86 77v60H510v241l-30 30-30-30v-241H240v-60l80-77v-332h-50v-60h414v60h-50zm-313 77h312l-59-55v-354H380v354zm156 0" }, null, -1)
  ]));
}
const v = { render: s }, u = /* @__PURE__ */ c({
  __name: "IconPin",
  setup(t) {
    return (e, h) => (n(), m(i, { icon: _(v) }, null, 8, ["icon"]));
  }
});
export {
  u as _
};
