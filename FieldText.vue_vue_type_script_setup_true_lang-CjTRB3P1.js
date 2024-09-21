import { defineComponent as v, mergeModels as d, useModel as $, ref as w, computed as c, watch as B, onMounted as k, unref as i, openBlock as p, createBlock as m, normalizeProps as T, guardReactiveProps as x, withCtx as g, createElementVNode as E, createVNode as M, normalizeClass as F, createCommentVNode as N } from "vue";
import { s as P } from "./index-BXMTLA5w.js";
import { _ as S } from "./IconClear.vue_vue_type_script_setup_true_lang-DkJsfe4g.js";
import { _ as z } from "./BaseButton.vue_vue_type_script_setup_true_lang-bOENwSBS.js";
import { _ as K } from "./BaseField.vue_vue_type_script_setup_true_lang-LU5T51M2.js";
const U = { class: "relative flex-1" }, A = /* @__PURE__ */ v({
  __name: "FieldText",
  props: /* @__PURE__ */ d({
    showClear: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    type: { default: "text" },
    delay: { default: 300 },
    inputWidth: { default: "w-full" },
    autoFocus: { type: Boolean },
    autoSelect: { type: Boolean },
    label: {},
    labelPosition: {},
    labelCls: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ d(["inputEnd", "inputClear", "blur"], ["update:modelValue"]),
  setup(n, { emit: f }) {
    const l = n, o = f, t = $(n, "modelValue");
    let s;
    const a = w(), C = c(() => l.showClear && !!t.value), b = c(() => ({
      "pr-6": l.showClear,
      [l.inputWidth]: !0
    }));
    function y() {
      t.value = void 0, o("inputClear");
    }
    function _() {
      clearTimeout(s), s = setTimeout(() => o("inputEnd"), l.delay);
    }
    function V() {
      o("blur");
    }
    function u() {
      const e = i(a);
      e && (e.$el.focus(), setTimeout(() => e.$el.select(), 0));
    }
    return B(() => l.autoSelect, (e) => {
      e && u();
    }), k(() => {
      const e = i(a);
      e && (l.autoFocus && e.$el.focus(), l.autoSelect && u());
    }), (e, r) => (p(), m(K, T(x(e.$props)), {
      default: g(() => [
        E("section", U, [
          M(i(P), {
            ref_key: "libCmp",
            ref: a,
            modelValue: t.value,
            "onUpdate:modelValue": r[0] || (r[0] = (h) => t.value = h),
            class: F(b.value),
            type: e.type,
            disabled: e.disabled,
            onKeyup: _,
            onBlur: V
          }, null, 8, ["modelValue", "class", "type", "disabled"]),
          C.value ? (p(), m(z, {
            key: 0,
            tabindex: "-1",
            class: "absolute right-0 top-1.5",
            unstyled: "",
            icon: S,
            "icon-cls": "h-5 w-6 fill-gray-600 hover:fill-red-700",
            onClick: y
          })) : N("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
});
export {
  A as _
};
