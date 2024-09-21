import { reactive as H, ref as d, computed as v, watch as X, markRaw as Y, unref as y } from "vue";
import { o as T } from "../index-BIiJXzKL.js";
import { _ as Z } from "../IconLock.vue_vue_type_script_setup_true_lang-DfkxUufn.js";
import { _ as ee } from "../IconNotAllowed.vue_vue_type_script_setup_true_lang-DqLwRzEu.js";
import { _ as F } from "../IconPin.vue_vue_type_script_setup_true_lang-DhNd5-Qf.js";
import { _ as te } from "../IconResetColumn.vue_vue_type_script_setup_true_lang-CwoXOkul.js";
import { _ as ne } from "../IconResetColumns.vue_vue_type_script_setup_true_lang-CayuBvnO.js";
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
function re({ field: n, title: o, classes: a, titleCls: w, titleAlign: f, sortable: i, lock: s, cls: l = "", showMenu: g = !0, id: k, expandable: x, rowspan: u = 1, colspan: _ = 1 }) {
  const h = [];
  g && h.push("pr-10"), f === "center" ? h.push("justify-center") : f === "right" && h.push("justify-end"), s === !1 && (s = void 0);
  const b = {
    field: n,
    rowspan: u,
    colspan: _,
    pt: {
      headerContent: {
        class: h
      },
      ...a
    },
    header: o,
    headerClass: w,
    sortable: i ?? !0,
    frozen: !!s,
    alignFrozen: s,
    class: l,
    columnKey: k,
    expander: x
  };
  return H(b);
}
function z(n, o) {
  o.lock = n, o.props && (o.props.frozen = !!o.lock, o.props.alignFrozen = o.lock === !1 ? void 0 : o.lock);
}
function M(n) {
  n.sort(({ lock: o }, { lock: a }) => o === "left" ? -1 : a === "left" ? 1 : o === !1 ? -1 : a === !1 || o === "right" ? 1 : a === "right" ? -1 : 0);
}
function de(n, o) {
  const a = d([]), w = d([]), f = d([]), i = d(0), s = d(20), l = d(1), g = d(!1), k = d(""), x = H({}), u = v(() => (l.value - 1) * s.value), _ = v(() => n.remoteMax ?? s.value), h = v(() => {
    const e = {};
    n.showHeader || (e.header = ["hidden"]), n.showPagination || (e.footer = ["hidden"]);
    const t = {
      pt: e,
      showGridlines: n.showLinesRow,
      rowHover: n.showHoverRow,
      scrollable: !0,
      scrollHeight: "flex",
      size: "small",
      stripedRows: n.showStripedRows,
      resizableColumns: n.columnsResize,
      columnResizeMode: "expand",
      reorderableColumns: n.columnsReorder,
      removableSort: !0,
      paginator: n.showPagination,
      paginatorTemplate: ""
    };
    return n.multiSelect ? t.selectionMode = "multiple" : n.multiSelect === !1 && (t.selectionMode = "single"), t;
  }), b = v(() => i.value === 0 ? 0 : u.value + 1), N = v(() => {
    const e = u.value + s.value;
    return e > i.value ? i.value : e;
  }), j = v(() => l.value === 1), D = v(() => u.value + s.value >= i.value), $ = v(() => Math.ceil(i.value / s.value));
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
    l.value = Math.floor((u.value + 1) / e) + 1, s.value = e, p();
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
          z("left", e), M(a.value);
        }
      }, {
        text: "Right",
        icon: F,
        iconCls: "-rotate-90",
        click() {
          z("right", e), M(a.value);
        }
      }, {
        text: "None",
        icon: ee,
        click() {
          z(!1, e), M(a.value);
        }
      }]
    }, {
      text: "Reset Column",
      icon: te
    }, {
      text: "Reset All Columns",
      icon: ne
    }), {
      items: t
    };
  }
  async function p(e) {
    const { load: t } = n;
    if (t) {
      const c = y(f), P = y(u), r = y(i);
      let C = P, L = !0, R = P + s.value;
      for (r && (R = R > r - 1 ? r : R), C; C < R; C++)
        if (c[C] === void 0) {
          L = !1;
          break;
        }
      if (L || e === 0 || e === r || e && (e >= s.value || e < _.value)) {
        g.value = !1;
        return;
      }
      const U = l.value, V = y(_);
      g.value = !0;
      try {
        const m = await t({
          page: U,
          filters: x,
          start: C,
          limit: V
        }), S = Array.isArray(m) ? m : m.data ?? [];
        e ?? (e = 0), e += S.length, m.total && (i.value = m.total);
        for (const W of S)
          c[C++] = W;
        p(e);
      } catch (m) {
        throw g.value = !1, m;
      }
    } else
      o("load");
  }
  return X(() => n.columns, (e = []) => {
    const { remote: t } = n;
    w.value = [], a.value = e.map(({ ...c }, P) => {
      const r = Y(c);
      return r.id ?? (r.id = r.field || `col_${P}`), r.indexOriginal = P, r.stateful ?? (r.stateful = !0), r.lock ?? (r.lock = !1), r.props = re(r), r.field && !t && w.value.push(r.field), r;
    });
  }, {
    immediate: !0
  }), {
    startDisplay: b,
    endDisplay: N,
    isPageFirst: j,
    isPageLast: D,
    totalPages: $,
    columnsConfig: a,
    filterFields: w,
    propsComponent: h,
    loadRecords: p,
    recordsTotal: i,
    recordsCached: f,
    filters: x,
    search: k,
    start: u,
    loading: g,
    rowsPerPage: s,
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
function ve(n) {
  return n.parent.props.node;
}
export {
  ce as RowsPerPageOptions,
  re as getColumnProps,
  ve as getPassThroughNode,
  z as setColumnLock,
  de as useDataTable
};
