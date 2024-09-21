import { reactive as H, ref as d, computed as v, watch as X, markRaw as Y, unref as y } from "vue";
import { o as T } from "./index-BIiJXzKL.js";
import { _ as Z } from "./IconLock.vue_vue_type_script_setup_true_lang-DfkxUufn.js";
import { _ as ee } from "./IconNotAllowed.vue_vue_type_script_setup_true_lang-DqLwRzEu.js";
import { _ as F } from "./IconPin.vue_vue_type_script_setup_true_lang-DhNd5-Qf.js";
import { _ as te } from "./IconResetColumn.vue_vue_type_script_setup_true_lang-CwoXOkul.js";
import { _ as se } from "./IconResetColumns.vue_vue_type_script_setup_true_lang-CayuBvnO.js";
const ce = [{
  id: 10,
  name: "10"
}, {
  id: 20,
  name: "20"
}, {
  id: 50,
  name: "50"
}, {
  id: 100,
  name: "100"
}];
function ae({ field: s, title: n, classes: o, titleCls: w, titleAlign: f, sortable: i, lock: r, cls: l = "", showMenu: m = !0, id: k, expandable: x, rowspan: u = 1, colspan: _ = 1 }) {
  const h = [];
  m && h.push("pr-10"), f === "center" ? h.push("justify-center") : f === "right" && h.push("justify-end"), r === !1 && (r = void 0);
  const b = {
    field: s,
    rowspan: u,
    colspan: _,
    pt: {
      headerContent: {
        class: h
      },
      ...o
    },
    header: n,
    headerClass: w,
    sortable: i ?? !0,
    frozen: !!r,
    alignFrozen: r,
    class: l,
    columnKey: k,
    expander: x
  };
  return H(b);
}
function z(s, n) {
  n.lock = s, n.props && (n.props.frozen = !!n.lock, n.props.alignFrozen = n.lock === !1 ? void 0 : n.lock);
}
function M(s) {
  s.sort(({ lock: n }, { lock: o }) => n === "left" ? -1 : o === "left" ? 1 : n === !1 ? -1 : o === !1 || n === "right" ? 1 : o === "right" ? -1 : 0);
}
function de(s, n) {
  const o = d([]), w = d([]), f = d([]), i = d(0), r = d(20), l = d(1), m = d(!1), k = d(""), x = H({}), u = v(() => (l.value - 1) * r.value), _ = v(() => s.remoteMax ?? r.value), h = v(() => {
    const e = {};
    s.showHeader || (e.header = ["hidden"]), s.showPagination || (e.footer = ["hidden"]);
    const t = {
      pt: e,
      showGridlines: s.showLinesRow,
      rowHover: s.showHoverRow,
      scrollable: !0,
      scrollHeight: "flex",
      size: "small",
      stripedRows: s.showStripedRows,
      resizableColumns: s.columnsResize,
      columnResizeMode: "expand",
      reorderableColumns: s.columnsReorder,
      removableSort: !0,
      paginator: s.showPagination,
      paginatorTemplate: ""
    };
    return s.multiSelect ? t.selectionMode = "multiple" : s.multiSelect === !1 && (t.selectionMode = "single"), t;
  }), b = v(() => i.value === 0 ? 0 : u.value + 1), N = v(() => {
    const e = u.value + r.value;
    return e > i.value ? i.value : e;
  }), j = v(() => l.value === 1), D = v(() => u.value + r.value >= i.value), $ = v(() => Math.ceil(i.value / r.value));
  function A() {
    l.value--, p();
  }
  function G() {
    l.value++, p();
  }
  function O(e) {
    e ? e > $.value && (e = $.value) : e = 1, l.value = e, p();
  }
  function I(e) {
    l.value = Math.floor((u.value + 1) / e) + 1, r.value = e, p();
  }
  function K({ cellDisplay: e }, { data: t, field: c }) {
    return e ? e(t, f.value) : T(t, c);
  }
  function q({ cellDisplay: e }, { node: t, column: c }) {
    return e ? e(t.data, f.value) : T(t.data, c.key ?? "");
  }
  function B({ cellParams: e }, t) {
    return typeof e == "function" ? e(t, f.value) : {
      ...e,
      data: t
    };
  }
  function E({ cellParams: e }, t) {
    return typeof e == "function" ? e(t, f.value) : {
      ...e,
      node: t
    };
  }
  function J(e, t) {
    return typeof e.cellClass == "function" ? e.cellClass(e, t) : e.cellClass ?? "";
  }
  function Q(e) {
    const t = [];
    return e.stateful && t.push({
      text: "Lock Column",
      icon: Z,
      items: [{
        text: "Left",
        icon: F,
        iconCls: "rotate-90",
        click() {
          z("left", e), M(o.value);
        }
      }, {
        text: "Right",
        icon: F,
        iconCls: "-rotate-90",
        click() {
          z("right", e), M(o.value);
        }
      }, {
        text: "None",
        icon: ee,
        click() {
          z(!1, e), M(o.value);
        }
      }]
    }, {
      text: "Reset Column",
      icon: te
    }, {
      text: "Reset All Columns",
      icon: se
    }), {
      items: t
    };
  }
  async function p(e) {
    const { load: t } = s;
    if (t) {
      const c = y(f), P = y(u), a = y(i);
      let C = P, L = !0, R = P + r.value;
      for (a && (R = R > a - 1 ? a : R), C; C < R; C++)
        if (c[C] === void 0) {
          L = !1;
          break;
        }
      if (L || e === 0 || e === a || e && (e >= r.value || e < _.value)) {
        m.value = !1;
        return;
      }
      const U = l.value, V = y(_);
      m.value = !0;
      try {
        const g = await t({
          page: U,
          filters: x,
          start: C,
          limit: V
        }), S = Array.isArray(g) ? g : g.data ?? [];
        e ?? (e = 0), e += S.length, g.total && (i.value = g.total);
        for (const W of S)
          c[C++] = W;
        p(e);
      } catch (g) {
        throw m.value = !1, g;
      }
    } else
      n("load");
  }
  return X(() => s.columns, (e = []) => {
    const { remote: t } = s;
    w.value = [], o.value = e.map(({ ...c }, P) => {
      const a = Y(c);
      return a.id ?? (a.id = a.field || `col_${P}`), a.indexOriginal = P, a.stateful ?? (a.stateful = !0), a.lock ?? (a.lock = !1), a.props = ae(a), a.field && !t && w.value.push(a.field), a;
    });
  }, {
    immediate: !0
  }), {
    startDisplay: b,
    endDisplay: N,
    isPageFirst: j,
    isPageLast: D,
    totalPages: $,
    columnsConfig: o,
    filterFields: w,
    propsComponent: h,
    loadRecords: p,
    recordsTotal: i,
    recordsCached: f,
    filters: x,
    search: k,
    start: u,
    loading: m,
    rowsPerPage: r,
    currentPage: l,
    previousPage: A,
    nextPage: G,
    changeRowsPerPage: I,
    changePage: O,
    getCellParams: B,
    getCellClass: J,
    getNodeParams: E,
    getCellDisplay: K,
    getNodeDisplay: q,
    getColumnMenuConfig: Q
  };
}
function ve(s) {
  return s.parent.props.node;
}
export {
  ce as R,
  ve as a,
  ae as g,
  z as s,
  de as u
};
