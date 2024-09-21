var a = f;
function f(r, i, e) {
  if (!r)
    return e;
  var t, n;
  if (Array.isArray(i) && (t = i.slice(0)), typeof i == "string" && (t = i.split(".")), typeof i == "symbol" && (t = [i]), !Array.isArray(t))
    throw new Error("props arg must be an array, a string or a symbol");
  for (; t.length; )
    if (n = t.shift(), !r || (r = r[n], r === void 0))
      return e;
  return r;
}
export {
  a as o
};
