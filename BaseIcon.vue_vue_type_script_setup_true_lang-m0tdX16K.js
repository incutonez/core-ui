import { defineComponent as e, openBlock as n, createBlock as c, resolveDynamicComponent as r } from "vue";
const _ = /* @__PURE__ */ e({
  __name: "BaseIcon",
  props: {
    icon: {}
  },
  setup(p) {
    return (o, t) => (n(), c(r(o.icon)));
  }
});
export {
  _
};
