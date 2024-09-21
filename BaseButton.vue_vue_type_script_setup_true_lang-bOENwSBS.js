import { defineComponent as a, openBlock as o, createBlock as l, unref as i, withCtx as n, renderSlot as s, resolveDynamicComponent as d, normalizeClass as t } from "vue";
import { s as r } from "./index-BShP_Z4A.js";
const f = /* @__PURE__ */ a({
  __name: "BaseButton",
  props: {
    text: { default: void 0 },
    icon: { default: void 0 },
    iconCls: { default: void 0 },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    size: { default: "large" },
    plain: { type: Boolean }
  },
  setup(p) {
    return (e, m) => (o(), l(i(r), {
      label: e.text,
      disabled: e.disabled,
      size: e.size,
      plain: e.plain,
      loading: e.loading
    }, {
      icon: n(() => [
        s(e.$slots, "icon", {}, () => [
          (o(), l(d(e.icon), {
            class: t(["mr-0.5 size-4", e.iconCls])
          }, null, 8, ["class"]))
        ])
      ]),
      _: 3
    }, 8, ["label", "disabled", "size", "plain", "loading"]));
  }
});
export {
  f as _
};
