import { defineComponent as c, computed as s, openBlock as p, createBlock as f, withCtx as e, renderSlot as u, createElementVNode as d, toDisplayString as n, createVNode as C } from "vue";
import { _ as y } from "../BaseButton.vue_vue_type_script_setup_true_lang-bOENwSBS.js";
import { _ as g } from "../BaseDialog.vue_vue_type_script_setup_true_lang-BuSJDY1j.js";
const b = /* @__PURE__ */ c({
  __name: "DialogConfirm",
  props: {
    entityName: { default: "" },
    loading: { type: Boolean },
    action: { default: "" }
  },
  emits: ["confirm"],
  setup(i, { emit: a }) {
    const r = i, l = a, t = s(() => {
      const { action: o = "" } = r;
      return `${o.charAt(0).toUpperCase() + o.substring(1)}`;
    });
    function m() {
      l("confirm");
    }
    return (o, _) => (p(), f(g, {
      title: `${t.value} ${o.entityName}?`
    }, {
      body: e(() => [
        u(o.$slots, "body", {}, () => [
          d("p", null, "Are you sure you want to " + n(o.action.toLowerCase()) + " " + n(o.entityName) + "?", 1)
        ])
      ]),
      afterCancel: e(() => [
        C(y, {
          text: t.value,
          loading: o.loading,
          onClick: m
        }, null, 8, ["text", "loading"])
      ]),
      _: 3
    }, 8, ["title"]));
  }
});
export {
  b as DialogConfirm
};
