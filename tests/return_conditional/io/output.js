test0: {
  function f() {
    if (window.wizAssets && window.wizAssets.initialize) {
      window.wizAssets.initialize(e, function () {
        console.error("failed to init wizAssets"), window.wizAssets = null, e();
      });
      return;
    }
    return e();
  }
}
test1: {
  function f() {
    if (e.bodyUsed) {
      return Promise.reject(new TypeError("Already read"));
    }
    e.bodyUsed = !0;
    return;
  }
}
test2: {
  function f() {
    if (this._bodyArrayBuffer) {
      return s(this) || Promise.resolve(this._bodyArrayBuffer);
    }
    return this.blob().then(l);
  }
}
test3: {
  function f() {
    if (M.indexOf(t) > -1) {
      return t;
    }
    return e;
  }
}
test4: {
  function f() {
    if (a >= 55296 && a <= 56319 && i > n + 1 && (o = t.charCodeAt(n + 1), o >= 56320 && o <= 57343)) {
      return 1024 * (a - 55296) + o - 56320 + 65536;
    }
    return a;
  }
}
test5: {
  function f() {
    if (typeof e === h) {
      return e.replace(/[^\d\.]/g, "").split(".")[0];
    }
    return a;
  }
}
test6: {
  function f() {
    if (i === l) {
      return a;
    }
    return i;
  }
}
test7: {
  function f() {
    if (i === l) {
      return a;
    }
    return i;
  }
}
test8: {
  function f() {
    if (i || (i = s.valid(s.coerce(e)))) {
      return s.satisfies(i, t);
    }
    console.error("Could not validate version", e);
    return !1;
  }
}
test9: {
  function f() {
    if (i) {
      return i.version;
    }
    return null;
  }
}
test10: {
  function f() {
    if (i) {
      return i.version;
    }
    return null;
  }
}
test11: {
  function f() {
    if (this instanceof A) {
      K("comparator", e, t);
      this.loose = t;
      this.parse(e);
      this.semver === Ye ? this.value = "" : this.value = this.operator + this.semver.version;
      K("comp", this);
      return;
    }
    return new A(e, t);
  }
}
test12: {
  function f() {
    if (e.loose === t) {
      return e;
    }
    return new S(e.raw, t);
  }
}
test13: {
  function f() {
    if (i && i.prerelease.length) {
      return i.prerelease;
    }
    return null;
  }
}
test14: {
  function f() {
    if (null == t) {
      return null;
    }
    return n((t[1] || "0") + "." + (t[2] || "0") + "." + (t[3] || "0"));
  }
}
test15: {
  function f() {
    if (window.wizAssets) {
      if (window.resolveLocalFileSystemURL && window.WkWebView) {
        return window.resolveLocalFileSystemURL(_.CDV_PATH + "/" + e, function (t) {
          var i = window.WkWebView.convertFilePath(t.toURL());
          return d(null, e, i);
        }, function (t) {
          console.error(new Error("assetPreloading ui error" + t));
          return d("emptyPath", e);
        });
      }
      return d(null, e, _.CDV_PATH + "/" + e);
    }
    return d(null, e, window.Config.uiUrl + "/" + e);
  }
}
test16: {
  function f() {
    if (window.gui.isConnected) {
      return y.setTimeout(v.downloadFile, c, t, e, n, a);
    }
    return window.setTimeout(v.downloadFile, c, t, e, n, a);
  }
}
test17: {
  function f() {
    if (0 === s) {
      return i && i(o);
    }
    p(e, !1, function (t, i) {
      m(f, e[i], t, n, i);
    }, null);
    return;
  }
}
test18: {
  function f() {
    if (i) {
      return i(o);
    }
    return console.error(o);
  }
}
test19: {
  function f() {
    if (o) {
      return o(s);
    }
    return console.error(s);
  }
}
test20: {
  function f() {
    if (null === e.getParent()) {
      return e === window.gui.wBody;
    }
    return r(e.getParent());
  }
}
test21: {
  function f() {
    if (e[t] < i[t]) {
      return n;
    }
    if (e[t] > i[t]) {
      return o;
    }
    return 0;
  }
}
test22: {
  function f() {
    if (e) {
      return e = e.replace(/[<>"']/g, function (e) {
        return C[e];
      });
    }
    return e;
  }
}
test23: {
  function f() {
    if (t) {
      return i + " " + t;
    }
    return i;
  }
}
test24: {
  function f() {
    if (isNaN(e) || null === e) {
      return "";
    }
    T = null !== T ? T : l("ui.common.numberSeparator");
    return e.toString().replace(b, T);
  }
}
test25: {
  function f() {
    if (n) {
      return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)];
    }
    return null;
  }
}
test26: {
  function f() {
    if (0 === t) {
      return 0;
    }
    return (e % t + t) % t;
  }
}
test27: {
  function f() {
    if (n >= 1) {
      return n + " " + l("ui.time.months", n);
    }
    t = Math.floor(t);
    return t + " " + l("ui.time.days", t);
  }
}
test28: {
  function f() {
    if (A) {
      console.error(new Error("unable to open url " + e + ": in app browser is already opened"));
      return null;
    }
    A = window.cordova.InAppBrowser.open(e, "_blank", "closebuttoncaption=" + l("tablet.common.backToGame"));
    A.addEventListener("exit", S);
    return A;
  }
}
test29: {
  function f() {
    if (t[e] < i[e]) {
      return -1;
    }
    if (t[e] > i[e]) {
      return 1;
    }
    return 0;
  }
}
test30: {
  function f() {
    if ("string" != typeof o) {
      return -1;
    }
    return o.localeCompare(n[e], t);
  }
}
test31: {
  function f() {
    if (u) {
      return c + "[" + e + "]";
    }
    if (void 0 === t[1]) {
      return e;
    }
    return n(e, t);
  }
}
test32: {
  function f() {
    if (e) {
      return n(e);
    }
    r = t;
    l = i;
    n();
    return;
  }
}
test33: {
  function f() {
    if (u) {
      return c + "[" + e + "]";
    }
    return e;
  }
}
test34: {
  function f() {
    if (i) {
      return o(i, arguments);
    }
    a.error("getText: no getText was found for", e, "in", c);
    return t.getTextFailover.apply(null, arguments);
  }
}
test35: {
  function f() {
    if (t) {
      return o(t, arguments);
    }
    a.error("getTextFailover: no failover getText was found for", e, "in", d);
    return c + "[?" + e + "]";
  }
}
test36: {
  function f() {
    if (h(e)) {
      return c(e);
    }
    return e;
  }
}
test37: {
  function f() {
    if (i.length) {
      return n.apply(this, i);
    }
    return n;
  }
}
test38: {
  function f() {
    if (null == e) {
      if (void 0 === e) {
        return At;
      }
      return It;
    }
    if (St && St in Object(e)) {
      return f(e);
    }
    return g(e);
  }
}
test39: {
  function f() {
    if (w(e)) {
      return x(e);
    }
    return R(e);
  }
}
test40: {
  function f() {
    if (++t < i) {
      return {
        value: e[t],
        key: t
      };
    }
    return null;
  }
}
test41: {
  function f() {
    if (i.done) {
      return null;
    }
    t++;
    return {
      value: i.value,
      key: t
    };
  }
}
test42: {
  function f() {
    if (i < n) {
      return {
        value: e[o],
        key: o
      };
    }
    return null;
  }
}
test43: {
  function f() {
    if (t) {
      return B(t);
    }
    return k(e);
  }
}
test44: {
  function f() {
    if (t === t) {
      return Z(e, t, i);
    }
    return K(e, J, i);
  }
}
test45: {
  function f() {
    if (ji) {
      return ji.call(e);
    }
    return "";
  }
}
test46: {
  function f() {
    if ("0" == t && 1 / e == -qi) {
      return "-0";
    }
    return t;
  }
}
test47: {
  function f() {
    if (le(e)) {
      return ce(e);
    }
    return re(e);
  }
}
test48: {
  function f() {
    if (null == e) {
      return "";
    }
    return ie(e);
  }
}
test49: {
  function f() {
    if (e) {
      return i(e);
    }
    if (t) {
      s(n);
      return;
    }
    return i(null);
  }
}
test50: {
  function f() {
    if (t.apply(this, s)) {
      return n(o);
    }
    i.apply(null, [null].concat(s));
    return;
  }
}
test51: {
  function f() {
    if (e) {
      return i(e);
    }
    s(o);
    return;
  }
}
test52: {
  function f() {
    if (e) {
      return i(e);
    }
    if (t) {
      a(n);
      return;
    }
    return i(null);
  }
}
test53: {
  function f() {
    if (h(e)) {
      return e;
    }
    return dt(function (t, i) {
      var n = !0;
      t.push(function () {
        var e = arguments;
        n ? pt(function () {
          i.apply(null, e);
        }) : i.apply(null, e);
      }), e.apply(this, t), n = !1;
    });
  }
}
test54: {
  function f() {
    if (null == t) {
      0;
      return;
    }
    return t[e];
  }
}
test55: {
  function f() {
    if (e) {
      return n(e);
    }
    o(i);
    return;
  }
}
test56: {
  function f() {
    if (e) {
      return i(e);
    }
    o[t] = n;
    i();
    return;
  }
}
test57: {
  function f() {
    if (i < n) {
      return -1;
    }
    if (i > n) {
      return 1;
    }
    return 0;
  }
}
test58: {
  function f() {
    if (i) {
      return t(i);
    }
    t(null, {
      value: e,
      criteria: n
    });
    return;
  }
}
test59: {
  function f() {
    if (e) {
      return i(e);
    }
    i(null, ee(t.sort(n), De("value")));
    return;
  }
}
test60: {
  function f() {
    if (e) {
      return e;
    }
    return Ci && Ci.binding && Ci.binding("util");
  }
}
test61: {
  function f() {
    if (0 === a) {
      n(i, t);
      y.push(i);
      return;
    }
    w[i] = a;
    V(o, function (r) {
      if (!e[r]) throw new Error("async.auto task `" + i + "` has a non-existent dependency `" + r + "` in " + o.join(", "));
      s(r, function () {
        a--, 0 === a && n(i, t);
      });
    });
    return;
  }
}
test62: {
  function f() {
    if (e) {
      return t(e);
    }
    return t(null, a(arguments, 1));
  }
}
test63: {
  function f() {
    if (i) {
      return t(i);
    }
    return t(null, {
      key: n,
      val: e
    });
  }
}
test64: {
  function f() {
    if (n || o === e.length) {
      return t.apply(null, arguments);
    }
    i(a(arguments, 1));
    return;
  }
}
test65: {
  function f() {
    if (t > 9) {
      return t;
    }
    return "0" + t;
  }
}
test66: {
  function f() {
    if (e <= 0) {
      return 1;
    }
    return 1 + e / 100;
  }
}
test67: {
  function f() {
    if ("number" != typeof e || "number" != typeof t) {
      console.error("xpFormula: one of getGroupXPCoeff's params is not a number", {
        totalPlayerLevels: e,
        totalMobLevels: t
      });
      return i;
    }
    e - s > t ? i = t / e : e + 2 * s < t && (i = (e + 2 * s) / t);
    return i;
  }
}
test68: {
  function f() {
    if ("number" != typeof e.xp || "number" != typeof e.level) {
      console.error("xpFormula: mob xp or level is not a number for mob: " + e.id, {
        xp: e.xp,
        level: e.level
      });
      return;
    }
    m += e.level;
    e.level > p && (p = e.level);
    f += i(e.xp);
    return;
  }
}
test69: {
  function f() {
    if (isNaN(a)) {
      e.error(new Error(t + " for " + n + " is not a number, caller: " + o));
      return -1;
    }
    return a;
  }
}
test70: {
  function f() {
    if (e.server) {
      return e.server;
    }
    return "https://proxyconnection.touch.dofus.com";
  }
}
test71: {
  function f() {
    if (e) {
      return t(e);
    }
    i.imgCrossOrigin = i.assetsUrl.match(/^https?:\/\/.+?:.+?@.+?/) ? void 0 : "anonymous";
    t(null, i);
    return;
  }
}
test72: {
  function f() {
    if (window.Primus) {
      return e();
    }
    p.loadScript(o() + "/build/primus.js", e);
    return;
  }
}
test73: {
  function f() {
    if (window.Config) {
      if (e) {
        return t.setLanguage(e, i);
      }
      return i();
    }
    s(e, function (e, t) {
      if (e) {
        return i(e);
      }
      window.Config = t;
      i();
      return;
    });
    return;
  }
}
test74: {
  function f() {
    if (e) {
      return i(e);
    }
    window.Config = t;
    i();
    return;
  }
}
test75: {
  function f() {
    if (e) {
      return n(e);
    }
    i.initialize(window.Config, t.logger);
    N.initialize(i, y.getText);
    return n();
  }
}
test76: {
  function f() {
    if (e) {
      return t(e);
    }
    window.Config.language = i.language;
    t();
    return;
  }
}
test77: {
  function f() {
    if (e) {
      return t.reloadAppOnFatalError(e);
    }
    E.initHaapiModule(t.logger, t.connectionManager);
    C.init(window.Config.analytics, E);
    I.initialize(t.logger, window.Config.adjust, window.Adjust, window.AdjustConfig, window.AdjustEvent);
    w.backToLogin();
    window.gui.initialize(window.Config);
    window.isoEngine && window.isoEngine.initialize();
    return;
  }
}
test78: {
  function f() {
    if (n) {
      return i(n);
    }
    t.accessGameServer(e, i);
    return;
  }
}
test79: {
  function f() {
    if (e === P) {
      console.warn("Already accessing this game server (" + e + ")");
      return t.once("accessGameEnd", i);
    }
    return i(new Error("Already accessing game server " + P + " (while trying to access " + e + ")"));
  }
}
test80: {
  function f() {
    if (n) {
      return i(n);
    }
    t.accessGameServer(e, i);
    return;
  }
}
test81: {
  function f() {
    if (i) {
      return i.length;
    }
    return 0;
  }
}
test82: {
  function f() {
    if (void 0 === n) {
      i[e] = [t];
      return this;
    }
    n.push(t);
    return this;
  }
}
test83: {
  function f() {
    if (void 0 !== t) {
      return t.slice();
    }
    return [];
  }
}
test84: {
  function f() {
    if (i) {
      t = new i();
      E[e] = t;
      return t;
    }
    w.error("Unknown writer type:", e);
    return;
  }
}
test85: {
  function f() {
    if (w.group && y.groups) {
      w.group(s, o);
      t.apply(w, a);
      w.groupEnd();
      return;
    }
    "string" == typeof a[0] && (s = s + " " + a.shift());
    e = [s, o].concat(a);
    t.apply(w, e);
    return;
  }
}
test86: {
  function f() {
    if (u.indexOf(h) !== -1) {
      return JSON.stringify("[Circular reference]");
    }
    u.push(h);
    return "[" + h.map(i).join(",") + "]";
  }
}
test87: {
  function f() {
    if (!e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) {
      return this.parseOpera9(e);
    }
    if (e.stack) {
      return this.parseOpera11(e);
    }
    return this.parseOpera10(e);
  }
}
test88: {
  function f() {
    if (this.getIsEval()) {
      if (e) {
        return "[eval] (" + e + ":" + t + ":" + i + ")";
      }
      return "[eval]:" + t + ":" + i;
    }
    if (n) {
      return n + " (" + e + ":" + t + ":" + i + ")";
    }
    return e + ":" + t + ":" + i;
  }
}
test89: {
  function f() {
    if (Boolean(o)) {
      return o;
    }
    if (Boolean(i) && (n = n.map(function (e) {
      return i + e;
    }), o = a(e, n), Boolean(o))) {
      return o;
    }
    return null;
  }
}
test90: {
  function f() {
    if (null !== t && "" !== t) {
      if (t.match(/(?:^\d|:)/)) {
        return '[id="' + t + '"]';
      }
      return "#" + t;
    }
    return null;
  }
}
test91: {
  function f() {
    if (/^[a-z_-][a-z\d_-]*$/i.test(e)) {
      return e;
    }
    return null;
  }
}
test92: {
  function f() {
    if (e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    }
    return typeof e;
  }
}
test93: {
  function f() {
    if (T.length > 0) {
      return T[0];
    }
    return null;
  }
}
test94: {
  function f() {
    if (t) {
      return t.hasClassName("modal");
    }
    return null;
  }
}
test95: {
  function f() {
    if (!i && w && w.indexOf(e) !== -1) {
      window.dofus.sendMessage("LeaveDialogRequestMessage", null);
      return s();
    }
    a(e, t);
    return;
  }
}
test96: {
  function f() {
    if (w && w.indexOf(e) !== -1) {
      window.gui.isConnected && window.dofus.sendMessage("LeaveDialogRequestMessage", null);
      return s();
    }
    a(e);
    return;
  }
}
test97: {
  function f() {
    if (i) {
      return "[" + o.colors[i][0] + "m" + e + "[" + o.colors[i][1] + "m";
    }
    return e;
  }
}
test98: {
  function f() {
    if (M(i)) {
      return e.stylize(RegExp.prototype.toString.call(i), "regexp");
    }
    return e.stylize("[Object]", "special");
  }
}
test99: {
  function f() {
    if (v(t)) {
      return e.stylize("" + t, "number");
    }
    if (f(t)) {
      return e.stylize("" + t, "boolean");
    }
    if (g(t)) {
      return e.stylize("null", "null");
    }
    0;
    return;
  }
}
test100: {
  function f() {
    if (o > 60) {
      return i[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + i[1];
    }
    return i[0] + t + " " + e.join(", ") + " " + i[1];
  }
}
test101: {
  function f() {
    if (e < 10) {
      return "0" + e.toString(10);
    }
    return e.toString(10);
  }
}
test102: {
  function f() {
    if (void 0 === n) {
      return t;
    }
    return n;
  }
}
test103: {
  function f() {
    if (n) {
      n !== t && console.info(e, "interaction REFUSED: owned by", a);
      return n === t;
    }
    if (s && e !== s && r.isFeatureOn("scrollerBoundToWrapper")) {
      console.info(e, "interaction REFUSED: priorityBehavior is", s);
      return;
    }
    a = e;
    n = t;
    h.emit("handleTaken", n);
    return !0;
  }
}
test104: {
  function f() {
    if (e + 2 * N >= a.screenWidth) {
      m();
      y();
      r.abortInteraction();
      return;
    }
    if (Date.now() - x > 5e3) {
      return f();
    }
    0;
    return;
  }
}
test105: {
  function f() {
    if (e) {
      this._openedTimestampTabs[e] = this._scBalanceWhenOpenTabs[e] = this._hcBalanceWhenOpenTabs[e] = 0;
      return;
    }
    return this._openedTimestamp = this._scBalanceWhenOpen = this._hcBalanceWhenOpen = 0;
  }
}
test106: {
  function f() {
    if (t) {
      return this.insertChildBefore(e, t);
    }
    return this.appendChild(e);
  }
}
test107: {
  function f() {
    if (t) {
      return t.getPropertyValue(e);
    }
    return null;
  }
}
test108: {
  function f() {
    if (t === !0 || t === !1) {
      return this.rootElement.classList.toggle(e, t);
    }
    return this.rootElement.classList.toggle(e);
  }
}
test109: {
  function f() {
    if (i) {
      return "[" + o.colors[i][0] + "m" + e + "[" + o.colors[i][1] + "m";
    }
    return e;
  }
}
test110: {
  function f() {
    if (M(i)) {
      return e.stylize(RegExp.prototype.toString.call(i), "regexp");
    }
    return e.stylize("[Object]", "special");
  }
}
test111: {
  function f() {
    if (v(t)) {
      return e.stylize("" + t, "number");
    }
    if (f(t)) {
      return e.stylize("" + t, "boolean");
    }
    if (g(t)) {
      return e.stylize("null", "null");
    }
    0;
    return;
  }
}
test112: {
  function f() {
    if (o > 60) {
      return i[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + i[1];
    }
    return i[0] + t + " " + e.join(", ") + " " + i[1];
  }
}
test113: {
  function f() {
    if (e < 10) {
      return "0" + e.toString(10);
    }
    return e.toString(10);
  }
}
test114: {
  function f() {
    if (o() || 1 !== e.which) {
      n();
      return;
    }
    t.emit("dom.touchend", e);
    return;
  }
}
test115: {
  function f() {
    if ("string" == typeof e) {
      return document.createTextNode(e);
    }
    return e;
  }
}
test116: {
  function f() {
    if (1 in arguments && this.contains(t) === i) {
      return i;
    }
    return e.prototype.toggle.call(this, t, i);
  }
}
test117: {
  function f() {
    if (t && "" !== t) {
      return t.split(/\s+/);
    }
    return [];
  }
}
test118: {
  function f() {
    if (_ !== e || g.length) {
      g.push(e);
      return;
    }
    t.stopPropagation();
    return o();
  }
}
test119: {
  function f() {
    if (window._hoverBehavior) {
      return console.error("hover behavior initialised more than one time.");
    }
    window._hoverBehavior = !0;
    y = e;
    y.on("dom.touching", l);
    return;
  }
}
test120: {
  function f() {
    if (n("audio/" + t + ".mp3")) {
      return i("FROM_MISSING_AUDIO_LIST");
    }
    C.push(function (n) {
      c.downloadFile(e + t + ".mp3", "audio/" + t + ".mp3", function (e) {
        n();
        return i(null, e);
      }, function (e) {
        n();
        return i(e);
      });
    });
    return;
  }
}
test121: {
  function f() {
    if (n("audio/" + t + ".mp3")) {
      return "FROM_MISSING_AUDIO_LIST";
    }
    return e + t + ".mp3";
  }
}
test122: {
  function f() {
    if (h.isIOSApp && p.isAvailable()) {
      return p;
    }
    if (h.isAndroidApp && m.isAvailable()) {
      if ("music" === e || "ambient" === e) {
        return m.LoopYanap;
      }
      if ("sfx" === e || "ui" === e) {
        return m.SoundYanap;
      }
      if (void 0 === e) {
        return m.SoundYanap;
      }
      console.error(new Error("audioManager: unknown channelId `" + e + "`"));
      return;
    }
    return null;
  }
}
test123: {
  function f() {
    if (n) {
      return i = new n();
    }
    this.freeSoundPool.length > 0 ? (i = this.freeSoundPool.pop(), i.init()) : i = new s();
    return i;
  }
}
test124: {
  function f() {
    if (i) {
      return i;
    }
    i = this.getEmptySound(t, e);
    this.soundsById[e] = i;
    i.setId(e);
    return i;
  }
}
test125: {
  function f() {
    if (t) {
      return t;
    }
    if (t = this.soundsById[e]) {
      return t;
    }
    if (t = this.soundArchiveById[e]) {
      this.soundArchive.removeByRef(t.poolRef);
      t.poolRef = null;
      delete this.soundArchiveById[e];
      this.soundsById[e] = t;
      return t;
    }
    return null;
  }
}
test126: {
  function f() {
    if (t) {
      return t;
    }
    if (t = this.soundGroupArchiveById[e]) {
      this.soundGroupArchive.removeByRef(t.poolRef);
      t.poolRef = null;
      delete this.soundGroupArchiveById[e];
      t.verifySounds();
      this.soundGroupsById[e] = t;
      return t;
    }
    return null;
  }
}
test127: {
  function f() {
    if (r) {
      r.playLoopSound(t, i, n, o, a, s);
      return;
    }
    return console.warn('Channel id "' + e + '" does not exist.');
  }
}
test128: {
  function f() {
    if (200 !== ~~o.status && 0 !== ~~o.status) {
      return e("xhrError:" + o.status);
    }
    n.audioContext ? n.audioContext.decodeAudioData(o.response, t, e) : (n.rawAudioData = o.response, n._finalizeLoad(null));
    return;
  }
}
test129: {
  function f() {
    if (t) {
      return e(t);
    }
    i(n);
    return;
  }
}
test130: {
  function f() {
    if (this.id) {
      if (this._loaded) {
        return e && e(null, this);
      }
      e && this._onLoadQueuedCallback.push(e);
      if (this._loading) {
        0;
        return;
      }
      this._loading = !0;
      return this._load();
    }
    return e && e(new Error("noId"));
  }
}
test131: {
  function f() {
    if (e) {
      e.stopping || e.stop(function () {
        c.freeSound(e);
        e = null;
        return t && t();
      });
      return;
    }
    return t && t();
  }
}
test132: {
  function f() {
    if (o) {
      e.unload();
      m.loopSound = null;
      return;
    }
    e.play(t * m.volume, i, n);
    return;
  }
}
test133: {
  function f() {
    if (e) {
      m.nextLoop.unload();
      m.nextLoop = null;
      return;
    }
    s(m.loopSound);
    l();
    return;
  }
}
test134: {
  function f() {
    if (t) {
      return e(t);
    }
    n(i);
    return;
  }
}
test135: {
  function f() {
    if (n.isAvailable()) {
      a.call(this);
      this.media = null;
      this.uri = null;
      this.errorOccured = !1;
      r || (window.Media && window.Media.shouldReleaseOnMemoryWarning && window.Media.shouldReleaseOnMemoryWarning(!1), r = !0);
      return;
    }
    return console.error(new Error("SoundCordova: cordova media plugin is not available"));
  }
}
test136: {
  function f() {
    if (e) {
      return o._finalizeLoad(e);
    }
    n(t);
    return;
  }
}
test137: {
  function f() {
    if (this.media) {
      this.media.stop();
      return a.prototype.stop.call(this, e);
    }
    return e && e();
  }
}
test138: {
  function f() {
    if (n()) {
      c.call(this);
      this.audioMode = null;
      this.media = null;
      this.uri = null;
      this.errorOccured = !1;
      return;
    }
    return console.error(new Error("YanapAudioInstance: Yanap plugin is not available"));
  }
}
test139: {
  function f() {
    if (e) {
      return n._finalizeLoad(e);
    }
    i(t);
    return;
  }
}
test140: {
  function f() {
    if (this.media) {
      this.media.stop();
      return c.prototype.stop.call(this, e);
    }
    return e && e();
  }
}
test141: {
  function f() {
    if (i._messageType) {
      t.emit(i._messageType, i);
      return;
    }
    console.error(new Error("emitMessage: missing message type for " + e._messageType));
    return;
  }
}
test142: {
  function f() {
    if (d !== this) {
      return console.warn("onOnline - Ignoring event: possible missing call to Primus#destroy");
    }
    f || (f = !0, h && (t.emit("online"), d.readyState !== o.CLOSED || d.recovery.reconnecting() || window.setTimeout(function () {
      d.readyState !== o.CLOSED || d.recovery.reconnecting() || d.open();
    }, 0)));
    return;
  }
}
test143: {
  function f() {
    if (e) {
      return this.additionnalPoints;
    }
    return 0;
  }
}
test144: {
  function f() {
    if (this._isOffi) {
      return this.getNickname() + n + o;
    }
    return this.toString();
  }
}
test145: {
  function f() {
    if (void 0 === t) {
      c.error(new Error("ankAnalytics.getEventId: " + e + " is missing from the event map"));
      return -1;
    }
    return t;
  }
}
test146: {
  function f() {
    if (e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    }
    return typeof e;
  }
}
test147: {
  function f() {
    if (a) {
      return "getUTC";
    }
    return "get";
  }
}
test148: {
  function f() {
    if (a) {
      return 0;
    }
    return n.getTimezoneOffset();
  }
}
test149: {
  function f() {
    if (w() < 12) {
      return r.i18n.timeNames[0];
    }
    return r.i18n.timeNames[1];
  }
}
test150: {
  function f() {
    if (w() < 12) {
      return r.i18n.timeNames[2];
    }
    return r.i18n.timeNames[3];
  }
}
test151: {
  function f() {
    if (w() < 12) {
      return r.i18n.timeNames[4];
    }
    return r.i18n.timeNames[5];
  }
}
test152: {
  function f() {
    if (w() < 12) {
      return r.i18n.timeNames[6];
    }
    return r.i18n.timeNames[7];
  }
}
test153: {
  function f() {
    if (p) {
      return "GMT";
    }
    if (a) {
      return "UTC";
    }
    return (String(n).match(t) || [""]).pop().replace(i, "").replace(/GMT\+0000/g, "UTC");
  }
}
test154: {
  function f() {
    if (e in S) {
      return S[e]();
    }
    return e.slice(1, e.length - 1);
  }
}
test155: {
  function f() {
    if (p() === t && h() === i && u() === n) {
      if (r) {
        return "Tdy";
      }
      return "Today";
    }
    if (g() === t && f() === i && m() === n) {
      if (r) {
        return "Ysd";
      }
      return "Yesterday";
    }
    if (y() === t && v() === i && _() === n) {
      if (r) {
        return "Tmw";
      }
      return "Tomorrow";
    }
    return a;
  }
}
test156: {
  function f() {
    if (null === e) {
      return "null";
    }
    if (void 0 === e) {
      return "undefined";
    }
    if ("object" !== n(e)) {
      return n(e);
    }
    if (Array.isArray(e)) {
      return "array";
    }
    return {}.toString.call(e).slice(8, -1).toLowerCase();
  }
}
test157: {
  function f() {
    if (e.isSpectator) {
      t._isSpectator = !0;
      return;
    }
    t._monsterMap = {};
    t._isSpectator = !1;
    t._currentFightId = null;
    return;
  }
}
test158: {
  function f() {
    if (this._teamHPMap[0][t]) {
      return 0;
    }
    if (this._teamHPMap[1][t]) {
      return 1;
    }
    return -1;
  }
}
test159: {
  function f() {
    if ("%" === e[i - 1]) {
      return t * e.substr(0, i - 1) / 100;
    }
    "px" === e.substr(i - 2) && (e = e.substr(0, i - 2));
    return e *= 1;
  }
}
test160: {
  function f() {
    if (i) {
      return t(i);
    }
    if (n) {
      return t(null, n);
    }
    return o("map", {
      "class": e
    }, function (i, n) {
      if (i) return t(i);
      var o,
        a = f.getKey(e);
      for (var s in n) {
        o = n[s] && void 0 !== n[s][a];
        break;
      }
      o ? g.putAll(e, n, function (e) {
        e && console.warn("_getAllDataMap putAll: Caching data on disk failed with error: " + e);
      }) : console.warn("Request to cache table " + e + ' which has no "' + a + '" key; table will not be cached.');
      return t(null, n);
    });
  }
}
test161: {
  function f() {
    if (n) {
      return t(n);
    }
    i[e] = o;
    return t();
  }
}
test162: {
  function f() {
    if (e) {
      return t(e);
    }
    return t(null, i);
  }
}
test163: {
  function f() {
    if (n) {
      return i(n);
    }
    return i(null, s(o, e, t));
  }
}
test164: {
  function f() {
    if (t) {
      return i(t);
    }
    n[e] = o;
    return i();
  }
}
test165: {
  function f() {
    if (e) {
      return i(e);
    }
    return i(null, n);
  }
}
test166: {
  function f() {
    if (e === t) {
      return i();
    }
    o("dictionary", {
      lang: e
    }, function (e, t) {
      e ? a.push(e) : u = t, i();
    });
    return;
  }
}
test167: {
  function f() {
    if (u || h) {
      o && console.error("Failed getting dictionaries: " + o);
      u ? w = e : (u = h, w = t);
      h || (h = u);
      n(function () {
        i(null, u, h);
      });
      return;
    }
    return window.dofus.reloadAppOnFatalError("No " + e + "/" + t + " dictionary: " + o);
  }
}
test168: {
  function f() {
    if (e) {
      return t(e);
    }
    t(null, i);
    return;
  }
}
test169: {
  function f() {
    if (Array.isArray(t)) {
      g.request(e, t, function (t, n, a) {
        if (t) return i(t);
        var s = {};
        for (var r in n) n[r][v] || (s[r] = n[r]);
        if (0 === a.length) return i(null, s);
        var l = {
          "class": e,
          ids: a
        };
        o("map", l, function (t, n) {
          if (t) return i(t);
          for (var o = 0, r = a.length; o < r; o++) {
            var l = a[o],
              c = n[l];
            c ? s[l] = c : n[l] = g.newDummyRecord(f.getKey(e), l);
          }
          g.put(e, n, function (e) {
            e && console.warn("getDataMap put: Caching data on disk failed with error:", e);
          });
          return i(null, s);
        });
      });
      return;
    }
    return i(new TypeError("Data ids should be passed as an array"));
  }
}
test170: {
  function f() {
    if (e) {
      return o(e);
    }
    o(null, a(t, n));
    return;
  }
}
test171: {
  function f() {
    if (t) {
      return i(t);
    }
    g.put(e, n, function (e) {
      e && console.warn("searchDataMap put: Caching search results on disk failed with error: " + e);
    });
    return i(null, n);
  }
}
test172: {
  function f() {
    if (i || 0 === i) {
      t.getDataMap(e, [i], function (t, o) {
        if (t) return n(t);
        var a = o[i];
        if (a) {
          return n(null, a);
        }
        return n("Missing ID #" + i + " in static data " + e);
      });
      return;
    }
    return n(new Error("You must pass an ID"));
  }
}
test173: {
  function f() {
    if (a) {
      return n(null, a);
    }
    return n("Missing ID #" + i + " in static data " + e);
  }
}
test174: {
  function f() {
    if (Array.isArray(i)) {
      return t.getDataArray(e, i, null, n);
    }
    if (i || 0 === i) {
      t.getDataMap(e, [i], function (e, t) {
        if (e) {
          return n(e);
        }
        return n(null, t[i]);
      });
      return;
    }
    return n(new Error("You must pass an ID"));
  }
}
test175: {
  function f() {
    if (e) {
      return n(e);
    }
    return n(null, t[i]);
  }
}
test176: {
  function f() {
    if (Array.isArray(e)) {
      return d(e, !0, t);
    }
    return c(e, !0, t);
  }
}
test177: {
  function f() {
    if (Array.isArray(e)) {
      return d(e, !1, t);
    }
    return c(e, !1, t);
  }
}
test178: {
  function f() {
    if (Array.isArray(e)) {
      return l(e, t);
    }
    return r(e, t);
  }
}
test179: {
  function f() {
    if ("string" == typeof e) {
      return e;
    }
    return e.toString();
  }
}
test180: {
  function f() {
    if (isNaN(t)) {
      return null;
    }
    return t;
  }
}
test181: {
  function f() {
    if (m.hasStringId(e)) {
      return n;
    }
    return o;
  }
}
test182: {
  function f() {
    if (p) {
      if (p.objectStoreNames.contains(e)) {
        d(e, t, i);
        return;
      }
      i(new Error("IndexedDB put failed: object store: " + e + " not found in disk cache"));
      return;
    }
    i(new Error("IndexedDB put failed: disk cache not yet initialized"));
    return;
  }
}
test183: {
  function f() {
    if (p) {
      if (p.objectStoreNames.contains(e)) {
        c(e, t, i);
        return;
      }
      i(new Error("IndexedDB request failed: object store: " + e + " not found in disk cache"));
      return;
    }
    i(new Error("IndexedDB request failed: disk cache not yet initialized"));
    return;
  }
}
test184: {
  function f() {
    if (i && p.objectStoreNames.contains(i)) {
      c(i, [e], function (i, n) {
        if (i) return t(i);
        var o = n[e];
        if (o) {
          if (p.objectStoreNames.contains(e)) {
            u(e, t);
            return;
          }
          t(new Error("IndexedDB request all failed: object store: " + e + " not found in disk cache"));
          return;
        }
        return t(null, null);
      });
      return;
    }
    t(new Error("IndexedDB isCacheComplete failed: cache completion not initialized"));
    return;
  }
}
test185: {
  function f() {
    if (o) {
      if (p.objectStoreNames.contains(e)) {
        u(e, t);
        return;
      }
      t(new Error("IndexedDB request all failed: object store: " + e + " not found in disk cache"));
      return;
    }
    return t(null, null);
  }
}
test186: {
  function f() {
    if (e) {
      return i(e);
    }
    return i();
  }
}
test187: {
  function f() {
    if (void 0 === e) {
      0;
      return;
    }
    return JSON.parse(e.substring(2));
  }
}
test188: {
  function f() {
    if (o.__prefetchedData && (o.__prefetchedIndex++, o.__prefetchedIndex < o.__prefetchedData.length)) {
      o.__decode(o.__prefetchedData.item(o.__prefetchedIndex), l);
      return t;
    }
    o.__find(i, e, l, r, n);
    return t;
  }
}
test189: {
  function f() {
    if (r >= t.__requests.length) {
      t.__active = !1;
      t.__requests = [];
      return;
    }
    s = t.__requests[r];
    s.op(i, s.args, n, o);
    return;
  }
}
test190: {
  function f() {
    if (e.Key.encode(t) > e.Key.encode(i)) {
      return 1;
    }
    if (t === i) {
      return 0;
    }
    return -1;
  }
}
test191: {
  function f() {
    if (e) {
      return "true";
    }
    return "false";
  }
}
test192: {
  function f() {
    if (isFinite(e)) {
      return e;
    }
    return "";
  }
}
test193: {
  function f() {
    if (Array.isArray(e[o])) {
      return e[o].map(function (e) {
        return a + encodeURIComponent(i(e));
      }).join(t);
    }
    return a + encodeURIComponent(i(e[o]));
  }
}
test194: {
  function f() {
    if (e) {
      g = !1;
      t.backToLogin();
      return i(e);
    }
    return i();
  }
}
test195: {
  function f() {
    if (e) {
      g = !1;
      t.backToLogin();
      return i(e);
    }
    return i();
  }
}
test196: {
  function f() {
    if (a) {
      return a;
    }
    return a = r.getItem("HAAPI_USERNAME") || "";
  }
}
test197: {
  function f() {
    if (a.login && a.password) {
      s.setValue("guestAccount", a, 1);
      return t(null, a);
    }
    return t({
      error: new Error("createGuest: wrong credential (login:" + a.login + "/password:" + a.password + ")")
    });
  }
}
test198: {
  function f() {
    if (e) {
      if (e.guestLogin) {
        if (e.guestPassword) {
          t.createApiKey({
            login: e.guestLogin,
            password: e.guestPassword,
            long_life_token: !1
          }, {
            saveKey: !0
          }, function (n) {
            if (n) {
              return i(n);
            }
            return _.account.validateGuestWithApiKey(window, u.postDirectly, e, function (e) {
              t.resetHaapiKey();
              if (e) {
                return i(e);
              }
              return i();
            });
          });
          return;
        }
        return i(new Error("Missing password"));
      }
      return i(new Error("Missing login"));
    }
    return i(new Error("Missing data"));
  }
}
test199: {
  function f() {
    if (n) {
      return i(n);
    }
    return _.account.validateGuestWithApiKey(window, u.postDirectly, e, function (e) {
      t.resetHaapiKey();
      if (e) {
        return i(e);
      }
      return i();
    });
  }
}
test200: {
  function f() {
    if (t) {
      return a(t);
    }
    n(e);
    i.username = e;
    return a(null, i);
  }
}
test201: {
  function f() {
    if (1 === arguments.length) {
      a = e;
      e = t.getHaapiUsername();
      if (u.getHaapiKey()) {
        return t.createToken(s);
      }
      return a({
        reason: "NOKEY"
      });
    }
    e = e.trim();
    t.createApiKey({
      login: e,
      password: i,
      long_life_token: o
    }, {
      saveKey: o
    }, function (e) {
      if (e) {
        return a(e);
      }
      return t.createToken(s);
    });
    return;
  }
}
test202: {
  function f() {
    if (e) {
      return a(e);
    }
    return t.createToken(s);
  }
}
test203: {
  function f() {
    if (e.status === m) {
      return t();
    }
    e.json().then(function (i) {
      var a = o(e),
        r = s(e.status, a);
      if (r) return t(r);
      if (i._statusCode || e.status > 599 || n(e.status, a)) throw i._statusCode = i._statusCode || e.status, i;
      t(null, i);
    })["catch"](t);
    return;
  }
}
test204: {
  function f() {
    if (!i || !n || n < e) {
      return t.resetHaapiKey();
    }
    return t.setHaapiKey(i, {
      save: !1
    });
  }
}
test205: {
  function f() {
    if (l) {
      return l;
    }
    return t.getHaapiKeyFromStorage();
  }
}
test206: {
  function f() {
    if (e) {
      return o(e, !1, !0).resolveObject(t);
    }
    return t;
  }
}
test207: {
  function f() {
    if (e - 48 < 10) {
      return e - 22;
    }
    if (e - 65 < 26) {
      return e - 65;
    }
    if (e - 97 < 26) {
      return e - 97;
    }
    return b;
  }
}
test208: {
  function f() {
    if (N.test(e)) {
      return m(e.slice(4).toLowerCase());
    }
    return e;
  }
}
test209: {
  function f() {
    if (x.test(e)) {
      return "xn--" + f(e);
    }
    return e;
  }
}
test210: {
  function f() {
    if (r.indexOf(e) === -1) {
      return l;
    }
    return e;
  }
}
test211: {
  function f() {
    if (e.lang) {
      if (e.nickname) {
        if (e.email) {
          if (e.password) {
            if (e.firstname) {
              if (e.lastname) {
                return null;
              }
              return new Error('Need "lastname" params');
            }
            return new Error('Need "firstname" params');
          }
          return new Error('Need "password" params');
        }
        return new Error('Need "email" params');
      }
      return new Error('Need "nickname" params');
    }
    return new Error('Need "lang" params');
  }
}
test212: {
  function f() {
    if (u) {
      return a(u);
    }
    return t(l, c, a);
  }
}
test213: {
  function f() {
    if (e) {
      return i(e);
    }
    c._lastUpdate = p;
    c._cachedResult = t;
    return a(o, s, t, function (e, t) {
      if (e) {
        return i(e);
      }
      return i(null, t, u);
    });
  }
}
test214: {
  function f() {
    if (e) {
      return i(e);
    }
    return i(null, t, u);
  }
}
test215: {
  function f() {
    if (e > 96) {
      return e - 87;
    }
    if (e > 64) {
      return e - 29;
    }
    return e - 48;
  }
}
test216: {
  function f() {
    if (e.offsetScore !== t.offsetScore) {
      return e.offsetScore - t.offsetScore;
    }
    if (e.abbrScore !== t.abbrScore) {
      return e.abbrScore - t.abbrScore;
    }
    if (e.zone.population !== t.zone.population) {
      return t.zone.population - e.zone.population;
    }
    return t.zone.name.localeCompare(e.zone.name);
  }
}
test217: {
  function f() {
    if (n instanceof r) {
      return n;
    }
    if ("string" == typeof n) {
      n = new r(n);
      k[e] = n;
      return n;
    }
    if (F[e] && t !== w && (i = w(F[e], w))) {
      n = k[e] = new r();
      n._set(i);
      n.name = z[e];
      return n;
    }
    return null;
  }
}
test218: {
  function f() {
    if (t) {
      return i.map(function (e) {
        var t = w(e);
        return {
          name: e,
          offset: t.utcOffset(new Date())
        };
      });
    }
    return i;
  }
}
test219: {
  function f() {
    if (this._z) {
      return this._z.abbr(this);
    }
    return e.call(this);
  }
}
test220: {
  function f() {
    if (I(n)) {
      return n.call(t, i);
    }
    return n;
  }
}
test221: {
  function f() {
    if (e.match(/\[[\s\S]/)) {
      return e.replace(/^\[|\]$/g, "");
    }
    return e.replace(/\\/g, "");
  }
}
test222: {
  function f() {
    if (e.isValid()) {
      t = P(t, e.localeData());
      fo[t] = fo[t] || R(t);
      return fo[t](e);
    }
    return e.localeData().invalidDate();
  }
}
test223: {
  function f() {
    if (t || !i) {
      return t;
    }
    this._longDateFormat[e] = i.match(po).map(function (e) {
      if ("MMMM" === e || "MM" === e || "DD" === e || "dddd" === e) {
        return e.slice(1);
      }
      return e;
    }).join("");
    return this._longDateFormat[e];
  }
}
test224: {
  function f() {
    if ("MMMM" === e || "MM" === e || "DD" === e || "dddd" === e) {
      return e.slice(1);
    }
    return e;
  }
}
test225: {
  function f() {
    if (I(o)) {
      return o(e, t, i, n);
    }
    return o.replace(/%d/i, e);
  }
}
test226: {
  function f() {
    if (I(i)) {
      return i(t);
    }
    return i.replace(/%s/i, t);
  }
}
test227: {
  function f() {
    if ("string" == typeof e) {
      return Mo[e] || Mo[e.toLowerCase()];
    }
    0;
    return;
  }
}
test228: {
  function f() {
    if (e < 0) {
      return Math.ceil(e) || 0;
    }
    return Math.floor(e);
  }
}
test229: {
  function f() {
    if (null != n) {
      J(this, e, n);
      t.updateOffset(this, i);
      return this;
    }
    return K(this, e);
  }
}
test230: {
  function f() {
    if (e.isValid()) {
      return e._d["get" + (e._isUTC ? "UTC" : "") + t]();
    }
    return NaN;
  }
}
test231: {
  function f() {
    if (e && i) {
      return i;
    }
    return t;
  }
}
test232: {
  function f() {
    if (r(uo, e)) {
      return uo[e](t._strict, t._locale);
    }
    return new RegExp(ie(e));
  }
}
test233: {
  function f() {
    if (e) {
      if (a(this._months)) {
        return this._months[e.month()];
      }
      return this._months[(this._months.isFormat || ea).test(t) ? "format" : "standalone"][e.month()];
    }
    if (a(this._months)) {
      return this._months;
    }
    return this._months.standalone;
  }
}
test234: {
  function f() {
    if (e) {
      if (a(this._monthsShort)) {
        return this._monthsShort[e.month()];
      }
      return this._monthsShort[ea.test(t) ? "format" : "standalone"][e.month()];
    }
    if (a(this._monthsShort)) {
      return this._monthsShort;
    }
    return this._monthsShort.standalone;
  }
}
test235: {
  function f() {
    if (i) {
      if ("MMM" === t) {
        o = Wo.call(this._shortMonthsParse, s);
        if (o !== -1) {
          return o;
        }
        return null;
      }
      o = Wo.call(this._longMonthsParse, s);
      if (o !== -1) {
        return o;
      }
      return null;
    }
    if ("MMM" === t) {
      o = Wo.call(this._shortMonthsParse, s);
      if (o !== -1) {
        return o;
      }
      o = Wo.call(this._longMonthsParse, s);
      if (o !== -1) {
        return o;
      }
      return null;
    }
    o = Wo.call(this._longMonthsParse, s);
    if (o !== -1) {
      return o;
    }
    o = Wo.call(this._shortMonthsParse, s);
    if (o !== -1) {
      return o;
    }
    return null;
  }
}
test236: {
  function f() {
    if (null != e) {
      pe(this, e);
      t.updateOffset(this, !0);
      return this;
    }
    return K(this, "Month");
  }
}
test237: {
  function f() {
    if (this._monthsParseExact) {
      r(this, "_monthsRegex") || ve.call(this);
      if (e) {
        return this._monthsShortStrictRegex;
      }
      return this._monthsShortRegex;
    }
    r(this, "_monthsShortRegex") || (this._monthsShortRegex = ta);
    if (this._monthsShortStrictRegex && e) {
      return this._monthsShortStrictRegex;
    }
    return this._monthsShortRegex;
  }
}
test238: {
  function f() {
    if (this._monthsParseExact) {
      r(this, "_monthsRegex") || ve.call(this);
      if (e) {
        return this._monthsStrictRegex;
      }
      return this._monthsRegex;
    }
    r(this, "_monthsRegex") || (this._monthsRegex = ia);
    if (this._monthsStrictRegex && e) {
      return this._monthsStrictRegex;
    }
    return this._monthsRegex;
  }
}
test239: {
  function f() {
    if (j(e)) {
      return 366;
    }
    return 365;
  }
}
test240: {
  function f() {
    if (null == e) {
      return t;
    }
    return this.add(7 * (e - t), "d");
  }
}
test241: {
  function f() {
    if (null == e) {
      return t;
    }
    return this.add(7 * (e - t), "d");
  }
}
test242: {
  function f() {
    if ("string" != typeof e) {
      return e;
    }
    if (isNaN(e)) {
      e = t.weekdaysParse(e);
      if ("number" == typeof e) {
        return e;
      }
      return null;
    }
    return parseInt(e, 10);
  }
}
test243: {
  function f() {
    if ("string" == typeof e) {
      return t.weekdaysParse(e) % 7 || 7;
    }
    if (isNaN(e)) {
      return null;
    }
    return e;
  }
}
test244: {
  function f() {
    if (e === !0) {
      return De(i, this._week.dow);
    }
    if (e) {
      return i[e.day()];
    }
    return i;
  }
}
test245: {
  function f() {
    if (e === !0) {
      return De(this._weekdaysShort, this._week.dow);
    }
    if (e) {
      return this._weekdaysShort[e.day()];
    }
    return this._weekdaysShort;
  }
}
test246: {
  function f() {
    if (e === !0) {
      return De(this._weekdaysMin, this._week.dow);
    }
    if (e) {
      return this._weekdaysMin[e.day()];
    }
    return this._weekdaysMin;
  }
}
test247: {
  function f() {
    if (i) {
      if ("dddd" === t) {
        o = Wo.call(this._weekdaysParse, s);
        if (o !== -1) {
          return o;
        }
        return null;
      }
      if ("ddd" === t) {
        o = Wo.call(this._shortWeekdaysParse, s);
        if (o !== -1) {
          return o;
        }
        return null;
      }
      o = Wo.call(this._minWeekdaysParse, s);
      if (o !== -1) {
        return o;
      }
      return null;
    }
    if ("dddd" === t) {
      o = Wo.call(this._weekdaysParse, s);
      if (o !== -1) {
        return o;
      }
      o = Wo.call(this._shortWeekdaysParse, s);
      if (o !== -1) {
        return o;
      }
      o = Wo.call(this._minWeekdaysParse, s);
      if (o !== -1) {
        return o;
      }
      return null;
    }
    if ("ddd" === t) {
      o = Wo.call(this._shortWeekdaysParse, s);
      if (o !== -1) {
        return o;
      }
      o = Wo.call(this._weekdaysParse, s);
      if (o !== -1) {
        return o;
      }
      o = Wo.call(this._minWeekdaysParse, s);
      if (o !== -1) {
        return o;
      }
      return null;
    }
    o = Wo.call(this._minWeekdaysParse, s);
    if (o !== -1) {
      return o;
    }
    o = Wo.call(this._weekdaysParse, s);
    if (o !== -1) {
      return o;
    }
    o = Wo.call(this._shortWeekdaysParse, s);
    if (o !== -1) {
      return o;
    }
    return null;
  }
}
test248: {
  function f() {
    if (null != e) {
      return this;
    }
    return NaN;
  }
}
test249: {
  function f() {
    if (null != e) {
      e = Oe(e, this.localeData());
      return this.add(e - t, "d");
    }
    return t;
  }
}
test250: {
  function f() {
    if (null != e) {
      return this;
    }
    return NaN;
  }
}
test251: {
  function f() {
    if (null == e) {
      return t;
    }
    return this.add(e - t, "d");
  }
}
test252: {
  function f() {
    if (null != e) {
      return this;
    }
    return NaN;
  }
}
test253: {
  function f() {
    if (this._weekdaysParseExact) {
      r(this, "_weekdaysRegex") || je.call(this);
      if (e) {
        return this._weekdaysStrictRegex;
      }
      return this._weekdaysRegex;
    }
    r(this, "_weekdaysRegex") || (this._weekdaysRegex = la);
    if (this._weekdaysStrictRegex && e) {
      return this._weekdaysStrictRegex;
    }
    return this._weekdaysRegex;
  }
}
test254: {
  function f() {
    if (this._weekdaysParseExact) {
      r(this, "_weekdaysRegex") || je.call(this);
      if (e) {
        return this._weekdaysShortStrictRegex;
      }
      return this._weekdaysShortRegex;
    }
    r(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ca);
    if (this._weekdaysShortStrictRegex && e) {
      return this._weekdaysShortStrictRegex;
    }
    return this._weekdaysShortRegex;
  }
}
test255: {
  function f() {
    if (this._weekdaysParseExact) {
      r(this, "_weekdaysRegex") || je.call(this);
      if (e) {
        return this._weekdaysMinStrictRegex;
      }
      return this._weekdaysMinRegex;
    }
    r(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = da);
    if (this._weekdaysMinStrictRegex && e) {
      return this._weekdaysMinStrictRegex;
    }
    return this._weekdaysMinRegex;
  }
}
test256: {
  function f() {
    if (e > 11) {
      if (i) {
        return "pm";
      }
      return "PM";
    }
    if (i) {
      return "am";
    }
    return "AM";
  }
}
test257: {
  function f() {
    if (e) {
      return e.toLowerCase().replace("_", "-");
    }
    return e;
  }
}
test258: {
  function f() {
    if (t <= 49) {
      return 2e3 + t;
    }
    if (t <= 999) {
      return 1900 + t;
    }
    return t;
  }
}
test259: {
  function f() {
    if (null !== i) {
      e._d = new Date(+i[1]);
      return;
    }
    dt(e);
    e._isValid === !1 && (delete e._isValid, gt(e), e._isValid === !1 && (delete e._isValid, e._strict ? e._isValid = !1 : t.createFromInputFallback(e)));
    return;
  }
}
test260: {
  function f() {
    if (null != e) {
      return e;
    }
    if (null != t) {
      return t;
    }
    return i;
  }
}
test261: {
  function f() {
    if (e._useUTC) {
      return [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()];
    }
    return [i.getFullYear(), i.getMonth(), i.getDate()];
  }
}
test262: {
  function f() {
    if (null == i) {
      return t;
    }
    if (null != e.meridiemHour) {
      return e.meridiemHour(t, i);
    }
    if (null != e.isPM) {
      n = e.isPM(i);
      n && t < 12 && (t += 12);
      n || 12 !== t || (t = 0);
      return t;
    }
    return t;
  }
}
test263: {
  function f() {
    if (e < 0) {
      return Math.round(-1 * e) * -1;
    }
    return Math.round(e);
  }
}
test264: {
  function f() {
    if (null === a) {
      return null;
    }
    i = a[a.length - 1] || [];
    n = (i + "").match(Na) || ["-", 0, 0];
    o = +(60 * n[1]) + X(n[2]);
    if (0 === o) {
      return 0;
    }
    if ("+" === n[0]) {
      return o;
    }
    return -o;
  }
}
test265: {
  function f() {
    if (i._isUTC) {
      n = i.clone();
      o = (b(e) || u(e) ? e.valueOf() : xt(e).valueOf()) - n.valueOf();
      n._d.setTime(n._d.valueOf() + o);
      t.updateOffset(n, !1);
      return n;
    }
    return xt(e).local();
  }
}
test266: {
  function f() {
    if (null != e) {
      return this;
    }
    return NaN;
  }
}
test267: {
  function f() {
    if (this._isUTC) {
      return a;
    }
    return qt(this);
  }
}
test268: {
  function f() {
    if (null != e) {
      "string" != typeof e && (e = -e);
      this.utcOffset(e, t);
      return this;
    }
    return -this.utcOffset();
  }
}
test269: {
  function f() {
    if (e.isValid() && t.isValid()) {
      t = Ut(t, e);
      e.isBefore(t) ? i = oi(e, t) : (i = oi(t, e), i.milliseconds = -i.milliseconds, i.months = -i.months);
      return i;
    }
    return {
      milliseconds: 0,
      months: 0
    };
  }
}
test270: {
  function f() {
    if (i < -6) {
      return "sameElse";
    }
    if (i < -1) {
      return "lastWeek";
    }
    if (i < 0) {
      return "lastDay";
    }
    if (i < 1) {
      return "sameDay";
    }
    if (i < 2) {
      return "nextDay";
    }
    if (i < 7) {
      return "nextWeek";
    }
    return "sameElse";
  }
}
test271: {
  function f() {
    if (i) {
      return a;
    }
    return V(a);
  }
}
test272: {
  function f() {
    if (i.year() < 0 || i.year() > 9999) {
      return D(i, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
    }
    if (I(Date.prototype.toISOString)) {
      if (t) {
        return this.toDate().toISOString();
      }
      return new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", D(i, "Z"));
    }
    return D(i, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }
}
test273: {
  function f() {
    if (this.isValid() && (b(e) && e.isValid() || xt(e).isValid())) {
      return ii({
        to: this,
        from: e
      }).locale(this.locale()).humanize(!t);
    }
    return this.localeData().invalidDate();
  }
}
test274: {
  function f() {
    if (this.isValid() && (b(e) && e.isValid() || xt(e).isValid())) {
      return ii({
        from: this,
        to: e
      }).locale(this.locale()).humanize(!t);
    }
    return this.localeData().invalidDate();
  }
}
test275: {
  function f() {
    if (void 0 === e) {
      return this._locale._abbr;
    }
    t = rt(e);
    null != t && (this._locale = t);
    return this;
  }
}
test276: {
  function f() {
    if (e < 100 && e >= 0) {
      return new Date(e + 400, t, i) - Fa;
    }
    return new Date(e, t, i).valueOf();
  }
}
test277: {
  function f() {
    if (e < 100 && e >= 0) {
      return Date.UTC(e + 400, t, i) - Fa;
    }
    return Date.UTC(e, t, i);
  }
}
test278: {
  function f() {
    if (this.isValid()) {
      return this.toISOString();
    }
    return null;
  }
}
test279: {
  function f() {
    if (void 0 === i) {
      return t(e.since).year();
    }
    return t(e.since).year() + (i - e.offset) * n;
  }
}
test280: {
  function f() {
    if (null == e) {
      return Ie(this, n, o).year;
    }
    a = Ae(e, n, o);
    t > a && (t = a);
    return yn.call(this, e, t, i, n, o);
  }
}
test281: {
  function f() {
    if (null == e) {
      return Math.ceil((this.month() + 1) / 3);
    }
    return this.month(3 * (e - 1) + this.month() % 3);
  }
}
test282: {
  function f() {
    if (null == e) {
      return t;
    }
    return this.add(e - t, "d");
  }
}
test283: {
  function f() {
    if (this._isUTC) {
      return "UTC";
    }
    return "";
  }
}
test284: {
  function f() {
    if (this._isUTC) {
      return "Coordinated Universal Time";
    }
    return "";
  }
}
test285: {
  function f() {
    if (e < 0) {
      return Math.floor(e);
    }
    return Math.ceil(e);
  }
}
test286: {
  function f() {
    if (this.isValid()) {
      return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * X(this._months / 12);
    }
    return NaN;
  }
}
test287: {
  function f() {
    if (this.isValid()) {
      return this._data[e];
    }
    return NaN;
  }
}
test288: {
  function f() {
    if (void 0 === e) {
      return cs;
    }
    return "function" == typeof e && (cs = e, !0);
  }
}
test289: {
  function f() {
    if (u) {
      e = V(l / 60);
      t = V(e / 60);
      l %= 60;
      e %= 60;
      i = V(d / 12);
      d %= 12;
      n = l ? l.toFixed(3).replace(/\.?0+$/, "") : "";
      o = u < 0 ? "-" : "";
      a = io(this._months) !== io(u) ? "-" : "";
      s = io(this._days) !== io(u) ? "-" : "";
      r = io(this._milliseconds) !== io(u) ? "-" : "";
      return o + "P" + (i ? a + i + "Y" : "") + (d ? a + d + "M" : "") + (c ? s + c + "D" : "") + (t || e || l ? "T" : "") + (t ? r + t + "H" : "") + (e ? r + e + "M" : "") + (l ? r + n + "S" : "");
    }
    return "P0D";
  }
}
test290: {
  function f() {
    if (e <= 9999) {
      return x(e, 4);
    }
    return "+" + e;
  }
}
test291: {
  function f() {
    if (this.isValid() && e.isValid()) {
      if (e < this) {
        return this;
      }
      return e;
    }
    return v();
  }
}
test292: {
  function f() {
    if (this.isValid() && e.isValid()) {
      if (e > this) {
        return this;
      }
      return e;
    }
    return v();
  }
}
test293: {
  function f() {
    if (Date.now) {
      return Date.now();
    }
    return +new Date();
  }
}
test294: {
  function f() {
    if (void 0 === e) {
      return this.localeData();
    }
    return this.locale(e);
  }
}
test295: {
  function f() {
    if (e) {
      return t._dayOfMonthOrdinalParse || t._ordinalParse;
    }
    return t._dayOfMonthOrdinalParseLenient;
  }
}
test296: {
  function f() {
    if (e < 12) {
      if (i) {
        return "vm";
      }
      return "VM";
    }
    if (i) {
      return "nm";
    }
    return "NM";
  }
}
test297: {
  function f() {
    if (0 === e) {
      return 0;
    }
    if (1 === e) {
      return 1;
    }
    if (2 === e) {
      return 2;
    }
    if (e % 100 >= 3 && e % 100 <= 10) {
      return 3;
    }
    if (e % 100 >= 11) {
      return 4;
    }
    return 5;
  }
}
test298: {
  function f() {
    if (e < 12) {
      return "├Å├ü";
    }
    return "Ôöÿ├á";
  }
}
test299: {
  function f() {
    if (0 === e) {
      return 0;
    }
    if (1 === e) {
      return 1;
    }
    if (2 === e) {
      return 2;
    }
    if (e % 100 >= 3 && e % 100 <= 10) {
      return 3;
    }
    if (e % 100 >= 11) {
      return 4;
    }
    return 5;
  }
}
test300: {
  function f() {
    if (e < 12) {
      return "├Å├ü";
    }
    return "Ôöÿ├á";
  }
}
test301: {
  function f() {
    if (0 === e) {
      return 0;
    }
    if (1 === e) {
      return 1;
    }
    if (2 === e) {
      return 2;
    }
    if (e % 100 >= 3 && e % 100 <= 10) {
      return 3;
    }
    if (e % 100 >= 11) {
      return 4;
    }
    return 5;
  }
}
test302: {
  function f() {
    if (e < 12) {
      return "├Å├ü";
    }
    return "Ôöÿ├á";
  }
}
test303: {
  function f() {
    if (e < 12) {
      return "├Å├ü";
    }
    return "Ôöÿ├á";
  }
}
test304: {
  function f() {
    if (e < 4) {
      return "gecÔòö├û";
    }
    if (e < 12) {
      return "sÔòö├ûhÔòö├ûr";
    }
    if (e < 17) {
      return "gÔö£ÔòØndÔö£ÔòØz";
    }
    return "axÔö╝ãÆam";
  }
}
test305: {
  function f() {
    if (t % 10 === 1 && t % 100 !== 11) {
      return i[0];
    }
    if (t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)) {
      return i[1];
    }
    return i[2];
  }
}
test306: {
  function f() {
    if ("m" === n) {
      if (i) {
        return "├É├á├░Ôûô├É├╗├░Ôòù├É├╗├░┬ó├░Ôûæ";
      }
      return "├É├á├░Ôûô├É├╗├░Ôòù├É├╗├░┬ó├É├ó";
    }
    if ("h" === n) {
      if (i) {
        return "├░Ôöé├░Ôûæ├░Ôöñ├░├Ç├É├╗├░┬ó├░Ôûæ";
      }
      return "├░Ôöé├░Ôûæ├░Ôöñ├░├Ç├É├╗├░┬ó├É├ó";
    }
    return e + " " + t(o[n], +e);
  }
}
test307: {
  function f() {
    if (e < 4) {
      return "├░┬ó├░┬Ñ├É├º├É├»";
    }
    if (e < 12) {
      return "├É├ç├░Ôûæ├░┬ó├É├╗├É├Ñ├É├»";
    }
    if (e < 17) {
      return "├░Ôöñ├░┬ó├É├à";
    }
    return "├░Ôûô├░├ü├É├º├░Ôûæ├É├ç├░Ôûæ";
  }
}
test308: {
  function f() {
    if (e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13) {
      return e + "-├É├»";
    }
    return e + "-├É├╗";
  }
}
test309: {
  function f() {
    if (0 === e) {
      return e + "-├░├ü├░Ôûô";
    }
    if (0 === i) {
      return e + "-├░├ü├░┬ó";
    }
    if (i > 10 && i < 20) {
      return e + "-├É├®├░┬®";
    }
    if (1 === t) {
      return e + "-├░Ôûô├░┬®";
    }
    if (2 === t) {
      return e + "-├É├ç├░┬®";
    }
    if (7 === t || 8 === t) {
      return e + "-├░ÔòØ├░┬®";
    }
    return e + "-├É├®├░┬®";
  }
}
test310: {
  function f() {
    if (e < 4) {
      return "├ô┬¬Ôûæ├ô┬¬┬Ñ├ô┬¬├▒";
    }
    if (e < 10) {
      return "├ô┬¬┬®├ô┬¬├▓├ô┬¬┬Ñ├ô┬¬Ôûô";
    }
    if (e < 17) {
      return "├ô┬¬┬¬├ô┬║├╝├ô┬¬┬¼├ô┬║├╝├ô┬¬Ôûæ";
    }
    if (e < 20) {
      return "├ô┬¬┬╝├ô┬¬ÔöÉ├ô┬¬├▓├ô┬¬┬Ñ├ô┬¬Ôûô";
    }
    return "├ô┬¬Ôûæ├ô┬¬┬Ñ├ô┬¬├▒";
  }
}
test311: {
  function f() {
    if (e < 4) {
      return "├ô┬¬Ôûæ├ô┬¬┬Ñ├ô┬¬├▒";
    }
    if (e < 6) {
      return "├ô┬¬┬í├ô┬║├»├ô┬¬Ôûæ";
    }
    if (e < 12) {
      return "├ô┬¬┬®├ô┬¬├▓├ô┬¬┬Ñ├ô┬¬Ôûô";
    }
    if (e < 15) {
      return "├ô┬¬┬¬├ô┬║├╝├ô┬¬┬¼├ô┬║├╝├ô┬¬Ôûæ";
    }
    if (e < 18) {
      return "├ô┬¬┬╝├ô┬¬ÔöÉ├ô┬¬├▓├ô┬¬┬Ñ├ô┬¬Ôûô";
    }
    if (e < 20) {
      return "├ô┬¬┬®├ô┬¬┬┐├ô┬║├¼├ô┬¬┬║├ô┬║├¼├ô┬¬┬╗├ô┬¬┬Ñ";
    }
    return "├ô┬¬Ôûæ├ô┬¬┬Ñ├ô┬¬├▒";
  }
}
test312: {
  function f() {
    if (e < 4) {
      return "├ô┬ó├┐├ô┬ó├£├ô┬ó├┤├ôÔòØ├»├ô┬ó├┐├ô┬óÔòØ";
    }
    if (e < 10) {
      return "├ô┬ó├ù├ô┬óÔòØ├ô┬ó├®├ô┬ó┬¬├ôÔòØ├»├ô┬ó├ç├ô┬ó┬¬";
    }
    if (e < 17) {
      return "├ô┬ó├½├ô┬óÔûô├ô┬ó├┤├ôÔòØ├»├ô┬ó├®├ô┬óÔöñ├ô┬ó├ñ";
    }
    if (e < 20) {
      return "├ô┬ó├ª├ô┬ó├®├ô┬óÔòØ├ô┬ó├ñ├ôÔòØ├»├ô┬ó├ª├ô┬ó├®";
    }
    return "├ô┬ó├┐├ô┬ó├£├ô┬ó├┤├ôÔòØ├»├ô┬ó├┐├ô┬óÔòØ";
  }
}
test313: {
  function f() {
    if (e > 9) {
      return n(e % 10);
    }
    return e;
  }
}
test314: {
  function f() {
    if (2 === t) {
      return a(e);
    }
    return e;
  }
}
test315: {
  function f() {
    if (void 0 === t[e.charAt(0)]) {
      return e;
    }
    return t[e.charAt(0)] + e.substring(1);
  }
}
test316: {
  function f() {
    if (e < 12) {
      return "a.m.";
    }
    return "g.m.";
  }
}
test317: {
  function f() {
    if (t) {
      return "jedna minuta";
    }
    return "jedne minute";
  }
}
test318: {
  function f() {
    if (t) {
      return "jedan sat";
    }
    return "jednog sata";
  }
}
test319: {
  function f() {
    if (i || o) {
      return "pÔö£├¡r sekund";
    }
    return "pÔö£├¡r sekundami";
  }
}
test320: {
  function f() {
    if (i || o) {
      return a + (t(e) ? "sekundy" : "sekund");
    }
    return a + "sekundami";
  }
}
test321: {
  function f() {
    if (i) {
      return "minuta";
    }
    if (o) {
      return "minutu";
    }
    return "minutou";
  }
}
test322: {
  function f() {
    if (i || o) {
      return a + (t(e) ? "minuty" : "minut");
    }
    return a + "minutami";
  }
}
test323: {
  function f() {
    if (i) {
      return "hodina";
    }
    if (o) {
      return "hodinu";
    }
    return "hodinou";
  }
}
test324: {
  function f() {
    if (i || o) {
      return a + (t(e) ? "hodiny" : "hodin");
    }
    return a + "hodinami";
  }
}
test325: {
  function f() {
    if (i || o) {
      return "den";
    }
    return "dnem";
  }
}
test326: {
  function f() {
    if (i || o) {
      return a + (t(e) ? "dny" : "dnÔö£┬í");
    }
    return a + "dny";
  }
}
test327: {
  function f() {
    if (i || o) {
      return "mÔöÇ├©sÔö£┬íc";
    }
    return "mÔöÇ├©sÔö£┬ícem";
  }
}
test328: {
  function f() {
    if (i || o) {
      return a + (t(e) ? "mÔöÇ├©sÔö£┬íce" : "mÔöÇ├©sÔö£┬ícÔö╝┬╗");
    }
    return a + "mÔöÇ├©sÔö£┬íci";
  }
}
test329: {
  function f() {
    if (i || o) {
      return "rok";
    }
    return "rokem";
  }
}
test330: {
  function f() {
    if (i || o) {
      return a + (t(e) ? "roky" : "let");
    }
    return a + "lety";
  }
}
test331: {
  function f() {
    if (t) {
      return o[i][0];
    }
    return o[i][1];
  }
}
test332: {
  function f() {
    if (t) {
      return o[i][0];
    }
    return o[i][1];
  }
}
test333: {
  function f() {
    if (t) {
      return o[i][0];
    }
    return o[i][1];
  }
}
test334: {
  function f() {
    if (e < 12) {
      return "├î├½├î├Ñ";
    }
    return "├î├½├î├¿";
  }
}
test335: {
  function f() {
    if (e) {
      if ("string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM")))) {
        return this._monthsGenitiveEl[e.month()];
      }
      return this._monthsNominativeEl[e.month()];
    }
    return this._monthsNominativeEl;
  }
}
test336: {
  function f() {
    if (e > 11) {
      if (i) {
        return "Ôò¼ÔòØÔò¼ÔòØ";
      }
      return "Ôò¼┬úÔò¼┬ú";
    }
    if (i) {
      return "┬ñ├çÔò¼ÔòØ";
    }
    return "Ôò¼├íÔò¼┬ú";
  }
}
test337: {
  function f() {
    if (e > 11) {
      if (i) {
        return "p.t.m.";
      }
      return "P.T.M.";
    }
    if (i) {
      return "a.t.m.";
    }
    return "A.T.M.";
  }
}
test338: {
  function f() {
    if (e) {
      if (/-MMM-/.test(n)) {
        return i[e.month()];
      }
      return t[e.month()];
    }
    return t;
  }
}
test339: {
  function f() {
    if (e) {
      if (/-MMM-/.test(n)) {
        return i[e.month()];
      }
      return t[e.month()];
    }
    return t;
  }
}
test340: {
  function f() {
    if (e) {
      if (/-MMM-/.test(n)) {
        return i[e.month()];
      }
      return t[e.month()];
    }
    return t;
  }
}
test341: {
  function f() {
    if (e) {
      if (/-MMM-/.test(n)) {
        return i[e.month()];
      }
      return t[e.month()];
    }
    return t;
  }
}
test342: {
  function f() {
    if (t) {
      if (o[i][2]) {
        return o[i][2];
      }
      return o[i][1];
    }
    if (n) {
      return o[i][0];
    }
    return o[i][1];
  }
}
test343: {
  function f() {
    if (e < 12) {
      return "Ôöÿ├®├Å┬┐Ôöÿ├ñ ├Å┬║├ÅÔûô ├Å┬®Ôöÿ├º├ÅÔûÆ";
    }
    return "├Å┬┐├ÅÔòú├Å┬╗ ├Å┬║├ÅÔûô ├Å┬®Ôöÿ├º├ÅÔûÆ";
  }
}
test344: {
  function f() {
    if (o) {
      return "muutaman sekunnin";
    }
    return "muutama sekunti";
  }
}
test345: {
  function f() {
    if (o) {
      return "minuutin";
    }
    return "minuutti";
  }
}
test346: {
  function f() {
    if (o) {
      return "tunnin";
    }
    return "tunti";
  }
}
test347: {
  function f() {
    if (o) {
      return "pÔö£├▒ivÔö£├▒n";
    }
    return "pÔö£├▒ivÔö£├▒";
  }
}
test348: {
  function f() {
    if (o) {
      return "kuukauden";
    }
    return "kuukausi";
  }
}
test349: {
  function f() {
    if (o) {
      return "vuoden";
    }
    return "vuosi";
  }
}
test350: {
  function f() {
    if (e < 10) {
      if (t) {
        return o[e];
      }
      return n[e];
    }
    return e;
  }
}
test351: {
  function f() {
    if (e) {
      if (/-MMM-/.test(n)) {
        return i[e.month()];
      }
      return t[e.month()];
    }
    return t;
  }
}
test352: {
  function f() {
    if (0 === e.indexOf("un")) {
      return "n" + e;
    }
    return "en " + e;
  }
}
test353: {
  function f() {
    if (n) {
      return o[i][0];
    }
    return o[i][1];
  }
}
test354: {
  function f() {
    if (e < 4) {
      return "├ô├▒Ôûæ├ô├▒┬Ñ├ô├▒├▒├ô├æ├ç";
    }
    if (e < 12) {
      return "├ô├▒┬®├ô├▒├▓├ô├▒┬Ñ├ô├▒Ôöé├ô├æ├ç├ô├▒├®";
    }
    if (e < 16) {
      return "├ô├▒┬¬├ô├▒┬┐├ô├▒┬¼├ô├▒┬Ñ├ô├▒Ôûæ├ô├▒┬Ñ├ô├▒├®";
    }
    if (e < 20) {
      return "├ô├▒┬®├ô├▒┬Ñ├ô├▒├®├ô├▒┬ú├ô├æ├º";
    }
    return "├ô├▒Ôûæ├ô├▒┬Ñ├ô├▒├▒├ô├æ├ç";
  }
}
test355: {
  function f() {
    if (n) {
      return o[i][0];
    }
    return o[i][1];
  }
}
test356: {
  function f() {
    if (e < 4) {
      return "rati";
    }
    if (e < 12) {
      return "sokallim";
    }
    if (e < 16) {
      return "donparam";
    }
    if (e < 20) {
      return "sanje";
    }
    return "rati";
  }
}
test357: {
  function f() {
    if (e < 4) {
      return "├ô┬¼Ôûæ├ô┬¼┬Ñ├ô┬¼├▒";
    }
    if (e < 10) {
      return "├ô┬¼┬®├ô┬¼├ü├ô┬¼┬Ñ├ô┬¼Ôûæ";
    }
    if (e < 17) {
      return "├ô┬¼┬╝├ô┬¼┬¼├ô┬¢├»├ô┬¼Ôûæ";
    }
    if (e < 20) {
      return "├ô┬¼┬®├ô┬¼┬Ñ├ô┬¼├®├ô┬¼┬ú";
    }
    return "├ô┬¼Ôûæ├ô┬¼┬Ñ├ô┬¼├▒";
  }
}
test358: {
  function f() {
    if (2 === e) {
      return "├Ä┬«├Ä├│├Ä┬¼├Ä├û├Ä├û├Ä├ÿ";
    }
    return e + " ├Ä┬«├Ä├│├Ä├▓├Ä┬¼";
  }
}
test359: {
  function f() {
    if (2 === e) {
      return "├Ä├û├Ä├▓├Ä├ù├Ä├û├Ä├û├Ä├ÿ";
    }
    return e + " ├Ä├û├Ä├ù├Ä├û├Ä├ÿ";
  }
}
test360: {
  function f() {
    if (2 === e) {
      return "├Ä├╣├Ä├▓├Ä├┤├Ä┬«├Ä├û├Ä├û├Ä├ÿ";
    }
    return e + " ├Ä├╣├Ä├▓├Ä├┤├Ä┬«├Ä├û├Ä├ÿ";
  }
}
test361: {
  function f() {
    if (2 === e) {
      return "├Ä┬«├Ä├í├Ä┬¼├Ä├û├Ä├û├Ä├ÿ";
    }
    if (e % 10 === 0 && 10 !== e) {
      return e + " ├Ä┬«├Ä├í├Ä├Â";
    }
    return e + " ├Ä┬«├Ä├í├Ä├û├Ä├ÿ";
  }
}
test362: {
  function f() {
    if (e < 5) {
      return "├Ä┬ú├Ä├▒├Ä├í├Ä├▓├Ä┬¼ ├Ä├ª├Ä├▓├Ä┬║├Ä┬┐";
    }
    if (e < 10) {
      return "├Ä├ª├Ä├ª├Ä├▓├Ä┬║├Ä┬┐";
    }
    if (e < 12) {
      if (i) {
        return '├Ä┬ú├Ä├▒├Ä├í├Ä├Â"├Ä┬¬';
      }
      return "├Ä┬ú├Ä├▒├Ä├í├Ä├û ├Ä├Â├Ä┬¬├Ä├Â├Ä┬┐├Ä├û├Ä├û├Ä├ÿ";
    }
    if (e < 18) {
      if (i) {
        return '├Ä├ë├Ä├╣├Ä├Â"├Ä┬¬';
      }
      return "├Ä├ë├Ä├╣├Ä┬┐├Ä├û ├Ä├Â├Ä┬¬├Ä├Â├Ä┬┐├Ä├û├Ä├û├Ä├ÿ";
    }
    return "├Ä├ª├Ä├│├Ä┬┐├Ä├ª";
  }
}
test363: {
  function f() {
    if (e < 4) {
      return "├ô├▒Ôûæ├ô├▒┬Ñ├ô├▒├▒";
    }
    if (e < 10) {
      return "├ô├▒┬®├ô├æ├╝├ô├▒┬╝├ô├▒Ôòú";
    }
    if (e < 17) {
      return "├ô├▒┬¬├ô├æ├»├ô├▒┬¼├ô├▒Ôòú├ô├▒Ôûæ";
    }
    if (e < 20) {
      return "├ô├▒├é├ô├▒┬Ñ├ô├▒┬½";
    }
    return "├ô├▒Ôûæ├ô├▒┬Ñ├ô├▒├▒";
  }
}
test364: {
  function f() {
    if (t) {
      return "jedna minuta";
    }
    return "jedne minute";
  }
}
test365: {
  function f() {
    if (t) {
      return "jedan sat";
    }
    return "jednog sata";
  }
}
test366: {
  function f() {
    if (n || t) {
      return "nÔö£┬«hÔö£├¡ny mÔö£├¡sodperc";
    }
    return "nÔö£┬«hÔö£├¡ny mÔö£├¡sodperce";
  }
}
test367: {
  function f() {
    if (o + (n || t)) {
      return " mÔö£├¡sodperc";
    }
    return " mÔö£├¡sodperce";
  }
}
test368: {
  function f() {
    if (e < 12) {
      if (i === !0) {
        return "de";
      }
      return "DE";
    }
    if (i === !0) {
      return "du";
    }
    return "DU";
  }
}
test369: {
  function f() {
    if (e < 4) {
      return "─▒├║─▒┬¢─▒├Ç─▒├æ├ì├ç─▒┬Ñ─▒├¡";
    }
    if (e < 12) {
      return "─▒├¡─▒ÔòØ─▒├¡─▒┬Ñ─▒┬®─▒ÔöÉ─▒┬Ñ─▒├¡";
    }
    if (e < 17) {
      return "├ì├╝─▒├æ├ì├ç─▒├æ─▒┬╗─▒┬Ñ─▒├¡";
    }
    return "─▒├æ├ì├ç─▒├æ─▒┬╗─▒┬®─▒├ü─▒├¡─▒├é";
  }
}
test370: {
  function f() {
    if (1 === e) {
      return e + "-─▒┬¢─▒├é";
    }
    return e + "-├ì├ç─▒├▒";
  }
}
test371: {
  function f() {
    if (e < 11) {
      return "pagi";
    }
    if (e < 15) {
      return "siang";
    }
    if (e < 19) {
      return "sore";
    }
    return "malam";
  }
}
test372: {
  function f() {
    if (i || o) {
      return "nokkrar sekÔö£Ôòændur";
    }
    return "nokkrum sekÔö£Ôòændum";
  }
}
test373: {
  function f() {
    if (t(e)) {
      return a + (i || o ? "sekÔö£Ôòændur" : "sekÔö£Ôòændum");
    }
    return a + "sekÔö£Ôòænda";
  }
}
test374: {
  function f() {
    if (i) {
      return "mÔö£┬ínÔö£Ôòæta";
    }
    return "mÔö£┬ínÔö£Ôòætu";
  }
}
test375: {
  function f() {
    if (t(e)) {
      return a + (i || o ? "mÔö£┬ínÔö£Ôòætur" : "mÔö£┬ínÔö£Ôòætum");
    }
    if (i) {
      return a + "mÔö£┬ínÔö£Ôòæta";
    }
    return a + "mÔö£┬ínÔö£Ôòætu";
  }
}
test376: {
  function f() {
    if (t(e)) {
      return a + (i || o ? "klukkustundir" : "klukkustundum");
    }
    return a + "klukkustund";
  }
}
test377: {
  function f() {
    if (i) {
      return "dagur";
    }
    if (o) {
      return "dag";
    }
    return "degi";
  }
}
test378: {
  function f() {
    if (t(e)) {
      if (i) {
        return a + "dagar";
      }
      return a + (o ? "daga" : "dÔö£├égum");
    }
    if (i) {
      return a + "dagur";
    }
    return a + (o ? "dag" : "degi");
  }
}
test379: {
  function f() {
    if (i) {
      return "mÔö£├¡nuÔö£Ôûæur";
    }
    if (o) {
      return "mÔö£├¡nuÔö£Ôûæ";
    }
    return "mÔö£├¡nuÔö£Ôûæi";
  }
}
test380: {
  function f() {
    if (t(e)) {
      if (i) {
        return a + "mÔö£├¡nuÔö£Ôûæir";
      }
      return a + (o ? "mÔö£├¡nuÔö£Ôûæi" : "mÔö£├¡nuÔö£Ôûæum");
    }
    if (i) {
      return a + "mÔö£├¡nuÔö£Ôûæur";
    }
    return a + (o ? "mÔö£├¡nuÔö£Ôûæ" : "mÔö£├¡nuÔö£Ôûæi");
  }
}
test381: {
  function f() {
    if (i || o) {
      return "Ôö£├¡r";
    }
    return "Ôö£├¡ri";
  }
}
test382: {
  function f() {
    if (t(e)) {
      return a + (i || o ? "Ôö£├¡r" : "Ôö£├¡rum");
    }
    return a + (i || o ? "Ôö£├¡r" : "Ôö£├¡ri");
  }
}
test383: {
  function f() {
    if ("├ò├á├ó" === t[1]) {
      return 1;
    }
    return parseInt(t[1] || e, 10);
  }
}
test384: {
  function f() {
    if (e < 12) {
      return "├ò├¼├¬├ò├½├¼";
    }
    return "├ò├¼├¬├ò┬Ñ├«";
  }
}
test385: {
  function f() {
    if (e.week() !== this.week()) {
      return "[┬Á├ÿ├æ├Ü├çÔûÆ]dddd LT";
    }
    return "dddd LT";
  }
}
test386: {
  function f() {
    if (this.week() !== e.week()) {
      return "[├ò├á├¬├Ü├çÔûÆ]dddd LT";
    }
    return "dddd LT";
  }
}
test387: {
  function f() {
    if (1 === e) {
      return "├ò├á├ó├òÔòúÔöñ";
    }
    return e + "├òÔòúÔöñ";
  }
}
test388: {
  function f() {
    if (e < 11) {
      return "enjing";
    }
    if (e < 15) {
      return "siyang";
    }
    if (e < 19) {
      return "sonten";
    }
    return "ndalu";
  }
}
test389: {
  function f() {
    if ("├ƒ├ó├┐" === i) {
      return t + "├ƒ├ó┬┐├ƒ├ó├┐";
    }
    return t + i + "├ƒ├ó┬┐├ƒ├ó├┐";
  }
}
test390: {
  function f() {
    if (/(├ƒ├ó┬╝├ƒ├ó├ë├ƒ├ó├©├ƒ├ó├┐|├ƒ├ó┬╝├ƒ├ó├║├ƒ├ó├╣├ƒ├ó├┐|├ƒ├ó├¡├ƒ├ó├ë├ƒ├ó├ë├ƒ├ó├╣├ƒ├ó├┐|├ƒ├ó├┤├ƒ├ó┬¬├ƒ├ó├Â|├ƒ├ó├╣├ƒ├ó├▓├ƒ├ó├Â)/.test(e)) {
      return e.replace(/(├ƒ├ó├┐|├ƒ├ó├Â)$/, "├ƒ├ó├┐├ƒ├ó├¡ ├ƒ├ó┬╝├ƒ├ó├┐├ƒ├ó┬ú");
    }
    if (/├ƒ├ó┬╝├ƒ├ó├Â├ƒ├ó├£├ƒ├ó├┐/.test(e)) {
      return e.replace(/├ƒ├ó┬╝├ƒ├ó├Â├ƒ├ó├£├ƒ├ó├┐$/, "├ƒ├ó┬╝├ƒ├ó├£├ƒ├ó├┐├ƒ├ó├¡ ├ƒ├ó┬╝├ƒ├ó├┐├ƒ├ó┬ú");
    }
    return e;
  }
}
test391: {
  function f() {
    if (0 === e) {
      return e;
    }
    if (1 === e) {
      return e + "-├ƒ├ó├£├ƒ├ó├┐";
    }
    if (e < 20 || e <= 100 && e % 20 === 0 || e % 100 === 0) {
      return "├ƒ├ó├©├ƒ├ó├Â-" + e;
    }
    return e + "-├ƒ├ó├Â";
  }
}
test392: {
  function f() {
    if (e < 12) {
      return "├ƒ├ù├╗├ƒãÆ├å├ƒ├ù├£├ƒ├ùÔòú├ƒ├ù├ç";
    }
    return "├ƒ├ù├©├ƒãÆ├å├ƒ├ù├ñ├ƒ├ù├é├ƒ├ù├á";
  }
}
test393: {
  function f() {
    if (e < 4) {
      return "├ôÔûôÔûæ├ôÔûô┬Ñ├ôÔûô├▒├ôÔöé├¼├ôÔûôÔûæ├ôÔûôÔöÉ";
    }
    if (e < 10) {
      return "├ôÔûô┬╝├ôÔöé├Ñ├ôÔûôÔöé├ôÔûôÔöÉ├ôÔûô├╣├ôÔöé├¼├ôÔûô├╣├ôÔöé├Ñ";
    }
    if (e < 17) {
      return "├ôÔûô┬½├ôÔûô┬║├ôÔöé├¼├ôÔûô┬╗├ôÔûô┬Ñ├ôÔûôÔòú├ôÔöé├¼├ôÔûô┬┐";
    }
    if (e < 20) {
      return "├ôÔûô┬®├ôÔûô├®├ôÔûô┬ú├ôÔöé├Ñ";
    }
    return "├ôÔûôÔûæ├ôÔûô┬Ñ├ôÔûô├▒├ôÔöé├¼├ôÔûôÔûæ├ôÔûôÔöÉ";
  }
}
test394: {
  function f() {
    if (e < 12) {
      return "├¢├┐├▒├¢├í├ñ";
    }
    return "├¢├┐├▒├Ø├©├ñ";
  }
}
test395: {
  function f() {
    if (e < 12) {
      return "├Å┬┐Ôöÿ├º├ö├ç├«Ôûê├«├Å┬║Ôöÿ├ÑÔûê├«";
    }
    return "├Å┬¬Ôûê├äÔöÿ├¬├Å┬║├ÅÔûÆÔöÿ├º├ö├ç├«";
  }
}
test396: {
  function f() {
    if (t) {
      return o[i][0];
    }
    return o[i][1];
  }
}
test397: {
  function f() {
    if (o(t)) {
      return "a " + e;
    }
    return "an " + e;
  }
}
test398: {
  function f() {
    if (o(t)) {
      return "viru " + e;
    }
    return "virun " + e;
  }
}
test399: {
  function f() {
    if (e < 12) {
      return "├ôÔòæ├▓├ôÔòæ┬í├ôÔòæ├û├ôÔòù├ç├ôÔòæ├¿├ôÔòæÔòù├ôÔòù├½├ôÔòæÔûô";
    }
    return "├ôÔòæ├▓├ôÔòæ┬í├ôÔòæ├û├ôÔòù├╝├ôÔòæ├æ├ôÔòæ├º";
  }
}
test400: {
  function f() {
    if (t) {
      return "kelios sekundÔöÇ├╣s";
    }
    if (n) {
      return "keliÔö╝Ôöé sekundÔö╝┬ÑiÔö╝Ôöé";
    }
    return "kelias sekundes";
  }
}
test401: {
  function f() {
    if (t) {
      return o(i)[0];
    }
    if (n) {
      return o(i)[1];
    }
    return o(i)[2];
  }
}
test402: {
  function f() {
    if (1 === e) {
      return r + i(e, t, a[0], s);
    }
    if (t) {
      return r + (n(e) ? o(a)[1] : o(a)[0]);
    }
    if (s) {
      return r + o(a)[1];
    }
    return r + (n(e) ? o(a)[1] : o(a)[2]);
  }
}
test403: {
  function f() {
    if (i) {
      if (t % 10 === 1 && t % 100 !== 11) {
        return e[2];
      }
      return e[3];
    }
    if (t % 10 === 1 && t % 100 !== 11) {
      return e[0];
    }
    return e[1];
  }
}
test404: {
  function f() {
    if (t) {
      return "daÔö╝┬Ñas sekundes";
    }
    return "daÔö╝┬ÑÔöÇ├╝m sekundÔöÇ├┤m";
  }
}
test405: {
  function f() {
    if (1 === e) {
      return t[0];
    }
    if (e >= 2 && e <= 4) {
      return t[1];
    }
    return t[2];
  }
}
test406: {
  function f() {
    if (1 === n.length) {
      if (i) {
        return o[0];
      }
      return o[1];
    }
    return e + " " + t.correctGrammaticalCase(e, o);
  }
}
test407: {
  function f() {
    if (0 === e) {
      return e + "-├░├ü├░Ôûô";
    }
    if (0 === i) {
      return e + "-├░├ü├░┬ó";
    }
    if (i > 10 && i < 20) {
      return e + "-├É├®├░┬®";
    }
    if (1 === t) {
      return e + "-├░Ôûô├░┬®";
    }
    if (2 === t) {
      return e + "-├É├ç├░┬®";
    }
    if (7 === t || 8 === t) {
      return e + "-├░ÔòØ├░┬®";
    }
    return e + "-├É├®├░┬®";
  }
}
test408: {
  function f() {
    if (e < 4) {
      return "├ôÔöñÔûæ├ôÔöñ┬Ñ├ôÔöñ├▒├ô├ü├¼├ôÔöñÔûæ├ôÔöñÔöÉ";
    }
    if (e < 12) {
      return "├ôÔöñÔûæ├ôÔöñ┬Ñ├ôÔöñ├ü├ôÔöñÔöÉ├ôÔöñÔûô├ô├ü├Ñ";
    }
    if (e < 17) {
      return "├ôÔöñ├½├ôÔöñ├£├ô├ü├¼├ôÔöñ├£ ├ôÔöñ├▓├ôÔöñÔöñ├ôÔöñÔöÉ├ôÔöñ├ù├ô├ü├¼├ôÔöñ├ù├ô├ü├¼";
    }
    if (e < 20) {
      return "├ôÔöñ├ü├ô├ü├¬├ôÔöñ├▓├ô├ü├╝├ôÔöñ┬┐├ô├ü├¼├ôÔöñ┬┐├ô├ü├º├ôÔöñÔûæ├ôÔöñ├®";
    }
    return "├ôÔöñÔûæ├ôÔöñ┬Ñ├ôÔöñ├▒├ô├ü├¼├ôÔöñÔûæ├ôÔöñÔöÉ";
  }
}
test409: {
  function f() {
    if (t) {
      return "├É├á├É├¼├░Ôöñ├É├á├É├¼├░┬ó ├É├╝├░├ü├░Ôòæ├É├ó├░┬ó├░Ôöñ";
    }
    return "├É├á├É├¼├░Ôöñ├É├á├É├¼├░┬ó ├É├╝├░├ü├░Ôòæ├É├ó├░┬ó├░Ôöñ├É├»├░┬ó";
  }
}
test410: {
  function f() {
    if (e < 12) {
      return "├è┬½├ï┬┐";
    }
    return "├è┬½├░├æ";
  }
}
test411: {
  function f() {
    if (e >= 0 && e < 6) {
      return "├ô├▒┬¼├ô├▒Ôòú├ô├▒┬Ñ├ô├▒ãÆ├ô├æ├º";
    }
    if (e < 12) {
      return "├ô├▒┬®├ô├▒├▓├ô├▒┬Ñ├ô├▒Ôöé├ô├æ├ç";
    }
    if (e < 17) {
      return "├ô├▒┬¬├ô├æ├╝├ô├▒┬¼├ô├▒┬Ñ├ô├▒Ôûæ├ô├æ├ç";
    }
    if (e < 20) {
      return "├ô├▒┬®├ô├▒┬Ñ├ô├▒┬╗├ô├▒├®├ô├▒├▓├ô├▒┬Ñ├ô├▒Ôöé├ô├æ├ç";
    }
    return "├ô├▒Ôûæ├ô├▒┬Ñ├ô├▒├▒├ô├æ├¼├ô├▒Ôûæ├ô├æ├ç";
  }
}
test412: {
  function f() {
    if (e < 11) {
      return "pagi";
    }
    if (e < 15) {
      return "tengahari";
    }
    if (e < 19) {
      return "petang";
    }
    return "malam";
  }
}
test413: {
  function f() {
    if (e < 11) {
      return "pagi";
    }
    if (e < 15) {
      return "tengahari";
    }
    if (e < 19) {
      return "petang";
    }
    return "malam";
  }
}
test414: {
  function f() {
    if (e < 3) {
      return "├ô├▒Ôûæ├ô├▒┬Ñ├ô├▒├▒├ô├▒ÔöÉ";
    }
    if (e < 12) {
      return "├ô├▒┬╝├ô├▒ÔöÉ├ô├▒Ôòú├ô├▒┬Ñ├ô├▒┬┐";
    }
    if (e < 16) {
      return "├ô├▒┬¬├ô├▒ÔöÉ├ô├▒├½├ô├▒├╝├ô├▒┬®├ô├æ├»";
    }
    if (e < 20) {
      return "├ô├▒┬®├ô├▒┬Ñ├ô├▒├╝├ô├▒├ÿ";
    }
    return "├ô├▒Ôûæ├ô├▒┬Ñ├ô├▒├▒├ô├▒ÔöÉ";
  }
}
test415: {
  function f() {
    if (e) {
      if (/-MMM-/.test(n)) {
        return i[e.month()];
      }
      return t[e.month()];
    }
    return t;
  }
}
test416: {
  function f() {
    if (e) {
      if (/-MMM-/.test(n)) {
        return i[e.month()];
      }
      return t[e.month()];
    }
    return t;
  }
}
test417: {
  function f() {
    if (e < 4) {
      return "├ô┬┐Ôûæ├ô┬┐┬Ñ├ô┬┐├▒";
    }
    if (e < 10) {
      return "├ô┬┐┬®├ô┬┐├ü├ô┬«├º├ô┬┐Ôûæ";
    }
    if (e < 17) {
      return "├ô┬┐┬¬├ô┬«├╝├ô┬┐┬¼├ô┬┐Ôòú├ô┬┐ÔöÉ├ô┬┐Ôûæ";
    }
    if (e < 20) {
      return "├ô┬┐┬®├ô┬┐ÔòØ├ô┬┐┬Ñ├ô┬┐┬½";
    }
    return "├ô┬┐Ôûæ├ô┬┐┬Ñ├ô┬┐├▒";
  }
}
test418: {
  function f() {
    if (i) {
      return "minuta";
    }
    return "minutÔöÇ├û";
  }
}
test419: {
  function f() {
    if (i) {
      return "godzina";
    }
    return "godzinÔöÇ├û";
  }
}
test420: {
  function f() {
    if (e) {
      if (/D MMMM/.test(t)) {
        return o[e.month()];
      }
      return n[e.month()];
    }
    return n;
  }
}
test421: {
  function f() {
    if (0 === this.day() || 6 === this.day()) {
      return "[Ôö£├£ltimo] dddd [Ôö£├ís] LT";
    }
    return "[Ôö£├£ltima] dddd [Ôö£├ís] LT";
  }
}
test422: {
  function f() {
    if (0 === this.day() || 6 === this.day()) {
      return "[Ôö£├£ltimo] dddd [Ôö£├ís] LT";
    }
    return "[Ôö£├£ltima] dddd [Ôö£├ís] LT";
  }
}
test423: {
  function f() {
    if (t % 10 === 1 && t % 100 !== 11) {
      return i[0];
    }
    if (t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)) {
      return i[1];
    }
    return i[2];
  }
}
test424: {
  function f() {
    if ("m" === n) {
      if (i) {
        return "├░ÔòØ├░┬®├░┬ó├É├ó├É├®├░Ôûæ";
      }
      return "├░ÔòØ├░┬®├░┬ó├É├ó├É├®├É├ó";
    }
    return e + " " + t(o[n], +e);
  }
}
test425: {
  function f() {
    if (2 === this.day()) {
      return "[├░├å├░┬Ñ] dddd, [├░Ôûô] LT";
    }
    return "[├░├å] dddd, [├░Ôûô] LT";
  }
}
test426: {
  function f() {
    if (2 === this.day()) {
      return "[├░├å├░┬Ñ] dddd, [├░Ôûô] LT";
    }
    return "[├░├å] dddd, [├░Ôûô] LT";
  }
}
test427: {
  function f() {
    if (e < 4) {
      return "├░┬ó├░┬Ñ├É├º├░┬®";
    }
    if (e < 12) {
      return "├É├ó├É├®├É├ç├░Ôûæ";
    }
    if (e < 17) {
      return "├░Ôöñ├░┬ó├É├à";
    }
    return "├░Ôûô├░├ü├É├º├░├ü├É├ç├░Ôûæ";
  }
}
test428: {
  function f() {
    if (e < 12) {
      return "├Å├ü├Å┬┐├Å┬í";
    }
    return "├ÅÔöñ├Å┬║Ôöÿ├á";
  }
}
test429: {
  function f() {
    if (e > 11) {
      if (i) {
        return "├ô├éÔöñ.├ô├Ç├ç.";
      }
      return "├ô├éÔöñ├ô├Ç├ó├ô├Ç├¿ ├ô├Ç├ç├ô├éÔòù├ô├Ç├Â";
    }
    if (i) {
      return "├ô├éÔöñ├ô├Ç├û.├ô├Ç├ç.";
    }
    return "├ô├éÔöñ├ô├Ç├û├ô├éÔòù ├ô├Ç├ç├ô├éÔòù├ô├Ç├Â";
  }
}
test430: {
  function f() {
    if (i || o) {
      return "pÔö£├¡r sekÔö£Ôòænd";
    }
    return "pÔö£├¡r sekundami";
  }
}
test431: {
  function f() {
    if (i || o) {
      return a + (t(e) ? "sekundy" : "sekÔö£Ôòænd");
    }
    return a + "sekundami";
  }
}
test432: {
  function f() {
    if (i) {
      return "minÔö£Ôòæta";
    }
    if (o) {
      return "minÔö£Ôòætu";
    }
    return "minÔö£Ôòætou";
  }
}
test433: {
  function f() {
    if (i || o) {
      return a + (t(e) ? "minÔö£Ôòæty" : "minÔö£Ôòæt");
    }
    return a + "minÔö£Ôòætami";
  }
}
test434: {
  function f() {
    if (i) {
      return "hodina";
    }
    if (o) {
      return "hodinu";
    }
    return "hodinou";
  }
}
test435: {
  function f() {
    if (i || o) {
      return a + (t(e) ? "hodiny" : "hodÔö£┬ín");
    }
    return a + "hodinami";
  }
}
test436: {
  function f() {
    if (i || o) {
      return "deÔö╝├¬";
    }
    return "dÔö╝├¬om";
  }
}
test437: {
  function f() {
    if (i || o) {
      return a + (t(e) ? "dni" : "dnÔö£┬í");
    }
    return a + "dÔö╝├¬ami";
  }
}
test438: {
  function f() {
    if (i || o) {
      return "mesiac";
    }
    return "mesiacom";
  }
}
test439: {
  function f() {
    if (i || o) {
      return a + (t(e) ? "mesiace" : "mesiacov");
    }
    return a + "mesiacmi";
  }
}
test440: {
  function f() {
    if (i || o) {
      return "rok";
    }
    return "rokom";
  }
}
test441: {
  function f() {
    if (i || o) {
      return a + (t(e) ? "roky" : "rokov");
    }
    return a + "rokmi";
  }
}
test442: {
  function f() {
    if (t || n) {
      return "nekaj sekund";
    }
    return "nekaj sekundami";
  }
}
test443: {
  function f() {
    if (t) {
      return "ena minuta";
    }
    return "eno minuto";
  }
}
test444: {
  function f() {
    if (t) {
      return "ena ura";
    }
    return "eno uro";
  }
}
test445: {
  function f() {
    if (t || n) {
      return "en dan";
    }
    return "enim dnem";
  }
}
test446: {
  function f() {
    if (t || n) {
      return "en mesec";
    }
    return "enim mesecem";
  }
}
test447: {
  function f() {
    if (t || n) {
      return "eno leto";
    }
    return "enim letom";
  }
}
test448: {
  function f() {
    if (e < 12) {
      return "PD";
    }
    return "MD";
  }
}
test449: {
  function f() {
    if (e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)) {
      if (e % 10 === 1) {
        return t[0];
      }
      return t[1];
    }
    return t[2];
  }
}
test450: {
  function f() {
    if (1 === n.length) {
      if ("y" === n && i) {
        return "jedna godina";
      }
      if (o || i) {
        return s[0];
      }
      return s[1];
    }
    a = t.correctGrammaticalCase(e, s);
    if ("yy" === n && i && "godinu" === a) {
      return e + " godina";
    }
    return e + " " + a;
  }
}
test451: {
  function f() {
    if (e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)) {
      if (e % 10 === 1) {
        return t[0];
      }
      return t[1];
    }
    return t[2];
  }
}
test452: {
  function f() {
    if (1 === n.length) {
      if ("y" === n && i) {
        return "├É├┐├░├ü├░Ôöñ├░┬ó├░Ôûæ ├░Ôöé├░┬Ñ├░Ôöñ├░┬®├░┬ó├░Ôûæ";
      }
      if (o || i) {
        return s[0];
      }
      return s[1];
    }
    a = t.correctGrammaticalCase(e, s);
    if ("yy" === n && i && "├░Ôöé├░┬Ñ├░Ôöñ├░┬®├░┬ó├É├ó" === a) {
      return e + " ├░Ôöé├░┬Ñ├░Ôöñ├░┬®├░┬ó├░Ôûæ";
    }
    return e + " " + a;
  }
}
test453: {
  function f() {
    if (e < 11) {
      return "ekuseni";
    }
    if (e < 15) {
      return "emini";
    }
    if (e < 19) {
      return "entsambama";
    }
    return "ebusuku";
  }
}
test454: {
  function f() {
    if (e < 2) {
      return " ├ô┬½┬╗├ô┬½┬Ñ├ô┬½┬½├ô┬½┬½├ô┬╗├¼";
    }
    if (e < 6) {
      return " ├ô┬½├ü├ô┬╗├¬├ô┬½├▓├ô┬½ÔûÆ├ô┬╗├¬";
    }
    if (e < 10) {
      return " ├ô┬½├▓├ô┬½┬Ñ├ô┬½Ôûô├ô┬╗├¬";
    }
    if (e < 14) {
      return " ├ô┬½┬┐├ô┬½├║├ô┬╗├¼├ô┬½┬¼├ô┬½├▓├ô┬½Ôûô├ô┬╗├¼";
    }
    if (e < 18) {
      return " ├ô┬½├ä├ô┬½ÔûÆ├ô┬╗├¼├ô┬½┬¼├ô┬½┬Ñ├ô┬½ãÆ├ô┬╗├╝";
    }
    if (e < 22) {
      return " ├ô┬½┬½├ô┬½┬Ñ├ô┬½Ôûô├ô┬╗├¬";
    }
    return " ├ô┬½┬╗├ô┬½┬Ñ├ô┬½┬½├ô┬½┬½├ô┬╗├¼";
  }
}
test455: {
  function f() {
    if (e < 4) {
      return "├ôÔûæÔûæ├ôÔûæ┬Ñ├ôÔûæ├▒├ôÔûÆ├¼├ôÔûæÔûæ├ôÔûæÔöÉ";
    }
    if (e < 10) {
      return "├ôÔûæ├½├ôÔûæ┬¬├ôÔûæ┬╗├ôÔûæ├®";
    }
    if (e < 17) {
      return "├ôÔûæ┬½├ôÔûæ┬║├ôÔûÆ├¼├ôÔûæ┬╗├ôÔûæ┬Ñ├ôÔûæÔòú├ôÔûÆ├¼├ôÔûæ┬┐├ôÔûæ├®";
    }
    if (e < 20) {
      return "├ôÔûæ┬®├ôÔûæ┬Ñ├ôÔûæ┬╗├ôÔûæ├®├ôÔûæ├▒├ôÔûÆ├¼├ôÔûæÔûæ├ôÔûæ├®";
    }
    return "├ôÔûæÔûæ├ôÔûæ┬Ñ├ôÔûæ├▒├ôÔûÆ├¼├ôÔûæÔûæ├ôÔûæÔöÉ";
  }
}
test456: {
  function f() {
    if (e < 4) {
      return "├É├¬├░Ôûæ├░ÔûÆ";
    }
    if (e < 11) {
      return "├É├╝├É├ó├░ÔûÆ├èÔöé";
    }
    if (e < 16) {
      return "├É├ç├ï┬╗├░├Ç";
    }
    if (e < 19) {
      return "├░ÔûÆ├░├ü├░Ôöé├░┬Ñ├èÔöé";
    }
    return "├É├¬├░Ôûæ├░ÔûÆ";
  }
}
test457: {
  function f() {
    if (e < 12) {
      return "├ô┬®├╝├ôÔòú├¬├ô┬®┬í├ô┬®├û├ôÔòú├ç├ô┬®├╣├ô┬®├ü├ôÔòú├¬├ô┬®├│├ô┬®├º";
    }
    return "├ô┬®┬¢├ô┬®├æ├ô┬®ÔûÆ├ô┬®├º├ôÔòú├ç├ô┬®├╣├ô┬®├ü├ôÔòú├¬├ô┬®├│├ô┬®├º";
  }
}
test458: {
  function f() {
    if (e < 12) {
      if (i) {
        return "Ôö£├éÔö£├é";
      }
      return "Ôö£├╗Ôö£├╗";
    }
    if (i) {
      return "Ôö£├és";
    }
    return "Ôö£├╗S";
  }
}
test459: {
  function f() {
    if (n) {
      return o[i][0];
    }
    if (t) {
      return o[i][0];
    }
    return o[i][1];
  }
}
test460: {
  function f() {
    if (e > 11) {
      if (i) {
        return "d'o";
      }
      return "D'O";
    }
    if (i) {
      return "d'a";
    }
    return "D'A";
  }
}
test461: {
  function f() {
    if (n < 600) {
      return "Ôöÿ├¿Ôûê├ë├ÅÔûÆÔöÿ├½Ôöÿ├á Ôöÿ├óÔûê├ëÔöî├ÑÔûê├▓";
    }
    if (n < 900) {
      return "├ÅÔöéÔûê├▓Ôöî┬ÑÔûê├▓├ÅÔûÆ";
    }
    if (n < 1130) {
      return "Ôöî├ÑÔûê├¬├ÅÔöñ├Å┬¼Ôöÿ├½Ôöÿ├Ñ ├Å┬┐Ôûê├º├ÅÔûÆÔûê├ºÔöÿ├Ñ";
    }
    if (n < 1230) {
      return "Ôöî├ÑÔûê├¬├ÅÔöñ";
    }
    if (n < 1800) {
      return "Ôöî├ÑÔûê├¬├ÅÔöñ├Å┬¼Ôöÿ├½Ôöÿ├Ñ Ôöÿ├óÔûê├ëÔöÿ├¿Ôöÿ├½Ôöÿ├Ñ";
    }
    return "Ôöÿ├óÔûê├▓Ôöî├Ñ";
  }
}
test462: {
  function f() {
    if (t % 10 === 1 && t % 100 !== 11) {
      return i[0];
    }
    if (t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)) {
      return i[1];
    }
    return i[2];
  }
}
test463: {
  function f() {
    if ("m" === n) {
      if (i) {
        return "├É├á├░Ôûô├░┬®├░Ôòù├░┬®├░┬ó├░Ôûæ";
      }
      return "├É├á├░Ôûô├░┬®├░Ôòù├░┬®├░┬ó├É├ó";
    }
    if ("h" === n) {
      if (i) {
        return "├░Ôöé├░┬Ñ├░Ôöñ├░┬®├░┬ó├░Ôûæ";
      }
      return "├░Ôöé├░┬Ñ├░Ôöñ├░┬®├░┬ó├É├ó";
    }
    return e + " " + t(o[n], +e);
  }
}
test464: {
  function f() {
    if (e === !0) {
      return n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1));
    }
    if (e) {
      i = /(\[[├░├å├░Ôûô├░├║├É├ó]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:├░ÔòØ├░┬®├░┬ó├É├ó├░Ôòù├░┬Ñ├É├╣|├░┬ó├░Ôûæ├É├╝├É├®├É├ó├░ÔöÉ├░┬ó├░┬Ñ├É├╣)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
      return n[i][e.day()];
    }
    return n.nominative;
  }
}
test465: {
  function f() {
    if (e < 4) {
      return "├░┬ó├░┬Ñ├É├º├É├╗";
    }
    if (e < 12) {
      return "├É├ç├░Ôûæ├░┬ó├░Ôòæ├É├ó";
    }
    if (e < 17) {
      return "├░Ôöñ├░┬ó├É├à";
    }
    return "├░Ôûô├░├ü├É├º├░┬Ñ├É├ç├░Ôûæ";
  }
}
test466: {
  function f() {
    if (e < 12) {
      return "├Å├ü├Å┬┐├Å┬í";
    }
    return "├ÅÔöñ├Å┬║Ôöÿ├á";
  }
}
test467: {
  function f() {
    if (e < 12) {
      if (i) {
        return "sa";
      }
      return "SA";
    }
    if (i) {
      return "ch";
    }
    return "CH";
  }
}
test468: {
  function f() {
    if (n < 600) {
      return "├ò├º├«┬Á├û┬┐";
    }
    if (n < 900) {
      return "┬Á├╣┬«├Á┬®├¿";
    }
    if (n < 1130) {
      return "├Á┬®├¿├ò├¼├¬";
    }
    if (n < 1230) {
      return "├Á┬®┬í├ò├¼├¬";
    }
    if (n < 1800) {
      return "├Á┬®├»├ò├¼├¬";
    }
    return "┬Á├û├£├Á┬®├¿";
  }
}
test469: {
  function f() {
    if (e.week() !== this.week()) {
      return "[├Á┬®├»]dddLT";
    }
    return "[┬Á┬ú┬╝]dddLT";
  }
}
test470: {
  function f() {
    if (this.week() !== e.week()) {
      return "[├Á┬®├¿]dddLT";
    }
    return "[┬Á┬ú┬╝]dddLT";
  }
}
test471: {
  function f() {
    if (n < 600) {
      return "├ò├º├«┬Á├û┬┐";
    }
    if (n < 900) {
      return "┬Á├╣┬«├Á┬®├¿";
    }
    if (n < 1200) {
      return "├Á┬®├¿├ò├¼├¬";
    }
    if (1200 === n) {
      return "├Á┬®┬í├ò├¼├¬";
    }
    if (n < 1800) {
      return "├Á┬®├»├ò├¼├¬";
    }
    return "┬Á├û├£├Á┬®├¿";
  }
}
test472: {
  function f() {
    if (n < 600) {
      return "├ò├º├«┬Á├û┬┐";
    }
    if (n < 900) {
      return "┬Á├╣┬«├Á┬®├¿";
    }
    if (n < 1130) {
      return "├Á┬®├¿├ò├¼├¬";
    }
    if (n < 1230) {
      return "├Á┬®┬í├ò├¼├¬";
    }
    if (n < 1800) {
      return "├Á┬®├»├ò├¼├¬";
    }
    return "┬Á├û├£├Á┬®├¿";
  }
}
test473: {
  function f() {
    if (n < 600) {
      return "├ò├º├«┬Á├û┬┐";
    }
    if (n < 900) {
      return "┬Á├╣┬«├Á┬®├¿";
    }
    if (n < 1130) {
      return "├Á┬®├¿├ò├¼├¬";
    }
    if (n < 1230) {
      return "├Á┬®┬í├ò├¼├¬";
    }
    if (n < 1800) {
      return "├Á┬®├»├ò├¼├¬";
    }
    return "┬Á├û├£├Á┬®├¿";
  }
}
test474: {
  function f() {
    if (t.retry(o)) {
      i._logger.warning("sendEvents: on the url", n, "will retry...");
      return;
    }
    if (o) {
      return i._callbackAndLeave(t.mainError(), e);
    }
    return i._callbackAndLeave(null, e);
  }
}
test475: {
  function f() {
    if (e.requiredVersion) {
      return a("ui.popup.accessDenied.badVersion", n(e.currentVersion), n(e.requiredVersion));
    }
    return a("ui.popup.accessDenied.badVersion");
  }
}
test476: {
  function f() {
    if (i) {
      return console.warn("PowerManager already active");
    }
    window.powerManagement.dim(function () {
      i = !0;
    }, function (e) {
      console.warn("PowerManager failed to acquire wakelock", e);
    });
    return;
  }
}
test477: {
  function f() {
    if (i) {
      window.powerManagement.release(function () {
        i = !1;
      }, function (e) {
        console.warn("PowerManager failed to release wakelock", e);
      });
      return;
    }
    return console.warn("PowerManager was not active");
  }
}
test478: {
  function f() {
    if (e.isFightStarted) {
      return t();
    }
    o.tapOptions.mode = "fightPlacement";
    return;
  }
}
test479: {
  function f() {
    if (e) {
      this.lockMap[e] = !0;
      this.locked = !0;
      this.cancelTransform();
      return;
    }
    return console.error(new Error("Foreground.lock: no reason provided"));
  }
}
test480: {
  function f() {
    if (this.closeTweener) {
      this.closeTweener.cancel();
      return e();
    }
    this.closeTweener = u.tween(this, f, {
      time: 150,
      delay: 0,
      easing: "ease-out"
    }, e);
    return;
  }
}
test481: {
  function f() {
    if (i) {
      window.isoEngine.displayEnemyMovementZone(i);
      if (window.foreground.isSpellSelected() && M.allowDamagePreview) {
        window.gui.damagePreview.preview(window.foreground.tapOptions.spellId, i.data.disposition.cellId);
        return !1;
      }
      T.appendChild(i.createStatsTooltipContent());
      return !0;
    }
    I.openState && (e(), window.isoEngine.removeEnemyMovementZone());
    window.gui.damagePreview.hide();
    return !1;
  }
}
test482: {
  function f() {
    if (b) {
      e(u);
      t(u);
      return;
    }
    r.cancelCameraMovement();
    i = Date.now();
    c.zoom === c.minZoom && (a = s = 0);
    h = .5 * h + .5 * -a;
    p = .5 * p + .5 * -s;
    l.move(n, o, -a, -s, d);
    return;
  }
}
test483: {
  function f() {
    if ("fightPlacement" === window.foreground.tapOptions.mode) {
      return this.getOrdonnedPreFighters();
    }
    return this.turnsList;
  }
}
test484: {
  function f() {
    if (n) {
      return i(n);
    }
    r.id === t && a.spells[e] && s[e].setLevel(a.spells[e].level);
    o.spells[e] = s[e];
    return i(null, o.spells[e]);
  }
}
test485: {
  function f() {
    if (n) {
      n.data.updateData({
        look: t.look,
        disposition: t.disposition
      });
      "fightPlacement" === window.foreground.tapOptions.mode && (n.updateFighterIllustration(), a.emit("UpdatePreFightersList", i));
      return;
    }
    return console.error("Refreshing fighter failed, fighter " + i + " does not exist");
  }
}
test486: {
  function f() {
    if (i) {
      i.setAlive(!1);
      i.dispel(!1, !1, !0);
      a.removeLinkedBuff(t);
      return;
    }
    return console.error(new Error("Vanish failed, fighter does not exist"));
  }
}
test487: {
  function f() {
    if (t) {
      t.clear();
      delete this._fighters[e];
      return;
    }
    return console.warn("Removing fighter failed, it does not exist");
  }
}
test488: {
  function f() {
    if (e) {
      return console.error(e);
    }
    t.resetInitialCooldown(i.turnCount);
    return;
  }
}
test489: {
  function f() {
    if (e) {
      return t(e);
    }
    if (n) {
      r.spell = n;
      i();
      return;
    }
    return t(new Error("unable to find spell id " + s));
  }
}
test490: {
  function f() {
    if (o) {
      w.each(t, function (t, i) {
        if ("GameFightSpellCooldown" !== t._type) return i();
        var a = t.spellId,
          s = o.spells[a];
        if (s) {
          return n._restoreSpellCooldown(t, s, i);
        }
        n.getFighterSpell(a, e, function (e, o) {
          if (e) {
            return i(e);
          }
          return n._restoreSpellCooldown(t, o, i);
        });
        return;
      }, function (e) {
        i(e);
      });
      return;
    }
    return console.error(new Error("Restoring cooldowns failed, fighter does not exist."));
  }
}
test491: {
  function f() {
    if (s) {
      return n._restoreSpellCooldown(t, s, i);
    }
    n.getFighterSpell(a, e, function (e, o) {
      if (e) {
        return i(e);
      }
      return n._restoreSpellCooldown(t, o, i);
    });
    return;
  }
}
test492: {
  function f() {
    if (e) {
      return i(e);
    }
    return n._restoreSpellCooldown(t, o, i);
  }
}
test493: {
  function f() {
    if (c) {
      t(s, c, e.actionId, i);
      return;
    }
    c = new o();
    c.casterId = n.getFighter(e.sourceId) ? e.sourceId : e.effect.targetId;
    return n.getFighterSpell(s.spellId, c.casterId, function (n, o) {
      if (n) {
        return i(n);
      }
      if (o) {
        c.spell = o;
        a[s.targetId][s.turnDuration][s.spellId] = c;
        t(s, c, e.actionId, i);
        return;
      }
      return i(new Error("unable to find spell id " + s.spellId));
    });
  }
}
test494: {
  function f() {
    if (n) {
      return i(n);
    }
    if (o) {
      c.spell = o;
      a[s.targetId][s.turnDuration][s.spellId] = c;
      t(s, c, e.actionId, i);
      return;
    }
    return i(new Error("unable to find spell id " + s.spellId));
  }
}
test495: {
  function f() {
    if (i) {
      return console.error(i);
    }
    return t._restoreBuffs(e.effects);
  }
}
test496: {
  function f() {
    if (e.init === t.init) {
      return t.fighter - e.fighter;
    }
    return t.init - e.init;
  }
}
test497: {
  function f() {
    if (a) {
      window.gui.emit(e._messageType, e);
      return a.call(this, e, i);
    }
    window.gui.emit(e._messageType, e);
    i();
    return;
  }
}
test498: {
  function f() {
    if ("EffectInstanceDice" === this.effect._type) {
      return this.effect.getParams()[0];
    }
    return null;
  }
}
test499: {
  function f() {
    if ("EffectInstanceDice" === this.effect._type) {
      return this.effect.getParams()[1];
    }
    return null;
  }
}
test500: {
  function f() {
    if ("EffectInstanceInteger" === this.effect._type) {
      return this.effect.value;
    }
    if ("EffectInstanceDice" === this.effect._type) {
      return this.effect.getParams()[2];
    }
    return null;
  }
}
test501: {
  function f() {
    if (e) {
      return o(e);
    }
    s._effectEnrichment();
    return o(null, s);
  }
}
test502: {
  function f() {
    if (c) {
      return this.refreshDescription(t);
    }
    return t();
  }
}
test503: {
  function f() {
    if (a[e]) {
      return a[e][0];
    }
    return null;
  }
}
test504: {
  function f() {
    if (0 === i.length) {
      return t();
    }
    w.getData("Effects", i, function (e, n) {
      if (e) {
        return t(e);
      }
      t(null, g.extractElementsFrom(i, n, !0));
      return;
    });
    return;
  }
}
test505: {
  function f() {
    if (e) {
      return t(e);
    }
    t(null, g.extractElementsFrom(i, n, !0));
    return;
  }
}
test506: {
  function f() {
    if (n) {
      return i(n);
    }
    if (0 === Object.keys(o).length) {
      return i(null, e);
    }
    m.each(Object.keys(o), function (e, i) {
      var n = [];
      for (var a in o[e]) if (o[e].hasOwnProperty(a)) {
        var s = parseInt(a, 10);
        n.indexOf(s) === -1 && n.push(s);
      }
      w.getData(e, n, function (a, s) {
        if (a) return i(a);
        for (var l = g.extractElementsFrom(n, s, !0, y.getKey(e)), c = 0; c < n.length; c += 1) {
          var d = n[c];
          if (!l[d]) {
            for (var u = o[e][d], h = 0; h < u.length; h += 1) {
              var p = u[h];
              if (p.setBroken(!0), r(e, d, p.effectId)) {
                var m = "id " + d + " unavailable in table " + e;
                m += " caller: " + p.getCaller(), m += " for effectId: " + p.effectId, M.error(new Error(m));
              }
            }
            l[d] = A;
          }
        }
        o[e] = l, t || (t = {}), t[e] || (t[e] = {});
        for (var f in l) l.hasOwnProperty(f) && (t[e][f] = l[f]);
        i();
      });
    }, function (n) {
      if (n) {
        return i(n);
      }
      l(e, t, i);
      return;
    });
    return;
  }
}
test507: {
  function f() {
    if (n) {
      return i(n);
    }
    l(e, t, i);
    return;
  }
}
test508: {
  function f() {
    if (this._type) {
      R[this._type] && (this._type = R[this._type]);
      return;
    }
    this.hasOwnProperty("diceNum") ? this._type = "EffectInstanceDice" : this.hasOwnProperty("year") ? this._type = "EffectInstanceDate" : this.hasOwnProperty("days") ? this._type = "EffectInstanceDuration" : this.hasOwnProperty("min") ? this._type = "EffectInstanceMinMax" : this.hasOwnProperty("monsterCount") ? this._type = "EffectInstanceLadder" : this.hasOwnProperty("monsterFamilyId") ? this._type = "EffectInstanceCreature" : this.hasOwnProperty("mountId") ? this._type = "EffectInstanceMount" : this.hasOwnProperty("text") ? this._type = "EffectInstanceString" : this._type = "EffectInstanceInteger";
    return;
  }
}
test509: {
  function f() {
    if (this.hasOwnProperty(e)) {
      return this[e];
    }
    return O[e];
  }
}
test510: {
  function f() {
    if (this.delay) {
      return f("ui.common.delayTurn", this.delay, this.delay <= 1);
    }
    if (!this.duration || isNaN(this.duration)) {
      return "";
    }
    if (this.duration < 0) {
      return f("ui.common.infinit");
    }
    if (this.duration > 1) {
      return f("ui.common.turn", this.duration, !0);
    }
    if (e) {
      return f("ui.common.lastTurn");
    }
    return f("ui.common.turn", this.duration, !1);
  }
}
test511: {
  function f() {
    if (this.rawZone) {
      return t.parseZone(this.rawZone);
    }
    return {
      zoneShape: this.getValue("zoneShape"),
      zoneSize: this.getValue("zoneSize"),
      zoneMinSize: this.getValue("zoneMinSize"),
      zoneEfficiencyPercent: this.getValue("zoneEfficiencyPercent"),
      zoneMaxEfficiency: this.getValue("zoneMaxEfficiency")
    };
  }
}
test512: {
  function f() {
    if (e) {
      return e(t);
    }
    t && M.error(t);
    return;
  }
}
test513: {
  function f() {
    if (e) {
      return n && n(e);
    }
    a.modifType = 0;
    a.spellId = s;
    a._delta = r;
    return n && n(null, t);
  }
}
test514: {
  function f() {
    if (e) {
      return n && n(e);
    }
    a.statName = s.getActionStatName(i);
    a.isABoost = s.getIsABoost(i);
    return n && n(null, t);
  }
}
test515: {
  function f() {
    if ("EffectInstanceDice" === this.effect._type) {
      if (this.isABoost) {
        return this.effect.diceNum;
      }
      return -this.effect.diceNum;
    }
    return 0;
  }
}
test516: {
  function f() {
    if (e) {
      return n && n(e);
    }
    a.statName = s.getActionStatName(i);
    a.stateId = r;
    return n && n(null, t);
  }
}
test517: {
  function f() {
    if (e) {
      e.addState(this.stateId);
      window.gui.shortcutBar.updateSpellsAvailability();
      o.prototype.apply.call(this);
      return;
    }
    return console.error("Applying state buff failed, fighter does not exist.");
  }
}
test518: {
  function f() {
    if (t) {
      return e(t);
    }
    return e(null, i[0] ? i[0].nameId : "");
  }
}
test519: {
  function f() {
    if (s) {
      return "{style:" + s + "Damage," + e + "}";
    }
    return e;
  }
}
test520: {
  function f() {
    if (e) {
      return i(e);
    }
    n = C("ui.fight.startTrap", d.name, t.getName(), u.name);
    return i(null, n);
  }
}
test521: {
  function f() {
    if (e) {
      return i(e);
    }
    n = C("ui.fight.dispellSpell", d.name, t.getName());
    return i(null, n);
  }
}
test522: {
  function f() {
    if (n) {
      if (c[1] !== w.WEAPON_SPELL_ID) {
        return i(null, s("ui.fight.launchSpell", d.name, n, c[2]));
      }
      a(function (e, t) {
        if (e) {
          return i(e);
        }
        return i(null, s("ui.fight.launchSpell", d.name, t, c[2]));
      });
      return;
    }
    return i(null, "");
  }
}
test523: {
  function f() {
    if (e) {
      return i(e);
    }
    return i(null, s("ui.fight.launchSpell", d.name, t, c[2]));
  }
}
test524: {
  function f() {
    if (e) {
      return i(e);
    }
    return i(null, s("ui.fight.closeCombat", d.name, t[0].nameId, c[2]));
  }
}
test525: {
  function f() {
    if (e.showChatMessage === !1) {
      return i();
    }
    if (e.effectId === -1) {
      return l(e, t, i);
    }
    f.getDataMap("SpellEffects", [e.effectId], function (n, o) {
      var a = o && o[e.effectId];
      if (n) {
        console.error("Unable to retrieve the effects visibility for " + e.effectId + ", " + n);
        return l(e, t, i);
      }
      if (a && !a.visibleInFightLog) {
        return i();
      }
      return l(e, t, i);
    });
    return;
  }
}
test526: {
  function f() {
    if (n) {
      console.error("Unable to retrieve the effects visibility for " + e.effectId + ", " + n);
      return l(e, t, i);
    }
    if (a && !a.visibleInFightLog) {
      return i();
    }
    return l(e, t, i);
  }
}
test527: {
  function f() {
    if (e) {
      return t(e);
    }
    n && i.push(n);
    return t();
  }
}
test528: {
  function f() {
    if (this.isShieldBarVisible) {
      return e - m;
    }
    return e;
  }
}
test529: {
  function f() {
    if (this.isTurnPassed()) {
      return e + 1;
    }
    return e;
  }
}
test530: {
  function f() {
    if (t) {
      return this.data.teamId === t.data.teamId;
    }
    console.warn("Fighter " + e + " not found");
    return !1;
  }
}
test531: {
  function f() {
    if (null === e) {
      this.removeHighlight();
      return;
    }
    this._highlight._red = e.red;
    this._highlight._green = e.green;
    this._highlight._blue = e.blue;
    this._highlight._alpha = e.alpha;
    this.tint[0] = this.hue[0] * e.red;
    this.tint[1] = this.hue[1] * e.green;
    this.tint[2] = this.hue[2] * e.blue;
    this.tint[3] = this.hue[3] * e.alpha * this._alpha;
    this.forceRefresh();
    return;
  }
}
test532: {
  function f() {
    if (t === -1) {
      return console.error("Subentity does not exist.");
    }
    e.animManager.cleanupAnimations();
    this.subentities.splice(t, 1);
    this.hasSubentities = this.subentities.length > 0;
    return;
  }
}
test533: {
  function f() {
    if (this.type === s.permanent) {
      return this;
    }
    this.nLocks += 1;
    this.cache._holdElement(this);
    return this;
  }
}
test534: {
  function f() {
    if (this.type === s.permanent) {
      return this;
    }
    this.nLocks -= 1;
    0 === this.nLocks ? this.cache._releaseElement(this) : this.nLocks < 0 && console.error(new Error("[ElementHandle.release] Number of locks is negative: " + this.id));
    return;
  }
}
test535: {
  function f() {
    if (e.reference.container !== this.actives) {
      console.warn("[Cache3State.archiveElement] The element cannot be archived:", e.id);
      return;
    }
    e.type === s.throwable ? this._removeElement(e) : (this.actives.removeByReference(e.reference), e.reference = this.archives.addBack(e), this._clean());
    return;
  }
}
test536: {
  function f() {
    if (e.container !== this) {
      console.warn("[DoublyList.removeByReference] Trying to remove a node that does not belong to the list");
      return e;
    }
    null === e.next ? this.last = e.previous : e.next.previous = e.previous;
    null === e.previous ? this.first = e.next : e.previous.next = e.next;
    e.container = null;
    this.length -= 1;
    return null;
  }
}
test537: {
  function f() {
    if (r) {
      t(r);
      return;
    }
    o.loadImage(e, function (o) {
      var r;
      r = o === n.EMPTY_IMAGE ? i.getEmptyTexture() : i.createTexture(o, e, a, s), t(r);
    });
    return;
  }
}
test538: {
  function f() {
    if (0 === l.length) {
      return i && i();
    }
    o.loadImages(l, function (e, i) {
      var o,
        d = l[i];
      o = e === n.EMPTY_IMAGE ? a.getEmptyTexture() : a.createTexture(e, d, s, r), t(o, c[i]);
    }, i);
    return;
  }
}
test539: {
  function f() {
    if (t) {
      return t;
    }
    t = this.externalSymbols[e];
    if (t) {
      return t.last.object;
    }
    return null;
  }
}
test540: {
  function f() {
    if (t) {
      return t;
    }
    return null;
  }
}
test541: {
  function f() {
    if (t) {
      return t.nbFrames;
    }
    console.warn("Symbol " + e + " not registered in the template of the character");
    return 0;
  }
}
test542: {
  function f() {
    if (t) {
      return t.duration;
    }
    console.warn("Symbol " + e + " not registered in the template of the character");
    return 0;
  }
}
test543: {
  function f() {
    if (e.direction === -1) {
      return -1;
    }
    if (this.isFx && 0 === e.direction) {
      return 0;
    }
    if (this.only4Directions && 0 === (1 & e.direction)) {
      return e.direction + 1;
    }
    return e.direction;
  }
}
test544: {
  function f() {
    if (this._cleared) {
      console.warn("[AnimationManager.clear] Trying to clear an already cleared animation manager");
      return;
    }
    this.cleanupAnimationsAndRemoveSubentities();
    this.template.clear();
    this.sprite.renderer.unlockBuffer(this.frameData.id);
    this.frameData.id = "";
    this._cleared = !0;
    return;
  }
}
test545: {
  function f() {
    if (t) {
      return t.duration;
    }
    return 0;
  }
}
test546: {
  function f() {
    if (this.stopping) {
      p._warn("[Playable.stop] playable is already stopping");
      return this;
    }
    if (this.playing || this.starting) {
      this.stopping = !0;
      this.starting = !1;
      this._finished();
      return this;
    }
    p._warn("[Playable.stop] playable is not playing");
    return this;
  }
}
test547: {
  function f() {
    if (this._transitions.length > 0) {
      return this._transitions[this._transitions.length - 1].toObject;
    }
    if (null === this._from) {
      return this._setFrom();
    }
    return this._from;
  }
}
test548: {
  function f() {
    if (this._transitions.length > 0) {
      return this._setFrom();
    }
    if (null === this._from) {
      return this._setFrom();
    }
    return this._from;
  }
}
test549: {
  function f() {
    if (e < .5) {
      return 2 * e * e;
    }
    return 2 * (2 * e - e * e) - 1;
  }
}
test550: {
  function f() {
    if (e < .5) {
      return 4 * e * e * e;
    }
    return 4 * (3 * e - 3 * e * e + e * e * e) - 3;
  }
}
test551: {
  function f() {
    if (e < .5) {
      return Math.pow(2 * e, t) / 2;
    }
    return (2 - Math.pow(2 * (1 - e), t)) / 2;
  }
}
test552: {
  function f() {
    if (e < .5) {
      return (1 - Math.cos(i * e)) / 2;
    }
    return (1 + Math.sin(i * (e - .5))) / 2;
  }
}
test553: {
  function f() {
    if (e < .5) {
      return (1 - Math.pow(a, 2 * t * e)) / (1 - Math.pow(a, t)) / 2;
    }
    return .5 + (1 - Math.pow(a, t - 2 * t * e)) / (1 - Math.pow(a, -t)) / 2;
  }
}
test554: {
  function f() {
    if (e < .5) {
      return (1 - Math.sqrt(1 - 4 * e * e)) / 2;
    }
    return (1 + Math.sqrt(-3 + 8 * e - 4 * e * e)) / 2;
  }
}
test555: {
  function f() {
    if (e < .5) {
      if (0 === e) {
        return 0;
      }
      t /= t + 1;
      i = (1 + t) * Math.log(2 * e) / Math.log(t);
      return .5 * Math.cos(i) * Math.pow(t, i);
    }
    if (1 === e) {
      return 1;
    }
    t /= t + 1;
    i = (1 + t) * Math.log(2 - 2 * e) / Math.log(t);
    return .5 + .5 * (1 - Math.cos(i) * Math.pow(t, i));
  }
}
test556: {
  function f() {
    if (e < .5) {
      if (0 === e) {
        return 0;
      }
      t /= t + 1;
      i = (1 + t) * Math.log(2 * e) / Math.log(t);
      return Math.abs(.5 * Math.cos(i) * Math.pow(t, i));
    }
    if (1 === e) {
      return 1;
    }
    t /= t + 1;
    i = (1 + t) * Math.log(2 - 2 * e) / Math.log(t);
    return .5 + .5 * (1 - Math.abs(Math.cos(i) * Math.pow(t, i)));
  }
}
test557: {
  function f() {
    if (e < .5) {
      e *= 2;
      return .5 * (e * e * ((t + 1) * e - t));
    }
    e = 2 * e - 2;
    return .5 * (e * e * ((t + 1) * e + t)) + 1;
  }
}
test558: {
  function f() {
    if (this._processingCb[e]) {
      this._processingCb[e].push(t);
      return;
    }
    this._processingCb[e] || (this._processingCb[e] = []);
    this._processingCb[e].push(t);
    this._staticContent.getDataMap("SoundBones", [e], function (t, o) {
      if (t) return i(t, e, null);
      var r = o[e];
      if (!r) return i(t, e, null);
      if (!r.keys) return n(a._logger, "No keys soundBonesData for bonesId: " + e), i(t, e, null);
      if (!r.values) return n(a._logger, "No values soundBonesData for bonesId: " + e), i(t, e, null);
      var l = new s(e, r.keys, r.values);
      return i(t, e, l);
    });
    return;
  }
}
test559: {
  function f() {
    if (e) {
      return i(e);
    }
    if (n) {
      return o(a._audioManager, n, t, i);
    }
    return i();
  }
}
test560: {
  function f() {
    if (this._availableFrames[e]) {
      return this._bonesId + "/" + this._animName + ":" + e + "_" + t;
    }
    return "";
  }
}
test561: {
  function f() {
    if (this._availableFrames[e]) {
      if (this._cacheIds[e]) {
        return this._cacheIds[e];
      }
      return [this.getId(e, n)];
    }
    return [""];
  }
}
test562: {
  function f() {
    if (0 === e.type) {
      return {
        parent: e,
        child: null
      };
    }
    return {
      parent: null,
      child: e
    };
  }
}
test563: {
  function f() {
    if (u[e.type]) {
      return {
        parent: e,
        child: null
      };
    }
    if (h[e.type]) {
      return {
        parent: e,
        child: e
      };
    }
    return {
      parent: null,
      child: e
    };
  }
}
test564: {
  function f() {
    if (void 0 === i) {
      console.warn("[WebGLRenderer.drawLineBatch] No buffer loaded for", e);
      this.stopProgram();
      return;
    }
    this._drawBatch(i);
    this.stopProgram();
    return;
  }
}
test565: {
  function f() {
    if (void 0 === t) {
      console.warn("[WebGLRenderer.drawBoxBatch] No buffer loaded for", e);
      this.stopProgram();
      return;
    }
    this._drawBatch(t);
    this.stopProgram();
    return;
  }
}
test566: {
  function f() {
    if (e.isMaskUse) {
      this.useProgram(this._programMask, {
        mask: this._renderTarget.textureBinder
      });
      l.uniform4fv(this._currentProgram.uniforms.uBbox, t);
      this.stopTextureRendering(!0, !0);
      return;
    }
    e.isMaskStop && (i.pop().texture.release(), this.stopProgram());
    return;
  }
}
test567: {
  function f() {
    if (t) {
      return e(t);
    }
    b = i;
    e();
    return;
  }
}
test568: {
  function f() {
    if (e) {
      return console.error(e);
    }
    console.log("data:", t);
    return;
  }
}
test569: {
  function f() {
    if (e) {
      return i(e);
    }
    n.effectInstances = t.effectInstances;
    delete t.effectInstances;
    n._tables = t;
    n.spell = t.spells[n.id];
    if (n.spell) {
      n.setLevel(n.level || 1);
      n.isLoaded = !0;
      i();
      return;
    }
    return i(new Error("missing static data for spell id " + n.id));
  }
}
test570: {
  function f() {
    if (this.spell) {
      return this.spell[e];
    }
    console.error("Spell#getPropertyFromSpell this.spell is undefined or null #", this.id);
    return null;
  }
}
test571: {
  function f() {
    if (i <= 0) {
      return 0;
    }
    if (t) {
      return Math.max(i - t.value.getTotalStat(), 2);
    }
    return i;
  }
}
test572: {
  function f() {
    if (e) {
      return t(e);
    }
    t(null, o);
    return;
  }
}
test573: {
  function f() {
    if (t && t.spells) {
      return i(null, I.extractElementsFrom(e, t.spells, !0));
    }
    A.getData("Spells", e, function (t, n) {
      if (t) {
        return i(t);
      }
      i(null, I.extractElementsFrom(e, n, !0));
      return;
    });
    return;
  }
}
test574: {
  function f() {
    if (t) {
      return i(t);
    }
    i(null, I.extractElementsFrom(e, n, !0));
    return;
  }
}
test575: {
  function f() {
    if (e) {
      return i(e);
    }
    i(null, I.extractElementsFrom(n, t, !0));
    return;
  }
}
test576: {
  function f() {
    if (e) {
      return i(e);
    }
    i(null, I.extractElementsFrom(n, t, !0));
    return;
  }
}
test577: {
  function f() {
    if (0 === Object.keys(a).length) {
      return i(null, s);
    }
    T.createEffectInstancesIndexed(a, function (e, t) {
      if (e) return i(e);
      if (0 === Object.keys(s).length) return i(null, t);
      for (var n in s) s.hasOwnProperty(n) && (t[n] = s[n]);
      i(null, t);
    });
    return;
  }
}
test578: {
  function f() {
    if (e) {
      return i(e);
    }
    n.spells = o;
    f(n, t, function (e, o) {
      if (e) {
        return i(e);
      }
      n.spellLevels = o;
      g(n, t, function (e, o) {
        if (e) {
          return i(e);
        }
        n.spellStates = o;
        _(n, t, function (e, t) {
          if (e) {
            return i(e);
          }
          n.effectInstances = t;
          i(null, n);
          return;
        });
        return;
      });
      return;
    });
    return;
  }
}
test579: {
  function f() {
    if (e) {
      return i(e);
    }
    n.spellLevels = o;
    g(n, t, function (e, o) {
      if (e) {
        return i(e);
      }
      n.spellStates = o;
      _(n, t, function (e, t) {
        if (e) {
          return i(e);
        }
        n.effectInstances = t;
        i(null, n);
        return;
      });
      return;
    });
    return;
  }
}
test580: {
  function f() {
    if (e) {
      return i(e);
    }
    n.spellStates = o;
    _(n, t, function (e, t) {
      if (e) {
        return i(e);
      }
      n.effectInstances = t;
      i(null, n);
      return;
    });
    return;
  }
}
test581: {
  function f() {
    if (e) {
      return i(e);
    }
    n.effectInstances = t;
    i(null, n);
    return;
  }
}
test582: {
  function f() {
    if (n > o) {
      return -s;
    }
    if (n < o) {
      return s;
    }
    if (e.id > i.id) {
      return -s;
    }
    0;
    return;
  }
}
test583: {
  function f() {
    if (this.isItem) {
      1 !== e && console.warn("Spell#setLevel called on item with level != 1", e);
      return;
    }
    this.level = e;
    if (this.spell) {
      if (!e || e < 1 || e > this.spell.spellLevels.length) {
        return console.error(new Error("invalid level " + e + " for spell #" + this.id));
      }
      this.spellLevel = this._getSpellLevelByLevel(this.level);
      return;
    }
    return console.error("Spell#setLevel this.spell is undefined or null #", this.id);
  }
}
test584: {
  function f() {
    if (this.isItem) {
      return console.error("Spell#_getSpellLevelByLevel called on item for Spell id", this.id);
    }
    if (this.spell) {
      return this._tables.spellLevels[this.spell.spellLevels[e - 1]];
    }
    return console.error("Spell#_getSpellLevelByLevel this.spell is undefined or null #", this.id);
  }
}
test585: {
  function f() {
    if (this.isItem) {
      return "weapon";
    }
    e = void 0 !== e ? e : this.level;
    return this._getSpellLevelByLevel(e).id;
  }
}
test586: {
  function f() {
    if (this.isItem || this.id === O) {
      return 1;
    }
    return this.spell.spellLevels.length;
  }
}
test587: {
  function f() {
    if (t) {
      return t.longNameId;
    }
    console.error("Spell factory cannot get typeId", e, "for spellId:", this.id);
    return "";
  }
}
test588: {
  function f() {
    if (this.isItem) {
      return Object.keys(this.effectInstances);
    }
    return this._getSpellLevelByLevel(e || this.level).effects;
  }
}
test589: {
  function f() {
    if (this.isItem) {
      return [];
    }
    return this._getSpellLevelByLevel(e || this.level).criticalEffect;
  }
}
test590: {
  function f() {
    if (this.isItem) {
      return this._item.item && this._item.getProperty("image");
    }
    return this.spell && this.spell.image;
  }
}
test591: {
  function f() {
    if (t) {
      return l.call(this, t, e);
    }
    return r.call(this, 0, null, e);
  }
}
test592: {
  function f() {
    if (i.useHeightCell) {
      return n.indexOf(t) !== -1 && o[e].f === o[t].f;
    }
    return n.indexOf(t) !== -1;
  }
}
test593: {
  function f() {
    if (i) {
      if (t.actionId === H.ACTION_CHARACTER_UPDATE_BOOST) {
        return i.updateBuff(t);
      }
      i.addBuff(t);
      t instanceof z.StatBuff && ("movementPoints" === t.statName ? o(e, t.targetId, t.getDelta(), !1, !1, !1) : "actionPoints" === t.statName && a(e, t.targetId, t.getDelta(), !1, !1, !1));
      return;
    }
    return console.error("Display buff step failed, fighter does not exist");
  }
}
test594: {
  function f() {
    if (s && r) {
      s.data.disposition.cellId = i;
      r.data.disposition.cellId = o;
      a.emit(k.FIGHTERS_POSITION_EXCHANGE, [t, n], 0, e);
      return;
    }
    return console.error("Exchange position step failed, fighters do not exist");
  }
}
test595: {
  function f() {
    if (o) {
      o.data.disposition.cellId = i;
      n.emit(k.FIGHTER_SLIDE, [t], t, e);
      return;
    }
    return console.error("Slide step failed, fighter does not exist");
  }
}
test596: {
  function f() {
    if (o) {
      o.data.disposition.cellId = i;
      n.emit(k.FIGHTER_TELEPORTED, [t], 0, e);
      return;
    }
    return console.error("Teleport step failed, fighter does not exist");
  }
}
test597: {
  function f() {
    if (n) {
      n.data.disposition.cellId = i;
      return;
    }
    return console.error("Map movement step failed, fighter does not exist");
  }
}
test598: {
  function f() {
    if (a) {
      i < 0 ? W.push(k.FIGHTER_SHIELD_LOSS, [t, i, n], t, o, e) : i > 0 ? W.push(k.FIGHTER_SHIELD_GAIN, [t, i], t, o, e) : W.push(k.FIGHTER_NO_CHANGE, [t], t, o, e);
      return;
    }
    return console.error("Fighter " + t + " does not exist.");
  }
}
test599: {
  function f() {
    if (n) {
      n.dispelUniqueBuff(i, !0, !1, !0);
      return;
    }
    return console.error("Fighter " + t + " does not exist.");
  }
}
test600: {
  function f() {
    if (o) {
      o.dispelSpell(i, !0);
      W.push(k.FIGHTER_SPELL_DISPELLED, [t, i], t, n, e);
      return;
    }
    return console.error("Fighter " + t + " does not exist.");
  }
}
test601: {
  function f() {
    if (n) {
      n.dispel();
      W.push(k.FIGHTER_GOT_DISPELLED, [t], t, i, e);
      return;
    }
    return console.error("Fighter " + t + " does not exist.");
  }
}
test602: {
  function f() {
    if (o) {
      n.deadTurnsList.push(t);
      o.dispel(!1, !1, !0);
      n.removeLinkedBuff(t);
      o.setAlive(!1);
      W.push(i ? k.FIGHTER_DEATH : k.FIGHTER_LEAVE, [t], t, -1, e);
      return;
    }
    return console.error("Fighter " + t + " does not exist.");
  }
}
test603: {
  function f() {
    if (void 0 === this.characteristics[e]) {
      console.error(new Error("setCharacteristic: No characteristic named: " + e));
      return;
    }
    if ("CharacterBaseCharacteristic" === this.characteristics[e]._type) {
      console.error(new Error("setCharacteristic: " + e + ' cannot take a type "number"'));
      return;
    }
    this.characteristics[e] = t;
    return;
  }
}
test604: {
  function f() {
    if (0 === i.length) {
      return t && t();
    }
    this._createSpells(i, n, t);
    return;
  }
}
test605: {
  function f() {
    if (_ || 0 !== i.touchCount) {
      _ = !1;
      return;
    }
    e.removeListener("dom.touchmove", u);
    v = !1;
    y && (e.isTransforming = !1, e.emit("transformEnd", i));
    return;
  }
}
test606: {
  function f() {
    if (t) {
      return console.error(t);
    }
    e._calculateDimension();
    if (!e._ornamentAssetId || e._alignment && 0 !== e._alignment.alignmentGrade) {
      e._resizeCanvas(e._textWidth, e._textHeight, 0, 0);
      e._displayText();
      e.emit("rendered");
      return;
    }
    e._displayTextAndOrnament();
    e.emit("rendered");
    return;
  }
}
test607: {
  function f() {
    if (t._ornamentId) {
      c.getData("Ornaments", t._ornamentId, function (i, n) {
        if (i) {
          return e(i);
        }
        if (n) {
          t._ornamentAssetId = n.assetId;
          e();
          return;
        }
        return e("staticContent.getData Ornaments - ornamentData is " + n);
      });
      return;
    }
    return e();
  }
}
test608: {
  function f() {
    if (i) {
      return e(i);
    }
    if (n) {
      t._ornamentAssetId = n.assetId;
      e();
      return;
    }
    return e("staticContent.getData Ornaments - ornamentData is " + n);
  }
}
test609: {
  function f() {
    if (t._ornamentAssetId) {
      l.loadModel("ornaments", "ornament_" + t._ornamentAssetId, function (i, n) {
        t._jsonObj = i, t._image = n, e();
      });
      return;
    }
    return e();
  }
}
test610: {
  function f() {
    if (t._titleId) {
      c.getData("Titles", t._titleId, function (i, n) {
        if (i) {
          return e(i);
        }
        if (n) {
          t._title = t._gender ? n.nameFemaleId : n.nameMaleId;
          e();
          return;
        }
        return e("staticContent.getData Titles - titleData is " + n);
      });
      return;
    }
    return e();
  }
}
test611: {
  function f() {
    if (i) {
      return e(i);
    }
    if (n) {
      t._title = t._gender ? n.nameFemaleId : n.nameMaleId;
      e();
      return;
    }
    return e("staticContent.getData Titles - titleData is " + n);
  }
}
test612: {
  function f() {
    if (t._guild && t._guild.guildEmblem) {
      t._guildEmblem.setValue(t._guild.guildEmblem, !0, e);
      return;
    }
    return e();
  }
}
test613: {
  function f() {
    if (t._alliance && t._alliance.allianceEmblem) {
      t._allianceEmblem.setValue(t._alliance.allianceEmblem, !0, e);
      return;
    }
    return e();
  }
}
test614: {
  function f() {
    if (this._guild && this._guild.guildEmblem) {
      return this._guildEmblem.setValue(this._guild.guildEmblem, !0, e);
    }
    return e(null, null);
  }
}
test615: {
  function f() {
    if (i) {
      return console.error("PropertyInfo preload", i);
    }
    t._display(e.line1, e.line2);
    t.emit("rendered");
    return;
  }
}
test616: {
  function f() {
    if (e.value < t.value) {
      return e;
    }
    return t;
  }
}
test617: {
  function f() {
    if (i) {
      return e(i);
    }
    t._initUserInterface();
    t._initAutoResize();
    t.initialized = !0;
    t.emit("initialized");
    e();
    return;
  }
}
test618: {
  function f() {
    if (i) {
      if (t && d) {
        r = null;
        l = c = -1;
        return !1;
      }
      p = i;
      return !0;
    }
    console.error('Contextual menu "' + e + '" does not exist.');
    return !1;
  }
}
test619: {
  function f() {
    if (s) {
      window.fetch(s).then(n).then(o).then(function (t) {
        p = t.item;
        return e();
      })["catch"](function (t) {
        return e(t);
      });
      return;
    }
    return e();
  }
}
test620: {
  function f() {
    if (i) {
      console.error(i + " when fetching menuUrl: " + r);
      t.close();
      return e();
    }
    s ? t._addItems(h.concat(p)) : t._addItems(h);
    return e();
  }
}
test621: {
  function f() {
    if (i.rootElement && e.rootElement) {
      return r.getElementPositionAround(i, e);
    }
    return null;
  }
}
test622: {
  function f() {
    if (u.requestInteractionHandle("SCROLL", e)) {
      e.scrollUpHint && (e.scrollUpHint.hide(), e.scrollDownHint.hide());
      e.emit("scrollStart");
      return;
    }
    return e.cancel();
  }
}
test623: {
  function f() {
    if (d.isFeatureOn("scrollerBoundToWrapper")) {
      this.iScroll.cancel();
      return;
    }
    this.iScroll.disable();
    return;
  }
}
test624: {
  function f() {
    if (this.iScroll.options.scrollY) {
      return this.scrollTo(this.iScroll.x, 0, e, t);
    }
    this.scrollTo(0, this.iScroll.y, e, t);
    return;
  }
}
test625: {
  function f() {
    if (this.iScroll.options.scrollY) {
      return this.scrollTo(this.iScroll.x, this.iScroll.maxScrollY, e, t);
    }
    this.scrollTo(this.iScroll.maxScrollX, this.iScroll.y, e, t);
    return;
  }
}
test626: {
  function f() {
    if (t.MSPointerEvent) {
      return "MSPointer" + e.charAt(9).toUpperCase() + e.substr(10);
    }
    return e;
  }
}
test627: {
  function f() {
    if ((e /= 1) < 1 / 2.75) {
      return 7.5625 * e * e;
    }
    if (e < 2 / 2.75) {
      return 7.5625 * (e -= 1.5 / 2.75) * e + .75;
    }
    if (e < 2.5 / 2.75) {
      return 7.5625 * (e -= 2.25 / 2.75) * e + .9375;
    }
    return 7.5625 * (e -= 2.625 / 2.75) * e + .984375;
  }
}
test628: {
  function f() {
    if (0 === e) {
      return 0;
    }
    if (1 == e) {
      return 1;
    }
    return i * n.pow(2, -10 * e) * n.sin((e - t / 4) * (2 * n.PI) / t) + 1;
  }
}
test629: {
  function f() {
    if (a != this.x || s != this.y) {
      (a > 0 || a < this.maxScrollX || s > 0 || s < this.maxScrollY) && (u = l.ease.quadratic);
      this.scrollTo(a, s, d, u);
      return;
    }
    this._execEvent("scrollEnd");
    return;
  }
}
test630: {
  function f() {
    if (f >= u) {
      a.isAnimating = !1;
      a._translate(e, t);
      a.resetPosition(a.options.bounceTime) || a._execEvent("scrollEnd");
      return;
    }
    f = (f - d) / i;
    m = n(f);
    h = (e - s) * m + s;
    p = (t - c) * m + c;
    a._translate(h, p);
    a.isAnimating && r(o);
    return;
  }
}
test631: {
  function f() {
    if (e.isAlliancePrismFight) {
      l.open("social", {
        tabId: "alliance",
        tabParams: {
          tabId: "attacks"
        }
      });
      return;
    }
    if (e.isTaxCollectorFight) {
      l.open("social", {
        tabId: "guild",
        tabParams: {
          tabId: "perceptors"
        }
      });
      return;
    }
    window.dofus.sendMessage("GameFightJoinRequestMessage", {
      fighterId: e.leaderId,
      fightId: e.fightId
    });
    return;
  }
}
test632: {
  function f() {
    if (i) {
      o.disable();
      return;
    }
    o.elementId = r.elementId;
    o.skill = t;
    return;
  }
}
test633: {
  function f() {
    if (t.feedingBox.possessFeedItemForPet(s._item)) {
      p.open("feed", {
        mode: "pet",
        item: s._item
      });
      return;
    }
    return window.gui.openSimplePopup(d("ui.item.errorNoFoodLivingItem", e.nameId));
  }
}
test634: {
  function f() {
    if (e.item.type.needUseConfirm) {
      window.gui.openConfirmPopup({
        title: d("ui.common.confirm"),
        message: d("ui.common.confirmationUseItem", e.item.nameId),
        cb: function (t) {
          t && l(e.objectUID);
        }
      });
      return;
    }
    l(e.objectUID);
    return;
  }
}
test635: {
  function f() {
    if (1 === e.quantity) {
      window.gui.playerData.inventory.confirmDestroyItem(e, 1);
      return;
    }
    i("destroy", 1, e.quantity);
    return;
  }
}
test636: {
  function f() {
    if (n.openState) {
      if (i && i !== n.mode) {
        n.openOnItem = t;
        return R;
      }
      I.focusWindow(e);
      if (t && n.navigateToItem(t)) {
        return P;
      }
      return D;
    }
    n.openOnItem = t;
    return R;
  }
}
test637: {
  function f() {
    if (0 !== i) {
      return i;
    }
    return e.nameId.localeCompare(t.nameId);
  }
}
test638: {
  function f() {
    if (e === this.liveItemTypeId) {
      this._categoryToDisplayItems = this.liveItems;
      return this._refreshDisplayedItems();
    }
    I.close("tradeItem");
    this._categoryToDisplay = e;
    this._requestedCategories.indexOf(e) === -1 && (this._requestedCategories.push(e), this.liveItemTypeId = e, this.liveItems = null, this.shopViewer.setPlaceholder(" "), this.shopViewer.table.placeholder.frame.addClassNames("spinner"), window.dofus.sendMessage("ExchangeBidHouseTypeMessage", {
      type: e
    }));
    return;
  }
}
test639: {
  function f() {
    if (this === e.currentSubitem) {
      return e.toggleBreadcrumb(!0);
    }
    e._selectSubitem(this);
    return;
  }
}
test640: {
  function f() {
    if (e) {
      return [e.myTopItem.id, e.getWuiName()];
    }
    return null;
  }
}
test641: {
  function f() {
    if (t) {
      t.subitemList || this._createSubitemList(t);
      return t.subitemList.getChild(e[1]);
    }
    return null;
  }
}
test642: {
  function f() {
    if (this.isSelected) {
      e.options.disableSelectionToggle || e.deselectItem(t);
      return;
    }
    return e.selectItem(t);
  }
}
test643: {
  function f() {
    if (e) {
      this.frame || (this.frame = this.parent.createChild("div", {
        className: "placeholderFrame"
      }), this.options.headerElement && this.frame.addClassNames("withHeader"), this.text = this.frame.createChild("div", {
        className: "placeholderText"
      }));
      this.options.noHeight || this._computeHeight();
      this.text.setText(e);
      this.frame.show();
      return;
    }
    return this.frame && this.frame.hide();
  }
}
test644: {
  function f() {
    if (this.empty) {
      return 0;
    }
    return (this.last - this.first + this.maxSize) % this.maxSize + 1;
  }
}
test645: {
  function f() {
    if (t) {
      return t.price;
    }
    return -1;
  }
}
test646: {
  function f() {
    if (t.playerData && t.playerData.characterBaseInformations && i === t.playerData.characterBaseInformations.id && t.playerData.inventory.objects[e]) {
      setTimeout(function () {
        t.playerData && t.playerData.characterBaseInformations && i === t.playerData.characterBaseInformations.id && t.playerData.inventory.objects[e] && M.dofus.sendMessage("ObjectUseMessage", {
          objectUID: e
        }), n();
      }, A);
      return;
    }
    return n();
  }
}
test647: {
  function f() {
    if (d.length) {
      u.each(d, function (e, t) {
        if (e.loaded) {
          return t();
        }
        return e.once("loaded", t);
      }, e);
      return;
    }
    return e();
  }
}
test648: {
  function f() {
    if (e.loaded) {
      return t();
    }
    return e.once("loaded", t);
  }
}
test649: {
  function f() {
    if (r.length) {
      u.series([n, o], function (t) {
        if (t) {
          return e(t);
        }
        f.initializeList(c, e);
        return;
      });
      return;
    }
    return e();
  }
}
test650: {
  function f() {
    if (t) {
      return e(t);
    }
    f.initializeList(c, e);
    return;
  }
}
test651: {
  function f() {
    if (d.length || r.length) {
      u.parallel([s, a], function (e) {
        if (e) {
          return t(e);
        }
        return t(null, i());
      });
      return;
    }
    return t(null, i());
  }
}
test652: {
  function f() {
    if (e) {
      return t(e);
    }
    return t(null, i());
  }
}
test653: {
  function f() {
    if (a(e)) {
      return t(i);
    }
    x = e;
    L = t;
    M.dofus.sendMessage("ExchangeBidHousePriceMessage", {
      genId: e
    });
    E[e] = new n(i, Date.now());
    return;
  }
}
test654: {
  function f() {
    if (C) {
      return C;
    }
    console.error(new Error("Fatal error: item types not loaded"));
    return;
  }
}
test655: {
  function f() {
    if (c.filterEquipment[e]) {
      return t.equipment;
    }
    if (c.filterConsumables[e]) {
      return t.consumables;
    }
    if (c.filterRessources[e]) {
      return t.resources;
    }
    if (c.filterQuest[e]) {
      return t.quest;
    }
    return t.preset;
  }
}
test656: {
  function f() {
    if (e.criteria) {
      e.conditions = r.createGroupCriterion(e.criteria, e);
      o(e.conditions, e, t);
      return;
    }
    return t();
  }
}
test657: {
  function f() {
    if (e.criteriaTarget) {
      e.targetConditions = r.createGroupCriterion(e.criteriaTarget, e);
      o(e.targetConditions, e, t);
      return;
    }
    return t();
  }
}
test658: {
  function f() {
    if (e.type.superTypeId !== p.PET) {
      return t();
    }
    e.foodItems = [];
    e.foodTypes = [];
    h.getData("Pets", e.id, function (i, n) {
      if (i || !n) {
        return t();
      }
      e.foodItems = n.foodItems;
      e.foodTypes = n.foodTypes;
      return t();
    });
    return;
  }
}
test659: {
  function f() {
    if (i || !n) {
      return t();
    }
    e.foodItems = n.foodItems;
    e.foodTypes = n.foodTypes;
    return t();
  }
}
test660: {
  function f() {
    if (i.length) {
      h.getDataMap("ItemSets", i, function (e, i) {
        if (e) return t(e);
        for (var o = 0; o < n.length; o++) {
          var a = n[o],
            s = i[a.itemSetId];
          s ? a.itemSetName = s.nameId : (m.error(new Error("ItemSet id " + a.itemSetId + " for item id " + a.id + " does not exist.")), a.itemSetName = null);
        }
        return t();
      });
      return;
    }
    return t();
  }
}
test661: {
  function f() {
    if (this._simplifiedName) {
      return this._simplifiedName;
    }
    this._simplifiedName = d.simplifyString(this.nameId);
    return this._simplifiedName;
  }
}
test662: {
  function f() {
    if ("nameId" === e) {
      return this.getName();
    }
    if ("conditionsFormatted" === e) {
      return this._getConditionsFormatted();
    }
    if ("targetConditionsFormatted" === e) {
      return this._getTargetConditionsFormatted();
    }
    if ("statsFormatted" === e) {
      return this._getStatsFormatted();
    }
    "weight" === e && (e = "realWeight");
    if (this.hasOwnProperty(e)) {
      return this[e];
    }
    return _[e];
  }
}
test663: {
  function f() {
    if (J[i]) {
      return new J[i](e, t);
    }
    console.warn("unknown criterion: " + i);
    return;
  }
}
test664: {
  function f() {
    if (this.operator) {
      return this.operator.text;
    }
    return "";
  }
}
test665: {
  function f() {
    if (this.operator) {
      return this.operator.text;
    }
    return "";
  }
}
test666: {
  function f() {
    if (i) {
      return e(i);
    }
    t._valueText = " '" + n.nameId + "'";
    t._keyText = a("ui.tooltip.unlockAchievement", [t._valueText]);
    e();
    return;
  }
}
test667: {
  function f() {
    if (this.operator === o.operators.different) {
      return a("ui.tooltip.dontUnlockAchievement", [this._valueText]);
    }
    return o.prototype.getOperatorText.call(this);
  }
}
test668: {
  function f() {
    if (this.operator === o.operators.different) {
      return " " + a("ui.common.differentFrom") + a("ui.common.colon");
    }
    return o.prototype.getOperatorText.call(this);
  }
}
test669: {
  function f() {
    if (e.type && e.hasOwnProperty("id") && g[e.type]) {
      return h.entities[e.type][e.id];
    }
    return console.log("wrong fight object");
  }
}
test670: {
  function f() {
    if (i) {
      n(g.prism, t.subAreaId, t);
      return;
    }
    return console.warn("unknown prism", t.subAreaId);
  }
}
test671: {
  function f() {
    if ("AllianceInsiderPrismInformation" === this.prism._type) {
      return window.gui.playerData.alliance.current;
    }
    return this.prism.alliance;
  }
}
test672: {
  function f() {
    if (e.hasAlliance()) {
      if (e.current.enabled) {
        return 2;
      }
      return 1;
    }
    return 0;
  }
}
test673: {
  function f() {
    if (this.operator === a.operators.equal) {
      return t;
    }
    return this.operator === a.operators.equal && !t;
  }
}
test674: {
  function f() {
    if (this.operator === o.operators.equal) {
      return a("ui.tooltip.beInArea", [t]);
    }
    return a("ui.tooltip.dontBeInArea", [t]);
  }
}
test675: {
  function f() {
    if (n) {
      console.error("ServerDetails setServer error", n);
      return e(n);
    }
    t._communityName = i.staticContent.communities[t._communityId];
    e();
    return;
  }
}
test676: {
  function f() {
    if (this.operator === o.operators.equal) {
      return a("ui.criterion.community", [this._communityName]);
    }
    return a("ui.criterion.notCommunity", [this._communityName]);
  }
}
test677: {
  function f() {
    if (t) {
      return e(t);
    }
    l[i.id] = i;
    n._emoticonData = i;
    e();
    return;
  }
}
test678: {
  function f() {
    if (this.operator === o.operators.superior) {
      return a("ui.pvp.giftRequired", [t + " > " + this._giftLevel]);
    }
    return a("ui.pvp.giftRequired", [t]);
  }
}
test679: {
  function f() {
    if (e.hasGuild()) {
      if (e.current.enabled) {
        return 2;
      }
      return 1;
    }
    return 0;
  }
}
test680: {
  function f() {
    if (e.hasGuild()) {
      return e.current.guildLevel;
    }
    return 0;
  }
}
test681: {
  function f() {
    if (this.operator === o.operators.equal) {
      return a("ui.criterion.guildRights", [e]);
    }
    return a("ui.criterion.notGuildRights", [e]);
  }
}
test682: {
  function f() {
    if (this.operator === o.operators.equal) {
      return t;
    }
    return !t;
  }
}
test683: {
  function f() {
    if (i) {
      return e(i);
    }
    t._jobName = n && n.nameId;
    e();
    return;
  }
}
test684: {
  function f() {
    if (null !== window.gui.playerData.socialData.spouse) {
      return 1;
    }
    return 2;
  }
}
test685: {
  function f() {
    if (a) {
      i._objectName = a.nameId;
      e();
      return;
    }
    return e("ObjectItemCriterion: unable to find item id " + t);
  }
}
test686: {
  function f() {
    if (this.operator === o.operators.different) {
      return a("ui.common.doNotPossess", [this._objectName]);
    }
    return a("ui.common.doPossess", [this._objectName]);
  }
}
test687: {
  function f() {
    if (d[e]) {
      return d[e];
    }
    return o(e, ["CS", "Cs", "CV", "Cv", "CA", "Ca", "CI", "Ci", "CW", "Cw", "CC", "Cc", "<NO>", "PG", "PJ", "Pj", "PM", "PA", "PN", "PE", "<NO>", "PS", "PR", "PL", "PK", "Pg", "Pr", "Ps", "Pa", "PP", "PZ", "CM", "Qa", "<NO>", "<NO>", "ca", "cc", "ci", "cs", "cv", "cw"], u);
  }
}
test688: {
  function f() {
    if (g[this.key]) {
      return parseInt(g[this.key](e), 10);
    }
    console.error("unknown criterion key: " + this.key);
    return 0;
  }
}
test689: {
  function f() {
    if (i) {
      return e("QuestItemCriterion#initialize", i);
    }
    n[t.value] ? t._quest = n[t.value] : l.error("QuestItemCriterion#initialize: cannot get questId", t.value);
    e();
    return;
  }
}
test690: {
  function f() {
    if ("=" === this.operator.token) {
      return t;
    }
    return !t;
  }
}
test691: {
  function f() {
    if (i) {
      return e("QuestObjectiveCriterion#initialize", i);
    }
    t._stepId = n[t.value] && n[t.value].stepId;
    e();
    return;
  }
}
test692: {
  function f() {
    if (this.operator === o.operators.different) {
      return a("ui.common.differentFrom") + " >";
    }
    return ">";
  }
}
test693: {
  function f() {
    if (this.operator === o.operators.equal && 1 === this.value || this.operator === o.operators.different && 0 === this.value) {
      return a("ui.tooltip.mountEquiped");
    }
    if (this.operator === o.operators.equal && 1 === this.value || this.operator === o.operators.different && 0 === this.value) {
      return a("ui.tooltip.mountNonEquiped");
    }
    return "";
  }
}
test694: {
  function f() {
    if (window.gui.playerData.isRiding) {
      return 1;
    }
    return 0;
  }
}
test695: {
  function f() {
    if (i) {
      return e(i);
    }
    t._serverName = n.nameId;
    e();
    return;
  }
}
test696: {
  function f() {
    if (window.gui.playerData.characterBaseInformations.sex) {
      return 1;
    }
    return 0;
  }
}
test697: {
  function f() {
    if (t) {
      return e(t);
    }
    n._monsterName = i.nameId;
    e();
    return;
  }
}
test698: {
  function f() {
    if (i) {
      return e(i);
    }
    t._name = n.nameId;
    e();
    return;
  }
}
test699: {
  function f() {
    if (e.isSubscriberAtMinLevel(r.NORMAL) || e.identification.hasRights) {
      return 1;
    }
    return 0;
  }
}
test700: {
  function f() {
    if (window.gui.playerData.isRiding) {
      return this.value;
    }
    return null;
  }
}
test701: {
  function f() {
    if (window.gui.playerData.inventory.equippedItems[this.value]) {
      return this.value;
    }
    return null;
  }
}
test702: {
  function f() {
    if (i) {
      return e("SpellLevelItemCriterion#initialize", i);
    }
    n[t.value] ? t._spellId = n[t.value].spellId : l.error("SpellLevelItemCriterion#initialize: cannot get SpellLevelId", t.value);
    e();
    return;
  }
}
test703: {
  function f() {
    if (n.length) {
      p.getDataMap("LivingObjectSkinJntMood", n, function (n, a) {
        if (n) return t(n);
        for (var s = 0; s < e.length; s++) if (void 0 !== o[s]) {
          var r = e[s];
          if (void 0 !== a[o[s]]) {
            var l = a[o[s]].moods;
            r.iconId = l[r.livingObjectMood][r.livingObjectSkin - 1], i.push(r);
          } else console.error("Cannot find the moods for " + r.objectGID);
        }
        t();
      });
      return;
    }
    return t();
  }
}
test704: {
  function f() {
    if (s) {
      o = Object.keys(o);
      p.getDataMap("Monsters", o, function (t, o) {
        if (t) return i(t);
        for (var s, r, l = "", c = {
            regularSoulStone: function (e, t) {
              var i = e.grades[t];
              i && i.level > s && (s = i.level, l = e.nameId);
            },
            bossAndMiniBoss: function (e) {
              (e.isBoss || e.isMiniBoss) && (l ? l += ", " + e.nameId : l = e.nameId);
            }
          }, d = 0; d < e.length; d++) if (a[d]) {
          var u = e[d];
          switch (s = 0, l = "", r = null, u.item.id) {
            case M:
              r = c.regularSoulStone;
              break;
            case C:
            case T:
              r = c.bossAndMiniBoss;
          }
          for (var h = 0; h < a[d].length; h++) {
            var p,
              m = a[d][h].monsterId,
              f = a[d][h].monsterGrade;
            if (n) {
              if (p = n[m], !p) {
                if (!o[m]) continue;
                p = o[m], n[m] = o[m];
              }
            } else {
              if (!o[m]) continue;
              p = o[m];
            }
            r(p, f);
          }
          u.shortName = l, u._initializationDone();
        }
        i();
      });
      return;
    }
    return i();
  }
}
test705: {
  function f() {
    if (n) {
      return i(n);
    }
    r(e, t, i);
    return;
  }
}
test706: {
  function f() {
    if (this.hasOwnProperty(e)) {
      return this[e];
    }
    return this.item.getProperty(e);
  }
}
test707: {
  function f() {
    if (this.itemTypes[t]) {
      this.itemTypes[t]++;
      return !1;
    }
    this.itemTypes[t] = 1;
    return !0;
  }
}
test708: {
  function f() {
    if (t) {
      return t.rowContent;
    }
    return null;
  }
}
test709: {
  function f() {
    if (0 === t.length) {
      return s.call(e.cancelBtn);
    }
    if (!e.isLiveSearch && t.length < p) {
      return u.showNotification(l("ui.common.searchFilterTooltip"), e);
    }
    t !== e.lastEmittedValue && (e.lastEmittedValue = t, e.searchInput.blur(), e.emit("search", t));
    return;
  }
}
test710: {
  function f() {
    if (i) {
      i.hidden = !!t;
      return;
    }
    return console.warn("Invalid selector option", e);
  }
}
test711: {
  function f() {
    if (a.exoticEffects[i.id]) {
      return -1;
    }
    if (a.exoticEffects[n.id]) {
      return 1;
    }
    if (i.category === n.category && n.category === s.damage) {
      return 0;
    }
    return i.effectPriority - n.effectPriority;
  }
}
test712: {
  function f() {
    if (n) {
      return this.sortEffects(n);
    }
    return [];
  }
}
test713: {
  function f() {
    if (e.localeCompare) {
      return e.localeCompare(t);
    }
    if (e > t) {
      return 1;
    }
    if (t > e) {
      return -1;
    }
    return 0;
  }
}
test714: {
  function f() {
    if (this.content && "function" == typeof this.content.getText) {
      return this.content.getText();
    }
    return null;
  }
}
test715: {
  function f() {
    if (i) {
      "string" == typeof t ? i.content.setText(t) : (i.content.clearContent(), i.content.appendChild(t));
      i.sorter.toggleClassName("noText", !t);
      return;
    }
    return console.error("setColumnHeader: invalid colId:", e);
  }
}
test716: {
  function f() {
    if (i) {
      i.sorter.toggleClassName("noTriangle", !!t);
      return;
    }
    return console.error("setSortingHintVisible: invalid colId:", e);
  }
}
test717: {
  function f() {
    if (n) {
      return n.content;
    }
    return console.error(new Error("Column id unknown " + t));
  }
}
test718: {
  function f() {
    if (t) {
      w.tween(n, {
        webkitTransform: "translate3d(-100%,0,0)"
      }, {
        time: T,
        easing: "ease-out"
      }, i);
      return;
    }
    return i();
  }
}
test719: {
  function f() {
    if (t) {
      return console.warn("Spinner already set for " + e);
    }
    this.locks[e] = !0;
    this.element.addClassNames("spinner");
    this.isAddingClasses && this.element.addClassNames(e);
    return;
  }
}
test720: {
  function f() {
    if (t) {
      return l[this.mountData.mountLocation][e];
    }
    return null;
  }
}
test721: {
  function f() {
    if (this.isVisible() && this.rootElement.clientWidth) {
      this.mustResize = !1;
      this._serenityGauge.resize();
      return;
    }
    return this.once("show", this._resize.bind(this));
  }
}
test722: {
  function f() {
    if (this.maxValue) {
      return e + this.value + " / " + this.maxValue;
    }
    return e + this.value + "%";
  }
}
test723: {
  function f() {
    if (this.maxValue) {
      return e + this.humanValue + " / " + this.maxValue;
    }
    return e + this.humanValue + "%";
  }
}
test724: {
  function f() {
    if (this.isEnabled === !1) {
      return new l("div", {
        className: "disabledTooltipFeature",
        text: this.tooltipText
      });
    }
    return this.tooltipText;
  }
}
test725: {
  function f() {
    if (e) {
      return console.error(e);
    }
    "" !== i && (t.uniqueDrops.setText(s("ui.legendaryWeapon.possibleDrop", i)), t.uniqueDrops.show());
    return;
  }
}
test726: {
  function f() {
    if (t) {
      return e(t);
    }
    o.getDataArray("Items", Object.keys(i), function (t, n) {
      if (t) return e(t);
      c = [];
      for (var o = 0; o < n.length; o++) {
        var d = n[o],
          u = i[d.id].drops;
        if (d.typeId === s.types.cosmeticLegendaryWeapon) for (var h = 0; h < u.length; h++) {
          var p = u[h],
            m = a.createGroupCriterion(p.criterion);
          c.push({
            itemName: d.nameId,
            criterions: m
          });
        }
      }
      l = i;
      r = !0;
      return e();
    });
    return;
  }
}
test727: {
  function f() {
    if (r) {
      return e(null, l);
    }
    return n(function (t) {
      return e(t, l);
    });
  }
}
test728: {
  function f() {
    if (r) {
      return e(null, c);
    }
    return n(function (t) {
      return e(t, c);
    });
  }
}
test729: {
  function f() {
    if (l.length < 3) {
      a.replaceClassNames([o], ["deadLink"]);
      return console.error("To have a content on the tooltip, res[2] is required");
    }
    return O(a, l[2], {
      openOnTap: !0
    });
  }
}
test730: {
  function f() {
    if (t) {
      return console.error("Broken link item:", e);
    }
    I.open("itemRecipes", {
      itemData: i[0]
    });
    return;
  }
}
test731: {
  function f() {
    if ("bidHouseShop" === e[1]) {
      return E.openBidHouse(!1);
    }
    I.open(e[1]);
    return;
  }
}
test732: {
  function f() {
    if (i < 0) {
      return e.substring(t);
    }
    return e.substring(t, i + 1);
  }
}
test733: {
  function f() {
    if (i <= 255 ? s(n) : o(i)) {
      return n;
    }
    return e;
  }
}
test734: {
  function f() {
    if (i && i instanceof l) {
      i.isVisible() && (n(i, "upLeft"), o(d));
      return;
    }
    return console.warn("The dom " + e + " does not exist");
  }
}
test735: {
  function f() {
    if (e.TYPED_ARRAY_SUPPORT) {
      return 2147483647;
    }
    return 1073741823;
  }
}
test736: {
  function f() {
    if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) {
      return p(e, t, i, n);
    }
    if ("string" == typeof t) {
      return u(e, t, i);
    }
    return m(e, t);
  }
}
test737: {
  function f() {
    if ("number" != typeof i.length || K(i.length)) {
      return s(t, 0);
    }
    return h(t, i);
  }
}
test738: {
  function f() {
    if (0 === i.length) {
      return -1;
    }
    return b(t, i, n, o, a);
  }
}
test739: {
  function f() {
    if (1 === s) {
      return e[t];
    }
    return e.readUInt16BE(t * s);
  }
}
test740: {
  function f() {
    if (0 === t && i === e.length) {
      return J.fromByteArray(e);
    }
    return J.fromByteArray(e.slice(t, i));
  }
}
test741: {
  function f() {
    if (e.trim) {
      return e.trim();
    }
    return e.replace(/^\s+|\s+$/g, "");
  }
}
test742: {
  function f() {
    if (e < 16) {
      return "0" + e.toString(16);
    }
    return e.toString(16);
  }
}
test743: {
  function f() {
    if (n < o) {
      return -1;
    }
    if (o < n) {
      return 1;
    }
    return 0;
  }
}
test744: {
  function f() {
    if (0 === e) {
      return "";
    }
    if (0 === arguments.length) {
      return N(this, 0, e);
    }
    return v.apply(this, arguments);
  }
}
test745: {
  function f() {
    if (s < r) {
      return -1;
    }
    if (r < s) {
      return 1;
    }
    return 0;
  }
}
test746: {
  function f() {
    if (32768 & i) {
      return 4294901760 | i;
    }
    return i;
  }
}
test747: {
  function f() {
    if (32768 & i) {
      return 4294901760 | i;
    }
    return i;
  }
}
test748: {
  function f() {
    if (s) {
      return NaN;
    }
    return (p ? -1 : 1) * (1 / 0);
  }
}
test749: {
  function f() {
    if ("md5" === e) {
      return new a();
    }
    if ("rmd160" === e) {
      return new s();
    }
    return o(e);
  }
}
test750: {
  function f() {
    if (e) {
      return i.toString(e);
    }
    return i;
  }
}
test751: {
  function f() {
    if (m.length) {
      return m.pop().init();
    }
    if (this instanceof i) {
      this._w = p;
      t.call(this, 64, 56);
      this._h = null;
      this.init();
      return;
    }
    return new i();
  }
}
test752: {
  function f() {
    if (e < 20) {
      return t & i | ~t & n;
    }
    if (e < 40) {
      return t ^ i ^ n;
    }
    if (e < 60) {
      return t & i | t & n | i & n;
    }
    return t ^ i ^ n;
  }
}
test753: {
  function f() {
    if (e < 20) {
      return 1518500249;
    }
    if (e < 40) {
      return 1859775393;
    }
    if (e < 60) {
      return -1894007588;
    }
    return -899497514;
  }
}
test754: {
  function f() {
    if (e) {
      return 0 !== (e.capabilities & k);
    }
    console.warn("isAggressionAllowedOnMap called before we know mapPosition");
    return !1;
  }
}
test755: {
  function f() {
    if (n.getRestrictions().cantAttack || i) {
      return P;
    }
    return B;
  }
}
test756: {
  function f() {
    if (_ + v < e.characterPower - h) {
      return D;
    }
    return B;
  }
}
test757: {
  function f() {
    if (o) {
      return i(o);
    }
    c.getData(n.dbName, t, function (e, a) {
      if (e) {
        console.warn("ContextualMenuTaxCollector", e);
        return i("");
      }
      o = n.cached[t] = a[n.attribute];
      i(o);
      return;
    });
    return;
  }
}
test758: {
  function f() {
    if (e) {
      console.warn("ContextualMenuTaxCollector", e);
      return i("");
    }
    o = n.cached[t] = a[n.attribute];
    i(o);
    return;
  }
}
test759: {
  function f() {
    if (this._handlerMap[t]) {
      return console.error("dupe listener: " + e.constructor.name + " on " + t);
    }
    this._handlerMap[t] = [e, i];
    e.on(t, i);
    return;
  }
}
test760: {
  function f() {
    if (o && s) {
      s = !1;
      document.removeEventListener("push-notification", n, !1);
      o.unregisterDevice(function () {
        console.info("Unregistered push notifications"), window.gui.playerData.setPushToken(""), e();
      }, function (t) {
        window.gui.playerData.setPushToken(""), e("Error unregistering push notifications: " + t.error);
      });
      return;
    }
    return e();
  }
}
test761: {
  function f() {
    if (e) {
      return a(e);
    }
    l();
    M.enable(function (e) {
      if (e) return a(e);
    });
    return;
  }
}
test762: {
  function f() {
    if (!n() || y) {
      return e();
    }
    y = !0;
    u.hasPermission(function (t) {
      if (t) {
        w || o();
        var i = null;
        try {
          c(), console.info("Registered for local notifications");
        } catch (n) {
          i = n;
        }
        return e(i);
      }
      return e("NO_PERMISSION");
    });
    return;
  }
}
test763: {
  function f() {
    if (n() && y) {
      y = !1;
      u.cancelAll();
      console.info("Unregistered local notifications");
      e();
      return;
    }
    return e();
  }
}
test764: {
  function f() {
    if (!t || !i || i < 0) {
      return console.error("invalid quantity change from " + i + " to " + t);
    }
    this.emit("itemQuantityChanged", n, i);
    return;
  }
}
test765: {
  function f() {
    if (e <= 40) {
      return String.fromCharCode(Math.floor(26 * Math.random()) + 65);
    }
    if (e <= 80) {
      return String.fromCharCode(Math.floor(26 * Math.random()) + 97);
    }
    return String.fromCharCode(Math.floor(10 * Math.random()) + 48);
  }
}
test766: {
  function f() {
    if (e) {
      return C.MANDATORY;
    }
    if (t) {
      return C.POSSIBLE;
    }
    return C.IMPOSSIBLE;
  }
}
test767: {
  function f() {
    if (n) {
      return i;
    }
    return null;
  }
}
test768: {
  function f() {
    if (e < 1) {
      console.error(new Error("characterSelection: characterId should be positive"));
      return;
    }
    window.dofus.sendMessage("CharacterSelectionMessage", {
      id: e
    });
    return;
  }
}
test769: {
  function f() {
    if (t.iconDetailsListByChallengeId[e.challengeId]) {
      t.setChallengeResult(e);
      return;
    }
    t.challengesResult[e.challengeId] = e;
    return;
  }
}
test770: {
  function f() {
    if (e.getDom) {
      window.gui.textNotification.add(e.getDom(), {
        channel: t
      });
      return;
    }
    console.error(new Error("Chat wrong object for bubble"));
    return;
  }
}
test771: {
  function f() {
    if ("" === i.inputChat.getValue()) {
      return M.hide();
    }
    i._submit();
    return;
  }
}
test772: {
  function f() {
    if (0 === e) {
      return o;
    }
    return this._buffer[e - 1];
  }
}
test773: {
  function f() {
    if (e) {
      if (t) {
        return "{player," + e + "," + t + ",channel:" + this._channel.toString() + "}";
      }
      return e;
    }
    return "unknownPlayer";
  }
}
test774: {
  function f() {
    if (this._dom) {
      return this._dom;
    }
    this._dom = new this._wuidom("div", {
      className: "messageWrapper"
    });
    this._contentDom = this._createMessageContent();
    this._dom.appendChild(this._contentDom);
    return this._dom;
  }
}
test775: {
  function f() {
    if (t === p.AWAKENING) {
      u.open("legendaryWeaponAwakeningWindow");
      return;
    }
    i.prepareSkillRecipes(t, function (n) {
      if (n) return console.error("Craft: prepareSkillRecipes", t, n);
      var o = i.getCraftType(t),
        a = "craftMagus" === o ? "craftMagus" : "crafting";
      u.openDialog([a, "craftInventory"], {
        type: o,
        msg: e
      });
    });
    return;
  }
}
test776: {
  function f() {
    if (t) {
      return e(t);
    }
    window.gui.databases = i;
    e();
    return;
  }
}
test777: {
  function f() {
    if (i) {
      return t("GPS cannot load MapPositions for map " + e + ": " + i);
    }
    if (n.subAreaId) {
      d.getObject("SubAreas", n.subAreaId, function (i, o) {
        if (i) return t("GPS cannot load subarea " + n.subAreaId + ": " + i);
        var a,
          s = o.entranceMapIds || [],
          r = o.exitMapIds || [],
          l = window.gui.databases,
          c = l.Areas[o.areaId],
          u = l.SuperAreas[c.superAreaId],
          h = o.customWorldMap[0] || u.worldmapId,
          p = window.gui.playerData.position.worldmapId;
        p !== h && (a = p === f ? s[0] : r[0]);
        if (void 0 === a) {
          return t(null, {
            x: n.posX,
            y: n.posY,
            mapId: e,
            worldMapId: h
          });
        }
        d.getObject("MapPositions", a, function (e, i) {
          if (e) {
            return t("GPS cannot load MapPositions fo map " + a + ": " + e);
          }
          t(null, {
            x: i.posX,
            y: i.posY,
            mapId: a,
            worldMapId: h
          });
          return;
        });
        return;
      });
      return;
    }
    return t(null, {
      x: n.posX,
      y: n.posY,
      mapId: e
    });
  }
}
test778: {
  function f() {
    if (e) {
      return t("GPS cannot load MapPositions fo map " + a + ": " + e);
    }
    t(null, {
      x: i.posX,
      y: i.posY,
      mapId: a,
      worldMapId: h
    });
    return;
  }
}
test779: {
  function f() {
    if (t < 0) {
      return 0;
    }
    return parseInt(e.id.slice(t + 6), 10);
  }
}
test780: {
  function f() {
    if (e) {
      return console.error("questId: " + n + ", objectiveId: " + i + ", error: " + e);
    }
    o = o || t.coords;
    s.addQuestObjectiveFromObjective({
      objectiveDb: t,
      objectiveId: i,
      coords: o,
      questId: n
    });
    return;
  }
}
test781: {
  function f() {
    if (n) {
      return e.addOrUpdateSpouse(n.spouseName, null, t.worldX, t.worldY);
    }
    return console.error("Spouse does not exist");
  }
}
test782: {
  function f() {
    if (o) {
      e._lastPartyMemberId = o.id;
      return e.updatePOI({
        id: "party_" + o.id,
        x: t.worldX,
        y: t.worldY,
        categoryId: "user",
        nameId: c("ui.cartography.positionof", o.name) + "\n\n(" + t.worldX + ", " + t.worldY + ")",
        color: {
          r: 52,
          g: 155,
          b: 255,
          a: 1
        },
        mapId: o.mapId,
        isDestination: !0
      });
    }
    console.warn("Party member", t.memberId, "does not exist.");
    return;
  }
}
test783: {
  function f() {
    if (n) {
      this.followedQuests[e] = !0;
      this._save();
      if (n.objectives) {
        t && i.GPS.addQuestNextObjective(e);
        return;
      }
      return console.warn("followQuest: quest id " + e + " has no objectives");
    }
    return console.warn("followQuest: quest id " + e + " is not active");
  }
}
test784: {
  function f() {
    if (i) {
      e._myHouse = n.currentHouse;
      e._onSale = Boolean(n.currentHouse.price);
      e._locked = n.currentHouse.isLocked;
      e._updateIcon();
      e.show();
      return;
    }
    e.hide();
    e._reset();
    return;
  }
}
test785: {
  function f() {
    if (i) {
      return e(i);
    }
    t.staticContent = {};
    t.staticContent.data = n.Servers;
    t.staticContent.gameTypes = n.ServerGameTypes;
    t.staticContent.populations = n.ServerPopulations;
    t.staticContent.communities = n.ServerCommunities;
    return e();
  }
}
test786: {
  function f() {
    if (i) {
      return e(i);
    }
    f(t.serversRawData, t.staticContent, _().gui.playerData.identification.communityId, e);
    return;
  }
}
test787: {
  function f() {
    if (n && "none" !== n) {
      return t(null, n);
    }
    return t(null, i);
  }
}
test788: {
  function f() {
    if (e) {
      o.call(this, "div", e);
      this.addClassNames(["Table", e.className]);
      this._rows = [];
      this._rowCount = 0;
      this._hiddenRowIds = [];
      this._clickable = !1;
      this._colIds = e.colIds;
      this._minRows = e.minRows || 0;
      this._colCount = this._colIds ? this._colIds.length : e.colCount || 1;
      this._defaultRowContent = e.defaultRowContent || [];
      this._highlightable = e.highlightable;
      this._disableAutoSelect = e.disableAutoSelect;
      this._autoUpdateRowColor = !e.disableRowColor;
      e.headerContent && (this.header = this.createChild("div", {
        className: ["container", "header"]
      }), this._addHeader(e.headerContent));
      this.content = this.createChild("div", {
        className: ["container", "content"]
      });
      this.noneLabel = this.createChild("div", {
        className: "noneLabel",
        text: a("ui.common.none")
      });
      e.footerContent && (this.footer = this.createChild("div", {
        className: ["container", "footer"]
      }), this._addFooter(e.footerContent));
      e.onRowTap && (this._clickable = !0, this.on("selected", e.onRowTap));
      e.minRows && this._setupDefaultRows();
      return;
    }
    console.error("Undefined Table 'options' parameter");
    return;
  }
}
test789: {
  function f() {
    if (this._rows[e] && this._isRowEmpty(e)) {
      console.warn("[Table.getRow] Row index " + e + " is empty.");
      return;
    }
    return this._rows[e];
  }
}
test790: {
  function f() {
    if ("content" !== t) {
      return n;
    }
    this._rows.push(n);
    if (e) {
      !this._highlightable || this._lastSelected || this._disableAutoSelect || this.highlight(0);
      return n;
    }
    0;
    return;
  }
}
test791: {
  function f() {
    if (e) {
      return console.error(e);
    }
    "" !== i && (t.uniqueDropsElement.setText(p("ui.legendaryWeapon.possibleDrop", i)), t.uniqueDropsElement.show());
    return;
  }
}
test792: {
  function f() {
    if (this.currentOpenedId === e) {
      return this.hideDialog(e);
    }
    this.showDialog(e);
    return;
  }
}
test793: {
  function f() {
    if (1 === this.replies.length) {
      return this._sendReply(0);
    }
    this._highlightReplies();
    return;
  }
}
test794: {
  function f() {
    if (e > this.maxValue) {
      return g.showNotification(d("tablet.common.maxValue", h.intToString(this.maxValue)), this.keyMap.ENTER);
    }
    if (e < this.minValue) {
      return g.showNotification(d("tablet.common.minValue", h.intToString(this.minValue)), this.keyMap.ENTER);
    }
    this.inputBox.setValue(e, !0);
    this.hide();
    return;
  }
}
test795: {
  function f() {
    if (e === g.PARTY_TYPE_ARENA) {
      return g.PARTY_TYPE_CLASSICAL;
    }
    return g.PARTY_TYPE_ARENA;
  }
}
test796: {
  function f() {
    if (o > a) {
      return -1;
    }
    if (o === a && o * s / l > a * r / c) {
      return -1;
    }
    return 1;
  }
}
test797: {
  function f() {
    if (t) {
      return this.partyBoxes.getChild(t);
    }
    return null;
  }
}
test798: {
  function f() {
    if (e) {
      this.loginName = e;
      return;
    }
    return console.error(new Error("PlayerData.setLoginName: login is emtpy"));
  }
}
test799: {
  function f() {
    if (t.indexOf(e.toString()) === -1) {
      return 0;
    }
    return d;
  }
}
test800: {
  function f() {
    if (t.invitationState !== l.SOCIAL_GROUP_INVITATION_SENT) {
      return c.close("cancel");
    }
    e.openCancelPopup({
      title: s("ui.common.invitation"),
      message: s("ui.craft.waitForCraftClient", t.recrutedName),
      cb: function () {
        window.dofus.sendMessage("AllianceInvitationAnswerMessage", {
          accept: !1
        });
      }
    });
    return;
  }
}
test801: {
  function f() {
    if (this._isUnknown) {
      return null;
    }
    return this._countByGid[e] || 0;
  }
}
test802: {
  function f() {
    if (t) {
      t.disconnect();
      delete this.slaves[e];
      return;
    }
    console.error(new Error("CharactersData: Cannot remove slave " + e));
    return;
  }
}
test803: {
  function f() {
    if (this.controlledCharacterId === this.mainCharacterId) {
      return this.mainCharacter;
    }
    return this.slaves[this.controlledCharacterId];
  }
}
test804: {
  function f() {
    if (e === this.mainCharacterId) {
      return this.mainCharacter;
    }
    return this.slaves[e];
  }
}
test805: {
  function f() {
    if (this.mainCharacter && this.mainCharacter.characteristics) {
      this.mainCharacter.characteristics.lifePoints >= this.mainCharacter.characteristics.maxLifePoints ? this.stopRegen() : this.setCharacteristic(this.mainCharacter, "lifePoints", this.mainCharacter.characteristics.lifePoints + 1);
      return;
    }
    this.stopRegen();
    return;
  }
}
test806: {
  function f() {
    if (i.characterBreed) {
      t(e);
      return;
    }
    return i.once("setCharacterBreed", function () {
      t(e);
    });
  }
}
test807: {
  function f() {
    if (e) {
      return console.error(e);
    }
    o();
    return;
  }
}
test808: {
  function f() {
    if (e) {
      return console.error(e);
    }
    M.emit("itemAdded", t.array[0]);
    return;
  }
}
test809: {
  function f() {
    if (t.retry(new Error("Preset is missing for presetId " + i.presetId))) {
      console.warn("Preset is missing for presetId " + i.presetId + " will retry...");
      return;
    }
    console.error(t.mainError());
    return;
  }
}
test810: {
  function f() {
    if (i) {
      i.position !== u.notEquipped && (delete M.equippedItems[i.position], i.position === u.weapon && M.emit("weaponChanged"));
      i.emit("deleted");
      delete M.objects[e];
      t();
      return i;
    }
    return console.error("[ObjectDeletedMessage] unknown object UID");
  }
}
test811: {
  function f() {
    if (e) {
      return console.error(e);
    }
    M.emit("itemsAdded", t.map);
    return;
  }
}
test812: {
  function f() {
    if (M.objects[e.object.objectUID] || n.livingObjectCategory) {
      n.isInitialised && (n.emit("modified"), M.emit("itemModified", n));
      return;
    }
    return console.error("[ObjectModifiedMessage] unknown object UID");
  }
}
test813: {
  function f() {
    if (t.length) {
      v.getDataMap(e, t, function (t, n) {
        if (t) return i(t);
        var o = m[e];
        for (var a in n) o[a] = n[a];
        i();
      });
      return;
    }
    return i();
  }
}
test814: {
  function f() {
    if (e) {
      return i(e);
    }
    a(Object.keys(s), function (e) {
      if (e) return i(e);
      for (var n in t) {
        var o = t[n];
        o.info = u[o.id];
        for (var a = 0, s = o.description.skills.length; a < s; a += 1) {
          var r = o.description.skills[a];
          r.info = h[r.skillId];
        }
      }
      i();
    });
    return;
  }
}
test815: {
  function f() {
    if (s) {
      return console.warn("ExchangeObjectAddedMessage received for existing object " + n);
    }
    this._onCraftTable[n] = {
      GID: o,
      quantity: a
    };
    this._stackCount++;
    this._stackCountPerGid[o] = (this._stackCountPerGid[o] || 0) + 1;
    this.emit("objectAdded", i, t);
    return;
  }
}
test816: {
  function f() {
    if (o) {
      o.quantity = t.quantity;
      this.emit("objectModified", t, i);
      return;
    }
    return console.error("craftObjectModified of unknown object " + n);
  }
}
test817: {
  function f() {
    if (t) {
      if (t.isForgemagus || t.modifiableItemType !== -1) {
        return "craftMagus";
      }
      if (e === this.SKILLID_DECRAFT) {
        return "decrafting";
      }
      if (e === this.SKILLID_WRAP_GIFT) {
        return "wrapping";
      }
      return "crafting";
    }
    return console.error("Invalid skillId: " + e);
  }
}
test818: {
  function f() {
    if (this._onCraftTable[e.objectUID]) {
      return null;
    }
    if (e.objectGID === T) {
      return this._getSignatureRuneOnTable();
    }
    if (this._isMagicRuneOrPotion(e)) {
      return this._getRuneOrPotionOnMagicTable();
    }
    return this._getItemOnMagicTable();
  }
}
test819: {
  function f() {
    if (this.canUseCrafterIngredient || t.objectGID === T) {
      return ["crafting"];
    }
    return [];
  }
}
test820: {
  function f() {
    if (c(t)) {
      return ["craftInventory"];
    }
    return ["ingredientsBag"];
  }
}
test821: {
  function f() {
    if (s.move) {
      return {
        targets: n,
        movedQty: "max" === s.move ? o : 1
      };
    }
    return {
      targets: n,
      proposedQty: "max" === s.propose ? o : 1,
      maxQty: o
    };
  }
}
test822: {
  function f() {
    if (!this._getSignatureRuneOnTable() && "CLIENT" !== this.craftSide && this.canCrafterSign) {
      return 1;
    }
    return 0;
  }
}
test823: {
  function f() {
    if (this._isMagicRuneOrPotion(t)) {
      if (n && !this.canUseCrafterIngredient) {
        return 0;
      }
      return i;
    }
    if (this.isCraftableItem(t)) {
      if (n) {
        return 0;
      }
      if (this._onCraftTable[t.objectUID]) {
        return 0;
      }
      return 1;
    }
    return 0;
  }
}
test824: {
  function f() {
    if ("SOLO" === this.craftSide) {
      if (this.getFreeSlotCount() || this._onCraftTable[t.objectUID]) {
        return i;
      }
      return 0;
    }
    if (this.getFreeSlotCount() || this._stackCountPerGid[t.objectGID]) {
      return i;
    }
    return 0;
  }
}
test825: {
  function f() {
    if (t >= 1) {
      "CRAFTER" === this.craftSide && this.isMagicCraft ? window.dofus.sendMessage("ExchangeObjectUseInWorkshopMessage", {
        objectUID: e,
        quantity: -t
      }) : window.dofus.sendMessage("ExchangeObjectMoveMessage", {
        objectUID: e,
        quantity: -t
      });
      return;
    }
    return console.error("removeItemFromCraft quantity: " + t);
  }
}
test826: {
  function f() {
    if (n) {
      t(n.info, e.addedOrDeleted);
      return i();
    }
    v.getData("Jobs", e.jobId, function (n, o) {
      if (n) {
        return i(n);
      }
      t(o, e.addedOrDeleted);
      i();
      return;
    });
    return;
  }
}
test827: {
  function f() {
    if (n) {
      return i(n);
    }
    t(o, e.addedOrDeleted);
    i();
    return;
  }
}
test828: {
  function f() {
    if ("SOLO" === this.craftSide) {
      return this._existingSlotCount - this._stackCount + e;
    }
    return this._existingSlotCount - Object.keys(this._stackCountPerGid).length + e;
  }
}
test829: {
  function f() {
    if (e) {
      return console.error("AchievementCategories error", e);
    }
    t.achievementCategories = i;
    i.forEach(function (e) {
      var i = e.achievementIds.length;
      0 === e.parentId ? i > 0 && (t.categoriesTotalAchievementCount[e.id] ? t.categoriesTotalAchievementCount[e.id] += i : t.categoriesTotalAchievementCount[e.id] = i, t.categoriesAchievementCount[e.id] = i, t.categories[e.id] = e.achievementIds) : (t.categoriesTotal[e.parentId] ? t.categoriesTotal[e.parentId].push(e.id) : t.categoriesTotal[e.parentId] = [e.id], t.categoriesTotalAchievementCount[e.parentId] ? t.categoriesTotalAchievementCount[e.parentId] += i : t.categoriesTotalAchievementCount[e.parentId] = i, t.subCategoriesAchievementCount[e.id] = i, t.subCategories[e.id] = e.achievementIds);
    });
    return;
  }
}
test830: {
  function f() {
    if (0 === this.maximumNumberOfAchievements) {
      return 0;
    }
    return Math.round(this.finishedAchievementsIds.length / this.maximumNumberOfAchievements * 100);
  }
}
test831: {
  function f() {
    if (e < c) {
      return 0;
    }
    if (e > d) {
      return 0;
    }
    return Math.floor(l[e - 1]);
  }
}
test832: {
  function f() {
    if (this.area) {
      return this.area.id === d;
    }
    console.warn("isInIncarnam called before we know our area");
    return !1;
  }
}
test833: {
  function f() {
    if (this._partyType === g) {
      return n.NUM_SLOTS_ARENA;
    }
    return n.NUM_SLOTS_CLASSIC;
  }
}
test834: {
  function f() {
    if (n) {
      return n.guestName;
    }
    return "?";
  }
}
test835: {
  function f() {
    if (o) {
      e._inviterName = n;
      return window.gui.chat.p2p.sendMsg(n, "rejoinRequest", e._partyId);
    }
    t.shift();
    if (t.length) {
      return i._findOnlineInviter(e, t);
    }
    0;
    return;
  }
}
test836: {
  function f() {
    if (e) {
      return window.connectionManager.once("GameFightStartingMessage", function () {
        window.dofus.sendMessage("QuestListRequestMessage");
      });
    }
    window.dofus.sendMessage("QuestListRequestMessage");
    return;
  }
}
test837: {
  function f() {
    if (p[e]) {
      return p[e].categoryClassName;
    }
    return "";
  }
}
test838: {
  function f() {
    if (!i.objectives[n].maxCompletion || i.objectives[n].maxCompletion < 2) {
      return "";
    }
    return " (" + i.objectives[n].curCompletion + "/" + i.objectives[n].maxCompletion + ")";
  }
}
test839: {
  function f() {
    if (t) {
      return console.error(t);
    }
    e.initialized = !0;
    e.emit("listUpdated");
    return;
  }
}
test840: {
  function f() {
    if (t) {
      return i(t);
    }
    e.emit("questUpdate", s.questId);
    i();
    return;
  }
}
test841: {
  function f() {
    if (t) {
      return i(t);
    }
    r = n[a].dbQuest.repeatType === m ? e.dailyQuests : e;
    a === f ? (e.dailyQuests.mainQuest = n[a], e.emit("mainDQStarted", a)) : n[a].dbQuest.repeatType === m ? (e.dailyQuests.active[a] = e.dailyQuests.all[a] = n[a], e.emit("DQStarted", a), e._pendingDailyQuest === a && (delete e.dailyQuests.all[e._pendingOldDaily], delete e.dailyQuests.active[e._pendingOldDaily], e.emit("rerollDQ", {
      oldDQId: e._pendingOldDaily,
      newDQId: a
    }), e._pendingOldDaily = 0, e._pendingDailyQuest = 0)) : (e.active[a] = e.all[a] = n[a], e.emit("questStarted", a));
    o(window.gui.chat, s, !!e.dailyQuests.all[a], r);
    i();
    return;
  }
}
test842: {
  function f() {
    if (i) {
      i.stepId = t.stepId;
      o(window.gui.chat, i, !!e.dailyQuests.all[i.questId], e, !0);
      window.dofus.sendMessage("QuestStepInfoRequestMessage", {
        questId: i.questId
      });
      return;
    }
    console.error(new Error("QuestStepStartedMessage: quest gone for " + t.questId));
    return;
  }
}
test843: {
  function f() {
    if (i) {
      return i(s, e, t);
    }
    return t();
  }
}
test844: {
  function f() {
    if (e) {
      return console.error("Unable to load data for alignment window", e);
    }
    t.alignmentTitles = i.AlignmentTitles;
    t.alignmentRanks = i.AlignmentRank;
    return;
  }
}
test845: {
  function f() {
    if (this._url) {
      return this._url + this._lang + "/";
    }
    return null;
  }
}
test846: {
  function f() {
    if (e) {
      return i(e);
    }
    s.getDataMap("Challenge", t, function (e, t) {
      if (e) {
        return i(e);
      }
      return i(null, n, t);
    });
    return;
  }
}
test847: {
  function f() {
    if (e) {
      return i(e);
    }
    return i(null, n, t);
  }
}
test848: {
  function f() {
    if (e.stageLevel > t.stageLevel) {
      return 1;
    }
    return -1;
  }
}
test849: {
  function f() {
    if (t) {
      return e(t);
    }
    i.popups = n;
    i._processPopups(n);
    return e();
  }
}
test850: {
  function f() {
    if (i.popups.length <= 0 || !i.alreadyOpenedPopup) {
      return t(function (e) {
        if (e) return console.error(e);
      });
    }
    i._processPopupsWithTriggers();
    return;
  }
}
test851: {
  function f() {
    if (Y) {
      return V.push(e);
    }
    X ? J.setImmediate(function () {
      e(null, X);
    }) : (V.push(e), l());
    return;
  }
}
test852: {
  function f() {
    if (Q.isAvailable()) {
      if (e.length) {
        Q.register(e, function (t) {
          if (t) {
            return _(new Error("Cannot register the purchases error: " + t));
          }
          le = [];
          J.forEachSeries(e, function (e, t) {
            Q.getProductDetails([e], function (i, n) {
              if (i) {
                p(i, e, t);
                return;
              }
              h(n, t);
              return;
            });
          }, function (t) {
            if (t) {
              _(new Error("PurchaseWrapper#getProductDetails failed with keys: " + e + " and error: " + t));
              return;
            }
            le.length && console.error("PurchaseWrapper#getProductDetails failed with keys: " + le.join(","));
            de || (de = {
              platform: $.osName,
              currency: ue,
              country: he
            });
            m(de);
            return;
          });
          return;
        });
        return;
      }
      return m({});
    }
    return _(new Error("Purchases are not available on this platform"));
  }
}
test853: {
  function f() {
    if (t) {
      return _(new Error("Cannot register the purchases error: " + t));
    }
    le = [];
    J.forEachSeries(e, function (e, t) {
      Q.getProductDetails([e], function (i, n) {
        if (i) {
          p(i, e, t);
          return;
        }
        h(n, t);
        return;
      });
    }, function (t) {
      if (t) {
        _(new Error("PurchaseWrapper#getProductDetails failed with keys: " + e + " and error: " + t));
        return;
      }
      le.length && console.error("PurchaseWrapper#getProductDetails failed with keys: " + le.join(","));
      de || (de = {
        platform: $.osName,
        currency: ue,
        country: he
      });
      m(de);
      return;
    });
    return;
  }
}
test854: {
  function f() {
    if (i) {
      p(i, e, t);
      return;
    }
    h(n, t);
    return;
  }
}
test855: {
  function f() {
    if (t) {
      _(new Error("PurchaseWrapper#getProductDetails failed with keys: " + e + " and error: " + t));
      return;
    }
    le.length && console.error("PurchaseWrapper#getProductDetails failed with keys: " + le.join(","));
    de || (de = {
      platform: $.osName,
      currency: ue,
      country: he
    });
    m(de);
    return;
  }
}
test856: {
  function f() {
    if (e) {
      Q.getPendingPurchases(function (i, n) {
        if (i) {
          console.error(i);
          return window.gui.openSimplePopup(ee("tablet.shop.couldNotBuy"));
        }
        if (n.length) {
          return ne.getWindow("purchasesPending").validatePendingPurchases(n);
        }
        ne.getWindow("shopConfirm").confirmBuy({
          article: e,
          isInApp: !0
        }, function (i) {
          if (i) {
            if (!X) return console.error(new Error("Purchase could not be done, store infos are no longer available")), H(), window.gui.openSimplePopup(ee("tablet.shop.couldNotBuy"));
            var n = 0;
            t.doubleCheckAmount(e.key, function (t, i, o) {
              if (t) return console.error(new Error("Purchase could not be done, error: " + t)), H(), window.gui.openSimplePopup(ee("tablet.shop.couldNotBuy"));
              i !== X.currency && console.error("Currency is not the same as the storeInfos: storeInfos.currency: " + X.currency + ", currency: " + i), n = o, n !== e.product._parsedPrice && console.error("Amount is not the same as the article: _parsedPrice: " + e.product._parsedPrice + ", amount: " + n);
              var a = {
                currency: i,
                iapKey: e.key,
                purchase: JSON.stringify([{
                  quantity: 1,
                  id: e.id,
                  amount: n
                }])
              };
              console.error("[Haapi info] ShopWindow sending shopBuyIAPRequest with data: " + JSON.stringify(a) + ", from price: " + e.product.price + ", from priceMicros: " + e.product.priceMicros), window.dofus.send("shopBuyIAPRequest", a);
            });
          }
        });
        return;
      });
      return;
    }
    return console.error(new Error("Trying to buy a non-existent article"));
  }
}
test857: {
  function f() {
    if (i) {
      console.error(i);
      return window.gui.openSimplePopup(ee("tablet.shop.couldNotBuy"));
    }
    if (n.length) {
      return ne.getWindow("purchasesPending").validatePendingPurchases(n);
    }
    ne.getWindow("shopConfirm").confirmBuy({
      article: e,
      isInApp: !0
    }, function (i) {
      if (i) {
        if (!X) return console.error(new Error("Purchase could not be done, store infos are no longer available")), H(), window.gui.openSimplePopup(ee("tablet.shop.couldNotBuy"));
        var n = 0;
        t.doubleCheckAmount(e.key, function (t, i, o) {
          if (t) return console.error(new Error("Purchase could not be done, error: " + t)), H(), window.gui.openSimplePopup(ee("tablet.shop.couldNotBuy"));
          i !== X.currency && console.error("Currency is not the same as the storeInfos: storeInfos.currency: " + X.currency + ", currency: " + i), n = o, n !== e.product._parsedPrice && console.error("Amount is not the same as the article: _parsedPrice: " + e.product._parsedPrice + ", amount: " + n);
          var a = {
            currency: i,
            iapKey: e.key,
            purchase: JSON.stringify([{
              quantity: 1,
              id: e.id,
              amount: n
            }])
          };
          console.error("[Haapi info] ShopWindow sending shopBuyIAPRequest with data: " + JSON.stringify(a) + ", from price: " + e.product.price + ", from priceMicros: " + e.product.priceMicros), window.dofus.send("shopBuyIAPRequest", a);
        });
      }
    });
    return;
  }
}
test858: {
  function f() {
    if (Q.isAlreadyOwnedError(e)) {
      return U();
    }
    console.error("makePurchase error: " + e);
    H();
    window.gui.openSimplePopup(ee("tablet.shop.validateIAPFail"));
    return;
  }
}
test859: {
  function f() {
    if ("RECEIPT_ALREADY_VALIDATED" === e.reason) {
      A(e.iapKey, null, function (e, t) {
        ne.getWindow("purchasesPending").validateNextPendingPurchases(e, t);
      });
      return;
    }
    ne.getWindow("purchasesPending").validateNextPendingPurchases(new Error("Validate pending order failed for productId: " + e.iapKey + " with reason: " + e.reason), e.iapKey);
    return;
  }
}
test860: {
  function f() {
    if (e) {
      console.error(new Error("Restore all purchases failed with error: " + e));
      H();
      window.gui.openSimplePopup(ee("tablet.shop.restoreFailed"));
      return;
    }
    t = t || [];
    H();
    ne.getWindow("purchasesPending").validatePendingPurchases(t);
    return;
  }
}
test861: {
  function f() {
    if (e) {
      return console.error(new Error("Check pending purchases failed with error: " + e));
    }
    t.length && ne.getWindow("purchasesPending").validatePendingPurchases(t);
    return;
  }
}
test862: {
  function f() {
    if (Q.isAvailable()) {
      Q.getProductDetails([e], function (e, n) {
        if (e) return t(e);
        var o = n.currency,
          a = n.products;
        for (var s in a) if (a.hasOwnProperty(s)) {
          var r = a[s],
            l = oe.parsePriceMicros(r.priceMicros);
          if (isNaN(l)) continue;
          i = l;
        }
        if (i) {
          return t(null, o, i);
        }
        return t(new Error("No amounts."));
      });
      return;
    }
    return t(new Error("purchase not available."));
  }
}
test863: {
  function f() {
    if (i) {
      return t(null, o, i);
    }
    return t(new Error("No amounts."));
  }
}
test864: {
  function f() {
    if (l || 0 === l) {
      return Math.ceil(e / l);
    }
    return null;
  }
}
test865: {
  function f() {
    if (r || 0 === r) {
      return Math.ceil(e * r);
    }
    return null;
  }
}
test866: {
  function f() {
    if (t === 1 / 0 || t === -(1 / 0)) {
      o.error(new Error("Parsed price is Infinity: " + e));
      return NaN;
    }
    return t;
  }
}
test867: {
  function f() {
    if (e.s < 0 && a) {
      return "-" + m;
    }
    return m;
  }
}
test868: {
  function f() {
    if (null === i) {
      return e.toString();
    }
    t = r(e.c);
    t = i <= R || i >= D ? u(t, i) : h(t, i, "0");
    if (e.s < 0) {
      return "-" + t;
    }
    return t;
  }
}
test869: {
  function f() {
    if (o) {
      return h;
    }
    c && (h = x.div(h));
    if (i) {
      return h.mod(i);
    }
    if (s) {
      return p(h, H, O, r);
    }
    return h;
  }
}
test870: {
  function f() {
    if (p) {
      e.s = -i;
      return e;
    }
    return new t(m ? c : NaN);
  }
}
test871: {
  function f() {
    if (m[0]) {
      e.s = -i;
      return e;
    }
    return new t(p[0] ? c : 3 == O ? -0 : 0);
  }
}
test872: {
  function f() {
    if (p[0]) {
      return o(e, p, h);
    }
    e.s = 3 == O ? -1 : 1;
    e.c = [e.e = 0];
    return e;
  }
}
test873: {
  function f() {
    if (u[0]) {
      return e;
    }
    return new t(d[0] ? a : 0 * r);
  }
}
test874: {
  function f() {
    if (e > 0 || e === t) {
      return t;
    }
    return t - 1;
  }
}
test875: {
  function f() {
    if (i) {
      if (n) {
        return 0;
      }
      return -r;
    }
    return s;
  }
}
test876: {
  function f() {
    if (n) {
      return 0;
    }
    if (!o ^ i) {
      return 1;
    }
    return -1;
  }
}
test877: {
  function f() {
    if (l > c ^ i) {
      return 1;
    }
    return -1;
  }
}
test878: {
  function f() {
    if (o[s] > a[s] ^ i) {
      return 1;
    }
    return -1;
  }
}
test879: {
  function f() {
    if (l == c) {
      return 0;
    }
    if (l > c ^ i) {
      return 1;
    }
    return -1;
  }
}
test880: {
  function f() {
    if (i || n) {
      if (i && !n) {
        return -1;
      }
      if (!i && n) {
        return 1;
      }
      return new Date(i) - new Date(n);
    }
    return o - a;
  }
}
test881: {
  function f() {
    if (this.gaugeMode !== d.FIGHT_TIMER) {
      return console.error(new Error("ProgressGauge._pauseAnimation: ProgressGauge is not in timer mode"));
    }
    this.gaugeFill.setStyle("webkitAnimationPlayState", "paused");
    return;
  }
}
test882: {
  function f() {
    if ("function" != typeof e.unselect) {
      return console.error(new Error("ExclusiveSelector.register: target does not have an unselect method"));
    }
    if (e.listeners("selected").indexOf(this._onSelected) !== -1) {
      return console.error(new Error("Dupe call to ExclusiveSelector.register"));
    }
    e.on("selected", this._onSelected);
    e.on("unselected", this._onUnselected);
    return;
  }
}
test883: {
  function f() {
    if (e.listeners("selected").indexOf(this._onSelected) === -1) {
      return console.error(new Error("ExclusiveSelector extra unregister"));
    }
    e.removeListener("selected", this._onSelected);
    e.removeListener("unselected", this._onUnselected);
    return;
  }
}
test884: {
  function f() {
    if (n === p.MOOD_ERROR_UNKNOWN) {
      e.setCurrentMood(e.previousMood);
      return t.openSimplePopup(a("ui.smiley.errorMood"));
    }
    if (n === p.MOOD_ERROR_FLOOD) {
      e.setCurrentMood(e.previousMood);
      return t.openSimplePopup(a("ui.smiley.errorFloodMood"));
    }
    e.setCurrentMood(i.smileyId);
    e.previousMood = i.smileyId;
    return;
  }
}
test885: {
  function f() {
    if (e) {
      return console.error(new Error("Gifts module: " + e));
    }
    if (i._giftList.length) {
      i.getCharaListMinusDeadPeople().length && (r.open("giftSelection", i._giftList), n = !1);
      return;
    }
    return console.error(new Error("Gifts module: _giftList is empty"));
  }
}
test886: {
  function f() {
    if (e.success) {
      i._assigningGifts[e.actionId] ? (i._assigningGifts[e.actionId] = !1, i.emit("giftAssigned", e)) : (i._assigningGifts[e.actionId] = e.success, i.emit("giftAssignRequestResult", e));
      return;
    }
    window.gui.openSimplePopup(d("tablet.gift.unableToAssign"), d("tablet.gift.unableToAssignTitle"));
    i.emit("giftAssignFailed", e);
    return;
  }
}
test887: {
  function f() {
    if (t === -1) {
      console.error(new Error("No pending retry " + e));
      return !1;
    }
    this.assignGift(e, window.gui.playerData.id);
    this._toaRetryPending.splice(t, 1);
    return !0;
  }
}
test888: {
  function f() {
    if ("narrow" === t) {
      i = d.ICONBAR_TAB_WIDTH + d.ICONBAR_CORNER_WIDTH;
      this._iconsVisiblePerLine = ~~((e - i) / D);
      return this._iconsVisiblePerLine * D + i;
    }
    i = d.ICONBAR_TAB_HEIGHT;
    this._iconsVisiblePerColumn = ~~((e - i) / D);
    return this._iconsVisiblePerColumn * D + i;
  }
}
test889: {
  function f() {
    if (!e || "spell" !== e.type || e.isEmpty()) {
      return null;
    }
    return e.shortcut.spellId;
  }
}
test890: {
  function f() {
    if (this.rootElement) {
      this.image = e;
      e = e || "none";
      this.icon.setStyle("backgroundImage", e);
      this.loadingImage = !1;
      this.requestedImages = null;
      this.emit("setImage", this.image);
      return;
    }
    return console.warn("trying to set an image on a destroyed object");
  }
}
test891: {
  function f() {
    if (this.hasTooltip) {
      o.enableTooltip(this, !0);
      return;
    }
    o.addTooltip(this, e, t || this.tooltipOptions);
    this.hasTooltip = !0;
    return;
  }
}
test892: {
  function f() {
    if (this.shortcut) {
      return this.shortcut.getHash();
    }
    return null;
  }
}
test893: {
  function f() {
    if (e) {
      h.call(this, "div", e);
      this.isAlive = !0;
      this.tweener = null;
      this.timeout = null;
      this.isLocked = e.isLocked;
      this.channel = e.channel;
      this.decodeAllPages = e.decodeAllPages;
      this.msgPages = null;
      this.currentPage = 0;
      this._senderId = e.senderId;
      this._senderName = e.senderName;
      this._isNonChat = e.isNonChat || !1;
      this._createContent(e);
      this.closeFunc = this.close.bind(this);
      this.actionHandler = e.action;
      this.closeHandler = e.onClose;
      e.title && this.setTitle(e.title);
      this._setContent(e.msg, e.objectItems);
      this.actor = e.actor;
      e.actor && this.contentLength && this._openNextToActor();
      return;
    }
    return console.error(new Error("SpeechBubble: params is missing"));
  }
}
test894: {
  function f() {
    if (null === n) {
      return null;
    }
    return e.substr(0, i + n.length);
  }
}
test895: {
  function f() {
    if (this.msgPages) {
      return this.close();
    }
    if (this.tweener || this.timeout) {
      this._freeze();
      return;
    }
    return this.close();
  }
}
test896: {
  function f() {
    if (t.isVisible()) {
      return t;
    }
    return null;
  }
}
test897: {
  function f() {
    if (e.effect.hasOwnProperty("delay")) {
      return t + e.effect.delay;
    }
    return t;
  }
}
test898: {
  function f() {
    if (e.effect.hasOwnProperty("delay") && e.effect.delay > 0) {
      return a(e);
    }
    return e.castingSpell.spell.id + "#" + e.castingSpell.casterId + "#" + e.parentBoostUid;
  }
}
test899: {
  function f() {
    if (e.type === d.MARK.BOMB) {
      return e.markSize + "-" + e.sourceId + "-" + e.spellId;
    }
    return e.markId;
  }
}
test900: {
  function f() {
    if (a.isInSpellRange(r, t)) {
      this._resetData();
      this._computeSpell(a, s, r, t, {
        statsBonus: {}
      }, function (e) {
        if (e) return a.resetCellZoneEffect(), i(e);
        var o = n._allSpellDamageInfo,
          l = n._temporaryUsedMark;
        n._temporaryUsedMark = [], n._resetData(), n._computeSpell(a, s, r, t, {
          isCriticalEffect: !0,
          statsBonus: {}
        }, function (e) {
          if (a.resetCellZoneEffect(), e) return i(e);
          var t = n._allSpellDamageInfo;
          n._temporaryUsedMark = l;
          var s = u.getDamageData(o, t);
          return i(null, s);
        });
      });
      return;
    }
    return i(null, []);
  }
}
test901: {
  function f() {
    if (a.fromMark) {
      return l._triggeredSpellsByGlyphs(C, t, i, n, a, e);
    }
    return e();
  }
}
test902: {
  function f() {
    if (!e && a) {
      return s.eachSeries(a, function (e, n) {
        var a = e.casterId === t ? i.statsBonus : null;
        o._computeSpell(e.spell, e.casterId, e.casterCellId, e.targetCellId, {
          triggeredBy: t,
          isCriticalEffect: i.isCriticalEffect,
          statsBonus: a
        }, n);
      }, n);
    }
    return n(e);
  }
}
test903: {
  function f() {
    if (!e && a) {
      return s.eachSeries(a, function (e, n) {
        var a = e.spell.ownerId === t ? i.statsBonus : null;
        o._computeSpell(e.spell, e.spell.ownerId, e.casterCellId, e.targetCellId, {
          comboBonus: e.comboBonus,
          statsBonus: a,
          specificTarget: e.target
        }, n);
      }, n);
    }
    return n(e);
  }
}
test904: {
  function f() {
    if (!e && a) {
      return s.eachSeries(a, function (e, n) {
        var a = e.spell.ownerId === t ? i.statsBonus : null;
        o._computeSpell(e.spell, e.spell.ownerId, e.casterCellId, e.targetCellId, {
          specificTarget: e.target,
          isTrap: !0,
          statsBonus: a
        }, n);
      }, n);
    }
    return n(e);
  }
}
test905: {
  function f() {
    if (!e && a) {
      return s.eachSeries(a, function (e, n) {
        var a = e.casterId === t ? i.statsBonus : null;
        o._computeSpell(e.spell, e.casterId, e.casterCellId, e.targetCellId, {
          isGlyph: i.isGlyph,
          isCriticalEffect: i.isCriticalEffect,
          statsBonus: a
        }, n);
      }, n);
    }
    return n(e);
  }
}
test906: {
  function f() {
    if (!e && r) {
      return s.eachSeries(r, function (e, o) {
        var s = e.casterId === t ? n.statsBonus : null;
        a._computeSpell(e.spell, e.casterId, i, e.targetCellId, {
          fromMark: !0,
          statsBonus: s
        }, o);
      }, o);
    }
    return o(e);
  }
}
test907: {
  function f() {
    if (!e && l) {
      return s.eachSeries(l, function (e, a) {
        r._computeSpell(e.spell, t, i, n, {
          isGlyph: !0,
          statsBonus: o.statsBonus
        }, a);
      }, a);
    }
    return a(e);
  }
}
test908: {
  function f() {
    if (i._spellCache[e]) {
      n[e] = i._spellCache[e].clone();
      return t();
    }
    l.createSpells([e], function (o, a) {
      if (o) {
        return t(o);
      }
      n[e] = i._spellCache[e] = a[e];
      return t();
    });
    return;
  }
}
test909: {
  function f() {
    if (o) {
      return t(o);
    }
    n[e] = i._spellCache[e] = a[e];
    return t();
  }
}
test910: {
  function f() {
    if (e) {
      return t(e);
    }
    return t(null, n);
  }
}
test911: {
  function f() {
    if (n === -1) {
      return 1;
    }
    return n;
  }
}
test912: {
  function f() {
    if (0 === n || t <= 0 || t >= u.UNLIMITED_ZONE_SIZE || e > t || n <= 0) {
      return u.DAMAGE_NOT_BOOSTED;
    }
    if (0 !== i) {
      if (e <= i) {
        return u.DAMAGE_NOT_BOOSTED;
      }
      return Math.max(0, u.DAMAGE_NOT_BOOSTED - .01 * Math.min(e - i, o) * n);
    }
    return Math.max(0, u.DAMAGE_NOT_BOOSTED - .01 * Math.min(e, o) * n);
  }
}
test913: {
  function f() {
    if (!n || n.isInvisibleInFight()) {
      return null;
    }
    return n;
  }
}
test914: {
  function f() {
    if (m && f) {
      return m;
    }
    if (g && _) {
      return g;
    }
    return null;
  }
}
test915: {
  function f() {
    if (e.diceNum && e.diceNum > 0) {
      return {
        min: e.value + e.diceNum,
        max: e.value + e.diceSide
      };
    }
    if (e.min && e.max) {
      return {
        min: e.min,
        max: e.max
      };
    }
    if (e.value && e.value > 0) {
      return {
        min: e.value,
        max: e.value
      };
    }
    return {
      min: 0,
      max: 0
    };
  }
}
test916: {
  function f() {
    if (e.diceNum && e.diceNum > 0) {
      return {
        min: e.diceNum,
        max: 0 === e.diceSide ? e.diceNum : e.diceSide
      };
    }
    if (e.min && e.max) {
      return {
        min: e.min,
        max: e.max
      };
    }
    if (e.value && e.value > 0) {
      return {
        min: e.value,
        max: e.value
      };
    }
    return {
      min: 0,
      max: 0
    };
  }
}
test917: {
  function f() {
    if (r) {
      return r.elementId;
    }
    return -1;
  }
}
test918: {
  function f() {
    if (t.isInMap(n.x, n.y)) {
      return n;
    }
    return null;
  }
}
test919: {
  function f() {
    if (a) {
      t.createSpells(Object.keys(n), function (i, o) {
        if (i) return e(i);
        var a = [];
        for (var r in o) if (o.hasOwnProperty(r)) {
          var l = o[r].spellLevel.effects[0];
          if (l && l.effectId === s.ACTION_FIGHT_ADD_TRAP_CASTING_SPELL) {
            var c = l.diceNum;
            a[c] = n[r];
          }
        }
        t.createSpells(Object.keys(a), function (t, i) {
          if (t) return e(t);
          var n = [];
          for (var o in i) if (i.hasOwnProperty(o)) for (var s = 0; s < a[o].length; s++) {
            var r = a[o][s],
              l = i[o].clone();
            l.setLevel(r.level), l.ownerId = r.caster, n.push({
              spell: l,
              casterCellId: r.casterCellId,
              targetCellId: r.targetCellId,
              target: r.target
            });
          }
          return e(null, n);
        });
      });
      return;
    }
    return e();
  }
}
test920: {
  function f() {
    if (c) {
      n.createSpells(Object.keys(l), function (t, i) {
        if (t) return e(t);
        var n = [];
        for (var o in i) if (i.hasOwnProperty(o)) for (d = 0; d < l[o].length; d++) {
          var a = l[o][d],
            s = i[o].clone();
          s.setLevel(a.level), s.ownerId = a.caster, n.push({
            spell: s,
            casterCellId: a.casterCellId,
            targetCellId: a.targetCellId,
            comboBonus: a.comboBonus,
            target: a.target
          });
        }
        return e(null, n);
      });
      return;
    }
    return e();
  }
}
test921: {
  function f() {
    if (n) {
      t.createSpells(Object.keys(i), function (t, n) {
        if (t) return e(t);
        var o = [];
        for (var a in n) if (n.hasOwnProperty(a)) {
          var s = n[a];
          s.setLevel(i[a].level), s.ownerId = i[a].casterId, o.push({
            spell: s,
            casterId: i[a].casterId,
            targetCellId: i[a].targetCellId
          });
        }
        return e(null, o);
      });
      return;
    }
    return e();
  }
}
test922: {
  function f() {
    if (s) {
      i.createSpells(Object.keys(n), function (i, o) {
        if (i) return e(i);
        var a = [];
        for (var s in o) if (o.hasOwnProperty(s)) {
          var r = o[s];
          r.setLevel(n[s].level), r.ownerId = t.caster.id, a.push({
            spell: r,
            casterId: t.caster.id
          });
        }
        return e(null, a);
      });
      return;
    }
    return e();
  }
}
test923: {
  function f() {
    if (l) {
      n.createSpells(Object.keys(s), function (o, a) {
        if (o) return e(o);
        var r = [];
        for (var l in a) {
          var c = a[l],
            d = s[l].spellType,
            u = 2 & d ? t.target.id : t.caster.id,
            h = 1 & d ? t.target.id : t.caster.id,
            p = n.getVirtualCellFromRealCell(i.getActor(h).cellId),
            m = n.getVirtualCellFromRealCell(i.getActor(u).cellId);
          c.setLevel(s[l].level), c.ownerId = h, r.push({
            spell: c,
            casterId: h,
            targetId: u,
            casterCellId: p,
            targetCellId: m
          });
        }
        return e(null, r);
      });
      return;
    }
    return e();
  }
}
test924: {
  function f() {
    if (r) {
      a.createSpells(Object.keys(s), function (e, o) {
        if (e) return t(e);
        var r = [];
        for (var l in o) {
          var c = o[l],
            d = s[l].spellType,
            u = 2 & d ? i.target.id : i.caster.id,
            h = 1 & d ? i.target.id : i.caster.id,
            p = a.getVirtualCellFromRealCell(n.getActor(h).cellId),
            m = a.getVirtualCellFromRealCell(n.getActor(u).cellId);
          c.setLevel(s[l].level), c.ownerId = h, r.push({
            spell: c,
            casterId: h,
            targetId: u,
            casterCellId: p,
            targetCellId: m
          });
        }
        return t(null, r);
      });
      return;
    }
    return t();
  }
}
test925: {
  function f() {
    if (c) {
      if (o.reverseSort) {
        return -c;
      }
      return c;
    }
    return r - l;
  }
}
test926: {
  function f() {
    if (e === this._parentElt && o.left === this._parentRect.left && o.top === this._parentRect.top) {
      return this.open(i);
    }
    this._updateContent(t, n, e, o);
    this._firstOpen(i);
    return;
  }
}
test927: {
  function f() {
    if (e < 0 || e >= this._entries.length) {
      return console.warn("Invalid dropdown index", e);
    }
    this.scroller.scrollToElement(this._entries[e], 0);
    return;
  }
}
test928: {
  function f() {
    if (t.disabled) {
      i.addClassNames("disabled");
      return;
    }
    i.on("tap", o);
    i.dropDown = this;
    i.action = t;
    return;
  }
}
test929: {
  function f() {
    if (o) {
      o.update(t, i, n);
      return;
    }
    return console.error("marker not found: " + e);
  }
}
test930: {
  function f() {
    if (t) {
      t.remove();
      delete this.markers[e];
      return;
    }
    return console.error("marker not found: " + e);
  }
}
test931: {
  function f() {
    if (0 !== i) {
      return i;
    }
    if (e._id > t._id) {
      return 1;
    }
    return -1;
  }
}
test932: {
  function f() {
    if (1 !== i) {
      return "scale(" + i + ")";
    }
    return "";
  }
}
test933: {
  function f() {
    if (this._isOnSameMap) {
      return "";
    }
    return "rotate(" + this._arrowAngle + "deg)";
  }
}
test934: {
  function f() {
    if (t) {
      return e(t);
    }
    C = i;
    e();
    return;
  }
}
test935: {
  function f() {
    if (t) {
      return e(t);
    }
    m();
    e();
    return;
  }
}
test936: {
  function f() {
    if (i) {
      e.text = a.getText("tablet.spent.hard", i);
      return !0;
    }
    return console.warn("Cannot convert currency");
  }
}
test937: {
  function f() {
    if (a.playerData.guild.hasGuild()) {
      return h;
    }
    return u;
  }
}
test938: {
  function f() {
    if (window.gui.playerData.characterBaseInformations.level >= 50) {
      return h;
    }
    return u;
  }
}
test939: {
  function f() {
    if (a.playerData.jobs && Object.keys(a.playerData.jobs.list).length > 0) {
      return h;
    }
    return u;
  }
}
test940: {
  function f() {
    if (a.playerData.alliance.hasAlliance()) {
      return h;
    }
    return u;
  }
}
test941: {
  function f() {
    if (a.playerData.equippedMount) {
      return h;
    }
    return u;
  }
}
test942: {
  function f() {
    if (window.gui.playerData.achievements.finishedAchievementsIds.indexOf(c.ASTRUB_ACHIEVEMENT) !== -1) {
      return h;
    }
    return u;
  }
}
test943: {
  function f() {
    if (window.gui.playerData.achievements.finishedAchievementsIds.indexOf(c.ASTRUB_ACHIEVEMENT) !== -1) {
      return h;
    }
    return u;
  }
}
test944: {
  function f() {
    if (a.playerData.socialData.spouse) {
      return h;
    }
    return u;
  }
}
test945: {
  function f() {
    if (void 0 === this.lockStatus[e]) {
      console.error(new Error("UiLocker.isFeatureLocked: featureId `" + e + "` unknown"));
      return !0;
    }
    return !(this.lockStatus[e].base !== u && !this.lockStatus[e].customLockedReasons);
  }
}
test946: {
  function f() {
    if (t && i) {
      this._setStatus(e, !0, t, i);
      return;
    }
    return console.error(new Error("UiLocker.lockFeature: featureId: " + e + " reasonKey: " + t + " reasonDescription: " + i + " - a reasonKey and a reasonDescription are required to lock a feature"));
  }
}
test947: {
  function f() {
    if (t) {
      this._setStatus(e, !1, t);
      return;
    }
    return console.error(new Error("UiLocker.unlockFeature: a reasonKey is required to unlock a feature"));
  }
}
test948: {
  function f() {
    if ("ASC" === t) {
      return r;
    }
    return -r;
  }
}
test949: {
  function f() {
    if (e >= x && e < L) {
      return p("tablet.inventory.yellowWarningTooltip");
    }
    if (e >= L) {
      return p("tablet.inventory.redWarningTooltip");
    }
    return "";
  }
}
test950: {
  function f() {
    if (e && e.item && e.item.nameId) {
      if (t && t.item && t.item.nameId) {
        return e.item.nameId.localeCompare(t.item.nameId);
      }
      console.error("Missing information for " + t && t.id);
      return 0;
    }
    console.error("Missing information for " + e && e.id);
    return 0;
  }
}
test951: {
  function f() {
    if (i > 0 && n > 0) {
      return i - n;
    }
    if (i > 0) {
      return 1;
    }
    if (n > 0) {
      return -1;
    }
    return e.objectUID - t.objectUID;
  }
}
test952: {
  function f() {
    if (i > 0 && n > 0) {
      return e.quantity * i - t.quantity * n;
    }
    if (i > 0) {
      return 1;
    }
    if (n > 0) {
      return -1;
    }
    return e.objectUID - t.objectUID;
  }
}
test953: {
  function f() {
    if (n || o) {
      n && (n.setQuantity(t), this._filterItem(this.itemList[e]), this._updateFilter(), this.filterList(), this._displayPage(this.currentPage, !0), this.currentOpenedWindow && this.currentOpenedWindow.emit("itemQuantity", this.itemList[e], t));
      return;
    }
    console.error(new Error("No slot with item UID " + e));
    return;
  }
}
test954: {
  function f() {
    if (t && this._selectSlotAndDisplayPage(t)) {
      return t.itemInstance;
    }
    return null;
  }
}
test955: {
  function f() {
    if (r) {
      A(r, s.presetId, function (t) {
        t === _.YES ? L.saveCustom = !0 : e.setItem(i);
      });
      return;
    }
    console.error(new Error("PresetBox#setDeleteContextMenu: itemNameId is missing for pos " + n + " mountModel " + o + " type " + a));
    return;
  }
}
test956: {
  function f() {
    if (i) {
      if (i.model) {
        e.enableContextMenu(!1);
        return;
      }
      e.enableContextMenu(!0);
      e.setContextMenu("preset", {
        slot: e,
        canRemove: !0,
        onClose: t
      });
      return;
    }
    console.error(new Error("PresetBox#setDeleteContextMenu: itemData is missing for pos " + n + " mountModel " + o + " type " + a));
    return;
  }
}
test957: {
  function f() {
    if (t) {
      I(t.presetId, function (i) {
        i === _.YES ? (window.dofus.sendMessage("InventoryPresetDeleteMessage", {
          presetId: t.presetId
        }), L.addClassNames("spinner")) : e.enable();
      });
      return;
    }
    return e.enable();
  }
}
test958: {
  function f() {
    if (i) {
      return N(i);
    }
    L._updateSetSlot(t);
    e();
    return;
  }
}
test959: {
  function f() {
    if (t !== _.YES) {
      return e.addSetButton.enable();
    }
    e._importSet();
    e._saveSet();
    return;
  }
}
test960: {
  function f() {
    if (t.log) {
      t.logMessage(e.content, L[e.type]);
      return;
    }
    return console.warn(e.content);
  }
}
test961: {
  function f() {
    if (n.length < t) {
      e.logMessage("Need to be at least " + t + " letters length.", "Error");
      return;
    }
    return e._searchItem.search(n, function (t, i) {
      if (t) {
        return console.error("AdminConsole items search", t);
      }
      e.logMessage(i, "Info");
      return;
    });
  }
}
test962: {
  function f() {
    if (t) {
      return console.error("AdminConsole items search", t);
    }
    e.logMessage(i, "Info");
    return;
  }
}
test963: {
  function f() {
    if (this.history[this.history.length - 1] !== e && e) {
      this.history.push(e);
      this.historyPointer = this.history.length;
      return;
    }
    this.historyPointer = this.history.length;
    return;
  }
}
test964: {
  function f() {
    if (s) {
      return this.logMessage(s.getHostname(), "Debug");
    }
    C.error(new Error("Config is missing."));
    return this.logMessage("Error: config error", "Error");
  }
}
test965: {
  function f() {
    if (a(null, i)) {
      console.error("preload: assets missing for map id " + e);
      return t();
    }
    return t(null, i);
  }
}
test966: {
  function f() {
    if (e.length) {
      h.getAllDataMap("SubAreas", function (i, n) {
        if (i) return t(i);
        var o = {};
        for (var a in n) if (n.hasOwnProperty(a)) {
          var s = n[a],
            l = s.mapIds || [];
          if (e.indexOf(s.areaId) === -1) continue;
          r(l, o);
        }
        return t(null, o);
      });
      return;
    }
    return this._onError("noArea:" + e);
  }
}
test967: {
  function f() {
    if (i._shouldStop) {
      return c.setImmediate(function () {
        return d(y);
      });
    }
    return s(n, function (s) {
      if (s) return d(s);
      delete e[n], r++;
      var c = r / a,
        u = o(c, l),
        h = r + t,
        p = a + t,
        m = h / p,
        f = Math.round(100 * m) / 100;
      i._onStep({
        count: h,
        nbTotalMaps: p,
        percent: f,
        secondLeft: u
      });
      return d();
    });
  }
}
test968: {
  function f() {
    if (e) {
      return t._onError(e);
    }
    t._preload(i, 0);
    return;
  }
}
test969: {
  function f() {
    if (this._cb) {
      return t(new Error("SEARCH_ON_GOING"));
    }
    if (e) {
      e.replace(/[^0-9a-z ]/gi, "");
      this._cb = t;
      window.dofus.send("searchItemRequest", {
        search: e
      });
      return;
    }
    return t(null, "USAGE: /searchitem item_name");
  }
}
test970: {
  function f() {
    if (t === -1) {
      return console.warn("Cannot remove unknown arena member #" + e);
    }
    this.table.delRow(t);
    this.memberCount--;
    return;
  }
}
test971: {
  function f() {
    if (e.findMemberRow(t.id) >= 0) {
      return console.error("Dupe arena member #" + t.name);
    }
    e.addMemberRow(t.name, t.id);
    return;
  }
}
test972: {
  function f() {
    if (n) {
      return console.error(n);
    }
    i.openState && i.breedId === e && i._updateSpellSlots(t);
    return;
  }
}
test973: {
  function f() {
    if (i.length) {
      d.createSpells(i, function (e, i) {
        if (e) return t(e);
        i = d.sortSpells(i, "minPlayerLevel");
        for (var o = 0; o < i.length; o += 1) {
          var a = i[o];
          n[a.id] = a;
        }
        t();
      });
      return;
    }
    return t();
  }
}
test974: {
  function f() {
    if (e.isLoaded) {
      return this._addCertificates(Object.keys(e.objects));
    }
    this.waitingGauge.showGauge(1);
    this.isWaitingForInventory = !0;
    return;
  }
}
test975: {
  function f() {
    if (t = this._findTileInRooms(i)) {
      t.mountData = this._prepareMountForRoom(e, t.room);
      this._refreshTile(t);
      t === this.focusedTile && this._displayMountDetails(e);
      return;
    }
    return console.error("Received data about unknown mount ", e);
  }
}
test976: {
  function f() {
    if ("certificate" !== e) {
      return t;
    }
    return ~~t.substr(1);
  }
}
test977: {
  function f() {
    if (i.id === e) {
      return i;
    }
    return null;
  }
}
test978: {
  function f() {
    if (n) {
      return e.setStyle("backgroundImage", n);
    }
    l.preloadImage("gfx/mounts/" + t + ".png", function (n) {
      A[t] = n, e.currentModel === t && (i._hasBeenDestroyed || e.setStyle("backgroundImage", n));
    });
    return;
  }
}
test979: {
  function f() {
    if (e < 0 || e >= this.states.length) {
      return console.error("Bad state index for toggle: " + e);
    }
    this._setValueByIndex(e);
    return;
  }
}
test980: {
  function f() {
    if (i) {
      t ? i.selected || (this.selectedTiles[e] = i, this.numSelected++) : i.selected && (delete this.selectedTiles[e], this.numSelected--);
      i.setTileSelected(t);
      return i;
    }
    return console.error("Invalid tileId:", e);
  }
}
test981: {
  function f() {
    if (i()) {
      window.gui.openConfirmPopup({
        title: f("ui.common.confirm"),
        message: f("ui.stats.resetAllStats"),
        cb: function (t) {
          if (t) {
            e();
            var i = [];
            n.summary.forEach(function (e) {
              e.resetCheckbox.isActivate() && i.push(A[e.key]);
            }), window.dofus.sendMessage("StatsResetRequestMessage", {
              statIds: i
            });
          }
        }
      });
      return;
    }
    e();
    return;
  }
}
test982: {
  function f() {
    if (this.stats && this.stats[this.key]) {
      return c(this.key, this.stats[this.key].getBaseWithoutAdditionalPts());
    }
    return 0;
  }
}
test983: {
  function f() {
    if (i && i.asBytes) {
      return n;
    }
    if (i && i.asString) {
      return a.bytesToString(n);
    }
    return t.bytesToHex(n);
  }
}
test984: {
  function f() {
    if (i) {
      A(P, t);
      return;
    }
    window.gui.chat.logMsg(y("ui.chat.calligraphyBadContext"));
    return A(P);
  }
}
test985: {
  function f() {
    if (1 === t.quantity) {
      window.gui.playerData.inventory.confirmDestroyItem(t, 1);
      return;
    }
    e._minMaxSelector.openAround(this, {
      min: 1,
      max: t.quantity
    });
    return;
  }
}
test986: {
  function f() {
    if (t._mountData) {
      return B.open("mount");
    }
    t.item && window.gui.openContextualMenuAround("item", this, {
      item: t.item.getItemInstance() || t.item.getItem(),
      location: t._parentWindow ? t._parentWindow.constructor.name : "",
      enableCertificate: !0
    });
    return;
  }
}
test987: {
  function f() {
    if (t) {
      return console.error(t);
    }
    e === i._mountData && i._name.setText(n.nameId);
    return;
  }
}
test988: {
  function f() {
    if (this._isAdditionalPtsAssignMode) {
      return this._additionalPtsToAssign;
    }
    return this._basePtsToAssign;
  }
}
test989: {
  function f() {
    if (this._isAdditionalPtsAssignMode) {
      return this._initialAdditionalPts;
    }
    return this._initialLevel;
  }
}
test990: {
  function f() {
    if (e) {
      r.close(o.id);
      return console.warn("Documents error", e);
    }
    t.typeId === d && n.open(t);
    t.typeId === u && c.open(t);
    l("OPEN_DOCUMENT");
    return;
  }
}
test991: {
  function f() {
    if (i) {
      return t(i);
    }
    u.getDataMap("SubAreas", Object.keys(n), function (i, n) {
      if (i) return t(i);
      for (var a = window.gui.databases.Areas, s = [], r = 0; r < e.length; r++) {
        var l = e[r],
          c = n[l.subAreaId],
          d = o[l.modelId];
        s.push({
          type: "house",
          gfxId: d.gfxId,
          name: d.nameId,
          areaName: a[c.areaId].nameId,
          price: p.kamasToString(l.price),
          rooms: l.nbRoom,
          chests: l.nbChest,
          skillsCount: l.skillListIds.length,
          subAreaName: c.nameId,
          ownerName: l.ownerName,
          ownerConnected: l.ownerConnected,
          worldX: l.worldX,
          worldY: l.worldY
        });
      }
      return t(null, s);
    });
    return;
  }
}
test992: {
  function f() {
    if ("house" === e.dialogType) {
      e.houseToSellFilter.maxPrice = t;
      window.dofus.sendMessage("HouseToSellFilterMessage", e.houseToSellFilter);
      window.dofus.sendMessage("HouseToSellListRequestMessage", {
        pageIndex: 1
      });
      return;
    }
    e.paddockToSellFilter.maxPrice = t;
    window.dofus.sendMessage("PaddockToSellFilterMessage", e.paddockToSellFilter);
    window.dofus.sendMessage("PaddockToSellListRequestMessage", {
      pageIndex: 1
    });
    return;
  }
}
test993: {
  function f() {
    if ("house" === t.dialogType) {
      window.dofus.sendMessage("HouseToSellListRequestMessage", e);
      return;
    }
    window.dofus.sendMessage("PaddockToSellListRequestMessage", e);
    return;
  }
}
test994: {
  function f() {
    if ("house" === t.dialogType) {
      window.dofus.sendMessage("HouseToSellListRequestMessage", e);
      return;
    }
    window.dofus.sendMessage("PaddockToSellListRequestMessage", e);
    return;
  }
}
test995: {
  function f() {
    if (t) {
      return s;
    }
    return a;
  }
}
test996: {
  function f() {
    if (r) {
      return e(null, r);
    }
    o.getAllDataMap("Skills", function (t, i) {
      if (t) return e(t);
      r = [];
      for (var o in i) {
        var a = i[o];
        a.availableInHouse && r.push({
          id: a.id,
          nameId: a.nameId
        });
      }
      n.sortObjectInArray(r, "nameId");
      return e(null, r);
    });
    return;
  }
}
test997: {
  function f() {
    if (t) {
      e.windowBody.show();
      e.updateData(t);
      return;
    }
    e.windowBody.hide();
    return;
  }
}
test998: {
  function f() {
    if (t) {
      return w("ui.fightend.bonus") + w("ui.common.colon") + t + "%";
    }
    return w("ui.fightend.noBonus");
  }
}
test999: {
  function f() {
    if (this.maxValue) {
      return e + this.humanValue + " / " + this.maxValue;
    }
    return e + this.humanValue + "%";
  }
}
test1000: {
  function f() {
    if (e.tabs.getTabsMap()[t.tabId]) {
      e.tabs.toggleTabAvailability(t.tabId, !t.locked);
      return;
    }
    return console.error(new Error("Unknown tab id `" + t.tabId + "` in `" + e.id + "` window."));
  }
}
test1001: {
  function f() {
    if (e) {
      this._openedTimestampTabs[e] = this._scBalanceWhenOpenTabs[e] = this._hcBalanceWhenOpenTabs[e] = 0;
      return;
    }
    return this._openedTimestamp = this._scBalanceWhenOpen = this._hcBalanceWhenOpen = 0;
  }
}
test1002: {
  function f() {
    if (window.gui.playerData.isPvpAggressable()) {
      return window.gui.playerData.alignment.alignmentInfos.honor + " / " + window.gui.playerData.alignment.alignmentInfos.honorNextGradeFloor;
    }
    return "0";
  }
}
test1003: {
  function f() {
    if (n) {
      return console.error("Failed to get alignment rank", n);
    }
    i.alignmentLevel.setText(o.nameId + " - " + c("ui.common.level") + " " + t.alignmentValue);
    i._displaySpecialisations(o.orderId);
    e.getOrder(o, function (t, n) {
      if (t) {
        return console.error("Failed to get AlignmentOrder", t);
      }
      i.title.setText(n.nameId);
      e.getAlignmentImageUrl(function (e) {
        i.alignmentImage.setStyle("backgroundImage", e);
      });
      e.getOrderImageUrl(n.id, function (e) {
        i.icon.setStyle("backgroundImage", e);
      });
      return;
    });
    return;
  }
}
test1004: {
  function f() {
    if (t) {
      return console.error("Failed to get AlignmentOrder", t);
    }
    i.title.setText(n.nameId);
    e.getAlignmentImageUrl(function (e) {
      i.alignmentImage.setStyle("backgroundImage", e);
    });
    e.getOrderImageUrl(n.id, function (e) {
      i.icon.setStyle("backgroundImage", e);
    });
    return;
  }
}
test1005: {
  function f() {
    if (window.gui.playerData.characterBaseInformations.sex) {
      return e.nameFemaleId;
    }
    return e.nameMaleId;
  }
}
test1006: {
  function f() {
    if (t.length) {
      p.getDataMap(e, t, function (e, s) {
        function r(e) {
          if (l.length !== e.length) return a("Achievement: Missing rewards data or images");
          var t = l.map(function (t, i) {
            var n = c[t] || {};
            return {
              url: e[i],
              quantity: n.quantity,
              data: n.data
            };
          });
          return a(null, t);
        }
        if (e) return a(e);
        for (var l = [], c = {}, d = 0; d < t.length; d += 1) {
          var u = s[t[d]],
            h = null !== n ? i + "/" + u[n] + ".png" : i;
          c[h] = {
            data: u,
            quantity: o[d] || null
          }, l.push(h);
        }
        return f.preloadImages(l, r);
      });
      return;
    }
    return a(null, []);
  }
}
test1007: {
  function f() {
    if (e) {
      p = !0;
      return t(e);
    }
    m = m.concat(i);
    d += i.length;
    u += 1;
    if (d === c || u === l.length) {
      return t(null, m);
    }
    0;
    return;
  }
}
test1008: {
  function f() {
    if (0 === c) {
      return t(null, []);
    }
    0;
    return;
  }
}
test1009: {
  function f() {
    if (e === t) {
      return e;
    }
    return e + " " + M("ui.chat.to") + " " + t;
  }
}
test1010: {
  function f() {
    if (i) {
      return console.error(i);
    }
    O = n.Areas || [];
    R = n.SubAreas || [];
    O.sort(t._sortByName);
    R.sort(t._sortByName);
    e();
    return;
  }
}
test1011: {
  function f() {
    if (i) {
      return console.error(i);
    }
    D = n.MonsterSuperRaces || [];
    P = n.MonsterRaces || [];
    D.sort(t._sortByName);
    P.sort(t._sortByName);
    e();
    return;
  }
}
test1012: {
  function f() {
    if (s.subareasInMyWorld && s.subareasInMyWorld.length) {
      a.createChild("div", {
        text: s.text,
        className: "mapLocationText"
      });
      a.appendChild(new o({
        subareaIds: s.subareasInMyWorld,
        favorite: s.favorite,
        centerOn: s.centerOn
      }));
      return a;
    }
    a.setText(s.text);
    return a;
  }
}
test1013: {
  function f() {
    if (t) {
      return e.femaleText;
    }
    return e.maleText;
  }
}
test1014: {
  function f() {
    if (i) {
      return console.error(i);
    }
    e._createQuestCategories();
    e._setupEvents();
    t = !0;
    e.emit("initialized");
    return;
  }
}
test1015: {
  function f() {
    if (t) {
      return console.error("Failed to retrieve items", s);
    }
    n.forEach(function (t) {
      if (t) {
        var n = e.appendChild(new g());
        n.addClassNames("rewardSlot"), n.setItem(t), n.setQuantity(i[t.id]), n.on("tap", function () {
          S.open("itemBox", {
            itemData: t
          });
        });
      }
    });
    return;
  }
}
test1016: {
  function f() {
    if (t) {
      return e(t);
    }
    D = i || [];
    D.sort(function (e, t) {
      return e.order - t.order;
    });
    e();
    return;
  }
}
test1017: {
  function f() {
    if (t) {
      this.kamasPoint.show();
      this.kamas.setText(x.intToString(t));
      return;
    }
    this.kamasPoint.hide();
    return;
  }
}
test1018: {
  function f() {
    if (o) {
      this.xpPoint.show();
      this.xp.setText(x.intToString(o));
      return;
    }
    this.xpPoint.hide();
    return;
  }
}
test1019: {
  function f() {
    if (t) {
      return this.questsList.getItem(t.dbQuest.categoryId);
    }
    return null;
  }
}
test1020: {
  function f() {
    if (e.hasClassName("completed")) {
      return 1;
    }
    if (t.hasClassName("completed")) {
      return -1;
    }
    return 0;
  }
}
test1021: {
  function f() {
    if (R.active[e]) {
      v("GEN_BUTTON");
      t.currentQuest = R.all[e];
      t._updateStepList();
      t._resetSelectedQuestElement();
      r.addClassNames("selected");
      t.selectedQuestElement = r;
      return;
    }
    return v("NO_ACTION");
  }
}
test1022: {
  function f() {
    if (i < n) {
      return -1;
    }
    if (i > n) {
      return 1;
    }
    if (e.id > t.id) {
      return 1;
    }
    if (e.id < t.id) {
      return -1;
    }
    return 0;
  }
}
test1023: {
  function f() {
    if (e.isItem) {
      return -1;
    }
    if (t.isItem) {
      return 1;
    }
    if (e.level > t.level) {
      return 1;
    }
    if (e.level < t.level) {
      return -1;
    }
    if (e.id > t.id) {
      return 1;
    }
    if (e.id < t.id) {
      return -1;
    }
    return 0;
  }
}
test1024: {
  function f() {
    if (!i && t.levelWanted <= t.spell.level) {
      M.open("BonusPackElitePopupWindow");
      return;
    }
    t.levelWanted = Math.max(t.levelWanted - 1, 1);
    a._refreshSpellRow(e.id);
    return;
  }
}
test1025: {
  function f() {
    if (window.gui.playerData.isFighting) {
      window.gui.openSimplePopup(d("ui.error.cantDoInFight"));
      return;
    }
    window.gui.openConfirmPopup({
      title: d("ui.common.confirm"),
      message: d("ui.common.confirmModification"),
      cb: function (e) {
        e && a.upgradeSpells();
      }
    });
    return;
  }
}
test1026: {
  function f() {
    if (e.table.getRow(t)) {
      e._updateDisplayedSpellLevel(t, i);
      return;
    }
    return console.error(new Error("spell " + t + " does not exist in spell window"));
  }
}
test1027: {
  function f() {
    if (e.mustRefreshJobs) {
      return e._refreshJobs(i);
    }
    i && e.selectJob(i);
    return;
  }
}
test1028: {
  function f() {
    if (t.length) {
      y.preloadImages(t, function (t) {
        for (var n = 0; n < t.length; n++) I[i[n]] = t[n];
        return e();
      });
      return;
    }
    return e();
  }
}
test1029: {
  function f() {
    if (s) {
      console.error("Failed to get ingredients", s);
      return i(s);
    }
    if (n._timestamp !== o) {
      return i();
    }
    return m.eachSeries(r, function (e, t) {
      n._addRecipe(e, t);
    }, function (o) {
      if (o) return console.error(o), i(o);
      if (n._hasBeenReset()) return i();
      if (t.nbCase) {
        A = !1;
        for (var s = 1; s <= T; s += 1) {
          var r = s <= n._nbCase;
          n.filterNbSlots[s] = r, n.filterCheckboxes[s].toggleActivation(r);
        }
        A = !0;
      }
      0 === n._recipesData.length && (n._recipesData = e), n.recipesWrapper.delClassNames("spinner"), n.recipesList.show(), n.recipesWrapper.refresh(), n.recipesWrapper.goToTop(), n._setPageCount(a), n._isItemDataPending || (n._isItemDataPending = !0, m.eachLimit(e, 50, function (e, t) {
        var i = [e.resultId].concat(e.ingredientIds);
        p.getItems(i, t);
      }, function (e) {
        if (e) {
          console.error(e);
          return i(e);
        }
        if (n._hasBeenReset()) {
          return i();
        }
        A = !0;
        n._searchLine.show();
        n._ingredientsLine.show();
        n._searchBar.delClassNames("spinner");
        n.isInCraft && (n._showCraftableCheckbox.show(), n._checkboxWrapper.delClassNames("spinner"));
        return i();
      }));
    });
  }
}
test1030: {
  function f() {
    if (e) {
      console.error(e);
      return i(e);
    }
    if (n._hasBeenReset()) {
      return i();
    }
    A = !0;
    n._searchLine.show();
    n._ingredientsLine.show();
    n._searchBar.delClassNames("spinner");
    n.isInCraft && (n._showCraftableCheckbox.show(), n._checkboxWrapper.delClassNames("spinner"));
    return i();
  }
}
test1031: {
  function f() {
    if (t) {
      return console.error("SocialGroupCreationWindow: Failed to retrieve emblem data", t);
    }
    e.emblemBackgrounds = i.EmblemBackgrounds;
    e.emblemSymbols = i.EmblemSymbols;
    e.emblemSymbolCategories = i.EmblemSymbolCategories;
    e._generateSelectorOptions();
    e._displayEmblemBackgrounds(i.EmblemBackgrounds);
    e._displayEmblemSymbols(i.EmblemSymbols);
    e._setupUI();
    e.delClassNames("spinner");
    e.windowBody.show();
    e._updateUISize();
    e.on("open", function () {
      e.addClassNames("spinner"), e._generateSelectorOptions(), e.windowBody.hide(), e.tabs.openTab("background"), e._setupUI(), e.delClassNames("spinner"), e.windowBody.show();
    });
    e.on("opened", function () {
      e._updateUISize();
    });
    return;
  }
}
test1032: {
  function f() {
    if (this.closeTweener) {
      this.closeTweener.cancel();
      return e();
    }
    this.closeTweener = l.tween(this, d, {
      time: 150,
      delay: 0,
      easing: "ease-out"
    }, e);
    return;
  }
}
test1033: {
  function f() {
    if (1 === parseInt(e, 10)) {
      return window.gui.openConfirmPopup({
        title: s("ui.popup.warning"),
        message: s("ui.social.doUGiveRights", i.memberInfo.name),
        cb: function (n) {
          if (n) {
            i.memberInfo.rank = e;
            return;
          }
          i.selector.setValue(t);
          return;
        }
      });
    }
    i.memberInfo.rank = e;
    return;
  }
}
test1034: {
  function f() {
    if (n) {
      i.memberInfo.rank = e;
      return;
    }
    i.selector.setValue(t);
    return;
  }
}
test1035: {
  function f() {
    if (e.fromInside) {
      window.dofus.sendMessage("HouseSellFromInsideRequestMessage", {
        amount: 0
      });
      l.close(e.id);
      return;
    }
    window.dofus.sendMessage("HouseSellRequestMessage", {
      amount: 0
    });
    return;
  }
}
test1036: {
  function f() {
    if (i > 0) {
      return f.openNotEnoughHardCurrencyPopup(i);
    }
    return window.dofus.send("houseBuyRequest", {
      houseId: e.houseInfo.purchasableId,
      amountHard: e.proposedPriceHard,
      amountSoft: e.proposedPrice
    });
  }
}
test1037: {
  function f() {
    if (e.fromInside) {
      window.dofus.sendMessage("HouseSellFromInsideRequestMessage", {
        amount: e.proposedPrice
      });
      l.close(e.id);
      return;
    }
    window.dofus.sendMessage("HouseSellRequestMessage", {
      amount: e.proposedPrice
    });
    return;
  }
}
test1038: {
  function f() {
    if (o || !a) {
      return console.warn("Houses Id: " + e + " not found!", o);
    }
    h.preloadImage("gfx/houses/" + a.gfxId + ".png", function (e) {
      n.houseOwner = "?" === t ? d("ui.common.houseWithNoOwner") : d("ui.house.homeOf", i);
      var o = a.nameId;
      if (n.image) {
        delete n.imageUrl;
        delete n.titleText;
        delete n.descriptionText;
        n.image.setStyle("backgroundImage", e);
        n.title.setText(n.houseOwner);
        n.description.setText(o);
        return;
      }
      n.imageUrl = e;
      n.titleText = n.houseOwner;
      n.descriptionText = o;
      return;
    });
    return;
  }
}
test1039: {
  function f() {
    if (n.image) {
      delete n.imageUrl;
      delete n.titleText;
      delete n.descriptionText;
      n.image.setStyle("backgroundImage", e);
      n.title.setText(n.houseOwner);
      n.description.setText(o);
      return;
    }
    n.imageUrl = e;
    n.titleText = n.houseOwner;
    n.descriptionText = o;
    return;
  }
}
test1040: {
  function f() {
    if (i || !n) {
      return console.warn("Houses Id: " + e.modelId + " not found!", i);
    }
    t.proposedPrice = n.defaultPrice;
    t.price.setValue(c.kamasToString(t.proposedPrice, ""));
    return;
  }
}
test1041: {
  function f() {
    if (s.itemInstance.livingObjectSkin === t) {
      return e();
    }
    this.disable();
    window.dofus.sendMessage("LivingObjectChangeSkinRequestMessage", {
      livingUID: s.itemInstance.objectUID,
      livingPosition: s.itemInstance.position,
      skinId: t
    });
    return;
  }
}
test1042: {
  function f() {
    if (e.itemInstance && e.itemInstance.livingObjectCategory) {
      this._displayItem(e.itemInstance);
      return;
    }
    return console.error("Must provide a living object or living object associated itemInstance");
  }
}
test1043: {
  function f() {
    if (n || !o[0]) {
      return console.error("ItemBoxWindow: error openWithDbItem", n, t);
    }
    e(o[0], i);
    return;
  }
}
test1044: {
  function f() {
    if (t) {
      return console.error("ItemBoxWindow: error createItemInstances", t);
    }
    e(n.array[0], i);
    return;
  }
}
test1045: {
  function f() {
    if (e.feedingBox.possessFeedItemForLivingObject(n.itemInstance)) {
      u.open("feed", {
        mode: "livingObject",
        item: n.itemInstance
      });
      return;
    }
    return window.gui.openSimplePopup(s("ui.item.errorNoFoodLivingItem", n.itemInstance.item.nameId));
  }
}
test1046: {
  function f() {
    if (e.itemInstance && e.itemInstance.livingObjectCategory) {
      this._displayItem(e.itemInstance);
      return;
    }
    return console.error("Must provide a living object or living object associated itemInstance");
  }
}
test1047: {
  function f() {
    if (e) {
      console.error(new Error("setupRecipe error: " + e));
      return;
    }
    t.itemRecipeBox && (t.itemRecipeBox.appendChild(t.recipeBox), t._craftDetails.setText(t.recipeBox.craftDetails), t.itemRecipeBox.appendChild(t._craftDetails));
    return;
  }
}
test1048: {
  function f() {
    if (e) {
      return console.error(e);
    }
    t.itemSet = i;
    t.windowTitle.setText(i.nameId);
    t.itemListBox.clearContent();
    t.bonusSelector.clearContent();
    f.getItems(i.items, function (e) {
      if (e) return console.error(e);
      var n = 0;
      t.bonusSelector.addOption("0 " + h("ui.common.objects"), 0), t.bonusSelector.toggleOption(0, !1);
      for (var o, a, s, r, l = window.gui.playerData.inventory.quantityList, c = 0; c < i.items.length; c += 1) s = i.items[c], a = f.items[s], o = p.getEquippedItemById(window.gui.playerData.inventory, s), o && (n += 1), r = t._createItemSlot(o || a), l.hasOwnProperty(s) || r.addClassNames("notOwned"), t.itemListBox.appendChild(r), t.bonusSelector.addOption(c + 1 + " " + h("ui.common.objects"), c + 1);
      t.combineBonusesCheckbox.deactivate(), t.bonusSelector.select(n);
    });
    return;
  }
}
test1049: {
  function f() {
    if (e) {
      return console.error(e);
    }
    i.bonusTable.clearContent();
    i._addEffectsToTable(t);
    return;
  }
}
test1050: {
  function f() {
    if (e) {
      return s(e);
    }
    d._mergeEffectInstances(t, function (e, t) {
      if (e) {
        return s(e);
      }
      t = t.concat(h);
      return s(null, t);
    });
    return;
  }
}
test1051: {
  function f() {
    if (e) {
      return s(e);
    }
    t = t.concat(h);
    return s(null, t);
  }
}
test1052: {
  function f() {
    if (i < n) {
      return -1;
    }
    if (i > n) {
      return 1;
    }
    return 0;
  }
}
test1053: {
  function f() {
    if (e && !e.item.isEquippable()) {
      return this._showError(d("tablet.mimicry.errorEquippable"));
    }
    if (t && !t.item.isEquippable()) {
      return this._showError(d("tablet.mimicry.errorEquippable"));
    }
    if (e && t) {
      if (e.getProperty("iconId") === t.getProperty("iconId")) {
        return this._showError(d("ui.mimicry.error.sameSkin"));
      }
      if (e.getProperty("typeId") !== t.getProperty("typeId")) {
        return this._showError(d("ui.mimicry.error.foodType"));
      }
      if (t.getProperty("level") > e.getProperty("level")) {
        return this._showError(d("ui.mimicry.error.foodLevel"));
      }
      this._requestMergeOrPreview(!0);
      return;
    }
    if (e) {
      return this._showHelp(d("tablet.mimicry.helpFood"));
    }
    return this._showHelp(d("tablet.mimicry.help"));
  }
}
test1054: {
  function f() {
    if (e) {
      return console.error("Failed creating preview item:" + e);
    }
    t._showPreviewItem(i.array[0]);
    return;
  }
}
test1055: {
  function f() {
    if (e.fromInside) {
      window.dofus.sendMessage("HouseLockFromInsideRequestMessage", n);
      c.close(e.id);
      return;
    }
    e.padlockInfo.changeOrUse ? window.dofus.sendMessage("LockableChangeCodeMessage", n) : window.dofus.sendMessage("LockableUseCodeMessage", n);
    return;
  }
}
test1056: {
  function f() {
    if (e === this.partyId) {
      return s.open(this.id);
    }
    window.dofus.sendMessage("PartyInvitationDetailsRequestMessage", {
      partyId: e
    });
    this.partyMap[e] || (this.partyMap[e] = !0, this.numParties++, 1 === this.numParties && this._setupListeners(!0));
    this.text ? this._resetDom() : this._setupDom();
    return;
  }
}
test1057: {
  function f() {
    if (e) {
      return t(e);
    }
    I = i.nameId;
    E = i.categoryId;
    x = i.rewardIds;
    A = i;
    return t();
  }
}
test1058: {
  function f() {
    if (t) {
      return e(t);
    }
    S = i.parentId;
    N = i.nameId;
    return e();
  }
}
test1059: {
  function f() {
    if (0 === S) {
      return e();
    }
    h.getData("AchievementCategories", S, function (t, i) {
      if (t) {
        return e(t);
      }
      N = i.nameId;
      return e();
    });
    return;
  }
}
test1060: {
  function f() {
    if (t) {
      return e(t);
    }
    N = i.nameId;
    return e();
  }
}
test1061: {
  function f() {
    if (0 === x.length) {
      return e();
    }
    h.getData("AchievementRewards", x, function (i, n) {
      if (i) return e(i);
      if (!y.rootElement) return e();
      for (var o = 0; o < n.length; o += 1) {
        var a = n[o],
          s = window.gui.playerData.achievements.completedData(A.id),
          r = a.isLinkedToAccount && s.isAccountCompleted,
          l = s.finishedlevel || window.gui.playerData.characterBaseInformations.level;
        if (a.experienceRatio) {
          var c = 0;
          r || (c = window.gui.playerData.achievements.getAchievementExperienceReward(a, A.level, l)), y.xp.setText(f.kamasToString(c, ""));
        } else if (a.kamasRatio) {
          var d = 0;
          r || (d = window.gui.playerData.achievements.getAchievementKamasReward(a, A.level, l)), y.kamas.setText(f.kamasToString(d, ""));
        }
        !r && (a.levelMin === -1 || a.levelMin <= t) && (a.levelMax === -1 || a.levelMax >= t) && (a.itemsReward && a.itemsReward.length > 0 && Array.prototype.push.apply(L, a.itemsReward), a.itemsQuantityReward && a.itemsQuantityReward.length > 0 && Array.prototype.push.apply(O, a.itemsQuantityReward), v._rewardItems.push({
          id: A.id,
          itemsReward: a.itemsReward,
          itemsQuantityReward: a.itemsQuantityReward
        }), a.emotesReward && a.emotesReward.length > 0 && Array.prototype.push.apply(R, a.emotesReward), a.titlesReward && a.titlesReward.length > 0 && Array.prototype.push.apply(D, a.titlesReward), a.ornamentsReward && a.ornamentsReward.length > 0 && Array.prototype.push.apply(P, a.ornamentsReward));
      }
      return e();
    });
    return;
  }
}
test1062: {
  function f() {
    if (0 === L.length) {
      return e();
    }
    g.getItems(L, function (t) {
      if (t) return e(t);
      for (var i = 0; i < L.length; i += 1) {
        var n = g.items[L[i]];
        n || (n = g.items[g.FALLBACK_DB_ITEM_ID]), B.push("gfx/items/" + n.iconId + ".png");
      }
      return e();
    });
    return;
  }
}
test1063: {
  function f() {
    if (0 === P.length) {
      return e();
    }
    h.getData("Ornaments", P, function (t, i) {
      if (t) return e(t);
      for (var n = 0; n < i.length; n += 1) B.push("gfx/ornaments/" + i[n].iconId + ".png");
      return e();
    });
    return;
  }
}
test1064: {
  function f() {
    if (0 === B.length) {
      return e();
    }
    m.preloadImages(B, function (t) {
      for (var i = 0; i < t.length; i += 1) {
        var n = T[i];
        n && n.rootElement && (n.setImage(t[i]), n.setQuantity(O[i]));
      }
      return e();
    });
    return;
  }
}
test1065: {
  function f() {
    if (e) {
      return console.error(e);
    }
    y.rootElement && (y.nameText.setText(I), y.category.setText(N));
    return;
  }
}
test1066: {
  function f() {
    if (e) {
      d.disable();
      window.gui.serversData.selectServer(e.id);
      r.close(t.id);
      return;
    }
    return console.error("No server");
  }
}
test1067: {
  function f() {
    if (e) {
      return console.error(e);
    }
    t._image.setStyle("backgroundImage", i);
    return;
  }
}
test1068: {
  function f() {
    if (0 !== r) {
      return r;
    }
    return t.id - e.id;
  }
}
test1069: {
  function f() {
    if (e) {
      return console.error(e);
    }
    t._image.setStyle("backgroundImage", i);
    return;
  }
}
test1070: {
  function f() {
    if (e.isFavorite && !t.isFavorite) {
      return -1;
    }
    if (!e.isFavorite && t.isFavorite) {
      return 1;
    }
    if (e.saved && !t.saved) {
      return -1;
    }
    if (!e.saved && t.saved) {
      return 1;
    }
    if (e.name > t.name) {
      return 1;
    }
    return -1;
  }
}
test1071: {
  function f() {
    if (e) {
      return console.error(e);
    }
    b.addItems(t.map);
    w.exchangeType !== r.MOUNT && b.refreshSlotGauge();
    return;
  }
}
test1072: {
  function f() {
    if (e) {
      return console.error(e);
    }
    b.setItemList(t.map);
    return;
  }
}
test1073: {
  function f() {
    if (e) {
      return console.error(e);
    }
    b.setItemList(t.map);
    b.refreshSlotGauge();
    return;
  }
}
test1074: {
  function f() {
    if (e) {
      m.getItems([e], function (i, n) {
        if (i) {
          return console.error("Failed to get token " + e + " for trade: " + i);
        }
        return t(n[0]);
      });
      return;
    }
    return t(null);
  }
}
test1075: {
  function f() {
    if (i) {
      return console.error("Failed to get token " + e + " for trade: " + i);
    }
    return t(n[0]);
  }
}
test1076: {
  function f() {
    if (this.selection) {
      return this.selection.item;
    }
    return this.item;
  }
}
test1077: {
  function f() {
    if (s > 0) {
      return y.openNotEnoughHardCurrencyPopup(s);
    }
    this._confirmTrade({
      itemInstance: i,
      amountHard: n,
      qty: a
    }, function () {
      window.dofus.send("exchangeBidHouseBuyRequest", {
        id: i.getProperty("id"),
        uid: i.objectUID,
        qty: a,
        amountHard: n,
        amountSoft: o
      }), e._prepareKpi("ExchangeBidHouseBuyResultMessage");
    });
    return;
  }
}
test1078: {
  function f() {
    if (t <= 0) {
      return window.gui.openSimplePopup(d("ui.error.invalidPrice"));
    }
    this._confirmTrade({
      isSell: !0,
      itemInstance: e,
      amountSoft: t,
      qty: i,
      fee: n
    }, function () {
      window.dofus.sendMessage("ExchangeObjectMovePricedMessage", {
        objectUID: e.objectUID,
        quantity: i,
        price: t
      });
    });
    return;
  }
}
test1079: {
  function f() {
    if (0 === e.price) {
      return e.priceInput.promptForValue();
    }
    o(e.item, e.quantity, e.price);
    e.tradeItemWindow.sellInBidHouse(e.item, e.price, e.quantity, e.fees);
    return;
  }
}
test1080: {
  function f() {
    if (t.myTable.bidHouseBuyerBox.isItemSearchable) {
      return e.item.shortName;
    }
    return null;
  }
}
test1081: {
  function f() {
    if (0 !== n) {
      return n;
    }
    return e.unitPrice - t.unitPrice;
  }
}
test1082: {
  function f() {
    if ("string" == typeof o) {
      return o.localeCompare(a);
    }
    return -1;
  }
}
test1083: {
  function f() {
    if (0 !== s) {
      return s;
    }
    return e.qty - t.qty;
  }
}
test1084: {
  function f() {
    if (this.serverAveragePrice !== -1) {
      return this.serverAveragePrice;
    }
    return this.displayedUnitPrice / this.displayedUnitCount;
  }
}
test1085: {
  function f() {
    if (o && t.isLinked()) {
      return e.showError(s("ui.bidhouse.badExchange"));
    }
    this.pricePerUnit = a;
    this.quantityValue.setValue(c);
    this.quantityValue.setReadonly(1 === r);
    this.unitPriceValue.setText(i ? i + " x " + l.intToString(a) : l.kamasToString(a));
    this._updatePrices();
    return;
  }
}
test1086: {
  function f() {
    if (e.hasOwnProperty("objectUID")) {
      return e.objectUID;
    }
    if (e.hasOwnProperty("objectGID")) {
      return e.objectGID;
    }
    return 0;
  }
}
test1087: {
  function f() {
    if (e) {
      return console.error(e);
    }
    t ? n.shopViewer.addItemsAndHighlightThem(i.array, "modify-bidHouse" === n.mode) : n.shopViewer.addItems(i.array, "modify-bidHouse" === n.mode);
    return;
  }
}
test1088: {
  function f() {
    if (e.emitTap) {
      return e.emit("moreGoultinesTap");
    }
    c.open("market", {
      tabId: "shop",
      tabParams: {
        category: "goultines"
      }
    });
    return;
  }
}
test1089: {
  function f() {
    if (e.emitTap) {
      return e.emit("bonusPackTap");
    }
    c.open("market", {
      tabId: "shop",
      tabParams: {
        category: "bonuspack"
      }
    });
    return;
  }
}
test1090: {
  function f() {
    if (t) {
      return console.error(t);
    }
    e.bonusPackDuration.setText(n.toUpperCase());
    return;
  }
}
test1091: {
  function f() {
    if (t) {
      return console.error(t);
    }
    e.bonusPackEliteDuration.setText(n.toUpperCase());
    return;
  }
}
test1092: {
  function f() {
    if (t) {
      i._removeSpinner();
      return console.error(t);
    }
    i._createDom();
    i._setEvents();
    i._poiUpdater = new c(i._worldMap);
    i.on("open", i._onOpen);
    i._onOpen(e);
    return;
  }
}
test1093: {
  function f() {
    if (i) {
      return e(i);
    }
    t._subAreaIdPerCoordinate = n.SubAreaIdPerCoordinate;
    t._subAreaData = n.SubAreasWorldMapData;
    t._iconsInfo = n.Hints;
    g.loadModel("icon", "assets", function (i, n) {
      var o = 1;
      i.meta && i.symbols && (o = i.meta.scale / M.ICONS_ORIGINAL_EXPORT_SCALE, i = i.symbols), t._iconsImage = n;
      var a = t._scene.createTexture(n, "worldMapIcons", "linear", "permanent");
      t._iconBatchData.createIconModels(i, a, o), e();
    });
    return;
  }
}
test1094: {
  function f() {
    if (this._worldMapData) {
      return {
        i: Math.floor((e - this._worldMapData.origineX) / this._zoneWidth),
        j: Math.floor((t - this._worldMapData.origineY) / this._zoneHeight)
      };
    }
    console.error(new Error("worldMapData are not ready yet!"));
    return {
      i: 0,
      j: 0
    };
  }
}
test1095: {
  function f() {
    if (i !== G._chunkBatchCurrent) {
      delete G._chunkBatchIndexes[e.id];
      return t();
    }
    f.loadTexture(e.path, function (i) {
      var n = G._chunkBatchIndexes[e.id];
      delete G._chunkBatchIndexes[e.id];
      if (n !== G._chunkBatchCurrent) {
        i.release();
        return t();
      }
      e.texture = i;
      G._createChunkGraphic(e);
      t();
      return;
    }, G._scene.renderer, "linear");
    return;
  }
}
test1096: {
  function f() {
    if (e._layer === t._layer) {
      return e._position - t._position;
    }
    return e._layer - t._layer;
  }
}
test1097: {
  function f() {
    if (t === -1) {
      console.error(new Error("[IconBatchData.removeCluster] Trying to remove inexistent cluster"));
      return;
    }
    delete this.iconClusters[e.id];
    this.zIndexedIconClusters.splice(t, 1);
    return;
  }
}
test1098: {
  function f() {
    if (0 === i) {
      return e.x - t.x;
    }
    return i;
  }
}
test1099: {
  function f() {
    if (0 === o) {
      return i.x - n.x;
    }
    return o;
  }
}
test1100: {
  function f() {
    if (void 0 === s || null === s) {
      i[a.id] = a;
      return n();
    }
    d.getDataMap("SubAreas", [s], function (e, o) {
      if (e) return n(e);
      var r = o[s],
        l = r.areaId,
        c = window.gui.databases.Areas[l];
      if (!c) return n(new Error("The area " + l + " doesn't exist"));
      var d = c.superAreaId,
        u = window.gui.databases.SuperAreas[c.superAreaId];
      if (!u) return n(new Error("The super area " + d + " doesn't exist"));
      var h = r.customWorldMap[0] || u.worldmapId;
      h === t._worldmap.getDisplayedWorldmapId() && (i[a.id] = a);
      return n();
    });
    return;
  }
}
test1101: {
  function f() {
    if (e.name < t.name) {
      return -1;
    }
    return 1;
  }
}
test1102: {
  function f() {
    if (e.rankValue < t.rankValue) {
      return -1;
    }
    return 1;
  }
}
test1103: {
  function f() {
    if (e.hoursSinceLastConnection < t.hoursSinceLastConnection) {
      return -1;
    }
    return 1;
  }
}
test1104: {
  function f() {
    if (t) {
      return t.name;
    }
    return "?";
  }
}
test1105: {
  function f() {
    if (n._checkQuery()) {
      n._queryBtn.disable();
      e(n.getQuery());
      return;
    }
    return n.loadResults([]);
  }
}
test1106: {
  function f() {
    if (t > 0) {
      return f.openNotEnoughHardCurrencyPopup(t);
    }
    return window.dofus.send("paddockBuyRequest", {
      amountHard: n,
      amountSoft: i
    });
  }
}
test1107: {
  function f() {
    if (e) {
      return console.error(e);
    }
    t.storageViewer.setItemList(i.map);
    return;
  }
}
test1108: {
  function f() {
    if (t[e]) {
      return t[e].text;
    }
    return null;
  }
}
test1109: {
  function f() {
    if (i) {
      return i.order || 0;
    }
    return 0;
  }
}
test1110: {
  function f() {
    if (e) {
      return console.error(e);
    }
    P.showNotification(A("tablet.charCrea.potionNeeded", i[0].getName()), t);
    return;
  }
}
test1111: {
  function f() {
    if (Date.now() - e.lastRendering < de) {
      return console.warn("Ignoring hammered button");
    }
    e._selectBreed(this.breedId, void 0, e._currentColors);
    return;
  }
}
test1112: {
  function f() {
    if (i) {
      return console.error("characterCreation: initialize error", i);
    }
    t._initialize(e);
    t._loadHeadImages();
    return;
  }
}
test1113: {
  function f() {
    if (e.complexity < t.complexity) {
      return -1;
    }
    if (t.complexity < e.complexity) {
      return 1;
    }
    return 0;
  }
}
test1114: {
  function f() {
    if (i) {
      return e(i);
    }
    t.headsMap = n;
    e();
    return;
  }
}
test1115: {
  function f() {
    if (this._assetUrlCache[e]) {
      return t(this._assetUrlCache[e]);
    }
    v.preloadImage(e, function (n) {
      i._assetUrlCache[e] = n, t(n);
    });
    return;
  }
}
test1116: {
  function f() {
    if (l.selectedColorBtn && l.selectedColorBtn.getColor()) {
      l._resetColorButton(l.selectedColorBtn);
      l._selectColor(l.selectedColorBtn.id, !0);
      l._updateSprite();
      return;
    }
    return P.showNotification(A("tablet.charCrea.resetCurrentColor"), this);
  }
}
test1117: {
  function f() {
    if (0 === s.length) {
      this.delClassNames("invalid");
      this.emit("validationPassed");
      return t;
    }
    this.addClassNames("invalid");
    this.emit("validationFailed", s);
    return !1;
  }
}
test1118: {
  function f() {
    if (e) {
      return console.error("Crafting: onResult error", e);
    }
    l.giveTheResult(t.objectInfo, t.message);
    return;
  }
}
test1119: {
  function f() {
    if (l._skillId !== l.jobsData.SKILLID_DECRAFT) {
      return e();
    }
    window.gui.openConfirmPopup({
      title: s("ui.popup.warning"),
      message: s("ui.craft.decraftConfirm"),
      cb: function (t) {
        t && e();
      }
    });
    return;
  }
}
test1120: {
  function f() {
    if (this.isRecipeCraftableFromInventory(t)) {
      t !== e.highlightedRecipeId ? window.dofus.sendMessage("ExchangeSetCraftRecipeMessage", {
        objectGID: t
      }) : e._totalQty < e._craftResultBox.getMaxQuantity() ? e._requestReplayCountChange(e._totalQty + 1) : e._craftResultBox.setQty(e._totalQty, !0);
      return;
    }
    return window.gui.openSimplePopup(s("ui.craft.dontHaveAllIngredient"));
  }
}
test1121: {
  function f() {
    if (e) {
      return {
        UID: e.objectUID,
        GID: e.objectGID,
        quantity: e.quantity
      };
    }
    return {};
  }
}
test1122: {
  function f() {
    if (C[e.listEntry.playerInfo.playerId]) {
      return v(e.listEntry);
    }
    g(e.listEntry);
    return;
  }
}
test1123: {
  function f() {
    if (e < 0) {
      w.table.clearContent();
      return;
    }
    T = e;
    window.dofus.sendMessage("JobCrafterDirectoryListRequestMessage", {
      jobId: e.id
    });
    return;
  }
}
test1124: {
  function f() {
    if (1 === n) {
      return l._moveItem(1);
    }
    l.minMaxSelector.open({
      min: 1,
      max: n,
      defaultValue: n,
      x: i.x,
      y: i.y
    });
    return;
  }
}
test1125: {
  function f() {
    if (this.isCrafter) {
      return c.prototype._onStopBtnTap.call(this);
    }
    window.dofus.sendMessage("ExchangeReadyMessage", {
      ready: !1,
      step: this.exchangeStep
    });
    return;
  }
}
test1126: {
  function f() {
    if (this.isCrafter) {
      return c.prototype._onAutoCraftStopped.call(this, e);
    }
    l.displayAutoCraftStopReasonMessage(e.reason);
    this.isInAutoCraft = !1;
    return;
  }
}
test1127: {
  function f() {
    if ("craftPayment" === I) {
      return window.dofus.sendMessage("ExchangeItemObjectAddAsPaymentMessage", {
        paymentType: T,
        bAdd: !1,
        objectToMoveId: b,
        quantity: e
      });
    }
    if ("ingredientsBag" === I) {
      return window.dofus.sendMessage("ExchangeObjectMoveMessage", {
        objectUID: b,
        quantity: -e
      });
    }
    E.removeItemFromCraft(b, e);
    return;
  }
}
test1128: {
  function f() {
    if (0 === o) {
      return e.unSelectSlot();
    }
    o > 1 && t.select({
      extraStyle: "stackMove"
    });
    return;
  }
}
test1129: {
  function f() {
    if (0 === o) {
      return e.unSelectSlot();
    }
    E.moveItemToCraft(this.id, i, o);
    return;
  }
}
test1130: {
  function f() {
    if (!e._otherCharacterTradeSpace.hasFreePods() && e._myTradeSpace.getItemsToTradeCount() > 0) {
      return window.gui.openSimplePopup(s("ui.storage.noRoomForTransfert"));
    }
    window.dofus.sendMessage("ExchangeReadyMessage", {
      ready: !0,
      step: e._exchangeStep
    });
    return;
  }
}
test1131: {
  function f() {
    if (e._iConfirmed) {
      return window.dofus.sendMessage("ExchangeReadyMessage", {
        ready: !1,
        step: e._exchangeStep
      });
    }
    r.close(e.id);
    return;
  }
}
test1132: {
  function f() {
    if (1 === n) {
      return window.dofus.sendMessage("ExchangeObjectMoveMessage", {
        objectUID: i.objectUID,
        quantity: 1
      });
    }
    t._currentUID = i.objectUID;
    t._minMaxSelector.fromInventory = !0;
    t._minMaxSelector.open({
      min: 1,
      max: n
    });
    return;
  }
}
test1133: {
  function f() {
    if (r) {
      return r;
    }
    return r = new a("div", {
      text: d("ui.exchange.warning")
    });
  }
}
test1134: {
  function f() {
    if (1 === t) {
      return window.dofus.sendMessage("ExchangeObjectMoveMessage", {
        objectUID: e.itemInstance.objectUID,
        quantity: -1
      });
    }
    o = e.itemInstance.objectUID;
    p.fromInventory = !1;
    p.open({
      min: 1,
      max: t
    });
    return;
  }
}
test1135: {
  function f() {
    if (1 === i) {
      return window.dofus.sendMessage("ExchangeObjectMoveMessage", {
        objectUID: o,
        quantity: 1
      });
    }
    p.fromInventory = !0;
    p.open({
      min: 1,
      max: i
    });
    return;
  }
}
test1136: {
  function f() {
    if (void 0 === t) {
      return console.error("Invalid tab " + e);
    }
    this.menuList.selectItem(t, {
      scrollToElement: !0
    });
    return;
  }
}
test1137: {
  function f() {
    if (n()) {
      return window.cordova.plugins.WebViewSelector.currentEngine;
    }
    return d;
  }
}
test1138: {
  function f() {
    if (s(t)) {
      return r(t);
    }
    return e;
  }
}
test1139: {
  function f() {
    if (n()) {
      if (t.getAvailableEngineIds().indexOf(e) === -1) {
        return i(r("tablet.webViewSelector.engineUnknown", e));
      }
      window.cordova.plugins.WebViewSelector.setEngine(e, function (e) {
        if (e) {
          console.error("webViewSelector error: " + e);
          return i(r("tablet.webViewSelector.pluginError"));
        }
        i();
        return;
      });
      return;
    }
    return i(r("tablet.webViewSelector.pluginNotFound"));
  }
}
test1140: {
  function f() {
    if (e) {
      console.error("webViewSelector error: " + e);
      return i(r("tablet.webViewSelector.pluginError"));
    }
    i();
    return;
  }
}
test1141: {
  function f() {
    if (e) {
      i.openSimplePopup(r("tablet.webViewSelector.unableToChangeEngine") + " " + e);
      l.getWindow("options").refreshUi();
      return;
    }
    i.openConfirmPopup({
      message: r("tablet.webViewSelector.restartNeeded") + " " + r("tablet.webViewSelector.restartQuestion"),
      cb: function (e) {
        if (e) {
          navigator.app.exitApp();
          return;
        }
        return i.openSimplePopup(r("tablet.webViewSelector.delayedRestart"), r("ui.popup.information"));
      }
    });
    return;
  }
}
test1142: {
  function f() {
    if (e) {
      navigator.app.exitApp();
      return;
    }
    return i.openSimplePopup(r("tablet.webViewSelector.delayedRestart"), r("ui.popup.information"));
  }
}
test1143: {
  function f() {
    if (i) {
      return h("ui.shop.free");
    }
    return t;
  }
}
test1144: {
  function f() {
    if (e) {
      return console.error(e);
    }
    i._promoBanner.setText(h("tablet.shop.promo.banner", n));
    i._promoBannerFree.setText(h("tablet.shop.promo.banner", n));
    return;
  }
}
test1145: {
  function f() {
    if (i.rootElement) {
      i._promoBannerOver.setText(h("tablet.shop.promo.banner.over"));
      i._promoBannerFree.setText(h("tablet.shop.promo.banner.over"));
      i._promoBannerOver.toggleDisplay(!c);
      i._promoBanner.toggleDisplay(!1);
      return;
    }
    return console.error(new Error("articleBox onTimeout: the box is missing " + i.articleId));
  }
}
test1146: {
  function f() {
    if (i || !n) {
      return e(new Error("ShopWindow._showFakeShop: unable to get data. " + i));
    }
    t.onShopOpenCategorySuccess(n);
    t._openCategory(L);
    return e(null);
  }
}
test1147: {
  function f() {
    if (this._previousViewName === A) {
      return this.reactivateCategories();
    }
    if (this._previousViewName === I) {
      this.reactivateCategories();
      this._views[I].restoreScrollPosition();
      return;
    }
    this._setView(this._previousViewName);
    return;
  }
}
test1148: {
  function f() {
    if (window.gui.scenarioManager.isBehaviourEnabled(M.DISABLE_FAKE_SHOP)) {
      w.purchaseArticleOnAnkama(d.articlesMap[e], t);
      return;
    }
    window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.FAKE_SHOP_BUY);
    m.close("shopConfirm");
    n();
    return;
  }
}
test1149: {
  function f() {
    if (i) {
      if (t.lastAction) {
        t.lastAction();
        return;
      }
      t._reinitializeShop();
      return;
    }
    e && n();
    return;
  }
}
test1150: {
  function f() {
    if (t) {
      return e(t);
    }
    window.dofus.send("shopOpenRequest");
    return;
  }
}
test1151: {
  function f() {
    if (t.length > 0) {
      return t[0].getChildren()[0];
    }
    return null;
  }
}
test1152: {
  function f() {
    if (e) {
      this._requestPageOfCategory(this.openedCategory, e.page + 1);
      return;
    }
    return console.error(new Error("Trying to load additional content of a non-opened category."));
  }
}
test1153: {
  function f() {
    if (i && i.media && i.media[0]) {
      i.name = r("ui.albueraTutorial.bonusPack.name");
      i.description = r("ui.albueraTutorial.bonusPack.description");
      s.preloadImageUrl(l, function (n) {
        i.media[0].url = n;
        return e(null, t);
      });
      return;
    }
    return e(new Error("fakeShop.getFakeShopData: main article is missing information"));
  }
}
test1154: {
  function f() {
    if (e) {
      return t.displayError(u.NO_PACK, e);
    }
    window.dofus.send("shopIAPArticlesRequest");
    return;
  }
}
test1155: {
  function f() {
    if (i) {
      this.content.show();
      this.articleBoxContainer.show();
      this.windowBody.delClassNames("spinner");
      this.buyPackText.setText(a("tablet.shop.buyHardCurrencyPack", n));
      this.articleBox.update(i);
      this.articleBox.on("tapIAPButton", function () {
        l.close("buyHardCurrencyConfirm"), c.purchaseArticleOnStore(i);
      });
      return;
    }
    return this.displayError(u.AMOUNT_TOO_HIGH);
  }
}
test1156: {
  function f() {
    if (e) {
      return i._displayPurchasesList(e);
    }
    window.dofus.send("shopIAPArticlesRequest");
    i._startProcessing();
    return;
  }
}
test1157: {
  function f() {
    if (i) {
      s(i, function (e, n) {
        if (e) return void console.error("Loaded static achievement data error", e);
        var o = [],
          a = [];
        n.sort(function (e, t) {
          var i = e.quantity || 6,
            n = t.quantity || 6;
          return n - i;
        });
        for (var s = 0; s < n.length; s += 1) n[s] && n[s].data && (a.push(n[s].data.id), o.push(n[s]));
        v.getItems(a, function (e) {
          if (e) return void console.error("Failed to get items", e);
          for (var n = 0; n < a.length; n += 1) {
            var s = a[n],
              r = v.items[s],
              c = t.appendChild(new _({
                name: "icon" + n
              })),
              d = o[n];
            if (r && "Item" === d.data._type) {
              var u = h("ui.item.averageprice") + " : ",
                p = r.getProperty("averagePrice");
              u += p === -1 ? h("ui.item.averageprice.unavailable") : y.kamasToString(p), c.setContextMenu("item", {
                item: r
              });
            }
            var m = d.url,
              f = d.quantity,
              w = d.data;
            c.setImage(m), f && c.setQuantity(f);
            var b = new g("div");
            b.createChild("div", {
              text: w.nameId || l(w)
            }), u && "Item" === d.data._type && b.createChild("div", {
              text: u
            }), w.descriptionId && b.createChild("div", {
              text: w.descriptionId,
              className: "details"
            }), c.setTooltip(b);
          }
          if (i.goultines) {
            var M = t.appendChild(new _({
              name: "iconGoultine"
            }));
            M.icon.addClassNames("iconGoultine"), M.setQuantity(i.goultines);
            var T = new g("div");
            T.createChild("div", {
              text: h("ui.common.goultines")
            }), M.setTooltip(T);
          }
        });
      });
      return t;
    }
    return t;
  }
}
test1158: {
  function f() {
    if (e) {
      l = !0;
      return t(e);
    }
    c = c.concat(i);
    a += i.length;
    s += 1;
    if (a === o || s === n.length) {
      return t(null, c);
    }
    0;
    return;
  }
}
test1159: {
  function f() {
    if (t.length) {
      m.getDataMap(e, t, function (e, s) {
        function r(e) {
          if (l.length !== e.length) return a("Achievement: Missing rewards data or images");
          var t = l.map(function (t, i) {
            var n = c[t] || {};
            return {
              url: e[i],
              quantity: n.quantity,
              data: n.data
            };
          });
          return a(null, t);
        }
        if (e) return a(e);
        for (var l = [], c = {}, d = 0; d < t.length; d += 1) {
          var u = s[t[d]],
            h = w.join(i, null !== n ? u[n] + ".png" : "");
          c[h] = {
            data: u,
            quantity: o[d] || null
          }, l.push(h);
        }
        return f.preloadImages(l, r);
      });
      return;
    }
    return a(null, []);
  }
}
test1160: {
  function f() {
    if (window.gui.playerData.characterBaseInformations.sex) {
      return e.nameFemaleId;
    }
    return e.nameMaleId;
  }
}
test1161: {
  function f() {
    if (window.gui.playerData.ToaData.current.steps) {
      return window.gui.playerData.ToaData.current.steps;
    }
    return null;
  }
}
test1162: {
  function f() {
    if (t > i) {
      return [];
    }
    return e.slice(t, i - t + 1);
  }
}
test1163: {
  function f() {
    if (i || n) {
      n && (n = n.substr(0, n.length - 1));
      return i + n;
    }
    return ".";
  }
}
test1164: {
  function f() {
    if (e) {
      return console.error(e);
    }
    t._showMonsters(i);
    t._showChallenges(n);
    t._showScore(n);
    return;
  }
}
test1165: {
  function f() {
    if (100 === this._shield.level || t) {
      return this.feedingBox.storageViewer.unSelectSlot(e.data.objectUID);
    }
    this.feedingBox.selectItem(e.itemInstance);
    return;
  }
}
test1166: {
  function f() {
    if (e) {
      if (e.message === this._logic.NEED_HC) {
        this._enableButtons(!0);
        return;
      }
      if (e.message === this._logic.ALREADY_IN_PROGRESS) {
        l.warning("ToaRetryPopup: already in process");
        return;
      }
      if (e.message === this._logic.GET_STORE_INFOS_ERROR) {
        this._enableButtons(!0);
        this._retry(e);
        return;
      }
      if (e.message === this._logic.CANNOT_ASSIGN_PENDING_RETRY) {
        this._enableButtons(!0);
        window.gui.openPopup({
          title: r("ui.common.error"),
          message: r("tablet.shop.couldNotBuy") + " (code: caprerr)"
        });
        l.error("ToaRetryPopup buy (caprerr)", e);
        u.close(this.id);
        return;
      }
      if (e.message === this._logic.GIFT_TIMEOUT) {
        this._enableButtons(!0);
        window.gui.openPopup({
          title: r("tablet.gift.unableToAssignTitle"),
          message: r("tablet.gift.unableToAssign") + " (code: gterr)"
        });
        l.error("ToaRetryPopup buy (gterr)", e);
        u.close(this.id);
        return;
      }
      this._enableButtons(!0);
      window.gui.openPopup({
        title: r("ui.common.error"),
        message: r("tablet.shop.couldNotBuy") + " (code: genbuyerr)"
      });
      l.error("ToaRetryPopup buy (genbuyerr)", e);
      u.close(this.id);
      return;
    }
    window.dofus.sendMessage("ContinueTowerOfAscensionWithCreditRequestMessage", {
      stepNumber: t
    });
    this._enableButtons(!0);
    u.close(this.id);
    return;
  }
}
test1167: {
  function f() {
    if (e) {
      this._buttonYes.enable();
      this._buttonNo.enable();
      this._buttonYes.delClassNames("spinner");
      return;
    }
    this._buttonYes.disable();
    this._buttonNo.disable();
    this._buttonYes.addClassNames("spinner");
    return;
  }
}
test1168: {
  function f() {
    if (t - l.TOA_RETRY_HC_PRICE < 0) {
      a.openNotEnoughHardCurrencyPopup(l.TOA_RETRY_HC_PRICE - t);
      return n._fireCallbackAndClean(new Error(n.NEED_HC));
    }
    s.send("toaContinue", {
      goultinesAmount: t
    });
    return;
  }
}
test1169: {
  function f() {
    if (i) {
      return e(i);
    }
    t._requestPageOfCategory(p, 1);
    return;
  }
}
test1170: {
  function f() {
    if (t) {
      return e._getCategoryInfo();
    }
    return e.close();
  }
}
test1171: {
  function f() {
    if (e) {
      return p;
    }
    return m;
  }
}
test1172: {
  function f() {
    if (e === i.dailyQuests.mainQuest.questId) {
      return t._updatetMainQuestPart();
    }
    if (i.dailyQuests.active[e]) {
      return t._updatetDQSlot(t.getDQSlot(e), i.dailyQuests.active[e]);
    }
    0;
    return;
  }
}
test1173: {
  function f() {
    if (t) {
      return console.error("Failed to retrieve items", s);
    }
    n.forEach(function (t) {
      if (t) {
        var n = e.appendChild(new u());
        n.addClassNames("rewardSlot"), n.setItem(t), n.setQuantity(i[t.id]), n.on("tap", function () {
          m.open("itemBox", {
            itemData: t
          });
        });
      }
    });
    return;
  }
}
test1174: {
  function f() {
    if (e) {
      return console.error(e);
    }
    b.setStyle("backgroundImage", p.items[I].image);
    return;
  }
}
test1175: {
  function f() {
    if (e) {
      return t(e);
    }
    i.upgradeWeaponList = n;
    i.statsChoice.show();
    i._selectElement(d.EARTH, t);
    return;
  }
}
test1176: {
  function f() {
    if (e) {
      i();
      return console.error(e);
    }
    t.effects.push(n[0]);
    l.createItemInstances([t], function (e, t) {
      if (e) {
        i();
        return console.error(e);
      }
      i(t.array[0]);
      return;
    });
    return;
  }
}
test1177: {
  function f() {
    if (e) {
      i();
      return console.error(e);
    }
    i(t.array[0]);
    return;
  }
}
test1178: {
  function f() {
    if (a.length > 0) {
      v.getDataMap("Effects", a, function (i, n) {
        if (i) {
          return e(i);
        }
        t.wrapEffectChoice.clearContent();
        a.forEach(function (e) {
          var i = n[e],
            a = t.wrapEffectChoice.appendChild(new l(y(i.descriptionId, ""), {
              isRadio: !0
            }));
          a.on("change", function (e) {
            e && t._getAndDisplayChosenLW(o[i.id]);
          });
        });
        return e();
      });
      return;
    }
    t.wrapEffectChoice.clearContent();
    return e();
  }
}
test1179: {
  function f() {
    if (i) {
      return e(i);
    }
    t.wrapEffectChoice.clearContent();
    a.forEach(function (e) {
      var i = n[e],
        a = t.wrapEffectChoice.appendChild(new l(y(i.descriptionId, ""), {
          isRadio: !0
        }));
      a.on("change", function (e) {
        e && t._getAndDisplayChosenLW(o[i.id]);
      });
    });
    return e();
  }
}
test1180: {
  function f() {
    if (r) {
      v.getDataMap("UpgradeTemplates", [r.templateId], function (e, n) {
        if (e) return t(e);
        var s = n[r.templateId];
        if (!s || o >= s.levels.length) return t();
        for (var l = s.levels[o].bonusValue, c = 0; c < a.effects.length; c++) {
          var d = a.effects[c];
          d.effectId === r.typeActionId ? d.value += l : d.effectId === f.ACTION_GRIND_LEVEL && d.value++;
        }
        g.createItemInstances([a], function (e, n) {
          if (e) {
            return t(e);
          }
          n.array.length > 0 && i._displayUpgradedLW(n.array[0]);
          return i._displayRecipeFromTemplateLevel(s.levels[o], t);
        });
      });
      return;
    }
    return t(new Error("No upgrade effects available for weapon " + e.item.id));
  }
}
test1181: {
  function f() {
    if (e) {
      return t(e);
    }
    n.array.length > 0 && i._displayUpgradedLW(n.array[0]);
    return i._displayRecipeFromTemplateLevel(s.levels[o], t);
  }
}
test1182: {
  function f() {
    if (a) {
      return g.getItems(a.ingredientIds, function (e, o) {
        if (e) {
          return t(n);
        }
        i._refreshIngredientSlots(o, a.quantities);
        return t();
      });
    }
    return t();
  }
}
test1183: {
  function f() {
    if (e) {
      return t(n);
    }
    i._refreshIngredientSlots(o, a.quantities);
    return t();
  }
}
test1184: {
  function f() {
    if (e) {
      return t(e);
    }
    i._refreshIngredientSlots(n, a);
    return t();
  }
}
test1185: {
  function f() {
    if (a) {
      u.getDataArray("Items", a.ingredientIds, function (e, n) {
        if (e) return t(e);
        for (var o = null, a = 0; a < n.length; a++) if (n[a].typeId === c.types.cosmeticLegendaryWeapon) {
          o = n[a];
          break;
        }
        if (o) {
          return l.getItems(o.recipeIds, function (e, n) {
            if (e) {
              return t(e);
            }
            i.upgradeWeaponList = n;
            i.statsChoice.show();
            i._selectElement(d.EARTH, t);
            return;
          });
        }
        return t();
      });
      return;
    }
    return t(new Error("Unable to find recipes for legendary weapon"));
  }
}
test1186: {
  function f() {
    if (o) {
      return l.getItems(o.recipeIds, function (e, n) {
        if (e) {
          return t(e);
        }
        i.upgradeWeaponList = n;
        i.statsChoice.show();
        i._selectElement(d.EARTH, t);
        return;
      });
    }
    return t();
  }
}
test1187: {
  function f() {
    if (e) {
      return t(e);
    }
    i.upgradeWeaponList = n;
    i.statsChoice.show();
    i._selectElement(d.EARTH, t);
    return;
  }
}
test1188: {
  function f() {
    if (e) {
      return i(e);
    }
    i(t.array[0]);
    return;
  }
}
test1189: {
  function f() {
    if (e) {
      return t(e);
    }
    i._refreshIngredientSlots(n, [_]);
    return t();
  }
}
test1190: {
  function f() {
    if (i[e]) {
      return i[e][t];
    }
    return null;
  }
}
test1191: {
  function f() {
    if (t[e]) {
      return t[e].question;
    }
    return null;
  }
}
test1192: {
  function f() {
    if (t[e]) {
      return t[e];
    }
    return [];
  }
}
test1193: {
  function f() {
    if (i) {
      return e(i);
    }
    t.headsMap = n;
    e();
    return;
  }
}
test1194: {
  function f() {
    if (t[e]) {
      return t[e].title;
    }
    return null;
  }
}
test1195: {
  function f() {
    if (p[e]) {
      return p[e].godClass;
    }
    return "";
  }
}
test1196: {
  function f() {
    if (p[e]) {
      return p[e].bgClass;
    }
    return "";
  }
}
test1197: {
  function f() {
    if (window.gui.databases.Breeds[e]) {
      return window.gui.databases.Breeds[e];
    }
    return {};
  }
}
test1198: {
  function f() {
    if (p[e]) {
      return p[e].roles;
    }
    return "";
  }
}
test1199: {
  function f() {
    if (t[e]) {
      return t[e].text;
    }
    return null;
  }
}
test1200: {
  function f() {
    if (i) {
      return e("Unable to get NPC Messages for Albuera :" + i);
    }
    t._dialogsData = n;
    e();
    return;
  }
}
test1201: {
  function f() {
    if (e === window.gui.scenarioManager.conditionTypeEnum.FIGHT_PLACEMENT_POSITION) {
      return 1;
    }
    return 0;
  }
}
test1202: {
  function f() {
    if (e === window.gui.scenarioManager.conditionTypeEnum.PLACEMENT_TAP) {
      return 1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP) {
      return -1;
    }
    return 0;
  }
}
test1203: {
  function f() {
    if (e === window.gui.scenarioManager.conditionTypeEnum.FIGHT_START) {
      return 1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP) {
      return -2;
    }
    return 0;
  }
}
test1204: {
  function f() {
    if (e === window.gui.scenarioManager.conditionTypeEnum.SPELL_SELECTED) {
      return 1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP) {
      return -4;
    }
    return 0;
  }
}
test1205: {
  function f() {
    if (e === window.gui.scenarioManager.conditionTypeEnum.SPELL_CASTED) {
      return 1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.SPELL_CANCELED) {
      return -1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP) {
      return -5;
    }
    return 0;
  }
}
test1206: {
  function f() {
    if (e === window.gui.scenarioManager.conditionTypeEnum.FINISH_TURN) {
      return 1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP) {
      return -6;
    }
    return 0;
  }
}
test1207: {
  function f() {
    if (e === window.gui.scenarioManager.conditionTypeEnum.FINISH_TURN) {
      return 1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP) {
      return -7;
    }
    return 0;
  }
}
test1208: {
  function f() {
    if (e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP) {
      return -8;
    }
    return 0;
  }
}
test1209: {
  function f() {
    if (e === window.gui.scenarioManager.conditionTypeEnum.MAP_LOADED) {
      return 1;
    }
    return 0;
  }
}
test1210: {
  function f() {
    if (e === window.gui.scenarioManager.conditionTypeEnum.SPELL_SELECTED) {
      return 1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP) {
      return -2;
    }
    return 0;
  }
}
test1211: {
  function f() {
    if (e === window.gui.scenarioManager.conditionTypeEnum.SPELL_CASTED) {
      return 1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.SPELL_CANCELED) {
      return -1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP) {
      return -3;
    }
    return 0;
  }
}
test1212: {
  function f() {
    if (n <= 0) {
      window.dofus.sendMessage("QuestObjectiveValidationMessage", {
        questId: t.ALBUERA_QUEST_ID,
        objectiveId: 13531
      });
      return 0;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "characteristics" === i.windowId) {
      return 1;
    }
    return 0;
  }
}
test1213: {
  function f() {
    if (n <= 0) {
      window.dofus.sendMessage("QuestObjectiveValidationMessage", {
        questId: t.ALBUERA_QUEST_ID,
        objectiveId: 13531
      });
      return 0;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "characteristics" === i.windowId) {
      return -1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.TAP_ANYWHERE) {
      return 1;
    }
    return 0;
  }
}
test1214: {
  function f() {
    if (n <= 0) {
      window.dofus.sendMessage("QuestObjectiveValidationMessage", {
        questId: t.ALBUERA_QUEST_ID,
        objectiveId: 13531
      });
      return 0;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "characUpdate" === i.windowId) {
      return 1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "characteristics" === i.windowId) {
      return -2;
    }
    return 0;
  }
}
test1215: {
  function f() {
    if (n <= 0 || e === window.gui.scenarioManager.conditionTypeEnum.CHARAC_UPDATE) {
      window.dofus.sendMessage("QuestObjectiveValidationMessage", {
        questId: t.ALBUERA_QUEST_ID,
        objectiveId: 13531
      });
      return 0;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "characteristics" === i.windowId) {
      return -3;
    }
    return 0;
  }
}
test1216: {
  function f() {
    if (e === window.gui.scenarioManager.conditionTypeEnum.SHOP_LOADED) {
      return 1;
    }
    return 0;
  }
}
test1217: {
  function f() {
    if (e === window.gui.scenarioManager.conditionTypeEnum.FIGHTER_TURN && 145490946 !== window.isoEngine.mapRenderer.mapId && 145489920 !== window.isoEngine.mapRenderer.mapId) {
      return 1;
    }
    return 0;
  }
}
test1218: {
  function f() {
    if (e && e instanceof g) {
      this.element = e;
      return;
    }
    return console.warn("UIElement - The element does not exist or is not a WuiDom");
  }
}
test1219: {
  function f() {
    if (i && t) {
      this.element = i;
      return;
    }
    return console.warn("InteractiveElement - Element not found");
  }
}
test1220: {
  function f() {
    if (this.element && this.element.rootElement) {
      return w(this.element.rootElement);
    }
    console.warn("UIElement.getPosition - The element does not exist or does not have rootElement");
    return {};
  }
}
test1221: {
  function f() {
    if (e) {
      return e;
    }
    console.warn("ActorElement.getActor - Actor not found");
    return null;
  }
}
test1222: {
  function f() {
    if (e) {
      return e;
    }
    console.warn("NPCElement.getActor - NPC not found");
    return null;
  }
}
test1223: {
  function f() {
    if (e) {
      return e;
    }
    console.warn("MonsterElement.getActor - Monster not found");
    return null;
  }
}
test1224: {
  function f() {
    if (this._changeLangMethod === R.RELOAD_PAGE) {
      g.setValue("lang", e);
      g.saveNow();
      window.location.reload();
      return;
    }
    d.initialize({
      language: e,
      chaseText: t.chaseText
    }, b, w, function (n) {
      if (n) {
        return console.error("LoginScreen getText init", n);
      }
      t.language = e;
      i.backToLogin();
      g.setValue("lang", e, 1);
      i._updateContent();
      return;
    });
    return;
  }
}
test1225: {
  function f() {
    if (n) {
      return console.error("LoginScreen getText init", n);
    }
    t.language = e;
    i.backToLogin();
    g.setValue("lang", e, 1);
    i._updateContent();
    return;
  }
}
test1226: {
  function f() {
    if (window.Config.disabledFeatures.guest) {
      this.showLoginForm();
      return console.error(new Error("showGuestForm: guest is disabled"));
    }
    this._loginForm.hide();
    this._guestForm.show();
    this._tokenForm.hide();
    return;
  }
}
test1227: {
  function f() {
    if (e) {
      g.delValue("guestAccount");
      g.delValue("lastIdentification");
      g.setValue("hasAccount", !0);
      g.saveNow();
      window.gui.openSimplePopup(u("ui.popup.accessDenied.unvalidatedEmail"), u("ui.common.congratulation"));
      this._guestForm.refresh();
      this.showLoginForm();
      return;
    }
    return this._updateContent();
  }
}
test1228: {
  function f() {
    if (e) {
      "NOTOKEN" === e.reason && o.displayAppropriateForm();
      return;
    }
    window.gui.initializeAfterLogin(function (e) {
      e && (console.error("initializeAfterLogin failed:", e), window.gui.openSimplePopup(u("ui.popup.connectionFailed.text")));
    });
    return;
  }
}
test1229: {
  function f() {
    if (a) {
      return n(a);
    }
    window.gui.splashScreen.show();
    if (e) {
      return m.startLoginProcessWithPassword(o._connectMethod, e, t, i, n);
    }
    return m.startLoginProcessWithoutPassword(o._connectMethod, {}, n);
  }
}
test1230: {
  function f() {
    if (t) {
      return e.openRegisterWindow(i.guestAccount);
    }
    i._play();
    return;
  }
}
test1231: {
  function f() {
    if (window.developmentMode || e && t) {
      this.emit("submit", {
        login: e,
        password: t,
        save: i
      });
      return;
    }
    return window.gui.openSimplePopup(l("ui.popup.accessDenied.wrongCredentials"));
  }
}
test1232: {
  function f() {
    if (e || !i) {
      return t._noNewsFallback();
    }
    if (i.length) {
      t._newsLoadedTime = Date.now();
      t._pageCount = i.length;
      i.forEach(function (e) {
        e.imageUrl = e.image_url, e.tapParam = e.url;
      });
      t._currentPage = 0;
      t._carousel.setPages(i);
      return;
    }
    t.loginScreen._forumBlock.retractableBlock.expand();
    return t._noNewsFallback();
  }
}
test1233: {
  function f() {
    if (this._boundedBlock || e._boundedBlock) {
      return console.error(new Error("RetractableBlock: a block is already bounded to another one"));
    }
    this._boundedBlock = e;
    e._boundedBlock = this;
    return;
  }
}
test1234: {
  function f() {
    if (null === i) {
      return "<bbcl=0 " + t + ">";
    }
    return "<" + t.replace(/^(bbcl=)([0-9]+)/, function (e, t, i) {
      return t + (parseInt(i, 10) + 1);
    }) + ">";
  }
}
test1235: {
  function f() {
    if (n.hasGuestAccount()) {
      return t();
    }
    o.createGuest(e, function (e, i) {
      if (e) {
        return t(e.error);
      }
      n._guestAccount = i;
      t();
      return;
    });
    return;
  }
}
test1236: {
  function f() {
    if (e) {
      return t(e.error);
    }
    n._guestAccount = i;
    t();
    return;
  }
}
test1237: {
  function f() {
    if (e === E.DOWNLOAD_PREPARE) {
      return this._updateState({
        currentScreen: E.DOWNLOAD_STOP
      });
    }
    if (e === E.DOWNLOAD_ACTIVE) {
      this._updateState({
        currentScreen: E.DOWNLOAD_STOP
      });
      return this._mapPreloader.stop();
    }
    this.close();
    return;
  }
}
test1238: {
  function f() {
    if (i) {
      return e(i);
    }
    if (t._hasStopped()) {
      return t._tryClose();
    }
    t._updateState({
      progress: .33
    });
    f(n, function (i, n) {
      if (i) {
        return e(i);
      }
      if (t._hasStopped()) {
        return t._tryClose();
      }
      t._updateState({
        progress: .67
      });
      g.upgradeAssets(n, function (i) {
        if (i) {
          return e(i);
        }
        if (t._hasStopped()) {
          return t._tryClose();
        }
        t._updateState({
          progress: 1,
          currentScreen: E.DOWNLOAD_ACTIVE
        });
        return;
      });
      return;
    });
    return;
  }
}
test1239: {
  function f() {
    if (i) {
      return e(i);
    }
    if (t._hasStopped()) {
      return t._tryClose();
    }
    t._updateState({
      progress: .67
    });
    g.upgradeAssets(n, function (i) {
      if (i) {
        return e(i);
      }
      if (t._hasStopped()) {
        return t._tryClose();
      }
      t._updateState({
        progress: 1,
        currentScreen: E.DOWNLOAD_ACTIVE
      });
      return;
    });
    return;
  }
}
test1240: {
  function f() {
    if (i) {
      return e(i);
    }
    if (t._hasStopped()) {
      return t._tryClose();
    }
    t._updateState({
      progress: 1,
      currentScreen: E.DOWNLOAD_ACTIVE
    });
    return;
  }
}
test1241: {
  function f() {
    if (a) {
      return c.deleteFiles(e.changedFiles, i, t);
    }
    return i();
  }
}
test1242: {
  function f() {
    if (i) {
      r.eraseDiskCache(function (e) {
        if (e) {
          return t(e);
        }
        r.initializeDiskCache(function () {
          console.info("Updating staticDataVersionKey to " + i), o(i, u, t);
        });
        return;
      });
      return;
    }
    return t();
  }
}
test1243: {
  function f() {
    if (e) {
      return t(e);
    }
    r.initializeDiskCache(function () {
      console.info("Updating staticDataVersionKey to " + i), o(i, u, t);
    });
    return;
  }
}
test1244: {
  function f() {
    if (e.staticDataVersion || e.assetsVersion) {
      a.series([n, i], function (e) {
        if (e) {
          return t(e);
        }
        return t();
      });
      return;
    }
    return t();
  }
}
test1245: {
  function f() {
    if (e) {
      return t(e);
    }
    return t();
  }
}
test1246: {
  function f() {
    if (t) {
      return o(t);
    }
    s[e] = i;
    return o();
  }
}
test1247: {
  function f() {
    if (t) {
      return e("Could not get the client assets version: " + t);
    }
    return e(null, s);
  }
}
test1248: {
  function f() {
    if (i) {
      return e(i);
    }
    t._updateTheProgressBar(.33);
    a(n, function (i, n) {
      if (i) {
        return e(i);
      }
      t._updateTheProgressBar(.67);
      s.upgradeAssets(n, function (i) {
        if (i) {
          return e(i);
        }
        t._updateTheProgressBar(1);
        return e();
      });
      return;
    });
    return;
  }
}
test1249: {
  function f() {
    if (i) {
      return e(i);
    }
    t._updateTheProgressBar(.67);
    s.upgradeAssets(n, function (i) {
      if (i) {
        return e(i);
      }
      t._updateTheProgressBar(1);
      return e();
    });
    return;
  }
}
test1250: {
  function f() {
    if (i) {
      return e(i);
    }
    t._updateTheProgressBar(1);
    return e();
  }
}
test1251: {
  function f() {
    if (e) {
      return e.connectedServerData;
    }
    return null;
  }
}
test1252: {
  function f() {
    if (o()) {
      l.goBackToSelectionOf("server");
      d.close(n.id);
      return;
    }
    return window.dofus.disconnect();
  }
}
test1253: {
  function f() {
    if ("recaptchaShow" === a.type) {
      return i.recaptcha.show();
    }
    window.removeEventListener("message", o);
    s.close("recaptcha");
    return t(a);
  }
}
test1254: {
  function f() {
    if (this._makePurchaseCb) {
      e ? this._makePurchaseCb(o("order", e)) : this._makePurchaseCb(null, t);
      this._makePurchaseCb = null;
      this._purchasingProduct = "";
      return;
    }
    this._logger.error(o("order", 'callback called but no callbacks. Purchasing product: "' + this._purchasingProduct + '"'));
    return;
  }
}
test1255: {
  function f() {
    if (a >= h) {
      return e(new Error("Max limit of refreshes reach."));
    }
    i();
    return;
  }
}
test1256: {
  function f() {
    if (this.isAvailable()) {
      i();
      return;
    }
    return e(new Error("not available."));
  }
}
test1257: {
  function f() {
    if (n()) {
      return Boolean(e.store);
    }
    return Boolean(e.wizPurchase);
  }
}
test1258: {
  function f() {
    if (a) {
      if (a.state !== i.store.APPROVED) {
        return t(o("finishPurchase", "Cannot finish, " + e + " not APPROVED"));
      }
      a.finish();
      return t();
    }
    return t(o("finishPurchase", "No product found for " + e));
  }
}
test1259: {
  function f() {
    if (n()) {
      this._purchasingProduct = e;
      this._makePurchaseCb = t;
      o.store.order(e).then(function () {}).error(function (e) {
        i._callbackStoreOrder(e);
      });
      return;
    }
    o.wizPurchase.makePurchase(e, function (e) {
      t(null, e);
    }, function (e) {
      t(new Error(i._getWizPurchaseError(e)));
    });
    return;
  }
}
test1260: {
  function f() {
    if (t.moving) {
      this.mapRenderer.removeMovementFeedback();
      this.endMovementCallback = null;
      t.cancelMovement(e);
      return;
    }
    this.endMovementCallback = e;
    return this.onArrived();
  }
}
test1261: {
  function f() {
    if (this.actorManager.userActor.moving || this.isMovementWaitingForConfirmation) {
      return this.cancelUserActorMovement(e);
    }
    return e();
  }
}
test1262: {
  function f() {
    if (n.isPathMatchingServerPath(e, r)) {
      0;
      return;
    }
    if (0 !== r.length) {
      this.endMovementCallback = null;
      return n.switchPath(r, function () {
        t.emit("arrived", i);
      });
    }
    n.noMovement();
    n.setDisposition(i);
    this.endMovementCallback = null;
    return this.onArrived(i);
  }
}
test1263: {
  function f() {
    if (this.mapRenderer.getChangeMapFlags(o.cell)[i]) {
      return o.cell;
    }
    return -1;
  }
}
test1264: {
  function f() {
    if (a.cellId === o) {
      return s();
    }
    this._movePlayerOnMap(o, !1, s);
    return;
  }
}
test1265: {
  function f() {
    if (this.map) {
      return k.getChangeMapFlags(this.map.cells, this.mapId, e);
    }
    console.error(new Error("map is null, isReady is " + this.isReady));
    return {};
  }
}
test1266: {
  function f() {
    if (i.left && t.isBehaviourEnabled(I.LEFT_SLIDE_CHANGEMAP)) {
      return "left";
    }
    if (i.right && t.isBehaviourEnabled(I.RIGHT_SLIDE_CHANGEMAP)) {
      return "right";
    }
    if (i.top && t.isBehaviourEnabled(I.TOP_SLIDE_CHANGEMAP)) {
      return "top";
    }
    if (i.bottom && t.isBehaviourEnabled(I.BOTTOM_SLIDE_CHANGEMAP)) {
      return "bottom";
    }
    return null;
  }
}
test1267: {
  function f() {
    if (t) {
      t.front && t.front.remove();
      delete r[e];
      return;
    }
    console.warn("IsoEngine removePing: There no ping picto with the id", e);
    return;
  }
}
test1268: {
  function f() {
    if (i) {
      i.play(t);
      return;
    }
    return console.warn("Tap feedback", e.id, "does not exist.");
  }
}
test1269: {
  function f() {
    if (this._isLoaded) {
      this._isLoaded = !0;
      this._cleanTween();
      this.animation.animManager.assignSymbol({
        base: e,
        direction: -1
      }, !0);
      this.animation.position = t;
      this.animation.x = n.x;
      this.animation.y = n.y;
      this.animation.show();
      this._tween = new r(this.animation, ["alpha"]).from({
        alpha: 0
      }).to({
        alpha: 1
      }, 30).start();
      return;
    }
    this._loadingCallback = function () {
      i.playAnimation(e, t);
    };
    return;
  }
}
test1270: {
  function f() {
    if (null !== v) {
      return [e, m(v.i - 1, v.j - 1)];
    }
    console.error(new Error("[pathFinder.getPath] Player is stuck in " + h + "/" + g));
    return [e];
  }
}
test1271: {
  function f() {
    if (d(e)) {
      return e;
    }
    return u(e);
  }
}
test1272: {
  function f() {
    if (0 === l) {
      return {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      };
    }
    return {
      left: r(i, l),
      right: a(i, l),
      top: o(i, l),
      bottom: s(i, l)
    };
  }
}
test1273: {
  function f() {
    if (t === -1) {
      return console.warn("Removing a non existing zone");
    }
    this.zones.splice(t, 1);
    return;
  }
}
test1274: {
  function f() {
    if (i) {
      return t(null, i.data);
    }
    return t(new Error("actorNotFound"));
  }
}
test1275: {
  function f() {
    if (i) {
      if (t || !i.moving && !i.animated) {
        i.remove();
        return;
      }
      i.pathTween.onceFinish(function () {
        n.getActor(e) && n.removeActor(e);
      });
      return;
    }
    return console.warn("[ACTOR MANAGER] removeActor: actor not found", e);
  }
}
test1276: {
  function f() {
    if (s) {
      s.setCellPosition(o);
      if (this.paused) {
        s.position = o;
        return t && t();
      }
      2 === n.length && (n = l.normalizePath(n));
      if (n.length > 1) {
        this.isoEngine.mapRenderer.isReady ? s.setPath(n, {
          slide: e.slide,
          cb: t
        }) : s.setDisposition(o);
        return;
      }
      return t && t();
    }
    this.addEmptyActor({
      contextualId: i,
      disposition: {
        cellId: o,
        direction: 1
      }
    });
    return t && t();
  }
}
test1277: {
  function f() {
    if (i) {
      if (this.customAnimMethods[e]) {
        return console.warn("ActorManager.addAnimBehaviourToActor: actor " + e + " already has a custom animation");
      }
      if (this.followers.indexOf(i) !== -1) {
        return console.error(new Error("ActorManager.addAnimBehaviourToActor: cannot add an anim behaviour to a follower"));
      }
      if ("function" != typeof t) {
        return console.error(new Error("ActorManager.addAnimBehaviourToActor: animationMethod is not a function"));
      }
      this.customAnimMethods[e] = t;
      return;
    }
    return console.error(new Error("ActorManager.addAnimBehaviourToActor: actor " + e + " unknown"));
  }
}
test1278: {
  function f() {
    if (e.nicknameLabel) {
      e.moving || "full" === e.nicknameLabel.getType() || (e.updateNicknameLabel(f.isRoleplayMode && this._fullNicknameLabelCount < s.maxTitlesOrnaments), "full" === e.nicknameLabel.getType() && this._fullNicknameLabelCount++);
      return;
    }
    console.warn("Tried to refresh non existing nickname label");
    return;
  }
}
test1279: {
  function f() {
    if (o) {
      return o.playCustomAnimation(t, i);
    }
    return i(new Error("NPC not found with ID: " + e));
  }
}
test1280: {
  function f() {
    if (t.isDead) {
      t.animated = !1;
      t.emoteAnimated = !1;
      t.fighterIndicator && t.fighterIndicator.remove();
      t.removeTeamCircle();
      t.actorManager.removeActor(t.actorId);
      t.actorManager.userActor.isDead || !window.gui.fightManager.isFightersTurn(t.actorManager.userActor.actorId) || window.gui.fightManager.getIsTurnEndRequestPending() || window.isoEngine.displayUserMovementZone();
      return;
    }
    t.staticAnim();
    return;
  }
}
test1281: {
  function f() {
    if (i) {
      i.animManager.addAnimation(o, function () {
        i.animManager.assignSymbol(o, e.loop, function () {
          i.customAnimTimeout && clearTimeout(i.customAnimTimeout), i.customAnimTimeout = setTimeout(function () {
            if (i) {
              i.actorState = r.IDLE;
              i.staticAnim();
              i.animated = !1;
              return t();
            }
            return t(new Error("Actor has been removed while customAnimTimeout is still active"));
          }, e.duration);
        });
      });
      return;
    }
    return t(new Error("Actor has been removed while customAnimTimeout is still active"));
  }
}
test1282: {
  function f() {
    if (i) {
      i.actorState = r.IDLE;
      i.staticAnim();
      i.animated = !1;
      return t();
    }
    return t(new Error("Actor has been removed while customAnimTimeout is still active"));
  }
}
test1283: {
  function f() {
    if (e) {
      return Boolean(l.getLookOfRider(e)) && this.isPlayer() && !d.showMountsInFight && !c.isRoleplayMode;
    }
    console.error(new Error("The look is missing."));
    return !1;
  }
}
test1284: {
  function f() {
    if (this.actorManager.isCreatureModeOn) {
      e.look || console.error(new Error("Assigning falsy look to realLook"));
      this.realLook = e.look;
      return;
    }
    e.animationManager && 1 === e.look.bonesId && e.look.skins[0] && e.animationManager.addAnimationModifier("AnimStatique", "AnimStatique" + e.look.skins[0]);
    e.animationManager && e.animationManager !== this.animationManager && (this.animManager.clear(), this.setAnimManager(e.animationManager));
    this.staticAnim();
    this._isCandidateToHideTheMountInFight(e.look) ? this.look = l.getLookWithoutMount(e.look) : this.look = e.look;
    this.look || console.error(new Error("Assigning falsy look to realLook"));
    this.realLook = this.look;
    return;
  }
}
test1285: {
  function f() {
    if (this.realLook) {
      this.actorManager.setActorLook(this.actorId, this.realLook, {
        useRealLook: !0
      }, null);
      return;
    }
    console.warn("actorId " + this.actorId + " not real look yet...");
    return;
  }
}
test1286: {
  function f() {
    if (e) {
      return e.data;
    }
    console.warn("Fighter " + this.actorId + " could not be found.");
    return new r();
  }
}
test1287: {
  function f() {
    if (e) {
      return this.getFighterData().teamId;
    }
    return -1;
  }
}
test1288: {
  function f() {
    if (this.isInvisibleInFight()) {
      return console.warn("We can not change the position of an invisible actor in a fight");
    }
    this.actorManager.removeActorOccupation(this);
    this.cellId = e;
    this.actorManager.addActorOccupation(this);
    this.carriedActor && this.carriedActor.setCellPosition(e);
    return;
  }
}
test1289: {
  function f() {
    if (i && this.moving) {
      return this.cancelMovement(n);
    }
    this.moving && this.cancelMovement();
    n();
    return;
  }
}
test1290: {
  function f() {
    if (i) {
      return e(i);
    }
    t._calculateDimension();
    if (!t._ornamentAssetId || t._alignment && 0 !== t._alignment.alignmentGrade) {
      t._resizeTextCanvas(t._textWidth, t._textHeight, 0, 0);
      t._displayText();
      if (t._alignment && 0 !== t._alignment.alignmentGrade) {
        return t._displayWings(e);
      }
      return e();
    }
    1 === t._textCanvas.width && t._displayTextAndOrnament();
    return e();
  }
}
test1291: {
  function f() {
    if (t._ornamentId) {
      d.getData("Ornaments", t._ornamentId, function (i, n) {
        if (i) {
          return e(i);
        }
        if (n) {
          t._ornamentAssetId = n.assetId;
          e();
          return;
        }
        return e("staticContent.getData Ornaments - ornamentData is " + n);
      });
      return;
    }
    return e();
  }
}
test1292: {
  function f() {
    if (i) {
      return e(i);
    }
    if (n) {
      t._ornamentAssetId = n.assetId;
      e();
      return;
    }
    return e("staticContent.getData Ornaments - ornamentData is " + n);
  }
}
test1293: {
  function f() {
    if (t._ornamentAssetId) {
      c.loadModel("ornaments", "ornament_" + t._ornamentAssetId, function (i, n) {
        t._jsonObj = i, t._image = n, e();
      });
      return;
    }
    return e();
  }
}
test1294: {
  function f() {
    if (t._titleId) {
      d.getData("Titles", t._titleId, function (i, n) {
        if (i) {
          return e(i);
        }
        if (n) {
          t._title = t._gender ? n.nameFemaleId : n.nameMaleId;
          e();
          return;
        }
        return e("staticContent.getData Titles - titleData is " + n);
      });
      return;
    }
    return e();
  }
}
test1295: {
  function f() {
    if (i) {
      return e(i);
    }
    if (n) {
      t._title = t._gender ? n.nameFemaleId : n.nameMaleId;
      e();
      return;
    }
    return e("staticContent.getData Titles - titleData is " + n);
  }
}
test1296: {
  function f() {
    if (t._guild && t._guild.guildEmblem) {
      t._guildEmblem.setValue(t._guild.guildEmblem, !0, e);
      return;
    }
    return e();
  }
}
test1297: {
  function f() {
    if (t._alliance && t._alliance.allianceEmblem) {
      t._allianceEmblem.setValue(t._alliance.allianceEmblem, !0, e);
      return;
    }
    return e();
  }
}
test1298: {
  function f() {
    if (t._bottomWingsInfo) {
      h.loadImage(t._bottomWingsInfo.imagePath, function (i) {
        t._nicknameLabelCanvas.displayWingPart(i, t._bottomWingsInfo, !1), e();
      });
      return;
    }
    return e();
  }
}
test1299: {
  function f() {
    if (e === t) {
      return "ally";
    }
    if (e === i) {
      return "defender";
    }
    return "attacker";
  }
}
test1300: {
  function f() {
    if (this.icons.hasOwnProperty(t)) {
      return this.icons[t][e];
    }
    return null;
  }
}
test1301: {
  function f() {
    if (r._cleared) {
      e.release();
      return;
    }
    r.w = e.element.width;
    r.h = e.element.height;
    r.texture = e;
    a._positionIcons();
    r.forceRefresh();
    return;
  }
}
test1302: {
  function f() {
    if (n) {
      return n;
    }
    console.error("getCreatureBones not found for:", t);
    return 666;
  }
}
test1303: {
  function f() {
    if (this.data.isBoss) {
      return 1748;
    }
    if (u.indexOf(this.data.creatureGenericId) >= 0) {
      return 2247;
    }
    if (this.data.isSummon) {
      return 1765;
    }
    return 1747;
  }
}
test1304: {
  function f() {
    if (this.realLook) {
      return this.setLook(this.realLook, {
        useRealLook: !0
      }, i);
    }
    return i();
  }
}
test1305: {
  function f() {
    if (f) {
      window.gui.transmitFightSequenceMessage({
        _messageType: "confirmTurnEnd"
      });
      window.dofus.sendMessage("GameFightTurnReadyMessage", {
        isReady: !0
      });
      g = !1;
      return;
    }
    g = !0;
    return;
  }
}
test1306: {
  function f() {
    if (_ > 0) {
      _ -= 1;
      return;
    }
    v._synchronizeBuff = e;
    window.gui.transmitFightSequenceMessage(v);
    _ = 0;
    v = null;
    return;
  }
}
test1307: {
  function f() {
    if (void 0 === n && void 0 === o) {
      console.error(new Error("[process messageSequence] Unsupported game action: " + e._messageType));
      return t();
    }
    if (o) {
      return o(e, i, t);
    }
    n && n(e, i);
    return t();
  }
}
test1308: {
  function f() {
    if (t === U.ORIENTED) {
      return q.NONE;
    }
    if (e) {
      if (i) {
        return q.TOWARD_POSITION2;
      }
      return q.TOWARD_POSITION1;
    }
    return q.NONE;
  }
}
test1309: {
  function f() {
    if (t) {
      t.death = !0;
      g && g._deadIds.push(e.targetId);
      return;
    }
    return console.error("Actor " + e.targetId + " not found.");
  }
}
test1310: {
  function f() {
    if (i) {
      console.error("Unable to execute lifePointVariationBatch " + i);
      return;
    }
    t.push(function (t) {
      for (var i = 0; i < e._lifeVariationMsgs.length; i++) {
        var n = e._lifeVariationMsgs[i];
        if (!(n._isDead || n.delta > 0)) {
          var o = c.getActor(n.targetId);
          if (o) {
            var a = {
              base: n._animSymbol || "AnimHit"
            };
            o.oneShootAnim(a, {
              backToStatic: !0
            });
          } else console.error("Target " + n.targetId + " is missing to play hit animation");
        }
      }
      return t();
    });
    return;
  }
}
test1311: {
  function f() {
    if (!e._spell && i && (p.showApMpUsed || e.actionId !== m.ACTION_CHARACTER_MOVEMENT_POINTS_USE && e.actionId !== m.ACTION_CHARACTER_ACTION_POINTS_USE)) {
      t.push(function (t) {
        a(e, i);
        window.gui.transmitFightSequenceMessage(e);
        return t();
      });
      return;
    }
    return t.push(function (t) {
      window.gui.transmitFightSequenceMessage(e);
      return t();
    });
  }
}
test1312: {
  function f() {
    if (e.shieldLoss) {
      s(e, t, M);
      return i();
    }
    if (e._spell && e._spell.critical === f.CRITICAL_HIT) {
      s(e, t, y);
      return i();
    }
    s(e, t, e.criticalHit ? y : v);
    return i();
  }
}
test1313: {
  function f() {
    if (e.shieldLoss) {
      e._labelColor = M;
      return t();
    }
    if (e._spell && e._spell.critical === f.CRITICAL_HIT) {
      e._labelColor = y;
      return t();
    }
    e._labelColor = e.criticalHit ? y : v;
    return t();
  }
}
test1314: {
  function f() {
    if (s) {
      h.getDataMap("SpellEffects", [e.effectId], function (n, a) {
        var s = a && a[e.effectId];
        if (n) console.error("Unable to retrieve the effects visibility for " + e.effectId + ", " + n);else if (s && !s.visibleOnTerrain) return t();
        g[e.markId] = e;
        for (var c = e._glyph, u = 0, h = e.cells.length; u < h; u++) {
          var p = e.cells[u],
            _ = p.cellId,
            v = l.parseIndexedColor(p.cellColor).color,
            y = "rgba(" + v.r + "," + v.g + "," + v.b + ", 0.6)",
            w = "rgba(" + v.r + "," + v.g + "," + v.b + ", 0.3)",
            b = o(p),
            M = {
              markId: e.markId,
              markCell: _,
              markSize: p.zoneSize,
              sourceId: e.markAuthorId,
              spellId: e.markSpellId,
              type: e.markType
            },
            T = new d(b, {
              color: w,
              outline: y,
              data: M
            });
          if (c) {
            var C = r.cellCoord[_];
            c.x = C.x, c.y = C.y + f.y, c.position = _ + f.position, c.animManager.assignSymbol(m, !1), T.gfx = c;
          }
          i.addZone(T, "mark:" + e.markId);
        }
        return t();
      });
      return;
    }
    return a.once("mapLoaded", function () {
      n(e, t);
    });
  }
}
test1315: {
  function f() {
    if (e._glyphGfxId && !e._glyph) {
      e._glyph = new c({
        scene: window.isoEngine.mapScene
      });
      u.loadAnimationManager(e._glyph, "bone", e._glyphGfxId + "/FX", function () {
        n(e, t);
      });
      return;
    }
    n(e, t);
    return;
  }
}
test1316: {
  function f() {
    if (i) {
      e._spellId = i.spellId;
      window.gui.transmitFightSequenceMessage(e);
      return t();
    }
    console.warn("No data found for zone: mark:" + e.markId);
    return t();
  }
}
test1317: {
  function f() {
    if (n) {
      t.push(function (t) {
        window.gui.transmitFightSequenceMessage(e), n.oneShootAnim({
          base: "AnimVanish"
        }, {
          backToStatic: !1
        }, function () {
          i.removeActor(e.targetId);
          return t();
        });
      });
      return;
    }
    return console.warn("No found actor with id " + e.targetId);
  }
}
test1318: {
  function f() {
    if (e) {
      T.queueUseInteractive(v.elementId, w.skillInstanceUid);
      return;
    }
    T.actionQueue.clear();
    return T.clearHighlights(null, L.QUEUE);
  }
}
test1319: {
  function f() {
    if (C) {
      this._addHighlight(p, L.QUEUE);
      return !0;
    }
    !_ && 1 === v.enabledSkills.length && w && (this.instantUseInteractive(v.elementId, w.skillInstanceUid), this._addHighlight(p));
    return !0;
  }
}
test1320: {
  function f() {
    if (u.areCellsNeighbours(a.cellId, o, {
      allowDiagonal: !0,
      useHeightCell: !0
    })) {
      return s();
    }
    this._movePlayerOnMap(o, !0, s);
    return;
  }
}
test1321: {
  function f() {
    if (i) {
      return console.error("interactiveUseStart: user actor is not ready");
    }
    return console.warn("interactiveUseStart: no actor with id " + e.entityId);
  }
}
test1322: {
  function f() {
    if (i) {
      return console.error("interactiveUseStart: no interactive with id " + e.elemId);
    }
    return console.warn("interactiveUseStart: no interactive with id " + e.elemId);
  }
}
test1323: {
  function f() {
    if (i) {
      this._addArrowOnActor(i, !1, t);
      return;
    }
    return console.warn("NPC not found with ID: " + e);
  }
}
test1324: {
  function f() {
    if (i) {
      this._addArrowOnActor(i, !0, t);
      return;
    }
    return console.warn("Monster not found with ID: " + e);
  }
}
test1325: {
  function f() {
    if (i) {
      this._addHighlight(i);
      this.clearHighlights(t || x);
      return;
    }
    return console.warn("Actor with id " + e + " to highlight not found.");
  }
}
test1326: {
  function f() {
    if (o) {
      o.path || (o.path = s(i, t, e, 0, n - 1, []));
      return o.path;
    }
    return null;
  }
}
test1327: {
  function f() {
    if (r = r || l.getFirstMapFlag(i.cell)) {
      return this.gotoNeighbourMap(r, i.cell, a, s);
    }
    this._movePlayerOnMap(f);
    return;
  }
}
test1328: {
  function f() {
    if (this._spellRangeLayer) {
      this.displaySpellRange();
      return;
    }
    this.displayUserMovementZone();
    return;
  }
}
test1329: {
  function f() {
    if (e) {
      h.unshift(l);
      window.gui.emit("checkServerLag", "fightAction", "start");
      u.emit("fightTap", r);
      window.dofus.sendMessage("GameMapMovementRequestMessage", {
        keyMovements: d(h),
        mapId: s
      });
      u._resetWalkLayer();
      a();
      return;
    }
    u._resetWalkLayer();
    return;
  }
}
test1330: {
  function f() {
    if (n) {
      if (x === n) {
        return n;
      }
      x = n;
      this.clearHighlights();
      this._addHighlight(n);
      return n;
    }
    x = null;
    this.clearHighlights();
    return;
  }
}
test1331: {
  function f() {
    if (i && n) {
      return i.data.stats.invisibilityState !== y && i.data.stats.invisibilityState !== w && i.data.teamId !== n.data.teamId && i.data.alive !== !1 && !i.data.isCarryied && !i.hasState(g.STATE_CANNOT_TACKLE) && !i.hasState(g.STATE_CHARACTER_ROOTED) && i.canTackle;
    }
    console.warn("canBeTackler: Corresponding fighters could not be found.");
    return !1;
  }
}
test1332: {
  function f() {
    if (n) {
      return n.data.stats.invisibilityState !== y && n.data.stats.invisibilityState !== w && (!n.data.isCarryied || t !== i) && !n.hasState(g.STATE_CANNOT_BE_TACKLED) && !n.hasState(g.STATE_CHARACTER_ROOTED);
    }
    console.error("Corresponding fighter could not be found.");
    return !1;
  }
}
test1333: {
  function f() {
    if (e.damagingMarks.length < t.damagingMarks.length) {
      return -1;
    }
    if (e.damagingMarks.length === t.damagingMarks.length) {
      if (e.availableMp > t.availableMp) {
        return -1;
      }
      if (e.availableMp === t.availableMp) {
        if (e.availableAp > t.availableAp) {
          return -1;
        }
        if (e.availableAp === t.availableAp) {
          return 0;
        }
        return 1;
      }
      return 1;
    }
    return 1;
  }
}
test1334: {
  function f() {
    if (null === o) {
      window.foreground.deselectSpell();
      window.gui.shortcutBar.deselectCurrentSlot();
      this.clearSpellDisplay();
      return;
    }
    this.displayEffectZone(o);
    window.gui.emit("checkServerLag", "fightAction", "start");
    window.gui.fightManager.castSpell(m.spellId, o, n.characterId);
    m = null;
    this.clearSpellDisplay();
    window.gui.shortcutBar.deselectCurrentSlot();
    window.gui.damagePreview.confirm();
    return;
  }
}
test1335: {
  function f() {
    if (e) {
      o.emit("checkServerLag", "fightAction", "start");
      o.fightManager.castSpell(m.spellId, r, n.characterId);
      m = null;
      c.clearSpellDisplay();
      o.shortcutBar.deselectCurrentSlot();
      a.confirm();
      return;
    }
    c.clearSpellDisplay();
    o.shortcutBar.deselectCurrentSlot();
    return;
  }
}
test1336: {
  function f() {
    if (n) {
      t.emit("checkServerLag", "fightAction", "start");
      t.fightManager.castSpell(m.spellId, e, t.playerData.characters.controlledCharacterId);
      m = null;
      a.clearSpellDisplay();
      t.shortcutBar.deselectCurrentSlot();
      i.confirm();
      return;
    }
    a.clearSpellDisplay();
    t.shortcutBar.deselectCurrentSlot();
    return;
  }
}
test1337: {
  function f() {
    if (t.teamId === d.TEAM_CHALLENGER) {
      return v;
    }
    return w;
  }
}
test1338: {
  function f() {
    if (t.teamId === d.TEAM_CHALLENGER) {
      return v;
    }
    return y;
  }
}
test1339: {
  function f() {
    if (_[o.id]) {
      if (s.icons[t]) {
        return i.release();
      }
      s.icons[t] = new p({
        layer: r.MAP_LAYER_ICONS,
        w: i.element.width,
        h: i.element.height,
        scene: a
      }, i);
      s.options[t] || s.icons[t].hide();
      o._updateIconsPosition(e);
      return;
    }
    return i.release();
  }
}
test1340: {
  function f() {
    if (s) {
      if (g.indexOf(t) === -1) {
        return console.error(new Error("Unknown fightOption:" + t));
      }
      if (s.icons[t]) {
        console.warn("Icon " + t + " already exists for team " + e + " in fight " + this.id);
        s.icons[t].show();
        return;
      }
      h.loadTexture(i, n, a.renderer);
      return;
    }
    return console.error(new Error("No team with id " + e + " in fight " + this.id));
  }
}
test1341: {
  function f() {
    if (n) {
      g.indexOf(t) !== -1 && this.setFightOption(e, t, i);
      return;
    }
    return console.error(new Error("No team with id " + e + " in fight " + this.id));
  }
}
test1342: {
  function f() {
    if (t) {
      t.remove();
      return;
    }
    return console.warn("No challenge with id " + e);
  }
}
test1343: {
  function f() {
    if (o) {
      o.challengeOptionChange(t, i, n);
      return;
    }
    return console.warn("No challenge with id " + e);
  }
}
test1344: {
  function f() {
    if (s) {
      s.updateData(i);
      return;
    }
    return console.warn("No fight id " + a);
  }
}
test1345: {
  function f() {
    if (a) {
      return i(a);
    }
    if (s[o]) {
      _[o] = s[o];
      return n.playEmoteFromOption(e, t, i);
    }
    return i();
  }
}
test1346: {
  function f() {
    if (o) {
      i.lastEmoteAnim = e._emote.persistancy ? o : null;
      this.actorManager.addToFifo(i.actorId, function (e) {
        e(), i.loadAndPlayAnimation({
          base: "AnimEmote",
          type: o
        }, {
          loop: !1,
          isEmoteAnimated: !0
        }, t);
      });
      return;
    }
    return t();
  }
}
test1347: {
  function f() {
    if (this.mapRenderer.isReady) {
      this._updateMapInfoData(e, {
        noMovementWaitReset: !0
      });
      window.foreground.show();
      window.foreground.unlock("loadMap");
      this.actorManager.updateMapInfoData(e, function () {
        t.emit("actorLoaded");
      });
      this.emit("mapLoaded", {
        isReload: !0
      });
      this.interactiveBlink && this.highlightInteractivesWithDifferentType();
      return;
    }
    this.mapRenderer.once("ready", function () {
      t.reloadMap(e);
    });
    return;
  }
}
test1348: {
  function f() {
    if (i) {
      d.loadJson(r, function (t) {
        u = t;
        return e();
      });
      return;
    }
    return e();
  }
}
test1349: {
  function f() {
    if (t) {
      return window.dofus.disconnect("LOADING_MAP_ERROR " + t);
    }
    if (h === s.EMPTY_JSON) {
      return window.dofus.disconnect("ASSET_MISSING");
    }
    h.id === C && (null === T ? (T = {
      msg: e,
      mapData: h
    }, n._loadMapAssets()) : T = {
      msg: e,
      mapData: h
    });
    return;
  }
}
test1350: {
  function f() {
    if (null !== T && C !== t.id) {
      i._loadMapAssets();
      return;
    }
    window.foreground.show();
    window.foreground.unlock("loadMap");
    l.fillPathGrid(t);
    i._updateMapInfoData(e);
    i.actorManager.updateMapInfoData(e, function () {
      i.emit("actorLoaded");
    });
    i.actorManager.unpause();
    i.actorManager.userActor.moving = !1;
    v.unlockMessages();
    i.emit("mapLoaded");
    i._runLoadingFadeOutTransition();
    i.interactiveBlink && i.highlightInteractivesWithDifferentType();
    C = null;
    T = null;
    i._isMapLoading = !1;
    return;
  }
}
