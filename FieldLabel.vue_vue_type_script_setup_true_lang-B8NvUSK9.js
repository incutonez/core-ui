import { defineComponent as r, computed as n, openBlock as m, createElementBlock as i, normalizeClass as p, toDisplayString as o, createCommentVNode as c } from "vue";
const d = /* @__PURE__ */ r({
  __name: "FieldLabel",
  props: {
    text: {},
    position: { default: "left" },
    separator: { default: ":" },
    size: { default: "small" }
  },
  setup(s) {
    const a = s, l = n(() => {
      const { size: e, position: t } = a;
      return {
        "mr-2 leading-8": t === "left",
        "mb-1": t === "top",
        "text-sm": e === "small",
        "text-base": e === "medium"
      };
    });
    return (e, t) => e.text ? (m(), i("label", {
      key: 0,
      class: p(["block font-semibold text-gray-700", l.value])
    }, o(e.text) + o(e.separator), 3)) : c("", !0);
  }
});
export {
  d as _
};
