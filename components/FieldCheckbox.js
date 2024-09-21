import { defineComponent as t, mergeModels as n, useModel as i, openBlock as m, createBlock as d, normalizeProps as s, guardReactiveProps as u, withCtx as p, createVNode as f, unref as b } from "vue";
import { s as c } from "../index-CFoki49b.js";
import { _ as V } from "../BaseField.vue_vue_type_script_setup_true_lang-LU5T51M2.js";
const k = /* @__PURE__ */ t({
  __name: "FieldCheckbox",
  props: /* @__PURE__ */ n({
    binary: { type: Boolean, default: !0 },
    label: {},
    labelPosition: {},
    labelCls: {}
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(a) {
    const e = i(a, "modelValue");
    return (o, l) => (m(), d(V, s(u(o.$props)), {
      default: p(() => [
        f(b(c), {
          modelValue: e.value,
          "onUpdate:modelValue": l[0] || (l[0] = (r) => e.value = r),
          binary: o.binary
        }, null, 8, ["modelValue", "binary"])
      ]),
      _: 1
    }, 16));
  }
});
export {
  k as FieldCheckbox
};
