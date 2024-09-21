import { mergeProps as m, resolveComponent as k, resolveDirective as _, openBlock as u, createBlock as p, Transition as F, withCtx as L, createElementBlock as h, Fragment as P, renderList as B, createElementVNode as S, withDirectives as G, resolveDynamicComponent as y, normalizeClass as V, createCommentVNode as b, toDisplayString as H, normalizeStyle as N, createVNode as E, renderSlot as M, defineComponent as U, ref as Z, computed as W, unref as j } from "vue";
import { B as q, U as A, c as g, C as O, f as v, D as J, i as x, y as K, o as Q, F as X, t as w, G as Y, H as $, I as T, s as D, J as ee } from "./index-CJIVb0yO.js";
import { Z as C, s as te } from "./index-C9ZTedje.js";
import { O as ne } from "./index-C9AiUfGp.js";
import { s as ie } from "./index-BNT1ApyO.js";
import { R as re } from "./index-DeU8Bpar.js";
import { getMenuItemProps as se } from "./src/indices/utils/menu.js";
var oe = function(e) {
  var t = e.dt;
  return `
.p-tieredmenu {
    background: `.concat(t("tieredmenu.background"), `;
    color: `).concat(t("tieredmenu.color"), `;
    border: 1px solid `).concat(t("tieredmenu.border.color"), `;
    border-radius: `).concat(t("tieredmenu.border.radius"), `;
    min-width: 12.5rem;
}

.p-tieredmenu-root-list,
.p-tieredmenu-submenu {
    margin: 0;
    padding: `).concat(t("tieredmenu.list.padding"), `;
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("tieredmenu.list.gap"), `;
}

.p-tieredmenu-submenu {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    background: `).concat(t("tieredmenu.background"), `;
    color: `).concat(t("tieredmenu.color"), `;
    border: 1px solid `).concat(t("tieredmenu.border.color"), `;
    border-radius: `).concat(t("tieredmenu.border.radius"), `;
    box-shadow: `).concat(t("tieredmenu.shadow"), `;
}

.p-tieredmenu-item {
    position: relative;
}

.p-tieredmenu-item-content {
    transition: background `).concat(t("tieredmenu.transition.duration"), ", color ").concat(t("tieredmenu.transition.duration"), `;
    border-radius: `).concat(t("tieredmenu.item.border.radius"), `;
    color: `).concat(t("tieredmenu.item.color"), `;
}

.p-tieredmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("tieredmenu.item.padding"), `;
    gap: `).concat(t("tieredmenu.item.gap"), `;
    user-select: none;
    outline: 0 none;
}

.p-tieredmenu-item-label {
    line-height: 1;
}

.p-tieredmenu-item-icon {
    color: `).concat(t("tieredmenu.item.icon.color"), `;
}

.p-tieredmenu-submenu-icon {
    color: `).concat(t("tieredmenu.submenu.icon.color"), `;
    margin-left: auto;
    font-size: `).concat(t("tieredmenu.submenu.icon.size"), `;
    width: `).concat(t("tieredmenu.submenu.icon.size"), `;
    height: `).concat(t("tieredmenu.submenu.icon.size"), `;
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
    color: `).concat(t("tieredmenu.item.focus.color"), `;
    background: `).concat(t("tieredmenu.item.focus.background"), `;
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: `).concat(t("tieredmenu.item.icon.focus.color"), `;
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: `).concat(t("tieredmenu.submenu.icon.focus.color"), `;
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
    color: `).concat(t("tieredmenu.item.focus.color"), `;
    background: `).concat(t("tieredmenu.item.focus.background"), `;
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
    color: `).concat(t("tieredmenu.item.icon.focus.color"), `;
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
    color: `).concat(t("tieredmenu.submenu.icon.focus.color"), `;
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content {
    color: `).concat(t("tieredmenu.item.active.color"), `;
    background: `).concat(t("tieredmenu.item.active.background"), `;
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: `).concat(t("tieredmenu.item.icon.active.color"), `;
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: `).concat(t("tieredmenu.submenu.icon.active.color"), `;
}

.p-tieredmenu-separator {
    border-top: 1px solid `).concat(t("tieredmenu.separator.border.color"), `;
}

.p-tieredmenu-overlay {
    box-shadow: `).concat(t("tieredmenu.shadow"), `;
}

.p-tieredmenu-enter-from,
.p-tieredmenu-leave-active {
    opacity: 0;
}

.p-tieredmenu-enter-active {
    transition: opacity 250ms;
}
`);
}, ae = {
  submenu: function(e) {
    var t = e.instance, s = e.processedItem;
    return {
      display: t.isItemActive(s) ? "flex" : "none"
    };
  }
}, ue = {
  root: function(e) {
    e.instance;
    var t = e.props;
    return ["p-tieredmenu p-component", {
      "p-tieredmenu-overlay": t.popup
    }];
  },
  start: "p-tieredmenu-start",
  rootList: "p-tieredmenu-root-list",
  item: function(e) {
    var t = e.instance, s = e.processedItem;
    return ["p-tieredmenu-item", {
      "p-tieredmenu-item-active": t.isItemActive(s),
      "p-focus": t.isItemFocused(s),
      "p-disabled": t.isItemDisabled(s)
    }];
  },
  itemContent: "p-tieredmenu-item-content",
  itemLink: "p-tieredmenu-item-link",
  itemIcon: "p-tieredmenu-item-icon",
  itemLabel: "p-tieredmenu-item-label",
  submenuIcon: "p-tieredmenu-submenu-icon",
  submenu: "p-tieredmenu-submenu",
  separator: "p-tieredmenu-separator",
  end: "p-tieredmenu-end"
}, ce = q.extend({
  name: "tieredmenu",
  theme: oe,
  classes: ue,
  inlineStyles: ae
}), de = {
  name: "BaseTieredMenu",
  extends: D,
  props: {
    popup: {
      type: Boolean,
      default: !1
    },
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
    disabled: {
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
  style: ce,
  provide: function() {
    return {
      $pcTieredMenu: this,
      $parentInstance: this
    };
  }
}, z = {
  name: "TieredMenuSub",
  hostName: "TieredMenu",
  extends: D,
  emits: ["item-click", "item-mouseenter", "item-mousemove"],
  container: null,
  props: {
    menuId: {
      type: String,
      default: null
    },
    focusedItemId: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: null
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
    getItemProp: function(e, t, s) {
      return e && e.item ? O(e.item[t], s) : void 0;
    },
    getItemLabel: function(e) {
      return this.getItemProp(e, "label");
    },
    getItemLabelId: function(e) {
      return "".concat(this.menuId, "_").concat(e.key, "_label");
    },
    getPTOptions: function(e, t, s) {
      return this.ptm(s, {
        context: {
          item: e.item,
          index: t,
          active: this.isItemActive(e),
          focused: this.isItemFocused(e),
          disabled: this.isItemDisabled(e)
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
      return g(e.items);
    },
    onEnter: function() {
      ee(this.container, this.level);
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
        processedItem: t
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
      return e - this.items.slice(0, e).filter(function(s) {
        return t.isItemVisible(s) && t.getItemProp(s, "separator");
      }).length + 1;
    },
    getMenuItemProps: function(e, t) {
      return {
        action: m({
          class: this.cx("itemLink"),
          tabindex: -1,
          "aria-hidden": !0
        }, this.getPTOptions(e, t, "itemLink")),
        icon: m({
          class: [this.cx("itemIcon"), this.getItemProp(e, "icon")]
        }, this.getPTOptions(e, t, "itemIcon")),
        label: m({
          class: this.cx("itemLabel")
        }, this.getPTOptions(e, t, "itemLabel")),
        submenuicon: m({
          class: this.cx("submenuIcon")
        }, this.getPTOptions(e, t, "submenuIcon"))
      };
    },
    containerRef: function(e) {
      this.container = e;
    }
  },
  components: {
    AngleRightIcon: ie
  },
  directives: {
    ripple: re
  }
}, me = ["tabindex"], le = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], fe = ["onClick", "onMouseenter", "onMousemove"], he = ["href", "target"], Ie = ["id"], be = ["id"];
function pe(n, e, t, s, o, i) {
  var a = k("AngleRightIcon"), c = k("TieredMenuSub", !0), f = _("ripple");
  return u(), p(F, m({
    name: "p-tieredmenu",
    onEnter: i.onEnter
  }, n.ptm("menu.transition")), {
    default: L(function() {
      return [t.level === 0 || t.visible ? (u(), h("ul", m({
        key: 0,
        ref: i.containerRef,
        class: t.level === 0 ? n.cx("rootList") : n.cx("submenu"),
        tabindex: t.tabindex
      }, t.level === 0 ? n.ptm("rootList") : n.ptm("submenu")), [(u(!0), h(P, null, B(t.items, function(r, d) {
        return u(), h(P, {
          key: i.getItemKey(r)
        }, [i.isItemVisible(r) && !i.getItemProp(r, "separator") ? (u(), h("li", m({
          key: 0,
          id: i.getItemId(r),
          style: i.getItemProp(r, "style"),
          class: [n.cx("item", {
            processedItem: r
          }), i.getItemProp(r, "class")],
          role: "menuitem",
          "aria-label": i.getItemLabel(r),
          "aria-disabled": i.isItemDisabled(r) || void 0,
          "aria-expanded": i.isItemGroup(r) ? i.isItemActive(r) : void 0,
          "aria-haspopup": i.isItemGroup(r) && !i.getItemProp(r, "to") ? "menu" : void 0,
          "aria-level": t.level + 1,
          "aria-setsize": i.getAriaSetSize(),
          "aria-posinset": i.getAriaPosInset(d),
          ref_for: !0
        }, i.getPTOptions(r, d, "item"), {
          "data-p-active": i.isItemActive(r),
          "data-p-focused": i.isItemFocused(r),
          "data-p-disabled": i.isItemDisabled(r)
        }), [S("div", m({
          class: n.cx("itemContent"),
          onClick: function(I) {
            return i.onItemClick(I, r);
          },
          onMouseenter: function(I) {
            return i.onItemMouseEnter(I, r);
          },
          onMousemove: function(I) {
            return i.onItemMouseMove(I, r);
          },
          ref_for: !0
        }, i.getPTOptions(r, d, "itemContent")), [t.templates.item ? (u(), p(y(t.templates.item), {
          key: 1,
          item: r.item,
          hasSubmenu: i.getItemProp(r, "items"),
          label: i.getItemLabel(r),
          props: i.getMenuItemProps(r, d)
        }, null, 8, ["item", "hasSubmenu", "label", "props"])) : G((u(), h("a", m({
          key: 0,
          href: i.getItemProp(r, "url"),
          class: n.cx("itemLink"),
          target: i.getItemProp(r, "target"),
          tabindex: "-1",
          ref_for: !0
        }, i.getPTOptions(r, d, "itemLink")), [t.templates.itemicon ? (u(), p(y(t.templates.itemicon), {
          key: 0,
          item: r.item,
          class: V(n.cx("itemIcon"))
        }, null, 8, ["item", "class"])) : i.getItemProp(r, "icon") ? (u(), h("span", m({
          key: 1,
          class: [n.cx("itemIcon"), i.getItemProp(r, "icon")],
          ref_for: !0
        }, i.getPTOptions(r, d, "itemIcon")), null, 16)) : b("", !0), S("span", m({
          id: i.getItemLabelId(r),
          class: n.cx("itemLabel"),
          ref_for: !0
        }, i.getPTOptions(r, d, "itemLabel")), H(i.getItemLabel(r)), 17, Ie), i.getItemProp(r, "items") ? (u(), h(P, {
          key: 2
        }, [t.templates.submenuicon ? (u(), p(y(t.templates.submenuicon), m({
          key: 0,
          class: n.cx("submenuIcon"),
          active: i.isItemActive(r),
          ref_for: !0
        }, i.getPTOptions(r, d, "submenuIcon")), null, 16, ["class", "active"])) : (u(), p(a, m({
          key: 1,
          class: n.cx("submenuIcon"),
          ref_for: !0
        }, i.getPTOptions(r, d, "submenuIcon")), null, 16, ["class"]))], 64)) : b("", !0)], 16, he)), [[f]])], 16, fe), i.isItemVisible(r) && i.isItemGroup(r) ? (u(), p(c, {
          key: 0,
          id: i.getItemId(r) + "_list",
          style: N(n.sx("submenu", !0, {
            processedItem: r
          })),
          "aria-labelledby": i.getItemLabelId(r),
          role: "menu",
          menuId: t.menuId,
          focusedItemId: t.focusedItemId,
          items: r.items,
          templates: t.templates,
          activeItemPath: t.activeItemPath,
          level: t.level + 1,
          visible: i.isItemActive(r) && i.isItemGroup(r),
          pt: n.pt,
          unstyled: n.unstyled,
          onItemClick: e[0] || (e[0] = function(l) {
            return n.$emit("item-click", l);
          }),
          onItemMouseenter: e[1] || (e[1] = function(l) {
            return n.$emit("item-mouseenter", l);
          }),
          onItemMousemove: e[2] || (e[2] = function(l) {
            return n.$emit("item-mousemove", l);
          })
        }, null, 8, ["id", "style", "aria-labelledby", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "level", "visible", "pt", "unstyled"])) : b("", !0)], 16, le)) : b("", !0), i.isItemVisible(r) && i.getItemProp(r, "separator") ? (u(), h("li", m({
          key: 1,
          id: i.getItemId(r),
          style: i.getItemProp(r, "style"),
          class: [n.cx("separator"), i.getItemProp(r, "class")],
          role: "separator",
          ref_for: !0
        }, n.ptm("separator")), null, 16, be)) : b("", !0)], 64);
      }), 128))], 16, me)) : b("", !0)];
    }),
    _: 1
  }, 16, ["onEnter"]);
}
z.render = pe;
var R = {
  name: "TieredMenu",
  extends: de,
  inheritAttrs: !1,
  emits: ["focus", "blur", "before-show", "before-hide", "hide", "show"],
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  target: null,
  container: null,
  menubar: null,
  searchTimeout: null,
  searchValue: null,
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
      visible: !this.popup,
      submenuVisible: !1,
      dirty: !1
    };
  },
  watch: {
    "$attrs.id": function(e) {
      this.id = e || A();
    },
    activeItemPath: function(e) {
      this.popup || (g(e) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : (this.unbindOutsideClickListener(), this.unbindResizeListener()));
    }
  },
  mounted: function() {
    this.id = this.id || A();
  },
  beforeUnmount: function() {
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.container && this.autoZIndex && C.clear(this.container), this.target = null, this.container = null;
  },
  methods: {
    getItemProp: function(e, t) {
      return e ? O(e[t]) : void 0;
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
      return g(this.getItemProp(e, "items"));
    },
    isItemSeparator: function(e) {
      return this.getItemProp(e, "separator");
    },
    getProccessedItemLabel: function(e) {
      return e ? this.getItemLabel(e.item) : void 0;
    },
    isProccessedItemGroup: function(e) {
      return e && g(e.items);
    },
    toggle: function(e) {
      this.visible ? this.hide(e, !0) : this.show(e);
    },
    show: function(e, t) {
      this.popup && (this.$emit("before-show"), this.visible = !0, this.target = this.target || e.currentTarget, this.relatedTarget = e.relatedTarget || null), t && v(this.menubar);
    },
    hide: function(e, t) {
      this.popup && (this.$emit("before-hide"), this.visible = !1), this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, t && v(this.relatedTarget || this.target || this.menubar), this.dirty = !1;
    },
    onFocus: function(e) {
      this.focused = !0, this.popup || (this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: ""
      }), this.$emit("focus", e);
    },
    onBlur: function(e) {
      this.focused = !1, this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.searchValue = "", this.dirty = !1, this.$emit("blur", e);
    },
    onKeyDown: function(e) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
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
          !t && J(e.key) && this.searchItems(e, e.key);
          break;
      }
    },
    onItemChange: function(e) {
      var t = e.processedItem, s = e.isFocus;
      if (!x(t)) {
        var o = t.index, i = t.key, a = t.level, c = t.parentKey, f = t.items, r = g(f), d = this.activeItemPath.filter(function(l) {
          return l.parentKey !== c && l.parentKey !== i;
        });
        r && (d.push(t), this.submenuVisible = !0), this.focusedItemInfo = {
          index: o,
          level: a,
          parentKey: c
        }, this.activeItemPath = d, r && (this.dirty = !0), s && v(this.menubar);
      }
    },
    onOverlayClick: function(e) {
      ne.emit("overlay-click", {
        originalEvent: e,
        target: this.target
      });
    },
    onItemClick: function(e) {
      var t = e.originalEvent, s = e.processedItem, o = this.isProccessedItemGroup(s), i = x(s.parent), a = this.isSelected(s);
      if (a) {
        var c = s.index, f = s.key, r = s.level, d = s.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(I) {
          return f !== I.key && f.startsWith(I.key);
        }), this.focusedItemInfo = {
          index: c,
          level: r,
          parentKey: d
        }, this.dirty = !i, v(this.menubar);
      } else if (o)
        this.onItemChange(e);
      else {
        var l = i ? s : this.activeItemPath.find(function(I) {
          return I.parentKey === "";
        });
        this.hide(t), this.changeFocusedItemIndex(t, l ? l.index : -1), v(this.menubar);
      }
    },
    onItemMouseEnter: function(e) {
      this.dirty && this.onItemChange(e);
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
          var t = this.visibleItems[this.focusedItemInfo.index], s = this.isProccessedItemGroup(t);
          !s && this.onItemChange({
            originalEvent: e,
            processedItem: t
          });
        }
        this.popup && this.hide(e, !0), e.preventDefault();
      } else {
        var o = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(e, o), e.preventDefault();
      }
    },
    onArrowLeftKey: function(e) {
      var t = this, s = this.visibleItems[this.focusedItemInfo.index], o = this.activeItemPath.find(function(a) {
        return a.key === s.parentKey;
      }), i = x(s.parent);
      i || (this.focusedItemInfo = {
        index: -1,
        parentKey: o ? o.parentKey : ""
      }, this.searchValue = "", this.onArrowDownKey(e)), this.activeItemPath = this.activeItemPath.filter(function(a) {
        return a.parentKey !== t.focusedItemInfo.parentKey;
      }), e.preventDefault();
    },
    onArrowRightKey: function(e) {
      var t = this.visibleItems[this.focusedItemInfo.index], s = this.isProccessedItemGroup(t);
      s && (this.onItemChange({
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
        var t = K(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), s = t && K(t, '[data-pc-section="itemlink"]');
        if (s ? s.click() : t && t.click(), !this.popup) {
          var o = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(o);
          !i && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
        }
      }
      e.preventDefault();
    },
    onSpaceKey: function(e) {
      this.onEnterKey(e);
    },
    onEscapeKey: function(e) {
      if (this.popup || this.focusedItemInfo.level !== 0) {
        var t = this.focusedItemInfo;
        this.hide(e, !1), this.focusedItemInfo = {
          index: Number(t.parentKey.split("_")[0]),
          level: 0,
          parentKey: ""
        }, this.popup && v(this.target);
      }
      e.preventDefault();
    },
    onTabKey: function(e) {
      if (this.focusedItemInfo.index !== -1) {
        var t = this.visibleItems[this.focusedItemInfo.index], s = this.isProccessedItemGroup(t);
        !s && this.onItemChange({
          originalEvent: e,
          processedItem: t
        });
      }
      this.hide();
    },
    onEnter: function(e) {
      this.autoZIndex && C.set("menu", e, this.baseZIndex + this.$primevue.config.zIndex.menu), Q(e, {
        position: "absolute",
        top: "0",
        left: "0"
      }), this.alignOverlay(), v(this.menubar), this.scrollInView();
    },
    onAfterEnter: function() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onLeave: function() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.container = null, this.dirty = !1;
    },
    onAfterLeave: function(e) {
      this.autoZIndex && C.clear(e);
    },
    alignOverlay: function() {
      X(this.container, this.target);
      var e = w(this.target);
      e > w(this.container) && (this.container.style.minWidth = w(this.target) + "px");
    },
    bindOutsideClickListener: function() {
      var e = this;
      this.outsideClickListener || (this.outsideClickListener = function(t) {
        var s = e.container && !e.container.contains(t.target), o = e.popup ? !(e.target && (e.target === t.target || e.target.contains(t.target))) : !0;
        s && o && e.hide();
      }, document.addEventListener("click", this.outsideClickListener));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var e = this;
      this.scrollHandler || (this.scrollHandler = new Y(this.target, function(t) {
        e.hide(t, !0);
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var e = this;
      this.resizeListener || (this.resizeListener = function(t) {
        $() || e.hide(t, !0);
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
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
      return T(this.visibleItems, function(t) {
        return e.isValidItem(t);
      });
    },
    findNextItemIndex: function(e) {
      var t = this, s = e < this.visibleItems.length - 1 ? this.visibleItems.slice(e + 1).findIndex(function(o) {
        return t.isValidItem(o);
      }) : -1;
      return s > -1 ? s + e + 1 : e;
    },
    findPrevItemIndex: function(e) {
      var t = this, s = e > 0 ? T(this.visibleItems.slice(0, e), function(o) {
        return t.isValidItem(o);
      }) : -1;
      return s > -1 ? s : e;
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
      var s = this;
      this.searchValue = (this.searchValue || "") + t;
      var o = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (o = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(a) {
        return s.isItemMatched(a);
      }), o = o === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(a) {
        return s.isItemMatched(a);
      }) : o + this.focusedItemInfo.index) : o = this.visibleItems.findIndex(function(a) {
        return s.isItemMatched(a);
      }), o !== -1 && (i = !0), o === -1 && this.focusedItemInfo.index === -1 && (o = this.findFirstFocusedItemIndex()), o !== -1 && this.changeFocusedItemIndex(e, o), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        s.searchValue = "", s.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(e, t) {
      this.focusedItemInfo.index !== t && (this.focusedItemInfo.index = t, this.scrollInView());
    },
    scrollInView: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, t = e !== -1 ? "".concat(this.id, "_").concat(e) : this.focusedItemId, s = K(this.menubar, 'li[id="'.concat(t, '"]'));
      s && s.scrollIntoView && s.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(e) {
      var t = this, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", a = [];
      return e && e.forEach(function(c, f) {
        var r = (i !== "" ? i + "_" : "") + f, d = {
          item: c,
          index: f,
          level: s,
          key: r,
          parent: o,
          parentKey: i
        };
        d.items = t.createProcessedItems(c.items, s + 1, d, r), a.push(d);
      }), a;
    },
    containerRef: function(e) {
      this.container = e;
    },
    menubarRef: function(e) {
      this.menubar = e ? e.$el : void 0;
    }
  },
  computed: {
    processedItems: function() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems: function() {
      var e = this, t = this.activeItemPath.find(function(s) {
        return s.key === e.focusedItemInfo.parentKey;
      });
      return t ? t.items : this.processedItems;
    },
    focusedItemId: function() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.id).concat(g(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    TieredMenuSub: z,
    Portal: te
  }
}, ve = ["id"];
function ge(n, e, t, s, o, i) {
  var a = k("TieredMenuSub"), c = k("Portal");
  return u(), p(c, {
    appendTo: n.appendTo,
    disabled: !n.popup
  }, {
    default: L(function() {
      return [E(F, m({
        name: "p-connected-overlay",
        onEnter: i.onEnter,
        onAfterEnter: i.onAfterEnter,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave
      }, n.ptm("transition")), {
        default: L(function() {
          return [o.visible ? (u(), h("div", m({
            key: 0,
            ref: i.containerRef,
            id: o.id,
            class: n.cx("root"),
            onClick: e[0] || (e[0] = function() {
              return i.onOverlayClick && i.onOverlayClick.apply(i, arguments);
            })
          }, n.ptmi("root")), [n.$slots.start ? (u(), h("div", m({
            key: 0,
            class: n.cx("start")
          }, n.ptm("start")), [M(n.$slots, "start")], 16)) : b("", !0), E(a, {
            ref: i.menubarRef,
            id: o.id + "_list",
            tabindex: n.disabled ? -1 : n.tabindex,
            role: "menubar",
            "aria-label": n.ariaLabel,
            "aria-labelledby": n.ariaLabelledby,
            "aria-disabled": n.disabled || void 0,
            "aria-orientation": "vertical",
            "aria-activedescendant": o.focused ? i.focusedItemId : void 0,
            menuId: o.id,
            focusedItemId: o.focused ? i.focusedItemId : void 0,
            items: i.processedItems,
            templates: n.$slots,
            activeItemPath: o.activeItemPath,
            level: 0,
            visible: o.submenuVisible,
            pt: n.pt,
            unstyled: n.unstyled,
            onFocus: i.onFocus,
            onBlur: i.onBlur,
            onKeydown: i.onKeyDown,
            onItemClick: i.onItemClick,
            onItemMouseenter: i.onItemMouseEnter,
            onItemMousemove: i.onItemMouseMove
          }, null, 8, ["id", "tabindex", "aria-label", "aria-labelledby", "aria-disabled", "aria-activedescendant", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "visible", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), n.$slots.end ? (u(), h("div", m({
            key: 1,
            class: n.cx("end")
          }, n.ptm("end")), [M(n.$slots, "end")], 16)) : b("", !0)], 16, ve)) : b("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
R.render = ge;
const Ce = /* @__PURE__ */ U({
  __name: "BaseMenu",
  props: {
    items: {}
  },
  setup(n, { expose: e }) {
    const t = n, s = Z(), o = W(() => t.items.map((c) => se(c)));
    function i(c) {
      return typeof c != "string";
    }
    function a(c) {
      var f;
      (f = s.value) == null || f.toggle(c);
    }
    return e({
      toggle: a
    }), (c, f) => (u(), p(j(R), {
      ref_key: "componentEl",
      ref: s,
      model: o.value
    }, {
      itemicon: L((r) => [
        i(r.item.icon) ? (u(), p(y(r.item.icon), {
          key: 0,
          class: V(["mr-1 size-4", r.item.iconCls])
        }, null, 8, ["class"])) : b("", !0)
      ]),
      _: 1
    }, 8, ["model"]));
  }
});
export {
  Ce as _
};
