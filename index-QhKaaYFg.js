import { ref as ie, readonly as ze, getCurrentInstance as Ke, onMounted as qe, nextTick as Me, watch as Ye } from "vue";
var Xe = Object.defineProperty, ge = Object.getOwnPropertySymbols, Qe = Object.prototype.hasOwnProperty, Ze = Object.prototype.propertyIsEnumerable, ye = (e, t, n) => t in e ? Xe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ge = (e, t) => {
  for (var n in t || (t = {}))
    Qe.call(t, n) && ye(e, n, t[n]);
  if (ge)
    for (var n of ge(t))
      Ze.call(t, n) && ye(e, n, t[n]);
  return e;
};
function V(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function Je(e, t, n, r = 1) {
  let o = -1;
  const i = V(e), s = V(t);
  return i && s ? o = 0 : i ? o = r : s ? o = -r : typeof e == "string" && typeof t == "string" ? o = n(e, t) : o = e < t ? -1 : e > t ? 1 : 0, o;
}
function ue(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    var n = Array.isArray(e), r = Array.isArray(t), o, i, s;
    if (n && r) {
      if (i = e.length, i != t.length) return !1;
      for (o = i; o-- !== 0; ) if (!ue(e[o], t[o])) return !1;
      return !0;
    }
    if (n != r) return !1;
    var c = e instanceof Date, a = t instanceof Date;
    if (c != a) return !1;
    if (c && a) return e.getTime() == t.getTime();
    var l = e instanceof RegExp, u = t instanceof RegExp;
    if (l != u) return !1;
    if (l && u) return e.toString() == t.toString();
    var d = Object.keys(e);
    if (i = d.length, i !== Object.keys(t).length) return !1;
    for (o = i; o-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, d[o])) return !1;
    for (o = i; o-- !== 0; )
      if (s = d[o], !ue(e[s], t[s])) return !1;
    return !0;
  }
  return e !== e && t !== t;
}
function Pe(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function y(e) {
  return !V(e);
}
function de(e, t) {
  if (!e || !t)
    return null;
  try {
    const n = e[t];
    if (y(n)) return n;
  } catch {
  }
  if (Object.keys(e).length) {
    if (Pe(t))
      return t(e);
    if (t.indexOf(".") === -1)
      return e[t];
    {
      let n = t.split("."), r = e;
      for (let o = 0, i = n.length; o < i; ++o) {
        if (r == null)
          return null;
        r = r[n[o]];
      }
      return r;
    }
  }
  return null;
}
function Ne(e, t, n) {
  return n ? de(e, n) === de(t, n) : ue(e, t);
}
function qt(e, t) {
  if (e != null && t && t.length) {
    for (let n of t)
      if (Ne(e, n)) return !0;
  }
  return !1;
}
function Mt(e, t) {
  let n = -1;
  if (t) {
    for (let r = 0; r < t.length; r++)
      if (t[r] === e) {
        n = r;
        break;
      }
  }
  return n;
}
function Yt(e, t) {
  let n = -1;
  if (y(e))
    try {
      n = e.findLastIndex(t);
    } catch {
      n = e.lastIndexOf([...e].reverse().find(t));
    }
  return n;
}
function $(e, t = !0) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function D(e, ...t) {
  return Pe(e) ? e(...t) : e;
}
function A(e, t = !0) {
  return typeof e == "string" && (t || e !== "");
}
function be(e) {
  return A(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function et(e, t = "", n = {}) {
  const r = be(t).split("."), o = r.shift();
  return o ? $(e) ? et(D(e[Object.keys(e).find((i) => be(i) === o) || ""], n), r.join("."), n) : void 0 : D(e, n);
}
function tt(e, t = !0) {
  return Array.isArray(e) && (t || e.length !== 0);
}
function ke(e) {
  return y(e) && !isNaN(e);
}
function Xt(e = "") {
  return y(e) && e.length === 1 && !!e.match(/\S| /);
}
function Qt() {
  return new Intl.Collator(void 0, { numeric: !0 }).compare;
}
function T(e, t) {
  if (t) {
    const n = t.test(e);
    return t.lastIndex = 0, n;
  }
  return !1;
}
function Zt(...e) {
  const t = (n = {}, r = {}) => {
    const o = Ge({}, n);
    return Object.keys(r).forEach((i) => {
      $(r[i]) && i in n && $(n[i]) ? o[i] = t(n[i], r[i]) : o[i] = r[i];
    }), o;
  };
  return e.reduce((n, r, o) => o === 0 ? r : t(n, r), {});
}
function q(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function _(e) {
  return e && e.search(/[\xC0-\xFF]/g) > -1 && (e = e.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y")), e;
}
function Gt(e, t, n) {
  e && t !== n && (n >= e.length && (n %= e.length, t %= e.length), e.splice(n, 0, e.splice(t, 1)[0]));
}
function Jt(e, t, n = 1, r, o = 1) {
  const i = Je(e, t, r, n);
  let s = n;
  return (V(e) || V(t)) && (s = o === 1 ? n : o), s * i;
}
function en(e) {
  return A(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function Re(e) {
  return A(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (t, n) => n === 0 ? t : "-" + t.toLowerCase()).toLowerCase() : e;
}
function ve(e) {
  return A(e) ? e.replace(/[A-Z]/g, (t, n) => n === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function De() {
  const e = /* @__PURE__ */ new Map();
  return {
    on(t, n) {
      let r = e.get(t);
      return r ? r.push(n) : r = [n], e.set(t, r), this;
    },
    off(t, n) {
      let r = e.get(t);
      return r && r.splice(r.indexOf(n) >>> 0, 1), this;
    },
    emit(t, n) {
      let r = e.get(t);
      r && r.slice().map((o) => {
        o(n);
      });
    },
    clear() {
      e.clear();
    }
  };
}
var nt = Object.defineProperty, rt = Object.defineProperties, ot = Object.getOwnPropertyDescriptors, G = Object.getOwnPropertySymbols, Ie = Object.prototype.hasOwnProperty, je = Object.prototype.propertyIsEnumerable, Se = (e, t, n) => t in e ? nt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, U = (e, t) => {
  for (var n in t || (t = {}))
    Ie.call(t, n) && Se(e, n, t[n]);
  if (G)
    for (var n of G(t))
      je.call(t, n) && Se(e, n, t[n]);
  return e;
}, se = (e, t) => rt(e, ot(t)), z = (e, t) => {
  var n = {};
  for (var r in e)
    Ie.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && G)
    for (var r of G(e))
      t.indexOf(r) < 0 && je.call(e, r) && (n[r] = e[r]);
  return n;
}, it = De(), R = it;
function _e(e, t) {
  tt(e) ? e.push(...t || []) : $(e) && Object.assign(e, t);
}
function st(e) {
  return $(e) && e.hasOwnProperty("value") && e.hasOwnProperty("type") ? e.value : e;
}
function we(e, t = "") {
  return ["opacity", "z-index", "line-height", "font-weight", "flex", "flex-grow", "flex-shrink", "order"].some((r) => t.endsWith(r)) ? e : `${e}`.trim().split(" ").map((i) => ke(i) ? `${i}px` : i).join(" ");
}
function at(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function fe(e = "", t = "") {
  return at(`${A(e, !1) && A(t, !1) ? `${e}-` : e}${t}`);
}
function We(e = "", t = "") {
  return `--${fe(e, t)}`;
}
function Ve(e, t = "", n = "", r = [], o) {
  if (A(e)) {
    const i = /{([^}]*)}/g, s = e.trim();
    if (T(s, i)) {
      const c = s.replaceAll(i, (u) => {
        const f = u.replace(/{|}/g, "").split(".").filter((p) => !r.some((h) => T(p, h)));
        return `var(${We(n, Re(f.join("-")))}${y(o) ? `, ${o}` : ""})`;
      }), a = /(\d+\s+[\+\-\*\/]\s+\d+)/g, l = /var\([^)]+\)/g;
      return T(c.replace(l, "0"), a) ? `calc(${c})` : c;
    }
    return we(s, t);
  } else if (ke(e))
    return we(e, t);
}
function lt(e, t, n) {
  A(t, !1) && e.push(`${t}:${n};`);
}
function K(e, t) {
  return e ? `${e}{${t}}` : "";
}
var ae = (...e) => ct(S.getTheme(), ...e), ct = (e = {}, t, n, r = "variable") => {
  if (t) {
    const { variable: o, options: i } = S.defaults || {}, { prefix: s, transform: c } = (e == null ? void 0 : e.options) || i || {}, l = T(t, /{([^}]*)}/g) ? t : `{${t}}`;
    return r === "value" || c === "strict" ? S.getTokenValue(t) : Ve(l, void 0, s, [o.excludedKeyRegex], n);
  }
  return "";
};
function ut(e, t = {}) {
  const n = S.defaults.variable, { prefix: r = n.prefix, selector: o = n.selector, excludedKeyRegex: i = n.excludedKeyRegex } = t, s = (l, u = "") => Object.entries(l).reduce(
    (d, [f, p]) => {
      const h = T(f, i) ? fe(u) : fe(u, Re(f)), m = st(p);
      if ($(m)) {
        const { variables: g, tokens: b } = s(m, h);
        _e(d.tokens, b), _e(d.variables, g);
      } else
        d.tokens.push((r ? h.replace(`${r}-`, "") : h).replaceAll("-", ".")), lt(d.variables, We(h), Ve(m, h, r, [i]));
      return d;
    },
    { variables: [], tokens: [] }
  ), { variables: c, tokens: a } = s(e, r);
  return {
    value: c,
    tokens: a,
    declarations: c.join(""),
    css: K(o, c.join(""))
  };
}
var w = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(e) {
          return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(e) {
          return { type: "attr", selector: `:root${e}`, matched: this.pattern.test(e.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(e) {
          return { type: "media", selector: `${e}{:root{[CSS]}}`, matched: this.pattern.test(e.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(e) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(e.trim()) };
        }
      },
      custom: {
        resolve(e) {
          return { type: "custom", selector: e, matched: !0 };
        }
      }
    },
    resolve(e) {
      const t = Object.keys(this.rules).filter((n) => n !== "custom").map((n) => this.rules[n]);
      return [e].flat().map((n) => {
        var r;
        return (r = t.map((o) => o.resolve(n)).find((o) => o.matched)) != null ? r : this.rules.custom.resolve(n);
      });
    }
  },
  _toVariables(e, t) {
    return ut(e, { prefix: t == null ? void 0 : t.prefix });
  },
  getCommon({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
    var i, s, c, a;
    const { preset: l, options: u } = t;
    let d, f, p, h;
    if (y(l)) {
      const { primitive: m, semantic: g } = l, b = g || {}, { colorScheme: v } = b, x = z(b, ["colorScheme"]), O = v || {}, { dark: I } = O, L = z(O, ["dark"]), C = y(m) ? this._toVariables({ primitive: m }, u) : {}, P = y(x) ? this._toVariables({ semantic: x }, u) : {}, E = y(L) ? this._toVariables({ light: L }, u) : {}, N = y(I) ? this._toVariables({ dark: I }, u) : {}, [k, j] = [(i = C.declarations) != null ? i : "", C.tokens], [ee, X] = [(s = P.declarations) != null ? s : "", P.tokens || []], [Q, te] = [(c = E.declarations) != null ? c : "", E.tokens || []], [Z, ne] = [(a = N.declarations) != null ? a : "", N.tokens || []];
      d = this.transformCSS(e, k, "light", "variable", u, r, o), f = j;
      const re = this.transformCSS(e, `${ee}${Q}color-scheme:light`, "light", "variable", u, r, o), W = this.transformCSS(e, `${Z}color-scheme:dark`, "dark", "variable", u, r, o);
      p = `${re}${W}`, h = [.../* @__PURE__ */ new Set([...X, ...te, ...ne])];
    }
    return {
      primitive: {
        css: d,
        tokens: f
      },
      semantic: {
        css: p,
        tokens: h
      }
    };
  },
  getPreset({ name: e = "", preset: t = {}, options: n, params: r, set: o, defaults: i, selector: s }) {
    var c, a, l;
    const u = e.replace("-directive", ""), d = t, { colorScheme: f } = d, p = z(d, ["colorScheme"]), h = f || {}, { dark: m } = h, g = z(h, ["dark"]), b = y(p) ? this._toVariables({ [u]: p }, n) : {}, v = y(g) ? this._toVariables({ [u]: g }, n) : {}, x = y(m) ? this._toVariables({ [u]: m }, n) : {}, [O, I] = [(c = b.declarations) != null ? c : "", b.tokens || []], [L, C] = [(a = v.declarations) != null ? a : "", v.tokens || []], [P, E] = [(l = x.declarations) != null ? l : "", x.tokens || []], N = [.../* @__PURE__ */ new Set([...I, ...C, ...E])], k = this.transformCSS(u, `${O}${L}`, "light", "variable", n, o, i, s), j = this.transformCSS(u, P, "dark", "variable", n, o, i, s);
    return {
      css: `${k}${j}`,
      tokens: N
    };
  },
  getPresetC({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
    var i;
    const { preset: s, options: c } = t, a = (i = s == null ? void 0 : s.components) == null ? void 0 : i[e];
    return this.getPreset({ name: e, preset: a, options: c, params: n, set: r, defaults: o });
  },
  getPresetD({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
    var i;
    const s = e.replace("-directive", ""), { preset: c, options: a } = t, l = (i = c == null ? void 0 : c.directives) == null ? void 0 : i[s];
    return this.getPreset({ name: s, preset: l, options: a, params: n, set: r, defaults: o });
  },
  getColorSchemeOption(e, t) {
    var n;
    return this.regex.resolve((n = e.darkModeSelector) != null ? n : t.options.darkModeSelector);
  },
  getLayerOrder(e, t = {}, n, r) {
    const { cssLayer: o } = t;
    return o ? `@layer ${D(o.order || "primeui", n)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: o, defaults: i }) {
    const s = this.getCommon({ name: e, theme: t, params: n, set: o, defaults: i }), c = Object.entries(r).reduce((a, [l, u]) => a.push(`${l}="${u}"`) && a, []).join(" ");
    return Object.entries(s || {}).reduce((a, [l, u]) => {
      if (u != null && u.css) {
        const d = q(u == null ? void 0 : u.css), f = `${l}-variables`;
        a.push(`<style type="text/css" data-primevue-style-id="${f}" ${c}>${d}</style>`);
      }
      return a;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: o, defaults: i }) {
    var s;
    const c = { name: e, theme: t, params: n, set: o, defaults: i }, a = (s = e.includes("-directive") ? this.getPresetD(c) : this.getPresetC(c)) == null ? void 0 : s.css, l = Object.entries(r).reduce((u, [d, f]) => u.push(`${d}="${f}"`) && u, []).join(" ");
    return a ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${l}>${q(a)}</style>` : "";
  },
  createTokens(e = {}, t, n = "", r = "", o = {}) {
    return Object.entries(e).forEach(([i, s]) => {
      const c = T(i, t.variable.excludedKeyRegex) ? n : n ? `${n}.${ve(i)}` : ve(i), a = r ? `${r}.${i}` : i;
      $(s) ? this.createTokens(s, t, c, a, o) : (o[c] || (o[c] = {
        paths: [],
        computed(l, u = {}) {
          if (l) {
            const d = this.paths.find((f) => f.scheme === l) || this.paths.find((f) => f.scheme === "none");
            return d == null ? void 0 : d.computed(l, u.binding);
          }
          return this.paths.map((d) => d.computed(d.scheme, u[d.scheme]));
        }
      }), o[c].paths.push({
        path: a,
        value: s,
        scheme: a.includes("colorScheme.light") ? "light" : a.includes("colorScheme.dark") ? "dark" : "none",
        computed(l, u = {}) {
          const d = /{([^}]*)}/g;
          let f = s;
          if (u.name = this.path, u.binding || (u.binding = {}), T(s, d)) {
            const h = s.trim().replaceAll(d, (b) => {
              var v, x;
              const O = b.replace(/{|}/g, "");
              return (x = (v = o[O]) == null ? void 0 : v.computed(l, u)) == null ? void 0 : x.value;
            }), m = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, g = /var\([^)]+\)/g;
            f = T(h.replace(g, "0"), m) ? `calc(${h})` : h;
          }
          return V(u.binding) && delete u.binding, {
            colorScheme: l,
            path: this.path,
            paths: u,
            value: f.includes("undefined") ? void 0 : f
          };
        }
      }));
    }), o;
  },
  getTokenValue(e, t, n) {
    var r;
    const i = ((a) => a.split(".").filter((u) => !T(u.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(t), s = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, c = [(r = e[i]) == null ? void 0 : r.computed(s)].flat().filter((a) => a);
    return c.length === 1 ? c[0].value : c.reduce((a = {}, l) => {
      const u = l, { colorScheme: d } = u, f = z(u, ["colorScheme"]);
      return a[d] = f, a;
    }, void 0);
  },
  transformCSS(e, t, n, r, o = {}, i, s, c) {
    if (y(t)) {
      const { cssLayer: a } = o;
      if (r !== "style") {
        const l = this.getColorSchemeOption(o, s), u = c ? K(c, t) : t;
        t = n === "dark" ? l.reduce((d, { selector: f }) => (y(f) && (d += f.includes("[CSS]") ? f.replace("[CSS]", u) : K(f, u)), d), "") : K(c ?? ":root", t);
      }
      if (a) {
        const l = {
          name: "primeui",
          order: "primeui"
        };
        $(a) && (l.name = D(a.name, { name: e, type: r })), y(l.name) && (t = K(`@layer ${l.name}`, t), i == null || i.layerNames(l.name));
      }
      return t;
    }
    return "";
  }
}, S = {
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
  update(e = {}) {
    const { theme: t } = e;
    t && (this._theme = se(U({}, t), {
      options: U(U({}, this.defaults.options), t.options)
    }), this._tokens = w.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.preset) || {};
  },
  get options() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(e) {
    this.update({ theme: e }), R.emit("theme:change", e);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(e) {
    this._theme = se(U({}, this.theme), { preset: e }), this._tokens = w.createTokens(e, this.defaults), this.clearLoadedStyleNames(), R.emit("preset:change", e), R.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = se(U({}, this.theme), { options: e }), this.clearLoadedStyleNames(), R.emit("options:change", e), R.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(e) {
    this._layerNames.add(e);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(e) {
    return w.getTokenValue(this.tokens, e, this.defaults);
  },
  getCommon(e = "", t) {
    return w.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(e = "", t) {
    const n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return w.getPresetC(n);
  },
  getDirective(e = "", t) {
    const n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return w.getPresetD(n);
  },
  getCustomPreset(e = "", t, n, r) {
    const o = { name: e, preset: t, options: this.options, selector: n, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return w.getPreset(o);
  },
  getLayerOrderCSS(e = "") {
    return w.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(e = "", t, n = "style", r) {
    return w.transformCSS(e, t, r, n, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(e = "", t, n = {}) {
    return w.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(e, t, n = {}) {
    return w.getStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(e) {
    this._loadingStyles.add(e);
  },
  onStyleUpdated(e) {
    this._loadingStyles.add(e);
  },
  onStyleLoaded(e, { name: t }) {
    this._loadingStyles.size && (this._loadingStyles.delete(t), R.emit(`theme:${t}:load`, e), !this._loadingStyles.size && R.emit("theme:load"));
  }
}, tn = {
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
}, nn = {
  AND: "and",
  OR: "or"
};
function xe(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = dt(e)) || t) {
      n && (e = n);
      var r = 0, o = function() {
      };
      return { s: o, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(l) {
        throw l;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, s = !0, c = !1;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var l = n.next();
    return s = l.done, l;
  }, e: function(l) {
    c = !0, i = l;
  }, f: function() {
    try {
      s || n.return == null || n.return();
    } finally {
      if (c) throw i;
    }
  } };
}
function dt(e, t) {
  if (e) {
    if (typeof e == "string") return Oe(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Oe(e, t) : void 0;
  }
}
function Oe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var rn = {
  filter: function(t, n, r, o, i) {
    var s = [];
    if (!t)
      return s;
    var c = xe(t), a;
    try {
      for (c.s(); !(a = c.n()).done; ) {
        var l = a.value;
        if (typeof l == "string") {
          if (this.filters[o](l, r, i)) {
            s.push(l);
            continue;
          }
        } else {
          var u = xe(n), d;
          try {
            for (u.s(); !(d = u.n()).done; ) {
              var f = d.value, p = de(l, f);
              if (this.filters[o](p, r, i)) {
                s.push(l);
                break;
              }
            }
          } catch (h) {
            u.e(h);
          } finally {
            u.f();
          }
        }
      }
    } catch (h) {
      c.e(h);
    } finally {
      c.f();
    }
    return s;
  },
  filters: {
    startsWith: function(t, n, r) {
      if (n == null || n === "")
        return !0;
      if (t == null)
        return !1;
      var o = _(n.toString()).toLocaleLowerCase(r), i = _(t.toString()).toLocaleLowerCase(r);
      return i.slice(0, o.length) === o;
    },
    contains: function(t, n, r) {
      if (n == null || n === "")
        return !0;
      if (t == null)
        return !1;
      var o = _(n.toString()).toLocaleLowerCase(r), i = _(t.toString()).toLocaleLowerCase(r);
      return i.indexOf(o) !== -1;
    },
    notContains: function(t, n, r) {
      if (n == null || n === "")
        return !0;
      if (t == null)
        return !1;
      var o = _(n.toString()).toLocaleLowerCase(r), i = _(t.toString()).toLocaleLowerCase(r);
      return i.indexOf(o) === -1;
    },
    endsWith: function(t, n, r) {
      if (n == null || n === "")
        return !0;
      if (t == null)
        return !1;
      var o = _(n.toString()).toLocaleLowerCase(r), i = _(t.toString()).toLocaleLowerCase(r);
      return i.indexOf(o, i.length - o.length) !== -1;
    },
    equals: function(t, n, r) {
      return n == null || n === "" ? !0 : t == null ? !1 : t.getTime && n.getTime ? t.getTime() === n.getTime() : _(t.toString()).toLocaleLowerCase(r) == _(n.toString()).toLocaleLowerCase(r);
    },
    notEquals: function(t, n, r) {
      return n == null || n === "" ? !1 : t == null ? !0 : t.getTime && n.getTime ? t.getTime() !== n.getTime() : _(t.toString()).toLocaleLowerCase(r) != _(n.toString()).toLocaleLowerCase(r);
    },
    in: function(t, n) {
      if (n == null || n.length === 0)
        return !0;
      for (var r = 0; r < n.length; r++)
        if (Ne(t, n[r]))
          return !0;
      return !1;
    },
    between: function(t, n) {
      return n == null || n[0] == null || n[1] == null ? !0 : t == null ? !1 : t.getTime ? n[0].getTime() <= t.getTime() && t.getTime() <= n[1].getTime() : n[0] <= t && t <= n[1];
    },
    lt: function(t, n) {
      return n == null ? !0 : t == null ? !1 : t.getTime && n.getTime ? t.getTime() < n.getTime() : t < n;
    },
    lte: function(t, n) {
      return n == null ? !0 : t == null ? !1 : t.getTime && n.getTime ? t.getTime() <= n.getTime() : t <= n;
    },
    gt: function(t, n) {
      return n == null ? !0 : t == null ? !1 : t.getTime && n.getTime ? t.getTime() > n.getTime() : t > n;
    },
    gte: function(t, n) {
      return n == null ? !0 : t == null ? !1 : t.getTime && n.getTime ? t.getTime() >= n.getTime() : t >= n;
    },
    dateIs: function(t, n) {
      return n == null ? !0 : t == null ? !1 : t.toDateString() === n.toDateString();
    },
    dateIsNot: function(t, n) {
      return n == null ? !0 : t == null ? !1 : t.toDateString() !== n.toDateString();
    },
    dateBefore: function(t, n) {
      return n == null ? !0 : t == null ? !1 : t.getTime() < n.getTime();
    },
    dateAfter: function(t, n) {
      return n == null ? !0 : t == null ? !1 : t.getTime() > n.getTime();
    }
  },
  register: function(t, n) {
    this.filters[t] = n;
  }
};
function ft(e, t) {
  return e ? e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1;
}
function pt(e, t) {
  if (e && t) {
    const n = (r) => {
      ft(e, r) || (e.classList ? e.classList.add(r) : e.className += " " + r);
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function ht() {
  return window.innerWidth - document.documentElement.offsetWidth;
}
function F(e) {
  for (const t of document == null ? void 0 : document.styleSheets)
    try {
      for (const n of t == null ? void 0 : t.cssRules)
        for (const r of n == null ? void 0 : n.style)
          if (e.test(r))
            return { name: r, value: n.style.getPropertyValue(r).trim() };
    } catch {
    }
  return null;
}
function on(e = "p-overflow-hidden") {
  const t = F(/-scrollbar-width$/);
  t != null && t.name && document.body.style.setProperty(t.name, ht() + "px"), pt(document.body, e);
}
function mt(e) {
  if (e) {
    let t = document.createElement("a");
    if (t.download !== void 0) {
      const { name: n, src: r } = e;
      return t.setAttribute("href", r), t.setAttribute("download", n), t.style.display = "none", document.body.appendChild(t), t.click(), document.body.removeChild(t), !0;
    }
  }
  return !1;
}
function sn(e, t) {
  let n = new Blob([e], {
    type: "application/csv;charset=utf-8;"
  });
  window.navigator.msSaveOrOpenBlob ? navigator.msSaveOrOpenBlob(n, t + ".csv") : mt({ name: t + ".csv", src: URL.createObjectURL(n) }) || (e = "data:text/csv;charset=utf-8," + e, window.open(encodeURI(e)));
}
function gt(e, t) {
  if (e && t) {
    const n = (r) => {
      e.classList ? e.classList.remove(r) : e.className = e.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function an(e = "p-overflow-hidden") {
  const t = F(/-scrollbar-width$/);
  t != null && t.name && document.body.style.removeProperty(t.name), gt(document.body, e);
}
function Fe(e) {
  let t = { width: 0, height: 0 };
  return e && (e.style.visibility = "hidden", e.style.display = "block", t.width = e.offsetWidth, t.height = e.offsetHeight, e.style.display = "none", e.style.visibility = "visible"), t;
}
function pe() {
  let e = window, t = document, n = t.documentElement, r = t.getElementsByTagName("body")[0], o = e.innerWidth || n.clientWidth || r.clientWidth, i = e.innerHeight || n.clientHeight || r.clientHeight;
  return { width: o, height: i };
}
function yt() {
  let e = document.documentElement;
  return (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0);
}
function bt() {
  let e = document.documentElement;
  return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
}
function ln(e, t, n = !0) {
  var r, o, i, s;
  if (e) {
    const c = e.offsetParent ? { width: e.offsetWidth, height: e.offsetHeight } : Fe(e), a = c.height, l = c.width, u = t.offsetHeight, d = t.offsetWidth, f = t.getBoundingClientRect(), p = bt(), h = yt(), m = pe();
    let g, b, v = "top";
    f.top + u + a > m.height ? (g = f.top + p - a, v = "bottom", g < 0 && (g = p)) : g = u + f.top + p, f.left + l > m.width ? b = Math.max(0, f.left + h + d - l) : b = f.left + h, e.style.top = g + "px", e.style.left = b + "px", e.style.transformOrigin = v, n && (e.style.marginTop = v === "bottom" ? `calc(${(o = (r = F(/-anchor-gutter$/)) == null ? void 0 : r.value) != null ? o : "2px"} * -1)` : (s = (i = F(/-anchor-gutter$/)) == null ? void 0 : i.value) != null ? s : "");
  }
}
function vt(e, t) {
  e && (typeof t == "string" ? e.style.cssText = t : Object.entries(t || {}).forEach(([n, r]) => e.style[n] = r));
}
function St(e, t) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function cn(e, t, n = !0) {
  var r, o, i, s;
  if (e) {
    const c = e.offsetParent ? { width: e.offsetWidth, height: e.offsetHeight } : Fe(e), a = t.offsetHeight, l = t.getBoundingClientRect(), u = pe();
    let d, f, p = "top";
    l.top + a + c.height > u.height ? (d = -1 * c.height, p = "bottom", l.top + d < 0 && (d = -1 * l.top)) : d = a, c.width > u.width ? f = l.left * -1 : l.left + c.width > u.width ? f = (l.left + c.width - u.width) * -1 : f = 0, e.style.top = d + "px", e.style.left = f + "px", e.style.transformOrigin = p, n && (e.style.marginTop = p === "bottom" ? `calc(${(o = (r = F(/-anchor-gutter$/)) == null ? void 0 : r.value) != null ? o : "2px"} * -1)` : (s = (i = F(/-anchor-gutter$/)) == null ? void 0 : i.value) != null ? s : "");
  }
}
function H(e) {
  return typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
}
var le = void 0;
function Te(e) {
  {
    if (le != null) return le;
    let t = document.createElement("div");
    vt(t, {
      width: "100px",
      height: "100px",
      overflow: "scroll",
      position: "absolute",
      top: "-9999px"
    }), document.body.appendChild(t);
    let n = t.offsetWidth - t.clientWidth;
    return document.body.removeChild(t), le = n, n;
  }
}
function un() {
  if (window.getSelection) {
    const e = window.getSelection() || {};
    e.empty ? e.empty() : e.removeAllRanges && e.rangeCount > 0 && e.getRangeAt(0).getClientRects().length > 0 && e.removeAllRanges();
  }
}
function J(e, t = {}) {
  if (H(e)) {
    const n = (r, o) => {
      var i, s;
      const c = (i = e == null ? void 0 : e.$attrs) != null && i[r] ? [(s = e == null ? void 0 : e.$attrs) == null ? void 0 : s[r]] : [];
      return [o].flat().reduce((a, l) => {
        if (l != null) {
          const u = typeof l;
          if (u === "string" || u === "number")
            a.push(l);
          else if (u === "object") {
            const d = Array.isArray(l) ? n(r, l) : Object.entries(l).map(([f, p]) => r === "style" && (p || p === 0) ? `${f.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${p}` : p ? f : void 0);
            a = d.length ? a.concat(d.filter((f) => !!f)) : a;
          }
        }
        return a;
      }, c);
    };
    Object.entries(t).forEach(([r, o]) => {
      if (o != null) {
        const i = r.match(/^on(.+)/);
        i ? e.addEventListener(i[1].toLowerCase(), o) : r === "p-bind" ? J(e, o) : (o = r === "class" ? [...new Set(n("class", o))].join(" ").trim() : r === "style" ? n("style", o).join(";").trim() : o, (e.$attrs = e.$attrs || {}) && (e.$attrs[r] = o), e.setAttribute(r, o));
      }
    });
  }
}
function dn(e, t = {}, ...n) {
  {
    const r = document.createElement(e);
    return J(r, t), r.append(...n), r;
  }
}
function _t(e, t) {
  return H(e) ? Array.from(e.querySelectorAll(t)) : [];
}
function wt(e, t) {
  return H(e) ? e.matches(t) ? e : e.querySelector(t) : null;
}
function fn(e, t) {
  e && document.activeElement !== e && e.focus(t);
}
function pn(e, t) {
  if (H(e)) {
    const n = e.getAttribute(t);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function He(e, t = "") {
  let n = _t(
    e,
    `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`
  ), r = [];
  for (let o of n)
    getComputedStyle(o).display != "none" && getComputedStyle(o).visibility != "hidden" && r.push(o);
  return r;
}
function hn(e, t) {
  const n = He(e, t);
  return n.length > 0 ? n[0] : null;
}
function mn(e) {
  if (e) {
    let t = e.offsetHeight, n = getComputedStyle(e);
    return t -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), t;
  }
  return 0;
}
function gn(e) {
  if (e) {
    e.style.visibility = "hidden", e.style.display = "block";
    let t = e.offsetHeight;
    return e.style.display = "none", e.style.visibility = "visible", t;
  }
  return 0;
}
function xt(e) {
  if (e) {
    e.style.visibility = "hidden", e.style.display = "block";
    let t = e.offsetWidth;
    return e.style.display = "none", e.style.visibility = "visible", t;
  }
  return 0;
}
function he(e) {
  if (e) {
    let t = e.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
  }
  return null;
}
function yn(e) {
  var t;
  if (e) {
    let n = (t = he(e)) == null ? void 0 : t.childNodes, r = 0;
    if (n)
      for (let o = 0; o < n.length; o++) {
        if (n[o] === e) return r;
        n[o].nodeType === 1 && r++;
      }
  }
  return -1;
}
function bn(e, t) {
  const n = He(e, t);
  return n.length > 0 ? n[n.length - 1] : null;
}
function vn(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
  return null;
}
function Ot(e) {
  if (e) {
    let t = e.getBoundingClientRect();
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
function Sn(e, t) {
  return e ? e.offsetHeight : 0;
}
function Be(e, t = []) {
  const n = he(e);
  return n === null ? t : Be(n, t.concat([n]));
}
function _n(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
  return null;
}
function wn(e) {
  let t = [];
  if (e) {
    let n = Be(e);
    const r = /(auto|scroll)/, o = (i) => {
      try {
        let s = window.getComputedStyle(i, null);
        return r.test(s.getPropertyValue("overflow")) || r.test(s.getPropertyValue("overflowX")) || r.test(s.getPropertyValue("overflowY"));
      } catch {
        return !1;
      }
    };
    for (let i of n) {
      let s = i.nodeType === 1 && i.dataset.scrollselectors;
      if (s) {
        let c = s.split(",");
        for (let a of c) {
          let l = wt(i, a);
          l && o(l) && t.push(l);
        }
      }
      i.nodeType !== 9 && o(i) && t.push(i);
    }
  }
  return t;
}
function xn() {
  if (window.getSelection) return window.getSelection().toString();
  if (document.getSelection) return document.getSelection().toString();
}
function Tt(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && he(e));
}
function On(e) {
  if (e) {
    let t = e.offsetWidth, n = getComputedStyle(e);
    return t -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), t;
  }
  return 0;
}
function Tn(e, t, n) {
  e[t].apply(e, n);
}
function Cn() {
  return /(android)/i.test(navigator.userAgent);
}
function En(e) {
  if (e) {
    const t = e.nodeName, n = e.parentElement && e.parentElement.nodeName;
    return t === "INPUT" || t === "TEXTAREA" || t === "BUTTON" || t === "A" || n === "INPUT" || n === "TEXTAREA" || n === "BUTTON" || n === "A" || !!e.closest(".p-button, .p-checkbox, .p-radiobutton");
  }
  return !1;
}
function Ct() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function $n(e, t = "") {
  return H(e) ? e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`) : !1;
}
function An(e) {
  return !!(e && e.offsetParent != null);
}
function Ln() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function Pn(e, t) {
  var n;
  if (e) {
    const r = e.parentElement, o = Ot(r), i = pe(), s = e.offsetParent ? e.offsetWidth : xt(e), c = St((n = r == null ? void 0 : r.children) == null ? void 0 : n[0]);
    let a = "";
    o.left + c + s > i.width - Te() ? o.left < s ? t % 2 === 1 ? a = o.left ? "-" + o.left + "px" : "100%" : t % 2 === 0 && (a = i.width - s - Te() + "px") : a = "-100%" : a = "100%", e.style.top = "0px", e.style.left = a;
  }
}
function Et(e, t = "", n) {
  H(e) && n !== null && n !== void 0 && e.setAttribute(t, n);
}
function M(e) {
  "@babel/helpers - typeof";
  return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, M(e);
}
function Ce(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ce(Object(n), !0).forEach(function(r) {
      $t(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $t(e, t, n) {
  return (t = At(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function At(e) {
  var t = Lt(e, "string");
  return M(t) == "symbol" ? t : t + "";
}
function Lt(e, t) {
  if (M(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (M(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  Ke() ? qe(e) : t ? e() : Me(e);
}
var Nt = 0;
function kt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = ie(!1), r = ie(e), o = ie(null), i = Ct() ? window.document : void 0, s = t.document, c = s === void 0 ? i : s, a = t.immediate, l = a === void 0 ? !0 : a, u = t.manual, d = u === void 0 ? !1 : u, f = t.name, p = f === void 0 ? "style_".concat(++Nt) : f, h = t.id, m = h === void 0 ? void 0 : h, g = t.media, b = g === void 0 ? void 0 : g, v = t.nonce, x = v === void 0 ? void 0 : v, O = t.first, I = O === void 0 ? !1 : O, L = t.onMounted, C = L === void 0 ? void 0 : L, P = t.onUpdated, E = P === void 0 ? void 0 : P, N = t.onLoad, k = N === void 0 ? void 0 : N, j = t.props, ee = j === void 0 ? {} : j, X = function() {
  }, Q = function(ne) {
    var re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (c) {
      var W = Ee(Ee({}, ee), re), B = W.name || p, me = W.id || m, Ue = W.nonce || x;
      o.value = c.querySelector('style[data-primevue-style-id="'.concat(B, '"]')) || c.getElementById(me) || c.createElement("style"), o.value.isConnected || (r.value = ne || e, J(o.value, {
        type: "text/css",
        id: me,
        media: b,
        nonce: Ue
      }), I ? c.head.prepend(o.value) : c.head.appendChild(o.value), Et(o.value, "data-primevue-style-id", B), J(o.value, W), o.value.onload = function(oe) {
        return k == null ? void 0 : k(oe, {
          name: B
        });
      }, C == null || C(B)), !n.value && (X = Ye(r, function(oe) {
        o.value.textContent = oe, E == null || E(B);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, te = function() {
    !c || !n.value || (X(), Tt(o.value) && c.head.removeChild(o.value), n.value = !1);
  };
  return l && !d && Pt(Q), {
    id: m,
    name: p,
    el: o,
    css: r,
    unload: te,
    load: Q,
    isLoaded: ze(n)
  };
}
function Y(e) {
  "@babel/helpers - typeof";
  return Y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Y(e);
}
function $e(e, t) {
  return jt(e) || It(e, t) || Dt(e, t) || Rt();
}
function Rt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dt(e, t) {
  if (e) {
    if (typeof e == "string") return Ae(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ae(e, t) : void 0;
  }
}
function Ae(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function It(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, s, c = [], a = !0, l = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(a = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); a = !0) ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!a && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw o;
      }
    }
    return c;
  }
}
function jt(e) {
  if (Array.isArray(e)) return e;
}
function Le(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Le(Object(n), !0).forEach(function(r) {
      Wt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Wt(e, t, n) {
  return (t = Vt(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Vt(e) {
  var t = Ft(e, "string");
  return Y(t) == "symbol" ? t : t + "";
}
function Ft(e, t) {
  if (Y(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Y(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ht = function(t) {
  var n = t.dt;
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
}, Bt = function(t) {
  var n = t.dt;
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
}, Ut = {}, zt = {}, Nn = {
  name: "base",
  css: Bt,
  theme: Ht,
  classes: Ut,
  inlineStyles: zt,
  load: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, o = r(D(t, {
      dt: ae
    }));
    return o ? kt(q(o), ce({
      name: this.name
    }, n)) : {};
  },
  loadCSS: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, t);
  },
  loadTheme: function() {
    var t = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.theme, n, function(r) {
      return S.transformCSS(n.name || t.name, r);
    });
  },
  getCommonTheme: function(t) {
    return S.getCommon(this.name, t);
  },
  getComponentTheme: function(t) {
    return S.getComponent(this.name, t);
  },
  getDirectiveTheme: function(t) {
    return S.getDirective(this.name, t);
  },
  getPresetTheme: function(t, n, r) {
    return S.getCustomPreset(this.name, t, n, r);
  },
  getLayerOrderThemeCSS: function() {
    return S.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var r = D(this.css, {
        dt: ae
      }), o = q("".concat(r).concat(t)), i = Object.entries(n).reduce(function(s, c) {
        var a = $e(c, 2), l = a[0], u = a[1];
        return s.push("".concat(l, '="').concat(u, '"')) && s;
      }, []).join(" ");
      return '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(i, ">").concat(o, "</style>");
    }
    return "";
  },
  getCommonThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return S.getCommonStyleSheet(this.name, t, n);
  },
  getThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [S.getStyleSheet(this.name, t, n)];
    if (this.theme) {
      var o = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = D(this.theme, {
        dt: ae
      }), s = q(S.transformCSS(o, i)), c = Object.entries(n).reduce(function(a, l) {
        var u = $e(l, 2), d = u[0], f = u[1];
        return a.push("".concat(d, '="').concat(f, '"')) && a;
      }, []).join(" ");
      r.push('<style type="text/css" data-primevue-style-id="'.concat(o, '" ').concat(c, ">").concat(s, "</style>"));
    }
    return r.join("");
  },
  extend: function(t) {
    return ce(ce({}, this), {}, {
      css: void 0,
      theme: void 0
    }, t);
  }
}, kn = De();
export {
  _n as $,
  de as A,
  Nn as B,
  fn as C,
  Cn as D,
  De as E,
  tn as F,
  Xt as G,
  hn as H,
  bn as I,
  vt as J,
  cn as K,
  ln as L,
  Ln as M,
  He as N,
  Ne as O,
  kn as P,
  Yt as Q,
  rn as R,
  xn as S,
  un as T,
  Et as U,
  qt as V,
  Qt as W,
  Jt as X,
  yn as Y,
  _t as Z,
  vn as _,
  Pe as a,
  En as a0,
  Pn as a1,
  $n as a2,
  nn as a3,
  Mt as a4,
  sn as a5,
  xt as a6,
  gn as a7,
  Gt as a8,
  bt as a9,
  Tn as aa,
  on as ab,
  an as ac,
  pe as ad,
  et as b,
  S as c,
  A as d,
  tt as e,
  wt as f,
  wn as g,
  V as h,
  y as i,
  $ as j,
  en as k,
  dn as l,
  Zt as m,
  gt as n,
  mn as o,
  On as p,
  St as q,
  D as r,
  R as s,
  be as t,
  Sn as u,
  Ot as v,
  pt as w,
  pn as x,
  Ct as y,
  An as z
};
