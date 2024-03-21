import F from "react";
import { useColorMode as wr, HStack as jr, Text as Ae, Switch as _r, createMultiStyleConfigHelpers as Ie, extendTheme as Er, Icon as S, Center as Sr, Box as kr, useBreakpointValue as Rr, Stack as Or, Tooltip as $, IconButton as B, Menu as Tr, MenuButton as Pr, MenuList as Fr, MenuItem as N } from "@chakra-ui/react";
var le = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Ar() {
  if (ze)
    return Y;
  ze = 1;
  var t = F, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(j, v, A) {
    var p, g = {}, _ = null, z = null;
    A !== void 0 && (_ = "" + A), v.key !== void 0 && (_ = "" + v.key), v.ref !== void 0 && (z = v.ref);
    for (p in v)
      l.call(v, p) && !x.hasOwnProperty(p) && (g[p] = v[p]);
    if (j && j.defaultProps)
      for (p in v = j.defaultProps, v)
        g[p] === void 0 && (g[p] = v[p]);
    return { $$typeof: a, type: j, key: _, ref: z, props: g, _owner: b.current };
  }
  return Y.Fragment = i, Y.jsx = O, Y.jsxs = O, Y;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function zr() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var t = F, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), j = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), Q = Symbol.iterator, Ve = "@@iterator";
    function $e(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Ve];
      return typeof r == "function" ? r : null;
    }
    var L = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          n[o - 1] = arguments[o];
        Ne("error", e, n);
      }
    }
    function Ne(e, r, n) {
      {
        var o = L.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (r += "%s", n = n.concat([f]));
        var h = n.map(function(u) {
          return String(u);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var Ye = !1, Ue = !1, Ge = !1, He = !1, qe = !1, ce;
    ce = Symbol.for("react.module.reference");
    function Je(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === x || qe || e === b || e === A || e === p || He || e === z || Ye || Ue || Ge || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === g || e.$$typeof === O || e.$$typeof === j || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function Ke(e, r, n) {
      var o = e.displayName;
      if (o)
        return o;
      var f = r.displayName || r.name || "";
      return f !== "" ? n + "(" + f + ")" : n;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case i:
          return "Portal";
        case x:
          return "Profiler";
        case b:
          return "StrictMode";
        case A:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var r = e;
            return ue(r) + ".Consumer";
          case O:
            var n = e;
            return ue(n._context) + ".Provider";
          case v:
            return Ke(e, e.render, "ForwardRef");
          case g:
            var o = e.displayName || null;
            return o !== null ? o : T(e.type) || "Memo";
          case _: {
            var f = e, h = f._payload, u = f._init;
            try {
              return T(u(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, W = 0, fe, de, he, ve, pe, ge, me;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Xe() {
      {
        if (W === 0) {
          fe = console.log, de = console.info, he = console.warn, ve = console.error, pe = console.group, ge = console.groupCollapsed, me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Ze() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: fe
            }),
            info: M({}, e, {
              value: de
            }),
            warn: M({}, e, {
              value: he
            }),
            error: M({}, e, {
              value: ve
            }),
            group: M({}, e, {
              value: pe
            }),
            groupCollapsed: M({}, e, {
              value: ge
            }),
            groupEnd: M({}, e, {
              value: me
            })
          });
        }
        W < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = L.ReactCurrentDispatcher, re;
    function G(e, r, n) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            re = o && o[1] || "";
          }
        return `
` + re + e;
      }
    }
    var te = !1, H;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Qe();
    }
    function ye(e, r) {
      if (!e || te)
        return "";
      {
        var n = H.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      te = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = ee.current, ee.current = null, Xe();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (P) {
              o = P;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (P) {
              o = P;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            o = P;
          }
          e();
        }
      } catch (P) {
        if (P && o && typeof P.stack == "string") {
          for (var c = P.stack.split(`
`), w = o.stack.split(`
`), m = c.length - 1, y = w.length - 1; m >= 1 && y >= 0 && c[m] !== w[y]; )
            y--;
          for (; m >= 1 && y >= 0; m--, y--)
            if (c[m] !== w[y]) {
              if (m !== 1 || y !== 1)
                do
                  if (m--, y--, y < 0 || c[m] !== w[y]) {
                    var E = `
` + c[m].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, E), E;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = h, Ze(), Error.prepareStackTrace = f;
      }
      var I = e ? e.displayName || e.name : "", Fe = I ? G(I) : "";
      return typeof e == "function" && H.set(e, Fe), Fe;
    }
    function er(e, r, n) {
      return ye(e, !1);
    }
    function rr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, rr(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case A:
          return G("Suspense");
        case p:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return er(e.render);
          case g:
            return q(e.type, r, n);
          case _: {
            var o = e, f = o._payload, h = o._init;
            try {
              return q(h(f), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, xe = {}, Ce = L.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, n = q(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(n);
      } else
        Ce.setExtraStackFrame(null);
    }
    function tr(e, r, n, o, f) {
      {
        var h = Function.call.bind(J);
        for (var u in e)
          if (h(e, u)) {
            var c = void 0;
            try {
              if (typeof e[u] != "function") {
                var w = Error((o || "React class") + ": " + n + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              c = e[u](r, u, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              c = m;
            }
            c && !(c instanceof Error) && (K(f), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, u, typeof c), K(null)), c instanceof Error && !(c.message in xe) && (xe[c.message] = !0, K(f), C("Failed %s type: %s", n, c.message), K(null));
          }
      }
    }
    var nr = Array.isArray;
    function ne(e) {
      return nr(e);
    }
    function ar(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function or(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function je(e) {
      if (or(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), we(e);
    }
    var V = L.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Ee, ae;
    ae = {};
    function sr(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function lr(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function cr(e, r) {
      if (typeof e.ref == "string" && V.current && r && V.current.stateNode !== r) {
        var n = T(V.current.type);
        ae[n] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(V.current.type), e.ref), ae[n] = !0);
      }
    }
    function ur(e, r) {
      {
        var n = function() {
          _e || (_e = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function fr(e, r) {
      {
        var n = function() {
          Ee || (Ee = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var dr = function(e, r, n, o, f, h, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: u,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function hr(e, r, n, o, f) {
      {
        var h, u = {}, c = null, w = null;
        n !== void 0 && (je(n), c = "" + n), lr(r) && (je(r.key), c = "" + r.key), sr(r) && (w = r.ref, cr(r, f));
        for (h in r)
          J.call(r, h) && !ir.hasOwnProperty(h) && (u[h] = r[h]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (h in m)
            u[h] === void 0 && (u[h] = m[h]);
        }
        if (c || w) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && ur(u, y), w && fr(u, y);
        }
        return dr(e, c, w, f, o, V.current, u);
      }
    }
    var oe = L.ReactCurrentOwner, Se = L.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, n = q(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(n);
      } else
        Se.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function ke() {
      {
        if (oe.current) {
          var e = T(oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function vr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var Re = {};
    function pr(e) {
      {
        var r = ke();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = pr(r);
        if (Re[n])
          return;
        Re[n] = !0;
        var o = "";
        e && e._owner && e._owner !== oe.current && (o = " It was passed a child from " + T(e._owner.type) + "."), D(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), D(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            se(o) && Oe(o, r);
          }
        else if (se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = $e(e);
          if (typeof f == "function" && f !== e.entries)
            for (var h = f.call(e), u; !(u = h.next()).done; )
              se(u.value) && Oe(u.value, r);
        }
      }
    }
    function gr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          n = r.propTypes;
        else
          return;
        if (n) {
          var o = T(r);
          tr(n, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var f = T(r);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var o = r[n];
          if (o !== "children" && o !== "key") {
            D(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function Pe(e, r, n, o, f, h) {
      {
        var u = Je(e);
        if (!u) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = vr(f);
          w ? c += w : c += ke();
          var m;
          e === null ? m = "null" : ne(e) ? m = "array" : e !== void 0 && e.$$typeof === a ? (m = "<" + (T(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, c);
        }
        var y = hr(e, r, n, f, h);
        if (y == null)
          return y;
        if (u) {
          var E = r.children;
          if (E !== void 0)
            if (o)
              if (ne(E)) {
                for (var I = 0; I < E.length; I++)
                  Te(E[I], e);
                Object.freeze && Object.freeze(E);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(E, e);
        }
        return e === l ? mr(y) : gr(y), y;
      }
    }
    function br(e, r, n) {
      return Pe(e, r, n, !0);
    }
    function yr(e, r, n) {
      return Pe(e, r, n, !1);
    }
    var xr = yr, Cr = br;
    U.Fragment = l, U.jsx = xr, U.jsxs = Cr;
  }()), U;
}
process.env.NODE_ENV === "production" ? le.exports = Ar() : le.exports = zr();
var s = le.exports;
const vt = () => {
  const { colorMode: t, toggleColorMode: a } = wr();
  return /* @__PURE__ */ s.jsxs(jr, { justify: "center", align: "center", children: [
    /* @__PURE__ */ s.jsx(Ae, { children: "Light" }),
    /* @__PURE__ */ s.jsx(
      _r,
      {
        size: "md",
        isChecked: t === "dark",
        onChange: a,
        transition: "background 200ms linear"
      }
    ),
    /* @__PURE__ */ s.jsx(Ae, { children: "Dark" })
  ] });
};
function d(t, a = {}) {
  let i = !1;
  function l() {
    if (!i) {
      i = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function b(...p) {
    l();
    for (const g of p)
      a[g] = v(g);
    return d(t, a);
  }
  function x(...p) {
    for (const g of p)
      g in a || (a[g] = v(g));
    return d(t, a);
  }
  function O() {
    return Object.fromEntries(
      Object.entries(a).map(([g, _]) => [g, _.selector])
    );
  }
  function j() {
    return Object.fromEntries(
      Object.entries(a).map(([g, _]) => [g, _.className])
    );
  }
  function v(p) {
    const z = `chakra-${(["container", "root"].includes(p ?? "") ? [t] : [t, p]).filter(Boolean).join("__")}`;
    return {
      className: z,
      selector: `.${z}`,
      toString: () => p
    };
  }
  return {
    parts: b,
    toPart: v,
    extend: x,
    selectors: O,
    classnames: j,
    get keys() {
      return Object.keys(a);
    },
    __type: {}
  };
}
d("accordion").parts("root", "container", "button", "panel").extend("icon");
d("alert").parts("title", "description", "container").extend("icon", "spinner");
d("avatar").parts("label", "badge", "container").extend("excessLabel", "group");
d("breadcrumb").parts("link", "item", "container").extend("separator");
d("button").parts();
d("checkbox").parts("control", "icon", "container").extend("label");
d("progress").parts("track", "filledTrack").extend("label");
d("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
d("editable").parts(
  "preview",
  "input",
  "textarea"
);
d("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
);
d("formError").parts("text", "icon");
d("input").parts(
  "addon",
  "field",
  "element",
  "group"
);
d("list").parts("container", "item", "icon");
d("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider");
d("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
d("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
d("pininput").parts("field");
d("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton");
d("progress").parts(
  "label",
  "filledTrack",
  "track"
);
d("radio").parts(
  "container",
  "control",
  "label"
);
var Mr = d("select").parts("field", "icon");
d("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
);
d("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
);
var Lr = d("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
);
d("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
);
d("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
);
d("tag").parts(
  "container",
  "label",
  "closeButton"
);
d("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
d("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
const { definePartsStyle: Dr, defineMultiStyleConfig: Ir } = Ie(Lr.keys), Br = Dr({
  track: {
    _checked: {
      bg: "red.500"
    }
  }
}), Wr = Ir({ baseStyle: Br }), { definePartsStyle: Vr, defineMultiStyleConfig: $r } = Ie(Mr.keys), Nr = Vr({
  field: {
    borderBottom: "3px solid",
    borderColor: "red.500",
    textAlign: "center",
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    _focus: {
      borderColor: "red.500",
      boxShadow: "0 0px 0px 0 #FF4F5B"
    }
  }
}), Yr = $r({ variants: { flushed: Nr } }), Ur = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: !1,
    disableTransitionOnChange: !1
  },
  colors: {
    red: {
      500: "#FF4F5B",
      600: "#FF3643",
      700: "#FF0214"
    },
    gray: {
      1e3: "#0F0F0F"
    }
  },
  components: {
    Switch: Wr,
    Select: Yr
  }
}, pt = Er(Ur);
var Be = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Le = F.createContext && /* @__PURE__ */ F.createContext(Be), Gr = ["attr", "size", "title"];
function Hr(t, a) {
  if (t == null)
    return {};
  var i = qr(t, a), l, b;
  if (Object.getOwnPropertySymbols) {
    var x = Object.getOwnPropertySymbols(t);
    for (b = 0; b < x.length; b++)
      l = x[b], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(t, l) && (i[l] = t[l]);
  }
  return i;
}
function qr(t, a) {
  if (t == null)
    return {};
  var i = {}, l = Object.keys(t), b, x;
  for (x = 0; x < l.length; x++)
    b = l[x], !(a.indexOf(b) >= 0) && (i[b] = t[b]);
  return i;
}
function X() {
  return X = Object.assign ? Object.assign.bind() : function(t) {
    for (var a = 1; a < arguments.length; a++) {
      var i = arguments[a];
      for (var l in i)
        Object.prototype.hasOwnProperty.call(i, l) && (t[l] = i[l]);
    }
    return t;
  }, X.apply(this, arguments);
}
function De(t, a) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    a && (l = l.filter(function(b) {
      return Object.getOwnPropertyDescriptor(t, b).enumerable;
    })), i.push.apply(i, l);
  }
  return i;
}
function Z(t) {
  for (var a = 1; a < arguments.length; a++) {
    var i = arguments[a] != null ? arguments[a] : {};
    a % 2 ? De(Object(i), !0).forEach(function(l) {
      Jr(t, l, i[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : De(Object(i)).forEach(function(l) {
      Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(i, l));
    });
  }
  return t;
}
function Jr(t, a, i) {
  return a = Kr(a), a in t ? Object.defineProperty(t, a, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[a] = i, t;
}
function Kr(t) {
  var a = Xr(t, "string");
  return typeof a == "symbol" ? a : String(a);
}
function Xr(t, a) {
  if (typeof t != "object" || t === null)
    return t;
  var i = t[Symbol.toPrimitive];
  if (i !== void 0) {
    var l = i.call(t, a || "default");
    if (typeof l != "object")
      return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(t);
}
function We(t) {
  return t && t.map((a, i) => /* @__PURE__ */ F.createElement(a.tag, Z({
    key: i
  }, a.attr), We(a.child)));
}
function R(t) {
  return (a) => /* @__PURE__ */ F.createElement(Zr, X({
    attr: Z({}, t.attr)
  }, a), We(t.child));
}
function Zr(t) {
  var a = (i) => {
    var {
      attr: l,
      size: b,
      title: x
    } = t, O = Hr(t, Gr), j = b || i.size || "1em", v;
    return i.className && (v = i.className), t.className && (v = (v ? v + " " : "") + t.className), /* @__PURE__ */ F.createElement("svg", X({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, i.attr, l, O, {
      className: v,
      style: Z(Z({
        color: t.color || i.color
      }, i.style), t.style),
      height: j,
      width: j,
      xmlns: "http://www.w3.org/2000/svg"
    }), x && /* @__PURE__ */ F.createElement("title", null, x), t.children);
  };
  return Le !== void 0 ? /* @__PURE__ */ F.createElement(Le.Consumer, null, (i) => a(i)) : a(Be);
}
function Qr(t) {
  return R({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" }, child: [] }, { tag: "path", attr: { d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" }, child: [] }] })(t);
}
function et(t) {
  return R({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }, child: [] }] })(t);
}
function rt(t) {
  return R({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "rect", attr: { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }, child: [] }, { tag: "path", attr: { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }, child: [] }, { tag: "line", attr: { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" }, child: [] }] })(t);
}
function tt(t) {
  return R({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }, child: [] }, { tag: "rect", attr: { x: "2", y: "9", width: "4", height: "12" }, child: [] }, { tag: "circle", attr: { cx: "4", cy: "4", r: "2" }, child: [] }] })(t);
}
function nt(t) {
  return R({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" }, child: [] }] })(t);
}
function at(t) {
  return R({ tag: "svg", attr: { viewBox: "0 0 496 512" }, child: [{ tag: "path", attr: { d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" }, child: [] }] })(t);
}
function ot(t) {
  return R({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" }, child: [] }] })(t);
}
function it(t) {
  return R({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" }, child: [] }] })(t);
}
function st(t) {
  return R({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" }, child: [] }] })(t);
}
function lt(t) {
  return R({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }, child: [] }] })(t);
}
const ct = (t) => /* @__PURE__ */ s.jsx(S, { viewBox: "0 0 50 50", ...t, children: /* @__PURE__ */ s.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M 25 3 C 12.85 3 3 12.85 3 25 C 3 37.15 12.85 47 25 47 C 37.15 47 47 37.15 47 25 C 47 12.85 37.15 3 25 3 z M 21 11 L 38 11 L 36.980469 11.880859 C 36.980469 11.920859 37 11.96 37 12 L 37 17.279297 C 37.6 17.619297 38 18.26 38 19 L 38 25 C 38 26.1 37.1 27 36 27 C 34.9 27 34 26.1 34 25 L 34 19 C 34 18.26 34.4 17.619297 35 17.279297 L 35 13.570312 L 31.410156 16.650391 C 31.760156 17.350391 32 18.200234 32 19.240234 C 32 21.960234 30.480703 23.309766 28.970703 24.509766 C 28.500703 24.989766 27.949219 25.510312 27.949219 26.320312 C 27.949219 27.120313 28.500391 27.570625 28.900391 27.890625 L 30.189453 28.919922 C 31.779453 30.279922 33.220703 31.530547 33.220703 34.060547 C 33.220703 37.510547 29.930469 41 23.730469 41 C 18.500469 41 15.980469 38.47 15.980469 35.75 C 15.980469 34.43 16.629766 32.559531 18.759766 31.269531 C 20.989766 29.879531 24.020391 29.690078 25.650391 29.580078 C 25.140391 28.920078 24.560547 28.230078 24.560547 27.080078 C 24.560547 26.470078 24.749687 26.100391 24.929688 25.650391 C 24.529688 25.690391 24.129531 25.730469 23.769531 25.730469 C 19.969531 25.730469 17.799297 22.85 17.779297 20 L 11 20 L 21 11 z M 24.269531 14.240234 C 23.339531 14.240234 22.33 14.710938 21.75 15.460938 C 21.14 16.220938 20.949219 17.210156 20.949219 18.160156 C 20.949219 20.620156 22.370938 24.699219 25.460938 24.699219 C 26.370938 24.699219 27.339922 24.259922 27.919922 23.669922 C 28.739922 22.819922 28.820312 21.65 28.820312 21 C 28.820312 18.35 27.269531 14.240234 24.269531 14.240234 z M 26.039062 30.609375 C 25.719062 30.609375 23.769766 30.679219 22.259766 31.199219 C 21.459766 31.499219 19.160156 32.370469 19.160156 34.980469 C 19.160156 37.590469 21.64 39.460938 25.5 39.460938 C 28.97 39.460938 30.800781 37.760234 30.800781 35.490234 C 30.800781 33.620234 29.620859 32.630391 26.880859 30.650391 C 26.590859 30.610391 26.409063 30.609375 26.039062 30.609375 z"
  }
) }), ut = ({ orientation: t, ...a }) => {
  const i = t === "horizontal" ? { height: "0.15rem", width: "full" } : { width: "0.15rem", height: "full" };
  return /* @__PURE__ */ s.jsx(Sr, { flexGrow: "1", height: "full", children: /* @__PURE__ */ s.jsx(kr, { ...i, bg: "red.500", ...a }) });
}, k = (t) => {
  var a;
  return (a = window.open(t, "_blank")) == null ? void 0 : a.focus();
}, gt = (t) => Rr({ base: !0, lg: !1 }) ? /* @__PURE__ */ s.jsx(ft, {}) : /* @__PURE__ */ s.jsxs(Or, { spacing: "1rem", height: "full", ...t, children: [
  /* @__PURE__ */ s.jsx($, { hasArrow: !0, placement: "right-start", label: "Linked In", fontSize: "md", children: /* @__PURE__ */ s.jsx(
    B,
    {
      "aria-label": "Linked In",
      variant: "ghost",
      color: "red.500",
      icon: /* @__PURE__ */ s.jsx(S, { as: tt, boxSize: "1.5rem" }),
      onClick: () => k("https://www.linkedin.com/in/rohan-mohapatra/")
    }
  ) }),
  /* @__PURE__ */ s.jsx($, { hasArrow: !0, placement: "right-start", label: "Github", fontSize: "md", children: /* @__PURE__ */ s.jsx(
    B,
    {
      "aria-label": "Github",
      variant: "ghost",
      color: "red.500",
      icon: /* @__PURE__ */ s.jsx(S, { as: et, boxSize: "1.5rem" }),
      onClick: () => k("https://github.com/rohanmohapatra")
    }
  ) }),
  /* @__PURE__ */ s.jsx(
    $,
    {
      hasArrow: !0,
      placement: "right-start",
      label: "Google Scholar",
      fontSize: "md",
      children: /* @__PURE__ */ s.jsx(
        B,
        {
          "aria-label": "Google Scholar",
          variant: "ghost",
          color: "red.500",
          icon: /* @__PURE__ */ s.jsx(S, { as: Qr, boxSize: "1.5rem" }),
          onClick: () => k(
            "https://scholar.google.com/citations?user=9a3mq_oAAAAJ&hl=en"
          )
        }
      )
    }
  ),
  /* @__PURE__ */ s.jsx($, { hasArrow: !0, placement: "right-start", label: "Instagram", fontSize: "md", children: /* @__PURE__ */ s.jsx(
    B,
    {
      "aria-label": "Instagram",
      variant: "ghost",
      color: "red.500",
      icon: /* @__PURE__ */ s.jsx(S, { as: rt, boxSize: "1.5rem" }),
      onClick: () => k("https://www.instagram.com/monodimension")
    }
  ) }),
  /* @__PURE__ */ s.jsx($, { hasArrow: !0, placement: "right-start", label: "Twitter", fontSize: "md", children: /* @__PURE__ */ s.jsx(
    B,
    {
      "aria-label": "Twitter",
      variant: "ghost",
      color: "red.500",
      icon: /* @__PURE__ */ s.jsx(S, { as: nt, boxSize: "1.5rem" }),
      onClick: () => k("https://twitter.com/rohannmohapatra")
    }
  ) }),
  /* @__PURE__ */ s.jsx(ut, { orientation: "vertical" })
] }), ft = () => /* @__PURE__ */ s.jsxs(Tr, { autoSelect: !1, children: [
  /* @__PURE__ */ s.jsx(
    Pr,
    {
      as: B,
      "aria-label": "Icon",
      icon: /* @__PURE__ */ s.jsx(S, { as: lt, boxSize: "1.5rem" }),
      position: "fixed",
      bottom: "3%",
      right: "5%",
      isRound: !0,
      size: "md"
    }
  ),
  /* @__PURE__ */ s.jsxs(Fr, { minW: "0", w: "5rem", children: [
    /* @__PURE__ */ s.jsx(
      N,
      {
        onClick: () => k("https://www.linkedin.com/in/rohan-mohapatra/"),
        children: /* @__PURE__ */ s.jsx(S, { as: it, color: "red.500", boxSize: "1.5rem" })
      }
    ),
    /* @__PURE__ */ s.jsx(N, { onClick: () => k("https://github.com/rohanmohapatra"), children: /* @__PURE__ */ s.jsx(S, { as: at, color: "red.500", boxSize: "1.5rem" }) }),
    /* @__PURE__ */ s.jsx(
      N,
      {
        onClick: () => k(
          "https://scholar.google.com/citations?user=9a3mq_oAAAAJ&hl=en"
        ),
        children: /* @__PURE__ */ s.jsx(S, { as: ct, color: "red.500", boxSize: "1.5rem" })
      }
    ),
    /* @__PURE__ */ s.jsx(
      N,
      {
        onClick: () => k("https://www.instagram.com/monodimension"),
        children: /* @__PURE__ */ s.jsx(S, { as: ot, color: "red.500", boxSize: "1.5rem" })
      }
    ),
    /* @__PURE__ */ s.jsx(
      N,
      {
        onClick: () => k("https://twitter.com/rohannmohapatra"),
        children: /* @__PURE__ */ s.jsx(S, { as: st, color: "red.500", boxSize: "1.5rem" })
      }
    )
  ] })
] });
export {
  vt as ColorModeSwitch,
  ut as Divider,
  gt as IconBar,
  pt as theme
};
