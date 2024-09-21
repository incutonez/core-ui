import { e as p } from "./index-CJIVb0yO.js";
import { renderSlot as c, openBlock as f, createBlock as I, Teleport as x, createCommentVNode as Z } from "vue";
function m() {
  let t = [];
  const s = (e, n, r = 999) => {
    const u = o(e, n, r), i = u.value + (u.key === e ? 0 : r) + 1;
    return t.push({ key: e, value: i }), i;
  }, a = (e) => {
    t = t.filter((n) => n.value !== e);
  }, l = (e, n) => o(e).value, o = (e, n, r = 0) => [...t].reverse().find((u) => !0) || { key: e, value: r }, d = (e) => e && parseInt(e.style.zIndex, 10) || 0;
  return {
    get: d,
    set: (e, n, r) => {
      n && (n.style.zIndex = String(s(e, !0, r)));
    },
    clear: (e) => {
      e && (a(d(e)), e.style.zIndex = "");
    },
    getCurrent: (e) => l(e)
  };
}
var b = m(), v = {
  name: "Portal",
  props: {
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data: function() {
    return {
      mounted: !1
    };
  },
  mounted: function() {
    this.mounted = p();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function g(t, s, a, l, o, d) {
  return d.inline ? c(t.$slots, "default", {
    key: 0
  }) : o.mounted ? (f(), I(x, {
    key: 1,
    to: a.appendTo
  }, [c(t.$slots, "default")], 8, ["to"])) : Z("", !0);
}
v.render = g;
export {
  b as Z,
  v as s
};
