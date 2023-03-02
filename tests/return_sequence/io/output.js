test0: {
  function f() {
    e[n].call(o.exports, o, o.exports, t);
    o.loaded = !0;
    return o.exports;
  }
}
test1: {
  function f() {
    t.m = e;
    t.c = i;
    t.p = "";
    return t(0);
  }
}
test2: {
  function f() {
    "string" != typeof e && (e = String(e));
    return e;
  }
}
test3: {
  function f() {
    y.iterable && (t[Symbol.iterator] = function () {
      return t;
    });
    return t;
  }
}
test4: {
  function f() {
    t.readAsArrayBuffer(e);
    return i;
  }
}
test5: {
  function f() {
    t.readAsText(e);
    return i;
  }
}
test6: {
  function f() {
    t.set(new Uint8Array(e));
    return t.buffer;
  }
}
test7: {
  function f() {
    this.bodyUsed = !1;
    this._initBody = function (e) {
      this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : y.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : y.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : y.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : y.arrayBuffer && y.blob && t(e) ? (this._bodyArrayBuffer = u(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : y.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || b(e)) ? this._bodyArrayBuffer = u(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : y.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
    };
    y.blob && (this.blob = function () {
      var e = s(this);
      if (e) return e;
      if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
      if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      if (this._bodyFormData) throw new Error("could not read FormData body as blob");
      return Promise.resolve(new Blob([this._bodyText]));
    }, this.arrayBuffer = function () {
      if (this._bodyArrayBuffer) {
        return s(this) || Promise.resolve(this._bodyArrayBuffer);
      }
      return this.blob().then(l);
    });
    this.text = function () {
      var e = s(this);
      if (e) return e;
      if (this._bodyBlob) return c(this._bodyBlob);
      if (this._bodyArrayBuffer) return Promise.resolve(d(this._bodyArrayBuffer));
      if (this._bodyFormData) throw new Error("could not read FormData body as text");
      return Promise.resolve(this._bodyText);
    };
    y.formData && (this.formData = function () {
      return this.text().then(f);
    });
    this.json = function () {
      return this.text().then(JSON.parse);
    };
    return this;
  }
}
test8: {
  function f() {
    e.trim().split("&").forEach(function (e) {
      if (e) {
        var i = e.split("="),
          n = i.shift().replace(/\+/g, " "),
          o = i.join("=").replace(/\+/g, " ");
        t.append(decodeURIComponent(n), decodeURIComponent(o));
      }
    });
    return t;
  }
}
test9: {
  function f() {
    i.split(/\r?\n/).forEach(function (e) {
      var i = e.split(":"),
        n = i.shift().trim();
      if (n) {
        var o = i.join(":").trim();
        t.append(n, o);
      }
    });
    return t;
  }
}
test10: {
  function f() {
    new Blob();
    return !0;
  }
}
test11: {
  function f() {
    e = i(e);
    if (this.has(e)) {
      return this.map[e];
    }
    return null;
  }
}
test12: {
  function f() {
    this.forEach(function (t, i) {
      e.push(i);
    });
    return o(e);
  }
}
test13: {
  function f() {
    this.forEach(function (t) {
      e.push(t);
    });
    return o(e);
  }
}
test14: {
  function f() {
    this.forEach(function (t, i) {
      e.push([i, t]);
    });
    return o(e);
  }
}
test15: {
  function f() {
    e.type = "error";
    return e;
  }
}
test16: {
  function f() {
    void 0 === t && (t = 0);
    return this.slice(t, e.length + t) === e;
  }
}
test17: {
  function f() {
    this.getBrowser = function () {
      var e = {
        name: a,
        version: a
      };
      S.rgx.call(e, i, n.browser);
      e.major = A.major(e.version);
      return e;
    };
    this.getCPU = function () {
      var e = {
        architecture: a
      };
      S.rgx.call(e, i, n.cpu);
      return e;
    };
    this.getDevice = function () {
      var e = {
        vendor: a,
        model: a,
        type: a
      };
      S.rgx.call(e, i, n.device);
      return e;
    };
    this.getEngine = function () {
      var e = {
        name: a,
        version: a
      };
      S.rgx.call(e, i, n.engine);
      return e;
    };
    this.getOS = function () {
      var e = {
        name: a,
        version: a
      };
      S.rgx.call(e, i, n.os);
      return e;
    };
    this.getResult = function () {
      return {
        ua: this.getUA(),
        browser: this.getBrowser(),
        engine: this.getEngine(),
        os: this.getOS(),
        device: this.getDevice(),
        cpu: this.getCPU()
      };
    };
    this.getUA = function () {
      return i;
    };
    this.setUA = function (e) {
      i = e;
      return this;
    };
    return this;
  }
}
test18: {
  function f() {
    S.rgx.call(e, i, n.browser);
    e.major = A.major(e.version);
    return e;
  }
}
test19: {
  function f() {
    S.rgx.call(e, i, n.cpu);
    return e;
  }
}
test20: {
  function f() {
    S.rgx.call(e, i, n.device);
    return e;
  }
}
test21: {
  function f() {
    S.rgx.call(e, i, n.engine);
    return e;
  }
}
test22: {
  function f() {
    S.rgx.call(e, i, n.os);
    return e;
  }
}
test23: {
  function f() {
    i = e;
    return this;
  }
}
test24: {
  function f() {
    i && n && (e = +e, t = +t);
    if (i && !n) {
      return -1;
    }
    if (n && !i) {
      return 1;
    }
    if (e < t) {
      return -1;
    }
    if (e > t) {
      return 1;
    }
    return 0;
  }
}
test25: {
  function f() {
    K("comp", e);
    e = R(e, t);
    K("caret", e);
    e = L(e, t);
    K("tildes", e);
    e = P(e, t);
    K("xrange", e);
    e = k(e, t);
    K("stars", e);
    return e;
  }
}
test26: {
  function f() {
    x(i) ? s = "" : x(n) ? s = ">=" + i + ".0.0 <" + (+i + 1) + ".0.0" : x(o) ? s = ">=" + i + "." + n + ".0 <" + i + "." + (+n + 1) + ".0" : a ? (K("replaceTilde pr", a), "-" !== a.charAt(0) && (a = "-" + a), s = ">=" + i + "." + n + "." + o + a + " <" + i + "." + (+n + 1) + ".0") : s = ">=" + i + "." + n + "." + o + " <" + i + "." + (+n + 1) + ".0";
    K("tilde return", s);
    return s;
  }
}
test27: {
  function f() {
    x(i) ? s = "" : x(n) ? s = ">=" + i + ".0.0 <" + (+i + 1) + ".0.0" : x(o) ? s = "0" === i ? ">=" + i + "." + n + ".0 <" + i + "." + (+n + 1) + ".0" : ">=" + i + "." + n + ".0 <" + (+i + 1) + ".0.0" : a ? (K("replaceCaret pr", a), "-" !== a.charAt(0) && (a = "-" + a), s = "0" === i ? "0" === n ? ">=" + i + "." + n + "." + o + a + " <" + i + "." + n + "." + (+o + 1) : ">=" + i + "." + n + "." + o + a + " <" + i + "." + (+n + 1) + ".0" : ">=" + i + "." + n + "." + o + a + " <" + (+i + 1) + ".0.0") : (K("no pr"), s = "0" === i ? "0" === n ? ">=" + i + "." + n + "." + o + " <" + i + "." + n + "." + (+o + 1) : ">=" + i + "." + n + "." + o + " <" + i + "." + (+n + 1) + ".0" : ">=" + i + "." + n + "." + o + " <" + (+i + 1) + ".0.0");
    K("caret return", s);
    return s;
  }
}
test28: {
  function f() {
    K("replaceXRanges", e, t);
    return e.split(/\s+/).map(function (e) {
      return B(e, t);
    }).join(" ");
  }
}
test29: {
  function f() {
    "=" === i && d && (i = "");
    r ? t = ">" === i || "<" === i ? "<0.0.0" : "*" : i && d ? (l && (o = 0), c && (a = 0), ">" === i ? (i = ">=", l ? (n = +n + 1, o = 0, a = 0) : c && (o = +o + 1, a = 0)) : "<=" === i && (i = "<", l ? n = +n + 1 : o = +o + 1), t = i + n + "." + o + "." + a) : l ? t = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : c && (t = ">=" + n + "." + o + ".0 <" + n + "." + (+o + 1) + ".0");
    K("xRange return", t);
    return t;
  }
}
test30: {
  function f() {
    K("replaceStars", e, t);
    return e.trim().replace(ee[Ge], "");
  }
}
test31: {
  function f() {
    t = x(i) ? "" : x(n) ? ">=" + i + ".0.0" : x(o) ? ">=" + i + "." + n + ".0" : ">=" + t;
    r = x(l) ? "" : x(c) ? "<" + (+l + 1) + ".0.0" : x(d) ? "<" + l + "." + (+c + 1) + ".0" : u ? "<=" + l + "." + c + "." + d + "-" + u : "<=" + r;
    return (t + " " + r).trim();
  }
}
test32: {
  function f() {
    e.forEach(function (e) {
      a.test(e) && (n && o.compare(e) !== -1 || (n = e, o = new s(n, i)));
    });
    return n;
  }
}
test33: {
  function f() {
    e.forEach(function (e) {
      a.test(e) && (n && 1 !== o.compare(e) || (n = e, o = new s(n, i)));
    });
    return n;
  }
}
test34: {
  function f() {
    e = new S(e, i);
    t = new S(t, i);
    return e.intersects(t);
  }
}
test35: {
  function f() {
    this.version = this.major + "." + this.minor + "." + this.patch;
    this.prerelease.length && (this.version += "-" + this.prerelease.join("."));
    return this.version;
  }
}
test36: {
  function f() {
    K("SemVer.compare", this.version, this.loose, e);
    e instanceof s || (e = new s(e, this.loose));
    return this.compareMain(e) || this.comparePre(e);
  }
}
test37: {
  function f() {
    e instanceof s || (e = new s(e, this.loose));
    return c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch);
  }
}
test38: {
  function f() {
    this.format();
    this.raw = this.version;
    return this;
  }
}
test39: {
  function f() {
    K("Comparator.test", e, this.loose);
    return this.semver === Ye || ("string" == typeof e && (e = new s(e, this.loose)), I(e, this.operator, this.semver, this.loose));
  }
}
test40: {
  function f() {
    i = new S(e.value, t);
    return z(this.value, i, t);
  }
}
test41: {
  function f() {
    i = new S(this.value, t);
    return z(e.semver, i, t);
  }
}
test42: {
  function f() {
    this.range = this.set.map(function (e) {
      return e.join(" ").trim();
    }).join("||").trim();
    return this.range;
  }
}
test43: {
  function f() {
    this.loose && (o = o.filter(function (e) {
      return !!e.match(n);
    }));
    return o = o.map(function (e) {
      return new A(e, t);
    });
  }
}
test44: {
  function f() {
    d = setTimeout;
    return setTimeout(e, 0);
  }
}
test45: {
  function f() {
    u = clearTimeout;
    return clearTimeout(e);
  }
}
test46: {
  function f() {
    console.error(new Error("assetPreloading ui error" + t));
    return d("emptyPath", e);
  }
}
test47: {
  function f() {
    console.warn('initiateAssetLoading: known missing asset "' + e + '" will be skip');
    return d(null, e, null);
  }
}
test48: {
  function f() {
    window.WkWebView && (t = window.WkWebView.convertFilePath(t));
    return d(null, e, t);
  }
}
test49: {
  function f() {
    L[e] = !0;
    return d(s, e, null);
  }
}
test50: {
  function f() {
    this.onload = null;
    this.onerror = null;
    return i(this, n);
  }
}
test51: {
  function f() {
    s -= 1;
    if (s > 0) {
      this.src = t;
      return;
    }
    this.onload = null;
    this.onerror = null;
    r(e) && (console.error("loadAndCreateImage: Image not found: " + t), window.wizAssets.deleteFile(e, function () {}, function (e) {
      console.error("loadAndCreateImage: Image could not be deleted: " + t + " with error: " + e);
    }));
    return i(_.EMPTY_IMAGE, n);
  }
}
test52: {
  function f() {
    o -= 1;
    if (o > 0) {
      a.open("GET", t, !0);
      a.send();
      return;
    }
    s(e) || console.error("loadAndParseJson: Failed to load json " + t + ": " + a.status);
    return i(_.EMPTY_JSON, n);
  }
}
test53: {
  function f() {
    r(e) && (console.error("loadAndParseJson: Could not parse json " + t + ": " + c), window.wizAssets.deleteFile(e, function () {}, function (e) {
      console.error("loadAndParseJson: json could not be deleted: " + t + " with error: " + e);
    }));
    return i(_.EMPTY_JSON, n);
  }
}
test54: {
  function f() {
    e && (e = e.map(function (e) {
      return n.getCacheFolder() + e;
    }));
    return a.wizAssets.deleteFiles(e, t, i);
  }
}
test55: {
  function f() {
    M || (T = null !== T ? T : l("ui.common.numberSeparator"), M = new RegExp(n(T), "g"));
    return Number(e.replace(M, ""));
  }
}
test56: {
  function f() {
    n < 10 && (n = "0" + n);
    return n + ":" + i + ":" + t;
  }
}
test57: {
  function f() {
    console.error(new Error("missing word to simplify"));
    return "";
  }
}
test58: {
  function f() {
    t = t.join("");
    return t.toLowerCase();
  }
}
test59: {
  function f() {
    console.error(i);
    return t(i);
  }
}
test60: {
  function f() {
    a = t;
    s = i;
    if (r && c === e.language && u === e.chaseText) {
      return n();
    }
    e.language && (c = e.language);
    u = Boolean(e.chaseText);
    d = e.failoverLanguage || d;
    s.initializeDictionariesAndDiskCache(c, d, function (e, t, i) {
      if (e) {
        return n(e);
      }
      r = t;
      l = i;
      n();
      return;
    });
    return;
  }
}
test61: {
  function f() {
    a.error(new Error("text is missing for " + i));
    return "";
  }
}
test62: {
  function f() {
    n && (t ? e[Mt] = i : delete e[Mt]);
    return a;
  }
}
test63: {
  function f() {
    t = null == t ? Xt : t;
    return !!t && ("number" == i || "symbol" != i && Qt.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
}
test64: {
  function f() {
    r = !0;
    return n(null);
  }
}
test65: {
  function f() {
    r = !0;
    l <= 0 && n(null);
    return;
  }
}
test66: {
  function f() {
    i = void 0 === i ? n : i;
    if (!t && i >= n) {
      return e;
    }
    return ne(e, t, i);
  }
}
test67: {
  function f() {
    e = e.toString().replace(An, "");
    e = e.match(Tn)[2].replace(" ", "");
    e = e ? e.split(Cn) : [];
    return e = e.map(function (e) {
      return he(e.replace(In, ""));
    });
  }
}
test68: {
  function f() {
    s.memo = i;
    s.unmemoized = e;
    return s;
  }
}
test69: {
  function f() {
    e.push(function (e, t) {
      if (e) i(null, {
        error: e
      });else {
        var n;
        n = arguments.length <= 2 ? t : a(arguments, 1), i(null, {
          value: n
        });
      }
    });
    return t.apply(this, e);
  }
}
test70: {
  function f() {
    Wt(e) ? t = ee(e, Ve) : (t = {}, Q(e, function (e, i) {
      t[i] = Ve.call(this, e);
    }));
    return t;
  }
}
test71: {
  function f() {
    Q(e, function (e, n) {
      Wt(e) && $(e, t, 0) >= 0 && i.push(n);
    });
    return i;
  }
}
test72: {
  function f() {
    n(i, [t]);
    y.push(i);
    return;
  }
}
test73: {
  function f() {
    e.prev ? e.prev.next = e.next : this.head = e.next;
    e.next ? e.next.prev = e.prev : this.tail = e.prev;
    e.prev = e.next = null;
    this.length -= 1;
    return e;
  }
}
test74: {
  function f() {
    i.push = function (e, t, n) {
      if (null == n && (n = b), "function" != typeof n) throw new Error("task callback must be a function");
      if (i.started = !0, Wt(e) || (e = [e]), 0 === e.length) return pt(function () {
        i.drain();
      });
      t = t || 0;
      for (var o = i._tasks.head; o && t >= o.priority;) o = o.next;
      for (var a = 0, s = e.length; a < s; a++) {
        var r = {
          data: e[a],
          priority: t,
          callback: n
        };
        o ? i._tasks.insertBefore(o, r) : i._tasks.push(r);
      }
      pt(i.process);
    };
    delete i.unshift;
    return i;
  }
}
test75: {
  function f() {
    l[i] = !0;
    a(function () {
      l[i] && (n ? e.apply(null, n) : e.call(null), t.clearImmediate(i));
    });
    return i;
  }
}
test76: {
  function f() {
    e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children = [], e.webpackPolyfill = 1);
    return e;
  }
}
test77: {
  function f() {
    this.dofusDate = e;
    this.date = i;
    this.year = i.getFullYear() + (e ? t.time.dofusTimeYearLag : 0);
    this.month = i.getMonth();
    this.day = i.getDate();
    this.hour = i.getHours();
    this.minute = i.getMinutes();
    this.timestamp = i.getTime();
    return this;
  }
}
test78: {
  function f() {
    this.dofusDate = e;
    this.date = i;
    this.year = i.getUTCFullYear() + (e ? t.time.dofusTimeYearLag : 0);
    this.month = i.getUTCMonth();
    this.day = i.getUTCDate();
    this.hour = i.getUTCHours();
    this.minute = i.getUTCMinutes();
    this.timestamp = i.getTime();
    return this;
  }
}
test79: {
  function f() {
    m = function (t) {
      g || (g = !0, t && t.stopPropagation(), a(), o && (o.call(e, t), o = null));
    };
    window.setTimeout(function () {
      if (!f) {
        d.style.webkitTransition = h;
        for (var e in t) d.style[e] = t[e];
        d.addEventListener("webkitTransitionEnd", m), p = window.setTimeout(m, l + r);
      }
    }, 0);
    e._tween = {
      cancel: s
    };
    return e._tween;
  }
}
test80: {
  function f() {
    r && t.useScrollValue && (o.y += r.scrollTop || 0);
    return {
      x: o.x,
      y: o.y,
      touches: a,
      touchCount: n
    };
  }
}
test81: {
  function f() {
    i && t.useScrollValue && (o.y += i.scrollTop || 0);
    return {
      x: o.x,
      y: o.y,
      touchCount: "mouseup" === e.type ? 0 : 1,
      touches: [{
        x: o.x,
        y: o.y
      }]
    };
  }
}
test82: {
  function f() {
    console.error("xpFormula: there are params in playerData that are not a number", {
      level: e.level,
      wisdom: e.wisdom,
      experienceFactor: e.experienceFactor,
      xpRatioMount: e.xpRatioMount,
      xpGuildGivenPercent: e.xpGuildGivenPercent,
      xpAlliancePrismBonusPercent: e.xpAlliancePrismBonusPercent
    });
    return 0;
  }
}
test83: {
  function f() {
    b -= b * e.xpRatioMount / 100;
    b -= b * e.xpGuildGivenPercent / 100;
    b /= 100;
    e.xpAlliancePrismBonusPercent > 0 && (l *= 1 + e.xpAlliancePrismBonusPercent / 100);
    l = i(l * b) * w;
    return i(l);
  }
}
test84: {
  function f() {
    l < 2 && (l = 2);
    return l;
  }
}
test85: {
  function f() {
    o.error(new Error("PL need a caller"));
    return a;
  }
}
test86: {
  function f() {
    a.bone = i(o, "bone", s[0], t, n);
    a.scale = i(o, "scale", s[3] || "100", t, n);
    a.skin = s[1] || "";
    a.color = s[2] || "";
    return a;
  }
}
test87: {
  function f() {
    s--;
    return {
      level: s,
      currentExp: a,
      requiredExpToNextLevel: l ? l.requiredXp : 0,
      expPreviousLevel: i(e, n, s).requiredXp
    };
  }
}
test88: {
  function f() {
    p && s.start();
    return a;
  }
}
test89: {
  function f() {
    a(e);
    return null;
  }
}
test90: {
  function f() {
    console.warn("Cannot make URL sticky (no session ID has been set):", e);
    return e;
  }
}
test91: {
  function f() {
    window.gui.splashScreen.show();
    return window.setTimeout(function () {
      window.gui.splashScreen.hide(), window.location.reload();
    }, 3e4);
  }
}
test92: {
  function f() {
    console.warn("Already logged in");
    return e();
  }
}
test93: {
  function f() {
    console.warn("Already logging in");
    return t.once("loginEnd", e);
  }
}
test94: {
  function f() {
    this.onload = null;
    this.onerror = null;
    return t();
  }
}
test95: {
  function f() {
    this.onload = null;
    this.onerror = null;
    return t(new Error("Error loading script: " + e));
  }
}
test96: {
  function f() {
    console.warn("Tried to register non-function", t, "as event handler for event:", e);
    return this;
  }
}
test97: {
  function f() {
    t.once ? t.once += 1 : t.once = 1;
    return this.on(e, t);
  }
}
test98: {
  function f() {
    e ? delete this.eventHandlers[e] : this.eventHandlers = {};
    return this;
  }
}
test99: {
  function f() {
    e.groupFlags = h.getGroupFlags();
    e.nickname = n;
    e.accountId = i.accountId;
    e.isGuiConnected = window.gui.isConnected;
    e.charaName = o.name;
    e.charaId = o.id;
    e.breed = o.breed;
    e.level = o.level;
    e.mapId = a.mapId;
    e.openWindows = m.getOpenWindows();
    e.lastClosedWindow = m.getLastClosedWindow();
    e.fightState = s.fightState;
    e.appVersion = r;
    e.buildVersion = l;
    e.appStart = M;
    e.lastDisconnect = T;
    e.lastCharaSelection = C;
    e.lastReceivedMessage = f.lastReceivedMessage;
    return e;
  }
}
test100: {
  function f() {
    void 0 === i && console.warn("isFeatureOn(" + e + ") called before we can tell");
    return !!n[e];
  }
}
test101: {
  function f() {
    t.filename = h.filename;
    t.lineno = e.lineno;
    t.colno = e.colno || e.column;
    h.error && (t.error = i(h.error));
    return i(h.message);
  }
}
test102: {
  function f() {
    0 === Object.keys(o).length && (o = null);
    return {
      message: r,
      data: o
    };
  }
}
test103: {
  function f() {
    t[i] = n[i](e);
    return t;
  }
}
test104: {
  function f() {
    n = n.trim().replace(/\s+/g, " ");
    return n.split(" ");
  }
}
test105: {
  function f() {
    t.indexOf(i.nodeName) > -1 || e.push("[" + i.nodeName + '="' + i.value + '"]');
    return e;
  }
}
test106: {
  function f() {
    window.gui.openPopup({
      title: h("ui.login.createAccount"),
      message: h("ui.popup.accessDenied.serviceUnavailable")
    });
    return console.error(new Error("windowsManager: register should not open"));
  }
}
test107: {
  function f() {
    f || i.initialPosition || (i.initialPosition = {
      x: u.x,
      y: u.y,
      width: u.width,
      height: u.height
    });
    u.x = Math.min(r.windowFullScreenWidth - u.width, Math.max(0, u.x));
    u.y = Math.max(0, Math.min(r.windowFullScreenHeight - _, u.y));
    i.openingTweener = c.tween(i, {
      opacity: 1,
      webkitTransform: "translate3d(" + u.x + "px," + u.y + "px,0) scale(1)"
    }, {
      time: 150,
      delay: 0,
      easing: "ease-out"
    }, function () {
      o(i, t);
    });
    window.gui.splashScreen.hide();
    return i;
  }
}
test108: {
  function f() {
    t instanceof p ? a = t : (a = new p({
      className: e,
      title: i.title,
      positionInfo: {
        left: i.left || "c",
        top: i.top || "c",
        width: i.width || 250,
        height: i.height || 200
      },
      isModal: i.isModal,
      noCloseButton: i.noCloseButton
    }), a.windowBody.appendChild(t));
    v.addWindow(n, a);
    v.open(n, i);
    return a;
  }
}
test109: {
  function f() {
    i = "narrow" === e ? t ? r.toolbarThicknessInFight : 1 : 3;
    return i * s.SHORTCUT_ICON_SIZE + s.SHORTCUT_GAUGE_SIZE + 5;
  }
}
test110: {
  function f() {
    arguments.length >= 3 && (n.depth = arguments[2]);
    arguments.length >= 4 && (n.colors = arguments[3]);
    f(i) ? n.showHidden = i : i && t._extend(n, i);
    b(n.showHidden) && (n.showHidden = !1);
    b(n.depth) && (n.depth = 2);
    b(n.colors) && (n.colors = !1);
    b(n.customInspect) && (n.customInspect = !0);
    n.colors && (n.stylize = a);
    return l(n, e, n.depth);
  }
}
test111: {
  function f() {
    e.forEach(function (e, i) {
      t[e] = !0;
    });
    return t;
  }
}
test112: {
  function f() {
    y(o) || (o = l(e, o, n));
    return o;
  }
}
test113: {
  function f() {
    T = v ? u(e, i, n, f, s) : s.map(function (t) {
      return h(e, i, n, f, t, v);
    });
    e.seen.pop();
    return p(T, _, w);
  }
}
test114: {
  function f() {
    o.forEach(function (o) {
      o.match(/^\d+$/) || a.push(h(e, t, i, n, o, !0));
    });
    return a;
  }
}
test115: {
  function f() {
    n++;
    t.indexOf("\n") >= 0 && n++;
    return e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }
}
test116: {
  function f() {
    this._maxListeners = e;
    return this;
  }
}
test117: {
  function f() {
    this._events || (this._events = {});
    this._events.newListener && this.emit("newListener", e, n(t.listener) ? t.listener : t);
    this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t;
    a(this._events[e]) && !this._events[e].warned && (o = s(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners, o && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()));
    return this;
  }
}
test118: {
  function f() {
    i.listener = t;
    this.on(e, i);
    return this;
  }
}
test119: {
  function f() {
    0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e];
    return this;
  }
}
test120: {
  function f() {
    this.removeAllListeners("removeListener");
    this._events = {};
    return this;
  }
}
test121: {
  function f() {
    delete this._events[e];
    return this;
  }
}
test122: {
  function f() {
    i = a.x;
    n = a.y;
    return o(e.rootElement.clientWidth, e.rootElement.clientHeight, i - l, i + l, n - l);
  }
}
test123: {
  function f() {
    s ? (d = o - i - s, d < c && (d = o + s)) : d = Math.max(o - i / 2, c);
    return {
      x: Math.round(l),
      y: Math.round(d)
    };
  }
}
test124: {
  function f() {
    s = s < l ? l : s;
    r = r < l ? l : r;
    return o(a.width, a.height, c - s, c + s, d - r);
  }
}
test125: {
  function f() {
    r = i.top - o - t;
    r >= c ? s = l - e / 2 : (s = l > a.screenWidth / 2 ? i.left - o - e : l + i.width / 2 + o, r = d - t / 2);
    s < c ? s = c : s + e > a.screenWidth - c && (s = a.screenWidth - c - e);
    r < c ? r = c : r + t > a.screenHeight - c && (r = a.screenHeight - c - t);
    return {
      x: Math.round(s),
      y: Math.round(r)
    };
  }
}
test126: {
  function f() {
    N = E;
    E = O.x - A;
    e.emit("slide", O);
    e.slideOut = O.x < 0 || O.x > C.width || O.y < 0 || O.y > C.height;
    e.slideOut ? I || (I = !0, e.emit("slideOut", O)) : (e.emit("slideIn", O), I = !1);
    return;
  }
}
test127: {
  function f() {
    this.rootElement.removeChild(e.rootElement);
    this._childrenList.splice(i, 1);
    this._childrenMap.hasOwnProperty(e._name) && delete this._childrenMap[e._name];
    e._parent = null;
    return e;
  }
}
test128: {
  function f() {
    this._childrenList.push(e);
    this.rootElement.appendChild(e.rootElement);
    e.rebindTouchListeners();
    this._contentType = c.WUI;
    return e;
  }
}
test129: {
  function f() {
    e._setParent(this);
    this.rootElement.insertBefore(e.rootElement, t && t.rootElement);
    e.rebindTouchListeners();
    this._childrenList.splice(i, 0, e);
    this._contentType = c.WUI;
    return e;
  }
}
test130: {
  function f() {
    e._parent.insertChildBefore(this, e);
    return e;
  }
}
test131: {
  function f() {
    void 0 === e && (e = !this._elementIsVisible);
    e ? this.show() : this.hide();
    return !!e;
  }
}
test132: {
  function f() {
    arguments.length >= 3 && (n.depth = arguments[2]);
    arguments.length >= 4 && (n.colors = arguments[3]);
    f(i) ? n.showHidden = i : i && t._extend(n, i);
    b(n.showHidden) && (n.showHidden = !1);
    b(n.depth) && (n.depth = 2);
    b(n.colors) && (n.colors = !1);
    b(n.customInspect) && (n.customInspect = !0);
    n.colors && (n.stylize = a);
    return l(n, e, n.depth);
  }
}
test133: {
  function f() {
    e.forEach(function (e, i) {
      t[e] = !0;
    });
    return t;
  }
}
test134: {
  function f() {
    y(o) || (o = l(e, o, n));
    return o;
  }
}
test135: {
  function f() {
    T = v ? u(e, i, n, f, s) : s.map(function (t) {
      return h(e, i, n, f, t, v);
    });
    e.seen.pop();
    return p(T, _, w);
  }
}
test136: {
  function f() {
    o.forEach(function (o) {
      o.match(/^\d+$/) || a.push(h(e, t, i, n, o, !0));
    });
    return a;
  }
}
test137: {
  function f() {
    n++;
    t.indexOf("\n") >= 0 && n++;
    return e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }
}
test138: {
  function f() {
    this._maxListeners = e;
    return this;
  }
}
test139: {
  function f() {
    this._events || (this._events = {});
    this._events.newListener && this.emit("newListener", e, n(t.listener) ? t.listener : t);
    this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t;
    a(this._events[e]) && !this._events[e].warned && (o = s(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners, o && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()));
    return this;
  }
}
test140: {
  function f() {
    i.listener = t;
    this.on(e, i);
    return this;
  }
}
test141: {
  function f() {
    0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e];
    return this;
  }
}
test142: {
  function f() {
    this.removeAllListeners("removeListener");
    this._events = {};
    return this;
  }
}
test143: {
  function f() {
    delete this._events[e];
    return this;
  }
}
test144: {
  function f() {
    t = t || n;
    i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail);
    return i;
  }
}
test145: {
  function f() {
    n || (n = document.createDocumentFragment(), n.appendChild(this));
    if (t) {
      return t.call(this, e);
    }
    return i.call(n.querySelectorAll(e), this) > -1;
  }
}
test146: {
  function f() {
    t.prototype = new e(this, "class");
    return new t();
  }
}
test147: {
  function f() {
    a(e);
    return o(this).indexOf(e) > -1;
  }
}
test148: {
  function f() {
    n && this[n](e);
    if ("boolean" == typeof t) {
      return t;
    }
    return !i;
  }
}
test149: {
  function f() {
    _.cancelTween(this);
    this.delClassNames("transition");
    this.setStyles({
      width: I + "px",
      overflow: "hidden"
    });
    this.content.setStyles({
      width: null,
      height: null
    });
    return [e, t];
  }
}
test150: {
  function f() {
    c = new n();
    e.on("dom.touchend", function () {
      u && y.stop(), u = !1, s();
    });
    return c;
  }
}
test151: {
  function f() {
    "function" == typeof t && (i = t.call(e), i = "string" == typeof i ? new g("div", {
      text: i
    }) : i);
    return i;
  }
}
test152: {
  function f() {
    c._closeTooltip(!0);
    c._setContent(!1);
    return;
  }
}
test153: {
  function f() {
    n();
    return i(null, e);
  }
}
test154: {
  function f() {
    n();
    return i(e);
  }
}
test155: {
  function f() {
    this.totalUsedMemory = e;
    return e;
  }
}
test156: {
  function f() {
    i = this.permanentSounds[e] = new n();
    i.setId(e);
    return i;
  }
}
test157: {
  function f() {
    s || (s = this.createSound(t, e));
    i = i || 1;
    s.play(a.volume * i, n, o);
    return s;
  }
}
test158: {
  function f() {
    this.first = t;
    this.last = t;
    return t;
  }
}
test159: {
  function f() {
    t.next = this.first;
    this.first.previous = t;
    this.first = t;
    return t;
  }
}
test160: {
  function f() {
    t.previous = this.last;
    this.last.next = t;
    this.last = t;
    return t;
  }
}
test161: {
  function f() {
    this.first = e.next;
    null !== this.first && (this.first.previous = null);
    e.next = null;
    e.container = null;
    return t;
  }
}
test162: {
  function f() {
    this.last = e.previous;
    null !== this.last && (this.last.next = null);
    e.previous = null;
    e.container = null;
    return t;
  }
}
test163: {
  function f() {
    e.next = i;
    null === i ? this.last = e : i.previous = e;
    e.previous = t;
    null === t ? this.first = e : t.next = e;
    return e;
  }
}
test164: {
  function f() {
    this._onStopCallback = null;
    this.source.onended = null;
    this.stopping = !1;
    window.clearTimeout(this._fadeTimeout);
    this._fadeTimeout = null;
    return;
  }
}
test165: {
  function f() {
    this.gain.cancelScheduledValues(i);
    this.gain.setValueAtTime(this.gain.value || s, i);
    this.gain.linearRampToValueAtTime(s, i + this.fade);
    this._fadeTimeout = window.setTimeout(function () {
      t._fadeTimeout = null, t._stopAndClear();
    }, 1e3 * this.fade);
    return;
  }
}
test166: {
  function f() {
    this._onLoadQueuedCallback = [];
    if (this._unloading) {
      this._unloading = !1;
      this.unload();
      return;
    }
    this._loaded && this._playTriggered && ((this.loop || Date.now() - this._playTriggered < t) && this._play(), this._playTriggered = 0);
    return;
  }
}
test167: {
  function f() {
    void 0 !== e && null !== e && this.setVolume(e);
    void 0 !== t && null !== t && this.setPan(t);
    if (this._loaded) {
      if (this.loop && this.playing) {
        this._updatePlayPitch(i);
        return;
      }
      this._play(i);
      return;
    }
    this._playTriggered = Date.now();
    this.load();
    return;
  }
}
test168: {
  function f() {
    this.playing = !1;
    return e && e();
  }
}
test169: {
  function f() {
    console.log("ISound load call: " + this.id);
    return this._finalizeLoad(null);
  }
}
test170: {
  function f() {
    this._playTriggered = 0;
    this.setLoop(!1);
    this.fade = 0;
    this.pitch = 0;
    this.stop();
    if (this._loading) {
      this._unloading = !0;
      return !1;
    }
    this.setVolume(1);
    this.setPan(0);
    this.id = null;
    this._loaded = !1;
    this.usedMemory = 0;
    return !0;
  }
}
test171: {
  function f() {
    c.freeSound(e);
    e = null;
    return t && t();
  }
}
test172: {
  function f() {
    h.play(t * this.volume, i, n);
    this.nextLoop && (this.nextLoop.cancelOnLoadCallbacks(), this.nextLoop = null);
    return;
  }
}
test173: {
  function f() {
    null !== this._onEnd && (window.clearTimeout(this._onEnd), this._onEnd = null);
    this._audio.pause();
    this._audio.currentTime = 0;
    this._playTriggered = 0;
    this.playing = !1;
    return e && e();
  }
}
test174: {
  function f() {
    d.destroy();
    d = null;
    setTimeout(function () {
      t.connect(c, i);
    }, 0);
    return;
  }
}
test175: {
  function f() {
    t.stats = new o(e, t.stats, !1);
    return t;
  }
}
test176: {
  function f() {
    t.slaveStats = new o(e, t.slaveStats, !1);
    return t;
  }
}
test177: {
  function f() {
    t.uniqueNickname = new a(e, t.nickname);
    return t;
  }
}
test178: {
  function f() {
    t.uniqueNickname = new a(e, t.accountNickname);
    return t;
  }
}
test179: {
  function f() {
    t.friendUpdated.uniqueNickname = new a(e, t.friendUpdated.accountName);
    return t;
  }
}
test180: {
  function f() {
    t.friendAdded.uniqueNickname = new a(e, t.friendAdded.accountName);
    return t;
  }
}
test181: {
  function f() {
    t.ignoreAdded.uniqueNickname = new a(e, t.ignoreAdded.accountName);
    return t;
  }
}
test182: {
  function f() {
    n(e, t.friendsList);
    return t;
  }
}
test183: {
  function f() {
    n(e, t.ignoredList);
    return t;
  }
}
test184: {
  function f() {
    this.getToken() && (e += n + this.getToken());
    return e;
  }
}
test185: {
  function f() {
    t = t || {};
    i = i || {};
    if (l) {
      i.withPlayerInfo !== !1 && s.addCharacterInfo(t);
      i.withEquipment && s.addEquippedItem(t, window.gui.playerData);
      a.send(e, t);
      return;
    }
    n(e, t, i);
    return;
  }
}
test186: {
  function f() {
    0 === t && (t = 7);
    return t;
  }
}
test187: {
  function f() {
    e = e.substr(1);
    if (e) {
      return t + n(e, i);
    }
    return t;
  }
}
test188: {
  function f() {
    n = Math.min(a - t, Math.max(0, n));
    o = Math.max(0, Math.min(l - i, o));
    return {
      x: Math.round(n),
      y: Math.round(o),
      width: Math.round(t),
      height: Math.round(i)
    };
  }
}
test189: {
  function f() {
    "string" == typeof t && "IDB_" === t.substr(0, 4) && (n += "\n\n(" + t + ")");
    return window.dofus.reloadAppOnFatalError("InitializeDiskCache: " + t, n);
  }
}
test190: {
  function f() {
    o ? g.putAll(e, n, function (e) {
      e && console.warn("_getAllDataMap putAll: Caching data on disk failed with error: " + e);
    }) : console.warn("Request to cache table " + e + ' which has no "' + a + '" key; table will not be cached.');
    return t(null, n);
  }
}
test191: {
  function f() {
    g.put(e, n, function (e) {
      e && console.warn("getDataMap put: Caching data on disk failed with error:", e);
    });
    return i(null, s);
  }
}
test192: {
  function f() {
    y++;
    if (y === v) {
      p = e;
      w = !0;
      return t();
    }
    0;
    return;
  }
}
test193: {
  function f() {
    i[_] = !0;
    i[e] = t;
    return i;
  }
}
test194: {
  function f() {
    console.info("IDB successfully deleted " + e);
    return t();
  }
}
test195: {
  function f() {
    e instanceof Blob ? (queuedObjects.push(t), readBlobAsDataURL(e, t)) : e instanceof Boolean ? e = {
      $type: "bool",
      $enc: "" + e
    } : e instanceof Date ? e = {
      $type: "date",
      $enc: e.getTime()
    } : e instanceof Number ? e = {
      $type: "num",
      $enc: "" + e
    } : e instanceof RegExp && (e = {
      $type: "regex",
      $enc: "" + e
    });
    return e;
  }
}
test196: {
  function f() {
    i = e.split(",");
    t = i[0].split(":")[1];
    n = i[1];
    return new Blob([n], {
      type: t
    });
  }
}
test197: {
  function f() {
    rez($);
    return $;
  }
}
test198: {
  function f() {
    e.Sca.encode(i, function (i) {
      n.__idbObjectStore.transaction.__pushToQueue(o, function (o, a, s, r) {
        n.__find(t, o, function (t, a, l) {
          var c = "UPDATE " + e.util.quote(n.__idbObjectStore.name) + " SET value = ? WHERE key = ?";
          e.DEBUG && console.log(c, i, t, l), o.executeSql(c, [i, e.Key.encode(l)], function (e, i) {
            n.__prefetchedData = null, 1 === i.rowsAffected ? s(t) : r("No rows with key found" + t);
          }, function (e, t) {
            r(t);
          });
        }, r);
      });
    });
    return o;
  }
}
test199: {
  function f() {
    new idbModules.IDBCursor(e, t, this.source, i, this.indexName, "value");
    return i;
  }
}
test200: {
  function f() {
    new idbModules.IDBCursor(e, t, this.source, i, this.indexName, "key");
    return i;
  }
}
test201: {
  function f() {
    idbModules.Sca.encode(e, function (o) {
      i.transaction.__pushToQueue(n, function (n, a, s, r) {
        i.__deriveKey(n, e, t, function (t) {
          i.__insertData(n, o, e, t, s, r);
        });
      });
    });
    return n;
  }
}
test202: {
  function f() {
    idbModules.Sca.encode(e, function (o) {
      i.transaction.__pushToQueue(n, function (n, a, s, r) {
        i.__deriveKey(n, e, t, function (t) {
          var a = "DELETE FROM " + idbModules.util.quote(i.name) + " where key = ?";
          n.executeSql(a, [idbModules.Key.encode(t)], function (n, a) {
            idbModules.DEBUG && console.log("Did the row with the", t, "exist? ", a.rowsAffected), i.__insertData(n, o, e, t, s, r);
          }, function (e, t) {
            r(t);
          });
        });
      });
    });
    return n;
  }
}
test203: {
  function f() {
    new idbModules.IDBCursor(e, t, this, i, "key", "value");
    return i;
  }
}
test204: {
  function f() {
    n.__waitForReady(function () {
      o.__createIndex(e, t, i);
    }, "createObjectStore");
    n.indexNames.push(e);
    return o;
  }
}
test205: {
  function f() {
    t.__deleteIndex(e);
    return t;
  }
}
test206: {
  function f() {
    this.__pushToQueue(o, t, i);
    return o;
  }
}
test207: {
  function f() {
    t.source = this.db;
    t.transaction = this;
    return t;
  }
}
test208: {
  function f() {
    a.__addToTransactionQueue(function (a, s, r) {
      function l() {
        e.util.throwDOMException(0, "Could not create new object store", arguments);
      }
      n.__versionTransaction || e.util.throwDOMException(0, "Invalid State error", n.transaction);
      var c = ["CREATE TABLE", e.util.quote(t), "(key BLOB", i.autoIncrement ? ", inc INTEGER PRIMARY KEY AUTOINCREMENT" : "PRIMARY KEY", ", value BLOB)"].join(" ");
      e.DEBUG && console.log(c), a.executeSql(c, [], function (e) {
        e.executeSql("INSERT INTO __sys__ VALUES (?,?,?,?)", [t, i.keyPath, !!i.autoIncrement, "{}"], function () {
          o.__setReadyState("createObjectStore", !0), r(o);
        }, l);
      }, l);
    });
    n.objectStoreNames.push(t);
    return o;
  }
}
test209: {
  function f() {
    i.transaction(function (e) {
      e.executeSql("SELECT * FROM dbVersions where name = ?", [n], function (e, t) {
        0 === t.rows.length ? e.executeSql("INSERT INTO dbVersions VALUES (?,?)", [n, o || 1], function () {
          s(0);
        }, a) : s(t.rows.item(0).version);
      }, a);
    }, a);
    return r;
  }
}
test210: {
  function f() {
    i.transaction(function (i) {
      i.executeSql("SELECT * FROM dbVersions where name = ?", [n], function (i, r) {
        if (0 === r.rows.length) {
          s.result = void 0;
          var c = e.Event("success");
          c.newVersion = null;
          c.oldVersion = l;
          e.util.callback("onsuccess", s, c);
          return;
        }
        l = r.rows.item(0).version;
        var d = window.openDatabase(n, 1, n, t);
        d.transaction(function (t) {
          t.executeSql("SELECT * FROM __sys__", [], function (t, i) {
            var n = i.rows;
            !function s(i) {
              i >= n.length ? t.executeSql("DROP TABLE __sys__", [], function () {
                a();
              }, o) : t.executeSql("DROP TABLE " + e.util.quote(n.item(i).name), [], function () {
                s(i + 1);
              }, function () {
                s(i + 1);
              });
            }(0);
          }, function () {
            a();
          });
        }, o);
      });
    }, o);
    return s;
  }
}
test211: {
  function f() {
    c.newVersion = null;
    c.oldVersion = l;
    e.util.callback("onsuccess", s, c);
    return;
  }
}
test212: {
  function f() {
    t = t || "&";
    n = n || "=";
    null === e && (e = void 0);
    if ("object" == typeof e) {
      return Object.keys(e).map(function (o) {
        var a = encodeURIComponent(i(o)) + n;
        if (Array.isArray(e[o])) {
          return e[o].map(function (e) {
            return a + encodeURIComponent(i(e));
          }).join(t);
        }
        return a + encodeURIComponent(i(e[o]));
      }).join(t);
    }
    if (o) {
      return encodeURIComponent(i(o)) + n + encodeURIComponent(i(e));
    }
    return "";
  }
}
test213: {
  function f() {
    e && e.forever && !n.length && n.push(this.createTimeout(o, t));
    n.sort(function (e, t) {
      return e - t;
    });
    return n;
  }
}
test214: {
  function f() {
    this._errors.push(e);
    this._errors.unshift(new Error("RetryOperation timeout occurred"));
    return !1;
  }
}
test215: {
  function f() {
    this._timer = setTimeout(function () {
      n._attempts++, n._operationTimeoutCb && (n._timeout = setTimeout(function () {
        n._operationTimeoutCb(n._attempts);
      }, n._operationTimeout), n._options.unref && n._timeout.unref()), n._fn(n._attempts);
    }, i);
    this._options.unref && this._timer.unref();
    return !0;
  }
}
test216: {
  function f() {
    u.isAndroidApp ? (t = h("tablet.ui.popup.accessDenied.incompatibleAppAndroid"), i = "market://details?id=com.ankama.dofustouch") : u.isIOSApp ? (t = h("tablet.ui.popup.accessDenied.incompatibleAppIOS"), i = "https://itunes.apple.com/app/id1041406978") : t = h("tablet.ui.popup.accessDenied.incompatibleApp");
    window.gui.openConfirmPopup({
      title: h("ui.popup.accessDenied"),
      message: t,
      cb: function (e) {
        e && i && window.open(i, "_system", "location=no");
      }
    });
    return;
  }
}
test217: {
  function f() {
    t = h("tablet.ui.popup.accessDenied.incompatibleBuild");
    window.gui.openConfirmPopup({
      title: h("ui.popup.accessDenied"),
      message: t,
      noDisable: !0,
      cb: function (e) {
        e && window.location.reload();
      }
    });
    return;
  }
}
test218: {
  function f() {
    window.gui.openSimplePopup(m(n), h("ui.popup.accessDenied"));
    return o(n);
  }
}
test219: {
  function f() {
    window.dofus.setCredentials(i.account || d, l.token);
    window.gui.playerData.setLoginName(l.username);
    t.connectMethod = e;
    return window.dofus.login(function (e) {
      g = !1;
      if (e) {
        window.dofus.disconnect();
        r(e);
        return o(n);
      }
      u.isAndroidSoonDeprecatedVersion && a();
      u.isIosSoonDeprecatedVersion && s();
      c.delValue("lastServerId");
      return o();
    });
  }
}
test220: {
  function f() {
    g = !1;
    if (e) {
      window.dofus.disconnect();
      r(e);
      return o(n);
    }
    u.isAndroidSoonDeprecatedVersion && a();
    u.isIosSoonDeprecatedVersion && s();
    c.delValue("lastServerId");
    return o();
  }
}
test221: {
  function f() {
    window.gui.playerData.setForcedAccount(p[1]);
    return d.login(p[0], i.password, i.save, l);
  }
}
test222: {
  function f() {
    window.gui.playerData.setForcedAccount(i.forcedAccount);
    return d.login(l);
  }
}
test223: {
  function f() {
    t = t || {};
    return l(e, t, i);
  }
}
test224: {
  function f() {
    r.setItem("HAAPI_USERNAME", e);
    a = e;
    return e;
  }
}
test225: {
  function f() {
    v || M.error("Config not ready yet.");
    return v;
  }
}
test226: {
  function f() {
    t.resetHaapiKey();
    if (e) {
      return i(e);
    }
    return i();
  }
}
test227: {
  function f() {
    u.setHaapiKey(n.key, {
      save: t.saveKey,
      timeout: o
    });
    return i();
  }
}
test228: {
  function f() {
    n.reason = "NOTOKEN";
    t.resetHaapiKey();
    return n;
  }
}
test229: {
  function f() {
    d.removeItem("HAAPI_KEY");
    d.removeItem("HAAPI_KEY_TIMEOUT");
    return e;
  }
}
test230: {
  function f() {
    c.warning("Failed to store HAAPI_KEY in local storage:", n);
    return null;
  }
}
test231: {
  function f() {
    o.parse(e, t, i);
    return o;
  }
}
test232: {
  function f() {
    l(e) && (e = o(e));
    if (e instanceof n) {
      return e.format();
    }
    return n.prototype.format.call(e);
  }
}
test233: {
  function f() {
    this.href = this.format();
    return this;
  }
}
test234: {
  function f() {
    t && ":" !== t.substr(-1) && (t += ":");
    this.slashes || (!t || I[t]) && o !== !1 ? (o = "//" + (o || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : o || (o = "");
    n && "#" !== n.charAt(0) && (n = "#" + n);
    s && "?" !== s.charAt(0) && (s = "?" + s);
    i = i.replace(/[?#]/g, function (e) {
      return encodeURIComponent(e);
    });
    s = s.replace("#", "%23");
    return t + o + i + s + n;
  }
}
test235: {
  function f() {
    i.href = i.format();
    return i;
  }
}
test236: {
  function f() {
    Object.keys(e).forEach(function (t) {
      "protocol" !== t && (i[t] = e[t]);
    });
    I[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/");
    i.href = i.format();
    return i;
  }
}
test237: {
  function f() {
    Object.keys(e).forEach(function (t) {
      i[t] = e[t];
    });
    i.href = i.format();
    return i;
  }
}
test238: {
  function f() {
    i.slashes = i.slashes || e.slashes;
    i.href = i.format();
    return i;
  }
}
test239: {
  function f() {
    i.search = e.search;
    i.query = e.query;
    d(i.pathname) && d(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : ""));
    i.href = i.format();
    return i;
  }
}
test240: {
  function f() {
    i.pathname = null;
    i.search ? i.path = "/" + i.search : i.path = null;
    i.href = i.format();
    return i;
  }
}
test241: {
  function f() {
    h = h || i.host && m.length;
    h && !b && m.unshift("");
    m.length ? i.pathname = m.join("/") : (i.pathname = null, i.path = null);
    d(i.pathname) && d(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : ""));
    i.auth = e.auth || i.auth;
    i.slashes = i.slashes || e.slashes;
    i.href = i.format();
    return i;
  }
}
test242: {
  function f() {
    e > 65535 && (e -= 65536, t += P(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e);
    return t += P(e);
  }
}
test243: {
  function f() {
    e += this.cmsItems.describe() + "\n";
    e += this.account.describe() + "\n";
    e += this.almanax.describe() + "\n";
    e += this.shop.describe() + "\n";
    return e += this.game.describe() + "\n";
  }
}
test244: {
  function f() {
    t = new Error("birthDateTimestamp is not a number for: " + e);
    return {
      error: t,
      birthDate: i
    };
  }
}
test245: {
  function f() {
    t.setValue("guestAccount", i, 1);
    n(null, i);
    return;
  }
}
test246: {
  function f() {
    o(l.event.imageUrl) || (l.event.imageUrl = e[0]);
    o(l.month.protectorImageUrl) || (l.month.protectorImageUrl = e[1]);
    o(l.zodiac.imageUrl) || (l.zodiac.imageUrl = e[2]);
    return n(null, l);
  }
}
test247: {
  function f() {
    u = !0;
    return i(null, this._cachedResult, u);
  }
}
test248: {
  function f() {
    n(i);
    n(s);
    n(r);
    o(r, s.length);
    return {
      name: t[0],
      abbrs: a(t[1].split(" "), s),
      offsets: a(i, s),
      untils: r,
      population: 0 | t[5]
    };
  }
}
test249: {
  function f() {
    c.sort(p);
    if (c.length > 0) {
      return c[0].zone.name;
    }
    0;
    return;
  }
}
test250: {
  function f() {
    P && !e || (P = g());
    return P;
  }
}
test251: {
  function f() {
    e = e.toUpperCase();
    return H[e] || null;
  }
}
test252: {
  function f() {
    E.didShowError || (E.didShowError = !0, x("moment.tz.zoneExists('" + e + "') has been deprecated in favor of !moment.tz.zone('" + e + "')"));
    return !!w(e);
  }
}
test253: {
  function f() {
    o && !e.isMoment(t) && N(a) && a.add(o.parse(a), "minutes");
    a.tz(n);
    return a;
  }
}
test254: {
  function f() {
    this._z = null;
    return e.apply(this, arguments);
  }
}
test255: {
  function f() {
    arguments.length > 0 && (this._z = null);
    return e.apply(this, arguments);
  }
}
test256: {
  function f() {
    x("zone.offset has been deprecated in favor of zone.utcOffset");
    return this.offsets[this._index(e)];
  }
}
test257: {
  function f() {
    this._z = w(t);
    this._z ? e.updateOffset(this, i) : x("Moment Timezone has no data for " + t + ". See http://momentjs.com/timezone/docs/#/data-loading/.");
    return this;
  }
}
test258: {
  function f() {
    (U < 2 || 2 === U && q < 9) && x("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + e.version + ".");
    e.defaultZone = t ? w(t) : null;
    return e;
  }
}
test259: {
  function f() {
    "[object Array]" === Object.prototype.toString.call(j) ? (j.push("_z"), j.push("_a")) : j && (j._z = null);
    return e;
  }
}
test260: {
  function f() {
    r(t, "toString") && (e.toString = t.toString);
    r(t, "valueOf") && (e.valueOf = t.valueOf);
    return e;
  }
}
test261: {
  function f() {
    null == e._pf && (e._pf = f());
    return e._pf;
  }
}
test262: {
  function f() {
    null != e ? p(g(t), e) : g(t).userInvalidated = !0;
    return t;
  }
}
test263: {
  function f() {
    i.sort(function (e, t) {
      return e.priority - t.priority;
    });
    return i;
  }
}
test264: {
  function f() {
    0 !== t && isFinite(t) && (i = V(t));
    return i;
  }
}
test265: {
  function f() {
    e = G(e);
    if (I(this[e])) {
      return this[e]();
    }
    return this;
  }
}
test266: {
  function f() {
    e += (t - i) / 12;
    if (1 === i) {
      if (j(e)) {
        return 29;
      }
      return 28;
    }
    return 31 - i % 7 % 2;
  }
}
test267: {
  function f() {
    i = Math.min(e.date(), le(e.year(), t));
    e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, i);
    return e;
  }
}
test268: {
  function f() {
    e < 100 && e >= 0 ? (r = new Date(e + 400, t, i, n, o, a, s), isFinite(r.getFullYear()) && r.setFullYear(e)) : r = new Date(e, t, i, n, o, a, s);
    return r;
  }
}
test269: {
  function f() {
    e < 100 && e >= 0 ? (i = Array.prototype.slice.call(arguments), i[0] = e + 400, t = new Date(Date.UTC.apply(null, i)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments));
    return t;
  }
}
test270: {
  function f() {
    c <= 0 ? (a = e - 1, s = ye(a) + c) : c > ye(e) ? (a = e + 1, s = c - ye(e)) : (a = e, s = c);
    return {
      year: a,
      dayOfYear: s
    };
  }
}
test271: {
  function f() {
    s < 1 ? (o = e.year() - 1, n = s + Ae(o, t, i)) : s > Ae(e.year(), t, i) ? (n = s - Ae(e.year(), t, i), o = e.year() + 1) : (o = e.year(), n = s);
    return {
      week: n,
      year: o
    };
  }
}
test272: {
  function f() {
    e && (i = c(t) ? rt(e) : at(e, t), i ? ua = i : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?"));
    return ua._abbr;
  }
}
test273: {
  function f() {
    ga[t.parentLocale] || (ga[t.parentLocale] = []);
    ga[t.parentLocale].push({
      name: e,
      config: t
    });
    return null;
  }
}
test274: {
  function f() {
    fa[e] = new E(S(n, t));
    ga[e] && ga[e].forEach(function (e) {
      at(e.name, e.config);
    });
    ot(e);
    return fa[e];
  }
}
test275: {
  function f() {
    delete fa[e];
    return null;
  }
}
test276: {
  function f() {
    i && g(e).overflow === -2 && (t = i[qo] < 0 || i[qo] > 11 ? qo : i[Yo] < 1 || i[Yo] > le(i[Uo], i[qo]) ? Yo : i[jo] < 0 || i[jo] > 24 || 24 === i[jo] && (0 !== i[Vo] || 0 !== i[Xo] || 0 !== i[Qo]) ? jo : i[Vo] < 0 || i[Vo] > 59 ? Vo : i[Xo] < 0 || i[Xo] > 59 ? Xo : i[Qo] < 0 || i[Qo] > 999 ? Qo : -1, g(e)._overflowDayOfYear && (t < Uo || t > Yo) && (t = Yo), g(e)._overflowWeeks && t === -1 && (t = Ko), g(e)._overflowWeekday && t === -1 && (t = Jo), g(e).overflow = t);
    return e;
  }
}
test277: {
  function f() {
    a && s.push(parseInt(a, 10));
    return s;
  }
}
test278: {
  function f() {
    g(i).weekdayMismatch = !0;
    i._isValid = !1;
    return !1;
  }
}
test279: {
  function f() {
    g(e).invalidFormat = !0;
    e._d = new Date(NaN);
    return;
  }
}
test280: {
  function f() {
    t._nextDay && (t.add(1, "d"), t._nextDay = void 0);
    return t;
  }
}
test281: {
  function f() {
    e._locale = e._locale || rt(e._l);
    if (null === t || void 0 === i && "" === t) {
      return v({
        nullInput: !0
      });
    }
    "string" == typeof t && (e._i = t = e._locale.preparse(t));
    if (b(t)) {
      return new w(ct(t));
    }
    u(t) ? e._d = t : a(i) ? Ct(e) : i ? Mt(e) : Et(e);
    _(e) || (e._d = null);
    return e;
  }
}
test282: {
  function f() {
    t !== !0 && t !== !1 || (n = t, t = void 0);
    i !== !0 && i !== !1 || (n = i, i = void 0);
    (s(e) && l(e) || a(e) && 0 === e.length) && (e = void 0);
    r._isAMomentObject = !0;
    r._useUTC = r._isUTC = o;
    r._l = i;
    r._i = e;
    r._f = t;
    r._strict = n;
    return At(r);
  }
}
test283: {
  function f() {
    e < 0 && (e = -e, i = "-");
    return i + x(~~(e / 60), 2) + t + x(~~e % 60, 2);
  }
}
test284: {
  function f() {
    !this._isUTC && i && (o = qt(this));
    this._offset = e;
    this._isUTC = !0;
    null != o && this.add(o, "m");
    a !== e && (!i || this._changeInProgress ? ri(this, ii(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null));
    return this;
  }
}
test285: {
  function f() {
    this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(qt(this), "m"));
    return this;
  }
}
test286: {
  function f() {
    y(t, this);
    t = St(t);
    t._a ? (e = t._isUTC ? m(t._a) : xt(t._a), this._isDSTShifted = this.isValid() && zt(t._a, e.toArray()) > 0) : this._isDSTShifted = !1;
    return this._isDSTShifted;
  }
}
test287: {
  function f() {
    Ft(e) ? a = {
      ms: e._milliseconds,
      d: e._days,
      M: e._months
    } : d(e) || !isNaN(+e) ? (a = {}, t ? a[t] = +e : a.milliseconds = +e) : (s = xa.exec(e)) ? (i = "-" === s[1] ? -1 : 1, a = {
      y: 0,
      d: X(s[Yo]) * i,
      h: X(s[jo]) * i,
      m: X(s[Vo]) * i,
      s: X(s[Xo]) * i,
      ms: X(Ht(1e3 * s[Qo])) * i
    }) : (s = La.exec(e)) ? (i = "-" === s[1] ? -1 : 1, a = {
      y: ni(s[2], i),
      M: ni(s[3], i),
      w: ni(s[4], i),
      d: ni(s[5], i),
      h: ni(s[6], i),
      m: ni(s[7], i),
      s: ni(s[8], i)
    }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (o = ai(xt(a.from), xt(a.to)), a = {}, a.ms = o.milliseconds, a.M = o.months);
    n = new kt(a);
    Ft(e) && r(e, "_locale") && (n._locale = e._locale);
    Ft(e) && r(e, "_isValid") && (n._isValid = e._isValid);
    return n;
  }
}
test288: {
  function f() {
    i.months = t.month() - e.month() + 12 * (t.year() - e.year());
    e.clone().add(i.months, "M").isAfter(t) && --i.months;
    i.milliseconds = +t - +e.clone().add(i.months, "M");
    return i;
  }
}
test289: {
  function f() {
    null === n || isNaN(+n) || (C(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = i, i = n, n = a);
    o = ii(i, n);
    ri(this, o, e);
    return this;
  }
}
test290: {
  function f() {
    t && (i = 0 === e.filter(function (t) {
      return !d(t) && li(e);
    }).length);
    return t && i;
  }
}
test291: {
  function f() {
    t - a < 0 ? (i = e.clone().add(o - 1, "months"), n = (t - a) / (a - i)) : (i = e.clone().add(o + 1, "months"), n = (t - a) / (i - a));
    return -(o + n) || 0;
  }
}
test292: {
  function f() {
    this.isLocal() || (o = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", a = "Z");
    e = "[" + o + '("]';
    t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
    i = "-MM-DD[T]HH:mm:ss.SSS";
    n = a + '[")]';
    return this.format(e + t + i + n);
  }
}
test293: {
  function f() {
    this._d.setTime(i);
    t.updateOffset(this, !0);
    return this;
  }
}
test294: {
  function f() {
    this._d.setTime(i);
    t.updateOffset(this, !0);
    return this;
  }
}
test295: {
  function f() {
    r(this, "_erasNameRegex") || dn.call(this);
    if (e) {
      return this._erasNameRegex;
    }
    return this._erasRegex;
  }
}
test296: {
  function f() {
    r(this, "_erasAbbrRegex") || dn.call(this);
    if (e) {
      return this._erasAbbrRegex;
    }
    return this._erasRegex;
  }
}
test297: {
  function f() {
    r(this, "_erasNarrowRegex") || dn.call(this);
    if (e) {
      return this._erasNarrowRegex;
    }
    return this._erasRegex;
  }
}
test298: {
  function f() {
    this.year(s.getUTCFullYear());
    this.month(s.getUTCMonth());
    this.date(s.getUTCDate());
    return this;
  }
}
test299: {
  function f() {
    this._milliseconds = ja(this._milliseconds);
    this._days = ja(this._days);
    this._months = ja(this._months);
    e.milliseconds = ja(e.milliseconds);
    e.seconds = ja(e.seconds);
    e.minutes = ja(e.minutes);
    e.hours = ja(e.hours);
    e.months = ja(e.months);
    e.years = ja(e.years);
    return this;
  }
}
test300: {
  function f() {
    e._milliseconds += n * o._milliseconds;
    e._days += n * o._days;
    e._months += n * o._months;
    return e._bubble();
  }
}
test301: {
  function f() {
    a >= 0 && s >= 0 && r >= 0 || a <= 0 && s <= 0 && r <= 0 || (a += 864e5 * zn(Un(r) + s), s = 0, r = 0);
    l.milliseconds = a % 1e3;
    e = V(a / 1e3);
    l.seconds = e % 60;
    t = V(e / 60);
    l.minutes = t % 60;
    i = V(t / 60);
    l.hours = i % 24;
    s += V(i / 24);
    o = V(Gn(s));
    r += o;
    s -= zn(Un(o));
    n = V(r / 12);
    r %= 12;
    l.days = s;
    l.months = r;
    l.years = n;
    return this;
  }
}
test302: {
  function f() {
    e = G(e);
    if (this.isValid()) {
      return this[e + "s"]();
    }
    return NaN;
  }
}
test303: {
  function f() {
    null != i.w && (h = h || d <= 1 && ["w"] || d < i.w && ["ww", d]);
    h = h || c <= 1 && ["M"] || c < i.M && ["MM", c] || u <= 1 && ["y"] || ["yy", u];
    h[2] = t;
    h[3] = +e > 0;
    h[4] = n;
    return Jn.apply(null, h);
  }
}
test304: {
  function f() {
    "object" == typeof e && (t = e, e = !1);
    "boolean" == typeof e && (o = e);
    "object" == typeof t && (a = Object.assign({}, ds, t), null != t.s && null == t.ss && (a.ss = t.s - 1));
    i = this.localeData();
    n = Zn(this, !o, a, i);
    o && (n = i.pastFuture(+this, n));
    return i.postformat(n);
  }
}
test305: {
  function f() {
    //! moment.js
    hs.isValid = Pt;
    hs.abs = Bn;
    hs.add = Fn;
    hs.subtract = Hn;
    hs.as = qn;
    hs.asMilliseconds = Va;
    hs.asSeconds = Xa;
    hs.asMinutes = Qa;
    hs.asHours = Ka;
    hs.asDays = Ja;
    hs.asWeeks = Za;
    hs.asMonths = $a;
    hs.asQuarters = es;
    hs.asYears = ts;
    hs.valueOf = Yn;
    hs._bubble = Wn;
    hs.clone = Vn;
    hs.get = Xn;
    hs.milliseconds = is;
    hs.seconds = ns;
    hs.minutes = os;
    hs.hours = as;
    hs.days = ss;
    hs.weeks = Kn;
    hs.months = rs;
    hs.years = ls;
    hs.humanize = to;
    hs.toISOString = no;
    hs.toString = no;
    hs.toJSON = no;
    hs.locale = Oi;
    hs.localeData = Ri;
    hs.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", no);
    hs.lang = Da;
    L("X", 0, 0, "unix");
    L("x", 0, 0, "valueOf");
    ee("x", Bo);
    ee("X", Ho);
    oe("X", function (e, t, i) {
      i._d = new Date(1e3 * parseFloat(e));
    });
    oe("x", function (e, t, i) {
      i._d = new Date(X(e));
    });
    t.version = "2.29.4";
    o(xt);
    t.fn = qa;
    t.min = Ot;
    t.max = Rt;
    t.now = Sa;
    t.utc = m;
    t.unix = In;
    t.months = Ln;
    t.isDate = u;
    t.locale = ot;
    t.invalid = v;
    t.duration = ii;
    t.isMoment = b;
    t.weekdays = Rn;
    t.parseZone = An;
    t.localeData = rt;
    t.isDuration = Ft;
    t.monthsShort = On;
    t.weekdaysMin = Pn;
    t.defineLocale = at;
    t.updateLocale = st;
    t.locales = lt;
    t.weekdaysShort = Dn;
    t.normalizeUnits = G;
    t.relativeTimeRounding = $n;
    t.relativeTimeThreshold = eo;
    t.calendarFormat = pi;
    t.prototype = qa;
    t.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      DATE: "YYYY-MM-DD",
      TIME: "HH:mm",
      TIME_SECONDS: "HH:mm:ss",
      TIME_MS: "HH:mm:ss.SSS",
      WEEK: "GGGG-[W]WW",
      MONTH: "YYYY-MM"
    };
    return t;
  }
}
test306: {
  function f() {
    2 === r && (l = l[i ? 0 : 1]);
    return l.replace(/%d/i, t);
  }
}
test307: {
  function f() {
    2 === r && (l = l[o ? 0 : 1]);
    return l.replace(/%d/i, n);
  }
}
test308: {
  function f() {
    2 === r && (l = l[o ? 0 : 1]);
    return l.replace(/%d/i, t);
  }
}
test309: {
  function f() {
    12 === e && (e = 0);
    if ("├ô┬¬Ôûæ├ô┬¬┬Ñ├ô┬¬├▒" === t && e >= 4 || "├ô┬¬┬¬├ô┬║├╝├ô┬¬┬¼├ô┬║├╝├ô┬¬Ôûæ" === t && e < 5 || "├ô┬¬┬╝├ô┬¬ÔöÉ├ô┬¬├▓├ô┬¬┬Ñ├ô┬¬Ôûô" === t) {
      return e + 12;
    }
    return e;
  }
}
test310: {
  function f() {
    12 === e && (e = 0);
    if ("├ô┬¬Ôûæ├ô┬¬┬Ñ├ô┬¬├▒" === t) {
      if (e < 4) {
        return e;
      }
      return e + 12;
    }
    if ("├ô┬¬┬í├ô┬║├»├ô┬¬Ôûæ" === t) {
      return e;
    }
    if ("├ô┬¬┬®├ô┬¬├▓├ô┬¬┬Ñ├ô┬¬Ôûô" === t) {
      return e;
    }
    if ("├ô┬¬┬¬├ô┬║├╝├ô┬¬┬¼├ô┬║├╝├ô┬¬Ôûæ" === t) {
      if (e >= 3) {
        return e;
      }
      return e + 12;
    }
    if ("├ô┬¬┬╝├ô┬¬ÔöÉ├ô┬¬├▓├ô┬¬┬Ñ├ô┬¬Ôûô" === t) {
      return e + 12;
    }
    if ("├ô┬¬┬®├ô┬¬┬┐├ô┬║├¼├ô┬¬┬║├ô┬║├¼├ô┬¬┬╗├ô┬¬┬Ñ" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test311: {
  function f() {
    12 === e && (e = 0);
    if ("├ô┬ó├┐├ô┬ó├£├ô┬ó├┤├ôÔòØ├»├ô┬ó├┐├ô┬óÔòØ" === t && e >= 4 || "├ô┬ó├½├ô┬óÔûô├ô┬ó├┤├ôÔòØ├»├ô┬ó├®├ô┬óÔöñ├ô┬ó├ñ" === t && e < 5 || "├ô┬ó├ª├ô┬ó├®├ô┬óÔòØ├ô┬ó├ñ├ôÔòØ├»├ô┬ó├ª├ô┬ó├®" === t) {
      return e + 12;
    }
    return e;
  }
}
test312: {
  function f() {
    "w" !== t && "W" !== t || (i = "a");
    return e + i;
  }
}
test313: {
  function f() {
    t > 20 ? i = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (i = n[t]);
    return e + i;
  }
}
test314: {
  function f() {
    t(n) && (n = n.apply(i));
    return n.replace("{}", o % 12 === 1 ? "┬ñ├ó┬ñ├ñÔò¼├Ç" : "┬ñ├ó┬ñ├ñÔò¼Ôòú┬ñ├®");
  }
}
test315: {
  function f() {
    12 === e && (e = 0);
    if ("├ô├▒Ôûæ├ô├▒┬Ñ├ô├▒├▒├ô├æ├ç" === t) {
      if (e < 4) {
        return e;
      }
      return e + 12;
    }
    if ("├ô├▒┬®├ô├▒├▓├ô├▒┬Ñ├ô├▒Ôöé├ô├æ├ç├ô├▒├®" === t) {
      return e;
    }
    if ("├ô├▒┬¬├ô├▒┬┐├ô├▒┬¼├ô├▒┬Ñ├ô├▒Ôûæ├ô├▒┬Ñ├ô├▒├®" === t) {
      if (e > 12) {
        return e;
      }
      return e + 12;
    }
    if ("├ô├▒┬®├ô├▒┬Ñ├ô├▒├®├ô├▒┬ú├ô├æ├º" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test316: {
  function f() {
    12 === e && (e = 0);
    if ("rati" === t) {
      if (e < 4) {
        return e;
      }
      return e + 12;
    }
    if ("sokallim" === t) {
      return e;
    }
    if ("donparam" === t) {
      if (e > 12) {
        return e;
      }
      return e + 12;
    }
    if ("sanje" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test317: {
  function f() {
    12 === e && (e = 0);
    if ("├ô┬¼Ôûæ├ô┬¼┬Ñ├ô┬¼├▒" === t) {
      if (e < 4) {
        return e;
      }
      return e + 12;
    }
    if ("├ô┬¼┬®├ô┬¼├ü├ô┬¼┬Ñ├ô┬¼Ôûæ" === t) {
      return e;
    }
    if ("├ô┬¼┬╝├ô┬¼┬¼├ô┬¢├»├ô┬¼Ôûæ" === t) {
      if (e >= 10) {
        return e;
      }
      return e + 12;
    }
    if ("├ô┬¼┬®├ô┬¼┬Ñ├ô┬¼├®├ô┬¼┬ú" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test318: {
  function f() {
    12 === e && (e = 0);
    if ("├ô├▒Ôûæ├ô├▒┬Ñ├ô├▒├▒" === t) {
      if (e < 4) {
        return e;
      }
      return e + 12;
    }
    if ("├ô├▒┬®├ô├æ├╝├ô├▒┬╝├ô├▒Ôòú" === t) {
      return e;
    }
    if ("├ô├▒┬¬├ô├æ├»├ô├▒┬¼├ô├▒Ôòú├ô├▒Ôûæ" === t) {
      if (e >= 10) {
        return e;
      }
      return e + 12;
    }
    if ("├ô├▒├é├ô├▒┬Ñ├ô├▒┬½" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test319: {
  function f() {
    12 === e && (e = 0);
    if ("pagi" === t) {
      return e;
    }
    if ("siang" === t) {
      if (e >= 11) {
        return e;
      }
      return e + 12;
    }
    if ("sore" === t || "malam" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test320: {
  function f() {
    12 === e && (e = 0);
    if ("enjing" === t) {
      return e;
    }
    if ("siyang" === t) {
      if (e >= 11) {
        return e;
      }
      return e + 12;
    }
    if ("sonten" === t || "ndalu" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test321: {
  function f() {
    12 === e && (e = 0);
    if ("├ôÔûôÔûæ├ôÔûô┬Ñ├ôÔûô├▒├ôÔöé├¼├ôÔûôÔûæ├ôÔûôÔöÉ" === t) {
      if (e < 4) {
        return e;
      }
      return e + 12;
    }
    if ("├ôÔûô┬╝├ôÔöé├Ñ├ôÔûôÔöé├ôÔûôÔöÉ├ôÔûô├╣├ôÔöé├¼├ôÔûô├╣├ôÔöé├Ñ" === t) {
      return e;
    }
    if ("├ôÔûô┬½├ôÔûô┬║├ôÔöé├¼├ôÔûô┬╗├ôÔûô┬Ñ├ôÔûôÔòú├ôÔöé├¼├ôÔûô┬┐" === t) {
      if (e >= 10) {
        return e;
      }
      return e + 12;
    }
    if ("├ôÔûô┬®├ôÔûô├®├ôÔûô┬ú├ôÔöé├Ñ" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test322: {
  function f() {
    e /= 1e3;
    return o(e);
  }
}
test323: {
  function f() {
    12 === e && (e = 0);
    if ("├ôÔöñÔûæ├ôÔöñ┬Ñ├ôÔöñ├▒├ô├ü├¼├ôÔöñÔûæ├ôÔöñÔöÉ" === t && e >= 4 || "├ôÔöñ├½├ôÔöñ├£├ô├ü├¼├ôÔöñ├£ ├ôÔöñ├▓├ôÔöñÔöñ├ôÔöñÔöÉ├ôÔöñ├ù├ô├ü├¼├ôÔöñ├ù├ô├ü├¼" === t || "├ôÔöñ├ü├ô├ü├¬├ôÔöñ├▓├ô├ü├╝├ôÔöñ┬┐├ô├ü├¼├ôÔöñ┬┐├ô├ü├º├ôÔöñÔûæ├ôÔöñ├®" === t) {
      return e + 12;
    }
    return e;
  }
}
test324: {
  function f() {
    12 === e && (e = 0);
    if ("├ô├▒┬¼├ô├▒Ôòú├ô├▒┬Ñ├ô├▒ãÆ├ô├æ├º" === t || "├ô├▒┬®├ô├▒├▓├ô├▒┬Ñ├ô├▒Ôöé├ô├æ├ç" === t) {
      return e;
    }
    if ("├ô├▒┬¬├ô├æ├╝├ô├▒┬¼├ô├▒┬Ñ├ô├▒Ôûæ├ô├æ├ç" === t || "├ô├▒┬®├ô├▒┬Ñ├ô├▒┬╗├ô├▒├®├ô├▒├▓├ô├▒┬Ñ├ô├▒Ôöé├ô├æ├ç" === t || "├ô├▒Ôûæ├ô├▒┬Ñ├ô├▒├▒├ô├æ├¼├ô├▒Ôûæ├ô├æ├ç" === t) {
      if (e >= 12) {
        return e;
      }
      return e + 12;
    }
    0;
    return;
  }
}
test325: {
  function f() {
    12 === e && (e = 0);
    if ("pagi" === t) {
      return e;
    }
    if ("tengahari" === t) {
      if (e >= 11) {
        return e;
      }
      return e + 12;
    }
    if ("petang" === t || "malam" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test326: {
  function f() {
    12 === e && (e = 0);
    if ("pagi" === t) {
      return e;
    }
    if ("tengahari" === t) {
      if (e >= 11) {
        return e;
      }
      return e + 12;
    }
    if ("petang" === t || "malam" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test327: {
  function f() {
    12 === e && (e = 0);
    if ("├ô├▒Ôûæ├ô├▒┬Ñ├ô├▒├▒├ô├▒ÔöÉ" === t) {
      if (e < 4) {
        return e;
      }
      return e + 12;
    }
    if ("├ô├▒┬╝├ô├▒ÔöÉ├ô├▒Ôòú├ô├▒┬Ñ├ô├▒┬┐" === t) {
      return e;
    }
    if ("├ô├▒┬¬├ô├▒ÔöÉ├ô├▒├½├ô├▒├╝├ô├▒┬®├ô├æ├»" === t) {
      if (e >= 10) {
        return e;
      }
      return e + 12;
    }
    if ("├ô├▒┬®├ô├▒┬Ñ├ô├▒├╝├ô├▒├ÿ" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test328: {
  function f() {
    "w" !== t && "W" !== t || (i = "a");
    return e + i;
  }
}
test329: {
  function f() {
    12 === e && (e = 0);
    if ("├ô┬┐Ôûæ├ô┬┐┬Ñ├ô┬┐├▒" === t) {
      if (e < 4) {
        return e;
      }
      return e + 12;
    }
    if ("├ô┬┐┬®├ô┬┐├ü├ô┬«├º├ô┬┐Ôûæ" === t) {
      return e;
    }
    if ("├ô┬┐┬¬├ô┬«├╝├ô┬┐┬¼├ô┬┐Ôòú├ô┬┐ÔöÉ├ô┬┐Ôûæ" === t) {
      if (e >= 10) {
        return e;
      }
      return e + 12;
    }
    if ("├ô┬┐┬®├ô┬┐ÔòØ├ô┬┐┬Ñ├ô┬┐┬½" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test330: {
  function f() {
    (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (o = " de ");
    return e + o + n[i];
  }
}
test331: {
  function f() {
    12 === e && (e = 0);
    if ("ekuseni" === t) {
      return e;
    }
    if ("emini" === t) {
      if (e >= 11) {
        return e;
      }
      return e + 12;
    }
    if ("entsambama" === t || "ebusuku" === t) {
      if (0 === e) {
        return 0;
      }
      return e + 12;
    }
    0;
    return;
  }
}
test332: {
  function f() {
    12 === e && (e = 0);
    if ("├ô┬½┬╗├ô┬½┬Ñ├ô┬½┬½├ô┬½┬½├ô┬╗├¼" === t) {
      if (e < 2) {
        return e;
      }
      return e + 12;
    }
    if ("├ô┬½├ü├ô┬╗├¬├ô┬½├▓├ô┬½ÔûÆ├ô┬╗├¬" === t || "├ô┬½├▓├ô┬½┬Ñ├ô┬½Ôûô├ô┬╗├¬" === t) {
      return e;
    }
    if ("├ô┬½┬┐├ô┬½├║├ô┬╗├¼├ô┬½┬¼├ô┬½├▓├ô┬½Ôûô├ô┬╗├¼" === t && e >= 10) {
      return e;
    }
    return e + 12;
  }
}
test333: {
  function f() {
    12 === e && (e = 0);
    if ("├ôÔûæÔûæ├ôÔûæ┬Ñ├ôÔûæ├▒├ôÔûÆ├¼├ôÔûæÔûæ├ôÔûæÔöÉ" === t) {
      if (e < 4) {
        return e;
      }
      return e + 12;
    }
    if ("├ôÔûæ├½├ôÔûæ┬¬├ôÔûæ┬╗├ôÔûæ├®" === t) {
      return e;
    }
    if ("├ôÔûæ┬½├ôÔûæ┬║├ôÔûÆ├¼├ôÔûæ┬╗├ôÔûæ┬Ñ├ôÔûæÔòú├ôÔûÆ├¼├ôÔûæ┬┐├ôÔûæ├®" === t) {
      if (e >= 10) {
        return e;
      }
      return e + 12;
    }
    if ("├ôÔûæ┬®├ôÔûæ┬Ñ├ôÔûæ┬╗├ôÔûæ├®├ôÔûæ├▒├ôÔûÆ├¼├ôÔûæÔûæ├ôÔûæ├®" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test334: {
  function f() {
    12 === e && (e = 0);
    if ("├É├¬├░Ôûæ├░ÔûÆ" === t) {
      if (e < 4) {
        return e;
      }
      return e + 12;
    }
    if ("├É├╝├É├ó├░ÔûÆ├èÔöé" === t) {
      return e;
    }
    if ("├É├ç├ï┬╗├░├Ç" === t) {
      if (e >= 11) {
        return e;
      }
      return e + 12;
    }
    if ("├░ÔûÆ├░├ü├░Ôöé├░┬Ñ├èÔöé" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test335: {
  function f() {
    t > 0 && (o += a[t] + "vatlh");
    i > 0 && (o += ("" !== o ? " " : "") + a[i] + "maH");
    n > 0 && (o += ("" !== o ? " " : "") + a[n]);
    if ("" === o) {
      return "pagh";
    }
    return o;
  }
}
test336: {
  function f() {
    12 === e && (e = 0);
    if ("Ôöÿ├¿Ôûê├ë├ÅÔûÆÔöÿ├½Ôöÿ├á Ôöÿ├óÔûê├ëÔöî├ÑÔûê├▓" === t || "├ÅÔöéÔûê├▓Ôöî┬ÑÔûê├▓├ÅÔûÆ" === t || "Ôöî├ÑÔûê├¬├ÅÔöñ├Å┬¼Ôöÿ├½Ôöÿ├Ñ ├Å┬┐Ôûê├º├ÅÔûÆÔûê├ºÔöÿ├Ñ" === t) {
      return e;
    }
    if ("Ôöî├ÑÔûê├¬├ÅÔöñ├Å┬¼Ôöÿ├½Ôöÿ├Ñ Ôöÿ├óÔûê├ëÔöÿ├¿Ôöÿ├½Ôöÿ├Ñ" === t || "Ôöÿ├óÔûê├▓Ôöî├Ñ" === t) {
      return e + 12;
    }
    if (e >= 11) {
      return e;
    }
    return e + 12;
  }
}
test337: {
  function f() {
    12 === e && (e = 0);
    if ("├ò├º├«┬Á├û┬┐" === t || "┬Á├╣┬«├Á┬®├¿" === t || "├Á┬®├¿├ò├¼├¬" === t) {
      return e;
    }
    if ("├Á┬®├»├ò├¼├¬" === t || "┬Á├û├£├Á┬®├¿" === t) {
      return e + 12;
    }
    if (e >= 11) {
      return e;
    }
    return e + 12;
  }
}
test338: {
  function f() {
    12 === e && (e = 0);
    if ("├ò├º├«┬Á├û┬┐" === t || "┬Á├╣┬«├Á┬®├¿" === t || "├Á┬®├¿├ò├¼├¬" === t) {
      return e;
    }
    if ("├Á┬®┬í├ò├¼├¬" === t) {
      if (e >= 11) {
        return e;
      }
      return e + 12;
    }
    if ("├Á┬®├»├ò├¼├¬" === t || "┬Á├û├£├Á┬®├¿" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test339: {
  function f() {
    12 === e && (e = 0);
    if ("├ò├º├«┬Á├û┬┐" === t || "┬Á├╣┬«├Á┬®├¿" === t || "├Á┬®├¿├ò├¼├¬" === t) {
      return e;
    }
    if ("├Á┬®┬í├ò├¼├¬" === t) {
      if (e >= 11) {
        return e;
      }
      return e + 12;
    }
    if ("├Á┬®├»├ò├¼├¬" === t || "┬Á├û├£├Á┬®├¿" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test340: {
  function f() {
    12 === e && (e = 0);
    if ("├ò├º├«┬Á├û┬┐" === t || "┬Á├╣┬«├Á┬®├¿" === t || "├Á┬®├¿├ò├¼├¬" === t) {
      return e;
    }
    if ("├Á┬®┬í├ò├¼├¬" === t) {
      if (e >= 11) {
        return e;
      }
      return e + 12;
    }
    if ("├Á┬®├»├ò├¼├¬" === t || "┬Á├û├£├Á┬®├¿" === t) {
      return e + 12;
    }
    0;
    return;
  }
}
test341: {
  function f() {
    t = t || function () {};
    n.done = i;
    return n;
  }
}
test342: {
  function f() {
    n = void 0 !== e.defaultValue ? Math.max(this.min, Math.min(this.max, e.defaultValue)) : this.min;
    void 0 !== e.placeholder && void 0 === e.defaultValue ? (this.numberInput.setPlaceholder(e.placeholder), this.currentValue = "") : this.currentValue = n;
    this.numberInput.setValue(this.currentValue);
    this.numberInput.minValue = this.min;
    this.numberInput.maxValue = this.max;
    this.show();
    e.hasOwnProperty("x") && e.hasOwnProperty("y") && this.position(e.x, e.y);
    this.setStyles(f);
    if (this.openTweener) {
      this.openTweener.cancel();
      return t();
    }
    this.openTweener = u.tween(this, g, {
      time: 150,
      delay: 0,
      easing: "ease-out"
    }, t);
    return;
  }
}
test343: {
  function f() {
    i.removeListener("change", t);
    return e(n);
  }
}
test344: {
  function f() {
    d = d || {};
    m = m || n;
    if (d.allowDoubleTap && b && o && b === o) {
      p(!0);
      u.close();
      return;
    }
    b = o;
    w.enable();
    y.hide();
    "move" === e ? (h.setText(s("ui.common.move")), f.show(), g.setText(s("ui.short.movementPoints") + s("ui.common.colon") + "-" + i.mp), i.ap > 0 ? (v.setText(s("ui.short.actionPoints") + s("ui.common.colon") + "-" + i.ap), _.show()) : _.hide()) : (h.setText(i.name), f.hide(), _.show(), v.setText(s("ui.short.actionPoints") + s("ui.common.colon") + "-" + i.apCost));
    u.show();
    a = r(u, l.x, l.y);
    u.isOpen ? u.setStyles({
      webkitTransformOrigin: l.x + "px " + l.y + "px"
    }) : u.setStyles({
      webkitTransform: "scale(0) translate3d(" + a.x + "px," + a.y + "px,0)",
      webkitTransformOrigin: l.x + "px " + l.y + "px"
    });
    c.tween(u, {
      webkitTransform: "scale(1) translate3d(" + a.x + "px," + a.y + "px,0)"
    }, {
      time: 100,
      easing: "linear"
    }, m);
    u.isOpen = !0;
    d.startHidden && u.hide();
    t = p;
    return;
  }
}
test345: {
  function f() {
    I.closeTooltip();
    return !1;
  }
}
test346: {
  function f() {
    t(n);
    I.hideBackgroundOnce();
    return !1;
  }
}
test347: {
  function f() {
    I.openState && e();
    return !1;
  }
}
test348: {
  function f() {
    N = null;
    I.openState && e();
    return;
  }
}
test349: {
  function f() {
    i();
    c(n, _);
    return;
  }
}
test350: {
  function f() {
    b = f;
    M = "left";
    R.x = 0;
    O.min = 0;
    O.max = L.x;
    C = s.mapHeight / 3;
    I = 2 * C;
    E = "x";
    N = "y";
    return;
  }
}
test351: {
  function f() {
    b = v;
    M = "right";
    R.x = s.mapWidth;
    O.min = -L.x;
    O.max = 0;
    C = s.mapHeight / 3;
    I = 2 * C;
    E = "x";
    N = "y";
    return;
  }
}
test352: {
  function f() {
    b = y;
    M = "top";
    R.y = 0;
    O.min = 0;
    O.max = L.y;
    C = s.mapWidth / 3;
    I = 2 * C;
    E = "y";
    N = "x";
    return;
  }
}
test353: {
  function f() {
    b = w;
    M = "bottom";
    R.y = s.mapHeight;
    O.min = -L.y;
    O.max = 0;
    C = s.mapWidth / 3;
    I = 2 * C;
    E = "y";
    N = "x";
    return;
  }
}
test354: {
  function f() {
    e -= s.mapLeft + s.bodyPaddingLeft;
    t -= s.mapTop;
    return window.isoEngine.mapScene.convertCanvasToSceneCoordinate(e, t);
  }
}
test355: {
  function f() {
    o.spells[e] = a.spells[e].clone();
    o.spells[e].setLevel(a.spells[e].level);
    return i(null, o.spells[e]);
  }
}
test356: {
  function f() {
    o.spells[e] = l.spells[e].clone();
    return i(null, o.spells[e]);
  }
}
test357: {
  function f() {
    c.mainCharacterId !== o.targetId && c.controlledCharacterId !== o.targetId || c.emitCharacteristicsUpdate(c.getControlledCharacter());
    delete o.timeCreationStarted;
    return t();
  }
}
test358: {
  function f() {
    t.cast(this.turnCount, [], !1);
    t.forceCooldown(e.cooldown);
    n.updateSpellAvailability(t.id);
    return i();
  }
}
test359: {
  function f() {
    i.addBuff(t, a);
    return o();
  }
}
test360: {
  function f() {
    t._restoreBuffs(e.effects);
    return M.flush();
  }
}
test361: {
  function f() {
    r < s && (r += o.length);
    a < s && (a += o.length);
    return !(a < r);
  }
}
test362: {
  function f() {
    console.warn("BasicBuff.prototype.getDelta should not be called directly");
    return 0;
  }
}
test363: {
  function f() {
    this._copyTo(e);
    return e;
  }
}
test364: {
  function f() {
    t += "description: " + e.description + " ";
    t += "type: " + e._type + " ";
    t += "keys: " + JSON.stringify(Object.keys(e));
    M.error(new Error(t));
    return !1;
  }
}
test365: {
  function f() {
    e.description || (o = e.getParams(), d(e, o, t, n));
    if ("" === e.subEffectDescription) {
      o = e.getParams();
      return u(e, o, t, n, i);
    }
    return i();
  }
}
test366: {
  function f() {
    l += " for effect " + i.effectId + " from " + i.getCaller();
    M.error(l);
    return !1;
  }
}
test367: {
  function f() {
    h = "Unknown monster";
    return e.setDescription(["", u, h]);
  }
}
test368: {
  function f() {
    o("Monsters", s, e);
    return a();
  }
}
test369: {
  function f() {
    l.push(f("ui.stats.HP") + f("ui.common.colon") + p);
    l.push(f("ui.stats.shortAP") + f("ui.common.colon") + d.actionPoints);
    l.push(f("ui.stats.shortMP") + f("ui.common.colon") + d.movementPoints);
    l.push(f("ui.stats.dodgeAP") + f("ui.common.colon") + (d.paDodge + m));
    l.push(f("ui.stats.dodgeMP") + f("ui.common.colon") + (d.pmDodge + m));
    l.push(f("ui.stats.neutralReductionPercent") + f("ui.common.colon") + d.neutralResistance);
    l.push(f("ui.stats.earthReductionPercent") + f("ui.common.colon") + d.earthResistance);
    l.push(f("ui.stats.fireReductionPercent") + f("ui.common.colon") + d.fireResistance);
    l.push(f("ui.stats.waterReductionPercent") + f("ui.common.colon") + d.waterResistance);
    l.push(f("ui.stats.airReductionPercent") + f("ui.common.colon") + d.airResistance);
    e.subEffectDescription = l;
    return a();
  }
}
test370: {
  function f() {
    o("SpellBombs", _, e);
    return a();
  }
}
test371: {
  function f() {
    o("Spells", g, e);
    return a();
  }
}
test372: {
  function f() {
    o("SpellLevels", v, e);
    return a();
  }
}
test373: {
  function f() {
    e.subEffectDescription = n.length > 0 && n;
    return a();
  }
}
test374: {
  function f() {
    e.subEffectDescription = !1;
    return a();
  }
}
test375: {
  function f() {
    "L" === i && (n += 1);
    if (void 0 === t.EFFECT_SHAPES[i]) {
      M.error(new Error("EFFECT_SHAPES: missing for " + i));
      return "";
    }
    if (t.EFFECT_SHAPES[i].desc) {
      return f(t.EFFECT_SHAPES[i].desc, n);
    }
    return "";
  }
}
test376: {
  function f() {
    i && (e.effect = {}, b.shallowCopyProperties(i, e.effect, b.getOwnProperties(i)));
    return e;
  }
}
test377: {
  function f() {
    h(i, t);
    return i;
  }
}
test378: {
  function f() {
    this.effectId === T.ACTION_INCARNATION ? e = p(this, "EffectInstanceDice") : (e = p(this, t), e.month--);
    return e;
  }
}
test379: {
  function f() {
    e = p(this, t);
    e.value = this.text;
    return e;
  }
}
test380: {
  function f() {
    e = p(this, t);
    e.diceConst = this.value;
    return e;
  }
}
test381: {
  function f() {
    e = e.substr(1);
    if (3 === e.length) {
      return [parseInt(e[0] + e[0], 16) / 255, parseInt(e[1] + e[1], 16) / 255, parseInt(e[2] + e[2], 16) / 255, 1];
    }
    return [parseInt(e.substr(0, 2), 16) / 255, parseInt(e.substr(2, 2), 16) / 255, parseInt(e.substr(4, 2), 16) / 255, 1];
  }
}
test382: {
  function f() {
    o |= (15 & e) << 24;
    o |= (255 & t) << 16;
    o |= (255 & i) << 8;
    return o |= 255 & n;
  }
}
test383: {
  function f() {
    console.warn("[hexToRgb] Invalid hex value");
    return null;
  }
}
test384: {
  function f() {
    this._copyTo(e);
    return e;
  }
}
test385: {
  function f() {
    this._copyTo(e);
    return e;
  }
}
test386: {
  function f() {
    this._copyTo(e);
    return e;
  }
}
test387: {
  function f() {
    void 0 === a && (a = 0);
    void 0 === s && (s = 1);
    void 0 === r && (r = !0);
    void 0 === n && (n = -1);
    return {
      name: e,
      targetId: i,
      effectId: n,
      params: t || [],
      checkParams: a,
      castingSpellId: o,
      order: A.length,
      firstParamToCheck: s,
      showChatMessage: r
    };
  }
}
test388: {
  function f() {
    n === m.CRITICAL_HIT ? o += " " + C("ui.fight.criticalHit") : n === m.CRITICAL_FAIL && (o += " " + C("ui.fight.criticalMiss"));
    return o;
  }
}
test389: {
  function f() {
    u = l.getFighter(c[1]);
    if (u) {
      return l.getFighterSpell(c[2], c[1], function (e, t) {
        if (e) {
          return i(e);
        }
        n = C("ui.fight.startTrap", d.name, t.getName(), u.name);
        return i(null, n);
      });
    }
    return i(new Error("Second fighter does not exist."));
  }
}
test390: {
  function f() {
    A = [];
    if (N) {
      return x.push([t, e]);
    }
    d(t, e);
    return;
  }
}
test391: {
  function f() {
    this.delay > 0 && !t && (this.delay + e >= 0 ? (this.delay--, this.effect.delay--) : (e += this.delay, this.delay = 0, this.effect.delay = 0));
    return 0 === e || a.prototype.incrementDuration.call(this, e, t);
  }
}
test392: {
  function f() {
    this._copyTo(e);
    return e;
  }
}
test393: {
  function f() {
    t.fighterTimeBar = t.createChild("div", {
      className: "fighterTimeBar"
    });
    t.fighterTimeValue = t.fighterTimeBar.createChild("div", {
      className: "fighterTimeValue"
    });
    t.fighterIllus = t.appendChild(new a({
      className: "fighterIllus",
      scale: "fitin"
    }));
    t.fighterIcon = t.createChild("div", {
      className: "fighterIcon"
    });
    t.fighterHPBar = t.createChild("div", {
      className: "fighterHPBar"
    });
    t.fighterHPValue = t.fighterHPBar.createChild("div", {
      className: "fighterHPValue"
    });
    t.fighterShieldBar = t.createChild("div", {
      className: "fighterShieldBar",
      hidden: !0
    });
    t.fighterShieldValue = t.fighterShieldBar.createChild("div", {
      className: "fighterShieldValue"
    });
    t.fighterNumber = t.createChild("div", {
      className: "fighterNumber"
    });
    t.fighterNumber.toggleDisplay(!!r.orderFighters);
    return t;
  }
}
test394: {
  function f() {
    e = t.createChild("tr");
    t.fighterName = e.createChild("td", {
      className: "fighterName",
      attr: {
        colspan: 3
      }
    });
    t.level = e.createChild("td", {
      className: "fighterLevel",
      attr: {
        colspan: 2
      }
    });
    e = t.createChild("tr");
    t.lifePoints = e.createChild("td", {
      className: ["label", "iconLifePoints"],
      attr: {
        colspan: 2
      }
    });
    t.shieldPoints = e.createChild("td", {
      className: ["label", "iconShieldPoints"]
    });
    t.fighterUsedAP = e.createChild("td", {
      className: ["label", "iconActionPoints"]
    });
    t.movementPoints = e.createChild("td", {
      className: ["label", "iconMovementPoints"]
    });
    e = t.createChild("tr");
    t.dodgePALostProbability = e.createChild("td", {
      className: ["label", "iconDodgeAP"]
    });
    t.dodgePMLostProbability = e.createChild("td", {
      className: ["label", "iconDodgeMP"]
    });
    t.tackleBlock = e.createChild("td", {
      className: ["label", "iconTackle"]
    });
    t.criticalDamageReduction = e.createChild("td", {
      className: ["label", "iconCriticalDamage"]
    });
    t.pushDamageReduction = e.createChild("td", {
      className: ["label", "iconPushDamageReduction"]
    });
    e = t.createChild("tr");
    t.neutral = e.createChild("td", {
      className: ["label", "iconYinyang"]
    });
    t.strength = e.createChild("td", {
      className: ["label", "iconStrength"]
    });
    t.intelligence = e.createChild("td", {
      className: ["label", "iconIntelligence"]
    });
    t.chance = e.createChild("td", {
      className: ["label", "iconChance"]
    });
    t.agility = e.createChild("td", {
      className: ["label", "iconAgility"]
    });
    e = t.createChild("tr");
    t.neutralPercent = e.createChild("td", {
      className: ["label", "iconYinyang"]
    });
    t.strengthPercent = e.createChild("td", {
      className: ["label", "iconStrength"]
    });
    t.intelligencePercent = e.createChild("td", {
      className: ["label", "iconIntelligence"]
    });
    t.chancePercent = e.createChild("td", {
      className: ["label", "iconChance"]
    });
    t.agilityPercent = e.createChild("td", {
      className: ["label", "iconAgility"]
    });
    this.refreshStatsTooltipContent(t);
    return t;
  }
}
test395: {
  function f() {
    this._finishingBuffs = [];
    return e;
  }
}
test396: {
  function f() {
    i.updateBuff(e);
    window.gui.fightManager.emit("BuffUpdate", i, this);
    return !0;
  }
}
test397: {
  function f() {
    m = document.createElement("canvas");
    m.id = "characterDisplayCanvas";
    m.width = _;
    m.height = v;
    f = new u(m, _, v, d.MAX_SPRITES_BUFFER_CHARACTER_DISPLAY, d.MAX_TEXTURE_MEMORY_CHARACTER_DISPLAY, d.PRERENDER_RATIO_CHARACTER_DISPLAY, !0);
    return g = {
      renderer: f,
      updateList: {
        push: n
      },
      displayList: {
        add: n,
        removeByRef: n
      }
    };
  }
}
test398: {
  function f() {
    l = !0;
    r && n.rootElement && n.delClassNames("spinner");
    if (null !== n.entity && n.rootElement) {
      e && 1 === e.bonesId && e.skins[0] && n.entity.animManager.addAnimationModifier("AnimStatique", "AnimStatique" + e.skins[0]);
      n.only4Directions = n.entity.animManager.only4Directions;
      t.animation && (n.entity.animSymbol.base = t.animation);
      n._scale = 1 / 0;
      n._render();
      return i && i();
    }
    return i && i();
  }
}
test399: {
  function f() {
    this.only4Directions ? (0 === (1 & t) && (t += 1), t += e ? 2 : -2, t > 7 && (t = 1), t < 0 && (t = 7)) : (t += e ? 1 : -1, t > 7 && (t = 0), t < 0 && (t = 7));
    this.entity.direction = t;
    this._render();
    return t;
  }
}
test400: {
  function f() {
    e = e || "2d";
    return this.rootElement.getContext(e);
  }
}
test401: {
  function f() {
    console.error(new Error("Sub-entity has no look: " + Object.keys(e).join(";")));
    return i && i();
  }
}
test402: {
  function f() {
    u.animManager.addSubentity({
      animManager: t,
      bindingPoint: "carried_" + e.bindingPointCategory + "_" + e.bindingPointIndex,
      symbolModifier: c[e.bindingPointCategory],
      bindingPointCategory: e.bindingPointCategory
    });
    return i && i(t);
  }
}
test403: {
  function f() {
    a();
    return i && i();
  }
}
test404: {
  function f() {
    v.clear();
    return c();
  }
}
test405: {
  function f() {
    console.error(o);
    return c();
  }
}
test406: {
  function f() {
    n.animManager.setTints(g);
    n.animManager.cleanupAnimationsAndRemoveSubentities();
    n.addSubentities(e.subentities, t, c);
    return;
  }
}
test407: {
  function f() {
    console.error(new Error("look is missing"));
    return null;
  }
}
test408: {
  function f() {
    console.error(new Error("look is missing"));
    return null;
  }
}
test409: {
  function f() {
    this.hide();
    if (this.isWhiteListed === !0) {
      return this.animManager.stop();
    }
    this._cleared !== !0 && (this._cleared = !0, this.animManager.clear());
    return;
  }
}
test410: {
  function f() {
    void 0 !== e && e.push(this.bbox);
    this.bbox = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)];
    return;
  }
}
test411: {
  function f() {
    i.fillStyle = "#FF0000";
    i.fillRect(0, 0, l, l);
    return r = e.createTexture(t, null, "nearest", "permanent");
  }
}
test412: {
  function f() {
    void 0 !== e && e.push(this.bbox);
    this.bbox = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)];
    return;
  }
}
test413: {
  function f() {
    i.fillStyle = "#FF0000";
    i.fillRect(0, 0, a, a);
    return o = e.createTexture(t, null, "nearest", "permanent");
  }
}
test414: {
  function f() {
    console.warn("Attempt to call abstract method TemporaryAnimationManager.assignSymbol", e);
    return i && i();
  }
}
test415: {
  function f() {
    m !== !1 && e.setAnimManager(p);
    return c && c(p);
  }
}
test416: {
  function f() {
    e.setAnimManager(a);
    return n && n(a);
  }
}
test417: {
  function f() {
    a.generateTemplate(i, n);
    return a;
  }
}
test418: {
  function f() {
    l.type !== s[o] && console.warn("[Cache3State.addElement] Trying to change type of an exisiting element", i);
    return l._hold();
  }
}
test419: {
  function f() {
    console.warn("[Cache3State.addElement] Trying to replace a locked element", i);
    return l._hold();
  }
}
test420: {
  function f() {
    l = new n(this, e, t, i, o);
    this._addElement(l);
    return l._hold();
  }
}
test421: {
  function f() {
    null === this.first ? (this.first = t, this.last = t) : (this.first.previous = t, this.first = t);
    this.length += 1;
    return t;
  }
}
test422: {
  function f() {
    null === this.first ? (this.first = t, this.last = t) : (this.last.next = t, this.last = t);
    this.length += 1;
    return t;
  }
}
test423: {
  function f() {
    this.removeByReference(this.first);
    return e;
  }
}
test424: {
  function f() {
    this.removeByReference(this.last);
    return e;
  }
}
test425: {
  function f() {
    null !== e.previous && (e.previous.next = n);
    e.previous = n;
    this.first === e && (this.first = n);
    this.length += 1;
    return n;
  }
}
test426: {
  function f() {
    null !== e.next && (e.next.previous = n);
    e.next = n;
    this.last === e && (this.last = n);
    this.length += 1;
    return n;
  }
}
test427: {
  function f() {
    this.removeByReference(t);
    return !0;
  }
}
test428: {
  function f() {
    this._updateId();
    return i;
  }
}
test429: {
  function f() {
    g = j[0];
    _ = j[1];
    v = j[2];
    y = j[3];
    u = [S * g + N * _ + L, E * g + x * _ + O, S * v + N * _ + L, E * v + x * _ + O, S * g + N * y + L, E * g + x * y + O, S * v + N * y + L, E * v + x * y + O];
    return [new o(i.texture, u, i.textureCoord, h)];
  }
}
test430: {
  function f() {
    console.warn("Symbol " + e + " not registered in character's template");
    return [];
  }
}
test431: {
  function f() {
    console.warn("Symbol " + e + " not registered in character's template");
    return [];
  }
}
test432: {
  function f() {
    o !== -1 && (n += "_" + v[o]);
    p.isMissingTemplates(this.bonesId + "/" + n) && "AnimTacle" === e.base && (e.base = "AnimHit", n = e.base + t + i, o !== -1 && (n += "_" + v[o]));
    return n;
  }
}
test433: {
  function f() {
    i();
    return s;
  }
}
test434: {
  function f() {
    console.warn("Incorrect bones id:", this.bonesId);
    t();
    return !1;
  }
}
test435: {
  function f() {
    t();
    return !0;
  }
}
test436: {
  function f() {
    u.loadTemplate("bone", e, "", function (n) {
      i.template.merge(n, !1), i.loadedAnimations[e] = n, t();
    }, this.sprite.renderer);
    return !0;
  }
}
test437: {
  function f() {
    console.error("Wrong animation modifier type");
    return e;
  }
}
test438: {
  function f() {
    void 0 === i && (i = a(this.prepareCurrentAnimationFrame()), e.prepareBatchFromSpriteList(this.frameData.id, i));
    this.frameData.id !== t && (e.unlockBuffer(t), e.lockBuffer(this.frameData.id));
    return i.bbox;
  }
}
test439: {
  function f() {
    console.warn("Could not find any Animation " + e.base + " in template", this.template.id);
    return i && i();
  }
}
test440: {
  function f() {
    this.animationId = y + "#" + this.scaleY + this.tintsString + (this.mirrored ? "M#" : "#");
    this.nbFrames = this.template.getAnimationNbFrames(d);
    this._prevFrame = -1;
    this._frame = -1;
    this.frame = 0;
    if (0 === this.nbFrames) {
      return i && i();
    }
    "AnimStatique" === e.base && this.nbFrames > 1 && (t = !0);
    "AnimStatique_to_AnimMarche" !== e.base && "AnimStatique_to_AnimCourse" !== e.base || (t = !1);
    this._stopped = !1;
    _.getAudio(parseInt(v.bonesId, 10), v.animationName, function (e, n) {
      if (v._stopped) return i && i();
      e && m.error(new Error("regAudio: " + e)), v.tween.reset().to({
        frame: v.nbFrames
      }, v.nbFrames).start(t);
      var o = -1;
      if (v.tween.onUpdate(function () {
        if (v._stopped) return v.tween.stop();
        if (o !== v._frame) {
          var e = null;
          n && n.isSoundAnimationsPerFrame && (e = n, e.hasSoundForFrame(v.frame) && s(e.getIds(v.frame), v.sprite._x)), o = v._frame;
        }
      }), i) {
        if (t) return i();
        v.tween.onceFinish(i);
      }
    });
    return;
  }
}
test441: {
  function f() {
    e === !0 ? this._iterations = 1 / 0 : this._iterations = e || 1;
    if (0 === this._iterations) {
      p._warn("[Playable.start] playable is required to run 0 times");
      return this;
    }
    if (this.starting) {
      p._warn("[Playable.start] playable is already starting");
      return this;
    }
    if (this.playing && !this.stopping) {
      p._warn("[Playable.start] playable is already playing");
      return this;
    }
    this.starting = !0;
    p._add(this);
    return this;
  }
}
test442: {
  function f() {
    this._onUpdate = e || null;
    return this;
  }
}
test443: {
  function f() {
    this._onStart = e || null;
    return this;
  }
}
test444: {
  function f() {
    this._onStop = e || null;
    return this;
  }
}
test445: {
  function f() {
    this._onFinish = e || null;
    return this;
  }
}
test446: {
  function f() {
    null === this._onceFinish ? this._onceFinish = [e] : this._onceFinish.push(e);
    return this;
  }
}
test447: {
  function f() {
    this._onFinish = null;
    this._onceFinish = null;
    return this;
  }
}
test448: {
  function f() {
    this._onUpdate = null;
    return this;
  }
}
test449: {
  function f() {
    this._onStart = null;
    return this;
  }
}
test450: {
  function f() {
    this._onStop = null;
    return this;
  }
}
test451: {
  function f() {
    this._from = null;
    this._duration = 0;
    this._currentTransitionIndex = 0;
    this._transitions = [];
    this._reset();
    return this;
  }
}
test452: {
  function f() {
    this._from = e;
    this._transitions.length > 0 && (this._transitions[0].from = e);
    return this;
  }
}
test453: {
  function f() {
    this._transitions.push(new a(s, e, this._duration, t, i, n, o));
    this._duration += t;
    return this;
  }
}
test454: {
  function f() {
    this._transitions.push(new a(i, i, this._duration, e, d.linear, null, t));
    this._duration += e;
    return this;
  }
}
test455: {
  function f() {
    this._from = e;
    this._transitions.length > 0 && (this._transitions[0].from = e);
    return this;
  }
}
test456: {
  function f() {
    this._transitions.push(new a(o, e, this._duration, t, i, n));
    this._duration += t;
    return this;
  }
}
test457: {
  function f() {
    this._transitions.push(new a(t, t, this._duration, e, d.linear, null));
    this._duration += e;
    return this;
  }
}
test458: {
  function f() {
    e -= 1;
    return e * e * ((t + 1) * e + t) + 1;
  }
}
test459: {
  function f() {
    e.createAnimSoundGroups(t.getSoundGroupDefs(i), "sfx");
    return n(null, t.getAnimNameAudio(i));
  }
}
test460: {
  function f() {
    this._logger = e;
    if (t) {
      this._staticContent = t;
      if (i) {
        this._audioManager = i;
        this._cache = {};
        this._processingCb = {};
        return;
      }
      return this._logger.error(new Error("Need the audioManager."));
    }
    return this._logger.error(new Error("Need the static."));
  }
}
test461: {
  function f() {
    n(a._logger, "No keys soundBonesData for bonesId: " + e);
    return i(t, e, null);
  }
}
test462: {
  function f() {
    n(a._logger, "No values soundBonesData for bonesId: " + e);
    return i(t, e, null);
  }
}
test463: {
  function f() {
    e.type && (t = {
      id: e.base + "0_" + d[e.direction],
      type: 0,
      base: e.base,
      direction: e.direction
    });
    return {
      parent: null,
      child: t
    };
  }
}
test464: {
  function f() {
    console.error("No modifier for symbol base " + t);
    return {
      parent: null,
      child: null
    };
  }
}
test465: {
  function f() {
    i.parent && (n.parent = e);
    i.child && (n.child = e);
    return n;
  }
}
test466: {
  function f() {
    0 === t.nLocks && (t.update = this.update++, this.memoryChunksUsed.moveToTheEnd(t.ref));
    return t.obj;
  }
}
test467: {
  function f() {
    0 === t.nLocks && (this.memoryChunksUsed.removeByRef(t.ref) || console.warn("[SuperFastMemoryPartitioner.lock] Trying to lock an already locked chunk", e), t.ref = this.memoryChunksLocked.add(t), t.update = 1 / 0);
    t.nLocks += 1;
    return t.obj;
  }
}
test468: {
  function f() {
    this.update += 1;
    return s;
  }
}
test469: {
  function f() {
    this.removeByReference(e);
    return e.object;
  }
}
test470: {
  function f() {
    this.removeByReference(e);
    return e.object;
  }
}
test471: {
  function f() {
    this.root = t;
    return t;
  }
}
test472: {
  function f() {
    1 === n.height && this._balance(t.parent, !1);
    return t;
  }
}
test473: {
  function f() {
    null !== i && (i.parent = t);
    null === t ? this.root = i : (t.right === e ? t.right = i : t.left = i, null === i ? this._balance(t, !0) : i.height + 3 <= t.height && this._balance(t, !0));
    return !0;
  }
}
test474: {
  function f() {
    null !== i && (i.parent = o);
    o.left = i;
    null === t ? this.root = o : t.right === e ? t.right = o : t.left = o;
    o.parent = t;
    this._balance(o, !0);
    return !0;
  }
}
test475: {
  function f() {
    o.parent = t;
    this._balance(a, !0);
    e.left = null;
    e.right = null;
    e.parent = null;
    e.container = null;
    return null;
  }
}
test476: {
  function f() {
    this._toArray(this.root, e);
    return e;
  }
}
test477: {
  function f() {
    this._shaders[e] = t;
    return t;
  }
}
test478: {
  function f() {
    c.texture = this.textureCache.addAndHoldElement(d, 4 * e * t, o);
    return c;
  }
}
test479: {
  function f() {
    this.startTextureRendering(r, n, o, a, s);
    i.push(r);
    return;
  }
}
test480: {
  function f() {
    i = o(this.ownerId, this.id, C.MAX_CAST_PER_TURN);
    if (i) {
      return n[e] + i.value.getEquipmentPts() + i.value.getBonusPts();
    }
    return n[e];
  }
}
test481: {
  function f() {
    i = o(this.ownerId, this.id, C.RANGE);
    if (i) {
      return n[e] + i.value.getEquipmentPts() + i.value.getBonusPts();
    }
    return n[e];
  }
}
test482: {
  function f() {
    i = o(this.ownerId, this.id, C.MAX_CAST_PER_TARGET);
    if (i) {
      return n[e] + i.value.getEquipmentPts() + i.value.getBonusPts();
    }
    return n[e];
  }
}
test483: {
  function f() {
    i = o(this.ownerId, this.id, C.CAST_LINE);
    if (i) {
      return !!n[e] && 0 === i.value.getTotalStat();
    }
    return n[e];
  }
}
test484: {
  function f() {
    i = o(this.ownerId, this.id, C.LOS);
    if (i) {
      return !!n[e] && 0 === i.value.getTotalStat();
    }
    return n[e];
  }
}
test485: {
  function f() {
    i = o(this.ownerId, this.id, C.RANGEABLE);
    if (!i || n[e]) {
      return n[e];
    }
    return i.value.getTotalStat() > 0;
  }
}
test486: {
  function f() {
    console.error(new Error("SpellFactory getPropertyFromItem: item is not ready yet"));
    return null;
  }
}
test487: {
  function f() {
    n = Object.keys(n);
    if (0 === n.length) {
      return i(null, {});
    }
    if (t && t.spellLevels) {
      return i(null, I.extractElementsFrom(n, t.spellLevels, !0));
    }
    A.getData("SpellLevels", n, function (e, t) {
      if (e) {
        return i(e);
      }
      i(null, I.extractElementsFrom(n, t, !0));
      return;
    });
    return;
  }
}
test488: {
  function f() {
    n = Object.keys(n);
    if (0 === n.length) {
      return i(null, {});
    }
    if (t && t.spellStates) {
      return i(null, I.extractElementsFrom(n, t.spellStates, !0));
    }
    A.getData("SpellStates", n, function (e, t) {
      if (e) {
        return i(e);
      }
      i(null, I.extractElementsFrom(n, t, !0));
      return;
    });
    return;
  }
}
test489: {
  function f() {
    e || (console.error("Spell#getName: no name for spellId " + this.id), e = "");
    window.gui.playerData.isAbleToSeeId() && (e += " (" + this.id + ")");
    return e;
  }
}
test490: {
  function f() {
    t < 0 && console.error(new Error("iconId < 0 for spellId " + this.id + ": " + t));
    return e + this.getProperty("iconId") + ".png";
  }
}
test491: {
  function f() {
    e.setLevel(1);
    return e;
  }
}
test492: {
  function f() {
    r.push(s(n, a + 1));
    r.push(s(n - 1, a));
    r.push(s(n, a - 1));
    r.push(s(n + 1, a));
    t && (r.push(s(n + 1, a + 1)), r.push(s(n - 1, a + 1)), r.push(s(n - 1, a - 1)), r.push(s(n + 1, a - 1)));
    return r;
  }
}
test493: {
  function f() {
    i ? (r = ~~(Math.floor(8 * r / Math.PI) + 8), n = [3, 2, 2, 1, 1, 0, 0, 7, 7, 6, 6, 5, 5, 4, 4, 3, 3][r]) : (r = ~~(Math.floor(4 * r / Math.PI) + 4), n = [3, 1, 1, 7, 7, 5, 5, 3, 3][r]);
    return n;
  }
}
test494: {
  function f() {
    e = o(e);
    t = o(t);
    return Math.abs(e.x - t.x) + Math.abs(e.y - t.y);
  }
}
test495: {
  function f() {
    e = o(e);
    t = o(t);
    return Math.max(Math.abs(e.x - t.x), Math.abs(e.y - t.y));
  }
}
test496: {
  function f() {
    n._requestsPendingCount--;
    0 === n._requestsPendingCount && (n.isLoaded = !0, n.emit("loaded"));
    if (i) {
      return i();
    }
    0;
    return;
  }
}
test497: {
  function f() {
    r.setLevel(t);
    return o();
  }
}
test498: {
  function f() {
    c[e] = {};
    c[e].level = t;
    return this._createSpells([e], c, o);
  }
}
test499: {
  function f() {
    e && i.push("Client v" + e);
    t && i.push("Build v" + t);
    return i.join("/");
  }
}
test500: {
  function f() {
    m = u(e, {
      useScrollValue: !0
    });
    if (p) {
      s ? s = !1 : p.close(f.CLICK_AWAY);
      return;
    }
    d = !1;
    return;
  }
}
test501: {
  function f() {
    this.close();
    return e();
  }
}
test502: {
  function f() {
    h = t.menu.item;
    h && !Array.isArray(h) && (h = [h]);
    return e();
  }
}
test503: {
  function f() {
    p = t.item;
    return e();
  }
}
test504: {
  function f() {
    n.on("tap", function () {
      i.close();
    });
    return n;
  }
}
test505: {
  function f() {
    a.on("tap", function () {
      n.close();
    });
    return a;
  }
}
test506: {
  function f() {
    this._addSeparator();
    return this._addEntry(s("ui.common.cancel"), function () {});
  }
}
test507: {
  function f() {
    this.close();
    this.next = {
      positioningMethod: e,
      params: t
    };
    return;
  }
}
test508: {
  function f() {
    e = e || 1;
    if (this.iScroll.options.scrollY) {
      return this.iScroll.y <= -e;
    }
    return this.iScroll.x <= -e;
  }
}
test509: {
  function f() {
    e = e || 1;
    if (this.iScroll.options.scrollY) {
      return this.iScroll.maxScrollY - this.iScroll.y <= -e;
    }
    return this.iScroll.maxScrollX - this.iScroll.x <= -e;
  }
}
test510: {
  function f() {
    n === !0 && (o.style.cssText = "position:absolute;z-index:9999", a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px");
    a.className = "iScrollIndicator";
    "h" == e ? (n === !0 && (o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", a.style.height = "100%"), o.className = "iScrollHorizontalScrollbar") : (n === !0 && (o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", a.style.width = "100%"), o.className = "iScrollVerticalScrollbar");
    o.style.cssText += ";overflow:hidden";
    t || (o.style.pointerEvents = "none");
    o.appendChild(a);
    return o;
  }
}
test511: {
  function f() {
    r && u > r && (u = r);
    s = void 0 === s ? 6e-4 : s;
    l = e + u * u / (2 * s) * (d < 0 ? -1 : 1);
    c = u / s;
    l < o ? (l = a ? o - a / 2.5 * (u / 8) : o, d = n.abs(l - e), c = d / u) : l > 0 && (l = a ? a / 2.5 * (u / 8) : 0, d = n.abs(e) + l, c = d / u);
    return {
      destination: n.round(l),
      duration: c
    };
  }
}
test512: {
  function f() {
    o.extend(o, {
      hasTransform: r !== !1,
      hasPerspective: e("perspective") in a,
      hasTouch: "ontouchstart" in t,
      hasPointer: t.PointerEvent || t.MSPointerEvent,
      hasTransition: e("transition") in a
    });
    o.isBadAndroid = /Android /.test(t.navigator.appVersion) && !/Chrome\/\d/.test(t.navigator.appVersion);
    o.extend(o.style = {}, {
      transform: r,
      transitionTimingFunction: e("transitionTimingFunction"),
      transitionDuration: e("transitionDuration"),
      transitionDelay: e("transitionDelay"),
      transformOrigin: e("transformOrigin")
    });
    o.hasClass = function (e, t) {
      var i = new RegExp("(^|\\s)" + t + "(\\s|$)");
      return i.test(e.className);
    };
    o.addClass = function (e, t) {
      if (!o.hasClass(e, t)) {
        var i = e.className.split(" ");
        i.push(t), e.className = i.join(" ");
      }
    };
    o.removeClass = function (e, t) {
      if (o.hasClass(e, t)) {
        var i = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
        e.className = e.className.replace(i, " ");
      }
    };
    o.offset = function (e) {
      for (var t = -e.offsetLeft, i = -e.offsetTop; e = e.offsetParent;) t -= e.offsetLeft, i -= e.offsetTop;
      return {
        left: t,
        top: i
      };
    };
    o.preventDefaultException = function (e, t) {
      for (var i in t) if (t[i].test(e[i])) return !0;
      return !1;
    };
    o.extend(o.eventType = {}, {
      touchstart: 1,
      touchmove: 1,
      touchend: 1,
      mousedown: 2,
      mousemove: 2,
      mouseup: 2,
      pointerdown: 3,
      pointermove: 3,
      pointerup: 3,
      MSPointerDown: 3,
      MSPointerMove: 3,
      MSPointerUp: 3
    });
    o.extend(o.ease = {}, {
      quadratic: {
        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fn: function (e) {
          return e * (2 - e);
        }
      },
      circular: {
        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
        fn: function (e) {
          return n.sqrt(1 - --e * e);
        }
      },
      back: {
        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        fn: function (e) {
          var t = 4;
          return (e -= 1) * e * ((t + 1) * e + t) + 1;
        }
      },
      bounce: {
        style: "",
        fn: function (e) {
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
      },
      elastic: {
        style: "",
        fn: function (e) {
          var t = .22,
            i = .4;
          if (0 === e) {
            return 0;
          }
          if (1 == e) {
            return 1;
          }
          return i * n.pow(2, -10 * e) * n.sin((e - t / 4) * (2 * n.PI) / t) + 1;
        }
      }
    });
    o.tap = function (e, t) {
      var n = i.createEvent("Event");
      n.initEvent(t, !0, !0), n.pageX = e.pageX, n.pageY = e.pageY, e.target.dispatchEvent(n);
    };
    o.click = function (e) {
      var t,
        n = e.target;
      /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || (t = i.createEvent("MouseEvents"), t.initMouseEvent("click", !0, !0, e.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), t._constructed = !0, n.dispatchEvent(t));
    };
    return o;
  }
}
test513: {
  function f() {
    this.options.tap && l.tap(e, this.options.tap);
    this.options.click && l.click(e);
    this._execEvent("scrollCancel");
    return;
  }
}
test514: {
  function f() {
    e = e || 0;
    !this.hasHorizontalScroll || this.x > 0 ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX);
    !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY);
    return (t != this.x || i != this.y) && (this.scrollTo(t, i, e, this.options.bounceEasing), !0);
  }
}
test515: {
  function f() {
    this.options.useTransform ? (n = n[l.style.transform].split(")")[0].split(", "), e = +(n[12] || n[4]), i = +(n[13] || n[5])) : (e = +n.left.replace(/[^-\d.]/g, ""), i = +n.top.replace(/[^-\d.]/g, ""));
    return {
      x: e,
      y: i
    };
  }
}
test516: {
  function f() {
    o = this.currentPage.pageX;
    a = this.currentPage.pageY;
    t > 0 ? o-- : t < 0 && o++;
    i > 0 ? a-- : i < 0 && a++;
    this.goToPage(o, a);
    return;
  }
}
test517: {
  function f() {
    i == this.currentPage.pageX && (i += this.directionX, i < 0 ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), e = this.pages[i][0].x);
    a == this.currentPage.pageY && (a += this.directionY, a < 0 ? a = 0 : a >= this.pages[0].length && (a = this.pages[0].length - 1), t = this.pages[0][a].y);
    return {
      x: e,
      y: t,
      pageX: i,
      pageY: a
    };
  }
}
test518: {
  function f() {
    this.actionsContainer.createChild("div", {
      className: "cmButton",
      text: l("ui.social.paddockWithNoOwner")
    });
    return i();
  }
}
test519: {
  function f() {
    s.push(h("ui.skill.jobNotKnown", n(e.jobNameList)));
    s.push(h("ui.npc.learnJobs", a, "{mapWithFlag," + o[0] + "," + o[1] + "," + window.gui.playerData.position.worldmapId + "}"));
    return s;
  }
}
test520: {
  function f() {
    t.push(h("ui.skill.toolNeeded", n(e.jobNameList)));
    return t;
  }
}
test521: {
  function f() {
    e.push(h("ui.skill.resourceAlreadyHarvested"));
    return e;
  }
}
test522: {
  function f() {
    i.type = c(e, t);
    i.type && (i.jobNameList.push(t._parentJobName), "levelLow" === i.type && (i.jobLevelList.push(e.experience.jobLevel), i.levelMinList.push(t._levelMin)));
    return i;
  }
}
test523: {
  function f() {
    n.sort(c);
    this.sortedAllowedTypes[e] = n;
    return n;
  }
}
test524: {
  function f() {
    this.backBtn.hide();
    return this._showBlankUi();
  }
}
test525: {
  function f() {
    n[i.typeId] = !0;
    this.currentSearchItemTypeMap = n;
    this.currentSearchText = i.getNameForSearch();
    this.searchBox.setValue(i.nameId);
    this._resetCategoryFilter();
    this._refreshFilter();
    t || this._pushHistory();
    return !0;
  }
}
test526: {
  function f() {
    i.setStyle("backgroundImage", e.image);
    return t;
  }
}
test527: {
  function f() {
    e.etheral ? t.addClassNames("etheral") : e.itemSetId && t.addClassNames("itemSet");
    return t;
  }
}
test528: {
  function f() {
    console.error(t);
    return e.shopViewer.setPlaceholder(v("tablet.searchError"));
  }
}
test529: {
  function f() {
    this.colorItems();
    this.list.setStyle("max-height", e.rootElement.clientHeight + "px");
    this.list.refresh();
    this.list.on("selected", o);
    this.elt = t;
    return t;
  }
}
test530: {
  function f() {
    n && n.delClassNames("selected");
    this.currentSubitem = e;
    if (e) {
      this.setBreadcrumbText(this.items[e.myTopItem.id] + " > " + e.data.text);
      e.addClassNames("selected");
      i || this.emit("subitemSelected", e, t);
      return;
    }
    return this.toggleBreadcrumb(!1);
  }
}
test531: {
  function f() {
    1 === i && (this.singleSubitem = t);
    return i;
  }
}
test532: {
  function f() {
    t && (this.subitemFilterFunc ? n = this._filterOneItemSubitems(e) : (n = e.subitemList.getChildCount(), 1 === n && (this.singleSubitem = e.subitemList.getChildren()[0])));
    this.list.refresh();
    this.list.showElement(e);
    return n;
  }
}
test533: {
  function f() {
    1 === t && (this.singleItem = e, a = this.deployItem(e, !0), 1 === a && this._selectSubitem(this.singleSubitem, !0));
    this.refresh();
    return {
      itemCount: t,
      subitemCount: a
    };
  }
}
test534: {
  function f() {
    n.myList = this;
    n.id = t;
    n.data = e.data;
    "object" == typeof i ? n.appendChild(i) : n.setText(i);
    l(n);
    n.on("tap", this._tapHandler);
    return n;
  }
}
test535: {
  function f() {
    t.noRefresh || this.refresh();
    return i;
  }
}
test536: {
  function f() {
    t.noRefresh || this.refresh();
    return this.getItems();
  }
}
test537: {
  function f() {
    this.buf[this.last] = void 0;
    this.first === this.last ? this.empty = !0 : this.last = (this.last + this.maxSize - 1) % this.maxSize;
    return e;
  }
}
test538: {
  function f() {
    c(Object.keys(a), function (e) {
      if (e) return console.warn(e), i(e);
      var a = {};
      for (n = 0, o = s.length; n < o; n += 1) {
        var r = s[n],
          l = T[r.objectGID];
        l || (l = T[S], console.error('ItemManager: Player got a "Picfail Puree" instead of the itemId', r.objectGID)), r.setItem(l), a[r.objectUID] = r;
      }
      g.initializeList(s, t, function (e) {
        i(e, {
          map: a,
          array: s
        });
      });
    });
    return s;
  }
}
test539: {
  function f() {
    console.warn(e);
    return i(e);
  }
}
test540: {
  function f() {
    s && i.push({
      text: o,
      isMalus: a
    });
    return i;
  }
}
test541: {
  function f() {
    e && (t += " (" + this.id + ")");
    return t;
  }
}
test542: {
  function f() {
    m.error(new Error("getProperty(statsFormatted) should never be called on non-weapon Item"));
    return e;
  }
}
test543: {
  function f() {
    this.castInLine && this.range > 1 && !this.castInDiagonal && e.push(c("ui.spellInfo.castInLine"));
    !this.castTestLos && this.range > 1 && e.push(c("ui.spellInfo.castWithoutLos"));
    return e;
  }
}
test544: {
  function f() {
    e = e.replace(/[\s+]/g, "");
    return new n(e, this, t);
  }
}
test545: {
  function f() {
    this.key = o[0];
    this.rawValue = o[1];
    this.value = parseInt(this.rawValue, 10);
    return;
  }
}
test546: {
  function f() {
    s.fighters[f.allies] = i.allyCharactersInformations || [];
    s.fighters[f.enemies] = i.enemyCharactersInformations || [];
    h.emit("fightStarted", e, s);
    i.state === m.fighting && h.emit("fighting", e, s);
    return s;
  }
}
test547: {
  function f() {
    s.splice(r, 1);
    h.emit("fighterLeft", e, t, i, n, r);
    return;
  }
}
test548: {
  function f() {
    r[t.guildId] = t;
    return t;
  }
}
test549: {
  function f() {
    r.sortObjectInArray(i, "rankOrder");
    return i;
  }
}
test550: {
  function f() {
    this._emoticonData = i;
    return e();
  }
}
test551: {
  function f() {
    this._emoticonData = i;
    return e();
  }
}
test552: {
  function f() {
    e = this.operator === o.operators.different ? a("ui.common.differentFrom") + " >" : ">";
    return a("ui.common.pvpMaxRank") + " " + e + " " + this.value;
  }
}
test553: {
  function f() {
    e = e || {};
    return e.subAreaId || window.gui.playerData.position.subAreaId;
  }
}
test554: {
  function f() {
    t = t || "(The souls are gone...)";
    return f(e) + f("ui.common.colon") + t;
  }
}
test555: {
  function f() {
    e.gui.playerData.isAbleToSeeId() && (t += " (" + this.objectGID + ")");
    return t;
  }
}
test556: {
  function f() {
    this.tooltipContent || (this.tooltipContent = new d(this.rowContent));
    return this.tooltipContent;
  }
}
test557: {
  function f() {
    this._subFiltersBox.hide();
    this._withTagBar && this._tagBar.hide();
    return !0;
  }
}
test558: {
  function f() {
    t.hasValue(e) ? t.select(e, !0) : (e = t.selectFirst(!0), void 0 === e && (e = y));
    return e !== this._selectedSubFilter && (this._selectedSubFilter = e, this._withTagBar && (this._delFilterButton("SUBCAT"), e !== y && this._addFilterButton("SUBCAT", t.getCurrentText())), !0);
  }
}
test559: {
  function f() {
    n.itemFilters = this;
    this._tagButtons.push(n);
    this._tagBar.appendChild(n);
    this._tagBar.show();
    return n;
  }
}
test560: {
  function f() {
    this._tagBar.removeChild(i);
    this._tagButtons.splice(t, 1);
    return;
  }
}
test561: {
  function f() {
    r || n();
    l || (window.gui.wBody.on("dom.touchend", o), l = !0);
    i && i.centerOnTarget ? r.updateAndAppearAt(e, t, {
      centerOnTarget: !0
    }) : r.updateAndAppearAt(e, t);
    return r;
  }
}
test562: {
  function f() {
    this._setValue(t, e);
    return t;
  }
}
test563: {
  function f() {
    this._dropDownSelector.setText(e);
    return e;
  }
}
test564: {
  function f() {
    e.setText(t.getProperty("descriptionId"));
    return !0;
  }
}
test565: {
  function f() {
    i += n === -1 ? M("ui.item.averageprice.unavailable") : _.kamasToString(n);
    e.setText(i);
    return !0;
  }
}
test566: {
  function f() {
    e.clearContent();
    n && 0 !== n && s(e, M("ui.common.inventory"), n, !1);
    void 0 !== o && 0 !== o && s(e, M("tablet.bank"), o, !0);
    r >= C.CHAR_MIN_LEVEL_RIDE && void 0 !== a && 0 !== a && s(e, M("ui.common.ride"), a, !0);
    return !0;
  }
}
test567: {
  function f() {
    e.setEffectsFromItem(t);
    return !0;
  }
}
test568: {
  function f() {
    n += t ? _.totalCriticalHitRate(a, t) : a;
    i && (n += " (" + i + o + M("ui.common.damageShort") + ")");
    return n;
  }
}
test569: {
  function f() {
    this._selectedRow !== i && (this.unSelectRow(), i.addClassNames("selected"), this._selectedRow = i);
    t || this.emit("rowTap", i, i.rowContent);
    return i;
  }
}
test570: {
  function f() {
    this._clickable && (f(o), o.on("enable", c), o.on("tapstart", function () {
      o.addClassNames("pressed");
    }), o.on("tapend", function () {
      o.delClassNames("pressed");
    }), o.on("tap", function () {
      n.selectRow(t);
    }));
    this._onRowCreation && this._onRowCreation(o, e);
    o.toggleDisplay(this._shouldDisplayRow(e));
    this.emit("rowAdded", t, e, o);
    return o;
  }
}
test571: {
  function f() {
    this._insertRowInRightPosition(n);
    this.scroller.refresh();
    i ? (this.scroller.scrollToElement(n), w.tween(n, {
      webkitTransform: "translate3d(0,0,0)"
    }, {
      time: T,
      easing: "ease-out"
    })) : n.setStyle("webkitTransform", null);
    return n;
  }
}
test572: {
  function f() {
    i.toggleDisplay(this._shouldDisplayRow(e));
    return i;
  }
}
test573: {
  function f() {
    this._insertRowInRightPosition(i);
    return i;
  }
}
test574: {
  function f() {
    n.rowContent = i;
    d(n, a);
    n.toggleDisplay(this._shouldDisplayRow(i));
    this.sortBy === a && this._insertRowInRightPosition(n);
    return n;
  }
}
test575: {
  function f() {
    this.hasDomAndListeners || this._setupDomAndListeners();
    return this._mountIllus;
  }
}
test576: {
  function f() {
    a.createChild("div", {
      className: "label",
      text: i + o
    });
    return a.appendChild(new f({
      className: ["mountBar", n],
      tooltip: !0,
      longTapExplanation: !0,
      tooltipText: i
    }));
  }
}
test577: {
  function f() {
    o.createChild("div", {
      className: "label",
      text: d("ui.common.reproductions") + i
    });
    this._fertilityValue = o.createChild("div", {
      className: "value"
    });
    this._fecondationState = t.createChild("div", {
      className: "fecondationState"
    });
    return e;
  }
}
test578: {
  function f() {
    this._energyGauge = t.appendChild(new c("energy", d("ui.common.energy"), {
      size: M
    }));
    this._experienceValue = this._createProgressBar(t, ["progressBar2col", "xp"], d("ui.common.experiment"), "blue");
    this._createGivenXp(t);
    t.createChild("div", {
      className: "effectLabel",
      text: d("ui.effects")
    });
    this._effectsContent = t.createChild("div", {
      className: "effectsContent"
    });
    return e;
  }
}
test579: {
  function f() {
    n && (a.reproCount = t, a.reproMax = i);
    e.isNewborn && (a.isNewborn = !0);
    return a;
  }
}
test580: {
  function f() {
    n += o + "</ul>";
    i._effectsContent.setHtml(o);
    return console.error(e);
  }
}
test581: {
  function f() {
    n += o + "</ul>";
    return i._effectsContent.setHtml(o);
  }
}
test582: {
  function f() {
    this.header && (s.tabBtn = this.header.appendChild(new o({
      className: this.tabClassName,
      text: e
    }, function () {
      n.openTab(a);
    })), s.tabBtn.addClassNames("tab" + a));
    this.tabList.push(s);
    this.tabContainer.appendChild(t);
    t.hide();
    return a;
  }
}
test583: {
  function f() {
    l = i;
    r = !0;
    return e();
  }
}
test584: {
  function f() {
    t.update(e);
    return t.digest("hex");
  }
}
test585: {
  function f() {
    R.error(new Error("Config is missing."));
    return "";
  }
}
test586: {
  function f() {
    "com" === n.getHostname().split(".").pop() && (s = b("ui.link.checklink"));
    return s + "?s=" + a(e, t, i, o);
  }
}
test587: {
  function f() {
    r.addClassNames(i.className || "link");
    i.html && r.setHtml(i.html);
    if (i.isMsgSafe || n) {
      if (i.isMsgSafe || o) {
        S(r);
        r.on("tap", function () {
          if (i.isMsgSafe) N.openUrlInAppBrowser(e);else {
            var t = s(e, n, o);
            t && N.openUrlInAppBrowser(t);
          }
        });
        return r;
      }
      console.error(new Error("HTML hyperlink: senderName is null"));
      return r;
    }
    console.error(new Error("HTML hyperlink: senderId is null"));
    return r;
  }
}
test588: {
  function f() {
    t = t || e;
    void 0 === i && console.warn("Skipped not handled hyperlink: " + e);
    return new A("span", {
      text: t,
      className: "deadLink"
    });
  }
}
test589: {
  function f() {
    S(a);
    a.on("tap", i);
    return a;
  }
}
test590: {
  function f() {
    C.getObject(e, t, function (s, r) {
      if (a.rootElement) {
        if (s) return a.replaceClassNames([o], ["deadLink"]), a.setText("[???]"), console.error("Failed getting link data: " + e + " #" + t, s);
        var l = i(r);
        if (a.setText(l[0]), n && n.tooltip) return l.length < 3 ? (a.replaceClassNames([o], ["deadLink"]), console.error("To have a content on the tooltip, res[2] is required")) : O(a, l[2], {
          openOnTap: !0
        });
        if (!l[1]) return void a.replaceClassNames([o], ["deadLink"]);
        S(a), a.on("tap", l[1]);
      }
    });
    return a;
  }
}
test591: {
  function f() {
    a.replaceClassNames([o], ["deadLink"]);
    a.setText("[???]");
    return console.error("Failed getting link data: " + e + " #" + t, s);
  }
}
test592: {
  function f() {
    t || (t = function () {
      M.pointToSpecificUi(e[1]);
    });
    return d(e[0], e[2], t, {
      linkType: parseInt(e[4], 10) || 0
    });
  }
}
test593: {
  function f() {
    window.actorManager.playAnimationOnNpcId(parseInt(e[1], 10), {
      animationName: e[2],
      direction: parseInt(e[3], 10),
      loop: "0" !== e[4],
      delay: parseInt(e[5], 10),
      duration: parseInt(e[6], 10)
    });
    return u();
  }
}
test594: {
  function f() {
    '"' !== i[0] && "'" !== i[0] || (i = i.slice(1, -1));
    return r(i, null, {
      html: n,
      isMsgSafe: t.isMsgSafe,
      senderId: t.senderId,
      senderName: t.senderName
    });
  }
}
test595: {
  function f() {
    e && (n && (e = y.decode(e, a)), r.createChild("span").setHtml(e));
    return r;
  }
}
test596: {
  function f() {
    i = "string" == typeof t ? o.searchOnlineFriendByName(t) : o.searchOnlineFriendById(t);
    return !!i && o.isMutualFriend(i);
  }
}
test597: {
  function f() {
    e.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function () {
        return 42;
      }
    };
    return 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
  }
}
test598: {
  function f() {
    e.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(i), t.__proto__ = e.prototype) : (null === t && (t = new e(i)), t.length = i);
    return t;
  }
}
test599: {
  function f() {
    l(t);
    if (t <= 0) {
      return s(e, t);
    }
    if (void 0 !== i) {
      if ("string" == typeof n) {
        return s(e, t).fill(i, n);
      }
      return s(e, t).fill(i);
    }
    return s(e, t);
  }
}
test600: {
  function f() {
    a !== o && (t = t.slice(0, a));
    return t;
  }
}
test601: {
  function f() {
    i = void 0 === n && void 0 === o ? new Uint8Array(i) : void 0 === o ? new Uint8Array(i, n) : new Uint8Array(i, n, o);
    e.TYPED_ARRAY_SUPPORT ? (t = i, t.__proto__ = e.prototype) : t = h(t, i);
    return t;
  }
}
test602: {
  function f() {
    t = s(t, n);
    if (0 === t.length) {
      return t;
    }
    i.copy(t, 0, 0, n);
    return t;
  }
}
test603: {
  function f() {
    +t != t && (t = 0);
    return e.alloc(+t);
  }
}
test604: {
  function f() {
    i = 255 & i;
    if (e.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf) {
      if (a) {
        return Uint8Array.prototype.indexOf.call(t, i, n);
      }
      return Uint8Array.prototype.lastIndexOf.call(t, i, n);
    }
    return b(t, [i], n, o, a);
  }
}
test605: {
  function f() {
    o || H(e, t, i, 4, 3.4028234663852886e38, -3.4028234663852886e38);
    Z.write(e, t, i, n, 23, 4);
    return i + 4;
  }
}
test606: {
  function f() {
    o || H(e, t, i, 8, 1.7976931348623157e308, -1.7976931348623157e308);
    Z.write(e, t, i, n, 52, 8);
    return i + 8;
  }
}
test607: {
  function f() {
    t.__proto__ = e.prototype;
    return t;
  }
}
test608: {
  function f() {
    this.length > 0 && (e = this.toString("hex", 0, i).match(/.{2}/g).join(" "), this.length > i && (e += " ... "));
    return "<Buffer " + e + ">";
  }
}
test609: {
  function f() {
    t || P(e, 1, this.length);
    return this[e];
  }
}
test610: {
  function f() {
    t || P(e, 2, this.length);
    return this[e] | this[e + 1] << 8;
  }
}
test611: {
  function f() {
    t || P(e, 2, this.length);
    return this[e] << 8 | this[e + 1];
  }
}
test612: {
  function f() {
    t || P(e, 4, this.length);
    return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
  }
}
test613: {
  function f() {
    t || P(e, 4, this.length);
    return 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  }
}
test614: {
  function f() {
    o *= 128;
    n >= o && (n -= Math.pow(2, 8 * t));
    return n;
  }
}
test615: {
  function f() {
    o *= 128;
    a >= o && (a -= Math.pow(2, 8 * t));
    return a;
  }
}
test616: {
  function f() {
    t || P(e, 1, this.length);
    if (128 & this[e]) {
      return (255 - this[e] + 1) * -1;
    }
    return this[e];
  }
}
test617: {
  function f() {
    t || P(e, 4, this.length);
    return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
  }
}
test618: {
  function f() {
    t || P(e, 4, this.length);
    return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
  }
}
test619: {
  function f() {
    t || P(e, 4, this.length);
    return Z.read(this, e, !0, 23, 4);
  }
}
test620: {
  function f() {
    t || P(e, 4, this.length);
    return Z.read(this, e, !1, 23, 4);
  }
}
test621: {
  function f() {
    t || P(e, 8, this.length);
    return Z.read(this, e, !0, 52, 8);
  }
}
test622: {
  function f() {
    t || P(e, 8, this.length);
    return Z.read(this, e, !1, 52, 8);
  }
}
test623: {
  function f() {
    t = +t;
    i = 0 | i;
    n || B(this, t, i, 1, 255, 0);
    e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t));
    this[i] = 255 & t;
    return i + 1;
  }
}
test624: {
  function f() {
    t = +t;
    i = 0 | i;
    n || B(this, t, i, 2, 65535, 0);
    e.TYPED_ARRAY_SUPPORT ? (this[i] = 255 & t, this[i + 1] = t >>> 8) : k(this, t, i, !0);
    return i + 2;
  }
}
test625: {
  function f() {
    t = +t;
    i = 0 | i;
    n || B(this, t, i, 2, 65535, 0);
    e.TYPED_ARRAY_SUPPORT ? (this[i] = t >>> 8, this[i + 1] = 255 & t) : k(this, t, i, !1);
    return i + 2;
  }
}
test626: {
  function f() {
    t = +t;
    i = 0 | i;
    n || B(this, t, i, 4, 4294967295, 0);
    e.TYPED_ARRAY_SUPPORT ? (this[i + 3] = t >>> 24, this[i + 2] = t >>> 16, this[i + 1] = t >>> 8, this[i] = 255 & t) : F(this, t, i, !0);
    return i + 4;
  }
}
test627: {
  function f() {
    t = +t;
    i = 0 | i;
    n || B(this, t, i, 4, 4294967295, 0);
    e.TYPED_ARRAY_SUPPORT ? (this[i] = t >>> 24, this[i + 1] = t >>> 16, this[i + 2] = t >>> 8, this[i + 3] = 255 & t) : F(this, t, i, !1);
    return i + 4;
  }
}
test628: {
  function f() {
    t = +t;
    i = 0 | i;
    n || B(this, t, i, 1, 127, -128);
    e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t));
    t < 0 && (t = 255 + t + 1);
    this[i] = 255 & t;
    return i + 1;
  }
}
test629: {
  function f() {
    t = +t;
    i = 0 | i;
    n || B(this, t, i, 2, 32767, -32768);
    e.TYPED_ARRAY_SUPPORT ? (this[i] = 255 & t, this[i + 1] = t >>> 8) : k(this, t, i, !0);
    return i + 2;
  }
}
test630: {
  function f() {
    t = +t;
    i = 0 | i;
    n || B(this, t, i, 2, 32767, -32768);
    e.TYPED_ARRAY_SUPPORT ? (this[i] = t >>> 8, this[i + 1] = 255 & t) : k(this, t, i, !1);
    return i + 2;
  }
}
test631: {
  function f() {
    t = +t;
    i = 0 | i;
    n || B(this, t, i, 4, 2147483647, -2147483648);
    e.TYPED_ARRAY_SUPPORT ? (this[i] = 255 & t, this[i + 1] = t >>> 8, this[i + 2] = t >>> 16, this[i + 3] = t >>> 24) : F(this, t, i, !0);
    return i + 4;
  }
}
test632: {
  function f() {
    t = +t;
    i = 0 | i;
    n || B(this, t, i, 4, 2147483647, -2147483648);
    t < 0 && (t = 4294967295 + t + 1);
    e.TYPED_ARRAY_SUPPORT ? (this[i] = t >>> 24, this[i + 1] = t >>> 16, this[i + 2] = t >>> 8, this[i + 3] = 255 & t) : F(this, t, i, !1);
    return i + 4;
  }
}
test633: {
  function f() {
    2 === r && (t = d[e.charCodeAt(n)] << 2 | d[e.charCodeAt(n + 1)] >> 4, l[c++] = 255 & t);
    1 === r && (t = d[e.charCodeAt(n)] << 10 | d[e.charCodeAt(n + 1)] << 4 | d[e.charCodeAt(n + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = 255 & t);
    return l;
  }
}
test634: {
  function f() {
    1 === n ? (t = e[i - 1], o.push(c[t >> 2] + c[t << 4 & 63] + "==")) : 2 === n && (t = (e[i - 2] << 8) + e[i - 1], o.push(c[t >> 10] + c[t >> 4 & 63] + c[t << 2 & 63] + "="));
    return o.join("");
  }
}
test635: {
  function f() {
    _crypto.getRandomValues(t);
    return t;
  }
}
test636: {
  function f() {
    t.isBuffer(e) || (e = new t(e, n));
    i.push(e);
    return this;
  }
}
test637: {
  function f() {
    i = null;
    if (n) {
      return a.toString(n);
    }
    return a;
  }
}
test638: {
  function f() {
    t.prototype.init = function () {
      this._s = 0, this._len = 0;
    };
    t.prototype.update = function (t, i) {
      "string" == typeof t && (i = i || "utf8", t = new e(t, i));
      for (var n = this._len += t.length, o = this._s = this._s || 0, a = 0, s = this._block; o < n;) {
        for (var r = Math.min(t.length, a + this._blockSize - o % this._blockSize), l = r - a, c = 0; c < l; c++) s[o % this._blockSize + c] = t[c + a];
        o += l, a += l, o % this._blockSize === 0 && this._update(s);
      }
      this._s = o;
      return this;
    };
    t.prototype.digest = function (e) {
      var t = 8 * this._len;
      this._block[this._len % this._blockSize] = 128, this._block.fill(0, this._len % this._blockSize + 1), t % (8 * this._blockSize) >= 8 * this._finalSize && (this._update(this._block), this._block.fill(0)), this._block.writeInt32BE(t, this._blockSize - 4);
      var i = this._update(this._block) || this._hash();
      if (e) {
        return i.toString(e);
      }
      return i;
    };
    t.prototype._update = function () {
      throw new Error("_update must be implemented by subclass");
    };
    return t;
  }
}
test639: {
  function f() {
    this._s = o;
    return this;
  }
}
test640: {
  function f() {
    n(i, t);
    i.prototype.init = function () {
      this._a = 1732584193;
      this._b = 4023233417;
      this._c = 2562383102;
      this._d = 271733878;
      this._e = 3285377520;
      t.prototype.init.call(this);
      return this;
    };
    i.prototype._POOL = m;
    i.prototype._update = function (e) {
      var t, i, n, l, c, d, u, h, p, m;
      t = d = this._a, i = u = this._b, n = h = this._c, l = p = this._d, c = m = this._e;
      for (var f = this._w, g = 0; g < 80; g++) {
        var _ = f[g] = g < 16 ? e.readInt32BE(4 * g) : r(f[g - 3] ^ f[g - 8] ^ f[g - 14] ^ f[g - 16], 1),
          v = s(s(r(t, 5), o(g, i, n, l)), s(s(c, _), a(g)));
        c = l, l = n, n = r(i, 30), i = t, t = v;
      }
      this._a = s(t, d), this._b = s(i, u), this._c = s(n, h), this._d = s(l, p), this._e = s(c, m);
    };
    i.prototype._hash = function () {
      m.length < 100 && m.push(this);
      var t = new e(20);
      t.writeInt32BE(0 | this._a, l);
      t.writeInt32BE(0 | this._b, c);
      t.writeInt32BE(0 | this._c, d);
      t.writeInt32BE(0 | this._d, u);
      t.writeInt32BE(0 | this._e, h);
      return t;
    };
    return i;
  }
}
test641: {
  function f() {
    this._a = 1732584193;
    this._b = 4023233417;
    this._c = 2562383102;
    this._d = 271733878;
    this._e = 3285377520;
    t.prototype.init.call(this);
    return this;
  }
}
test642: {
  function f() {
    t.writeInt32BE(0 | this._a, l);
    t.writeInt32BE(0 | this._b, c);
    t.writeInt32BE(0 | this._c, d);
    t.writeInt32BE(0 | this._d, u);
    t.writeInt32BE(0 | this._e, h);
    return t;
  }
}
test643: {
  function f() {
    n(i, t);
    i.prototype.init = function () {
      this._a = 1779033703;
      this._b = -1150833019;
      this._c = 1013904242;
      this._d = -1521486534;
      this._e = 1359893119;
      this._f = -1694144372;
      this._g = 528734635;
      this._h = 1541459225;
      this._len = this._s = 0;
      return this;
    };
    i.prototype._update = function (e) {
      var t,
        i,
        n,
        o,
        a,
        p,
        m,
        f,
        g,
        _,
        v = this._w;
      t = 0 | this._a, i = 0 | this._b, n = 0 | this._c, o = 0 | this._d, a = 0 | this._e, p = 0 | this._f, m = 0 | this._g, f = 0 | this._h;
      for (var y = 0; y < 64; y++) {
        var w = v[y] = y < 16 ? e.readInt32BE(4 * y) : u(v[y - 2]) + v[y - 7] + d(v[y - 15]) + v[y - 16];
        g = f + c(a) + s(a, p, m) + h[y] + w, _ = l(t) + r(t, i, n), f = m, m = p, p = a, a = o + g, o = n, n = i, i = t, t = g + _;
      }
      this._a = t + this._a | 0, this._b = i + this._b | 0, this._c = n + this._c | 0, this._d = o + this._d | 0, this._e = a + this._e | 0, this._f = p + this._f | 0, this._g = m + this._g | 0, this._h = f + this._h | 0;
    };
    i.prototype._hash = function () {
      var t = new e(32);
      t.writeInt32BE(this._a, 0);
      t.writeInt32BE(this._b, 4);
      t.writeInt32BE(this._c, 8);
      t.writeInt32BE(this._d, 12);
      t.writeInt32BE(this._e, 16);
      t.writeInt32BE(this._f, 20);
      t.writeInt32BE(this._g, 24);
      t.writeInt32BE(this._h, 28);
      return t;
    };
    return i;
  }
}
test644: {
  function f() {
    this._a = 1779033703;
    this._b = -1150833019;
    this._c = 1013904242;
    this._d = -1521486534;
    this._e = 1359893119;
    this._f = -1694144372;
    this._g = 528734635;
    this._h = 1541459225;
    this._len = this._s = 0;
    return this;
  }
}
test645: {
  function f() {
    t.writeInt32BE(this._a, 0);
    t.writeInt32BE(this._b, 4);
    t.writeInt32BE(this._c, 8);
    t.writeInt32BE(this._d, 12);
    t.writeInt32BE(this._e, 16);
    t.writeInt32BE(this._f, 20);
    t.writeInt32BE(this._g, 24);
    t.writeInt32BE(this._h, 28);
    return t;
  }
}
test646: {
  function f() {
    n(i, t);
    i.prototype.init = function () {
      this._a = 1779033703;
      this._b = -1150833019;
      this._c = 1013904242;
      this._d = -1521486534;
      this._e = 1359893119;
      this._f = -1694144372;
      this._g = 528734635;
      this._h = 1541459225;
      this._al = -205731576;
      this._bl = -2067093701;
      this._cl = -23791573;
      this._dl = 1595750129;
      this._el = -1377402159;
      this._fl = 725511199;
      this._gl = -79577749;
      this._hl = 327033209;
      this._len = this._s = 0;
      return this;
    };
    i.prototype._update = function (e) {
      var t,
        i,
        n,
        l,
        c,
        d,
        u,
        h,
        p,
        m,
        f,
        g,
        _,
        v,
        y,
        w,
        b = this._w;
      t = 0 | this._a, i = 0 | this._b, n = 0 | this._c, l = 0 | this._d, c = 0 | this._e, d = 0 | this._f, u = 0 | this._g, h = 0 | this._h, p = 0 | this._al, m = 0 | this._bl, f = 0 | this._cl, g = 0 | this._dl, _ = 0 | this._el, v = 0 | this._fl, y = 0 | this._gl, w = 0 | this._hl;
      for (var M = 0; M < 80; M++) {
        var T,
          C,
          I = 2 * M;
        if (M < 16) T = b[I] = e.readInt32BE(4 * I), C = b[I + 1] = e.readInt32BE(4 * I + 4);else {
          var A = b[I - 30],
            S = b[I - 30 + 1],
            E = o(A, S, 1) ^ o(A, S, 8) ^ A >>> 7,
            N = o(S, A, 1) ^ o(S, A, 8) ^ o(S, A, 7);
          A = b[I - 4], S = b[I - 4 + 1];
          var x = o(A, S, 19) ^ o(S, A, 29) ^ A >>> 6,
            L = o(S, A, 19) ^ o(A, S, 29) ^ o(S, A, 6),
            O = b[I - 14],
            R = b[I - 14 + 1],
            D = b[I - 32],
            P = b[I - 32 + 1];
          C = N + R, T = E + O + (C >>> 0 < N >>> 0 ? 1 : 0), C += L, T = T + x + (C >>> 0 < L >>> 0 ? 1 : 0), C += P, T = T + D + (C >>> 0 < P >>> 0 ? 1 : 0), b[I] = T, b[I + 1] = C;
        }
        var B = s(t, i, n),
          k = s(p, m, f),
          F = o(t, p, 28) ^ o(p, t, 2) ^ o(p, t, 7),
          H = o(p, t, 28) ^ o(t, p, 2) ^ o(t, p, 7),
          z = o(c, _, 14) ^ o(c, _, 18) ^ o(_, c, 9),
          W = o(_, c, 14) ^ o(_, c, 18) ^ o(c, _, 9),
          G = r[I],
          U = r[I + 1],
          q = a(c, d, u),
          Y = a(_, v, y),
          j = w + W,
          V = h + z + (j >>> 0 < w >>> 0 ? 1 : 0);
        j += Y, V = V + q + (j >>> 0 < Y >>> 0 ? 1 : 0), j += U, V = V + G + (j >>> 0 < U >>> 0 ? 1 : 0), j += C, V = V + T + (j >>> 0 < C >>> 0 ? 1 : 0);
        var X = H + k,
          Q = F + B + (X >>> 0 < H >>> 0 ? 1 : 0);
        h = u, w = y, u = d, y = v, d = c, v = _, _ = g + j | 0, c = l + V + (_ >>> 0 < g >>> 0 ? 1 : 0) | 0, l = n, g = f, n = i, f = m, i = t, m = p, p = j + X | 0, t = V + Q + (p >>> 0 < j >>> 0 ? 1 : 0) | 0;
      }
      this._al = this._al + p | 0, this._bl = this._bl + m | 0, this._cl = this._cl + f | 0, this._dl = this._dl + g | 0, this._el = this._el + _ | 0, this._fl = this._fl + v | 0, this._gl = this._gl + y | 0, this._hl = this._hl + w | 0, this._a = this._a + t + (this._al >>> 0 < p >>> 0 ? 1 : 0) | 0, this._b = this._b + i + (this._bl >>> 0 < m >>> 0 ? 1 : 0) | 0, this._c = this._c + n + (this._cl >>> 0 < f >>> 0 ? 1 : 0) | 0, this._d = this._d + l + (this._dl >>> 0 < g >>> 0 ? 1 : 0) | 0, this._e = this._e + c + (this._el >>> 0 < _ >>> 0 ? 1 : 0) | 0, this._f = this._f + d + (this._fl >>> 0 < v >>> 0 ? 1 : 0) | 0, this._g = this._g + u + (this._gl >>> 0 < y >>> 0 ? 1 : 0) | 0, this._h = this._h + h + (this._hl >>> 0 < w >>> 0 ? 1 : 0) | 0;
    };
    i.prototype._hash = function () {
      function t(e, t, n) {
        i.writeInt32BE(e, n), i.writeInt32BE(t, n + 4);
      }
      var i = new e(64);
      t(this._a, this._al, 0);
      t(this._b, this._bl, 8);
      t(this._c, this._cl, 16);
      t(this._d, this._dl, 24);
      t(this._e, this._el, 32);
      t(this._f, this._fl, 40);
      t(this._g, this._gl, 48);
      t(this._h, this._hl, 56);
      return i;
    };
    return i;
  }
}
test647: {
  function f() {
    this._a = 1779033703;
    this._b = -1150833019;
    this._c = 1013904242;
    this._d = -1521486534;
    this._e = 1359893119;
    this._f = -1694144372;
    this._g = 528734635;
    this._h = 1541459225;
    this._al = -205731576;
    this._bl = -2067093701;
    this._cl = -23791573;
    this._dl = 1595750129;
    this._el = -1377402159;
    this._fl = 725511199;
    this._gl = -79577749;
    this._hl = 327033209;
    this._len = this._s = 0;
    return this;
  }
}
test648: {
  function f() {
    t(this._a, this._al, 0);
    t(this._b, this._bl, 8);
    t(this._c, this._cl, 16);
    t(this._d, this._dl, 24);
    t(this._e, this._el, 32);
    t(this._f, this._fl, 40);
    t(this._g, this._gl, 48);
    t(this._h, this._hl, 56);
    return i;
  }
}
test649: {
  function f() {
    this._hash.update(e, t);
    return this;
  }
}
test650: {
  function f() {
    t.pbkdf2 = i.pbkdf2;
    t.pbkdf2Sync = i.pbkdf2Sync;
    return t;
  }
}
test651: {
  function f() {
    this.followMe.hide();
    this.stopFollowMe.show();
    return;
  }
}
test652: {
  function f() {
    t.alliances[i.allianceId] = i;
    return i;
  }
}
test653: {
  function f() {
    n.allianceId = e.allianceId;
    n.allianceName = e.allianceName;
    t += n.nbMembers;
    return n;
  }
}
test654: {
  function f() {
    i[0].allianceLeader = !0;
    return {
      memberCount: t,
      guilds: i
    };
  }
}
test655: {
  function f() {
    i && (t.push("#NONAME#" !== i.allianceName ? i.allianceName : r("ui.guild.noName")), t.push("[" + ("#TAG#" !== i.allianceTag ? i.allianceTag : r("ui.alliance.noTag")) + "]"));
    return t;
  }
}
test656: {
  function f() {
    d(o);
    o.on("tap", function () {
      window.dofus.sendMessage("PlayerStatusUpdateRequestMessage", {
        status: {
          statusId: i
        }
      }), n.close();
    });
    return o;
  }
}
test657: {
  function f() {
    this._sugTimeout = null;
    if (window.gui.playerData.isFighting) {
      return this.scheduleCheck();
    }
    if (Date.now() - this._coordinator.getLastPopupTime() < h) {
      return this.scheduleCheck();
    }
    this._canSuggestionBeProposed() && this._suggestion.checkAndShowSuggestion();
    return;
  }
}
test658: {
  function f() {
    u = e && e.notification && e.notification.local;
    return !!u;
  }
}
test659: {
  function f() {
    A.setValue("tutorialDone", !0);
    return !1;
  }
}
test660: {
  function f() {
    _ = e;
    O = e.characters;
    window.gui.backgroundScreen.show();
    if (0 === O.length) {
      M.closeAll();
      return M.open("firstCharacterForm");
    }
    if (x) {
      x = !1;
      if (window.gui.playerData.accountCapabilities.tutorialAvailable) {
        window.dofus.sendMessage("CharacterFirstSelectionMessage", {
          id: O[0].id,
          doTutorial: r()
        });
        return;
      }
      return t.selectCharacter(O[0].id);
    }
    if (L) {
      return M.open("characterSelection", O);
    }
    if ("characterId" === b.connectMethod) {
      if (b.characterId) {
        return t.selectCharacter(b.characterId);
      }
      console.error(new Error("characterId is missing!"));
      M.open("characterSelection", O);
      return;
    }
    if ("lastCharacter" === b.connectMethod) {
      return t.selectCharacter(O[0].id);
    }
    M.open("characterSelection", O);
    return;
  }
}
test661: {
  function f() {
    (e & T.CHARACTER_REMODELING_BREED) > 0 && (t.rebreed = !0);
    (e & T.CHARACTER_REMODELING_COLORS) > 0 && (t.recolor = !0);
    (e & T.CHARACTER_REMODELING_COSMETIC) > 0 && (t.relook = !0);
    (e & T.CHARACTER_REMODELING_NAME) > 0 && (t.rename = !0);
    (e & T.CHARACTER_REMODELING_GENDER) > 0 && (t.regender = !0);
    return t;
  }
}
test662: {
  function f() {
    M.closeAll();
    if (0 === O.length) {
      return M.open("serverSelection");
    }
    M.open("characterSelection", O);
    return;
  }
}
test663: {
  function f() {
    0 !== a && this._moveBoxAround(n, e, s);
    n.x += 2 * c * (Math.random() - .5);
    n.y += 2 * c * (Math.random() - .5);
    this._recenterBox(n);
    n.setAsSubboxOf(e);
    this.boxes.push(n);
    return n;
  }
}
test664: {
  function f() {
    this.boxes.push(h);
    return h;
  }
}
test665: {
  function f() {
    this.boxes.push(a);
    return a;
  }
}
test666: {
  function f() {
    m.challengeName = m.createChild("div", {
      className: "challengeName",
      text: e
    });
    m.challengeDesc = m.createChild("div", {
      className: "challengeDesc",
      text: t
    });
    m.challengeLoot = m.createChild("div", {
      className: "challengeLoot",
      text: l("ui.common.loot") + " +" + i + "%"
    });
    m.challengeXp = m.createChild("div", {
      className: "challengeXp",
      text: l("ui.common.xp") + " +" + n + "%"
    });
    u() && (m.challengePoints = m.createChild("div", {
      className: "challengePoints",
      text: r + " " + l("ui.common.point", r)
    }));
    m.challengeStatus = m.createChild("div", {
      className: "challengeStatus",
      text: l("ui.fight.challenge.inProgress")
    });
    c.addTooltip(p, m, {
      longTapExplanation: !0
    });
    p.on("tap", function () {
      window.dofus.sendMessage("ChallengeTargetsListRequestMessage", {
        challengeId: a
      });
    });
    p.setStyle("backgroundImage", d);
    this.show();
    this.firstTimeDisplayed && (this.firstTimeDisplayed = !1, this.setStyle("left", o.mapLeft + "px"));
    return {
      icon: h,
      details: m
    };
  }
}
test667: {
  function f() {
    i.push(c);
    return i.join("");
  }
}
test668: {
  function f() {
    this.logScroller.refresh();
    if (e && !t) {
      return this.logScroller.notify();
    }
    this.logScroller.goToBottom();
    return;
  }
}
test669: {
  function f() {
    a && a.length > 0 ? (r = i ? "ChatClientPrivateWithObjectMessage" : "ChatClientMultiWithObjectMessage", l.objects = a) : r = i ? "ChatClientPrivateMessage" : "ChatClientMultiMessage";
    i ? l.receiver = i : l.channel = t;
    window.dofus.sendMessage(r, l);
    return "";
  }
}
test670: {
  function f() {
    r.forEach(function (e) {
      c += e + "\n";
    });
    l.forEach(function (e) {
      c += o(e) + "\n";
    });
    window.gui.chat.logMsg(c.substring(0, c.length - 1));
    return !0;
  }
}
test671: {
  function f() {
    window.dofus.sendMessage("BasicWhoAmIRequestMessage", {
      verbose: !0
    });
    return !0;
  }
}
test672: {
  function f() {
    c = o("ui.chat.console.currentMap", null, d);
    window.gui.chat.logMsg(c);
    return !0;
  }
}
test673: {
  function f() {
    window.gui.chat.logMsg(h);
    return !0;
  }
}
test674: {
  function f() {
    console.error("getClassNameFromStatus got invalid state", e);
    return "available";
  }
}
test675: {
  function f() {
    t.appendChild(T);
    t.appendChild(c.process(d, {
      objectItems: this._objects,
      channel: this._channel,
      decodeAllPages: this._canDecodeAllPages,
      senderId: this._senderId,
      senderName: this._senderName
    }));
    return t;
  }
}
test676: {
  function f() {
    this.deleteContent();
    this._contentDom = this._createMessageContent();
    this._dom.appendChild(this._contentDom);
    return t;
  }
}
test677: {
  function f() {
    e.appendChild(a.process(this._text, {
      isNonChat: !0,
      channel: this._channel,
      parentClassName: this._parentClassName
    }));
    return e;
  }
}
test678: {
  function f() {
    this.linksToReplace.push([i, n, o]);
    return " " + i + " ";
  }
}
test679: {
  function f() {
    this.previousLinks = this.linksToReplace;
    this.linksToReplace = [];
    return e;
  }
}
test680: {
  function f() {
    e.playerState === a.NOT_CONNECTED && (r += " (" + n("tablet.common.disconnected") + ")");
    return r;
  }
}
test681: {
  function f() {
    console.error(new Error("mutualPopup#setupNames cannot find the other actor: " + n));
    return null;
  }
}
test682: {
  function f() {
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
  }
}
test683: {
  function f() {
    t._waitingPoiCount--;
    if (i) {
      return console.error("No MapPosition for POI at " + e.mapId + "; " + i);
    }
    t._addPoiSync(e, n);
    return;
  }
}
test684: {
  function f() {
    this._scheduleRendering();
    return n;
  }
}
test685: {
  function f() {
    e = e || window.gui.playerData.position.worldmapId;
    return this._POIMap[e] || {};
  }
}
test686: {
  function f() {
    console.warn("GPS.isAtLeastOneQuestObjectiveFollowed: quest id" + e + " not active.");
    return !1;
  }
}
test687: {
  function f() {
    window.gui.chat.logMsg(c("tablet.cartography.flagUpdated", t.worldX, t.worldY));
    return e.updatePOI({
      id: "flag_srv" + t.type,
      x: t.worldX,
      y: t.worldY,
      categoryId: y,
      nameId: t.worldX + "," + t.worldY,
      color: {
        r: 85,
        g: 136,
        b: 0,
        a: 1
      },
      mapId: window.gui.playerData.position.worldmapId,
      isDestination: !0
    });
  }
}
test688: {
  function f() {
    m(d);
    d.on("tap", function () {
      c.openAllianceCard(e.allianceId);
    });
    return {
      side: s,
      emblem: r,
      tag: d,
      characters: a,
      maps: o,
      time: n
    };
  }
}
test689: {
  function f() {
    this.winnerInfo.setText(h("ui.koh.win", A.allianceName));
    this.winnerInfo.show();
    setTimeout(function () {
      t.winnerInfo.setText(""), t.hide();
    }, 6e4);
    return;
  }
}
test690: {
  function f() {
    console.error(new Error("serverId is null"));
    this._onSelectedServerRefused({});
    return;
  }
}
test691: {
  function f() {
    window.gui.openSimplePopup(d("tablet.server.noServersForYourCommunity"));
    y || (console.error("pickUpOneServerForMe:", e), y = !0);
    return;
  }
}
test692: {
  function f() {
    0 === h.length && (T = !0, h = h.concat(p));
    h = a(i, h, T);
    0 === h.length && u && l(u);
    h.sort(function (e, t) {
      return e.completion - t.completion;
    });
    if (0 === h.length) {
      return n("My community servers is empty, for userCommunity " + i);
    }
    m = o(h);
    if (0 === m.length) {
      return n("Available servers is empty, for userCommunity " + i);
    }
    return n(null, m);
  }
}
test693: {
  function f() {
    this._rowCount < this._rows.length ? (this._rows[this._rowCount]._isEmpty = !1, i = this.updateRow(this._rowCount, e, t)) : i = this._addRow(e, null, t);
    this._rowCount++;
    this._updateDisplay();
    return i;
  }
}
test694: {
  function f() {
    console.warn("[Table.insertRow] the specified index (" + e + ") is out of range.");
    return null;
  }
}
test695: {
  function f() {
    this._rowCount++;
    this._updateDisplay();
    return n;
  }
}
test696: {
  function f() {
    !this._highlightable || this._lastSelected || this._disableAutoSelect || this.highlight(0);
    return e;
  }
}
test697: {
  function f() {
    this._disableAutoSelect || this.highlightFirstRow();
    if (a < this._minRows) {
      a = this._minRows - a;
      this._addEmptyRows(a);
      return;
    }
    this._updateDisplay();
    return;
  }
}
test698: {
  function f() {
    this._disableAutoSelect || this.highlightFirstRow();
    this._hiddenRowIds = [];
    if (this._rows.length > this._minRows) {
      this._delEmptyRows(this._rows.length - this._minRows);
      return;
    }
    this._updateDisplay();
    return;
  }
}
test699: {
  function f() {
    this.uniqueDropsElement.hide();
    _.getLWUniqueDropsTextBySubArea(i.subAreaId, function (e, i) {
      if (e) {
        return console.error(e);
      }
      "" !== i && (t.uniqueDropsElement.setText(p("ui.legendaryWeapon.possibleDrop", i)), t.uniqueDropsElement.show());
      return;
    });
    return e(!0);
  }
}
test700: {
  function f() {
    this._shouldShowMapInfo = e;
    if (e) {
      return this._updateMapInfo(function (e) {
        e && t._appear();
      });
    }
    this._markerCount > 0 ? this.addClassNames("noMapInfo") : this._disappear();
    return;
  }
}
test701: {
  function f() {
    i.createChild("div", {
      className: "text",
      text: n
    });
    a(i, t);
    1 === this._markerCount && (this._markerBox.show(), this._smallFlags.show(), this._appear());
    return i;
  }
}
test702: {
  function f() {
    this._sizeInIcons = e;
    return e * y + b[t];
  }
}
test703: {
  function f() {
    n.push("controlsButton");
    return i.appendChild(new a({
      disable: !!e.disable,
      tooltip: e.tooltip,
      className: n,
      scaleOnPress: !0
    }, t));
  }
}
test704: {
  function f() {
    t.closePath();
    t.fill();
    t.stroke();
    t.lineTo(a / 2, o);
    t.lineTo(a, o / 2);
    t.moveTo(a / 2, o);
    t.lineTo(a / 2, s);
    t.stroke();
    return e;
  }
}
test705: {
  function f() {
    t += i % 2 * .5;
    return {
      x: t * s,
      y: .5 * i * r
    };
  }
}
test706: {
  function f() {
    Object.freeze(l);
    return l;
  }
}
test707: {
  function f() {
    console.error("Failed to get texts for NPC. textIds:", s, "error:", e);
    return l._closeDialog();
  }
}
test708: {
  function f() {
    "string" == typeof e.msg && e.actor && t.chat.logNPCMsg(e.msg, e.actor.data.npcId, e.title);
    return t.newSpeechBubble(e);
  }
}
test709: {
  function f() {
    n.myUi = this;
    return n;
  }
}
test710: {
  function f() {
    t.isChangingZoom && (t.isChangingZoom = !1, t.isZoomed && i.freeze());
    return e && e.call(t);
  }
}
test711: {
  function f() {
    this.setValue(e);
    return this._switchMode(b.INSERT);
  }
}
test712: {
  function f() {
    this._setDigit(this.cursor, e);
    this._fixZeroes(this.cursor, e);
    if (0 === this.cursor) {
      return this._switchMode(b.INSERT);
    }
    return this._setCursor(this.cursor - 1);
  }
}
test713: {
  function f() {
    w.getWindow("partyInviteDetails").showPartyDetails(t);
    return "HIDE_DIALOG";
  }
}
test714: {
  function f() {
    a /= s;
    i.getChild("infosParty").setText(m("ui.party.partyInformation", n, o, ~~a));
    return i;
  }
}
test715: {
  function f() {
    c = c || r.differenceBetweenTwoArrays(s.indexedColors, l.indexedColors);
    c && (i.characterBaseInformations.entityLook = a.look, i.emit("lookUpdate", a.look));
    return;
  }
}
test716: {
  function f() {
    e < n ? (t = -1, i = n / e) : (t = 1, i = e / n);
    if (Math.abs(e - n) > 20 || i >= 1.2) {
      return t;
    }
    return 0;
  }
}
test717: {
  function f() {
    H[t] = !0;
    return !0;
  }
}
test718: {
  function f() {
    H[t] = !1;
    return !1;
  }
}
test719: {
  function f() {
    n += t.identification.accountId + " with the error " + i;
    console.error(n);
    return;
  }
}
test720: {
  function f() {
    i.splice(n, 1);
    t.emit("guildLeft", e.guildId);
    return;
  }
}
test721: {
  function f() {
    console.warn("getSpellModifications: the character id is missing for spell: " + t);
    return null;
  }
}
test722: {
  function f() {
    console.warn("getSpellModifications: the character cannot be found for character: " + e + " spell: " + t);
    return null;
  }
}
test723: {
  function f() {
    this.current.perceptors = {
      nbcollectorMax: 0,
      informationsOrderList: [],
      perceptorsMap: {}
    };
    return this.current.perceptors;
  }
}
test724: {
  function f() {
    e || (e = this._initPerceptors());
    return e;
  }
}
test725: {
  function f() {
    t.invitationState === p.SOCIAL_GROUP_INVITATION_OK && window.dofus.sendMessage("GuildGetInformationsMessage", {
      infoType: l.INFO_MEMBERS
    });
    if (t.invitationState !== p.SOCIAL_GROUP_INVITATION_SENT) {
      return f.close("cancel");
    }
    e.openCancelPopup({
      title: d("ui.common.invitation"),
      message: d("ui.craft.waitForCraftClient", t.recrutedName),
      cb: function () {
        window.dofus.sendMessage("GuildInvitationAnswerMessage", {
          accept: !1
        });
      }
    });
    return;
  }
}
test726: {
  function f() {
    this.canCrafterSign && "CLIENT" !== this.craftSide && (n[T] = !0);
    return n;
  }
}
test727: {
  function f() {
    1 === n.length ? (t = n[0], i = !0) : e === this.SKILLID_DECRAFT && (i = !0, t = {
      resultId: this.ITEMID_MAGIC_FRAGMENT,
      resultLevel: 1,
      ingredientIds: [],
      quantities: []
    });
    return {
      isRecipeKnown: i,
      itemToCraft: t
    };
  }
}
test728: {
  function f() {
    n.currentLevel = i.jobLevel;
    n.currentExperience = i.jobXP;
    n.levelExperienceFloor = i.jobXpLevelFloor;
    n.levelExperienceCeil = i.jobXpNextLevelFloor;
    n.percentage = 100;
    n.levelExperienceCeil && (n.percentage = Math.floor((n.currentExperience - n.levelExperienceFloor) / (n.levelExperienceCeil - n.levelExperienceFloor) * 100));
    return n;
  }
}
test729: {
  function f() {
    o.coordinates.posX = l;
    o.coordinates.posY = c;
    if (o.subArea && o.subArea.id === t.subAreaId && o.subAreaId === t.subAreaId) {
      o.emit("mapUpdate");
      r.mapChange(o.subArea.ambientSounds, a.sounds);
      return;
    }
    o.subAreaId = t.subAreaId;
    s.getData("SubAreas", o.subAreaId, function (t, i) {
      if (t) return console.warn("SubAreas error", t);
      r.mapChange(i.ambientSounds, a.sounds), o.subArea = i, o.area = e.databases.Areas[i.areaId], o.superArea = e.databases.SuperAreas[o.area.superAreaId];
      var n = a.worldMap >= 0 ? a.worldMap : o.superArea.worldmapId;
      o.worldmapId !== n && (o.worldmapId = n, o.emit("worldMapUpdate")), o.emit("mapUpdate");
    });
    return;
  }
}
test730: {
  function f() {
    t._timeWhenDisconnected = e._timeWhenDisconnected;
    t._members = e._members;
    t._guests = e._guests;
    t._pastMembers = e._pastMembers;
    return t;
  }
}
test731: {
  function f() {
    window.dofus.sendMessage("PartyAcceptInvitationMessage", {
      partyId: t
    });
    return !0;
  }
}
test732: {
  function f() {
    o |= !1;
    if (i) {
      if (n.finished[t.questId]) {
        return e.logMsg(l("ui.dailyQuest.DQachievement"));
      }
      return e.logMsg(l("ui.dailyQuest.dqNew"));
    }
    if (t.questId === f && n.mainQuest && 1 === n.mainQuest.finishedCount) {
      return e.logMsg(l("ui.dailyQuest.MDQachievement"));
    }
    if (t.questId !== f && n.finished[t.questId]) {
      return e.logMsg(l("ui.quest.questValidation", t.questId));
    }
    if (t.questId === f || o) {
      if (t.questId !== f) {
        return e.logMsg(l("ui.quest.questUpdate", t.questId));
      }
      0;
      return;
    }
    return e.logMsg(l("ui.quest.questNew", t.questId));
  }
}
test733: {
  function f() {
    r.objectiveStatus = !1;
    e.emit("objectiveValidated", n, t.objectiveId);
    o(window.gui.chat, n, !!e.dailyQuests.all[n.questId], e, !0);
    e.emit("questUpdate", t.questId);
    return i();
  }
}
test734: {
  function f() {
    a = e.dailyQuests;
    a.mainQuest.finishedCount = 1;
    e.emit("DQFinished", t.questId);
    n(window.gui.chat, a.mainQuest, -1, s);
    o(window.gui.chat, a.mainQuest, !!e.dailyQuests.all[t.questId], a);
    return i();
  }
}
test735: {
  function f() {
    delete a.active[t.questId];
    if (r || t.questId === f) {
      a.finished[t.questId] = a.all[t.questId] = r;
      r.finishedCount = 1;
      n(window.gui.chat, r, r.stepId, s);
      o(window.gui.chat, r, !!e.dailyQuests.all[t.questId], a);
      e.emit("questFinished", r);
      i();
      return;
    }
    return i(new Error("QuestValidatedMessage: quest gone for " + t.questId));
  }
}
test736: {
  function f() {
    delete t.friendsList[n];
    return t.emit("friendDeleted", n);
  }
}
test737: {
  function f() {
    delete i[n];
    return t.emit(e.session ? "ignoredDeleted" : "enemyDeleted", n);
  }
}
test738: {
  function f() {
    this._isModeratorOrMore && t && this.getURL() && (e = t);
    return e;
  }
}
test739: {
  function f() {
    t.step = n[a].stepNumber;
    return t;
  }
}
test740: {
  function f() {
    Y = !0;
    if (Q.isAvailable()) {
      ae.send("shopIAPListRequest");
      return;
    }
    return m({});
  }
}
test741: {
  function f() {
    le.push(t + " [error:" + e + "]");
    return i();
  }
}
test742: {
  function f() {
    Y = !1;
    if (e) {
      return r(e);
    }
    X = t;
    r(null, t);
    return;
  }
}
test743: {
  function f() {
    t || e.currency !== Z.GOULTINE || (t = {
      price: e.price,
      original_price: e.original_price
    });
    return t;
  }
}
test744: {
  function f() {
    console.error(new Error("Purchase could not be done, store infos are no longer available"));
    H();
    return window.gui.openSimplePopup(ee("tablet.shop.couldNotBuy"));
  }
}
test745: {
  function f() {
    console.error(new Error("Purchase could not be done, error: " + t));
    H();
    return window.gui.openSimplePopup(ee("tablet.shop.couldNotBuy"));
  }
}
test746: {
  function f() {
    t += " and order id: " + e.buyResult.order_id;
    return console.error(new Error(t));
  }
}
test747: {
  function f() {
    o.error(new Error("Could not parse price " + e));
    return NaN;
  }
}
test748: {
  function f() {
    h.s = e.s;
    h.e = e.e;
    h.c = (e = e.c) ? e.slice() : e;
    return;
  }
}
test749: {
  function f() {
    h.e = s;
    h.c = [e];
    return;
  }
}
test750: {
  function f() {
    h = new t(e instanceof t ? e : u);
    return p(h, L + h.e + 1, O);
  }
}
test751: {
  function f() {
    (i = n + i * w - 1) > B ? e.c = e.e = null : i < P ? e.c = [e.e = 0] : (e.e = i, e.c = t);
    return e;
  }
}
test752: {
  function f() {
    u.length = 0;
    n ? (t -= e.e + 1, u[0] = h[(w - t % w) % w], e.e = -t || 0) : u[0] = e.e = 0;
    return e;
  }
}
test753: {
  function f() {
    t.clone = a;
    t.ROUND_UP = 0;
    t.ROUND_DOWN = 1;
    t.ROUND_CEIL = 2;
    t.ROUND_FLOOR = 3;
    t.ROUND_HALF_UP = 4;
    t.ROUND_HALF_DOWN = 5;
    t.ROUND_HALF_EVEN = 6;
    t.ROUND_HALF_CEIL = 7;
    t.ROUND_HALF_FLOOR = 8;
    t.EUCLID = 9;
    t.config = t.set = function (e) {
      var t, i;
      if (null != e) {
        if ("object" != typeof e) throw Error(_ + "Object expected: " + e);
        if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (i = e[t], c(i, 0, C, t), L = i), e.hasOwnProperty(t = "ROUNDING_MODE") && (i = e[t], c(i, 0, 8, t), O = i), e.hasOwnProperty(t = "EXPONENTIAL_AT") && (i = e[t], i && i.pop ? (c(i[0], -C, 0, t), c(i[1], 0, C, t), R = i[0], D = i[1]) : (c(i, -C, C, t), R = -(D = i < 0 ? -i : i))), e.hasOwnProperty(t = "RANGE")) if (i = e[t], i && i.pop) c(i[0], -C, -1, t), c(i[1], 1, C, t), P = i[0], B = i[1];else {
          if (c(i, -C, C, t), !i) throw Error(_ + t + " cannot be zero: " + i);
          P = -(B = i < 0 ? -i : i);
        }
        if (e.hasOwnProperty(t = "CRYPTO")) {
          if (i = e[t], i !== !!i) throw Error(_ + t + " not true or false: " + i);
          if (i) {
            if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw k = !i, Error(_ + "crypto unavailable");
            k = i;
          } else k = i;
        }
        if (e.hasOwnProperty(t = "MODULO_MODE") && (i = e[t], c(i, 0, 9, t), F = i), e.hasOwnProperty(t = "POW_PRECISION") && (i = e[t], c(i, 0, C, t), H = i), e.hasOwnProperty(t = "FORMAT")) {
          if (i = e[t], "object" != typeof i) throw Error(_ + t + " not an object: " + i);
          z = i;
        }
        if (e.hasOwnProperty(t = "ALPHABET")) {
          if (i = e[t], "string" != typeof i || /^.$|[+-.\s]|(.).*\1/.test(i)) throw Error(_ + t + " invalid: " + i);
          W = i;
        }
      }
      return {
        DECIMAL_PLACES: L,
        ROUNDING_MODE: O,
        EXPONENTIAL_AT: [R, D],
        RANGE: [P, B],
        CRYPTO: k,
        MODULO_MODE: F,
        POW_PRECISION: H,
        FORMAT: z,
        ALPHABET: W
      };
    };
    t.isBigNumber = function (e) {
      return e instanceof t || e && e._isBigNumber === !0 || !1;
    };
    t.maximum = t.max = function () {
      return n(arguments, N.lt);
    };
    t.minimum = t.min = function () {
      return n(arguments, N.gt);
    };
    t.random = function () {
      var e = 9007199254740992,
        i = Math.random() * e & 2097151 ? function () {
          return g(Math.random() * e);
        } : function () {
          return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0);
        };
      return function (e) {
        var n,
          o,
          a,
          s,
          r,
          l = 0,
          d = [],
          u = new t(x);
        if (null == e ? e = L : c(e, 0, C), s = f(e / w), k) if (crypto.getRandomValues) {
          for (n = crypto.getRandomValues(new Uint32Array(s *= 2)); l < s;) r = 131072 * n[l] + (n[l + 1] >>> 11), r >= 9e15 ? (o = crypto.getRandomValues(new Uint32Array(2)), n[l] = o[0], n[l + 1] = o[1]) : (d.push(r % 1e14), l += 2);
          l = s / 2;
        } else {
          if (!crypto.randomBytes) throw k = !1, Error(_ + "crypto unavailable");
          for (n = crypto.randomBytes(s *= 7); l < s;) r = 281474976710656 * (31 & n[l]) + 1099511627776 * n[l + 1] + 4294967296 * n[l + 2] + 16777216 * n[l + 3] + (n[l + 4] << 16) + (n[l + 5] << 8) + n[l + 6], r >= 9e15 ? crypto.randomBytes(7).copy(n, l) : (d.push(r % 1e14), l += 7);
          l = s / 7;
        }
        if (!k) for (; l < s;) r = i(), r < 9e15 && (d[l++] = r % 1e14);
        for (s = d[--l], e %= w, s && e && (r = M[w - e], d[l] = g(s / r) * r); 0 === d[l]; d.pop(), l--);
        if (l < 0) d = [a = 0];else {
          for (a = -1; 0 === d[0]; d.splice(0, 1), a -= w);
          for (l = 1, r = d[0]; r >= 10; r /= 10, l++);
          l < w && (a -= w - l);
        }
        u.e = a;
        u.c = d;
        return u;
      };
    }();
    t.sum = function () {
      for (var e = 1, i = arguments, n = new t(i[0]); e < i.length;) n = n.plus(i[e++]);
      return n;
    };
    S = function () {
      function e(e, t, i, n) {
        for (var o, a, s = [0], r = 0, l = e.length; r < l;) {
          for (a = s.length; a--; s[a] *= t);
          for (s[0] += n.indexOf(e.charAt(r++)), o = 0; o < s.length; o++) s[o] > i - 1 && (null == s[o + 1] && (s[o + 1] = 0), s[o + 1] += s[o] / i | 0, s[o] %= i);
        }
        return s.reverse();
      }
      var i = "0123456789";
      return function (n, o, a, s, l) {
        var c,
          d,
          u,
          p,
          m,
          f,
          g,
          _,
          v = n.indexOf("."),
          y = L,
          w = O;
        for (v >= 0 && (p = H, H = 0, n = n.replace(".", ""), _ = new t(o), f = _.pow(n.length - v), H = p, _.c = e(h(r(f.c), f.e, "0"), 10, a, i), _.e = _.c.length), g = e(n, o, a, l ? (c = W, i) : (c = i, W)), u = p = g.length; 0 == g[--p]; g.pop());
        if (!g[0]) return c.charAt(0);
        if (v < 0 ? --u : (f.c = g, f.e = u, f.s = s, f = A(f, _, y, w, a), g = f.c, m = f.r, u = f.e), d = u + y + 1, v = g[d], p = a / 2, m = m || d < 0 || null != g[d + 1], m = w < 4 ? (null != v || m) && (0 == w || w == (f.s < 0 ? 3 : 2)) : v > p || v == p && (4 == w || m || 6 == w && 1 & g[d - 1] || w == (f.s < 0 ? 8 : 7)), d < 1 || !g[0]) n = m ? h(c.charAt(1), -y, c.charAt(0)) : c.charAt(0);else {
          if (g.length = d, m) for (--a; ++g[--d] > a;) g[d] = 0, d || (++u, g = [1].concat(g));
          for (p = g.length; !g[--p];);
          for (v = 0, n = ""; v <= p; n += c.charAt(g[v++]));
          n = h(n, u, c.charAt(0));
        }
        return n;
      };
    }();
    A = function () {
      function e(e, t, i) {
        var n,
          o,
          a,
          s,
          r = 0,
          l = e.length,
          c = t % T,
          d = t / T | 0;
        for (e = e.slice(); l--;) a = e[l] % T, s = e[l] / T | 0, n = d * a + s * c, o = c * a + n % T * T + r, r = (o / i | 0) + (n / T | 0) + d * s, e[l] = o % i;
        r && (e = [r].concat(e));
        return e;
      }
      function i(e, t, i, n) {
        var o, a;
        if (i != n) a = i > n ? 1 : -1;else for (o = a = 0; o < i; o++) if (e[o] != t[o]) {
          a = e[o] > t[o] ? 1 : -1;
          break;
        }
        return a;
      }
      function n(e, t, i, n) {
        for (var o = 0; i--;) e[i] -= o, o = e[i] < t[i] ? 1 : 0, e[i] = o * n + e[i] - t[i];
        for (; !e[0] && e.length > 1; e.splice(0, 1));
      }
      return function (o, a, r, l, c) {
        var d,
          u,
          h,
          m,
          f,
          _,
          v,
          b,
          M,
          T,
          C,
          I,
          A,
          S,
          E,
          N,
          x,
          L = o.s == a.s ? 1 : -1,
          O = o.c,
          R = a.c;
        if (!(O && O[0] && R && R[0])) return new t(o.s && a.s && (O ? !R || O[0] != R[0] : R) ? O && 0 == O[0] || !R ? 0 * L : L / 0 : NaN);
        for (b = new t(L), M = b.c = [], u = o.e - a.e, L = r + u + 1, c || (c = y, u = s(o.e / w) - s(a.e / w), L = L / w | 0), h = 0; R[h] == (O[h] || 0); h++);
        if (R[h] > (O[h] || 0) && u--, L < 0) M.push(1), m = !0;else {
          for (S = O.length, N = R.length, h = 0, L += 2, f = g(c / (R[0] + 1)), f > 1 && (R = e(R, f, c), O = e(O, f, c), N = R.length, S = O.length), A = N, T = O.slice(0, N), C = T.length; C < N; T[C++] = 0);
          x = R.slice(), x = [0].concat(x), E = R[0], R[1] >= c / 2 && E++;
          do {
            if (f = 0, d = i(R, T, N, C), d < 0) {
              if (I = T[0], N != C && (I = I * c + (T[1] || 0)), f = g(I / E), f > 1) for (f >= c && (f = c - 1), _ = e(R, f, c), v = _.length, C = T.length; 1 == i(_, T, v, C);) f--, n(_, N < v ? x : R, v, c), v = _.length, d = 1;else 0 == f && (d = f = 1), _ = R.slice(), v = _.length;
              if (v < C && (_ = [0].concat(_)), n(T, _, C, c), C = T.length, d == -1) for (; i(R, T, N, C) < 1;) f++, n(T, N < C ? x : R, C, c), C = T.length;
            } else 0 === d && (f++, T = [0]);
            M[h++] = f, T[0] ? T[C++] = O[A] || 0 : (T = [O[A]], C = 1);
          } while ((A++ < S || null != T[0]) && L--);
          m = null != T[0], M[0] || M.splice(0, 1);
        }
        if (c == y) {
          for (h = 1, L = M[0]; L >= 10; L /= 10, h++);
          p(b, r + (b.e = h + u * w - 1) + 1, l, m);
        } else b.e = u, b.r = +m;
        return b;
      };
    }();
    E = function () {
      var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
        i = /^([^.]+)\.$/,
        n = /^\.([^.]+)$/,
        o = /^-?(Infinity|NaN)$/,
        a = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
      return function (s, r, l, c) {
        var d,
          u = l ? r : r.replace(a, "");
        if (o.test(u)) s.s = isNaN(u) ? null : u < 0 ? -1 : 1, s.c = s.e = null;else {
          if (!l && (u = u.replace(e, function (e, t, i) {
            d = "x" == (i = i.toLowerCase()) ? 16 : "b" == i ? 2 : 8;
            if (c && c != d) {
              return e;
            }
            return t;
          }), c && (d = c, u = u.replace(i, "$1").replace(n, "0.$1")), r != u)) return new t(u, d);
          if (t.DEBUG) throw Error(_ + "Not a" + (c ? " base " + c : "") + " number: " + r);
          s.c = s.e = s.s = null;
        }
      };
    }();
    N.absoluteValue = N.abs = function () {
      var e = new t(this);
      e.s < 0 && (e.s = 1);
      return e;
    };
    N.comparedTo = function (e, i) {
      return l(this, new t(e, i));
    };
    N.decimalPlaces = N.dp = function (e, i) {
      var n,
        o,
        a,
        r = this;
      if (null != e) return c(e, 0, C), null == i ? i = O : c(i, 0, 8), p(new t(r), e + r.e + 1, i);
      if (!(n = r.c)) return null;
      if (o = ((a = n.length - 1) - s(this.e / w)) * w, a = n[a]) for (; a % 10 == 0; a /= 10, o--);
      o < 0 && (o = 0);
      return o;
    };
    N.dividedBy = N.div = function (e, i) {
      return A(this, new t(e, i), L, O);
    };
    N.dividedToIntegerBy = N.idiv = function (e, i) {
      return A(this, new t(e, i), 0, 1);
    };
    N.exponentiatedBy = N.pow = function (e, i) {
      var n,
        o,
        a,
        s,
        r,
        l,
        c,
        u,
        h,
        m = this;
      if (e = new t(e), e.c && !e.isInteger()) throw Error(_ + "Exponent not an integer: " + I(e));
      if (null != i && (i = new t(i)), l = e.e > 14, !m.c || !m.c[0] || 1 == m.c[0] && !m.e && 1 == m.c.length || !e.c || !e.c[0]) return h = new t(Math.pow(+I(m), l ? 2 - d(e) : +I(e))), i ? h.mod(i) : h;
      if (c = e.s < 0, i) {
        if (i.c ? !i.c[0] : !i.s) return new t(NaN);
        o = !c && m.isInteger() && i.isInteger(), o && (m = m.mod(i));
      } else {
        if (e.e > 9 && (m.e > 0 || m.e < -1 || (0 == m.e ? m.c[0] > 1 || l && m.c[1] >= 24e7 : m.c[0] < 8e13 || l && m.c[0] <= 9999975e7))) return s = m.s < 0 && d(e) ? -0 : 0, m.e > -1 && (s = 1 / s), new t(c ? 1 / s : s);
        H && (s = f(H / w + 2));
      }
      for (l ? (n = new t(.5), c && (e.s = 1), u = d(e)) : (a = Math.abs(+I(e)), u = a % 2), h = new t(x);;) {
        if (u) {
          if (h = h.times(m), !h.c) break;
          s ? h.c.length > s && (h.c.length = s) : o && (h = h.mod(i));
        }
        if (a) {
          if (a = g(a / 2), 0 === a) break;
          u = a % 2;
        } else if (e = e.times(n), p(e, e.e + 1, 1), e.e > 14) u = d(e);else {
          if (a = +I(e), 0 === a) break;
          u = a % 2;
        }
        m = m.times(m), s ? m.c && m.c.length > s && (m.c.length = s) : o && (m = m.mod(i));
      }
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
    };
    N.integerValue = function (e) {
      var i = new t(this);
      null == e ? e = O : c(e, 0, 8);
      return p(i, i.e + 1, e);
    };
    N.isEqualTo = N.eq = function (e, i) {
      return 0 === l(this, new t(e, i));
    };
    N.isFinite = function () {
      return !!this.c;
    };
    N.isGreaterThan = N.gt = function (e, i) {
      return l(this, new t(e, i)) > 0;
    };
    N.isGreaterThanOrEqualTo = N.gte = function (e, i) {
      return 1 === (i = l(this, new t(e, i))) || 0 === i;
    };
    N.isInteger = function () {
      return !!this.c && s(this.e / w) > this.c.length - 2;
    };
    N.isLessThan = N.lt = function (e, i) {
      return l(this, new t(e, i)) < 0;
    };
    N.isLessThanOrEqualTo = N.lte = function (e, i) {
      return (i = l(this, new t(e, i))) === -1 || 0 === i;
    };
    N.isNaN = function () {
      return !this.s;
    };
    N.isNegative = function () {
      return this.s < 0;
    };
    N.isPositive = function () {
      return this.s > 0;
    };
    N.isZero = function () {
      return !!this.c && 0 == this.c[0];
    };
    N.minus = function (e, i) {
      var n,
        a,
        r,
        l,
        c = this,
        d = c.s;
      if (e = new t(e, i), i = e.s, !d || !i) return new t(NaN);
      if (d != i) return e.s = -i, c.plus(e);
      var u = c.e / w,
        h = e.e / w,
        p = c.c,
        m = e.c;
      if (!u || !h) {
        if (!p || !m) return p ? (e.s = -i, e) : new t(m ? c : NaN);
        if (!p[0] || !m[0]) return m[0] ? (e.s = -i, e) : new t(p[0] ? c : 3 == O ? -0 : 0);
      }
      if (u = s(u), h = s(h), p = p.slice(), d = u - h) {
        for ((l = d < 0) ? (d = -d, r = p) : (h = u, r = m), r.reverse(), i = d; i--; r.push(0));
        r.reverse();
      } else for (a = (l = (d = p.length) < (i = m.length)) ? d : i, d = i = 0; i < a; i++) if (p[i] != m[i]) {
        l = p[i] < m[i];
        break;
      }
      if (l && (r = p, p = m, m = r, e.s = -e.s), i = (a = m.length) - (n = p.length), i > 0) for (; i--; p[n++] = 0);
      for (i = y - 1; a > d;) {
        if (p[--a] < m[a]) {
          for (n = a; n && !p[--n]; p[n] = i);
          --p[n], p[a] += y;
        }
        p[a] -= m[a];
      }
      for (; 0 == p[0]; p.splice(0, 1), --h);
      if (p[0]) {
        return o(e, p, h);
      }
      e.s = 3 == O ? -1 : 1;
      e.c = [e.e = 0];
      return e;
    };
    N.modulo = N.mod = function (e, i) {
      var n,
        o,
        a = this;
      e = new t(e, i);
      if (!a.c || !e.s || e.c && !e.c[0]) {
        return new t(NaN);
      }
      if (!e.c || a.c && !a.c[0]) {
        return new t(a);
      }
      9 == F ? (o = e.s, e.s = 1, n = A(a, e, 0, 3), e.s = o, n.s *= o) : n = A(a, e, 0, F);
      e = a.minus(n.times(e));
      e.c[0] || 1 != F || (e.s = a.s);
      return e;
    };
    N.multipliedBy = N.times = function (e, i) {
      var n,
        a,
        r,
        l,
        c,
        d,
        u,
        h,
        p,
        m,
        f,
        g,
        _,
        v,
        b,
        M = this,
        C = M.c,
        I = (e = new t(e, i)).c;
      if (!(C && I && C[0] && I[0])) return !M.s || !e.s || C && !C[0] && !I || I && !I[0] && !C ? e.c = e.e = e.s = null : (e.s *= M.s, C && I ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
      for (a = s(M.e / w) + s(e.e / w), e.s *= M.s, u = C.length, m = I.length, u < m && (_ = C, C = I, I = _, r = u, u = m, m = r), r = u + m, _ = []; r--; _.push(0));
      for (v = y, b = T, r = m; --r >= 0;) {
        for (n = 0, f = I[r] % b, g = I[r] / b | 0, c = u, l = r + c; l > r;) h = C[--c] % b, p = C[c] / b | 0, d = g * h + p * f, h = f * h + d % b * b + _[l] + n, n = (h / v | 0) + (d / b | 0) + g * p, _[l--] = h % v;
        _[l] = n;
      }
      n ? ++a : _.splice(0, 1);
      return o(e, _, a);
    };
    N.negated = function () {
      var e = new t(this);
      e.s = -e.s || null;
      return e;
    };
    N.plus = function (e, i) {
      var n,
        a = this,
        r = a.s;
      if (e = new t(e, i), i = e.s, !r || !i) return new t(NaN);
      if (r != i) return e.s = -i, a.minus(e);
      var l = a.e / w,
        c = e.e / w,
        d = a.c,
        u = e.c;
      if (!l || !c) {
        if (!d || !u) return new t(r / 0);
        if (!d[0] || !u[0]) return u[0] ? e : new t(d[0] ? a : 0 * r);
      }
      if (l = s(l), c = s(c), d = d.slice(), r = l - c) {
        for (r > 0 ? (c = l, n = u) : (r = -r, n = d), n.reverse(); r--; n.push(0));
        n.reverse();
      }
      for (r = d.length, i = u.length, r - i < 0 && (n = u, u = d, d = n, i = r), r = 0; i;) r = (d[--i] = d[i] + u[i] + r) / y | 0, d[i] = y === d[i] ? 0 : d[i] % y;
      r && (d = [r].concat(d), ++c);
      return o(e, d, c);
    };
    N.precision = N.sd = function (e, i) {
      var n,
        o,
        a,
        s = this;
      if (null != e && e !== !!e) return c(e, 1, C), null == i ? i = O : c(i, 0, 8), p(new t(s), e, i);
      if (!(n = s.c)) return null;
      if (a = n.length - 1, o = a * w + 1, a = n[a]) {
        for (; a % 10 == 0; a /= 10, o--);
        for (a = n[0]; a >= 10; a /= 10, o++);
      }
      e && s.e + 1 > o && (o = s.e + 1);
      return o;
    };
    N.shiftedBy = function (e) {
      c(e, -b, b);
      return this.times("1e" + e);
    };
    N.squareRoot = N.sqrt = function () {
      var e,
        i,
        n,
        o,
        a,
        l = this,
        c = l.c,
        d = l.s,
        u = l.e,
        h = L + 4,
        m = new t("0.5");
      if (1 !== d || !c || !c[0]) return new t(!d || d < 0 && (!c || c[0]) ? NaN : c ? l : 1 / 0);
      if (d = Math.sqrt(+I(l)), 0 == d || d == 1 / 0 ? (i = r(c), (i.length + u) % 2 == 0 && (i += "0"), d = Math.sqrt(+i), u = s((u + 1) / 2) - (u < 0 || u % 2), d == 1 / 0 ? i = "1e" + u : (i = d.toExponential(), i = i.slice(0, i.indexOf("e") + 1) + u), n = new t(i)) : n = new t(d + ""), n.c[0]) for (u = n.e, d = u + h, d < 3 && (d = 0);;) if (a = n, n = m.times(a.plus(A(l, a, h, 1))), r(a.c).slice(0, d) === (i = r(n.c)).slice(0, d)) {
        if (n.e < u && --d, i = i.slice(d - 3, d + 1), "9999" != i && (o || "4999" != i)) {
          +i && (+i.slice(1) || "5" != i.charAt(0)) || (p(n, n.e + L + 2, 1), e = !n.times(n).eq(l));
          break;
        }
        if (!o && (p(a, a.e + L + 2, 0), a.times(a).eq(l))) {
          n = a;
          break;
        }
        h += 4, d += 4, o = 1;
      }
      return p(n, n.e + L + 1, O, e);
    };
    N.toExponential = function (e, t) {
      null != e && (c(e, 0, C), e++);
      return i(this, e, t, 1);
    };
    N.toFixed = function (e, t) {
      null != e && (c(e, 0, C), e = e + this.e + 1);
      return i(this, e, t);
    };
    N.toFormat = function (e, t, i) {
      var n,
        o = this;
      if (null == i) null != e && t && "object" == typeof t ? (i = t, t = null) : e && "object" == typeof e ? (i = e, e = t = null) : i = z;else if ("object" != typeof i) throw Error(_ + "Argument not an object: " + i);
      if (n = o.toFixed(e, t), o.c) {
        var a,
          s = n.split("."),
          r = +i.groupSize,
          l = +i.secondaryGroupSize,
          c = i.groupSeparator || "",
          d = s[0],
          u = s[1],
          h = o.s < 0,
          p = h ? d.slice(1) : d,
          m = p.length;
        if (l && (a = r, r = l, l = a, m -= a), r > 0 && m > 0) {
          for (a = m % r || r, d = p.substr(0, a); a < m; a += r) d += c + p.substr(a, r);
          l > 0 && (d += c + p.slice(a)), h && (d = "-" + d);
        }
        n = u ? d + (i.decimalSeparator || "") + ((l = +i.fractionGroupSize) ? u.replace(new RegExp("\\d{" + l + "}\\B", "g"), "$&" + (i.fractionGroupSeparator || "")) : u) : d;
      }
      return (i.prefix || "") + n + (i.suffix || "");
    };
    N.toFraction = function (e) {
      var i,
        n,
        o,
        a,
        s,
        l,
        c,
        d,
        u,
        h,
        p,
        m,
        f = this,
        g = f.c;
      if (null != e && (c = new t(e), !c.isInteger() && (c.c || 1 !== c.s) || c.lt(x))) throw Error(_ + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + I(c));
      if (!g) return new t(f);
      for (i = new t(x), u = n = new t(x), o = d = new t(x), m = r(g), s = i.e = m.length - f.e - 1, i.c[0] = M[(l = s % w) < 0 ? w + l : l], e = !e || c.comparedTo(i) > 0 ? s > 0 ? i : u : c, l = B, B = 1 / 0, c = new t(m), d.c[0] = 0; h = A(c, i, 0, 1), a = n.plus(h.times(o)), 1 != a.comparedTo(e);) n = o, o = a, u = d.plus(h.times(a = u)), d = a, i = c.minus(h.times(a = i)), c = a;
      a = A(e.minus(n), o, 0, 1);
      d = d.plus(a.times(u));
      n = n.plus(a.times(o));
      d.s = u.s = f.s;
      s = 2 * s;
      p = A(u, o, s, O).minus(f).abs().comparedTo(A(d, n, s, O).minus(f).abs()) < 1 ? [u, o] : [d, n];
      B = l;
      return p;
    };
    N.toNumber = function () {
      return +I(this);
    };
    N.toPrecision = function (e, t) {
      null != e && c(e, 1, C);
      return i(this, e, t, 2);
    };
    N.toString = function (e) {
      var t,
        i = this,
        n = i.s,
        o = i.e;
      null === o ? n ? (t = "Infinity", n < 0 && (t = "-" + t)) : t = "NaN" : (t = r(i.c), null == e ? t = o <= R || o >= D ? u(t, o) : h(t, o, "0") : (c(e, 2, W.length, "Base"), t = S(h(t, o, "0"), 10, e, n, !0)), n < 0 && i.c[0] && (t = "-" + t));
      return t;
    };
    N.valueOf = N.toJSON = function () {
      return I(this);
    };
    N._isBigNumber = !0;
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator && (N[Symbol.toStringTag] = "BigNumber", N[Symbol["for"]("nodejs.util.inspect.custom")] = N.valueOf);
    null != e && t.set(e);
    return t;
  }
}
test754: {
  function f() {
    u.e = a;
    u.c = d;
    return u;
  }
}
test755: {
  function f() {
    r && (e = [r].concat(e));
    return e;
  }
}
test756: {
  function f() {
    d = "x" == (i = i.toLowerCase()) ? 16 : "b" == i ? 2 : 8;
    if (c && c != d) {
      return e;
    }
    return t;
  }
}
test757: {
  function f() {
    e.s < 0 && (e.s = 1);
    return e;
  }
}
test758: {
  function f() {
    c(e, 0, C);
    null == i ? i = O : c(i, 0, 8);
    return p(new t(r), e + r.e + 1, i);
  }
}
test759: {
  function f() {
    o < 0 && (o = 0);
    return o;
  }
}
test760: {
  function f() {
    h = new t(Math.pow(+I(m), l ? 2 - d(e) : +I(e)));
    if (i) {
      return h.mod(i);
    }
    return h;
  }
}
test761: {
  function f() {
    s = m.s < 0 && d(e) ? -0 : 0;
    m.e > -1 && (s = 1 / s);
    return new t(c ? 1 / s : s);
  }
}
test762: {
  function f() {
    null == e ? e = O : c(e, 0, 8);
    return p(i, i.e + 1, e);
  }
}
test763: {
  function f() {
    e.s = -i;
    return c.plus(e);
  }
}
test764: {
  function f() {
    e = new t(e, i);
    if (!a.c || !e.s || e.c && !e.c[0]) {
      return new t(NaN);
    }
    if (!e.c || a.c && !a.c[0]) {
      return new t(a);
    }
    9 == F ? (o = e.s, e.s = 1, n = A(a, e, 0, 3), e.s = o, n.s *= o) : n = A(a, e, 0, F);
    e = a.minus(n.times(e));
    e.c[0] || 1 != F || (e.s = a.s);
    return e;
  }
}
test765: {
  function f() {
    !M.s || !e.s || C && !C[0] && !I || I && !I[0] && !C ? e.c = e.e = e.s = null : (e.s *= M.s, C && I ? (e.c = [0], e.e = 0) : e.c = e.e = null);
    return e;
  }
}
test766: {
  function f() {
    n ? ++a : _.splice(0, 1);
    return o(e, _, a);
  }
}
test767: {
  function f() {
    e.s = -e.s || null;
    return e;
  }
}
test768: {
  function f() {
    e.s = -i;
    return a.minus(e);
  }
}
test769: {
  function f() {
    r && (d = [r].concat(d), ++c);
    return o(e, d, c);
  }
}
test770: {
  function f() {
    c(e, 1, C);
    null == i ? i = O : c(i, 0, 8);
    return p(new t(s), e, i);
  }
}
test771: {
  function f() {
    e && s.e + 1 > o && (o = s.e + 1);
    return o;
  }
}
test772: {
  function f() {
    c(e, -b, b);
    return this.times("1e" + e);
  }
}
test773: {
  function f() {
    null != e && (c(e, 0, C), e++);
    return i(this, e, t, 1);
  }
}
test774: {
  function f() {
    null != e && (c(e, 0, C), e = e + this.e + 1);
    return i(this, e, t);
  }
}
test775: {
  function f() {
    a = A(e.minus(n), o, 0, 1);
    d = d.plus(a.times(u));
    n = n.plus(a.times(o));
    d.s = u.s = f.s;
    s = 2 * s;
    p = A(u, o, s, O).minus(f).abs().comparedTo(A(d, n, s, O).minus(f).abs()) < 1 ? [u, o] : [d, n];
    B = l;
    return p;
  }
}
test776: {
  function f() {
    null != e && c(e, 1, C);
    return i(this, e, t, 2);
  }
}
test777: {
  function f() {
    null === o ? n ? (t = "Infinity", n < 0 && (t = "-" + t)) : t = "NaN" : (t = r(i.c), null == e ? t = o <= R || o >= D ? u(t, o) : h(t, o, "0") : (c(e, 2, W.length, "Base"), t = S(h(t, o, "0"), 10, e, n, !0)), n < 0 && i.c[0] && (t = "-" + t));
    return t;
  }
}
test778: {
  function f() {
    o.sort(function (e, t) {
      var i = new Date(e.external_article.enddate),
        n = new Date(t.external_article.enddate);
      return i - n;
    });
    return o[0] || n[0] || null;
  }
}
test779: {
  function f() {
    n.sort(function (e, t) {
      var i = e.external_article && e.external_article.enddate,
        n = t.external_article && t.external_article.enddate,
        o = "ARTICLE" === e.type ? 0 : 1,
        a = "ARTICLE" === t.type ? 0 : 1;
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
    });
    return n[0] || null;
  }
}
test780: {
  function f() {
    s[e] = t;
    return t;
  }
}
test781: {
  function f() {
    t.attr && this.setAttributes(t.attr, n);
    return i.appendChild(n);
  }
}
test782: {
  function f() {
    i.setStyle("backgroundImage", e.getStyle("backgroundImage"));
    e.once("dragEnd", function () {
      i.setStyle("backgroundImage", null);
    });
    return !0;
  }
}
test783: {
  function f() {
    console.error(new Error("Pending retry are empty " + e));
    return !1;
  }
}
test784: {
  function f() {
    t.openTab(0);
    return t;
  }
}
test785: {
  function f() {
    this._contextMenuParams.item = this.data;
    return o.prototype._getContextualMenuProperties.call(this);
  }
}
test786: {
  function f() {
    this.shortcut = e;
    if (i) {
      this.setSpell(i);
      this.setContextMenu("spell", {
        spell: i,
        canRemove: !0,
        onClose: this._onContextualMenuClosed.bind(this)
      });
      return;
    }
    this.delayedSetShortcutData = {
      shortcut: e,
      character: t,
      cb: this.setShortcut.bind(this, e)
    };
    return t.spellData.once("loaded", this.delayedSetShortcutData.cb);
  }
}
test787: {
  function f() {
    i.push(s + t);
    return i;
  }
}
test788: {
  function f() {
    t.statsDetails ? e.refreshStatsTooltipContent(t.statsDetails) : t.statsDetails = e.createStatsTooltipContent();
    return t.statsDetails;
  }
}
test789: {
  function f() {
    c.spellName = n.spell.getName();
    c.casterName = r.name;
    c.effects = e;
    o ? o.updateUI(c) : o = new l(c);
    return o;
  }
}
test790: {
  function f() {
    h && (C = s, I = w);
    p && b < I && (C = r, I = b);
    m && M < I && (C = d, I = M);
    f && T < I && (C = u, I = T);
    return C;
  }
}
test791: {
  function f() {
    e.top = Math.max(m.mapTop, e.top);
    e.left = Math.max(m.mapLeft, e.left);
    e.top + e.height > m.mapHeight + m.mapTop && (e.top -= e.top + e.height - m.mapHeight - m.mapTop);
    e.left + e.width > m.mapWidth + m.mapLeft && (e.left -= e.left + e.width - m.mapWidth - m.mapLeft);
    return e;
  }
}
test792: {
  function f() {
    a.resetCellZoneEffect();
    return i(e);
  }
}
test793: {
  function f() {
    a[i] = n;
    a[n] = i;
    return !0;
  }
}
test794: {
  function f() {
    a[i] = n;
    return !0;
  }
}
test795: {
  function f() {
    l._refreshPositions(I);
    return e(t);
  }
}
test796: {
  function f() {
    console.warn("Fighter " + this.caster.id + " does not exist");
    return !1;
  }
}
test797: {
  function f() {
    console.warn("Fighter " + this.target.id + " does not exist");
    return !1;
  }
}
test798: {
  function f() {
    a(m);
    return h;
  }
}
test799: {
  function f() {
    1 === i.x && 1 === i.y ? n = o.DIRECTION_EAST : 1 === i.x && 0 === i.y ? n = o.DIRECTION_SOUTH_EAST : 1 === i.x && i.y === -1 ? n = o.DIRECTION_SOUTH : 0 === i.x && i.y === -1 ? n = o.DIRECTION_SOUTH_WEST : i.x === -1 && i.y === -1 ? n = o.DIRECTION_WEST : i.x === -1 && 0 === i.y ? n = o.DIRECTION_NORTH_WEST : i.x === -1 && 1 === i.y ? n = o.DIRECTION_NORTH : 0 === i.x && 1 === i.y && (n = o.DIRECTION_NORTH_EAST);
    return n;
  }
}
test800: {
  function f() {
    s = n ? 2 * Math.round(s / 90) + 1 : Math.round(s / 45) + 1;
    s < 0 && (s += 8);
    return s;
  }
}
test801: {
  function f() {
    this.isAccurate || (o = "Ôö¼ÔûÆ" + o, s = "Ôö¼ÔûÆ" + s, i.max && (a = "Ôö¼ÔûÆ" + a), i.maxCritical && (r = "Ôö¼ÔûÆ" + r));
    n = i.min === i.max ? a : o + (0 !== i.max ? " - " + a : "");
    (i.minCritical > 0 && i.min !== i.minCritical || i.maxCritical > 0 && i.max !== i.maxCritical) && (n += i.minCritical === i.maxCritical ? " (<b>" + r + "</b>)" : " (<b>" + s + (0 !== i.maxCritical ? " - " + r : "") + "</b>)");
    if (t > 0) {
      return t + "% " + n;
    }
    return n;
  }
}
test802: {
  function f() {
    o.shallowCopyProperties(this, e, t);
    e.damage = this.damage.clone();
    e.erosionPercent = this.erosionPercent.clone();
    e.lifePointsAdded = this.lifePointsAdded.clone();
    e.lifePointsAddedBasedOnLifePercent = this.lifePointsAddedBasedOnLifePercent.clone();
    return e;
  }
}
test803: {
  function f() {
    o.min = e.min * t.min / 100;
    o.max = e.max * t.max / 100;
    o.truncate();
    o.applyMultiplier(i / 100 * n);
    o.truncate();
    return o;
  }
}
test804: {
  function f() {
    n.damage.addFromDamage(e.damage);
    n.damage.addFrom(-i);
    n.damage.truncate();
    n.damage.applyMultiplier(t / 100);
    n.damage.truncate();
    return n;
  }
}
test805: {
  function f() {
    w.NAME_RESISTANCE_ELEMENT[e] && (t = this.target[w.NAME_RESISTANCE_ELEMENT[e]]);
    return 100 - t;
  }
}
test806: {
  function f() {
    w.NAME_REDUCTION_ELEMENT[e] && (t = this.target[w.NAME_REDUCTION_ELEMENT[e]]);
    return t;
  }
}
test807: {
  function f() {
    t.lifePointsAdded.truncate();
    return t;
  }
}
test808: {
  function f() {
    this.lifeStealingDamagesGiven = r;
    return a;
  }
}
test809: {
  function f() {
    i.damage.min = ~~s;
    i.damage.max = ~~r;
    i.type = e.type;
    i.origin = e.origin;
    return i;
  }
}
test810: {
  function f() {
    console.warn("Fighter " + this.caster.id + " does not exist");
    return e.clone();
  }
}
test811: {
  function f() {
    j.damage.addFromDamage(G);
    j.damageWithoutResist.addFromDamage(z);
    j.erosionPercent = e.erosionPercent.clone();
    j.erosionLifePoints = e.erosionLifePoints;
    j.type = e.type;
    j.origin = e.origin;
    return j;
  }
}
test812: {
  function f() {
    e.castingSpell && (t = t || w.MISSING_TRIGGERS[e.castingSpell.spell.id]);
    return !!t && !(!this.verifyExternalDamagesTrigger(t) && !this.verifyAllEffectsTrigger(this.effectInstances, t, this.effectMaskOptions));
  }
}
test813: {
  function f() {
    console.warn("Fighter " + this.caster.id + " does not exist");
    return !1;
  }
}
test814: {
  function f() {
    console.warn("Fighter " + n.id + " does not exist");
    return !1;
  }
}
test815: {
  function f() {
    console.warn("Fighter " + this.caster.id + " does not exist");
    return !1;
  }
}
test816: {
  function f() {
    console.warn("Fighter " + this.target.id + " does not exist");
    return !1;
  }
}
test817: {
  function f() {
    s.sort(function (e, t) {
      var n = f.fromCellId(e),
        a = f.fromCellId(t),
        s = f.fromCellId(i);
      if (n.cellId === a.cellId) return 0;
      var r = (f.advancedOrientationTo(n, s) + 1) % 8,
        l = (f.advancedOrientationTo(a, s) + 1) % 8,
        c = m.getDistance(a.cellId, i) - m.getDistance(n.cellId, i);
      if (c) {
        if (o.reverseSort) {
          return -c;
        }
        return c;
      }
      return r - l;
    });
    return s;
  }
}
test818: {
  function f() {
    this._pushedEffects(e, t, i, n, o, s);
    this._pulledEffects(e, t, i, n, o, s);
    this.transposition = a;
    return s;
  }
}
test819: {
  function f() {
    y = new v(e.actorId, 0, 0, r, p.cellId);
    u.push(y);
    m = this.hasPathAMark(e, d, p.cellId, i, o);
    m && (y.marks = m.marks, y.newCellId = m.cellId);
    return u;
  }
}
test820: {
  function f() {
    A.marks = m.marks;
    A.newCellId = m.cellId;
    A.force = 0;
    return u;
  }
}
test821: {
  function f() {
    this.hide();
    window.foreground.confirmBox.changeDamage(c);
    return;
  }
}
test822: {
  function f() {
    this.markers[t] = n;
    return this.getDistance(e.x, e.y);
  }
}
test823: {
  function f() {
    this.value += e;
    return Math.abs(e);
  }
}
test824: {
  function f() {
    l > 180 && (l -= 360);
    return l;
  }
}
test825: {
  function f() {
    s.setContent(e);
    return !0;
  }
}
test826: {
  function f() {
    e = e || "";
    return e.split(",")[0];
  }
}
test827: {
  function f() {
    i.setEndTime(t);
    this._refreshDisplay();
    return;
  }
}
test828: {
  function f() {
    this.previousConvertedKamaAmount = ~~e.parameters[0];
    return !1;
  }
}
test829: {
  function f() {
    this.previousConvertedKamaAmount = null;
    return !0;
  }
}
test830: {
  function f() {
    window.gui.loginScreen.proposeRegistrationAfterGuestLimit();
    return !1;
  }
}
test831: {
  function f() {
    window.gui.openPopup({
      title: a.getText("ui.popup.warning"),
      message: e.text
    });
    return !0;
  }
}
test832: {
  function f() {
    console.error(new Error("UiLocker.isMenuButtonAvailable: no feature is matching the menuButtonId " + e));
    return null;
  }
}
test833: {
  function f() {
    0 === t.length && t.push(l("tablet.uiLocker.default"));
    return t;
  }
}
test834: {
  function f() {
    console.error(new Error("UiLocker.isTabAvailable: no feature matching window " + e + " w/ tabId " + t));
    return !1;
  }
}
test835: {
  function f() {
    C(t);
    t.on("tapstart", o);
    t.on("tapend", a);
    return t;
  }
}
test836: {
  function f() {
    t.slotsPerColumn = Math.floor((r - (this._isTagBarHidden ? 0 : O)) / N);
    t.slotsPerPage = c * t.slotsPerColumn;
    e.availableSlotBoxWidth = c * N + "px";
    e.availableSlotBoxHeight = t.slotsPerColumn * N + "px";
    this._updatePageSystem();
    return !0;
  }
}
test837: {
  function f() {
    t.on("tap", function (e) {
      t.selected ? i.currentOpenedWindow.emit("slot-doubletap", t, e.x, e.y) : t !== i.selectedSlot ? (i.selectSlot(t), i.currentOpenedWindow.emit("slot-tap", t, e.x, e.y)) : i.currentOpenedWindow.tapSelectedEmitsDoubleTap && i.currentOpenedWindow.emit("slot-doubletap", t, e.x, e.y);
    });
    t.on("doubletap", function (e) {
      i.currentOpenedWindow.emit("slot-doubletap", this, e.x, e.y);
    });
    t.on("dragStart", function () {
      u.setElementSource(this, i.currentOpenedWindow.id), i.dragSourceData.slot = t, i.currentOpenedWindow.emit("slot-dragStart", t);
    });
    u.setDraggable(t, {
      backgroundImage: t.getImage(),
      prepareForDrag: r
    }, "storageViewer", i.dragSourceData);
    this.emit("slotCreated", t);
    return t;
  }
}
test838: {
  function f() {
    e();
    return N(i);
  }
}
test839: {
  function f() {
    L.delClassNames("spinner");
    if (i) {
      e();
      return N(i);
    }
    L._deleteSet(t);
    e();
    return;
  }
}
test840: {
  function f() {
    this.logMessage("\n" + this.helpInfo.descriptions.join(""), "Debug");
    this.logMessage("<hr/>Client admin commands:", "Debug");
    this.logMessage("\n" + this._adminCmdManager.helpList().join("\n"), "Debug");
    return;
  }
}
test841: {
  function f() {
    a = a === N ? x : parseInt(a, 10);
    return E.preloadAreas([a]);
  }
}
test842: {
  function f() {
    n.shift();
    return o.run(n.join(" "));
  }
}
test843: {
  function f() {
    n.shift();
    if (4 !== n.length) {
      return this.logMessage("4 arguments required: gridcolor [red] [green] [blue] [alpha]", "Debug");
    }
    if (n[0] > 1) {
      return this.logMessage("Red   component has to be in range [0, 1]", "Debug");
    }
    if (n[1] > 1) {
      return this.logMessage("Green component has to be in range [0, 1]", "Debug");
    }
    if (n[2] > 1) {
      return this.logMessage("Blue  component has to be in range [0, 1]", "Debug");
    }
    if (n[3] > 1) {
      return this.logMessage("Alpha has to be in range [0, 1]", "Debug");
    }
    window.isoEngine.background.setGridColor(n);
    return this.logMessage("Grid color changed!", "Debug");
  }
}
test844: {
  function f() {
    1 !== n.length || "start" !== n[0] ? l = "Wrong parameter, allowed parameters: start" : window.dofus.sendMessage("GuidedModeReturnRequestMessage");
    return this.logMessage(l, "Debug");
  }
}
test845: {
  function f() {
    c = !d || "help" === d || !window.gui.playerData.adminMenu.setAdminMenuId(d);
    c && (this.logMessage("setadminmenu &lt;menuId&gt;: menuId must be one of the following:", "Debug"), this.logMessage(window.gui.playerData.adminMenu.helpToString(), "Debug"));
    return;
  }
}
test846: {
  function f() {
    n && e.push(n + " (" + t.connectedServerId + ")");
    i.id && i.name && e.push(i.name + " (" + i.id + ")");
    0 === e.length && e.push(A);
    return e.join(", ");
  }
}
test847: {
  function f() {
    console.error("preload: map id " + e + " missing for preload.");
    return t();
  }
}
test848: {
  function f() {
    i._onStep({
      count: h,
      nbTotalMaps: p,
      percent: f,
      secondLeft: u
    });
    return d();
  }
}
test849: {
  function f() {
    i._remainingMaps = e;
    i._lastCount += r;
    if (t) {
      if (t === y) {
        if (i._shouldStop) {
          return i._onStop();
        }
        return i._restart();
      }
      return i._onError(t);
    }
    return i._onEnd({
      elapsedSecond: ~~((Date.now() - l) / 1e3)
    });
  }
}
test850: {
  function f() {
    n.apply(null, e);
    return !0;
  }
}
test851: {
  function f() {
    t === this.leaderId && this.setLeaderRow(i, !0);
    this.memberCount++;
    return i;
  }
}
test852: {
  function f() {
    this.setNewLeader(null);
    this.partyId = null;
    this.addThisPlayerRow();
    return;
  }
}
test853: {
  function f() {
    this.debugCheckTimeout = window.setTimeout(function (e) {
      e.mountFilterBox || console.error("Absence of MountFilterBox after 2 seconds");
    }, 2e3, this);
    return this.once("opened", this._setupMountFilterBox.bind(this, e));
  }
}
test854: {
  function f() {
    this._setFilterBoxVisible(!1);
    if (e.mountData.certificate && !e.mountData.receivedData) {
      e.setSpinnerVisible(!0);
      this.certificateTilePendingSelection = e;
      return this._requestOneCertificate(e.mountData.certificate);
    }
    e.selected && !this.isMultiselect && this._setMultiselect(!0);
    this._selectTile(e.room, e);
    return;
  }
}
test855: {
  function f() {
    e.mountLocation = t.id;
    e.isNewborn = !!(this.babyMap[e.id] || e.receivedData && this.babyMap[e.receivedData.id]);
    e.expiration = e.certificate && e.certificate.mountInfo && e.certificate.mountInfo.date;
    e.receivedData && e.expiration && (e.receivedData.expiration = e.expiration);
    return e;
  }
}
test856: {
  function f() {
    i.selected || this._selectTile(t, i);
    return t.getNumSelected();
  }
}
test857: {
  function f() {
    n.createChild("div", {
      className: "number",
      text: e
    });
    return i;
  }
}
test858: {
  function f() {
    this.tile.toggleDisplay(i);
    this.placeholder.toggleDisplay(!i);
    e ? (this.mountData = e, this._refreshTile(), this.dragInfo.setMount(e, this.mountImg)) : (this.mountData = null, this.tile.addClassNames("neutralTile"), this.tile.delClassNames("focusedTile"));
    return t;
  }
}
test859: {
  function f() {
    w(t);
    t.on("tap", a);
    t.mountFilterBox = this;
    t.zoneName = e;
    this.serenity[e] = t;
    return t;
  }
}
test860: {
  function f() {
    p.sortMenuActions(c);
    c.unshift({
      id: S,
      caption: "(" + u + ")",
      cb: l
    });
    return o;
  }
}
test861: {
  function f() {
    p.sortMenuActions(r);
    return o;
  }
}
test862: {
  function f() {
    T.hasOwnProperty(t) ? n = T[t].indexOf(e) : console.error("composedColorMap[mountColorId] is undefined for mountColorId:", t);
    return n !== -1;
  }
}
test863: {
  function f() {
    "-" === i[n] && (i = i.substr(0, n - 1));
    return i[0].toUpperCase() + i.substr(1);
  }
}
test864: {
  function f() {
    i.args = Array.isArray(t) ? t : [t];
    this.activeFilters[e] = i;
    return i;
  }
}
test865: {
  function f() {
    this.box = i.createChild("div", {
      className: "tileRoom"
    });
    this.scrollGrip = i.createChild("div", {
      className: "scrollGrip"
    });
    return t;
  }
}
test866: {
  function f() {
    o.receivedData && void 0 !== o.receivedData[e] && null !== o.receivedData[e] && (s = o.receivedData[e]);
    a.receivedData && void 0 !== a.receivedData[e] && null !== a.receivedData[e] && (r = a.receivedData[e]);
    if (s > r) {
      return n;
    }
    if (s < r) {
      return -n;
    }
    if (o.id > a.id) {
      return n;
    }
    if (o.id < a.id) {
      return -n;
    }
    return 0;
  }
}
test867: {
  function f() {
    this.isLocked && (this.isLocked = !1, this._showAllTiles());
    this.scroller.show();
    t && this._sortByProperty(t, i);
    this._filter(e);
    if (this.tilesPerPage) {
      this.needsScrollerRefresh && (this.scroller.refresh(), this.needsScrollerRefresh = !1);
      this._refreshView(!0);
      return;
    }
    return this._setupLayout();
  }
}
test868: {
  function f() {
    s(c);
    c.on("tap", function () {
      n.options.closable && o === n.curentTabId ? n.close() : (n.openTab(o), r("TAB"));
    });
    c.on("enable", function (e) {
      this._isDisable = !e, this.toggleClassName("disabled", !e), e || n.curentTabId !== o || n.openFirstTab();
    });
    this.tabsMap[o] = {
      tab: c,
      target: t
    };
    this.tabsOrderIds.push(o);
    t && t.hide();
    return o;
  }
}
test869: {
  function f() {
    window.gui.openSimplePopup(f("ui.error.cantDoInFight"));
    return !1;
  }
}
test870: {
  function f() {
    e = e.length ? e : null;
    y._consoleButton.toggleDisplay(window.gui.playerData.hasRight(v.SHOW_ADMIN_CONSOLE_BUTTON));
    this.charactersList = e || this.charactersList;
    if (this.charactersList) {
      y.updateCharacterList(this.charactersList);
      D.enable();
      y.btnCreate.enable();
      A.enable();
      return;
    }
    return console.error("CharacterSelectionWindow opened without character list info");
  }
}
test871: {
  function f() {
    window.gui.chat.logMsg(y("ui.chat.calligraphyNothingToDo"));
    return A(P);
  }
}
test872: {
  function f() {
    i.schema.forEach(function (e) {
      e.min.x *= n, e.min.y *= o, e.max.x *= n, e.max.y *= o, e.points.forEach(function (e) {
        e.x *= n, e.y *= o;
      });
    });
    return i;
  }
}
test873: {
  function f() {
    i.schema.forEach(function (e) {
      e.min.x += o, e.max.x += o, e.min.y += a, e.max.y += a, e.points.forEach(function (e) {
        e.x += o, e.y += a;
      });
    });
    return i;
  }
}
test874: {
  function f() {
    t.schema.forEach(function (e) {
      e.min.x -= i, e.min.y -= n, e.max.x -= i, e.max.y -= n, e.points.forEach(function (e) {
        e.x -= i, e.y -= n;
      });
    });
    t.max.x -= i;
    t.max.y -= n;
    t.min.x = 0;
    t.min.y = 0;
    return t;
  }
}
test875: {
  function f() {
    console.error("Scroll content is empty for document id", e.id);
    return this.close();
  }
}
test876: {
  function f() {
    this._initScroll();
    return e();
  }
}
test877: {
  function f() {
    t._image && (t._image.src = i, t._initScroll());
    return e();
  }
}
test878: {
  function f() {
    l = "swf" === u[0] ? "gfx/documents/swf/" + u[1] + ".png" : "gfx/documents/" + u[1] + "." + u[0];
    r.imageId = l;
    r.width = parseInt(s.width, 10);
    r.height = parseInt(s.height, 10);
    r.hspace = parseInt(s.hspace, 10);
    r.align = s.align || "";
    return r;
  }
}
test879: {
  function f() {
    t = t.replace(/\n/g, " ");
    t = t.replace(/\r/g, " ");
    t = t.replace(/\t/g, "");
    return t = t.replace(/<p><\/p>/g, "<br/>");
  }
}
test880: {
  function f() {
    e.appendChild(document.createTextNode(""));
    document.head.appendChild(e);
    return e;
  }
}
test881: {
  function f() {
    t.data = e.button;
    t.on("tap", s);
    return t;
  }
}
test882: {
  function f() {
    n.sortObjectInArray(s, "nameId");
    n.sortObjectInArray(a, "nameId");
    if (t) {
      return s;
    }
    return a;
  }
}
test883: {
  function f() {
    n.sortObjectInArray(r, "nameId");
    return e(null, r);
  }
}
test884: {
  function f() {
    a = e.skillsCount > 0 ? s("ui.estate.houseSkills", e.skillsCount) : s("ui.estate.noSkill");
    this.skills.setText(a);
    this.skills.show();
    return;
  }
}
test885: {
  function f() {
    e.showExperienceFightDelta && (t += w("ui.fightend.xp") + w("ui.common.colon") + M.intToString(e.experienceFightDelta), e.isIncarnationExperience && (t += " (" + w("ui.common.incarnation") + ")"));
    e.showExperienceForGuild && (t += "\n" + w("ui.common.guild") + w("ui.common.colon") + M.intToString(e.experienceForGuild));
    e.showExperienceForMount && (t += "\n" + w("ui.common.ride") + w("ui.common.colon") + M.intToString(e.experienceForMount));
    return t;
  }
}
test886: {
  function f() {
    y(o, function (t, i) {
      if (t) return console.warn("Error while getting items", t);
      if (r.rootElement) {
        i.sort(function (e, t) {
          var i = e.averagePrice * a[e.id],
            n = t.averagePrice * a[t.id];
          return n - i;
        });
        var n, o;
        for (n = 0; n < i.length && (o = i[n], n !== E); n += 1) r.appendChild(new T({
          itemData: o,
          quantity: a[o.id],
          tooltipOptions: {
            openOnTap: !0
          }
        }));
        if (i.length > E) {
          var s = r.appendChild(new I({
              className: "moreButton"
            }, function () {
              _.getWindow("fightEndRewards").updateContent(e.name, i, a), _.open("fightEndRewards");
            })),
            c = "";
          for (n = 0; n < i.length; n += 1) o = i[n], c += a[o.id] + " x " + o.nameId + "\n";
          l.addTooltip(s, c);
        }
        r.delClassNames("spinner");
      }
    });
    return r;
  }
}
test887: {
  function f() {
    t ? (e.addClassNames("success"), e.setText(w("ui.fight.challenge.complete"))) : (e.addClassNames("fail"), e.setText(w("ui.fight.challenge.failed")));
    return h;
  }
}
test888: {
  function f() {
    this.isVertical && t.addClassNames("vertical");
    t.createChild("div", {
      className: ["barColor", e]
    });
    return t;
  }
}
test889: {
  function f() {
    "0%" === e && (e = "1px");
    if (this.isVertical) {
      return "100% " + e;
    }
    return e + " 100%";
  }
}
test890: {
  function f() {
    this._setColorBarPos(t, i);
    return n && n();
  }
}
test891: {
  function f() {
    i.addClassNames(e);
    s.addTooltip(i, t, {
      longTapExplanation: !0
    });
    return i;
  }
}
test892: {
  function f() {
    f.toggleDisplay(e.fightSpectatorLocked);
    return {
      spectatorLocked: f,
      nbPlayers: c,
      level: m,
      duration: new a("div", {
        name: "duration"
      }),
      friend: u || ""
    };
  }
}
test893: {
  function f() {
    e === c.FIGHT_OPTION_SET_TO_PARTY_ONLY ? i = h("ui.fight.option.blockJoinerExceptParty") : e === c.FIGHT_OPTION_SET_CLOSED ? i = h("ui.fight.option.blockJoiner") : e === c.FIGHT_OPTION_ASK_FOR_HELP && (i = h("ui.fight.option.help"));
    i && s.addTooltip(t, i, {
      longTapExplanation: !0
    });
    return t;
  }
}
test894: {
  function f() {
    o.averageLevelContainer.createChild("span", {
      text: f
    });
    o.averageLevel = o.averageLevelContainer.createChild("span", {
      className: "averageLevel"
    });
    o.table = o.appendChild(new m({
      colIds: ["name", "class", "level"],
      colCount: 3,
      highlightable: !0,
      disableAutoSelect: !0,
      headerContent: [h("ui.common.name"), h("ui.charcrea.breed"), h("ui.common.short.level")],
      onRowTap: n
    }));
    o.joinBtn = o.appendChild(new l(h("ui.common.join")));
    o.joinBtn.on("tap", function () {
      if (q && q.fightId) {
        var e = q.fightTeams[o.teamId].leaderId;
        window.dofus.sendMessage("GameFightJoinRequestMessage", {
          fightId: q.fightId,
          fighterId: e
        }), _.close(U.id);
      }
    });
    o.teamId = e;
    return o;
  }
}
test895: {
  function f() {
    o.setValue(window.gui.playerData.achievements.getAchievementPercent() / 100);
    _.addTooltip(o, s);
    return t.addClassNames("mainProgressBar");
  }
}
test896: {
  function f() {
    this.achievementsList.addItem({
      id: e.id,
      element: i,
      data: i
    });
    this.openAchievementWithID === e.id && (this.achievementsList.selectItem(this.openAchievementWithID), this.openAchievementWithID = null);
    return i;
  }
}
test897: {
  function f() {
    t.hasSearchedName = !0;
    if (e) {
      return console.error("AchievementsWindow achievements search", e);
    }
    i(n);
    t._searchResult();
    return;
  }
}
test898: {
  function f() {
    t.hasSearchedDescription = !0;
    if (e) {
      return console.error("AchievementsWindow description search", e);
    }
    i(n);
    t._searchResult();
    return;
  }
}
test899: {
  function f() {
    t.hasSearchedObjectives = !0;
    if (e) {
      return console.error("AchievementsWindow objectives search", e);
    }
    i(n, !0);
    t._searchResult();
    return;
  }
}
test900: {
  function f() {
    s.spinner.hide();
    return console.warn("Achievement: Missing icon" + t);
  }
}
test901: {
  function f() {
    this.subAreaList.toggleClassName("spinner", !t);
    this.raceList.toggleClassName("spinner", !t);
    if (t) {
      this._onOpen(e);
      return;
    }
    return this.once("initialized", this._onOpen.bind(this, e));
  }
}
test902: {
  function f() {
    this.dropInfo.hasProspectionBonus && (e += "\n" + M("ui.monster.obtaining"), e += " (" + o + " " + M("ui.short.prospection") + ") : ", e += l(d, u) + "%");
    e += "\n" + M("ui.monster.obtaining");
    e += " (" + M("ui.common.base") + ") : ";
    e += l(s, r) + "%";
    this.dropInfo.findCeil && (e += "\n" + M("ui.monster.prospectionThreshold") + " : " + this.dropInfo.findCeil);
    return e;
  }
}
test903: {
  function f() {
    t.monsterList.delClassNames("spinner");
    t.errorText.show();
    return console.error("BestiaryWindow items search", n);
  }
}
test904: {
  function f() {
    t.monsterList.delClassNames("spinner");
    t.errorText.show();
    return console.error("BestiaryWindow monsters search", i);
  }
}
test905: {
  function f() {
    i._clearAndRemoveSpinner();
    i.errorText.show();
    i.monsterList.refresh();
    return console.error("BestiaryWindow showMonsters error", e);
  }
}
test906: {
  function f() {
    i._clearAndRemoveSpinner();
    i.noResultText.show();
    i.monsterList.refresh();
    return;
  }
}
test907: {
  function f() {
    N.error(n);
    return e(n);
  }
}
test908: {
  function f() {
    N.log("done! (urls: " + t.length + ", errors: " + i.length + ")");
    return e(n, o.join("\n"));
  }
}
test909: {
  function f() {
    t._ornamentIdToSelect = ~~e.ornamentId;
    t._titleIdToSelect = ~~e.titleId;
    if (t._titlesAndOrnamentsListRequested) {
      t._selectOnceReady();
      return;
    }
    t._displayLoading(!0);
    t._titlesAndOrnamentsListRequested = !0;
    window.dofus.sendMessage("TitlesAndOrnamentsListRequestMessage");
    return;
  }
}
test910: {
  function f() {
    console.error("Titles and Ornaments: failed getting data", i);
    return e(i);
  }
}
test911: {
  function f() {
    this.questsList.toggleClassName("spinner", !this.questsListUpdated);
    if (t) {
      this._onOpen(e);
      return;
    }
    return this.once("initialized", this._onOpen.bind(this, e));
  }
}
test912: {
  function f() {
    window.gui.playerData.isAbleToSeeId() && t && (e += " [" + t + "]");
    i && (e += " (" + h("ui.common.level") + " " + i + ")");
    return e;
  }
}
test913: {
  function f() {
    n || (o += window.gui.playerData.quests.getCurrentCompletion(t, i));
    window.gui.playerData.isAbleToSeeId() && (o += " [" + i + "]");
    return o;
  }
}
test914: {
  function f() {
    r && (e.mapId || l && void 0 !== l.x) && this._createLocateButton(n, o, e, t, i);
    return n;
  }
}
test915: {
  function f() {
    a && a.followButton.toggleClassName("selected", i);
    return i;
  }
}
test916: {
  function f() {
    i && t.setStyle("backgroundImage", i);
    return t;
  }
}
test917: {
  function f() {
    t.levelTextDom = t.createChild("div", {
      className: "level",
      text: i
    });
    t.plusBtn = t.appendChild(new u({
      className: "addSignButton",
      scaleOnPress: !0
    }));
    t.spell = e;
    t.levelWanted = e.level;
    window.gui.playerData.isIncarnation() ? (r(t, d("ui.spell.incarnationSpellWarning")), t.minusBtn.disable(), t.plusBtn.disable()) : (c(t.minusBtn), t.minusBtn.on("tapstart", function () {
      a.table.delClassNames("scaleOnPress");
    }), t.minusBtn.on("tapend", function () {
      a.table.addClassNames("scaleOnPress");
    }), t.minusBtn.on("tap", function () {
      y("PLUS_BUTTON");
      var i = window.gui.playerData.isSubscriberAtMinLevel(T.ELITE);
      if (!i && t.levelWanted <= t.spell.level) {
        M.open("BonusPackElitePopupWindow");
        return;
      }
      t.levelWanted = Math.max(t.levelWanted - 1, 1);
      a._refreshSpellRow(e.id);
      return;
    }), c(t.plusBtn), t.plusBtn.on("tapstart", function () {
      a.table.delClassNames("scaleOnPress");
    }), t.plusBtn.on("tapend", function () {
      a.table.addClassNames("scaleOnPress");
    }), t.plusBtn.on("tap", function () {
      y("PLUS_BUTTON"), t.levelWanted = Math.min(t.levelWanted + 1, e.getMaxLevel()), a._refreshSpellRow(e.id);
    }));
    return t;
  }
}
test918: {
  function f() {
    e.valueDom = e.createChild("div", {
      className: "points",
      text: "-"
    });
    e.cost = 0;
    return e;
  }
}
test919: {
  function f() {
    o.disable();
    s.disable();
    return;
  }
}
test920: {
  function f() {
    console.error("_getJobButton: invalid Job ID: " + e);
    return null;
  }
}
test921: {
  function f() {
    o(n, i);
    if (e.isVisible() && t.id === e.selectedJobId) {
      return e._refreshJobs(t.id);
    }
    0;
    return;
  }
}
test922: {
  function f() {
    t.itemSlot.select();
    this.currentJobBtn = t;
    return !0;
  }
}
test923: {
  function f() {
    this.lastJobIdRequested = null;
    this._refreshCurrentJob(e);
    return !1;
  }
}
test924: {
  function f() {
    I._afterRefreshTask();
    return console.error("JobsWindow: Failed to get ingredients", e);
  }
}
test925: {
  function f() {
    I._afterRefreshTask();
    return console.error("JobsWindow: Failed to get interactive data", e);
  }
}
test926: {
  function f() {
    o.appendChild(t);
    o.element = t;
    i && (o.data = i);
    r(t);
    t.on("tap", function () {
      o === n.activeItem ? n.deactivate() : n.activate(o);
    });
    this.items[e] = o;
    return o;
  }
}
test927: {
  function f() {
    this.activate(t);
    return t;
  }
}
test928: {
  function f() {
    o.slotNumber = e;
    o.on("change", n);
    return o;
  }
}
test929: {
  function f() {
    this._recipesPlaceholder.show();
    this.recipesWrapper.delClassNames("spinner");
    this._setPageCount(e);
    this.recipesWrapper.refresh();
    return i();
  }
}
test930: {
  function f() {
    console.error(o);
    return i(o);
  }
}
test931: {
  function f() {
    console.error(new Error("Recipe " + e.resultId + " is missing"));
    return t();
  }
}
test932: {
  function f() {
    console.error(new Error("Cannot setup recipe for recipeId " + n.recipeId));
    return t(e);
  }
}
test933: {
  function f() {
    this._recipesData.forEach(function (t) {
      var i = e._filterCraftableOnly && e._canUseThisRecipe(t.resultId),
        n = i || !e._filterCraftableOnly;
      e.filterNbSlots[t.ingredientIds.length] && n && e._currentFilteredRecipesList.push(t);
    });
    return this.addRecipes(this._currentFilteredRecipesList, {
      usingItemId: this.usingItemId
    });
  }
}
test934: {
  function f() {
    t.nbIngredients = d;
    t.searchString = f(c);
    t.refreshQuantities();
    return e(null, t);
  }
}
test935: {
  function f() {
    this._generateRandomEmblem();
    this.nameInput.enable();
    this.nameInput.setValue("");
    this.tagInput.enable();
    this.tagInput.setValue("");
    this.cover.hide();
    return;
  }
}
test936: {
  function f() {
    o += ", boxLeft: " + this.box.left + ", boxTop: " + this.box.top;
    if (isNaN(t)) {
      console.error(new Error("select: x is nan with " + o));
      return;
    }
    if (isNaN(n)) {
      console.error(new Error("select: y is nan with " + o));
      return;
    }
    m._cursorMove({
      x: t,
      y: n
    }, this.box, this.panelType);
    i();
    return;
  }
}
test937: {
  function f() {
    n += ", boxLeft: " + this.box.left + ", boxTop: " + this.box.top;
    n += ", deltaX: " + this.deltaX + ", deltaY: " + this.deltaY;
    if (isNaN(t)) {
      console.error(new Error("move: x is nan with " + n));
      return;
    }
    if (isNaN(i)) {
      console.error(new Error("move: y is nan with " + n));
      return;
    }
    m._cursorMove({
      x: t,
      y: i
    }, this.box, this.panelType);
    return;
  }
}
test938: {
  function f() {
    console.error(new Error("CP: topColor is missing with x: " + e + ", y: " + t + ", tintWidth: " + this.params.tintWidth));
    return [255, 0, 0];
  }
}
test939: {
  function f() {
    console.error(new Error("CP: topColorNext is missing with x: " + e + ", y: " + t + ", tintWidth: " + this.params.tintWidth));
    return [255, 0, 0];
  }
}
test940: {
  function f() {
    a = Math.round(a * r);
    s = Math.round(s * l);
    a = Math.max(0, Math.min(a, n.width - 1));
    s = Math.max(0, Math.min(s, n.height - 1));
    if (isNaN(a)) {
      console.error(new Error("posX is nan with " + o));
      return;
    }
    if (isNaN(s)) {
      console.error(new Error("posY is nan with " + o));
      return;
    }
    this.cursorMoveTo(a, s, i);
    return;
  }
}
test941: {
  function f() {
    e = e || {};
    void 0 !== e.placeholder && void 0 === e.defaultValue ? (this.inputBox.setPlaceholder(e.placeholder), this.currentValue = "") : void 0 !== e.defaultValue && (this.currentValue = e.defaultValue);
    this.inputBox.setValue(this.currentValue);
    this.show();
    e.hasOwnProperty("x") && e.hasOwnProperty("y") && this.position(e.x, e.y);
    this.setStyles(d);
    if (this.openTweener) {
      this.openTweener.cancel();
      return t();
    }
    this.openTweener = l.tween(this, u, {
      time: 150,
      delay: 0,
      easing: "ease-out"
    }, t);
    return;
  }
}
test942: {
  function f() {
    m(i);
    i.on("tap", function () {
      r.openGuildCard(e.guildId);
    });
    return [t, i, e.guildLevel];
  }
}
test943: {
  function f() {
    g(i);
    i.on("tap", function () {
      window.gui.openContextualMenu("player", {
        playerName: e.name,
        playerId: e.id,
        hasGuild: !0,
        guildId: t
      });
    });
    return [i, e.level];
  }
}
test944: {
  function f() {
    t.show();
    i.hide();
    this.rankTitleText.delClassNames("noMargin");
    return;
  }
}
test945: {
  function f() {
    t = e.currency === _ ? d("tablet.price.hard", e.priceTextOnly.getText()) : d("tablet.price.soft", e.priceTextOnly.getText());
    return window.gui.openConfirmPopup({
      title: d("ui.common.housePurchase"),
      message: d("tablet.ui.common.doUBuyHouse", e.houseOwner, t),
      cb: function (t) {
        if (t) {
          if (e.currency === g) return window.dofus.sendMessage("HouseBuyRequestMessage", {
            proposedPrice: e.proposedPrice
          });
          var i = e.proposedPriceHard - window.gui.playerData.inventory.goultines;
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
    }, {
      isModal: !0
    });
  }
}
test946: {
  function f() {
    t = t || {};
    e.fromInside = t.fromInside;
    e.switchButton.setCurrency(g);
    if (e.fromInside) {
      e.fromInsideUpdateDisplay(t.myHouse);
      return;
    }
    e.updateDisplay(t.msg);
    return;
  }
}
test947: {
  function f() {
    this.switchButton.toggleDisplay(e.buyOrSell && !window.gui.playerData.isShopDisabled());
    if (i) {
      e.buyOrSell ? this.priceTextOnly.setText(c.kamasToString(i, "")) : this.price.setValue(c.kamasToString(i, ""));
      return;
    }
    if (e.buyOrSell) {
      return this.priceTextOnly.setText(d("ui.item.averageprice.unavailable"));
    }
    return this.price.setValue(d("ui.item.averageprice.unavailable"));
  }
}
test948: {
  function f() {
    this.switchButton.hide();
    this.confirmButton.enable();
    if (e) {
      this.priceTextOnly.hide();
      this.price.show();
      this.windowTitle.setText(d("ui.common.houseSale"));
      if (e.price) {
        this.cancelSaleButton.enable();
        this.proposedPrice = e.price;
        this.price.setValue(c.kamasToString(e.price, ""));
        return;
      }
      this.cancelSaleButton.disable();
      u.getData("Houses", e.modelId, function (i, n) {
        if (i || !n) {
          return console.warn("Houses Id: " + e.modelId + " not found!", i);
        }
        t.proposedPrice = n.defaultPrice;
        t.price.setValue(c.kamasToString(t.proposedPrice, ""));
        return;
      });
      return;
    }
    return console.warn("Missing current house info.");
  }
}
test949: {
  function f() {
    this.currency = e;
    this.replaceClassNames([t], [this.currency]);
    if (this.currency === r) {
      return this.emit("switchToHard");
    }
    return this.emit("switchToSoft");
  }
}
test950: {
  function f() {
    t = t || {};
    t.showDescription = !0;
    t.showTitle = !0;
    if (e) {
      n.setTitle(e.getName());
      n._itemBox.displayItem(e, t);
      n._itemBox.show();
      n.windowBody.delClassNames("spinner");
      return;
    }
    return console.error("ItemBoxWindow: openWithItemData have not itemData");
  }
}
test951: {
  function f() {
    n.setTitle("");
    n._itemBox.hide();
    n.windowBody.addClassNames("spinner");
    !s && r && (s = o.playerData.inventory.objects[r]);
    if (!s && c) {
      return i(c, d);
    }
    s ? e(s, d) : l ? t(l, d) : console.error("ItemBoxWindow need itemData or objectUID or objectGID");
    return;
  }
}
test952: {
  function f() {
    i.createChild("div", {
      className: "equippedIcon"
    });
    i.toggleClassName("equipped", !!i.itemInstance);
    i.on("tap", function () {
      var e = this.itemInstance && this.itemInstance.isInitialised ? this.itemInstance : null,
        n = window.gui.playerData.inventory.getGenericItem(this.dbItem.id);
      if (n && !n.isInitialised && (n = null), t.itemBox.displayItem(e || n || this.dbItem), t.combineBonusesCheckbox.isActivate()) {
        var o = t.selectedItemIds.indexOf(i.dbItem.id);
        o < 0 ? (t.selectedItemIds.push(i.dbItem.id), this.select()) : (t.selectedItemIds.splice(o, 1), this.unselect()), t.bonusSelector.select(t.selectedItemIds.length);
      }
    });
    return i;
  }
}
test953: {
  function f() {
    t.diceNum = t.diceNum || 0;
    t.diceSide = t.diceSide || 0;
    t.value = t.value || 0;
    void 0 !== e.min && void 0 !== e.max ? (t._type = "EffectInstanceDice", t.diceNum = t.min, t.diceSide = t.max) : e.diceSide ? e.diceNum && e.diceSide && (t._type = "EffectInstanceDice", t.diceNum += t.value, t.diceSide += t.value, t.value = 0) : (t._type = "ObjectEffectInteger", e.diceNum && (t.value += e.diceNum), t.diceNum = 0, t.diceSide = 0);
    return t;
  }
}
test954: {
  function f() {
    o.mySlotDiv = n;
    i && f.addTooltip(n, i);
    return o;
  }
}
test955: {
  function f() {
    e.on("tap", function () {
      if (e.characterId) {
        var i = t.members[e.characterId];
        window.gui.openContextualMenu("player", {
          playerId: i.id,
          playerName: i.name,
          guildId: i.guildInfo.guildId
        });
      }
    });
    return e;
  }
}
test956: {
  function f() {
    s(n);
    n.on("tap", i);
    return n;
  }
}
test957: {
  function f() {
    this._flag.hide();
    this._serverName.setText("");
    this._population.setText("");
    this._status.hide();
    return;
  }
}
test958: {
  function f() {
    this.addClassNames("placeHolder");
    this.disable();
    this._content.hide();
    this._placeholder.show();
    this._title.setText("");
    return;
  }
}
test959: {
  function f() {
    f = a || !1;
    n = e.itemInstance;
    if (1 === n.quantity) {
      return t(1, f);
    }
    r = "items";
    g.open({
      min: 1,
      max: n.quantity,
      x: i + m.x,
      y: o + m.y
    });
    return;
  }
}
test960: {
  function f() {
    v = o || !1;
    g = t.itemInstance;
    if (1 === g.quantity) {
      return e(1);
    }
    _ = "items";
    M.open({
      min: 1,
      max: g.quantity,
      x: i,
      y: n
    });
    return;
  }
}
test961: {
  function f() {
    f(n);
    n.on("tap", s);
    n.bidHouseSellerBox = this;
    n.index = i;
    n.createChild("div", {
      className: "title",
      text: t
    });
    return n.createChild("div", {
      className: "value",
      text: b
    });
  }
}
test962: {
  function f() {
    e.amountHard = g.computeHardPrice(e.amountSoft);
    if (e.amountHard) {
      return p.intToString(e.amountHard);
    }
    return null;
  }
}
test963: {
  function f() {
    b.addTooltip(t, l);
    return p.intToString(e.amountSoft);
  }
}
test964: {
  function f() {
    s = s[0].toLowerCase() + s.substr(1);
    return h("tablet.unitPrice") + h("ui.common.colon") + p.intToString(i) + "\n(" + s + n + ")";
  }
}
test965: {
  function f() {
    t.setStyle("backgroundImage", e.item.getProperty("image"));
    t.createChild("div", {
      className: "quantity",
      text: "xÔö¼├í" + e.qty
    });
    return t;
  }
}
test966: {
  function f() {
    this._removeItem(e.UID, N);
    return this._scheduleNextAction();
  }
}
test967: {
  function f() {
    console.error(o);
    return i && i(o);
  }
}
test968: {
  function f() {
    n._updatePriceHighlighting();
    return i && i();
  }
}
test969: {
  function f() {
    "number" == typeof e ? t = e : (t = e.getProperty("id"), i = e.getItemInstance());
    return !(!i || !this._selectItem(i, !0)) || !!(i = this.storageView.selectAndShowSlotByGID(t)) && (this._selectItem(i, !0), !0);
  }
}
test970: {
  function f() {
    t.shopViewer.table.setContentLoading(!1);
    if (i) {
      return console.error(i);
    }
    t.currency = e.tokenId;
    t.token = e.token || null;
    t.shopViewer.setItemList(n.array, "modify-bidHouse" === t.mode);
    t.openOnItem && t.navigateToItem(t.openOnItem);
    return;
  }
}
test971: {
  function f() {
    e.maxItemLevel < 1e3 && (i += s("ui.common.maxLevel") + t + e.maxItemLevel + "<br/>");
    return i + s("ui.bidhouse.bigStoreTax") + t + e.taxPercentage + "%<br/>" + s("ui.bidhouse.bigStoreMaxSellTime") + t + e.unsoldDelay + " " + s("ui.time.hours", e.unsoldDelay) + "<br/>" + s("ui.bidhouse.unsold");
  }
}
test972: {
  function f() {
    i.setStyle("backgroundImage", e.getProperty("image"));
    i.createChild("div", {
      className: "quantity",
      text: e.quantity > 1 ? e.quantity : ""
    });
    return t;
  }
}
test973: {
  function f() {
    e.day ? t = e.day + " " + a("tablet.time.days.short", e.day) : e.hour ? t = e.hour + " " + a("tablet.time.hours.short", e.hour) : e.minute && (t = e.minute + " " + a("tablet.time.minutes.short", e.minute));
    return t;
  }
}
test974: {
  function f() {
    void 0 !== e.subarea ? this.status.openAtInfo = {
      subarea: e.subarea
    } : void 0 !== e.subareas ? this.status.openAtInfo = {
      subareas: e.subareas,
      favorite: e.favorite,
      centerOn: e.centerOn
    } : void 0 !== e.subareaConquest ? this.status.openAtInfo = {
      subareaConquest: e.subarea
    } : (void 0 !== e.x && void 0 !== e.y && (n.posX = e.x, n.posY = e.y), this.status.openAtInfo = {
      coords: n
    });
    if (this._isOpened && i.playerData.position.worldmapId === this._worldMap.getDisplayedWorldmapId()) {
      return this._centerAndHighlight();
    }
    this.status.isLoading || (this.status.isLoading = !0, this._addSpinner(), this._worldMap.initialize(n, function () {
      if (t.status.isWorldMapRefreshing = !0, t._removeSpinner(), t.status.isLoading = !1, t._isOpened = !0, !t.openState) return t._onClose();
      t._centerAndHighlight();
      var e = i.playerData.position.coordinates;
      t._worldMap.setIconPosition("userPosition", e.posX, e.posY), t._poiUpdater.updatePois(), t._taxCollectors.updateTaxCollectors(), t._conquestPresenter.setWorldMap(t._worldMap), t._taxCollectors.setWorldMap(t._worldMap), t._optionButtonsLoaded ? t._refreshOptionsButtonsSelections() : (t._createOptionsButtons(), t._createConquestButton()), 1 === t._worldMap.getDisplayedWorldmapId() ? t.conquestButton.show() : t.conquestButton.hide();
    }));
    return;
  }
}
test975: {
  function f() {
    t ? (o.selected = !0, o.addClassNames("selected")) : o.selected = !1;
    o.defaultSelected = t;
    this._optionButtons[e] = o;
    s(o, i);
    return o;
  }
}
test976: {
  function f() {
    this._isLoadingWorldMapData ? console.error("[WorldMap.initialize]", "Initialisation already launched") : this._display();
    return t();
  }
}
test977: {
  function f() {
    console.error("[WorldMap.initialize]", "Initialisation of a world map of another id is already launched", "Asked ", i, "Loading", this._worldMapId);
    return t();
  }
}
test978: {
  function f() {
    g._fullMapSprite = new d({
      scene: g._scene,
      x: 0,
      y: 0,
      w: g._worldMapWidth,
      h: g._worldMapHeight,
      layer: -1
    }, e);
    g._prepareGrid();
    g._prepareIcons();
    g._display();
    g._isLoadingWorldMapData = !1;
    g.emit("loaded");
    return t();
  }
}
test979: {
  function f() {
    delete G._chunkBatchIndexes[e.id];
    if (n !== G._chunkBatchCurrent) {
      i.release();
      return t();
    }
    e.texture = i;
    G._createChunkGraphic(e);
    t();
    return;
  }
}
test980: {
  function f() {
    console.error(new Error("worldMapData are not ready yet!"));
    return {
      x: 0,
      y: 0
    };
  }
}
test981: {
  function f() {
    t.fillStyle = "rgba(200, 100, 30, 0.27)";
    t.fillRect(0, 0, 128, 128);
    t.lineWidth = 2;
    t.strokeStyle = "rgba(200, 100, 30, 0.9)";
    t.strokeRect(0, 0, 128, 128);
    return e;
  }
}
test982: {
  function f() {
    this.sprite = e;
    return e;
  }
}
test983: {
  function f() {
    this._setFieldOfView();
    return !0;
  }
}
test984: {
  function f() {
    this.setCanvasDimensions(i, n);
    this.render(200);
    return a;
  }
}
test985: {
  function f() {
    this.emitAtDestination && (this.emitAtDestination = !1, this.emit("atDestination"));
    return !1;
  }
}
test986: {
  function f() {
    this.x = a;
    this.y = s;
    this.z = r;
    this.zoom = this.zoomTarget;
    this.a += (1 - this.a) * c;
    return !1;
  }
}
test987: {
  function f() {
    t = this.l + f / 2;
    n = this.t + g / 2;
    i = this.r - f / 2;
    o = this.b - g / 2;
    this.x < t ? this.x = t : this.x > i && (this.x = i);
    this.y < n ? this.y = n : this.y > o && (this.y = o);
    return !0;
  }
}
test988: {
  function f() {
    void 0 === this.icons[e.id] ? (this._addIconToZoneCluster(a, i, n), this.addIcon(a)) : console.warn("createIcon: An icon of id", e.id, "already exists.");
    return a;
  }
}
test989: {
  function f() {
    i.sort(t.positionOrdering);
    i.push(new o(0, 0));
    a[e] = i;
    return i;
  }
}
test990: {
  function f() {
    void 0 === i && (i = t.computeRelativePositions(e));
    return i;
  }
}
test991: {
  function f() {
    console.error(new Error("relativePositions for " + e + " is null, nVisibleIcons on the cluster is " + this.nVisibleIcons + ", clusterId is " + this.id + " " + i));
    return this.position;
  }
}
test992: {
  function f() {
    o[s + 4] = S + N + O;
    o[s + 9] = S + x + O;
    o[s + 14] = E + x + O;
    o[s + 19] = S + N + O;
    o[s + 24] = E + x + O;
    o[s + 29] = E + N + O;
    if (e.visible) {
      return t + 1;
    }
    return t;
  }
}
test993: {
  function f() {
    null !== e.vertexBufferSlot && c.index < r.index && (r = r.reference.previous.object);
    return r;
  }
}
test994: {
  function f() {
    h === t._worldmap.getDisplayedWorldmapId() && (i[a.id] = a);
    return n();
  }
}
test995: {
  function f() {
    l(n, u("ui.alliance.kickGuild"));
    return n;
  }
}
test996: {
  function f() {
    l(t, u("ui.alliance.giveLeadership"));
    return t;
  }
}
test997: {
  function f() {
    f(n);
    n.on("tap", function () {
      window.gui.openContextualMenu("player", {
        playerName: e.leaderName,
        playerId: e.leaderId,
        guildId: e.guildId,
        hasGuild: !0
      });
    });
    n.createChild("span", {
      text: u("ui.guild.leadBy", "")
    });
    n.createChild("span", {
      text: e.leaderName,
      className: "link"
    });
    return t;
  }
}
test998: {
  function f() {
    t.createChild("div", {
      text: e.nbTaxCollectors + " " + u("ui.social.guildTaxCollectors")
    });
    return t;
  }
}
test999: {
  function f() {
    p ? (t = new _("div", {
      className: "buttonBox"
    }), t.appendChild(o(r, e, i)), i || t.appendChild(a(e))) : i ? (t = new _("div", {
      className: "buttonBox"
    }), t.appendChild(o(r, e, !0))) : t = "";
    return t;
  }
}
test1000: {
  function f() {
    t.setValue({
      guild: e
    });
    return t;
  }
}
test1001: {
  function f() {
    a(i, null, l("ui.prism.changeVulnerabilityHour"));
    return i;
  }
}
test1002: {
  function f() {
    a(i, n);
    return i;
  }
}
test1003: {
  function f() {
    a(i, l(t.isConquestVillage ? "ui.zaap.village" : "ui.zaap.prism"));
    return i;
  }
}
test1004: {
  function f() {
    n.createChild("div", {
      text: t.getName()
    });
    n.createChild("div", {
      text: i.subAreaName + " " + t.getPosition()
    });
    e.type === y.prism ? n.createChild("div", {
      text: h("ui.prism.placed", t.getPlacementDate())
    }) : n.createChild("div", {
      className: "owner",
      text: h("ui.common.guild") + h("ui.common.colon") + t.getGuild().guildName
    });
    return n;
  }
}
test1005: {
  function f() {
    e.waitingForHelpInfo && s(t, e.waitingForHelpInfo);
    t.on("destroy", function () {
      a(t);
    });
    return t;
  }
}
test1006: {
  function f() {
    i.setFight(e.type, e);
    t.look && i.setTarget({
      id: e.id,
      entityLook: t.look,
      name: t.getName(),
      level: t.level
    });
    i.on("slotTap", M[e.type]);
    return i;
  }
}
test1007: {
  function f() {
    o += " fighters info is null? " + !n;
    console.error(new Error(o));
    return null;
  }
}
test1008: {
  function f() {
    h.addTooltip(e, function () {
      var t = e.fighter;
      return new l("div", {
        text: t.name + " (" + u("ui.common.short.level") + " " + t.level + ")"
      });
    });
    h.enableTooltip(e, !1);
    return e;
  }
}
test1009: {
  function f() {
    t.on("tap", function () {
      i.fight && i.emit("slotTap", this.fighter);
    });
    return t;
  }
}
test1010: {
  function f() {
    a.on("tap", function () {
      var e = s.getValue();
      if (e) {
        var n = {
          name: e
        };
        i && (n.session = i), window.dofus.sendMessage(t, n), s.setValue("");
      }
    });
    return {
      addCharacterArea: n,
      label: o,
      textInput: s,
      button: a
    };
  }
}
test1011: {
  function f() {
    console.error(new Error("Friends loadHeadImage: player has no breed"));
    t.setStyle("backgroundImage", null);
    return;
  }
}
test1012: {
  function f() {
    i.addClassNames("offline");
    i.show();
    return;
  }
}
test1013: {
  function f() {
    r && !h.getStyle("backgroundImage") && l(t, h);
    this._updateStateIcon(s, t);
    return;
  }
}
test1014: {
  function f() {
    i.on("tap", function () {
      var i = t._getHouseListRowIndexByHouseId(e.houseId);
      t.table.highlight(i), d.open("guildHouseInfo", {
        guildshareParams: e.guildshareParams,
        skillListIds: e.skillListIds
      });
    });
    return i;
  }
}
test1015: {
  function f() {
    e = g.createPanel(C, t, {
      title: this._label,
      top: 10,
      width: "60%",
      height: "40%",
      isModal: !0,
      noCloseButton: !0
    });
    i._parentEditor = this;
    return;
  }
}
test1016: {
  function f() {
    this._listener.stopListening();
    g.close(g.getPanel(C, 1).id);
    return this._parentEditor._finishEditing(e);
  }
}
test1017: {
  function f() {
    n.setText(o.areaName + " (" + o.subAreaName + ") " + d);
    return {
      location: n,
      abandoned: t || ""
    };
  }
}
test1018: {
  function f() {
    e += o.date + " - " + o.time;
    e += "\n" + c("ui.social.taxCollector.itemsValue", u.kamasToString(t.complements[0].itemsValue));
    return new r("div", {
      text: e
    });
  }
}
test1019: {
  function f() {
    a.on("slotTap", o);
    return {
      fightState: t,
      taxCollectorInfo: i,
      timer: n,
      fightersInfo: a
    };
  }
}
test1020: {
  function f() {
    n.spell = e;
    n.realLevel = t;
    return n;
  }
}
test1021: {
  function f() {
    i.characteristicKeyName = e;
    i.characteristicLabel = t;
    i.myWindow = this;
    return i;
  }
}
test1022: {
  function f() {
    this.guild.setText("#NONAME#" === n ? a("ui.guild.noName") : n);
    this.stopFollowingButton.toggleDisplay(!!e.followSpouse);
    this.followButton.toggleDisplay(!e.followSpouse);
    this.fightingIcon.toggleDisplay(!!e.inFight);
    t.character.setLook(e.spouseEntityLook, {
      direction: d.DIRECTION_SOUTH_WEST,
      boneType: "characters/",
      skinType: "characters/",
      riderOnly: !0
    });
    if (e.subAreaId) {
      this.status.setText(a("ui.server.state.online"));
      this.inviteButton.enable();
      this.followButton.enable();
      this.stopFollowingButton.enable();
      this.joinButton.enable();
      l.getData("SubAreas", e.subAreaId, function (e, i) {
        e && console.warn("Failed to retrieve subArea data", e), t.location.setText(i.nameId);
      });
      return;
    }
    this.status.setText(a("ui.server.state.offline"));
    this.location.setText("-");
    this.inviteButton.disable();
    this.followButton.disable();
    this.stopFollowingButton.disable();
    this.joinButton.disable();
    return;
  }
}
test1023: {
  function f() {
    t.setValue(e.guildEmblem, !0);
    return t;
  }
}
test1024: {
  function f() {
    t.setValue(e.allianceEmblem, !0);
    return t;
  }
}
test1025: {
  function f() {
    O.toggleDisplay(!o && !window.gui.playerData.isShopDisabled());
    A.setText(l("ui.mount.paddockDescription", v, y));
    if (a) {
      E.setValue(a);
      return;
    }
    return E.setValue(l("ui.item.averageprice.unavailable"));
  }
}
test1026: {
  function f() {
    d.hide();
    i.addClassNames("spinner");
    return;
  }
}
test1027: {
  function f() {
    s = !u.jobsPublicMode[u.job.id] && e || u.jobsPublicMode[u.job.id] && !e ? o.CRAFT_OPTION_PUBLIC_ON_CONNECTION : o.CRAFT_OPTION_NONE;
    return t + n + a + s;
  }
}
test1028: {
  function f() {
    o && (t && a.createChild("div", {
      className: "btnText",
      text: t
    }), a.createChild("div", {
      className: "btnIcon"
    }));
    return a;
  }
}
test1029: {
  function f() {
    k.closeAll();
    return k.open("firstCharacterForm", {
      skipIntro: !0,
      relookingParams: i.relookingParams
    });
  }
}
test1030: {
  function f() {
    this._allowElement(a, this.relookingParams.canRegender, Z);
    this._allowElement(s, this.relookingParams.canReface);
    this._allowElement(r, this.relookingParams.canReface, Q);
    e.toggleTabAvailability(re, this.relookingParams.canRegender && this._sex === re);
    e.toggleTabAvailability(le, this.relookingParams.canRegender && this._sex === le);
    return;
  }
}
test1031: {
  function f() {
    o.on("openTab", function (e) {
      a._updateSex(e);
    });
    this[t] = o;
    return n;
  }
}
test1032: {
  function f() {
    n.appendChild(i);
    return i;
  }
}
test1033: {
  function f() {
    r.appendChild(i);
    return i;
  }
}
test1034: {
  function f() {
    q.log("F_T_U_E.creates_new_character", {
      timestamp_event: new Y.DofusDate(Y.now()).getServerDate().timestamp,
      recommanded_breed_id: e._recommendedBreed,
      chosen_breed_id: e._breedId,
      gender_chosen: e._sex,
      face_id_chosen: e._cosmeticId,
      has_used_name_generator: e._nameGeneratorUsed,
      has_used_style_generator: e._styleGeneratorUsed,
      character_name: i
    });
    return k.close(e.id);
  }
}
test1035: {
  function f() {
    this._currentColors = t;
    return e;
  }
}
test1036: {
  function f() {
    o.createChild("div", {
      className: "arrow"
    });
    return n;
  }
}
test1037: {
  function f() {
    P.showNotification(A("tablet.charcrea.sameName"), this.createBtn);
    return !1;
  }
}
test1038: {
  function f() {
    P.showNotification(A("tablet.charcrea.sameBreed"), this.createBtn);
    return !1;
  }
}
test1039: {
  function f() {
    P.showNotification(A("tablet.charcrea.sameSex"), this.createBtn);
    return !1;
  }
}
test1040: {
  function f() {
    P.showNotification(A("tablet.charcrea.sameFace"), this.createBtn);
    return !1;
  }
}
test1041: {
  function f() {
    P.showNotification(A("tablet.charcrea.sameColors"), this.createBtn);
    return !1;
  }
}
test1042: {
  function f() {
    c > 1 && this._updateQtyToCraft({
      count: 0
    });
    n = e.objectGenericId || e.objectInfo && e.objectInfo.objectGID;
    l === h.CRAFT_IMPOSSIBLE ? (a._totalFailure += c, i = s("ui.craft.noResult"), o.openSimplePopup(i)) : l === h.CRAFT_FAILED && (a._totalFailure += c, a._isInAutoCraft || o.openSimplePopup(s("ui.craft.failed")));
    a._isInAutoCraft || a._restoreMergeStopButtons();
    if (n) {
      u.getItems([n], function (o) {
        if (o) return t(o);
        var d = u.items[n];
        r = d.nameId, l === h.CRAFT_SUCCESS && (a._totalSuccess += c, i = s("ui.craft.craftSuccessSelf", c, r)), t(null, {
          objectName: r,
          objectInfo: e.objectInfo,
          craftResult: l,
          message: i
        });
      });
      return;
    }
    return t(null, {
      objectName: r,
      objectInfo: e.objectInfo,
      craftResult: l,
      message: i
    });
  }
}
test1043: {
  function f() {
    p && s > p && (s = p);
    return s;
  }
}
test1044: {
  function f() {
    o = t;
    if (o.objectGID === a.RUNE_SIGNATURE_GID) {
      return e(1);
    }
    if (1 === i) {
      return e(1);
    }
    n._minMaxSelector.open({
      min: 1,
      max: i
    });
    return;
  }
}
test1045: {
  function f() {
    e && t.addClassNames(e);
    t.on("tap", a);
    t.craftActorBox = this;
    this._isRemote || s.setDraggable(t, {
      prepareForDrag: o
    }, "crafting", {
      slot: t
    });
    return t;
  }
}
test1046: {
  function f() {
    this._runeSignatureUid = e.objectUID;
    this._signatureSlot.setItem(e);
    return;
  }
}
test1047: {
  function f() {
    this._signatureSlot.unselect();
    this._signatureSlot.unset();
    this._runeSignatureUid = null;
    return;
  }
}
test1048: {
  function f() {
    m.preloadImage(i, function (e) {
      t && t.rootElement && t.setStyle("backgroundImage", e);
    });
    return t;
  }
}
test1049: {
  function f() {
    i.playerInfo = e;
    i.on("tap", t);
    return i;
  }
}
test1050: {
  function f() {
    t.openSimplePopup(i);
    t.chat.logMsg(i);
    u("ExchangeReadyMessage", {
      ready: !1,
      step: d.exchangeStep
    });
    d.isInAutoCraft = !1;
    d._updateCraftingButtons();
    return;
  }
}
test1051: {
  function f() {
    n.dragUiInfo = {
      backgroundImage: "none",
      prepareForDrag: e
    };
    l.setDraggable(n, n.dragUiInfo, "crafting", {
      slot: n
    });
    l.disableDrag(n);
    n.on("tap", function () {
      i._simpleTapOnSlot(n);
    });
    return n;
  }
}
test1052: {
  function f() {
    this._isCraftableItem(e) ? t = "item" : i.isForgemagus && e.typeId === v || e.typeId === y ? t = "rune" : e.id === w && (t = "signatureRune");
    return t;
  }
}
test1053: {
  function f() {
    v = f[_].diceNum - m[_].diceNum;
    c.logMsg(s("ui.craft.success") + " : +" + v + ", " + f[_].description);
    return;
  }
}
test1054: {
  function f() {
    o = t;
    if (1 === i) {
      return e(1);
    }
    n._minMaxSelector.open({
      min: 1,
      max: i
    });
    return;
  }
}
test1055: {
  function f() {
    b = e.itemInstance.objectUID;
    M = e.itemInstance.objectGID;
    T = e.paymentType;
    if (M === E.RUNE_SIGNATURE_GID && "craftPayment" !== I) {
      return a(1);
    }
    if (1 === n) {
      return a(1);
    }
    N.open({
      min: 1,
      max: n,
      defaultValue: n,
      x: t,
      y: i
    });
    return;
  }
}
test1056: {
  function f() {
    t || (t = new a("div", {
      className: "kamaTooltip",
      text: s("ui.exchange.kamas")
    }));
    return t;
  }
}
test1057: {
  function f() {
    i.addClassNames("settingOption");
    i.on("change", d.bind(t));
    return i;
  }
}
test1058: {
  function f() {
    a.on("change", d.bind(t));
    return a;
  }
}
test1059: {
  function f() {
    i && h.addTooltip(n, i);
    return n;
  }
}
test1060: {
  function f() {
    a && (_.on(a, this._gameOptionChangedHandler), o.on("destroy", function () {
      _.removeListener(a, i._gameOptionChangedHandler);
    }));
    return o;
  }
}
test1061: {
  function f() {
    p[e] || (e = p.fallbackLanguage);
    return e;
  }
}
test1062: {
  function f() {
    e = e.split(".")[0];
    e = e.replace(/\D/g, "");
    e = ~~e;
    return e >= 7;
  }
}
test1063: {
  function f() {
    this._hintArrow.hideArrow();
    return this.cb && this.cb(!1);
  }
}
test1064: {
  function f() {
    e.promo && e.promo.forEach(function (e) {
      t.imgPromo.push(e.image);
    });
    e.media && e.media.length > 0 && e.media[0].param === v ? t.imgArticle = e.media[0].url : e.image && e.image.length > _ && (t.imgArticle = e.image[_].url);
    return t;
  }
}
test1065: {
  function f() {
    o.currentPriceText = r.createChild("div", {
      className: "text"
    });
    o.currentIcon = r.createChild("div", {
      className: "icon"
    });
    return o;
  }
}
test1066: {
  function f() {
    this.priceButtons.toggleClassName("promo", !1);
    a(this.hardButton, 0, 0, !1, !0);
    this.hardButton.show();
    this.checkButtons();
    return;
  }
}
test1067: {
  function f() {
    this._isOpened = !0;
    this._categoryToOpenWhenReady = null;
    e && e.tabParams && e.tabParams.category && (this._categoryToOpenWhenReady = e.tabParams.category);
    if (window.gui.scenarioManager.isBehaviourEnabled(M.DISABLE_FAKE_SHOP)) {
      if (this._currentViewName) {
        e && e.tabParams && e.tabParams.category && this._navigateToCategory(e.tabParams.category);
        return;
      }
      this._isInitializing || this._reinitializeShop();
      this._needsResize && this.resize();
      a();
      return;
    }
    return this._showFakeShop(function (e) {
      if (e) return console.error(e);
    });
  }
}
test1068: {
  function f() {
    this.wallet.setFakeHardAmount(400);
    this._needsResize && this.resize();
    return T(function (i, n) {
      if (i || !n) {
        return e(new Error("ShopWindow._showFakeShop: unable to get data. " + i));
      }
      t.onShopOpenCategorySuccess(n);
      t._openCategory(L);
      return e(null);
    });
  }
}
test1069: {
  function f() {
    t.createChild("div", {
      className: "text",
      text: e.name.toUpperCase()
    });
    return t;
  }
}
test1070: {
  function f() {
    this._views[A].clear();
    this.topTabsList.clearContent();
    this._reinitializeShop();
    return;
  }
}
test1071: {
  function f() {
    e.forEach(function (e) {
      var i = e.image.length > 0 ? e.image[u].url : null;
      e.data && t.push({
        imageUrl: i,
        tapParam: {
          id: e.data.id,
          type: e.type
        }
      });
    });
    return t;
  }
}
test1072: {
  function f() {
    c.on("tapIAPButton", i);
    c.on("tapHardButton", n);
    c.on("tapSoftButton", a);
    c.on("tapItemImage", s);
    return c;
  }
}
test1073: {
  function f() {
    i.media[0].url = n;
    return e(null, t);
  }
}
test1074: {
  function f() {
    e.table.getRowCount() > 0 && e.table.clearContent();
    if (t) {
      if (p(t)) {
        return e.table.setPlaceholderText(h("ui.search.noResult"));
      }
      e.table.setPlaceholderText(null);
      e.table.addMap(t);
      return;
    }
    return e.table.setPlaceholderText(h("ui.toa.ladderUnavailable"));
  }
}
test1075: {
  function f() {
    e.ornament > 0 && p.push(e.ornament);
    o += d.length + p.length;
    r(n[0], d, "gfx/items", "iconId", u, i);
    r(n[1], p, "gfx/ornaments", "iconId", [], i);
    if (0 === o) {
      return t(null, []);
    }
    0;
    return;
  }
}
test1076: {
  function f() {
    t = i(n(t.split("/"), function (e) {
      return !!e;
    }), !o).join("/");
    return (o ? "/" : "") + t || ".";
  }
}
test1077: {
  function f() {
    e = i(n(e.split("/"), function (e) {
      return !!e;
    }), !o).join("/");
    e || o || (e = ".");
    e && a && (e += "/");
    return (o ? "/" : "") + e;
  }
}
test1078: {
  function f() {
    c = c.concat(a.slice(r));
    return c.join("/");
  }
}
test1079: {
  function f() {
    t && i.substr(-1 * t.length) === t && (i = i.substr(0, i.length - t.length));
    return i;
  }
}
test1080: {
  function f() {
    t < 0 && (t = e.length + t);
    return e.substr(t, i);
  }
}
test1081: {
  function f() {
    this._stepsLabel = [];
    if (o) {
      o.forEach(function (o) {
        var s = new r("div", {
          className: "label",
          name: o.stepNumber
        });
        s.createChild("div", {
          className: "arrow"
        }), t._stepsLabel.push({
          element: s.createChild("div", {
            className: "text",
            text: a("ui.toa.step") + " " + o.stepNumber + " - " + n[o.stepNumber - 1] + "%"
          }),
          stepNumber: o.stepNumber
        });
        var l = e.addItem({
          id: o.stepNumber,
          element: s
        }, {
          noRefresh: !0
        });
        l.sublist = l.appendChild(new r("div", {
          className: "sublist"
        })), o.stages.forEach(function (e) {
          var n = new r("div", {
            className: "label",
            name: e.stageLevel
          });
          n.createChild("div", {
            className: "text",
            text: a("ui.toa.stage") + " " + e.stageLevel
          }), l.sublist.appendChild(n), d(n), n.on("tap", function () {
            t._resetSelectedSubElement(), m = e.stageLevel, n.addClassNames("selected"), t.selectedSubAreaElement = n;
            var o = i.getMonsterIds(m, p),
              a = i.getChallengeIds(m, p);
            i.gatheringCompositionData(o, a, function (e, i, n) {
              if (e) {
                return console.error(e);
              }
              t._showMonsters(i);
              t._showChallenges(n);
              t._showScore(n);
              return;
            });
          });
        }), l.sublist.hide();
      });
      b = !0;
      return;
    }
    return console.error(new Error("Cannot create steps, list is empty."));
  }
}
test1082: {
  function f() {
    a.openNotEnoughHardCurrencyPopup(l.TOA_RETRY_HC_PRICE - t);
    return i._fireCallbackAndClean(new Error(i.NEED_HC));
  }
}
test1083: {
  function f() {
    delete i._actionIdMap[e.actionId];
    return i._fireCallbackAndClean();
  }
}
test1084: {
  function f() {
    window.gui.playerData.isAbleToSeeId() && (n += " [" + i + "]");
    return n;
  }
}
test1085: {
  function f() {
    e._updateQuestProgress();
    e._isRefreshPending = !1;
    e.delClassNames("spinner");
    return;
  }
}
test1086: {
  function f() {
    this.questDesc.setText(h("ui.almanax.dolmanaxQuestDone"));
    this.questProgressTitle.setText(h("ui.almanax.questDone"));
    this.questProgressBar.setValue(1);
    return;
  }
}
test1087: {
  function f() {
    e && i._displayUpgradedLW(e);
    return t();
  }
}
test1088: {
  function f() {
    a.length > 0 && (i.placeHolderResources.setText(null), i.validationButton.enable());
    return t();
  }
}
test1089: {
  function f() {
    h.log("F_T_U_E.survey_question_answer", {
      question_id: e,
      answer_id: t,
      timestamp_event: new p.DofusDate(p.now()).getServerDate().timestamp
    });
    f[e][t](e, t, i);
    return m[e][t];
  }
}
test1090: {
  function f() {
    Object.keys(i).forEach(function (o) {
      var a = i[o];
      a.breed === e && a.gender === t && n.push(o);
    });
    return n;
  }
}
test1091: {
  function f() {
    window.gui.mainControls.open();
    return !0;
  }
}
test1092: {
  function f() {
    i = i || {};
    e === window.gui.scenarioManager.conditionTypeEnum.MOVEMENT_CONFIRM && d[i.cellId] && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
      questId: t.ALBUERA_QUEST_ID,
      objectiveId: 13491
    });
    return 0;
  }
}
test1093: {
  function f() {
    i = i || {};
    e === window.gui.scenarioManager.conditionTypeEnum.NPC_INTERACTION && 3888 === i.npcId && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
      questId: t.ALBUERA_QUEST_ID,
      objectiveId: 13493
    });
    return 0;
  }
}
test1094: {
  function f() {
    t = t || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.FIGHT_TAP && 359 === t.cellId) {
      return 1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP) {
      return -3;
    }
    return 0;
  }
}
test1095: {
  function f() {
    Object.keys(o.getSpells(r.USABLE)).every(function (e) {
      o.spells[e].level > 1 && (n = !0);
      return !n;
    });
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "spells" === i.tabId) {
      return 1;
    }
    if (n) {
      window.dofus.sendMessage("QuestObjectiveValidationMessage", {
        questId: t.ALBUERA_QUEST_ID,
        objectiveId: 13505
      });
      return 3;
    }
    return 0;
  }
}
test1096: {
  function f() {
    o.spells[e].level > 1 && (n = !0);
    return !n;
  }
}
test1097: {
  function f() {
    t = t || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "grimoire" === t.windowId) {
      return -1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.SHOW_CONFIRM_BUTTON && t.canConfirm) {
      return 1;
    }
    return 0;
  }
}
test1098: {
  function f() {
    i = i || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "grimoire" === i.windowId) {
      return -2;
    }
    if (e !== window.gui.scenarioManager.conditionTypeEnum.SHOW_CONFIRM_BUTTON || i.canConfirm) {
      e === window.gui.scenarioManager.conditionTypeEnum.CONFIRM_UPGRADE_SPELL && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
        questId: t.ALBUERA_QUEST_ID,
        objectiveId: 13505
      });
      return 0;
    }
    return -1;
  }
}
test1099: {
  function f() {
    t = t || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "grimoire" === t.windowId) {
      return 1;
    }
    return 0;
  }
}
test1100: {
  function f() {
    t = t || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "equipment" === t.windowId) {
      return 1;
    }
    return 0;
  }
}
test1101: {
  function f() {
    t = t || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "equipment" === t.windowId) {
      return -1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENING_FINISHED && "equipment" === t.windowId || window.gui.playerData.inventory.equippedItems[1]) {
      return 1;
    }
    return 0;
  }
}
test1102: {
  function f() {
    t = t || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "equipment" === t.windowId) {
      return -2;
    }
    if (window.gui.playerData.inventory.equippedItems[1]) {
      return 1;
    }
    return 0;
  }
}
test1103: {
  function f() {
    i = i || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "equipment" === i.windowId) {
      if (window.gui.playerData.inventory.equippedItems[1]) {
        window.dofus.sendMessage("QuestObjectiveValidationMessage", {
          questId: t.ALBUERA_QUEST_ID,
          objectiveId: 13507
        });
        return 0;
      }
      return -3;
    }
    if (e !== window.gui.scenarioManager.conditionTypeEnum.WEAPON_CHANGED || window.gui.playerData.inventory.equippedItems[1]) {
      return 0;
    }
    return -1;
  }
}
test1104: {
  function f() {
    t = t || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.FIGHTER_TURN && t.id === window.gui.playerData.characters.mainCharacterId) {
      return 1;
    }
    return 0;
  }
}
test1105: {
  function f() {
    t = t || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.FIGHT_TAP && 329 === t.cellId) {
      return 1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP) {
      return -1;
    }
    return 0;
  }
}
test1106: {
  function f() {
    e === window.gui.scenarioManager.conditionTypeEnum.HIGHLIGHT_ELEMENTS && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
      questId: t.ALBUERA_QUEST_ID,
      objectiveId: 14082
    });
    return 0;
  }
}
test1107: {
  function f() {
    i = i || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "market" === i.windowId) {
      return -1;
    }
    if (e === window.gui.scenarioManager.conditionTypeEnum.FAKE_SHOP_BUY) {
      window.dofus.sendMessage("QuestObjectiveValidationMessage", {
        questId: t.ALBUERA_QUEST_ID,
        objectiveId: 14072
      });
      return 0;
    }
    return 0;
  }
}
test1108: {
  function f() {
    t = t || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.NEW_QUEST_START && 4260 === t.questId || e === window.gui.scenarioManager.conditionTypeEnum.QUEST_ALREADY_STARTED && window.gui.playerData.quests.active[4260]) {
      return 1;
    }
    return 0;
  }
}
test1109: {
  function f() {
    t = t || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "quests" === t.tabId) {
      return 1;
    }
    return 0;
  }
}
test1110: {
  function f() {
    i = i || {};
    e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "grimoire" === i.windowId && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
      questId: t.ALBUERA_QUEST_ID,
      objectiveId: 13539
    });
    return 0;
  }
}
test1111: {
  function f() {
    t = t || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "worldMap" === t.windowId) {
      return 1;
    }
    return 0;
  }
}
test1112: {
  function f() {
    i = i || {};
    e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "worldMap" === i.windowId && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
      questId: t.ALBUERA_QUEST_ID,
      objectiveId: 14060
    });
    return 0;
  }
}
test1113: {
  function f() {
    e === window.gui.scenarioManager.conditionTypeEnum.TAP_ANYWHERE && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
      questId: t.ALBUERA_QUEST_ID,
      objectiveId: 14062
    });
    return 0;
  }
}
test1114: {
  function f() {
    !window.gui.playerData.isFighting && window.gui.playerData.characterBaseInformations.level >= 10 && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
      questId: t.ALBUERA_QUEST_ID,
      objectiveId: 14074
    });
    return 0;
  }
}
test1115: {
  function f() {
    t = t || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "help" === t.windowId) {
      return 1;
    }
    return 0;
  }
}
test1116: {
  function f() {
    i = i || {};
    if (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "help" === i.windowId) {
      window.dofus.sendMessage("QuestObjectiveValidationMessage", {
        questId: t.ALBUERA_QUEST_ID,
        objectiveId: 14076
      });
      return 1;
    }
    return 0;
  }
}
test1117: {
  function f() {
    console.warn("ActorElement.getPosition - Actor not found");
    return {};
  }
}
test1118: {
  function f() {
    console.warn("InteractiveElement.getPosition - Element does not exist");
    return {};
  }
}
test1119: {
  function f() {
    console.warn("CellElement.getPosition - No cellId");
    return {};
  }
}
test1120: {
  function f() {
    this.currentElement = e;
    this.currentParams = t;
    return;
  }
}
test1121: {
  function f() {
    this._webGlUnsupported = this.createChild("div", {
      className: "webGlUnsupported"
    });
    this._webGlUnsupported.setText(u("tablet.login.webGlUnsupported"));
    console.error("WebGL is not supported");
    return;
  }
}
test1122: {
  function f() {
    o !== this._seed && (i = !0);
    return i;
  }
}
test1123: {
  function f() {
    t || (t = this._urls[r]);
    if (t) {
      return t;
    }
    o.error("getUrlFor: url missing for lang " + e);
    return null;
  }
}
test1124: {
  function f() {
    t || (o.error(new Error("_getUserPrefKey: language missing with lang " + t)), t = r);
    return l + "_" + this._uid + "_" + t;
  }
}
test1125: {
  function f() {
    i._recaptchaResponse = e;
    return i._createGuest();
  }
}
test1126: {
  function f() {
    o.onValidate = t;
    u.open("legalAgreement", o);
    return;
  }
}
test1127: {
  function f() {
    window.gui.openConfirmPopup({
      title: r("tablet.oldGuest.register"),
      message: r("tablet.oldGuest.registerReminder"),
      cb: function (t) {
        if (t) {
          return e.openRegisterWindow(i.guestAccount);
        }
        i._play();
        return;
      }
    });
    i._updateLastIdentificationTime();
    return;
  }
}
test1128: {
  function f() {
    window.gui.openSimplePopup(n);
    console.error("GuestForm#_createGuest error:", t.error);
    e._btnPlay.enable();
    return;
  }
}
test1129: {
  function f() {
    e = e.filter(function (e) {
      return !e.pinned;
    });
    e.sort(function (e, t) {
      return Date.parse(t.added_date) - Date.parse(e.added_date);
    });
    return e[0];
  }
}
test1130: {
  function f() {
    e = e.replace(/\[hr\]/g, "[hr][/hr]");
    return e = e.replace(/\[list=1\]/g, "[list type=decimal]");
  }
}
test1131: {
  function f() {
    window.developmentMode && console.error(t);
    e._content.delClassNames("spinner");
    e._content.setHtml(h("tablet.login.forumUnreachable"));
    m.allLinksOnTargetBlank(e._content);
    return;
  }
}
test1132: {
  function f() {
    e._content.setHtml(h("tablet.login.forumUnreachable"));
    m.allLinksOnTargetBlank(e._content);
    return;
  }
}
test1133: {
  function f() {
    s = s.replace(c, function (e, i, n, o, a) {
      d = t(n, e, i, n, o, a, d);
      return e;
    });
    return d;
  }
}
test1134: {
  function f() {
    d = t(n, e, i, n, o, a, d);
    return e;
  }
}
test1135: {
  function f() {
    e = e.replace(/\[/g, "<");
    e = e.replace(/\]/g, ">");
    return i(e);
  }
}
test1136: {
  function f() {
    i = i.substr(1) || "";
    b.test(i) || (i = "");
    return '<span id="post_' + i + '">';
  }
}
test1137: {
  function f() {
    i = i.substr(1) || "";
    i = i.replace(/<.*?>/g, "");
    return '<abbr title="' + i + '">';
  }
}
test1138: {
  function f() {
    i = i.substr(1) || "";
    i = i.replace(/<.*?>/g, "");
    return '<acronym title="' + i + '">';
  }
}
test1139: {
  function f() {
    n = n.substr(1) || "black";
    n = n.toLowerCase();
    n = n.trim();
    _.lastIndex = 0;
    v.lastIndex = 0;
    _.test(n) ? i = n : v.test(n) ? "#" !== n.substr(0, 1) ? (i = "_" + n, n = "#" + n) : i = "_" + n.substr(1) : (n = "black", i = "black");
    return '<span class="bbcode-color-' + i + '" style="color:' + n + '">';
  }
}
test1140: {
  function f() {
    i = e ? e.substr(1) : t.replace(/<.*?>/g, "");
    i = i.trim();
    y.lastIndex = 0;
    if (y.test(i)) {
      return '<a href="mailto:' + i + '" target="_blank">';
    }
    return "<a>";
  }
}
test1141: {
  function f() {
    i = e ? e.substr(1) : t.replace(/<.*?>/g, "");
    i = i.trim();
    g.lastIndex = 0;
    if (g.test(i)) {
      return '<a href="' + i + '" target="_blank">';
    }
    return '<a target="_blank">';
  }
}
test1142: {
  function f() {
    o = o.trim();
    o = o.toLowerCase();
    _.lastIndex = 0;
    v.lastIndex = 0;
    _.test(o) ? n = o : v.test(o) ? "#" !== o.substr(0, 1) ? (n = "_" + o, o = "#" + o) : n = "_" + o.substr(1) : (o = "inherit", n = "inherit");
    return '<span class="bbcode-bgcolor-' + n + '" style="background-color: ' + o + '">';
  }
}
test1143: {
  function f() {
    o && (d += 'alt="' + o + '" ');
    a && (d += 'width="' + a + '" ');
    s && (d += 'height="' + s + '" ');
    return d += "/>";
  }
}
test1144: {
  function f() {
    i = e ? e.substr(1) : t.replace(/<.*?>/g, "");
    i = i.trim();
    f.lastIndex = 0;
    f.test(i) || (i = "#");
    return '<a href="' + i + '" />';
  }
}
test1145: {
  function f() {
    n = n.trim();
    n = n.replace(/<.*?>/g, "");
    0 === n.indexOf("type=") && (n = n.replace("type=", ""), n = n.trim(), /(none|disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman|lower-alpha|upper-alpha|lower-greek|lower-latin|upper-latin|hebrew|armenian|georgian|cjk-ideographic|hiragana|katakana|hiragana-iroha|katakana-iroha)/i.test(n) && (i = '<ul class="bbcode-list-' + n + '" style="list-style-type: ' + n + '">'));
    return i;
  }
}
test1146: {
  function f() {
    i = i.substr(1);
    i = i.replace(/<.*?>/g, "");
    i = i.trim();
    t && (i += " ");
    return '<div class="bbcode-color-red" style="color: red;">* ' + i + " ";
  }
}
test1147: {
  function f() {
    i = '<div class="quoteHeader">';
    i += "Quote From: " + a;
    i += "</div>";
    return i + n;
  }
}
test1148: {
  function f() {
    r = r.replace(/"/g, "");
    i = '<div class="quoteHeader">';
    i += "Quote From: " + r;
    i += "</div>";
    return i + n;
  }
}
test1149: {
  function f() {
    l && (i = '<div class="quoteHeader">', i += "Quote From: " + l, i += "</div>");
    l && c && d && (i = '<div class="quoteHeader">', i += '<a href="' + c + '">', i += "Quote from: " + l + " on ept-date=" + d, i += "</a>", i += "</div>");
    return i + n;
  }
}
test1150: {
  function f() {
    u = u.replace(/#/gi, "_");
    return '<span class="bbcode-shadow-' + u + '" style="text-shadow: ' + i + '">';
  }
}
test1151: {
  function f() {
    i = i.substr(1) || "inherit";
    i = i.trim();
    w.lastIndex = 0;
    w.test(i) || (i = "inherit");
    return '<span class="bbcode-size-' + i + '" style="font-size: ' + i + ' !important; line-height: 1.3em;">';
  }
}
test1152: {
  function f() {
    Number(i) ? i = "ept-date=" + i : (i = new Date(i).getTime(), i = "ept-date=" + i);
    return i;
  }
}
test1153: {
  function f() {
    i = e ? e.substr(1) : t.replace(/<.*?>/g, "");
    i = i.trim();
    f.lastIndex = 0;
    f.test(i) || (i = "#");
    return '<a href="' + i + '" target="_blank">';
  }
}
test1154: {
  function f() {
    r[i].displayContent === !1 && (s = "");
    return l + s + d;
  }
}
test1155: {
  function f() {
    m.tags = function () {
      return r;
    };
    m.addTags = function (t) {
      var i;
      for (i in t) r[i] = t[i];
      e();
    };
    m.process = function (e) {
      var i = {
          html: "",
          error: !1
        },
        n = [];
      for (e.text = e.text.replace(/</g, "&lt;"), e.text = e.text.replace(/>/g, "&gt;"), e.text = e.text.replace(h, function (e, t, i, n) {
        return "<" + i + ">";
      }), e.text = e.text.replace(p, function (e, t, i, n) {
        return "<" + i + ">";
      }), e.text = e.text.replace(/\[/g, "&#91;"), e.text = e.text.replace(/\]/g, "&#93;"), e.text = e.text.replace(/</g, "["), e.text = e.text.replace(/>/g, "]"); e.text !== (e.text = e.text.replace(u, function (e, t, i, n) {
        n = n.replace(/\[/g, "&#91;");
        n = n.replace(/\]/g, "&#93;");
        i = i || "";
        n = n || "";
        return "[" + t + i + "]" + n + "[/" + t + "]";
      })););
      e.text = a(e.text);
      e.text = s(e.text);
      n = t("bbcode", e.text, -1, "", "", e.text);
      i.html = o(e);
      i.html.indexOf("[") === -1 && i.html.indexOf("]") === -1 || n.push("Some tags appear to be misaligned.");
      e.removeMisalignedTags && (i.html = i.html.replace(/\[.*?\]/g, ""));
      e.addInLineBreaks && (i.html = '<div style="white-space:pre;">' + i.html + "</div>");
      i.html = i.html.replace("&#91;", "[");
      i.html = i.html.replace("&#93;", "]");
      i.html = i.html.replace(/&lt;/g, "<");
      i.html = i.html.replace(/&gt;/g, ">");
      i.error = 0 !== n.length;
      i.errorQueue = n;
      return i;
    };
    return m;
  }
}
test1156: {
  function f() {
    n = n.replace(/\[/g, "&#91;");
    n = n.replace(/\]/g, "&#93;");
    i = i || "";
    n = n || "";
    return "[" + t + i + "]" + n + "[/" + t + "]";
  }
}
test1157: {
  function f() {
    e.text = a(e.text);
    e.text = s(e.text);
    n = t("bbcode", e.text, -1, "", "", e.text);
    i.html = o(e);
    i.html.indexOf("[") === -1 && i.html.indexOf("]") === -1 || n.push("Some tags appear to be misaligned.");
    e.removeMisalignedTags && (i.html = i.html.replace(/\[.*?\]/g, ""));
    e.addInLineBreaks && (i.html = '<div style="white-space:pre;">' + i.html + "</div>");
    i.html = i.html.replace("&#91;", "[");
    i.html = i.html.replace("&#93;", "]");
    i.html = i.html.replace(/&lt;/g, "<");
    i.html = i.html.replace(/&gt;/g, ">");
    i.error = 0 !== n.length;
    i.errorQueue = n;
    return i;
  }
}
test1158: {
  function f() {
    se.delClassNames("error");
    se.setText("");
    C.toggleDisplay(n && !a);
    x.toggleDisplay(e && t && !i);
    P.toggleDisplay(e && t && !i);
    z.toggleDisplay(s && !r);
    j.toggleDisplay(l && !c);
    ue.disable();
    if (n && a && e && t && i && s && r && l && c && u && d) {
      ue.enable();
      return !0;
    }
    se.addClassNames("error");
    return !1;
  }
}
test1159: {
  function f() {
    ue.enable();
    if (e) {
      if (400 === e._statusCode || 422 === e._statusCode) {
        se.addClassNames("error");
        se.setText(e.text);
        400 === e._statusCode && i(e.suggests);
        return;
      }
      window.gui.openSimplePopup(r("ui.secureMode.error.default"));
      return console.error("RegisterWindow haapiCall", e);
    }
    return o.close(t);
  }
}
test1160: {
  function f() {
    e.setHtml(r("ui.register.pwdRules"));
    return e;
  }
}
test1161: {
  function f() {
    e.setHtml(r("ui.register.nicknameRules"));
    return e;
  }
}
test1162: {
  function f() {
    T.setValue("");
    E.setValue("");
    D.setValue("");
    q.setValue("");
    K.setValue("");
    ee.setValue("");
    q.enable();
    se.setText("");
    se.delClassNames("error");
    re.delClassNames("visible");
    d.setAutomaticHide(!0);
    o.registerLogic.resetValues();
    return v(e);
  }
}
test1163: {
  function f() {
    t || (t = "?");
    return v("tablet.common.mapsPlural", e + "/" + t);
  }
}
test1164: {
  function f() {
    e || 0 === e || (e = t);
    return i(null, e);
  }
}
test1165: {
  function f() {
    e._createDom();
    return e._checkAssetsVersion(function (i) {
      e.close();
      if (i) {
        console.error(new Error("cleanAssets " + i));
        window.gui.openSimplePopup(r("ui.popup.accessDenied.unknown"), r("ui.popup.accessDenied"));
        return t(i);
      }
      return t();
    });
  }
}
test1166: {
  function f() {
    e.close();
    if (i) {
      console.error(new Error("cleanAssets " + i));
      window.gui.openSimplePopup(r("ui.popup.accessDenied.unknown"), r("ui.popup.accessDenied"));
      return t(i);
    }
    return t();
  }
}
test1167: {
  function f() {
    t.messageStack.shift();
    if (0 === t.messageStack.length) {
      s.close(t.id);
      return;
    }
    t._update();
    return;
  }
}
test1168: {
  function f() {
    i.store.applicationUsername = e;
    return t();
  }
}
test1169: {
  function f() {
    t = t || [];
    return e(null, t);
  }
}
test1170: {
  function f() {
    t = t || [];
    return e(null, t);
  }
}
test1171: {
  function f() {
    t && t.getWorldMap() && t.getWorldMap().getScene() && t.getWorldMap().getScene().renderer && t.getWorldMap().getScene().renderer.textureCache && (e.worldMap = t.getWorldMap().getScene().renderer.textureCache.getMemoryInformation());
    return e;
  }
}
test1172: {
  function f() {
    this.lastMoveRequestTime && !s.isDialogActive() && Date.now() - this.lastMoveRequestTime > u && window.gui.connectionSplashScreen.onStateChange("UNSTABLE");
    this.endMovementCallback = e;
    this.isMovementCanceled = !0;
    return;
  }
}
test1173: {
  function f() {
    n.cellId !== i && n.setDisposition(i);
    return this.onArrived(i);
  }
}
test1174: {
  function f() {
    n.setDisposition(i);
    return this.onArrived(i);
  }
}
test1175: {
  function f() {
    i(null, e);
    return e;
  }
}
test1176: {
  function f() {
    i(new Error("_movePlayerOnMap noPath:" + s + ":" + e));
    return null;
  }
}
test1177: {
  function f() {
    g.setAcceleration(1);
    n.pathTween.removeOnUpdate();
    n.onMovementUpdate = function () {
      g.moveTo(n.x, n.y);
    };
    n.pathTween.onUpdate(n.onMovementUpdate);
    this.userPreviousPosition = n.cellId;
    n.setCellPosition(m);
    return m;
  }
}
test1178: {
  function f() {
    t.actorManager.unpause();
    return e && e();
  }
}
test1179: {
  function f() {
    console.error(new Error("map is null, cannot add cell elevation."));
    return t;
  }
}
test1180: {
  function f() {
    console.error(new Error('"zone" is not an array'));
    return null;
  }
}
test1181: {
  function f() {
    this._sprites.push(i);
    return i;
  }
}
test1182: {
  function f() {
    v.push(arguments);
    w || (w = !0, g.loadTexture("ui/hintArrow/arrow.png", function (e) {
      y = e, o();
    }, a.renderer, "linear", "permanent"));
    return;
  }
}
test1183: {
  function f() {
    this.tween = new m(this, ["alpha", "centerY"]).from({
      alpha: 0,
      centerY: i
    }).to({
      alpha: 1,
      centerY: i
    }, C).to({
      alpha: 1,
      centerY: n
    }, T, p.trigo, E).to({
      alpha: 0,
      centerY: n
    }, C).to({
      alpha: 0,
      centerY: n
    }, T).start(e || !0);
    return this;
  }
}
test1184: {
  function f() {
    e._isLoaded = !0;
    return e._loadingCallback && e._loadingCallback();
  }
}
test1185: {
  function f() {
    s(i, n) && l.push({
      i: n.i - 1,
      j: n.j - 1
    });
    s(i, r) && l.push({
      i: r.i - 1,
      j: r.j - 1
    });
    s(i, o) && l.push({
      i: o.i - 1,
      j: o.j - 1
    });
    s(i, a) && l.push({
      i: a.i - 1,
      j: a.j - 1
    });
    return l;
  }
}
test1186: {
  function f() {
    n.push(o + (a << 12));
    return n;
  }
}
test1187: {
  function f() {
    n = ~~Math.round(n);
    o = ~~Math.round(2 * o) / 2 - d;
    return {
      x: n,
      y: o
    };
  }
}
test1188: {
  function f() {
    this.nAssetsToLoad += 1;
    o.loadAnimationManager(t, "bone", e.look + "/state", function () {
      t.changeState(t.state, !0), i.notifyAssetAsLoaded();
    });
    return t;
  }
}
test1189: {
  function f() {
    this.nAssetsToLoad += 1;
    o.loadAnimationManager(t, "bone", e.look + "/motion", function () {
      s.isFightMode ? t.stop() : t.animate(), i.notifyAssetAsLoaded();
    });
    return t;
  }
}
test1190: {
  function f() {
    console.error(new Error("Trying to add animation with no cells!"));
    return null;
  }
}
test1191: {
  function f() {
    t.playAnimation();
    t._listReference = this._layers.addFront(t);
    this._resetBoundingBox();
    return t;
  }
}
test1192: {
  function f() {
    this.tween.reset().wait(t).to(e, i, a.backOut, 2.3).start();
    return t + i;
  }
}
test1193: {
  function f() {
    console.warn("amsal: No actor with id", e);
    return a();
  }
}
test1194: {
  function f() {
    r || (I[e] = _.createFifo(), r = I[e]);
    return r.push(function (e) {
      function n(e, t) {
        s.staticAnim(function () {
          e();
          return t();
        });
      }
      s.riderEntity = null;
      return s.setLook(t, i, function () {
        var t = s.animManager;
        s.isFollower && (t.audioVol = C);
        var i = s.look;
        if (s.carriedEntity) {
          var o = s.riderEntity || s.animManager;
          return o.addAnimation({
            base: "carrying",
            direction: -1
          }, function () {
            o.addAnimationModifier("AnimStatique", "AnimStatiqueCarrying");
            o.addAnimationModifier("AnimMarche", "AnimMarcheCarrying");
            o.addAnimationModifier("AnimCourse", "AnimCourseCarrying");
            o.addAnimationModifier("AnimHit", "AnimHitCarrying");
            o.addAnimationModifier("AnimTacle", "AnimTacleCarrying");
            return n(e, a);
          });
        }
        1 === i.bonesId && i.skins && i.skins[0] && d[i.skins[0]] && t.addAnimationModifier("AnimStatique", "AnimStatique" + i.skins[0]);
        return n(e, a);
      });
    });
  }
}
test1195: {
  function f() {
    e();
    return t();
  }
}
test1196: {
  function f() {
    s.riderEntity = null;
    return s.setLook(t, i, function () {
      var t = s.animManager;
      s.isFollower && (t.audioVol = C);
      var i = s.look;
      if (s.carriedEntity) {
        var o = s.riderEntity || s.animManager;
        return o.addAnimation({
          base: "carrying",
          direction: -1
        }, function () {
          o.addAnimationModifier("AnimStatique", "AnimStatiqueCarrying");
          o.addAnimationModifier("AnimMarche", "AnimMarcheCarrying");
          o.addAnimationModifier("AnimCourse", "AnimCourseCarrying");
          o.addAnimationModifier("AnimHit", "AnimHitCarrying");
          o.addAnimationModifier("AnimTacle", "AnimTacleCarrying");
          return n(e, a);
        });
      }
      1 === i.bonesId && i.skins && i.skins[0] && d[i.skins[0]] && t.addAnimationModifier("AnimStatique", "AnimStatique" + i.skins[0]);
      return n(e, a);
    });
  }
}
test1197: {
  function f() {
    o.addAnimationModifier("AnimStatique", "AnimStatiqueCarrying");
    o.addAnimationModifier("AnimMarche", "AnimMarcheCarrying");
    o.addAnimationModifier("AnimCourse", "AnimCourseCarrying");
    o.addAnimationModifier("AnimHit", "AnimHitCarrying");
    o.addAnimationModifier("AnimTacle", "AnimTacleCarrying");
    return n(e, a);
  }
}
test1198: {
  function f() {
    1 === i.bonesId && i.skins && i.skins[0] && d[i.skins[0]] && t.addAnimationModifier("AnimStatique", "AnimStatique" + i.skins[0]);
    return n(e, a);
  }
}
test1199: {
  function f() {
    t[this.userActor.cellId] = this.userActor;
    return t;
  }
}
test1200: {
  function f() {
    n || (I[e] = _.createFifo(), n = I[e]);
    return n.push(t);
  }
}
test1201: {
  function f() {
    e && console.warn("An emote could not be played ", e);
    i.resetNicknames();
    return t && t();
  }
}
test1202: {
  function f() {
    e.staticInfos && e.staticInfos.underlings && i.addActorFollowers(a, e.staticInfos.underlings);
    s();
    return t && t(i.actors[n]);
  }
}
test1203: {
  function f() {
    window.gui.playerData.isFighting && !a.isFollower && r && a.addTeamCircle();
    this.addedActor(a.actorId);
    this._attachOrUpdateNicknameLabel(a, o);
    return a;
  }
}
test1204: {
  function f() {
    i = new a({
      actorId: t,
      position: o,
      cellId: o,
      direction: s,
      data: e,
      scene: this.scene,
      layer: this.isTransparentModeOn ? c.MAP_LAYER_TRANSPARENT : c.MAP_LAYER_PLAYGROUND,
      alpha: this.isTransparentModeOn ? c.TRANSPARENT_MODE_ALPHA : 1,
      actorManager: this
    });
    this.actors[t] = i;
    i.startAnimBehaviour();
    i.setDisposition(o, s);
    return i;
  }
}
test1205: {
  function f() {
    e && t.push(this.userActor);
    return t;
  }
}
test1206: {
  function f() {
    e.push(this.userActor.actorId);
    return e;
  }
}
test1207: {
  function f() {
    t || 0 === t || (t = this.direction);
    return {
      id: e + "_" + s[t],
      base: e,
      direction: t
    };
  }
}
test1208: {
  function f() {
    t.backToStatic && n.staticAnim();
    n.animated = !1;
    n.emoteAnimated = Boolean(t.isEmoteAnimated);
    return i && i();
  }
}
test1209: {
  function f() {
    this.animSymbol = i;
    this.animated = !0;
    t.actorManager.userActor === this && this.animManager.cleanupAnimationsAndRemoveSubentities();
    this.isDead = !0;
    this.animManager.assignSymbol(i, !1, function () {
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
    });
    return e && e();
  }
}
test1210: {
  function f() {
    s.animated = !0;
    return s.animManager.addAnimation(o, function () {
      s.animManager.assignSymbol(o, !0);
      return t(s.animManager.template.hasAnimation(o.id) ? "playing: " + o.id : s.animManager.isMissingTemplates(o) ? "animation " + o.id + " inside " + a.MISSING_ANIM_PATH + ". Skipping..." : "animation not found: " + o.id);
    });
  }
}
test1211: {
  function f() {
    s.animManager.assignSymbol(o, !0);
    return t(s.animManager.template.hasAnimation(o.id) ? "playing: " + o.id : s.animManager.isMissingTemplates(o) ? "animation " + o.id + " inside " + a.MISSING_ANIM_PATH + ". Skipping..." : "animation not found: " + o.id);
  }
}
test1212: {
  function f() {
    e || console.error(new Error("Assigning falsy look to realLook"));
    this.realLook = e;
    this.isRiding = !!l.getLookOfRider(e);
    this.speedAdjust = void 0 !== e.speed ? e.speed : u.DEFAULT_ACTOR_SPEED;
    if (this.actorManager.isCreatureModeOn && !t.useRealLook) {
      return this.setCreatureLook(t, o);
    }
    if (this._isCandidateToHideTheMountInFight(e)) {
      return l.prototype.setLook.call(this, l.getLookWithoutMount(e), t, o);
    }
    l.prototype.setLook.call(this, e, t, o);
    return;
  }
}
test1213: {
  function f() {
    (o.position !== e || o.direction !== t || window.gui.fightManager.isInFight()) && (o.emoteAnimated = !1);
    !e && 0 !== e || e === -1 || (o.setOnScreenPosition(e), o.setCellPosition(e));
    (t || 0 === t) && (o.direction = t);
    o.animated || o.emoteAnimated || (o.staticAnim(), a && !e && (o.emoteAnimated = !0));
    return i && i();
  }
}
test1214: {
  function f() {
    i.moving = !1;
    i.step = 0;
    i.path = [];
    if (1 === e.length) {
      i.setDisposition(e[0]);
      return t();
    }
    i.setPath(e, {
      cb: t
    });
    i.setCellPosition(e[e.length - 1]);
    return;
  }
}
test1215: {
  function f() {
    t.animSymbol = i.a;
    t._x = i.x;
    t._y = i.y;
    t.animManager.assignSymbol(t.animSymbol, !0);
    return e && e();
  }
}
test1216: {
  function f() {
    console.warn("setPath: renderer was not ready");
    return i();
  }
}
test1217: {
  function f() {
    window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.NPC_INTERACTION, {
      npcId: t.npcId
    });
    if (0 === t.npcData.actions.length) {
      i.highlightActorOnAction(o);
      return;
    }
    if (1 === t.npcData.actions.length && window.gui.playerData.isAlive()) {
      i.highlightActorOnAction(o);
      return a(t.npcData, this.actorId, n, t.npcData.actions[0]);
    }
    window.gui.openContextualMenu("npc", {
      actorId: o,
      npcId: t.npcId,
      npcData: t.npcData,
      mapId: n
    }, e);
    return;
  }
}
test1218: {
  function f() {
    e.bindingPointCategory === r && (n.riderEntity = t);
    return i && i(t);
  }
}
test1219: {
  function f() {
    console.warn("Actor animManager is not ready.");
    window.setTimeout(function () {
      t.carryCharacter(e);
    }, 2e3);
    return;
  }
}
test1220: {
  function f() {
    i >= e.levelMin && i <= e.levelMax && (t += 2);
    e.repeatType !== A && (t += 1);
    return t;
  }
}
test1221: {
  function f() {
    o = e.questsToStartId.indexOf(n.id) !== -1 ? n.repeatType === A ? "questClip" : "questRepeatableClip" : n.repeatType === A ? "questObjectiveClip" : "questRepeatableObjectiveClip";
    return t(null, o);
  }
}
test1222: {
  function f() {
    i._questIconLoadingStartTime = null;
    if (n !== s) {
      a.remove();
      return t();
    }
    e.assignSymbol({
      base: o,
      direction: -1
    }, !0);
    i.removeQuestIcon();
    i._setIcon(a, o, b.QUEST);
    i._positionIcons();
    return t();
  }
}
test1223: {
  function f() {
    p[453] = t[12].creatureBonesId;
    return p;
  }
}
test1224: {
  function f() {
    console.error(new Error("getCreatureBones: look missing"));
    return 666;
  }
}
test1225: {
  function f() {
    console.error("getCreatureBones: unrecognized data type:", this.data.type);
    return 666;
  }
}
test1226: {
  function f() {
    f.animManager.addAnimationModifier("AnimArme", a);
    f.animManager.addAnimationModifier("AnimAttaque", a);
    f.animManager.addAnimationModifier("AnimTacle", "AnimHit");
    f.animManager.addAnimationModifier("AnimEmote", s);
    f.animManager.addAnimationModifier("AnimConsulter", "AnimAttaque0");
    f.animManager.addAnimationModifier("AnimCueillir0", "AnimAttaque0");
    f.animManager.addAnimationModifier("AnimCueillirSol0", "AnimAttaque0");
    f.animManager.addAnimationModifier("AnimDrop", "AnimAttaque0");
    f.animManager.addAnimationModifier("AnimFaucher", "AnimAttaque0");
    f.animManager.addAnimationModifier("AnimHache", "AnimAttaque0");
    f.animManager.addAnimationModifier("AnimPeche", "AnimAttaque0");
    f.animManager.addAnimationModifier("AnimPickup", "AnimAttaque0");
    f.animManager.addAnimationModifier("AnimPioche", "AnimAttaque0");
    f.animManager.addAnimationModifier("AnimPuiser", "AnimAttaque0");
    f.animManager.addAnimationModifier("AnimThrow", "AnimAttaque0");
    return f.staticAnim(i);
  }
}
test1227: {
  function f() {
    window.gui.transmitFightSequenceMessage(e);
    return t();
  }
}
test1228: {
  function f() {
    window.gui.transmitFightSequenceMessage(e);
    if (n) {
      n.death(t);
      return;
    }
    console.warn("Actor " + e.targetId + " not found.");
    return t();
  }
}
test1229: {
  function f() {
    e && e.setShield(0);
    if (f) {
      window.gui.transmitFightSequenceMessage(w);
      y = !1;
      w = null;
      window.actorManager.userActor.isDead = !1;
      d();
      return;
    }
    y = !0;
    return;
  }
}
test1230: {
  function f() {
    f = !0;
    if (b.length) {
      v && h(!1);
      return m(b.shift());
    }
    window.dofus.sendMessage("GameActionAcknowledgementMessage", {
      valid: !0,
      actionId: M
    });
    M = null;
    v && h(!0);
    if (y) {
      return p();
    }
    g && u();
    return;
  }
}
test1231: {
  function f() {
    console.error("sequenceAssetPreload error:", e);
    return t();
  }
}
test1232: {
  function f() {
    console.error(e);
    t();
    return;
  }
}
test1233: {
  function f() {
    t === j && (o = 0);
    return {
      base: "AnimArme",
      type: o
    };
  }
}
test1234: {
  function f() {
    t === j && (a = 1);
    101 === a && t === Y && (a = 1);
    return {
      base: "AnimAttaque",
      type: a
    };
  }
}
test1235: {
  function f() {
    i[e] || (i[e] = {});
    return i[e];
  }
}
test1236: {
  function f() {
    t["_" + n + "Orientation"] = o;
    t["_" + n] = h;
    e.loadAnimationManager(h, i + "/FX");
    return h;
  }
}
test1237: {
  function f() {
    e.loadAnimationManager(a, i + "/FX");
    return a;
  }
}
test1238: {
  function f() {
    this.nAssetsToLoad += 1;
    return window.actorManager.addActor(e, this.onAssetsLoaded);
  }
}
test1239: {
  function f() {
    f[e] || (f[e] = {
      id: e
    });
    return f[e];
  }
}
test1240: {
  function f() {
    t.remove();
    return e();
  }
}
test1241: {
  function f() {
    t = ["return function bezier" + e + "(arr, t) {", t.map(function (e) {
      return "  " + e;
    }).join("\n"), "}"].join("\n");
    return Function(t)();
  }
}
test1242: {
  function f() {
    n.playGfx(e._targetGfx, e._targetGfxOrientation, m.targetGfxShowUnder, h, i ? t : null);
    return !i && t();
  }
}
test1243: {
  function f() {
    n.playGfx(e._targetGfx2, e._targetGfx2Orientation, m.targetGfxShowUnder2, h);
    return t();
  }
}
test1244: {
  function f() {
    d ? d.setDisposition(null, p) : console.error(new Error("Cannot setDisposition of source undefined. Before: " + u + " After: " + c.getActorsIDList().join(", ")));
    return e();
  }
}
test1245: {
  function f() {
    console.error(new Error("Cannot oneShootAnim of source undefined. Before: " + u + " After: " + c.getActorsIDList().join(", ")));
    return e();
  }
}
test1246: {
  function f() {
    n.playGfx(e._casterGfx, e._casterGfxOrientation, m.casterGfxShowUnder, h);
    return t();
  }
}
test1247: {
  function f() {
    window.gui.transmitFightSequenceMessage(e);
    return t();
  }
}
test1248: {
  function f() {
    C[e] = n;
    return n - t;
  }
}
test1249: {
  function f() {
    C[e] = t;
    return 0;
  }
}
test1250: {
  function f() {
    a(e, i);
    window.gui.transmitFightSequenceMessage(e);
    return t();
  }
}
test1251: {
  function f() {
    window.gui.transmitFightSequenceMessage(e);
    return t();
  }
}
test1252: {
  function f() {
    r(e, t);
    return i(n);
  }
}
test1253: {
  function f() {
    window.gui.transmitFightSequenceMessage(e);
    n.setDisposition(e.cellId);
    i(e.targetId);
    return t();
  }
}
test1254: {
  function f() {
    window.gui.transmitFightSequenceMessage(e);
    n && n.setDisposition(e.casterCellId);
    o && o.setDisposition(e.targetCellId);
    i(e.sourceId);
    i(e.targetId);
    return t();
  }
}
test1255: {
  function f() {
    console.error(new Error("Cannot get mark shape, map is not ready yet"));
    return [];
  }
}
test1256: {
  function f() {
    i.deleteZoneById("mark:" + e.markId, function (e) {
      var t = e.gfx;
      e.gfx = null, t && t.animManager.assignSymbol(m, !1, function () {
        t.remove();
      });
    });
    return t();
  }
}
test1257: {
  function f() {
    n.setInvisibility(e.state, i.teamId);
    return t();
  }
}
test1258: {
  function f() {
    i.removeActor(e.targetId);
    return t();
  }
}
test1259: {
  function f() {
    n.invisibleDetectedAnimation();
    return e();
  }
}
test1260: {
  function f() {
    o.setDisposition(r);
    window.gui.transmitFightSequenceMessage(e);
    return t();
  }
}
test1261: {
  function f() {
    n(o);
    a.setDisposition(e.cellId);
    o.staticAnim();
    window.gui.transmitFightSequenceMessage(e);
    return t();
  }
}
test1262: {
  function f() {
    a.push(this.actorManager.userActor);
    a.sort(o);
    return a;
  }
}
test1263: {
  function f() {
    this._lastTapId = null;
    return !1;
  }
}
test1264: {
  function f() {
    _ || (m && p.actorId && "GameRolePlayGroupMonsterInformations" === p.data.type ? window.isoEngine.attackActor(p.actorId) : p.tap(e, t));
    return !0;
  }
}
test1265: {
  function f() {
    this.instantUseInteractive(v.elementId, v.enabledSkills[A].skillInstanceUid);
    return !0;
  }
}
test1266: {
  function f() {
    window.gui.openContextualMenu("interactive", v, {
      x: S.x,
      y: S.y
    });
    return !0;
  }
}
test1267: {
  function f() {
    null !== s && a && 1 === s.bonesId && s.skins && s.skins[0] ? (s.skins.push(a), b.loadLook(o, o.look, {}, function () {
      o.loadAndPlayAnimation({
        base: c
      }, {
        loop: n
      });
    })) : o.loadAndPlayAnimation({
      base: c
    }, {
      loop: n
    });
    if (n) {
      i ? (o.isLocked = !0, F = c, k = window.setTimeout(function () {
        t._userStopUsingInteractive(e.elemId);
      }, 100 * e.duration * 2)) : window.setTimeout(function () {
        r(o, c), o.staticAnim();
      }, 100 * e.duration);
      return;
    }
    i && t.actionQueue.dequeue(e.elemId);
    return;
  }
}
test1268: {
  function f() {
    c && c.addNode(t, r, n);
    return c;
  }
}
test1269: {
  function f() {
    T && this.mapRenderer.deletePingHighlight(T);
    T = o;
    return this.mapRenderer.addPingHighlight(o, this.getContext(o));
  }
}
test1270: {
  function f() {
    p.reachable.length > 0 && (_[g] = new m(g, 0, f.walkableLast));
    window.background.removeTargetHighlights();
    this._resetWalkLayer(_);
    p.costMP > 0 || p.costAP > 0 ? n("tackle", {
      ap: p.costAP,
      mp: p.costMP
    }) : n(!1);
    return p;
  }
}
test1271: {
  function f() {
    this.clearHighlights();
    this.actionQueue.clear();
    this.cancelUserActorMovement(function () {
      o._touchEnd(e, t, i, n);
    });
    return;
  }
}
test1272: {
  function f() {
    e === y.NEVER ? i = !0 : e === y.EMPTY_ONLY ? i = !this.isCellEmpty(t) : e === y.ALWAYS && (i = !1);
    return i;
  }
}
test1273: {
  function f() {
    o();
    this._resetWalkLayer();
    c.close();
    return;
  }
}
test1274: {
  function f() {
    o();
    this._resetWalkLayer();
    c.close();
    return;
  }
}
test1275: {
  function f() {
    e.availableMp > t.availableMp ? (i += 1, t.availableMp < 0 && (i += 4)) : e.availableMp < t.availableMp && (n += 1, e.availableMp < 0 && (n += 4));
    e.availableAp > t.availableAp ? i += 1 : e.availableAp < t.availableAp && (n += 1);
    e.damagingMarks.length < t.damagingMarks.length ? i += 2 : e.damagingMarks.length > t.damagingMarks.length && (n += 2);
    if (i === n) {
      return b.SAME;
    }
    if (i > n) {
      return b.BETTER;
    }
    if (i < n) {
      return b.WORSE;
    }
    0;
    return;
  }
}
test1276: {
  function f() {
    this.availableAp = e.availableAp;
    this.availableMp = e.availableMp;
    this.costMP = e.costMP;
    this.costAP = e.costAP;
    this.reachable = t;
    this.isTackled = i;
    return !0;
  }
}
test1277: {
  function f() {
    window.foreground.deselectSpell();
    o.shortcutBar.deselectCurrentSlot();
    return;
  }
}
test1278: {
  function f() {
    window.foreground.deselectSpell();
    window.gui.shortcutBar.deselectCurrentSlot();
    return;
  }
}
test1279: {
  function f() {
    n.deselectSpell();
    t.shortcutBar.deselectCurrentSlot();
    return;
  }
}
test1280: {
  function f() {
    n.options[t] = i;
    this._createIcon(e, t, "ui/spectator/fightOption" + t + ".png");
    return;
  }
}
test1281: {
  function f() {
    u = t;
    return e();
  }
}
test1282: {
  function f() {
    h = t;
    u && (h.obstacleMapId = i, h.cells = u.cells, h.midgroundLayer = o(h.midgroundLayer, u.midgroundLayer), h.atlasLayout = a(h.atlasLayout, u.atlasLayout));
    return e();
  }
}
