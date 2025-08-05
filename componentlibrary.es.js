import ye, { forwardRef as ie, useState as _e, useEffect as Ce, useMemo as oe, useCallback as Y, useRef as Te } from "react";
import { Alert as Ne, Avatar as Se, Badge as $e, BadgePosition as De, Breadcrumbs as Me, BreadcrumbsList as Ae, BreadcrumbsItem as Oe, BreadcrumbsLink as We, Button as de, Card as Be, CardBlock as Ie, Checkbox as Fe, Fieldset as xe, useCheckboxGroup as Le, Chip as Ye, Details as Ve, Dialog as He, Divider as ze, Dropdown as Ge, ErrorSummary as qe, FieldDescription as Ke, FieldCounter as Xe, Field as Je, Input as Ue, Link as Qe, List as Ze, Pagination as et, usePagination as tt, Popover as rt, Radio as at, useRadioGroup as nt, Search as ot, Select as st, Skeleton as it, SkipLink as lt, Spinner as ct, Switch as ut, Table as dt, Tabs as mt, Tag as ft, Textarea as ht, Textfield as pt, ToggleGroup as bt, Tooltip as vt } from "@digdir/designsystemet-react";
import { startOfMonth as F, isValid as ce, isSameMonth as me, startOfWeek as we, format as K, addDays as Pe, subMonths as gt, addMonths as kt, isSameDay as yt, isToday as _t, eachDayOfInterval as Ct } from "date-fns";
var se = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function xt() {
  if (fe) return X;
  fe = 1;
  var e = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function r(o, s, d) {
    var u = null;
    if (d !== void 0 && (u = "" + d), s.key !== void 0 && (u = "" + s.key), "key" in s) {
      d = {};
      for (var m in s)
        m !== "key" && (d[m] = s[m]);
    } else d = s;
    return s = d.ref, {
      $$typeof: e,
      type: o,
      key: u,
      ref: s !== void 0 ? s : null,
      props: d
    };
  }
  return X.Fragment = a, X.jsx = r, X.jsxs = r, X;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function wt() {
  return he || (he = 1, process.env.NODE_ENV !== "production" && function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === B ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case S:
          return "Fragment";
        case T:
          return "Profiler";
        case i:
          return "StrictMode";
        case W:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case le:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case V:
            return "Portal";
          case $:
            return (t.displayName || "Context") + ".Provider";
          case P:
            return (t._context.displayName || "Context") + ".Consumer";
          case H:
            var n = t.render;
            return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case z:
            return n = t.displayName || null, n !== null ? n : e(t.type) || "Memo";
          case N:
            n = t._payload, t = t._init;
            try {
              return e(t(n));
            } catch {
            }
        }
      return null;
    }
    function a(t) {
      return "" + t;
    }
    function r(t) {
      try {
        a(t);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var c = n.error, f = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), a(t);
      }
    }
    function o(t) {
      if (t === S) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === N)
        return "<...>";
      try {
        var n = e(t);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var t = g.A;
      return t === null ? null : t.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function u(t) {
      if (D.call(t, "key")) {
        var n = Object.getOwnPropertyDescriptor(t, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function m(t, n) {
      function c() {
        ee || (ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: c,
        configurable: !0
      });
    }
    function y() {
      var t = e(this.type);
      return te[t] || (te[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function _(t, n, c, f, h, b, A, G) {
      return c = b.ref, t = {
        $$typeof: x,
        type: t,
        key: n,
        props: b,
        _owner: h
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function C(t, n, c, f, h, b, A, G) {
      var p = n.children;
      if (p !== void 0)
        if (f)
          if (M(p)) {
            for (f = 0; f < p.length; f++)
              v(p[f]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(p);
      if (D.call(n, "key")) {
        p = e(t);
        var E = Object.keys(n).filter(function(R) {
          return R !== "key";
        });
        f = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", ne[p + f] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          p,
          E,
          p
        ), ne[p + f] = !0);
      }
      if (p = null, c !== void 0 && (r(c), p = "" + c), u(n) && (r(n.key), p = "" + n.key), "key" in n) {
        c = {};
        for (var w in n)
          w !== "key" && (c[w] = n[w]);
      } else c = n;
      return p && m(
        c,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), _(
        t,
        p,
        b,
        h,
        s(),
        c,
        A,
        G
      );
    }
    function v(t) {
      typeof t == "object" && t !== null && t.$$typeof === x && t._store && (t._store.validated = 1);
    }
    var j = ye, x = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), g = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, M = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      "react-stack-bottom-frame": function(t) {
        return t();
      }
    };
    var ee, te = {}, re = j["react-stack-bottom-frame"].bind(
      j,
      d
    )(), ae = I(o(d)), ne = {};
    J.Fragment = S, J.jsx = function(t, n, c, f, h) {
      var b = 1e4 > g.recentlyCreatedOwnerStacks++;
      return C(
        t,
        n,
        c,
        !1,
        f,
        h,
        b ? Error("react-stack-top-frame") : re,
        b ? I(o(t)) : ae
      );
    }, J.jsxs = function(t, n, c, f, h) {
      var b = 1e4 > g.recentlyCreatedOwnerStacks++;
      return C(
        t,
        n,
        c,
        !0,
        f,
        h,
        b ? Error("react-stack-top-frame") : re,
        b ? I(o(t)) : ae
      );
    };
  }()), J;
}
var pe;
function Pt() {
  return pe || (pe = 1, process.env.NODE_ENV === "production" ? se.exports = xt() : se.exports = wt()), se.exports;
}
var l = Pt();
const Et = ie((e, a) => /* @__PURE__ */ l.jsx(Ne, { ref: a, ...e }));
Et.displayName = "Alert";
const Rt = ie((e, a) => /* @__PURE__ */ l.jsx(Se, { ref: a, ...e }));
Rt.displayName = "Avatar";
const jt = ie((e, a) => /* @__PURE__ */ l.jsx($e, { ref: a, ...e }));
jt.displayName = "Badge";
const Ar = De, Or = Me, Wr = Ae, Br = Oe, Ir = We, Tt = de;
Tt.displayName = "Buttons";
const Nt = Be, Fr = Ie;
Nt.displayName = "Card";
const St = Fe, $t = xe, Lr = Le;
St.displayName = "Checkbox";
$t.displayName = "Fieldset";
const Yr = Ye;
function ue(e) {
  return (a = {}) => {
    const r = a.width ? String(a.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
function U(e) {
  return (a, r) => {
    const o = r != null && r.context ? String(r.context) : "standalone";
    let s;
    if (o === "formatting" && e.formattingValues) {
      const u = e.defaultFormattingWidth || e.defaultWidth, m = r != null && r.width ? String(r.width) : u;
      s = e.formattingValues[m] || e.formattingValues[u];
    } else {
      const u = e.defaultWidth, m = r != null && r.width ? String(r.width) : e.defaultWidth;
      s = e.values[m] || e.values[u];
    }
    const d = e.argumentCallback ? e.argumentCallback(a) : a;
    return s[d];
  };
}
function Q(e) {
  return (a, r = {}) => {
    const o = r.width, s = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], d = a.match(s);
    if (!d)
      return null;
    const u = d[0], m = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], y = Array.isArray(m) ? Mt(m, (v) => v.test(u)) : (
      // [TODO] -- I challenge you to fix the type
      Dt(m, (v) => v.test(u))
    );
    let _;
    _ = e.valueCallback ? e.valueCallback(y) : y, _ = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(_)
    ) : _;
    const C = a.slice(u.length);
    return { value: _, rest: C };
  };
}
function Dt(e, a) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && a(e[r]))
      return r;
}
function Mt(e, a) {
  for (let r = 0; r < e.length; r++)
    if (a(e[r]))
      return r;
}
function At(e) {
  return (a, r = {}) => {
    const o = a.match(e.matchPattern);
    if (!o) return null;
    const s = o[0], d = a.match(e.parsePattern);
    if (!d) return null;
    let u = e.valueCallback ? e.valueCallback(d[0]) : d[0];
    u = r.valueCallback ? r.valueCallback(u) : u;
    const m = a.slice(s.length);
    return { value: u, rest: m };
  };
}
const Ot = {
  lessThanXSeconds: {
    one: "mindre enn ett sekund",
    other: "mindre enn {{count}} sekunder"
  },
  xSeconds: {
    one: "ett sekund",
    other: "{{count}} sekunder"
  },
  halfAMinute: "et halvt minutt",
  lessThanXMinutes: {
    one: "mindre enn ett minutt",
    other: "mindre enn {{count}} minutter"
  },
  xMinutes: {
    one: "ett minutt",
    other: "{{count}} minutter"
  },
  aboutXHours: {
    one: "omtrent en time",
    other: "omtrent {{count}} timer"
  },
  xHours: {
    one: "en time",
    other: "{{count}} timer"
  },
  xDays: {
    one: "en dag",
    other: "{{count}} dager"
  },
  aboutXWeeks: {
    one: "omtrent en uke",
    other: "omtrent {{count}} uker"
  },
  xWeeks: {
    one: "en uke",
    other: "{{count}} uker"
  },
  aboutXMonths: {
    one: "omtrent en måned",
    other: "omtrent {{count}} måneder"
  },
  xMonths: {
    one: "en måned",
    other: "{{count}} måneder"
  },
  aboutXYears: {
    one: "omtrent ett år",
    other: "omtrent {{count}} år"
  },
  xYears: {
    one: "ett år",
    other: "{{count}} år"
  },
  overXYears: {
    one: "over ett år",
    other: "over {{count}} år"
  },
  almostXYears: {
    one: "nesten ett år",
    other: "nesten {{count}} år"
  }
}, Wt = (e, a, r) => {
  let o;
  const s = Ot[e];
  return typeof s == "string" ? o = s : a === 1 ? o = s.one : o = s.other.replace("{{count}}", String(a)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "om " + o : o + " siden" : o;
}, Bt = {
  full: "EEEE d. MMMM y",
  long: "d. MMMM y",
  medium: "d. MMM y",
  short: "dd.MM.y"
}, It = {
  full: "'kl'. HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Ft = {
  full: "{{date}} 'kl.' {{time}}",
  long: "{{date}} 'kl.' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Lt = {
  date: ue({
    formats: Bt,
    defaultWidth: "full"
  }),
  time: ue({
    formats: It,
    defaultWidth: "full"
  }),
  dateTime: ue({
    formats: Ft,
    defaultWidth: "full"
  })
}, Yt = {
  lastWeek: "'forrige' eeee 'kl.' p",
  yesterday: "'i går kl.' p",
  today: "'i dag kl.' p",
  tomorrow: "'i morgen kl.' p",
  nextWeek: "EEEE 'kl.' p",
  other: "P"
}, Vt = (e, a, r, o) => Yt[e], Ht = {
  narrow: ["f.Kr.", "e.Kr."],
  abbreviated: ["f.Kr.", "e.Kr."],
  wide: ["før Kristus", "etter Kristus"]
}, zt = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
}, Gt = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "jan.",
    "feb.",
    "mars",
    "apr.",
    "mai",
    "juni",
    "juli",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "des."
  ],
  wide: [
    "januar",
    "februar",
    "mars",
    "april",
    "mai",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "desember"
  ]
}, qt = {
  narrow: ["S", "M", "T", "O", "T", "F", "L"],
  short: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
  abbreviated: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
  wide: [
    "søndag",
    "mandag",
    "tirsdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lørdag"
  ]
}, Kt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på etterm.",
    evening: "på kvelden",
    night: "på natten"
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på etterm.",
    evening: "på kvelden",
    night: "på natten"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morgenen",
    afternoon: "på ettermiddagen",
    evening: "på kvelden",
    night: "på natten"
  }
}, Xt = (e, a) => Number(e) + ".", Jt = {
  ordinalNumber: Xt,
  era: U({
    values: Ht,
    defaultWidth: "wide"
  }),
  quarter: U({
    values: zt,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: U({
    values: Gt,
    defaultWidth: "wide"
  }),
  day: U({
    values: qt,
    defaultWidth: "wide"
  }),
  dayPeriod: U({
    values: Kt,
    defaultWidth: "wide"
  })
}, Ut = /^(\d+)\.?/i, Qt = /\d+/i, Zt = {
  narrow: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
  abbreviated: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
  wide: /^(før Kristus|før vår tid|etter Kristus|vår tid)/i
}, er = {
  any: [/^f/i, /^e/i]
}, tr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? kvartal/i
}, rr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ar = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,
  wide: /^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i
}, nr = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^aug/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, or = {
  narrow: /^[smtofl]/i,
  short: /^(sø|ma|ti|on|to|fr|lø)/i,
  abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
  wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i
}, sr = {
  any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
}, ir = {
  narrow: /^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,
  any: /^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i
}, lr = {
  any: {
    am: /^a(\.?\s?m\.?)?$/i,
    pm: /^p(\.?\s?m\.?)?$/i,
    midnight: /^midn/i,
    noon: /^midd/i,
    morning: /morgen/i,
    afternoon: /ettermiddag/i,
    evening: /kveld/i,
    night: /natt/i
  }
}, cr = {
  ordinalNumber: At({
    matchPattern: Ut,
    parsePattern: Qt,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Q({
    matchPatterns: Zt,
    defaultMatchWidth: "wide",
    parsePatterns: er,
    defaultParseWidth: "any"
  }),
  quarter: Q({
    matchPatterns: tr,
    defaultMatchWidth: "wide",
    parsePatterns: rr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Q({
    matchPatterns: ar,
    defaultMatchWidth: "wide",
    parsePatterns: nr,
    defaultParseWidth: "any"
  }),
  day: Q({
    matchPatterns: or,
    defaultMatchWidth: "wide",
    parsePatterns: sr,
    defaultParseWidth: "any"
  }),
  dayPeriod: Q({
    matchPatterns: ir,
    defaultMatchWidth: "any",
    parsePatterns: lr,
    defaultParseWidth: "any"
  })
}, L = {
  code: "nb",
  formatDistance: Wt,
  formatLong: Lt,
  formatRelative: Vt,
  localize: Jt,
  match: cr,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Ee = ({ title: e, ...a }) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 28 28",
    fill: "none",
    "aria-hidden": e ? void 0 : !0,
    focusable: "false",
    ...a,
    children: [
      e && /* @__PURE__ */ l.jsx("title", { children: e }),
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M16.952 6.96459C16.6103 6.62289 16.0563 6.62289 15.7146 6.96459L9.2979 13.3813C8.95621 13.723 8.95621 14.277 9.2979 14.6187L15.7146 21.0354C16.0563 21.3771 16.6103 21.3771 16.952 21.0354C17.2937 20.6937 17.2937 20.1396 16.952 19.7979L11.1541 14L16.952 8.20203C17.2937 7.86032 17.2937 7.3063 16.952 6.96459Z",
          fill: "currentColor"
        }
      )
    ]
  }
);
Ee.displayName = "ChevronLeftIcon";
const Re = ({ title: e, ...a }) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 28 28",
    fill: "none",
    "aria-hidden": e ? void 0 : !0,
    focusable: "false",
    ...a,
    children: [
      e && /* @__PURE__ */ l.jsx("title", { children: e }),
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.048 6.96459C11.3897 6.62289 11.9437 6.62289 12.2854 6.96459L18.7021 13.3813C19.0438 13.723 19.0438 14.277 18.7021 14.6187L12.2854 21.0354C11.9437 21.3771 11.3897 21.3771 11.048 21.0354C10.7063 20.6937 10.7063 20.1396 11.048 19.7979L16.8459 14L11.048 8.20203C10.7063 7.86032 10.7063 7.3063 11.048 6.96459Z",
          fill: "currentColor"
        }
      )
    ]
  }
);
Re.displayName = "ChevronRightIcon";
const ur = "_calendarContainer_mtooc_5", dr = "_calendarHeader_mtooc_33", mr = "_monthYear_mtooc_47", fr = "_navigationButtons_mtooc_71", hr = "_grid_mtooc_89", pr = "_dayNameCell_mtooc_105", br = "_dateCell_mtooc_143", vr = "_dateNumberContainer_mtooc_213", gr = "_otherMonth_mtooc_249", kr = "_selectedDate_mtooc_313", k = {
  calendarContainer: ur,
  calendarHeader: dr,
  monthYear: mr,
  navigationButtons: fr,
  grid: hr,
  dayNameCell: pr,
  dateCell: br,
  dateNumberContainer: vr,
  otherMonth: gr,
  selectedDate: kr
}, yr = (e) => {
  const a = F(e), r = we(a, { locale: L }), o = Pe(r, 41);
  return Ct({ start: r, end: o });
}, be = (e) => e && e.charAt(0).toUpperCase() + e.slice(1), _r = ({
  initialDate: e = /* @__PURE__ */ new Date(),
  selectedDate: a = null,
  // Prop for selected date
  onDateSelect: r
}) => {
  const [o, s] = _e(
    // Initialize with selectedDate's month if valid, otherwise initialDate's month
    F(a && ce(a) ? a : e)
  );
  Ce(() => {
    if (a && ce(a)) {
      const i = F(a);
      me(i, o) || s(i);
    }
  }, [a]);
  const d = oe(() => F(/* @__PURE__ */ new Date()), []), u = oe(() => !1, [o, d]), m = oe(
    () => yr(o),
    [o]
  ), y = oe(() => {
    const i = we(/* @__PURE__ */ new Date(), { locale: L });
    return Array.from({ length: 7 }).map((T, P) => {
      const $ = K(Pe(i, P), "EEEEEE", { locale: L });
      return be($);
    });
  }, []), _ = Y(() => {
    u || s((i) => F(gt(i, 1)));
  }, [u]), C = Y(() => {
    s((i) => F(kt(i, 1)));
  }, []), v = Y(
    (i) => {
      r && r(i);
    },
    [r]
  ), j = Y(
    (i, T) => {
      (i.key === "Enter" || i.key === " ") && (i.preventDefault(), v(T));
    },
    [v]
  ), x = K(o, "MMMM", { locale: L }), V = K(o, "yyyy", { locale: L }), S = `${be(x)} ${V}`;
  return /* @__PURE__ */ l.jsxs("div", { className: k.calendarContainer, children: [
    /* @__PURE__ */ l.jsxs("div", { className: k.calendarHeader, children: [
      /* @__PURE__ */ l.jsx("span", { className: k.monthYear, children: S }),
      /* @__PURE__ */ l.jsxs("div", { className: k.navigationButtons, children: [
        /* @__PURE__ */ l.jsx(
          de,
          {
            variant: "tertiary",
            icon: !0,
            onClick: _,
            "aria-label": "Forrige måned",
            disabled: u,
            children: /* @__PURE__ */ l.jsx(Ee, {})
          }
        ),
        /* @__PURE__ */ l.jsx(
          de,
          {
            variant: "tertiary",
            icon: !0,
            onClick: C,
            "aria-label": "Neste måned",
            children: /* @__PURE__ */ l.jsx(Re, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: k.grid, children: y.map((i) => /* @__PURE__ */ l.jsx("div", { className: k.dayNameCell, children: i }, i)) }),
    /* @__PURE__ */ l.jsx("div", { className: k.grid, children: m.map((i) => {
      const T = me(i, o), P = a && ce(a) && yt(i, a), $ = _t(i), H = [
        k.dateCell,
        T ? "" : k.otherMonth,
        P ? k.selectedDate : "",
        // Highlighting based on prop
        $ && !P ? k.todayDate : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ l.jsx(
        "div",
        {
          className: H,
          onClick: () => v(i),
          onKeyDown: (W) => j(W, i),
          role: "button",
          tabIndex: 0,
          "aria-pressed": P ?? !1,
          "aria-label": K(i, "PPP", { locale: L }),
          children: /* @__PURE__ */ l.jsx("span", { className: k.dateNumberContainer, children: K(i, "d") })
        },
        i.toISOString()
      );
    }) })
  ] });
};
_r.displayName = "DatePicker";
const Cr = "_fieldset_s5r8s_7", xr = "_description_s5r8s_29", wr = "_error_s5r8s_43", Pr = "_inputWrapper_s5r8s_59", Er = "_inputWrapperError_s5r8s_83", Rr = "_suffixButton_s5r8s_199", jr = "_suffixButtonInteractive_s5r8s_239", O = {
  fieldset: Cr,
  description: xr,
  error: wr,
  inputWrapper: Pr,
  inputWrapperError: Er,
  suffixButton: Rr,
  suffixButtonInteractive: jr
}, ve = (e) => {
  const a = e.slice(0, 2), r = e.slice(2, 4), o = e.slice(4, 8);
  return e.length > 4 ? `${a}.${r}.${o}` : e.length > 2 ? `${a}.${r}` : e.length > 0 ? a : "";
}, ge = (e) => (e || "").replace(/\D/g, ""), ke = (e) => {
  let a = e;
  if (a.length >= 2) {
    const r = parseInt(a.substring(0, 2), 10);
    !isNaN(r) && r > 31 && (a = "31" + a.substring(2));
  }
  if (a.length >= 4) {
    const r = parseInt(a.substring(2, 4), 10);
    !isNaN(r) && r > 12 && (a = a.substring(0, 2) + "12" + a.substring(4));
  }
  return a.slice(0, 8);
}, Tr = ie(
  (e, a) => {
    const {
      label: r,
      suffixIcon: o,
      onSuffixClick: s,
      className: d,
      // For outer fieldset
      inputWrapperClassName: u,
      // For input wrapper div
      inputClassName: m,
      // For the actual input element
      value: y,
      defaultValue: _,
      onChange: C,
      readOnly: v,
      placeholder: j = "dd.mm.åååå",
      id: x,
      name: V,
      required: S,
      disabled: i,
      onClick: T,
      onFocus: P,
      // Pass external onFocus
      onBlur: $,
      // Pass external onBlur
      autoComplete: H = "off",
      "aria-label": W,
      "aria-labelledby": Z,
      description: z,
      error: N,
      // Use error prop for styling
      ...le
    } = e, B = y !== void 0, g = Te(null);
    ye.useImperativeHandle(
      a,
      () => g.current
    );
    const D = Y(
      (h) => {
        const b = ge(h), A = ke(b);
        return ve(A);
      },
      []
    ), [M, I] = _e(
      () => D(y ?? _)
    );
    Ce(() => {
      if (B) {
        const h = D(y);
        h !== M && (I(h), g.current && g.current.value !== h && (g.current.value = h));
      }
    }, [y, B, M, D]);
    const ee = Y(
      (h) => {
        const b = h.target, A = b.value, G = M, p = ge(A).slice(0, 8), E = ke(p), w = ve(E);
        let R = 0;
        const q = E.length;
        q <= 2 ? R = q : q <= 4 ? R = q + 1 : R = q + 2, R = Math.min(R, w.length), requestAnimationFrame(() => {
          if (g.current && (I(w), g.current.value = w, g.current.setSelectionRange(R, R), (w !== G || B) && C)) {
            const je = {
              ...h,
              target: { ...b, value: w }
            };
            C(je, w);
          }
        });
      },
      [M, B, C, D]
      // Added isControlled and getFormattedValue
    ), te = [O.fieldset, d].filter(Boolean).join(" "), re = [
      O.inputWrapper,
      // Base style from InputField CSS
      u,
      // Allow external override/extension
      N ? O.inputWrapperError : ""
      // Apply error class based on prop
      // Add disabled class if your CSS defines one for the wrapper
      // disabled ? styles.inputWrapperDisabled : '',
    ].filter(Boolean).join(" "), ae = [
      // styles.input, // This class might not exist in InputField/styles.module.css
      m
      // Allow external override/extension
    ].filter(Boolean).join(" "), ne = [
      O.suffixButton,
      // Base style from InputField CSS
      s ? O.suffixButtonInteractive : ""
      // Add interactive class if clickable
      // Add disabled class if your CSS defines one for the button
      // disabled ? styles.suffixButtonDisabled : '',
    ].filter(Boolean).join(" ");
    !r && !W && !Z && console.warn("Warning: DateInput component should have a label, aria-label, or aria-labelledby for accessibility.");
    const t = r && typeof r == "string" ? Z || `${x}-label` : void 0, n = z ? `${x}-desc` : void 0, c = N ? `${x}-err` : void 0, f = [n, c].filter(Boolean).join(" ") || void 0;
    return (
      // Use the fieldset structure and classes from InputField CSS
      /* @__PURE__ */ l.jsxs("div", { className: te, children: [
        r && typeof r == "string" ? /* @__PURE__ */ l.jsx("label", { id: t, htmlFor: x, children: r }) : r,
        z && /* @__PURE__ */ l.jsxs("p", { id: n, className: O.description, children: [
          " ",
          z
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: re, children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              ref: g,
              type: "text",
              inputMode: "numeric",
              pattern: "\\d{2}\\.\\d{2}\\.\\d{4}",
              maxLength: 10,
              value: M,
              readOnly: v,
              placeholder: j,
              id: x,
              name: V,
              required: S,
              disabled: i,
              onClick: T,
              onChange: ee,
              onFocus: P,
              onBlur: $,
              autoComplete: H,
              "aria-label": W,
              "aria-labelledby": t,
              "aria-describedby": f,
              "aria-invalid": !!N,
              className: ae,
              ...le
            }
          ),
          o && /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: ne,
              onClick: i ? void 0 : s,
              tabIndex: s && !i ? 0 : -1,
              "aria-hidden": !s,
              disabled: i,
              "aria-label": s ? "Åpne datovelger" : void 0,
              children: o
            }
          )
        ] }),
        N && /* @__PURE__ */ l.jsx("p", { id: c, className: O.error, role: "alert", children: N })
      ] })
    );
  }
);
Tr.displayName = "DateInput";
const Vr = Ve, Hr = He, zr = ze, Gr = Ge, qr = qe, Kr = Je, Nr = Ke, Sr = Xe;
Nr.displayName = "Field.Description";
Sr.displayName = "Field.Counter";
const Xr = xe, Jr = Ue, Ur = Qe, Qr = Ze, Zr = et, ea = tt, ta = rt, ra = at, aa = nt, na = ot, oa = st, sa = it, ia = lt, la = ct, ca = ut, ua = dt, da = mt, ma = ft, fa = ht, ha = pt, pa = bt, ba = vt;
export {
  Et as Alert,
  Rt as Avatar,
  jt as Badge,
  Ar as BadgePosition,
  Or as Breadcrumbs,
  Br as BreadcrumbsItem,
  Ir as BreadcrumbsLink,
  Wr as BreadcrumbsList,
  Tt as Buttons,
  Nt as Card,
  Fr as CardBlock,
  St as Checkbox,
  Yr as Chip,
  Tr as DateInput,
  _r as DatePicker,
  Vr as Details,
  Hr as Dialog,
  zr as Divider,
  Gr as Dropdown,
  qr as ErrorSummary,
  Kr as Field,
  Sr as FieldCounter,
  Nr as FieldDescription,
  Xr as Fieldset,
  Jr as Input,
  Ur as Link,
  Qr as List,
  Zr as Pagination,
  ta as Popover,
  ra as Radio,
  na as Search,
  oa as Select,
  sa as SkeletonLoader,
  ia as SkipLink,
  la as Spinner,
  ca as Switch,
  ua as Table,
  da as Tabs,
  ma as Tag,
  fa as Textarea,
  ha as Textfield,
  pa as ToggleGroup,
  ba as Tooltip,
  Lr as useCheckboxGroup,
  ea as usePagination,
  aa as useRadioGroup
};
