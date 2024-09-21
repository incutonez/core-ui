import { ref as xt, readonly as qe, getCurrentInstance as Je, onMounted as Qe, nextTick as tn, watch as en, mergeProps as x, openBlock as _, createElementBlock as O, createElementVNode as at, renderSlot as F, createTextVNode as nn, toDisplayString as Ut, resolveComponent as Q, resolveDirective as ye, withDirectives as Ie, createBlock as T, resolveDynamicComponent as rt, withCtx as st, normalizeClass as X, createCommentVNode as D, defineComponent as Se, unref as xe, Teleport as on, Transition as ke, Fragment as Et, renderList as rn, createVNode as Yt, computed as an } from "vue";
function U(n) {
  return n == null || n === "" || Array.isArray(n) && n.length === 0 || !(n instanceof Date) && typeof n == "object" && Object.keys(n).length === 0;
}
function Wt(n) {
  return !!(n && n.constructor && n.call && n.apply);
}
function $(n) {
  return !U(n);
}
function Xt(n, t) {
  let e = -1;
  if ($(n))
    try {
      e = n.findLastIndex(t);
    } catch {
      e = n.lastIndexOf([...n].reverse().find(t));
    }
  return e;
}
function W(n, t = !0) {
  return n instanceof Object && n.constructor === Object && (t || Object.keys(n).length !== 0);
}
function A(n, ...t) {
  return Wt(n) ? n(...t) : n;
}
function L(n, t = !0) {
  return typeof n == "string" && (t || n !== "");
}
function E(n) {
  return L(n) ? n.replace(/(-|_)/g, "").toLowerCase() : n;
}
function Ht(n, t = "", e = {}) {
  const o = E(t).split("."), r = o.shift();
  return r ? W(n) ? Ht(A(n[Object.keys(n).find((i) => E(i) === r) || ""], e), o.join("."), e) : void 0 : A(n, e);
}
function Gt(n, t = !0) {
  return Array.isArray(n) && (t || n.length !== 0);
}
function _e(n) {
  return $(n) && !isNaN(n);
}
function sn(n = "") {
  return $(n) && n.length === 1 && !!n.match(/\S| /);
}
function K(n, t) {
  if (t) {
    const e = t.test(n);
    return t.lastIndex = 0, e;
  }
  return !1;
}
function it(n) {
  return n && n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function un(n) {
  return L(n, !1) ? n[0].toUpperCase() + n.slice(1) : n;
}
function we(n) {
  return L(n) ? n.replace(/(_)/g, "-").replace(/[A-Z]/g, (t, e) => e === 0 ? t : "-" + t.toLowerCase()).toLowerCase() : n;
}
function qt(n) {
  return L(n) ? n.replace(/[A-Z]/g, (t, e) => e === 0 ? t : "." + t.toLowerCase()).toLowerCase() : n;
}
function $e() {
  const n = /* @__PURE__ */ new Map();
  return {
    on(t, e) {
      let o = n.get(t);
      return o ? o.push(e) : o = [e], n.set(t, o), this;
    },
    off(t, e) {
      let o = n.get(t);
      return o && o.splice(o.indexOf(e) >>> 0, 1), this;
    },
    emit(t, e) {
      let o = n.get(t);
      o && o.slice().map((r) => {
        r(e);
      });
    },
    clear() {
      n.clear();
    }
  };
}
var cn = Object.defineProperty, ln = Object.defineProperties, dn = Object.getOwnPropertyDescriptors, wt = Object.getOwnPropertySymbols, Pe = Object.prototype.hasOwnProperty, Ce = Object.prototype.propertyIsEnumerable, Jt = (n, t, e) => t in n ? cn(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, et = (n, t) => {
  for (var e in t || (t = {}))
    Pe.call(t, e) && Jt(n, e, t[e]);
  if (wt)
    for (var e of wt(t))
      Ce.call(t, e) && Jt(n, e, t[e]);
  return n;
}, Vt = (n, t) => ln(n, dn(t)), nt = (n, t) => {
  var e = {};
  for (var o in n)
    Pe.call(n, o) && t.indexOf(o) < 0 && (e[o] = n[o]);
  if (n != null && wt)
    for (var o of wt(n))
      t.indexOf(o) < 0 && Ce.call(n, o) && (e[o] = n[o]);
  return e;
}, mn = $e(), M = mn;
function Qt(n, t) {
  Gt(n) ? n.push(...t || []) : W(n) && Object.assign(n, t);
}
function fn(n) {
  return W(n) && n.hasOwnProperty("value") && n.hasOwnProperty("type") ? n.value : n;
}
function te(n, t = "") {
  return ["opacity", "z-index", "line-height", "font-weight", "flex", "flex-grow", "flex-shrink", "order"].some((o) => t.endsWith(o)) ? n : `${n}`.trim().split(" ").map((i) => _e(i) ? `${i}px` : i).join(" ");
}
function pn(n) {
  return n.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Bt(n = "", t = "") {
  return pn(`${L(n, !1) && L(t, !1) ? `${n}-` : n}${t}`);
}
function Oe(n = "", t = "") {
  return `--${Bt(n, t)}`;
}
function Te(n, t = "", e = "", o = [], r) {
  if (L(n)) {
    const i = /{([^}]*)}/g, s = n.trim();
    if (K(s, i)) {
      const a = s.replaceAll(i, (l) => {
        const m = l.replace(/{|}/g, "").split(".").filter((b) => !o.some((p) => K(b, p)));
        return `var(${Oe(e, we(m.join("-")))}${$(r) ? `, ${r}` : ""})`;
      }), c = /(\d+\s+[\+\-\*\/]\s+\d+)/g, u = /var\([^)]+\)/g;
      return K(a.replace(u, "0"), c) ? `calc(${a})` : a;
    }
    return te(s, t);
  } else if (_e(n))
    return te(n, t);
}
function bn(n, t, e) {
  L(t, !1) && n.push(`${t}:${e};`);
}
function ot(n, t) {
  return n ? `${n}{${t}}` : "";
}
var Nt = (...n) => hn(w.getTheme(), ...n), hn = (n = {}, t, e, o = "variable") => {
  if (t) {
    const { variable: r, options: i } = w.defaults || {}, { prefix: s, transform: a } = (n == null ? void 0 : n.options) || i || {}, u = K(t, /{([^}]*)}/g) ? t : `{${t}}`;
    return o === "value" || a === "strict" ? w.getTokenValue(t) : Te(u, void 0, s, [r.excludedKeyRegex], e);
  }
  return "";
};
function gn(n, t = {}) {
  const e = w.defaults.variable, { prefix: o = e.prefix, selector: r = e.selector, excludedKeyRegex: i = e.excludedKeyRegex } = t, s = (u, l = "") => Object.entries(u).reduce(
    (d, [m, b]) => {
      const p = K(m, i) ? Bt(l) : Bt(l, we(m)), h = fn(b);
      if (W(h)) {
        const { variables: I, tokens: k } = s(h, p);
        Qt(d.tokens, k), Qt(d.variables, I);
      } else
        d.tokens.push((o ? p.replace(`${o}-`, "") : p).replaceAll("-", ".")), bn(d.variables, Oe(p), Te(h, p, o, [i]));
      return d;
    },
    { variables: [], tokens: [] }
  ), { variables: a, tokens: c } = s(n, o);
  return {
    value: a,
    tokens: c,
    declarations: a.join(""),
    css: ot(r, a.join(""))
  };
}
var j = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(n) {
          return { type: "class", selector: n, matched: this.pattern.test(n.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(n) {
          return { type: "attr", selector: `:root${n}`, matched: this.pattern.test(n.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(n) {
          return { type: "media", selector: `${n}{:root{[CSS]}}`, matched: this.pattern.test(n.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(n) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(n.trim()) };
        }
      },
      custom: {
        resolve(n) {
          return { type: "custom", selector: n, matched: !0 };
        }
      }
    },
    resolve(n) {
      const t = Object.keys(this.rules).filter((e) => e !== "custom").map((e) => this.rules[e]);
      return [n].flat().map((e) => {
        var o;
        return (o = t.map((r) => r.resolve(e)).find((r) => r.matched)) != null ? o : this.rules.custom.resolve(e);
      });
    }
  },
  _toVariables(n, t) {
    return gn(n, { prefix: t == null ? void 0 : t.prefix });
  },
  getCommon({ name: n = "", theme: t = {}, params: e, set: o, defaults: r }) {
    var i, s, a, c;
    const { preset: u, options: l } = t;
    let d, m, b, p;
    if ($(u)) {
      const { primitive: h, semantic: I } = u, k = I || {}, { colorScheme: f } = k, v = nt(k, ["colorScheme"]), P = f || {}, { dark: V } = P, H = nt(P, ["dark"]), z = $(h) ? this._toVariables({ primitive: h }, l) : {}, G = $(v) ? this._toVariables({ semantic: v }, l) : {}, B = $(H) ? this._toVariables({ light: H }, l) : {}, Z = $(V) ? this._toVariables({ dark: V }, l) : {}, [Y, q] = [(i = z.declarations) != null ? i : "", z.tokens], [Ot, ht] = [(s = G.declarations) != null ? s : "", G.tokens || []], [gt, Tt] = [(a = B.declarations) != null ? a : "", B.tokens || []], [vt, Lt] = [(c = Z.declarations) != null ? c : "", Z.tokens || []];
      d = this.transformCSS(n, Y, "light", "variable", l, o, r), m = q;
      const At = this.transformCSS(n, `${Ot}${gt}color-scheme:light`, "light", "variable", l, o, r), J = this.transformCSS(n, `${vt}color-scheme:dark`, "dark", "variable", l, o, r);
      b = `${At}${J}`, p = [.../* @__PURE__ */ new Set([...ht, ...Tt, ...Lt])];
    }
    return {
      primitive: {
        css: d,
        tokens: m
      },
      semantic: {
        css: b,
        tokens: p
      }
    };
  },
  getPreset({ name: n = "", preset: t = {}, options: e, params: o, set: r, defaults: i, selector: s }) {
    var a, c, u;
    const l = n.replace("-directive", ""), d = t, { colorScheme: m } = d, b = nt(d, ["colorScheme"]), p = m || {}, { dark: h } = p, I = nt(p, ["dark"]), k = $(b) ? this._toVariables({ [l]: b }, e) : {}, f = $(I) ? this._toVariables({ [l]: I }, e) : {}, v = $(h) ? this._toVariables({ [l]: h }, e) : {}, [P, V] = [(a = k.declarations) != null ? a : "", k.tokens || []], [H, z] = [(c = f.declarations) != null ? c : "", f.tokens || []], [G, B] = [(u = v.declarations) != null ? u : "", v.tokens || []], Z = [.../* @__PURE__ */ new Set([...V, ...z, ...B])], Y = this.transformCSS(l, `${P}${H}`, "light", "variable", e, r, i, s), q = this.transformCSS(l, G, "dark", "variable", e, r, i, s);
    return {
      css: `${Y}${q}`,
      tokens: Z
    };
  },
  getPresetC({ name: n = "", theme: t = {}, params: e, set: o, defaults: r }) {
    var i;
    const { preset: s, options: a } = t, c = (i = s == null ? void 0 : s.components) == null ? void 0 : i[n];
    return this.getPreset({ name: n, preset: c, options: a, params: e, set: o, defaults: r });
  },
  getPresetD({ name: n = "", theme: t = {}, params: e, set: o, defaults: r }) {
    var i;
    const s = n.replace("-directive", ""), { preset: a, options: c } = t, u = (i = a == null ? void 0 : a.directives) == null ? void 0 : i[s];
    return this.getPreset({ name: s, preset: u, options: c, params: e, set: o, defaults: r });
  },
  getColorSchemeOption(n, t) {
    var e;
    return this.regex.resolve((e = n.darkModeSelector) != null ? e : t.options.darkModeSelector);
  },
  getLayerOrder(n, t = {}, e, o) {
    const { cssLayer: r } = t;
    return r ? `@layer ${A(r.order || "primeui", e)}` : "";
  },
  getCommonStyleSheet({ name: n = "", theme: t = {}, params: e, props: o = {}, set: r, defaults: i }) {
    const s = this.getCommon({ name: n, theme: t, params: e, set: r, defaults: i }), a = Object.entries(o).reduce((c, [u, l]) => c.push(`${u}="${l}"`) && c, []).join(" ");
    return Object.entries(s || {}).reduce((c, [u, l]) => {
      if (l != null && l.css) {
        const d = it(l == null ? void 0 : l.css), m = `${u}-variables`;
        c.push(`<style type="text/css" data-primevue-style-id="${m}" ${a}>${d}</style>`);
      }
      return c;
    }, []).join("");
  },
  getStyleSheet({ name: n = "", theme: t = {}, params: e, props: o = {}, set: r, defaults: i }) {
    var s;
    const a = { name: n, theme: t, params: e, set: r, defaults: i }, c = (s = n.includes("-directive") ? this.getPresetD(a) : this.getPresetC(a)) == null ? void 0 : s.css, u = Object.entries(o).reduce((l, [d, m]) => l.push(`${d}="${m}"`) && l, []).join(" ");
    return c ? `<style type="text/css" data-primevue-style-id="${n}-variables" ${u}>${it(c)}</style>` : "";
  },
  createTokens(n = {}, t, e = "", o = "", r = {}) {
    return Object.entries(n).forEach(([i, s]) => {
      const a = K(i, t.variable.excludedKeyRegex) ? e : e ? `${e}.${qt(i)}` : qt(i), c = o ? `${o}.${i}` : i;
      W(s) ? this.createTokens(s, t, a, c, r) : (r[a] || (r[a] = {
        paths: [],
        computed(u, l = {}) {
          if (u) {
            const d = this.paths.find((m) => m.scheme === u) || this.paths.find((m) => m.scheme === "none");
            return d == null ? void 0 : d.computed(u, l.binding);
          }
          return this.paths.map((d) => d.computed(d.scheme, l[d.scheme]));
        }
      }), r[a].paths.push({
        path: c,
        value: s,
        scheme: c.includes("colorScheme.light") ? "light" : c.includes("colorScheme.dark") ? "dark" : "none",
        computed(u, l = {}) {
          const d = /{([^}]*)}/g;
          let m = s;
          if (l.name = this.path, l.binding || (l.binding = {}), K(s, d)) {
            const p = s.trim().replaceAll(d, (k) => {
              var f, v;
              const P = k.replace(/{|}/g, "");
              return (v = (f = r[P]) == null ? void 0 : f.computed(u, l)) == null ? void 0 : v.value;
            }), h = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, I = /var\([^)]+\)/g;
            m = K(p.replace(I, "0"), h) ? `calc(${p})` : p;
          }
          return U(l.binding) && delete l.binding, {
            colorScheme: u,
            path: this.path,
            paths: l,
            value: m.includes("undefined") ? void 0 : m
          };
        }
      }));
    }), r;
  },
  getTokenValue(n, t, e) {
    var o;
    const i = ((c) => c.split(".").filter((l) => !K(l.toLowerCase(), e.variable.excludedKeyRegex)).join("."))(t), s = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, a = [(o = n[i]) == null ? void 0 : o.computed(s)].flat().filter((c) => c);
    return a.length === 1 ? a[0].value : a.reduce((c = {}, u) => {
      const l = u, { colorScheme: d } = l, m = nt(l, ["colorScheme"]);
      return c[d] = m, c;
    }, void 0);
  },
  transformCSS(n, t, e, o, r = {}, i, s, a) {
    if ($(t)) {
      const { cssLayer: c } = r;
      if (o !== "style") {
        const u = this.getColorSchemeOption(r, s), l = a ? ot(a, t) : t;
        t = e === "dark" ? u.reduce((d, { selector: m }) => ($(m) && (d += m.includes("[CSS]") ? m.replace("[CSS]", l) : ot(m, l)), d), "") : ot(a ?? ":root", t);
      }
      if (c) {
        const u = {
          name: "primeui",
          order: "primeui"
        };
        W(c) && (u.name = A(c.name, { name: n, type: o })), $(u.name) && (t = ot(`@layer ${u.name}`, t), i == null || i.layerNames(u.name));
      }
      return t;
    }
    return "";
  }
}, w = {
  defaults: {
    variable: {
      prefix: "p",
      selector: ":root",
      excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi
    },
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: !1
    }
  },
  _theme: void 0,
  _layerNames: /* @__PURE__ */ new Set(),
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  _loadingStyles: /* @__PURE__ */ new Set(),
  _tokens: {},
  update(n = {}) {
    const { theme: t } = n;
    t && (this._theme = Vt(et({}, t), {
      options: et(et({}, this.defaults.options), t.options)
    }), this._tokens = j.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var n;
    return ((n = this.theme) == null ? void 0 : n.preset) || {};
  },
  get options() {
    var n;
    return ((n = this.theme) == null ? void 0 : n.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(n) {
    this.update({ theme: n }), M.emit("theme:change", n);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(n) {
    this._theme = Vt(et({}, this.theme), { preset: n }), this._tokens = j.createTokens(n, this.defaults), this.clearLoadedStyleNames(), M.emit("preset:change", n), M.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(n) {
    this._theme = Vt(et({}, this.theme), { options: n }), this.clearLoadedStyleNames(), M.emit("options:change", n), M.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(n) {
    this._layerNames.add(n);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(n) {
    return this._loadedStyleNames.has(n);
  },
  setLoadedStyleName(n) {
    this._loadedStyleNames.add(n);
  },
  deleteLoadedStyleName(n) {
    this._loadedStyleNames.delete(n);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(n) {
    return j.getTokenValue(this.tokens, n, this.defaults);
  },
  getCommon(n = "", t) {
    return j.getCommon({ name: n, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(n = "", t) {
    const e = { name: n, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return j.getPresetC(e);
  },
  getDirective(n = "", t) {
    const e = { name: n, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return j.getPresetD(e);
  },
  getCustomPreset(n = "", t, e, o) {
    const r = { name: n, preset: t, options: this.options, selector: e, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return j.getPreset(r);
  },
  getLayerOrderCSS(n = "") {
    return j.getLayerOrder(n, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(n = "", t, e = "style", o) {
    return j.transformCSS(n, t, o, e, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(n = "", t, e = {}) {
    return j.getCommonStyleSheet({ name: n, theme: this.theme, params: t, props: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(n, t, e = {}) {
    return j.getStyleSheet({ name: n, theme: this.theme, params: t, props: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(n) {
    this._loadingStyles.add(n);
  },
  onStyleUpdated(n) {
    this._loadingStyles.add(n);
  },
  onStyleLoaded(n, { name: t }) {
    this._loadingStyles.size && (this._loadingStyles.delete(t), M.emit(`theme:${t}:load`, n), !this._loadingStyles.size && M.emit("theme:load"));
  }
};
function vn(n, t) {
  return n ? n.classList ? n.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(n.className) : !1;
}
function yn(n, t) {
  if (n && t) {
    const e = (o) => {
      vn(n, o) || (n.classList ? n.classList.add(o) : n.className += " " + o);
    };
    [t].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(e));
  }
}
function Dt(n, t) {
  if (n && t) {
    const e = (o) => {
      n.classList ? n.classList.remove(o) : n.className = n.className.replace(new RegExp("(^|\\b)" + o.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [t].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(e));
  }
}
function Le() {
  let n = window, t = document, e = t.documentElement, o = t.getElementsByTagName("body")[0], r = n.innerWidth || e.clientWidth || o.clientWidth, i = n.innerHeight || e.clientHeight || o.clientHeight;
  return { width: r, height: i };
}
function Ae(n, t) {
  n && (typeof t == "string" ? n.style.cssText = t : Object.entries(t || {}).forEach(([e, o]) => n.style[e] = o));
}
function je(n, t) {
  return n instanceof HTMLElement ? n.offsetWidth : 0;
}
function Ct(n) {
  return typeof HTMLElement == "object" ? n instanceof HTMLElement : n && typeof n == "object" && n !== null && n.nodeType === 1 && typeof n.nodeName == "string";
}
var Mt = void 0;
function ee(n) {
  {
    if (Mt != null) return Mt;
    let t = document.createElement("div");
    Ae(t, {
      width: "100px",
      height: "100px",
      overflow: "scroll",
      position: "absolute",
      top: "-9999px"
    }), document.body.appendChild(t);
    let e = t.offsetWidth - t.clientWidth;
    return document.body.removeChild(t), Mt = e, e;
  }
}
function $t(n, t = {}) {
  if (Ct(n)) {
    const e = (o, r) => {
      var i, s;
      const a = (i = n == null ? void 0 : n.$attrs) != null && i[o] ? [(s = n == null ? void 0 : n.$attrs) == null ? void 0 : s[o]] : [];
      return [r].flat().reduce((c, u) => {
        if (u != null) {
          const l = typeof u;
          if (l === "string" || l === "number")
            c.push(u);
          else if (l === "object") {
            const d = Array.isArray(u) ? e(o, u) : Object.entries(u).map(([m, b]) => o === "style" && (b || b === 0) ? `${m.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${b}` : b ? m : void 0);
            c = d.length ? c.concat(d.filter((m) => !!m)) : c;
          }
        }
        return c;
      }, a);
    };
    Object.entries(t).forEach(([o, r]) => {
      if (r != null) {
        const i = o.match(/^on(.+)/);
        i ? n.addEventListener(i[1].toLowerCase(), r) : o === "p-bind" ? $t(n, r) : (r = o === "class" ? [...new Set(e("class", r))].join(" ").trim() : o === "style" ? e("style", r).join(";").trim() : r, (n.$attrs = n.$attrs || {}) && (n.$attrs[o] = r), n.setAttribute(o, r));
      }
    });
  }
}
function In(n, t = {}, ...e) {
  {
    const o = document.createElement(n);
    return $t(o, t), o.append(...e), o;
  }
}
function kt(n, t) {
  return Ct(n) ? n.matches(t) ? n : n.querySelector(t) : null;
}
function yt(n, t) {
  n && document.activeElement !== n && n.focus(t);
}
function Sn(n, t) {
  if (Ct(n)) {
    const e = n.getAttribute(t);
    return isNaN(e) ? e === "true" || e === "false" ? e === "true" : e : +e;
  }
}
function ne(n) {
  if (n) {
    let t = n.offsetHeight, e = getComputedStyle(n);
    return t -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom) + parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), t;
  }
  return 0;
}
function xn(n) {
  if (n) {
    n.style.visibility = "hidden", n.style.display = "block";
    let t = n.offsetHeight;
    return n.style.display = "none", n.style.visibility = "visible", t;
  }
  return 0;
}
function Ee(n) {
  if (n) {
    n.style.visibility = "hidden", n.style.display = "block";
    let t = n.offsetWidth;
    return n.style.display = "none", n.style.visibility = "visible", t;
  }
  return 0;
}
function kn(n) {
  if (n) {
    let t = n.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
  }
  return null;
}
function Ve(n) {
  if (n) {
    let t = n.getBoundingClientRect();
    return {
      top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: t.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function _n(n, t) {
  return n ? n.offsetHeight : 0;
}
function wn(n) {
  return !!(n !== null && typeof n < "u" && n.nodeName && kn(n));
}
function oe(n) {
  if (n) {
    let t = n.offsetWidth, e = getComputedStyle(n);
    return t -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight) + parseFloat(e.borderLeftWidth) + parseFloat(e.borderRightWidth), t;
  }
  return 0;
}
function Ne() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function $n() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function Pn(n, t) {
  var e;
  if (n) {
    const o = n.parentElement, r = Ve(o), i = Le(), s = n.offsetParent ? n.offsetWidth : Ee(n), a = je((e = o == null ? void 0 : o.children) == null ? void 0 : e[0]);
    let c = "";
    r.left + a + s > i.width - ee() ? r.left < s ? t % 2 === 1 ? c = r.left ? "-" + r.left + "px" : "100%" : t % 2 === 0 && (c = i.width - s - ee() + "px") : c = "-100%" : c = "100%", n.style.top = "0px", n.style.left = c;
  }
}
function Cn(n, t = "", e) {
  Ct(n) && e !== null && e !== void 0 && n.setAttribute(t, e);
}
var R = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(t) {
    return this._loadedStyleNames.has(t);
  },
  setLoadedStyleName: function(t) {
    this._loadedStyleNames.add(t);
  },
  deleteLoadedStyleName: function(t) {
    this._loadedStyleNames.delete(t);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
};
function ut(n) {
  "@babel/helpers - typeof";
  return ut = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ut(n);
}
function re(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function ie(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? re(Object(e), !0).forEach(function(o) {
      On(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : re(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
function On(n, t, e) {
  return (t = Tn(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function Tn(n) {
  var t = Ln(n, "string");
  return ut(t) == "symbol" ? t : t + "";
}
function Ln(n, t) {
  if (ut(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (ut(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function An(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  Je() ? Qe(n) : t ? n() : tn(n);
}
var jn = 0;
function En(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = xt(!1), o = xt(n), r = xt(null), i = Ne() ? window.document : void 0, s = t.document, a = s === void 0 ? i : s, c = t.immediate, u = c === void 0 ? !0 : c, l = t.manual, d = l === void 0 ? !1 : l, m = t.name, b = m === void 0 ? "style_".concat(++jn) : m, p = t.id, h = p === void 0 ? void 0 : p, I = t.media, k = I === void 0 ? void 0 : I, f = t.nonce, v = f === void 0 ? void 0 : f, P = t.first, V = P === void 0 ? !1 : P, H = t.onMounted, z = H === void 0 ? void 0 : H, G = t.onUpdated, B = G === void 0 ? void 0 : G, Z = t.onLoad, Y = Z === void 0 ? void 0 : Z, q = t.props, Ot = q === void 0 ? {} : q, ht = function() {
  }, gt = function(Lt) {
    var At = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (a) {
      var J = ie(ie({}, Ot), At), tt = J.name || b, Zt = J.id || h, Xe = J.nonce || v;
      r.value = a.querySelector('style[data-primevue-style-id="'.concat(tt, '"]')) || a.getElementById(Zt) || a.createElement("style"), r.value.isConnected || (o.value = Lt || n, $t(r.value, {
        type: "text/css",
        id: Zt,
        media: k,
        nonce: Xe
      }), V ? a.head.prepend(r.value) : a.head.appendChild(r.value), Cn(r.value, "data-primevue-style-id", tt), $t(r.value, J), r.value.onload = function(jt) {
        return Y == null ? void 0 : Y(jt, {
          name: tt
        });
      }, z == null || z(tt)), !e.value && (ht = en(o, function(jt) {
        r.value.textContent = jt, B == null || B(tt);
      }, {
        immediate: !0
      }), e.value = !0);
    }
  }, Tt = function() {
    !a || !e.value || (ht(), wn(r.value) && a.head.removeChild(r.value), e.value = !1);
  };
  return u && !d && An(gt), {
    id: h,
    name: b,
    el: r,
    css: o,
    unload: Tt,
    load: gt,
    isLoaded: qe(e)
  };
}
function ct(n) {
  "@babel/helpers - typeof";
  return ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ct(n);
}
function ae(n, t) {
  return Mn(n) || Dn(n, t) || Nn(n, t) || Vn();
}
function Vn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nn(n, t) {
  if (n) {
    if (typeof n == "string") return se(n, t);
    var e = {}.toString.call(n).slice(8, -1);
    return e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set" ? Array.from(n) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? se(n, t) : void 0;
  }
}
function se(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function Dn(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, i, s, a = [], c = !0, u = !1;
    try {
      if (i = (e = e.call(n)).next, t !== 0) for (; !(c = (o = i.call(e)).done) && (a.push(o.value), a.length !== t); c = !0) ;
    } catch (l) {
      u = !0, r = l;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw r;
      }
    }
    return a;
  }
}
function Mn(n) {
  if (Array.isArray(n)) return n;
}
function ue(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function Kt(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ue(Object(e), !0).forEach(function(o) {
      Kn(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : ue(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
function Kn(n, t, e) {
  return (t = zn(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function zn(n) {
  var t = Bn(n, "string");
  return ct(t) == "symbol" ? t : t + "";
}
function Bn(n, t) {
  if (ct(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (ct(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var Rn = function(t) {
  var e = t.dt;
  return `
* {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(e("disabled.opacity"), `;
}

.pi {
    font-size: `).concat(e("icon.size"), `;
}

.p-icon {
    width: `).concat(e("icon.size"), `;
    height: `).concat(e("icon.size"), `;
}

.p-overlay-mask {
    background: `).concat(e("mask.background"), `;
    color: `).concat(e("mask.color"), `;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(e("mask.transition.duration"), ` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(e("mask.transition.duration"), ` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(e("mask.background"), `;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(e("mask.background"), `;
    }
    to {
        background: transparent;
    }
}
`);
}, Fn = function(t) {
  var e = t.dt;
  return `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(e("scrollbar.width"), `;
}
`);
}, Un = {}, Wn = {}, C = {
  name: "base",
  css: Fn,
  theme: Rn,
  classes: Un,
  inlineStyles: Wn,
  load: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, r = o(A(t, {
      dt: Nt
    }));
    return r ? En(it(r), Kt({
      name: this.name
    }, e)) : {};
  },
  loadCSS: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, t);
  },
  loadTheme: function() {
    var t = this, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.theme, e, function(o) {
      return w.transformCSS(e.name || t.name, o);
    });
  },
  getCommonTheme: function(t) {
    return w.getCommon(this.name, t);
  },
  getComponentTheme: function(t) {
    return w.getComponent(this.name, t);
  },
  getDirectiveTheme: function(t) {
    return w.getDirective(this.name, t);
  },
  getPresetTheme: function(t, e, o) {
    return w.getCustomPreset(this.name, t, e, o);
  },
  getLayerOrderThemeCSS: function() {
    return w.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var o = A(this.css, {
        dt: Nt
      }), r = it("".concat(o).concat(t)), i = Object.entries(e).reduce(function(s, a) {
        var c = ae(a, 2), u = c[0], l = c[1];
        return s.push("".concat(u, '="').concat(l, '"')) && s;
      }, []).join(" ");
      return '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(i, ">").concat(r, "</style>");
    }
    return "";
  },
  getCommonThemeStyleSheet: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return w.getCommonStyleSheet(this.name, t, e);
  },
  getThemeStyleSheet: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = [w.getStyleSheet(this.name, t, e)];
    if (this.theme) {
      var r = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = A(this.theme, {
        dt: Nt
      }), s = it(w.transformCSS(r, i)), a = Object.entries(e).reduce(function(c, u) {
        var l = ae(u, 2), d = l[0], m = l[1];
        return c.push("".concat(d, '="').concat(m, '"')) && c;
      }, []).join(" ");
      o.push('<style type="text/css" data-primevue-style-id="'.concat(r, '" ').concat(a, ">").concat(s, "</style>"));
    }
    return o.join("");
  },
  extend: function(t) {
    return Kt(Kt({}, this), {}, {
      css: void 0,
      theme: void 0
    }, t);
  }
}, It = {};
function Hn(n = "pui_id_") {
  return It.hasOwnProperty(n) || (It[n] = 0), It[n]++, `${n}${It[n]}`;
}
function Gn() {
  let n = [];
  const t = (s, a, c = 999) => {
    const u = r(s, a, c), l = u.value + (u.key === s ? 0 : c) + 1;
    return n.push({ key: s, value: l }), l;
  }, e = (s) => {
    n = n.filter((a) => a.value !== s);
  }, o = (s, a) => r(s).value, r = (s, a, c = 0) => [...n].reverse().find((u) => !0) || { key: s, value: c }, i = (s) => s && parseInt(s.style.zIndex, 10) || 0;
  return {
    get: i,
    set: (s, a, c) => {
      a && (a.style.zIndex = String(t(s, !0, c)));
    },
    clear: (s) => {
      s && (e(i(s)), s.style.zIndex = "");
    },
    getCurrent: (s) => o(s)
  };
}
var zt = Gn();
function Pt() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pv_id_";
  return Hn(n);
}
var ce = C.extend({
  name: "common"
});
function lt(n) {
  "@babel/helpers - typeof";
  return lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lt(n);
}
function Zn(n) {
  return Ke(n) || Yn(n) || Me(n) || De();
}
function Yn(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function St(n, t) {
  return Ke(n) || Xn(n, t) || Me(n, t) || De();
}
function De() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Me(n, t) {
  if (n) {
    if (typeof n == "string") return le(n, t);
    var e = {}.toString.call(n).slice(8, -1);
    return e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set" ? Array.from(n) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? le(n, t) : void 0;
  }
}
function le(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function Xn(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, i, s, a = [], c = !0, u = !1;
    try {
      if (i = (e = e.call(n)).next, t === 0) {
        if (Object(e) !== e) return;
        c = !1;
      } else for (; !(c = (o = i.call(e)).done) && (a.push(o.value), a.length !== t); c = !0) ;
    } catch (l) {
      u = !0, r = l;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw r;
      }
    }
    return a;
  }
}
function Ke(n) {
  if (Array.isArray(n)) return n;
}
function de(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function y(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? de(Object(e), !0).forEach(function(o) {
      _t(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : de(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
function _t(n, t, e) {
  return (t = qn(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function qn(n) {
  var t = Jn(n, "string");
  return lt(t) == "symbol" ? t : t + "";
}
function Jn(n, t) {
  if (lt(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (lt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var bt = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    },
    ptOptions: {
      type: Object,
      default: void 0
    },
    unstyled: {
      type: Boolean,
      default: void 0
    },
    dt: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: !0,
      handler: function(t) {
        t || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(t) {
        var e = this;
        t ? (this._loadScopedThemeStyles(t), this._themeChangeListener(function() {
          return e._loadScopedThemeStyles(t);
        })) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  beforeCreate: function() {
    var t, e, o, r, i, s, a, c, u, l, d, m = (t = this.pt) === null || t === void 0 ? void 0 : t._usept, b = m ? (e = this.pt) === null || e === void 0 || (e = e.originalValue) === null || e === void 0 ? void 0 : e[this.$.type.name] : void 0, p = m ? (o = this.pt) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o[this.$.type.name] : this.pt;
    (r = p || b) === null || r === void 0 || (r = r.hooks) === null || r === void 0 || (i = r.onBeforeCreate) === null || i === void 0 || i.call(r);
    var h = (s = this.$primevueConfig) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s._usept, I = h ? (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a.originalValue : void 0, k = h ? (c = this.$primevue) === null || c === void 0 || (c = c.config) === null || c === void 0 || (c = c.pt) === null || c === void 0 ? void 0 : c.value : (u = this.$primevue) === null || u === void 0 || (u = u.config) === null || u === void 0 ? void 0 : u.pt;
    (l = k || I) === null || l === void 0 || (l = l[this.$.type.name]) === null || l === void 0 || (l = l.hooks) === null || l === void 0 || (d = l.onBeforeCreate) === null || d === void 0 || d.call(l);
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this.rootEl = kt(this.$el, '[data-pc-name="'.concat(E(this.$.type.name), '"]')), this.rootEl && (this.rootEl.setAttribute(this.$attrSelector, ""), this.rootEl.$pc = y({
      name: this.$.type.name
    }, this.$params)), this._hook("onMounted");
  },
  beforeUpdate: function() {
    this._hook("onBeforeUpdate");
  },
  updated: function() {
    this._hook("onUpdated");
  },
  beforeUnmount: function() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function() {
    this._unloadScopedThemeStyles(), this._hook("onUnmounted");
  },
  methods: {
    _hook: function(t) {
      if (!this.$options.hostName) {
        var e = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(t)), o = this._useDefaultPT(this._getOptionValue, "hooks.".concat(t));
        e == null || e(), o == null || o();
      }
    },
    _mergeProps: function(t) {
      for (var e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
        o[r - 1] = arguments[r];
      return Wt(t) ? t.apply(void 0, o) : x.apply(void 0, o);
    },
    _loadStyles: function() {
      var t = this, e = function() {
        R.isStyleNameLoaded("base") || (C.loadCSS(t.$styleOptions), t._loadGlobalStyles(), R.setLoadedStyleName("base")), t._loadThemeStyles();
      };
      e(), this._themeChangeListener(e);
    },
    _loadCoreStyles: function() {
      var t, e;
      !R.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (e = this.$style) !== null && e !== void 0 && e.name && (ce.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), R.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var t = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      $(t) && C.load(t, y({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var t, e;
      if (!this.isUnstyled) {
        if (!w.isStyleNameLoaded("common")) {
          var o, r, i = ((o = this.$style) === null || o === void 0 || (r = o.getCommonTheme) === null || r === void 0 ? void 0 : r.call(o)) || {}, s = i.primitive, a = i.semantic;
          C.load(s == null ? void 0 : s.css, y({
            name: "primitive-variables"
          }, this.$styleOptions)), C.load(a == null ? void 0 : a.css, y({
            name: "semantic-variables"
          }, this.$styleOptions)), C.loadTheme(y({
            name: "global-style"
          }, this.$styleOptions)), w.setLoadedStyleName("common");
        }
        if (!w.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (e = this.$style) !== null && e !== void 0 && e.name) {
          var c, u, l, d, m = ((c = this.$style) === null || c === void 0 || (u = c.getComponentTheme) === null || u === void 0 ? void 0 : u.call(c)) || {}, b = m.css;
          (l = this.$style) === null || l === void 0 || l.load(b, y({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (d = this.$style) === null || d === void 0 || d.loadTheme(y({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions)), w.setLoadedStyleName(this.$style.name);
        }
        if (!w.isStyleNameLoaded("layer-order")) {
          var p, h, I = (p = this.$style) === null || p === void 0 || (h = p.getLayerOrderThemeCSS) === null || h === void 0 ? void 0 : h.call(p);
          C.load(I, y({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), w.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(t) {
      var e, o, r, i = ((e = this.$style) === null || e === void 0 || (o = e.getPresetTheme) === null || o === void 0 ? void 0 : o.call(e, t, "[".concat(this.$attrSelector, "]"))) || {}, s = i.css, a = (r = this.$style) === null || r === void 0 ? void 0 : r.load(s, y({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = a.el;
    },
    _unloadScopedThemeStyles: function() {
      var t;
      (t = this.scopedStyleEl) === null || t === void 0 || (t = t.value) === null || t === void 0 || t.remove();
    },
    _themeChangeListener: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      R.clearLoadedStyleNames(), M.on("theme:change", t);
    },
    _getHostInstance: function(t) {
      return t ? this.$options.hostName ? t.$.type.name === this.$options.hostName ? t : this._getHostInstance(t.$parentInstance) : t.$parentInstance : void 0;
    },
    _getPropValue: function(t) {
      var e;
      return this[t] || ((e = this._getHostInstance(this)) === null || e === void 0 ? void 0 : e[t]);
    },
    _getOptionValue: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Ht(t, e, o);
    },
    _getPTValue: function() {
      var t, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, s = /./g.test(o) && !!r[o.split(".")[0]], a = this._getPropValue("ptOptions") || ((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, c = a.mergeSections, u = c === void 0 ? !0 : c, l = a.mergeProps, d = l === void 0 ? !1 : l, m = i ? s ? this._useGlobalPT(this._getPTClassValue, o, r) : this._useDefaultPT(this._getPTClassValue, o, r) : void 0, b = s ? void 0 : this._getPTSelf(e, this._getPTClassValue, o, y(y({}, r), {}, {
        global: m || {}
      })), p = this._getPTDatasets(o);
      return u || !u && b ? d ? this._mergeProps(d, m, b, p) : y(y(y({}, m), b), p) : y(y({}, b), p);
    },
    _getPTSelf: function() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
        o[r - 1] = arguments[r];
      return x(
        this._usePT.apply(this, [this._getPT(t, this.$name)].concat(o)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(o))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var t, e, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = "data-pc-", i = o === "root" && $((t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"]);
      return o !== "transition" && y(y({}, o === "root" && y(_t({}, "".concat(r, "name"), E(i ? (e = this.pt) === null || e === void 0 ? void 0 : e["data-pc-section"] : this.$.type.name)), i && _t({}, "".concat(r, "extend"), E(this.$.type.name)))), {}, _t({}, "".concat(r, "section"), E(o)));
    },
    _getPTClassValue: function() {
      var t = this._getOptionValue.apply(this, arguments);
      return L(t) || Gt(t) ? {
        class: t
      } : t;
    },
    _getPT: function(t) {
      var e = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, i = function(a) {
        var c, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, l = r ? r(a) : a, d = E(o), m = E(e.$name);
        return (c = u ? d !== m ? l == null ? void 0 : l[d] : void 0 : l == null ? void 0 : l[d]) !== null && c !== void 0 ? c : l;
      };
      return t != null && t.hasOwnProperty("_usept") ? {
        _usept: t._usept,
        originalValue: i(t.originalValue),
        value: i(t.value)
      } : i(t, !0);
    },
    _usePT: function(t, e, o, r) {
      var i = function(h) {
        return e(h, o, r);
      };
      if (t != null && t.hasOwnProperty("_usept")) {
        var s, a = t._usept || ((s = this.$primevueConfig) === null || s === void 0 ? void 0 : s.ptOptions) || {}, c = a.mergeSections, u = c === void 0 ? !0 : c, l = a.mergeProps, d = l === void 0 ? !1 : l, m = i(t.originalValue), b = i(t.value);
        return m === void 0 && b === void 0 ? void 0 : L(b) ? b : L(m) ? m : u || !u && b ? d ? this._mergeProps(d, m, b) : y(y({}, m), b) : b;
      }
      return i(t);
    },
    _useGlobalPT: function(t, e, o) {
      return this._usePT(this.globalPT, t, e, o);
    },
    _useDefaultPT: function(t, e, o) {
      return this._usePT(this.defaultPT, t, e, o);
    },
    ptm: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, t, y(y({}, this.$params), e));
    },
    ptmi: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return x(this.$_attrsWithoutPT, this.ptm(t, e));
    },
    ptmo: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(t, e, y({
        instance: this
      }, o), !1);
    },
    cx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, t, y(y({}, this.$params), e));
    },
    sx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e) {
        var r = this._getOptionValue(this.$style.inlineStyles, t, y(y({}, this.$params), o)), i = this._getOptionValue(ce.inlineStyles, t, y(y({}, this.$params), o));
        return [i, r];
      }
    }
  },
  computed: {
    globalPT: function() {
      var t, e = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(o) {
        return A(o, {
          instance: e
        });
      });
    },
    defaultPT: function() {
      var t, e = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(o) {
        return e._getOptionValue(o, e.$name, y({}, e.$params)) || A(o, y({}, e.$params));
      });
    },
    isUnstyled: function() {
      var t;
      return this.unstyled !== void 0 ? this.unstyled : (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.unstyled;
    },
    $theme: function() {
      var t;
      return (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.theme;
    },
    $style: function() {
      return y(y({
        classes: void 0,
        inlineStyles: void 0,
        load: function() {
        },
        loadCSS: function() {
        },
        loadTheme: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function() {
      var t;
      return {
        nonce: (t = this.$primevueConfig) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce
      };
    },
    $primevueConfig: function() {
      var t;
      return (t = this.$primevue) === null || t === void 0 ? void 0 : t.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var t = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: t,
          props: t == null ? void 0 : t.$props,
          state: t == null ? void 0 : t.$data,
          attrs: t == null ? void 0 : t.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var e = St(t, 1), o = e[0];
        return o == null ? void 0 : o.startsWith("pt:");
      }).reduce(function(t, e) {
        var o = St(e, 2), r = o[0], i = o[1], s = r.split(":"), a = Zn(s), c = a.slice(1);
        return c == null || c.reduce(function(u, l, d, m) {
          return !u[l] && (u[l] = d === m.length - 1 ? i : {}), u[l];
        }, t), t;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var e = St(t, 1), o = e[0];
        return !(o != null && o.startsWith("pt:"));
      }).reduce(function(t, e) {
        var o = St(e, 2), r = o[0], i = o[1];
        return t[r] = i, t;
      }, {});
    },
    $attrSelector: function() {
      return Pt("pc");
    }
  }
}, Qn = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, to = C.extend({
  name: "baseicon",
  css: Qn
});
function dt(n) {
  "@babel/helpers - typeof";
  return dt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dt(n);
}
function me(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function fe(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? me(Object(e), !0).forEach(function(o) {
      eo(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : me(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
function eo(n, t, e) {
  return (t = no(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function no(n) {
  var t = oo(n, "string");
  return dt(t) == "symbol" ? t : t + "";
}
function oo(n, t) {
  if (dt(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (dt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var ze = {
  name: "BaseIcon",
  extends: bt,
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  style: to,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var t = U(this.label);
      return fe(fe({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: t ? void 0 : "img",
        "aria-label": t ? void 0 : this.label,
        "aria-hidden": t
      });
    }
  }
}, Be = {
  name: "SpinnerIcon",
  extends: ze
};
function ro(n, t, e, o, r, i) {
  return _(), O("svg", x({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, n.pti()), t[0] || (t[0] = [at("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Be.render = ro;
var io = function(t) {
  var e = t.dt;
  return `
.p-badge {
    display: inline-flex;
    border-radius: `.concat(e("badge.border.radius"), `;
    align-items: center;
    justify-content: center;
    padding: `).concat(e("badge.padding"), `;
    background: `).concat(e("badge.primary.background"), `;
    color: `).concat(e("badge.primary.color"), `;
    font-size: `).concat(e("badge.font.size"), `;
    font-weight: `).concat(e("badge.font.weight"), `;
    min-width: `).concat(e("badge.min.width"), `;
    height: `).concat(e("badge.height"), `;
}

.p-badge-dot {
    width: `).concat(e("badge.dot.size"), `;
    min-width: `).concat(e("badge.dot.size"), `;
    height: `).concat(e("badge.dot.size"), `;
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(e("badge.secondary.background"), `;
    color: `).concat(e("badge.secondary.color"), `;
}

.p-badge-success {
    background: `).concat(e("badge.success.background"), `;
    color: `).concat(e("badge.success.color"), `;
}

.p-badge-info {
    background: `).concat(e("badge.info.background"), `;
    color: `).concat(e("badge.info.color"), `;
}

.p-badge-warn {
    background: `).concat(e("badge.warn.background"), `;
    color: `).concat(e("badge.warn.color"), `;
}

.p-badge-danger {
    background: `).concat(e("badge.danger.background"), `;
    color: `).concat(e("badge.danger.color"), `;
}

.p-badge-contrast {
    background: `).concat(e("badge.contrast.background"), `;
    color: `).concat(e("badge.contrast.color"), `;
}

.p-badge-sm {
    font-size: `).concat(e("badge.sm.font.size"), `;
    min-width: `).concat(e("badge.sm.min.width"), `;
    height: `).concat(e("badge.sm.height"), `;
}

.p-badge-lg {
    font-size: `).concat(e("badge.lg.font.size"), `;
    min-width: `).concat(e("badge.lg.min.width"), `;
    height: `).concat(e("badge.lg.height"), `;
}

.p-badge-xl {
    font-size: `).concat(e("badge.xl.font.size"), `;
    min-width: `).concat(e("badge.xl.min.width"), `;
    height: `).concat(e("badge.xl.height"), `;
}
`);
}, ao = {
  root: function(t) {
    var e = t.props, o = t.instance;
    return ["p-badge p-component", {
      "p-badge-circle": $(e.value) && String(e.value).length === 1,
      "p-badge-dot": U(e.value) && !o.$slots.default,
      "p-badge-sm": e.size === "small",
      "p-badge-lg": e.size === "large",
      "p-badge-xl": e.size === "xlarge",
      "p-badge-info": e.severity === "info",
      "p-badge-success": e.severity === "success",
      "p-badge-warn": e.severity === "warn",
      "p-badge-danger": e.severity === "danger",
      "p-badge-secondary": e.severity === "secondary",
      "p-badge-contrast": e.severity === "contrast"
    }];
  }
}, so = C.extend({
  name: "badge",
  theme: io,
  classes: ao
}), uo = {
  name: "BaseBadge",
  extends: bt,
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    severity: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    }
  },
  style: so,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
}, Re = {
  name: "Badge",
  extends: uo,
  inheritAttrs: !1
};
function co(n, t, e, o, r, i) {
  return _(), O("span", x({
    class: n.cx("root")
  }, n.ptmi("root")), [F(n.$slots, "default", {}, function() {
    return [nn(Ut(n.value), 1)];
  })], 16);
}
Re.render = co;
var pe = $e();
function mt(n) {
  "@babel/helpers - typeof";
  return mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mt(n);
}
function be(n, t) {
  return po(n) || fo(n, t) || mo(n, t) || lo();
}
function lo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mo(n, t) {
  if (n) {
    if (typeof n == "string") return he(n, t);
    var e = {}.toString.call(n).slice(8, -1);
    return e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set" ? Array.from(n) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? he(n, t) : void 0;
  }
}
function he(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function fo(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var o, r, i, s, a = [], c = !0, u = !1;
    try {
      if (i = (e = e.call(n)).next, t !== 0) for (; !(c = (o = i.call(e)).done) && (a.push(o.value), a.length !== t); c = !0) ;
    } catch (l) {
      u = !0, r = l;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw r;
      }
    }
    return a;
  }
}
function po(n) {
  if (Array.isArray(n)) return n;
}
function ge(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function S(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ge(Object(e), !0).forEach(function(o) {
      Rt(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : ge(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
function Rt(n, t, e) {
  return (t = bo(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function bo(n) {
  var t = ho(n, "string");
  return mt(t) == "symbol" ? t : t + "";
}
function ho(n, t) {
  if (mt(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (mt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var g = {
  _getMeta: function() {
    return [W(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], A(W(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(t, e) {
    var o, r, i;
    return (o = (t == null || (r = t.instance) === null || r === void 0 ? void 0 : r.$primevue) || (e == null || (i = e.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || o === void 0 ? void 0 : o.config;
  },
  _getOptionValue: Ht,
  _getPTValue: function() {
    var t, e, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, c = function() {
      var f = g._getOptionValue.apply(g, arguments);
      return L(f) || Gt(f) ? {
        class: f
      } : f;
    }, u = ((t = o.binding) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t.ptOptions) || ((e = o.$primevueConfig) === null || e === void 0 ? void 0 : e.ptOptions) || {}, l = u.mergeSections, d = l === void 0 ? !0 : l, m = u.mergeProps, b = m === void 0 ? !1 : m, p = a ? g._useDefaultPT(o, o.defaultPT(), c, i, s) : void 0, h = g._usePT(o, g._getPT(r, o.$name), c, i, S(S({}, s), {}, {
      global: p || {}
    })), I = g._getPTDatasets(o, i);
    return d || !d && h ? b ? g._mergeProps(o, b, p, h, I) : S(S(S({}, p), h), I) : S(S({}, h), I);
  },
  _getPTDatasets: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = "data-pc-";
    return S(S({}, e === "root" && Rt({}, "".concat(o, "name"), E(t.$name))), {}, Rt({}, "".concat(o, "section"), E(e)));
  },
  _getPT: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, r = function(s) {
      var a, c = o ? o(s) : s, u = E(e);
      return (a = c == null ? void 0 : c[u]) !== null && a !== void 0 ? a : c;
    };
    return t != null && t.hasOwnProperty("_usept") ? {
      _usept: t._usept,
      originalValue: r(t.originalValue),
      value: r(t.value)
    } : r(t);
  },
  _usePT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, s = function(I) {
      return o(I, r, i);
    };
    if (e != null && e.hasOwnProperty("_usept")) {
      var a, c = e._usept || ((a = t.$primevueConfig) === null || a === void 0 ? void 0 : a.ptOptions) || {}, u = c.mergeSections, l = u === void 0 ? !0 : u, d = c.mergeProps, m = d === void 0 ? !1 : d, b = s(e.originalValue), p = s(e.value);
      return b === void 0 && p === void 0 ? void 0 : L(p) ? p : L(b) ? b : l || !l && p ? m ? g._mergeProps(t, m, b, p) : S(S({}, b), p) : p;
    }
    return s(e);
  },
  _useDefaultPT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
    return g._usePT(t, e, o, r, i);
  },
  _loadStyles: function(t, e, o) {
    var r, i = g._getConfig(e, o), s = {
      nonce: i == null || (r = i.csp) === null || r === void 0 ? void 0 : r.nonce
    };
    g._loadCoreStyles(t.$instance, s), g._loadThemeStyles(t.$instance, s), g._loadScopedThemeStyles(t.$instance, s), g._themeChangeListener(function() {
      return g._loadThemeStyles(t.$instance, s);
    });
  },
  _loadCoreStyles: function() {
    var t, e, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    if (!R.isStyleNameLoaded((t = o.$style) === null || t === void 0 ? void 0 : t.name) && (e = o.$style) !== null && e !== void 0 && e.name) {
      var i;
      C.loadCSS(r), o.isUnstyled() && ((i = o.$style) === null || i === void 0 || i.loadCSS(r)), R.setLoadedStyleName(o.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var t, e, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    if (!(o != null && o.isUnstyled())) {
      if (!w.isStyleNameLoaded("common")) {
        var i, s, a = ((i = o.$style) === null || i === void 0 || (s = i.getCommonTheme) === null || s === void 0 ? void 0 : s.call(i)) || {}, c = a.primitive, u = a.semantic;
        C.load(c == null ? void 0 : c.css, S({
          name: "primitive-variables"
        }, r)), C.load(u == null ? void 0 : u.css, S({
          name: "semantic-variables"
        }, r)), C.loadTheme(S({
          name: "global-style"
        }, r)), w.setLoadedStyleName("common");
      }
      if (!w.isStyleNameLoaded((t = o.$style) === null || t === void 0 ? void 0 : t.name) && (e = o.$style) !== null && e !== void 0 && e.name) {
        var l, d, m, b, p = ((l = o.$style) === null || l === void 0 || (d = l.getDirectiveTheme) === null || d === void 0 ? void 0 : d.call(l)) || {}, h = p.css;
        (m = o.$style) === null || m === void 0 || m.load(h, S({
          name: "".concat(o.$style.name, "-variables")
        }, r)), (b = o.$style) === null || b === void 0 || b.loadTheme(S({
          name: "".concat(o.$style.name, "-style")
        }, r)), w.setLoadedStyleName(o.$style.name);
      }
      if (!w.isStyleNameLoaded("layer-order")) {
        var I, k, f = (I = o.$style) === null || I === void 0 || (k = I.getLayerOrderThemeCSS) === null || k === void 0 ? void 0 : k.call(I);
        C.load(f, S({
          name: "layer-order",
          first: !0
        }, r)), w.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0, o = t.preset();
    if (o && t.$attrSelector) {
      var r, i, s, a = ((r = t.$style) === null || r === void 0 || (i = r.getPresetTheme) === null || i === void 0 ? void 0 : i.call(r, o, "[".concat(t.$attrSelector, "]"))) || {}, c = a.css, u = (s = t.$style) === null || s === void 0 ? void 0 : s.load(c, S({
        name: "".concat(t.$attrSelector, "-").concat(t.$style.name)
      }, e));
      t.scopedStyleEl = u.el;
    }
  },
  _themeChangeListener: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    R.clearLoadedStyleNames(), M.on("theme:change", t);
  },
  _hook: function(t, e, o, r, i, s) {
    var a, c, u = "on".concat(un(e)), l = g._getConfig(r, i), d = o == null ? void 0 : o.$instance, m = g._usePT(d, g._getPT(r == null || (a = r.value) === null || a === void 0 ? void 0 : a.pt, t), g._getOptionValue, "hooks.".concat(u)), b = g._useDefaultPT(d, l == null || (c = l.pt) === null || c === void 0 || (c = c.directives) === null || c === void 0 ? void 0 : c[t], g._getOptionValue, "hooks.".concat(u)), p = {
      el: o,
      binding: r,
      vnode: i,
      prevVnode: s
    };
    m == null || m(d, p), b == null || b(d, p);
  },
  _mergeProps: function() {
    for (var t = arguments.length > 1 ? arguments[1] : void 0, e = arguments.length, o = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++)
      o[r - 2] = arguments[r];
    return Wt(t) ? t.apply(void 0, o) : x.apply(void 0, o);
  },
  _extend: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = function(s, a, c, u, l) {
      var d, m, b;
      a._$instances = a._$instances || {};
      var p = g._getConfig(c, u), h = a._$instances[t] || {}, I = U(h) ? S(S({}, e), e == null ? void 0 : e.methods) : {};
      a._$instances[t] = S(S({}, h), {}, {
        /* new instance variables to pass in directive methods */
        $name: t,
        $host: a,
        $binding: c,
        $modifiers: c == null ? void 0 : c.modifiers,
        $value: c == null ? void 0 : c.value,
        $el: h.$el || a || void 0,
        $style: S({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadTheme: function() {
          }
        }, e == null ? void 0 : e.style),
        $primevueConfig: p,
        $attrSelector: a.$attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return g._getPT(p == null ? void 0 : p.pt, void 0, function(f) {
            var v;
            return f == null || (v = f.directives) === null || v === void 0 ? void 0 : v[t];
          });
        },
        isUnstyled: function() {
          var f, v;
          return ((f = a.$instance) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.unstyled) !== void 0 ? (v = a.$instance) === null || v === void 0 || (v = v.$binding) === null || v === void 0 || (v = v.value) === null || v === void 0 ? void 0 : v.unstyled : p == null ? void 0 : p.unstyled;
        },
        theme: function() {
          var f;
          return (f = a.$instance) === null || f === void 0 || (f = f.$primevueConfig) === null || f === void 0 ? void 0 : f.theme;
        },
        preset: function() {
          var f;
          return (f = a.$instance) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.dt;
        },
        /* instance's methods */
        ptm: function() {
          var f, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return g._getPTValue(a.$instance, (f = a.$instance) === null || f === void 0 || (f = f.$binding) === null || f === void 0 || (f = f.value) === null || f === void 0 ? void 0 : f.pt, v, S({}, P));
        },
        ptmo: function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return g._getPTValue(a.$instance, f, v, P, !1);
        },
        cx: function() {
          var f, v, P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (f = a.$instance) !== null && f !== void 0 && f.isUnstyled() ? void 0 : g._getOptionValue((v = a.$instance) === null || v === void 0 || (v = v.$style) === null || v === void 0 ? void 0 : v.classes, P, S({}, V));
        },
        sx: function() {
          var f, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return P ? g._getOptionValue((f = a.$instance) === null || f === void 0 || (f = f.$style) === null || f === void 0 ? void 0 : f.inlineStyles, v, S({}, V)) : void 0;
        }
      }, I), a.$instance = a._$instances[t], (d = (m = a.$instance)[s]) === null || d === void 0 || d.call(m, a, c, u, l), a["$".concat(t)] = a.$instance, g._hook(t, s, a, c, u, l), a.$pd || (a.$pd = {}), a.$pd[t] = S(S({}, (b = a.$pd) === null || b === void 0 ? void 0 : b[t]), {}, {
        name: t,
        instance: a.$instance
      });
    }, r = function(s) {
      var a, c, u, l, d, m = (a = s.$instance) === null || a === void 0 ? void 0 : a.watch;
      m == null || (c = m.config) === null || c === void 0 || c.call(s.$instance, (u = s.$instance) === null || u === void 0 ? void 0 : u.$primevueConfig), pe.on("config:change", function(b) {
        var p, h = b.newValue, I = b.oldValue;
        return m == null || (p = m.config) === null || p === void 0 ? void 0 : p.call(s.$instance, h, I);
      }), m == null || (l = m["config.ripple"]) === null || l === void 0 || l.call(s.$instance, (d = s.$instance) === null || d === void 0 || (d = d.$primevueConfig) === null || d === void 0 ? void 0 : d.ripple), pe.on("config:ripple:change", function(b) {
        var p, h = b.newValue, I = b.oldValue;
        return m == null || (p = m["config.ripple"]) === null || p === void 0 ? void 0 : p.call(s.$instance, h, I);
      });
    };
    return {
      created: function(s, a, c, u) {
        o("created", s, a, c, u);
      },
      beforeMount: function(s, a, c, u) {
        s.$attrSelector = Pt("pd"), g._loadStyles(s, a, c), o("beforeMount", s, a, c, u), r(s);
      },
      mounted: function(s, a, c, u) {
        g._loadStyles(s, a, c), o("mounted", s, a, c, u);
      },
      beforeUpdate: function(s, a, c, u) {
        o("beforeUpdate", s, a, c, u);
      },
      updated: function(s, a, c, u) {
        g._loadStyles(s, a, c), o("updated", s, a, c, u);
      },
      beforeUnmount: function(s, a, c, u) {
        o("beforeUnmount", s, a, c, u);
      },
      unmounted: function(s, a, c, u) {
        var l;
        (l = s.$instance) === null || l === void 0 || (l = l.scopedStyleEl) === null || l === void 0 || (l = l.value) === null || l === void 0 || l.remove(), o("unmounted", s, a, c, u);
      }
    };
  },
  extend: function() {
    var t = g._getMeta.apply(g, arguments), e = be(t, 2), o = e[0], r = e[1];
    return S({
      extend: function() {
        var s = g._getMeta.apply(g, arguments), a = be(s, 2), c = a[0], u = a[1];
        return g.extend(c, S(S(S({}, r), r == null ? void 0 : r.methods), u));
      }
    }, g._extend(o, r));
  }
}, go = function(t) {
  var e = t.dt;
  return `
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(e("ripple.background"), `;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`);
}, vo = {
  root: "p-ink"
}, yo = C.extend({
  name: "ripple-directive",
  theme: go,
  classes: vo
}), Io = g.extend({
  style: yo
});
function ft(n) {
  "@babel/helpers - typeof";
  return ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ft(n);
}
function So(n) {
  return wo(n) || _o(n) || ko(n) || xo();
}
function xo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ko(n, t) {
  if (n) {
    if (typeof n == "string") return Ft(n, t);
    var e = {}.toString.call(n).slice(8, -1);
    return e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set" ? Array.from(n) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Ft(n, t) : void 0;
  }
}
function _o(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function wo(n) {
  if (Array.isArray(n)) return Ft(n);
}
function Ft(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, o = Array(t); e < t; e++) o[e] = n[e];
  return o;
}
function ve(n, t, e) {
  return (t = $o(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function $o(n) {
  var t = Po(n, "string");
  return ft(t) == "symbol" ? t : t + "";
}
function Po(n, t) {
  if (ft(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (ft(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var Fe = Io.extend("ripple", {
  watch: {
    "config.ripple": function(t) {
      t ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(t) {
    this.remove(t);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(t) {
      t.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(t) {
      t.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(t) {
      var e = In("span", ve(ve({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root")));
      t.appendChild(e), this.$el = e;
    },
    remove: function(t) {
      var e = this.getInk(t);
      e && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(t), e.removeEventListener("animationend", this.onAnimationEnd), e.remove());
    },
    onMouseDown: function(t) {
      var e = this, o = t.currentTarget, r = this.getInk(o);
      if (!(!r || getComputedStyle(r, null).display === "none")) {
        if (!this.isUnstyled() && Dt(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"), !ne(r) && !oe(r)) {
          var i = Math.max(je(o), _n(o));
          r.style.height = i + "px", r.style.width = i + "px";
        }
        var s = Ve(o), a = t.pageX - s.left + document.body.scrollTop - oe(r) / 2, c = t.pageY - s.top + document.body.scrollLeft - ne(r) / 2;
        r.style.top = c + "px", r.style.left = a + "px", !this.isUnstyled() && yn(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          r && (!e.isUnstyled() && Dt(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(t) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && Dt(t.currentTarget, "p-ink-active"), t.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(t) {
      return t && t.children ? So(t.children).find(function(e) {
        return Sn(e, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
});
function pt(n) {
  "@babel/helpers - typeof";
  return pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pt(n);
}
function N(n, t, e) {
  return (t = Co(t)) in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
function Co(n) {
  var t = Oo(n, "string");
  return pt(t) == "symbol" ? t : t + "";
}
function Oo(n, t) {
  if (pt(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(n, t || "default");
    if (pt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
var To = function(t) {
  var e = t.dt;
  return `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(e("button.primary.color"), `;
    background: `).concat(e("button.primary.background"), `;
    border: 1px solid `).concat(e("button.primary.border.color"), `;
    padding: `).concat(e("button.padding.y"), " ").concat(e("button.padding.x"), `;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(e("button.transition.duration"), ", color ").concat(e("button.transition.duration"), ", border-color ").concat(e("button.transition.duration"), `,
            outline-color `).concat(e("button.transition.duration"), ", box-shadow ").concat(e("button.transition.duration"), `;
    border-radius: `).concat(e("button.border.radius"), `;
    outline-color: transparent;
    gap: `).concat(e("button.gap"), `;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: `).concat(e("button.icon.only.width"), `;
    padding-left: 0;
    padding-right: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: `).concat(e("button.icon.only.width"), `;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: `).concat(e("button.sm.font.size"), `;
    padding: `).concat(e("button.sm.padding.y"), " ").concat(e("button.sm.padding.x"), `;
}

.p-button-sm .p-button-icon {
    font-size: `).concat(e("button.sm.font.size"), `;
}

.p-button-lg {
    font-size: `).concat(e("button.lg.font.size"), `;
    padding: `).concat(e("button.lg.padding.y"), " ").concat(e("button.lg.padding.x"), `;
}

.p-button-lg .p-button-icon {
    font-size: `).concat(e("button.lg.font.size"), `;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: `).concat(e("button.label.font.weight"), `;
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: `).concat(e("button.icon.only.width"), `;
}

.p-button:not(:disabled):hover {
    background: `).concat(e("button.primary.hover.background"), `;
    border: 1px solid `).concat(e("button.primary.hover.border.color"), `;
    color: `).concat(e("button.primary.hover.color"), `;
}

.p-button:not(:disabled):active {
    background: `).concat(e("button.primary.active.background"), `;
    border: 1px solid `).concat(e("button.primary.active.border.color"), `;
    color: `).concat(e("button.primary.active.color"), `;
}

.p-button:focus-visible {
    box-shadow: `).concat(e("button.primary.focus.ring.shadow"), `;
    outline: `).concat(e("button.focus.ring.width"), " ").concat(e("button.focus.ring.style"), " ").concat(e("button.primary.focus.ring.color"), `;
    outline-offset: `).concat(e("button.focus.ring.offset"), `;
}

.p-button .p-badge {
    min-width: `).concat(e("button.badge.size"), `;
    height: `).concat(e("button.badge.size"), `;
    line-height: `).concat(e("button.badge.size"), `;
}

.p-button-raised {
    box-shadow: `).concat(e("button.raised.shadow"), `;
}

.p-button-rounded {
    border-radius: `).concat(e("button.rounded.border.radius"), `;
}

.p-button-secondary {
    background: `).concat(e("button.secondary.background"), `;
    border: 1px solid `).concat(e("button.secondary.border.color"), `;
    color: `).concat(e("button.secondary.color"), `;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(e("button.secondary.hover.background"), `;
    border: 1px solid `).concat(e("button.secondary.hover.border.color"), `;
    color: `).concat(e("button.secondary.hover.color"), `;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(e("button.secondary.active.background"), `;
    border: 1px solid `).concat(e("button.secondary.active.border.color"), `;
    color: `).concat(e("button.secondary.active.color"), `;
}

.p-button-secondary:focus-visible {
    outline-color: `).concat(e("button.secondary.focus.ring.color"), `;
    box-shadow: `).concat(e("button.secondary.focus.ring.shadow"), `;
}

.p-button-success {
    background: `).concat(e("button.success.background"), `;
    border: 1px solid `).concat(e("button.success.border.color"), `;
    color: `).concat(e("button.success.color"), `;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(e("button.success.hover.background"), `;
    border: 1px solid `).concat(e("button.success.hover.border.color"), `;
    color: `).concat(e("button.success.hover.color"), `;
}

.p-button-success:not(:disabled):active {
    background: `).concat(e("button.success.active.background"), `;
    border: 1px solid `).concat(e("button.success.active.border.color"), `;
    color: `).concat(e("button.success.active.color"), `;
}

.p-button-success:focus-visible {
    outline-color: `).concat(e("button.success.focus.ring.color"), `;
    box-shadow: `).concat(e("button.success.focus.ring.shadow"), `;
}

.p-button-info {
    background: `).concat(e("button.info.background"), `;
    border: 1px solid `).concat(e("button.info.border.color"), `;
    color: `).concat(e("button.info.color"), `;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(e("button.info.hover.background"), `;
    border: 1px solid `).concat(e("button.info.hover.border.color"), `;
    color: `).concat(e("button.info.hover.color"), `;
}

.p-button-info:not(:disabled):active {
    background: `).concat(e("button.info.active.background"), `;
    border: 1px solid `).concat(e("button.info.active.border.color"), `;
    color: `).concat(e("button.info.active.color"), `;
}

.p-button-info:focus-visible {
    outline-color: `).concat(e("button.info.focus.ring.color"), `;
    box-shadow: `).concat(e("button.info.focus.ring.shadow"), `;
}

.p-button-warn {
    background: `).concat(e("button.warn.background"), `;
    border: 1px solid `).concat(e("button.warn.border.color"), `;
    color: `).concat(e("button.warn.color"), `;
}

.p-button-warn:not(:disabled):hover {
    background: `).concat(e("button.warn.hover.background"), `;
    border: 1px solid `).concat(e("button.warn.hover.border.color"), `;
    color: `).concat(e("button.warn.hover.color"), `;
}

.p-button-warn:not(:disabled):active {
    background: `).concat(e("button.warn.active.background"), `;
    border: 1px solid `).concat(e("button.warn.active.border.color"), `;
    color: `).concat(e("button.warn.active.color"), `;
}

.p-button-warn:focus-visible {
    outline-color: `).concat(e("button.warn.focus.ring.color"), `;
    box-shadow: `).concat(e("button.warn.focus.ring.shadow"), `;
}

.p-button-help {
    background: `).concat(e("button.help.background"), `;
    border: 1px solid `).concat(e("button.help.border.color"), `;
    color: `).concat(e("button.help.color"), `;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(e("button.help.hover.background"), `;
    border: 1px solid `).concat(e("button.help.hover.border.color"), `;
    color: `).concat(e("button.help.hover.color"), `;
}

.p-button-help:not(:disabled):active {
    background: `).concat(e("button.help.active.background"), `;
    border: 1px solid `).concat(e("button.help.active.border.color"), `;
    color: `).concat(e("button.help.active.color"), `;
}

.p-button-help:focus-visible {
    outline-color: `).concat(e("button.help.focus.ring.color"), `;
    box-shadow: `).concat(e("button.help.focus.ring.shadow"), `;
}

.p-button-danger {
    background: `).concat(e("button.danger.background"), `;
    border: 1px solid `).concat(e("button.danger.border.color"), `;
    color: `).concat(e("button.danger.color"), `;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(e("button.danger.hover.background"), `;
    border: 1px solid `).concat(e("button.danger.hover.border.color"), `;
    color: `).concat(e("button.danger.hover.color"), `;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(e("button.danger.active.background"), `;
    border: 1px solid `).concat(e("button.danger.active.border.color"), `;
    color: `).concat(e("button.danger.active.color"), `;
}

.p-button-danger:focus-visible {
    outline-color: `).concat(e("button.danger.focus.ring.color"), `;
    box-shadow: `).concat(e("button.danger.focus.ring.shadow"), `;
}

.p-button-contrast {
    background: `).concat(e("button.contrast.background"), `;
    border: 1px solid `).concat(e("button.contrast.border.color"), `;
    color: `).concat(e("button.contrast.color"), `;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(e("button.contrast.hover.background"), `;
    border: 1px solid `).concat(e("button.contrast.hover.border.color"), `;
    color: `).concat(e("button.contrast.hover.color"), `;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(e("button.contrast.active.background"), `;
    border: 1px solid `).concat(e("button.contrast.active.border.color"), `;
    color: `).concat(e("button.contrast.active.color"), `;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(e("button.contrast.focus.ring.color"), `;
    box-shadow: `).concat(e("button.contrast.focus.ring.shadow"), `;
}

.p-button-outlined {
    background: transparent;
    border-color: `).concat(e("button.outlined.primary.border.color"), `;
    color: `).concat(e("button.outlined.primary.color"), `;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(e("button.outlined.primary.hover.background"), `;
    border-color: `).concat(e("button.outlined.primary.border.color"), `;
    color: `).concat(e("button.outlined.primary.color"), `;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(e("button.outlined.primary.active.background"), `;
    border-color: `).concat(e("button.outlined.primary.border.color"), `;
    color: `).concat(e("button.outlined.primary.color"), `;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(e("button.outlined.secondary.border.color"), `;
    color: `).concat(e("button.outlined.secondary.color"), `;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(e("button.outlined.secondary.hover.background"), `;
    border-color: `).concat(e("button.outlined.secondary.border.color"), `;
    color: `).concat(e("button.outlined.secondary.color"), `;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(e("button.outlined.secondary.active.background"), `;
    border-color: `).concat(e("button.outlined.secondary.border.color"), `;
    color: `).concat(e("button.outlined.secondary.color"), `;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(e("button.outlined.success.border.color"), `;
    color: `).concat(e("button.outlined.success.color"), `;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(e("button.outlined.success.hover.background"), `;
    border-color: `).concat(e("button.outlined.success.border.color"), `;
    color: `).concat(e("button.outlined.success.color"), `;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(e("button.outlined.success.active.background"), `;
    border-color: `).concat(e("button.outlined.success.border.color"), `;
    color: `).concat(e("button.outlined.success.color"), `;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(e("button.outlined.info.border.color"), `;
    color: `).concat(e("button.outlined.info.color"), `;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(e("button.outlined.info.hover.background"), `;
    border-color: `).concat(e("button.outlined.info.border.color"), `;
    color: `).concat(e("button.outlined.info.color"), `;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(e("button.outlined.info.active.background"), `;
    border-color: `).concat(e("button.outlined.info.border.color"), `;
    color: `).concat(e("button.outlined.info.color"), `;
}

.p-button-outlined.p-button-warn {
    border-color: `).concat(e("button.outlined.warn.border.color"), `;
    color: `).concat(e("button.outlined.warn.color"), `;
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: `).concat(e("button.outlined.warn.hover.background"), `;
    border-color: `).concat(e("button.outlined.warn.border.color"), `;
    color: `).concat(e("button.outlined.warn.color"), `;
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: `).concat(e("button.outlined.warn.active.background"), `;
    border-color: `).concat(e("button.outlined.warn.border.color"), `;
    color: `).concat(e("button.outlined.warn.color"), `;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(e("button.outlined.help.border.color"), `;
    color: `).concat(e("button.outlined.help.color"), `;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(e("button.outlined.help.hover.background"), `;
    border-color: `).concat(e("button.outlined.help.border.color"), `;
    color: `).concat(e("button.outlined.help.color"), `;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(e("button.outlined.help.active.background"), `;
    border-color: `).concat(e("button.outlined.help.border.color"), `;
    color: `).concat(e("button.outlined.help.color"), `;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(e("button.outlined.danger.border.color"), `;
    color: `).concat(e("button.outlined.danger.color"), `;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(e("button.outlined.danger.hover.background"), `;
    border-color: `).concat(e("button.outlined.danger.border.color"), `;
    color: `).concat(e("button.outlined.danger.color"), `;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(e("button.outlined.danger.active.background"), `;
    border-color: `).concat(e("button.outlined.danger.border.color"), `;
    color: `).concat(e("button.outlined.danger.color"), `;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(e("button.outlined.contrast.border.color"), `;
    color: `).concat(e("button.outlined.contrast.color"), `;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(e("button.outlined.contrast.hover.background"), `;
    border-color: `).concat(e("button.outlined.contrast.border.color"), `;
    color: `).concat(e("button.outlined.contrast.color"), `;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(e("button.outlined.contrast.active.background"), `;
    border-color: `).concat(e("button.outlined.contrast.border.color"), `;
    color: `).concat(e("button.outlined.contrast.color"), `;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(e("button.outlined.plain.border.color"), `;
    color: `).concat(e("button.outlined.plain.color"), `;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(e("button.outlined.plain.hover.background"), `;
    border-color: `).concat(e("button.outlined.plain.border.color"), `;
    color: `).concat(e("button.outlined.plain.color"), `;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(e("button.outlined.plain.active.background"), `;
    border-color: `).concat(e("button.outlined.plain.border.color"), `;
    color: `).concat(e("button.outlined.plain.color"), `;
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.primary.color"), `;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(e("button.text.primary.hover.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.primary.color"), `;
}

.p-button-text:not(:disabled):active {
    background: `).concat(e("button.text.primary.active.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.primary.color"), `;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.secondary.color"), `;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(e("button.text.secondary.hover.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.secondary.color"), `;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(e("button.text.secondary.active.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.secondary.color"), `;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.success.color"), `;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(e("button.text.success.hover.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.success.color"), `;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(e("button.text.success.active.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.success.color"), `;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.info.color"), `;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(e("button.text.info.hover.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.info.color"), `;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(e("button.text.info.active.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.info.color"), `;
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.warn.color"), `;
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: `).concat(e("button.text.warn.hover.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.warn.color"), `;
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: `).concat(e("button.text.warn.active.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.warn.color"), `;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.help.color"), `;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(e("button.text.help.hover.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.help.color"), `;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(e("button.text.help.active.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.help.color"), `;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.danger.color"), `;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(e("button.text.danger.hover.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.danger.color"), `;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(e("button.text.danger.active.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.danger.color"), `;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.text.plain.color"), `;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(e("button.text.plain.hover.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.plain.color"), `;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(e("button.text.plain.active.background"), `;
    border-color: transparent;
    color: `).concat(e("button.text.plain.color"), `;
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.link.color"), `;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.link.hover.color"), `;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(e("button.link.active.color"), `;
}
`);
}, Lo = {
  root: function(t) {
    var e = t.instance, o = t.props;
    return ["p-button p-component", N(N(N(N(N(N(N(N(N({
      "p-button-icon-only": e.hasIcon && !o.label && !o.badge,
      "p-button-vertical": (o.iconPos === "top" || o.iconPos === "bottom") && o.label,
      "p-button-loading": o.loading,
      "p-button-link": o.link
    }, "p-button-".concat(o.severity), o.severity), "p-button-raised", o.raised), "p-button-rounded", o.rounded), "p-button-text", o.text), "p-button-outlined", o.outlined), "p-button-sm", o.size === "small"), "p-button-lg", o.size === "large"), "p-button-plain", o.plain), "p-button-fluid", e.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(t) {
    var e = t.props;
    return ["p-button-icon", N({}, "p-button-icon-".concat(e.iconPos), e.label)];
  },
  label: "p-button-label"
}, Ao = C.extend({
  name: "button",
  theme: To,
  classes: Lo
}), jo = {
  name: "BaseButton",
  extends: bt,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPos: {
      type: String,
      default: "left"
    },
    iconClass: {
      type: String,
      default: null
    },
    badge: {
      type: String,
      default: null
    },
    badgeClass: {
      type: String,
      default: null
    },
    badgeSeverity: {
      type: String,
      default: "secondary"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    as: {
      type: [String, Object],
      default: "BUTTON"
    },
    asChild: {
      type: Boolean,
      default: !1
    },
    link: {
      type: Boolean,
      default: !1
    },
    severity: {
      type: String,
      default: null
    },
    raised: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    text: {
      type: Boolean,
      default: !1
    },
    outlined: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null
    },
    plain: {
      type: Boolean,
      default: !1
    },
    fluid: {
      type: Boolean,
      default: null
    }
  },
  style: Ao,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
}, Ue = {
  name: "Button",
  extends: jo,
  inheritAttrs: !1,
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(t) {
      var e = t === "root" ? this.ptmi : this.ptm;
      return e(t, {
        context: {
          disabled: this.disabled
        }
      });
    }
  },
  computed: {
    disabled: function() {
      return this.$attrs.disabled || this.$attrs.disabled === "" || this.loading;
    },
    defaultAriaLabel: function() {
      return this.label ? this.label + (this.badge ? " " + this.badge : "") : this.$attrs.ariaLabel;
    },
    hasIcon: function() {
      return this.icon || this.$slots.icon;
    },
    attrs: function() {
      return x(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
    },
    asAttrs: function() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.disabled
      } : void 0;
    },
    a11yAttrs: function() {
      return {
        "aria-label": this.defaultAriaLabel,
        "data-pc-name": "button",
        "data-p-disabled": this.disabled,
        "data-p-severity": this.severity
      };
    },
    hasFluid: function() {
      return U(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  },
  components: {
    SpinnerIcon: Be,
    Badge: Re
  },
  directives: {
    ripple: Fe
  }
};
function Eo(n, t, e, o, r, i) {
  var s = Q("SpinnerIcon"), a = Q("Badge"), c = ye("ripple");
  return n.asChild ? F(n.$slots, "default", {
    key: 1,
    class: X(n.cx("root")),
    a11yAttrs: i.a11yAttrs
  }) : Ie((_(), T(rt(n.as), x({
    key: 0,
    class: n.cx("root")
  }, i.attrs), {
    default: st(function() {
      return [F(n.$slots, "default", {}, function() {
        return [n.loading ? F(n.$slots, "loadingicon", {
          key: 0,
          class: X([n.cx("loadingIcon"), n.cx("icon")])
        }, function() {
          return [n.loadingIcon ? (_(), O("span", x({
            key: 0,
            class: [n.cx("loadingIcon"), n.cx("icon"), n.loadingIcon]
          }, n.ptm("loadingIcon")), null, 16)) : (_(), T(s, x({
            key: 1,
            class: [n.cx("loadingIcon"), n.cx("icon")],
            spin: ""
          }, n.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : F(n.$slots, "icon", {
          key: 1,
          class: X([n.cx("icon")])
        }, function() {
          return [n.icon ? (_(), O("span", x({
            key: 0,
            class: [n.cx("icon"), n.icon, n.iconClass]
          }, n.ptm("icon")), null, 16)) : D("", !0)];
        }), at("span", x({
          class: n.cx("label")
        }, n.ptm("label")), Ut(n.label || " "), 17), n.badge ? (_(), T(a, x({
          key: 2,
          value: n.badge,
          class: n.badgeClass,
          severity: n.badgeSeverity,
          unstyled: n.unstyled
        }, n.ptm("pcBadge")), null, 16, ["value", "class", "severity", "unstyled"])) : D("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class"])), [[c]]);
}
Ue.render = Eo;
const Xo = /* @__PURE__ */ Se({
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
  setup(n) {
    return (t, e) => (_(), T(xe(Ue), {
      label: t.text,
      disabled: t.disabled,
      size: t.size,
      plain: t.plain,
      loading: t.loading
    }, {
      icon: st(() => [
        F(t.$slots, "icon", {}, () => [
          (_(), T(rt(t.icon), {
            class: X(["mr-0.5 size-4", t.iconCls])
          }, null, 8, ["class"]))
        ])
      ]),
      _: 3
    }, 8, ["label", "disabled", "size", "plain", "loading"]));
  }
});
var We = {
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
    this.mounted = Ne();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function Vo(n, t, e, o, r, i) {
  return i.inline ? F(n.$slots, "default", {
    key: 0
  }) : r.mounted ? (_(), T(on, {
    key: 1,
    to: e.appendTo
  }, [F(n.$slots, "default")], 8, ["to"])) : D("", !0);
}
We.render = Vo;
var No = function(t) {
  var e = t.dt;
  return `
.p-contextmenu {
    background: `.concat(e("contextmenu.background"), `;
    color: `).concat(e("contextmenu.color"), `;
    border: 1px solid `).concat(e("contextmenu.border.color"), `;
    border-radius: `).concat(e("contextmenu.border.radius"), `;
    box-shadow: `).concat(e("contextmenu.shadow"), `;
    min-width: 12.5rem;
}

.p-contextmenu-root-list,
.p-contextmenu-submenu {
    margin: 0;
    padding: `).concat(e("contextmenu.list.padding"), `;
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: `).concat(e("contextmenu.list.gap"), `;
}

.p-contextmenu-submenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    z-index: 1;
    background: `).concat(e("contextmenu.background"), `;
    color: `).concat(e("contextmenu.color"), `;
    border: 1px solid `).concat(e("contextmenu.border.color"), `;
    border-radius: `).concat(e("contextmenu.border.radius"), `;
    box-shadow: `).concat(e("contextmenu.shadow"), `;
}

.p-contextmenu-item {
    position: relative;
}

.p-contextmenu-item-content {
    transition: background `).concat(e("contextmenu.transition.duration"), ", color ").concat(e("contextmenu.transition.duration"), `;
    border-radius: `).concat(e("contextmenu.item.border.radius"), `;
    color: `).concat(e("contextmenu.item.color"), `;
}

.p-contextmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(e("contextmenu.item.padding"), `;
    gap: `).concat(e("contextmenu.item.gap"), `;
    user-select: none;
}

.p-contextmenu-item-label {
    line-height: 1;
}

.p-contextmenu-item-icon {
    color: `).concat(e("contextmenu.item.icon.color"), `;
}

.p-contextmenu-submenu-icon {
    color: `).concat(e("contextmenu.submenu.icon.color"), `;
    margin-left: auto;
    font-size: `).concat(e("contextmenu.submenu.icon.size"), `;
    width: `).concat(e("contextmenu.submenu.icon.size"), `;
    height: `).concat(e("contextmenu.submenu.icon.size"), `;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content {
    color: `).concat(e("contextmenu.item.focus.color"), `;
    background: `).concat(e("contextmenu.item.focus.background"), `;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: `).concat(e("contextmenu.item.icon.focus.color"), `;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: `).concat(e("contextmenu.submenu.icon.focus.color"), `;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
    color: `).concat(e("contextmenu.item.focus.color"), `;
    background: `).concat(e("contextmenu.item.focus.background"), `;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
    color: `).concat(e("contextmenu.item.icon.focus.color"), `;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
    color: `).concat(e("contextmenu.submenu.icon.focus.color"), `;
}

.p-contextmenu-item-active > .p-contextmenu-item-content {
    color: `).concat(e("contextmenu.item.active.color"), `;
    background: `).concat(e("contextmenu.item.active.background"), `;
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: `).concat(e("contextmenu.item.icon.active.color"), `;
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: `).concat(e("contextmenu.submenu.icon.active.color"), `;
}

.p-contextmenu-separator {
    border-top: 1px solid  `).concat(e("contextmenu.separator.border.color"), `;
}

.p-contextmenu-enter-from,
.p-contextmenu-leave-active {
    opacity: 0;
}

.p-contextmenu-enter-active {
    transition: opacity 250ms;
}
`);
}, Do = {
  root: "p-contextmenu p-component",
  rootList: "p-contextmenu-root-list",
  item: function(t) {
    var e = t.instance, o = t.processedItem;
    return ["p-contextmenu-item", {
      "p-contextmenu-item-active": e.isItemActive(o),
      "p-focus": e.isItemFocused(o),
      "p-disabled": e.isItemDisabled(o)
    }];
  },
  itemContent: "p-contextmenu-item-content",
  itemLink: "p-contextmenu-item-link",
  itemIcon: "p-contextmenu-item-icon",
  itemLabel: "p-contextmenu-item-label",
  submenuIcon: "p-contextmenu-submenu-icon",
  submenu: "p-contextmenu-submenu",
  separator: "p-contextmenu-separator"
}, Mo = C.extend({
  name: "contextmenu",
  theme: No,
  classes: Do
}), He = {
  name: "AngleRightIcon",
  extends: ze
};
function Ko(n, t, e, o, r, i) {
  return _(), O("svg", x({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, n.pti()), t[0] || (t[0] = [at("path", {
    d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
He.render = Ko;
var zo = {
  name: "BaseContextMenu",
  extends: bt,
  props: {
    model: {
      type: Array,
      default: null
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    global: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: 0
    },
    ariaLabelledby: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  style: Mo,
  provide: function() {
    return {
      $pcContextMenu: this,
      $parentInstance: this
    };
  }
}, Ge = {
  name: "ContextMenuSub",
  hostName: "ContextMenu",
  extends: bt,
  emits: ["item-click", "item-mouseenter", "item-mousemove"],
  props: {
    items: {
      type: Array,
      default: null
    },
    menuId: {
      type: String,
      default: null
    },
    focusedItemId: {
      type: String,
      default: null
    },
    root: {
      type: Boolean,
      default: !1
    },
    visible: {
      type: Boolean,
      default: !1
    },
    level: {
      type: Number,
      default: 0
    },
    templates: {
      type: Object,
      default: null
    },
    activeItemPath: {
      type: Object,
      default: null
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getItemId: function(t) {
      return "".concat(this.menuId, "_").concat(t.key);
    },
    getItemKey: function(t) {
      return this.getItemId(t);
    },
    getItemProp: function(t, e, o) {
      return t && t.item ? A(t.item[e], o) : void 0;
    },
    getItemLabel: function(t) {
      return this.getItemProp(t, "label");
    },
    getItemLabelId: function(t) {
      return "".concat(this.menuId, "_").concat(t.key, "_label");
    },
    getPTOptions: function(t, e, o) {
      return this.ptm(t, {
        context: {
          item: e.item,
          active: this.isItemActive(e),
          focused: this.isItemFocused(e),
          disabled: this.isItemDisabled(e),
          index: o
        }
      });
    },
    isItemActive: function(t) {
      return this.activeItemPath.some(function(e) {
        return e.key === t.key;
      });
    },
    isItemVisible: function(t) {
      return this.getItemProp(t, "visible") !== !1;
    },
    isItemDisabled: function(t) {
      return this.getItemProp(t, "disabled");
    },
    isItemFocused: function(t) {
      return this.focusedItemId === this.getItemId(t);
    },
    isItemGroup: function(t) {
      return $(t.items);
    },
    onItemClick: function(t, e) {
      this.getItemProp(e, "command", {
        originalEvent: t,
        item: e.item
      }), this.$emit("item-click", {
        originalEvent: t,
        processedItem: e,
        isFocus: !0
      });
    },
    onItemMouseEnter: function(t, e) {
      this.$emit("item-mouseenter", {
        originalEvent: t,
        processedItem: e
      });
    },
    onItemMouseMove: function(t, e) {
      this.$emit("item-mousemove", {
        originalEvent: t,
        processedItem: e,
        isFocus: !0
      });
    },
    getAriaSetSize: function() {
      var t = this;
      return this.items.filter(function(e) {
        return t.isItemVisible(e) && !t.getItemProp(e, "separator");
      }).length;
    },
    getAriaPosInset: function(t) {
      var e = this;
      return t - this.items.slice(0, t).filter(function(o) {
        return e.isItemVisible(o) && e.getItemProp(o, "separator");
      }).length + 1;
    },
    onEnter: function() {
      Pn(this.$refs.container, this.level);
    },
    getMenuItemProps: function(t, e) {
      return {
        action: x({
          class: this.cx("itemLink"),
          tabindex: -1,
          "aria-hidden": !0
        }, this.getPTOptions("itemLink", t, e)),
        icon: x({
          class: [this.cx("itemIcon"), this.getItemProp(t, "icon")]
        }, this.getPTOptions("itemIcon", t, e)),
        label: x({
          class: this.cx("itemLabel")
        }, this.getPTOptions("itemLabel", t, e)),
        submenuicon: x({
          class: this.cx("submenuIcon")
        }, this.getPTOptions("submenuicon", t, e))
      };
    }
  },
  components: {
    AngleRightIcon: He
  },
  directives: {
    ripple: Fe
  }
}, Bo = ["tabindex"], Ro = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], Fo = ["onClick", "onMouseenter", "onMousemove"], Uo = ["href", "target"], Wo = ["id"], Ho = ["id"];
function Go(n, t, e, o, r, i) {
  var s = Q("AngleRightIcon"), a = Q("ContextMenuSub", !0), c = ye("ripple");
  return _(), T(ke, x({
    name: "p-contextmenusub",
    onEnter: i.onEnter
  }, n.ptm("menu.transition")), {
    default: st(function() {
      return [e.root || e.visible ? (_(), O("ul", x({
        key: 0,
        ref: "container",
        tabindex: e.tabindex
      }, n.ptm("rootList")), [(_(!0), O(Et, null, rn(e.items, function(u, l) {
        return _(), O(Et, {
          key: i.getItemKey(u)
        }, [i.isItemVisible(u) && !i.getItemProp(u, "separator") ? (_(), O("li", x({
          key: 0,
          id: i.getItemId(u),
          style: i.getItemProp(u, "style"),
          class: [n.cx("item", {
            processedItem: u
          }), i.getItemProp(u, "class")],
          role: "menuitem",
          "aria-label": i.getItemLabel(u),
          "aria-disabled": i.isItemDisabled(u) || void 0,
          "aria-expanded": i.isItemGroup(u) ? i.isItemActive(u) : void 0,
          "aria-haspopup": i.isItemGroup(u) && !i.getItemProp(u, "to") ? "menu" : void 0,
          "aria-level": e.level + 1,
          "aria-setsize": i.getAriaSetSize(),
          "aria-posinset": i.getAriaPosInset(l),
          ref_for: !0
        }, i.getPTOptions("item", u, l), {
          "data-p-active": i.isItemActive(u),
          "data-p-focused": i.isItemFocused(u),
          "data-p-disabled": i.isItemDisabled(u)
        }), [at("div", x({
          class: n.cx("itemContent"),
          onClick: function(m) {
            return i.onItemClick(m, u);
          },
          onMouseenter: function(m) {
            return i.onItemMouseEnter(m, u);
          },
          onMousemove: function(m) {
            return i.onItemMouseMove(m, u);
          },
          ref_for: !0
        }, i.getPTOptions("itemContent", u, l)), [e.templates.item ? (_(), T(rt(e.templates.item), {
          key: 1,
          item: u.item,
          hasSubmenu: i.getItemProp(u, "items"),
          label: i.getItemLabel(u),
          props: i.getMenuItemProps(u, l)
        }, null, 8, ["item", "hasSubmenu", "label", "props"])) : Ie((_(), O("a", x({
          key: 0,
          href: i.getItemProp(u, "url"),
          class: n.cx("itemLink"),
          target: i.getItemProp(u, "target"),
          tabindex: "-1",
          ref_for: !0
        }, i.getPTOptions("itemLink", u, l)), [e.templates.itemicon ? (_(), T(rt(e.templates.itemicon), {
          key: 0,
          item: u.item,
          class: X(n.cx("itemIcon"))
        }, null, 8, ["item", "class"])) : i.getItemProp(u, "icon") ? (_(), O("span", x({
          key: 1,
          class: [n.cx("itemIcon"), i.getItemProp(u, "icon")],
          ref_for: !0
        }, i.getPTOptions("itemIcon", u, l)), null, 16)) : D("", !0), at("span", x({
          id: i.getItemLabelId(u),
          class: n.cx("itemLabel"),
          ref_for: !0
        }, i.getPTOptions("itemLabel", u, l)), Ut(i.getItemLabel(u)), 17, Wo), i.getItemProp(u, "items") ? (_(), O(Et, {
          key: 2
        }, [e.templates.submenuicon ? (_(), T(rt(e.templates.submenuicon), {
          key: 0,
          active: i.isItemActive(u),
          class: X(n.cx("submenuIcon"))
        }, null, 8, ["active", "class"])) : (_(), T(s, x({
          key: 1,
          class: n.cx("submenuIcon"),
          ref_for: !0
        }, i.getPTOptions("submenuicon", u, l)), null, 16, ["class"]))], 64)) : D("", !0)], 16, Uo)), [[c]])], 16, Fo), i.isItemVisible(u) && i.isItemGroup(u) ? (_(), T(a, x({
          key: 0,
          id: i.getItemId(u) + "_list",
          role: "menu",
          class: n.cx("submenu"),
          menuId: e.menuId,
          focusedItemId: e.focusedItemId,
          items: u.items,
          templates: e.templates,
          activeItemPath: e.activeItemPath,
          level: e.level + 1,
          visible: i.isItemActive(u) && i.isItemGroup(u),
          pt: n.pt,
          unstyled: n.unstyled,
          onItemClick: t[0] || (t[0] = function(d) {
            return n.$emit("item-click", d);
          }),
          onItemMouseenter: t[1] || (t[1] = function(d) {
            return n.$emit("item-mouseenter", d);
          }),
          onItemMousemove: t[2] || (t[2] = function(d) {
            return n.$emit("item-mousemove", d);
          }),
          "aria-labelledby": i.getItemLabelId(u),
          ref_for: !0
        }, n.ptm("submenu")), null, 16, ["id", "class", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "level", "visible", "pt", "unstyled", "aria-labelledby"])) : D("", !0)], 16, Ro)) : D("", !0), i.isItemVisible(u) && i.getItemProp(u, "separator") ? (_(), O("li", x({
          key: 1,
          id: i.getItemId(u),
          style: i.getItemProp(u, "style"),
          class: [n.cx("separator"), i.getItemProp(u, "class")],
          role: "separator",
          ref_for: !0
        }, n.ptm("separator")), null, 16, Ho)) : D("", !0)], 64);
      }), 128))], 16, Bo)) : D("", !0)];
    }),
    _: 1
  }, 16, ["onEnter"]);
}
Ge.render = Go;
var Ze = {
  name: "ContextMenu",
  extends: zo,
  inheritAttrs: !1,
  emits: ["focus", "blur", "show", "hide", "before-show", "before-hide"],
  target: null,
  outsideClickListener: null,
  resizeListener: null,
  documentContextMenuListener: null,
  pageX: null,
  pageY: null,
  container: null,
  list: null,
  data: function() {
    return {
      id: this.$attrs.id,
      focused: !1,
      focusedItemInfo: {
        index: -1,
        level: 0,
        parentKey: ""
      },
      activeItemPath: [],
      visible: !1,
      submenuVisible: !1
    };
  },
  watch: {
    "$attrs.id": function(t) {
      this.id = t || Pt();
    },
    activeItemPath: function(t) {
      $(t) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : this.visible || (this.unbindOutsideClickListener(), this.unbindResizeListener());
    }
  },
  mounted: function() {
    this.id = this.id || Pt(), this.global && this.bindDocumentContextMenuListener();
  },
  beforeUnmount: function() {
    this.unbindResizeListener(), this.unbindOutsideClickListener(), this.unbindDocumentContextMenuListener(), this.container && this.autoZIndex && zt.clear(this.container), this.target = null, this.container = null;
  },
  methods: {
    getItemProp: function(t, e) {
      return t ? A(t[e]) : void 0;
    },
    getItemLabel: function(t) {
      return this.getItemProp(t, "label");
    },
    isItemDisabled: function(t) {
      return this.getItemProp(t, "disabled");
    },
    isItemVisible: function(t) {
      return this.getItemProp(t, "visible") !== !1;
    },
    isItemGroup: function(t) {
      return $(this.getItemProp(t, "items"));
    },
    isItemSeparator: function(t) {
      return this.getItemProp(t, "separator");
    },
    getProccessedItemLabel: function(t) {
      return t ? this.getItemLabel(t.item) : void 0;
    },
    isProccessedItemGroup: function(t) {
      return t && $(t.items);
    },
    toggle: function(t) {
      this.visible ? this.hide() : this.show(t);
    },
    show: function(t) {
      this.$emit("before-show"), this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, yt(this.list), this.pageX = t.pageX, this.pageY = t.pageY, this.visible ? this.position() : this.visible = !0, t.stopPropagation(), t.preventDefault();
    },
    hide: function() {
      this.$emit("before-hide"), this.visible = !1, this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      };
    },
    onFocus: function(t) {
      this.focused = !0, this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.$emit("focus", t);
    },
    onBlur: function(t) {
      this.focused = !1, this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.searchValue = "", this.$emit("blur", t);
    },
    onKeyDown: function(t) {
      var e = t.metaKey || t.ctrlKey;
      switch (t.code) {
        case "ArrowDown":
          this.onArrowDownKey(t);
          break;
        case "ArrowUp":
          this.onArrowUpKey(t);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(t);
          break;
        case "ArrowRight":
          this.onArrowRightKey(t);
          break;
        case "Home":
          this.onHomeKey(t);
          break;
        case "End":
          this.onEndKey(t);
          break;
        case "Space":
          this.onSpaceKey(t);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(t);
          break;
        case "Escape":
          this.onEscapeKey(t);
          break;
        case "Tab":
          this.onTabKey(t);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !e && sn(t.key) && this.searchItems(t, t.key);
          break;
      }
    },
    onItemChange: function(t) {
      var e = t.processedItem, o = t.isFocus;
      if (!U(e)) {
        var r = e.index, i = e.key, s = e.level, a = e.parentKey, c = e.items, u = $(c), l = this.activeItemPath.filter(function(d) {
          return d.parentKey !== a && d.parentKey !== i;
        });
        u && (l.push(e), this.submenuVisible = !0), this.focusedItemInfo = {
          index: r,
          level: s,
          parentKey: a
        }, this.activeItemPath = l, o && yt(this.list);
      }
    },
    onItemClick: function(t) {
      var e = t.processedItem, o = this.isProccessedItemGroup(e), r = this.isSelected(e);
      if (r) {
        var i = e.index, s = e.key, a = e.level, c = e.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(u) {
          return s !== u.key && s.startsWith(u.key);
        }), this.focusedItemInfo = {
          index: i,
          level: a,
          parentKey: c
        }, yt(this.list);
      } else
        o ? this.onItemChange(t) : this.hide();
    },
    onItemMouseEnter: function(t) {
      this.onItemChange(t);
    },
    onItemMouseMove: function(t) {
      this.focused && this.changeFocusedItemIndex(t, t.processedItem.index);
    },
    onArrowDownKey: function(t) {
      var e = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemIndex(t, e), t.preventDefault();
    },
    onArrowUpKey: function(t) {
      if (t.altKey) {
        if (this.focusedItemInfo.index !== -1) {
          var e = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(e);
          !o && this.onItemChange({
            originalEvent: t,
            processedItem: e
          });
        }
        this.popup && this.hide(), t.preventDefault();
      } else {
        var r = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(t, r), t.preventDefault();
      }
    },
    onArrowLeftKey: function(t) {
      var e = this, o = this.visibleItems[this.focusedItemInfo.index], r = this.activeItemPath.find(function(s) {
        return s.key === o.parentKey;
      }), i = U(o.parent);
      i || (this.focusedItemInfo = {
        index: -1,
        parentKey: r ? r.parentKey : ""
      }, this.searchValue = "", this.onArrowDownKey(t)), this.activeItemPath = this.activeItemPath.filter(function(s) {
        return s.parentKey !== e.focusedItemInfo.parentKey;
      }), t.preventDefault();
    },
    onArrowRightKey: function(t) {
      var e = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(e);
      o && (this.onItemChange({
        originalEvent: t,
        processedItem: e
      }), this.focusedItemInfo = {
        index: -1,
        parentKey: e.key
      }, this.searchValue = "", this.onArrowDownKey(t)), t.preventDefault();
    },
    onHomeKey: function(t) {
      this.changeFocusedItemIndex(t, this.findFirstItemIndex()), t.preventDefault();
    },
    onEndKey: function(t) {
      this.changeFocusedItemIndex(t, this.findLastItemIndex()), t.preventDefault();
    },
    onEnterKey: function(t) {
      if (this.focusedItemInfo.index !== -1) {
        var e = kt(this.list, 'li[id="'.concat("".concat(this.focusedItemIdx), '"]')), o = e && kt(e, '[data-pc-section="itemlink"]');
        o ? o.click() : e && e.click();
        var r = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(r);
        !i && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
      }
      t.preventDefault();
    },
    onSpaceKey: function(t) {
      this.onEnterKey(t);
    },
    onEscapeKey: function(t) {
      this.hide(), !this.popup && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex()), t.preventDefault();
    },
    onTabKey: function(t) {
      if (this.focusedItemInfo.index !== -1) {
        var e = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(e);
        !o && this.onItemChange({
          originalEvent: t,
          processedItem: e
        });
      }
      this.hide();
    },
    onEnter: function(t) {
      Ae(t, {
        position: "absolute"
      }), this.position(), this.autoZIndex && zt.set("menu", t, this.baseZIndex + this.$primevue.config.zIndex.menu);
    },
    onAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindResizeListener(), this.$emit("show"), yt(this.list);
    },
    onLeave: function() {
      this.$emit("hide"), this.container = null;
    },
    onAfterLeave: function(t) {
      this.autoZIndex && zt.clear(t), this.unbindOutsideClickListener(), this.unbindResizeListener();
    },
    position: function() {
      var t = this.pageX + 1, e = this.pageY + 1, o = this.container.offsetParent ? this.container.offsetWidth : Ee(this.container), r = this.container.offsetParent ? this.container.offsetHeight : xn(this.container), i = Le();
      t + o - document.body.scrollLeft > i.width && (t -= o), e + r - document.body.scrollTop > i.height && (e -= r), t < document.body.scrollLeft && (t = document.body.scrollLeft), e < document.body.scrollTop && (e = document.body.scrollTop), this.container.style.left = t + "px", this.container.style.top = e + "px";
    },
    bindOutsideClickListener: function() {
      var t = this;
      this.outsideClickListener || (this.outsideClickListener = function(e) {
        var o = t.container && !t.container.contains(e.target), r = t.visible ? !(t.target && (t.target === e.target || t.target.contains(e.target))) : !0;
        o && r && t.hide();
      }, document.addEventListener("click", this.outsideClickListener));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener), this.outsideClickListener = null);
    },
    bindResizeListener: function() {
      var t = this;
      this.resizeListener || (this.resizeListener = function() {
        t.visible && !$n() && t.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindDocumentContextMenuListener: function() {
      var t = this;
      this.documentContextMenuListener || (this.documentContextMenuListener = function(e) {
        e.button === 2 && t.show(e);
      }, document.addEventListener("contextmenu", this.documentContextMenuListener));
    },
    unbindDocumentContextMenuListener: function() {
      this.documentContextMenuListener && (document.removeEventListener("contextmenu", this.documentContextMenuListener), this.documentContextMenuListener = null);
    },
    isItemMatched: function(t) {
      var e;
      return this.isValidItem(t) && ((e = this.getProccessedItemLabel(t)) === null || e === void 0 ? void 0 : e.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    },
    isValidItem: function(t) {
      return !!t && !this.isItemDisabled(t.item) && !this.isItemSeparator(t.item) && this.isItemVisible(t.item);
    },
    isValidSelectedItem: function(t) {
      return this.isValidItem(t) && this.isSelected(t);
    },
    isSelected: function(t) {
      return this.activeItemPath.some(function(e) {
        return e.key === t.key;
      });
    },
    findFirstItemIndex: function() {
      var t = this;
      return this.visibleItems.findIndex(function(e) {
        return t.isValidItem(e);
      });
    },
    findLastItemIndex: function() {
      var t = this;
      return Xt(this.visibleItems, function(e) {
        return t.isValidItem(e);
      });
    },
    findNextItemIndex: function(t) {
      var e = this, o = t < this.visibleItems.length - 1 ? this.visibleItems.slice(t + 1).findIndex(function(r) {
        return e.isValidItem(r);
      }) : -1;
      return o > -1 ? o + t + 1 : t;
    },
    findPrevItemIndex: function(t) {
      var e = this, o = t > 0 ? Xt(this.visibleItems.slice(0, t), function(r) {
        return e.isValidItem(r);
      }) : -1;
      return o > -1 ? o : t;
    },
    findSelectedItemIndex: function() {
      var t = this;
      return this.visibleItems.findIndex(function(e) {
        return t.isValidSelectedItem(e);
      });
    },
    findFirstFocusedItemIndex: function() {
      var t = this.findSelectedItemIndex();
      return t < 0 ? this.findFirstItemIndex() : t;
    },
    findLastFocusedItemIndex: function() {
      var t = this.findSelectedItemIndex();
      return t < 0 ? this.findLastItemIndex() : t;
    },
    searchItems: function(t, e) {
      var o = this;
      this.searchValue = (this.searchValue || "") + e;
      var r = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (r = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(s) {
        return o.isItemMatched(s);
      }), r = r === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(s) {
        return o.isItemMatched(s);
      }) : r + this.focusedItemInfo.index) : r = this.visibleItems.findIndex(function(s) {
        return o.isItemMatched(s);
      }), r !== -1 && (i = !0), r === -1 && this.focusedItemInfo.index === -1 && (r = this.findFirstFocusedItemIndex()), r !== -1 && this.changeFocusedItemIndex(t, r), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        o.searchValue = "", o.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(t, e) {
      this.focusedItemInfo.index !== e && (this.focusedItemInfo.index = e, this.scrollInView());
    },
    scrollInView: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, e = t !== -1 ? "".concat(this.id, "_").concat(t) : this.focusedItemIdx, o = kt(this.list, 'li[id="'.concat(e, '"]'));
      o && o.scrollIntoView && o.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(t) {
      var e = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", s = [];
      return t && t.forEach(function(a, c) {
        var u = (i !== "" ? i + "_" : "") + c, l = {
          item: a,
          index: c,
          level: o,
          key: u,
          parent: r,
          parentKey: i
        };
        l.items = e.createProcessedItems(a.items, o + 1, l, u), s.push(l);
      }), s;
    },
    containerRef: function(t) {
      this.container = t;
    },
    listRef: function(t) {
      this.list = t ? t.$el : void 0;
    }
  },
  computed: {
    processedItems: function() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems: function() {
      var t = this, e = this.activeItemPath.find(function(o) {
        return o.key === t.focusedItemInfo.parentKey;
      });
      return e ? e.items : this.processedItems;
    },
    focusedItemIdx: function() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.id).concat($(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    ContextMenuSub: Ge,
    Portal: We
  }
};
function Zo(n, t, e, o, r, i) {
  var s = Q("ContextMenuSub"), a = Q("Portal");
  return _(), T(a, {
    appendTo: n.appendTo
  }, {
    default: st(function() {
      return [Yt(ke, x({
        name: "p-contextmenu",
        onEnter: i.onEnter,
        onAfterEnter: i.onAfterEnter,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave
      }, n.ptm("transition")), {
        default: st(function() {
          return [r.visible ? (_(), O("div", x({
            key: 0,
            ref: i.containerRef,
            class: n.cx("root")
          }, n.ptmi("root")), [Yt(s, {
            ref: i.listRef,
            id: r.id + "_list",
            class: X(n.cx("rootList")),
            role: "menubar",
            root: !0,
            tabindex: n.tabindex,
            "aria-orientation": "vertical",
            "aria-activedescendant": r.focused ? i.focusedItemIdx : void 0,
            menuId: r.id,
            focusedItemId: r.focused ? i.focusedItemIdx : void 0,
            items: i.processedItems,
            templates: n.$slots,
            activeItemPath: r.activeItemPath,
            "aria-labelledby": n.ariaLabelledby,
            "aria-label": n.ariaLabel,
            level: 0,
            visible: r.submenuVisible,
            pt: n.pt,
            unstyled: n.unstyled,
            onFocus: i.onFocus,
            onBlur: i.onBlur,
            onKeydown: i.onKeyDown,
            onItemClick: i.onItemClick,
            onItemMouseenter: i.onItemMouseEnter,
            onItemMousemove: i.onItemMouseMove
          }, null, 8, ["id", "class", "tabindex", "aria-activedescendant", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "aria-labelledby", "aria-label", "visible", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"])], 16)) : D("", !0)];
        }),
        _: 1
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 1
  }, 8, ["appendTo"]);
}
Ze.render = Zo;
function Ye({ text: n, icon: t, visible: e, click: o, items: r, iconCls: i }) {
  return t && (t = t.name), {
    icon: t,
    iconCls: i,
    visible: e,
    label: n,
    command: o,
    items: r == null ? void 0 : r.map((s) => Ye(s))
  };
}
const qo = /* @__PURE__ */ Se({
  __name: "BaseContextMenu",
  props: {
    items: {}
  },
  setup(n, { expose: t }) {
    const e = n, o = xt(), r = an(() => e.items.map((a) => Ye(a)));
    function i(a) {
      var c;
      (c = o.value) == null || c.show(a);
    }
    function s() {
      var a;
      (a = o.value) == null || a.hide();
    }
    return t({
      show: i,
      hide: s
    }), (a, c) => (_(), T(xe(Ze), {
      ref_key: "rootCmp",
      ref: o,
      model: r.value
    }, null, 8, ["model"]));
  }
});
export {
  Xo as BaseButton,
  qo as BaseContextMenu
};
