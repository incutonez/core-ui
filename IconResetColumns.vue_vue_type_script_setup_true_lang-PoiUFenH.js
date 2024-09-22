import { defineComponent as o, openBlock as t, createBlock as r, resolveDynamicComponent as v, createElementBlock as s, createElementVNode as _, unref as h } from "vue";
const i = /* @__PURE__ */ o({
  __name: "BaseIcon",
  props: {
    icon: {}
  },
  setup(e) {
    return (n, c) => (t(), r(v(n.icon)));
  }
}), u = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 -960 960 960"
};
function m(e, n) {
  return t(), s("svg", u, n[0] || (n[0] = [
    _("path", { d: "M220-80q-24.75 0-42.37-17.63Q160-115.25 160-140v-434q0-24.75 17.63-42.38Q195.25-634 220-634h70v-96q0-78.85 55.61-134.42Q401.21-920 480.11-920q78.89 0 134.39 55.58Q670-808.85 670-730v96h70q24.75 0 42.38 17.62Q800-598.75 800-574v434q0 24.75-17.62 42.37Q764.75-80 740-80zm0-60h520v-434H220zm260.17-140q31.83 0 54.33-22.03T557-355q0-30-22.67-54.5t-54.5-24.5-54.33 24.5-22.5 55 22.67 52.5 54.5 22M350-634h260v-96q0-54.17-37.88-92.08-37.88-37.92-92-37.92T388-822.08q-38 37.91-38 92.08zM220-140v-434z" }, null, -1)
  ]));
}
const l = { render: m }, B = /* @__PURE__ */ o({
  __name: "IconLock",
  setup(e) {
    return (n, c) => (t(), r(i, { icon: h(l) }, null, 8, ["icon"]));
  }
}), p = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 -960 960 960"
};
function w(e, n) {
  return t(), s("svg", p, n[0] || (n[0] = [
    _("path", { d: "M480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-60q61.01 0 117.51-20.5Q654-181 699-220L220-699q-38 46-59 102.17T140-480q0 142.37 98.81 241.19Q337.63-140 480-140m259-121q37-45 59-101.49 22-56.5 22-117.51 0-142.38-98.81-241.19T480-820q-60.66 0-116.83 21T261-739z" }, null, -1)
  ]));
}
const a = { render: w }, H = /* @__PURE__ */ o({
  __name: "IconNotAllowed",
  setup(e) {
    return (n, c) => (t(), r(i, { icon: h(a) }, null, 8, ["icon"]));
  }
}), d = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 -960 960 960"
};
function q(e, n) {
  return t(), s("svg", d, n[0] || (n[0] = [
    _("path", { d: "m634-448 86 77v60H510v241l-30 30-30-30v-241H240v-60l80-77v-332h-50v-60h414v60h-50zm-313 77h312l-59-55v-354H380v354zm156 0" }, null, -1)
  ]));
}
const x = { render: q }, M = /* @__PURE__ */ o({
  __name: "IconPin",
  setup(e) {
    return (n, c) => (t(), r(i, { icon: h(x) }, null, 8, ["icon"]));
  }
}), g = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 -960 960 960"
};
function z(e, n) {
  return t(), s("svg", g, n[0] || (n[0] = [
    _("path", { d: "M140-160q-24.75 0-42.37-17.63Q80-195.25 80-220v-520q0-24.75 17.63-42.38Q115.25-800 140-800h680q24.75 0 42.38 17.62Q880-764.75 880-740v520q0 24.75-17.62 42.37Q844.75-160 820-160zm0-60h70v-520h-70zm130 0h420v-520H270zm480 0h70v-520h-70zM270-740v520z" }, null, -1)
  ]));
}
const $ = { render: z }, V = /* @__PURE__ */ o({
  __name: "IconResetColumn",
  setup(e) {
    return (n, c) => (t(), r(i, { icon: h($) }, null, 8, ["icon"]));
  }
}), Q = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 -960 960 960"
};
function f(e, n) {
  return t(), s("svg", Q, n[0] || (n[0] = [
    _("path", { d: "M140-160q-24.75 0-42.37-17.63Q80-195.25 80-220v-520q0-24.75 17.63-42.38Q115.25-800 140-800h680q24.75 0 42.38 17.62Q880-764.75 880-740v520q0 24.75-17.62 42.37Q844.75-160 820-160zm0-60h187v-520H140zm247 0h186v-520H387zm246 0h187v-520H633zm-246 0v-520z" }, null, -1)
  ]));
}
const T = { render: f }, G = /* @__PURE__ */ o({
  __name: "IconResetColumns",
  setup(e) {
    return (n, c) => (t(), r(i, { icon: h(T) }, null, 8, ["icon"]));
  }
});
export {
  G as _,
  V as a,
  M as b,
  H as c,
  B as d,
  i as e
};
