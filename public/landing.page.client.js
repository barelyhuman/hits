"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/preact/dist/preact.module.js
  function h(n3, l5) {
    for (var u4 in l5)
      n3[u4] = l5[u4];
    return n3;
  }
  function p(n3) {
    var l5 = n3.parentNode;
    l5 && l5.removeChild(n3);
  }
  function y(l5, u4, i4) {
    var t4, o5, r4, f4 = {};
    for (r4 in u4)
      "key" == r4 ? t4 = u4[r4] : "ref" == r4 ? o5 = u4[r4] : f4[r4] = u4[r4];
    if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : i4), "function" == typeof l5 && null != l5.defaultProps)
      for (r4 in l5.defaultProps)
        void 0 === f4[r4] && (f4[r4] = l5.defaultProps[r4]);
    return d(l5, f4, t4, o5, null);
  }
  function d(n3, i4, t4, o5, r4) {
    var f4 = { type: n3, props: i4, key: t4, ref: o5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r4 ? ++u : r4 };
    return null == r4 && null != l.vnode && l.vnode(f4), f4;
  }
  function k(n3) {
    return n3.children;
  }
  function b(n3, l5) {
    this.props = n3, this.context = l5;
  }
  function g(n3, l5) {
    if (null == l5)
      return n3.__ ? g(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
    for (var u4; l5 < n3.__k.length; l5++)
      if (null != (u4 = n3.__k[l5]) && null != u4.__e)
        return u4.__e;
    return "function" == typeof n3.type ? g(n3) : null;
  }
  function m(n3) {
    var l5, u4;
    if (null != (n3 = n3.__) && null != n3.__c) {
      for (n3.__e = n3.__c.base = null, l5 = 0; l5 < n3.__k.length; l5++)
        if (null != (u4 = n3.__k[l5]) && null != u4.__e) {
          n3.__e = n3.__c.base = u4.__e;
          break;
        }
      return m(n3);
    }
  }
  function w(n3) {
    (!n3.__d && (n3.__d = true) && t.push(n3) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n3, l5, u4, i4, o5, r4, e4, c5;
    for (t.sort(f); n3 = t.shift(); )
      n3.__d && (l5 = t.length, i4 = void 0, o5 = void 0, e4 = (r4 = (u4 = n3).__v).__e, (c5 = u4.__P) && (i4 = [], (o5 = h({}, r4)).__v = r4.__v + 1, L(c5, r4, o5, u4.__n, void 0 !== c5.ownerSVGElement, null != r4.__h ? [e4] : null, i4, null == e4 ? g(r4) : e4, r4.__h), M(i4, r4), r4.__e != e4 && m(r4)), t.length > l5 && t.sort(f));
    x.__r = 0;
  }
  function P(n3, l5, u4, i4, t4, o5, r4, f4, e4, a4) {
    var h3, p5, y3, _4, b4, m3, w4, x2 = i4 && i4.__k || s, P2 = x2.length;
    for (u4.__k = [], h3 = 0; h3 < l5.length; h3++)
      if (null != (_4 = u4.__k[h3] = null == (_4 = l5[h3]) || "boolean" == typeof _4 || "function" == typeof _4 ? null : "string" == typeof _4 || "number" == typeof _4 || "bigint" == typeof _4 ? d(null, _4, null, null, _4) : v(_4) ? d(k, { children: _4 }, null, null, null) : _4.__b > 0 ? d(_4.type, _4.props, _4.key, _4.ref ? _4.ref : null, _4.__v) : _4)) {
        if (_4.__ = u4, _4.__b = u4.__b + 1, null === (y3 = x2[h3]) || y3 && _4.key == y3.key && _4.type === y3.type)
          x2[h3] = void 0;
        else
          for (p5 = 0; p5 < P2; p5++) {
            if ((y3 = x2[p5]) && _4.key == y3.key && _4.type === y3.type) {
              x2[p5] = void 0;
              break;
            }
            y3 = null;
          }
        L(n3, _4, y3 = y3 || c, t4, o5, r4, f4, e4, a4), b4 = _4.__e, (p5 = _4.ref) && y3.ref != p5 && (w4 || (w4 = []), y3.ref && w4.push(y3.ref, null, _4), w4.push(p5, _4.__c || b4, _4)), null != b4 ? (null == m3 && (m3 = b4), "function" == typeof _4.type && _4.__k === y3.__k ? _4.__d = e4 = C(_4, e4, n3) : e4 = $(n3, _4, y3, x2, b4, e4), "function" == typeof u4.type && (u4.__d = e4)) : e4 && y3.__e == e4 && e4.parentNode != n3 && (e4 = g(y3));
      }
    for (u4.__e = m3, h3 = P2; h3--; )
      null != x2[h3] && ("function" == typeof u4.type && null != x2[h3].__e && x2[h3].__e == u4.__d && (u4.__d = A(i4).nextSibling), q(x2[h3], x2[h3]));
    if (w4)
      for (h3 = 0; h3 < w4.length; h3++)
        O(w4[h3], w4[++h3], w4[++h3]);
  }
  function C(n3, l5, u4) {
    for (var i4, t4 = n3.__k, o5 = 0; t4 && o5 < t4.length; o5++)
      (i4 = t4[o5]) && (i4.__ = n3, l5 = "function" == typeof i4.type ? C(i4, l5, u4) : $(u4, i4, i4, t4, i4.__e, l5));
    return l5;
  }
  function $(n3, l5, u4, i4, t4, o5) {
    var r4, f4, e4;
    if (void 0 !== l5.__d)
      r4 = l5.__d, l5.__d = void 0;
    else if (null == u4 || t4 != o5 || null == t4.parentNode)
      n:
        if (null == o5 || o5.parentNode !== n3)
          n3.appendChild(t4), r4 = null;
        else {
          for (f4 = o5, e4 = 0; (f4 = f4.nextSibling) && e4 < i4.length; e4 += 1)
            if (f4 == t4)
              break n;
          n3.insertBefore(t4, o5), r4 = o5;
        }
    return void 0 !== r4 ? r4 : t4.nextSibling;
  }
  function A(n3) {
    var l5, u4, i4;
    if (null == n3.type || "string" == typeof n3.type)
      return n3.__e;
    if (n3.__k) {
      for (l5 = n3.__k.length - 1; l5 >= 0; l5--)
        if ((u4 = n3.__k[l5]) && (i4 = A(u4)))
          return i4;
    }
    return null;
  }
  function H(n3, l5, u4, i4, t4) {
    var o5;
    for (o5 in u4)
      "children" === o5 || "key" === o5 || o5 in l5 || T(n3, o5, null, u4[o5], i4);
    for (o5 in l5)
      t4 && "function" != typeof l5[o5] || "children" === o5 || "key" === o5 || "value" === o5 || "checked" === o5 || u4[o5] === l5[o5] || T(n3, o5, l5[o5], u4[o5], i4);
  }
  function I(n3, l5, u4) {
    "-" === l5[0] ? n3.setProperty(l5, null == u4 ? "" : u4) : n3[l5] = null == u4 ? "" : "number" != typeof u4 || a.test(l5) ? u4 : u4 + "px";
  }
  function T(n3, l5, u4, i4, t4) {
    var o5;
    n:
      if ("style" === l5)
        if ("string" == typeof u4)
          n3.style.cssText = u4;
        else {
          if ("string" == typeof i4 && (n3.style.cssText = i4 = ""), i4)
            for (l5 in i4)
              u4 && l5 in u4 || I(n3.style, l5, "");
          if (u4)
            for (l5 in u4)
              i4 && u4[l5] === i4[l5] || I(n3.style, l5, u4[l5]);
        }
      else if ("o" === l5[0] && "n" === l5[1])
        o5 = l5 !== (l5 = l5.replace(/Capture$/, "")), l5 = l5.toLowerCase() in n3 ? l5.toLowerCase().slice(2) : l5.slice(2), n3.l || (n3.l = {}), n3.l[l5 + o5] = u4, u4 ? i4 || n3.addEventListener(l5, o5 ? z : j, o5) : n3.removeEventListener(l5, o5 ? z : j, o5);
      else if ("dangerouslySetInnerHTML" !== l5) {
        if (t4)
          l5 = l5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l5 && "height" !== l5 && "href" !== l5 && "list" !== l5 && "form" !== l5 && "tabIndex" !== l5 && "download" !== l5 && "rowSpan" !== l5 && "colSpan" !== l5 && l5 in n3)
          try {
            n3[l5] = null == u4 ? "" : u4;
            break n;
          } catch (n4) {
          }
        "function" == typeof u4 || (null == u4 || false === u4 && "-" !== l5[4] ? n3.removeAttribute(l5) : n3.setAttribute(l5, u4));
      }
  }
  function j(n3) {
    return this.l[n3.type + false](l.event ? l.event(n3) : n3);
  }
  function z(n3) {
    return this.l[n3.type + true](l.event ? l.event(n3) : n3);
  }
  function L(n3, u4, i4, t4, o5, r4, f4, e4, c5) {
    var s4, a4, p5, y3, d5, _4, g4, m3, w4, x2, C2, S, $2, A2, H2, I2 = u4.type;
    if (void 0 !== u4.constructor)
      return null;
    null != i4.__h && (c5 = i4.__h, e4 = u4.__e = i4.__e, u4.__h = null, r4 = [e4]), (s4 = l.__b) && s4(u4);
    try {
      n:
        if ("function" == typeof I2) {
          if (m3 = u4.props, w4 = (s4 = I2.contextType) && t4[s4.__c], x2 = s4 ? w4 ? w4.props.value : s4.__ : t4, i4.__c ? g4 = (a4 = u4.__c = i4.__c).__ = a4.__E : ("prototype" in I2 && I2.prototype.render ? u4.__c = a4 = new I2(m3, x2) : (u4.__c = a4 = new b(m3, x2), a4.constructor = I2, a4.render = B), w4 && w4.sub(a4), a4.props = m3, a4.state || (a4.state = {}), a4.context = x2, a4.__n = t4, p5 = a4.__d = true, a4.__h = [], a4._sb = []), null == a4.__s && (a4.__s = a4.state), null != I2.getDerivedStateFromProps && (a4.__s == a4.state && (a4.__s = h({}, a4.__s)), h(a4.__s, I2.getDerivedStateFromProps(m3, a4.__s))), y3 = a4.props, d5 = a4.state, a4.__v = u4, p5)
            null == I2.getDerivedStateFromProps && null != a4.componentWillMount && a4.componentWillMount(), null != a4.componentDidMount && a4.__h.push(a4.componentDidMount);
          else {
            if (null == I2.getDerivedStateFromProps && m3 !== y3 && null != a4.componentWillReceiveProps && a4.componentWillReceiveProps(m3, x2), !a4.__e && null != a4.shouldComponentUpdate && false === a4.shouldComponentUpdate(m3, a4.__s, x2) || u4.__v === i4.__v) {
              for (u4.__v !== i4.__v && (a4.props = m3, a4.state = a4.__s, a4.__d = false), a4.__e = false, u4.__e = i4.__e, u4.__k = i4.__k, u4.__k.forEach(function(n4) {
                n4 && (n4.__ = u4);
              }), C2 = 0; C2 < a4._sb.length; C2++)
                a4.__h.push(a4._sb[C2]);
              a4._sb = [], a4.__h.length && f4.push(a4);
              break n;
            }
            null != a4.componentWillUpdate && a4.componentWillUpdate(m3, a4.__s, x2), null != a4.componentDidUpdate && a4.__h.push(function() {
              a4.componentDidUpdate(y3, d5, _4);
            });
          }
          if (a4.context = x2, a4.props = m3, a4.__P = n3, S = l.__r, $2 = 0, "prototype" in I2 && I2.prototype.render) {
            for (a4.state = a4.__s, a4.__d = false, S && S(u4), s4 = a4.render(a4.props, a4.state, a4.context), A2 = 0; A2 < a4._sb.length; A2++)
              a4.__h.push(a4._sb[A2]);
            a4._sb = [];
          } else
            do {
              a4.__d = false, S && S(u4), s4 = a4.render(a4.props, a4.state, a4.context), a4.state = a4.__s;
            } while (a4.__d && ++$2 < 25);
          a4.state = a4.__s, null != a4.getChildContext && (t4 = h(h({}, t4), a4.getChildContext())), p5 || null == a4.getSnapshotBeforeUpdate || (_4 = a4.getSnapshotBeforeUpdate(y3, d5)), P(n3, v(H2 = null != s4 && s4.type === k && null == s4.key ? s4.props.children : s4) ? H2 : [H2], u4, i4, t4, o5, r4, f4, e4, c5), a4.base = u4.__e, u4.__h = null, a4.__h.length && f4.push(a4), g4 && (a4.__E = a4.__ = null), a4.__e = false;
        } else
          null == r4 && u4.__v === i4.__v ? (u4.__k = i4.__k, u4.__e = i4.__e) : u4.__e = N(i4.__e, u4, i4, t4, o5, r4, f4, c5);
      (s4 = l.diffed) && s4(u4);
    } catch (n4) {
      u4.__v = null, (c5 || null != r4) && (u4.__e = e4, u4.__h = !!c5, r4[r4.indexOf(e4)] = null), l.__e(n4, u4, i4);
    }
  }
  function M(n3, u4) {
    l.__c && l.__c(u4, n3), n3.some(function(u5) {
      try {
        n3 = u5.__h, u5.__h = [], n3.some(function(n4) {
          n4.call(u5);
        });
      } catch (n4) {
        l.__e(n4, u5.__v);
      }
    });
  }
  function N(l5, u4, i4, t4, o5, r4, f4, e4) {
    var s4, a4, h3, y3 = i4.props, d5 = u4.props, _4 = u4.type, k3 = 0;
    if ("svg" === _4 && (o5 = true), null != r4) {
      for (; k3 < r4.length; k3++)
        if ((s4 = r4[k3]) && "setAttribute" in s4 == !!_4 && (_4 ? s4.localName === _4 : 3 === s4.nodeType)) {
          l5 = s4, r4[k3] = null;
          break;
        }
    }
    if (null == l5) {
      if (null === _4)
        return document.createTextNode(d5);
      l5 = o5 ? document.createElementNS("http://www.w3.org/2000/svg", _4) : document.createElement(_4, d5.is && d5), r4 = null, e4 = false;
    }
    if (null === _4)
      y3 === d5 || e4 && l5.data === d5 || (l5.data = d5);
    else {
      if (r4 = r4 && n.call(l5.childNodes), a4 = (y3 = i4.props || c).dangerouslySetInnerHTML, h3 = d5.dangerouslySetInnerHTML, !e4) {
        if (null != r4)
          for (y3 = {}, k3 = 0; k3 < l5.attributes.length; k3++)
            y3[l5.attributes[k3].name] = l5.attributes[k3].value;
        (h3 || a4) && (h3 && (a4 && h3.__html == a4.__html || h3.__html === l5.innerHTML) || (l5.innerHTML = h3 && h3.__html || ""));
      }
      if (H(l5, d5, y3, o5, e4), h3)
        u4.__k = [];
      else if (P(l5, v(k3 = u4.props.children) ? k3 : [k3], u4, i4, t4, o5 && "foreignObject" !== _4, r4, f4, r4 ? r4[0] : i4.__k && g(i4, 0), e4), null != r4)
        for (k3 = r4.length; k3--; )
          null != r4[k3] && p(r4[k3]);
      e4 || ("value" in d5 && void 0 !== (k3 = d5.value) && (k3 !== l5.value || "progress" === _4 && !k3 || "option" === _4 && k3 !== y3.value) && T(l5, "value", k3, y3.value, false), "checked" in d5 && void 0 !== (k3 = d5.checked) && k3 !== l5.checked && T(l5, "checked", k3, y3.checked, false));
    }
    return l5;
  }
  function O(n3, u4, i4) {
    try {
      "function" == typeof n3 ? n3(u4) : n3.current = u4;
    } catch (n4) {
      l.__e(n4, i4);
    }
  }
  function q(n3, u4, i4) {
    var t4, o5;
    if (l.unmount && l.unmount(n3), (t4 = n3.ref) && (t4.current && t4.current !== n3.__e || O(t4, null, u4)), null != (t4 = n3.__c)) {
      if (t4.componentWillUnmount)
        try {
          t4.componentWillUnmount();
        } catch (n4) {
          l.__e(n4, u4);
        }
      t4.base = t4.__P = null, n3.__c = void 0;
    }
    if (t4 = n3.__k)
      for (o5 = 0; o5 < t4.length; o5++)
        t4[o5] && q(t4[o5], u4, i4 || "function" != typeof n3.type);
    i4 || null == n3.__e || p(n3.__e), n3.__ = n3.__e = n3.__d = void 0;
  }
  function B(n3, l5, u4) {
    return this.constructor(n3, u4);
  }
  function D(u4, i4, t4) {
    var o5, r4, f4;
    l.__ && l.__(u4, i4), r4 = (o5 = "function" == typeof t4) ? null : t4 && t4.__k || i4.__k, f4 = [], L(i4, u4 = (!o5 && t4 || i4).__k = y(k, null, [u4]), r4 || c, c, void 0 !== i4.ownerSVGElement, !o5 && t4 ? [t4] : r4 ? null : i4.firstChild ? n.call(i4.childNodes) : null, f4, !o5 && t4 ? t4 : r4 ? r4.__e : i4.firstChild, o5), M(f4, u4);
  }
  var n, l, u, i, t, o, r, f, e, c, s, a, v;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      c = {};
      s = [];
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      v = Array.isArray;
      n = s.slice, l = { __e: function(n3, l5, u4, i4) {
        for (var t4, o5, r4; l5 = l5.__; )
          if ((t4 = l5.__c) && !t4.__)
            try {
              if ((o5 = t4.constructor) && null != o5.getDerivedStateFromError && (t4.setState(o5.getDerivedStateFromError(n3)), r4 = t4.__d), null != t4.componentDidCatch && (t4.componentDidCatch(n3, i4 || {}), r4 = t4.__d), r4)
                return t4.__E = t4;
            } catch (l6) {
              n3 = l6;
            }
        throw n3;
      } }, u = 0, i = function(n3) {
        return null != n3 && void 0 === n3.constructor;
      }, b.prototype.setState = function(n3, l5) {
        var u4;
        u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n3 && (n3 = n3(h({}, u4), this.props)), n3 && h(u4, n3), null != n3 && this.__v && (l5 && this._sb.push(l5), w(this));
      }, b.prototype.forceUpdate = function(n3) {
        this.__v && (this.__e = true, n3 && this.__h.push(n3), w(this));
      }, b.prototype.render = k, t = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n3, l5) {
        return n3.__v.__b - l5.__v.__b;
      }, x.__r = 0, e = 0;
    }
  });

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  function o2(o5, e4, n3, t4, f4, l5) {
    var s4, u4, a4 = {};
    for (u4 in e4)
      "ref" == u4 ? s4 = e4[u4] : a4[u4] = e4[u4];
    var i4 = { type: o5, props: a4, key: n3, ref: s4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_, __source: f4, __self: l5 };
    if ("function" == typeof o5 && (s4 = o5.defaultProps))
      for (u4 in s4)
        void 0 === a4[u4] && (a4[u4] = s4[u4]);
    return l.vnode && l.vnode(i4), i4;
  }
  var _;
  var init_jsxRuntime_module = __esm({
    "node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"() {
      init_preact_module();
      init_preact_module();
      _ = 0;
    }
  });

  // components/header.js
  function Header() {
    return /* @__PURE__ */ o2(k, { children: [
      /* @__PURE__ */ o2("section", { children: /* @__PURE__ */ o2("header", { children: /* @__PURE__ */ o2("h1", { children: "Hits" }) }) }),
      /* @__PURE__ */ o2("section", { children: /* @__PURE__ */ o2("p", { children: "Fast | Self Hosted | Page Hits Service" }) }),
      /* @__PURE__ */ o2("hr", {})
    ] });
  }
  var init_header = __esm({
    "components/header.js"() {
      "use strict";
      init_jsxRuntime_module();
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function d2(t4, u4) {
    l.__h && l.__h(r2, t4, o3 || u4), o3 = 0;
    var i4 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t4 >= i4.__.length && i4.__.push({ __V: c2 }), i4.__[t4];
  }
  function F(n3, r4) {
    var u4 = d2(t2++, 7);
    return z2(u4.__H, r4) ? (u4.__V = n3(), u4.i = r4, u4.__h = n3, u4.__V) : u4.__;
  }
  function b2() {
    for (var t4; t4 = f2.shift(); )
      if (t4.__P && t4.__H)
        try {
          t4.__H.__h.forEach(k2), t4.__H.__h.forEach(w2), t4.__H.__h = [];
        } catch (r4) {
          t4.__H.__h = [], l.__e(r4, t4.__v);
        }
  }
  function j2(n3) {
    var t4, r4 = function() {
      clearTimeout(u4), g2 && cancelAnimationFrame(t4), setTimeout(n3);
    }, u4 = setTimeout(r4, 100);
    g2 && (t4 = requestAnimationFrame(r4));
  }
  function k2(n3) {
    var t4 = r2, u4 = n3.__c;
    "function" == typeof u4 && (n3.__c = void 0, u4()), r2 = t4;
  }
  function w2(n3) {
    var t4 = r2;
    n3.__c = n3.__(), r2 = t4;
  }
  function z2(n3, t4) {
    return !n3 || n3.length !== t4.length || t4.some(function(t5, r4) {
      return t5 !== n3[r4];
    });
  }
  var t2, r2, u2, i2, o3, f2, c2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o3 = 0;
      f2 = [];
      c2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      l.__b = function(n3) {
        r2 = null, e2 && e2(n3);
      }, l.__r = function(n3) {
        a2 && a2(n3), t2 = 0;
        var i4 = (r2 = n3.__c).__H;
        i4 && (u2 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n4) {
          n4.__N && (n4.__ = n4.__N), n4.__V = c2, n4.__N = n4.i = void 0;
        })) : (i4.__h.forEach(k2), i4.__h.forEach(w2), i4.__h = [], t2 = 0)), u2 = r2;
      }, l.diffed = function(t4) {
        v2 && v2(t4);
        var o5 = t4.__c;
        o5 && o5.__H && (o5.__H.__h.length && (1 !== f2.push(o5) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o5.__H.__.forEach(function(n3) {
          n3.i && (n3.__H = n3.i), n3.__V !== c2 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c2;
        })), u2 = r2 = null;
      }, l.__c = function(t4, r4) {
        r4.some(function(t5) {
          try {
            t5.__h.forEach(k2), t5.__h = t5.__h.filter(function(n3) {
              return !n3.__ || w2(n3);
            });
          } catch (u4) {
            r4.some(function(n3) {
              n3.__h && (n3.__h = []);
            }), r4 = [], l.__e(u4, t5.__v);
          }
        }), l2 && l2(t4, r4);
      }, l.unmount = function(t4) {
        m2 && m2(t4);
        var r4, u4 = t4.__c;
        u4 && u4.__H && (u4.__H.__.forEach(function(n3) {
          try {
            k2(n3);
          } catch (n4) {
            r4 = n4;
          }
        }), u4.__H = void 0, r4 && l.__e(r4, u4.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
    }
  });

  // node_modules/@preact/signals-core/dist/signals-core.module.js
  function i3() {
    throw new Error("Cycle detected");
  }
  function t3() {
    if (!(h2 > 1)) {
      var i4, t4 = false;
      while (void 0 !== n2) {
        var o5 = n2;
        n2 = void 0;
        s2++;
        while (void 0 !== o5) {
          var r4 = o5.o;
          o5.o = void 0;
          o5.f &= -3;
          if (!(8 & o5.f) && c3(o5))
            try {
              o5.c();
            } catch (o6) {
              if (!t4) {
                i4 = o6;
                t4 = true;
              }
            }
          o5 = r4;
        }
      }
      s2 = 0;
      h2--;
      if (t4)
        throw i4;
    } else
      h2--;
  }
  function v3(i4) {
    if (void 0 !== r3) {
      var t4 = i4.n;
      if (void 0 === t4 || t4.t !== r3) {
        t4 = { i: 0, S: i4, p: r3.s, n: void 0, t: r3, e: void 0, x: void 0, r: t4 };
        if (void 0 !== r3.s)
          r3.s.n = t4;
        r3.s = t4;
        i4.n = t4;
        if (32 & r3.f)
          i4.S(t4);
        return t4;
      } else if (-1 === t4.i) {
        t4.i = 0;
        if (void 0 !== t4.n) {
          t4.n.p = t4.p;
          if (void 0 !== t4.p)
            t4.p.n = t4.n;
          t4.p = r3.s;
          t4.n = void 0;
          r3.s.n = t4;
          r3.s = t4;
        }
        return t4;
      }
    }
  }
  function e3(i4) {
    this.v = i4;
    this.i = 0;
    this.n = void 0;
    this.t = void 0;
  }
  function u3(i4) {
    return new e3(i4);
  }
  function c3(i4) {
    for (var t4 = i4.s; void 0 !== t4; t4 = t4.n)
      if (t4.S.i !== t4.i || !t4.S.h() || t4.S.i !== t4.i)
        return true;
    return false;
  }
  function d3(i4) {
    for (var t4 = i4.s; void 0 !== t4; t4 = t4.n) {
      var o5 = t4.S.n;
      if (void 0 !== o5)
        t4.r = o5;
      t4.S.n = t4;
      t4.i = -1;
      if (void 0 === t4.n) {
        i4.s = t4;
        break;
      }
    }
  }
  function a3(i4) {
    var t4 = i4.s, o5 = void 0;
    while (void 0 !== t4) {
      var r4 = t4.p;
      if (-1 === t4.i) {
        t4.S.U(t4);
        if (void 0 !== r4)
          r4.n = t4.n;
        if (void 0 !== t4.n)
          t4.n.p = r4;
      } else
        o5 = t4;
      t4.S.n = t4.r;
      if (void 0 !== t4.r)
        t4.r = void 0;
      t4 = r4;
    }
    i4.s = o5;
  }
  function l3(i4) {
    e3.call(this, void 0);
    this.x = i4;
    this.s = void 0;
    this.g = f3 - 1;
    this.f = 4;
  }
  function w3(i4) {
    return new l3(i4);
  }
  function y2(i4) {
    var o5 = i4.u;
    i4.u = void 0;
    if ("function" == typeof o5) {
      h2++;
      var n3 = r3;
      r3 = void 0;
      try {
        o5();
      } catch (t4) {
        i4.f &= -2;
        i4.f |= 8;
        _2(i4);
        throw t4;
      } finally {
        r3 = n3;
        t3();
      }
    }
  }
  function _2(i4) {
    for (var t4 = i4.s; void 0 !== t4; t4 = t4.n)
      t4.S.U(t4);
    i4.x = void 0;
    i4.s = void 0;
    y2(i4);
  }
  function p2(i4) {
    if (r3 !== this)
      throw new Error("Out-of-order effect");
    a3(this);
    r3 = i4;
    this.f &= -2;
    if (8 & this.f)
      _2(this);
    t3();
  }
  function g3(i4) {
    this.x = i4;
    this.u = void 0;
    this.s = void 0;
    this.o = void 0;
    this.f = 32;
  }
  function b3(i4) {
    var t4 = new g3(i4);
    try {
      t4.c();
    } catch (i5) {
      t4.d();
      throw i5;
    }
    return t4.d.bind(t4);
  }
  var r3, n2, h2, s2, f3;
  var init_signals_core_module = __esm({
    "node_modules/@preact/signals-core/dist/signals-core.module.js"() {
      r3 = void 0;
      n2 = void 0;
      h2 = 0;
      s2 = 0;
      f3 = 0;
      e3.prototype.h = function() {
        return true;
      };
      e3.prototype.S = function(i4) {
        if (this.t !== i4 && void 0 === i4.e) {
          i4.x = this.t;
          if (void 0 !== this.t)
            this.t.e = i4;
          this.t = i4;
        }
      };
      e3.prototype.U = function(i4) {
        if (void 0 !== this.t) {
          var t4 = i4.e, o5 = i4.x;
          if (void 0 !== t4) {
            t4.x = o5;
            i4.e = void 0;
          }
          if (void 0 !== o5) {
            o5.e = t4;
            i4.x = void 0;
          }
          if (i4 === this.t)
            this.t = o5;
        }
      };
      e3.prototype.subscribe = function(i4) {
        var t4 = this;
        return b3(function() {
          var o5 = t4.value, r4 = 32 & this.f;
          this.f &= -33;
          try {
            i4(o5);
          } finally {
            this.f |= r4;
          }
        });
      };
      e3.prototype.valueOf = function() {
        return this.value;
      };
      e3.prototype.toString = function() {
        return this.value + "";
      };
      e3.prototype.toJSON = function() {
        return this.value;
      };
      e3.prototype.peek = function() {
        return this.v;
      };
      Object.defineProperty(e3.prototype, "value", { get: function() {
        var i4 = v3(this);
        if (void 0 !== i4)
          i4.i = this.i;
        return this.v;
      }, set: function(o5) {
        if (r3 instanceof l3)
          !function() {
            throw new Error("Computed cannot have side-effects");
          }();
        if (o5 !== this.v) {
          if (s2 > 100)
            i3();
          this.v = o5;
          this.i++;
          f3++;
          h2++;
          try {
            for (var n3 = this.t; void 0 !== n3; n3 = n3.x)
              n3.t.N();
          } finally {
            t3();
          }
        }
      } });
      (l3.prototype = new e3()).h = function() {
        this.f &= -3;
        if (1 & this.f)
          return false;
        if (32 == (36 & this.f))
          return true;
        this.f &= -5;
        if (this.g === f3)
          return true;
        this.g = f3;
        this.f |= 1;
        if (this.i > 0 && !c3(this)) {
          this.f &= -2;
          return true;
        }
        var i4 = r3;
        try {
          d3(this);
          r3 = this;
          var t4 = this.x();
          if (16 & this.f || this.v !== t4 || 0 === this.i) {
            this.v = t4;
            this.f &= -17;
            this.i++;
          }
        } catch (i5) {
          this.v = i5;
          this.f |= 16;
          this.i++;
        }
        r3 = i4;
        a3(this);
        this.f &= -2;
        return true;
      };
      l3.prototype.S = function(i4) {
        if (void 0 === this.t) {
          this.f |= 36;
          for (var t4 = this.s; void 0 !== t4; t4 = t4.n)
            t4.S.S(t4);
        }
        e3.prototype.S.call(this, i4);
      };
      l3.prototype.U = function(i4) {
        if (void 0 !== this.t) {
          e3.prototype.U.call(this, i4);
          if (void 0 === this.t) {
            this.f &= -33;
            for (var t4 = this.s; void 0 !== t4; t4 = t4.n)
              t4.S.U(t4);
          }
        }
      };
      l3.prototype.N = function() {
        if (!(2 & this.f)) {
          this.f |= 6;
          for (var i4 = this.t; void 0 !== i4; i4 = i4.x)
            i4.t.N();
        }
      };
      l3.prototype.peek = function() {
        if (!this.h())
          i3();
        if (16 & this.f)
          throw this.v;
        return this.v;
      };
      Object.defineProperty(l3.prototype, "value", { get: function() {
        if (1 & this.f)
          i3();
        var t4 = v3(this);
        this.h();
        if (void 0 !== t4)
          t4.i = this.i;
        if (16 & this.f)
          throw this.v;
        return this.v;
      } });
      g3.prototype.c = function() {
        var i4 = this.S();
        try {
          if (8 & this.f)
            return;
          if (void 0 === this.x)
            return;
          var t4 = this.x();
          if ("function" == typeof t4)
            this.u = t4;
        } finally {
          i4();
        }
      };
      g3.prototype.S = function() {
        if (1 & this.f)
          i3();
        this.f |= 1;
        this.f &= -9;
        y2(this);
        d3(this);
        h2++;
        var t4 = r3;
        r3 = this;
        return p2.bind(this, t4);
      };
      g3.prototype.N = function() {
        if (!(2 & this.f)) {
          this.f |= 2;
          this.o = n2;
          n2 = this;
        }
      };
      g3.prototype.d = function() {
        this.f |= 8;
        if (!(1 & this.f))
          _2(this);
      };
    }
  });

  // node_modules/@preact/signals/dist/signals.module.js
  function s3(n3, i4) {
    l[n3] = i4.bind(null, l[n3] || function() {
    });
  }
  function l4(n3) {
    if (v4)
      v4();
    v4 = n3 && n3.S();
  }
  function d4(n3) {
    var r4 = this, t4 = n3.data, f4 = useSignal(t4);
    f4.value = t4;
    var o5 = F(function() {
      var n4 = r4.__v;
      while (n4 = n4.__)
        if (n4.__c) {
          n4.__c.__$f |= 4;
          break;
        }
      r4.__$u.c = function() {
        r4.base.data = o5.peek();
      };
      return w3(function() {
        var n5 = f4.value.value;
        return 0 === n5 ? 0 : true === n5 ? "" : n5 || "";
      });
    }, []);
    return o5.value;
  }
  function p4(n3, r4, i4, t4) {
    var f4 = r4 in n3 && void 0 === n3.ownerSVGElement, o5 = u3(i4);
    return { o: function(n4, r5) {
      o5.value = n4;
      t4 = r5;
    }, d: b3(function() {
      var i5 = o5.value.value;
      if (t4[r4] !== i5) {
        t4[r4] = i5;
        if (f4)
          n3[r4] = i5;
        else if (i5)
          n3.setAttribute(r4, i5);
        else
          n3.removeAttribute(r4);
      }
    }) };
  }
  function useSignal(n3) {
    return F(function() {
      return u3(n3);
    }, []);
  }
  var c4, v4;
  var init_signals_module = __esm({
    "node_modules/@preact/signals/dist/signals.module.js"() {
      init_preact_module();
      init_hooks_module();
      init_signals_core_module();
      init_signals_core_module();
      d4.displayName = "_st";
      Object.defineProperties(e3.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: d4 }, props: { configurable: true, get: function() {
        return { data: this };
      } }, __b: { configurable: true, value: 1 } });
      s3("__b", function(n3, r4) {
        if ("string" == typeof r4.type) {
          var i4, t4 = r4.props;
          for (var f4 in t4)
            if ("children" !== f4) {
              var e4 = t4[f4];
              if (e4 instanceof e3) {
                if (!i4)
                  r4.__np = i4 = {};
                i4[f4] = e4;
                t4[f4] = e4.peek();
              }
            }
        }
        n3(r4);
      });
      s3("__r", function(n3, r4) {
        l4();
        var i4, t4 = r4.__c;
        if (t4) {
          t4.__$f &= -2;
          if (void 0 === (i4 = t4.__$u))
            t4.__$u = i4 = function(n4) {
              var r5;
              b3(function() {
                r5 = this;
              });
              r5.c = function() {
                t4.__$f |= 1;
                t4.setState({});
              };
              return r5;
            }();
        }
        c4 = t4;
        l4(i4);
        n3(r4);
      });
      s3("__e", function(n3, r4, i4, t4) {
        l4();
        c4 = void 0;
        n3(r4, i4, t4);
      });
      s3("diffed", function(n3, r4) {
        l4();
        c4 = void 0;
        var i4;
        if ("string" == typeof r4.type && (i4 = r4.__e)) {
          var t4 = r4.__np, f4 = r4.props;
          if (t4) {
            var o5 = i4.U;
            if (o5)
              for (var e4 in o5) {
                var u4 = o5[e4];
                if (void 0 !== u4 && !(e4 in t4)) {
                  u4.d();
                  o5[e4] = void 0;
                }
              }
            else
              i4.U = o5 = {};
            for (var a4 in t4) {
              var v5 = o5[a4], s4 = t4[a4];
              if (void 0 === v5) {
                v5 = p4(i4, a4, s4, f4);
                o5[a4] = v5;
              } else
                v5.o(s4, f4);
            }
          }
        }
        n3(r4);
      });
      s3("unmount", function(n3, r4) {
        if ("string" == typeof r4.type) {
          var i4 = r4.__e;
          if (i4) {
            var t4 = i4.U;
            if (t4) {
              i4.U = void 0;
              for (var f4 in t4) {
                var o5 = t4[f4];
                if (o5)
                  o5.d();
              }
            }
          }
        } else {
          var e4 = r4.__c;
          if (e4) {
            var u4 = e4.__$u;
            if (u4) {
              e4.__$u = void 0;
              u4.d();
            }
          }
        }
        n3(r4);
      });
      s3("__h", function(n3, r4, i4, t4) {
        if (t4 < 3)
          r4.__$f |= 2;
        n3(r4, i4, t4);
      });
      b.prototype.shouldComponentUpdate = function(n3, r4) {
        var i4 = this.__$u;
        if (!(i4 && void 0 !== i4.s || 4 & this.__$f))
          return true;
        if (3 & this.__$f)
          return true;
        for (var t4 in r4)
          return true;
        for (var f4 in n3)
          if ("__source" !== f4 && n3[f4] !== this.props[f4])
            return true;
        for (var o5 in this.props)
          if (!(o5 in n3))
            return true;
        return false;
      };
    }
  });

  // pages/landing.page.js
  var landing_page_exports = {};
  __export(landing_page_exports, {
    default: () => LandingPage
  });
  function LandingPage({ content }) {
    return /* @__PURE__ */ o2(k, { children: [
      /* @__PURE__ */ o2(Header, {}),
      /* @__PURE__ */ o2("section", { dangerouslySetInnerHTML: { __html: content } }),
      /* @__PURE__ */ o2("div", { children: [
        /* @__PURE__ */ o2("h3", { children: "Counter" }),
        /* @__PURE__ */ o2("p", { children: count })
      ] })
    ] });
  }
  var count;
  var init_landing_page = __esm({
    "pages/landing.page.js"() {
      "use strict";
      init_header();
      init_signals_module();
      init_jsxRuntime_module();
      count = u3(0);
      if (typeof window !== "undefined") {
        setInterval(() => {
          fetch(`https://hits.goblin.run/hits?url=${window.location.href}`).then((d5) => d5.json()).then((d5) => {
            count.value = d5.count;
          });
        }, 1e3);
      }
    }
  });

  // .generated/landing.page.client.js
  init_preact_module();
  var restoreTree = (type, props = {}) => {
    if (typeof props.children === "object") {
      if (Array.isArray(props.children)) {
        return y(
          type,
          props,
          ...props.children.map((x2) => {
            return restoreTree(x2.type, x2.props);
          })
        );
      }
      return y(
        type,
        props,
        restoreTree(props.children.type, props.children.props || {})
      );
    }
    return y(type, props);
  };
  function mergePropsWithDOM(rootNode, props) {
    const scripts = /* @__PURE__ */ new Map();
    function walk(node, propPoint) {
      Array.from(node.childNodes || []).filter((x2) => {
        if (x2.localName != "script") {
          return true;
        } else {
          scripts.set(x2.src, x2);
        }
      }).forEach((child, index) => {
        let _prop = propPoint;
        if (Array.isArray(propPoint) && propPoint[index]) {
          _prop = propPoint[index];
        }
        if (/^island-(.*)+/.test(child.localName)) {
          _prop.type = child.localName;
          if (_prop.props) {
            _prop.props["data-props"] = JSON.stringify(_prop.props);
          }
        }
        if (child.childNodes.length > 0) {
          if (propPoint.children) {
            walk(child, propPoint.children);
          }
        }
      });
    }
    walk(rootNode, props);
    rootNode.innerHTML = "";
    const scriptNodes = [...scripts].map(([k3, v5]) => v5);
    rootNode.append(...scriptNodes);
  }
  customElements.define("island-landing-page", class IslandLandingPage extends HTMLElement {
    async connectedCallback() {
      const c5 = await Promise.resolve().then(() => (init_landing_page(), landing_page_exports));
      const props = JSON.parse(this.dataset.props || "{}");
      mergePropsWithDOM(this, props);
      D(restoreTree(c5.default, props), this, this);
    }
  });
})();
