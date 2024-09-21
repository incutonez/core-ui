import { defineComponent as n, computed as i, openBlock as o, createElementBlock as r, normalizeClass as t, createBlock as c, createCommentVNode as m, renderSlot as f } from "vue";
import { _ as p } from "./FieldLabel.vue_vue_type_script_setup_true_lang-B8NvUSK9.js";
const C = /* @__PURE__ */ n({
  __name: "BaseField",
  props: {
    label: { default: void 0 },
    labelPosition: { default: "left" },
    labelCls: { default: void 0 }
  },
  setup(s) {
    const l = s, a = i(() => ({
      "flex-col": l.labelPosition === "top",
      "items-center": l.labelPosition === "left"
    }));
    return (e, d) => (o(), r("article", {
      class: t(["base-field flex min-w-0", a.value])
    }, [
      e.label ? (o(), c(p, {
        key: 0,
        text: e.label,
        position: e.labelPosition,
        class: t(e.labelCls)
      }, null, 8, ["text", "position", "class"])) : m("", !0),
      f(e.$slots, "default")
    ], 2));
  }
});
export {
  C as _
};
