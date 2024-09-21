import { defineComponent as a, mergeModels as i, useModel as u, openBlock as r, createElementBlock as t, createElementVNode as n, Fragment as b, renderList as f, normalizeClass as m, toDisplayString as p, renderSlot as _ } from "vue";
const h = { class: "flex flex-col overflow-hidden" }, g = { class: "flex h-8" }, k = ["onClick"], v = { class: "flex-1 overflow-auto rounded-r rounded-bl border border-gray-b p-2" }, B = /* @__PURE__ */ a({
  __name: "BaseTabs",
  props: /* @__PURE__ */ i({
    tabs: {}
  }, {
    selected: {},
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(l) {
    const s = u(l, "selected");
    function c(e) {
      s.value = e;
    }
    function d(e) {
      return {
        "bg-sky-200 font-semibold": e === s.value,
        "bg-gray-300": e !== s.value
      };
    }
    return (e, x) => (r(), t("article", h, [
      n("section", g, [
        (r(!0), t(b, null, f(e.tabs, (o) => (r(), t("div", {
          key: o,
          class: m(["flex h-full cursor-pointer items-center rounded-t border border-b-0 border-gray-b px-3 text-sm hover:bg-sky-200 [&:nth-child(n+2)]:border-l-0", d(o)]),
          onClick: (y) => c(o)
        }, [
          n("span", null, p(o), 1)
        ], 10, k))), 128))
      ]),
      n("section", v, [
        _(e.$slots, "content")
      ])
    ]));
  }
});
export {
  B as BaseTabs
};
