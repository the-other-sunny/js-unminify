test0: {
  function f() {
    return window.wizAssets && window.wizAssets.initialize ? void window.wizAssets.initialize(e, function () {
      console.error("failed to init wizAssets"), window.wizAssets = null, e();
    }) : e();
  }
}
test1: {
  function f() {
    return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (e.bodyUsed = !0);
  }
}
test2: {
  function f() {
    return this._bodyArrayBuffer ? s(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(l);
  }
}
test3: {
  function f() {
    return M.indexOf(t) > -1 ? t : e;
  }
}
test4: {
  function f() {
    return a >= 55296 && a <= 56319 && i > n + 1 && (o = t.charCodeAt(n + 1), o >= 56320 && o <= 57343) ? 1024 * (a - 55296) + o - 56320 + 65536 : a;
  }
}
test5: {
  function f() {
    return typeof e === h ? e.replace(/[^\d\.]/g, "").split(".")[0] : a;
  }
}
test6: {
  function f() {
    return i === l ? a : i;
  }
}
test7: {
  function f() {
    return i === l ? a : i;
  }
}
test8: {
  function f() {
    return i || (i = s.valid(s.coerce(e))) ? s.satisfies(i, t) : (console.error("Could not validate version", e), !1);
  }
}
test9: {
  function f() {
    return i ? i.version : null;
  }
}
test10: {
  function f() {
    return i ? i.version : null;
  }
}
test11: {
  function f() {
    return this instanceof A ? (K("comparator", e, t), this.loose = t, this.parse(e), this.semver === Ye ? this.value = "" : this.value = this.operator + this.semver.version, void K("comp", this)) : new A(e, t);
  }
}
test12: {
  function f() {
    return e.loose === t ? e : new S(e.raw, t);
  }
}
test13: {
  function f() {
    return i && i.prerelease.length ? i.prerelease : null;
  }
}
test14: {
  function f() {
    return null == t ? null : n((t[1] || "0") + "." + (t[2] || "0") + "." + (t[3] || "0"));
  }
}
test15: {
  function f() {
    return window.wizAssets ? window.resolveLocalFileSystemURL && window.WkWebView ? window.resolveLocalFileSystemURL(_.CDV_PATH + "/" + e, function (t) {
      var i = window.WkWebView.convertFilePath(t.toURL());
      return d(null, e, i);
    }, function (t) {
      return console.error(new Error("assetPreloading ui error" + t)), d("emptyPath", e);
    }) : d(null, e, _.CDV_PATH + "/" + e) : d(null, e, window.Config.uiUrl + "/" + e);
  }
}
test16: {
  function f() {
    return window.gui.isConnected ? y.setTimeout(v.downloadFile, c, t, e, n, a) : window.setTimeout(v.downloadFile, c, t, e, n, a);
  }
}
test17: {
  function f() {
    return 0 === s ? i && i(o) : void p(e, !1, function (t, i) {
      m(f, e[i], t, n, i);
    }, null);
  }
}
test18: {
  function f() {
    return i ? i(o) : console.error(o);
  }
}
test19: {
  function f() {
    return o ? o(s) : console.error(s);
  }
}
test20: {
  function f() {
    return null === e.getParent() ? e === window.gui.wBody : r(e.getParent());
  }
}
test21: {
  function f() {
    return e[t] < i[t] ? n : e[t] > i[t] ? o : 0;
  }
}
test22: {
  function f() {
    return e ? e = e.replace(/[<>"']/g, function (e) {
      return C[e];
    }) : e;
  }
}
test23: {
  function f() {
    return t ? i + " " + t : i;
  }
}
test24: {
  function f() {
    return isNaN(e) || null === e ? "" : (T = null !== T ? T : l("ui.common.numberSeparator"), e.toString().replace(b, T));
  }
}
test25: {
  function f() {
    return n ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : null;
  }
}
test26: {
  function f() {
    return 0 === t ? 0 : (e % t + t) % t;
  }
}
test27: {
  function f() {
    return n >= 1 ? n + " " + l("ui.time.months", n) : (t = Math.floor(t), t + " " + l("ui.time.days", t));
  }
}
test28: {
  function f() {
    return A ? (console.error(new Error("unable to open url " + e + ": in app browser is already opened")), null) : (A = window.cordova.InAppBrowser.open(e, "_blank", "closebuttoncaption=" + l("tablet.common.backToGame")), A.addEventListener("exit", S), A);
  }
}
test29: {
  function f() {
    return t[e] < i[e] ? -1 : t[e] > i[e] ? 1 : 0;
  }
}
test30: {
  function f() {
    return "string" != typeof o ? -1 : o.localeCompare(n[e], t);
  }
}
test31: {
  function f() {
    return u ? c + "[" + e + "]" : void 0 === t[1] ? e : n(e, t);
  }
}
test32: {
  function f() {
    return e ? n(e) : (r = t, l = i, void n());
  }
}
test33: {
  function f() {
    return u ? c + "[" + e + "]" : e;
  }
}
test34: {
  function f() {
    return i ? o(i, arguments) : (a.error("getText: no getText was found for", e, "in", c), t.getTextFailover.apply(null, arguments));
  }
}
test35: {
  function f() {
    return t ? o(t, arguments) : (a.error("getTextFailover: no failover getText was found for", e, "in", d), c + "[?" + e + "]");
  }
}
test36: {
  function f() {
    return h(e) ? c(e) : e;
  }
}
test37: {
  function f() {
    return i.length ? n.apply(this, i) : n;
  }
}
test38: {
  function f() {
    return null == e ? void 0 === e ? At : It : St && St in Object(e) ? f(e) : g(e);
  }
}
test39: {
  function f() {
    return w(e) ? x(e) : R(e);
  }
}
test40: {
  function f() {
    return ++t < i ? {
      value: e[t],
      key: t
    } : null;
  }
}
test41: {
  function f() {
    return i.done ? null : (t++, {
      value: i.value,
      key: t
    });
  }
}
test42: {
  function f() {
    return i < n ? {
      value: e[o],
      key: o
    } : null;
  }
}
test43: {
  function f() {
    return t ? B(t) : k(e);
  }
}
test44: {
  function f() {
    return t === t ? Z(e, t, i) : K(e, J, i);
  }
}
test45: {
  function f() {
    return ji ? ji.call(e) : "";
  }
}
test46: {
  function f() {
    return "0" == t && 1 / e == -qi ? "-0" : t;
  }
}
test47: {
  function f() {
    return le(e) ? ce(e) : re(e);
  }
}
test48: {
  function f() {
    return null == e ? "" : ie(e);
  }
}
test49: {
  function f() {
    return e ? i(e) : t ? void s(n) : i(null);
  }
}
test50: {
  function f() {
    return t.apply(this, s) ? n(o) : void i.apply(null, [null].concat(s));
  }
}
test51: {
  function f() {
    return e ? i(e) : void s(o);
  }
}
test52: {
  function f() {
    return e ? i(e) : t ? void a(n) : i(null);
  }
}
test53: {
  function f() {
    return h(e) ? e : dt(function (t, i) {
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
    return null == t ? void 0 : t[e];
  }
}
test55: {
  function f() {
    return e ? n(e) : void o(i);
  }
}
test56: {
  function f() {
    return e ? i(e) : (o[t] = n, void i());
  }
}
test57: {
  function f() {
    return i < n ? -1 : i > n ? 1 : 0;
  }
}
test58: {
  function f() {
    return i ? t(i) : void t(null, {
      value: e,
      criteria: n
    });
  }
}
test59: {
  function f() {
    return e ? i(e) : void i(null, ee(t.sort(n), De("value")));
  }
}
test60: {
  function f() {
    return e ? e : Ci && Ci.binding && Ci.binding("util");
  }
}
test61: {
  function f() {
    return 0 === a ? (n(i, t), void y.push(i)) : (w[i] = a, void V(o, function (r) {
      if (!e[r]) throw new Error("async.auto task `" + i + "` has a non-existent dependency `" + r + "` in " + o.join(", "));
      s(r, function () {
        a--, 0 === a && n(i, t);
      });
    }));
  }
}
test62: {
  function f() {
    return e ? t(e) : t(null, a(arguments, 1));
  }
}
test63: {
  function f() {
    return i ? t(i) : t(null, {
      key: n,
      val: e
    });
  }
}
test64: {
  function f() {
    return n || o === e.length ? t.apply(null, arguments) : void i(a(arguments, 1));
  }
}
test65: {
  function f() {
    return t > 9 ? t : "0" + t;
  }
}
test66: {
  function f() {
    return e <= 0 ? 1 : 1 + e / 100;
  }
}
test67: {
  function f() {
    return "number" != typeof e || "number" != typeof t ? (console.error("xpFormula: one of getGroupXPCoeff's params is not a number", {
      totalPlayerLevels: e,
      totalMobLevels: t
    }), i) : (e - s > t ? i = t / e : e + 2 * s < t && (i = (e + 2 * s) / t), i);
  }
}
test68: {
  function f() {
    return "number" != typeof e.xp || "number" != typeof e.level ? void console.error("xpFormula: mob xp or level is not a number for mob: " + e.id, {
      xp: e.xp,
      level: e.level
    }) : (m += e.level, e.level > p && (p = e.level), void (f += i(e.xp)));
  }
}
test69: {
  function f() {
    return isNaN(a) ? (e.error(new Error(t + " for " + n + " is not a number, caller: " + o)), -1) : a;
  }
}
test70: {
  function f() {
    return e.server ? e.server : "https://proxyconnection.touch.dofus.com";
  }
}
test71: {
  function f() {
    return e ? t(e) : (i.imgCrossOrigin = i.assetsUrl.match(/^https?:\/\/.+?:.+?@.+?/) ? void 0 : "anonymous", void t(null, i));
  }
}
test72: {
  function f() {
    return window.Primus ? e() : void p.loadScript(o() + "/build/primus.js", e);
  }
}
test73: {
  function f() {
    return window.Config ? e ? t.setLanguage(e, i) : i() : void s(e, function (e, t) {
      return e ? i(e) : (window.Config = t, void i());
    });
  }
}
test74: {
  function f() {
    return e ? i(e) : (window.Config = t, void i());
  }
}
test75: {
  function f() {
    return e ? n(e) : (i.initialize(window.Config, t.logger), N.initialize(i, y.getText), n());
  }
}
test76: {
  function f() {
    return e ? t(e) : (window.Config.language = i.language, void t());
  }
}
test77: {
  function f() {
    return e ? t.reloadAppOnFatalError(e) : (E.initHaapiModule(t.logger, t.connectionManager), C.init(window.Config.analytics, E), I.initialize(t.logger, window.Config.adjust, window.Adjust, window.AdjustConfig, window.AdjustEvent), w.backToLogin(), window.gui.initialize(window.Config), void (window.isoEngine && window.isoEngine.initialize()));
  }
}
test78: {
  function f() {
    return n ? i(n) : void t.accessGameServer(e, i);
  }
}
test79: {
  function f() {
    return e === P ? (console.warn("Already accessing this game server (" + e + ")"), t.once("accessGameEnd", i)) : i(new Error("Already accessing game server " + P + " (while trying to access " + e + ")"));
  }
}
test80: {
  function f() {
    return n ? i(n) : void t.accessGameServer(e, i);
  }
}
test81: {
  function f() {
    return i ? i.length : 0;
  }
}
test82: {
  function f() {
    return void 0 === n ? (i[e] = [t], this) : (n.push(t), this);
  }
}
test83: {
  function f() {
    return void 0 !== t ? t.slice() : [];
  }
}
test84: {
  function f() {
    return i ? (t = new i(), E[e] = t, t) : void w.error("Unknown writer type:", e);
  }
}
test85: {
  function f() {
    return w.group && y.groups ? (w.group(s, o), t.apply(w, a), void w.groupEnd()) : ("string" == typeof a[0] && (s = s + " " + a.shift()), e = [s, o].concat(a), void t.apply(w, e));
  }
}
test86: {
  function f() {
    return u.indexOf(h) !== -1 ? JSON.stringify("[Circular reference]") : (u.push(h), "[" + h.map(i).join(",") + "]");
  }
}
test87: {
  function f() {
    return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e);
  }
}
test88: {
  function f() {
    return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + i + ")" : "[eval]:" + t + ":" + i : n ? n + " (" + e + ":" + t + ":" + i + ")" : e + ":" + t + ":" + i;
  }
}
test89: {
  function f() {
    return Boolean(o) ? o : Boolean(i) && (n = n.map(function (e) {
      return i + e;
    }), o = a(e, n), Boolean(o)) ? o : null;
  }
}
test90: {
  function f() {
    return null !== t && "" !== t ? t.match(/(?:^\d|:)/) ? '[id="' + t + '"]' : "#" + t : null;
  }
}
test91: {
  function f() {
    return /^[a-z_-][a-z\d_-]*$/i.test(e) ? e : null;
  }
}
test92: {
  function f() {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }
}
test93: {
  function f() {
    return T.length > 0 ? T[0] : null;
  }
}
test94: {
  function f() {
    return t ? t.hasClassName("modal") : null;
  }
}
test95: {
  function f() {
    return !i && w && w.indexOf(e) !== -1 ? (window.dofus.sendMessage("LeaveDialogRequestMessage", null), s()) : void a(e, t);
  }
}
test96: {
  function f() {
    return w && w.indexOf(e) !== -1 ? (window.gui.isConnected && window.dofus.sendMessage("LeaveDialogRequestMessage", null), s()) : void a(e);
  }
}
test97: {
  function f() {
    return i ? "[" + o.colors[i][0] + "m" + e + "[" + o.colors[i][1] + "m" : e;
  }
}
test98: {
  function f() {
    return M(i) ? e.stylize(RegExp.prototype.toString.call(i), "regexp") : e.stylize("[Object]", "special");
  }
}
test99: {
  function f() {
    return v(t) ? e.stylize("" + t, "number") : f(t) ? e.stylize("" + t, "boolean") : g(t) ? e.stylize("null", "null") : void 0;
  }
}
test100: {
  function f() {
    return o > 60 ? i[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + i[1] : i[0] + t + " " + e.join(", ") + " " + i[1];
  }
}
test101: {
  function f() {
    return e < 10 ? "0" + e.toString(10) : e.toString(10);
  }
}
test102: {
  function f() {
    return void 0 === n ? t : n;
  }
}
test103: {
  function f() {
    return n ? (n !== t && console.info(e, "interaction REFUSED: owned by", a), n === t) : s && e !== s && r.isFeatureOn("scrollerBoundToWrapper") ? void console.info(e, "interaction REFUSED: priorityBehavior is", s) : (a = e, n = t, h.emit("handleTaken", n), !0);
  }
}
test104: {
  function f() {
    return e + 2 * N >= a.screenWidth ? (m(), y(), void r.abortInteraction()) : Date.now() - x > 5e3 ? f() : void 0;
  }
}
test105: {
  function f() {
    return e ? void (this._openedTimestampTabs[e] = this._scBalanceWhenOpenTabs[e] = this._hcBalanceWhenOpenTabs[e] = 0) : this._openedTimestamp = this._scBalanceWhenOpen = this._hcBalanceWhenOpen = 0;
  }
}
test106: {
  function f() {
    return t ? this.insertChildBefore(e, t) : this.appendChild(e);
  }
}
test107: {
  function f() {
    return t ? t.getPropertyValue(e) : null;
  }
}
test108: {
  function f() {
    return t === !0 || t === !1 ? this.rootElement.classList.toggle(e, t) : this.rootElement.classList.toggle(e);
  }
}
test109: {
  function f() {
    return i ? "[" + o.colors[i][0] + "m" + e + "[" + o.colors[i][1] + "m" : e;
  }
}
test110: {
  function f() {
    return M(i) ? e.stylize(RegExp.prototype.toString.call(i), "regexp") : e.stylize("[Object]", "special");
  }
}
test111: {
  function f() {
    return v(t) ? e.stylize("" + t, "number") : f(t) ? e.stylize("" + t, "boolean") : g(t) ? e.stylize("null", "null") : void 0;
  }
}
test112: {
  function f() {
    return o > 60 ? i[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + i[1] : i[0] + t + " " + e.join(", ") + " " + i[1];
  }
}
test113: {
  function f() {
    return e < 10 ? "0" + e.toString(10) : e.toString(10);
  }
}
test114: {
  function f() {
    return o() || 1 !== e.which ? void n() : void t.emit("dom.touchend", e);
  }
}
test115: {
  function f() {
    return "string" == typeof e ? document.createTextNode(e) : e;
  }
}
test116: {
  function f() {
    return 1 in arguments && this.contains(t) === i ? i : e.prototype.toggle.call(this, t, i);
  }
}
test117: {
  function f() {
    return t && "" !== t ? t.split(/\s+/) : [];
  }
}
test118: {
  function f() {
    return _ !== e || g.length ? void g.push(e) : (t.stopPropagation(), o());
  }
}
test119: {
  function f() {
    return window._hoverBehavior ? console.error("hover behavior initialised more than one time.") : (window._hoverBehavior = !0, y = e, void y.on("dom.touching", l));
  }
}
test120: {
  function f() {
    return n("audio/" + t + ".mp3") ? i("FROM_MISSING_AUDIO_LIST") : void C.push(function (n) {
      c.downloadFile(e + t + ".mp3", "audio/" + t + ".mp3", function (e) {
        return n(), i(null, e);
      }, function (e) {
        return n(), i(e);
      });
    });
  }
}
test121: {
  function f() {
    return n("audio/" + t + ".mp3") ? "FROM_MISSING_AUDIO_LIST" : e + t + ".mp3";
  }
}
test122: {
  function f() {
    return h.isIOSApp && p.isAvailable() ? p : h.isAndroidApp && m.isAvailable() ? "music" === e || "ambient" === e ? m.LoopYanap : "sfx" === e || "ui" === e ? m.SoundYanap : void 0 === e ? m.SoundYanap : void console.error(new Error("audioManager: unknown channelId `" + e + "`")) : null;
  }
}
test123: {
  function f() {
    return n ? i = new n() : (this.freeSoundPool.length > 0 ? (i = this.freeSoundPool.pop(), i.init()) : i = new s(), i);
  }
}
test124: {
  function f() {
    return i ? i : (i = this.getEmptySound(t, e), this.soundsById[e] = i, i.setId(e), i);
  }
}
test125: {
  function f() {
    return t ? t : (t = this.soundsById[e]) ? t : (t = this.soundArchiveById[e]) ? (this.soundArchive.removeByRef(t.poolRef), t.poolRef = null, delete this.soundArchiveById[e], this.soundsById[e] = t, t) : null;
  }
}
test126: {
  function f() {
    return t ? t : (t = this.soundGroupArchiveById[e]) ? (this.soundGroupArchive.removeByRef(t.poolRef), t.poolRef = null, delete this.soundGroupArchiveById[e], t.verifySounds(), this.soundGroupsById[e] = t, t) : null;
  }
}
test127: {
  function f() {
    return r ? void r.playLoopSound(t, i, n, o, a, s) : console.warn('Channel id "' + e + '" does not exist.');
  }
}
test128: {
  function f() {
    return 200 !== ~~o.status && 0 !== ~~o.status ? e("xhrError:" + o.status) : void (n.audioContext ? n.audioContext.decodeAudioData(o.response, t, e) : (n.rawAudioData = o.response, n._finalizeLoad(null)));
  }
}
test129: {
  function f() {
    return t ? e(t) : void i(n);
  }
}
test130: {
  function f() {
    return this.id ? this._loaded ? e && e(null, this) : (e && this._onLoadQueuedCallback.push(e), this._loading ? void 0 : (this._loading = !0, this._load())) : e && e(new Error("noId"));
  }
}
test131: {
  function f() {
    return e ? void (e.stopping || e.stop(function () {
      return c.freeSound(e), e = null, t && t();
    })) : t && t();
  }
}
test132: {
  function f() {
    return o ? (e.unload(), void (m.loopSound = null)) : void e.play(t * m.volume, i, n);
  }
}
test133: {
  function f() {
    return e ? (m.nextLoop.unload(), void (m.nextLoop = null)) : (s(m.loopSound), void l());
  }
}
test134: {
  function f() {
    return t ? e(t) : void n(i);
  }
}
test135: {
  function f() {
    return n.isAvailable() ? (a.call(this), this.media = null, this.uri = null, this.errorOccured = !1, void (r || (window.Media && window.Media.shouldReleaseOnMemoryWarning && window.Media.shouldReleaseOnMemoryWarning(!1), r = !0))) : console.error(new Error("SoundCordova: cordova media plugin is not available"));
  }
}
test136: {
  function f() {
    return e ? o._finalizeLoad(e) : void n(t);
  }
}
test137: {
  function f() {
    return this.media ? (this.media.stop(), a.prototype.stop.call(this, e)) : e && e();
  }
}
test138: {
  function f() {
    return n() ? (c.call(this), this.audioMode = null, this.media = null, this.uri = null, void (this.errorOccured = !1)) : console.error(new Error("YanapAudioInstance: Yanap plugin is not available"));
  }
}
test139: {
  function f() {
    return e ? n._finalizeLoad(e) : void i(t);
  }
}
test140: {
  function f() {
    return this.media ? (this.media.stop(), c.prototype.stop.call(this, e)) : e && e();
  }
}
test141: {
  function f() {
    return i._messageType ? void t.emit(i._messageType, i) : void console.error(new Error("emitMessage: missing message type for " + e._messageType));
  }
}
test142: {
  function f() {
    return d !== this ? console.warn("onOnline - Ignoring event: possible missing call to Primus#destroy") : void (f || (f = !0, h && (t.emit("online"), d.readyState !== o.CLOSED || d.recovery.reconnecting() || window.setTimeout(function () {
      d.readyState !== o.CLOSED || d.recovery.reconnecting() || d.open();
    }, 0))));
  }
}
test143: {
  function f() {
    return e ? this.additionnalPoints : 0;
  }
}
test144: {
  function f() {
    return this._isOffi ? this.getNickname() + n + o : this.toString();
  }
}
test145: {
  function f() {
    return void 0 === t ? (c.error(new Error("ankAnalytics.getEventId: " + e + " is missing from the event map")), -1) : t;
  }
}
test146: {
  function f() {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }
}
test147: {
  function f() {
    return a ? "getUTC" : "get";
  }
}
test148: {
  function f() {
    return a ? 0 : n.getTimezoneOffset();
  }
}
test149: {
  function f() {
    return w() < 12 ? r.i18n.timeNames[0] : r.i18n.timeNames[1];
  }
}
test150: {
  function f() {
    return w() < 12 ? r.i18n.timeNames[2] : r.i18n.timeNames[3];
  }
}
test151: {
  function f() {
    return w() < 12 ? r.i18n.timeNames[4] : r.i18n.timeNames[5];
  }
}
test152: {
  function f() {
    return w() < 12 ? r.i18n.timeNames[6] : r.i18n.timeNames[7];
  }
}
test153: {
  function f() {
    return p ? "GMT" : a ? "UTC" : (String(n).match(t) || [""]).pop().replace(i, "").replace(/GMT\+0000/g, "UTC");
  }
}
test154: {
  function f() {
    return e in S ? S[e]() : e.slice(1, e.length - 1);
  }
}
test155: {
  function f() {
    return p() === t && h() === i && u() === n ? r ? "Tdy" : "Today" : g() === t && f() === i && m() === n ? r ? "Ysd" : "Yesterday" : y() === t && v() === i && _() === n ? r ? "Tmw" : "Tomorrow" : a;
  }
}
test156: {
  function f() {
    return null === e ? "null" : void 0 === e ? "undefined" : "object" !== n(e) ? n(e) : Array.isArray(e) ? "array" : {}.toString.call(e).slice(8, -1).toLowerCase();
  }
}
test157: {
  function f() {
    return e.isSpectator ? void (t._isSpectator = !0) : (t._monsterMap = {}, t._isSpectator = !1, void (t._currentFightId = null));
  }
}
test158: {
  function f() {
    return this._teamHPMap[0][t] ? 0 : this._teamHPMap[1][t] ? 1 : -1;
  }
}
test159: {
  function f() {
    return "%" === e[i - 1] ? t * e.substr(0, i - 1) / 100 : ("px" === e.substr(i - 2) && (e = e.substr(0, i - 2)), e *= 1);
  }
}
test160: {
  function f() {
    return i ? t(i) : n ? t(null, n) : o("map", {
      "class": e
    }, function (i, n) {
      if (i) return t(i);
      var o,
        a = f.getKey(e);
      for (var s in n) {
        o = n[s] && void 0 !== n[s][a];
        break;
      }
      return o ? g.putAll(e, n, function (e) {
        e && console.warn("_getAllDataMap putAll: Caching data on disk failed with error: " + e);
      }) : console.warn("Request to cache table " + e + ' which has no "' + a + '" key; table will not be cached.'), t(null, n);
    });
  }
}
test161: {
  function f() {
    return n ? t(n) : (i[e] = o, t());
  }
}
test162: {
  function f() {
    return e ? t(e) : t(null, i);
  }
}
test163: {
  function f() {
    return n ? i(n) : i(null, s(o, e, t));
  }
}
test164: {
  function f() {
    return t ? i(t) : (n[e] = o, i());
  }
}
test165: {
  function f() {
    return e ? i(e) : i(null, n);
  }
}
test166: {
  function f() {
    return e === t ? i() : void o("dictionary", {
      lang: e
    }, function (e, t) {
      e ? a.push(e) : u = t, i();
    });
  }
}
test167: {
  function f() {
    return u || h ? (o && console.error("Failed getting dictionaries: " + o), u ? w = e : (u = h, w = t), h || (h = u), void n(function () {
      i(null, u, h);
    })) : window.dofus.reloadAppOnFatalError("No " + e + "/" + t + " dictionary: " + o);
  }
}
test168: {
  function f() {
    return e ? t(e) : void t(null, i);
  }
}
test169: {
  function f() {
    return Array.isArray(t) ? void g.request(e, t, function (t, n, a) {
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
        return g.put(e, n, function (e) {
          e && console.warn("getDataMap put: Caching data on disk failed with error:", e);
        }), i(null, s);
      });
    }) : i(new TypeError("Data ids should be passed as an array"));
  }
}
test170: {
  function f() {
    return e ? o(e) : void o(null, a(t, n));
  }
}
test171: {
  function f() {
    return t ? i(t) : (g.put(e, n, function (e) {
      e && console.warn("searchDataMap put: Caching search results on disk failed with error: " + e);
    }), i(null, n));
  }
}
test172: {
  function f() {
    return i || 0 === i ? void t.getDataMap(e, [i], function (t, o) {
      if (t) return n(t);
      var a = o[i];
      return a ? n(null, a) : n("Missing ID #" + i + " in static data " + e);
    }) : n(new Error("You must pass an ID"));
  }
}
test173: {
  function f() {
    return a ? n(null, a) : n("Missing ID #" + i + " in static data " + e);
  }
}
test174: {
  function f() {
    return Array.isArray(i) ? t.getDataArray(e, i, null, n) : i || 0 === i ? void t.getDataMap(e, [i], function (e, t) {
      return e ? n(e) : n(null, t[i]);
    }) : n(new Error("You must pass an ID"));
  }
}
test175: {
  function f() {
    return e ? n(e) : n(null, t[i]);
  }
}
test176: {
  function f() {
    return Array.isArray(e) ? d(e, !0, t) : c(e, !0, t);
  }
}
test177: {
  function f() {
    return Array.isArray(e) ? d(e, !1, t) : c(e, !1, t);
  }
}
test178: {
  function f() {
    return Array.isArray(e) ? l(e, t) : r(e, t);
  }
}
test179: {
  function f() {
    return "string" == typeof e ? e : e.toString();
  }
}
test180: {
  function f() {
    return isNaN(t) ? null : t;
  }
}
test181: {
  function f() {
    return m.hasStringId(e) ? n : o;
  }
}
test182: {
  function f() {
    return p ? p.objectStoreNames.contains(e) ? void d(e, t, i) : void i(new Error("IndexedDB put failed: object store: " + e + " not found in disk cache")) : void i(new Error("IndexedDB put failed: disk cache not yet initialized"));
  }
}
test183: {
  function f() {
    return p ? p.objectStoreNames.contains(e) ? void c(e, t, i) : void i(new Error("IndexedDB request failed: object store: " + e + " not found in disk cache")) : void i(new Error("IndexedDB request failed: disk cache not yet initialized"));
  }
}
test184: {
  function f() {
    return i && p.objectStoreNames.contains(i) ? void c(i, [e], function (i, n) {
      if (i) return t(i);
      var o = n[e];
      return o ? p.objectStoreNames.contains(e) ? void u(e, t) : void t(new Error("IndexedDB request all failed: object store: " + e + " not found in disk cache")) : t(null, null);
    }) : void t(new Error("IndexedDB isCacheComplete failed: cache completion not initialized"));
  }
}
test185: {
  function f() {
    return o ? p.objectStoreNames.contains(e) ? void u(e, t) : void t(new Error("IndexedDB request all failed: object store: " + e + " not found in disk cache")) : t(null, null);
  }
}
test186: {
  function f() {
    return e ? i(e) : i();
  }
}
test187: {
  function f() {
    return void 0 === e ? void 0 : JSON.parse(e.substring(2));
  }
}
test188: {
  function f() {
    return o.__prefetchedData && (o.__prefetchedIndex++, o.__prefetchedIndex < o.__prefetchedData.length) ? (o.__decode(o.__prefetchedData.item(o.__prefetchedIndex), l), t) : (o.__find(i, e, l, r, n), t);
  }
}
test189: {
  function f() {
    return r >= t.__requests.length ? (t.__active = !1, void (t.__requests = [])) : (s = t.__requests[r], void s.op(i, s.args, n, o));
  }
}
test190: {
  function f() {
    return e.Key.encode(t) > e.Key.encode(i) ? 1 : t === i ? 0 : -1;
  }
}
test191: {
  function f() {
    return e ? "true" : "false";
  }
}
test192: {
  function f() {
    return isFinite(e) ? e : "";
  }
}
test193: {
  function f() {
    return Array.isArray(e[o]) ? e[o].map(function (e) {
      return a + encodeURIComponent(i(e));
    }).join(t) : a + encodeURIComponent(i(e[o]));
  }
}
test194: {
  function f() {
    return e ? (g = !1, t.backToLogin(), i(e)) : i();
  }
}
test195: {
  function f() {
    return e ? (g = !1, t.backToLogin(), i(e)) : i();
  }
}
test196: {
  function f() {
    return a ? a : a = r.getItem("HAAPI_USERNAME") || "";
  }
}
test197: {
  function f() {
    return a.login && a.password ? (s.setValue("guestAccount", a, 1), t(null, a)) : t({
      error: new Error("createGuest: wrong credential (login:" + a.login + "/password:" + a.password + ")")
    });
  }
}
test198: {
  function f() {
    return e ? e.guestLogin ? e.guestPassword ? void t.createApiKey({
      login: e.guestLogin,
      password: e.guestPassword,
      long_life_token: !1
    }, {
      saveKey: !0
    }, function (n) {
      return n ? i(n) : _.account.validateGuestWithApiKey(window, u.postDirectly, e, function (e) {
        return t.resetHaapiKey(), e ? i(e) : i();
      });
    }) : i(new Error("Missing password")) : i(new Error("Missing login")) : i(new Error("Missing data"));
  }
}
test199: {
  function f() {
    return n ? i(n) : _.account.validateGuestWithApiKey(window, u.postDirectly, e, function (e) {
      return t.resetHaapiKey(), e ? i(e) : i();
    });
  }
}
test200: {
  function f() {
    return t ? a(t) : (n(e), i.username = e, a(null, i));
  }
}
test201: {
  function f() {
    return 1 === arguments.length ? (a = e, e = t.getHaapiUsername(), u.getHaapiKey() ? t.createToken(s) : a({
      reason: "NOKEY"
    })) : (e = e.trim(), void t.createApiKey({
      login: e,
      password: i,
      long_life_token: o
    }, {
      saveKey: o
    }, function (e) {
      return e ? a(e) : t.createToken(s);
    }));
  }
}
test202: {
  function f() {
    return e ? a(e) : t.createToken(s);
  }
}
test203: {
  function f() {
    return e.status === m ? t() : void e.json().then(function (i) {
      var a = o(e),
        r = s(e.status, a);
      if (r) return t(r);
      if (i._statusCode || e.status > 599 || n(e.status, a)) throw i._statusCode = i._statusCode || e.status, i;
      t(null, i);
    })["catch"](t);
  }
}
test204: {
  function f() {
    return !i || !n || n < e ? t.resetHaapiKey() : t.setHaapiKey(i, {
      save: !1
    });
  }
}
test205: {
  function f() {
    return l ? l : t.getHaapiKeyFromStorage();
  }
}
test206: {
  function f() {
    return e ? o(e, !1, !0).resolveObject(t) : t;
  }
}
test207: {
  function f() {
    return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : b;
  }
}
test208: {
  function f() {
    return N.test(e) ? m(e.slice(4).toLowerCase()) : e;
  }
}
test209: {
  function f() {
    return x.test(e) ? "xn--" + f(e) : e;
  }
}
test210: {
  function f() {
    return r.indexOf(e) === -1 ? l : e;
  }
}
test211: {
  function f() {
    return e.lang ? e.nickname ? e.email ? e.password ? e.firstname ? e.lastname ? null : new Error('Need "lastname" params') : new Error('Need "firstname" params') : new Error('Need "password" params') : new Error('Need "email" params') : new Error('Need "nickname" params') : new Error('Need "lang" params');
  }
}
test212: {
  function f() {
    return u ? a(u) : t(l, c, a);
  }
}
test213: {
  function f() {
    return e ? i(e) : (c._lastUpdate = p, c._cachedResult = t, a(o, s, t, function (e, t) {
      return e ? i(e) : i(null, t, u);
    }));
  }
}
test214: {
  function f() {
    return e ? i(e) : i(null, t, u);
  }
}
test215: {
  function f() {
    return e > 96 ? e - 87 : e > 64 ? e - 29 : e - 48;
  }
}
test216: {
  function f() {
    return e.offsetScore !== t.offsetScore ? e.offsetScore - t.offsetScore : e.abbrScore !== t.abbrScore ? e.abbrScore - t.abbrScore : e.zone.population !== t.zone.population ? t.zone.population - e.zone.population : t.zone.name.localeCompare(e.zone.name);
  }
}
test217: {
  function f() {
    return n instanceof r ? n : "string" == typeof n ? (n = new r(n), k[e] = n, n) : F[e] && t !== w && (i = w(F[e], w)) ? (n = k[e] = new r(), n._set(i), n.name = z[e], n) : null;
  }
}
test218: {
  function f() {
    return t ? i.map(function (e) {
      var t = w(e);
      return {
        name: e,
        offset: t.utcOffset(new Date())
      };
    }) : i;
  }
}
test219: {
  function f() {
    return this._z ? this._z.abbr(this) : e.call(this);
  }
}
test220: {
  function f() {
    return I(n) ? n.call(t, i) : n;
  }
}
test221: {
  function f() {
    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
  }
}
test222: {
  function f() {
    return e.isValid() ? (t = P(t, e.localeData()), fo[t] = fo[t] || R(t), fo[t](e)) : e.localeData().invalidDate();
  }
}
test223: {
  function f() {
    return t || !i ? t : (this._longDateFormat[e] = i.match(po).map(function (e) {
      return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e;
    }).join(""), this._longDateFormat[e]);
  }
}
test224: {
  function f() {
    return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e;
  }
}
test225: {
  function f() {
    return I(o) ? o(e, t, i, n) : o.replace(/%d/i, e);
  }
}
test226: {
  function f() {
    return I(i) ? i(t) : i.replace(/%s/i, t);
  }
}
test227: {
  function f() {
    return "string" == typeof e ? Mo[e] || Mo[e.toLowerCase()] : void 0;
  }
}
test228: {
  function f() {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
}
test229: {
  function f() {
    return null != n ? (J(this, e, n), t.updateOffset(this, i), this) : K(this, e);
  }
}
test230: {
  function f() {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
  }
}
test231: {
  function f() {
    return e && i ? i : t;
  }
}
test232: {
  function f() {
    return r(uo, e) ? uo[e](t._strict, t._locale) : new RegExp(ie(e));
  }
}
test233: {
  function f() {
    return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ea).test(t) ? "format" : "standalone"][e.month()] : a(this._months) ? this._months : this._months.standalone;
  }
}
test234: {
  function f() {
    return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ea.test(t) ? "format" : "standalone"][e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }
}
test235: {
  function f() {
    return i ? "MMM" === t ? (o = Wo.call(this._shortMonthsParse, s), o !== -1 ? o : null) : (o = Wo.call(this._longMonthsParse, s), o !== -1 ? o : null) : "MMM" === t ? (o = Wo.call(this._shortMonthsParse, s), o !== -1 ? o : (o = Wo.call(this._longMonthsParse, s), o !== -1 ? o : null)) : (o = Wo.call(this._longMonthsParse, s), o !== -1 ? o : (o = Wo.call(this._shortMonthsParse, s), o !== -1 ? o : null));
  }
}
test236: {
  function f() {
    return null != e ? (pe(this, e), t.updateOffset(this, !0), this) : K(this, "Month");
  }
}
test237: {
  function f() {
    return this._monthsParseExact ? (r(this, "_monthsRegex") || ve.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (r(this, "_monthsShortRegex") || (this._monthsShortRegex = ta), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }
}
test238: {
  function f() {
    return this._monthsParseExact ? (r(this, "_monthsRegex") || ve.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (r(this, "_monthsRegex") || (this._monthsRegex = ia), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
  }
}
test239: {
  function f() {
    return j(e) ? 366 : 365;
  }
}
test240: {
  function f() {
    return null == e ? t : this.add(7 * (e - t), "d");
  }
}
test241: {
  function f() {
    return null == e ? t : this.add(7 * (e - t), "d");
  }
}
test242: {
  function f() {
    return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10);
  }
}
test243: {
  function f() {
    return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
  }
}
test244: {
  function f() {
    return e === !0 ? De(i, this._week.dow) : e ? i[e.day()] : i;
  }
}
test245: {
  function f() {
    return e === !0 ? De(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
  }
}
test246: {
  function f() {
    return e === !0 ? De(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
  }
}
test247: {
  function f() {
    return i ? "dddd" === t ? (o = Wo.call(this._weekdaysParse, s), o !== -1 ? o : null) : "ddd" === t ? (o = Wo.call(this._shortWeekdaysParse, s), o !== -1 ? o : null) : (o = Wo.call(this._minWeekdaysParse, s), o !== -1 ? o : null) : "dddd" === t ? (o = Wo.call(this._weekdaysParse, s), o !== -1 ? o : (o = Wo.call(this._shortWeekdaysParse, s), o !== -1 ? o : (o = Wo.call(this._minWeekdaysParse, s), o !== -1 ? o : null))) : "ddd" === t ? (o = Wo.call(this._shortWeekdaysParse, s), o !== -1 ? o : (o = Wo.call(this._weekdaysParse, s), o !== -1 ? o : (o = Wo.call(this._minWeekdaysParse, s), o !== -1 ? o : null))) : (o = Wo.call(this._minWeekdaysParse, s), o !== -1 ? o : (o = Wo.call(this._weekdaysParse, s), o !== -1 ? o : (o = Wo.call(this._shortWeekdaysParse, s), o !== -1 ? o : null)));
  }
}
test248: {
  function f() {
    return null != e ? this : NaN;
  }
}
test249: {
  function f() {
    return null != e ? (e = Oe(e, this.localeData()), this.add(e - t, "d")) : t;
  }
}
test250: {
  function f() {
    return null != e ? this : NaN;
  }
}
test251: {
  function f() {
    return null == e ? t : this.add(e - t, "d");
  }
}
test252: {
  function f() {
    return null != e ? this : NaN;
  }
}
test253: {
  function f() {
    return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || je.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (r(this, "_weekdaysRegex") || (this._weekdaysRegex = la), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }
}
test254: {
  function f() {
    return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || je.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (r(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ca), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }
}
test255: {
  function f() {
    return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || je.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (r(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = da), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }
}
test256: {
  function f() {
    return e > 11 ? i ? "pm" : "PM" : i ? "am" : "AM";
  }
}
test257: {
  function f() {
    return e ? e.toLowerCase().replace("_", "-") : e;
  }
}
test258: {
  function f() {
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
  }
}
test259: {
  function f() {
    return null !== i ? void (e._d = new Date(+i[1])) : (dt(e), void (e._isValid === !1 && (delete e._isValid, gt(e), e._isValid === !1 && (delete e._isValid, e._strict ? e._isValid = !1 : t.createFromInputFallback(e)))));
  }
}
test260: {
  function f() {
    return null != e ? e : null != t ? t : i;
  }
}
test261: {
  function f() {
    return e._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()];
  }
}
test262: {
  function f() {
    return null == i ? t : null != e.meridiemHour ? e.meridiemHour(t, i) : null != e.isPM ? (n = e.isPM(i), n && t < 12 && (t += 12), n || 12 !== t || (t = 0), t) : t;
  }
}
test263: {
  function f() {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
  }
}
test264: {
  function f() {
    return null === a ? null : (i = a[a.length - 1] || [], n = (i + "").match(Na) || ["-", 0, 0], o = +(60 * n[1]) + X(n[2]), 0 === o ? 0 : "+" === n[0] ? o : -o);
  }
}
test265: {
  function f() {
    return i._isUTC ? (n = i.clone(), o = (b(e) || u(e) ? e.valueOf() : xt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + o), t.updateOffset(n, !1), n) : xt(e).local();
  }
}
test266: {
  function f() {
    return null != e ? this : NaN;
  }
}
test267: {
  function f() {
    return this._isUTC ? a : qt(this);
  }
}
test268: {
  function f() {
    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
  }
}
test269: {
  function f() {
    return e.isValid() && t.isValid() ? (t = Ut(t, e), e.isBefore(t) ? i = oi(e, t) : (i = oi(t, e), i.milliseconds = -i.milliseconds, i.months = -i.months), i) : {
      milliseconds: 0,
      months: 0
    };
  }
}
test270: {
  function f() {
    return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse";
  }
}
test271: {
  function f() {
    return i ? a : V(a);
  }
}
test272: {
  function f() {
    return i.year() < 0 || i.year() > 9999 ? D(i, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : I(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", D(i, "Z")) : D(i, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }
}
test273: {
  function f() {
    return this.isValid() && (b(e) && e.isValid() || xt(e).isValid()) ? ii({
      to: this,
      from: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }
}
test274: {
  function f() {
    return this.isValid() && (b(e) && e.isValid() || xt(e).isValid()) ? ii({
      from: this,
      to: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }
}
test275: {
  function f() {
    return void 0 === e ? this._locale._abbr : (t = rt(e), null != t && (this._locale = t), this);
  }
}
test276: {
  function f() {
    return e < 100 && e >= 0 ? new Date(e + 400, t, i) - Fa : new Date(e, t, i).valueOf();
  }
}
test277: {
  function f() {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, i) - Fa : Date.UTC(e, t, i);
  }
}
test278: {
  function f() {
    return this.isValid() ? this.toISOString() : null;
  }
}
test279: {
  function f() {
    return void 0 === i ? t(e.since).year() : t(e.since).year() + (i - e.offset) * n;
  }
}
test280: {
  function f() {
    return null == e ? Ie(this, n, o).year : (a = Ae(e, n, o), t > a && (t = a), yn.call(this, e, t, i, n, o));
  }
}
test281: {
  function f() {
    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
  }
}
test282: {
  function f() {
    return null == e ? t : this.add(e - t, "d");
  }
}
test283: {
  function f() {
    return this._isUTC ? "UTC" : "";
  }
}
test284: {
  function f() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
}
test285: {
  function f() {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
}
test286: {
  function f() {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * X(this._months / 12) : NaN;
  }
}
test287: {
  function f() {
    return this.isValid() ? this._data[e] : NaN;
  }
}
test288: {
  function f() {
    return void 0 === e ? cs : "function" == typeof e && (cs = e, !0);
  }
}
test289: {
  function f() {
    return u ? (e = V(l / 60), t = V(e / 60), l %= 60, e %= 60, i = V(d / 12), d %= 12, n = l ? l.toFixed(3).replace(/\.?0+$/, "") : "", o = u < 0 ? "-" : "", a = io(this._months) !== io(u) ? "-" : "", s = io(this._days) !== io(u) ? "-" : "", r = io(this._milliseconds) !== io(u) ? "-" : "", o + "P" + (i ? a + i + "Y" : "") + (d ? a + d + "M" : "") + (c ? s + c + "D" : "") + (t || e || l ? "T" : "") + (t ? r + t + "H" : "") + (e ? r + e + "M" : "") + (l ? r + n + "S" : "")) : "P0D";
  }
}
test290: {
  function f() {
    return e <= 9999 ? x(e, 4) : "+" + e;
  }
}
test291: {
  function f() {
    return this.isValid() && e.isValid() ? e < this ? this : e : v();
  }
}
test292: {
  function f() {
    return this.isValid() && e.isValid() ? e > this ? this : e : v();
  }
}
test293: {
  function f() {
    return Date.now ? Date.now() : +new Date();
  }
}
test294: {
  function f() {
    return void 0 === e ? this.localeData() : this.locale(e);
  }
}
test295: {
  function f() {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
  }
}
test296: {
  function f() {
    return e < 12 ? i ? "vm" : "VM" : i ? "nm" : "NM";
  }
}
test297: {
  function f() {
    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
  }
}
test298: {
  function f() {
    return e < 12 ? "ÏÁ" : "┘à";
  }
}
test299: {
  function f() {
    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
  }
}
test300: {
  function f() {
    return e < 12 ? "ÏÁ" : "┘à";
  }
}
test301: {
  function f() {
    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
  }
}
test302: {
  function f() {
    return e < 12 ? "ÏÁ" : "┘à";
  }
}
test303: {
  function f() {
    return e < 12 ? "ÏÁ" : "┘à";
  }
}
test304: {
  function f() {
    return e < 4 ? "gec╔Ö" : e < 12 ? "s╔Öh╔Ör" : e < 17 ? "g├╝nd├╝z" : "ax┼ƒam";
  }
}
test305: {
  function f() {
    return t % 10 === 1 && t % 100 !== 11 ? i[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? i[1] : i[2];
  }
}
test306: {
  function f() {
    return "m" === n ? i ? "Ðàð▓Ðûð╗Ðûð¢ð░" : "Ðàð▓Ðûð╗Ðûð¢Ðâ" : "h" === n ? i ? "ð│ð░ð┤ðÀÐûð¢ð░" : "ð│ð░ð┤ðÀÐûð¢Ðâ" : e + " " + t(o[n], +e);
  }
}
test307: {
  function f() {
    return e < 4 ? "ð¢ð¥ÐçÐï" : e < 12 ? "ÐÇð░ð¢ÐûÐåÐï" : e < 17 ? "ð┤ð¢ÐÅ" : "ð▓ðÁÐçð░ÐÇð░";
  }
}
test308: {
  function f() {
    return e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13 ? e + "-Ðï" : e + "-Ðû";
  }
}
test309: {
  function f() {
    return 0 === e ? e + "-ðÁð▓" : 0 === i ? e + "-ðÁð¢" : i > 10 && i < 20 ? e + "-Ðéð©" : 1 === t ? e + "-ð▓ð©" : 2 === t ? e + "-ÐÇð©" : 7 === t || 8 === t ? e + "-ð╝ð©" : e + "-Ðéð©";
  }
}
test310: {
  function f() {
    return e < 4 ? "Óª░Óª¥Óªñ" : e < 10 ? "Óª©ÓªòÓª¥Óª▓" : e < 17 ? "ÓªªÓºüÓª¬ÓºüÓª░" : e < 20 ? "Óª¼Óª┐ÓªòÓª¥Óª▓" : "Óª░Óª¥Óªñ";
  }
}
test311: {
  function f() {
    return e < 4 ? "Óª░Óª¥Óªñ" : e < 6 ? "Óª¡ÓºïÓª░" : e < 12 ? "Óª©ÓªòÓª¥Óª▓" : e < 15 ? "ÓªªÓºüÓª¬ÓºüÓª░" : e < 18 ? "Óª¼Óª┐ÓªòÓª¥Óª▓" : e < 20 ? "Óª©Óª¿ÓºìÓªºÓºìÓª»Óª¥" : "Óª░Óª¥Óªñ";
  }
}
test312: {
  function f() {
    return e < 4 ? "Ó¢ÿÓ¢ÜÓ¢ôÓ╝ïÓ¢ÿÓ¢╝" : e < 10 ? "Ó¢×Ó¢╝Ó¢éÓ¢ªÓ╝ïÓ¢ÇÓ¢ª" : e < 17 ? "Ó¢ëÓ¢▓Ó¢ôÓ╝ïÓ¢éÓ¢┤Ó¢ä" : e < 20 ? "Ó¢æÓ¢éÓ¢╝Ó¢äÓ╝ïÓ¢æÓ¢é" : "Ó¢ÿÓ¢ÜÓ¢ôÓ╝ïÓ¢ÿÓ¢╝";
  }
}
test313: {
  function f() {
    return e > 9 ? n(e % 10) : e;
  }
}
test314: {
  function f() {
    return 2 === t ? a(e) : e;
  }
}
test315: {
  function f() {
    return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1);
  }
}
test316: {
  function f() {
    return e < 12 ? "a.m." : "g.m.";
  }
}
test317: {
  function f() {
    return t ? "jedna minuta" : "jedne minute";
  }
}
test318: {
  function f() {
    return t ? "jedan sat" : "jednog sata";
  }
}
test319: {
  function f() {
    return i || o ? "p├ír sekund" : "p├ír sekundami";
  }
}
test320: {
  function f() {
    return i || o ? a + (t(e) ? "sekundy" : "sekund") : a + "sekundami";
  }
}
test321: {
  function f() {
    return i ? "minuta" : o ? "minutu" : "minutou";
  }
}
test322: {
  function f() {
    return i || o ? a + (t(e) ? "minuty" : "minut") : a + "minutami";
  }
}
test323: {
  function f() {
    return i ? "hodina" : o ? "hodinu" : "hodinou";
  }
}
test324: {
  function f() {
    return i || o ? a + (t(e) ? "hodiny" : "hodin") : a + "hodinami";
  }
}
test325: {
  function f() {
    return i || o ? "den" : "dnem";
  }
}
test326: {
  function f() {
    return i || o ? a + (t(e) ? "dny" : "dn├¡") : a + "dny";
  }
}
test327: {
  function f() {
    return i || o ? "m─øs├¡c" : "m─øs├¡cem";
  }
}
test328: {
  function f() {
    return i || o ? a + (t(e) ? "m─øs├¡ce" : "m─øs├¡c┼»") : a + "m─øs├¡ci";
  }
}
test329: {
  function f() {
    return i || o ? "rok" : "rokem";
  }
}
test330: {
  function f() {
    return i || o ? a + (t(e) ? "roky" : "let") : a + "lety";
  }
}
test331: {
  function f() {
    return t ? o[i][0] : o[i][1];
  }
}
test332: {
  function f() {
    return t ? o[i][0] : o[i][1];
  }
}
test333: {
  function f() {
    return t ? o[i][0] : o[i][1];
  }
}
test334: {
  function f() {
    return e < 12 ? "ÌëÌå" : "ÌëÌè";
  }
}
test335: {
  function f() {
    return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl;
  }
}
test336: {
  function f() {
    return e > 11 ? i ? "╬╝╬╝" : "╬£╬£" : i ? "¤Ç╬╝" : "╬á╬£";
  }
}
test337: {
  function f() {
    return e > 11 ? i ? "p.t.m." : "P.T.M." : i ? "a.t.m." : "A.T.M.";
  }
}
test338: {
  function f() {
    return e ? /-MMM-/.test(n) ? i[e.month()] : t[e.month()] : t;
  }
}
test339: {
  function f() {
    return e ? /-MMM-/.test(n) ? i[e.month()] : t[e.month()] : t;
  }
}
test340: {
  function f() {
    return e ? /-MMM-/.test(n) ? i[e.month()] : t[e.month()] : t;
  }
}
test341: {
  function f() {
    return e ? /-MMM-/.test(n) ? i[e.month()] : t[e.month()] : t;
  }
}
test342: {
  function f() {
    return t ? o[i][2] ? o[i][2] : o[i][1] : n ? o[i][0] : o[i][1];
  }
}
test343: {
  function f() {
    return e < 12 ? "┘éÏ¿┘ä ÏºÏ▓ Ï©┘çÏ▒" : "Ï¿Ï╣Ï» ÏºÏ▓ Ï©┘çÏ▒";
  }
}
test344: {
  function f() {
    return o ? "muutaman sekunnin" : "muutama sekunti";
  }
}
test345: {
  function f() {
    return o ? "minuutin" : "minuutti";
  }
}
test346: {
  function f() {
    return o ? "tunnin" : "tunti";
  }
}
test347: {
  function f() {
    return o ? "p├ñiv├ñn" : "p├ñiv├ñ";
  }
}
test348: {
  function f() {
    return o ? "kuukauden" : "kuukausi";
  }
}
test349: {
  function f() {
    return o ? "vuoden" : "vuosi";
  }
}
test350: {
  function f() {
    return e < 10 ? t ? o[e] : n[e] : e;
  }
}
test351: {
  function f() {
    return e ? /-MMM-/.test(n) ? i[e.month()] : t[e.month()] : t;
  }
}
test352: {
  function f() {
    return 0 === e.indexOf("un") ? "n" + e : "en " + e;
  }
}
test353: {
  function f() {
    return n ? o[i][0] : o[i][1];
  }
}
test354: {
  function f() {
    return e < 4 ? "Óñ░Óñ¥ÓññÓÑÇ" : e < 12 ? "Óñ©ÓñòÓñ¥Óñ│ÓÑÇÓñé" : e < 16 ? "ÓñªÓñ¿Óñ¬Óñ¥Óñ░Óñ¥Óñé" : e < 20 ? "Óñ©Óñ¥ÓñéÓñ£ÓÑç" : "Óñ░Óñ¥ÓññÓÑÇ";
  }
}
test355: {
  function f() {
    return n ? o[i][0] : o[i][1];
  }
}
test356: {
  function f() {
    return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati";
  }
}
test357: {
  function f() {
    return e < 4 ? "Ó¬░Ó¬¥Ó¬ñ" : e < 10 ? "Ó¬©Ó¬ÁÓ¬¥Ó¬░" : e < 17 ? "Ó¬¼Ó¬¬Ó½ïÓ¬░" : e < 20 ? "Ó¬©Ó¬¥Ó¬éÓ¬£" : "Ó¬░Ó¬¥Ó¬ñ";
  }
}
test358: {
  function f() {
    return 2 === e ? "Î®ÎóÎ¬ÎÖÎÖÎØ" : e + " Î®ÎóÎòÎ¬";
  }
}
test359: {
  function f() {
    return 2 === e ? "ÎÖÎòÎ×ÎÖÎÖÎØ" : e + " ÎÖÎ×ÎÖÎØ";
  }
}
test360: {
  function f() {
    return 2 === e ? "ÎùÎòÎôÎ®ÎÖÎÖÎØ" : e + " ÎùÎòÎôÎ®ÎÖÎØ";
  }
}
test361: {
  function f() {
    return 2 === e ? "Î®ÎáÎ¬ÎÖÎÖÎØ" : e % 10 === 0 && 10 !== e ? e + " Î®ÎáÎö" : e + " Î®ÎáÎÖÎØ";
  }
}
test362: {
  function f() {
    return e < 5 ? "Î£ÎñÎáÎòÎ¬ ÎæÎòÎºÎ¿" : e < 10 ? "ÎæÎæÎòÎºÎ¿" : e < 12 ? i ? 'Î£ÎñÎáÎö"Îª' : "Î£ÎñÎáÎÖ ÎöÎªÎöÎ¿ÎÖÎÖÎØ" : e < 18 ? i ? 'ÎÉÎùÎö"Îª' : "ÎÉÎùÎ¿ÎÖ ÎöÎªÎöÎ¿ÎÖÎÖÎØ" : "ÎæÎóÎ¿Îæ";
  }
}
test363: {
  function f() {
    return e < 4 ? "Óñ░Óñ¥Óññ" : e < 10 ? "Óñ©ÓÑüÓñ¼Óñ╣" : e < 17 ? "ÓñªÓÑïÓñ¬Óñ╣Óñ░" : e < 20 ? "ÓñÂÓñ¥Óñ«" : "Óñ░Óñ¥Óññ";
  }
}
test364: {
  function f() {
    return t ? "jedna minuta" : "jedne minute";
  }
}
test365: {
  function f() {
    return t ? "jedan sat" : "jednog sata";
  }
}
test366: {
  function f() {
    return n || t ? "n├®h├íny m├ísodperc" : "n├®h├íny m├ísodperce";
  }
}
test367: {
  function f() {
    return o + (n || t) ? " m├ísodperc" : " m├ísodperce";
  }
}
test368: {
  function f() {
    return e < 12 ? i === !0 ? "de" : "DE" : i === !0 ? "du" : "DU";
  }
}
test369: {
  function f() {
    return e < 4 ? "ıúı½ıÀıÑÍÇı¥ıí" : e < 12 ? "ıíı╝ıíı¥ı©ı┐ı¥ıí" : e < 17 ? "ÍüıÑÍÇıÑı»ı¥ıí" : "ıÑÍÇıÑı»ı©ıÁıíıÂ";
  }
}
test370: {
  function f() {
    return 1 === e ? e + "-ı½ıÂ" : e + "-ÍÇıñ";
  }
}
test371: {
  function f() {
    return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam";
  }
}
test372: {
  function f() {
    return i || o ? "nokkrar sek├║ndur" : "nokkrum sek├║ndum";
  }
}
test373: {
  function f() {
    return t(e) ? a + (i || o ? "sek├║ndur" : "sek├║ndum") : a + "sek├║nda";
  }
}
test374: {
  function f() {
    return i ? "m├¡n├║ta" : "m├¡n├║tu";
  }
}
test375: {
  function f() {
    return t(e) ? a + (i || o ? "m├¡n├║tur" : "m├¡n├║tum") : i ? a + "m├¡n├║ta" : a + "m├¡n├║tu";
  }
}
test376: {
  function f() {
    return t(e) ? a + (i || o ? "klukkustundir" : "klukkustundum") : a + "klukkustund";
  }
}
test377: {
  function f() {
    return i ? "dagur" : o ? "dag" : "degi";
  }
}
test378: {
  function f() {
    return t(e) ? i ? a + "dagar" : a + (o ? "daga" : "d├Âgum") : i ? a + "dagur" : a + (o ? "dag" : "degi");
  }
}
test379: {
  function f() {
    return i ? "m├ínu├░ur" : o ? "m├ínu├░" : "m├ínu├░i";
  }
}
test380: {
  function f() {
    return t(e) ? i ? a + "m├ínu├░ir" : a + (o ? "m├ínu├░i" : "m├ínu├░um") : i ? a + "m├ínu├░ur" : a + (o ? "m├ínu├░" : "m├ínu├░i");
  }
}
test381: {
  function f() {
    return i || o ? "├ír" : "├íri";
  }
}
test382: {
  function f() {
    return t(e) ? a + (i || o ? "├ír" : "├írum") : a + (i || o ? "├ír" : "├íri");
  }
}
test383: {
  function f() {
    return "Õàâ" === t[1] ? 1 : parseInt(t[1] || e, 10);
  }
}
test384: {
  function f() {
    return e < 12 ? "ÕìêÕëì" : "ÕìêÕ¥î";
  }
}
test385: {
  function f() {
    return e.week() !== this.week() ? "[µØÑÚÇ▒]dddd LT" : "dddd LT";
  }
}
test386: {
  function f() {
    return this.week() !== e.week() ? "[ÕàêÚÇ▒]dddd LT" : "dddd LT";
  }
}
test387: {
  function f() {
    return 1 === e ? "ÕàâÕ╣┤" : e + "Õ╣┤";
  }
}
test388: {
  function f() {
    return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu";
  }
}
test389: {
  function f() {
    return "ßâÿ" === i ? t + "ßâ¿ßâÿ" : t + i + "ßâ¿ßâÿ";
  }
}
test390: {
  function f() {
    return /(ßâ¼ßâÉßâøßâÿ|ßâ¼ßâúßâùßâÿ|ßâíßâÉßâÉßâùßâÿ|ßâôßâªßâö|ßâùßâòßâö)/.test(e) ? e.replace(/(ßâÿ|ßâö)$/, "ßâÿßâí ßâ¼ßâÿßâ£") : /ßâ¼ßâößâÜßâÿ/.test(e) ? e.replace(/ßâ¼ßâößâÜßâÿ$/, "ßâ¼ßâÜßâÿßâí ßâ¼ßâÿßâ£") : e;
  }
}
test391: {
  function f() {
    return 0 === e ? e : 1 === e ? e + "-ßâÜßâÿ" : e < 20 || e <= 100 && e % 20 === 0 || e % 100 === 0 ? "ßâøßâö-" + e : e + "-ßâö";
  }
}
test392: {
  function f() {
    return e < 12 ? "ß×ûßƒÆß×Üß×╣ß×Ç" : "ß×øßƒÆß×äß×Âß×à";
  }
}
test393: {
  function f() {
    return e < 4 ? "Ó▓░Ó▓¥Ó▓ñÓ│ìÓ▓░Ó▓┐" : e < 10 ? "Ó▓¼Ó│åÓ▓│Ó▓┐Ó▓ùÓ│ìÓ▓ùÓ│å" : e < 17 ? "Ó▓«Ó▓ºÓ│ìÓ▓»Ó▓¥Ó▓╣Ó│ìÓ▓¿" : e < 20 ? "Ó▓©Ó▓éÓ▓£Ó│å" : "Ó▓░Ó▓¥Ó▓ñÓ│ìÓ▓░Ó▓┐";
  }
}
test394: {
  function f() {
    return e < 12 ? "ýÿñýáä" : "ýÿñÝøä";
  }
}
test395: {
  function f() {
    return e < 12 ? "Ï¿┘çÔÇî█îÏº┘å█î" : "Ïª█Ä┘êÏºÏ▒┘çÔÇî";
  }
}
test396: {
  function f() {
    return t ? o[i][0] : o[i][1];
  }
}
test397: {
  function f() {
    return o(t) ? "a " + e : "an " + e;
  }
}
test398: {
  function f() {
    return o(t) ? "viru " + e : "virun " + e;
  }
}
test399: {
  function f() {
    return e < 12 ? "Ó║òÓ║¡Ó║ÖÓ╗ÇÓ║èÓ║╗Ó╗ëÓ║▓" : "Ó║òÓ║¡Ó║ÖÓ╗üÓ║ÑÓ║ç";
  }
}
test400: {
  function f() {
    return t ? "kelios sekund─ùs" : n ? "keli┼│ sekund┼¥i┼│" : "kelias sekundes";
  }
}
test401: {
  function f() {
    return t ? o(i)[0] : n ? o(i)[1] : o(i)[2];
  }
}
test402: {
  function f() {
    return 1 === e ? r + i(e, t, a[0], s) : t ? r + (n(e) ? o(a)[1] : o(a)[0]) : s ? r + o(a)[1] : r + (n(e) ? o(a)[1] : o(a)[2]);
  }
}
test403: {
  function f() {
    return i ? t % 10 === 1 && t % 100 !== 11 ? e[2] : e[3] : t % 10 === 1 && t % 100 !== 11 ? e[0] : e[1];
  }
}
test404: {
  function f() {
    return t ? "da┼¥as sekundes" : "da┼¥─üm sekund─ôm";
  }
}
test405: {
  function f() {
    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
  }
}
test406: {
  function f() {
    return 1 === n.length ? i ? o[0] : o[1] : e + " " + t.correctGrammaticalCase(e, o);
  }
}
test407: {
  function f() {
    return 0 === e ? e + "-ðÁð▓" : 0 === i ? e + "-ðÁð¢" : i > 10 && i < 20 ? e + "-Ðéð©" : 1 === t ? e + "-ð▓ð©" : 2 === t ? e + "-ÐÇð©" : 7 === t || 8 === t ? e + "-ð╝ð©" : e + "-Ðéð©";
  }
}
test408: {
  function f() {
    return e < 4 ? "Ó┤░Ó┤¥Ó┤ñÓÁìÓ┤░Ó┤┐" : e < 12 ? "Ó┤░Ó┤¥Ó┤ÁÓ┤┐Ó┤▓ÓÁå" : e < 17 ? "Ó┤ëÓ┤ÜÓÁìÓ┤Ü Ó┤òÓ┤┤Ó┤┐Ó┤×ÓÁìÓ┤×ÓÁì" : e < 20 ? "Ó┤ÁÓÁêÓ┤òÓÁüÓ┤¿ÓÁìÓ┤¿ÓÁçÓ┤░Ó┤é" : "Ó┤░Ó┤¥Ó┤ñÓÁìÓ┤░Ó┤┐";
  }
}
test409: {
  function f() {
    return t ? "ÐàÐìð┤ÐàÐìð¢ ÐüðÁð║Ðâð¢ð┤" : "ÐàÐìð┤ÐàÐìð¢ ÐüðÁð║Ðâð¢ð┤Ðïð¢";
  }
}
test410: {
  function f() {
    return e < 12 ? "Ê«Ë¿" : "Ê«ðÑ";
  }
}
test411: {
  function f() {
    return e >= 0 && e < 6 ? "Óñ¬Óñ╣Óñ¥ÓñƒÓÑç" : e < 12 ? "Óñ©ÓñòÓñ¥Óñ│ÓÑÇ" : e < 17 ? "ÓñªÓÑüÓñ¬Óñ¥Óñ░ÓÑÇ" : e < 20 ? "Óñ©Óñ¥Óñ»ÓñéÓñòÓñ¥Óñ│ÓÑÇ" : "Óñ░Óñ¥ÓññÓÑìÓñ░ÓÑÇ";
  }
}
test412: {
  function f() {
    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
  }
}
test413: {
  function f() {
    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
  }
}
test414: {
  function f() {
    return e < 3 ? "Óñ░Óñ¥ÓññÓñ┐" : e < 12 ? "Óñ¼Óñ┐Óñ╣Óñ¥Óñ¿" : e < 16 ? "ÓñªÓñ┐ÓñëÓñüÓñ©ÓÑï" : e < 20 ? "Óñ©Óñ¥ÓñüÓñØ" : "Óñ░Óñ¥ÓññÓñ┐";
  }
}
test415: {
  function f() {
    return e ? /-MMM-/.test(n) ? i[e.month()] : t[e.month()] : t;
  }
}
test416: {
  function f() {
    return e ? /-MMM-/.test(n) ? i[e.month()] : t[e.month()] : t;
  }
}
test417: {
  function f() {
    return e < 4 ? "Ó¿░Ó¿¥Ó¿ñ" : e < 10 ? "Ó¿©Ó¿ÁÓ®çÓ¿░" : e < 17 ? "Ó¿ªÓ®üÓ¿¬Ó¿╣Ó¿┐Ó¿░" : e < 20 ? "Ó¿©Ó¿╝Ó¿¥Ó¿«" : "Ó¿░Ó¿¥Ó¿ñ";
  }
}
test418: {
  function f() {
    return i ? "minuta" : "minut─Ö";
  }
}
test419: {
  function f() {
    return i ? "godzina" : "godzin─Ö";
  }
}
test420: {
  function f() {
    return e ? /D MMMM/.test(t) ? o[e.month()] : n[e.month()] : n;
  }
}
test421: {
  function f() {
    return 0 === this.day() || 6 === this.day() ? "[├Ültimo] dddd [├ás] LT" : "[├Ültima] dddd [├ás] LT";
  }
}
test422: {
  function f() {
    return 0 === this.day() || 6 === this.day() ? "[├Ültimo] dddd [├ás] LT" : "[├Ültima] dddd [├ás] LT";
  }
}
test423: {
  function f() {
    return t % 10 === 1 && t % 100 !== 11 ? i[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? i[1] : i[2];
  }
}
test424: {
  function f() {
    return "m" === n ? i ? "ð╝ð©ð¢ÐâÐéð░" : "ð╝ð©ð¢ÐâÐéÐâ" : e + " " + t(o[n], +e);
  }
}
test425: {
  function f() {
    return 2 === this.day() ? "[ðÆð¥] dddd, [ð▓] LT" : "[ðÆ] dddd, [ð▓] LT";
  }
}
test426: {
  function f() {
    return 2 === this.day() ? "[ðÆð¥] dddd, [ð▓] LT" : "[ðÆ] dddd, [ð▓] LT";
  }
}
test427: {
  function f() {
    return e < 4 ? "ð¢ð¥Ðçð©" : e < 12 ? "ÐâÐéÐÇð░" : e < 17 ? "ð┤ð¢ÐÅ" : "ð▓ðÁÐçðÁÐÇð░";
  }
}
test428: {
  function f() {
    return e < 12 ? "ÏÁÏ¿Ï¡" : "Ï┤Ïº┘à";
  }
}
test429: {
  function f() {
    return e > 11 ? i ? "ÓÂ┤.ÓÀÇ." : "ÓÂ┤ÓÀâÓÀè ÓÀÇÓÂ╗ÓÀö" : i ? "ÓÂ┤ÓÀÖ.ÓÀÇ." : "ÓÂ┤ÓÀÖÓÂ╗ ÓÀÇÓÂ╗ÓÀö";
  }
}
test430: {
  function f() {
    return i || o ? "p├ír sek├║nd" : "p├ír sekundami";
  }
}
test431: {
  function f() {
    return i || o ? a + (t(e) ? "sekundy" : "sek├║nd") : a + "sekundami";
  }
}
test432: {
  function f() {
    return i ? "min├║ta" : o ? "min├║tu" : "min├║tou";
  }
}
test433: {
  function f() {
    return i || o ? a + (t(e) ? "min├║ty" : "min├║t") : a + "min├║tami";
  }
}
test434: {
  function f() {
    return i ? "hodina" : o ? "hodinu" : "hodinou";
  }
}
test435: {
  function f() {
    return i || o ? a + (t(e) ? "hodiny" : "hod├¡n") : a + "hodinami";
  }
}
test436: {
  function f() {
    return i || o ? "de┼ê" : "d┼êom";
  }
}
test437: {
  function f() {
    return i || o ? a + (t(e) ? "dni" : "dn├¡") : a + "d┼êami";
  }
}
test438: {
  function f() {
    return i || o ? "mesiac" : "mesiacom";
  }
}
test439: {
  function f() {
    return i || o ? a + (t(e) ? "mesiace" : "mesiacov") : a + "mesiacmi";
  }
}
test440: {
  function f() {
    return i || o ? "rok" : "rokom";
  }
}
test441: {
  function f() {
    return i || o ? a + (t(e) ? "roky" : "rokov") : a + "rokmi";
  }
}
test442: {
  function f() {
    return t || n ? "nekaj sekund" : "nekaj sekundami";
  }
}
test443: {
  function f() {
    return t ? "ena minuta" : "eno minuto";
  }
}
test444: {
  function f() {
    return t ? "ena ura" : "eno uro";
  }
}
test445: {
  function f() {
    return t || n ? "en dan" : "enim dnem";
  }
}
test446: {
  function f() {
    return t || n ? "en mesec" : "enim mesecem";
  }
}
test447: {
  function f() {
    return t || n ? "eno leto" : "enim letom";
  }
}
test448: {
  function f() {
    return e < 12 ? "PD" : "MD";
  }
}
test449: {
  function f() {
    return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 === 1 ? t[0] : t[1] : t[2];
  }
}
test450: {
  function f() {
    return 1 === n.length ? "y" === n && i ? "jedna godina" : o || i ? s[0] : s[1] : (a = t.correctGrammaticalCase(e, s), "yy" === n && i && "godinu" === a ? e + " godina" : e + " " + a);
  }
}
test451: {
  function f() {
    return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 === 1 ? t[0] : t[1] : t[2];
  }
}
test452: {
  function f() {
    return 1 === n.length ? "y" === n && i ? "ÐÿðÁð┤ð¢ð░ ð│ð¥ð┤ð©ð¢ð░" : o || i ? s[0] : s[1] : (a = t.correctGrammaticalCase(e, s), "yy" === n && i && "ð│ð¥ð┤ð©ð¢Ðâ" === a ? e + " ð│ð¥ð┤ð©ð¢ð░" : e + " " + a);
  }
}
test453: {
  function f() {
    return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku";
  }
}
test454: {
  function f() {
    return e < 2 ? " Ó«»Ó«¥Ó««Ó««Ó»ì" : e < 6 ? " Ó«ÁÓ»êÓ«òÓ«▒Ó»ê" : e < 10 ? " Ó«òÓ«¥Ó«▓Ó»ê" : e < 14 ? " Ó«¿Ó«úÓ»ìÓ«¬Ó«òÓ«▓Ó»ì" : e < 18 ? " Ó«ÄÓ«▒Ó»ìÓ«¬Ó«¥Ó«ƒÓ»ü" : e < 22 ? " Ó««Ó«¥Ó«▓Ó»ê" : " Ó«»Ó«¥Ó««Ó««Ó»ì";
  }
}
test455: {
  function f() {
    return e < 4 ? "Ó░░Ó░¥Ó░ñÓ▒ìÓ░░Ó░┐" : e < 10 ? "Ó░ëÓ░ªÓ░»Ó░é" : e < 17 ? "Ó░«Ó░ºÓ▒ìÓ░»Ó░¥Ó░╣Ó▒ìÓ░¿Ó░é" : e < 20 ? "Ó░©Ó░¥Ó░»Ó░éÓ░ñÓ▒ìÓ░░Ó░é" : "Ó░░Ó░¥Ó░ñÓ▒ìÓ░░Ó░┐";
  }
}
test456: {
  function f() {
    return e < 4 ? "Ðêð░ð▒" : e < 11 ? "ÐüÐâð▒Ê│" : e < 16 ? "ÐÇË»ðÀ" : e < 19 ? "ð▒ðÁð│ð¥Ê│" : "Ðêð░ð▒";
  }
}
test457: {
  function f() {
    return e < 12 ? "Ó©üÓ╣êÓ©¡Ó©ÖÓ╣ÇÓ©ùÓ©ÁÓ╣êÓ©óÓ©ç" : "Ó©½Ó©ÑÓ©▒Ó©çÓ╣ÇÓ©ùÓ©ÁÓ╣êÓ©óÓ©ç";
  }
}
test458: {
  function f() {
    return e < 12 ? i ? "├Â├Â" : "├û├û" : i ? "├Âs" : "├ûS";
  }
}
test459: {
  function f() {
    return n ? o[i][0] : t ? o[i][0] : o[i][1];
  }
}
test460: {
  function f() {
    return e > 11 ? i ? "d'o" : "D'O" : i ? "d'a" : "D'A";
  }
}
test461: {
  function f() {
    return n < 600 ? "┘è█ÉÏ▒┘ë┘à ┘â█É┌å█ò" : n < 900 ? "Ï│█ò┌¥█òÏ▒" : n < 1130 ? "┌å█êÏ┤Ï¬┘ë┘å Ï¿█çÏ▒█ç┘å" : n < 1230 ? "┌å█êÏ┤" : n < 1800 ? "┌å█êÏ┤Ï¬┘ë┘å ┘â█É┘è┘ë┘å" : "┘â█ò┌å";
  }
}
test462: {
  function f() {
    return t % 10 === 1 && t % 100 !== 11 ? i[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? i[1] : i[2];
  }
}
test463: {
  function f() {
    return "m" === n ? i ? "Ðàð▓ð©ð╗ð©ð¢ð░" : "Ðàð▓ð©ð╗ð©ð¢Ðâ" : "h" === n ? i ? "ð│ð¥ð┤ð©ð¢ð░" : "ð│ð¥ð┤ð©ð¢Ðâ" : e + " " + t(o[n], +e);
  }
}
test464: {
  function f() {
    return e === !0 ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? (i = /(\[[ðÆð▓ðúÐâ]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:ð╝ð©ð¢Ðâð╗ð¥Ðù|ð¢ð░ÐüÐéÐâð┐ð¢ð¥Ðù)? ?\] ?dddd/.test(t) ? "genitive" : "nominative", n[i][e.day()]) : n.nominative;
  }
}
test465: {
  function f() {
    return e < 4 ? "ð¢ð¥ÐçÐû" : e < 12 ? "ÐÇð░ð¢ð║Ðâ" : e < 17 ? "ð┤ð¢ÐÅ" : "ð▓ðÁÐçð¥ÐÇð░";
  }
}
test466: {
  function f() {
    return e < 12 ? "ÏÁÏ¿Ï¡" : "Ï┤Ïº┘à";
  }
}
test467: {
  function f() {
    return e < 12 ? i ? "sa" : "SA" : i ? "ch" : "CH";
  }
}
test468: {
  function f() {
    return n < 600 ? "ÕçîµÖ¿" : n < 900 ? "µù®õ©è" : n < 1130 ? "õ©èÕìê" : n < 1230 ? "õ©¡Õìê" : n < 1800 ? "õ©ïÕìê" : "µÖÜõ©è";
  }
}
test469: {
  function f() {
    return e.week() !== this.week() ? "[õ©ï]dddLT" : "[µ£¼]dddLT";
  }
}
test470: {
  function f() {
    return this.week() !== e.week() ? "[õ©è]dddLT" : "[µ£¼]dddLT";
  }
}
test471: {
  function f() {
    return n < 600 ? "ÕçîµÖ¿" : n < 900 ? "µù®õ©è" : n < 1200 ? "õ©èÕìê" : 1200 === n ? "õ©¡Õìê" : n < 1800 ? "õ©ïÕìê" : "µÖÜõ©è";
  }
}
test472: {
  function f() {
    return n < 600 ? "ÕçîµÖ¿" : n < 900 ? "µù®õ©è" : n < 1130 ? "õ©èÕìê" : n < 1230 ? "õ©¡Õìê" : n < 1800 ? "õ©ïÕìê" : "µÖÜõ©è";
  }
}
test473: {
  function f() {
    return n < 600 ? "ÕçîµÖ¿" : n < 900 ? "µù®õ©è" : n < 1130 ? "õ©èÕìê" : n < 1230 ? "õ©¡Õìê" : n < 1800 ? "õ©ïÕìê" : "µÖÜõ©è";
  }
}
test474: {
  function f() {
    return t.retry(o) ? void i._logger.warning("sendEvents: on the url", n, "will retry...") : o ? i._callbackAndLeave(t.mainError(), e) : i._callbackAndLeave(null, e);
  }
}
test475: {
  function f() {
    return e.requiredVersion ? a("ui.popup.accessDenied.badVersion", n(e.currentVersion), n(e.requiredVersion)) : a("ui.popup.accessDenied.badVersion");
  }
}
test476: {
  function f() {
    return i ? console.warn("PowerManager already active") : void window.powerManagement.dim(function () {
      i = !0;
    }, function (e) {
      console.warn("PowerManager failed to acquire wakelock", e);
    });
  }
}
test477: {
  function f() {
    return i ? void window.powerManagement.release(function () {
      i = !1;
    }, function (e) {
      console.warn("PowerManager failed to release wakelock", e);
    }) : console.warn("PowerManager was not active");
  }
}
test478: {
  function f() {
    return e.isFightStarted ? t() : void (o.tapOptions.mode = "fightPlacement");
  }
}
test479: {
  function f() {
    return e ? (this.lockMap[e] = !0, this.locked = !0, void this.cancelTransform()) : console.error(new Error("Foreground.lock: no reason provided"));
  }
}
test480: {
  function f() {
    return this.closeTweener ? (this.closeTweener.cancel(), e()) : void (this.closeTweener = u.tween(this, f, {
      time: 150,
      delay: 0,
      easing: "ease-out"
    }, e));
  }
}
test481: {
  function f() {
    return i ? (window.isoEngine.displayEnemyMovementZone(i), window.foreground.isSpellSelected() && M.allowDamagePreview ? (window.gui.damagePreview.preview(window.foreground.tapOptions.spellId, i.data.disposition.cellId), !1) : (T.appendChild(i.createStatsTooltipContent()), !0)) : (I.openState && (e(), window.isoEngine.removeEnemyMovementZone()), window.gui.damagePreview.hide(), !1);
  }
}
test482: {
  function f() {
    return b ? (e(u), void t(u)) : (r.cancelCameraMovement(), i = Date.now(), c.zoom === c.minZoom && (a = s = 0), h = .5 * h + .5 * -a, p = .5 * p + .5 * -s, void l.move(n, o, -a, -s, d));
  }
}
test483: {
  function f() {
    return "fightPlacement" === window.foreground.tapOptions.mode ? this.getOrdonnedPreFighters() : this.turnsList;
  }
}
test484: {
  function f() {
    return n ? i(n) : (r.id === t && a.spells[e] && s[e].setLevel(a.spells[e].level), o.spells[e] = s[e], i(null, o.spells[e]));
  }
}
test485: {
  function f() {
    return n ? (n.data.updateData({
      look: t.look,
      disposition: t.disposition
    }), void ("fightPlacement" === window.foreground.tapOptions.mode && (n.updateFighterIllustration(), a.emit("UpdatePreFightersList", i)))) : console.error("Refreshing fighter failed, fighter " + i + " does not exist");
  }
}
test486: {
  function f() {
    return i ? (i.setAlive(!1), i.dispel(!1, !1, !0), void a.removeLinkedBuff(t)) : console.error(new Error("Vanish failed, fighter does not exist"));
  }
}
test487: {
  function f() {
    return t ? (t.clear(), void delete this._fighters[e]) : console.warn("Removing fighter failed, it does not exist");
  }
}
test488: {
  function f() {
    return e ? console.error(e) : void t.resetInitialCooldown(i.turnCount);
  }
}
test489: {
  function f() {
    return e ? t(e) : n ? (r.spell = n, void i()) : t(new Error("unable to find spell id " + s));
  }
}
test490: {
  function f() {
    return o ? void w.each(t, function (t, i) {
      if ("GameFightSpellCooldown" !== t._type) return i();
      var a = t.spellId,
        s = o.spells[a];
      return s ? n._restoreSpellCooldown(t, s, i) : void n.getFighterSpell(a, e, function (e, o) {
        return e ? i(e) : n._restoreSpellCooldown(t, o, i);
      });
    }, function (e) {
      i(e);
    }) : console.error(new Error("Restoring cooldowns failed, fighter does not exist."));
  }
}
test491: {
  function f() {
    return s ? n._restoreSpellCooldown(t, s, i) : void n.getFighterSpell(a, e, function (e, o) {
      return e ? i(e) : n._restoreSpellCooldown(t, o, i);
    });
  }
}
test492: {
  function f() {
    return e ? i(e) : n._restoreSpellCooldown(t, o, i);
  }
}
test493: {
  function f() {
    return c ? void t(s, c, e.actionId, i) : (c = new o(), c.casterId = n.getFighter(e.sourceId) ? e.sourceId : e.effect.targetId, n.getFighterSpell(s.spellId, c.casterId, function (n, o) {
      return n ? i(n) : o ? (c.spell = o, a[s.targetId][s.turnDuration][s.spellId] = c, void t(s, c, e.actionId, i)) : i(new Error("unable to find spell id " + s.spellId));
    }));
  }
}
test494: {
  function f() {
    return n ? i(n) : o ? (c.spell = o, a[s.targetId][s.turnDuration][s.spellId] = c, void t(s, c, e.actionId, i)) : i(new Error("unable to find spell id " + s.spellId));
  }
}
test495: {
  function f() {
    return i ? console.error(i) : t._restoreBuffs(e.effects);
  }
}
test496: {
  function f() {
    return e.init === t.init ? t.fighter - e.fighter : t.init - e.init;
  }
}
test497: {
  function f() {
    return a ? (window.gui.emit(e._messageType, e), a.call(this, e, i)) : (window.gui.emit(e._messageType, e), void i());
  }
}
test498: {
  function f() {
    return "EffectInstanceDice" === this.effect._type ? this.effect.getParams()[0] : null;
  }
}
test499: {
  function f() {
    return "EffectInstanceDice" === this.effect._type ? this.effect.getParams()[1] : null;
  }
}
test500: {
  function f() {
    return "EffectInstanceInteger" === this.effect._type ? this.effect.value : "EffectInstanceDice" === this.effect._type ? this.effect.getParams()[2] : null;
  }
}
test501: {
  function f() {
    return e ? o(e) : (s._effectEnrichment(), o(null, s));
  }
}
test502: {
  function f() {
    return c ? this.refreshDescription(t) : t();
  }
}
test503: {
  function f() {
    return a[e] ? a[e][0] : null;
  }
}
test504: {
  function f() {
    return 0 === i.length ? t() : void w.getData("Effects", i, function (e, n) {
      return e ? t(e) : void t(null, g.extractElementsFrom(i, n, !0));
    });
  }
}
test505: {
  function f() {
    return e ? t(e) : void t(null, g.extractElementsFrom(i, n, !0));
  }
}
test506: {
  function f() {
    return n ? i(n) : 0 === Object.keys(o).length ? i(null, e) : void m.each(Object.keys(o), function (e, i) {
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
      return n ? i(n) : void l(e, t, i);
    });
  }
}
test507: {
  function f() {
    return n ? i(n) : void l(e, t, i);
  }
}
test508: {
  function f() {
    return this._type ? void (R[this._type] && (this._type = R[this._type])) : void (this.hasOwnProperty("diceNum") ? this._type = "EffectInstanceDice" : this.hasOwnProperty("year") ? this._type = "EffectInstanceDate" : this.hasOwnProperty("days") ? this._type = "EffectInstanceDuration" : this.hasOwnProperty("min") ? this._type = "EffectInstanceMinMax" : this.hasOwnProperty("monsterCount") ? this._type = "EffectInstanceLadder" : this.hasOwnProperty("monsterFamilyId") ? this._type = "EffectInstanceCreature" : this.hasOwnProperty("mountId") ? this._type = "EffectInstanceMount" : this.hasOwnProperty("text") ? this._type = "EffectInstanceString" : this._type = "EffectInstanceInteger");
  }
}
test509: {
  function f() {
    return this.hasOwnProperty(e) ? this[e] : O[e];
  }
}
test510: {
  function f() {
    return this.delay ? f("ui.common.delayTurn", this.delay, this.delay <= 1) : !this.duration || isNaN(this.duration) ? "" : this.duration < 0 ? f("ui.common.infinit") : this.duration > 1 ? f("ui.common.turn", this.duration, !0) : e ? f("ui.common.lastTurn") : f("ui.common.turn", this.duration, !1);
  }
}
test511: {
  function f() {
    return this.rawZone ? t.parseZone(this.rawZone) : {
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
    return e ? e(t) : void (t && M.error(t));
  }
}
test513: {
  function f() {
    return e ? n && n(e) : (a.modifType = 0, a.spellId = s, a._delta = r, n && n(null, t));
  }
}
test514: {
  function f() {
    return e ? n && n(e) : (a.statName = s.getActionStatName(i), a.isABoost = s.getIsABoost(i), n && n(null, t));
  }
}
test515: {
  function f() {
    return "EffectInstanceDice" === this.effect._type ? this.isABoost ? this.effect.diceNum : -this.effect.diceNum : 0;
  }
}
test516: {
  function f() {
    return e ? n && n(e) : (a.statName = s.getActionStatName(i), a.stateId = r, n && n(null, t));
  }
}
test517: {
  function f() {
    return e ? (e.addState(this.stateId), window.gui.shortcutBar.updateSpellsAvailability(), void o.prototype.apply.call(this)) : console.error("Applying state buff failed, fighter does not exist.");
  }
}
test518: {
  function f() {
    return t ? e(t) : e(null, i[0] ? i[0].nameId : "");
  }
}
test519: {
  function f() {
    return s ? "{style:" + s + "Damage," + e + "}" : e;
  }
}
test520: {
  function f() {
    return e ? i(e) : (n = C("ui.fight.startTrap", d.name, t.getName(), u.name), i(null, n));
  }
}
test521: {
  function f() {
    return e ? i(e) : (n = C("ui.fight.dispellSpell", d.name, t.getName()), i(null, n));
  }
}
test522: {
  function f() {
    return n ? c[1] !== w.WEAPON_SPELL_ID ? i(null, s("ui.fight.launchSpell", d.name, n, c[2])) : void a(function (e, t) {
      return e ? i(e) : i(null, s("ui.fight.launchSpell", d.name, t, c[2]));
    }) : i(null, "");
  }
}
test523: {
  function f() {
    return e ? i(e) : i(null, s("ui.fight.launchSpell", d.name, t, c[2]));
  }
}
test524: {
  function f() {
    return e ? i(e) : i(null, s("ui.fight.closeCombat", d.name, t[0].nameId, c[2]));
  }
}
test525: {
  function f() {
    return e.showChatMessage === !1 ? i() : e.effectId === -1 ? l(e, t, i) : void f.getDataMap("SpellEffects", [e.effectId], function (n, o) {
      var a = o && o[e.effectId];
      return n ? (console.error("Unable to retrieve the effects visibility for " + e.effectId + ", " + n), l(e, t, i)) : a && !a.visibleInFightLog ? i() : l(e, t, i);
    });
  }
}
test526: {
  function f() {
    return n ? (console.error("Unable to retrieve the effects visibility for " + e.effectId + ", " + n), l(e, t, i)) : a && !a.visibleInFightLog ? i() : l(e, t, i);
  }
}
test527: {
  function f() {
    return e ? t(e) : (n && i.push(n), t());
  }
}
test528: {
  function f() {
    return this.isShieldBarVisible ? e - m : e;
  }
}
test529: {
  function f() {
    return this.isTurnPassed() ? e + 1 : e;
  }
}
test530: {
  function f() {
    return t ? this.data.teamId === t.data.teamId : (console.warn("Fighter " + e + " not found"), !1);
  }
}
test531: {
  function f() {
    return null === e ? void this.removeHighlight() : (this._highlight._red = e.red, this._highlight._green = e.green, this._highlight._blue = e.blue, this._highlight._alpha = e.alpha, this.tint[0] = this.hue[0] * e.red, this.tint[1] = this.hue[1] * e.green, this.tint[2] = this.hue[2] * e.blue, this.tint[3] = this.hue[3] * e.alpha * this._alpha, void this.forceRefresh());
  }
}
test532: {
  function f() {
    return t === -1 ? console.error("Subentity does not exist.") : (e.animManager.cleanupAnimations(), this.subentities.splice(t, 1), void (this.hasSubentities = this.subentities.length > 0));
  }
}
test533: {
  function f() {
    return this.type === s.permanent ? this : (this.nLocks += 1, this.cache._holdElement(this), this);
  }
}
test534: {
  function f() {
    return this.type === s.permanent ? this : (this.nLocks -= 1, void (0 === this.nLocks ? this.cache._releaseElement(this) : this.nLocks < 0 && console.error(new Error("[ElementHandle.release] Number of locks is negative: " + this.id))));
  }
}
test535: {
  function f() {
    return e.reference.container !== this.actives ? void console.warn("[Cache3State.archiveElement] The element cannot be archived:", e.id) : void (e.type === s.throwable ? this._removeElement(e) : (this.actives.removeByReference(e.reference), e.reference = this.archives.addBack(e), this._clean()));
  }
}
test536: {
  function f() {
    return e.container !== this ? (console.warn("[DoublyList.removeByReference] Trying to remove a node that does not belong to the list"), e) : (null === e.next ? this.last = e.previous : e.next.previous = e.previous, null === e.previous ? this.first = e.next : e.previous.next = e.next, e.container = null, this.length -= 1, null);
  }
}
test537: {
  function f() {
    return r ? void t(r) : void o.loadImage(e, function (o) {
      var r;
      r = o === n.EMPTY_IMAGE ? i.getEmptyTexture() : i.createTexture(o, e, a, s), t(r);
    });
  }
}
test538: {
  function f() {
    return 0 === l.length ? i && i() : void o.loadImages(l, function (e, i) {
      var o,
        d = l[i];
      o = e === n.EMPTY_IMAGE ? a.getEmptyTexture() : a.createTexture(e, d, s, r), t(o, c[i]);
    }, i);
  }
}
test539: {
  function f() {
    return t ? t : (t = this.externalSymbols[e], t ? t.last.object : null);
  }
}
test540: {
  function f() {
    return t ? t : null;
  }
}
test541: {
  function f() {
    return t ? t.nbFrames : (console.warn("Symbol " + e + " not registered in the template of the character"), 0);
  }
}
test542: {
  function f() {
    return t ? t.duration : (console.warn("Symbol " + e + " not registered in the template of the character"), 0);
  }
}
test543: {
  function f() {
    return e.direction === -1 ? -1 : this.isFx && 0 === e.direction ? 0 : this.only4Directions && 0 === (1 & e.direction) ? e.direction + 1 : e.direction;
  }
}
test544: {
  function f() {
    return this._cleared ? void console.warn("[AnimationManager.clear] Trying to clear an already cleared animation manager") : (this.cleanupAnimationsAndRemoveSubentities(), this.template.clear(), this.sprite.renderer.unlockBuffer(this.frameData.id), this.frameData.id = "", void (this._cleared = !0));
  }
}
test545: {
  function f() {
    return t ? t.duration : 0;
  }
}
test546: {
  function f() {
    return this.stopping ? (p._warn("[Playable.stop] playable is already stopping"), this) : this.playing || this.starting ? (this.stopping = !0, this.starting = !1, this._finished(), this) : (p._warn("[Playable.stop] playable is not playing"), this);
  }
}
test547: {
  function f() {
    return this._transitions.length > 0 ? this._transitions[this._transitions.length - 1].toObject : null === this._from ? this._setFrom() : this._from;
  }
}
test548: {
  function f() {
    return this._transitions.length > 0 ? this._setFrom() : null === this._from ? this._setFrom() : this._from;
  }
}
test549: {
  function f() {
    return e < .5 ? 2 * e * e : 2 * (2 * e - e * e) - 1;
  }
}
test550: {
  function f() {
    return e < .5 ? 4 * e * e * e : 4 * (3 * e - 3 * e * e + e * e * e) - 3;
  }
}
test551: {
  function f() {
    return e < .5 ? Math.pow(2 * e, t) / 2 : (2 - Math.pow(2 * (1 - e), t)) / 2;
  }
}
test552: {
  function f() {
    return e < .5 ? (1 - Math.cos(i * e)) / 2 : (1 + Math.sin(i * (e - .5))) / 2;
  }
}
test553: {
  function f() {
    return e < .5 ? (1 - Math.pow(a, 2 * t * e)) / (1 - Math.pow(a, t)) / 2 : .5 + (1 - Math.pow(a, t - 2 * t * e)) / (1 - Math.pow(a, -t)) / 2;
  }
}
test554: {
  function f() {
    return e < .5 ? (1 - Math.sqrt(1 - 4 * e * e)) / 2 : (1 + Math.sqrt(-3 + 8 * e - 4 * e * e)) / 2;
  }
}
test555: {
  function f() {
    return e < .5 ? 0 === e ? 0 : (t /= t + 1, i = (1 + t) * Math.log(2 * e) / Math.log(t), .5 * Math.cos(i) * Math.pow(t, i)) : 1 === e ? 1 : (t /= t + 1, i = (1 + t) * Math.log(2 - 2 * e) / Math.log(t), .5 + .5 * (1 - Math.cos(i) * Math.pow(t, i)));
  }
}
test556: {
  function f() {
    return e < .5 ? 0 === e ? 0 : (t /= t + 1, i = (1 + t) * Math.log(2 * e) / Math.log(t), Math.abs(.5 * Math.cos(i) * Math.pow(t, i))) : 1 === e ? 1 : (t /= t + 1, i = (1 + t) * Math.log(2 - 2 * e) / Math.log(t), .5 + .5 * (1 - Math.abs(Math.cos(i) * Math.pow(t, i))));
  }
}
test557: {
  function f() {
    return e < .5 ? (e *= 2, .5 * (e * e * ((t + 1) * e - t))) : (e = 2 * e - 2, .5 * (e * e * ((t + 1) * e + t)) + 1);
  }
}
test558: {
  function f() {
    return this._processingCb[e] ? void this._processingCb[e].push(t) : (this._processingCb[e] || (this._processingCb[e] = []), this._processingCb[e].push(t), void this._staticContent.getDataMap("SoundBones", [e], function (t, o) {
      if (t) return i(t, e, null);
      var r = o[e];
      if (!r) return i(t, e, null);
      if (!r.keys) return n(a._logger, "No keys soundBonesData for bonesId: " + e), i(t, e, null);
      if (!r.values) return n(a._logger, "No values soundBonesData for bonesId: " + e), i(t, e, null);
      var l = new s(e, r.keys, r.values);
      return i(t, e, l);
    }));
  }
}
test559: {
  function f() {
    return e ? i(e) : n ? o(a._audioManager, n, t, i) : i();
  }
}
test560: {
  function f() {
    return this._availableFrames[e] ? this._bonesId + "/" + this._animName + ":" + e + "_" + t : "";
  }
}
test561: {
  function f() {
    return this._availableFrames[e] ? this._cacheIds[e] ? this._cacheIds[e] : [this.getId(e, n)] : [""];
  }
}
test562: {
  function f() {
    return 0 === e.type ? {
      parent: e,
      child: null
    } : {
      parent: null,
      child: e
    };
  }
}
test563: {
  function f() {
    return u[e.type] ? {
      parent: e,
      child: null
    } : h[e.type] ? {
      parent: e,
      child: e
    } : {
      parent: null,
      child: e
    };
  }
}
test564: {
  function f() {
    return void 0 === i ? (console.warn("[WebGLRenderer.drawLineBatch] No buffer loaded for", e), void this.stopProgram()) : (this._drawBatch(i), void this.stopProgram());
  }
}
test565: {
  function f() {
    return void 0 === t ? (console.warn("[WebGLRenderer.drawBoxBatch] No buffer loaded for", e), void this.stopProgram()) : (this._drawBatch(t), void this.stopProgram());
  }
}
test566: {
  function f() {
    return e.isMaskUse ? (this.useProgram(this._programMask, {
      mask: this._renderTarget.textureBinder
    }), l.uniform4fv(this._currentProgram.uniforms.uBbox, t), void this.stopTextureRendering(!0, !0)) : void (e.isMaskStop && (i.pop().texture.release(), this.stopProgram()));
  }
}
test567: {
  function f() {
    return t ? e(t) : (b = i, void e());
  }
}
test568: {
  function f() {
    return e ? console.error(e) : void console.log("data:", t);
  }
}
test569: {
  function f() {
    return e ? i(e) : (n.effectInstances = t.effectInstances, delete t.effectInstances, n._tables = t, n.spell = t.spells[n.id], n.spell ? (n.setLevel(n.level || 1), n.isLoaded = !0, void i()) : i(new Error("missing static data for spell id " + n.id)));
  }
}
test570: {
  function f() {
    return this.spell ? this.spell[e] : (console.error("Spell#getPropertyFromSpell this.spell is undefined or null #", this.id), null);
  }
}
test571: {
  function f() {
    return i <= 0 ? 0 : t ? Math.max(i - t.value.getTotalStat(), 2) : i;
  }
}
test572: {
  function f() {
    return e ? t(e) : void t(null, o);
  }
}
test573: {
  function f() {
    return t && t.spells ? i(null, I.extractElementsFrom(e, t.spells, !0)) : void A.getData("Spells", e, function (t, n) {
      return t ? i(t) : void i(null, I.extractElementsFrom(e, n, !0));
    });
  }
}
test574: {
  function f() {
    return t ? i(t) : void i(null, I.extractElementsFrom(e, n, !0));
  }
}
test575: {
  function f() {
    return e ? i(e) : void i(null, I.extractElementsFrom(n, t, !0));
  }
}
test576: {
  function f() {
    return e ? i(e) : void i(null, I.extractElementsFrom(n, t, !0));
  }
}
test577: {
  function f() {
    return 0 === Object.keys(a).length ? i(null, s) : void T.createEffectInstancesIndexed(a, function (e, t) {
      if (e) return i(e);
      if (0 === Object.keys(s).length) return i(null, t);
      for (var n in s) s.hasOwnProperty(n) && (t[n] = s[n]);
      i(null, t);
    });
  }
}
test578: {
  function f() {
    return e ? i(e) : (n.spells = o, void f(n, t, function (e, o) {
      return e ? i(e) : (n.spellLevels = o, void g(n, t, function (e, o) {
        return e ? i(e) : (n.spellStates = o, void _(n, t, function (e, t) {
          return e ? i(e) : (n.effectInstances = t, void i(null, n));
        }));
      }));
    }));
  }
}
test579: {
  function f() {
    return e ? i(e) : (n.spellLevels = o, void g(n, t, function (e, o) {
      return e ? i(e) : (n.spellStates = o, void _(n, t, function (e, t) {
        return e ? i(e) : (n.effectInstances = t, void i(null, n));
      }));
    }));
  }
}
test580: {
  function f() {
    return e ? i(e) : (n.spellStates = o, void _(n, t, function (e, t) {
      return e ? i(e) : (n.effectInstances = t, void i(null, n));
    }));
  }
}
test581: {
  function f() {
    return e ? i(e) : (n.effectInstances = t, void i(null, n));
  }
}
test582: {
  function f() {
    return n > o ? -s : n < o ? s : e.id > i.id ? -s : void 0;
  }
}
test583: {
  function f() {
    return this.isItem ? void (1 !== e && console.warn("Spell#setLevel called on item with level != 1", e)) : (this.level = e, this.spell ? !e || e < 1 || e > this.spell.spellLevels.length ? console.error(new Error("invalid level " + e + " for spell #" + this.id)) : void (this.spellLevel = this._getSpellLevelByLevel(this.level)) : console.error("Spell#setLevel this.spell is undefined or null #", this.id));
  }
}
test584: {
  function f() {
    return this.isItem ? console.error("Spell#_getSpellLevelByLevel called on item for Spell id", this.id) : this.spell ? this._tables.spellLevels[this.spell.spellLevels[e - 1]] : console.error("Spell#_getSpellLevelByLevel this.spell is undefined or null #", this.id);
  }
}
test585: {
  function f() {
    return this.isItem ? "weapon" : (e = void 0 !== e ? e : this.level, this._getSpellLevelByLevel(e).id);
  }
}
test586: {
  function f() {
    return this.isItem || this.id === O ? 1 : this.spell.spellLevels.length;
  }
}
test587: {
  function f() {
    return t ? t.longNameId : (console.error("Spell factory cannot get typeId", e, "for spellId:", this.id), "");
  }
}
test588: {
  function f() {
    return this.isItem ? Object.keys(this.effectInstances) : this._getSpellLevelByLevel(e || this.level).effects;
  }
}
test589: {
  function f() {
    return this.isItem ? [] : this._getSpellLevelByLevel(e || this.level).criticalEffect;
  }
}
test590: {
  function f() {
    return this.isItem ? this._item.item && this._item.getProperty("image") : this.spell && this.spell.image;
  }
}
test591: {
  function f() {
    return t ? l.call(this, t, e) : r.call(this, 0, null, e);
  }
}
test592: {
  function f() {
    return i.useHeightCell ? n.indexOf(t) !== -1 && o[e].f === o[t].f : n.indexOf(t) !== -1;
  }
}
test593: {
  function f() {
    return i ? t.actionId === H.ACTION_CHARACTER_UPDATE_BOOST ? i.updateBuff(t) : (i.addBuff(t), void (t instanceof z.StatBuff && ("movementPoints" === t.statName ? o(e, t.targetId, t.getDelta(), !1, !1, !1) : "actionPoints" === t.statName && a(e, t.targetId, t.getDelta(), !1, !1, !1)))) : console.error("Display buff step failed, fighter does not exist");
  }
}
test594: {
  function f() {
    return s && r ? (s.data.disposition.cellId = i, r.data.disposition.cellId = o, void a.emit(k.FIGHTERS_POSITION_EXCHANGE, [t, n], 0, e)) : console.error("Exchange position step failed, fighters do not exist");
  }
}
test595: {
  function f() {
    return o ? (o.data.disposition.cellId = i, void n.emit(k.FIGHTER_SLIDE, [t], t, e)) : console.error("Slide step failed, fighter does not exist");
  }
}
test596: {
  function f() {
    return o ? (o.data.disposition.cellId = i, void n.emit(k.FIGHTER_TELEPORTED, [t], 0, e)) : console.error("Teleport step failed, fighter does not exist");
  }
}
test597: {
  function f() {
    return n ? void (n.data.disposition.cellId = i) : console.error("Map movement step failed, fighter does not exist");
  }
}
test598: {
  function f() {
    return a ? void (i < 0 ? W.push(k.FIGHTER_SHIELD_LOSS, [t, i, n], t, o, e) : i > 0 ? W.push(k.FIGHTER_SHIELD_GAIN, [t, i], t, o, e) : W.push(k.FIGHTER_NO_CHANGE, [t], t, o, e)) : console.error("Fighter " + t + " does not exist.");
  }
}
test599: {
  function f() {
    return n ? void n.dispelUniqueBuff(i, !0, !1, !0) : console.error("Fighter " + t + " does not exist.");
  }
}
test600: {
  function f() {
    return o ? (o.dispelSpell(i, !0), void W.push(k.FIGHTER_SPELL_DISPELLED, [t, i], t, n, e)) : console.error("Fighter " + t + " does not exist.");
  }
}
test601: {
  function f() {
    return n ? (n.dispel(), void W.push(k.FIGHTER_GOT_DISPELLED, [t], t, i, e)) : console.error("Fighter " + t + " does not exist.");
  }
}
test602: {
  function f() {
    return o ? (n.deadTurnsList.push(t), o.dispel(!1, !1, !0), n.removeLinkedBuff(t), o.setAlive(!1), void W.push(i ? k.FIGHTER_DEATH : k.FIGHTER_LEAVE, [t], t, -1, e)) : console.error("Fighter " + t + " does not exist.");
  }
}
test603: {
  function f() {
    return void 0 === this.characteristics[e] ? void console.error(new Error("setCharacteristic: No characteristic named: " + e)) : "CharacterBaseCharacteristic" === this.characteristics[e]._type ? void console.error(new Error("setCharacteristic: " + e + ' cannot take a type "number"')) : void (this.characteristics[e] = t);
  }
}
test604: {
  function f() {
    return 0 === i.length ? t && t() : void this._createSpells(i, n, t);
  }
}
test605: {
  function f() {
    return _ || 0 !== i.touchCount ? void (_ = !1) : (e.removeListener("dom.touchmove", u), v = !1, void (y && (e.isTransforming = !1, e.emit("transformEnd", i))));
  }
}
test606: {
  function f() {
    return t ? console.error(t) : (e._calculateDimension(), !e._ornamentAssetId || e._alignment && 0 !== e._alignment.alignmentGrade ? (e._resizeCanvas(e._textWidth, e._textHeight, 0, 0), e._displayText(), void e.emit("rendered")) : (e._displayTextAndOrnament(), void e.emit("rendered")));
  }
}
test607: {
  function f() {
    return t._ornamentId ? void c.getData("Ornaments", t._ornamentId, function (i, n) {
      return i ? e(i) : n ? (t._ornamentAssetId = n.assetId, void e()) : e("staticContent.getData Ornaments - ornamentData is " + n);
    }) : e();
  }
}
test608: {
  function f() {
    return i ? e(i) : n ? (t._ornamentAssetId = n.assetId, void e()) : e("staticContent.getData Ornaments - ornamentData is " + n);
  }
}
test609: {
  function f() {
    return t._ornamentAssetId ? void l.loadModel("ornaments", "ornament_" + t._ornamentAssetId, function (i, n) {
      t._jsonObj = i, t._image = n, e();
    }) : e();
  }
}
test610: {
  function f() {
    return t._titleId ? void c.getData("Titles", t._titleId, function (i, n) {
      return i ? e(i) : n ? (t._title = t._gender ? n.nameFemaleId : n.nameMaleId, void e()) : e("staticContent.getData Titles - titleData is " + n);
    }) : e();
  }
}
test611: {
  function f() {
    return i ? e(i) : n ? (t._title = t._gender ? n.nameFemaleId : n.nameMaleId, void e()) : e("staticContent.getData Titles - titleData is " + n);
  }
}
test612: {
  function f() {
    return t._guild && t._guild.guildEmblem ? void t._guildEmblem.setValue(t._guild.guildEmblem, !0, e) : e();
  }
}
test613: {
  function f() {
    return t._alliance && t._alliance.allianceEmblem ? void t._allianceEmblem.setValue(t._alliance.allianceEmblem, !0, e) : e();
  }
}
test614: {
  function f() {
    return this._guild && this._guild.guildEmblem ? this._guildEmblem.setValue(this._guild.guildEmblem, !0, e) : e(null, null);
  }
}
test615: {
  function f() {
    return i ? console.error("PropertyInfo preload", i) : (t._display(e.line1, e.line2), void t.emit("rendered"));
  }
}
test616: {
  function f() {
    return e.value < t.value ? e : t;
  }
}
test617: {
  function f() {
    return i ? e(i) : (t._initUserInterface(), t._initAutoResize(), t.initialized = !0, t.emit("initialized"), void e());
  }
}
test618: {
  function f() {
    return i ? t && d ? (r = null, l = c = -1, !1) : (p = i, !0) : (console.error('Contextual menu "' + e + '" does not exist.'), !1);
  }
}
test619: {
  function f() {
    return s ? void window.fetch(s).then(n).then(o).then(function (t) {
      return p = t.item, e();
    })["catch"](function (t) {
      return e(t);
    }) : e();
  }
}
test620: {
  function f() {
    return i ? (console.error(i + " when fetching menuUrl: " + r), t.close(), e()) : (s ? t._addItems(h.concat(p)) : t._addItems(h), e());
  }
}
test621: {
  function f() {
    return i.rootElement && e.rootElement ? r.getElementPositionAround(i, e) : null;
  }
}
test622: {
  function f() {
    return u.requestInteractionHandle("SCROLL", e) ? (e.scrollUpHint && (e.scrollUpHint.hide(), e.scrollDownHint.hide()), void e.emit("scrollStart")) : e.cancel();
  }
}
test623: {
  function f() {
    return d.isFeatureOn("scrollerBoundToWrapper") ? void this.iScroll.cancel() : void this.iScroll.disable();
  }
}
test624: {
  function f() {
    return this.iScroll.options.scrollY ? this.scrollTo(this.iScroll.x, 0, e, t) : void this.scrollTo(0, this.iScroll.y, e, t);
  }
}
test625: {
  function f() {
    return this.iScroll.options.scrollY ? this.scrollTo(this.iScroll.x, this.iScroll.maxScrollY, e, t) : void this.scrollTo(this.iScroll.maxScrollX, this.iScroll.y, e, t);
  }
}
test626: {
  function f() {
    return t.MSPointerEvent ? "MSPointer" + e.charAt(9).toUpperCase() + e.substr(10) : e;
  }
}
test627: {
  function f() {
    return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375;
  }
}
test628: {
  function f() {
    return 0 === e ? 0 : 1 == e ? 1 : i * n.pow(2, -10 * e) * n.sin((e - t / 4) * (2 * n.PI) / t) + 1;
  }
}
test629: {
  function f() {
    return a != this.x || s != this.y ? ((a > 0 || a < this.maxScrollX || s > 0 || s < this.maxScrollY) && (u = l.ease.quadratic), void this.scrollTo(a, s, d, u)) : void this._execEvent("scrollEnd");
  }
}
test630: {
  function f() {
    return f >= u ? (a.isAnimating = !1, a._translate(e, t), void (a.resetPosition(a.options.bounceTime) || a._execEvent("scrollEnd"))) : (f = (f - d) / i, m = n(f), h = (e - s) * m + s, p = (t - c) * m + c, a._translate(h, p), void (a.isAnimating && r(o)));
  }
}
test631: {
  function f() {
    return e.isAlliancePrismFight ? void l.open("social", {
      tabId: "alliance",
      tabParams: {
        tabId: "attacks"
      }
    }) : e.isTaxCollectorFight ? void l.open("social", {
      tabId: "guild",
      tabParams: {
        tabId: "perceptors"
      }
    }) : void window.dofus.sendMessage("GameFightJoinRequestMessage", {
      fighterId: e.leaderId,
      fightId: e.fightId
    });
  }
}
test632: {
  function f() {
    return i ? void o.disable() : (o.elementId = r.elementId, void (o.skill = t));
  }
}
test633: {
  function f() {
    return t.feedingBox.possessFeedItemForPet(s._item) ? void p.open("feed", {
      mode: "pet",
      item: s._item
    }) : window.gui.openSimplePopup(d("ui.item.errorNoFoodLivingItem", e.nameId));
  }
}
test634: {
  function f() {
    return e.item.type.needUseConfirm ? void window.gui.openConfirmPopup({
      title: d("ui.common.confirm"),
      message: d("ui.common.confirmationUseItem", e.item.nameId),
      cb: function (t) {
        t && l(e.objectUID);
      }
    }) : void l(e.objectUID);
  }
}
test635: {
  function f() {
    return 1 === e.quantity ? void window.gui.playerData.inventory.confirmDestroyItem(e, 1) : void i("destroy", 1, e.quantity);
  }
}
test636: {
  function f() {
    return n.openState ? i && i !== n.mode ? (n.openOnItem = t, R) : (I.focusWindow(e), t && n.navigateToItem(t) ? P : D) : (n.openOnItem = t, R);
  }
}
test637: {
  function f() {
    return 0 !== i ? i : e.nameId.localeCompare(t.nameId);
  }
}
test638: {
  function f() {
    return e === this.liveItemTypeId ? (this._categoryToDisplayItems = this.liveItems, this._refreshDisplayedItems()) : (I.close("tradeItem"), this._categoryToDisplay = e, void (this._requestedCategories.indexOf(e) === -1 && (this._requestedCategories.push(e), this.liveItemTypeId = e, this.liveItems = null, this.shopViewer.setPlaceholder(" "), this.shopViewer.table.placeholder.frame.addClassNames("spinner"), window.dofus.sendMessage("ExchangeBidHouseTypeMessage", {
      type: e
    }))));
  }
}
test639: {
  function f() {
    return this === e.currentSubitem ? e.toggleBreadcrumb(!0) : void e._selectSubitem(this);
  }
}
test640: {
  function f() {
    return e ? [e.myTopItem.id, e.getWuiName()] : null;
  }
}
test641: {
  function f() {
    return t ? (t.subitemList || this._createSubitemList(t), t.subitemList.getChild(e[1])) : null;
  }
}
test642: {
  function f() {
    return this.isSelected ? void (e.options.disableSelectionToggle || e.deselectItem(t)) : e.selectItem(t);
  }
}
test643: {
  function f() {
    return e ? (this.frame || (this.frame = this.parent.createChild("div", {
      className: "placeholderFrame"
    }), this.options.headerElement && this.frame.addClassNames("withHeader"), this.text = this.frame.createChild("div", {
      className: "placeholderText"
    })), this.options.noHeight || this._computeHeight(), this.text.setText(e), void this.frame.show()) : this.frame && this.frame.hide();
  }
}
test644: {
  function f() {
    return this.empty ? 0 : (this.last - this.first + this.maxSize) % this.maxSize + 1;
  }
}
test645: {
  function f() {
    return t ? t.price : -1;
  }
}
test646: {
  function f() {
    return t.playerData && t.playerData.characterBaseInformations && i === t.playerData.characterBaseInformations.id && t.playerData.inventory.objects[e] ? void setTimeout(function () {
      t.playerData && t.playerData.characterBaseInformations && i === t.playerData.characterBaseInformations.id && t.playerData.inventory.objects[e] && M.dofus.sendMessage("ObjectUseMessage", {
        objectUID: e
      }), n();
    }, A) : n();
  }
}
test647: {
  function f() {
    return d.length ? void u.each(d, function (e, t) {
      return e.loaded ? t() : e.once("loaded", t);
    }, e) : e();
  }
}
test648: {
  function f() {
    return e.loaded ? t() : e.once("loaded", t);
  }
}
test649: {
  function f() {
    return r.length ? void u.series([n, o], function (t) {
      return t ? e(t) : void f.initializeList(c, e);
    }) : e();
  }
}
test650: {
  function f() {
    return t ? e(t) : void f.initializeList(c, e);
  }
}
test651: {
  function f() {
    return d.length || r.length ? void u.parallel([s, a], function (e) {
      return e ? t(e) : t(null, i());
    }) : t(null, i());
  }
}
test652: {
  function f() {
    return e ? t(e) : t(null, i());
  }
}
test653: {
  function f() {
    return a(e) ? t(i) : (x = e, L = t, M.dofus.sendMessage("ExchangeBidHousePriceMessage", {
      genId: e
    }), void (E[e] = new n(i, Date.now())));
  }
}
test654: {
  function f() {
    return C ? C : void console.error(new Error("Fatal error: item types not loaded"));
  }
}
test655: {
  function f() {
    return c.filterEquipment[e] ? t.equipment : c.filterConsumables[e] ? t.consumables : c.filterRessources[e] ? t.resources : c.filterQuest[e] ? t.quest : t.preset;
  }
}
test656: {
  function f() {
    return e.criteria ? (e.conditions = r.createGroupCriterion(e.criteria, e), void o(e.conditions, e, t)) : t();
  }
}
test657: {
  function f() {
    return e.criteriaTarget ? (e.targetConditions = r.createGroupCriterion(e.criteriaTarget, e), void o(e.targetConditions, e, t)) : t();
  }
}
test658: {
  function f() {
    return e.type.superTypeId !== p.PET ? t() : (e.foodItems = [], e.foodTypes = [], void h.getData("Pets", e.id, function (i, n) {
      return i || !n ? t() : (e.foodItems = n.foodItems, e.foodTypes = n.foodTypes, t());
    }));
  }
}
test659: {
  function f() {
    return i || !n ? t() : (e.foodItems = n.foodItems, e.foodTypes = n.foodTypes, t());
  }
}
test660: {
  function f() {
    return i.length ? void h.getDataMap("ItemSets", i, function (e, i) {
      if (e) return t(e);
      for (var o = 0; o < n.length; o++) {
        var a = n[o],
          s = i[a.itemSetId];
        s ? a.itemSetName = s.nameId : (m.error(new Error("ItemSet id " + a.itemSetId + " for item id " + a.id + " does not exist.")), a.itemSetName = null);
      }
      return t();
    }) : t();
  }
}
test661: {
  function f() {
    return this._simplifiedName ? this._simplifiedName : (this._simplifiedName = d.simplifyString(this.nameId), this._simplifiedName);
  }
}
test662: {
  function f() {
    return "nameId" === e ? this.getName() : "conditionsFormatted" === e ? this._getConditionsFormatted() : "targetConditionsFormatted" === e ? this._getTargetConditionsFormatted() : "statsFormatted" === e ? this._getStatsFormatted() : ("weight" === e && (e = "realWeight"), this.hasOwnProperty(e) ? this[e] : _[e]);
  }
}
test663: {
  function f() {
    return J[i] ? new J[i](e, t) : void console.warn("unknown criterion: " + i);
  }
}
test664: {
  function f() {
    return this.operator ? this.operator.text : "";
  }
}
test665: {
  function f() {
    return this.operator ? this.operator.text : "";
  }
}
test666: {
  function f() {
    return i ? e(i) : (t._valueText = " '" + n.nameId + "'", t._keyText = a("ui.tooltip.unlockAchievement", [t._valueText]), void e());
  }
}
test667: {
  function f() {
    return this.operator === o.operators.different ? a("ui.tooltip.dontUnlockAchievement", [this._valueText]) : o.prototype.getOperatorText.call(this);
  }
}
test668: {
  function f() {
    return this.operator === o.operators.different ? " " + a("ui.common.differentFrom") + a("ui.common.colon") : o.prototype.getOperatorText.call(this);
  }
}
test669: {
  function f() {
    return e.type && e.hasOwnProperty("id") && g[e.type] ? h.entities[e.type][e.id] : console.log("wrong fight object");
  }
}
test670: {
  function f() {
    return i ? void n(g.prism, t.subAreaId, t) : console.warn("unknown prism", t.subAreaId);
  }
}
test671: {
  function f() {
    return "AllianceInsiderPrismInformation" === this.prism._type ? window.gui.playerData.alliance.current : this.prism.alliance;
  }
}
test672: {
  function f() {
    return e.hasAlliance() ? e.current.enabled ? 2 : 1 : 0;
  }
}
test673: {
  function f() {
    return this.operator === a.operators.equal ? t : this.operator === a.operators.equal && !t;
  }
}
test674: {
  function f() {
    return this.operator === o.operators.equal ? a("ui.tooltip.beInArea", [t]) : a("ui.tooltip.dontBeInArea", [t]);
  }
}
test675: {
  function f() {
    return n ? (console.error("ServerDetails setServer error", n), e(n)) : (t._communityName = i.staticContent.communities[t._communityId], void e());
  }
}
test676: {
  function f() {
    return this.operator === o.operators.equal ? a("ui.criterion.community", [this._communityName]) : a("ui.criterion.notCommunity", [this._communityName]);
  }
}
test677: {
  function f() {
    return t ? e(t) : (l[i.id] = i, n._emoticonData = i, void e());
  }
}
test678: {
  function f() {
    return this.operator === o.operators.superior ? a("ui.pvp.giftRequired", [t + " > " + this._giftLevel]) : a("ui.pvp.giftRequired", [t]);
  }
}
test679: {
  function f() {
    return e.hasGuild() ? e.current.enabled ? 2 : 1 : 0;
  }
}
test680: {
  function f() {
    return e.hasGuild() ? e.current.guildLevel : 0;
  }
}
test681: {
  function f() {
    return this.operator === o.operators.equal ? a("ui.criterion.guildRights", [e]) : a("ui.criterion.notGuildRights", [e]);
  }
}
test682: {
  function f() {
    return this.operator === o.operators.equal ? t : !t;
  }
}
test683: {
  function f() {
    return i ? e(i) : (t._jobName = n && n.nameId, void e());
  }
}
test684: {
  function f() {
    return null !== window.gui.playerData.socialData.spouse ? 1 : 2;
  }
}
test685: {
  function f() {
    return a ? (i._objectName = a.nameId, void e()) : e("ObjectItemCriterion: unable to find item id " + t);
  }
}
test686: {
  function f() {
    return this.operator === o.operators.different ? a("ui.common.doNotPossess", [this._objectName]) : a("ui.common.doPossess", [this._objectName]);
  }
}
test687: {
  function f() {
    return d[e] ? d[e] : o(e, ["CS", "Cs", "CV", "Cv", "CA", "Ca", "CI", "Ci", "CW", "Cw", "CC", "Cc", "<NO>", "PG", "PJ", "Pj", "PM", "PA", "PN", "PE", "<NO>", "PS", "PR", "PL", "PK", "Pg", "Pr", "Ps", "Pa", "PP", "PZ", "CM", "Qa", "<NO>", "<NO>", "ca", "cc", "ci", "cs", "cv", "cw"], u);
  }
}
test688: {
  function f() {
    return g[this.key] ? parseInt(g[this.key](e), 10) : (console.error("unknown criterion key: " + this.key), 0);
  }
}
test689: {
  function f() {
    return i ? e("QuestItemCriterion#initialize", i) : (n[t.value] ? t._quest = n[t.value] : l.error("QuestItemCriterion#initialize: cannot get questId", t.value), void e());
  }
}
test690: {
  function f() {
    return "=" === this.operator.token ? t : !t;
  }
}
test691: {
  function f() {
    return i ? e("QuestObjectiveCriterion#initialize", i) : (t._stepId = n[t.value] && n[t.value].stepId, void e());
  }
}
test692: {
  function f() {
    return this.operator === o.operators.different ? a("ui.common.differentFrom") + " >" : ">";
  }
}
test693: {
  function f() {
    return this.operator === o.operators.equal && 1 === this.value || this.operator === o.operators.different && 0 === this.value ? a("ui.tooltip.mountEquiped") : this.operator === o.operators.equal && 1 === this.value || this.operator === o.operators.different && 0 === this.value ? a("ui.tooltip.mountNonEquiped") : "";
  }
}
test694: {
  function f() {
    return window.gui.playerData.isRiding ? 1 : 0;
  }
}
test695: {
  function f() {
    return i ? e(i) : (t._serverName = n.nameId, void e());
  }
}
test696: {
  function f() {
    return window.gui.playerData.characterBaseInformations.sex ? 1 : 0;
  }
}
test697: {
  function f() {
    return t ? e(t) : (n._monsterName = i.nameId, void e());
  }
}
test698: {
  function f() {
    return i ? e(i) : (t._name = n.nameId, void e());
  }
}
test699: {
  function f() {
    return e.isSubscriberAtMinLevel(r.NORMAL) || e.identification.hasRights ? 1 : 0;
  }
}
test700: {
  function f() {
    return window.gui.playerData.isRiding ? this.value : null;
  }
}
test701: {
  function f() {
    return window.gui.playerData.inventory.equippedItems[this.value] ? this.value : null;
  }
}
test702: {
  function f() {
    return i ? e("SpellLevelItemCriterion#initialize", i) : (n[t.value] ? t._spellId = n[t.value].spellId : l.error("SpellLevelItemCriterion#initialize: cannot get SpellLevelId", t.value), void e());
  }
}
test703: {
  function f() {
    return n.length ? void p.getDataMap("LivingObjectSkinJntMood", n, function (n, a) {
      if (n) return t(n);
      for (var s = 0; s < e.length; s++) if (void 0 !== o[s]) {
        var r = e[s];
        if (void 0 !== a[o[s]]) {
          var l = a[o[s]].moods;
          r.iconId = l[r.livingObjectMood][r.livingObjectSkin - 1], i.push(r);
        } else console.error("Cannot find the moods for " + r.objectGID);
      }
      t();
    }) : t();
  }
}
test704: {
  function f() {
    return s ? (o = Object.keys(o), void p.getDataMap("Monsters", o, function (t, o) {
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
    })) : i();
  }
}
test705: {
  function f() {
    return n ? i(n) : void r(e, t, i);
  }
}
test706: {
  function f() {
    return this.hasOwnProperty(e) ? this[e] : this.item.getProperty(e);
  }
}
test707: {
  function f() {
    return this.itemTypes[t] ? (this.itemTypes[t]++, !1) : (this.itemTypes[t] = 1, !0);
  }
}
test708: {
  function f() {
    return t ? t.rowContent : null;
  }
}
test709: {
  function f() {
    return 0 === t.length ? s.call(e.cancelBtn) : !e.isLiveSearch && t.length < p ? u.showNotification(l("ui.common.searchFilterTooltip"), e) : void (t !== e.lastEmittedValue && (e.lastEmittedValue = t, e.searchInput.blur(), e.emit("search", t)));
  }
}
test710: {
  function f() {
    return i ? void (i.hidden = !!t) : console.warn("Invalid selector option", e);
  }
}
test711: {
  function f() {
    return a.exoticEffects[i.id] ? -1 : a.exoticEffects[n.id] ? 1 : i.category === n.category && n.category === s.damage ? 0 : i.effectPriority - n.effectPriority;
  }
}
test712: {
  function f() {
    return n ? this.sortEffects(n) : [];
  }
}
test713: {
  function f() {
    return e.localeCompare ? e.localeCompare(t) : e > t ? 1 : t > e ? -1 : 0;
  }
}
test714: {
  function f() {
    return this.content && "function" == typeof this.content.getText ? this.content.getText() : null;
  }
}
test715: {
  function f() {
    return i ? ("string" == typeof t ? i.content.setText(t) : (i.content.clearContent(), i.content.appendChild(t)), void i.sorter.toggleClassName("noText", !t)) : console.error("setColumnHeader: invalid colId:", e);
  }
}
test716: {
  function f() {
    return i ? void i.sorter.toggleClassName("noTriangle", !!t) : console.error("setSortingHintVisible: invalid colId:", e);
  }
}
test717: {
  function f() {
    return n ? n.content : console.error(new Error("Column id unknown " + t));
  }
}
test718: {
  function f() {
    return t ? void w.tween(n, {
      webkitTransform: "translate3d(-100%,0,0)"
    }, {
      time: T,
      easing: "ease-out"
    }, i) : i();
  }
}
test719: {
  function f() {
    return t ? console.warn("Spinner already set for " + e) : (this.locks[e] = !0, this.element.addClassNames("spinner"), void (this.isAddingClasses && this.element.addClassNames(e)));
  }
}
test720: {
  function f() {
    return t ? l[this.mountData.mountLocation][e] : null;
  }
}
test721: {
  function f() {
    return this.isVisible() && this.rootElement.clientWidth ? (this.mustResize = !1, void this._serenityGauge.resize()) : this.once("show", this._resize.bind(this));
  }
}
test722: {
  function f() {
    return this.maxValue ? e + this.value + " / " + this.maxValue : e + this.value + "%";
  }
}
test723: {
  function f() {
    return this.maxValue ? e + this.humanValue + " / " + this.maxValue : e + this.humanValue + "%";
  }
}
test724: {
  function f() {
    return this.isEnabled === !1 ? new l("div", {
      className: "disabledTooltipFeature",
      text: this.tooltipText
    }) : this.tooltipText;
  }
}
test725: {
  function f() {
    return e ? console.error(e) : void ("" !== i && (t.uniqueDrops.setText(s("ui.legendaryWeapon.possibleDrop", i)), t.uniqueDrops.show()));
  }
}
test726: {
  function f() {
    return t ? e(t) : void o.getDataArray("Items", Object.keys(i), function (t, n) {
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
      return l = i, r = !0, e();
    });
  }
}
test727: {
  function f() {
    return r ? e(null, l) : n(function (t) {
      return e(t, l);
    });
  }
}
test728: {
  function f() {
    return r ? e(null, c) : n(function (t) {
      return e(t, c);
    });
  }
}
test729: {
  function f() {
    return l.length < 3 ? (a.replaceClassNames([o], ["deadLink"]), console.error("To have a content on the tooltip, res[2] is required")) : O(a, l[2], {
      openOnTap: !0
    });
  }
}
test730: {
  function f() {
    return t ? console.error("Broken link item:", e) : void I.open("itemRecipes", {
      itemData: i[0]
    });
  }
}
test731: {
  function f() {
    return "bidHouseShop" === e[1] ? E.openBidHouse(!1) : void I.open(e[1]);
  }
}
test732: {
  function f() {
    return i < 0 ? e.substring(t) : e.substring(t, i + 1);
  }
}
test733: {
  function f() {
    return (i <= 255 ? s(n) : o(i)) ? n : e;
  }
}
test734: {
  function f() {
    return i && i instanceof l ? void (i.isVisible() && (n(i, "upLeft"), o(d))) : console.warn("The dom " + e + " does not exist");
  }
}
test735: {
  function f() {
    return e.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
  }
}
test736: {
  function f() {
    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? p(e, t, i, n) : "string" == typeof t ? u(e, t, i) : m(e, t);
  }
}
test737: {
  function f() {
    return "number" != typeof i.length || K(i.length) ? s(t, 0) : h(t, i);
  }
}
test738: {
  function f() {
    return 0 === i.length ? -1 : b(t, i, n, o, a);
  }
}
test739: {
  function f() {
    return 1 === s ? e[t] : e.readUInt16BE(t * s);
  }
}
test740: {
  function f() {
    return 0 === t && i === e.length ? J.fromByteArray(e) : J.fromByteArray(e.slice(t, i));
  }
}
test741: {
  function f() {
    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
  }
}
test742: {
  function f() {
    return e < 16 ? "0" + e.toString(16) : e.toString(16);
  }
}
test743: {
  function f() {
    return n < o ? -1 : o < n ? 1 : 0;
  }
}
test744: {
  function f() {
    return 0 === e ? "" : 0 === arguments.length ? N(this, 0, e) : v.apply(this, arguments);
  }
}
test745: {
  function f() {
    return s < r ? -1 : r < s ? 1 : 0;
  }
}
test746: {
  function f() {
    return 32768 & i ? 4294901760 | i : i;
  }
}
test747: {
  function f() {
    return 32768 & i ? 4294901760 | i : i;
  }
}
test748: {
  function f() {
    return s ? NaN : (p ? -1 : 1) * (1 / 0);
  }
}
test749: {
  function f() {
    return "md5" === e ? new a() : "rmd160" === e ? new s() : o(e);
  }
}
test750: {
  function f() {
    return e ? i.toString(e) : i;
  }
}
test751: {
  function f() {
    return m.length ? m.pop().init() : this instanceof i ? (this._w = p, t.call(this, 64, 56), this._h = null, void this.init()) : new i();
  }
}
test752: {
  function f() {
    return e < 20 ? t & i | ~t & n : e < 40 ? t ^ i ^ n : e < 60 ? t & i | t & n | i & n : t ^ i ^ n;
  }
}
test753: {
  function f() {
    return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514;
  }
}
test754: {
  function f() {
    return e ? 0 !== (e.capabilities & k) : (console.warn("isAggressionAllowedOnMap called before we know mapPosition"), !1);
  }
}
test755: {
  function f() {
    return n.getRestrictions().cantAttack || i ? P : B;
  }
}
test756: {
  function f() {
    return _ + v < e.characterPower - h ? D : B;
  }
}
test757: {
  function f() {
    return o ? i(o) : void c.getData(n.dbName, t, function (e, a) {
      return e ? (console.warn("ContextualMenuTaxCollector", e), i("")) : (o = n.cached[t] = a[n.attribute], void i(o));
    });
  }
}
test758: {
  function f() {
    return e ? (console.warn("ContextualMenuTaxCollector", e), i("")) : (o = n.cached[t] = a[n.attribute], void i(o));
  }
}
test759: {
  function f() {
    return this._handlerMap[t] ? console.error("dupe listener: " + e.constructor.name + " on " + t) : (this._handlerMap[t] = [e, i], void e.on(t, i));
  }
}
test760: {
  function f() {
    return o && s ? (s = !1, document.removeEventListener("push-notification", n, !1), void o.unregisterDevice(function () {
      console.info("Unregistered push notifications"), window.gui.playerData.setPushToken(""), e();
    }, function (t) {
      window.gui.playerData.setPushToken(""), e("Error unregistering push notifications: " + t.error);
    })) : e();
  }
}
test761: {
  function f() {
    return e ? a(e) : (l(), void M.enable(function (e) {
      if (e) return a(e);
    }));
  }
}
test762: {
  function f() {
    return !n() || y ? e() : (y = !0, void u.hasPermission(function (t) {
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
    }));
  }
}
test763: {
  function f() {
    return n() && y ? (y = !1, u.cancelAll(), console.info("Unregistered local notifications"), void e()) : e();
  }
}
test764: {
  function f() {
    return !t || !i || i < 0 ? console.error("invalid quantity change from " + i + " to " + t) : void this.emit("itemQuantityChanged", n, i);
  }
}
test765: {
  function f() {
    return e <= 40 ? String.fromCharCode(Math.floor(26 * Math.random()) + 65) : e <= 80 ? String.fromCharCode(Math.floor(26 * Math.random()) + 97) : String.fromCharCode(Math.floor(10 * Math.random()) + 48);
  }
}
test766: {
  function f() {
    return e ? C.MANDATORY : t ? C.POSSIBLE : C.IMPOSSIBLE;
  }
}
test767: {
  function f() {
    return n ? i : null;
  }
}
test768: {
  function f() {
    return e < 1 ? void console.error(new Error("characterSelection: characterId should be positive")) : void window.dofus.sendMessage("CharacterSelectionMessage", {
      id: e
    });
  }
}
test769: {
  function f() {
    return t.iconDetailsListByChallengeId[e.challengeId] ? void t.setChallengeResult(e) : void (t.challengesResult[e.challengeId] = e);
  }
}
test770: {
  function f() {
    return e.getDom ? void window.gui.textNotification.add(e.getDom(), {
      channel: t
    }) : void console.error(new Error("Chat wrong object for bubble"));
  }
}
test771: {
  function f() {
    return "" === i.inputChat.getValue() ? M.hide() : void i._submit();
  }
}
test772: {
  function f() {
    return 0 === e ? o : this._buffer[e - 1];
  }
}
test773: {
  function f() {
    return e ? t ? "{player," + e + "," + t + ",channel:" + this._channel.toString() + "}" : e : "unknownPlayer";
  }
}
test774: {
  function f() {
    return this._dom ? this._dom : (this._dom = new this._wuidom("div", {
      className: "messageWrapper"
    }), this._contentDom = this._createMessageContent(), this._dom.appendChild(this._contentDom), this._dom);
  }
}
test775: {
  function f() {
    return t === p.AWAKENING ? void u.open("legendaryWeaponAwakeningWindow") : void i.prepareSkillRecipes(t, function (n) {
      if (n) return console.error("Craft: prepareSkillRecipes", t, n);
      var o = i.getCraftType(t),
        a = "craftMagus" === o ? "craftMagus" : "crafting";
      u.openDialog([a, "craftInventory"], {
        type: o,
        msg: e
      });
    });
  }
}
test776: {
  function f() {
    return t ? e(t) : (window.gui.databases = i, void e());
  }
}
test777: {
  function f() {
    return i ? t("GPS cannot load MapPositions for map " + e + ": " + i) : n.subAreaId ? void d.getObject("SubAreas", n.subAreaId, function (i, o) {
      if (i) return t("GPS cannot load subarea " + n.subAreaId + ": " + i);
      var a,
        s = o.entranceMapIds || [],
        r = o.exitMapIds || [],
        l = window.gui.databases,
        c = l.Areas[o.areaId],
        u = l.SuperAreas[c.superAreaId],
        h = o.customWorldMap[0] || u.worldmapId,
        p = window.gui.playerData.position.worldmapId;
      return p !== h && (a = p === f ? s[0] : r[0]), void 0 === a ? t(null, {
        x: n.posX,
        y: n.posY,
        mapId: e,
        worldMapId: h
      }) : void d.getObject("MapPositions", a, function (e, i) {
        return e ? t("GPS cannot load MapPositions fo map " + a + ": " + e) : void t(null, {
          x: i.posX,
          y: i.posY,
          mapId: a,
          worldMapId: h
        });
      });
    }) : t(null, {
      x: n.posX,
      y: n.posY,
      mapId: e
    });
  }
}
test778: {
  function f() {
    return e ? t("GPS cannot load MapPositions fo map " + a + ": " + e) : void t(null, {
      x: i.posX,
      y: i.posY,
      mapId: a,
      worldMapId: h
    });
  }
}
test779: {
  function f() {
    return t < 0 ? 0 : parseInt(e.id.slice(t + 6), 10);
  }
}
test780: {
  function f() {
    return e ? console.error("questId: " + n + ", objectiveId: " + i + ", error: " + e) : (o = o || t.coords, void s.addQuestObjectiveFromObjective({
      objectiveDb: t,
      objectiveId: i,
      coords: o,
      questId: n
    }));
  }
}
test781: {
  function f() {
    return n ? e.addOrUpdateSpouse(n.spouseName, null, t.worldX, t.worldY) : console.error("Spouse does not exist");
  }
}
test782: {
  function f() {
    return o ? (e._lastPartyMemberId = o.id, e.updatePOI({
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
    })) : void console.warn("Party member", t.memberId, "does not exist.");
  }
}
test783: {
  function f() {
    return n ? (this.followedQuests[e] = !0, this._save(), n.objectives ? void (t && i.GPS.addQuestNextObjective(e)) : console.warn("followQuest: quest id " + e + " has no objectives")) : console.warn("followQuest: quest id " + e + " is not active");
  }
}
test784: {
  function f() {
    return i ? (e._myHouse = n.currentHouse, e._onSale = Boolean(n.currentHouse.price), e._locked = n.currentHouse.isLocked, e._updateIcon(), void e.show()) : (e.hide(), void e._reset());
  }
}
test785: {
  function f() {
    return i ? e(i) : (t.staticContent = {}, t.staticContent.data = n.Servers, t.staticContent.gameTypes = n.ServerGameTypes, t.staticContent.populations = n.ServerPopulations, t.staticContent.communities = n.ServerCommunities, e());
  }
}
test786: {
  function f() {
    return i ? e(i) : void f(t.serversRawData, t.staticContent, _().gui.playerData.identification.communityId, e);
  }
}
test787: {
  function f() {
    return n && "none" !== n ? t(null, n) : t(null, i);
  }
}
test788: {
  function f() {
    return e ? (o.call(this, "div", e), this.addClassNames(["Table", e.className]), this._rows = [], this._rowCount = 0, this._hiddenRowIds = [], this._clickable = !1, this._colIds = e.colIds, this._minRows = e.minRows || 0, this._colCount = this._colIds ? this._colIds.length : e.colCount || 1, this._defaultRowContent = e.defaultRowContent || [], this._highlightable = e.highlightable, this._disableAutoSelect = e.disableAutoSelect, this._autoUpdateRowColor = !e.disableRowColor, e.headerContent && (this.header = this.createChild("div", {
      className: ["container", "header"]
    }), this._addHeader(e.headerContent)), this.content = this.createChild("div", {
      className: ["container", "content"]
    }), this.noneLabel = this.createChild("div", {
      className: "noneLabel",
      text: a("ui.common.none")
    }), e.footerContent && (this.footer = this.createChild("div", {
      className: ["container", "footer"]
    }), this._addFooter(e.footerContent)), e.onRowTap && (this._clickable = !0, this.on("selected", e.onRowTap)), void (e.minRows && this._setupDefaultRows())) : void console.error("Undefined Table 'options' parameter");
  }
}
test789: {
  function f() {
    return this._rows[e] && this._isRowEmpty(e) ? void console.warn("[Table.getRow] Row index " + e + " is empty.") : this._rows[e];
  }
}
test790: {
  function f() {
    return "content" !== t ? n : (this._rows.push(n), e ? (!this._highlightable || this._lastSelected || this._disableAutoSelect || this.highlight(0), n) : void 0);
  }
}
test791: {
  function f() {
    return e ? console.error(e) : void ("" !== i && (t.uniqueDropsElement.setText(p("ui.legendaryWeapon.possibleDrop", i)), t.uniqueDropsElement.show()));
  }
}
test792: {
  function f() {
    return this.currentOpenedId === e ? this.hideDialog(e) : void this.showDialog(e);
  }
}
test793: {
  function f() {
    return 1 === this.replies.length ? this._sendReply(0) : void this._highlightReplies();
  }
}
test794: {
  function f() {
    return e > this.maxValue ? g.showNotification(d("tablet.common.maxValue", h.intToString(this.maxValue)), this.keyMap.ENTER) : e < this.minValue ? g.showNotification(d("tablet.common.minValue", h.intToString(this.minValue)), this.keyMap.ENTER) : (this.inputBox.setValue(e, !0), void this.hide());
  }
}
test795: {
  function f() {
    return e === g.PARTY_TYPE_ARENA ? g.PARTY_TYPE_CLASSICAL : g.PARTY_TYPE_ARENA;
  }
}
test796: {
  function f() {
    return o > a ? -1 : o === a && o * s / l > a * r / c ? -1 : 1;
  }
}
test797: {
  function f() {
    return t ? this.partyBoxes.getChild(t) : null;
  }
}
test798: {
  function f() {
    return e ? void (this.loginName = e) : console.error(new Error("PlayerData.setLoginName: login is emtpy"));
  }
}
test799: {
  function f() {
    return t.indexOf(e.toString()) === -1 ? 0 : d;
  }
}
test800: {
  function f() {
    return t.invitationState !== l.SOCIAL_GROUP_INVITATION_SENT ? c.close("cancel") : void e.openCancelPopup({
      title: s("ui.common.invitation"),
      message: s("ui.craft.waitForCraftClient", t.recrutedName),
      cb: function () {
        window.dofus.sendMessage("AllianceInvitationAnswerMessage", {
          accept: !1
        });
      }
    });
  }
}
test801: {
  function f() {
    return this._isUnknown ? null : this._countByGid[e] || 0;
  }
}
test802: {
  function f() {
    return t ? (t.disconnect(), void delete this.slaves[e]) : void console.error(new Error("CharactersData: Cannot remove slave " + e));
  }
}
test803: {
  function f() {
    return this.controlledCharacterId === this.mainCharacterId ? this.mainCharacter : this.slaves[this.controlledCharacterId];
  }
}
test804: {
  function f() {
    return e === this.mainCharacterId ? this.mainCharacter : this.slaves[e];
  }
}
test805: {
  function f() {
    return this.mainCharacter && this.mainCharacter.characteristics ? void (this.mainCharacter.characteristics.lifePoints >= this.mainCharacter.characteristics.maxLifePoints ? this.stopRegen() : this.setCharacteristic(this.mainCharacter, "lifePoints", this.mainCharacter.characteristics.lifePoints + 1)) : void this.stopRegen();
  }
}
test806: {
  function f() {
    return i.characterBreed ? void t(e) : i.once("setCharacterBreed", function () {
      t(e);
    });
  }
}
test807: {
  function f() {
    return e ? console.error(e) : void o();
  }
}
test808: {
  function f() {
    return e ? console.error(e) : void M.emit("itemAdded", t.array[0]);
  }
}
test809: {
  function f() {
    return t.retry(new Error("Preset is missing for presetId " + i.presetId)) ? void console.warn("Preset is missing for presetId " + i.presetId + " will retry...") : void console.error(t.mainError());
  }
}
test810: {
  function f() {
    return i ? (i.position !== u.notEquipped && (delete M.equippedItems[i.position], i.position === u.weapon && M.emit("weaponChanged")), i.emit("deleted"), delete M.objects[e], t(), i) : console.error("[ObjectDeletedMessage] unknown object UID");
  }
}
test811: {
  function f() {
    return e ? console.error(e) : void M.emit("itemsAdded", t.map);
  }
}
test812: {
  function f() {
    return M.objects[e.object.objectUID] || n.livingObjectCategory ? void (n.isInitialised && (n.emit("modified"), M.emit("itemModified", n))) : console.error("[ObjectModifiedMessage] unknown object UID");
  }
}
test813: {
  function f() {
    return t.length ? void v.getDataMap(e, t, function (t, n) {
      if (t) return i(t);
      var o = m[e];
      for (var a in n) o[a] = n[a];
      i();
    }) : i();
  }
}
test814: {
  function f() {
    return e ? i(e) : void a(Object.keys(s), function (e) {
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
  }
}
test815: {
  function f() {
    return s ? console.warn("ExchangeObjectAddedMessage received for existing object " + n) : (this._onCraftTable[n] = {
      GID: o,
      quantity: a
    }, this._stackCount++, this._stackCountPerGid[o] = (this._stackCountPerGid[o] || 0) + 1, void this.emit("objectAdded", i, t));
  }
}
test816: {
  function f() {
    return o ? (o.quantity = t.quantity, void this.emit("objectModified", t, i)) : console.error("craftObjectModified of unknown object " + n);
  }
}
test817: {
  function f() {
    return t ? t.isForgemagus || t.modifiableItemType !== -1 ? "craftMagus" : e === this.SKILLID_DECRAFT ? "decrafting" : e === this.SKILLID_WRAP_GIFT ? "wrapping" : "crafting" : console.error("Invalid skillId: " + e);
  }
}
test818: {
  function f() {
    return this._onCraftTable[e.objectUID] ? null : e.objectGID === T ? this._getSignatureRuneOnTable() : this._isMagicRuneOrPotion(e) ? this._getRuneOrPotionOnMagicTable() : this._getItemOnMagicTable();
  }
}
test819: {
  function f() {
    return this.canUseCrafterIngredient || t.objectGID === T ? ["crafting"] : [];
  }
}
test820: {
  function f() {
    return c(t) ? ["craftInventory"] : ["ingredientsBag"];
  }
}
test821: {
  function f() {
    return s.move ? {
      targets: n,
      movedQty: "max" === s.move ? o : 1
    } : {
      targets: n,
      proposedQty: "max" === s.propose ? o : 1,
      maxQty: o
    };
  }
}
test822: {
  function f() {
    return !this._getSignatureRuneOnTable() && "CLIENT" !== this.craftSide && this.canCrafterSign ? 1 : 0;
  }
}
test823: {
  function f() {
    return this._isMagicRuneOrPotion(t) ? n && !this.canUseCrafterIngredient ? 0 : i : this.isCraftableItem(t) ? n ? 0 : this._onCraftTable[t.objectUID] ? 0 : 1 : 0;
  }
}
test824: {
  function f() {
    return "SOLO" === this.craftSide ? this.getFreeSlotCount() || this._onCraftTable[t.objectUID] ? i : 0 : this.getFreeSlotCount() || this._stackCountPerGid[t.objectGID] ? i : 0;
  }
}
test825: {
  function f() {
    return t >= 1 ? void ("CRAFTER" === this.craftSide && this.isMagicCraft ? window.dofus.sendMessage("ExchangeObjectUseInWorkshopMessage", {
      objectUID: e,
      quantity: -t
    }) : window.dofus.sendMessage("ExchangeObjectMoveMessage", {
      objectUID: e,
      quantity: -t
    })) : console.error("removeItemFromCraft quantity: " + t);
  }
}
test826: {
  function f() {
    return n ? (t(n.info, e.addedOrDeleted), i()) : void v.getData("Jobs", e.jobId, function (n, o) {
      return n ? i(n) : (t(o, e.addedOrDeleted), void i());
    });
  }
}
test827: {
  function f() {
    return n ? i(n) : (t(o, e.addedOrDeleted), void i());
  }
}
test828: {
  function f() {
    return "SOLO" === this.craftSide ? this._existingSlotCount - this._stackCount + e : this._existingSlotCount - Object.keys(this._stackCountPerGid).length + e;
  }
}
test829: {
  function f() {
    return e ? console.error("AchievementCategories error", e) : (t.achievementCategories = i, void i.forEach(function (e) {
      var i = e.achievementIds.length;
      0 === e.parentId ? i > 0 && (t.categoriesTotalAchievementCount[e.id] ? t.categoriesTotalAchievementCount[e.id] += i : t.categoriesTotalAchievementCount[e.id] = i, t.categoriesAchievementCount[e.id] = i, t.categories[e.id] = e.achievementIds) : (t.categoriesTotal[e.parentId] ? t.categoriesTotal[e.parentId].push(e.id) : t.categoriesTotal[e.parentId] = [e.id], t.categoriesTotalAchievementCount[e.parentId] ? t.categoriesTotalAchievementCount[e.parentId] += i : t.categoriesTotalAchievementCount[e.parentId] = i, t.subCategoriesAchievementCount[e.id] = i, t.subCategories[e.id] = e.achievementIds);
    }));
  }
}
test830: {
  function f() {
    return 0 === this.maximumNumberOfAchievements ? 0 : Math.round(this.finishedAchievementsIds.length / this.maximumNumberOfAchievements * 100);
  }
}
test831: {
  function f() {
    return e < c ? 0 : e > d ? 0 : Math.floor(l[e - 1]);
  }
}
test832: {
  function f() {
    return this.area ? this.area.id === d : (console.warn("isInIncarnam called before we know our area"), !1);
  }
}
test833: {
  function f() {
    return this._partyType === g ? n.NUM_SLOTS_ARENA : n.NUM_SLOTS_CLASSIC;
  }
}
test834: {
  function f() {
    return n ? n.guestName : "?";
  }
}
test835: {
  function f() {
    return o ? (e._inviterName = n, window.gui.chat.p2p.sendMsg(n, "rejoinRequest", e._partyId)) : (t.shift(), t.length ? i._findOnlineInviter(e, t) : void 0);
  }
}
test836: {
  function f() {
    return e ? window.connectionManager.once("GameFightStartingMessage", function () {
      window.dofus.sendMessage("QuestListRequestMessage");
    }) : void window.dofus.sendMessage("QuestListRequestMessage");
  }
}
test837: {
  function f() {
    return p[e] ? p[e].categoryClassName : "";
  }
}
test838: {
  function f() {
    return !i.objectives[n].maxCompletion || i.objectives[n].maxCompletion < 2 ? "" : " (" + i.objectives[n].curCompletion + "/" + i.objectives[n].maxCompletion + ")";
  }
}
test839: {
  function f() {
    return t ? console.error(t) : (e.initialized = !0, void e.emit("listUpdated"));
  }
}
test840: {
  function f() {
    return t ? i(t) : (e.emit("questUpdate", s.questId), void i());
  }
}
test841: {
  function f() {
    return t ? i(t) : (r = n[a].dbQuest.repeatType === m ? e.dailyQuests : e, a === f ? (e.dailyQuests.mainQuest = n[a], e.emit("mainDQStarted", a)) : n[a].dbQuest.repeatType === m ? (e.dailyQuests.active[a] = e.dailyQuests.all[a] = n[a], e.emit("DQStarted", a), e._pendingDailyQuest === a && (delete e.dailyQuests.all[e._pendingOldDaily], delete e.dailyQuests.active[e._pendingOldDaily], e.emit("rerollDQ", {
      oldDQId: e._pendingOldDaily,
      newDQId: a
    }), e._pendingOldDaily = 0, e._pendingDailyQuest = 0)) : (e.active[a] = e.all[a] = n[a], e.emit("questStarted", a)), o(window.gui.chat, s, !!e.dailyQuests.all[a], r), void i());
  }
}
test842: {
  function f() {
    return i ? (i.stepId = t.stepId, o(window.gui.chat, i, !!e.dailyQuests.all[i.questId], e, !0), void window.dofus.sendMessage("QuestStepInfoRequestMessage", {
      questId: i.questId
    })) : void console.error(new Error("QuestStepStartedMessage: quest gone for " + t.questId));
  }
}
test843: {
  function f() {
    return i ? i(s, e, t) : t();
  }
}
test844: {
  function f() {
    return e ? console.error("Unable to load data for alignment window", e) : (t.alignmentTitles = i.AlignmentTitles, void (t.alignmentRanks = i.AlignmentRank));
  }
}
test845: {
  function f() {
    return this._url ? this._url + this._lang + "/" : null;
  }
}
test846: {
  function f() {
    return e ? i(e) : void s.getDataMap("Challenge", t, function (e, t) {
      return e ? i(e) : i(null, n, t);
    });
  }
}
test847: {
  function f() {
    return e ? i(e) : i(null, n, t);
  }
}
test848: {
  function f() {
    return e.stageLevel > t.stageLevel ? 1 : -1;
  }
}
test849: {
  function f() {
    return t ? e(t) : (i.popups = n, i._processPopups(n), e());
  }
}
test850: {
  function f() {
    return i.popups.length <= 0 || !i.alreadyOpenedPopup ? t(function (e) {
      if (e) return console.error(e);
    }) : void i._processPopupsWithTriggers();
  }
}
test851: {
  function f() {
    return Y ? V.push(e) : void (X ? J.setImmediate(function () {
      e(null, X);
    }) : (V.push(e), l()));
  }
}
test852: {
  function f() {
    return Q.isAvailable() ? e.length ? void Q.register(e, function (t) {
      return t ? _(new Error("Cannot register the purchases error: " + t)) : (le = [], void J.forEachSeries(e, function (e, t) {
        Q.getProductDetails([e], function (i, n) {
          return i ? void p(i, e, t) : void h(n, t);
        });
      }, function (t) {
        return t ? void _(new Error("PurchaseWrapper#getProductDetails failed with keys: " + e + " and error: " + t)) : (le.length && console.error("PurchaseWrapper#getProductDetails failed with keys: " + le.join(",")), de || (de = {
          platform: $.osName,
          currency: ue,
          country: he
        }), void m(de));
      }));
    }) : m({}) : _(new Error("Purchases are not available on this platform"));
  }
}
test853: {
  function f() {
    return t ? _(new Error("Cannot register the purchases error: " + t)) : (le = [], void J.forEachSeries(e, function (e, t) {
      Q.getProductDetails([e], function (i, n) {
        return i ? void p(i, e, t) : void h(n, t);
      });
    }, function (t) {
      return t ? void _(new Error("PurchaseWrapper#getProductDetails failed with keys: " + e + " and error: " + t)) : (le.length && console.error("PurchaseWrapper#getProductDetails failed with keys: " + le.join(",")), de || (de = {
        platform: $.osName,
        currency: ue,
        country: he
      }), void m(de));
    }));
  }
}
test854: {
  function f() {
    return i ? void p(i, e, t) : void h(n, t);
  }
}
test855: {
  function f() {
    return t ? void _(new Error("PurchaseWrapper#getProductDetails failed with keys: " + e + " and error: " + t)) : (le.length && console.error("PurchaseWrapper#getProductDetails failed with keys: " + le.join(",")), de || (de = {
      platform: $.osName,
      currency: ue,
      country: he
    }), void m(de));
  }
}
test856: {
  function f() {
    return e ? void Q.getPendingPurchases(function (i, n) {
      return i ? (console.error(i), window.gui.openSimplePopup(ee("tablet.shop.couldNotBuy"))) : n.length ? ne.getWindow("purchasesPending").validatePendingPurchases(n) : void ne.getWindow("shopConfirm").confirmBuy({
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
    }) : console.error(new Error("Trying to buy a non-existent article"));
  }
}
test857: {
  function f() {
    return i ? (console.error(i), window.gui.openSimplePopup(ee("tablet.shop.couldNotBuy"))) : n.length ? ne.getWindow("purchasesPending").validatePendingPurchases(n) : void ne.getWindow("shopConfirm").confirmBuy({
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
  }
}
test858: {
  function f() {
    return Q.isAlreadyOwnedError(e) ? U() : (console.error("makePurchase error: " + e), H(), void window.gui.openSimplePopup(ee("tablet.shop.validateIAPFail")));
  }
}
test859: {
  function f() {
    return "RECEIPT_ALREADY_VALIDATED" === e.reason ? void A(e.iapKey, null, function (e, t) {
      ne.getWindow("purchasesPending").validateNextPendingPurchases(e, t);
    }) : void ne.getWindow("purchasesPending").validateNextPendingPurchases(new Error("Validate pending order failed for productId: " + e.iapKey + " with reason: " + e.reason), e.iapKey);
  }
}
test860: {
  function f() {
    return e ? (console.error(new Error("Restore all purchases failed with error: " + e)), H(), void window.gui.openSimplePopup(ee("tablet.shop.restoreFailed"))) : (t = t || [], H(), void ne.getWindow("purchasesPending").validatePendingPurchases(t));
  }
}
test861: {
  function f() {
    return e ? console.error(new Error("Check pending purchases failed with error: " + e)) : void (t.length && ne.getWindow("purchasesPending").validatePendingPurchases(t));
  }
}
test862: {
  function f() {
    return Q.isAvailable() ? void Q.getProductDetails([e], function (e, n) {
      if (e) return t(e);
      var o = n.currency,
        a = n.products;
      for (var s in a) if (a.hasOwnProperty(s)) {
        var r = a[s],
          l = oe.parsePriceMicros(r.priceMicros);
        if (isNaN(l)) continue;
        i = l;
      }
      return i ? t(null, o, i) : t(new Error("No amounts."));
    }) : t(new Error("purchase not available."));
  }
}
test863: {
  function f() {
    return i ? t(null, o, i) : t(new Error("No amounts."));
  }
}
test864: {
  function f() {
    return l || 0 === l ? Math.ceil(e / l) : null;
  }
}
test865: {
  function f() {
    return r || 0 === r ? Math.ceil(e * r) : null;
  }
}
test866: {
  function f() {
    return t === 1 / 0 || t === -(1 / 0) ? (o.error(new Error("Parsed price is Infinity: " + e)), NaN) : t;
  }
}
test867: {
  function f() {
    return e.s < 0 && a ? "-" + m : m;
  }
}
test868: {
  function f() {
    return null === i ? e.toString() : (t = r(e.c), t = i <= R || i >= D ? u(t, i) : h(t, i, "0"), e.s < 0 ? "-" + t : t);
  }
}
test869: {
  function f() {
    return o ? h : (c && (h = x.div(h)), i ? h.mod(i) : s ? p(h, H, O, r) : h);
  }
}
test870: {
  function f() {
    return p ? (e.s = -i, e) : new t(m ? c : NaN);
  }
}
test871: {
  function f() {
    return m[0] ? (e.s = -i, e) : new t(p[0] ? c : 3 == O ? -0 : 0);
  }
}
test872: {
  function f() {
    return p[0] ? o(e, p, h) : (e.s = 3 == O ? -1 : 1, e.c = [e.e = 0], e);
  }
}
test873: {
  function f() {
    return u[0] ? e : new t(d[0] ? a : 0 * r);
  }
}
test874: {
  function f() {
    return e > 0 || e === t ? t : t - 1;
  }
}
test875: {
  function f() {
    return i ? n ? 0 : -r : s;
  }
}
test876: {
  function f() {
    return n ? 0 : !o ^ i ? 1 : -1;
  }
}
test877: {
  function f() {
    return l > c ^ i ? 1 : -1;
  }
}
test878: {
  function f() {
    return o[s] > a[s] ^ i ? 1 : -1;
  }
}
test879: {
  function f() {
    return l == c ? 0 : l > c ^ i ? 1 : -1;
  }
}
test880: {
  function f() {
    return i || n ? i && !n ? -1 : !i && n ? 1 : new Date(i) - new Date(n) : o - a;
  }
}
test881: {
  function f() {
    return this.gaugeMode !== d.FIGHT_TIMER ? console.error(new Error("ProgressGauge._pauseAnimation: ProgressGauge is not in timer mode")) : void this.gaugeFill.setStyle("webkitAnimationPlayState", "paused");
  }
}
test882: {
  function f() {
    return "function" != typeof e.unselect ? console.error(new Error("ExclusiveSelector.register: target does not have an unselect method")) : e.listeners("selected").indexOf(this._onSelected) !== -1 ? console.error(new Error("Dupe call to ExclusiveSelector.register")) : (e.on("selected", this._onSelected), void e.on("unselected", this._onUnselected));
  }
}
test883: {
  function f() {
    return e.listeners("selected").indexOf(this._onSelected) === -1 ? console.error(new Error("ExclusiveSelector extra unregister")) : (e.removeListener("selected", this._onSelected), void e.removeListener("unselected", this._onUnselected));
  }
}
test884: {
  function f() {
    return n === p.MOOD_ERROR_UNKNOWN ? (e.setCurrentMood(e.previousMood), t.openSimplePopup(a("ui.smiley.errorMood"))) : n === p.MOOD_ERROR_FLOOD ? (e.setCurrentMood(e.previousMood), t.openSimplePopup(a("ui.smiley.errorFloodMood"))) : (e.setCurrentMood(i.smileyId), void (e.previousMood = i.smileyId));
  }
}
test885: {
  function f() {
    return e ? console.error(new Error("Gifts module: " + e)) : i._giftList.length ? void (i.getCharaListMinusDeadPeople().length && (r.open("giftSelection", i._giftList), n = !1)) : console.error(new Error("Gifts module: _giftList is empty"));
  }
}
test886: {
  function f() {
    return e.success ? void (i._assigningGifts[e.actionId] ? (i._assigningGifts[e.actionId] = !1, i.emit("giftAssigned", e)) : (i._assigningGifts[e.actionId] = e.success, i.emit("giftAssignRequestResult", e))) : (window.gui.openSimplePopup(d("tablet.gift.unableToAssign"), d("tablet.gift.unableToAssignTitle")), void i.emit("giftAssignFailed", e));
  }
}
test887: {
  function f() {
    return t === -1 ? (console.error(new Error("No pending retry " + e)), !1) : (this.assignGift(e, window.gui.playerData.id), this._toaRetryPending.splice(t, 1), !0);
  }
}
test888: {
  function f() {
    return "narrow" === t ? (i = d.ICONBAR_TAB_WIDTH + d.ICONBAR_CORNER_WIDTH, this._iconsVisiblePerLine = ~~((e - i) / D), this._iconsVisiblePerLine * D + i) : (i = d.ICONBAR_TAB_HEIGHT, this._iconsVisiblePerColumn = ~~((e - i) / D), this._iconsVisiblePerColumn * D + i);
  }
}
test889: {
  function f() {
    return !e || "spell" !== e.type || e.isEmpty() ? null : e.shortcut.spellId;
  }
}
test890: {
  function f() {
    return this.rootElement ? (this.image = e, e = e || "none", this.icon.setStyle("backgroundImage", e), this.loadingImage = !1, this.requestedImages = null, void this.emit("setImage", this.image)) : console.warn("trying to set an image on a destroyed object");
  }
}
test891: {
  function f() {
    return this.hasTooltip ? void o.enableTooltip(this, !0) : (o.addTooltip(this, e, t || this.tooltipOptions), void (this.hasTooltip = !0));
  }
}
test892: {
  function f() {
    return this.shortcut ? this.shortcut.getHash() : null;
  }
}
test893: {
  function f() {
    return e ? (h.call(this, "div", e), this.isAlive = !0, this.tweener = null, this.timeout = null, this.isLocked = e.isLocked, this.channel = e.channel, this.decodeAllPages = e.decodeAllPages, this.msgPages = null, this.currentPage = 0, this._senderId = e.senderId, this._senderName = e.senderName, this._isNonChat = e.isNonChat || !1, this._createContent(e), this.closeFunc = this.close.bind(this), this.actionHandler = e.action, this.closeHandler = e.onClose, e.title && this.setTitle(e.title), this._setContent(e.msg, e.objectItems), this.actor = e.actor, void (e.actor && this.contentLength && this._openNextToActor())) : console.error(new Error("SpeechBubble: params is missing"));
  }
}
test894: {
  function f() {
    return null === n ? null : e.substr(0, i + n.length);
  }
}
test895: {
  function f() {
    return this.msgPages ? this.close() : this.tweener || this.timeout ? void this._freeze() : this.close();
  }
}
test896: {
  function f() {
    return t.isVisible() ? t : null;
  }
}
test897: {
  function f() {
    return e.effect.hasOwnProperty("delay") ? t + e.effect.delay : t;
  }
}
test898: {
  function f() {
    return e.effect.hasOwnProperty("delay") && e.effect.delay > 0 ? a(e) : e.castingSpell.spell.id + "#" + e.castingSpell.casterId + "#" + e.parentBoostUid;
  }
}
test899: {
  function f() {
    return e.type === d.MARK.BOMB ? e.markSize + "-" + e.sourceId + "-" + e.spellId : e.markId;
  }
}
test900: {
  function f() {
    return a.isInSpellRange(r, t) ? (this._resetData(), void this._computeSpell(a, s, r, t, {
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
    })) : i(null, []);
  }
}
test901: {
  function f() {
    return a.fromMark ? l._triggeredSpellsByGlyphs(C, t, i, n, a, e) : e();
  }
}
test902: {
  function f() {
    return !e && a ? s.eachSeries(a, function (e, n) {
      var a = e.casterId === t ? i.statsBonus : null;
      o._computeSpell(e.spell, e.casterId, e.casterCellId, e.targetCellId, {
        triggeredBy: t,
        isCriticalEffect: i.isCriticalEffect,
        statsBonus: a
      }, n);
    }, n) : n(e);
  }
}
test903: {
  function f() {
    return !e && a ? s.eachSeries(a, function (e, n) {
      var a = e.spell.ownerId === t ? i.statsBonus : null;
      o._computeSpell(e.spell, e.spell.ownerId, e.casterCellId, e.targetCellId, {
        comboBonus: e.comboBonus,
        statsBonus: a,
        specificTarget: e.target
      }, n);
    }, n) : n(e);
  }
}
test904: {
  function f() {
    return !e && a ? s.eachSeries(a, function (e, n) {
      var a = e.spell.ownerId === t ? i.statsBonus : null;
      o._computeSpell(e.spell, e.spell.ownerId, e.casterCellId, e.targetCellId, {
        specificTarget: e.target,
        isTrap: !0,
        statsBonus: a
      }, n);
    }, n) : n(e);
  }
}
test905: {
  function f() {
    return !e && a ? s.eachSeries(a, function (e, n) {
      var a = e.casterId === t ? i.statsBonus : null;
      o._computeSpell(e.spell, e.casterId, e.casterCellId, e.targetCellId, {
        isGlyph: i.isGlyph,
        isCriticalEffect: i.isCriticalEffect,
        statsBonus: a
      }, n);
    }, n) : n(e);
  }
}
test906: {
  function f() {
    return !e && r ? s.eachSeries(r, function (e, o) {
      var s = e.casterId === t ? n.statsBonus : null;
      a._computeSpell(e.spell, e.casterId, i, e.targetCellId, {
        fromMark: !0,
        statsBonus: s
      }, o);
    }, o) : o(e);
  }
}
test907: {
  function f() {
    return !e && l ? s.eachSeries(l, function (e, a) {
      r._computeSpell(e.spell, t, i, n, {
        isGlyph: !0,
        statsBonus: o.statsBonus
      }, a);
    }, a) : a(e);
  }
}
test908: {
  function f() {
    return i._spellCache[e] ? (n[e] = i._spellCache[e].clone(), t()) : void l.createSpells([e], function (o, a) {
      return o ? t(o) : (n[e] = i._spellCache[e] = a[e], t());
    });
  }
}
test909: {
  function f() {
    return o ? t(o) : (n[e] = i._spellCache[e] = a[e], t());
  }
}
test910: {
  function f() {
    return e ? t(e) : t(null, n);
  }
}
test911: {
  function f() {
    return n === -1 ? 1 : n;
  }
}
test912: {
  function f() {
    return 0 === n || t <= 0 || t >= u.UNLIMITED_ZONE_SIZE || e > t || n <= 0 ? u.DAMAGE_NOT_BOOSTED : 0 !== i ? e <= i ? u.DAMAGE_NOT_BOOSTED : Math.max(0, u.DAMAGE_NOT_BOOSTED - .01 * Math.min(e - i, o) * n) : Math.max(0, u.DAMAGE_NOT_BOOSTED - .01 * Math.min(e, o) * n);
  }
}
test913: {
  function f() {
    return !n || n.isInvisibleInFight() ? null : n;
  }
}
test914: {
  function f() {
    return m && f ? m : g && _ ? g : null;
  }
}
test915: {
  function f() {
    return e.diceNum && e.diceNum > 0 ? {
      min: e.value + e.diceNum,
      max: e.value + e.diceSide
    } : e.min && e.max ? {
      min: e.min,
      max: e.max
    } : e.value && e.value > 0 ? {
      min: e.value,
      max: e.value
    } : {
      min: 0,
      max: 0
    };
  }
}
test916: {
  function f() {
    return e.diceNum && e.diceNum > 0 ? {
      min: e.diceNum,
      max: 0 === e.diceSide ? e.diceNum : e.diceSide
    } : e.min && e.max ? {
      min: e.min,
      max: e.max
    } : e.value && e.value > 0 ? {
      min: e.value,
      max: e.value
    } : {
      min: 0,
      max: 0
    };
  }
}
test917: {
  function f() {
    return r ? r.elementId : -1;
  }
}
test918: {
  function f() {
    return t.isInMap(n.x, n.y) ? n : null;
  }
}
test919: {
  function f() {
    return a ? void t.createSpells(Object.keys(n), function (i, o) {
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
    }) : e();
  }
}
test920: {
  function f() {
    return c ? void n.createSpells(Object.keys(l), function (t, i) {
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
    }) : e();
  }
}
test921: {
  function f() {
    return n ? void t.createSpells(Object.keys(i), function (t, n) {
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
    }) : e();
  }
}
test922: {
  function f() {
    return s ? void i.createSpells(Object.keys(n), function (i, o) {
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
    }) : e();
  }
}
test923: {
  function f() {
    return l ? void n.createSpells(Object.keys(s), function (o, a) {
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
    }) : e();
  }
}
test924: {
  function f() {
    return r ? void a.createSpells(Object.keys(s), function (e, o) {
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
    }) : t();
  }
}
test925: {
  function f() {
    return c ? o.reverseSort ? -c : c : r - l;
  }
}
test926: {
  function f() {
    return e === this._parentElt && o.left === this._parentRect.left && o.top === this._parentRect.top ? this.open(i) : (this._updateContent(t, n, e, o), void this._firstOpen(i));
  }
}
test927: {
  function f() {
    return e < 0 || e >= this._entries.length ? console.warn("Invalid dropdown index", e) : void this.scroller.scrollToElement(this._entries[e], 0);
  }
}
test928: {
  function f() {
    return t.disabled ? void i.addClassNames("disabled") : (i.on("tap", o), i.dropDown = this, void (i.action = t));
  }
}
test929: {
  function f() {
    return o ? void o.update(t, i, n) : console.error("marker not found: " + e);
  }
}
test930: {
  function f() {
    return t ? (t.remove(), void delete this.markers[e]) : console.error("marker not found: " + e);
  }
}
test931: {
  function f() {
    return 0 !== i ? i : e._id > t._id ? 1 : -1;
  }
}
test932: {
  function f() {
    return 1 !== i ? "scale(" + i + ")" : "";
  }
}
test933: {
  function f() {
    return this._isOnSameMap ? "" : "rotate(" + this._arrowAngle + "deg)";
  }
}
test934: {
  function f() {
    return t ? e(t) : (C = i, void e());
  }
}
test935: {
  function f() {
    return t ? e(t) : (m(), void e());
  }
}
test936: {
  function f() {
    return i ? (e.text = a.getText("tablet.spent.hard", i), !0) : console.warn("Cannot convert currency");
  }
}
test937: {
  function f() {
    return a.playerData.guild.hasGuild() ? h : u;
  }
}
test938: {
  function f() {
    return window.gui.playerData.characterBaseInformations.level >= 50 ? h : u;
  }
}
test939: {
  function f() {
    return a.playerData.jobs && Object.keys(a.playerData.jobs.list).length > 0 ? h : u;
  }
}
test940: {
  function f() {
    return a.playerData.alliance.hasAlliance() ? h : u;
  }
}
test941: {
  function f() {
    return a.playerData.equippedMount ? h : u;
  }
}
test942: {
  function f() {
    return window.gui.playerData.achievements.finishedAchievementsIds.indexOf(c.ASTRUB_ACHIEVEMENT) !== -1 ? h : u;
  }
}
test943: {
  function f() {
    return window.gui.playerData.achievements.finishedAchievementsIds.indexOf(c.ASTRUB_ACHIEVEMENT) !== -1 ? h : u;
  }
}
test944: {
  function f() {
    return a.playerData.socialData.spouse ? h : u;
  }
}
test945: {
  function f() {
    return void 0 === this.lockStatus[e] ? (console.error(new Error("UiLocker.isFeatureLocked: featureId `" + e + "` unknown")), !0) : !(this.lockStatus[e].base !== u && !this.lockStatus[e].customLockedReasons);
  }
}
test946: {
  function f() {
    return t && i ? void this._setStatus(e, !0, t, i) : console.error(new Error("UiLocker.lockFeature: featureId: " + e + " reasonKey: " + t + " reasonDescription: " + i + " - a reasonKey and a reasonDescription are required to lock a feature"));
  }
}
test947: {
  function f() {
    return t ? void this._setStatus(e, !1, t) : console.error(new Error("UiLocker.unlockFeature: a reasonKey is required to unlock a feature"));
  }
}
test948: {
  function f() {
    return "ASC" === t ? r : -r;
  }
}
test949: {
  function f() {
    return e >= x && e < L ? p("tablet.inventory.yellowWarningTooltip") : e >= L ? p("tablet.inventory.redWarningTooltip") : "";
  }
}
test950: {
  function f() {
    return e && e.item && e.item.nameId ? t && t.item && t.item.nameId ? e.item.nameId.localeCompare(t.item.nameId) : (console.error("Missing information for " + t && t.id), 0) : (console.error("Missing information for " + e && e.id), 0);
  }
}
test951: {
  function f() {
    return i > 0 && n > 0 ? i - n : i > 0 ? 1 : n > 0 ? -1 : e.objectUID - t.objectUID;
  }
}
test952: {
  function f() {
    return i > 0 && n > 0 ? e.quantity * i - t.quantity * n : i > 0 ? 1 : n > 0 ? -1 : e.objectUID - t.objectUID;
  }
}
test953: {
  function f() {
    return n || o ? void (n && (n.setQuantity(t), this._filterItem(this.itemList[e]), this._updateFilter(), this.filterList(), this._displayPage(this.currentPage, !0), this.currentOpenedWindow && this.currentOpenedWindow.emit("itemQuantity", this.itemList[e], t))) : void console.error(new Error("No slot with item UID " + e));
  }
}
test954: {
  function f() {
    return t && this._selectSlotAndDisplayPage(t) ? t.itemInstance : null;
  }
}
test955: {
  function f() {
    return r ? void A(r, s.presetId, function (t) {
      t === _.YES ? L.saveCustom = !0 : e.setItem(i);
    }) : void console.error(new Error("PresetBox#setDeleteContextMenu: itemNameId is missing for pos " + n + " mountModel " + o + " type " + a));
  }
}
test956: {
  function f() {
    return i ? i.model ? void e.enableContextMenu(!1) : (e.enableContextMenu(!0), void e.setContextMenu("preset", {
      slot: e,
      canRemove: !0,
      onClose: t
    })) : void console.error(new Error("PresetBox#setDeleteContextMenu: itemData is missing for pos " + n + " mountModel " + o + " type " + a));
  }
}
test957: {
  function f() {
    return t ? void I(t.presetId, function (i) {
      i === _.YES ? (window.dofus.sendMessage("InventoryPresetDeleteMessage", {
        presetId: t.presetId
      }), L.addClassNames("spinner")) : e.enable();
    }) : e.enable();
  }
}
test958: {
  function f() {
    return i ? N(i) : (L._updateSetSlot(t), void e());
  }
}
test959: {
  function f() {
    return t !== _.YES ? e.addSetButton.enable() : (e._importSet(), void e._saveSet());
  }
}
test960: {
  function f() {
    return t.log ? void t.logMessage(e.content, L[e.type]) : console.warn(e.content);
  }
}
test961: {
  function f() {
    return n.length < t ? void e.logMessage("Need to be at least " + t + " letters length.", "Error") : e._searchItem.search(n, function (t, i) {
      return t ? console.error("AdminConsole items search", t) : void e.logMessage(i, "Info");
    });
  }
}
test962: {
  function f() {
    return t ? console.error("AdminConsole items search", t) : void e.logMessage(i, "Info");
  }
}
test963: {
  function f() {
    return this.history[this.history.length - 1] !== e && e ? (this.history.push(e), void (this.historyPointer = this.history.length)) : void (this.historyPointer = this.history.length);
  }
}
test964: {
  function f() {
    return s ? this.logMessage(s.getHostname(), "Debug") : (C.error(new Error("Config is missing.")), this.logMessage("Error: config error", "Error"));
  }
}
test965: {
  function f() {
    return a(null, i) ? (console.error("preload: assets missing for map id " + e), t()) : t(null, i);
  }
}
test966: {
  function f() {
    return e.length ? void h.getAllDataMap("SubAreas", function (i, n) {
      if (i) return t(i);
      var o = {};
      for (var a in n) if (n.hasOwnProperty(a)) {
        var s = n[a],
          l = s.mapIds || [];
        if (e.indexOf(s.areaId) === -1) continue;
        r(l, o);
      }
      return t(null, o);
    }) : this._onError("noArea:" + e);
  }
}
test967: {
  function f() {
    return i._shouldStop ? c.setImmediate(function () {
      return d(y);
    }) : s(n, function (s) {
      if (s) return d(s);
      delete e[n], r++;
      var c = r / a,
        u = o(c, l),
        h = r + t,
        p = a + t,
        m = h / p,
        f = Math.round(100 * m) / 100;
      return i._onStep({
        count: h,
        nbTotalMaps: p,
        percent: f,
        secondLeft: u
      }), d();
    });
  }
}
test968: {
  function f() {
    return e ? t._onError(e) : void t._preload(i, 0);
  }
}
test969: {
  function f() {
    return this._cb ? t(new Error("SEARCH_ON_GOING")) : e ? (e.replace(/[^0-9a-z ]/gi, ""), this._cb = t, void window.dofus.send("searchItemRequest", {
      search: e
    })) : t(null, "USAGE: /searchitem item_name");
  }
}
test970: {
  function f() {
    return t === -1 ? console.warn("Cannot remove unknown arena member #" + e) : (this.table.delRow(t), void this.memberCount--);
  }
}
test971: {
  function f() {
    return e.findMemberRow(t.id) >= 0 ? console.error("Dupe arena member #" + t.name) : void e.addMemberRow(t.name, t.id);
  }
}
test972: {
  function f() {
    return n ? console.error(n) : void (i.openState && i.breedId === e && i._updateSpellSlots(t));
  }
}
test973: {
  function f() {
    return i.length ? void d.createSpells(i, function (e, i) {
      if (e) return t(e);
      i = d.sortSpells(i, "minPlayerLevel");
      for (var o = 0; o < i.length; o += 1) {
        var a = i[o];
        n[a.id] = a;
      }
      t();
    }) : t();
  }
}
test974: {
  function f() {
    return e.isLoaded ? this._addCertificates(Object.keys(e.objects)) : (this.waitingGauge.showGauge(1), void (this.isWaitingForInventory = !0));
  }
}
test975: {
  function f() {
    return (t = this._findTileInRooms(i)) ? (t.mountData = this._prepareMountForRoom(e, t.room), this._refreshTile(t), void (t === this.focusedTile && this._displayMountDetails(e))) : console.error("Received data about unknown mount ", e);
  }
}
test976: {
  function f() {
    return "certificate" !== e ? t : ~~t.substr(1);
  }
}
test977: {
  function f() {
    return i.id === e ? i : null;
  }
}
test978: {
  function f() {
    return n ? e.setStyle("backgroundImage", n) : void l.preloadImage("gfx/mounts/" + t + ".png", function (n) {
      A[t] = n, e.currentModel === t && (i._hasBeenDestroyed || e.setStyle("backgroundImage", n));
    });
  }
}
test979: {
  function f() {
    return e < 0 || e >= this.states.length ? console.error("Bad state index for toggle: " + e) : void this._setValueByIndex(e);
  }
}
test980: {
  function f() {
    return i ? (t ? i.selected || (this.selectedTiles[e] = i, this.numSelected++) : i.selected && (delete this.selectedTiles[e], this.numSelected--), i.setTileSelected(t), i) : console.error("Invalid tileId:", e);
  }
}
test981: {
  function f() {
    return i() ? void window.gui.openConfirmPopup({
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
    }) : void e();
  }
}
test982: {
  function f() {
    return this.stats && this.stats[this.key] ? c(this.key, this.stats[this.key].getBaseWithoutAdditionalPts()) : 0;
  }
}
test983: {
  function f() {
    return i && i.asBytes ? n : i && i.asString ? a.bytesToString(n) : t.bytesToHex(n);
  }
}
test984: {
  function f() {
    return i ? void A(P, t) : (window.gui.chat.logMsg(y("ui.chat.calligraphyBadContext")), A(P));
  }
}
test985: {
  function f() {
    return 1 === t.quantity ? void window.gui.playerData.inventory.confirmDestroyItem(t, 1) : void e._minMaxSelector.openAround(this, {
      min: 1,
      max: t.quantity
    });
  }
}
test986: {
  function f() {
    return t._mountData ? B.open("mount") : void (t.item && window.gui.openContextualMenuAround("item", this, {
      item: t.item.getItemInstance() || t.item.getItem(),
      location: t._parentWindow ? t._parentWindow.constructor.name : "",
      enableCertificate: !0
    }));
  }
}
test987: {
  function f() {
    return t ? console.error(t) : void (e === i._mountData && i._name.setText(n.nameId));
  }
}
test988: {
  function f() {
    return this._isAdditionalPtsAssignMode ? this._additionalPtsToAssign : this._basePtsToAssign;
  }
}
test989: {
  function f() {
    return this._isAdditionalPtsAssignMode ? this._initialAdditionalPts : this._initialLevel;
  }
}
test990: {
  function f() {
    return e ? (r.close(o.id), console.warn("Documents error", e)) : (t.typeId === d && n.open(t), t.typeId === u && c.open(t), void l("OPEN_DOCUMENT"));
  }
}
test991: {
  function f() {
    return i ? t(i) : void u.getDataMap("SubAreas", Object.keys(n), function (i, n) {
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
  }
}
test992: {
  function f() {
    return "house" === e.dialogType ? (e.houseToSellFilter.maxPrice = t, window.dofus.sendMessage("HouseToSellFilterMessage", e.houseToSellFilter), void window.dofus.sendMessage("HouseToSellListRequestMessage", {
      pageIndex: 1
    })) : (e.paddockToSellFilter.maxPrice = t, window.dofus.sendMessage("PaddockToSellFilterMessage", e.paddockToSellFilter), void window.dofus.sendMessage("PaddockToSellListRequestMessage", {
      pageIndex: 1
    }));
  }
}
test993: {
  function f() {
    return "house" === t.dialogType ? void window.dofus.sendMessage("HouseToSellListRequestMessage", e) : void window.dofus.sendMessage("PaddockToSellListRequestMessage", e);
  }
}
test994: {
  function f() {
    return "house" === t.dialogType ? void window.dofus.sendMessage("HouseToSellListRequestMessage", e) : void window.dofus.sendMessage("PaddockToSellListRequestMessage", e);
  }
}
test995: {
  function f() {
    return t ? s : a;
  }
}
test996: {
  function f() {
    return r ? e(null, r) : void o.getAllDataMap("Skills", function (t, i) {
      if (t) return e(t);
      r = [];
      for (var o in i) {
        var a = i[o];
        a.availableInHouse && r.push({
          id: a.id,
          nameId: a.nameId
        });
      }
      return n.sortObjectInArray(r, "nameId"), e(null, r);
    });
  }
}
test997: {
  function f() {
    return t ? (e.windowBody.show(), void e.updateData(t)) : void e.windowBody.hide();
  }
}
test998: {
  function f() {
    return t ? w("ui.fightend.bonus") + w("ui.common.colon") + t + "%" : w("ui.fightend.noBonus");
  }
}
test999: {
  function f() {
    return this.maxValue ? e + this.humanValue + " / " + this.maxValue : e + this.humanValue + "%";
  }
}
test1000: {
  function f() {
    return e.tabs.getTabsMap()[t.tabId] ? void e.tabs.toggleTabAvailability(t.tabId, !t.locked) : console.error(new Error("Unknown tab id `" + t.tabId + "` in `" + e.id + "` window."));
  }
}
test1001: {
  function f() {
    return e ? void (this._openedTimestampTabs[e] = this._scBalanceWhenOpenTabs[e] = this._hcBalanceWhenOpenTabs[e] = 0) : this._openedTimestamp = this._scBalanceWhenOpen = this._hcBalanceWhenOpen = 0;
  }
}
test1002: {
  function f() {
    return window.gui.playerData.isPvpAggressable() ? window.gui.playerData.alignment.alignmentInfos.honor + " / " + window.gui.playerData.alignment.alignmentInfos.honorNextGradeFloor : "0";
  }
}
test1003: {
  function f() {
    return n ? console.error("Failed to get alignment rank", n) : (i.alignmentLevel.setText(o.nameId + " - " + c("ui.common.level") + " " + t.alignmentValue), i._displaySpecialisations(o.orderId), void e.getOrder(o, function (t, n) {
      return t ? console.error("Failed to get AlignmentOrder", t) : (i.title.setText(n.nameId), e.getAlignmentImageUrl(function (e) {
        i.alignmentImage.setStyle("backgroundImage", e);
      }), void e.getOrderImageUrl(n.id, function (e) {
        i.icon.setStyle("backgroundImage", e);
      }));
    }));
  }
}
test1004: {
  function f() {
    return t ? console.error("Failed to get AlignmentOrder", t) : (i.title.setText(n.nameId), e.getAlignmentImageUrl(function (e) {
      i.alignmentImage.setStyle("backgroundImage", e);
    }), void e.getOrderImageUrl(n.id, function (e) {
      i.icon.setStyle("backgroundImage", e);
    }));
  }
}
test1005: {
  function f() {
    return window.gui.playerData.characterBaseInformations.sex ? e.nameFemaleId : e.nameMaleId;
  }
}
test1006: {
  function f() {
    return t.length ? void p.getDataMap(e, t, function (e, s) {
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
    }) : a(null, []);
  }
}
test1007: {
  function f() {
    return e ? (p = !0, t(e)) : (m = m.concat(i), d += i.length, u += 1, d === c || u === l.length ? t(null, m) : void 0);
  }
}
test1008: {
  function f() {
    return 0 === c ? t(null, []) : void 0;
  }
}
test1009: {
  function f() {
    return e === t ? e : e + " " + M("ui.chat.to") + " " + t;
  }
}
test1010: {
  function f() {
    return i ? console.error(i) : (O = n.Areas || [], R = n.SubAreas || [], O.sort(t._sortByName), R.sort(t._sortByName), void e());
  }
}
test1011: {
  function f() {
    return i ? console.error(i) : (D = n.MonsterSuperRaces || [], P = n.MonsterRaces || [], D.sort(t._sortByName), P.sort(t._sortByName), void e());
  }
}
test1012: {
  function f() {
    return s.subareasInMyWorld && s.subareasInMyWorld.length ? (a.createChild("div", {
      text: s.text,
      className: "mapLocationText"
    }), a.appendChild(new o({
      subareaIds: s.subareasInMyWorld,
      favorite: s.favorite,
      centerOn: s.centerOn
    })), a) : (a.setText(s.text), a);
  }
}
test1013: {
  function f() {
    return t ? e.femaleText : e.maleText;
  }
}
test1014: {
  function f() {
    return i ? console.error(i) : (e._createQuestCategories(), e._setupEvents(), t = !0, void e.emit("initialized"));
  }
}
test1015: {
  function f() {
    return t ? console.error("Failed to retrieve items", s) : void n.forEach(function (t) {
      if (t) {
        var n = e.appendChild(new g());
        n.addClassNames("rewardSlot"), n.setItem(t), n.setQuantity(i[t.id]), n.on("tap", function () {
          S.open("itemBox", {
            itemData: t
          });
        });
      }
    });
  }
}
test1016: {
  function f() {
    return t ? e(t) : (D = i || [], D.sort(function (e, t) {
      return e.order - t.order;
    }), void e());
  }
}
test1017: {
  function f() {
    return t ? (this.kamasPoint.show(), void this.kamas.setText(x.intToString(t))) : void this.kamasPoint.hide();
  }
}
test1018: {
  function f() {
    return o ? (this.xpPoint.show(), void this.xp.setText(x.intToString(o))) : void this.xpPoint.hide();
  }
}
test1019: {
  function f() {
    return t ? this.questsList.getItem(t.dbQuest.categoryId) : null;
  }
}
test1020: {
  function f() {
    return e.hasClassName("completed") ? 1 : t.hasClassName("completed") ? -1 : 0;
  }
}
test1021: {
  function f() {
    return R.active[e] ? (v("GEN_BUTTON"), t.currentQuest = R.all[e], t._updateStepList(), t._resetSelectedQuestElement(), r.addClassNames("selected"), void (t.selectedQuestElement = r)) : v("NO_ACTION");
  }
}
test1022: {
  function f() {
    return i < n ? -1 : i > n ? 1 : e.id > t.id ? 1 : e.id < t.id ? -1 : 0;
  }
}
test1023: {
  function f() {
    return e.isItem ? -1 : t.isItem ? 1 : e.level > t.level ? 1 : e.level < t.level ? -1 : e.id > t.id ? 1 : e.id < t.id ? -1 : 0;
  }
}
test1024: {
  function f() {
    return !i && t.levelWanted <= t.spell.level ? void M.open("BonusPackElitePopupWindow") : (t.levelWanted = Math.max(t.levelWanted - 1, 1), void a._refreshSpellRow(e.id));
  }
}
test1025: {
  function f() {
    return window.gui.playerData.isFighting ? void window.gui.openSimplePopup(d("ui.error.cantDoInFight")) : void window.gui.openConfirmPopup({
      title: d("ui.common.confirm"),
      message: d("ui.common.confirmModification"),
      cb: function (e) {
        e && a.upgradeSpells();
      }
    });
  }
}
test1026: {
  function f() {
    return e.table.getRow(t) ? void e._updateDisplayedSpellLevel(t, i) : console.error(new Error("spell " + t + " does not exist in spell window"));
  }
}
test1027: {
  function f() {
    return e.mustRefreshJobs ? e._refreshJobs(i) : void (i && e.selectJob(i));
  }
}
test1028: {
  function f() {
    return t.length ? void y.preloadImages(t, function (t) {
      for (var n = 0; n < t.length; n++) I[i[n]] = t[n];
      return e();
    }) : e();
  }
}
test1029: {
  function f() {
    return s ? (console.error("Failed to get ingredients", s), i(s)) : n._timestamp !== o ? i() : m.eachSeries(r, function (e, t) {
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
        return e ? (console.error(e), i(e)) : n._hasBeenReset() ? i() : (A = !0, n._searchLine.show(), n._ingredientsLine.show(), n._searchBar.delClassNames("spinner"), n.isInCraft && (n._showCraftableCheckbox.show(), n._checkboxWrapper.delClassNames("spinner")), i());
      }));
    });
  }
}
test1030: {
  function f() {
    return e ? (console.error(e), i(e)) : n._hasBeenReset() ? i() : (A = !0, n._searchLine.show(), n._ingredientsLine.show(), n._searchBar.delClassNames("spinner"), n.isInCraft && (n._showCraftableCheckbox.show(), n._checkboxWrapper.delClassNames("spinner")), i());
  }
}
test1031: {
  function f() {
    return t ? console.error("SocialGroupCreationWindow: Failed to retrieve emblem data", t) : (e.emblemBackgrounds = i.EmblemBackgrounds, e.emblemSymbols = i.EmblemSymbols, e.emblemSymbolCategories = i.EmblemSymbolCategories, e._generateSelectorOptions(), e._displayEmblemBackgrounds(i.EmblemBackgrounds), e._displayEmblemSymbols(i.EmblemSymbols), e._setupUI(), e.delClassNames("spinner"), e.windowBody.show(), e._updateUISize(), e.on("open", function () {
      e.addClassNames("spinner"), e._generateSelectorOptions(), e.windowBody.hide(), e.tabs.openTab("background"), e._setupUI(), e.delClassNames("spinner"), e.windowBody.show();
    }), void e.on("opened", function () {
      e._updateUISize();
    }));
  }
}
test1032: {
  function f() {
    return this.closeTweener ? (this.closeTweener.cancel(), e()) : void (this.closeTweener = l.tween(this, d, {
      time: 150,
      delay: 0,
      easing: "ease-out"
    }, e));
  }
}
test1033: {
  function f() {
    return 1 === parseInt(e, 10) ? window.gui.openConfirmPopup({
      title: s("ui.popup.warning"),
      message: s("ui.social.doUGiveRights", i.memberInfo.name),
      cb: function (n) {
        return n ? void (i.memberInfo.rank = e) : void i.selector.setValue(t);
      }
    }) : void (i.memberInfo.rank = e);
  }
}
test1034: {
  function f() {
    return n ? void (i.memberInfo.rank = e) : void i.selector.setValue(t);
  }
}
test1035: {
  function f() {
    return e.fromInside ? (window.dofus.sendMessage("HouseSellFromInsideRequestMessage", {
      amount: 0
    }), void l.close(e.id)) : void window.dofus.sendMessage("HouseSellRequestMessage", {
      amount: 0
    });
  }
}
test1036: {
  function f() {
    return i > 0 ? f.openNotEnoughHardCurrencyPopup(i) : window.dofus.send("houseBuyRequest", {
      houseId: e.houseInfo.purchasableId,
      amountHard: e.proposedPriceHard,
      amountSoft: e.proposedPrice
    });
  }
}
test1037: {
  function f() {
    return e.fromInside ? (window.dofus.sendMessage("HouseSellFromInsideRequestMessage", {
      amount: e.proposedPrice
    }), void l.close(e.id)) : void window.dofus.sendMessage("HouseSellRequestMessage", {
      amount: e.proposedPrice
    });
  }
}
test1038: {
  function f() {
    return o || !a ? console.warn("Houses Id: " + e + " not found!", o) : void h.preloadImage("gfx/houses/" + a.gfxId + ".png", function (e) {
      n.houseOwner = "?" === t ? d("ui.common.houseWithNoOwner") : d("ui.house.homeOf", i);
      var o = a.nameId;
      return n.image ? (delete n.imageUrl, delete n.titleText, delete n.descriptionText, n.image.setStyle("backgroundImage", e), n.title.setText(n.houseOwner), void n.description.setText(o)) : (n.imageUrl = e, n.titleText = n.houseOwner, void (n.descriptionText = o));
    });
  }
}
test1039: {
  function f() {
    return n.image ? (delete n.imageUrl, delete n.titleText, delete n.descriptionText, n.image.setStyle("backgroundImage", e), n.title.setText(n.houseOwner), void n.description.setText(o)) : (n.imageUrl = e, n.titleText = n.houseOwner, void (n.descriptionText = o));
  }
}
test1040: {
  function f() {
    return i || !n ? console.warn("Houses Id: " + e.modelId + " not found!", i) : (t.proposedPrice = n.defaultPrice, void t.price.setValue(c.kamasToString(t.proposedPrice, "")));
  }
}
test1041: {
  function f() {
    return s.itemInstance.livingObjectSkin === t ? e() : (this.disable(), void window.dofus.sendMessage("LivingObjectChangeSkinRequestMessage", {
      livingUID: s.itemInstance.objectUID,
      livingPosition: s.itemInstance.position,
      skinId: t
    }));
  }
}
test1042: {
  function f() {
    return e.itemInstance && e.itemInstance.livingObjectCategory ? void this._displayItem(e.itemInstance) : console.error("Must provide a living object or living object associated itemInstance");
  }
}
test1043: {
  function f() {
    return n || !o[0] ? console.error("ItemBoxWindow: error openWithDbItem", n, t) : void e(o[0], i);
  }
}
test1044: {
  function f() {
    return t ? console.error("ItemBoxWindow: error createItemInstances", t) : void e(n.array[0], i);
  }
}
test1045: {
  function f() {
    return e.feedingBox.possessFeedItemForLivingObject(n.itemInstance) ? void u.open("feed", {
      mode: "livingObject",
      item: n.itemInstance
    }) : window.gui.openSimplePopup(s("ui.item.errorNoFoodLivingItem", n.itemInstance.item.nameId));
  }
}
test1046: {
  function f() {
    return e.itemInstance && e.itemInstance.livingObjectCategory ? void this._displayItem(e.itemInstance) : console.error("Must provide a living object or living object associated itemInstance");
  }
}
test1047: {
  function f() {
    return e ? void console.error(new Error("setupRecipe error: " + e)) : void (t.itemRecipeBox && (t.itemRecipeBox.appendChild(t.recipeBox), t._craftDetails.setText(t.recipeBox.craftDetails), t.itemRecipeBox.appendChild(t._craftDetails)));
  }
}
test1048: {
  function f() {
    return e ? console.error(e) : (t.itemSet = i, t.windowTitle.setText(i.nameId), t.itemListBox.clearContent(), t.bonusSelector.clearContent(), void f.getItems(i.items, function (e) {
      if (e) return console.error(e);
      var n = 0;
      t.bonusSelector.addOption("0 " + h("ui.common.objects"), 0), t.bonusSelector.toggleOption(0, !1);
      for (var o, a, s, r, l = window.gui.playerData.inventory.quantityList, c = 0; c < i.items.length; c += 1) s = i.items[c], a = f.items[s], o = p.getEquippedItemById(window.gui.playerData.inventory, s), o && (n += 1), r = t._createItemSlot(o || a), l.hasOwnProperty(s) || r.addClassNames("notOwned"), t.itemListBox.appendChild(r), t.bonusSelector.addOption(c + 1 + " " + h("ui.common.objects"), c + 1);
      t.combineBonusesCheckbox.deactivate(), t.bonusSelector.select(n);
    }));
  }
}
test1049: {
  function f() {
    return e ? console.error(e) : (i.bonusTable.clearContent(), void i._addEffectsToTable(t));
  }
}
test1050: {
  function f() {
    return e ? s(e) : void d._mergeEffectInstances(t, function (e, t) {
      return e ? s(e) : (t = t.concat(h), s(null, t));
    });
  }
}
test1051: {
  function f() {
    return e ? s(e) : (t = t.concat(h), s(null, t));
  }
}
test1052: {
  function f() {
    return i < n ? -1 : i > n ? 1 : 0;
  }
}
test1053: {
  function f() {
    return e && !e.item.isEquippable() ? this._showError(d("tablet.mimicry.errorEquippable")) : t && !t.item.isEquippable() ? this._showError(d("tablet.mimicry.errorEquippable")) : e && t ? e.getProperty("iconId") === t.getProperty("iconId") ? this._showError(d("ui.mimicry.error.sameSkin")) : e.getProperty("typeId") !== t.getProperty("typeId") ? this._showError(d("ui.mimicry.error.foodType")) : t.getProperty("level") > e.getProperty("level") ? this._showError(d("ui.mimicry.error.foodLevel")) : void this._requestMergeOrPreview(!0) : e ? this._showHelp(d("tablet.mimicry.helpFood")) : this._showHelp(d("tablet.mimicry.help"));
  }
}
test1054: {
  function f() {
    return e ? console.error("Failed creating preview item:" + e) : void t._showPreviewItem(i.array[0]);
  }
}
test1055: {
  function f() {
    return e.fromInside ? (window.dofus.sendMessage("HouseLockFromInsideRequestMessage", n), void c.close(e.id)) : void (e.padlockInfo.changeOrUse ? window.dofus.sendMessage("LockableChangeCodeMessage", n) : window.dofus.sendMessage("LockableUseCodeMessage", n));
  }
}
test1056: {
  function f() {
    return e === this.partyId ? s.open(this.id) : (window.dofus.sendMessage("PartyInvitationDetailsRequestMessage", {
      partyId: e
    }), this.partyMap[e] || (this.partyMap[e] = !0, this.numParties++, 1 === this.numParties && this._setupListeners(!0)), void (this.text ? this._resetDom() : this._setupDom()));
  }
}
test1057: {
  function f() {
    return e ? t(e) : (I = i.nameId, E = i.categoryId, x = i.rewardIds, A = i, t());
  }
}
test1058: {
  function f() {
    return t ? e(t) : (S = i.parentId, N = i.nameId, e());
  }
}
test1059: {
  function f() {
    return 0 === S ? e() : void h.getData("AchievementCategories", S, function (t, i) {
      return t ? e(t) : (N = i.nameId, e());
    });
  }
}
test1060: {
  function f() {
    return t ? e(t) : (N = i.nameId, e());
  }
}
test1061: {
  function f() {
    return 0 === x.length ? e() : void h.getData("AchievementRewards", x, function (i, n) {
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
  }
}
test1062: {
  function f() {
    return 0 === L.length ? e() : void g.getItems(L, function (t) {
      if (t) return e(t);
      for (var i = 0; i < L.length; i += 1) {
        var n = g.items[L[i]];
        n || (n = g.items[g.FALLBACK_DB_ITEM_ID]), B.push("gfx/items/" + n.iconId + ".png");
      }
      return e();
    });
  }
}
test1063: {
  function f() {
    return 0 === P.length ? e() : void h.getData("Ornaments", P, function (t, i) {
      if (t) return e(t);
      for (var n = 0; n < i.length; n += 1) B.push("gfx/ornaments/" + i[n].iconId + ".png");
      return e();
    });
  }
}
test1064: {
  function f() {
    return 0 === B.length ? e() : void m.preloadImages(B, function (t) {
      for (var i = 0; i < t.length; i += 1) {
        var n = T[i];
        n && n.rootElement && (n.setImage(t[i]), n.setQuantity(O[i]));
      }
      return e();
    });
  }
}
test1065: {
  function f() {
    return e ? console.error(e) : void (y.rootElement && (y.nameText.setText(I), y.category.setText(N)));
  }
}
test1066: {
  function f() {
    return e ? (d.disable(), window.gui.serversData.selectServer(e.id), void r.close(t.id)) : console.error("No server");
  }
}
test1067: {
  function f() {
    return e ? console.error(e) : void t._image.setStyle("backgroundImage", i);
  }
}
test1068: {
  function f() {
    return 0 !== r ? r : t.id - e.id;
  }
}
test1069: {
  function f() {
    return e ? console.error(e) : void t._image.setStyle("backgroundImage", i);
  }
}
test1070: {
  function f() {
    return e.isFavorite && !t.isFavorite ? -1 : !e.isFavorite && t.isFavorite ? 1 : e.saved && !t.saved ? -1 : !e.saved && t.saved ? 1 : e.name > t.name ? 1 : -1;
  }
}
test1071: {
  function f() {
    return e ? console.error(e) : (b.addItems(t.map), void (w.exchangeType !== r.MOUNT && b.refreshSlotGauge()));
  }
}
test1072: {
  function f() {
    return e ? console.error(e) : void b.setItemList(t.map);
  }
}
test1073: {
  function f() {
    return e ? console.error(e) : (b.setItemList(t.map), void b.refreshSlotGauge());
  }
}
test1074: {
  function f() {
    return e ? void m.getItems([e], function (i, n) {
      return i ? console.error("Failed to get token " + e + " for trade: " + i) : t(n[0]);
    }) : t(null);
  }
}
test1075: {
  function f() {
    return i ? console.error("Failed to get token " + e + " for trade: " + i) : t(n[0]);
  }
}
test1076: {
  function f() {
    return this.selection ? this.selection.item : this.item;
  }
}
test1077: {
  function f() {
    return s > 0 ? y.openNotEnoughHardCurrencyPopup(s) : void this._confirmTrade({
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
  }
}
test1078: {
  function f() {
    return t <= 0 ? window.gui.openSimplePopup(d("ui.error.invalidPrice")) : void this._confirmTrade({
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
  }
}
test1079: {
  function f() {
    return 0 === e.price ? e.priceInput.promptForValue() : (o(e.item, e.quantity, e.price), void e.tradeItemWindow.sellInBidHouse(e.item, e.price, e.quantity, e.fees));
  }
}
test1080: {
  function f() {
    return t.myTable.bidHouseBuyerBox.isItemSearchable ? e.item.shortName : null;
  }
}
test1081: {
  function f() {
    return 0 !== n ? n : e.unitPrice - t.unitPrice;
  }
}
test1082: {
  function f() {
    return "string" == typeof o ? o.localeCompare(a) : -1;
  }
}
test1083: {
  function f() {
    return 0 !== s ? s : e.qty - t.qty;
  }
}
test1084: {
  function f() {
    return this.serverAveragePrice !== -1 ? this.serverAveragePrice : this.displayedUnitPrice / this.displayedUnitCount;
  }
}
test1085: {
  function f() {
    return o && t.isLinked() ? e.showError(s("ui.bidhouse.badExchange")) : (this.pricePerUnit = a, this.quantityValue.setValue(c), this.quantityValue.setReadonly(1 === r), this.unitPriceValue.setText(i ? i + " x " + l.intToString(a) : l.kamasToString(a)), void this._updatePrices());
  }
}
test1086: {
  function f() {
    return e.hasOwnProperty("objectUID") ? e.objectUID : e.hasOwnProperty("objectGID") ? e.objectGID : 0;
  }
}
test1087: {
  function f() {
    return e ? console.error(e) : void (t ? n.shopViewer.addItemsAndHighlightThem(i.array, "modify-bidHouse" === n.mode) : n.shopViewer.addItems(i.array, "modify-bidHouse" === n.mode));
  }
}
test1088: {
  function f() {
    return e.emitTap ? e.emit("moreGoultinesTap") : void c.open("market", {
      tabId: "shop",
      tabParams: {
        category: "goultines"
      }
    });
  }
}
test1089: {
  function f() {
    return e.emitTap ? e.emit("bonusPackTap") : void c.open("market", {
      tabId: "shop",
      tabParams: {
        category: "bonuspack"
      }
    });
  }
}
test1090: {
  function f() {
    return t ? console.error(t) : void e.bonusPackDuration.setText(n.toUpperCase());
  }
}
test1091: {
  function f() {
    return t ? console.error(t) : void e.bonusPackEliteDuration.setText(n.toUpperCase());
  }
}
test1092: {
  function f() {
    return t ? (i._removeSpinner(), console.error(t)) : (i._createDom(), i._setEvents(), i._poiUpdater = new c(i._worldMap), i.on("open", i._onOpen), void i._onOpen(e));
  }
}
test1093: {
  function f() {
    return i ? e(i) : (t._subAreaIdPerCoordinate = n.SubAreaIdPerCoordinate, t._subAreaData = n.SubAreasWorldMapData, t._iconsInfo = n.Hints, void g.loadModel("icon", "assets", function (i, n) {
      var o = 1;
      i.meta && i.symbols && (o = i.meta.scale / M.ICONS_ORIGINAL_EXPORT_SCALE, i = i.symbols), t._iconsImage = n;
      var a = t._scene.createTexture(n, "worldMapIcons", "linear", "permanent");
      t._iconBatchData.createIconModels(i, a, o), e();
    }));
  }
}
test1094: {
  function f() {
    return this._worldMapData ? {
      i: Math.floor((e - this._worldMapData.origineX) / this._zoneWidth),
      j: Math.floor((t - this._worldMapData.origineY) / this._zoneHeight)
    } : (console.error(new Error("worldMapData are not ready yet!")), {
      i: 0,
      j: 0
    });
  }
}
test1095: {
  function f() {
    return i !== G._chunkBatchCurrent ? (delete G._chunkBatchIndexes[e.id], t()) : void f.loadTexture(e.path, function (i) {
      var n = G._chunkBatchIndexes[e.id];
      return delete G._chunkBatchIndexes[e.id], n !== G._chunkBatchCurrent ? (i.release(), t()) : (e.texture = i, G._createChunkGraphic(e), void t());
    }, G._scene.renderer, "linear");
  }
}
test1096: {
  function f() {
    return e._layer === t._layer ? e._position - t._position : e._layer - t._layer;
  }
}
test1097: {
  function f() {
    return t === -1 ? void console.error(new Error("[IconBatchData.removeCluster] Trying to remove inexistent cluster")) : (delete this.iconClusters[e.id], void this.zIndexedIconClusters.splice(t, 1));
  }
}
test1098: {
  function f() {
    return 0 === i ? e.x - t.x : i;
  }
}
test1099: {
  function f() {
    return 0 === o ? i.x - n.x : o;
  }
}
test1100: {
  function f() {
    return void 0 === s || null === s ? (i[a.id] = a, n()) : void d.getDataMap("SubAreas", [s], function (e, o) {
      if (e) return n(e);
      var r = o[s],
        l = r.areaId,
        c = window.gui.databases.Areas[l];
      if (!c) return n(new Error("The area " + l + " doesn't exist"));
      var d = c.superAreaId,
        u = window.gui.databases.SuperAreas[c.superAreaId];
      if (!u) return n(new Error("The super area " + d + " doesn't exist"));
      var h = r.customWorldMap[0] || u.worldmapId;
      return h === t._worldmap.getDisplayedWorldmapId() && (i[a.id] = a), n();
    });
  }
}
test1101: {
  function f() {
    return e.name < t.name ? -1 : 1;
  }
}
test1102: {
  function f() {
    return e.rankValue < t.rankValue ? -1 : 1;
  }
}
test1103: {
  function f() {
    return e.hoursSinceLastConnection < t.hoursSinceLastConnection ? -1 : 1;
  }
}
test1104: {
  function f() {
    return t ? t.name : "?";
  }
}
test1105: {
  function f() {
    return n._checkQuery() ? (n._queryBtn.disable(), void e(n.getQuery())) : n.loadResults([]);
  }
}
test1106: {
  function f() {
    return t > 0 ? f.openNotEnoughHardCurrencyPopup(t) : window.dofus.send("paddockBuyRequest", {
      amountHard: n,
      amountSoft: i
    });
  }
}
test1107: {
  function f() {
    return e ? console.error(e) : void t.storageViewer.setItemList(i.map);
  }
}
test1108: {
  function f() {
    return t[e] ? t[e].text : null;
  }
}
test1109: {
  function f() {
    return i ? i.order || 0 : 0;
  }
}
test1110: {
  function f() {
    return e ? console.error(e) : void P.showNotification(A("tablet.charCrea.potionNeeded", i[0].getName()), t);
  }
}
test1111: {
  function f() {
    return Date.now() - e.lastRendering < de ? console.warn("Ignoring hammered button") : void e._selectBreed(this.breedId, void 0, e._currentColors);
  }
}
test1112: {
  function f() {
    return i ? console.error("characterCreation: initialize error", i) : (t._initialize(e), void t._loadHeadImages());
  }
}
test1113: {
  function f() {
    return e.complexity < t.complexity ? -1 : t.complexity < e.complexity ? 1 : 0;
  }
}
test1114: {
  function f() {
    return i ? e(i) : (t.headsMap = n, void e());
  }
}
test1115: {
  function f() {
    return this._assetUrlCache[e] ? t(this._assetUrlCache[e]) : void v.preloadImage(e, function (n) {
      i._assetUrlCache[e] = n, t(n);
    });
  }
}
test1116: {
  function f() {
    return l.selectedColorBtn && l.selectedColorBtn.getColor() ? (l._resetColorButton(l.selectedColorBtn), l._selectColor(l.selectedColorBtn.id, !0), void l._updateSprite()) : P.showNotification(A("tablet.charCrea.resetCurrentColor"), this);
  }
}
test1117: {
  function f() {
    return 0 === s.length ? (this.delClassNames("invalid"), this.emit("validationPassed"), t) : (this.addClassNames("invalid"), this.emit("validationFailed", s), !1);
  }
}
test1118: {
  function f() {
    return e ? console.error("Crafting: onResult error", e) : void l.giveTheResult(t.objectInfo, t.message);
  }
}
test1119: {
  function f() {
    return l._skillId !== l.jobsData.SKILLID_DECRAFT ? e() : void window.gui.openConfirmPopup({
      title: s("ui.popup.warning"),
      message: s("ui.craft.decraftConfirm"),
      cb: function (t) {
        t && e();
      }
    });
  }
}
test1120: {
  function f() {
    return this.isRecipeCraftableFromInventory(t) ? void (t !== e.highlightedRecipeId ? window.dofus.sendMessage("ExchangeSetCraftRecipeMessage", {
      objectGID: t
    }) : e._totalQty < e._craftResultBox.getMaxQuantity() ? e._requestReplayCountChange(e._totalQty + 1) : e._craftResultBox.setQty(e._totalQty, !0)) : window.gui.openSimplePopup(s("ui.craft.dontHaveAllIngredient"));
  }
}
test1121: {
  function f() {
    return e ? {
      UID: e.objectUID,
      GID: e.objectGID,
      quantity: e.quantity
    } : {};
  }
}
test1122: {
  function f() {
    return C[e.listEntry.playerInfo.playerId] ? v(e.listEntry) : void g(e.listEntry);
  }
}
test1123: {
  function f() {
    return e < 0 ? void w.table.clearContent() : (T = e, void window.dofus.sendMessage("JobCrafterDirectoryListRequestMessage", {
      jobId: e.id
    }));
  }
}
test1124: {
  function f() {
    return 1 === n ? l._moveItem(1) : void l.minMaxSelector.open({
      min: 1,
      max: n,
      defaultValue: n,
      x: i.x,
      y: i.y
    });
  }
}
test1125: {
  function f() {
    return this.isCrafter ? c.prototype._onStopBtnTap.call(this) : void window.dofus.sendMessage("ExchangeReadyMessage", {
      ready: !1,
      step: this.exchangeStep
    });
  }
}
test1126: {
  function f() {
    return this.isCrafter ? c.prototype._onAutoCraftStopped.call(this, e) : (l.displayAutoCraftStopReasonMessage(e.reason), void (this.isInAutoCraft = !1));
  }
}
test1127: {
  function f() {
    return "craftPayment" === I ? window.dofus.sendMessage("ExchangeItemObjectAddAsPaymentMessage", {
      paymentType: T,
      bAdd: !1,
      objectToMoveId: b,
      quantity: e
    }) : "ingredientsBag" === I ? window.dofus.sendMessage("ExchangeObjectMoveMessage", {
      objectUID: b,
      quantity: -e
    }) : void E.removeItemFromCraft(b, e);
  }
}
test1128: {
  function f() {
    return 0 === o ? e.unSelectSlot() : void (o > 1 && t.select({
      extraStyle: "stackMove"
    }));
  }
}
test1129: {
  function f() {
    return 0 === o ? e.unSelectSlot() : void E.moveItemToCraft(this.id, i, o);
  }
}
test1130: {
  function f() {
    return !e._otherCharacterTradeSpace.hasFreePods() && e._myTradeSpace.getItemsToTradeCount() > 0 ? window.gui.openSimplePopup(s("ui.storage.noRoomForTransfert")) : void window.dofus.sendMessage("ExchangeReadyMessage", {
      ready: !0,
      step: e._exchangeStep
    });
  }
}
test1131: {
  function f() {
    return e._iConfirmed ? window.dofus.sendMessage("ExchangeReadyMessage", {
      ready: !1,
      step: e._exchangeStep
    }) : void r.close(e.id);
  }
}
test1132: {
  function f() {
    return 1 === n ? window.dofus.sendMessage("ExchangeObjectMoveMessage", {
      objectUID: i.objectUID,
      quantity: 1
    }) : (t._currentUID = i.objectUID, t._minMaxSelector.fromInventory = !0, void t._minMaxSelector.open({
      min: 1,
      max: n
    }));
  }
}
test1133: {
  function f() {
    return r ? r : r = new a("div", {
      text: d("ui.exchange.warning")
    });
  }
}
test1134: {
  function f() {
    return 1 === t ? window.dofus.sendMessage("ExchangeObjectMoveMessage", {
      objectUID: e.itemInstance.objectUID,
      quantity: -1
    }) : (o = e.itemInstance.objectUID, p.fromInventory = !1, void p.open({
      min: 1,
      max: t
    }));
  }
}
test1135: {
  function f() {
    return 1 === i ? window.dofus.sendMessage("ExchangeObjectMoveMessage", {
      objectUID: o,
      quantity: 1
    }) : (p.fromInventory = !0, void p.open({
      min: 1,
      max: i
    }));
  }
}
test1136: {
  function f() {
    return void 0 === t ? console.error("Invalid tab " + e) : void this.menuList.selectItem(t, {
      scrollToElement: !0
    });
  }
}
test1137: {
  function f() {
    return n() ? window.cordova.plugins.WebViewSelector.currentEngine : d;
  }
}
test1138: {
  function f() {
    return s(t) ? r(t) : e;
  }
}
test1139: {
  function f() {
    return n() ? t.getAvailableEngineIds().indexOf(e) === -1 ? i(r("tablet.webViewSelector.engineUnknown", e)) : void window.cordova.plugins.WebViewSelector.setEngine(e, function (e) {
      return e ? (console.error("webViewSelector error: " + e), i(r("tablet.webViewSelector.pluginError"))) : void i();
    }) : i(r("tablet.webViewSelector.pluginNotFound"));
  }
}
test1140: {
  function f() {
    return e ? (console.error("webViewSelector error: " + e), i(r("tablet.webViewSelector.pluginError"))) : void i();
  }
}
test1141: {
  function f() {
    return e ? (i.openSimplePopup(r("tablet.webViewSelector.unableToChangeEngine") + " " + e), void l.getWindow("options").refreshUi()) : void i.openConfirmPopup({
      message: r("tablet.webViewSelector.restartNeeded") + " " + r("tablet.webViewSelector.restartQuestion"),
      cb: function (e) {
        return e ? void navigator.app.exitApp() : i.openSimplePopup(r("tablet.webViewSelector.delayedRestart"), r("ui.popup.information"));
      }
    });
  }
}
test1142: {
  function f() {
    return e ? void navigator.app.exitApp() : i.openSimplePopup(r("tablet.webViewSelector.delayedRestart"), r("ui.popup.information"));
  }
}
test1143: {
  function f() {
    return i ? h("ui.shop.free") : t;
  }
}
test1144: {
  function f() {
    return e ? console.error(e) : (i._promoBanner.setText(h("tablet.shop.promo.banner", n)), void i._promoBannerFree.setText(h("tablet.shop.promo.banner", n)));
  }
}
test1145: {
  function f() {
    return i.rootElement ? (i._promoBannerOver.setText(h("tablet.shop.promo.banner.over")), i._promoBannerFree.setText(h("tablet.shop.promo.banner.over")), i._promoBannerOver.toggleDisplay(!c), void i._promoBanner.toggleDisplay(!1)) : console.error(new Error("articleBox onTimeout: the box is missing " + i.articleId));
  }
}
test1146: {
  function f() {
    return i || !n ? e(new Error("ShopWindow._showFakeShop: unable to get data. " + i)) : (t.onShopOpenCategorySuccess(n), t._openCategory(L), e(null));
  }
}
test1147: {
  function f() {
    return this._previousViewName === A ? this.reactivateCategories() : this._previousViewName === I ? (this.reactivateCategories(), void this._views[I].restoreScrollPosition()) : void this._setView(this._previousViewName);
  }
}
test1148: {
  function f() {
    return window.gui.scenarioManager.isBehaviourEnabled(M.DISABLE_FAKE_SHOP) ? void w.purchaseArticleOnAnkama(d.articlesMap[e], t) : (window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.FAKE_SHOP_BUY), m.close("shopConfirm"), void n());
  }
}
test1149: {
  function f() {
    return i ? t.lastAction ? void t.lastAction() : void t._reinitializeShop() : void (e && n());
  }
}
test1150: {
  function f() {
    return t ? e(t) : void window.dofus.send("shopOpenRequest");
  }
}
test1151: {
  function f() {
    return t.length > 0 ? t[0].getChildren()[0] : null;
  }
}
test1152: {
  function f() {
    return e ? void this._requestPageOfCategory(this.openedCategory, e.page + 1) : console.error(new Error("Trying to load additional content of a non-opened category."));
  }
}
test1153: {
  function f() {
    return i && i.media && i.media[0] ? (i.name = r("ui.albueraTutorial.bonusPack.name"), i.description = r("ui.albueraTutorial.bonusPack.description"), void s.preloadImageUrl(l, function (n) {
      return i.media[0].url = n, e(null, t);
    })) : e(new Error("fakeShop.getFakeShopData: main article is missing information"));
  }
}
test1154: {
  function f() {
    return e ? t.displayError(u.NO_PACK, e) : void window.dofus.send("shopIAPArticlesRequest");
  }
}
test1155: {
  function f() {
    return i ? (this.content.show(), this.articleBoxContainer.show(), this.windowBody.delClassNames("spinner"), this.buyPackText.setText(a("tablet.shop.buyHardCurrencyPack", n)), this.articleBox.update(i), void this.articleBox.on("tapIAPButton", function () {
      l.close("buyHardCurrencyConfirm"), c.purchaseArticleOnStore(i);
    })) : this.displayError(u.AMOUNT_TOO_HIGH);
  }
}
test1156: {
  function f() {
    return e ? i._displayPurchasesList(e) : (window.dofus.send("shopIAPArticlesRequest"), void i._startProcessing());
  }
}
test1157: {
  function f() {
    return i ? (s(i, function (e, n) {
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
    }), t) : t;
  }
}
test1158: {
  function f() {
    return e ? (l = !0, t(e)) : (c = c.concat(i), a += i.length, s += 1, a === o || s === n.length ? t(null, c) : void 0);
  }
}
test1159: {
  function f() {
    return t.length ? void m.getDataMap(e, t, function (e, s) {
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
    }) : a(null, []);
  }
}
test1160: {
  function f() {
    return window.gui.playerData.characterBaseInformations.sex ? e.nameFemaleId : e.nameMaleId;
  }
}
test1161: {
  function f() {
    return window.gui.playerData.ToaData.current.steps ? window.gui.playerData.ToaData.current.steps : null;
  }
}
test1162: {
  function f() {
    return t > i ? [] : e.slice(t, i - t + 1);
  }
}
test1163: {
  function f() {
    return i || n ? (n && (n = n.substr(0, n.length - 1)), i + n) : ".";
  }
}
test1164: {
  function f() {
    return e ? console.error(e) : (t._showMonsters(i), t._showChallenges(n), void t._showScore(n));
  }
}
test1165: {
  function f() {
    return 100 === this._shield.level || t ? this.feedingBox.storageViewer.unSelectSlot(e.data.objectUID) : void this.feedingBox.selectItem(e.itemInstance);
  }
}
test1166: {
  function f() {
    return e ? e.message === this._logic.NEED_HC ? void this._enableButtons(!0) : e.message === this._logic.ALREADY_IN_PROGRESS ? void l.warning("ToaRetryPopup: already in process") : e.message === this._logic.GET_STORE_INFOS_ERROR ? (this._enableButtons(!0), void this._retry(e)) : e.message === this._logic.CANNOT_ASSIGN_PENDING_RETRY ? (this._enableButtons(!0), window.gui.openPopup({
      title: r("ui.common.error"),
      message: r("tablet.shop.couldNotBuy") + " (code: caprerr)"
    }), l.error("ToaRetryPopup buy (caprerr)", e), void u.close(this.id)) : e.message === this._logic.GIFT_TIMEOUT ? (this._enableButtons(!0), window.gui.openPopup({
      title: r("tablet.gift.unableToAssignTitle"),
      message: r("tablet.gift.unableToAssign") + " (code: gterr)"
    }), l.error("ToaRetryPopup buy (gterr)", e), void u.close(this.id)) : (this._enableButtons(!0), window.gui.openPopup({
      title: r("ui.common.error"),
      message: r("tablet.shop.couldNotBuy") + " (code: genbuyerr)"
    }), l.error("ToaRetryPopup buy (genbuyerr)", e), void u.close(this.id)) : (window.dofus.sendMessage("ContinueTowerOfAscensionWithCreditRequestMessage", {
      stepNumber: t
    }), this._enableButtons(!0), void u.close(this.id));
  }
}
test1167: {
  function f() {
    return e ? (this._buttonYes.enable(), this._buttonNo.enable(), void this._buttonYes.delClassNames("spinner")) : (this._buttonYes.disable(), this._buttonNo.disable(), void this._buttonYes.addClassNames("spinner"));
  }
}
test1168: {
  function f() {
    return t - l.TOA_RETRY_HC_PRICE < 0 ? (a.openNotEnoughHardCurrencyPopup(l.TOA_RETRY_HC_PRICE - t), n._fireCallbackAndClean(new Error(n.NEED_HC))) : void s.send("toaContinue", {
      goultinesAmount: t
    });
  }
}
test1169: {
  function f() {
    return i ? e(i) : void t._requestPageOfCategory(p, 1);
  }
}
test1170: {
  function f() {
    return t ? e._getCategoryInfo() : e.close();
  }
}
test1171: {
  function f() {
    return e ? p : m;
  }
}
test1172: {
  function f() {
    return e === i.dailyQuests.mainQuest.questId ? t._updatetMainQuestPart() : i.dailyQuests.active[e] ? t._updatetDQSlot(t.getDQSlot(e), i.dailyQuests.active[e]) : void 0;
  }
}
test1173: {
  function f() {
    return t ? console.error("Failed to retrieve items", s) : void n.forEach(function (t) {
      if (t) {
        var n = e.appendChild(new u());
        n.addClassNames("rewardSlot"), n.setItem(t), n.setQuantity(i[t.id]), n.on("tap", function () {
          m.open("itemBox", {
            itemData: t
          });
        });
      }
    });
  }
}
test1174: {
  function f() {
    return e ? console.error(e) : void b.setStyle("backgroundImage", p.items[I].image);
  }
}
test1175: {
  function f() {
    return e ? t(e) : (i.upgradeWeaponList = n, i.statsChoice.show(), void i._selectElement(d.EARTH, t));
  }
}
test1176: {
  function f() {
    return e ? (i(), console.error(e)) : (t.effects.push(n[0]), void l.createItemInstances([t], function (e, t) {
      return e ? (i(), console.error(e)) : void i(t.array[0]);
    }));
  }
}
test1177: {
  function f() {
    return e ? (i(), console.error(e)) : void i(t.array[0]);
  }
}
test1178: {
  function f() {
    return a.length > 0 ? void v.getDataMap("Effects", a, function (i, n) {
      return i ? e(i) : (t.wrapEffectChoice.clearContent(), a.forEach(function (e) {
        var i = n[e],
          a = t.wrapEffectChoice.appendChild(new l(y(i.descriptionId, ""), {
            isRadio: !0
          }));
        a.on("change", function (e) {
          e && t._getAndDisplayChosenLW(o[i.id]);
        });
      }), e());
    }) : (t.wrapEffectChoice.clearContent(), e());
  }
}
test1179: {
  function f() {
    return i ? e(i) : (t.wrapEffectChoice.clearContent(), a.forEach(function (e) {
      var i = n[e],
        a = t.wrapEffectChoice.appendChild(new l(y(i.descriptionId, ""), {
          isRadio: !0
        }));
      a.on("change", function (e) {
        e && t._getAndDisplayChosenLW(o[i.id]);
      });
    }), e());
  }
}
test1180: {
  function f() {
    return r ? void v.getDataMap("UpgradeTemplates", [r.templateId], function (e, n) {
      if (e) return t(e);
      var s = n[r.templateId];
      if (!s || o >= s.levels.length) return t();
      for (var l = s.levels[o].bonusValue, c = 0; c < a.effects.length; c++) {
        var d = a.effects[c];
        d.effectId === r.typeActionId ? d.value += l : d.effectId === f.ACTION_GRIND_LEVEL && d.value++;
      }
      g.createItemInstances([a], function (e, n) {
        return e ? t(e) : (n.array.length > 0 && i._displayUpgradedLW(n.array[0]), i._displayRecipeFromTemplateLevel(s.levels[o], t));
      });
    }) : t(new Error("No upgrade effects available for weapon " + e.item.id));
  }
}
test1181: {
  function f() {
    return e ? t(e) : (n.array.length > 0 && i._displayUpgradedLW(n.array[0]), i._displayRecipeFromTemplateLevel(s.levels[o], t));
  }
}
test1182: {
  function f() {
    return a ? g.getItems(a.ingredientIds, function (e, o) {
      return e ? t(n) : (i._refreshIngredientSlots(o, a.quantities), t());
    }) : t();
  }
}
test1183: {
  function f() {
    return e ? t(n) : (i._refreshIngredientSlots(o, a.quantities), t());
  }
}
test1184: {
  function f() {
    return e ? t(e) : (i._refreshIngredientSlots(n, a), t());
  }
}
test1185: {
  function f() {
    return a ? void u.getDataArray("Items", a.ingredientIds, function (e, n) {
      if (e) return t(e);
      for (var o = null, a = 0; a < n.length; a++) if (n[a].typeId === c.types.cosmeticLegendaryWeapon) {
        o = n[a];
        break;
      }
      return o ? l.getItems(o.recipeIds, function (e, n) {
        return e ? t(e) : (i.upgradeWeaponList = n, i.statsChoice.show(), void i._selectElement(d.EARTH, t));
      }) : t();
    }) : t(new Error("Unable to find recipes for legendary weapon"));
  }
}
test1186: {
  function f() {
    return o ? l.getItems(o.recipeIds, function (e, n) {
      return e ? t(e) : (i.upgradeWeaponList = n, i.statsChoice.show(), void i._selectElement(d.EARTH, t));
    }) : t();
  }
}
test1187: {
  function f() {
    return e ? t(e) : (i.upgradeWeaponList = n, i.statsChoice.show(), void i._selectElement(d.EARTH, t));
  }
}
test1188: {
  function f() {
    return e ? i(e) : void i(t.array[0]);
  }
}
test1189: {
  function f() {
    return e ? t(e) : (i._refreshIngredientSlots(n, [_]), t());
  }
}
test1190: {
  function f() {
    return i[e] ? i[e][t] : null;
  }
}
test1191: {
  function f() {
    return t[e] ? t[e].question : null;
  }
}
test1192: {
  function f() {
    return t[e] ? t[e] : [];
  }
}
test1193: {
  function f() {
    return i ? e(i) : (t.headsMap = n, void e());
  }
}
test1194: {
  function f() {
    return t[e] ? t[e].title : null;
  }
}
test1195: {
  function f() {
    return p[e] ? p[e].godClass : "";
  }
}
test1196: {
  function f() {
    return p[e] ? p[e].bgClass : "";
  }
}
test1197: {
  function f() {
    return window.gui.databases.Breeds[e] ? window.gui.databases.Breeds[e] : {};
  }
}
test1198: {
  function f() {
    return p[e] ? p[e].roles : "";
  }
}
test1199: {
  function f() {
    return t[e] ? t[e].text : null;
  }
}
test1200: {
  function f() {
    return i ? e("Unable to get NPC Messages for Albuera :" + i) : (t._dialogsData = n, void e());
  }
}
test1201: {
  function f() {
    return e === window.gui.scenarioManager.conditionTypeEnum.FIGHT_PLACEMENT_POSITION ? 1 : 0;
  }
}
test1202: {
  function f() {
    return e === window.gui.scenarioManager.conditionTypeEnum.PLACEMENT_TAP ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -1 : 0;
  }
}
test1203: {
  function f() {
    return e === window.gui.scenarioManager.conditionTypeEnum.FIGHT_START ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -2 : 0;
  }
}
test1204: {
  function f() {
    return e === window.gui.scenarioManager.conditionTypeEnum.SPELL_SELECTED ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -4 : 0;
  }
}
test1205: {
  function f() {
    return e === window.gui.scenarioManager.conditionTypeEnum.SPELL_CASTED ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.SPELL_CANCELED ? -1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -5 : 0;
  }
}
test1206: {
  function f() {
    return e === window.gui.scenarioManager.conditionTypeEnum.FINISH_TURN ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -6 : 0;
  }
}
test1207: {
  function f() {
    return e === window.gui.scenarioManager.conditionTypeEnum.FINISH_TURN ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -7 : 0;
  }
}
test1208: {
  function f() {
    return e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -8 : 0;
  }
}
test1209: {
  function f() {
    return e === window.gui.scenarioManager.conditionTypeEnum.MAP_LOADED ? 1 : 0;
  }
}
test1210: {
  function f() {
    return e === window.gui.scenarioManager.conditionTypeEnum.SPELL_SELECTED ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -2 : 0;
  }
}
test1211: {
  function f() {
    return e === window.gui.scenarioManager.conditionTypeEnum.SPELL_CASTED ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.SPELL_CANCELED ? -1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -3 : 0;
  }
}
test1212: {
  function f() {
    return n <= 0 ? (window.dofus.sendMessage("QuestObjectiveValidationMessage", {
      questId: t.ALBUERA_QUEST_ID,
      objectiveId: 13531
    }), 0) : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "characteristics" === i.windowId ? 1 : 0;
  }
}
test1213: {
  function f() {
    return n <= 0 ? (window.dofus.sendMessage("QuestObjectiveValidationMessage", {
      questId: t.ALBUERA_QUEST_ID,
      objectiveId: 13531
    }), 0) : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "characteristics" === i.windowId ? -1 : e === window.gui.scenarioManager.conditionTypeEnum.TAP_ANYWHERE ? 1 : 0;
  }
}
test1214: {
  function f() {
    return n <= 0 ? (window.dofus.sendMessage("QuestObjectiveValidationMessage", {
      questId: t.ALBUERA_QUEST_ID,
      objectiveId: 13531
    }), 0) : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "characUpdate" === i.windowId ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "characteristics" === i.windowId ? -2 : 0;
  }
}
test1215: {
  function f() {
    return n <= 0 || e === window.gui.scenarioManager.conditionTypeEnum.CHARAC_UPDATE ? (window.dofus.sendMessage("QuestObjectiveValidationMessage", {
      questId: t.ALBUERA_QUEST_ID,
      objectiveId: 13531
    }), 0) : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "characteristics" === i.windowId ? -3 : 0;
  }
}
test1216: {
  function f() {
    return e === window.gui.scenarioManager.conditionTypeEnum.SHOP_LOADED ? 1 : 0;
  }
}
test1217: {
  function f() {
    return e === window.gui.scenarioManager.conditionTypeEnum.FIGHTER_TURN && 145490946 !== window.isoEngine.mapRenderer.mapId && 145489920 !== window.isoEngine.mapRenderer.mapId ? 1 : 0;
  }
}
test1218: {
  function f() {
    return e && e instanceof g ? void (this.element = e) : console.warn("UIElement - The element does not exist or is not a WuiDom");
  }
}
test1219: {
  function f() {
    return i && t ? void (this.element = i) : console.warn("InteractiveElement - Element not found");
  }
}
test1220: {
  function f() {
    return this.element && this.element.rootElement ? w(this.element.rootElement) : (console.warn("UIElement.getPosition - The element does not exist or does not have rootElement"), {});
  }
}
test1221: {
  function f() {
    return e ? e : (console.warn("ActorElement.getActor - Actor not found"), null);
  }
}
test1222: {
  function f() {
    return e ? e : (console.warn("NPCElement.getActor - NPC not found"), null);
  }
}
test1223: {
  function f() {
    return e ? e : (console.warn("MonsterElement.getActor - Monster not found"), null);
  }
}
test1224: {
  function f() {
    return this._changeLangMethod === R.RELOAD_PAGE ? (g.setValue("lang", e), g.saveNow(), void window.location.reload()) : void d.initialize({
      language: e,
      chaseText: t.chaseText
    }, b, w, function (n) {
      return n ? console.error("LoginScreen getText init", n) : (t.language = e, i.backToLogin(), g.setValue("lang", e, 1), void i._updateContent());
    });
  }
}
test1225: {
  function f() {
    return n ? console.error("LoginScreen getText init", n) : (t.language = e, i.backToLogin(), g.setValue("lang", e, 1), void i._updateContent());
  }
}
test1226: {
  function f() {
    return window.Config.disabledFeatures.guest ? (this.showLoginForm(), console.error(new Error("showGuestForm: guest is disabled"))) : (this._loginForm.hide(), this._guestForm.show(), void this._tokenForm.hide());
  }
}
test1227: {
  function f() {
    return e ? (g.delValue("guestAccount"), g.delValue("lastIdentification"), g.setValue("hasAccount", !0), g.saveNow(), window.gui.openSimplePopup(u("ui.popup.accessDenied.unvalidatedEmail"), u("ui.common.congratulation")), this._guestForm.refresh(), void this.showLoginForm()) : this._updateContent();
  }
}
test1228: {
  function f() {
    return e ? void ("NOTOKEN" === e.reason && o.displayAppropriateForm()) : void window.gui.initializeAfterLogin(function (e) {
      e && (console.error("initializeAfterLogin failed:", e), window.gui.openSimplePopup(u("ui.popup.connectionFailed.text")));
    });
  }
}
test1229: {
  function f() {
    return a ? n(a) : (window.gui.splashScreen.show(), e ? m.startLoginProcessWithPassword(o._connectMethod, e, t, i, n) : m.startLoginProcessWithoutPassword(o._connectMethod, {}, n));
  }
}
test1230: {
  function f() {
    return t ? e.openRegisterWindow(i.guestAccount) : void i._play();
  }
}
test1231: {
  function f() {
    return window.developmentMode || e && t ? void this.emit("submit", {
      login: e,
      password: t,
      save: i
    }) : window.gui.openSimplePopup(l("ui.popup.accessDenied.wrongCredentials"));
  }
}
test1232: {
  function f() {
    return e || !i ? t._noNewsFallback() : i.length ? (t._newsLoadedTime = Date.now(), t._pageCount = i.length, i.forEach(function (e) {
      e.imageUrl = e.image_url, e.tapParam = e.url;
    }), t._currentPage = 0, void t._carousel.setPages(i)) : (t.loginScreen._forumBlock.retractableBlock.expand(), t._noNewsFallback());
  }
}
test1233: {
  function f() {
    return this._boundedBlock || e._boundedBlock ? console.error(new Error("RetractableBlock: a block is already bounded to another one")) : (this._boundedBlock = e, void (e._boundedBlock = this));
  }
}
test1234: {
  function f() {
    return null === i ? "<bbcl=0 " + t + ">" : "<" + t.replace(/^(bbcl=)([0-9]+)/, function (e, t, i) {
      return t + (parseInt(i, 10) + 1);
    }) + ">";
  }
}
test1235: {
  function f() {
    return n.hasGuestAccount() ? t() : void o.createGuest(e, function (e, i) {
      return e ? t(e.error) : (n._guestAccount = i, void t());
    });
  }
}
test1236: {
  function f() {
    return e ? t(e.error) : (n._guestAccount = i, void t());
  }
}
test1237: {
  function f() {
    return e === E.DOWNLOAD_PREPARE ? this._updateState({
      currentScreen: E.DOWNLOAD_STOP
    }) : e === E.DOWNLOAD_ACTIVE ? (this._updateState({
      currentScreen: E.DOWNLOAD_STOP
    }), this._mapPreloader.stop()) : void this.close();
  }
}
test1238: {
  function f() {
    return i ? e(i) : t._hasStopped() ? t._tryClose() : (t._updateState({
      progress: .33
    }), void f(n, function (i, n) {
      return i ? e(i) : t._hasStopped() ? t._tryClose() : (t._updateState({
        progress: .67
      }), void g.upgradeAssets(n, function (i) {
        return i ? e(i) : t._hasStopped() ? t._tryClose() : void t._updateState({
          progress: 1,
          currentScreen: E.DOWNLOAD_ACTIVE
        });
      }));
    }));
  }
}
test1239: {
  function f() {
    return i ? e(i) : t._hasStopped() ? t._tryClose() : (t._updateState({
      progress: .67
    }), void g.upgradeAssets(n, function (i) {
      return i ? e(i) : t._hasStopped() ? t._tryClose() : void t._updateState({
        progress: 1,
        currentScreen: E.DOWNLOAD_ACTIVE
      });
    }));
  }
}
test1240: {
  function f() {
    return i ? e(i) : t._hasStopped() ? t._tryClose() : void t._updateState({
      progress: 1,
      currentScreen: E.DOWNLOAD_ACTIVE
    });
  }
}
test1241: {
  function f() {
    return a ? c.deleteFiles(e.changedFiles, i, t) : i();
  }
}
test1242: {
  function f() {
    return i ? void r.eraseDiskCache(function (e) {
      return e ? t(e) : void r.initializeDiskCache(function () {
        console.info("Updating staticDataVersionKey to " + i), o(i, u, t);
      });
    }) : t();
  }
}
test1243: {
  function f() {
    return e ? t(e) : void r.initializeDiskCache(function () {
      console.info("Updating staticDataVersionKey to " + i), o(i, u, t);
    });
  }
}
test1244: {
  function f() {
    return e.staticDataVersion || e.assetsVersion ? void a.series([n, i], function (e) {
      return e ? t(e) : t();
    }) : t();
  }
}
test1245: {
  function f() {
    return e ? t(e) : t();
  }
}
test1246: {
  function f() {
    return t ? o(t) : (s[e] = i, o());
  }
}
test1247: {
  function f() {
    return t ? e("Could not get the client assets version: " + t) : e(null, s);
  }
}
test1248: {
  function f() {
    return i ? e(i) : (t._updateTheProgressBar(.33), void a(n, function (i, n) {
      return i ? e(i) : (t._updateTheProgressBar(.67), void s.upgradeAssets(n, function (i) {
        return i ? e(i) : (t._updateTheProgressBar(1), e());
      }));
    }));
  }
}
test1249: {
  function f() {
    return i ? e(i) : (t._updateTheProgressBar(.67), void s.upgradeAssets(n, function (i) {
      return i ? e(i) : (t._updateTheProgressBar(1), e());
    }));
  }
}
test1250: {
  function f() {
    return i ? e(i) : (t._updateTheProgressBar(1), e());
  }
}
test1251: {
  function f() {
    return e ? e.connectedServerData : null;
  }
}
test1252: {
  function f() {
    return o() ? (l.goBackToSelectionOf("server"), void d.close(n.id)) : window.dofus.disconnect();
  }
}
test1253: {
  function f() {
    return "recaptchaShow" === a.type ? i.recaptcha.show() : (window.removeEventListener("message", o), s.close("recaptcha"), t(a));
  }
}
test1254: {
  function f() {
    return this._makePurchaseCb ? (e ? this._makePurchaseCb(o("order", e)) : this._makePurchaseCb(null, t), this._makePurchaseCb = null, void (this._purchasingProduct = "")) : void this._logger.error(o("order", 'callback called but no callbacks. Purchasing product: "' + this._purchasingProduct + '"'));
  }
}
test1255: {
  function f() {
    return a >= h ? e(new Error("Max limit of refreshes reach.")) : void i();
  }
}
test1256: {
  function f() {
    return this.isAvailable() ? void i() : e(new Error("not available."));
  }
}
test1257: {
  function f() {
    return n() ? Boolean(e.store) : Boolean(e.wizPurchase);
  }
}
test1258: {
  function f() {
    return a ? a.state !== i.store.APPROVED ? t(o("finishPurchase", "Cannot finish, " + e + " not APPROVED")) : (a.finish(), t()) : t(o("finishPurchase", "No product found for " + e));
  }
}
test1259: {
  function f() {
    return n() ? (this._purchasingProduct = e, this._makePurchaseCb = t, void o.store.order(e).then(function () {}).error(function (e) {
      i._callbackStoreOrder(e);
    })) : void o.wizPurchase.makePurchase(e, function (e) {
      t(null, e);
    }, function (e) {
      t(new Error(i._getWizPurchaseError(e)));
    });
  }
}
test1260: {
  function f() {
    return t.moving ? (this.mapRenderer.removeMovementFeedback(), this.endMovementCallback = null, void t.cancelMovement(e)) : (this.endMovementCallback = e, this.onArrived());
  }
}
test1261: {
  function f() {
    return this.actorManager.userActor.moving || this.isMovementWaitingForConfirmation ? this.cancelUserActorMovement(e) : e();
  }
}
test1262: {
  function f() {
    return n.isPathMatchingServerPath(e, r) ? void 0 : 0 !== r.length ? (this.endMovementCallback = null, n.switchPath(r, function () {
      t.emit("arrived", i);
    })) : (n.noMovement(), n.setDisposition(i), this.endMovementCallback = null, this.onArrived(i));
  }
}
test1263: {
  function f() {
    return this.mapRenderer.getChangeMapFlags(o.cell)[i] ? o.cell : -1;
  }
}
test1264: {
  function f() {
    return a.cellId === o ? s() : void this._movePlayerOnMap(o, !1, s);
  }
}
test1265: {
  function f() {
    return this.map ? k.getChangeMapFlags(this.map.cells, this.mapId, e) : (console.error(new Error("map is null, isReady is " + this.isReady)), {});
  }
}
test1266: {
  function f() {
    return i.left && t.isBehaviourEnabled(I.LEFT_SLIDE_CHANGEMAP) ? "left" : i.right && t.isBehaviourEnabled(I.RIGHT_SLIDE_CHANGEMAP) ? "right" : i.top && t.isBehaviourEnabled(I.TOP_SLIDE_CHANGEMAP) ? "top" : i.bottom && t.isBehaviourEnabled(I.BOTTOM_SLIDE_CHANGEMAP) ? "bottom" : null;
  }
}
test1267: {
  function f() {
    return t ? (t.front && t.front.remove(), void delete r[e]) : void console.warn("IsoEngine removePing: There no ping picto with the id", e);
  }
}
test1268: {
  function f() {
    return i ? void i.play(t) : console.warn("Tap feedback", e.id, "does not exist.");
  }
}
test1269: {
  function f() {
    return this._isLoaded ? (this._isLoaded = !0, this._cleanTween(), this.animation.animManager.assignSymbol({
      base: e,
      direction: -1
    }, !0), this.animation.position = t, this.animation.x = n.x, this.animation.y = n.y, this.animation.show(), void (this._tween = new r(this.animation, ["alpha"]).from({
      alpha: 0
    }).to({
      alpha: 1
    }, 30).start())) : void (this._loadingCallback = function () {
      i.playAnimation(e, t);
    });
  }
}
test1270: {
  function f() {
    return null !== v ? [e, m(v.i - 1, v.j - 1)] : (console.error(new Error("[pathFinder.getPath] Player is stuck in " + h + "/" + g)), [e]);
  }
}
test1271: {
  function f() {
    return d(e) ? e : u(e);
  }
}
test1272: {
  function f() {
    return 0 === l ? {
      left: !1,
      right: !1,
      top: !1,
      bottom: !1
    } : {
      left: r(i, l),
      right: a(i, l),
      top: o(i, l),
      bottom: s(i, l)
    };
  }
}
test1273: {
  function f() {
    return t === -1 ? console.warn("Removing a non existing zone") : void this.zones.splice(t, 1);
  }
}
test1274: {
  function f() {
    return i ? t(null, i.data) : t(new Error("actorNotFound"));
  }
}
test1275: {
  function f() {
    return i ? t || !i.moving && !i.animated ? void i.remove() : void i.pathTween.onceFinish(function () {
      n.getActor(e) && n.removeActor(e);
    }) : console.warn("[ACTOR MANAGER] removeActor: actor not found", e);
  }
}
test1276: {
  function f() {
    return s ? (s.setCellPosition(o), this.paused ? (s.position = o, t && t()) : (2 === n.length && (n = l.normalizePath(n)), n.length > 1 ? void (this.isoEngine.mapRenderer.isReady ? s.setPath(n, {
      slide: e.slide,
      cb: t
    }) : s.setDisposition(o)) : t && t())) : (this.addEmptyActor({
      contextualId: i,
      disposition: {
        cellId: o,
        direction: 1
      }
    }), t && t());
  }
}
test1277: {
  function f() {
    return i ? this.customAnimMethods[e] ? console.warn("ActorManager.addAnimBehaviourToActor: actor " + e + " already has a custom animation") : this.followers.indexOf(i) !== -1 ? console.error(new Error("ActorManager.addAnimBehaviourToActor: cannot add an anim behaviour to a follower")) : "function" != typeof t ? console.error(new Error("ActorManager.addAnimBehaviourToActor: animationMethod is not a function")) : void (this.customAnimMethods[e] = t) : console.error(new Error("ActorManager.addAnimBehaviourToActor: actor " + e + " unknown"));
  }
}
test1278: {
  function f() {
    return e.nicknameLabel ? void (e.moving || "full" === e.nicknameLabel.getType() || (e.updateNicknameLabel(f.isRoleplayMode && this._fullNicknameLabelCount < s.maxTitlesOrnaments), "full" === e.nicknameLabel.getType() && this._fullNicknameLabelCount++)) : void console.warn("Tried to refresh non existing nickname label");
  }
}
test1279: {
  function f() {
    return o ? o.playCustomAnimation(t, i) : i(new Error("NPC not found with ID: " + e));
  }
}
test1280: {
  function f() {
    return t.isDead ? (t.animated = !1, t.emoteAnimated = !1, t.fighterIndicator && t.fighterIndicator.remove(), t.removeTeamCircle(), t.actorManager.removeActor(t.actorId), void (t.actorManager.userActor.isDead || !window.gui.fightManager.isFightersTurn(t.actorManager.userActor.actorId) || window.gui.fightManager.getIsTurnEndRequestPending() || window.isoEngine.displayUserMovementZone())) : void t.staticAnim();
  }
}
test1281: {
  function f() {
    return i ? void i.animManager.addAnimation(o, function () {
      i.animManager.assignSymbol(o, e.loop, function () {
        i.customAnimTimeout && clearTimeout(i.customAnimTimeout), i.customAnimTimeout = setTimeout(function () {
          return i ? (i.actorState = r.IDLE, i.staticAnim(), i.animated = !1, t()) : t(new Error("Actor has been removed while customAnimTimeout is still active"));
        }, e.duration);
      });
    }) : t(new Error("Actor has been removed while customAnimTimeout is still active"));
  }
}
test1282: {
  function f() {
    return i ? (i.actorState = r.IDLE, i.staticAnim(), i.animated = !1, t()) : t(new Error("Actor has been removed while customAnimTimeout is still active"));
  }
}
test1283: {
  function f() {
    return e ? Boolean(l.getLookOfRider(e)) && this.isPlayer() && !d.showMountsInFight && !c.isRoleplayMode : (console.error(new Error("The look is missing.")), !1);
  }
}
test1284: {
  function f() {
    return this.actorManager.isCreatureModeOn ? (e.look || console.error(new Error("Assigning falsy look to realLook")), void (this.realLook = e.look)) : (e.animationManager && 1 === e.look.bonesId && e.look.skins[0] && e.animationManager.addAnimationModifier("AnimStatique", "AnimStatique" + e.look.skins[0]), e.animationManager && e.animationManager !== this.animationManager && (this.animManager.clear(), this.setAnimManager(e.animationManager)), this.staticAnim(), this._isCandidateToHideTheMountInFight(e.look) ? this.look = l.getLookWithoutMount(e.look) : this.look = e.look, this.look || console.error(new Error("Assigning falsy look to realLook")), void (this.realLook = this.look));
  }
}
test1285: {
  function f() {
    return this.realLook ? void this.actorManager.setActorLook(this.actorId, this.realLook, {
      useRealLook: !0
    }, null) : void console.warn("actorId " + this.actorId + " not real look yet...");
  }
}
test1286: {
  function f() {
    return e ? e.data : (console.warn("Fighter " + this.actorId + " could not be found."), new r());
  }
}
test1287: {
  function f() {
    return e ? this.getFighterData().teamId : -1;
  }
}
test1288: {
  function f() {
    return this.isInvisibleInFight() ? console.warn("We can not change the position of an invisible actor in a fight") : (this.actorManager.removeActorOccupation(this), this.cellId = e, this.actorManager.addActorOccupation(this), void (this.carriedActor && this.carriedActor.setCellPosition(e)));
  }
}
test1289: {
  function f() {
    return i && this.moving ? this.cancelMovement(n) : (this.moving && this.cancelMovement(), void n());
  }
}
test1290: {
  function f() {
    return i ? e(i) : (t._calculateDimension(), !t._ornamentAssetId || t._alignment && 0 !== t._alignment.alignmentGrade ? (t._resizeTextCanvas(t._textWidth, t._textHeight, 0, 0), t._displayText(), t._alignment && 0 !== t._alignment.alignmentGrade ? t._displayWings(e) : e()) : (1 === t._textCanvas.width && t._displayTextAndOrnament(), e()));
  }
}
test1291: {
  function f() {
    return t._ornamentId ? void d.getData("Ornaments", t._ornamentId, function (i, n) {
      return i ? e(i) : n ? (t._ornamentAssetId = n.assetId, void e()) : e("staticContent.getData Ornaments - ornamentData is " + n);
    }) : e();
  }
}
test1292: {
  function f() {
    return i ? e(i) : n ? (t._ornamentAssetId = n.assetId, void e()) : e("staticContent.getData Ornaments - ornamentData is " + n);
  }
}
test1293: {
  function f() {
    return t._ornamentAssetId ? void c.loadModel("ornaments", "ornament_" + t._ornamentAssetId, function (i, n) {
      t._jsonObj = i, t._image = n, e();
    }) : e();
  }
}
test1294: {
  function f() {
    return t._titleId ? void d.getData("Titles", t._titleId, function (i, n) {
      return i ? e(i) : n ? (t._title = t._gender ? n.nameFemaleId : n.nameMaleId, void e()) : e("staticContent.getData Titles - titleData is " + n);
    }) : e();
  }
}
test1295: {
  function f() {
    return i ? e(i) : n ? (t._title = t._gender ? n.nameFemaleId : n.nameMaleId, void e()) : e("staticContent.getData Titles - titleData is " + n);
  }
}
test1296: {
  function f() {
    return t._guild && t._guild.guildEmblem ? void t._guildEmblem.setValue(t._guild.guildEmblem, !0, e) : e();
  }
}
test1297: {
  function f() {
    return t._alliance && t._alliance.allianceEmblem ? void t._allianceEmblem.setValue(t._alliance.allianceEmblem, !0, e) : e();
  }
}
test1298: {
  function f() {
    return t._bottomWingsInfo ? void h.loadImage(t._bottomWingsInfo.imagePath, function (i) {
      t._nicknameLabelCanvas.displayWingPart(i, t._bottomWingsInfo, !1), e();
    }) : e();
  }
}
test1299: {
  function f() {
    return e === t ? "ally" : e === i ? "defender" : "attacker";
  }
}
test1300: {
  function f() {
    return this.icons.hasOwnProperty(t) ? this.icons[t][e] : null;
  }
}
test1301: {
  function f() {
    return r._cleared ? void e.release() : (r.w = e.element.width, r.h = e.element.height, r.texture = e, a._positionIcons(), void r.forceRefresh());
  }
}
test1302: {
  function f() {
    return n ? n : (console.error("getCreatureBones not found for:", t), 666);
  }
}
test1303: {
  function f() {
    return this.data.isBoss ? 1748 : u.indexOf(this.data.creatureGenericId) >= 0 ? 2247 : this.data.isSummon ? 1765 : 1747;
  }
}
test1304: {
  function f() {
    return this.realLook ? this.setLook(this.realLook, {
      useRealLook: !0
    }, i) : i();
  }
}
test1305: {
  function f() {
    return f ? (window.gui.transmitFightSequenceMessage({
      _messageType: "confirmTurnEnd"
    }), window.dofus.sendMessage("GameFightTurnReadyMessage", {
      isReady: !0
    }), void (g = !1)) : void (g = !0);
  }
}
test1306: {
  function f() {
    return _ > 0 ? void (_ -= 1) : (v._synchronizeBuff = e, window.gui.transmitFightSequenceMessage(v), _ = 0, void (v = null));
  }
}
test1307: {
  function f() {
    return void 0 === n && void 0 === o ? (console.error(new Error("[process messageSequence] Unsupported game action: " + e._messageType)), t()) : o ? o(e, i, t) : (n && n(e, i), t());
  }
}
test1308: {
  function f() {
    return t === U.ORIENTED ? q.NONE : e ? i ? q.TOWARD_POSITION2 : q.TOWARD_POSITION1 : q.NONE;
  }
}
test1309: {
  function f() {
    return t ? (t.death = !0, void (g && g._deadIds.push(e.targetId))) : console.error("Actor " + e.targetId + " not found.");
  }
}
test1310: {
  function f() {
    return i ? void console.error("Unable to execute lifePointVariationBatch " + i) : void t.push(function (t) {
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
  }
}
test1311: {
  function f() {
    return !e._spell && i && (p.showApMpUsed || e.actionId !== m.ACTION_CHARACTER_MOVEMENT_POINTS_USE && e.actionId !== m.ACTION_CHARACTER_ACTION_POINTS_USE) ? void t.push(function (t) {
      return a(e, i), window.gui.transmitFightSequenceMessage(e), t();
    }) : t.push(function (t) {
      return window.gui.transmitFightSequenceMessage(e), t();
    });
  }
}
test1312: {
  function f() {
    return e.shieldLoss ? (s(e, t, M), i()) : e._spell && e._spell.critical === f.CRITICAL_HIT ? (s(e, t, y), i()) : (s(e, t, e.criticalHit ? y : v), i());
  }
}
test1313: {
  function f() {
    return e.shieldLoss ? (e._labelColor = M, t()) : e._spell && e._spell.critical === f.CRITICAL_HIT ? (e._labelColor = y, t()) : (e._labelColor = e.criticalHit ? y : v, t());
  }
}
test1314: {
  function f() {
    return s ? void h.getDataMap("SpellEffects", [e.effectId], function (n, a) {
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
    }) : a.once("mapLoaded", function () {
      n(e, t);
    });
  }
}
test1315: {
  function f() {
    return e._glyphGfxId && !e._glyph ? (e._glyph = new c({
      scene: window.isoEngine.mapScene
    }), void u.loadAnimationManager(e._glyph, "bone", e._glyphGfxId + "/FX", function () {
      n(e, t);
    })) : void n(e, t);
  }
}
test1316: {
  function f() {
    return i ? (e._spellId = i.spellId, window.gui.transmitFightSequenceMessage(e), t()) : (console.warn("No data found for zone: mark:" + e.markId), t());
  }
}
test1317: {
  function f() {
    return n ? void t.push(function (t) {
      window.gui.transmitFightSequenceMessage(e), n.oneShootAnim({
        base: "AnimVanish"
      }, {
        backToStatic: !1
      }, function () {
        return i.removeActor(e.targetId), t();
      });
    }) : console.warn("No found actor with id " + e.targetId);
  }
}
test1318: {
  function f() {
    return e ? void T.queueUseInteractive(v.elementId, w.skillInstanceUid) : (T.actionQueue.clear(), T.clearHighlights(null, L.QUEUE));
  }
}
test1319: {
  function f() {
    return C ? (this._addHighlight(p, L.QUEUE), !0) : (!_ && 1 === v.enabledSkills.length && w && (this.instantUseInteractive(v.elementId, w.skillInstanceUid), this._addHighlight(p)), !0);
  }
}
test1320: {
  function f() {
    return u.areCellsNeighbours(a.cellId, o, {
      allowDiagonal: !0,
      useHeightCell: !0
    }) ? s() : void this._movePlayerOnMap(o, !0, s);
  }
}
test1321: {
  function f() {
    return i ? console.error("interactiveUseStart: user actor is not ready") : console.warn("interactiveUseStart: no actor with id " + e.entityId);
  }
}
test1322: {
  function f() {
    return i ? console.error("interactiveUseStart: no interactive with id " + e.elemId) : console.warn("interactiveUseStart: no interactive with id " + e.elemId);
  }
}
test1323: {
  function f() {
    return i ? void this._addArrowOnActor(i, !1, t) : console.warn("NPC not found with ID: " + e);
  }
}
test1324: {
  function f() {
    return i ? void this._addArrowOnActor(i, !0, t) : console.warn("Monster not found with ID: " + e);
  }
}
test1325: {
  function f() {
    return i ? (this._addHighlight(i), void this.clearHighlights(t || x)) : console.warn("Actor with id " + e + " to highlight not found.");
  }
}
test1326: {
  function f() {
    return o ? (o.path || (o.path = s(i, t, e, 0, n - 1, [])), o.path) : null;
  }
}
test1327: {
  function f() {
    return (r = r || l.getFirstMapFlag(i.cell)) ? this.gotoNeighbourMap(r, i.cell, a, s) : void this._movePlayerOnMap(f);
  }
}
test1328: {
  function f() {
    return this._spellRangeLayer ? void this.displaySpellRange() : void this.displayUserMovementZone();
  }
}
test1329: {
  function f() {
    return e ? (h.unshift(l), window.gui.emit("checkServerLag", "fightAction", "start"), u.emit("fightTap", r), window.dofus.sendMessage("GameMapMovementRequestMessage", {
      keyMovements: d(h),
      mapId: s
    }), u._resetWalkLayer(), void a()) : void u._resetWalkLayer();
  }
}
test1330: {
  function f() {
    return n ? x === n ? n : (x = n, this.clearHighlights(), this._addHighlight(n), n) : (x = null, void this.clearHighlights());
  }
}
test1331: {
  function f() {
    return i && n ? i.data.stats.invisibilityState !== y && i.data.stats.invisibilityState !== w && i.data.teamId !== n.data.teamId && i.data.alive !== !1 && !i.data.isCarryied && !i.hasState(g.STATE_CANNOT_TACKLE) && !i.hasState(g.STATE_CHARACTER_ROOTED) && i.canTackle : (console.warn("canBeTackler: Corresponding fighters could not be found."), !1);
  }
}
test1332: {
  function f() {
    return n ? n.data.stats.invisibilityState !== y && n.data.stats.invisibilityState !== w && (!n.data.isCarryied || t !== i) && !n.hasState(g.STATE_CANNOT_BE_TACKLED) && !n.hasState(g.STATE_CHARACTER_ROOTED) : (console.error("Corresponding fighter could not be found."), !1);
  }
}
test1333: {
  function f() {
    return e.damagingMarks.length < t.damagingMarks.length ? -1 : e.damagingMarks.length === t.damagingMarks.length ? e.availableMp > t.availableMp ? -1 : e.availableMp === t.availableMp ? e.availableAp > t.availableAp ? -1 : e.availableAp === t.availableAp ? 0 : 1 : 1 : 1;
  }
}
test1334: {
  function f() {
    return null === o ? (window.foreground.deselectSpell(), window.gui.shortcutBar.deselectCurrentSlot(), void this.clearSpellDisplay()) : (this.displayEffectZone(o), window.gui.emit("checkServerLag", "fightAction", "start"), window.gui.fightManager.castSpell(m.spellId, o, n.characterId), m = null, this.clearSpellDisplay(), window.gui.shortcutBar.deselectCurrentSlot(), void window.gui.damagePreview.confirm());
  }
}
test1335: {
  function f() {
    return e ? (o.emit("checkServerLag", "fightAction", "start"), o.fightManager.castSpell(m.spellId, r, n.characterId), m = null, c.clearSpellDisplay(), o.shortcutBar.deselectCurrentSlot(), void a.confirm()) : (c.clearSpellDisplay(), void o.shortcutBar.deselectCurrentSlot());
  }
}
test1336: {
  function f() {
    return n ? (t.emit("checkServerLag", "fightAction", "start"), t.fightManager.castSpell(m.spellId, e, t.playerData.characters.controlledCharacterId), m = null, a.clearSpellDisplay(), t.shortcutBar.deselectCurrentSlot(), void i.confirm()) : (a.clearSpellDisplay(), void t.shortcutBar.deselectCurrentSlot());
  }
}
test1337: {
  function f() {
    return t.teamId === d.TEAM_CHALLENGER ? v : w;
  }
}
test1338: {
  function f() {
    return t.teamId === d.TEAM_CHALLENGER ? v : y;
  }
}
test1339: {
  function f() {
    return _[o.id] ? s.icons[t] ? i.release() : (s.icons[t] = new p({
      layer: r.MAP_LAYER_ICONS,
      w: i.element.width,
      h: i.element.height,
      scene: a
    }, i), s.options[t] || s.icons[t].hide(), void o._updateIconsPosition(e)) : i.release();
  }
}
test1340: {
  function f() {
    return s ? g.indexOf(t) === -1 ? console.error(new Error("Unknown fightOption:" + t)) : s.icons[t] ? (console.warn("Icon " + t + " already exists for team " + e + " in fight " + this.id), void s.icons[t].show()) : void h.loadTexture(i, n, a.renderer) : console.error(new Error("No team with id " + e + " in fight " + this.id));
  }
}
test1341: {
  function f() {
    return n ? void (g.indexOf(t) !== -1 && this.setFightOption(e, t, i)) : console.error(new Error("No team with id " + e + " in fight " + this.id));
  }
}
test1342: {
  function f() {
    return t ? void t.remove() : console.warn("No challenge with id " + e);
  }
}
test1343: {
  function f() {
    return o ? void o.challengeOptionChange(t, i, n) : console.warn("No challenge with id " + e);
  }
}
test1344: {
  function f() {
    return s ? void s.updateData(i) : console.warn("No fight id " + a);
  }
}
test1345: {
  function f() {
    return a ? i(a) : s[o] ? (_[o] = s[o], n.playEmoteFromOption(e, t, i)) : i();
  }
}
test1346: {
  function f() {
    return o ? (i.lastEmoteAnim = e._emote.persistancy ? o : null, void this.actorManager.addToFifo(i.actorId, function (e) {
      e(), i.loadAndPlayAnimation({
        base: "AnimEmote",
        type: o
      }, {
        loop: !1,
        isEmoteAnimated: !0
      }, t);
    })) : t();
  }
}
test1347: {
  function f() {
    return this.mapRenderer.isReady ? (this._updateMapInfoData(e, {
      noMovementWaitReset: !0
    }), window.foreground.show(), window.foreground.unlock("loadMap"), this.actorManager.updateMapInfoData(e, function () {
      t.emit("actorLoaded");
    }), this.emit("mapLoaded", {
      isReload: !0
    }), void (this.interactiveBlink && this.highlightInteractivesWithDifferentType())) : void this.mapRenderer.once("ready", function () {
      t.reloadMap(e);
    });
  }
}
test1348: {
  function f() {
    return i ? void d.loadJson(r, function (t) {
      return u = t, e();
    }) : e();
  }
}
test1349: {
  function f() {
    return t ? window.dofus.disconnect("LOADING_MAP_ERROR " + t) : h === s.EMPTY_JSON ? window.dofus.disconnect("ASSET_MISSING") : void (h.id === C && (null === T ? (T = {
      msg: e,
      mapData: h
    }, n._loadMapAssets()) : T = {
      msg: e,
      mapData: h
    }));
  }
}
test1350: {
  function f() {
    return null !== T && C !== t.id ? void i._loadMapAssets() : (window.foreground.show(), window.foreground.unlock("loadMap"), l.fillPathGrid(t), i._updateMapInfoData(e), i.actorManager.updateMapInfoData(e, function () {
      i.emit("actorLoaded");
    }), i.actorManager.unpause(), i.actorManager.userActor.moving = !1, v.unlockMessages(), i.emit("mapLoaded"), i._runLoadingFadeOutTransition(), i.interactiveBlink && i.highlightInteractivesWithDifferentType(), C = null, T = null, void (i._isMapLoading = !1));
  }
}

