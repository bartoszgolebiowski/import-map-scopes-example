import a from "react";
import h from "react-dom";
import u from "lodash";
const m = function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === "childList")
        for (const s of r.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && t(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(e) {
    const r = {};
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = l(e);
    fetch(e.href, r);
  }
};
m();
var d = { exports: {} },
  c = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var y = a,
  _ = Symbol.for("react.element"),
  v = Symbol.for("react.fragment"),
  O = Object.prototype.hasOwnProperty,
  x = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  g = { key: !0, ref: !0, __self: !0, __source: !0 };
function p(i, o, l) {
  var t,
    e = {},
    r = null,
    s = null;
  l !== void 0 && (r = "" + l),
    o.key !== void 0 && (r = "" + o.key),
    o.ref !== void 0 && (s = o.ref);
  for (t in o) O.call(o, t) && !g.hasOwnProperty(t) && (e[t] = o[t]);
  if (i && i.defaultProps)
    for (t in ((o = i.defaultProps), o)) e[t] === void 0 && (e[t] = o[t]);
  return { $$typeof: _, type: i, key: r, ref: s, props: e, _owner: x.current };
}
c.Fragment = v;
c.jsx = p;
c.jsxs = p;
(function (i) {
  i.exports = c;
})(d);
const n = d.exports.jsx,
  f = d.exports.jsxs,
  E = () =>
    n("div", {
      children: f("p", {
        children: [u.toUpper("fooBar"), " lodash version: ", u.VERSION],
      }),
    }),
  R = () =>
    n("div", {
      children: f("nav", {
        children: [
          n("a", { href: "/lodash-4-17-20/", children: "4.17.20" }),
          n("a", { href: "/lodash-4-17-19/", children: "4.17.19" }),
          n("a", { href: "/lodash-4-17-18/", children: "4.17.18" }),
          n("a", { href: "/lodash-4-17-17/", children: "4.17.17" }),
          n("a", { href: "/lodash-4-17-16/", children: "4.17.16" }),
          n("a", { href: "/", children: "home" }),
        ],
      }),
    });
h.render(
  f(a.StrictMode, { children: [n(R, {}), n(E, {})] }),
  document.getElementById("root")
);
