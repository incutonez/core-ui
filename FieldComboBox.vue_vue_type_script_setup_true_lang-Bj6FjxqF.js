import { openBlock as p, createElementBlock as v, mergeProps as d, createElementVNode as E, resolveComponent as M, renderSlot as O, Fragment as q, renderList as oe, createCommentVNode as P, createVNode as j, resolveDirective as Te, createTextVNode as ie, toDisplayString as D, normalizeClass as te, createBlock as G, resolveDynamicComponent as le, withCtx as K, Transition as Ve, normalizeProps as Fe, createSlots as ze, withDirectives as Ee, defineComponent as Ae, mergeModels as ae, computed as Me, useModel as Be, watch as xe, unref as Pe } from "vue";
import { r as W, a7 as F, z as ye, B as be, a8 as ne, $ as Z, Z as J, y as ve, s as Ie, U as ue, f as R, a9 as Ke, D as He, c as U, g as De, a as Re, o as je, a5 as Ne, t as Ge, F as We, G as Ue, H as qe, a6 as Qe, I as ce, i as Ze } from "./index-CJIVb0yO.js";
import { Z as se, s as Je } from "./index-C9ZTedje.js";
import { s as Xe } from "./index-C7l8zMDA.js";
import { s as Ye } from "./index-BI3EJS6X.js";
import { s as $e } from "./index-3nHrF7Me.js";
import { s as _e, a as et, b as tt } from "./index-BtEY54Cg.js";
import { s as Oe } from "./index-DZMkFJAM.js";
import { s as nt } from "./index-DF5q-OBM.js";
import { s as it } from "./index-BXMTLA5w.js";
import { O as st } from "./index-C9AiUfGp.js";
import { R as ot } from "./index-DeU8Bpar.js";
import { _ as rt } from "./BaseField.vue_vue_type_script_setup_true_lang-LU5T51M2.js";
import { isObject as lt } from "./utils/common.js";
var Jt = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
}, Xt = {
  AND: "and",
  OR: "or"
};
function de(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = at(t)) || e) {
      n && (t = n);
      var s = 0, o = function() {
      };
      return { s: o, n: function() {
        return s >= t.length ? { done: !0 } : { done: !1, value: t[s++] };
      }, e: function(a) {
        throw a;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, l = !0, r = !1;
  return { s: function() {
    n = n.call(t);
  }, n: function() {
    var a = n.next();
    return l = a.done, a;
  }, e: function(a) {
    r = !0, i = a;
  }, f: function() {
    try {
      l || n.return == null || n.return();
    } finally {
      if (r) throw i;
    }
  } };
}
function at(t, e) {
  if (t) {
    if (typeof t == "string") return he(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? he(t, e) : void 0;
  }
}
function he(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, s = Array(e); n < e; n++) s[n] = t[n];
  return s;
}
var ut = {
  filter: function(e, n, s, o, i) {
    var l = [];
    if (!e)
      return l;
    var r = de(e), u;
    try {
      for (r.s(); !(u = r.n()).done; ) {
        var a = u.value;
        if (typeof a == "string") {
          if (this.filters[o](a, s, i)) {
            l.push(a);
            continue;
          }
        } else {
          var c = de(n), h;
          try {
            for (c.s(); !(h = c.n()).done; ) {
              var g = h.value, w = W(a, g);
              if (this.filters[o](w, s, i)) {
                l.push(a);
                break;
              }
            }
          } catch (b) {
            c.e(b);
          } finally {
            c.f();
          }
        }
      }
    } catch (b) {
      r.e(b);
    } finally {
      r.f();
    }
    return l;
  },
  filters: {
    startsWith: function(e, n, s) {
      if (n == null || n === "")
        return !0;
      if (e == null)
        return !1;
      var o = F(n.toString()).toLocaleLowerCase(s), i = F(e.toString()).toLocaleLowerCase(s);
      return i.slice(0, o.length) === o;
    },
    contains: function(e, n, s) {
      if (n == null || n === "")
        return !0;
      if (e == null)
        return !1;
      var o = F(n.toString()).toLocaleLowerCase(s), i = F(e.toString()).toLocaleLowerCase(s);
      return i.indexOf(o) !== -1;
    },
    notContains: function(e, n, s) {
      if (n == null || n === "")
        return !0;
      if (e == null)
        return !1;
      var o = F(n.toString()).toLocaleLowerCase(s), i = F(e.toString()).toLocaleLowerCase(s);
      return i.indexOf(o) === -1;
    },
    endsWith: function(e, n, s) {
      if (n == null || n === "")
        return !0;
      if (e == null)
        return !1;
      var o = F(n.toString()).toLocaleLowerCase(s), i = F(e.toString()).toLocaleLowerCase(s);
      return i.indexOf(o, i.length - o.length) !== -1;
    },
    equals: function(e, n, s) {
      return n == null || n === "" ? !0 : e == null ? !1 : e.getTime && n.getTime ? e.getTime() === n.getTime() : F(e.toString()).toLocaleLowerCase(s) == F(n.toString()).toLocaleLowerCase(s);
    },
    notEquals: function(e, n, s) {
      return n == null || n === "" ? !1 : e == null ? !0 : e.getTime && n.getTime ? e.getTime() !== n.getTime() : F(e.toString()).toLocaleLowerCase(s) != F(n.toString()).toLocaleLowerCase(s);
    },
    in: function(e, n) {
      if (n == null || n.length === 0)
        return !0;
      for (var s = 0; s < n.length; s++)
        if (ye(e, n[s]))
          return !0;
      return !1;
    },
    between: function(e, n) {
      return n == null || n[0] == null || n[1] == null ? !0 : e == null ? !1 : e.getTime ? n[0].getTime() <= e.getTime() && e.getTime() <= n[1].getTime() : n[0] <= e && e <= n[1];
    },
    lt: function(e, n) {
      return n == null ? !0 : e == null ? !1 : e.getTime && n.getTime ? e.getTime() < n.getTime() : e < n;
    },
    lte: function(e, n) {
      return n == null ? !0 : e == null ? !1 : e.getTime && n.getTime ? e.getTime() <= n.getTime() : e <= n;
    },
    gt: function(e, n) {
      return n == null ? !0 : e == null ? !1 : e.getTime && n.getTime ? e.getTime() > n.getTime() : e > n;
    },
    gte: function(e, n) {
      return n == null ? !0 : e == null ? !1 : e.getTime && n.getTime ? e.getTime() >= n.getTime() : e >= n;
    },
    dateIs: function(e, n) {
      return n == null ? !0 : e == null ? !1 : e.toDateString() === n.toDateString();
    },
    dateIsNot: function(e, n) {
      return n == null ? !0 : e == null ? !1 : e.toDateString() !== n.toDateString();
    },
    dateBefore: function(e, n) {
      return n == null ? !0 : e == null ? !1 : e.getTime() < n.getTime();
    },
    dateAfter: function(e, n) {
      return n == null ? !0 : e == null ? !1 : e.getTime() > n.getTime();
    }
  },
  register: function(e, n) {
    this.filters[e] = n;
  }
}, Se = {
  name: "BlankIcon",
  extends: Xe
};
function ct(t, e, n, s, o, i) {
  return p(), v("svg", d({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), e[0] || (e[0] = [E("rect", {
    width: "1",
    height: "1",
    fill: "currentColor",
    "fill-opacity": "0"
  }, null, -1)]), 16);
}
Se.render = ct;
var dt = function(e) {
  var n = e.dt;
  return `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: `.concat(n("virtualscroller.loader.mask.background"), `;
    color: `).concat(n("virtualscroller.loader.mask.color"), `;
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: `).concat(n("virtualscroller.loader.icon.size"), `;
    width: `).concat(n("virtualscroller.loader.icon.size"), `;
    height: `).concat(n("virtualscroller.loader.icon.size"), `;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`);
}, pe = be.extend({
  name: "virtualscroller",
  theme: dt
}), ht = {
  name: "BaseVirtualScroller",
  extends: Ie,
  props: {
    id: {
      type: String,
      default: null
    },
    style: null,
    class: null,
    items: {
      type: Array,
      default: null
    },
    itemSize: {
      type: [Number, Array],
      default: 0
    },
    scrollHeight: null,
    scrollWidth: null,
    orientation: {
      type: String,
      default: "vertical"
    },
    numToleratedItems: {
      type: Number,
      default: null
    },
    delay: {
      type: Number,
      default: 0
    },
    resizeDelay: {
      type: Number,
      default: 10
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loaderDisabled: {
      type: Boolean,
      default: !1
    },
    columns: {
      type: Array,
      default: null
    },
    loading: {
      type: Boolean,
      default: !1
    },
    showSpacer: {
      type: Boolean,
      default: !0
    },
    showLoader: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: 0
    },
    inline: {
      type: Boolean,
      default: !1
    },
    step: {
      type: Number,
      default: 0
    },
    appendOnly: {
      type: Boolean,
      default: !1
    },
    autoSize: {
      type: Boolean,
      default: !1
    }
  },
  style: pe,
  provide: function() {
    return {
      $pcVirtualScroller: this,
      $parentInstance: this
    };
  },
  beforeMount: function() {
    var e;
    pe.loadCSS({
      nonce: (e = this.$primevueConfig) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce
    });
  }
};
function Y(t) {
  "@babel/helpers - typeof";
  return Y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Y(t);
}
function fe(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, s);
  }
  return n;
}
function X(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fe(Object(n), !0).forEach(function(s) {
      we(t, s, n[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : fe(Object(n)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(n, s));
    });
  }
  return t;
}
function we(t, e, n) {
  return (e = pt(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function pt(t) {
  var e = ft(t, "string");
  return Y(e) == "symbol" ? e : e + "";
}
function ft(t, e) {
  if (Y(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var s = n.call(t, e || "default");
    if (Y(s) != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Le = {
  name: "VirtualScroller",
  extends: ht,
  inheritAttrs: !1,
  emits: ["update:numToleratedItems", "scroll", "scroll-index-change", "lazy-load"],
  data: function() {
    var e = this.isBoth();
    return {
      first: e ? {
        rows: 0,
        cols: 0
      } : 0,
      last: e ? {
        rows: 0,
        cols: 0
      } : 0,
      page: e ? {
        rows: 0,
        cols: 0
      } : 0,
      numItemsInViewport: e ? {
        rows: 0,
        cols: 0
      } : 0,
      lastScrollPos: e ? {
        top: 0,
        left: 0
      } : 0,
      d_numToleratedItems: this.numToleratedItems,
      d_loading: this.loading,
      loaderArr: [],
      spacerStyle: {},
      contentStyle: {}
    };
  },
  element: null,
  content: null,
  lastScrollPos: null,
  scrollTimeout: null,
  resizeTimeout: null,
  defaultWidth: 0,
  defaultHeight: 0,
  defaultContentWidth: 0,
  defaultContentHeight: 0,
  isRangeChanged: !1,
  lazyLoadState: {},
  resizeListener: null,
  initialized: !1,
  watch: {
    numToleratedItems: function(e) {
      this.d_numToleratedItems = e;
    },
    loading: function(e, n) {
      this.lazy && e !== n && e !== this.d_loading && (this.d_loading = e);
    },
    items: function(e, n) {
      (!n || n.length !== (e || []).length) && (this.init(), this.calculateAutoSize());
    },
    itemSize: function() {
      this.init(), this.calculateAutoSize();
    },
    orientation: function() {
      this.lastScrollPos = this.isBoth() ? {
        top: 0,
        left: 0
      } : 0;
    },
    scrollHeight: function() {
      this.init(), this.calculateAutoSize();
    },
    scrollWidth: function() {
      this.init(), this.calculateAutoSize();
    }
  },
  mounted: function() {
    this.viewInit(), this.lastScrollPos = this.isBoth() ? {
      top: 0,
      left: 0
    } : 0, this.lazyLoadState = this.lazyLoadState || {};
  },
  updated: function() {
    !this.initialized && this.viewInit();
  },
  unmounted: function() {
    this.unbindResizeListener(), this.initialized = !1;
  },
  methods: {
    viewInit: function() {
      ne(this.element) && (this.setContentEl(this.content), this.init(), this.calculateAutoSize(), this.bindResizeListener(), this.defaultWidth = Z(this.element), this.defaultHeight = J(this.element), this.defaultContentWidth = Z(this.content), this.defaultContentHeight = J(this.content), this.initialized = !0);
    },
    init: function() {
      this.disabled || (this.setSize(), this.calculateOptions(), this.setSpacerSize());
    },
    isVertical: function() {
      return this.orientation === "vertical";
    },
    isHorizontal: function() {
      return this.orientation === "horizontal";
    },
    isBoth: function() {
      return this.orientation === "both";
    },
    scrollTo: function(e) {
      this.element && this.element.scrollTo(e);
    },
    scrollToIndex: function(e) {
      var n = this, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto", o = this.isBoth(), i = this.isHorizontal(), l = o ? e.every(function(m) {
        return m > -1;
      }) : e > -1;
      if (l) {
        var r = this.first, u = this.element, a = u.scrollTop, c = a === void 0 ? 0 : a, h = u.scrollLeft, g = h === void 0 ? 0 : h, w = this.calculateNumItems(), b = w.numToleratedItems, L = this.getContentPosition(), I = this.itemSize, C = function() {
          var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, B = arguments.length > 1 ? arguments[1] : void 0;
          return y <= B ? 0 : y;
        }, k = function(y, B, A) {
          return y * B + A;
        }, T = function() {
          var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return n.scrollTo({
            left: y,
            top: B,
            behavior: s
          });
        }, f = o ? {
          rows: 0,
          cols: 0
        } : 0, H = !1, V = !1;
        o ? (f = {
          rows: C(e[0], b[0]),
          cols: C(e[1], b[1])
        }, T(k(f.cols, I[1], L.left), k(f.rows, I[0], L.top)), V = this.lastScrollPos.top !== c || this.lastScrollPos.left !== g, H = f.rows !== r.rows || f.cols !== r.cols) : (f = C(e, b), i ? T(k(f, I, L.left), c) : T(g, k(f, I, L.top)), V = this.lastScrollPos !== (i ? g : c), H = f !== r), this.isRangeChanged = H, V && (this.first = f);
      }
    },
    scrollInView: function(e, n) {
      var s = this, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
      if (n) {
        var i = this.isBoth(), l = this.isHorizontal(), r = i ? e.every(function(I) {
          return I > -1;
        }) : e > -1;
        if (r) {
          var u = this.getRenderedRange(), a = u.first, c = u.viewport, h = function() {
            var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return s.scrollTo({
              left: C,
              top: k,
              behavior: o
            });
          }, g = n === "to-start", w = n === "to-end";
          if (g) {
            if (i)
              c.first.rows - a.rows > e[0] ? h(c.first.cols * this.itemSize[1], (c.first.rows - 1) * this.itemSize[0]) : c.first.cols - a.cols > e[1] && h((c.first.cols - 1) * this.itemSize[1], c.first.rows * this.itemSize[0]);
            else if (c.first - a > e) {
              var b = (c.first - 1) * this.itemSize;
              l ? h(b, 0) : h(0, b);
            }
          } else if (w) {
            if (i)
              c.last.rows - a.rows <= e[0] + 1 ? h(c.first.cols * this.itemSize[1], (c.first.rows + 1) * this.itemSize[0]) : c.last.cols - a.cols <= e[1] + 1 && h((c.first.cols + 1) * this.itemSize[1], c.first.rows * this.itemSize[0]);
            else if (c.last - a <= e + 1) {
              var L = (c.first + 1) * this.itemSize;
              l ? h(L, 0) : h(0, L);
            }
          }
        }
      } else
        this.scrollToIndex(e, o);
    },
    getRenderedRange: function() {
      var e = function(h, g) {
        return Math.floor(h / (g || h));
      }, n = this.first, s = 0;
      if (this.element) {
        var o = this.isBoth(), i = this.isHorizontal(), l = this.element, r = l.scrollTop, u = l.scrollLeft;
        if (o)
          n = {
            rows: e(r, this.itemSize[0]),
            cols: e(u, this.itemSize[1])
          }, s = {
            rows: n.rows + this.numItemsInViewport.rows,
            cols: n.cols + this.numItemsInViewport.cols
          };
        else {
          var a = i ? u : r;
          n = e(a, this.itemSize), s = n + this.numItemsInViewport;
        }
      }
      return {
        first: this.first,
        last: this.last,
        viewport: {
          first: n,
          last: s
        }
      };
    },
    calculateNumItems: function() {
      var e = this.isBoth(), n = this.isHorizontal(), s = this.itemSize, o = this.getContentPosition(), i = this.element ? this.element.offsetWidth - o.left : 0, l = this.element ? this.element.offsetHeight - o.top : 0, r = function(g, w) {
        return Math.ceil(g / (w || g));
      }, u = function(g) {
        return Math.ceil(g / 2);
      }, a = e ? {
        rows: r(l, s[0]),
        cols: r(i, s[1])
      } : r(n ? i : l, s), c = this.d_numToleratedItems || (e ? [u(a.rows), u(a.cols)] : u(a));
      return {
        numItemsInViewport: a,
        numToleratedItems: c
      };
    },
    calculateOptions: function() {
      var e = this, n = this.isBoth(), s = this.first, o = this.calculateNumItems(), i = o.numItemsInViewport, l = o.numToleratedItems, r = function(c, h, g) {
        var w = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
        return e.getLast(c + h + (c < g ? 2 : 3) * g, w);
      }, u = n ? {
        rows: r(s.rows, i.rows, l[0]),
        cols: r(s.cols, i.cols, l[1], !0)
      } : r(s, i, l);
      this.last = u, this.numItemsInViewport = i, this.d_numToleratedItems = l, this.$emit("update:numToleratedItems", this.d_numToleratedItems), this.showLoader && (this.loaderArr = n ? Array.from({
        length: i.rows
      }).map(function() {
        return Array.from({
          length: i.cols
        });
      }) : Array.from({
        length: i
      })), this.lazy && Promise.resolve().then(function() {
        var a;
        e.lazyLoadState = {
          first: e.step ? n ? {
            rows: 0,
            cols: s.cols
          } : 0 : s,
          last: Math.min(e.step ? e.step : u, ((a = e.items) === null || a === void 0 ? void 0 : a.length) || 0)
        }, e.$emit("lazy-load", e.lazyLoadState);
      });
    },
    calculateAutoSize: function() {
      var e = this;
      this.autoSize && !this.d_loading && Promise.resolve().then(function() {
        if (e.content) {
          var n = e.isBoth(), s = e.isHorizontal(), o = e.isVertical();
          e.content.style.minHeight = e.content.style.minWidth = "auto", e.content.style.position = "relative", e.element.style.contain = "none";
          var i = [Z(e.element), J(e.element)], l = i[0], r = i[1];
          (n || s) && (e.element.style.width = l < e.defaultWidth ? l + "px" : e.scrollWidth || e.defaultWidth + "px"), (n || o) && (e.element.style.height = r < e.defaultHeight ? r + "px" : e.scrollHeight || e.defaultHeight + "px"), e.content.style.minHeight = e.content.style.minWidth = "", e.content.style.position = "", e.element.style.contain = "";
        }
      });
    },
    getLast: function() {
      var e, n, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, o = arguments.length > 1 ? arguments[1] : void 0;
      return this.items ? Math.min(o ? ((e = this.columns || this.items[0]) === null || e === void 0 ? void 0 : e.length) || 0 : ((n = this.items) === null || n === void 0 ? void 0 : n.length) || 0, s) : 0;
    },
    getContentPosition: function() {
      if (this.content) {
        var e = getComputedStyle(this.content), n = parseFloat(e.paddingLeft) + Math.max(parseFloat(e.left) || 0, 0), s = parseFloat(e.paddingRight) + Math.max(parseFloat(e.right) || 0, 0), o = parseFloat(e.paddingTop) + Math.max(parseFloat(e.top) || 0, 0), i = parseFloat(e.paddingBottom) + Math.max(parseFloat(e.bottom) || 0, 0);
        return {
          left: n,
          right: s,
          top: o,
          bottom: i,
          x: n + s,
          y: o + i
        };
      }
      return {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        x: 0,
        y: 0
      };
    },
    setSize: function() {
      var e = this;
      if (this.element) {
        var n = this.isBoth(), s = this.isHorizontal(), o = this.element.parentElement, i = this.scrollWidth || "".concat(this.element.offsetWidth || o.offsetWidth, "px"), l = this.scrollHeight || "".concat(this.element.offsetHeight || o.offsetHeight, "px"), r = function(a, c) {
          return e.element.style[a] = c;
        };
        n || s ? (r("height", l), r("width", i)) : r("height", l);
      }
    },
    setSpacerSize: function() {
      var e = this, n = this.items;
      if (n) {
        var s = this.isBoth(), o = this.isHorizontal(), i = this.getContentPosition(), l = function(u, a, c) {
          var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
          return e.spacerStyle = X(X({}, e.spacerStyle), we({}, "".concat(u), (a || []).length * c + h + "px"));
        };
        s ? (l("height", n, this.itemSize[0], i.y), l("width", this.columns || n[1], this.itemSize[1], i.x)) : o ? l("width", this.columns || n, this.itemSize, i.x) : l("height", n, this.itemSize, i.y);
      }
    },
    setContentPosition: function(e) {
      var n = this;
      if (this.content && !this.appendOnly) {
        var s = this.isBoth(), o = this.isHorizontal(), i = e ? e.first : this.first, l = function(c, h) {
          return c * h;
        }, r = function() {
          var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return n.contentStyle = X(X({}, n.contentStyle), {
            transform: "translate3d(".concat(c, "px, ").concat(h, "px, 0)")
          });
        };
        if (s)
          r(l(i.cols, this.itemSize[1]), l(i.rows, this.itemSize[0]));
        else {
          var u = l(i, this.itemSize);
          o ? r(u, 0) : r(0, u);
        }
      }
    },
    onScrollPositionChange: function(e) {
      var n = this, s = e.target, o = this.isBoth(), i = this.isHorizontal(), l = this.getContentPosition(), r = function(S, z) {
        return S ? S > z ? S - z : S : 0;
      }, u = function(S, z) {
        return Math.floor(S / (z || S));
      }, a = function(S, z, Q, _, x, N) {
        return S <= x ? x : N ? Q - _ - x : z + x - 1;
      }, c = function(S, z, Q, _, x, N, ee) {
        return S <= N ? 0 : Math.max(0, ee ? S < z ? Q : S - N : S > z ? Q : S - 2 * N);
      }, h = function(S, z, Q, _, x, N) {
        var ee = z + _ + 2 * x;
        return S >= x && (ee += x + 1), n.getLast(ee, N);
      }, g = r(s.scrollTop, l.top), w = r(s.scrollLeft, l.left), b = o ? {
        rows: 0,
        cols: 0
      } : 0, L = this.last, I = !1, C = this.lastScrollPos;
      if (o) {
        var k = this.lastScrollPos.top <= g, T = this.lastScrollPos.left <= w;
        if (!this.appendOnly || this.appendOnly && (k || T)) {
          var f = {
            rows: u(g, this.itemSize[0]),
            cols: u(w, this.itemSize[1])
          }, H = {
            rows: a(f.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], k),
            cols: a(f.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], T)
          };
          b = {
            rows: c(f.rows, H.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], k),
            cols: c(f.cols, H.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], T)
          }, L = {
            rows: h(f.rows, b.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
            cols: h(f.cols, b.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], !0)
          }, I = b.rows !== this.first.rows || L.rows !== this.last.rows || b.cols !== this.first.cols || L.cols !== this.last.cols || this.isRangeChanged, C = {
            top: g,
            left: w
          };
        }
      } else {
        var V = i ? w : g, m = this.lastScrollPos <= V;
        if (!this.appendOnly || this.appendOnly && m) {
          var y = u(V, this.itemSize), B = a(y, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, m);
          b = c(y, B, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, m), L = h(y, b, this.last, this.numItemsInViewport, this.d_numToleratedItems), I = b !== this.first || L !== this.last || this.isRangeChanged, C = V;
        }
      }
      return {
        first: b,
        last: L,
        isRangeChanged: I,
        scrollPos: C
      };
    },
    onScrollChange: function(e) {
      var n = this.onScrollPositionChange(e), s = n.first, o = n.last, i = n.isRangeChanged, l = n.scrollPos;
      if (i) {
        var r = {
          first: s,
          last: o
        };
        if (this.setContentPosition(r), this.first = s, this.last = o, this.lastScrollPos = l, this.$emit("scroll-index-change", r), this.lazy && this.isPageChanged(s)) {
          var u, a, c = {
            first: this.step ? Math.min(this.getPageByFirst(s) * this.step, (((u = this.items) === null || u === void 0 ? void 0 : u.length) || 0) - this.step) : s,
            last: Math.min(this.step ? (this.getPageByFirst(s) + 1) * this.step : o, ((a = this.items) === null || a === void 0 ? void 0 : a.length) || 0)
          }, h = this.lazyLoadState.first !== c.first || this.lazyLoadState.last !== c.last;
          h && this.$emit("lazy-load", c), this.lazyLoadState = c;
        }
      }
    },
    onScroll: function(e) {
      var n = this;
      if (this.$emit("scroll", e), this.delay) {
        if (this.scrollTimeout && clearTimeout(this.scrollTimeout), this.isPageChanged()) {
          if (!this.d_loading && this.showLoader) {
            var s = this.onScrollPositionChange(e), o = s.isRangeChanged, i = o || (this.step ? this.isPageChanged() : !1);
            i && (this.d_loading = !0);
          }
          this.scrollTimeout = setTimeout(function() {
            n.onScrollChange(e), n.d_loading && n.showLoader && (!n.lazy || n.loading === void 0) && (n.d_loading = !1, n.page = n.getPageByFirst());
          }, this.delay);
        }
      } else
        this.onScrollChange(e);
    },
    onResize: function() {
      var e = this;
      this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
        if (ne(e.element)) {
          var n = e.isBoth(), s = e.isVertical(), o = e.isHorizontal(), i = [Z(e.element), J(e.element)], l = i[0], r = i[1], u = l !== e.defaultWidth, a = r !== e.defaultHeight, c = n ? u || a : o ? u : s ? a : !1;
          c && (e.d_numToleratedItems = e.numToleratedItems, e.defaultWidth = l, e.defaultHeight = r, e.defaultContentWidth = Z(e.content), e.defaultContentHeight = J(e.content), e.init());
        }
      }, this.resizeDelay);
    },
    bindResizeListener: function() {
      this.resizeListener || (this.resizeListener = this.onResize.bind(this), window.addEventListener("resize", this.resizeListener), window.addEventListener("orientationchange", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), window.removeEventListener("orientationchange", this.resizeListener), this.resizeListener = null);
    },
    getOptions: function(e) {
      var n = (this.items || []).length, s = this.isBoth() ? this.first.rows + e : this.first + e;
      return {
        index: s,
        count: n,
        first: s === 0,
        last: s === n - 1,
        even: s % 2 === 0,
        odd: s % 2 !== 0
      };
    },
    getLoaderOptions: function(e, n) {
      var s = this.loaderArr.length;
      return X({
        index: e,
        count: s,
        first: e === 0,
        last: e === s - 1,
        even: e % 2 === 0,
        odd: e % 2 !== 0
      }, n);
    },
    getPageByFirst: function(e) {
      return Math.floor(((e ?? this.first) + this.d_numToleratedItems * 4) / (this.step || 1));
    },
    isPageChanged: function(e) {
      return this.step ? this.page !== this.getPageByFirst(e ?? this.first) : !0;
    },
    setContentEl: function(e) {
      this.content = e || this.content || ve(this.element, '[data-pc-section="content"]');
    },
    elementRef: function(e) {
      this.element = e;
    },
    contentRef: function(e) {
      this.content = e;
    }
  },
  computed: {
    containerClass: function() {
      return ["p-virtualscroller", this.class, {
        "p-virtualscroller-inline": this.inline,
        "p-virtualscroller-both p-both-scroll": this.isBoth(),
        "p-virtualscroller-horizontal p-horizontal-scroll": this.isHorizontal()
      }];
    },
    contentClass: function() {
      return ["p-virtualscroller-content", {
        "p-virtualscroller-loading": this.d_loading
      }];
    },
    loaderClass: function() {
      return ["p-virtualscroller-loader", {
        "p-virtualscroller-loader-mask": !this.$slots.loader
      }];
    },
    loadedItems: function() {
      var e = this;
      return this.items && !this.d_loading ? this.isBoth() ? this.items.slice(this.appendOnly ? 0 : this.first.rows, this.last.rows).map(function(n) {
        return e.columns ? n : n.slice(e.appendOnly ? 0 : e.first.cols, e.last.cols);
      }) : this.isHorizontal() && this.columns ? this.items : this.items.slice(this.appendOnly ? 0 : this.first, this.last) : [];
    },
    loadedRows: function() {
      return this.d_loading ? this.loaderDisabled ? this.loaderArr : [] : this.loadedItems;
    },
    loadedColumns: function() {
      if (this.columns) {
        var e = this.isBoth(), n = this.isHorizontal();
        if (e || n)
          return this.d_loading && this.loaderDisabled ? e ? this.loaderArr[0] : this.loaderArr : this.columns.slice(e ? this.first.cols : this.first, e ? this.last.cols : this.last);
      }
      return this.columns;
    }
  },
  components: {
    SpinnerIcon: Oe
  }
}, mt = ["tabindex"];
function gt(t, e, n, s, o, i) {
  var l = M("SpinnerIcon");
  return t.disabled ? (p(), v(q, {
    key: 1
  }, [O(t.$slots, "default"), O(t.$slots, "content", {
    items: t.items,
    rows: t.items,
    columns: i.loadedColumns
  })], 64)) : (p(), v("div", d({
    key: 0,
    ref: i.elementRef,
    class: i.containerClass,
    tabindex: t.tabindex,
    style: t.style,
    onScroll: e[0] || (e[0] = function() {
      return i.onScroll && i.onScroll.apply(i, arguments);
    })
  }, t.ptmi("root")), [O(t.$slots, "content", {
    styleClass: i.contentClass,
    items: i.loadedItems,
    getItemOptions: i.getOptions,
    loading: o.d_loading,
    getLoaderOptions: i.getLoaderOptions,
    itemSize: t.itemSize,
    rows: i.loadedRows,
    columns: i.loadedColumns,
    contentRef: i.contentRef,
    spacerStyle: o.spacerStyle,
    contentStyle: o.contentStyle,
    vertical: i.isVertical(),
    horizontal: i.isHorizontal(),
    both: i.isBoth()
  }, function() {
    return [E("div", d({
      ref: i.contentRef,
      class: i.contentClass,
      style: o.contentStyle
    }, t.ptm("content")), [(p(!0), v(q, null, oe(i.loadedItems, function(r, u) {
      return O(t.$slots, "item", {
        key: u,
        item: r,
        options: i.getOptions(u)
      });
    }), 128))], 16)];
  }), t.showSpacer ? (p(), v("div", d({
    key: 0,
    class: "p-virtualscroller-spacer",
    style: o.spacerStyle
  }, t.ptm("spacer")), null, 16)) : P("", !0), !t.loaderDisabled && t.showLoader && o.d_loading ? (p(), v("div", d({
    key: 1,
    class: i.loaderClass
  }, t.ptm("loader")), [t.$slots && t.$slots.loader ? (p(!0), v(q, {
    key: 0
  }, oe(o.loaderArr, function(r, u) {
    return O(t.$slots, "loader", {
      key: u,
      options: i.getLoaderOptions(u, i.isBoth() && {
        numCols: t.d_numItemsInViewport.cols
      })
    });
  }), 128)) : P("", !0), O(t.$slots, "loadingicon", {}, function() {
    return [j(l, d({
      spin: "",
      class: "p-virtualscroller-loading-icon"
    }, t.ptm("loadingIcon")), null, 16)];
  })], 16)) : P("", !0)], 16, mt));
}
Le.render = gt;
var yt = function(e) {
  var n = e.dt;
  return `
.p-select {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(n("select.background"), `;
    border: 1px solid `).concat(n("select.border.color"), `;
    transition: background `).concat(n("select.transition.duration"), ", color ").concat(n("select.transition.duration"), ", border-color ").concat(n("select.transition.duration"), `,
        outline-color `).concat(n("select.transition.duration"), ", box-shadow ").concat(n("select.transition.duration"), `;
    border-radius: `).concat(n("select.border.radius"), `;
    outline-color: transparent;
    box-shadow: `).concat(n("select.shadow"), `;
}

.p-select:not(.p-disabled):hover {
    border-color: `).concat(n("select.hover.border.color"), `;
}

.p-select:not(.p-disabled).p-focus {
    border-color: `).concat(n("select.focus.border.color"), `;
    box-shadow: `).concat(n("select.focus.ring.shadow"), `;
    outline: `).concat(n("select.focus.ring.width"), " ").concat(n("select.focus.ring.style"), " ").concat(n("select.focus.ring.color"), `;
    outline-offset: `).concat(n("select.focus.ring.offset"), `;
}

.p-select.p-variant-filled {
    background: `).concat(n("select.filled.background"), `;
}

.p-select.p-variant-filled.p-focus {
    background: `).concat(n("select.filled.focus.background"), `;
}

.p-select.p-invalid {
    border-color: `).concat(n("select.invalid.border.color"), `;
}

.p-select.p-disabled {
    opacity: 1;
    background: `).concat(n("select.disabled.background"), `;
}

.p-select-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: `).concat(n("select.clear.icon.color"), `;
    right: `).concat(n("select.dropdown.width"), `;
}

.p-select-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(n("select.dropdown.color"), `;
    width: `).concat(n("select.dropdown.width"), `;
    border-top-right-radius: `).concat(n("select.border.radius"), `;
    border-bottom-right-radius: `).concat(n("select.border.radius"), `;
}

.p-select-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: `).concat(n("select.padding.y"), " ").concat(n("select.padding.x"), `;
    text-overflow: ellipsis;
    cursor: pointer;
    color: `).concat(n("select.color"), `;
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-select-label.p-placeholder {
    color: `).concat(n("select.placeholder.color"), `;
}

.p-select:has(.p-select-clear-icon) .p-select-label {
    padding-right: calc(1rem + `).concat(n("select.padding.x"), `);
}

.p-select.p-disabled .p-select-label {
    color: `).concat(n("select.disabled.color"), `;
}

.p-select-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-select-label {
    cursor: default;
}

.p-select .p-select-overlay {
    min-width: 100%;
}

.p-select-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(n("select.overlay.background"), `;
    color: `).concat(n("select.overlay.color"), `;
    border: 1px solid `).concat(n("select.overlay.border.color"), `;
    border-radius: `).concat(n("select.overlay.border.radius"), `;
    box-shadow: `).concat(n("select.overlay.shadow"), `;
}

.p-select-header {
    padding: `).concat(n("select.list.header.padding"), `;
}

.p-select-filter {
    width: 100%;
}

.p-select-list-container {
    overflow: auto;
}

.p-select-option-group {
    cursor: auto;
    margin: 0;
    padding: `).concat(n("select.option.group.padding"), `;
    background: `).concat(n("select.option.group.background"), `;
    color: `).concat(n("select.option.group.color"), `;
    font-weight: `).concat(n("select.option.group.font.weight"), `;
}

.p-select-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: `).concat(n("select.list.padding"), `;
    gap: `).concat(n("select.list.gap"), `;
    display: flex;
    flex-direction: column;
}

.p-select-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: `).concat(n("select.option.padding"), `;
    border: 0 none;
    color: `).concat(n("select.option.color"), `;
    background: transparent;
    transition: background `).concat(n("select.transition.duration"), ", color ").concat(n("select.transition.duration"), ", border-color ").concat(n("select.transition.duration"), `,
            box-shadow `).concat(n("select.transition.duration"), ", outline-color ").concat(n("select.transition.duration"), `;
    border-radius: `).concat(n("select.option.border.radius"), `;
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
    background: `).concat(n("select.option.focus.background"), `;
    color: `).concat(n("select.option.focus.color"), `;
}

.p-select-option.p-select-option-selected {
    background: `).concat(n("select.option.selected.background"), `;
    color: `).concat(n("select.option.selected.color"), `;
}

.p-select-option.p-select-option-selected.p-focus {
    background: `).concat(n("select.option.selected.focus.background"), `;
    color: `).concat(n("select.option.selected.focus.color"), `;
}

.p-select-option-check-icon {
    position: relative;
    margin-inline-start: `).concat(n("select.checkmark.gutter.start"), `;
    margin-inline-end: `).concat(n("select.checkmark.gutter.end"), `;
    color: `).concat(n("select.checkmark.color"), `;
}

.p-select-empty-message {
    padding: `).concat(n("select.empty.message.padding"), `;
}

.p-select-fluid {
    display: flex;
}
`);
}, bt = {
  root: function(e) {
    var n = e.instance, s = e.props, o = e.state;
    return ["p-select p-component p-inputwrapper", {
      "p-disabled": s.disabled,
      "p-invalid": s.invalid,
      "p-variant-filled": s.variant ? s.variant === "filled" : n.$primevue.config.inputStyle === "filled" || n.$primevue.config.inputVariant === "filled",
      "p-focus": o.focused,
      "p-inputwrapper-filled": n.hasSelectedOption,
      "p-inputwrapper-focus": o.focused || o.overlayVisible,
      "p-select-open": o.overlayVisible,
      "p-select-fluid": n.hasFluid
    }];
  },
  label: function(e) {
    var n = e.instance, s = e.props;
    return ["p-select-label", {
      "p-placeholder": !s.editable && n.label === s.placeholder,
      "p-select-label-empty": !s.editable && !n.$slots.value && (n.label === "p-emptylabel" || n.label.length === 0)
    }];
  },
  clearIcon: "p-select-clear-icon",
  dropdown: "p-select-dropdown",
  loadingicon: "p-select-loading-icon",
  dropdownIcon: "p-select-dropdown-icon",
  overlay: "p-select-overlay p-component",
  header: "p-select-header",
  pcFilter: "p-select-filter",
  listContainer: "p-select-list-container",
  list: "p-select-list",
  optionGroup: "p-select-option-group",
  optionGroupLabel: "p-select-option-group-label",
  option: function(e) {
    var n = e.instance, s = e.props, o = e.state, i = e.option, l = e.focusedOption;
    return ["p-select-option", {
      "p-select-option-selected": n.isSelected(i) && s.highlightOnSelect,
      "p-focus": o.focusedOptionIndex === l,
      "p-disabled": n.isOptionDisabled(i)
    }];
  },
  optionLabel: "p-select-option-label",
  optionCheckIcon: "p-select-option-check-icon",
  optionBlankIcon: "p-select-option-blank-icon",
  emptyMessage: "p-select-empty-message"
}, vt = be.extend({
  name: "select",
  theme: yt,
  classes: bt
}), It = {
  name: "BaseSelect",
  extends: Ie,
  props: {
    modelValue: null,
    options: Array,
    optionLabel: [String, Function],
    optionValue: [String, Function],
    optionDisabled: [String, Function],
    optionGroupLabel: [String, Function],
    optionGroupChildren: [String, Function],
    scrollHeight: {
      type: String,
      default: "14rem"
    },
    filter: Boolean,
    filterPlaceholder: String,
    filterLocale: String,
    filterMatchMode: {
      type: String,
      default: "contains"
    },
    filterFields: {
      type: Array,
      default: null
    },
    editable: Boolean,
    placeholder: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    invalid: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    dataKey: null,
    showClear: {
      type: Boolean,
      default: !1
    },
    fluid: {
      type: Boolean,
      default: null
    },
    inputId: {
      type: String,
      default: null
    },
    inputClass: {
      type: [String, Object],
      default: null
    },
    inputStyle: {
      type: Object,
      default: null
    },
    labelId: {
      type: String,
      default: null
    },
    labelClass: {
      type: [String, Object],
      default: null
    },
    labelStyle: {
      type: Object,
      default: null
    },
    panelClass: {
      type: [String, Object],
      default: null
    },
    overlayStyle: {
      type: Object,
      default: null
    },
    overlayClass: {
      type: [String, Object],
      default: null
    },
    panelStyle: {
      type: Object,
      default: null
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    clearIcon: {
      type: String,
      default: void 0
    },
    dropdownIcon: {
      type: String,
      default: void 0
    },
    filterIcon: {
      type: String,
      default: void 0
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    resetFilterOnHide: {
      type: Boolean,
      default: !1
    },
    resetFilterOnClear: {
      type: Boolean,
      default: !1
    },
    virtualScrollerOptions: {
      type: Object,
      default: null
    },
    autoOptionFocus: {
      type: Boolean,
      default: !1
    },
    autoFilterFocus: {
      type: Boolean,
      default: !1
    },
    selectOnFocus: {
      type: Boolean,
      default: !1
    },
    focusOnHover: {
      type: Boolean,
      default: !0
    },
    highlightOnSelect: {
      type: Boolean,
      default: !0
    },
    checkmark: {
      type: Boolean,
      default: !1
    },
    filterMessage: {
      type: String,
      default: null
    },
    selectionMessage: {
      type: String,
      default: null
    },
    emptySelectionMessage: {
      type: String,
      default: null
    },
    emptyFilterMessage: {
      type: String,
      default: null
    },
    emptyMessage: {
      type: String,
      default: null
    },
    tabindex: {
      type: Number,
      default: 0
    },
    ariaLabel: {
      type: String,
      default: null
    },
    ariaLabelledby: {
      type: String,
      default: null
    }
  },
  style: vt,
  provide: function() {
    return {
      $pcSelect: this,
      $parentInstance: this
    };
  }
};
function $(t) {
  "@babel/helpers - typeof";
  return $ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $(t);
}
function Ot(t) {
  return Ct(t) || Lt(t) || wt(t) || St();
}
function St() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wt(t, e) {
  if (t) {
    if (typeof t == "string") return re(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? re(t, e) : void 0;
  }
}
function Lt(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Ct(t) {
  if (Array.isArray(t)) return re(t);
}
function re(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, s = Array(e); n < e; n++) s[n] = t[n];
  return s;
}
function me(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, s);
  }
  return n;
}
function ge(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? me(Object(n), !0).forEach(function(s) {
      Ce(t, s, n[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(n, s));
    });
  }
  return t;
}
function Ce(t, e, n) {
  return (e = kt(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function kt(t) {
  var e = Tt(t, "string");
  return $(e) == "symbol" ? e : e + "";
}
function Tt(t, e) {
  if ($(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var s = n.call(t, e || "default");
    if ($(s) != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ke = {
  name: "Select",
  extends: It,
  inheritAttrs: !1,
  emits: ["update:modelValue", "change", "focus", "blur", "before-show", "before-hide", "show", "hide", "filter"],
  inject: {
    $pcFluid: {
      default: null
    }
  },
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  labelClickListener: null,
  overlay: null,
  list: null,
  virtualScroller: null,
  searchTimeout: null,
  searchValue: null,
  isModelValueChanged: !1,
  data: function() {
    return {
      id: this.$attrs.id,
      clicked: !1,
      focused: !1,
      focusedOptionIndex: -1,
      filterValue: null,
      overlayVisible: !1
    };
  },
  watch: {
    "$attrs.id": function(e) {
      this.id = e || ue();
    },
    modelValue: function() {
      this.isModelValueChanged = !0;
    },
    options: function() {
      this.autoUpdateModel();
    }
  },
  mounted: function() {
    this.id = this.id || ue(), this.autoUpdateModel(), this.bindLabelClickListener();
  },
  updated: function() {
    this.overlayVisible && this.isModelValueChanged && this.scrollInView(this.findSelectedOptionIndex()), this.isModelValueChanged = !1;
  },
  beforeUnmount: function() {
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindLabelClickListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.overlay && (se.clear(this.overlay), this.overlay = null);
  },
  methods: {
    getOptionIndex: function(e, n) {
      return this.virtualScrollerDisabled ? e : n && n(e).index;
    },
    getOptionLabel: function(e) {
      return this.optionLabel ? W(e, this.optionLabel) : e;
    },
    getOptionValue: function(e) {
      return this.optionValue ? W(e, this.optionValue) : e;
    },
    getOptionRenderKey: function(e, n) {
      return (this.dataKey ? W(e, this.dataKey) : this.getOptionLabel(e)) + "_" + n;
    },
    getPTItemOptions: function(e, n, s, o) {
      return this.ptm(o, {
        context: {
          option: e,
          index: s,
          selected: this.isSelected(e),
          focused: this.focusedOptionIndex === this.getOptionIndex(s, n),
          disabled: this.isOptionDisabled(e)
        }
      });
    },
    isOptionDisabled: function(e) {
      return this.optionDisabled ? W(e, this.optionDisabled) : !1;
    },
    isOptionGroup: function(e) {
      return this.optionGroupLabel && e.optionGroup && e.group;
    },
    getOptionGroupLabel: function(e) {
      return W(e, this.optionGroupLabel);
    },
    getOptionGroupChildren: function(e) {
      return W(e, this.optionGroupChildren);
    },
    getAriaPosInset: function(e) {
      var n = this;
      return (this.optionGroupLabel ? e - this.visibleOptions.slice(0, e).filter(function(s) {
        return n.isOptionGroup(s);
      }).length : e) + 1;
    },
    show: function(e) {
      this.$emit("before-show"), this.overlayVisible = !0, this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex(), e && R(this.$refs.focusInput);
    },
    hide: function(e) {
      var n = this, s = function() {
        n.$emit("before-hide"), n.overlayVisible = !1, n.clicked = !1, n.focusedOptionIndex = -1, n.searchValue = "", n.resetFilterOnHide && (n.filterValue = null), e && R(n.$refs.focusInput);
      };
      setTimeout(function() {
        s();
      }, 0);
    },
    onFocus: function(e) {
      this.disabled || (this.focused = !0, this.overlayVisible && (this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex(), this.scrollInView(this.focusedOptionIndex)), this.$emit("focus", e));
    },
    onBlur: function(e) {
      this.focused = !1, this.focusedOptionIndex = -1, this.searchValue = "", this.$emit("blur", e);
    },
    onKeyDown: function(e) {
      if (this.disabled || Ke()) {
        e.preventDefault();
        return;
      }
      var n = e.metaKey || e.ctrlKey;
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e, this.editable);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(e, this.editable);
          break;
        case "Home":
          this.onHomeKey(e, this.editable);
          break;
        case "End":
          this.onEndKey(e, this.editable);
          break;
        case "PageDown":
          this.onPageDownKey(e);
          break;
        case "PageUp":
          this.onPageUpKey(e);
          break;
        case "Space":
          this.onSpaceKey(e, this.editable);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(e);
          break;
        case "Escape":
          this.onEscapeKey(e);
          break;
        case "Tab":
          this.onTabKey(e);
          break;
        case "Backspace":
          this.onBackspaceKey(e, this.editable);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !n && He(e.key) && (!this.overlayVisible && this.show(), !this.editable && this.searchOptions(e, e.key));
          break;
      }
      this.clicked = !1;
    },
    onEditableInput: function(e) {
      var n = e.target.value;
      this.searchValue = "";
      var s = this.searchOptions(e, n);
      !s && (this.focusedOptionIndex = -1), this.updateModel(e, n), !this.overlayVisible && U(n) && this.show();
    },
    onContainerClick: function(e) {
      this.disabled || this.loading || e.target.tagName === "INPUT" || e.target.getAttribute("data-pc-section") === "clearicon" || e.target.closest('[data-pc-section="clearicon"]') || ((!this.overlay || !this.overlay.contains(e.target)) && (this.overlayVisible ? this.hide(!0) : this.show(!0)), this.clicked = !0);
    },
    onClearClick: function(e) {
      this.updateModel(e, null), this.resetFilterOnClear && (this.filterValue = null);
    },
    onFirstHiddenFocus: function(e) {
      var n = e.relatedTarget === this.$refs.focusInput ? De(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      R(n);
    },
    onLastHiddenFocus: function(e) {
      var n = e.relatedTarget === this.$refs.focusInput ? Re(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      R(n);
    },
    onOptionSelect: function(e, n) {
      var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = this.getOptionValue(n);
      this.updateModel(e, o), s && this.hide(!0);
    },
    onOptionMouseMove: function(e, n) {
      this.focusOnHover && this.changeFocusedOptionIndex(e, n);
    },
    onFilterChange: function(e) {
      var n = e.target.value;
      this.filterValue = n, this.focusedOptionIndex = -1, this.$emit("filter", {
        originalEvent: e,
        value: n
      }), !this.virtualScrollerDisabled && this.virtualScroller.scrollToIndex(0);
    },
    onFilterKeyDown: function(e) {
      if (!e.isComposing)
        switch (e.code) {
          case "ArrowDown":
            this.onArrowDownKey(e);
            break;
          case "ArrowUp":
            this.onArrowUpKey(e, !0);
            break;
          case "ArrowLeft":
          case "ArrowRight":
            this.onArrowLeftKey(e, !0);
            break;
          case "Home":
            this.onHomeKey(e, !0);
            break;
          case "End":
            this.onEndKey(e, !0);
            break;
          case "Enter":
          case "NumpadEnter":
            this.onEnterKey(e);
            break;
          case "Escape":
            this.onEscapeKey(e);
            break;
          case "Tab":
            this.onTabKey(e, !0);
            break;
        }
    },
    onFilterBlur: function() {
      this.focusedOptionIndex = -1;
    },
    onFilterUpdated: function() {
      this.overlayVisible && this.alignOverlay();
    },
    onOverlayClick: function(e) {
      st.emit("overlay-click", {
        originalEvent: e,
        target: this.$el
      });
    },
    onOverlayKeyDown: function(e) {
      switch (e.code) {
        case "Escape":
          this.onEscapeKey(e);
          break;
      }
    },
    onArrowDownKey: function(e) {
      if (!this.overlayVisible)
        this.show(), this.editable && this.changeFocusedOptionIndex(e, this.findSelectedOptionIndex());
      else {
        var n = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
        this.changeFocusedOptionIndex(e, n);
      }
      e.preventDefault();
    },
    onArrowUpKey: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (e.altKey && !n)
        this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide(), e.preventDefault();
      else {
        var s = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(e, s), !this.overlayVisible && this.show(), e.preventDefault();
      }
    },
    onArrowLeftKey: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      n && (this.focusedOptionIndex = -1);
    },
    onHomeKey: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (n) {
        var s = e.currentTarget;
        e.shiftKey ? s.setSelectionRange(0, e.target.selectionStart) : (s.setSelectionRange(0, 0), this.focusedOptionIndex = -1);
      } else
        this.changeFocusedOptionIndex(e, this.findFirstOptionIndex()), !this.overlayVisible && this.show();
      e.preventDefault();
    },
    onEndKey: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (n) {
        var s = e.currentTarget;
        if (e.shiftKey)
          s.setSelectionRange(e.target.selectionStart, s.value.length);
        else {
          var o = s.value.length;
          s.setSelectionRange(o, o), this.focusedOptionIndex = -1;
        }
      } else
        this.changeFocusedOptionIndex(e, this.findLastOptionIndex()), !this.overlayVisible && this.show();
      e.preventDefault();
    },
    onPageUpKey: function(e) {
      this.scrollInView(0), e.preventDefault();
    },
    onPageDownKey: function(e) {
      this.scrollInView(this.visibleOptions.length - 1), e.preventDefault();
    },
    onEnterKey: function(e) {
      this.overlayVisible ? (this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.hide()) : (this.focusedOptionIndex = -1, this.onArrowDownKey(e)), e.preventDefault();
    },
    onSpaceKey: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      !n && this.onEnterKey(e);
    },
    onEscapeKey: function(e) {
      this.overlayVisible && this.hide(!0), e.preventDefault(), e.stopPropagation();
    },
    onTabKey: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      n || (this.overlayVisible && this.hasFocusableElements() ? (R(this.$refs.firstHiddenFocusableElementOnOverlay), e.preventDefault()) : (this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide(this.filter)));
    },
    onBackspaceKey: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      n && !this.overlayVisible && this.show();
    },
    onOverlayEnter: function(e) {
      se.set("overlay", e, this.$primevue.config.zIndex.overlay), je(e, {
        position: "absolute",
        top: "0",
        left: "0"
      }), this.alignOverlay(), this.scrollInView(), this.autoFilterFocus && R(this.$refs.filterInput.$el);
    },
    onOverlayAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onOverlayLeave: function() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.autoFilterFocus && R(this.$refs.focusInput), this.$emit("hide"), this.overlay = null;
    },
    onOverlayAfterLeave: function(e) {
      se.clear(e);
    },
    alignOverlay: function() {
      this.appendTo === "self" ? Ne(this.overlay, this.$el) : (this.overlay.style.minWidth = Ge(this.$el) + "px", We(this.overlay, this.$el));
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        e.overlayVisible && e.overlay && !e.$el.contains(n.target) && !e.overlay.contains(n.target) && e.hide();
      }, document.addEventListener("click", this.outsideClickListener));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var e = this;
      this.scrollHandler || (this.scrollHandler = new Ue(this.$refs.container, function() {
        e.overlayVisible && e.hide();
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function() {
        e.overlayVisible && !qe() && e.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindLabelClickListener: function() {
      var e = this;
      if (!this.editable && !this.labelClickListener) {
        var n = document.querySelector('label[for="'.concat(this.inputId, '"]'));
        n && ne(n) && (this.labelClickListener = function() {
          R(e.$refs.focusInput);
        }, n.addEventListener("click", this.labelClickListener));
      }
    },
    unbindLabelClickListener: function() {
      if (this.labelClickListener) {
        var e = document.querySelector('label[for="'.concat(this.inputId, '"]'));
        e && ne(e) && e.removeEventListener("click", this.labelClickListener);
      }
    },
    hasFocusableElements: function() {
      return Qe(this.overlay, ':not([data-p-hidden-focusable="true"])').length > 0;
    },
    isOptionMatched: function(e) {
      var n;
      return this.isValidOption(e) && typeof this.getOptionLabel(e) == "string" && ((n = this.getOptionLabel(e)) === null || n === void 0 ? void 0 : n.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)));
    },
    isValidOption: function(e) {
      return U(e) && !(this.isOptionDisabled(e) || this.isOptionGroup(e));
    },
    isValidSelectedOption: function(e) {
      return this.isValidOption(e) && this.isSelected(e);
    },
    isSelected: function(e) {
      return this.isValidOption(e) && ye(this.modelValue, this.getOptionValue(e), this.equalityKey);
    },
    findFirstOptionIndex: function() {
      var e = this;
      return this.visibleOptions.findIndex(function(n) {
        return e.isValidOption(n);
      });
    },
    findLastOptionIndex: function() {
      var e = this;
      return ce(this.visibleOptions, function(n) {
        return e.isValidOption(n);
      });
    },
    findNextOptionIndex: function(e) {
      var n = this, s = e < this.visibleOptions.length - 1 ? this.visibleOptions.slice(e + 1).findIndex(function(o) {
        return n.isValidOption(o);
      }) : -1;
      return s > -1 ? s + e + 1 : e;
    },
    findPrevOptionIndex: function(e) {
      var n = this, s = e > 0 ? ce(this.visibleOptions.slice(0, e), function(o) {
        return n.isValidOption(o);
      }) : -1;
      return s > -1 ? s : e;
    },
    findSelectedOptionIndex: function() {
      var e = this;
      return this.hasSelectedOption ? this.visibleOptions.findIndex(function(n) {
        return e.isValidSelectedOption(n);
      }) : -1;
    },
    findFirstFocusedOptionIndex: function() {
      var e = this.findSelectedOptionIndex();
      return e < 0 ? this.findFirstOptionIndex() : e;
    },
    findLastFocusedOptionIndex: function() {
      var e = this.findSelectedOptionIndex();
      return e < 0 ? this.findLastOptionIndex() : e;
    },
    searchOptions: function(e, n) {
      var s = this;
      this.searchValue = (this.searchValue || "") + n;
      var o = -1, i = !1;
      return U(this.searchValue) && (this.focusedOptionIndex !== -1 ? (o = this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(l) {
        return s.isOptionMatched(l);
      }), o = o === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex(function(l) {
        return s.isOptionMatched(l);
      }) : o + this.focusedOptionIndex) : o = this.visibleOptions.findIndex(function(l) {
        return s.isOptionMatched(l);
      }), o !== -1 && (i = !0), o === -1 && this.focusedOptionIndex === -1 && (o = this.findFirstFocusedOptionIndex()), o !== -1 && this.changeFocusedOptionIndex(e, o)), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        s.searchValue = "", s.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedOptionIndex: function(e, n) {
      this.focusedOptionIndex !== n && (this.focusedOptionIndex = n, this.scrollInView(), this.selectOnFocus && this.onOptionSelect(e, this.visibleOptions[n], !1));
    },
    scrollInView: function() {
      var e = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      this.$nextTick(function() {
        var s = n !== -1 ? "".concat(e.id, "_").concat(n) : e.focusedOptionId, o = ve(e.list, 'li[id="'.concat(s, '"]'));
        o ? o.scrollIntoView && o.scrollIntoView({
          block: "nearest",
          inline: "start"
        }) : e.virtualScrollerDisabled || e.virtualScroller && e.virtualScroller.scrollToIndex(n !== -1 ? n : e.focusedOptionIndex);
      });
    },
    autoUpdateModel: function() {
      this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption && (this.focusedOptionIndex = this.findFirstFocusedOptionIndex(), this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], !1));
    },
    updateModel: function(e, n) {
      this.$emit("update:modelValue", n), this.$emit("change", {
        originalEvent: e,
        value: n
      });
    },
    flatOptions: function(e) {
      var n = this;
      return (e || []).reduce(function(s, o, i) {
        s.push({
          optionGroup: o,
          group: !0,
          index: i
        });
        var l = n.getOptionGroupChildren(o);
        return l && l.forEach(function(r) {
          return s.push(r);
        }), s;
      }, []);
    },
    overlayRef: function(e) {
      this.overlay = e;
    },
    listRef: function(e, n) {
      this.list = e, n && n(e);
    },
    virtualScrollerRef: function(e) {
      this.virtualScroller = e;
    }
  },
  computed: {
    visibleOptions: function() {
      var e = this, n = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      if (this.filterValue) {
        var s = ut.filter(n, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        if (this.optionGroupLabel) {
          var o = this.options || [], i = [];
          return o.forEach(function(l) {
            var r = e.getOptionGroupChildren(l), u = r.filter(function(a) {
              return s.includes(a);
            });
            u.length > 0 && i.push(ge(ge({}, l), {}, Ce({}, typeof e.optionGroupChildren == "string" ? e.optionGroupChildren : "items", Ot(u))));
          }), this.flatOptions(i);
        }
        return s;
      }
      return n;
    },
    hasSelectedOption: function() {
      return U(this.modelValue);
    },
    label: function() {
      var e = this.findSelectedOptionIndex();
      return e !== -1 ? this.getOptionLabel(this.visibleOptions[e]) : this.placeholder || "p-emptylabel";
    },
    editableInputValue: function() {
      var e = this.findSelectedOptionIndex();
      return e !== -1 ? this.getOptionLabel(this.visibleOptions[e]) : this.modelValue || "";
    },
    equalityKey: function() {
      return this.optionValue ? null : this.dataKey;
    },
    searchFields: function() {
      return this.filterFields || [this.optionLabel];
    },
    filterResultMessageText: function() {
      return U(this.visibleOptions) ? this.filterMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptyFilterMessageText;
    },
    filterMessageText: function() {
      return this.filterMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptyFilterMessageText: function() {
      return this.emptyFilterMessage || this.$primevue.config.locale.emptySearchMessage || this.$primevue.config.locale.emptyFilterMessage || "";
    },
    emptyMessageText: function() {
      return this.emptyMessage || this.$primevue.config.locale.emptyMessage || "";
    },
    selectionMessageText: function() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText: function() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText: function() {
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll("{0}", "1") : this.emptySelectionMessageText;
    },
    focusedOptionId: function() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.id, "_").concat(this.focusedOptionIndex) : null;
    },
    ariaSetSize: function() {
      var e = this;
      return this.visibleOptions.filter(function(n) {
        return !e.isOptionGroup(n);
      }).length;
    },
    isClearIconVisible: function() {
      return this.showClear && this.modelValue != null && U(this.options);
    },
    virtualScrollerDisabled: function() {
      return !this.virtualScrollerOptions;
    },
    hasFluid: function() {
      return Ze(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  },
  directives: {
    ripple: ot
  },
  components: {
    InputText: it,
    VirtualScroller: Le,
    Portal: Je,
    InputIcon: _e,
    IconField: et,
    TimesIcon: nt,
    ChevronDownIcon: $e,
    SpinnerIcon: Oe,
    SearchIcon: tt,
    CheckIcon: Ye,
    BlankIcon: Se
  }
}, Vt = ["id"], Ft = ["id", "value", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"], zt = ["id", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-disabled"], Et = ["id"], At = ["id"], Mt = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-selected", "data-p-focused", "data-p-disabled"];
function Bt(t, e, n, s, o, i) {
  var l = M("SpinnerIcon"), r = M("InputText"), u = M("SearchIcon"), a = M("InputIcon"), c = M("IconField"), h = M("CheckIcon"), g = M("BlankIcon"), w = M("VirtualScroller"), b = M("Portal"), L = Te("ripple");
  return p(), v("div", d({
    ref: "container",
    id: o.id,
    class: t.cx("root"),
    onClick: e[11] || (e[11] = function() {
      return i.onContainerClick && i.onContainerClick.apply(i, arguments);
    })
  }, t.ptmi("root")), [t.editable ? (p(), v("input", d({
    key: 0,
    ref: "focusInput",
    id: t.labelId || t.inputId,
    type: "text",
    class: [t.cx("label"), t.inputClass, t.labelClass],
    style: [t.inputStyle, t.labelStyle],
    value: i.editableInputValue,
    placeholder: t.placeholder,
    tabindex: t.disabled ? -1 : t.tabindex,
    disabled: t.disabled,
    autocomplete: "off",
    role: "combobox",
    "aria-label": t.ariaLabel,
    "aria-labelledby": t.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-expanded": o.overlayVisible,
    "aria-controls": o.id + "_list",
    "aria-activedescendant": o.focused ? i.focusedOptionId : void 0,
    "aria-invalid": t.invalid || void 0,
    onFocus: e[0] || (e[0] = function() {
      return i.onFocus && i.onFocus.apply(i, arguments);
    }),
    onBlur: e[1] || (e[1] = function() {
      return i.onBlur && i.onBlur.apply(i, arguments);
    }),
    onKeydown: e[2] || (e[2] = function() {
      return i.onKeyDown && i.onKeyDown.apply(i, arguments);
    }),
    onInput: e[3] || (e[3] = function() {
      return i.onEditableInput && i.onEditableInput.apply(i, arguments);
    })
  }, t.ptm("label")), null, 16, Ft)) : (p(), v("span", d({
    key: 1,
    ref: "focusInput",
    id: t.labelId || t.inputId,
    class: [t.cx("label"), t.inputClass, t.labelClass],
    style: [t.inputStyle, t.labelStyle],
    tabindex: t.disabled ? -1 : t.tabindex,
    role: "combobox",
    "aria-label": t.ariaLabel || (i.label === "p-emptylabel" ? void 0 : i.label),
    "aria-labelledby": t.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-expanded": o.overlayVisible,
    "aria-controls": o.id + "_list",
    "aria-activedescendant": o.focused ? i.focusedOptionId : void 0,
    "aria-disabled": t.disabled,
    onFocus: e[4] || (e[4] = function() {
      return i.onFocus && i.onFocus.apply(i, arguments);
    }),
    onBlur: e[5] || (e[5] = function() {
      return i.onBlur && i.onBlur.apply(i, arguments);
    }),
    onKeydown: e[6] || (e[6] = function() {
      return i.onKeyDown && i.onKeyDown.apply(i, arguments);
    })
  }, t.ptm("label")), [O(t.$slots, "value", {
    value: t.modelValue,
    placeholder: t.placeholder
  }, function() {
    return [ie(D(i.label === "p-emptylabel" ? " " : i.label || "empty"), 1)];
  })], 16, zt)), i.isClearIconVisible ? O(t.$slots, "clearicon", {
    key: 2,
    class: te(t.cx("clearIcon")),
    clearCallback: i.onClearClick
  }, function() {
    return [(p(), G(le(t.clearIcon ? "i" : "TimesIcon"), d({
      ref: "clearIcon",
      class: [t.cx("clearIcon"), t.clearIcon],
      onClick: i.onClearClick
    }, t.ptm("clearIcon"), {
      "data-pc-section": "clearicon"
    }), null, 16, ["class", "onClick"]))];
  }) : P("", !0), E("div", d({
    class: t.cx("dropdown")
  }, t.ptm("dropdown")), [t.loading ? O(t.$slots, "loadingicon", {
    key: 0,
    class: te(t.cx("loadingIcon"))
  }, function() {
    return [t.loadingIcon ? (p(), v("span", d({
      key: 0,
      class: [t.cx("loadingIcon"), "pi-spin", t.loadingIcon],
      "aria-hidden": "true"
    }, t.ptm("loadingIcon")), null, 16)) : (p(), G(l, d({
      key: 1,
      class: t.cx("loadingIcon"),
      spin: "",
      "aria-hidden": "true"
    }, t.ptm("loadingIcon")), null, 16, ["class"]))];
  }) : O(t.$slots, "dropdownicon", {
    key: 1,
    class: te(t.cx("dropdownIcon"))
  }, function() {
    return [(p(), G(le(t.dropdownIcon ? "span" : "ChevronDownIcon"), d({
      class: [t.cx("dropdownIcon"), t.dropdownIcon],
      "aria-hidden": "true"
    }, t.ptm("dropdownIcon")), null, 16, ["class"]))];
  })], 16), j(b, {
    appendTo: t.appendTo
  }, {
    default: K(function() {
      return [j(Ve, d({
        name: "p-connected-overlay",
        onEnter: i.onOverlayEnter,
        onAfterEnter: i.onOverlayAfterEnter,
        onLeave: i.onOverlayLeave,
        onAfterLeave: i.onOverlayAfterLeave
      }, t.ptm("transition")), {
        default: K(function() {
          return [o.overlayVisible ? (p(), v("div", d({
            key: 0,
            ref: i.overlayRef,
            class: [t.cx("overlay"), t.panelClass, t.overlayClass],
            style: [t.panelStyle, t.overlayStyle],
            onClick: e[9] || (e[9] = function() {
              return i.onOverlayClick && i.onOverlayClick.apply(i, arguments);
            }),
            onKeydown: e[10] || (e[10] = function() {
              return i.onOverlayKeyDown && i.onOverlayKeyDown.apply(i, arguments);
            })
          }, t.ptm("overlay")), [E("span", d({
            ref: "firstHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            class: "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: e[7] || (e[7] = function() {
              return i.onFirstHiddenFocus && i.onFirstHiddenFocus.apply(i, arguments);
            })
          }, t.ptm("hiddenFirstFocusableEl"), {
            "data-p-hidden-accessible": !0,
            "data-p-hidden-focusable": !0
          }), null, 16), O(t.$slots, "header", {
            value: t.modelValue,
            options: i.visibleOptions
          }), t.filter ? (p(), v("div", d({
            key: 0,
            class: t.cx("header")
          }, t.ptm("header")), [j(c, {
            unstyled: t.unstyled,
            pt: t.ptm("pcFilterContainer")
          }, {
            default: K(function() {
              return [j(r, {
                ref: "filterInput",
                type: "text",
                value: o.filterValue,
                onVnodeMounted: i.onFilterUpdated,
                onVnodeUpdated: i.onFilterUpdated,
                class: te(t.cx("pcFilter")),
                placeholder: t.filterPlaceholder,
                variant: t.variant,
                unstyled: t.unstyled,
                role: "searchbox",
                autocomplete: "off",
                "aria-owns": o.id + "_list",
                "aria-activedescendant": i.focusedOptionId,
                onKeydown: i.onFilterKeyDown,
                onBlur: i.onFilterBlur,
                onInput: i.onFilterChange,
                pt: t.ptm("pcFilter")
              }, null, 8, ["value", "onVnodeMounted", "onVnodeUpdated", "class", "placeholder", "variant", "unstyled", "aria-owns", "aria-activedescendant", "onKeydown", "onBlur", "onInput", "pt"]), j(a, {
                unstyled: t.unstyled,
                pt: t.ptm("pcFilterIconContainer")
              }, {
                default: K(function() {
                  return [O(t.$slots, "filtericon", {}, function() {
                    return [t.filterIcon ? (p(), v("span", d({
                      key: 0,
                      class: t.filterIcon
                    }, t.ptm("filterIcon")), null, 16)) : (p(), G(u, Fe(d({
                      key: 1
                    }, t.ptm("filterIcon"))), null, 16))];
                  })];
                }),
                _: 3
              }, 8, ["unstyled", "pt"])];
            }),
            _: 3
          }, 8, ["unstyled", "pt"]), E("span", d({
            role: "status",
            "aria-live": "polite",
            class: "p-hidden-accessible"
          }, t.ptm("hiddenFilterResult"), {
            "data-p-hidden-accessible": !0
          }), D(i.filterResultMessageText), 17)], 16)) : P("", !0), E("div", d({
            class: t.cx("listContainer"),
            style: {
              "max-height": i.virtualScrollerDisabled ? t.scrollHeight : ""
            }
          }, t.ptm("listContainer")), [j(w, d({
            ref: i.virtualScrollerRef
          }, t.virtualScrollerOptions, {
            items: i.visibleOptions,
            style: {
              height: t.scrollHeight
            },
            tabindex: -1,
            disabled: i.virtualScrollerDisabled,
            pt: t.ptm("virtualScroller")
          }), ze({
            content: K(function(I) {
              var C = I.styleClass, k = I.contentRef, T = I.items, f = I.getItemOptions, H = I.contentStyle, V = I.itemSize;
              return [E("ul", d({
                ref: function(y) {
                  return i.listRef(y, k);
                },
                id: o.id + "_list",
                class: [t.cx("list"), C],
                style: H,
                role: "listbox"
              }, t.ptm("list")), [(p(!0), v(q, null, oe(T, function(m, y) {
                return p(), v(q, {
                  key: i.getOptionRenderKey(m, i.getOptionIndex(y, f))
                }, [i.isOptionGroup(m) ? (p(), v("li", d({
                  key: 0,
                  id: o.id + "_" + i.getOptionIndex(y, f),
                  style: {
                    height: V ? V + "px" : void 0
                  },
                  class: t.cx("optionGroup"),
                  role: "option",
                  ref_for: !0
                }, t.ptm("optionGroup")), [O(t.$slots, "optiongroup", {
                  option: m.optionGroup,
                  index: i.getOptionIndex(y, f)
                }, function() {
                  return [E("span", d({
                    class: t.cx("optionGroupLabel"),
                    ref_for: !0
                  }, t.ptm("optionGroupLabel")), D(i.getOptionGroupLabel(m.optionGroup)), 17)];
                })], 16, At)) : Ee((p(), v("li", d({
                  key: 1,
                  id: o.id + "_" + i.getOptionIndex(y, f),
                  class: t.cx("option", {
                    option: m,
                    focusedOption: i.getOptionIndex(y, f)
                  }),
                  style: {
                    height: V ? V + "px" : void 0
                  },
                  role: "option",
                  "aria-label": i.getOptionLabel(m),
                  "aria-selected": i.isSelected(m),
                  "aria-disabled": i.isOptionDisabled(m),
                  "aria-setsize": i.ariaSetSize,
                  "aria-posinset": i.getAriaPosInset(i.getOptionIndex(y, f)),
                  onClick: function(A) {
                    return i.onOptionSelect(A, m);
                  },
                  onMousemove: function(A) {
                    return i.onOptionMouseMove(A, i.getOptionIndex(y, f));
                  },
                  "data-p-selected": i.isSelected(m),
                  "data-p-focused": o.focusedOptionIndex === i.getOptionIndex(y, f),
                  "data-p-disabled": i.isOptionDisabled(m),
                  ref_for: !0
                }, i.getPTItemOptions(m, f, y, "option")), [t.checkmark ? (p(), v(q, {
                  key: 0
                }, [i.isSelected(m) ? (p(), G(h, d({
                  key: 0,
                  class: t.cx("optionCheckIcon"),
                  ref_for: !0
                }, t.ptm("optionCheckIcon")), null, 16, ["class"])) : (p(), G(g, d({
                  key: 1,
                  class: t.cx("optionBlankIcon"),
                  ref_for: !0
                }, t.ptm("optionBlankIcon")), null, 16, ["class"]))], 64)) : P("", !0), O(t.$slots, "option", {
                  option: m,
                  selected: i.isSelected(m),
                  index: i.getOptionIndex(y, f)
                }, function() {
                  return [E("span", d({
                    class: t.cx("optionLabel"),
                    ref_for: !0
                  }, t.ptm("optionLabel")), D(i.getOptionLabel(m)), 17)];
                })], 16, Mt)), [[L]])], 64);
              }), 128)), o.filterValue && (!T || T && T.length === 0) ? (p(), v("li", d({
                key: 0,
                class: t.cx("emptyMessage"),
                role: "option"
              }, t.ptm("emptyMessage"), {
                "data-p-hidden-accessible": !0
              }), [O(t.$slots, "emptyfilter", {}, function() {
                return [ie(D(i.emptyFilterMessageText), 1)];
              })], 16)) : !t.options || t.options && t.options.length === 0 ? (p(), v("li", d({
                key: 1,
                class: t.cx("emptyMessage"),
                role: "option"
              }, t.ptm("emptyMessage"), {
                "data-p-hidden-accessible": !0
              }), [O(t.$slots, "empty", {}, function() {
                return [ie(D(i.emptyMessageText), 1)];
              })], 16)) : P("", !0)], 16, Et)];
            }),
            _: 2
          }, [t.$slots.loader ? {
            name: "loader",
            fn: K(function(I) {
              var C = I.options;
              return [O(t.$slots, "loader", {
                options: C
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["items", "style", "disabled", "pt"])], 16), O(t.$slots, "footer", {
            value: t.modelValue,
            options: i.visibleOptions
          }), !t.options || t.options && t.options.length === 0 ? (p(), v("span", d({
            key: 1,
            role: "status",
            "aria-live": "polite",
            class: "p-hidden-accessible"
          }, t.ptm("hiddenEmptyMessage"), {
            "data-p-hidden-accessible": !0
          }), D(i.emptyMessageText), 17)) : P("", !0), E("span", d({
            role: "status",
            "aria-live": "polite",
            class: "p-hidden-accessible"
          }, t.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": !0
          }), D(i.selectedMessageText), 17), E("span", d({
            ref: "lastHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            class: "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: e[8] || (e[8] = function() {
              return i.onLastHiddenFocus && i.onLastHiddenFocus.apply(i, arguments);
            })
          }, t.ptm("hiddenLastFocusableEl"), {
            "data-p-hidden-accessible": !0,
            "data-p-hidden-focusable": !0
          }), null, 16)], 16)) : P("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16, Vt);
}
ke.render = Bt;
const Yt = /* @__PURE__ */ Ae({
  __name: "FieldComboBox",
  props: /* @__PURE__ */ ae({
    options: { default: () => [] },
    optionLabel: { type: [String, Function], default: "name" },
    optionValue: { type: [String, Function], default: "id" },
    disabled: { type: Boolean },
    showClear: { type: Boolean },
    valueOnly: { type: Boolean, default: !0 },
    modelValue: { default: void 0 },
    label: {},
    labelPosition: {},
    labelCls: {}
  }, {
    selected: {},
    selectedModifiers: {}
  }),
  emits: /* @__PURE__ */ ae(["update:modelValue"], ["update:selected"]),
  setup(t, { emit: e }) {
    const n = t, s = e, o = Me({
      get() {
        const { modelValue: r } = n;
        return lt(r) ? r[n.optionValue] : r;
      },
      set(r) {
        s("update:modelValue", n.valueOnly ? r : l(r));
      }
    }), i = Be(t, "selected");
    function l(r = n.modelValue) {
      const { optionValue: u } = n;
      return n.options.find((a) => a[u] === r);
    }
    return xe(() => n.modelValue, () => i.value = l(), {
      immediate: !0
    }), (r, u) => (p(), G(rt, d(r.$props, { class: "flex-start" }), {
      default: K(() => [
        j(Pe(ke), d(r.$props, {
          modelValue: o.value,
          "onUpdate:modelValue": u[0] || (u[0] = (a) => o.value = a),
          class: "flex-1 overflow-hidden"
        }), {
          header: K(() => [
            O(r.$slots, "header")
          ]),
          footer: K(() => [
            O(r.$slots, "footer")
          ]),
          _: 3
        }, 16, ["modelValue"])
      ]),
      _: 3
    }, 16));
  }
});
export {
  ut as F,
  Yt as _,
  Jt as a,
  Xt as b,
  Le as c,
  ke as s
};
