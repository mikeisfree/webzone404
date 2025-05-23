!(function () {
  function t(t) {
    return t && t.__esModule ? t.default : t;
  }
  function e(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function r(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = e);
  }
  var i,
    n,
    s,
    o,
    a,
    u,
    h,
    l,
    c,
    f,
    d,
    p,
    m,
    _,
    g,
    v,
    y,
    w,
    x,
    b,
    O,
    T,
    M,
    D,
    S,
    k,
    E,
    A,
    C = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    L = { duration: 0.5, overwrite: !1, delay: 0 },
    I = 1e8,
    P = 1e-8,
    R = 2 * Math.PI,
    z = R / 4,
    F = 0,
    q = Math.sqrt,
    B = Math.cos,
    j = Math.sin,
    N = function (t) {
      return "string" == typeof t;
    },
    V = function (t) {
      return "function" == typeof t;
    },
    X = function (t) {
      return "number" == typeof t;
    },
    Y = function (t) {
      return void 0 === t;
    },
    U = function (t) {
      return "object" == typeof t;
    },
    W = function (t) {
      return !1 !== t;
    },
    H = function () {
      return "undefined" != typeof window;
    },
    Q = function (t) {
      return V(t) || N(t);
    },
    G =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    $ = Array.isArray,
    Z = /(?:-?\.?\d|\.)+/gi,
    J = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    K = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    tt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    et = /[+-]=-?[.\d]+/,
    rt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
    it = /[\d.+\-=]+(?:e[-+]\d*)*/i,
    nt = {},
    st = {},
    ot = function (t) {
      return (st = Lt(t, nt)) && _r;
    },
    at = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    ut = function (t, e) {
      return !e && console.warn(t);
    },
    ht = function (t, e) {
      return (t && (nt[t] = e) && st && (st[t] = e)) || nt;
    },
    lt = function () {
      return 0;
    },
    ct = {},
    ft = [],
    dt = {},
    pt = {},
    mt = {},
    _t = 30,
    gt = [],
    vt = "",
    yt = function (t) {
      var e,
        r,
        i = t[0];
      if ((U(i) || V(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
        for (r = gt.length; r-- && !gt[r].targetTest(i); );
        e = gt[r];
      }
      for (r = t.length; r--; )
        (t[r] && (t[r]._gsap || (t[r]._gsap = new Ne(t[r], e)))) ||
          t.splice(r, 1);
      return t;
    },
    wt = function (t) {
      return t._gsap || yt(oe(t))[0]._gsap;
    },
    xt = function (t, e, r) {
      return (r = t[e]) && V(r)
        ? t[e]()
        : (Y(r) && t.getAttribute && t.getAttribute(e)) || r;
    },
    bt = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    Ot = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    Tt = function (t, e) {
      for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
      return i < r;
    },
    Mt = function (t, e, r) {
      var i,
        n = X(t[1]),
        s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[s];
      if ((n && (o.duration = t[1]), (o.parent = r), e)) {
        for (i = o; r && !("immediateRender" in i); )
          (i = r.vars.defaults || {}), (r = W(r.vars.inherit) && r.parent);
        (o.immediateRender = W(i.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
      }
      return o;
    },
    Dt = function () {
      var t,
        e,
        r = ft.length,
        i = ft.slice(0);
      for (dt = {}, ft.length = 0, t = 0; t < r; t++)
        (e = i[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    St = function (t, e, r, i) {
      ft.length && Dt(), t.render(e, r, i), ft.length && Dt();
    },
    kt = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(rt).length < 2
        ? e
        : N(t)
        ? t.trim()
        : t;
    },
    Et = function (t) {
      return t;
    },
    At = function (t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t;
    },
    Ct = function (t, e) {
      for (var r in e)
        r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
    },
    Lt = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    It = function t(e, r) {
      for (var i in r)
        "__proto__" !== i &&
          "constructor" !== i &&
          "prototype" !== i &&
          (e[i] = U(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
      return e;
    },
    Pt = function (t, e) {
      var r,
        i = {};
      for (r in t) r in e || (i[r] = t[r]);
      return i;
    },
    Rt = function (t) {
      var e = t.parent || n,
        r = t.keyframes ? Ct : At;
      if (W(t.inherit))
        for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
      return t;
    },
    zt = function (t, e, r, i) {
      void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
      var n = e._prev,
        s = e._next;
      n ? (n._next = s) : t[r] === e && (t[r] = s),
        s ? (s._prev = n) : t[i] === e && (t[i] = n),
        (e._next = e._prev = e.parent = null);
    },
    Ft = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        (t._act = 0);
    },
    qt = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
      return t;
    },
    Bt = function (t) {
      for (var e = t.parent; e && e.parent; )
        (e._dirty = 1), e.totalDuration(), (e = e.parent);
      return t;
    },
    jt = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    Nt = function (t) {
      return t._repeat ? Vt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    Vt = function (t, e) {
      var r = Math.floor((t /= e));
      return t && r === t ? r - 1 : r;
    },
    Xt = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    Yt = function (t) {
      return (t._end = Ot(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || P) || 0)
      ));
    },
    Ut = function (t, e) {
      var r = t._dp;
      return (
        r &&
          r.smoothChildTiming &&
          t._ts &&
          ((t._start = Ot(
            r._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          Yt(t),
          r._dirty || qt(r, t)),
        t
      );
    },
    Wt = function (t, e) {
      var r;
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((r = Xt(t.rawTime(), e)),
          (!e._dur || re(0, e.totalDuration(), r) - e._tTime > P) &&
            e.render(r, !0)),
        qt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (r = t; r._dp; )
            r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
        t._zTime = -1e-8;
      }
    },
    Ht = function (t, e, r, i) {
      return (
        e.parent && Ft(e),
        (e._start = Ot(r + e._delay)),
        (e._end = Ot(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        (function (t, e, r, i, n) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var s,
            o = t[i];
          if (n) for (s = e[n]; o && o[n] > s; ) o = o._prev;
          o
            ? ((e._next = o._next), (o._next = e))
            : ((e._next = t[r]), (t[r] = e)),
            e._next ? (e._next._prev = e) : (t[i] = e),
            (e._prev = o),
            (e.parent = e._dp = t);
        })(t, e, "_first", "_last", t._sort ? "_start" : 0),
        (t._recent = e),
        i || Wt(t, e),
        t
      );
    },
    Qt = function (t, e) {
      return (
        (nt.ScrollTrigger || at("scrollTrigger", e)) &&
        nt.ScrollTrigger.create(e, t)
      );
    },
    Gt = function (t, e, r, i) {
      return (
        Qe(t, e),
        t._initted
          ? !r &&
            t._pt &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            h !== ke.frame
            ? (ft.push(t), (t._lazy = [e, i]), 1)
            : void 0
          : 1
      );
    },
    $t = function t(e) {
      var r = e.parent;
      return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
    },
    Zt = function (t, e, r, i) {
      var n = t._repeat,
        s = Ot(e) || 0,
        o = t._tTime / t._tDur;
      return (
        o && !i && (t._time *= s / t._dur),
        (t._dur = s),
        (t._tDur = n ? (n < 0 ? 1e10 : Ot(s * (n + 1) + t._rDelay * n)) : s),
        o && !i ? Ut(t, (t._tTime = t._tDur * o)) : t.parent && Yt(t),
        r || qt(t.parent, t),
        t
      );
    },
    Jt = function (t) {
      return t instanceof Xe ? qt(t) : Zt(t, t._dur);
    },
    Kt = { _start: 0, endTime: lt },
    te = function t(e, r) {
      var i,
        n,
        s = e.labels,
        o = e._recent || Kt,
        a = e.duration() >= I ? o.endTime(!1) : e._dur;
      return N(r) && (isNaN(r) || r in s)
        ? "<" === (i = r.charAt(0)) || ">" === i
          ? ("<" === i ? o._start : o.endTime(o._repeat >= 0)) +
            (parseFloat(r.substr(1)) || 0)
          : (i = r.indexOf("=")) < 0
          ? (r in s || (s[r] = a), s[r])
          : ((n = +(r.charAt(i - 1) + r.substr(i + 1))),
            i > 1 ? t(e, r.substr(0, i - 1)) + n : a + n)
        : null == r
        ? a
        : +r;
    },
    ee = function (t, e) {
      return t || 0 === t ? e(t) : e;
    },
    re = function (t, e, r) {
      return r < t ? t : r > e ? e : r;
    },
    ie = function (t) {
      if ("string" != typeof t) return "";
      var e = it.exec(t);
      return e ? t.substr(e.index + e[0].length) : "";
    },
    ne = [].slice,
    se = function (t, e) {
      return (
        t &&
        U(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && U(t[0]))) &&
        !t.nodeType &&
        t !== s
      );
    },
    oe = function (t, e) {
      return !N(t) || e || (!o && Ee())
        ? $(t)
          ? (function (t, e, r) {
              return (
                void 0 === r && (r = []),
                t.forEach(function (t) {
                  var i;
                  return (N(t) && !e) || se(t, 1)
                    ? (i = r).push.apply(i, oe(t))
                    : r.push(t);
                }) || r
              );
            })(t, e)
          : se(t)
          ? ne.call(t, 0)
          : t
          ? [t]
          : []
        : ne.call(a.querySelectorAll(t), 0);
    },
    ae = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    ue = function (t) {
      if (V(t)) return t;
      var e = U(t) ? t : { each: t },
        r = ze(e.ease),
        i = e.from || 0,
        n = parseFloat(e.base) || 0,
        s = {},
        o = i > 0 && i < 1,
        a = isNaN(i) || o,
        u = e.axis,
        h = i,
        l = i;
      return (
        N(i)
          ? (h = l = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
          : !o && a && ((h = i[0]), (l = i[1])),
        function (t, o, c) {
          var f,
            d,
            p,
            m,
            _,
            g,
            v,
            y,
            w,
            x = (c || e).length,
            b = s[x];
          if (!b) {
            if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, I])[1])) {
              for (
                v = -1e8;
                v < (v = c[w++].getBoundingClientRect().left) && w < x;

              );
              w--;
            }
            for (
              b = s[x] = [],
                f = a ? Math.min(w, x) * h - 0.5 : i % w,
                d = a ? (x * l) / w - 0.5 : (i / w) | 0,
                v = 0,
                y = I,
                g = 0;
              g < x;
              g++
            )
              (p = (g % w) - f),
                (m = d - ((g / w) | 0)),
                (b[g] = _ = u ? Math.abs("y" === u ? m : p) : q(p * p + m * m)),
                _ > v && (v = _),
                _ < y && (y = _);
            "random" === i && ae(b),
              (b.max = v - y),
              (b.min = y),
              (b.v = x =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (w > x
                      ? x - 1
                      : u
                      ? "y" === u
                        ? x / w
                        : w
                      : Math.max(w, x / w)) ||
                  0) * ("edges" === i ? -1 : 1)),
              (b.b = x < 0 ? n - x : n),
              (b.u = ie(e.amount || e.each) || 0),
              (r = r && x < 0 ? Pe(r) : r);
          }
          return (
            (x = (b[t] - b.min) / b.max || 0),
            Ot(b.b + (r ? r(x) : x) * b.v) + b.u
          );
        }
      );
    },
    he = function (t) {
      var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
      return function (r) {
        var i = Math.round(parseFloat(r) / t) * t * e;
        return (i - (i % 1)) / e + (X(r) ? 0 : ie(r));
      };
    },
    le = function (t, e) {
      var r,
        i,
        n = $(t);
      return (
        !n &&
          U(t) &&
          ((r = n = t.radius || I),
          t.values
            ? ((t = oe(t.values)), (i = !X(t[0])) && (r *= r))
            : (t = he(t.increment))),
        ee(
          e,
          n
            ? V(t)
              ? function (e) {
                  return (i = t(e)), Math.abs(i - e) <= r ? i : e;
                }
              : function (e) {
                  for (
                    var n,
                      s,
                      o = parseFloat(i ? e.x : e),
                      a = parseFloat(i ? e.y : 0),
                      u = I,
                      h = 0,
                      l = t.length;
                    l--;

                  )
                    (n = i
                      ? (n = t[l].x - o) * n + (s = t[l].y - a) * s
                      : Math.abs(t[l] - o)) < u && ((u = n), (h = l));
                  return (
                    (h = !r || u <= r ? t[h] : e),
                    i || h === e || X(e) ? h : h + ie(e)
                  );
                }
            : he(t)
        )
      );
    },
    ce = function (t, e, r, i) {
      return ee($(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
        return $(t)
          ? t[~~(Math.random() * t.length)]
          : (r = r || 1e-5) &&
              (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                ) *
                  r *
                  i
              ) / i;
      });
    },
    fe = function (t, e, r) {
      return ee(r, function (r) {
        return t[~~e(r)];
      });
    },
    de = function (t) {
      for (var e, r, i, n, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
        (i = t.indexOf(")", e)),
          (n = "[" === t.charAt(e + 7)),
          (r = t.substr(e + 7, i - e - 7).match(n ? rt : Z)),
          (o +=
            t.substr(s, e - s) +
            ce(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
          (s = i + 1);
      return o + t.substr(s, t.length - s);
    },
    pe = function (t, e, r, i, n) {
      var s = e - t,
        o = i - r;
      return ee(n, function (e) {
        return r + (((e - t) / s) * o || 0);
      });
    },
    me = function (t, e, r) {
      var i,
        n,
        s,
        o = t.labels,
        a = I;
      for (i in o)
        (n = o[i] - e) < 0 == !!r &&
          n &&
          a > (n = Math.abs(n)) &&
          ((s = i), (a = n));
      return s;
    },
    _e = function (t, e, r) {
      var i,
        n,
        s = t.vars,
        o = s[e];
      if (o)
        return (
          (i = s[e + "Params"]),
          (n = s.callbackScope || t),
          r && ft.length && Dt(),
          i ? o.apply(n, i) : o.call(n)
        );
    },
    ge = function (t) {
      return (
        Ft(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        t.progress() < 1 && _e(t, "onInterrupt"),
        t
      );
    },
    ve = function (t) {
      var e = (t = (!t.name && t.default) || t).name,
        r = V(t),
        i =
          e && !r && t.init
            ? function () {
                this._props = [];
              }
            : t,
        n = {
          init: lt,
          render: ar,
          add: We,
          kill: hr,
          modifier: ur,
          rawVars: 0,
        },
        s = { targetTest: 0, get: 0, getSetter: ir, aliases: {}, register: 0 };
      if ((Ee(), t !== i)) {
        if (pt[e]) return;
        At(i, At(Pt(t, n), s)),
          Lt(i.prototype, Lt(n, Pt(t, s))),
          (pt[(i.prop = e)] = i),
          t.targetTest && (gt.push(i), (ct[e] = 1)),
          (e =
            ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
            "Plugin");
      }
      ht(e, i), t.register && t.register(_r, i, fr);
    },
    ye = 255,
    we = {
      aqua: [0, ye, ye],
      lime: [0, ye, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, ye],
      navy: [0, 0, 128],
      white: [ye, ye, ye],
      olive: [128, 128, 0],
      yellow: [ye, ye, 0],
      orange: [ye, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [ye, 0, 0],
      pink: [ye, 192, 203],
      cyan: [0, ye, ye],
      transparent: [ye, ye, ye, 0],
    },
    xe = function (t, e, r) {
      return (
        ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
          ? e + (r - e) * t * 6
          : t < 0.5
          ? r
          : 3 * t < 2
          ? e + (r - e) * (2 / 3 - t) * 6
          : e) *
          ye +
          0.5) |
        0
      );
    },
    be = function (t, e, r) {
      var i,
        n,
        s,
        o,
        a,
        u,
        h,
        l,
        c,
        f,
        d = t ? (X(t) ? [t >> 16, (t >> 8) & ye, t & ye] : 0) : we.black;
      if (!d) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), we[t]))
          d = we[t];
        else if ("#" === t.charAt(0)) {
          if (
            (t.length < 6 &&
              ((i = t.charAt(1)),
              (n = t.charAt(2)),
              (s = t.charAt(3)),
              (t =
                "#" +
                i +
                i +
                n +
                n +
                s +
                s +
                (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
            9 === t.length)
          )
            return [
              (d = parseInt(t.substr(1, 6), 16)) >> 16,
              (d >> 8) & ye,
              d & ye,
              parseInt(t.substr(7), 16) / 255,
            ];
          d = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & ye, t & ye];
        } else if ("hsl" === t.substr(0, 3))
          if (((d = f = t.match(Z)), e)) {
            if (~t.indexOf("="))
              return (d = t.match(J)), r && d.length < 4 && (d[3] = 1), d;
          } else
            (o = (+d[0] % 360) / 360),
              (a = +d[1] / 100),
              (i =
                2 * (u = +d[2] / 100) -
                (n = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
              d.length > 3 && (d[3] *= 1),
              (d[0] = xe(o + 1 / 3, i, n)),
              (d[1] = xe(o, i, n)),
              (d[2] = xe(o - 1 / 3, i, n));
        else d = t.match(Z) || we.transparent;
        d = d.map(Number);
      }
      return (
        e &&
          !f &&
          ((i = d[0] / ye),
          (n = d[1] / ye),
          (s = d[2] / ye),
          (u = ((h = Math.max(i, n, s)) + (l = Math.min(i, n, s))) / 2),
          h === l
            ? (o = a = 0)
            : ((c = h - l),
              (a = u > 0.5 ? c / (2 - h - l) : c / (h + l)),
              (o =
                h === i
                  ? (n - s) / c + (n < s ? 6 : 0)
                  : h === n
                  ? (s - i) / c + 2
                  : (i - n) / c + 4),
              (o *= 60)),
          (d[0] = ~~(o + 0.5)),
          (d[1] = ~~(100 * a + 0.5)),
          (d[2] = ~~(100 * u + 0.5))),
        r && d.length < 4 && (d[3] = 1),
        d
      );
    },
    Oe = function (t) {
      var e = [],
        r = [],
        i = -1;
      return (
        t.split(Me).forEach(function (t) {
          var n = t.match(K) || [];
          e.push.apply(e, n), r.push((i += n.length + 1));
        }),
        (e.c = r),
        e
      );
    },
    Te = function (t, e, r) {
      var i,
        n,
        s,
        o,
        a = "",
        u = (t + a).match(Me),
        h = e ? "hsla(" : "rgba(",
        l = 0;
      if (!u) return t;
      if (
        ((u = u.map(function (t) {
          return (
            (t = be(t, e, 1)) &&
            h +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
          );
        })),
        r && ((s = Oe(t)), (i = r.c).join(a) !== s.c.join(a)))
      )
        for (o = (n = t.replace(Me, "1").split(K)).length - 1; l < o; l++)
          a +=
            n[l] +
            (~i.indexOf(l)
              ? u.shift() || h + "0,0,0,0)"
              : (s.length ? s : u.length ? u : r).shift());
      if (!n)
        for (o = (n = t.split(Me)).length - 1; l < o; l++) a += n[l] + u[l];
      return a + n[o];
    },
    Me = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in we) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    De = /hsl[a]?\(/,
    Se = function (t) {
      var e,
        r = t.join(" ");
      if (((Me.lastIndex = 0), Me.test(r)))
        return (
          (e = De.test(r)),
          (t[1] = Te(t[1], e)),
          (t[0] = Te(t[0], e, Oe(t[1]))),
          !0
        );
    },
    ke =
      ((v = Date.now),
      (y = 500),
      (w = 33),
      (x = v()),
      (b = x),
      (T = O = 1e3 / 240),
      (D = function t(e) {
        var r,
          i,
          n,
          s,
          o = v() - b,
          a = !0 === e;
        if (
          (o > y && (x += o - w),
          ((r = (n = (b += o) - x) - T) > 0 || a) &&
            ((s = ++m.frame),
            (_ = n - 1e3 * m.time),
            (m.time = n /= 1e3),
            (T += r + (r >= O ? 4 : O - r)),
            (i = 1)),
          a || (f = d(t)),
          i)
        )
          for (g = 0; g < M.length; g++) M[g](n, _, s, e);
      }),
      (m = {
        time: 0,
        frame: 0,
        tick: function () {
          D(!0);
        },
        deltaRatio: function (t) {
          return _ / (1e3 / (t || 60));
        },
        wake: function () {
          u &&
            (!o &&
              H() &&
              ((s = o = window),
              (a = s.document || {}),
              (nt.gsap = _r),
              (s.gsapVersions || (s.gsapVersions = [])).push(_r.version),
              ot(st || s.GreenSockGlobals || (!s.gsap && s) || {}),
              (p = s.requestAnimationFrame)),
            f && m.sleep(),
            (d =
              p ||
              function (t) {
                return setTimeout(t, (T - 1e3 * m.time + 1) | 0);
              }),
            (c = 1),
            D(2));
        },
        sleep: function () {
          (p ? s.cancelAnimationFrame : clearTimeout)(f), (c = 0), (d = lt);
        },
        lagSmoothing: function (t, e) {
          (y = t || 1e8), (w = Math.min(e, y, 0));
        },
        fps: function (t) {
          (O = 1e3 / (t || 240)), (T = 1e3 * m.time + O);
        },
        add: function (t) {
          M.indexOf(t) < 0 && M.push(t), Ee();
        },
        remove: function (t) {
          var e;
          ~(e = M.indexOf(t)) && M.splice(e, 1) && g >= e && g--;
        },
        _listeners: (M = []),
      })),
    Ee = function () {
      return !c && ke.wake();
    },
    Ae = {},
    Ce = /^[\d.\-M][\d.\-,\s]/,
    Le = /["']/g,
    Ie = function (t) {
      for (
        var e,
          r,
          i,
          n = {},
          s = t.substr(1, t.length - 3).split(":"),
          o = s[0],
          a = 1,
          u = s.length;
        a < u;
        a++
      )
        (r = s[a]),
          (e = a !== u - 1 ? r.lastIndexOf(",") : r.length),
          (i = r.substr(0, e)),
          (n[o] = isNaN(i) ? i.replace(Le, "").trim() : +i),
          (o = r.substr(e + 1).trim());
      return n;
    },
    Pe = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    Re = function t(e, r) {
      for (var i, n = e._first; n; )
        n instanceof Xe
          ? t(n, r)
          : !n.vars.yoyoEase ||
            (n._yoyo && n._repeat) ||
            n._yoyo === r ||
            (n.timeline
              ? t(n.timeline, r)
              : ((i = n._ease),
                (n._ease = n._yEase),
                (n._yEase = i),
                (n._yoyo = r))),
          (n = n._next);
    },
    ze = function (t, e) {
      return (
        (t &&
          (V(t)
            ? t
            : Ae[t] ||
              (function (t) {
                var e,
                  r,
                  i,
                  n,
                  s = (t + "").split("("),
                  o = Ae[s[0]];
                return o && s.length > 1 && o.config
                  ? o.config.apply(
                      null,
                      ~t.indexOf("{")
                        ? [Ie(s[1])]
                        : ((e = t),
                          (r = e.indexOf("(") + 1),
                          (i = e.indexOf(")")),
                          (n = e.indexOf("(", r)),
                          e.substring(
                            r,
                            ~n && n < i ? e.indexOf(")", i + 1) : i
                          ))
                            .split(",")
                            .map(kt)
                    )
                  : Ae._CE && Ce.test(t)
                  ? Ae._CE("", t)
                  : o;
              })(t))) ||
        e
      );
    },
    Fe = function (t, e, r, i) {
      void 0 === r &&
        (r = function (t) {
          return 1 - e(1 - t);
        }),
        void 0 === i &&
          (i = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
      var n,
        s = { easeIn: e, easeOut: r, easeInOut: i };
      return (
        bt(t, function (t) {
          for (var e in ((Ae[t] = nt[t] = s),
          (Ae[(n = t.toLowerCase())] = r),
          s))
            Ae[
              n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
            ] = Ae[t + "." + e] = s[e];
        }),
        s
      );
    },
    qe = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    },
    Be = function t(e, r, i) {
      var n = r >= 1 ? r : 1,
        s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
        o = (s / R) * (Math.asin(1 / n) || 0),
        a = function (t) {
          return 1 === t ? 1 : n * Math.pow(2, -10 * t) * j((t - o) * s) + 1;
        },
        u =
          "out" === e
            ? a
            : "in" === e
            ? function (t) {
                return 1 - a(1 - t);
              }
            : qe(a);
      return (
        (s = R / s),
        (u.config = function (r, i) {
          return t(e, r, i);
        }),
        u
      );
    },
    je = function t(e, r) {
      void 0 === r && (r = 1.70158);
      var i = function (t) {
          return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
        },
        n =
          "out" === e
            ? i
            : "in" === e
            ? function (t) {
                return 1 - i(1 - t);
              }
            : qe(i);
      return (
        (n.config = function (r) {
          return t(e, r);
        }),
        n
      );
    };
  bt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Fe(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Ae.Linear.easeNone = Ae.none = Ae.Linear.easeIn),
    Fe("Elastic", Be("in"), Be("out"), Be()),
    (S = 7.5625),
    (E = 1 / (k = 2.75)),
    Fe(
      "Bounce",
      function (t) {
        return 1 - A(1 - t);
      },
      (A = function (t) {
        return t < E
          ? S * t * t
          : t < 0.7272727272727273
          ? S * Math.pow(t - 1.5 / k, 2) + 0.75
          : t < 0.9090909090909092
          ? S * (t -= 2.25 / k) * t + 0.9375
          : S * Math.pow(t - 2.625 / k, 2) + 0.984375;
      })
    ),
    Fe("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Fe("Circ", function (t) {
      return -(q(1 - t * t) - 1);
    }),
    Fe("Sine", function (t) {
      return 1 === t ? 1 : 1 - B(t * z);
    }),
    Fe("Back", je("in"), je("out"), je()),
    (Ae.SteppedEase =
      Ae.steps =
      nt.SteppedEase =
        {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((i * re(0, 0.99999999, t)) | 0) + n) * r;
            };
          },
        }),
    (L.ease = Ae["quad.out"]),
    bt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (vt += t + "," + t + "Params,");
      }
    );
  var Ne = function (t, e) {
      (this.id = F++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : xt),
        (this.set = e ? e.getSetter : ir);
    },
    Ve = (function () {
      function t(t, e) {
        var r = t.parent || n;
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Zt(this, +t.duration, 1, 1),
          (this.data = t.data),
          c || ke.wake(),
          r && Ht(r, this, e || 0 === e ? e : r._time, 1),
          t.reversed && this.reverse(),
          t.paused && this.paused(!0);
      }
      var e = t.prototype;
      return (
        (e.delay = function (t) {
          return t || 0 === t
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (e.duration = function (t) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (t) {
          return arguments.length
            ? ((this._dirty = 0),
              Zt(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (t, e) {
          if ((Ee(), !arguments.length)) return this._tTime;
          var r = this._dp;
          if (r && r.smoothChildTiming && this._ts) {
            for (Ut(this, t), !r._dp || r.parent || Wt(r, this); r.parent; )
              r.parent._time !==
                r._start +
                  (r._ts >= 0
                    ? r._tTime / r._ts
                    : (r.totalDuration() - r._tTime) / -r._ts) &&
                r.totalTime(r._tTime, !0),
                (r = r.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && t < this._tDur) ||
                (this._ts < 0 && t > 0) ||
                (!this._tDur && !t)) &&
              Ht(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== t ||
              (!this._dur && !e) ||
              (this._initted && Math.abs(this._zTime) === P) ||
              (!t && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = t), St(this, t, e)),
            this
          );
        }),
        (e.time = function (t, e) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), t + Nt(this)) % this._dur ||
                  (t ? this._dur : 0),
                e
              )
            : this._time;
        }),
        (e.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (e.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                  Nt(this),
                e
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (e.iteration = function (t, e) {
          var r = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (t - 1) * r, e)
            : this._repeat
            ? Vt(this._tTime, r) + 1
            : 1;
        }),
        (e.timeScale = function (t) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === t) return this;
          var e =
            this.parent && this._ts ? Xt(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +t || 0),
            (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
            Bt(this.totalTime(re(-this._delay, this._tDur, e), !0))
          );
        }),
        (e.paused = function (t) {
          return arguments.length
            ? (this._ps !== t &&
                ((this._ps = t),
                t
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Ee(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        (this._tTime -= P) &&
                        Math.abs(this._zTime) !== P
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return (
              e && (e._sort || !this.parent) && Ht(e, this, t - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (t) {
          return (
            this._start +
            (W(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
          );
        }),
        (e.rawTime = function (t) {
          var e = this.parent || this._dp;
          return e
            ? t &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? Xt(e.rawTime(t), this)
              : this._tTime
            : this._tTime;
        }),
        (e.globalTime = function (t) {
          for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
            (r = e._start + r / (e._ts || 1)), (e = e._dp);
          return r;
        }),
        (e.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t === 1 / 0 ? -2 : t), Jt(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (t) {
          return arguments.length
            ? ((this._rDelay = t), Jt(this))
            : this._rDelay;
        }),
        (e.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        (e.seek = function (t, e) {
          return this.totalTime(te(this, t), W(e));
        }),
        (e.restart = function (t, e) {
          return this.play().totalTime(t ? -this._delay : 0, W(e));
        }),
        (e.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (t) {
          return arguments.length
            ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (e.isActive = function () {
          var t,
            e = this.parent || this._dp,
            r = this._start;
          return !(
            e &&
            !(
              this._ts &&
              this._initted &&
              e.isActive() &&
              (t = e.rawTime(!0)) >= r &&
              t < this.endTime(!0) - P
            )
          );
        }),
        (e.eventCallback = function (t, e, r) {
          var i = this.vars;
          return arguments.length > 1
            ? (e
                ? ((i[t] = e),
                  r && (i[t + "Params"] = r),
                  "onUpdate" === t && (this._onUpdate = e))
                : delete i[t],
              this)
            : i[t];
        }),
        (e.then = function (t) {
          var e = this;
          return new Promise(function (r) {
            var i = V(t) ? t : Et,
              n = function () {
                var t = e.then;
                (e.then = null),
                  V(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                  r(i),
                  (e.then = t);
              };
            (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
            (!e._tTime && e._ts < 0)
              ? n()
              : (e._prom = n);
          });
        }),
        (e.kill = function () {
          ge(this);
        }),
        t
      );
    })();
  At(Ve.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Xe = (function (t) {
    function i(r, i) {
      var n;
      return (
        void 0 === r && (r = {}),
        ((n = t.call(this, r, i) || this).labels = {}),
        (n.smoothChildTiming = !!r.smoothChildTiming),
        (n.autoRemoveChildren = !!r.autoRemoveChildren),
        (n._sort = W(r.sortChildren)),
        n.parent && Wt(n.parent, e(n)),
        r.scrollTrigger && Qt(e(n), r.scrollTrigger),
        n
      );
    }
    r(i, t);
    var s = i.prototype;
    return (
      (s.to = function (t, e, r) {
        return (
          new Je(t, Mt(arguments, 0, this), te(this, X(e) ? arguments[3] : r)),
          this
        );
      }),
      (s.from = function (t, e, r) {
        return (
          new Je(t, Mt(arguments, 1, this), te(this, X(e) ? arguments[3] : r)),
          this
        );
      }),
      (s.fromTo = function (t, e, r, i) {
        return (
          new Je(t, Mt(arguments, 2, this), te(this, X(e) ? arguments[4] : i)),
          this
        );
      }),
      (s.set = function (t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          Rt(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new Je(t, e, te(this, r), 1),
          this
        );
      }),
      (s.call = function (t, e, r) {
        return Ht(this, Je.delayedCall(0, t, e), te(this, r));
      }),
      (s.staggerTo = function (t, e, r, i, n, s, o) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || i),
          (r.onComplete = s),
          (r.onCompleteParams = o),
          (r.parent = this),
          new Je(t, r, te(this, n)),
          this
        );
      }),
      (s.staggerFrom = function (t, e, r, i, n, s, o) {
        return (
          (r.runBackwards = 1),
          (Rt(r).immediateRender = W(r.immediateRender)),
          this.staggerTo(t, e, r, i, n, s, o)
        );
      }),
      (s.staggerFromTo = function (t, e, r, i, n, s, o, a) {
        return (
          (i.startAt = r),
          (Rt(i).immediateRender = W(i.immediateRender)),
          this.staggerTo(t, e, i, n, s, o, a)
        );
      }),
      (s.render = function (t, e, r) {
        var i,
          s,
          o,
          a,
          u,
          h,
          l,
          c,
          f,
          d,
          p,
          m,
          _ = this._time,
          g = this._dirty ? this.totalDuration() : this._tDur,
          v = this._dur,
          y = this !== n && t > g - P && t >= 0 ? g : t < P ? 0 : t,
          w = this._zTime < 0 != t < 0 && (this._initted || !v);
        if (y !== this._tTime || r || w) {
          if (
            (_ !== this._time &&
              v &&
              ((y += this._time - _), (t += this._time - _)),
            (i = y),
            (f = this._start),
            (h = !(c = this._ts)),
            w && (v || (_ = this._zTime), (t || !e) && (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((p = this._yoyo),
              (u = v + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * u + t, e, r);
            if (
              ((i = Ot(y % u)),
              y === g
                ? ((a = this._repeat), (i = v))
                : ((a = ~~(y / u)) && a === y / u && ((i = v), a--),
                  i > v && (i = v)),
              (d = Vt(this._tTime, u)),
              !_ && this._tTime && d !== a && (d = a),
              p && 1 & a && ((i = v - i), (m = 1)),
              a !== d && !this._lock)
            ) {
              var x = p && 1 & d,
                b = x === (p && 1 & a);
              if (
                (a < d && (x = !x),
                (_ = x ? 0 : v),
                (this._lock = 1),
                (this.render(_ || (m ? 0 : Ot(a * u)), e, !v)._lock = 0),
                !e && this.parent && _e(this, "onRepeat"),
                this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                (_ && _ !== this._time) ||
                  h !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((v = this._dur),
                (g = this._tDur),
                b &&
                  ((this._lock = 2), (_ = x ? v : -1e-4), this.render(_, !0)),
                (this._lock = 0),
                !this._ts && !h)
              )
                return this;
              Re(this, m);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (l = (function (t, e, r) {
                var i;
                if (r > e)
                  for (i = t._first; i && i._start <= r; ) {
                    if (!i._dur && "isPause" === i.data && i._start > e)
                      return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if (!i._dur && "isPause" === i.data && i._start < e)
                      return i;
                    i = i._prev;
                  }
              })(this, Ot(_), Ot(i))) &&
              (y -= i - (i = l._start)),
            (this._tTime = y),
            (this._time = i),
            (this._act = !c),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (_ = 0)),
            !_ && i && !e && _e(this, "onStart"),
            i >= _ && t >= 0)
          )
            for (s = this._first; s; ) {
              if (
                ((o = s._next), (s._act || i >= s._start) && s._ts && l !== s)
              ) {
                if (s.parent !== this) return this.render(t, e, r);
                if (
                  (s.render(
                    s._ts > 0
                      ? (i - s._start) * s._ts
                      : (s._dirty ? s.totalDuration() : s._tDur) +
                          (i - s._start) * s._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !h))
                ) {
                  (l = 0), o && (y += this._zTime = -1e-8);
                  break;
                }
              }
              s = o;
            }
          else {
            s = this._last;
            for (var O = t < 0 ? t : i; s; ) {
              if (
                ((o = s._prev), (s._act || O <= s._end) && s._ts && l !== s)
              ) {
                if (s.parent !== this) return this.render(t, e, r);
                if (
                  (s.render(
                    s._ts > 0
                      ? (O - s._start) * s._ts
                      : (s._dirty ? s.totalDuration() : s._tDur) +
                          (O - s._start) * s._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !h))
                ) {
                  (l = 0), o && (y += this._zTime = O ? -1e-8 : P);
                  break;
                }
              }
              s = o;
            }
          }
          if (
            l &&
            !e &&
            (this.pause(),
            (l.render(i >= _ ? 0 : -1e-8)._zTime = i >= _ ? 1 : -1),
            this._ts)
          )
            return (this._start = f), Yt(this), this.render(t, e, r);
          this._onUpdate && !e && _e(this, "onUpdate", !0),
            ((y === g && g >= this.totalDuration()) || (!y && _)) &&
              ((f !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                this._lock ||
                ((t || !v) &&
                  ((y === g && this._ts > 0) || (!y && this._ts < 0)) &&
                  Ft(this, 1),
                e ||
                  (t < 0 && !_) ||
                  (!y && !_) ||
                  (_e(this, y === g ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(y < g && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (s.add = function (t, e) {
        var r = this;
        if ((X(e) || (e = te(this, e)), !(t instanceof Ve))) {
          if ($(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e);
              }),
              this
            );
          if (N(t)) return this.addLabel(t, e);
          if (!V(t)) return this;
          t = Je.delayedCall(0, t);
        }
        return this !== t ? Ht(this, t, e) : this;
      }),
      (s.getChildren = function (t, e, r, i) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === i && (i = -1e8);
        for (var n = [], s = this._first; s; )
          s._start >= i &&
            (s instanceof Je
              ? e && n.push(s)
              : (r && n.push(s),
                t && n.push.apply(n, s.getChildren(!0, e, r)))),
            (s = s._next);
        return n;
      }),
      (s.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (s.remove = function (t) {
        return N(t)
          ? this.removeLabel(t)
          : V(t)
          ? this.killTweensOf(t)
          : (zt(this, t),
            t === this._recent && (this._recent = this._last),
            qt(this));
      }),
      (s.totalTime = function (e, r) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Ot(
                ke.time -
                  (this._ts > 0
                    ? e / this._ts
                    : (this.totalDuration() - e) / -this._ts)
              )),
            t.prototype.totalTime.call(this, e, r),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (s.addLabel = function (t, e) {
        return (this.labels[t] = te(this, e)), this;
      }),
      (s.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (s.addPause = function (t, e, r) {
        var i = Je.delayedCall(0, e || lt, r);
        return (
          (i.data = "isPause"), (this._hasPause = 1), Ht(this, i, te(this, t))
        );
      }),
      (s.removePause = function (t) {
        var e = this._first;
        for (t = te(this, t); e; )
          e._start === t && "isPause" === e.data && Ft(e), (e = e._next);
      }),
      (s.killTweensOf = function (t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; )
          Ye !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (s.getTweensOf = function (t, e) {
        for (var r, i = [], n = oe(t), s = this._first, o = X(e); s; )
          s instanceof Je
            ? Tt(s._targets, n) &&
              (o
                ? (!Ye || (s._initted && s._ts)) &&
                  s.globalTime(0) <= e &&
                  s.globalTime(s.totalDuration()) > e
                : !e || s.isActive()) &&
              i.push(s)
            : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
            (s = s._next);
        return i;
      }),
      (s.tweenTo = function (t, e) {
        e = e || {};
        var r = this,
          i = te(r, t),
          n = e,
          s = n.startAt,
          o = n.onStart,
          a = n.onStartParams,
          u = n.immediateRender,
          h = Je.to(
            r,
            At(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: i,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (i - (s && "time" in s ? s.time : r._time)) / r.timeScale()
                  ) ||
                  P,
                onStart: function () {
                  r.pause();
                  var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                  h._dur !== t && Zt(h, t, 0, 1).render(h._time, !0, !0),
                    o && o.apply(h, a || []);
                },
              },
              e
            )
          );
        return u ? h.render(0) : h;
      }),
      (s.tweenFromTo = function (t, e, r) {
        return this.tweenTo(e, At({ startAt: { time: te(this, t) } }, r));
      }),
      (s.recent = function () {
        return this._recent;
      }),
      (s.nextLabel = function (t) {
        return void 0 === t && (t = this._time), me(this, te(this, t));
      }),
      (s.previousLabel = function (t) {
        return void 0 === t && (t = this._time), me(this, te(this, t), 1);
      }),
      (s.currentLabel = function (t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + P);
      }),
      (s.shiftChildren = function (t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, s = this.labels; n; )
          n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (i in s) s[i] >= r && (s[i] += t);
        return qt(this);
      }),
      (s.invalidate = function () {
        var e = this._first;
        for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
        return t.prototype.invalidate.call(this);
      }),
      (s.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          qt(this)
        );
      }),
      (s.totalDuration = function (t) {
        var e,
          r,
          i,
          s = 0,
          o = this,
          a = o._last,
          u = I;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -t : t)
          );
        if (o._dirty) {
          for (i = o.parent; a; )
            (e = a._prev),
              a._dirty && a.totalDuration(),
              (r = a._start) > u && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (Ht(o, a, r - a._delay, 1)._lock = 0))
                : (u = r),
              r < 0 &&
                a._ts &&
                ((s -= r),
                ((!i && !o._dp) || (i && i.smoothChildTiming)) &&
                  ((o._start += r / o._ts), (o._time -= r), (o._tTime -= r)),
                o.shiftChildren(-r, !1, -Infinity),
                (u = 0)),
              a._end > s && a._ts && (s = a._end),
              (a = e);
          Zt(o, o === n && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (i.updateRoot = function (t) {
        if ((n._ts && (St(n, Xt(t, n)), (h = ke.frame)), ke.frame >= _t)) {
          _t += C.autoSleep || 120;
          var e = n._first;
          if ((!e || !e._ts) && C.autoSleep && ke._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || ke.sleep();
          }
        }
      }),
      i
    );
  })(Ve);
  At(Xe.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Ye,
    Ue = function (t, e, r, i, n, s, o) {
      var a,
        u,
        h,
        l,
        c,
        f,
        d,
        p,
        m = new fr(this._pt, t, e, 0, 1, or, null, n),
        _ = 0,
        g = 0;
      for (
        m.b = r,
          m.e = i,
          r += "",
          (d = ~(i += "").indexOf("random(")) && (i = de(i)),
          s && (s((p = [r, i]), t, e), (r = p[0]), (i = p[1])),
          u = r.match(tt) || [];
        (a = tt.exec(i));

      )
        (l = a[0]),
          (c = i.substring(_, a.index)),
          h ? (h = (h + 1) % 5) : "rgba(" === c.substr(-5) && (h = 1),
          l !== u[g++] &&
            ((f = parseFloat(u[g - 1]) || 0),
            (m._pt = {
              _next: m._pt,
              p: c || 1 === g ? c : ",",
              s: f,
              c:
                "=" === l.charAt(1)
                  ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1)
                  : parseFloat(l) - f,
              m: h && h < 4 ? Math.round : 0,
            }),
            (_ = tt.lastIndex));
      return (
        (m.c = _ < i.length ? i.substring(_, i.length) : ""),
        (m.fp = o),
        (et.test(i) || d) && (m.e = 0),
        (this._pt = m),
        m
      );
    },
    We = function (t, e, r, i, n, s, o, a, u) {
      V(i) && (i = i(n || 0, t, s));
      var h,
        l = t[e],
        c =
          "get" !== r
            ? r
            : V(l)
            ? u
              ? t[
                  e.indexOf("set") || !V(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](u)
              : t[e]()
            : l,
        f = V(l) ? (u ? er : tr) : Ke;
      if (
        (N(i) &&
          (~i.indexOf("random(") && (i = de(i)),
          "=" === i.charAt(1) &&
            (i =
              parseFloat(c) +
              parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
              (ie(c) || 0))),
        c !== i)
      )
        return isNaN(c * i)
          ? (!l && !(e in t) && at(e, i),
            Ue.call(this, t, e, c, i, f, a || C.stringFilter, u))
          : ((h = new fr(
              this._pt,
              t,
              e,
              +c || 0,
              i - (c || 0),
              "boolean" == typeof l ? sr : nr,
              0,
              f
            )),
            u && (h.fp = u),
            o && h.modifier(o, this, t),
            (this._pt = h));
    },
    He = function (t, e, r, i, n, s) {
      var o, a, u, h;
      if (
        pt[t] &&
        !1 !==
          (o = new pt[t]()).init(
            n,
            o.rawVars
              ? e[t]
              : (function (t, e, r, i, n) {
                  if (
                    (V(t) && (t = Ge(t, n, e, r, i)),
                    !U(t) || (t.style && t.nodeType) || $(t) || G(t))
                  )
                    return N(t) ? Ge(t, n, e, r, i) : t;
                  var s,
                    o = {};
                  for (s in t) o[s] = Ge(t[s], n, e, r, i);
                  return o;
                })(e[t], i, n, s, r),
            r,
            i,
            s
          ) &&
        ((r._pt = a = new fr(r._pt, n, t, 0, 1, o.render, o, 0, o.priority)),
        r !== l)
      )
        for (u = r._ptLookup[r._targets.indexOf(n)], h = o._props.length; h--; )
          u[o._props[h]] = a;
      return o;
    },
    Qe = function t(e, r) {
      var s,
        o,
        a,
        u,
        h,
        l,
        c,
        f,
        d,
        p,
        m,
        _,
        g,
        v = e.vars,
        y = v.ease,
        w = v.startAt,
        x = v.immediateRender,
        b = v.lazy,
        O = v.onUpdate,
        T = v.onUpdateParams,
        M = v.callbackScope,
        D = v.runBackwards,
        S = v.yoyoEase,
        k = v.keyframes,
        E = v.autoRevert,
        A = e._dur,
        C = e._startAt,
        I = e._targets,
        R = e.parent,
        z = R && "nested" === R.data ? R.parent._targets : I,
        F = "auto" === e._overwrite && !i,
        q = e.timeline;
      if (
        (q && (!k || !y) && (y = "none"),
        (e._ease = ze(y, L.ease)),
        (e._yEase = S ? Pe(ze(!0 === S ? y : S, L.ease)) : 0),
        S &&
          e._yoyo &&
          !e._repeat &&
          ((S = e._yEase), (e._yEase = e._ease), (e._ease = S)),
        !q)
      ) {
        if (
          ((_ = (f = I[0] ? wt(I[0]).harness : 0) && v[f.prop]),
          (s = Pt(v, ct)),
          C && C.render(-1, !0).kill(),
          w)
        )
          if (
            (Ft(
              (e._startAt = Je.set(
                I,
                At(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: R,
                    immediateRender: !0,
                    lazy: W(b),
                    startAt: null,
                    delay: 0,
                    onUpdate: O,
                    onUpdateParams: T,
                    callbackScope: M,
                    stagger: 0,
                  },
                  w
                )
              ))
            ),
            x)
          ) {
            if (r > 0) E || (e._startAt = 0);
            else if (A && !(r < 0 && C)) return void (r && (e._zTime = r));
          } else !1 === E && (e._startAt = 0);
        else if (D && A)
          if (C) !E && (e._startAt = 0);
          else if (
            (r && (x = !1),
            (a = At(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: x && W(b),
                immediateRender: x,
                stagger: 0,
                parent: R,
              },
              s
            )),
            _ && (a[f.prop] = _),
            Ft((e._startAt = Je.set(I, a))),
            x)
          ) {
            if (!r) return;
          } else t(e._startAt, P);
        for (
          e._pt = 0, b = (A && W(b)) || (b && !A), o = 0;
          o < I.length;
          o++
        ) {
          if (
            ((c = (h = I[o])._gsap || yt(I)[o]._gsap),
            (e._ptLookup[o] = p = {}),
            dt[c.id] && ft.length && Dt(),
            (m = z === I ? o : z.indexOf(h)),
            f &&
              !1 !== (d = new f()).init(h, _ || s, e, m, z) &&
              ((e._pt = u =
                new fr(e._pt, h, d.name, 0, 1, d.render, d, 0, d.priority)),
              d._props.forEach(function (t) {
                p[t] = u;
              }),
              d.priority && (l = 1)),
            !f || _)
          )
            for (a in s)
              pt[a] && (d = He(a, s, e, m, h, z))
                ? d.priority && (l = 1)
                : (p[a] = u =
                    We.call(e, h, a, "get", s[a], m, z, 0, v.stringFilter));
          e._op && e._op[o] && e.kill(h, e._op[o]),
            F &&
              e._pt &&
              ((Ye = e),
              n.killTweensOf(h, p, e.globalTime(0)),
              (g = !e.parent),
              (Ye = 0)),
            e._pt && b && (dt[c.id] = 1);
        }
        l && cr(e), e._onInit && e._onInit(e);
      }
      (e._from = !q && !!v.runBackwards),
        (e._onUpdate = O),
        (e._initted = (!e._op || e._pt) && !g);
    },
    Ge = function (t, e, r, i, n) {
      return V(t)
        ? t.call(e, r, i, n)
        : N(t) && ~t.indexOf("random(")
        ? de(t)
        : t;
    },
    $e = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    Ze = ($e + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
    Je = (function (t) {
      function s(r, s, o, a) {
        var u;
        "number" == typeof s && ((o.duration = s), (s = o), (o = null));
        var h,
          l,
          c,
          f,
          d,
          p,
          m,
          _,
          g = (u = t.call(this, a ? s : Rt(s), o) || this).vars,
          v = g.duration,
          y = g.delay,
          w = g.immediateRender,
          x = g.stagger,
          b = g.overwrite,
          O = g.keyframes,
          T = g.defaults,
          M = g.scrollTrigger,
          D = g.yoyoEase,
          S = u.parent,
          k = ($(r) || G(r) ? X(r[0]) : "length" in s) ? [r] : oe(r);
        if (
          ((u._targets = k.length
            ? yt(k)
            : ut(
                "GSAP target " + r + " not found. https://greensock.com",
                !C.nullTargetWarn
              ) || []),
          (u._ptLookup = []),
          (u._overwrite = b),
          O || x || Q(v) || Q(y))
        ) {
          if (
            ((s = u.vars),
            (h = u.timeline =
              new Xe({ data: "nested", defaults: T || {} })).kill(),
            (h.parent = h._dp = e(u)),
            (h._start = 0),
            O)
          )
            At(h.vars.defaults, { ease: "none" }),
              O.forEach(function (t) {
                return h.to(k, t, ">");
              });
          else {
            if (((f = k.length), (m = x ? ue(x) : lt), U(x)))
              for (d in x) ~$e.indexOf(d) && (_ || (_ = {}), (_[d] = x[d]));
            for (l = 0; l < f; l++) {
              for (d in ((c = {}), s)) Ze.indexOf(d) < 0 && (c[d] = s[d]);
              (c.stagger = 0),
                D && (c.yoyoEase = D),
                _ && Lt(c, _),
                (p = k[l]),
                (c.duration = +Ge(v, e(u), l, p, k)),
                (c.delay = (+Ge(y, e(u), l, p, k) || 0) - u._delay),
                !x &&
                  1 === f &&
                  c.delay &&
                  ((u._delay = y = c.delay), (u._start += y), (c.delay = 0)),
                h.to(p, c, m(l, p, k));
            }
            h.duration() ? (v = y = 0) : (u.timeline = 0);
          }
          v || u.duration((v = h.duration()));
        } else u.timeline = 0;
        return (
          !0 !== b || i || ((Ye = e(u)), n.killTweensOf(k), (Ye = 0)),
          S && Wt(S, e(u)),
          (w ||
            (!v &&
              !O &&
              u._start === Ot(S._time) &&
              W(w) &&
              jt(e(u)) &&
              "nested" !== S.data)) &&
            ((u._tTime = -1e-8), u.render(Math.max(0, -y))),
          M && Qt(e(u), M),
          u
        );
      }
      r(s, t);
      var o = s.prototype;
      return (
        (o.render = function (t, e, r) {
          var i,
            n,
            s,
            o,
            a,
            u,
            h,
            l,
            c,
            f = this._time,
            d = this._tDur,
            p = this._dur,
            m = t > d - P && t >= 0 ? d : t < P ? 0 : t;
          if (p) {
            if (
              m !== this._tTime ||
              !t ||
              r ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 != t < 0)
            ) {
              if (((i = m), (l = this.timeline), this._repeat)) {
                if (((o = p + this._rDelay), this._repeat < -1 && t < 0))
                  return this.totalTime(100 * o + t, e, r);
                if (
                  ((i = Ot(m % o)),
                  m === d
                    ? ((s = this._repeat), (i = p))
                    : ((s = ~~(m / o)) && s === m / o && ((i = p), s--),
                      i > p && (i = p)),
                  (u = this._yoyo && 1 & s) && ((c = this._yEase), (i = p - i)),
                  (a = Vt(this._tTime, o)),
                  i === f && !r && this._initted)
                )
                  return this;
                s !== a &&
                  (l && this._yEase && Re(l, u),
                  !this.vars.repeatRefresh ||
                    u ||
                    this._lock ||
                    ((this._lock = r = 1),
                    (this.render(Ot(o * s), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (Gt(this, t < 0 ? t : i, r, e))
                  return (this._tTime = 0), this;
                if (p !== this._dur) return this.render(t, e, r);
              }
              for (
                this._tTime = m,
                  this._time = i,
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  this.ratio = h = (c || this._ease)(i / p),
                  this._from && (this.ratio = h = 1 - h),
                  i && !f && !e && _e(this, "onStart"),
                  n = this._pt;
                n;

              )
                n.r(h, n.d), (n = n._next);
              (l && l.render(t < 0 ? t : !i && u ? -1e-8 : l._dur * h, e, r)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                  _e(this, "onUpdate")),
                this._repeat &&
                  s !== a &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  _e(this, "onRepeat"),
                (m !== this._tDur && m) ||
                  this._tTime !== m ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(t, !0, !0),
                  (t || !p) &&
                    ((m === this._tDur && this._ts > 0) ||
                      (!m && this._ts < 0)) &&
                    Ft(this, 1),
                  e ||
                    (t < 0 && !f) ||
                    (!m && !f) ||
                    (_e(this, m === d ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(m < d && this.timeScale() > 0) &&
                      this._prom()));
            }
          } else
            !(function (t, e, r, i) {
              var n,
                s,
                o,
                a = t.ratio,
                u =
                  e < 0 ||
                  (!e &&
                    ((!t._start && $t(t)) ||
                      ((t._ts < 0 || t._dp._ts < 0) &&
                        "isFromStart" !== t.data &&
                        "isStart" !== t.data)))
                    ? 0
                    : 1,
                h = t._rDelay,
                l = 0;
              if (
                (h &&
                  t._repeat &&
                  ((l = re(0, t._tDur, e)),
                  (s = Vt(l, h)),
                  (o = Vt(t._tTime, h)),
                  t._yoyo && 1 & s && (u = 1 - u),
                  s !== o &&
                    ((a = 1 - u),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                u !== a || i || t._zTime === P || (!e && t._zTime))
              ) {
                if (!t._initted && Gt(t, e, i, r)) return;
                for (
                  o = t._zTime,
                    t._zTime = e || (r ? P : 0),
                    r || (r = e && !o),
                    t.ratio = u,
                    t._from && (u = 1 - u),
                    t._time = 0,
                    t._tTime = l,
                    n = t._pt;
                  n;

                )
                  n.r(u, n.d), (n = n._next);
                t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                  t._onUpdate && !r && _e(t, "onUpdate"),
                  l && t._repeat && !r && t.parent && _e(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === u &&
                    (u && Ft(t, 1),
                    r ||
                      (_e(t, u ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, r);
          return this;
        }),
        (o.targets = function () {
          return this._targets;
        }),
        (o.invalidate = function () {
          return (
            (this._pt =
              this._op =
              this._startAt =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            t.prototype.invalidate.call(this)
          );
        }),
        (o.kill = function (t, e) {
          if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
            return (this._lazy = this._pt = 0), this.parent ? ge(this) : this;
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, Ye && !0 !== Ye.vars.overwrite)
                ._first || ge(this),
              this.parent &&
                r !== this.timeline.totalDuration() &&
                Zt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
              this
            );
          }
          var i,
            n,
            s,
            o,
            a,
            u,
            h,
            l = this._targets,
            c = t ? oe(t) : l,
            f = this._ptLookup,
            d = this._pt;
          if (
            (!e || "all" === e) &&
            (function (t, e) {
              for (
                var r = t.length, i = r === e.length;
                i && r-- && t[r] === e[r];

              );
              return r < 0;
            })(l, c)
          )
            return "all" === e && (this._pt = 0), ge(this);
          for (
            i = this._op = this._op || [],
              "all" !== e &&
                (N(e) &&
                  ((a = {}),
                  bt(e, function (t) {
                    return (a[t] = 1);
                  }),
                  (e = a)),
                (e = (function (t, e) {
                  var r,
                    i,
                    n,
                    s,
                    o = t[0] ? wt(t[0]).harness : 0,
                    a = o && o.aliases;
                  if (!a) return e;
                  for (i in ((r = Lt({}, e)), a))
                    if ((i in r))
                      for (n = (s = a[i].split(",")).length; n--; )
                        r[s[n]] = r[i];
                  return r;
                })(l, e))),
              h = l.length;
            h--;

          )
            if (~c.indexOf(l[h]))
              for (a in ((n = f[h]),
              "all" === e
                ? ((i[h] = e), (o = n), (s = {}))
                : ((s = i[h] = i[h] || {}), (o = e)),
              o))
                (u = n && n[a]) &&
                  (("kill" in u.d && !0 !== u.d.kill(a)) || zt(this, u, "_pt"),
                  delete n[a]),
                  "all" !== s && (s[a] = 1);
          return this._initted && !this._pt && d && ge(this), this;
        }),
        (s.to = function (t, e) {
          return new s(t, e, arguments[2]);
        }),
        (s.from = function (t, e) {
          return new s(t, Mt(arguments, 1));
        }),
        (s.delayedCall = function (t, e, r, i) {
          return new s(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i,
          });
        }),
        (s.fromTo = function (t, e, r) {
          return new s(t, Mt(arguments, 2));
        }),
        (s.set = function (t, e) {
          return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new s(t, e);
        }),
        (s.killTweensOf = function (t, e, r) {
          return n.killTweensOf(t, e, r);
        }),
        s
      );
    })(Ve);
  At(Je.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    bt("staggerTo,staggerFrom,staggerFromTo", function (t) {
      Je[t] = function () {
        var e = new Xe(),
          r = ne.call(arguments, 0);
        return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r);
      };
    });
  var Ke = function (t, e, r) {
      return (t[e] = r);
    },
    tr = function (t, e, r) {
      return t[e](r);
    },
    er = function (t, e, r, i) {
      return t[e](i.fp, r);
    },
    rr = function (t, e, r) {
      return t.setAttribute(e, r);
    },
    ir = function (t, e) {
      return V(t[e]) ? tr : Y(t[e]) && t.setAttribute ? rr : Ke;
    },
    nr = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    },
    sr = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    or = function (t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            i),
            (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    ar = function (t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    ur = function (t, e, r, i) {
      for (var n, s = this._pt; s; )
        (n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
    },
    hr = function (t) {
      for (var e, r, i = this._pt; i; )
        (r = i._next),
          (i.p === t && !i.op) || i.op === t
            ? zt(this, i, "_pt")
            : i.dep || (e = 1),
          (i = r);
      return !e;
    },
    lr = function (t, e, r, i) {
      i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
    },
    cr = function (t) {
      for (var e, r, i, n, s = t._pt; s; ) {
        for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
        (s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
          (s._next = r) ? (r._prev = s) : (n = s),
          (s = e);
      }
      t._pt = i;
    },
    fr = (function () {
      function t(t, e, r, i, n, s, o, a, u) {
        (this.t = e),
          (this.s = i),
          (this.c = n),
          (this.p = r),
          (this.r = s || nr),
          (this.d = o || this),
          (this.set = a || Ke),
          (this.pr = u || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      return (
        (t.prototype.modifier = function (t, e, r) {
          (this.mSet = this.mSet || this.set),
            (this.set = lr),
            (this.m = t),
            (this.mt = r),
            (this.tween = e);
        }),
        t
      );
    })();
  bt(
    vt +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (ct[t] = 1);
    }
  ),
    (nt.TweenMax = nt.TweenLite = Je),
    (nt.TimelineLite = nt.TimelineMax = Xe),
    (n = new Xe({
      sortChildren: !1,
      defaults: L,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (C.stringFilter = Se);
  var dr = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (t) {
        return ve(t);
      });
    },
    timeline: function (t) {
      return new Xe(t);
    },
    getTweensOf: function (t, e) {
      return n.getTweensOf(t, e);
    },
    getProperty: function (t, e, r, i) {
      N(t) && (t = oe(t)[0]);
      var n = wt(t || {}).get,
        s = r ? Et : kt;
      return (
        "native" === r && (r = ""),
        t
          ? e
            ? s(((pt[e] && pt[e].get) || n)(t, e, r, i))
            : function (e, r, i) {
                return s(((pt[e] && pt[e].get) || n)(t, e, r, i));
              }
          : t
      );
    },
    quickSetter: function (t, e, r) {
      if ((t = oe(t)).length > 1) {
        var i = t.map(function (t) {
            return _r.quickSetter(t, e, r);
          }),
          n = i.length;
        return function (t) {
          for (var e = n; e--; ) i[e](t);
        };
      }
      t = t[0] || {};
      var s = pt[e],
        o = wt(t),
        a = (o.harness && (o.harness.aliases || {})[e]) || e,
        u = s
          ? function (e) {
              var i = new s();
              (l._pt = 0),
                i.init(t, r ? e + r : e, l, 0, [t]),
                i.render(1, i),
                l._pt && ar(1, l);
            }
          : o.set(t, a);
      return s
        ? u
        : function (e) {
            return u(t, a, r ? e + r : e, o, 1);
          };
    },
    isTweening: function (t) {
      return n.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = ze(t.ease, L.ease)), It(L, t || {});
    },
    config: function (t) {
      return It(C, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        r = t.effect,
        i = t.plugins,
        n = t.defaults,
        s = t.extendTimeline;
      (i || "").split(",").forEach(function (t) {
        return (
          t && !pt[t] && !nt[t] && ut(e + " effect requires " + t + " plugin.")
        );
      }),
        (mt[e] = function (t, e, i) {
          return r(oe(t), At(e || {}, n), i);
        }),
        s &&
          (Xe.prototype[e] = function (t, r, i) {
            return this.add(mt[e](t, U(r) ? r : (i = r) && {}, this), i);
          });
    },
    registerEase: function (t, e) {
      Ae[t] = ze(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? ze(t, e) : Ae;
    },
    getById: function (t) {
      return n.getById(t);
    },
    exportRoot: function (t, e) {
      void 0 === t && (t = {});
      var r,
        i,
        s = new Xe(t);
      for (
        s.smoothChildTiming = W(t.smoothChildTiming),
          n.remove(s),
          s._dp = 0,
          s._time = s._tTime = n._time,
          r = n._first;
        r;

      )
        (i = r._next),
          (!e &&
            !r._dur &&
            r instanceof Je &&
            r.vars.onComplete === r._targets[0]) ||
            Ht(s, r, r._start - r._delay),
          (r = i);
      return Ht(n, s, 0), s;
    },
    utils: {
      wrap: function t(e, r, i) {
        var n = r - e;
        return $(e)
          ? fe(e, t(0, e.length), r)
          : ee(i, function (t) {
              return ((n + ((t - e) % n)) % n) + e;
            });
      },
      wrapYoyo: function t(e, r, i) {
        var n = r - e,
          s = 2 * n;
        return $(e)
          ? fe(e, t(0, e.length - 1), r)
          : ee(i, function (t) {
              return e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t);
            });
      },
      distribute: ue,
      random: ce,
      snap: le,
      normalize: function (t, e, r) {
        return pe(t, e, 0, 1, r);
      },
      getUnit: ie,
      clamp: function (t, e, r) {
        return ee(r, function (r) {
          return re(t, e, r);
        });
      },
      splitColor: be,
      toArray: oe,
      mapRange: pe,
      pipe: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function (t, e) {
        return function (r) {
          return t(parseFloat(r)) + (e || ie(r));
        };
      },
      interpolate: function t(e, r, i, n) {
        var s = isNaN(e + r)
          ? 0
          : function (t) {
              return (1 - t) * e + t * r;
            };
        if (!s) {
          var o,
            a,
            u,
            h,
            l,
            c = N(e),
            f = {};
          if ((!0 === i && (n = 1) && (i = null), c))
            (e = { p: e }), (r = { p: r });
          else if ($(e) && !$(r)) {
            for (u = [], h = e.length, l = h - 2, a = 1; a < h; a++)
              u.push(t(e[a - 1], e[a]));
            h--,
              (s = function (t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (i = r);
          } else n || (e = Lt($(e) ? [] : {}, e));
          if (!u) {
            for (o in r) We.call(f, e, o, "get", r[o]);
            s = function (t) {
              return ar(t, f) || (c ? e.p : e);
            };
          }
        }
        return ee(i, s);
      },
      shuffle: ae,
    },
    install: ot,
    effects: mt,
    ticker: ke,
    updateRoot: Xe.updateRoot,
    plugins: pt,
    globalTimeline: n,
    core: {
      PropTween: fr,
      globals: ht,
      Tween: Je,
      Timeline: Xe,
      Animation: Ve,
      getCache: wt,
      _removeLinkedListItem: zt,
      suppressOverwrites: function (t) {
        return (i = t);
      },
    },
  };
  bt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (dr[t] = Je[t]);
  }),
    ke.add(Xe.updateRoot),
    (l = dr.to({}, { duration: 0 }));
  var pr = function (t, e) {
      for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
        r = r._next;
      return r;
    },
    mr = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, r, i) {
          i._onInit = function (t) {
            var i, n;
            if (
              (N(r) &&
                ((i = {}),
                bt(r, function (t) {
                  return (i[t] = 1);
                }),
                (r = i)),
              e)
            ) {
              for (n in ((i = {}), r)) i[n] = e(r[n]);
              r = i;
            }
            !(function (t, e) {
              var r,
                i,
                n,
                s = t._targets;
              for (r in e)
                for (i = s.length; i--; )
                  (n = t._ptLookup[i][r]) &&
                    (n = n.d) &&
                    (n._pt && (n = pr(n, r)),
                    n && n.modifier && n.modifier(e[r], t, s[i], r));
            })(t, r);
          };
        },
      };
    },
    _r =
      dr.registerPlugin(
        {
          name: "attr",
          init: function (t, e, r, i, n) {
            var s, o;
            for (s in e)
              (o = this.add(
                t,
                "setAttribute",
                (t.getAttribute(s) || 0) + "",
                e[s],
                i,
                n,
                0,
                0,
                s
              )) && (o.op = s),
                this._props.push(s);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
          },
        },
        mr("roundProps", he),
        mr("modifiers"),
        mr("snap", le)
      ) || dr;
  (Je.version = Xe.version = _r.version = "3.6.1"), (u = 1), H() && Ee();
  Ae.Power0,
    Ae.Power1,
    Ae.Power2,
    Ae.Power3,
    Ae.Power4,
    Ae.Linear,
    Ae.Quad,
    Ae.Cubic,
    Ae.Quart,
    Ae.Quint,
    Ae.Strong,
    Ae.Elastic,
    Ae.Back,
    Ae.SteppedEase,
    Ae.Bounce,
    Ae.Sine,
    Ae.Expo,
    Ae.Circ;
  var gr,
    vr,
    yr,
    wr,
    xr,
    br,
    Or,
    Tr = {},
    Mr = 180 / Math.PI,
    Dr = Math.PI / 180,
    Sr = Math.atan2,
    kr = /([A-Z])/g,
    Er = /(?:left|right|width|margin|padding|x)/i,
    Ar = /[\s,\(]\S/,
    Cr = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Lr = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    Ir = function (t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
        e
      );
    },
    Pr = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
        e
      );
    },
    Rr = function (t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    zr = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    Fr = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    qr = function (t, e, r) {
      return (t.style[e] = r);
    },
    Br = function (t, e, r) {
      return t.style.setProperty(e, r);
    },
    jr = function (t, e, r) {
      return (t._gsap[e] = r);
    },
    Nr = function (t, e, r) {
      return (t._gsap.scaleX = t._gsap.scaleY = r);
    },
    Vr = function (t, e, r, i, n) {
      var s = t._gsap;
      (s.scaleX = s.scaleY = r), s.renderTransform(n, s);
    },
    Xr = function (t, e, r, i, n) {
      var s = t._gsap;
      (s[e] = r), s.renderTransform(n, s);
    },
    Yr = "transform",
    Ur = Yr + "Origin",
    Wr = function (t, e) {
      var r = vr.createElementNS
        ? vr.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : vr.createElement(t);
      return r.style ? r : vr.createElement(t);
    },
    Hr = function t(e, r, i) {
      var n = getComputedStyle(e);
      return (
        n[r] ||
        n.getPropertyValue(r.replace(kr, "-$1").toLowerCase()) ||
        n.getPropertyValue(r) ||
        (!i && t(e, Gr(r) || r, 1)) ||
        ""
      );
    },
    Qr = "O,Moz,ms,Ms,Webkit".split(","),
    Gr = function (t, e, r) {
      var i = (e || xr).style,
        n = 5;
      if (t in i && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(Qr[n] + t in i);

      );
      return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Qr[n] : "") + t;
    },
    $r = function () {
      "undefined" != typeof window &&
        window.document &&
        ((gr = window),
        (vr = gr.document),
        (yr = vr.documentElement),
        (xr = Wr("div") || { style: {} }),
        Wr("div"),
        (Yr = Gr(Yr)),
        (Ur = Yr + "Origin"),
        (xr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Or = !!Gr("perspective")),
        (wr = 1));
    },
    Zr = function t(e) {
      var r,
        i = Wr(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        n = this.parentNode,
        s = this.nextSibling,
        o = this.style.cssText;
      if (
        (yr.appendChild(i),
        i.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (r = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = t);
        } catch (t) {}
      else this._gsapBBox && (r = this._gsapBBox());
      return (
        n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
        yr.removeChild(i),
        (this.style.cssText = o),
        r
      );
    },
    Jr = function (t, e) {
      for (var r = e.length; r--; )
        if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    },
    Kr = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (r) {
        e = Zr.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === Zr ||
          (e = Zr.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +Jr(t, ["x", "cx", "x1"]) || 0,
              y: +Jr(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    ti = function (t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Kr(t));
    },
    ei = function (t, e) {
      if (e) {
        var r = t.style;
        e in Tr && e !== Ur && (e = Yr),
          r.removeProperty
            ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                (e = "-" + e),
              r.removeProperty(e.replace(kr, "-$1").toLowerCase()))
            : r.removeAttribute(e);
      }
    },
    ri = function (t, e, r, i, n, s) {
      var o = new fr(t._pt, e, r, 0, 1, s ? Fr : zr);
      return (t._pt = o), (o.b = i), (o.e = n), t._props.push(r), o;
    },
    ii = { deg: 1, rad: 1, turn: 1 },
    ni = function t(e, r, i, n) {
      var s,
        o,
        a,
        u,
        h = parseFloat(i) || 0,
        l = (i + "").trim().substr((h + "").length) || "px",
        c = xr.style,
        f = Er.test(r),
        d = "svg" === e.tagName.toLowerCase(),
        p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
        m = 100,
        _ = "px" === n,
        g = "%" === n;
      return n === l || !h || ii[n] || ii[l]
        ? h
        : ("px" !== l && !_ && (h = t(e, r, i, "px")),
          (u = e.getCTM && ti(e)),
          (!g && "%" !== l) || (!Tr[r] && !~r.indexOf("adius"))
            ? ((c[f ? "width" : "height"] = m + (_ ? l : n)),
              (o =
                ~r.indexOf("adius") || ("em" === n && e.appendChild && !d)
                  ? e
                  : e.parentNode),
              u && (o = (e.ownerSVGElement || {}).parentNode),
              (o && o !== vr && o.appendChild) || (o = vr.body),
              (a = o._gsap) && g && a.width && f && a.time === ke.time
                ? Ot((h / a.width) * m)
                : ((g || "%" === l) && (c.position = Hr(e, "position")),
                  o === e && (c.position = "static"),
                  o.appendChild(xr),
                  (s = xr[p]),
                  o.removeChild(xr),
                  (c.position = "absolute"),
                  f && g && (((a = wt(o)).time = ke.time), (a.width = o[p])),
                  Ot(_ ? (s * h) / m : s && h ? (m / s) * h : 0)))
            : ((s = u ? e.getBBox()[f ? "width" : "height"] : e[p]),
              Ot(g ? (h / s) * m : (h / 100) * s)));
    },
    si = function (t, e, r, i) {
      var n;
      return (
        wr || $r(),
        e in Cr &&
          "transform" !== e &&
          ~(e = Cr[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        Tr[e] && "transform" !== e
          ? ((n = _i(t, i)),
            (n =
              "transformOrigin" !== e
                ? n[e]
                : gi(Hr(t, Ur)) + " " + n.zOrigin + "px"))
          : (!(n = t.style[e]) ||
              "auto" === n ||
              i ||
              ~(n + "").indexOf("calc(")) &&
            (n =
              (hi[e] && hi[e](t, e, r)) ||
              Hr(t, e) ||
              xt(t, e) ||
              ("opacity" === e ? 1 : 0)),
        r && !~(n + "").trim().indexOf(" ") ? ni(t, e, n, r) + r : n
      );
    },
    oi = function (t, e, r, i) {
      if (!r || "none" === r) {
        var n = Gr(e, t, 1),
          s = n && Hr(t, n, 1);
        s && s !== r
          ? ((e = n), (r = s))
          : "borderColor" === e && (r = Hr(t, "borderTopColor"));
      }
      var o,
        a,
        u,
        h,
        l,
        c,
        f,
        d,
        p,
        m,
        _,
        g,
        v = new fr(this._pt, t.style, e, 0, 1, or),
        y = 0,
        w = 0;
      if (
        ((v.b = r),
        (v.e = i),
        (r += ""),
        "auto" === (i += "") &&
          ((t.style[e] = i), (i = Hr(t, e) || i), (t.style[e] = r)),
        Se((o = [r, i])),
        (i = o[1]),
        (u = (r = o[0]).match(K) || []),
        (i.match(K) || []).length)
      ) {
        for (; (a = K.exec(i)); )
          (f = a[0]),
            (p = i.substring(y, a.index)),
            l
              ? (l = (l + 1) % 5)
              : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                (l = 1),
            f !== (c = u[w++] || "") &&
              ((h = parseFloat(c) || 0),
              (_ = c.substr((h + "").length)),
              (g = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) &&
                (f = f.substr(2)),
              (d = parseFloat(f)),
              (m = f.substr((d + "").length)),
              (y = K.lastIndex - m.length),
              m ||
                ((m = m || C.units[e] || _),
                y === i.length && ((i += m), (v.e += m))),
              _ !== m && (h = ni(t, e, c, m) || 0),
              (v._pt = {
                _next: v._pt,
                p: p || 1 === w ? p : ",",
                s: h,
                c: g ? g * d : d - h,
                m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
              }));
        v.c = y < i.length ? i.substring(y, i.length) : "";
      } else v.r = "display" === e && "none" === i ? Fr : zr;
      return et.test(i) && (v.e = 0), (this._pt = v), v;
    },
    ai = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    ui = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var r,
          i,
          n,
          s = e.t,
          o = s.style,
          a = e.u,
          u = s._gsap;
        if ("all" === a || !0 === a) (o.cssText = ""), (i = 1);
        else
          for (n = (a = a.split(",")).length; --n > -1; )
            (r = a[n]),
              Tr[r] && ((i = 1), (r = "transformOrigin" === r ? Ur : Yr)),
              ei(s, r);
        i &&
          (ei(s, Yr),
          u &&
            (u.svg && s.removeAttribute("transform"),
            _i(s, 1),
            (u.uncache = 1)));
      }
    },
    hi = {
      clearProps: function (t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var s = (t._pt = new fr(t._pt, e, r, 0, 0, ui));
          return (s.u = i), (s.pr = -10), (s.tween = n), t._props.push(r), 1;
        }
      },
    },
    li = [1, 0, 0, 1, 0, 0],
    ci = {},
    fi = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    di = function (t) {
      var e = Hr(t, Yr);
      return fi(e) ? li : e.substr(7).match(J).map(Ot);
    },
    pi = function (t, e) {
      var r,
        i,
        n,
        s,
        o = t._gsap || wt(t),
        a = t.style,
        u = di(t);
      return o.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (u = [
            (n = t.transform.baseVal.consolidate().matrix).a,
            n.b,
            n.c,
            n.d,
            n.e,
            n.f,
          ]).join(",")
          ? li
          : u
        : (u !== li ||
            t.offsetParent ||
            t === yr ||
            o.svg ||
            ((n = a.display),
            (a.display = "block"),
            ((r = t.parentNode) && t.offsetParent) ||
              ((s = 1), (i = t.nextSibling), yr.appendChild(t)),
            (u = di(t)),
            n ? (a.display = n) : ei(t, "display"),
            s &&
              (i
                ? r.insertBefore(t, i)
                : r
                ? r.appendChild(t)
                : yr.removeChild(t))),
          e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    },
    mi = function (t, e, r, i, n, s) {
      var o,
        a,
        u,
        h = t._gsap,
        l = n || pi(t, !0),
        c = h.xOrigin || 0,
        f = h.yOrigin || 0,
        d = h.xOffset || 0,
        p = h.yOffset || 0,
        m = l[0],
        _ = l[1],
        g = l[2],
        v = l[3],
        y = l[4],
        w = l[5],
        x = e.split(" "),
        b = parseFloat(x[0]) || 0,
        O = parseFloat(x[1]) || 0;
      r
        ? l !== li &&
          (a = m * v - _ * g) &&
          ((u = b * (-_ / a) + O * (m / a) - (m * w - _ * y) / a),
          (b = b * (v / a) + O * (-g / a) + (g * w - v * y) / a),
          (O = u))
        : ((b = (o = Kr(t)).x + (~x[0].indexOf("%") ? (b / 100) * o.width : b)),
          (O =
            o.y + (~(x[1] || x[0]).indexOf("%") ? (O / 100) * o.height : O))),
        i || (!1 !== i && h.smooth)
          ? ((y = b - c),
            (w = O - f),
            (h.xOffset = d + (y * m + w * g) - y),
            (h.yOffset = p + (y * _ + w * v) - w))
          : (h.xOffset = h.yOffset = 0),
        (h.xOrigin = b),
        (h.yOrigin = O),
        (h.smooth = !!i),
        (h.origin = e),
        (h.originIsAbsolute = !!r),
        (t.style[Ur] = "0px 0px"),
        s &&
          (ri(s, h, "xOrigin", c, b),
          ri(s, h, "yOrigin", f, O),
          ri(s, h, "xOffset", d, h.xOffset),
          ri(s, h, "yOffset", p, h.yOffset)),
        t.setAttribute("data-svg-origin", b + " " + O);
    },
    _i = function (t, e) {
      var r = t._gsap || new Ne(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        s,
        o,
        a,
        u,
        h,
        l,
        c,
        f,
        d,
        p,
        m,
        _,
        g,
        v,
        y,
        w,
        x,
        b,
        O,
        T,
        M,
        D,
        S,
        k,
        E,
        A,
        L,
        I,
        P,
        R,
        z = t.style,
        F = r.scaleX < 0,
        q = "px",
        B = "deg",
        j = Hr(t, Ur) || "0";
      return (
        (i = n = s = u = h = l = c = f = d = 0),
        (o = a = 1),
        (r.svg = !(!t.getCTM || !ti(t))),
        (_ = pi(t, r.svg)),
        r.svg &&
          ((D = !r.uncache && !e && t.getAttribute("data-svg-origin")),
          mi(t, D || j, !!D || r.originIsAbsolute, !1 !== r.smooth, _)),
        (p = r.xOrigin || 0),
        (m = r.yOrigin || 0),
        _ !== li &&
          ((w = _[0]),
          (x = _[1]),
          (b = _[2]),
          (O = _[3]),
          (i = T = _[4]),
          (n = M = _[5]),
          6 === _.length
            ? ((o = Math.sqrt(w * w + x * x)),
              (a = Math.sqrt(O * O + b * b)),
              (u = w || x ? Sr(x, w) * Mr : 0),
              (c = b || O ? Sr(b, O) * Mr + u : 0) &&
                (a *= Math.abs(Math.cos(c * Dr))),
              r.svg && ((i -= p - (p * w + m * b)), (n -= m - (p * x + m * O))))
            : ((R = _[6]),
              (I = _[7]),
              (E = _[8]),
              (A = _[9]),
              (L = _[10]),
              (P = _[11]),
              (i = _[12]),
              (n = _[13]),
              (s = _[14]),
              (h = (g = Sr(R, L)) * Mr),
              g &&
                ((D = T * (v = Math.cos(-g)) + E * (y = Math.sin(-g))),
                (S = M * v + A * y),
                (k = R * v + L * y),
                (E = T * -y + E * v),
                (A = M * -y + A * v),
                (L = R * -y + L * v),
                (P = I * -y + P * v),
                (T = D),
                (M = S),
                (R = k)),
              (l = (g = Sr(-b, L)) * Mr),
              g &&
                ((v = Math.cos(-g)),
                (P = O * (y = Math.sin(-g)) + P * v),
                (w = D = w * v - E * y),
                (x = S = x * v - A * y),
                (b = k = b * v - L * y)),
              (u = (g = Sr(x, w)) * Mr),
              g &&
                ((D = w * (v = Math.cos(g)) + x * (y = Math.sin(g))),
                (S = T * v + M * y),
                (x = x * v - w * y),
                (M = M * v - T * y),
                (w = D),
                (T = S)),
              h &&
                Math.abs(h) + Math.abs(u) > 359.9 &&
                ((h = u = 0), (l = 180 - l)),
              (o = Ot(Math.sqrt(w * w + x * x + b * b))),
              (a = Ot(Math.sqrt(M * M + R * R))),
              (g = Sr(T, M)),
              (c = Math.abs(g) > 2e-4 ? g * Mr : 0),
              (d = P ? 1 / (P < 0 ? -P : P) : 0)),
          r.svg &&
            ((D = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !fi(Hr(t, Yr))),
            D && t.setAttribute("transform", D))),
        Math.abs(c) > 90 &&
          Math.abs(c) < 270 &&
          (F
            ? ((o *= -1),
              (c += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((a *= -1), (c += c <= 0 ? 180 : -180))),
        (r.x =
          i -
          ((r.xPercent =
            i &&
            (r.xPercent ||
              (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          q),
        (r.y =
          n -
          ((r.yPercent =
            n &&
            (r.yPercent ||
              (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          q),
        (r.z = s + q),
        (r.scaleX = Ot(o)),
        (r.scaleY = Ot(a)),
        (r.rotation = Ot(u) + B),
        (r.rotationX = Ot(h) + B),
        (r.rotationY = Ot(l) + B),
        (r.skewX = c + B),
        (r.skewY = f + B),
        (r.transformPerspective = d + q),
        (r.zOrigin = parseFloat(j.split(" ")[2]) || 0) && (z[Ur] = gi(j)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = C.force3D),
        (r.renderTransform = r.svg ? Ti : Or ? Oi : yi),
        (r.uncache = 0),
        r
      );
    },
    gi = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    vi = function (t, e, r) {
      var i = ie(e);
      return Ot(parseFloat(e) + parseFloat(ni(t, "x", r + "px", i))) + i;
    },
    yi = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        Oi(t, e);
    },
    wi = "0deg",
    xi = "0px",
    bi = ") ",
    Oi = function (t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        s = r.x,
        o = r.y,
        a = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        c = r.skewX,
        f = r.skewY,
        d = r.scaleX,
        p = r.scaleY,
        m = r.transformPerspective,
        _ = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        w = ("auto" === _ && t && 1 !== t) || !0 === _;
      if (v && (l !== wi || h !== wi)) {
        var x,
          b = parseFloat(h) * Dr,
          O = Math.sin(b),
          T = Math.cos(b);
        (b = parseFloat(l) * Dr),
          (x = Math.cos(b)),
          (s = vi(g, s, O * x * -v)),
          (o = vi(g, o, -Math.sin(b) * -v)),
          (a = vi(g, a, T * x * -v + v));
      }
      m !== xi && (y += "perspective(" + m + bi),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (w || s !== xi || o !== xi || a !== xi) &&
          (y +=
            a !== xi || w
              ? "translate3d(" + s + ", " + o + ", " + a + ") "
              : "translate(" + s + ", " + o + bi),
        u !== wi && (y += "rotate(" + u + bi),
        h !== wi && (y += "rotateY(" + h + bi),
        l !== wi && (y += "rotateX(" + l + bi),
        (c === wi && f === wi) || (y += "skew(" + c + ", " + f + bi),
        (1 === d && 1 === p) || (y += "scale(" + d + ", " + p + bi),
        (g.style[Yr] = y || "translate(0, 0)");
    },
    Ti = function (t, e) {
      var r,
        i,
        n,
        s,
        o,
        a = e || this,
        u = a.xPercent,
        h = a.yPercent,
        l = a.x,
        c = a.y,
        f = a.rotation,
        d = a.skewX,
        p = a.skewY,
        m = a.scaleX,
        _ = a.scaleY,
        g = a.target,
        v = a.xOrigin,
        y = a.yOrigin,
        w = a.xOffset,
        x = a.yOffset,
        b = a.forceCSS,
        O = parseFloat(l),
        T = parseFloat(c);
      (f = parseFloat(f)),
        (d = parseFloat(d)),
        (p = parseFloat(p)) && ((d += p = parseFloat(p)), (f += p)),
        f || d
          ? ((f *= Dr),
            (d *= Dr),
            (r = Math.cos(f) * m),
            (i = Math.sin(f) * m),
            (n = Math.sin(f - d) * -_),
            (s = Math.cos(f - d) * _),
            d &&
              ((p *= Dr),
              (o = Math.tan(d - p)),
              (n *= o = Math.sqrt(1 + o * o)),
              (s *= o),
              p &&
                ((o = Math.tan(p)), (r *= o = Math.sqrt(1 + o * o)), (i *= o))),
            (r = Ot(r)),
            (i = Ot(i)),
            (n = Ot(n)),
            (s = Ot(s)))
          : ((r = m), (s = _), (i = n = 0)),
        ((O && !~(l + "").indexOf("px")) || (T && !~(c + "").indexOf("px"))) &&
          ((O = ni(g, "x", l, "px")), (T = ni(g, "y", c, "px"))),
        (v || y || w || x) &&
          ((O = Ot(O + v - (v * r + y * n) + w)),
          (T = Ot(T + y - (v * i + y * s) + x))),
        (u || h) &&
          ((o = g.getBBox()),
          (O = Ot(O + (u / 100) * o.width)),
          (T = Ot(T + (h / 100) * o.height))),
        (o =
          "matrix(" +
          r +
          "," +
          i +
          "," +
          n +
          "," +
          s +
          "," +
          O +
          "," +
          T +
          ")"),
        g.setAttribute("transform", o),
        b && (g.style[Yr] = o);
    },
    Mi = function (t, e, r, i, n, s) {
      var o,
        a,
        u = 360,
        h = N(n),
        l = parseFloat(n) * (h && ~n.indexOf("rad") ? Mr : 1),
        c = s ? l * s : l - i,
        f = i + c + "deg";
      return (
        h &&
          ("short" === (o = n.split("_")[1]) &&
            (c %= u) !== c % 180 &&
            (c += c < 0 ? u : -360),
          "cw" === o && c < 0
            ? (c = ((c + 36e9) % u) - ~~(c / u) * u)
            : "ccw" === o && c > 0 && (c = ((c - 36e9) % u) - ~~(c / u) * u)),
        (t._pt = a = new fr(t._pt, e, r, i, c, Ir)),
        (a.e = f),
        (a.u = "deg"),
        t._props.push(r),
        a
      );
    },
    Di = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Si = function (t, e, r) {
      var i,
        n,
        s,
        o,
        a,
        u,
        h,
        l = Di({}, r._gsap),
        c = r.style;
      for (n in (l.svg
        ? ((s = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (c[Yr] = e),
          (i = _i(r, 1)),
          ei(r, Yr),
          r.setAttribute("transform", s))
        : ((s = getComputedStyle(r)[Yr]),
          (c[Yr] = e),
          (i = _i(r, 1)),
          (c[Yr] = s)),
      Tr))
        (s = l[n]) !== (o = i[n]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
          ((a = ie(s) !== (h = ie(o)) ? ni(r, n, s, h) : parseFloat(s)),
          (u = parseFloat(o)),
          (t._pt = new fr(t._pt, i, n, a, u - a, Lr)),
          (t._pt.u = h || 0),
          t._props.push(n));
      Di(i, l);
    };
  bt("padding,margin,Width,Radius", function (t, e) {
    var r = "Top",
      i = "Right",
      n = "Bottom",
      s = "Left",
      o = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map(function (
        r
      ) {
        return e < 2 ? t + r : "border" + r + t;
      });
    hi[e > 1 ? "border" + t : t] = function (t, e, r, i, n) {
      var s, a;
      if (arguments.length < 4)
        return (
          (s = o.map(function (e) {
            return si(t, e, r);
          })),
          5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
        );
      (s = (i + "").split(" ")),
        (a = {}),
        o.forEach(function (t, e) {
          return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
        }),
        t.init(e, a, n);
    };
  });
  var ki,
    Ei,
    Ai,
    Ci = {
      name: "css",
      register: $r,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, r, i, n) {
        var s,
          o,
          a,
          u,
          h,
          l,
          c,
          f,
          d,
          p,
          m,
          _,
          g,
          v,
          y,
          w,
          x,
          b,
          O,
          T = this._props,
          M = t.style,
          D = r.vars.startAt;
        for (c in (wr || $r(), e))
          if (
            "autoRound" !== c &&
            ((o = e[c]), !pt[c] || !He(c, e, r, i, t, n))
          )
            if (
              ((h = typeof o),
              (l = hi[c]),
              "function" === h && (h = typeof (o = o.call(r, i, t, n))),
              "string" === h && ~o.indexOf("random(") && (o = de(o)),
              l)
            )
              l(this, t, c, o, r) && (y = 1);
            else if ("--" === c.substr(0, 2))
              (s = (getComputedStyle(t).getPropertyValue(c) + "").trim()),
                (o += ""),
                (Me.lastIndex = 0),
                Me.test(s) || ((f = ie(s)), (d = ie(o))),
                d ? f !== d && (s = ni(t, c, s, d) + d) : f && (o += f),
                this.add(M, "setProperty", s, o, i, n, 0, 0, c);
            else if ("undefined" !== h) {
              if (
                (D && c in D
                  ? ((s =
                      "function" == typeof D[c] ? D[c].call(r, i, t, n) : D[c]),
                    c in C.units && !ie(s) && (s += C.units[c]),
                    "=" === (s + "").charAt(1) && (s = si(t, c)))
                  : (s = si(t, c)),
                (u = parseFloat(s)),
                (p =
                  "string" === h && "=" === o.charAt(1)
                    ? +(o.charAt(0) + "1")
                    : 0) && (o = o.substr(2)),
                (a = parseFloat(o)),
                c in Cr &&
                  ("autoAlpha" === c &&
                    (1 === u &&
                      "hidden" === si(t, "visibility") &&
                      a &&
                      (u = 0),
                    ri(
                      this,
                      M,
                      "visibility",
                      u ? "inherit" : "hidden",
                      a ? "inherit" : "hidden",
                      !a
                    )),
                  "scale" !== c &&
                    "transform" !== c &&
                    ~(c = Cr[c]).indexOf(",") &&
                    (c = c.split(",")[0])),
                (m = c in Tr))
              )
                if (
                  (_ ||
                    (((g = t._gsap).renderTransform && !e.parseTransform) ||
                      _i(t, e.parseTransform),
                    (v = !1 !== e.smoothOrigin && g.smooth),
                    ((_ = this._pt =
                      new fr(
                        this._pt,
                        M,
                        Yr,
                        0,
                        1,
                        g.renderTransform,
                        g,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === c)
                )
                  (this._pt = new fr(
                    this._pt,
                    g,
                    "scaleY",
                    g.scaleY,
                    p ? p * a : a - g.scaleY
                  )),
                    T.push("scaleY", c),
                    (c += "X");
                else {
                  if ("transformOrigin" === c) {
                    (x = void 0),
                      (b = void 0),
                      (O = void 0),
                      (x = (w = o).split(" ")),
                      (b = x[0]),
                      (O = x[1] || "50%"),
                      ("top" !== b &&
                        "bottom" !== b &&
                        "left" !== O &&
                        "right" !== O) ||
                        ((w = b), (b = O), (O = w)),
                      (x[0] = ai[b] || b),
                      (x[1] = ai[O] || O),
                      (o = x.join(" ")),
                      g.svg
                        ? mi(t, o, 0, v, 0, this)
                        : ((d = parseFloat(o.split(" ")[2]) || 0) !==
                            g.zOrigin && ri(this, g, "zOrigin", g.zOrigin, d),
                          ri(this, M, c, gi(s), gi(o)));
                    continue;
                  }
                  if ("svgOrigin" === c) {
                    mi(t, o, 1, v, 0, this);
                    continue;
                  }
                  if (c in ci) {
                    Mi(this, g, c, u, o, p);
                    continue;
                  }
                  if ("smoothOrigin" === c) {
                    ri(this, g, "smooth", g.smooth, o);
                    continue;
                  }
                  if ("force3D" === c) {
                    g[c] = o;
                    continue;
                  }
                  if ("transform" === c) {
                    Si(this, o, t);
                    continue;
                  }
                }
              else c in M || (c = Gr(c) || c);
              if (
                m ||
                ((a || 0 === a) && (u || 0 === u) && !Ar.test(o) && c in M)
              )
                a || (a = 0),
                  (f = (s + "").substr((u + "").length)) !==
                    (d = ie(o) || (c in C.units ? C.units[c] : f)) &&
                    (u = ni(t, c, s, d)),
                  (this._pt = new fr(
                    this._pt,
                    m ? g : M,
                    c,
                    u,
                    p ? p * a : a - u,
                    m || ("px" !== d && "zIndex" !== c) || !1 === e.autoRound
                      ? Lr
                      : Rr
                  )),
                  (this._pt.u = d || 0),
                  f !== d && ((this._pt.b = s), (this._pt.r = Pr));
              else if (c in M) oi.call(this, t, c, s, o);
              else {
                if (!(c in t)) {
                  at(c, o);
                  continue;
                }
                this.add(t, c, t[c], o, i, n);
              }
              T.push(c);
            }
        y && cr(this);
      },
      get: si,
      aliases: Cr,
      getSetter: function (t, e, r) {
        var i = Cr[e];
        return (
          i && i.indexOf(",") < 0 && (e = i),
          e in Tr && e !== Ur && (t._gsap.x || si(t, "x"))
            ? r && br === r
              ? "scale" === e
                ? Nr
                : jr
              : (br = r || {}) && ("scale" === e ? Vr : Xr)
            : t.style && !Y(t.style[e])
            ? qr
            : ~e.indexOf("-")
            ? Br
            : ir(t, e)
        );
      },
      core: { _removeProperty: ei, _getMatrix: pi },
    };
  (_r.utils.checkPrefix = Gr),
    (Ai = bt(
      (ki = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (Ei = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        Tr[t] = 1;
      }
    )),
    bt(Ei, function (t) {
      (C.units[t] = "deg"), (ci[t] = 1);
    }),
    (Cr[Ai[13]] = ki + "," + Ei),
    bt(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        Cr[e[1]] = Ai[e[0]];
      }
    ),
    bt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        C.units[t] = "px";
      }
    ),
    _r.registerPlugin(Ci);
  var Li,
    Ii = _r.registerPlugin(Ci) || _r,
    Pi = (Ii.core.Tween, {}),
    Ri = !1;
  function zi() {
    var t, e;
    return (
      Ri ||
        ((Ri = !0),
        (Li = {}),
        (t = "undefined" != typeof window ? window : Li),
        (e = function () {
          function t() {}
          var e = t.prototype;
          return (
            (e.on = function (t, e) {
              if (t && e) {
                var r = (this._events = this._events || {}),
                  i = (r[t] = r[t] || []);
                return -1 == i.indexOf(e) && i.push(e), this;
              }
            }),
            (e.once = function (t, e) {
              if (t && e) {
                this.on(t, e);
                var r = (this._onceEvents = this._onceEvents || {});
                return ((r[t] = r[t] || {})[e] = !0), this;
              }
            }),
            (e.off = function (t, e) {
              var r = this._events && this._events[t];
              if (r && r.length) {
                var i = r.indexOf(e);
                return -1 != i && r.splice(i, 1), this;
              }
            }),
            (e.emitEvent = function (t, e) {
              var r = this._events && this._events[t];
              if (r && r.length) {
                (r = r.slice(0)), (e = e || []);
                for (
                  var i = this._onceEvents && this._onceEvents[t], n = 0;
                  n < r.length;
                  n++
                ) {
                  var s = r[n];
                  i && i[s] && (this.off(t, s), delete i[s]), s.apply(this, e);
                }
                return this;
              }
            }),
            (e.allOff = function () {
              delete this._events, delete this._onceEvents;
            }),
            t
          );
        }),
        Li ? (Li = e()) : (t.EvEmitter = e())),
      Li
    );
  }
  /*!
   * imagesLoaded v4.1.4
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */ !(function (t, e) {
    Pi ? (Pi = e(t, zi())) : (t.imagesLoaded = e(t, t.EvEmitter));
  })("undefined" != typeof window ? window : Pi, function (t, e) {
    var r = t.jQuery,
      i = t.console;
    function n(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    }
    var s = Array.prototype.slice;
    function o(t, e, a) {
      if (!(this instanceof o)) return new o(t, e, a);
      var u,
        h = t;
      ("string" == typeof t && (h = document.querySelectorAll(t)), h)
        ? ((this.elements =
            ((u = h),
            Array.isArray(u)
              ? u
              : "object" == typeof u && "number" == typeof u.length
              ? s.call(u)
              : [u])),
          (this.options = n({}, this.options)),
          "function" == typeof e ? (a = e) : n(this.options, e),
          a && this.on("always", a),
          this.getImages(),
          r && (this.jqDeferred = new r.Deferred()),
          setTimeout(this.check.bind(this)))
        : i.error("Bad element for imagesLoaded " + (h || t));
    }
    (o.prototype = Object.create(e.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
          !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && a[e]) {
          for (var r = t.querySelectorAll("img"), i = 0; i < r.length; i++) {
            var n = r[i];
            this.addImage(n);
          }
          if ("string" == typeof this.options.background) {
            var s = t.querySelectorAll(this.options.background);
            for (i = 0; i < s.length; i++) {
              var o = s[i];
              this.addElementBackgroundImages(o);
            }
          }
        }
      });
    var a = { 1: !0, 9: !0, 11: !0 };
    function u(t) {
      this.img = t;
    }
    function h(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    return (
      (o.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var r = /url\((['"])?(.*?)\1\)/gi, i = r.exec(e.backgroundImage);
            null !== i;

          ) {
            var n = i && i[2];
            n && this.addBackground(n, t), (i = r.exec(e.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (t) {
        var e = new u(t);
        this.images.push(e);
      }),
      (o.prototype.addBackground = function (t, e) {
        var r = new h(t, e);
        this.images.push(r);
      }),
      (o.prototype.check = function () {
        var t = this;
        function e(e, r, i) {
          setTimeout(function () {
            t.progress(e, r, i);
          });
        }
        (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : this.complete();
      }),
      (o.prototype.progress = function (t, e, r) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && i && i.log("progress: " + r, t, e);
      }),
      (o.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      }),
      (u.prototype = Object.create(e.prototype)),
      (u.prototype.check = function () {
        this.getIsImageComplete()
          ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.proxyImage.src = this.img.src));
      }),
      (u.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (u.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (u.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (u.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (u.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (u.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (h.prototype = Object.create(u.prototype)),
      (h.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (h.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (h.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (o.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery) &&
          ((r = e).fn.imagesLoaded = function (t, e) {
            return new o(this, t, e).jqDeferred.promise(r(this));
          });
      }),
      o.makeJQueryPlugin(),
      o
    );
  });
  const Fi = Pi,
    qi = (t, e, r, i, n) => ((t - e) * (n - i)) / (r - e) + i,
    Bi = (t, e, r) => (1 - r) * t + r * e,
    ji = () => ({ width: window.innerWidth, height: window.innerHeight }),
    Ni = (t, e) => Math.floor(Math.random() * (e - t + 1) + t),
    Vi = (t) => ({ x: t.clientX, y: t.clientY });
  let Xi = { x: 0, y: 0 };
  window.addEventListener("mousemove", (t) => (Xi = Vi(t)));
  var Yi,
    Ui,
    Wi = "object" == typeof Reflect ? Reflect : null,
    Hi =
      Wi && "function" == typeof Wi.apply
        ? Wi.apply
        : function (t, e, r) {
            return Function.prototype.apply.call(t, e, r);
          };
  Ui =
    Wi && "function" == typeof Wi.ownKeys
      ? Wi.ownKeys
      : Object.getOwnPropertySymbols
      ? function (t) {
          return Object.getOwnPropertyNames(t).concat(
            Object.getOwnPropertySymbols(t)
          );
        }
      : function (t) {
          return Object.getOwnPropertyNames(t);
        };
  var Qi =
    Number.isNaN ||
    function (t) {
      return t != t;
    };
  function Gi() {
    Gi.init.call(this);
  }
  (Yi = Gi),
    (Gi.EventEmitter = Gi),
    (Gi.prototype._events = void 0),
    (Gi.prototype._eventsCount = 0),
    (Gi.prototype._maxListeners = void 0);
  var $i = 10;
  function Zi(t) {
    if ("function" != typeof t)
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' +
          typeof t
      );
  }
  function Ji(t) {
    return void 0 === t._maxListeners
      ? Gi.defaultMaxListeners
      : t._maxListeners;
  }
  function Ki(t, e, r, i) {
    var n, s, o, a;
    if (
      (Zi(r),
      void 0 === (s = t._events)
        ? ((s = t._events = Object.create(null)), (t._eventsCount = 0))
        : (void 0 !== s.newListener &&
            (t.emit("newListener", e, r.listener ? r.listener : r),
            (s = t._events)),
          (o = s[e])),
      void 0 === o)
    )
      (o = s[e] = r), ++t._eventsCount;
    else if (
      ("function" == typeof o
        ? (o = s[e] = i ? [r, o] : [o, r])
        : i
        ? o.unshift(r)
        : o.push(r),
      (n = Ji(t)) > 0 && o.length > n && !o.warned)
    ) {
      o.warned = !0;
      var u = new Error(
        "Possible EventEmitter memory leak detected. " +
          o.length +
          " " +
          String(e) +
          " listeners added. Use emitter.setMaxListeners() to increase limit"
      );
      (u.name = "MaxListenersExceededWarning"),
        (u.emitter = t),
        (u.type = e),
        (u.count = o.length),
        (a = u),
        console && console.warn && console.warn(a);
    }
    return t;
  }
  function tn() {
    if (!this.fired)
      return (
        this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        0 === arguments.length
          ? this.listener.call(this.target)
          : this.listener.apply(this.target, arguments)
      );
  }
  function en(t, e, r) {
    var i = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
      n = tn.bind(i);
    return (n.listener = r), (i.wrapFn = n), n;
  }
  function rn(t, e, r) {
    var i = t._events;
    if (void 0 === i) return [];
    var n = i[e];
    return void 0 === n
      ? []
      : "function" == typeof n
      ? r
        ? [n.listener || n]
        : [n]
      : r
      ? (function (t) {
          for (var e = new Array(t.length), r = 0; r < e.length; ++r)
            e[r] = t[r].listener || t[r];
          return e;
        })(n)
      : sn(n, n.length);
  }
  function nn(t) {
    var e = this._events;
    if (void 0 !== e) {
      var r = e[t];
      if ("function" == typeof r) return 1;
      if (void 0 !== r) return r.length;
    }
    return 0;
  }
  function sn(t, e) {
    for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t[i];
    return r;
  }
  Object.defineProperty(Gi, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
      return $i;
    },
    set: function (t) {
      if ("number" != typeof t || t < 0 || Qi(t))
        throw new RangeError(
          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
            t +
            "."
        );
      $i = t;
    },
  }),
    (Gi.init = function () {
      (void 0 !== this._events &&
        this._events !== Object.getPrototypeOf(this)._events) ||
        ((this._events = Object.create(null)), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (Gi.prototype.setMaxListeners = function (t) {
      if ("number" != typeof t || t < 0 || Qi(t))
        throw new RangeError(
          'The value of "n" is out of range. It must be a non-negative number. Received ' +
            t +
            "."
        );
      return (this._maxListeners = t), this;
    }),
    (Gi.prototype.getMaxListeners = function () {
      return Ji(this);
    }),
    (Gi.prototype.emit = function (t) {
      for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
      var i = "error" === t,
        n = this._events;
      if (void 0 !== n) i = i && void 0 === n.error;
      else if (!i) return !1;
      if (i) {
        var s;
        if ((e.length > 0 && (s = e[0]), s instanceof Error)) throw s;
        var o = new Error(
          "Unhandled error." + (s ? " (" + s.message + ")" : "")
        );
        throw ((o.context = s), o);
      }
      var a = n[t];
      if (void 0 === a) return !1;
      if ("function" == typeof a) Hi(a, this, e);
      else {
        var u = a.length,
          h = sn(a, u);
        for (r = 0; r < u; ++r) Hi(h[r], this, e);
      }
      return !0;
    }),
    (Gi.prototype.addListener = function (t, e) {
      return Ki(this, t, e, !1);
    }),
    (Gi.prototype.on = Gi.prototype.addListener),
    (Gi.prototype.prependListener = function (t, e) {
      return Ki(this, t, e, !0);
    }),
    (Gi.prototype.once = function (t, e) {
      return Zi(e), this.on(t, en(this, t, e)), this;
    }),
    (Gi.prototype.prependOnceListener = function (t, e) {
      return Zi(e), this.prependListener(t, en(this, t, e)), this;
    }),
    (Gi.prototype.removeListener = function (t, e) {
      var r, i, n, s, o;
      if ((Zi(e), void 0 === (i = this._events))) return this;
      if (void 0 === (r = i[t])) return this;
      if (r === e || r.listener === e)
        0 == --this._eventsCount
          ? (this._events = Object.create(null))
          : (delete i[t],
            i.removeListener &&
              this.emit("removeListener", t, r.listener || e));
      else if ("function" != typeof r) {
        for (n = -1, s = r.length - 1; s >= 0; s--)
          if (r[s] === e || r[s].listener === e) {
            (o = r[s].listener), (n = s);
            break;
          }
        if (n < 0) return this;
        0 === n
          ? r.shift()
          : (function (t, e) {
              for (; e + 1 < t.length; e++) t[e] = t[e + 1];
              t.pop();
            })(r, n),
          1 === r.length && (i[t] = r[0]),
          void 0 !== i.removeListener && this.emit("removeListener", t, o || e);
      }
      return this;
    }),
    (Gi.prototype.off = Gi.prototype.removeListener),
    (Gi.prototype.removeAllListeners = function (t) {
      var e, r, i;
      if (void 0 === (r = this._events)) return this;
      if (void 0 === r.removeListener)
        return (
          0 === arguments.length
            ? ((this._events = Object.create(null)), (this._eventsCount = 0))
            : void 0 !== r[t] &&
              (0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : delete r[t]),
          this
        );
      if (0 === arguments.length) {
        var n,
          s = Object.keys(r);
        for (i = 0; i < s.length; ++i)
          "removeListener" !== (n = s[i]) && this.removeAllListeners(n);
        return (
          this.removeAllListeners("removeListener"),
          (this._events = Object.create(null)),
          (this._eventsCount = 0),
          this
        );
      }
      if ("function" == typeof (e = r[t])) this.removeListener(t, e);
      else if (void 0 !== e)
        for (i = e.length - 1; i >= 0; i--) this.removeListener(t, e[i]);
      return this;
    }),
    (Gi.prototype.listeners = function (t) {
      return rn(this, t, !0);
    }),
    (Gi.prototype.rawListeners = function (t) {
      return rn(this, t, !1);
    }),
    (Gi.listenerCount = function (t, e) {
      return "function" == typeof t.listenerCount
        ? t.listenerCount(e)
        : nn.call(t, e);
    }),
    (Gi.prototype.listenerCount = nn),
    (Gi.prototype.eventNames = function () {
      return this._eventsCount > 0 ? Ui(this._events) : [];
    });
  let on = ji();
  window.addEventListener("resize", () => (on = ji()));
  let an = { x: 0, y: 0 };
  window.addEventListener("mousemove", (t) => (an = Vi(t)));
  class un {
    constructor(t) {
      (this.DOM = { el: t }),
        (this.renderedStyles = {
          tx: { previous: 0, current: 0, amt: 0.04 },
          ty: { previous: 0, current: 0, amt: 0.04 },
        }),
        this.calculateSizePosition(),
        this.initEvents();
    }
    calculateSizePosition() {
      (this.scrollVal = { x: window.scrollX, y: window.scrollY }),
        (this.rect = this.DOM.el.getBoundingClientRect());
    }
    initEvents() {
      window.addEventListener("resize", () => this.calculateSizePosition()),
        this.DOM.el.addEventListener("mouseenter", () => {
          this.hoverTimeout = setTimeout(() => {
            const { x: t, y: e } = ((t) => {
              const e = window.getComputedStyle(t),
                r = e.transform || e.webkitTransform || e.mozTransform;
              if ("none" === r || void 0 === r) return { x: 0, y: 0, z: 0 };
              const i = r.includes("3d") ? "3d" : "2d",
                n = r.match(/matrix.*\((.+)\)/)[1].split(", ");
              return "2d" === i
                ? { x: n[4], y: n[5], z: 0 }
                : "3d" === i
                ? { x: n[12], y: n[13], z: n[14] }
                : void 0;
            })(this.DOM.el);
            (this.renderedStyles.tx.previous = t),
              (this.renderedStyles.ty.previous = e),
              this.loopRender();
          }, 10);
        }),
        this.DOM.el.addEventListener("mouseleave", () => {
          this.hoverTimeout && clearTimeout(this.hoverTimeout),
            this.stopRendering();
        });
    }
    loopRender() {
      this.requestId ||
        (this.requestId = requestAnimationFrame(() => this.render()));
    }
    stopRendering() {
      this.requestId &&
        (window.cancelAnimationFrame(this.requestId),
        (this.requestId = void 0));
    }
    render() {
      this.requestId = void 0;
      const t = this.scrollVal.x - window.scrollX,
        e = this.scrollVal.y - window.scrollY;
      (this.renderedStyles.tx.current =
        0.3 * (an.x - (t + this.rect.left + this.rect.width / 2))),
        (this.renderedStyles.ty.current =
          0.3 * (an.y - (e + this.rect.top + this.rect.height / 2)));
      for (const t in this.renderedStyles)
        this.renderedStyles[t].previous = Bi(
          this.renderedStyles[t].previous,
          this.renderedStyles[t].current,
          this.renderedStyles[t].amt
        );
      Ii.set(this.DOM.el, {
        x: this.renderedStyles.tx.previous,
        y: this.renderedStyles.ty.previous,
      }),
        this.loopRender();
    }
  }
  class hn {
    constructor(t) {
      (this.DOM = { el: t }),
        (this.DOM.backCtrl = this.DOM.el.querySelector(".preview__item-back")),
        (this.DOM.imgWrap = this.DOM.el.querySelector(
          ".preview__item-imgwrap"
        )),
        (this.DOM.image = this.DOM.imgWrap.querySelector(".preview__item-img")),
        (this.DOM.title = this.DOM.el.querySelector(".preview__item-title")),
        (this.DOM.titleChars = [...this.DOM.title.querySelectorAll(".char")]),
        (this.DOM.content = this.DOM.el.querySelector(
          ".preview__item-content"
        )),
        this.init();
    }
    init() {
      Ii.set(this.DOM.titleChars, { opacity: 0, y: "100%" }),
        Ii.set(this.DOM.imgWrap, { y: "100%", rotationX: -20 }),
        Ii.set(this.DOM.image, { y: "-100%" }),
        Ii.set(this.DOM.backCtrl, { opacity: 0 }),
        Ii.set(this.DOM.content, { opacity: 0 });
    }
  }
  let ln = ji();
  window.addEventListener("resize", () => (ln = ji()));
  let cn = { x: ln.width / 2, y: ln.height / 2 };
  window.addEventListener("mousemove", (t) => (cn = Vi(t)));
  class fn {
    constructor(t) {
      (this.DOM = { el: t }),
        (this.DOM.image = this.DOM.el.querySelector(".grid__item-img")),
        (this.title = this.DOM.el.dataset.title),
        (this.translationVals = { x: 0, y: 0 }),
        (this.rotationVals = { x: 0, y: 0 }),
        (this.xstart = Ni(70, 100)),
        (this.ystart = Ni(40, 65)),
        (this.rxstart = 5),
        (this.rystart = 10),
        (this.magneticFx = new un(this.DOM.image)),
        (this.DOM.contentEl = document.querySelector(
          this.DOM.el.href.substring(this.DOM.el.href.lastIndexOf("#"))
        )),
        (this.preview = new hn(this.DOM.contentEl)),
        this.layout(),
        this.loopTransformAnimation();
    }
    layout() {
      const t = this.DOM.el.getBoundingClientRect();
      (this.isLeft = t.left + t.width / 2 < ln.width / 2),
        (this.isTop = t.top + t.height / 2 < ln.height / 2),
        (this.rY = this.isLeft
          ? qi(t.left + t.width / 2, 0, ln.width / 2, this.rystart, 0)
          : qi(t.left + t.width / 2, ln.width / 2, ln.width, 0, -this.rystart)),
        (this.rX = this.isTop
          ? qi(t.top + t.height / 2, 0, ln.height / 2, -this.rxstart, 0)
          : qi(
              t.top + t.height / 2,
              ln.height / 2,
              ln.height,
              0,
              this.rxstart
            )),
        (this.tZ = this.isLeft
          ? qi(t.left + t.width / 2, 0, ln.width / 2, -200, -600)
          : qi(t.left + t.width / 2, ln.width / 2, ln.width, -600, -200)),
        Ii.set(this.DOM.el, {
          rotationX: this.rX,
          rotationY: this.rY,
          z: this.tZ,
        });
    }
    onMouseEnter() {
      this.hoverTimeout = setTimeout(() => {
        this.timelineHoverOut && this.timelineHoverOut.kill(),
          (this.timelineHoverIn = Ii.timeline()
            .addLabel("start", 0)
            .to(
              this.DOM.image,
              { duration: 0.8, ease: "expo", scale: 1.1 },
              "start"
            ));
      }, 10);
    }
    onMouseLeave() {
      this.hoverTimeout && clearTimeout(this.hoverTimeout),
        this.timelineHoverIn && this.timelineHoverIn.kill(),
        (this.timelineHoverOut = Ii.timeline().to(this.DOM.image, {
          duration: 1,
          ease: "power4",
          x: 0,
          y: 0,
          scale: 1,
        }));
    }
    loopTransformAnimation() {
      this.requestId ||
        (this.requestId = requestAnimationFrame(() => this.move()));
    }
    stopTransformAnimation() {
      this.requestId &&
        (window.cancelAnimationFrame(this.requestId),
        (this.requestId = void 0));
    }
    move() {
      (this.requestId = void 0),
        (this.translationVals.x = Bi(
          this.translationVals.x,
          qi(cn.x, 0, ln.width, -this.xstart, this.xstart),
          0.04
        )),
        (this.translationVals.y = Bi(
          this.translationVals.y,
          qi(cn.y, 0, ln.height, -this.ystart, this.ystart),
          0.04
        )),
        (this.rotationVals.x = this.isTop
          ? Bi(
              this.rotationVals.x,
              qi(cn.y, 0, ln.height / 2, this.rxstart, 0),
              0.04
            )
          : Bi(
              this.rotationVals.x,
              qi(cn.y, ln.height / 2, ln.height, 0, -this.rxstart),
              0.04
            )),
        (this.rotationVals.y = this.isLeft
          ? Bi(
              this.rotationVals.y,
              qi(cn.x, 0, ln.width / 2, -this.rystart, 0),
              0.04
            )
          : Bi(
              this.rotationVals.y,
              qi(cn.x, ln.width / 2, ln.width, 0, this.rystart),
              0.04
            )),
        Ii.set(this.DOM.el, {
          x: -this.translationVals.x,
          y: -this.translationVals.y,
          rotationX: -this.rX - this.rotationVals.x,
          rotationY: -this.rY - this.rotationVals.y,
        }),
        this.loopTransformAnimation();
    }
  }
  var dn,
    pn,
    mn = {};
  (dn = mn),
    (pn = function () {
      var t = document,
        e = t.createTextNode.bind(t);
      function r(t, e, r) {
        t.style.setProperty(e, r);
      }
      function i(t, e) {
        return t.appendChild(e);
      }
      function n(e, r, n, s) {
        var o = t.createElement("span");
        return (
          r && (o.className = r),
          n && (!s && o.setAttribute("data-" + r, n), (o.textContent = n)),
          (e && i(e, o)) || o
        );
      }
      function s(t, e) {
        return t.getAttribute("data-" + e);
      }
      function o(e, r) {
        return e && 0 != e.length
          ? e.nodeName
            ? [e]
            : [].slice.call(e[0].nodeName ? e : (r || t).querySelectorAll(e))
          : [];
      }
      function a(t) {
        for (var e = []; t--; ) e[t] = [];
        return e;
      }
      function u(t, e) {
        t && t.some(e);
      }
      function h(t) {
        return function (e) {
          return t[e];
        };
      }
      var l = {};
      function c(t, e, r) {
        var i = r.indexOf(t);
        if (-1 == i)
          r.unshift(t),
            u(l[t].depends, function (e) {
              c(e, t, r);
            });
        else {
          var n = r.indexOf(e);
          r.splice(i, 1), r.splice(n, 0, t);
        }
        return r;
      }
      function f(t, e, r, i) {
        return { by: t, depends: e, key: r, split: i };
      }
      function d(t) {
        return c(t, 0, []).map(h(l));
      }
      function p(t) {
        l[t.by] = t;
      }
      function m(t, r, s, a, h) {
        t.normalize();
        var l = [],
          c = document.createDocumentFragment();
        a && l.push(t.previousSibling);
        var f = [];
        return (
          o(t.childNodes).some(function (t) {
            if (!t.tagName || t.hasChildNodes()) {
              if (t.childNodes && t.childNodes.length)
                return f.push(t), void l.push.apply(l, m(t, r, s, a, h));
              var i = t.wholeText || "",
                o = i.trim();
              o.length &&
                (" " === i[0] && f.push(e(" ")),
                u(o.split(s), function (t, e) {
                  e && h && f.push(n(c, "whitespace", " ", h));
                  var i = n(c, r, t);
                  l.push(i), f.push(i);
                }),
                " " === i[i.length - 1] && f.push(e(" ")));
            } else f.push(t);
          }),
          u(f, function (t) {
            i(c, t);
          }),
          (t.innerHTML = ""),
          i(t, c),
          l
        );
      }
      var _ = "words",
        g = f(_, 0, "word", function (t) {
          return m(t, "word", /\s+/, 0, 1);
        }),
        v = "chars",
        y = f(v, [_], "char", function (t, e, r) {
          var i = [];
          return (
            u(r.words, function (t, r) {
              i.push.apply(i, m(t, "char", "", e.whitespace && r));
            }),
            i
          );
        });
      function w(t) {
        var e = (t = t || {}).key;
        return o(t.target || "[data-splitting]").map(function (i) {
          var n = i["🍌"];
          if (!t.force && n) return n;
          n = i["🍌"] = { el: i };
          var o = d(t.by || s(i, "splitting") || v),
            a = (function (t, e) {
              for (var r in e) t[r] = e[r];
              return t;
            })({}, t);
          return (
            u(o, function (t) {
              if (t.split) {
                var s = t.by,
                  o = (e ? "-" + e : "") + t.key,
                  h = t.split(i, a, n);
                o &&
                  (function (t, e, i) {
                    var n = "--" + e,
                      s = n + "-index";
                    u(i, function (t, e) {
                      Array.isArray(t)
                        ? u(t, function (t) {
                            r(t, s, e);
                          })
                        : r(t, s, e);
                    }),
                      r(t, n + "-total", i.length);
                  })(i, o, h),
                  (n[s] = h),
                  i.classList.add(s);
              }
            }),
            i.classList.add("splitting"),
            n
          );
        });
      }
      function x(t, e, r) {
        var i = o(e.matching || t.children, t),
          n = {};
        return (
          u(i, function (t) {
            var e = Math.round(t[r]);
            (n[e] || (n[e] = [])).push(t);
          }),
          Object.keys(n).map(Number).sort(b).map(h(n))
        );
      }
      function b(t, e) {
        return t - e;
      }
      (w.html = function (t) {
        var e = ((t = t || {}).target = n());
        return (e.innerHTML = t.content), w(t), e.outerHTML;
      }),
        (w.add = p);
      var O = f("lines", [_], "line", function (t, e, r) {
          return x(t, { matching: r.words }, "offsetTop");
        }),
        T = f("items", 0, "item", function (t, e) {
          return o(e.matching || t.children, t);
        }),
        M = f("rows", 0, "row", function (t, e) {
          return x(t, e, "offsetTop");
        }),
        D = f("cols", 0, "col", function (t, e) {
          return x(t, e, "offsetLeft");
        }),
        S = f("grid", ["rows", "cols"]),
        k = "layout",
        E = f(k, 0, 0, function (t, e) {
          var a = (e.rows = +(e.rows || s(t, "rows") || 1)),
            u = (e.columns = +(e.columns || s(t, "columns") || 1));
          if (
            ((e.image = e.image || s(t, "image") || t.currentSrc || t.src),
            e.image)
          ) {
            var h = o("img", t)[0];
            e.image = h && (h.currentSrc || h.src);
          }
          e.image && r(t, "background-image", "url(" + e.image + ")");
          for (var l = a * u, c = [], f = n(0, "cell-grid"); l--; ) {
            var d = n(f, "cell");
            n(d, "cell-inner"), c.push(d);
          }
          return i(t, f), c;
        }),
        A = f("cellRows", [k], "row", function (t, e, r) {
          var i = e.rows,
            n = a(i);
          return (
            u(r.layout, function (t, e, r) {
              n[Math.floor(e / (r.length / i))].push(t);
            }),
            n
          );
        }),
        C = f("cellColumns", [k], "col", function (t, e, r) {
          var i = e.columns,
            n = a(i);
          return (
            u(r.layout, function (t, e) {
              n[e % i].push(t);
            }),
            n
          );
        }),
        L = f("cells", ["cellRows", "cellColumns"], "cell", function (t, e, r) {
          return r.layout;
        });
      return (
        p(g), p(y), p(O), p(T), p(M), p(D), p(S), p(E), p(A), p(C), p(L), w
      );
    }),
    "object" == typeof mn ? (mn = pn()) : (dn.Splitting = pn());
  t(mn)();
  const _n = [
    ...document.querySelector(".content__title").querySelectorAll(".char"),
  ];
  class gn extends Yi.EventEmitter {
    constructor(t) {
      super(),
        (this.DOM = { el: t }),
        (this.gridItems = []),
        (this.DOM.items = [...this.DOM.el.querySelectorAll(".grid__item")]),
        this.DOM.items.forEach((t) => {
          this.gridItems.push(new fn(t));
        }),
        this.showItems(),
        this.initEvents();
    }
    showItems() {
      Ii.timeline()
        .addLabel("start", 0)
        .set(this.DOM.items, { scale: 1.5, opacity: 0 }, 0)
        .to(
          this.DOM.items,
          {
            duration: 1.2,
            ease: "expo",
            scale: 1,
            stagger: { amount: 0.4, grid: "auto", from: "center" },
          },
          "start"
        )
        .to(
          this.DOM.items,
          {
            duration: 1.2,
            ease: "power1",
            opacity: 1,
            stagger: { amount: 0.4, grid: "auto", from: "center" },
          },
          "start"
        );
    }
    initEvents() {
      for (const t of this.gridItems)
        t.DOM.image.addEventListener("mouseenter", () => {
          t.onMouseEnter(), this.emit("mouseEnterItem", t.title);
        }),
          t.DOM.image.addEventListener("mouseleave", () => {
            t.onMouseLeave(), this.emit("mouseLeaveItem");
          }),
          t.DOM.el.addEventListener("click", (e) => {
            e.preventDefault(), this.showContent(t);
          }),
          t.preview.DOM.backCtrl.addEventListener("click", (e) => {
            this.hideContent(t);
          });
    }
    showContent(t) {
      if (this.isContentOpen) return !1;
      (this.isContentOpen = !0), this.DOM.el.classList.add("grid--inactive");
      for (const t of this.gridItems) t.stopTransformAnimation();
      Ii.timeline()
        .addLabel("start", 0)
        .to(
          this.DOM.items,
          {
            duration: 2,
            ease: "expo.inOut",
            opacity: 0,
            rotationX: 0,
            rotationY: 0,
            y: "-=" + Ni(1e3, 1600),
            stagger: { amount: 0.2, grid: "auto", from: "top" },
          },
          "start"
        )
        .to(
          _n,
          {
            duration: 1.5,
            ease: "expo.inOut",
            opacity: 0,
            y: "-=100%",
            stagger: 0.03,
          },
          "start+=0.1"
        )
        .add(() => {
          t.preview.DOM.el.classList.add("preview__item--open");
        }, "start+=0.1")
        .to(
          t.preview.DOM.titleChars,
          {
            duration: 1.5,
            ease: "expo.inOut",
            opacity: 1,
            y: "0%",
            stagger: 0.05,
          },
          "start+=0.6"
        )
        .to(
          [t.preview.DOM.imgWrap, t.preview.DOM.image],
          {
            duration: 1.5,
            ease: "expo.inOut",
            opacity: 1,
            y: "0%",
            rotationX: 0,
          },
          "start+=0.5"
        )
        .to(
          t.preview.DOM.imgWrap,
          { duration: 1.5, ease: "expo.inOut", opacity: 1 },
          "start+=0.5"
        )
        .to(
          t.preview.DOM.backCtrl,
          {
            duration: 1.5,
            ease: "expo",
            startAt: { x: "20%" },
            x: "0%",
            opacity: 1,
          },
          "start+=1.5"
        )
        .to(
          t.preview.DOM.content,
          {
            duration: 1.5,
            ease: "expo",
            startAt: { y: "20%" },
            y: "0%",
            opacity: 1,
          },
          "start+=1.5"
        );
    }
    hideContent(t) {
      if (!this.isContentOpen) return !1;
      (this.isContentOpen = !1),
        Ii.timeline({
          onComplete: () => {
            t.preview.DOM.el.classList.remove("preview__item--open"),
              this.DOM.el.classList.remove("grid--inactive");
          },
        })
          .addLabel("start", 0)
          .to(
            t.preview.DOM.titleChars,
            {
              duration: 1.5,
              ease: "expo.inOut",
              opacity: 0,
              y: "100%",
              stagger: -0.04,
            },
            "start"
          )
          .to(
            t.preview.DOM.imgWrap,
            { duration: 1.5, ease: "expo.inOut", y: "100%", rotationX: -20 },
            "start"
          )
          .to(
            t.preview.DOM.image,
            { duration: 1.5, ease: "expo.inOut", y: "-100%" },
            "start"
          )
          .to(
            t.preview.DOM.backCtrl,
            { duration: 1.5, ease: "expo.inOut", x: "20%", opacity: 0 },
            "start"
          )
          .to(
            t.preview.DOM.content,
            { duration: 1.5, ease: "expo.inOut", y: "50%", opacity: 0 },
            "start"
          )
          .to(
            _n,
            {
              duration: 1,
              ease: "expo.inOut",
              opacity: 1,
              y: "0%",
              stagger: -0.03,
            },
            "start+=0.4"
          )
          .add(() => {
            for (const t of this.gridItems)
              (t.translationVals.y = t.rotationVals.y = t.rotationVals.x = 0),
                t.loopTransformAnimation();
          }, "start+=0.3")
          .to(
            this.DOM.items,
            {
              duration: 1,
              ease: "expo",
              opacity: 1,
              startAt: { scale: 0.2 },
              scale: 1,
              stagger: { amount: 0.2, grid: "auto", from: "center" },
            },
            "start+=1"
          );
    }
  }
  const vn = new (class {
    constructor(t) {
      (this.DOM = { el: t }),
        (this.DOM.svg = this.DOM.el.querySelector(".cursor__svg")),
        (this.DOM.circle = this.DOM.svg.querySelector(".cursor__svg-circle")),
        (this.DOM.circle.style.transformOrigin = "50% 50%"),
        (this.DOM.text = this.DOM.el.querySelector(".cursor__text")),
        (this.DOM.el.style.opacity = 0),
        (this.bounds = this.DOM.svg.getBoundingClientRect()),
        (this.renderedStyles = {
          tx: { previous: 0, current: 0, amt: 0.2 },
          ty: { previous: 0, current: 0, amt: 0.2 },
          txText: { previous: 0, current: 0, amt: 0.1 },
          tyText: { previous: 0, current: 0, amt: 0.1 },
          scale: { previous: 1, current: 1, amt: 0.15 },
        }),
        (this.onMouseMoveEv = () => {
          (this.renderedStyles.tx.previous =
            this.renderedStyles.tx.current =
            this.renderedStyles.txText.previous =
            this.renderedStyles.txText.current =
              Xi.x - this.bounds.width / 2),
            (this.renderedStyles.ty.previous =
              this.renderedStyles.ty.current =
              this.renderedStyles.tyText.previous =
              this.renderedStyles.tyText.current =
                Xi.y - this.bounds.height / 2),
            Ii.to(this.DOM.el, {
              duration: 0.9,
              ease: "Power3.easeOut",
              opacity: 1,
            }),
            requestAnimationFrame(() => this.render()),
            window.removeEventListener("mousemove", this.onMouseMoveEv);
        }),
        window.addEventListener("mousemove", this.onMouseMoveEv);
    }
    enter() {
      this.renderedStyles.scale.current = 1.5;
    }
    leave() {
      this.renderedStyles.scale.current = 1;
    }
    render() {
      (this.renderedStyles.tx.current = this.renderedStyles.txText.current =
        Xi.x - this.bounds.width / 2),
        (this.renderedStyles.ty.current = this.renderedStyles.tyText.current =
          Xi.y - this.bounds.height / 2);
      for (const t in this.renderedStyles)
        this.renderedStyles[t].previous = Bi(
          this.renderedStyles[t].previous,
          this.renderedStyles[t].current,
          this.renderedStyles[t].amt
        );
      (this.DOM.svg.style.transform = `translateX(${this.renderedStyles.tx.previous}px) translateY(${this.renderedStyles.ty.previous}px)`),
        (this.DOM.text.style.transform = `translateX(${this.renderedStyles.txText.previous}px) translateY(${this.renderedStyles.tyText.previous}px)`),
        (this.DOM.circle.style.transform = `scale(${this.renderedStyles.scale.previous})`),
        requestAnimationFrame(() => this.render());
    }
  })(document.querySelector(".cursor"));
  var yn;
  ((yn = ".grid__item-img"),
  new Promise((t, e) => {
    Fi(document.querySelectorAll(yn), { background: !0 }, t);
  })).then(() => {
    document.body.classList.remove("loading");
    const t = new gn(document.querySelector(".grid"));
    t.on("mouseEnterItem", (t) => (vn.DOM.text.innerHTML = t)),
      t.on("mouseLeaveItem", (t) => (vn.DOM.text.innerHTML = ""));
  }),
    [...document.querySelectorAll("a, button, .grid__item")].forEach((t) => {
      t.addEventListener("mouseenter", () => vn.enter()),
        t.addEventListener("mouseleave", () => vn.leave());
    });
})();
