import { renderSlot as M, openBlock as m, createBlock as I, Teleport as Z, createCommentVNode as b, createElementBlock as h, mergeProps as d, createElementVNode as C, resolveComponent as g, resolveDirective as G, Transition as D, withCtx as w, Fragment as y, renderList as N, withDirectives as U, resolveDynamicComponent as L, normalizeClass as K, toDisplayString as j, createVNode as E, defineComponent as H, ref as W, computed as X, unref as Y } from "vue";
import { c as q, B as J, s as Q, U as A, i as p, r as V, f as x, d as $, a as S, e as k, g as ee, h as te, j as ne, k as ie, l as oe, m as F, b as T, n as se, R as re } from "../index-C0xNhkc9.js";
function ae() {
  let n = [];
  const e = (a, u, c = 999) => {
    const s = r(a, u, c), l = s.value + (s.key === a ? 0 : c) + 1;
    return n.push({ key: a, value: l }), l;
  }, t = (a) => {
    n = n.filter((u) => u.value !== a);
  }, o = (a, u) => r(a).value, r = (a, u, c = 0) => [...n].reverse().find((s) => !0) || { key: a, value: c }, i = (a) => a && parseInt(a.style.zIndex, 10) || 0;
  return {
    get: i,
    set: (a, u, c) => {
      u && (u.style.zIndex = String(e(a, !0, c)));
    },
    clear: (a) => {
      a && (t(i(a)), a.style.zIndex = "");
    },
    getCurrent: (a) => o(a)
  };
}
var P = ae(), z = {
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
    this.mounted = q();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function ue(n, e, t, o, r, i) {
  return i.inline ? M(n.$slots, "default", {
    key: 0
  }) : r.mounted ? (m(), I(Z, {
    key: 1,
    to: t.appendTo
  }, [M(n.$slots, "default")], 8, ["to"])) : b("", !0);
}
z.render = ue;
var ce = function(e) {
  var t = e.dt;
  return `
.p-contextmenu {
    background: `.concat(t("contextmenu.background"), `;
    color: `).concat(t("contextmenu.color"), `;
    border: 1px solid `).concat(t("contextmenu.border.color"), `;
    border-radius: `).concat(t("contextmenu.border.radius"), `;
    box-shadow: `).concat(t("contextmenu.shadow"), `;
    min-width: 12.5rem;
}

.p-contextmenu-root-list,
.p-contextmenu-submenu {
    margin: 0;
    padding: `).concat(t("contextmenu.list.padding"), `;
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("contextmenu.list.gap"), `;
}

.p-contextmenu-submenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    z-index: 1;
    background: `).concat(t("contextmenu.background"), `;
    color: `).concat(t("contextmenu.color"), `;
    border: 1px solid `).concat(t("contextmenu.border.color"), `;
    border-radius: `).concat(t("contextmenu.border.radius"), `;
    box-shadow: `).concat(t("contextmenu.shadow"), `;
}

.p-contextmenu-item {
    position: relative;
}

.p-contextmenu-item-content {
    transition: background `).concat(t("contextmenu.transition.duration"), ", color ").concat(t("contextmenu.transition.duration"), `;
    border-radius: `).concat(t("contextmenu.item.border.radius"), `;
    color: `).concat(t("contextmenu.item.color"), `;
}

.p-contextmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("contextmenu.item.padding"), `;
    gap: `).concat(t("contextmenu.item.gap"), `;
    user-select: none;
}

.p-contextmenu-item-label {
    line-height: 1;
}

.p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.color"), `;
}

.p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.color"), `;
    margin-left: auto;
    font-size: `).concat(t("contextmenu.submenu.icon.size"), `;
    width: `).concat(t("contextmenu.submenu.icon.size"), `;
    height: `).concat(t("contextmenu.submenu.icon.size"), `;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content {
    color: `).concat(t("contextmenu.item.focus.color"), `;
    background: `).concat(t("contextmenu.item.focus.background"), `;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.focus.color"), `;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.focus.color"), `;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
    color: `).concat(t("contextmenu.item.focus.color"), `;
    background: `).concat(t("contextmenu.item.focus.background"), `;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.focus.color"), `;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.focus.color"), `;
}

.p-contextmenu-item-active > .p-contextmenu-item-content {
    color: `).concat(t("contextmenu.item.active.color"), `;
    background: `).concat(t("contextmenu.item.active.background"), `;
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.active.color"), `;
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.active.color"), `;
}

.p-contextmenu-separator {
    border-top: 1px solid  `).concat(t("contextmenu.separator.border.color"), `;
}

.p-contextmenu-enter-from,
.p-contextmenu-leave-active {
    opacity: 0;
}

.p-contextmenu-enter-active {
    transition: opacity 250ms;
}
`);
}, me = {
  root: "p-contextmenu p-component",
  rootList: "p-contextmenu-root-list",
  item: function(e) {
    var t = e.instance, o = e.processedItem;
    return ["p-contextmenu-item", {
      "p-contextmenu-item-active": t.isItemActive(o),
      "p-focus": t.isItemFocused(o),
      "p-disabled": t.isItemDisabled(o)
    }];
  },
  itemContent: "p-contextmenu-item-content",
  itemLink: "p-contextmenu-item-link",
  itemIcon: "p-contextmenu-item-icon",
  itemLabel: "p-contextmenu-item-label",
  submenuIcon: "p-contextmenu-submenu-icon",
  submenu: "p-contextmenu-submenu",
  separator: "p-contextmenu-separator"
}, le = J.extend({
  name: "contextmenu",
  theme: ce,
  classes: me
}), _ = {
  name: "AngleRightIcon",
  extends: Q
};
function de(n, e, t, o, r, i) {
  return m(), h("svg", d({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, n.pti()), e[0] || (e[0] = [C("path", {
    d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
_.render = de;
var fe = {
  name: "BaseContextMenu",
  extends: T,
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
  style: le,
  provide: function() {
    return {
      $pcContextMenu: this,
      $parentInstance: this
    };
  }
}, O = {
  name: "ContextMenuSub",
  hostName: "ContextMenu",
  extends: T,
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
    getItemId: function(e) {
      return "".concat(this.menuId, "_").concat(e.key);
    },
    getItemKey: function(e) {
      return this.getItemId(e);
    },
    getItemProp: function(e, t, o) {
      return e && e.item ? V(e.item[t], o) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    getItemLabelId: function(e) {
      return "".concat(this.menuId, "_").concat(e.key, "_label");
    },
    getPTOptions: function(e, t, o) {
      return this.ptm(e, {
        context: {
          item: t.item,
          active: this.isItemActive(t),
          focused: this.isItemFocused(t),
          disabled: this.isItemDisabled(t),
          index: o
        }
      });
    },
    isItemActive: function(e) {
      return this.activeItemPath.some(function(t) {
        return t.key === e.key;
      });
    },
    isItemVisible: function(e) {
      return this.getItemProp(e, "visible") !== !1;
    },
    isItemDisabled: function(e) {
      return this.getItemProp(e, "disabled");
    },
    isItemFocused: function(e) {
      return this.focusedItemId === this.getItemId(e);
    },
    isItemGroup: function(e) {
      return p(e.items);
    },
    onItemClick: function(e, t) {
      this.getItemProp(t, "command", {
        originalEvent: e,
        item: t.item
      }), this.$emit("item-click", {
        originalEvent: e,
        processedItem: t,
        isFocus: !0
      });
    },
    onItemMouseEnter: function(e, t) {
      this.$emit("item-mouseenter", {
        originalEvent: e,
        processedItem: t
      });
    },
    onItemMouseMove: function(e, t) {
      this.$emit("item-mousemove", {
        originalEvent: e,
        processedItem: t,
        isFocus: !0
      });
    },
    getAriaSetSize: function() {
      var e = this;
      return this.items.filter(function(t) {
        return e.isItemVisible(t) && !e.getItemProp(t, "separator");
      }).length;
    },
    getAriaPosInset: function(e) {
      var t = this;
      return e - this.items.slice(0, e).filter(function(o) {
        return t.isItemVisible(o) && t.getItemProp(o, "separator");
      }).length + 1;
    },
    onEnter: function() {
      se(this.$refs.container, this.level);
    },
    getMenuItemProps: function(e, t) {
      return {
        action: d({
          class: this.cx("itemLink"),
          tabindex: -1,
          "aria-hidden": !0
        }, this.getPTOptions("itemLink", e, t)),
        icon: d({
          class: [this.cx("itemIcon"), this.getItemProp(e, "icon")]
        }, this.getPTOptions("itemIcon", e, t)),
        label: d({
          class: this.cx("itemLabel")
        }, this.getPTOptions("itemLabel", e, t)),
        submenuicon: d({
          class: this.cx("submenuIcon")
        }, this.getPTOptions("submenuicon", e, t))
      };
    }
  },
  components: {
    AngleRightIcon: _
  },
  directives: {
    ripple: re
  }
}, he = ["tabindex"], Ie = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], be = ["onClick", "onMouseenter", "onMousemove"], pe = ["href", "target"], ve = ["id"], xe = ["id"];
function ge(n, e, t, o, r, i) {
  var a = g("AngleRightIcon"), u = g("ContextMenuSub", !0), c = G("ripple");
  return m(), I(D, d({
    name: "p-contextmenusub",
    onEnter: i.onEnter
  }, n.ptm("menu.transition")), {
    default: w(function() {
      return [t.root || t.visible ? (m(), h("ul", d({
        key: 0,
        ref: "container",
        tabindex: t.tabindex
      }, n.ptm("rootList")), [(m(!0), h(y, null, N(t.items, function(s, l) {
        return m(), h(y, {
          key: i.getItemKey(s)
        }, [i.isItemVisible(s) && !i.getItemProp(s, "separator") ? (m(), h("li", d({
          key: 0,
          id: i.getItemId(s),
          style: i.getItemProp(s, "style"),
          class: [n.cx("item", {
            processedItem: s
          }), i.getItemProp(s, "class")],
          role: "menuitem",
          "aria-label": i.getItemLabel(s),
          "aria-disabled": i.isItemDisabled(s) || void 0,
          "aria-expanded": i.isItemGroup(s) ? i.isItemActive(s) : void 0,
          "aria-haspopup": i.isItemGroup(s) && !i.getItemProp(s, "to") ? "menu" : void 0,
          "aria-level": t.level + 1,
          "aria-setsize": i.getAriaSetSize(),
          "aria-posinset": i.getAriaPosInset(l),
          ref_for: !0
        }, i.getPTOptions("item", s, l), {
          "data-p-active": i.isItemActive(s),
          "data-p-focused": i.isItemFocused(s),
          "data-p-disabled": i.isItemDisabled(s)
        }), [C("div", d({
          class: n.cx("itemContent"),
          onClick: function(v) {
            return i.onItemClick(v, s);
          },
          onMouseenter: function(v) {
            return i.onItemMouseEnter(v, s);
          },
          onMousemove: function(v) {
            return i.onItemMouseMove(v, s);
          },
          ref_for: !0
        }, i.getPTOptions("itemContent", s, l)), [t.templates.item ? (m(), I(L(t.templates.item), {
          key: 1,
          item: s.item,
          hasSubmenu: i.getItemProp(s, "items"),
          label: i.getItemLabel(s),
          props: i.getMenuItemProps(s, l)
        }, null, 8, ["item", "hasSubmenu", "label", "props"])) : U((m(), h("a", d({
          key: 0,
          href: i.getItemProp(s, "url"),
          class: n.cx("itemLink"),
          target: i.getItemProp(s, "target"),
          tabindex: "-1",
          ref_for: !0
        }, i.getPTOptions("itemLink", s, l)), [t.templates.itemicon ? (m(), I(L(t.templates.itemicon), {
          key: 0,
          item: s.item,
          class: K(n.cx("itemIcon"))
        }, null, 8, ["item", "class"])) : i.getItemProp(s, "icon") ? (m(), h("span", d({
          key: 1,
          class: [n.cx("itemIcon"), i.getItemProp(s, "icon")],
          ref_for: !0
        }, i.getPTOptions("itemIcon", s, l)), null, 16)) : b("", !0), C("span", d({
          id: i.getItemLabelId(s),
          class: n.cx("itemLabel"),
          ref_for: !0
        }, i.getPTOptions("itemLabel", s, l)), j(i.getItemLabel(s)), 17, ve), i.getItemProp(s, "items") ? (m(), h(y, {
          key: 2
        }, [t.templates.submenuicon ? (m(), I(L(t.templates.submenuicon), {
          key: 0,
          active: i.isItemActive(s),
          class: K(n.cx("submenuIcon"))
        }, null, 8, ["active", "class"])) : (m(), I(a, d({
          key: 1,
          class: n.cx("submenuIcon"),
          ref_for: !0
        }, i.getPTOptions("submenuicon", s, l)), null, 16, ["class"]))], 64)) : b("", !0)], 16, pe)), [[c]])], 16, be), i.isItemVisible(s) && i.isItemGroup(s) ? (m(), I(u, d({
          key: 0,
          id: i.getItemId(s) + "_list",
          role: "menu",
          class: n.cx("submenu"),
          menuId: t.menuId,
          focusedItemId: t.focusedItemId,
          items: s.items,
          templates: t.templates,
          activeItemPath: t.activeItemPath,
          level: t.level + 1,
          visible: i.isItemActive(s) && i.isItemGroup(s),
          pt: n.pt,
          unstyled: n.unstyled,
          onItemClick: e[0] || (e[0] = function(f) {
            return n.$emit("item-click", f);
          }),
          onItemMouseenter: e[1] || (e[1] = function(f) {
            return n.$emit("item-mouseenter", f);
          }),
          onItemMousemove: e[2] || (e[2] = function(f) {
            return n.$emit("item-mousemove", f);
          }),
          "aria-labelledby": i.getItemLabelId(s),
          ref_for: !0
        }, n.ptm("submenu")), null, 16, ["id", "class", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "level", "visible", "pt", "unstyled", "aria-labelledby"])) : b("", !0)], 16, Ie)) : b("", !0), i.isItemVisible(s) && i.getItemProp(s, "separator") ? (m(), h("li", d({
          key: 1,
          id: i.getItemId(s),
          style: i.getItemProp(s, "style"),
          class: [n.cx("separator"), i.getItemProp(s, "class")],
          role: "separator",
          ref_for: !0
        }, n.ptm("separator")), null, 16, xe)) : b("", !0)], 64);
      }), 128))], 16, he)) : b("", !0)];
    }),
    _: 1
  }, 16, ["onEnter"]);
}
O.render = ge;
var R = {
  name: "ContextMenu",
  extends: fe,
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
    "$attrs.id": function(e) {
      this.id = e || A();
    },
    activeItemPath: function(e) {
      p(e) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : this.visible || (this.unbindOutsideClickListener(), this.unbindResizeListener());
    }
  },
  mounted: function() {
    this.id = this.id || A(), this.global && this.bindDocumentContextMenuListener();
  },
  beforeUnmount: function() {
    this.unbindResizeListener(), this.unbindOutsideClickListener(), this.unbindDocumentContextMenuListener(), this.container && this.autoZIndex && P.clear(this.container), this.target = null, this.container = null;
  },
  methods: {
    getItemProp: function(e, t) {
      return e ? V(e[t]) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    isItemDisabled: function(e) {
      return this.getItemProp(e, "disabled");
    },
    isItemVisible: function(e) {
      return this.getItemProp(e, "visible") !== !1;
    },
    isItemGroup: function(e) {
      return p(this.getItemProp(e, "items"));
    },
    isItemSeparator: function(e) {
      return this.getItemProp(e, "separator");
    },
    getProccessedItemLabel: function(e) {
      return e ? this.getItemLabel(e.item) : void 0;
    },
    isProccessedItemGroup: function(e) {
      return e && p(e.items);
    },
    toggle: function(e) {
      this.visible ? this.hide() : this.show(e);
    },
    show: function(e) {
      this.$emit("before-show"), this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, x(this.list), this.pageX = e.pageX, this.pageY = e.pageY, this.visible ? this.position() : this.visible = !0, e.stopPropagation(), e.preventDefault();
    },
    hide: function() {
      this.$emit("before-hide"), this.visible = !1, this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      };
    },
    onFocus: function(e) {
      this.focused = !0, this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.$emit("focus", e);
    },
    onBlur: function(e) {
      this.focused = !1, this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.searchValue = "", this.$emit("blur", e);
    },
    onKeyDown: function(e) {
      var t = e.metaKey || e.ctrlKey;
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(e);
          break;
        case "ArrowRight":
          this.onArrowRightKey(e);
          break;
        case "Home":
          this.onHomeKey(e);
          break;
        case "End":
          this.onEndKey(e);
          break;
        case "Space":
          this.onSpaceKey(e);
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
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !t && $(e.key) && this.searchItems(e, e.key);
          break;
      }
    },
    onItemChange: function(e) {
      var t = e.processedItem, o = e.isFocus;
      if (!S(t)) {
        var r = t.index, i = t.key, a = t.level, u = t.parentKey, c = t.items, s = p(c), l = this.activeItemPath.filter(function(f) {
          return f.parentKey !== u && f.parentKey !== i;
        });
        s && (l.push(t), this.submenuVisible = !0), this.focusedItemInfo = {
          index: r,
          level: a,
          parentKey: u
        }, this.activeItemPath = l, o && x(this.list);
      }
    },
    onItemClick: function(e) {
      var t = e.processedItem, o = this.isProccessedItemGroup(t), r = this.isSelected(t);
      if (r) {
        var i = t.index, a = t.key, u = t.level, c = t.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(s) {
          return a !== s.key && a.startsWith(s.key);
        }), this.focusedItemInfo = {
          index: i,
          level: u,
          parentKey: c
        }, x(this.list);
      } else
        o ? this.onItemChange(e) : this.hide();
    },
    onItemMouseEnter: function(e) {
      this.onItemChange(e);
    },
    onItemMouseMove: function(e) {
      this.focused && this.changeFocusedItemIndex(e, e.processedItem.index);
    },
    onArrowDownKey: function(e) {
      var t = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemIndex(e, t), e.preventDefault();
    },
    onArrowUpKey: function(e) {
      if (e.altKey) {
        if (this.focusedItemInfo.index !== -1) {
          var t = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(t);
          !o && this.onItemChange({
            originalEvent: e,
            processedItem: t
          });
        }
        this.popup && this.hide(), e.preventDefault();
      } else {
        var r = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(e, r), e.preventDefault();
      }
    },
    onArrowLeftKey: function(e) {
      var t = this, o = this.visibleItems[this.focusedItemInfo.index], r = this.activeItemPath.find(function(a) {
        return a.key === o.parentKey;
      }), i = S(o.parent);
      i || (this.focusedItemInfo = {
        index: -1,
        parentKey: r ? r.parentKey : ""
      }, this.searchValue = "", this.onArrowDownKey(e)), this.activeItemPath = this.activeItemPath.filter(function(a) {
        return a.parentKey !== t.focusedItemInfo.parentKey;
      }), e.preventDefault();
    },
    onArrowRightKey: function(e) {
      var t = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(t);
      o && (this.onItemChange({
        originalEvent: e,
        processedItem: t
      }), this.focusedItemInfo = {
        index: -1,
        parentKey: t.key
      }, this.searchValue = "", this.onArrowDownKey(e)), e.preventDefault();
    },
    onHomeKey: function(e) {
      this.changeFocusedItemIndex(e, this.findFirstItemIndex()), e.preventDefault();
    },
    onEndKey: function(e) {
      this.changeFocusedItemIndex(e, this.findLastItemIndex()), e.preventDefault();
    },
    onEnterKey: function(e) {
      if (this.focusedItemInfo.index !== -1) {
        var t = k(this.list, 'li[id="'.concat("".concat(this.focusedItemIdx), '"]')), o = t && k(t, '[data-pc-section="itemlink"]');
        o ? o.click() : t && t.click();
        var r = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(r);
        !i && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
      }
      e.preventDefault();
    },
    onSpaceKey: function(e) {
      this.onEnterKey(e);
    },
    onEscapeKey: function(e) {
      this.hide(), !this.popup && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex()), e.preventDefault();
    },
    onTabKey: function(e) {
      if (this.focusedItemInfo.index !== -1) {
        var t = this.visibleItems[this.focusedItemInfo.index], o = this.isProccessedItemGroup(t);
        !o && this.onItemChange({
          originalEvent: e,
          processedItem: t
        });
      }
      this.hide();
    },
    onEnter: function(e) {
      ee(e, {
        position: "absolute"
      }), this.position(), this.autoZIndex && P.set("menu", e, this.baseZIndex + this.$primevue.config.zIndex.menu);
    },
    onAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindResizeListener(), this.$emit("show"), x(this.list);
    },
    onLeave: function() {
      this.$emit("hide"), this.container = null;
    },
    onAfterLeave: function(e) {
      this.autoZIndex && P.clear(e), this.unbindOutsideClickListener(), this.unbindResizeListener();
    },
    position: function() {
      var e = this.pageX + 1, t = this.pageY + 1, o = this.container.offsetParent ? this.container.offsetWidth : te(this.container), r = this.container.offsetParent ? this.container.offsetHeight : ne(this.container), i = ie();
      e + o - document.body.scrollLeft > i.width && (e -= o), t + r - document.body.scrollTop > i.height && (t -= r), e < document.body.scrollLeft && (e = document.body.scrollLeft), t < document.body.scrollTop && (t = document.body.scrollTop), this.container.style.left = e + "px", this.container.style.top = t + "px";
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(t) {
        var o = e.container && !e.container.contains(t.target), r = e.visible ? !(e.target && (e.target === t.target || e.target.contains(t.target))) : !0;
        o && r && e.hide();
      }, document.addEventListener("click", this.outsideClickListener));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener), this.outsideClickListener = null);
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function() {
        e.visible && !oe() && e.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindDocumentContextMenuListener: function() {
      var e = this;
      this.documentContextMenuListener || (this.documentContextMenuListener = function(t) {
        t.button === 2 && e.show(t);
      }, document.addEventListener("contextmenu", this.documentContextMenuListener));
    },
    unbindDocumentContextMenuListener: function() {
      this.documentContextMenuListener && (document.removeEventListener("contextmenu", this.documentContextMenuListener), this.documentContextMenuListener = null);
    },
    isItemMatched: function(e) {
      var t;
      return this.isValidItem(e) && ((t = this.getProccessedItemLabel(e)) === null || t === void 0 ? void 0 : t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    },
    isValidItem: function(e) {
      return !!e && !this.isItemDisabled(e.item) && !this.isItemSeparator(e.item) && this.isItemVisible(e.item);
    },
    isValidSelectedItem: function(e) {
      return this.isValidItem(e) && this.isSelected(e);
    },
    isSelected: function(e) {
      return this.activeItemPath.some(function(t) {
        return t.key === e.key;
      });
    },
    findFirstItemIndex: function() {
      var e = this;
      return this.visibleItems.findIndex(function(t) {
        return e.isValidItem(t);
      });
    },
    findLastItemIndex: function() {
      var e = this;
      return F(this.visibleItems, function(t) {
        return e.isValidItem(t);
      });
    },
    findNextItemIndex: function(e) {
      var t = this, o = e < this.visibleItems.length - 1 ? this.visibleItems.slice(e + 1).findIndex(function(r) {
        return t.isValidItem(r);
      }) : -1;
      return o > -1 ? o + e + 1 : e;
    },
    findPrevItemIndex: function(e) {
      var t = this, o = e > 0 ? F(this.visibleItems.slice(0, e), function(r) {
        return t.isValidItem(r);
      }) : -1;
      return o > -1 ? o : e;
    },
    findSelectedItemIndex: function() {
      var e = this;
      return this.visibleItems.findIndex(function(t) {
        return e.isValidSelectedItem(t);
      });
    },
    findFirstFocusedItemIndex: function() {
      var e = this.findSelectedItemIndex();
      return e < 0 ? this.findFirstItemIndex() : e;
    },
    findLastFocusedItemIndex: function() {
      var e = this.findSelectedItemIndex();
      return e < 0 ? this.findLastItemIndex() : e;
    },
    searchItems: function(e, t) {
      var o = this;
      this.searchValue = (this.searchValue || "") + t;
      var r = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (r = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(a) {
        return o.isItemMatched(a);
      }), r = r === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(a) {
        return o.isItemMatched(a);
      }) : r + this.focusedItemInfo.index) : r = this.visibleItems.findIndex(function(a) {
        return o.isItemMatched(a);
      }), r !== -1 && (i = !0), r === -1 && this.focusedItemInfo.index === -1 && (r = this.findFirstFocusedItemIndex()), r !== -1 && this.changeFocusedItemIndex(e, r), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        o.searchValue = "", o.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(e, t) {
      this.focusedItemInfo.index !== t && (this.focusedItemInfo.index = t, this.scrollInView());
    },
    scrollInView: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, t = e !== -1 ? "".concat(this.id, "_").concat(e) : this.focusedItemIdx, o = k(this.list, 'li[id="'.concat(t, '"]'));
      o && o.scrollIntoView && o.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(e) {
      var t = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", a = [];
      return e && e.forEach(function(u, c) {
        var s = (i !== "" ? i + "_" : "") + c, l = {
          item: u,
          index: c,
          level: o,
          key: s,
          parent: r,
          parentKey: i
        };
        l.items = t.createProcessedItems(u.items, o + 1, l, s), a.push(l);
      }), a;
    },
    containerRef: function(e) {
      this.container = e;
    },
    listRef: function(e) {
      this.list = e ? e.$el : void 0;
    }
  },
  computed: {
    processedItems: function() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems: function() {
      var e = this, t = this.activeItemPath.find(function(o) {
        return o.key === e.focusedItemInfo.parentKey;
      });
      return t ? t.items : this.processedItems;
    },
    focusedItemIdx: function() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.id).concat(p(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    ContextMenuSub: O,
    Portal: z
  }
};
function ye(n, e, t, o, r, i) {
  var a = g("ContextMenuSub"), u = g("Portal");
  return m(), I(u, {
    appendTo: n.appendTo
  }, {
    default: w(function() {
      return [E(D, d({
        name: "p-contextmenu",
        onEnter: i.onEnter,
        onAfterEnter: i.onAfterEnter,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave
      }, n.ptm("transition")), {
        default: w(function() {
          return [r.visible ? (m(), h("div", d({
            key: 0,
            ref: i.containerRef,
            class: n.cx("root")
          }, n.ptmi("root")), [E(a, {
            ref: i.listRef,
            id: r.id + "_list",
            class: K(n.cx("rootList")),
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
          }, null, 8, ["id", "class", "tabindex", "aria-activedescendant", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "aria-labelledby", "aria-label", "visible", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"])], 16)) : b("", !0)];
        }),
        _: 1
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 1
  }, 8, ["appendTo"]);
}
R.render = ye;
function B({ text: n, icon: e, visible: t, click: o, items: r, iconCls: i }) {
  return e && (e = e.name), {
    icon: e,
    iconCls: i,
    visible: t,
    label: n,
    command: o,
    items: r == null ? void 0 : r.map((a) => B(a))
  };
}
const Le = /* @__PURE__ */ H({
  __name: "BaseContextMenu",
  props: {
    items: {}
  },
  setup(n, { expose: e }) {
    const t = n, o = W(), r = X(() => t.items.map((u) => B(u)));
    function i(u) {
      var c;
      (c = o.value) == null || c.show(u);
    }
    function a() {
      var u;
      (u = o.value) == null || u.hide();
    }
    return e({
      show: i,
      hide: a
    }), (u, c) => (m(), I(Y(R), {
      ref_key: "rootCmp",
      ref: o,
      model: r.value
    }, null, 8, ["model"]));
  }
}), Ce = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Le
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ce as default
};
