function l({ text: r, icon: a, visible: n, click: p, items: e, iconCls: u }) {
  return a && (a = a.name), {
    icon: a,
    iconCls: u,
    visible: n,
    label: r,
    command: p,
    items: e == null ? void 0 : e.map((f) => l(f))
  };
}
export {
  l as getMenuItemProps
};
