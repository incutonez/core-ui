import { ref as ge, readonly as ft, getCurrentInstance as mt, onMounted as pt, nextTick as ht, watch as vt, mergeProps as ae } from "vue";
function de(t) {
  return t == null || t === "" || Array.isArray(t) && t.length === 0 || !(t instanceof Date) && typeof t == "object" && Object.keys(t).length === 0;
}
function we(t) {
  return !!(t && t.constructor && t.call && t.apply);
}
function T(t) {
  return !de(t);
}
function En(t, e) {
  let n = -1;
  if (T(t))
    try {
      n = t.findLastIndex(e);
    } catch {
      n = t.lastIndexOf([...t].reverse().find(e));
    }
  return n;
}
function I(t, e = !0) {
  return t instanceof Object && t.constructor === Object && (e || Object.keys(t).length !== 0);
}
function L(t, ...e) {
  return we(t) ? t(...e) : t;
}
function k(t, e = !0) {
  return typeof t == "string" && (e || t !== "");
}
function j(t) {
  return k(t) ? t.replace(/(-|_)/g, "").toLowerCase() : t;
}
function ke(t, e = "", n = {}) {
  const r = j(e).split("."), i = r.shift();
  return i ? I(t) ? ke(L(t[Object.keys(t).find((s) => j(s) === i) || ""], n), r.join("."), n) : void 0 : L(t, n);
}
function Ce(t, e = !0) {
  return Array.isArray(t) && (e || t.length !== 0);
}
function Je(t) {
  return T(t) && !isNaN(t);
}
function Vn(t = "") {
  return T(t) && t.length === 1 && !!t.match(/\S| /);
}
function A(t, e) {
  if (e) {
    const n = e.test(t);
    return e.lastIndex = 0, n;
  }
  return !1;
}
function Y(t) {
  return t && t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function gt(t) {
  return k(t, !1) ? t[0].toUpperCase() + t.slice(1) : t;
}
function Qe(t) {
  return k(t) ? t.replace(/(_)/g, "-").replace(/[A-Z]/g, (e, n) => n === 0 ? e : "-" + e.toLowerCase()).toLowerCase() : t;
}
function xe(t) {
  return k(t) ? t.replace(/[A-Z]/g, (e, n) => n === 0 ? e : "." + e.toLowerCase()).toLowerCase() : t;
}
function et() {
  const t = /* @__PURE__ */ new Map();
  return {
    on(e, n) {
      let r = t.get(e);
      return r ? r.push(n) : r = [n], t.set(e, r), this;
    },
    off(e, n) {
      let r = t.get(e);
      return r && r.splice(r.indexOf(n) >>> 0, 1), this;
    },
    emit(e, n) {
      let r = t.get(e);
      r && r.slice().map((i) => {
        i(n);
      });
    },
    clear() {
      t.clear();
    }
  };
}
var yt = Object.defineProperty, bt = Object.defineProperties, _t = Object.getOwnPropertyDescriptors, le = Object.getOwnPropertySymbols, tt = Object.prototype.hasOwnProperty, nt = Object.prototype.propertyIsEnumerable, Le = (t, e, n) => e in t ? yt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, z = (t, e) => {
  for (var n in e || (e = {}))
    tt.call(e, n) && Le(t, n, e[n]);
  if (le)
    for (var n of le(e))
      nt.call(e, n) && Le(t, n, e[n]);
  return t;
}, ye = (t, e) => bt(t, _t(e)), F = (t, e) => {
  var n = {};
  for (var r in t)
    tt.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && le)
    for (var r of le(t))
      e.indexOf(r) < 0 && nt.call(t, r) && (n[r] = t[r]);
  return n;
}, St = et(), N = St;
function Ne(t, e) {
  Ce(t) ? t.push(...e || []) : I(t) && Object.assign(t, e);
}
function $t(t) {
  return I(t) && t.hasOwnProperty("value") && t.hasOwnProperty("type") ? t.value : t;
}
function Ae(t, e = "") {
  return ["opacity", "z-index", "line-height", "font-weight", "flex", "flex-grow", "flex-shrink", "order"].some((r) => e.endsWith(r)) ? t : `${t}`.trim().split(" ").map((s) => Je(s) ? `${s}px` : s).join(" ");
}
function Pt(t) {
  return t.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Pe(t = "", e = "") {
  return Pt(`${k(t, !1) && k(e, !1) ? `${t}-` : t}${e}`);
}
function rt(t = "", e = "") {
  return `--${Pe(t, e)}`;
}
function it(t, e = "", n = "", r = [], i) {
  if (k(t)) {
    const s = /{([^}]*)}/g, l = t.trim();
    if (A(l, s)) {
      const o = l.replaceAll(s, (u) => {
        const c = u.replace(/{|}/g, "").split(".").filter((h) => !r.some((p) => A(h, p)));
        return `var(${rt(n, Qe(c.join("-")))}${T(i) ? `, ${i}` : ""})`;
      }), a = /(\d+\s+[\+\-\*\/]\s+\d+)/g, d = /var\([^)]+\)/g;
      return A(o.replace(d, "0"), a) ? `calc(${o})` : o;
    }
    return Ae(l, e);
  } else if (Je(t))
    return Ae(t, e);
}
function Ot(t, e, n) {
  k(e, !1) && t.push(`${e}:${n};`);
}
function G(t, e) {
  return t ? `${t}{${e}}` : "";
}
var be = (...t) => Tt(P.getTheme(), ...t), Tt = (t = {}, e, n, r = "variable") => {
  if (e) {
    const { variable: i, options: s } = P.defaults || {}, { prefix: l, transform: o } = (t == null ? void 0 : t.options) || s || {}, d = A(e, /{([^}]*)}/g) ? e : `{${e}}`;
    return r === "value" || o === "strict" ? P.getTokenValue(e) : it(d, void 0, l, [i.excludedKeyRegex], n);
  }
  return "";
};
function wt(t, e = {}) {
  const n = P.defaults.variable, { prefix: r = n.prefix, selector: i = n.selector, excludedKeyRegex: s = n.excludedKeyRegex } = e, l = (d, u = "") => Object.entries(d).reduce(
    (f, [c, h]) => {
      const p = A(c, s) ? Pe(u) : Pe(u, Qe(c)), v = $t(h);
      if (I(v)) {
        const { variables: _, tokens: $ } = l(v, p);
        Ne(f.tokens, $), Ne(f.variables, _);
      } else
        f.tokens.push((r ? p.replace(`${r}-`, "") : p).replaceAll("-", ".")), Ot(f.variables, rt(p), it(v, p, r, [s]));
      return f;
    },
    { variables: [], tokens: [] }
  ), { variables: o, tokens: a } = l(t, r);
  return {
    value: o,
    tokens: a,
    declarations: o.join(""),
    css: G(i, o.join(""))
  };
}
var C = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(t) {
          return { type: "class", selector: t, matched: this.pattern.test(t.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(t) {
          return { type: "attr", selector: `:root${t}`, matched: this.pattern.test(t.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(t) {
          return { type: "media", selector: `${t}{:root{[CSS]}}`, matched: this.pattern.test(t.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(t) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(t.trim()) };
        }
      },
      custom: {
        resolve(t) {
          return { type: "custom", selector: t, matched: !0 };
        }
      }
    },
    resolve(t) {
      const e = Object.keys(this.rules).filter((n) => n !== "custom").map((n) => this.rules[n]);
      return [t].flat().map((n) => {
        var r;
        return (r = e.map((i) => i.resolve(n)).find((i) => i.matched)) != null ? r : this.rules.custom.resolve(n);
      });
    }
  },
  _toVariables(t, e) {
    return wt(t, { prefix: e == null ? void 0 : e.prefix });
  },
  getCommon({ name: t = "", theme: e = {}, params: n, set: r, defaults: i }) {
    var s, l, o, a;
    const { preset: d, options: u } = e;
    let f, c, h, p;
    if (T(d)) {
      const { primitive: v, semantic: _ } = d, $ = _ || {}, { colorScheme: m } = $, y = F($, ["colorScheme"]), O = m || {}, { dark: x } = O, R = F(O, ["dark"]), E = T(v) ? this._toVariables({ primitive: v }, u) : {}, U = T(y) ? this._toVariables({ semantic: y }, u) : {}, V = T(R) ? this._toVariables({ light: R }, u) : {}, W = T(x) ? this._toVariables({ dark: x }, u) : {}, [B, M] = [(s = E.declarations) != null ? s : "", E.tokens], [fe, te] = [(l = U.declarations) != null ? l : "", U.tokens || []], [ne, me] = [(o = V.declarations) != null ? o : "", V.tokens || []], [re, pe] = [(a = W.declarations) != null ? a : "", W.tokens || []];
      f = this.transformCSS(t, B, "light", "variable", u, r, i), c = M;
      const he = this.transformCSS(t, `${fe}${ne}color-scheme:light`, "light", "variable", u, r, i), H = this.transformCSS(t, `${re}color-scheme:dark`, "dark", "variable", u, r, i);
      h = `${he}${H}`, p = [.../* @__PURE__ */ new Set([...te, ...me, ...pe])];
    }
    return {
      primitive: {
        css: f,
        tokens: c
      },
      semantic: {
        css: h,
        tokens: p
      }
    };
  },
  getPreset({ name: t = "", preset: e = {}, options: n, params: r, set: i, defaults: s, selector: l }) {
    var o, a, d;
    const u = t.replace("-directive", ""), f = e, { colorScheme: c } = f, h = F(f, ["colorScheme"]), p = c || {}, { dark: v } = p, _ = F(p, ["dark"]), $ = T(h) ? this._toVariables({ [u]: h }, n) : {}, m = T(_) ? this._toVariables({ [u]: _ }, n) : {}, y = T(v) ? this._toVariables({ [u]: v }, n) : {}, [O, x] = [(o = $.declarations) != null ? o : "", $.tokens || []], [R, E] = [(a = m.declarations) != null ? a : "", m.tokens || []], [U, V] = [(d = y.declarations) != null ? d : "", y.tokens || []], W = [.../* @__PURE__ */ new Set([...x, ...E, ...V])], B = this.transformCSS(u, `${O}${R}`, "light", "variable", n, i, s, l), M = this.transformCSS(u, U, "dark", "variable", n, i, s, l);
    return {
      css: `${B}${M}`,
      tokens: W
    };
  },
  getPresetC({ name: t = "", theme: e = {}, params: n, set: r, defaults: i }) {
    var s;
    const { preset: l, options: o } = e, a = (s = l == null ? void 0 : l.components) == null ? void 0 : s[t];
    return this.getPreset({ name: t, preset: a, options: o, params: n, set: r, defaults: i });
  },
  getPresetD({ name: t = "", theme: e = {}, params: n, set: r, defaults: i }) {
    var s;
    const l = t.replace("-directive", ""), { preset: o, options: a } = e, d = (s = o == null ? void 0 : o.directives) == null ? void 0 : s[l];
    return this.getPreset({ name: l, preset: d, options: a, params: n, set: r, defaults: i });
  },
  getColorSchemeOption(t, e) {
    var n;
    return this.regex.resolve((n = t.darkModeSelector) != null ? n : e.options.darkModeSelector);
  },
  getLayerOrder(t, e = {}, n, r) {
    const { cssLayer: i } = e;
    return i ? `@layer ${L(i.order || "primeui", n)}` : "";
  },
  getCommonStyleSheet({ name: t = "", theme: e = {}, params: n, props: r = {}, set: i, defaults: s }) {
    const l = this.getCommon({ name: t, theme: e, params: n, set: i, defaults: s }), o = Object.entries(r).reduce((a, [d, u]) => a.push(`${d}="${u}"`) && a, []).join(" ");
    return Object.entries(l || {}).reduce((a, [d, u]) => {
      if (u != null && u.css) {
        const f = Y(u == null ? void 0 : u.css), c = `${d}-variables`;
        a.push(`<style type="text/css" data-primevue-style-id="${c}" ${o}>${f}</style>`);
      }
      return a;
    }, []).join("");
  },
  getStyleSheet({ name: t = "", theme: e = {}, params: n, props: r = {}, set: i, defaults: s }) {
    var l;
    const o = { name: t, theme: e, params: n, set: i, defaults: s }, a = (l = t.includes("-directive") ? this.getPresetD(o) : this.getPresetC(o)) == null ? void 0 : l.css, d = Object.entries(r).reduce((u, [f, c]) => u.push(`${f}="${c}"`) && u, []).join(" ");
    return a ? `<style type="text/css" data-primevue-style-id="${t}-variables" ${d}>${Y(a)}</style>` : "";
  },
  createTokens(t = {}, e, n = "", r = "", i = {}) {
    return Object.entries(t).forEach(([s, l]) => {
      const o = A(s, e.variable.excludedKeyRegex) ? n : n ? `${n}.${xe(s)}` : xe(s), a = r ? `${r}.${s}` : s;
      I(l) ? this.createTokens(l, e, o, a, i) : (i[o] || (i[o] = {
        paths: [],
        computed(d, u = {}) {
          if (d) {
            const f = this.paths.find((c) => c.scheme === d) || this.paths.find((c) => c.scheme === "none");
            return f == null ? void 0 : f.computed(d, u.binding);
          }
          return this.paths.map((f) => f.computed(f.scheme, u[f.scheme]));
        }
      }), i[o].paths.push({
        path: a,
        value: l,
        scheme: a.includes("colorScheme.light") ? "light" : a.includes("colorScheme.dark") ? "dark" : "none",
        computed(d, u = {}) {
          const f = /{([^}]*)}/g;
          let c = l;
          if (u.name = this.path, u.binding || (u.binding = {}), A(l, f)) {
            const p = l.trim().replaceAll(f, ($) => {
              var m, y;
              const O = $.replace(/{|}/g, "");
              return (y = (m = i[O]) == null ? void 0 : m.computed(d, u)) == null ? void 0 : y.value;
            }), v = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, _ = /var\([^)]+\)/g;
            c = A(p.replace(_, "0"), v) ? `calc(${p})` : p;
          }
          return de(u.binding) && delete u.binding, {
            colorScheme: d,
            path: this.path,
            paths: u,
            value: c.includes("undefined") ? void 0 : c
          };
        }
      }));
    }), i;
  },
  getTokenValue(t, e, n) {
    var r;
    const s = ((a) => a.split(".").filter((u) => !A(u.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(e), l = e.includes("colorScheme.light") ? "light" : e.includes("colorScheme.dark") ? "dark" : void 0, o = [(r = t[s]) == null ? void 0 : r.computed(l)].flat().filter((a) => a);
    return o.length === 1 ? o[0].value : o.reduce((a = {}, d) => {
      const u = d, { colorScheme: f } = u, c = F(u, ["colorScheme"]);
      return a[f] = c, a;
    }, void 0);
  },
  transformCSS(t, e, n, r, i = {}, s, l, o) {
    if (T(e)) {
      const { cssLayer: a } = i;
      if (r !== "style") {
        const d = this.getColorSchemeOption(i, l), u = o ? G(o, e) : e;
        e = n === "dark" ? d.reduce((f, { selector: c }) => (T(c) && (f += c.includes("[CSS]") ? c.replace("[CSS]", u) : G(c, u)), f), "") : G(o ?? ":root", e);
      }
      if (a) {
        const d = {
          name: "primeui",
          order: "primeui"
        };
        I(a) && (d.name = L(a.name, { name: t, type: r })), T(d.name) && (e = G(`@layer ${d.name}`, e), s == null || s.layerNames(d.name));
      }
      return e;
    }
    return "";
  }
}, P = {
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
  update(t = {}) {
    const { theme: e } = t;
    e && (this._theme = ye(z({}, e), {
      options: z(z({}, this.defaults.options), e.options)
    }), this._tokens = C.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var t;
    return ((t = this.theme) == null ? void 0 : t.preset) || {};
  },
  get options() {
    var t;
    return ((t = this.theme) == null ? void 0 : t.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(t) {
    this.update({ theme: t }), N.emit("theme:change", t);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(t) {
    this._theme = ye(z({}, this.theme), { preset: t }), this._tokens = C.createTokens(t, this.defaults), this.clearLoadedStyleNames(), N.emit("preset:change", t), N.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(t) {
    this._theme = ye(z({}, this.theme), { options: t }), this.clearLoadedStyleNames(), N.emit("options:change", t), N.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(t) {
    this._layerNames.add(t);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(t) {
    return this._loadedStyleNames.has(t);
  },
  setLoadedStyleName(t) {
    this._loadedStyleNames.add(t);
  },
  deleteLoadedStyleName(t) {
    this._loadedStyleNames.delete(t);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(t) {
    return C.getTokenValue(this.tokens, t, this.defaults);
  },
  getCommon(t = "", e) {
    return C.getCommon({ name: t, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(t = "", e) {
    const n = { name: t, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return C.getPresetC(n);
  },
  getDirective(t = "", e) {
    const n = { name: t, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return C.getPresetD(n);
  },
  getCustomPreset(t = "", e, n, r) {
    const i = { name: t, preset: e, options: this.options, selector: n, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return C.getPreset(i);
  },
  getLayerOrderCSS(t = "") {
    return C.getLayerOrder(t, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(t = "", e, n = "style", r) {
    return C.transformCSS(t, e, r, n, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(t = "", e, n = {}) {
    return C.getCommonStyleSheet({ name: t, theme: this.theme, params: e, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(t, e, n = {}) {
    return C.getStyleSheet({ name: t, theme: this.theme, params: e, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(t) {
    this._loadingStyles.add(t);
  },
  onStyleUpdated(t) {
    this._loadingStyles.add(t);
  },
  onStyleLoaded(t, { name: e }) {
    this._loadingStyles.size && (this._loadingStyles.delete(e), N.emit(`theme:${e}:load`, t), !this._loadingStyles.size && N.emit("theme:load"));
  }
};
function kt(t, e) {
  return t ? t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) : !1;
}
function Ct(t, e) {
  if (t && e) {
    const n = (r) => {
      kt(t, r) || (t.classList ? t.classList.add(r) : t.className += " " + r);
    };
    [e].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function _e(t, e) {
  if (t && e) {
    const n = (r) => {
      t.classList ? t.classList.remove(r) : t.className = t.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function jt() {
  let t = window, e = document, n = e.documentElement, r = e.getElementsByTagName("body")[0], i = t.innerWidth || n.clientWidth || r.clientWidth, s = t.innerHeight || n.clientHeight || r.clientHeight;
  return { width: i, height: s };
}
function xt(t, e) {
  t && (typeof e == "string" ? t.style.cssText = e : Object.entries(e || {}).forEach(([n, r]) => t.style[n] = r));
}
function ot(t, e) {
  return t instanceof HTMLElement ? t.offsetWidth : 0;
}
function ce(t) {
  return typeof HTMLElement == "object" ? t instanceof HTMLElement : t && typeof t == "object" && t !== null && t.nodeType === 1 && typeof t.nodeName == "string";
}
var Se = void 0;
function Ee(t) {
  {
    if (Se != null) return Se;
    let e = document.createElement("div");
    xt(e, {
      width: "100px",
      height: "100px",
      overflow: "scroll",
      position: "absolute",
      top: "-9999px"
    }), document.body.appendChild(e);
    let n = e.offsetWidth - e.clientWidth;
    return document.body.removeChild(e), Se = n, n;
  }
}
function ue(t, e = {}) {
  if (ce(t)) {
    const n = (r, i) => {
      var s, l;
      const o = (s = t == null ? void 0 : t.$attrs) != null && s[r] ? [(l = t == null ? void 0 : t.$attrs) == null ? void 0 : l[r]] : [];
      return [i].flat().reduce((a, d) => {
        if (d != null) {
          const u = typeof d;
          if (u === "string" || u === "number")
            a.push(d);
          else if (u === "object") {
            const f = Array.isArray(d) ? n(r, d) : Object.entries(d).map(([c, h]) => r === "style" && (h || h === 0) ? `${c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${h}` : h ? c : void 0);
            a = f.length ? a.concat(f.filter((c) => !!c)) : a;
          }
        }
        return a;
      }, o);
    };
    Object.entries(e).forEach(([r, i]) => {
      if (i != null) {
        const s = r.match(/^on(.+)/);
        s ? t.addEventListener(s[1].toLowerCase(), i) : r === "p-bind" ? ue(t, i) : (i = r === "class" ? [...new Set(n("class", i))].join(" ").trim() : r === "style" ? n("style", i).join(";").trim() : i, (t.$attrs = t.$attrs || {}) && (t.$attrs[r] = i), t.setAttribute(r, i));
      }
    });
  }
}
function Lt(t, e = {}, ...n) {
  {
    const r = document.createElement(t);
    return ue(r, e), r.append(...n), r;
  }
}
function Nt(t, e) {
  return ce(t) ? t.matches(e) ? t : t.querySelector(e) : null;
}
function Dn(t, e) {
  t && document.activeElement !== t && t.focus(e);
}
function At(t, e) {
  if (ce(t)) {
    const n = t.getAttribute(e);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function Ve(t) {
  if (t) {
    let e = t.offsetHeight, n = getComputedStyle(t);
    return e -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), e;
  }
  return 0;
}
function In(t) {
  if (t) {
    t.style.visibility = "hidden", t.style.display = "block";
    let e = t.offsetHeight;
    return t.style.display = "none", t.style.visibility = "visible", e;
  }
  return 0;
}
function Et(t) {
  if (t) {
    t.style.visibility = "hidden", t.style.display = "block";
    let e = t.offsetWidth;
    return t.style.display = "none", t.style.visibility = "visible", e;
  }
  return 0;
}
function Vt(t) {
  if (t) {
    let e = t.parentNode;
    return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
  }
  return null;
}
function at(t) {
  if (t) {
    let e = t.getBoundingClientRect();
    return {
      top: e.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: e.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function Dt(t, e) {
  return t ? t.offsetHeight : 0;
}
function It(t) {
  return !!(t !== null && typeof t < "u" && t.nodeName && Vt(t));
}
function De(t) {
  if (t) {
    let e = t.offsetWidth, n = getComputedStyle(t);
    return e -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), e;
  }
  return 0;
}
function Rt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Rn() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function Un(t, e) {
  var n;
  if (t) {
    const r = t.parentElement, i = at(r), s = jt(), l = t.offsetParent ? t.offsetWidth : Et(t), o = ot((n = r == null ? void 0 : r.children) == null ? void 0 : n[0]);
    let a = "";
    i.left + o + l > s.width - Ee() ? i.left < l ? e % 2 === 1 ? a = i.left ? "-" + i.left + "px" : "100%" : e % 2 === 0 && (a = s.width - l - Ee() + "px") : a = "-100%" : a = "100%", t.style.top = "0px", t.style.left = a;
  }
}
function Ut(t, e = "", n) {
  ce(t) && n !== null && n !== void 0 && t.setAttribute(e, n);
}
var D = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName: function(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName: function(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
};
function Z(t) {
  "@babel/helpers - typeof";
  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Z(t);
}
function Ie(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Re(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ie(Object(n), !0).forEach(function(r) {
      Wt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Wt(t, e, n) {
  return (e = Bt(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Bt(t) {
  var e = Mt(t, "string");
  return Z(e) == "symbol" ? e : e + "";
}
function Mt(t, e) {
  if (Z(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (Z(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Ht(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  mt() ? pt(t) : e ? t() : ht(t);
}
var Kt = 0;
function zt(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = ge(!1), r = ge(t), i = ge(null), s = Rt() ? window.document : void 0, l = e.document, o = l === void 0 ? s : l, a = e.immediate, d = a === void 0 ? !0 : a, u = e.manual, f = u === void 0 ? !1 : u, c = e.name, h = c === void 0 ? "style_".concat(++Kt) : c, p = e.id, v = p === void 0 ? void 0 : p, _ = e.media, $ = _ === void 0 ? void 0 : _, m = e.nonce, y = m === void 0 ? void 0 : m, O = e.first, x = O === void 0 ? !1 : O, R = e.onMounted, E = R === void 0 ? void 0 : R, U = e.onUpdated, V = U === void 0 ? void 0 : U, W = e.onLoad, B = W === void 0 ? void 0 : W, M = e.props, fe = M === void 0 ? {} : M, te = function() {
  }, ne = function(pe) {
    var he = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (o) {
      var H = Re(Re({}, fe), he), K = H.name || h, je = H.id || v, ct = H.nonce || y;
      i.value = o.querySelector('style[data-primevue-style-id="'.concat(K, '"]')) || o.getElementById(je) || o.createElement("style"), i.value.isConnected || (r.value = pe || t, ue(i.value, {
        type: "text/css",
        id: je,
        media: $,
        nonce: ct
      }), x ? o.head.prepend(i.value) : o.head.appendChild(i.value), Ut(i.value, "data-primevue-style-id", K), ue(i.value, H), i.value.onload = function(ve) {
        return B == null ? void 0 : B(ve, {
          name: K
        });
      }, E == null || E(K)), !n.value && (te = vt(r, function(ve) {
        i.value.textContent = ve, V == null || V(K);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, me = function() {
    !o || !n.value || (te(), It(i.value) && o.head.removeChild(i.value), n.value = !1);
  };
  return d && !f && Ht(ne), {
    id: v,
    name: h,
    el: i,
    css: r,
    unload: me,
    load: ne,
    isLoaded: ft(n)
  };
}
function q(t) {
  "@babel/helpers - typeof";
  return q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, q(t);
}
function Ue(t, e) {
  return Zt(t) || Yt(t, e) || Gt(t, e) || Ft();
}
function Ft() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gt(t, e) {
  if (t) {
    if (typeof t == "string") return We(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? We(t, e) : void 0;
  }
}
function We(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function Yt(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, i, s, l, o = [], a = !0, d = !1;
    try {
      if (s = (n = n.call(t)).next, e !== 0) for (; !(a = (r = s.call(n)).done) && (o.push(r.value), o.length !== e); a = !0) ;
    } catch (u) {
      d = !0, i = u;
    } finally {
      try {
        if (!a && n.return != null && (l = n.return(), Object(l) !== l)) return;
      } finally {
        if (d) throw i;
      }
    }
    return o;
  }
}
function Zt(t) {
  if (Array.isArray(t)) return t;
}
function Be(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $e(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Be(Object(n), !0).forEach(function(r) {
      qt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Be(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function qt(t, e, n) {
  return (e = Xt(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Xt(t) {
  var e = Jt(t, "string");
  return q(e) == "symbol" ? e : e + "";
}
function Jt(t, e) {
  if (q(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (q(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Qt = function(e) {
  var n = e.dt;
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
    opacity: `.concat(n("disabled.opacity"), `;
}

.pi {
    font-size: `).concat(n("icon.size"), `;
}

.p-icon {
    width: `).concat(n("icon.size"), `;
    height: `).concat(n("icon.size"), `;
}

.p-overlay-mask {
    background: `).concat(n("mask.background"), `;
    color: `).concat(n("mask.color"), `;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(n("mask.transition.duration"), ` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(n("mask.transition.duration"), ` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(n("mask.background"), `;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(n("mask.background"), `;
    }
    to {
        background: transparent;
    }
}
`);
}, en = function(e) {
  var n = e.dt;
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
    padding-right: `.concat(n("scrollbar.width"), `;
}
`);
}, tn = {}, nn = {}, w = {
  name: "base",
  css: en,
  theme: Qt,
  classes: tn,
  inlineStyles: nn,
  load: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(s) {
      return s;
    }, i = r(L(e, {
      dt: be
    }));
    return i ? zt(Y(i), $e({
      name: this.name
    }, n)) : {};
  },
  loadCSS: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, e);
  },
  loadTheme: function() {
    var e = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.theme, n, function(r) {
      return P.transformCSS(n.name || e.name, r);
    });
  },
  getCommonTheme: function(e) {
    return P.getCommon(this.name, e);
  },
  getComponentTheme: function(e) {
    return P.getComponent(this.name, e);
  },
  getDirectiveTheme: function(e) {
    return P.getDirective(this.name, e);
  },
  getPresetTheme: function(e, n, r) {
    return P.getCustomPreset(this.name, e, n, r);
  },
  getLayerOrderThemeCSS: function() {
    return P.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var r = L(this.css, {
        dt: be
      }), i = Y("".concat(r).concat(e)), s = Object.entries(n).reduce(function(l, o) {
        var a = Ue(o, 2), d = a[0], u = a[1];
        return l.push("".concat(d, '="').concat(u, '"')) && l;
      }, []).join(" ");
      return '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(s, ">").concat(i, "</style>");
    }
    return "";
  },
  getCommonThemeStyleSheet: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return P.getCommonStyleSheet(this.name, e, n);
  },
  getThemeStyleSheet: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [P.getStyleSheet(this.name, e, n)];
    if (this.theme) {
      var i = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), s = L(this.theme, {
        dt: be
      }), l = Y(P.transformCSS(i, s)), o = Object.entries(n).reduce(function(a, d) {
        var u = Ue(d, 2), f = u[0], c = u[1];
        return a.push("".concat(f, '="').concat(c, '"')) && a;
      }, []).join(" ");
      r.push('<style type="text/css" data-primevue-style-id="'.concat(i, '" ').concat(o, ">").concat(l, "</style>"));
    }
    return r.join("");
  },
  extend: function(e) {
    return $e($e({}, this), {}, {
      css: void 0,
      theme: void 0
    }, e);
  }
}, ie = {};
function rn(t = "pui_id_") {
  return ie.hasOwnProperty(t) || (ie[t] = 0), ie[t]++, `${t}${ie[t]}`;
}
function st() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pv_id_";
  return rn(t);
}
var Me = w.extend({
  name: "common"
});
function X(t) {
  "@babel/helpers - typeof";
  return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, X(t);
}
function on(t) {
  return dt(t) || an(t) || ut(t) || lt();
}
function an(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function oe(t, e) {
  return dt(t) || sn(t, e) || ut(t, e) || lt();
}
function lt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ut(t, e) {
  if (t) {
    if (typeof t == "string") return He(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? He(t, e) : void 0;
  }
}
function He(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function sn(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, i, s, l, o = [], a = !0, d = !1;
    try {
      if (s = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        a = !1;
      } else for (; !(a = (r = s.call(n)).done) && (o.push(r.value), o.length !== e); a = !0) ;
    } catch (u) {
      d = !0, i = u;
    } finally {
      try {
        if (!a && n.return != null && (l = n.return(), Object(l) !== l)) return;
      } finally {
        if (d) throw i;
      }
    }
    return o;
  }
}
function dt(t) {
  if (Array.isArray(t)) return t;
}
function Ke(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function b(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ke(Object(n), !0).forEach(function(r) {
      se(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ke(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function se(t, e, n) {
  return (e = ln(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ln(t) {
  var e = un(t, "string");
  return X(e) == "symbol" ? e : e + "";
}
function un(t, e) {
  if (X(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (X(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var dn = {
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
      handler: function(e) {
        e || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(e) {
        var n = this;
        e ? (this._loadScopedThemeStyles(e), this._themeChangeListener(function() {
          return n._loadScopedThemeStyles(e);
        })) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  beforeCreate: function() {
    var e, n, r, i, s, l, o, a, d, u, f, c = (e = this.pt) === null || e === void 0 ? void 0 : e._usept, h = c ? (n = this.pt) === null || n === void 0 || (n = n.originalValue) === null || n === void 0 ? void 0 : n[this.$.type.name] : void 0, p = c ? (r = this.pt) === null || r === void 0 || (r = r.value) === null || r === void 0 ? void 0 : r[this.$.type.name] : this.pt;
    (i = p || h) === null || i === void 0 || (i = i.hooks) === null || i === void 0 || (s = i.onBeforeCreate) === null || s === void 0 || s.call(i);
    var v = (l = this.$primevueConfig) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l._usept, _ = v ? (o = this.$primevue) === null || o === void 0 || (o = o.config) === null || o === void 0 || (o = o.pt) === null || o === void 0 ? void 0 : o.originalValue : void 0, $ = v ? (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a.value : (d = this.$primevue) === null || d === void 0 || (d = d.config) === null || d === void 0 ? void 0 : d.pt;
    (u = $ || _) === null || u === void 0 || (u = u[this.$.type.name]) === null || u === void 0 || (u = u.hooks) === null || u === void 0 || (f = u.onBeforeCreate) === null || f === void 0 || f.call(u);
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this.rootEl = Nt(this.$el, '[data-pc-name="'.concat(j(this.$.type.name), '"]')), this.rootEl && (this.rootEl.setAttribute(this.$attrSelector, ""), this.rootEl.$pc = b({
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
    _hook: function(e) {
      if (!this.$options.hostName) {
        var n = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(e)), r = this._useDefaultPT(this._getOptionValue, "hooks.".concat(e));
        n == null || n(), r == null || r();
      }
    },
    _mergeProps: function(e) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
        r[i - 1] = arguments[i];
      return we(e) ? e.apply(void 0, r) : ae.apply(void 0, r);
    },
    _loadStyles: function() {
      var e = this, n = function() {
        D.isStyleNameLoaded("base") || (w.loadCSS(e.$styleOptions), e._loadGlobalStyles(), D.setLoadedStyleName("base")), e._loadThemeStyles();
      };
      n(), this._themeChangeListener(n);
    },
    _loadCoreStyles: function() {
      var e, n;
      !D.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (n = this.$style) !== null && n !== void 0 && n.name && (Me.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), D.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var e = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      T(e) && w.load(e, b({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var e, n;
      if (!this.isUnstyled) {
        if (!P.isStyleNameLoaded("common")) {
          var r, i, s = ((r = this.$style) === null || r === void 0 || (i = r.getCommonTheme) === null || i === void 0 ? void 0 : i.call(r)) || {}, l = s.primitive, o = s.semantic;
          w.load(l == null ? void 0 : l.css, b({
            name: "primitive-variables"
          }, this.$styleOptions)), w.load(o == null ? void 0 : o.css, b({
            name: "semantic-variables"
          }, this.$styleOptions)), w.loadTheme(b({
            name: "global-style"
          }, this.$styleOptions)), P.setLoadedStyleName("common");
        }
        if (!P.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (n = this.$style) !== null && n !== void 0 && n.name) {
          var a, d, u, f, c = ((a = this.$style) === null || a === void 0 || (d = a.getComponentTheme) === null || d === void 0 ? void 0 : d.call(a)) || {}, h = c.css;
          (u = this.$style) === null || u === void 0 || u.load(h, b({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (f = this.$style) === null || f === void 0 || f.loadTheme(b({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions)), P.setLoadedStyleName(this.$style.name);
        }
        if (!P.isStyleNameLoaded("layer-order")) {
          var p, v, _ = (p = this.$style) === null || p === void 0 || (v = p.getLayerOrderThemeCSS) === null || v === void 0 ? void 0 : v.call(p);
          w.load(_, b({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), P.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(e) {
      var n, r, i, s = ((n = this.$style) === null || n === void 0 || (r = n.getPresetTheme) === null || r === void 0 ? void 0 : r.call(n, e, "[".concat(this.$attrSelector, "]"))) || {}, l = s.css, o = (i = this.$style) === null || i === void 0 ? void 0 : i.load(l, b({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = o.el;
    },
    _unloadScopedThemeStyles: function() {
      var e;
      (e = this.scopedStyleEl) === null || e === void 0 || (e = e.value) === null || e === void 0 || e.remove();
    },
    _themeChangeListener: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      D.clearLoadedStyleNames(), N.on("theme:change", e);
    },
    _getHostInstance: function(e) {
      return e ? this.$options.hostName ? e.$.type.name === this.$options.hostName ? e : this._getHostInstance(e.$parentInstance) : e.$parentInstance : void 0;
    },
    _getPropValue: function(e) {
      var n;
      return this[e] || ((n = this._getHostInstance(this)) === null || n === void 0 ? void 0 : n[e]);
    },
    _getOptionValue: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return ke(e, n, r);
    },
    _getPTValue: function() {
      var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, l = /./g.test(r) && !!i[r.split(".")[0]], o = this._getPropValue("ptOptions") || ((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.ptOptions) || {}, a = o.mergeSections, d = a === void 0 ? !0 : a, u = o.mergeProps, f = u === void 0 ? !1 : u, c = s ? l ? this._useGlobalPT(this._getPTClassValue, r, i) : this._useDefaultPT(this._getPTClassValue, r, i) : void 0, h = l ? void 0 : this._getPTSelf(n, this._getPTClassValue, r, b(b({}, i), {}, {
        global: c || {}
      })), p = this._getPTDatasets(r);
      return d || !d && h ? f ? this._mergeProps(f, c, h, p) : b(b(b({}, c), h), p) : b(b({}, h), p);
    },
    _getPTSelf: function() {
      for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
        r[i - 1] = arguments[i];
      return ae(
        this._usePT.apply(this, [this._getPT(e, this.$name)].concat(r)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(r))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var e, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", i = "data-pc-", s = r === "root" && T((e = this.pt) === null || e === void 0 ? void 0 : e["data-pc-section"]);
      return r !== "transition" && b(b({}, r === "root" && b(se({}, "".concat(i, "name"), j(s ? (n = this.pt) === null || n === void 0 ? void 0 : n["data-pc-section"] : this.$.type.name)), s && se({}, "".concat(i, "extend"), j(this.$.type.name)))), {}, se({}, "".concat(i, "section"), j(r)));
    },
    _getPTClassValue: function() {
      var e = this._getOptionValue.apply(this, arguments);
      return k(e) || Ce(e) ? {
        class: e
      } : e;
    },
    _getPT: function(e) {
      var n = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", i = arguments.length > 2 ? arguments[2] : void 0, s = function(o) {
        var a, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = i ? i(o) : o, f = j(r), c = j(n.$name);
        return (a = d ? f !== c ? u == null ? void 0 : u[f] : void 0 : u == null ? void 0 : u[f]) !== null && a !== void 0 ? a : u;
      };
      return e != null && e.hasOwnProperty("_usept") ? {
        _usept: e._usept,
        originalValue: s(e.originalValue),
        value: s(e.value)
      } : s(e, !0);
    },
    _usePT: function(e, n, r, i) {
      var s = function(v) {
        return n(v, r, i);
      };
      if (e != null && e.hasOwnProperty("_usept")) {
        var l, o = e._usept || ((l = this.$primevueConfig) === null || l === void 0 ? void 0 : l.ptOptions) || {}, a = o.mergeSections, d = a === void 0 ? !0 : a, u = o.mergeProps, f = u === void 0 ? !1 : u, c = s(e.originalValue), h = s(e.value);
        return c === void 0 && h === void 0 ? void 0 : k(h) ? h : k(c) ? c : d || !d && h ? f ? this._mergeProps(f, c, h) : b(b({}, c), h) : h;
      }
      return s(e);
    },
    _useGlobalPT: function(e, n, r) {
      return this._usePT(this.globalPT, e, n, r);
    },
    _useDefaultPT: function(e, n, r) {
      return this._usePT(this.defaultPT, e, n, r);
    },
    ptm: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, e, b(b({}, this.$params), n));
    },
    ptmi: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return ae(this.$_attrsWithoutPT, this.ptm(e, n));
    },
    ptmo: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(e, n, b({
        instance: this
      }, r), !1);
    },
    cx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, e, b(b({}, this.$params), n));
    },
    sx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (n) {
        var i = this._getOptionValue(this.$style.inlineStyles, e, b(b({}, this.$params), r)), s = this._getOptionValue(Me.inlineStyles, e, b(b({}, this.$params), r));
        return [s, i];
      }
    }
  },
  computed: {
    globalPT: function() {
      var e, n = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(r) {
        return L(r, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var e, n = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(r) {
        return n._getOptionValue(r, n.$name, b({}, n.$params)) || L(r, b({}, n.$params));
      });
    },
    isUnstyled: function() {
      var e;
      return this.unstyled !== void 0 ? this.unstyled : (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.unstyled;
    },
    $theme: function() {
      var e;
      return (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.theme;
    },
    $style: function() {
      return b(b({
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
      var e;
      return {
        nonce: (e = this.$primevueConfig) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce
      };
    },
    $primevueConfig: function() {
      var e;
      return (e = this.$primevue) === null || e === void 0 ? void 0 : e.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var e = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: e,
          props: e == null ? void 0 : e.$props,
          state: e == null ? void 0 : e.$data,
          attrs: e == null ? void 0 : e.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var n = oe(e, 1), r = n[0];
        return r == null ? void 0 : r.startsWith("pt:");
      }).reduce(function(e, n) {
        var r = oe(n, 2), i = r[0], s = r[1], l = i.split(":"), o = on(l), a = o.slice(1);
        return a == null || a.reduce(function(d, u, f, c) {
          return !d[u] && (d[u] = f === c.length - 1 ? s : {}), d[u];
        }, e), e;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var n = oe(e, 1), r = n[0];
        return !(r != null && r.startsWith("pt:"));
      }).reduce(function(e, n) {
        var r = oe(n, 2), i = r[0], s = r[1];
        return e[i] = s, e;
      }, {});
    },
    $attrSelector: function() {
      return st("pc");
    }
  }
}, cn = `
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
`, fn = w.extend({
  name: "baseicon",
  css: cn
});
function J(t) {
  "@babel/helpers - typeof";
  return J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, J(t);
}
function ze(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Fe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ze(Object(n), !0).forEach(function(r) {
      mn(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ze(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function mn(t, e, n) {
  return (e = pn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function pn(t) {
  var e = hn(t, "string");
  return J(e) == "symbol" ? e : e + "";
}
function hn(t, e) {
  if (J(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (J(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Wn = {
  name: "BaseIcon",
  extends: dn,
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
  style: fn,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var e = de(this.label);
      return Fe(Fe({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: e ? void 0 : "img",
        "aria-label": e ? void 0 : this.label,
        "aria-hidden": e
      });
    }
  }
}, Ge = et();
function Q(t) {
  "@babel/helpers - typeof";
  return Q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Q(t);
}
function Ye(t, e) {
  return bn(t) || yn(t, e) || gn(t, e) || vn();
}
function vn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gn(t, e) {
  if (t) {
    if (typeof t == "string") return Ze(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ze(t, e) : void 0;
  }
}
function Ze(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function yn(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, i, s, l, o = [], a = !0, d = !1;
    try {
      if (s = (n = n.call(t)).next, e !== 0) for (; !(a = (r = s.call(n)).done) && (o.push(r.value), o.length !== e); a = !0) ;
    } catch (u) {
      d = !0, i = u;
    } finally {
      try {
        if (!a && n.return != null && (l = n.return(), Object(l) !== l)) return;
      } finally {
        if (d) throw i;
      }
    }
    return o;
  }
}
function bn(t) {
  if (Array.isArray(t)) return t;
}
function qe(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function S(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qe(Object(n), !0).forEach(function(r) {
      Oe(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qe(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Oe(t, e, n) {
  return (e = _n(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function _n(t) {
  var e = Sn(t, "string");
  return Q(e) == "symbol" ? e : e + "";
}
function Sn(t, e) {
  if (Q(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (Q(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var g = {
  _getMeta: function() {
    return [I(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], L(I(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(e, n) {
    var r, i, s;
    return (r = (e == null || (i = e.instance) === null || i === void 0 ? void 0 : i.$primevue) || (n == null || (s = n.ctx) === null || s === void 0 || (s = s.appContext) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.globalProperties) === null || s === void 0 ? void 0 : s.$primevue)) === null || r === void 0 ? void 0 : r.config;
  },
  _getOptionValue: ke,
  _getPTValue: function() {
    var e, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = function() {
      var m = g._getOptionValue.apply(g, arguments);
      return k(m) || Ce(m) ? {
        class: m
      } : m;
    }, d = ((e = r.binding) === null || e === void 0 || (e = e.value) === null || e === void 0 ? void 0 : e.ptOptions) || ((n = r.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, u = d.mergeSections, f = u === void 0 ? !0 : u, c = d.mergeProps, h = c === void 0 ? !1 : c, p = o ? g._useDefaultPT(r, r.defaultPT(), a, s, l) : void 0, v = g._usePT(r, g._getPT(i, r.$name), a, s, S(S({}, l), {}, {
      global: p || {}
    })), _ = g._getPTDatasets(r, s);
    return f || !f && v ? h ? g._mergeProps(r, h, p, v, _) : S(S(S({}, p), v), _) : S(S({}, v), _);
  },
  _getPTDatasets: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = "data-pc-";
    return S(S({}, n === "root" && Oe({}, "".concat(r, "name"), j(e.$name))), {}, Oe({}, "".concat(r, "section"), j(n)));
  },
  _getPT: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, i = function(l) {
      var o, a = r ? r(l) : l, d = j(n);
      return (o = a == null ? void 0 : a[d]) !== null && o !== void 0 ? o : a;
    };
    return e != null && e.hasOwnProperty("_usept") ? {
      _usept: e._usept,
      originalValue: i(e.originalValue),
      value: i(e.value)
    } : i(e);
  },
  _usePT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0, l = function(_) {
      return r(_, i, s);
    };
    if (n != null && n.hasOwnProperty("_usept")) {
      var o, a = n._usept || ((o = e.$primevueConfig) === null || o === void 0 ? void 0 : o.ptOptions) || {}, d = a.mergeSections, u = d === void 0 ? !0 : d, f = a.mergeProps, c = f === void 0 ? !1 : f, h = l(n.originalValue), p = l(n.value);
      return h === void 0 && p === void 0 ? void 0 : k(p) ? p : k(h) ? h : u || !u && p ? c ? g._mergeProps(e, c, h, p) : S(S({}, h), p) : p;
    }
    return l(n);
  },
  _useDefaultPT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0;
    return g._usePT(e, n, r, i, s);
  },
  _loadStyles: function(e, n, r) {
    var i, s = g._getConfig(n, r), l = {
      nonce: s == null || (i = s.csp) === null || i === void 0 ? void 0 : i.nonce
    };
    g._loadCoreStyles(e.$instance, l), g._loadThemeStyles(e.$instance, l), g._loadScopedThemeStyles(e.$instance, l), g._themeChangeListener(function() {
      return g._loadThemeStyles(e.$instance, l);
    });
  },
  _loadCoreStyles: function() {
    var e, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (!D.isStyleNameLoaded((e = r.$style) === null || e === void 0 ? void 0 : e.name) && (n = r.$style) !== null && n !== void 0 && n.name) {
      var s;
      w.loadCSS(i), r.isUnstyled() && ((s = r.$style) === null || s === void 0 || s.loadCSS(i)), D.setLoadedStyleName(r.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var e, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (!(r != null && r.isUnstyled())) {
      if (!P.isStyleNameLoaded("common")) {
        var s, l, o = ((s = r.$style) === null || s === void 0 || (l = s.getCommonTheme) === null || l === void 0 ? void 0 : l.call(s)) || {}, a = o.primitive, d = o.semantic;
        w.load(a == null ? void 0 : a.css, S({
          name: "primitive-variables"
        }, i)), w.load(d == null ? void 0 : d.css, S({
          name: "semantic-variables"
        }, i)), w.loadTheme(S({
          name: "global-style"
        }, i)), P.setLoadedStyleName("common");
      }
      if (!P.isStyleNameLoaded((e = r.$style) === null || e === void 0 ? void 0 : e.name) && (n = r.$style) !== null && n !== void 0 && n.name) {
        var u, f, c, h, p = ((u = r.$style) === null || u === void 0 || (f = u.getDirectiveTheme) === null || f === void 0 ? void 0 : f.call(u)) || {}, v = p.css;
        (c = r.$style) === null || c === void 0 || c.load(v, S({
          name: "".concat(r.$style.name, "-variables")
        }, i)), (h = r.$style) === null || h === void 0 || h.loadTheme(S({
          name: "".concat(r.$style.name, "-style")
        }, i)), P.setLoadedStyleName(r.$style.name);
      }
      if (!P.isStyleNameLoaded("layer-order")) {
        var _, $, m = (_ = r.$style) === null || _ === void 0 || ($ = _.getLayerOrderThemeCSS) === null || $ === void 0 ? void 0 : $.call(_);
        w.load(m, S({
          name: "layer-order",
          first: !0
        }, i)), P.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = e.preset();
    if (r && e.$attrSelector) {
      var i, s, l, o = ((i = e.$style) === null || i === void 0 || (s = i.getPresetTheme) === null || s === void 0 ? void 0 : s.call(i, r, "[".concat(e.$attrSelector, "]"))) || {}, a = o.css, d = (l = e.$style) === null || l === void 0 ? void 0 : l.load(a, S({
        name: "".concat(e.$attrSelector, "-").concat(e.$style.name)
      }, n));
      e.scopedStyleEl = d.el;
    }
  },
  _themeChangeListener: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    D.clearLoadedStyleNames(), N.on("theme:change", e);
  },
  _hook: function(e, n, r, i, s, l) {
    var o, a, d = "on".concat(gt(n)), u = g._getConfig(i, s), f = r == null ? void 0 : r.$instance, c = g._usePT(f, g._getPT(i == null || (o = i.value) === null || o === void 0 ? void 0 : o.pt, e), g._getOptionValue, "hooks.".concat(d)), h = g._useDefaultPT(f, u == null || (a = u.pt) === null || a === void 0 || (a = a.directives) === null || a === void 0 ? void 0 : a[e], g._getOptionValue, "hooks.".concat(d)), p = {
      el: r,
      binding: i,
      vnode: s,
      prevVnode: l
    };
    c == null || c(f, p), h == null || h(f, p);
  },
  _mergeProps: function() {
    for (var e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
      r[i - 2] = arguments[i];
    return we(e) ? e.apply(void 0, r) : ae.apply(void 0, r);
  },
  _extend: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = function(l, o, a, d, u) {
      var f, c, h;
      o._$instances = o._$instances || {};
      var p = g._getConfig(a, d), v = o._$instances[e] || {}, _ = de(v) ? S(S({}, n), n == null ? void 0 : n.methods) : {};
      o._$instances[e] = S(S({}, v), {}, {
        /* new instance variables to pass in directive methods */
        $name: e,
        $host: o,
        $binding: a,
        $modifiers: a == null ? void 0 : a.modifiers,
        $value: a == null ? void 0 : a.value,
        $el: v.$el || o || void 0,
        $style: S({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadTheme: function() {
          }
        }, n == null ? void 0 : n.style),
        $primevueConfig: p,
        $attrSelector: o.$attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return g._getPT(p == null ? void 0 : p.pt, void 0, function(m) {
            var y;
            return m == null || (y = m.directives) === null || y === void 0 ? void 0 : y[e];
          });
        },
        isUnstyled: function() {
          var m, y;
          return ((m = o.$instance) === null || m === void 0 || (m = m.$binding) === null || m === void 0 || (m = m.value) === null || m === void 0 ? void 0 : m.unstyled) !== void 0 ? (y = o.$instance) === null || y === void 0 || (y = y.$binding) === null || y === void 0 || (y = y.value) === null || y === void 0 ? void 0 : y.unstyled : p == null ? void 0 : p.unstyled;
        },
        theme: function() {
          var m;
          return (m = o.$instance) === null || m === void 0 || (m = m.$primevueConfig) === null || m === void 0 ? void 0 : m.theme;
        },
        preset: function() {
          var m;
          return (m = o.$instance) === null || m === void 0 || (m = m.$binding) === null || m === void 0 || (m = m.value) === null || m === void 0 ? void 0 : m.dt;
        },
        /* instance's methods */
        ptm: function() {
          var m, y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return g._getPTValue(o.$instance, (m = o.$instance) === null || m === void 0 || (m = m.$binding) === null || m === void 0 || (m = m.value) === null || m === void 0 ? void 0 : m.pt, y, S({}, O));
        },
        ptmo: function() {
          var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return g._getPTValue(o.$instance, m, y, O, !1);
        },
        cx: function() {
          var m, y, O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (m = o.$instance) !== null && m !== void 0 && m.isUnstyled() ? void 0 : g._getOptionValue((y = o.$instance) === null || y === void 0 || (y = y.$style) === null || y === void 0 ? void 0 : y.classes, O, S({}, x));
        },
        sx: function() {
          var m, y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return O ? g._getOptionValue((m = o.$instance) === null || m === void 0 || (m = m.$style) === null || m === void 0 ? void 0 : m.inlineStyles, y, S({}, x)) : void 0;
        }
      }, _), o.$instance = o._$instances[e], (f = (c = o.$instance)[l]) === null || f === void 0 || f.call(c, o, a, d, u), o["$".concat(e)] = o.$instance, g._hook(e, l, o, a, d, u), o.$pd || (o.$pd = {}), o.$pd[e] = S(S({}, (h = o.$pd) === null || h === void 0 ? void 0 : h[e]), {}, {
        name: e,
        instance: o.$instance
      });
    }, i = function(l) {
      var o, a, d, u, f, c = (o = l.$instance) === null || o === void 0 ? void 0 : o.watch;
      c == null || (a = c.config) === null || a === void 0 || a.call(l.$instance, (d = l.$instance) === null || d === void 0 ? void 0 : d.$primevueConfig), Ge.on("config:change", function(h) {
        var p, v = h.newValue, _ = h.oldValue;
        return c == null || (p = c.config) === null || p === void 0 ? void 0 : p.call(l.$instance, v, _);
      }), c == null || (u = c["config.ripple"]) === null || u === void 0 || u.call(l.$instance, (f = l.$instance) === null || f === void 0 || (f = f.$primevueConfig) === null || f === void 0 ? void 0 : f.ripple), Ge.on("config:ripple:change", function(h) {
        var p, v = h.newValue, _ = h.oldValue;
        return c == null || (p = c["config.ripple"]) === null || p === void 0 ? void 0 : p.call(l.$instance, v, _);
      });
    };
    return {
      created: function(l, o, a, d) {
        r("created", l, o, a, d);
      },
      beforeMount: function(l, o, a, d) {
        l.$attrSelector = st("pd"), g._loadStyles(l, o, a), r("beforeMount", l, o, a, d), i(l);
      },
      mounted: function(l, o, a, d) {
        g._loadStyles(l, o, a), r("mounted", l, o, a, d);
      },
      beforeUpdate: function(l, o, a, d) {
        r("beforeUpdate", l, o, a, d);
      },
      updated: function(l, o, a, d) {
        g._loadStyles(l, o, a), r("updated", l, o, a, d);
      },
      beforeUnmount: function(l, o, a, d) {
        r("beforeUnmount", l, o, a, d);
      },
      unmounted: function(l, o, a, d) {
        var u;
        (u = l.$instance) === null || u === void 0 || (u = u.scopedStyleEl) === null || u === void 0 || (u = u.value) === null || u === void 0 || u.remove(), r("unmounted", l, o, a, d);
      }
    };
  },
  extend: function() {
    var e = g._getMeta.apply(g, arguments), n = Ye(e, 2), r = n[0], i = n[1];
    return S({
      extend: function() {
        var l = g._getMeta.apply(g, arguments), o = Ye(l, 2), a = o[0], d = o[1];
        return g.extend(a, S(S(S({}, i), i == null ? void 0 : i.methods), d));
      }
    }, g._extend(r, i));
  }
}, $n = function(e) {
  var n = e.dt;
  return `
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(n("ripple.background"), `;
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
}, Pn = {
  root: "p-ink"
}, On = w.extend({
  name: "ripple-directive",
  theme: $n,
  classes: Pn
}), Tn = g.extend({
  style: On
});
function ee(t) {
  "@babel/helpers - typeof";
  return ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ee(t);
}
function wn(t) {
  return xn(t) || jn(t) || Cn(t) || kn();
}
function kn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cn(t, e) {
  if (t) {
    if (typeof t == "string") return Te(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Te(t, e) : void 0;
  }
}
function jn(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function xn(t) {
  if (Array.isArray(t)) return Te(t);
}
function Te(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function Xe(t, e, n) {
  return (e = Ln(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Ln(t) {
  var e = Nn(t, "string");
  return ee(e) == "symbol" ? e : e + "";
}
function Nn(t, e) {
  if (ee(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (ee(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Bn = Tn.extend("ripple", {
  watch: {
    "config.ripple": function(e) {
      e ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(e) {
    this.remove(e);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(e) {
      e.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(e) {
      e.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(e) {
      var n = Lt("span", Xe(Xe({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root")));
      e.appendChild(n), this.$el = n;
    },
    remove: function(e) {
      var n = this.getInk(e);
      n && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(e), n.removeEventListener("animationend", this.onAnimationEnd), n.remove());
    },
    onMouseDown: function(e) {
      var n = this, r = e.currentTarget, i = this.getInk(r);
      if (!(!i || getComputedStyle(i, null).display === "none")) {
        if (!this.isUnstyled() && _e(i, "p-ink-active"), i.setAttribute("data-p-ink-active", "false"), !Ve(i) && !De(i)) {
          var s = Math.max(ot(r), Dt(r));
          i.style.height = s + "px", i.style.width = s + "px";
        }
        var l = at(r), o = e.pageX - l.left + document.body.scrollTop - De(i) / 2, a = e.pageY - l.top + document.body.scrollLeft - Ve(i) / 2;
        i.style.top = a + "px", i.style.left = o + "px", !this.isUnstyled() && Ct(i, "p-ink-active"), i.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          i && (!n.isUnstyled() && _e(i, "p-ink-active"), i.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(e) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && _e(e.currentTarget, "p-ink-active"), e.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(e) {
      return e && e.children ? wn(e.children).find(function(n) {
        return At(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
});
export {
  w as B,
  Bn as R,
  st as U,
  de as a,
  dn as b,
  Rt as c,
  Vn as d,
  Nt as e,
  Dn as f,
  xt as g,
  Et as h,
  T as i,
  In as j,
  jt as k,
  Rn as l,
  En as m,
  Un as n,
  L as r,
  Wn as s
};
