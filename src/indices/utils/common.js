import { d as l, e as p, g as m, i as f, c as y, a as g, b as d, m as h, p as v, r as w, t as A } from "../../../common-CIsHxfXV.js";
var u = a;
function a(e) {
  let t = e;
  var r = {}.toString.call(e).slice(8, -1);
  if (r == "Set")
    return new Set([...e].map((n) => a(n)));
  if (r == "Map")
    return new Map([...e].map((n) => [a(n[0]), a(n[1])]));
  if (r == "Date")
    return new Date(e.getTime());
  if (r == "RegExp")
    return RegExp(e.source, s(e));
  if (r == "Array" || r == "Object") {
    t = Array.isArray(e) ? [] : {};
    for (var i in e)
      t[i] = a(e[i]);
  }
  return t;
}
function s(e) {
  if (typeof e.source.flags == "string")
    return e.source.flags;
  var t = [];
  return e.global && t.push("g"), e.ignoreCase && t.push("i"), e.multiline && t.push("m"), e.sticky && t.push("y"), e.unicode && t.push("u"), t.join("");
}
export {
  u as clone,
  l as dateLongFormat,
  p as downloadFile,
  m as getObjectValue,
  f as isEmpty,
  y as isFunction,
  g as isObject,
  d as isString,
  h as makeArray,
  v as pluck,
  w as removeItem,
  A as toInt
};
