import { mergeProps as m, resolveComponent as g, resolveDirective as z, openBlock as c, createBlock as I, Transition as F, withCtx as C, createElementBlock as h, Fragment as y, renderList as O, createElementVNode as w, withDirectives as R, resolveDynamicComponent as L, normalizeClass as K, createCommentVNode as b, toDisplayString as B, createVNode as M, defineComponent as G, ref as N, computed as H, unref as U } from "vue";
import { B as Z, U as E, c as p, C as D, f as x, D as W, i as A, y as k, o as X, K as Y, L as j, M as q, H as J, I as S, s as V, J as Q } from "../index-CJIVb0yO.js";
import { Z as P, s as $ } from "../index-C9ZTedje.js";
import { s as ee } from "../index-BNT1ApyO.js";
import { R as te } from "../index-DeU8Bpar.js";
import { getMenuItemProps as ne } from "../utils/menu.js";
var ie = function(e) {
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
}, oe = {
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
}, se = Z.extend({
  name: "contextmenu",
  theme: ie,
  classes: oe
}), re = {
  name: "BaseContextMenu",
  extends: V,
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
  style: se,
  provide: function() {
    return {
      $pcContextMenu: this,
      $parentInstance: this
    };
  }
}, T = {
  name: "ContextMenuSub",
  hostName: "ContextMenu",
  extends: V,
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
      return e && e.item ? D(e.item[t], o) : void 0;
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
      Q(this.$refs.container, this.level);
    },
    getMenuItemProps: function(e, t) {
      return {
        action: m({
          class: this.cx("itemLink"),
          tabindex: -1,
          "aria-hidden": !0
        }, this.getPTOptions("itemLink", e, t)),
        icon: m({
          class: [this.cx("itemIcon"), this.getItemProp(e, "icon")]
        }, this.getPTOptions("itemIcon", e, t)),
        label: m({
          class: this.cx("itemLabel")
        }, this.getPTOptions("itemLabel", e, t)),
        submenuicon: m({
          class: this.cx("submenuIcon")
        }, this.getPTOptions("submenuicon", e, t))
      };
    }
  },
  components: {
    AngleRightIcon: ee
  },
  directives: {
    ripple: te
  }
}, ae = ["tabindex"], ue = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], ce = ["onClick", "onMouseenter", "onMousemove"], me = ["href", "target"], le = ["id"], de = ["id"];
function fe(n, e, t, o, r, i) {
  var a = g("AngleRightIcon"), u = g("ContextMenuSub", !0), d = z("ripple");
  return c(), I(F, m({
    name: "p-contextmenusub",
    onEnter: i.onEnter
  }, n.ptm("menu.transition")), {
    default: C(function() {
      return [t.root || t.visible ? (c(), h("ul", m({
        key: 0,
        ref: "container",
        tabindex: t.tabindex
      }, n.ptm("rootList")), [(c(!0), h(y, null, O(t.items, function(s, l) {
        return c(), h(y, {
          key: i.getItemKey(s)
        }, [i.isItemVisible(s) && !i.getItemProp(s, "separator") ? (c(), h("li", m({
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
        }), [w("div", m({
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
        }, i.getPTOptions("itemContent", s, l)), [t.templates.item ? (c(), I(L(t.templates.item), {
          key: 1,
          item: s.item,
          hasSubmenu: i.getItemProp(s, "items"),
          label: i.getItemLabel(s),
          props: i.getMenuItemProps(s, l)
        }, null, 8, ["item", "hasSubmenu", "label", "props"])) : R((c(), h("a", m({
          key: 0,
          href: i.getItemProp(s, "url"),
          class: n.cx("itemLink"),
          target: i.getItemProp(s, "target"),
          tabindex: "-1",
          ref_for: !0
        }, i.getPTOptions("itemLink", s, l)), [t.templates.itemicon ? (c(), I(L(t.templates.itemicon), {
          key: 0,
          item: s.item,
          class: K(n.cx("itemIcon"))
        }, null, 8, ["item", "class"])) : i.getItemProp(s, "icon") ? (c(), h("span", m({
          key: 1,
          class: [n.cx("itemIcon"), i.getItemProp(s, "icon")],
          ref_for: !0
        }, i.getPTOptions("itemIcon", s, l)), null, 16)) : b("", !0), w("span", m({
          id: i.getItemLabelId(s),
          class: n.cx("itemLabel"),
          ref_for: !0
        }, i.getPTOptions("itemLabel", s, l)), B(i.getItemLabel(s)), 17, le), i.getItemProp(s, "items") ? (c(), h(y, {
          key: 2
        }, [t.templates.submenuicon ? (c(), I(L(t.templates.submenuicon), {
          key: 0,
          active: i.isItemActive(s),
          class: K(n.cx("submenuIcon"))
        }, null, 8, ["active", "class"])) : (c(), I(a, m({
          key: 1,
          class: n.cx("submenuIcon"),
          ref_for: !0
        }, i.getPTOptions("submenuicon", s, l)), null, 16, ["class"]))], 64)) : b("", !0)], 16, me)), [[d]])], 16, ce), i.isItemVisible(s) && i.isItemGroup(s) ? (c(), I(u, m({
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
        }, n.ptm("submenu")), null, 16, ["id", "class", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "level", "visible", "pt", "unstyled", "aria-labelledby"])) : b("", !0)], 16, ue)) : b("", !0), i.isItemVisible(s) && i.getItemProp(s, "separator") ? (c(), h("li", m({
          key: 1,
          id: i.getItemId(s),
          style: i.getItemProp(s, "style"),
          class: [n.cx("separator"), i.getItemProp(s, "class")],
          role: "separator",
          ref_for: !0
        }, n.ptm("separator")), null, 16, de)) : b("", !0)], 64);
      }), 128))], 16, ae)) : b("", !0)];
    }),
    _: 1
  }, 16, ["onEnter"]);
}
T.render = fe;
var _ = {
  name: "ContextMenu",
  extends: re,
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
      this.id = e || E();
    },
    activeItemPath: function(e) {
      p(e) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : this.visible || (this.unbindOutsideClickListener(), this.unbindResizeListener());
    }
  },
  mounted: function() {
    this.id = this.id || E(), this.global && this.bindDocumentContextMenuListener();
  },
  beforeUnmount: function() {
    this.unbindResizeListener(), this.unbindOutsideClickListener(), this.unbindDocumentContextMenuListener(), this.container && this.autoZIndex && P.clear(this.container), this.target = null, this.container = null;
  },
  methods: {
    getItemProp: function(e, t) {
      return e ? D(e[t]) : void 0;
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
          !t && W(e.key) && this.searchItems(e, e.key);
          break;
      }
    },
    onItemChange: function(e) {
      var t = e.processedItem, o = e.isFocus;
      if (!A(t)) {
        var r = t.index, i = t.key, a = t.level, u = t.parentKey, d = t.items, s = p(d), l = this.activeItemPath.filter(function(f) {
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
        var i = t.index, a = t.key, u = t.level, d = t.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(s) {
          return a !== s.key && a.startsWith(s.key);
        }), this.focusedItemInfo = {
          index: i,
          level: u,
          parentKey: d
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
      }), i = A(o.parent);
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
      X(e, {
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
      var e = this.pageX + 1, t = this.pageY + 1, o = this.container.offsetParent ? this.container.offsetWidth : Y(this.container), r = this.container.offsetParent ? this.container.offsetHeight : j(this.container), i = q();
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
        e.visible && !J() && e.hide();
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
      return S(this.visibleItems, function(t) {
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
      var t = this, o = e > 0 ? S(this.visibleItems.slice(0, e), function(r) {
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
      return e && e.forEach(function(u, d) {
        var s = (i !== "" ? i + "_" : "") + d, l = {
          item: u,
          index: d,
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
    ContextMenuSub: T,
    Portal: $
  }
};
function he(n, e, t, o, r, i) {
  var a = g("ContextMenuSub"), u = g("Portal");
  return c(), I(u, {
    appendTo: n.appendTo
  }, {
    default: C(function() {
      return [M(F, m({
        name: "p-contextmenu",
        onEnter: i.onEnter,
        onAfterEnter: i.onAfterEnter,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave
      }, n.ptm("transition")), {
        default: C(function() {
          return [r.visible ? (c(), h("div", m({
            key: 0,
            ref: i.containerRef,
            class: n.cx("root")
          }, n.ptmi("root")), [M(a, {
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
_.render = he;
const ye = /* @__PURE__ */ G({
  __name: "BaseContextMenu",
  props: {
    items: {}
  },
  setup(n, { expose: e }) {
    const t = n, o = N(), r = H(() => t.items.map((u) => ne(u)));
    function i(u) {
      var d;
      (d = o.value) == null || d.show(u);
    }
    function a() {
      var u;
      (u = o.value) == null || u.hide();
    }
    return e({
      show: i,
      hide: a
    }), (u, d) => (c(), I(U(_), {
      ref_key: "rootCmp",
      ref: o,
      model: r.value
    }, null, 8, ["model"]));
  }
});
export {
  ye as BaseContextMenu
};
