/**
 * Created by kgc on 2018/3/10.
 */
/*
 * @Author: zhuxy
 * @Date:   2015-12-03 09:47:02
 * @Last Modified by:   zhuxy
 * @Last Modified time: 2015-12-03 16:53:46
 */
(function (e, t) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define(t)
    } else if (typeof exports === "object") {
        module.exports = t()
    } else {
        e.returnExports = t()
    }
})(this, function () {
    var e = Array;
    var t = e.prototype;
    var r = Object;
    var n = r.prototype;
    var i = Function.prototype;
    var a = String;
    var o = a.prototype;
    var u = Number;
    var f = u.prototype;
    var l = t.slice;
    var s = t.splice;
    var c = t.push;
    var v = t.unshift;
    var p = t.concat;
    var h = i.call;
    var g = Math.max;
    var y = Math.min;
    var d = n.toString;
    var m = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
    var w;
    var b = Function.prototype.toString, T = function tryFunctionObject(e) {
        try {
            b.call(e);
            return true
        } catch (t) {
            return false
        }
    }, x = "[object Function]", O = "[object GeneratorFunction]";
    w = function isCallable(e) {
        if (typeof e !== "function") {
            return false
        }
        if (m) {
            return T(e)
        }
        var t = d.call(e);
        return t === x || t === O
    };
    var S;
    var I = RegExp.prototype.exec, j = function tryRegexExec(e) {
        try {
            I.call(e);
            return true
        } catch (t) {
            return false
        }
    }, E = "[object RegExp]";
    S = function isRegex(e) {
        if (typeof e !== "object") {
            return false
        }
        return m ? j(e) : d.call(e) === E
    };
    var N;
    var D = String.prototype.valueOf, M = function tryStringObject(e) {
        try {
            D.call(e);
            return true
        } catch (t) {
            return false
        }
    }, U = "[object String]";
    N = function isString(e) {
        if (typeof e === "string") {
            return true
        }
        if (typeof e !== "object") {
            return false
        }
        return m ? M(e) : d.call(e) === U
    };
    var k = function (e) {
        var t = r.defineProperty && function () {
            try {
                var e = {};
                r.defineProperty(e, "x", {enumerable: false, value: e});
                for (var t in e) {
                    return false
                }
                return e.x === e
            } catch (n) {
                return false
            }
        }();
        var n;
        if (t) {
            n = function (e, t, n, i) {
                if (!i && t in e) {
                    return
                }
                r.defineProperty(e, t, {configurable: true, enumerable: false, writable: true, value: n})
            }
        } else {
            n = function (e, t, r, n) {
                if (!n && t in e) {
                    return
                }
                e[t] = r
            }
        }
        return function defineProperties(t, r, i) {
            for (var a in r) {
                if (e.call(r, a)) {
                    n(t, a, r[a], i)
                }
            }
        }
    }(n.hasOwnProperty);
    var R = function isPrimitive(e) {
        var t = typeof e;
        return e === null || t !== "object" && t !== "function"
    };
    var F = u.isNaN || function (e) {
        return e !== e
    };
    var A = {
        ToInteger: function ToInteger(e) {
            var t = +e;
            if (F(t)) {
                t = 0
            } else if (t !== 0 && t !== 1 / 0 && t !== -(1 / 0)) {
                t = (t > 0 || -1) * Math.floor(Math.abs(t))
            }
            return t
        }, ToPrimitive: function ToPrimitive(e) {
            var t, r, n;
            if (R(e)) {
                return e
            }
            r = e.valueOf;
            if (w(r)) {
                t = r.call(e);
                if (R(t)) {
                    return t
                }
            }
            n = e.toString;
            if (w(n)) {
                t = n.call(e);
                if (R(t)) {
                    return t
                }
            }
            throw new TypeError
        }, ToObject: function (e) {
            if (e == null) {
                throw new TypeError("can't convert " + e + " to object")
            }
            return r(e)
        }, ToUint32: function ToUint32(e) {
            return e >>> 0
        }
    };
    var P = function Empty() {
    };
    k(i, {
        bind: function bind(e) {
            var t = this;
            if (!w(t)) {
                throw new TypeError("Function.prototype.bind called on incompatible " + t)
            }
            var n = l.call(arguments, 1);
            var i;
            var a = function () {
                if (this instanceof i) {
                    var a = t.apply(this, p.call(n, l.call(arguments)));
                    if (r(a) === a) {
                        return a
                    }
                    return this
                } else {
                    return t.apply(e, p.call(n, l.call(arguments)))
                }
            };
            var o = g(0, t.length - n.length);
            var u = [];
            for (var f = 0; f < o; f++) {
                c.call(u, "$" + f)
            }
            i = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this, arguments); }")(a);
            if (t.prototype) {
                P.prototype = t.prototype;
                i.prototype = new P;
                P.prototype = null
            }
            return i
        }
    });
    var $ = h.bind(n.hasOwnProperty);
    var C = h.bind(n.toString);
    var Z = h.bind(o.slice);
    var J = h.bind(o.split);
    var z = h.bind(o.indexOf);
    var B = h.bind(c);
    var G = e.isArray || function isArray(e) {
        return C(e) === "[object Array]"
    };
    var H = [].unshift(0) !== 1;
    k(t, {
        unshift: function () {
            v.apply(this, arguments);
            return this.length
        }
    }, H);
    k(e, {isArray: G});
    var L = r("a");
    var X = L[0] !== "a" || !(0 in L);
    var Y = function properlyBoxed(e) {
        var t = true;
        var r = true;
        if (e) {
            e.call("foo", function (e, r, n) {
                if (typeof n !== "object") {
                    t = false
                }
            });
            e.call([1], function () {
                "use strict";
                r = typeof this === "string"
            }, "x")
        }
        return !!e && t && r
    };
    k(t, {
        forEach: function forEach(e) {
            var t = A.ToObject(this);
            var r = X && N(this) ? J(this, "") : t;
            var n = -1;
            var i = A.ToUint32(r.length);
            var a;
            if (arguments.length > 1) {
                a = arguments[1]
            }
            if (!w(e)) {
                throw new TypeError("Array.prototype.forEach callback must be a function")
            }
            while (++n < i) {
                if (n in r) {
                    if (typeof a === "undefined") {
                        e(r[n], n, t)
                    } else {
                        e.call(a, r[n], n, t)
                    }
                }
            }
        }
    }, !Y(t.forEach));
    k(t, {
        map: function map(t) {
            var r = A.ToObject(this);
            var n = X && N(this) ? J(this, "") : r;
            var i = A.ToUint32(n.length);
            var a = e(i);
            var o;
            if (arguments.length > 1) {
                o = arguments[1]
            }
            if (!w(t)) {
                throw new TypeError("Array.prototype.map callback must be a function")
            }
            for (var u = 0; u < i; u++) {
                if (u in n) {
                    if (typeof o === "undefined") {
                        a[u] = t(n[u], u, r)
                    } else {
                        a[u] = t.call(o, n[u], u, r)
                    }
                }
            }
            return a
        }
    }, !Y(t.map));
    k(t, {
        filter: function filter(e) {
            var t = A.ToObject(this);
            var r = X && N(this) ? J(this, "") : t;
            var n = A.ToUint32(r.length);
            var i = [];
            var a;
            var o;
            if (arguments.length > 1) {
                o = arguments[1]
            }
            if (!w(e)) {
                throw new TypeError("Array.prototype.filter callback must be a function")
            }
            for (var u = 0; u < n; u++) {
                if (u in r) {
                    a = r[u];
                    if (typeof o === "undefined" ? e(a, u, t) : e.call(o, a, u, t)) {
                        B(i, a)
                    }
                }
            }
            return i
        }
    }, !Y(t.filter));
    k(t, {
        every: function every(e) {
            var t = A.ToObject(this);
            var r = X && N(this) ? J(this, "") : t;
            var n = A.ToUint32(r.length);
            var i;
            if (arguments.length > 1) {
                i = arguments[1]
            }
            if (!w(e)) {
                throw new TypeError("Array.prototype.every callback must be a function")
            }
            for (var a = 0; a < n; a++) {
                if (a in r && !(typeof i === "undefined" ? e(r[a], a, t) : e.call(i, r[a], a, t))) {
                    return false
                }
            }
            return true
        }
    }, !Y(t.every));
    k(t, {
        some: function some(e) {
            var t = A.ToObject(this);
            var r = X && N(this) ? J(this, "") : t;
            var n = A.ToUint32(r.length);
            var i;
            if (arguments.length > 1) {
                i = arguments[1]
            }
            if (!w(e)) {
                throw new TypeError("Array.prototype.some callback must be a function")
            }
            for (var a = 0; a < n; a++) {
                if (a in r && (typeof i === "undefined" ? e(r[a], a, t) : e.call(i, r[a], a, t))) {
                    return true
                }
            }
            return false
        }
    }, !Y(t.some));
    var q = false;
    if (t.reduce) {
        q = typeof t.reduce.call("es5", function (e, t, r, n) {
            return n
        }) === "object"
    }
    k(t, {
        reduce: function reduce(e) {
            var t = A.ToObject(this);
            var r = X && N(this) ? J(this, "") : t;
            var n = A.ToUint32(r.length);
            if (!w(e)) {
                throw new TypeError("Array.prototype.reduce callback must be a function")
            }
            if (n === 0 && arguments.length === 1) {
                throw new TypeError("reduce of empty array with no initial value")
            }
            var i = 0;
            var a;
            if (arguments.length >= 2) {
                a = arguments[1]
            } else {
                do {
                    if (i in r) {
                        a = r[i++];
                        break
                    }
                    if (++i >= n) {
                        throw new TypeError("reduce of empty array with no initial value")
                    }
                } while (true)
            }
            for (; i < n; i++) {
                if (i in r) {
                    a = e(a, r[i], i, t)
                }
            }
            return a
        }
    }, !q);
    var K = false;
    if (t.reduceRight) {
        K = typeof t.reduceRight.call("es5", function (e, t, r, n) {
            return n
        }) === "object"
    }
    k(t, {
        reduceRight: function reduceRight(e) {
            var t = A.ToObject(this);
            var r = X && N(this) ? J(this, "") : t;
            var n = A.ToUint32(r.length);
            if (!w(e)) {
                throw new TypeError("Array.prototype.reduceRight callback must be a function")
            }
            if (n === 0 && arguments.length === 1) {
                throw new TypeError("reduceRight of empty array with no initial value")
            }
            var i;
            var a = n - 1;
            if (arguments.length >= 2) {
                i = arguments[1]
            } else {
                do {
                    if (a in r) {
                        i = r[a--];
                        break
                    }
                    if (--a < 0) {
                        throw new TypeError("reduceRight of empty array with no initial value")
                    }
                } while (true)
            }
            if (a < 0) {
                return i
            }
            do {
                if (a in r) {
                    i = e(i, r[a], a, t)
                }
            } while (a--);
            return i
        }
    }, !K);
    var Q = t.indexOf && [0, 1].indexOf(1, 2) !== -1;
    k(t, {
        indexOf: function indexOf(e) {
            var t = X && N(this) ? J(this, "") : A.ToObject(this);
            var r = A.ToUint32(t.length);
            if (r === 0) {
                return -1
            }
            var n = 0;
            if (arguments.length > 1) {
                n = A.ToInteger(arguments[1])
            }
            n = n >= 0 ? n : g(0, r + n);
            for (; n < r; n++) {
                if (n in t && t[n] === e) {
                    return n
                }
            }
            return -1
        }
    }, Q);
    var V = t.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
    k(t, {
        lastIndexOf: function lastIndexOf(e) {
            var t = X && N(this) ? J(this, "") : A.ToObject(this);
            var r = A.ToUint32(t.length);
            if (r === 0) {
                return -1
            }
            var n = r - 1;
            if (arguments.length > 1) {
                n = y(n, A.ToInteger(arguments[1]))
            }
            n = n >= 0 ? n : r - Math.abs(n);
            for (; n >= 0; n--) {
                if (n in t && e === t[n]) {
                    return n
                }
            }
            return -1
        }
    }, V);
    var W = function () {
        var e = [1, 2];
        var t = e.splice();
        return e.length === 2 && G(t) && t.length === 0
    }();
    k(t, {
        splice: function splice(e, t) {
            if (arguments.length === 0) {
                return []
            } else {
                return s.apply(this, arguments)
            }
        }
    }, !W);
    var _ = function () {
        var e = {};
        t.splice.call(e, 0, 0, 1);
        return e.length === 1
    }();
    k(t, {
        splice: function splice(e, t) {
            if (arguments.length === 0) {
                return []
            }
            var r = arguments;
            this.length = g(A.ToInteger(this.length), 0);
            if (arguments.length > 0 && typeof t !== "number") {
                r = l.call(arguments);
                if (r.length < 2) {
                    B(r, this.length - e)
                } else {
                    r[1] = A.ToInteger(t)
                }
            }
            return s.apply(this, r)
        }
    }, !_);
    var ee = function () {
        var t = new e(1e5);
        t[8] = "x";
        t.splice(1, 1);
        return t.indexOf("x") === 7
    }();
    var te = function () {
        var e = 256;
        var t = [];
        t[e] = "a";
        t.splice(e + 1, 0, "b");
        return t[e] === "a"
    }();
    k(t, {
        splice: function splice(e, t) {
            var r = A.ToObject(this);
            var n = [];
            var i = A.ToUint32(r.length);
            var o = A.ToInteger(e);
            var u = o < 0 ? g(i + o, 0) : y(o, i);
            var f = y(g(A.ToInteger(t), 0), i - u);
            var s = 0;
            var c;
            while (s < f) {
                c = a(u + s);
                if ($(r, c)) {
                    n[s] = r[c]
                }
                s += 1
            }
            var v = l.call(arguments, 2);
            var p = v.length;
            var h;
            if (p < f) {
                s = u;
                while (s < i - f) {
                    c = a(s + f);
                    h = a(s + p);
                    if ($(r, c)) {
                        r[h] = r[c]
                    } else {
                        delete r[h]
                    }
                    s += 1
                }
                s = i;
                while (s > i - f + p) {
                    delete r[s - 1];
                    s -= 1
                }
            } else if (p > f) {
                s = i - f;
                while (s > u) {
                    c = a(s + f - 1);
                    h = a(s + p - 1);
                    if ($(r, c)) {
                        r[h] = r[c]
                    } else {
                        delete r[h]
                    }
                    s -= 1
                }
            }
            s = u;
            for (var d = 0; d < v.length; ++d) {
                r[s] = v[d];
                s += 1
            }
            r.length = i - f + p;
            return n
        }
    }, !ee || !te);
    var re = [1, 2].join(undefined) !== "1,2";
    var ne = t.join;
    k(t, {
        join: function join(e) {
            return ne.call(this, typeof e === "undefined" ? "," : e)
        }
    }, re);
    var ie = function push(e) {
        var t = A.ToObject(this);
        var r = A.ToUint32(t.length);
        var n = 0;
        while (n < arguments.length) {
            t[r + n] = arguments[n];
            n += 1
        }
        t.length = r + n;
        return r + n
    };
    var ae = function () {
        var e = {};
        var t = Array.prototype.push.call(e, undefined);
        return t !== 1 || e.length !== 1 || typeof e[0] !== "undefined" || !$(e, 0)
    }();
    k(t, {
        push: function push(e) {
            if (G(this)) {
                return c.apply(this, arguments)
            }
            return ie.apply(this, arguments)
        }
    }, ae);
    var oe = function () {
        var e = [];
        var t = e.push(undefined);
        return t !== 1 || e.length !== 1 || typeof e[0] !== "undefined" || !$(e, 0)
    }();
    k(t, {push: ie}, oe);
    var ue = !{toString: null}.propertyIsEnumerable("toString");
    var fe = function () {
    }.propertyIsEnumerable("prototype");
    var le = !$("x", "0");
    var se = function (e) {
        var t = e.constructor;
        return t && t.prototype === e
    };
    var ce = {
        $window: true,
        $console: true,
        $parent: true,
        $self: true,
        $frame: true,
        $frames: true,
        $frameElement: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true
    };
    var ve = function () {
        if (typeof window === "undefined") {
            return false
        }
        for (var e in window) {
            try {
                if (!ce["$" + e] && $(window, e) && window[e] !== null && typeof window[e] === "object") {
                    se(window[e])
                }
            } catch (t) {
                return true
            }
        }
        return false
    }();
    var pe = function (e) {
        if (typeof window === "undefined" || !ve) {
            return se(e)
        }
        try {
            return se(e)
        } catch (t) {
            return false
        }
    };
    var he = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
    var ge = he.length;
    var ye = function isArguments(e) {
        return C(e) === "[object Arguments]"
    };
    var de = function isArguments(e) {
        return e !== null && typeof e === "object" && typeof e.length === "number" && e.length >= 0 && !G(e) && w(e.callee)
    };
    var me = ye(arguments) ? ye : de;
    k(r, {
        keys: function keys(e) {
            var t = w(e);
            var r = me(e);
            var n = e !== null && typeof e === "object";
            var i = n && N(e);
            if (!n && !t && !r) {
                throw new TypeError("Object.keys called on a non-object")
            }
            var o = [];
            var u = fe && t;
            if (i && le || r) {
                for (var f = 0; f < e.length; ++f) {
                    B(o, a(f))
                }
            }
            if (!r) {
                for (var l in e) {
                    if (!(u && l === "prototype") && $(e, l)) {
                        B(o, a(l))
                    }
                }
            }
            if (ue) {
                var s = pe(e);
                for (var c = 0; c < ge; c++) {
                    var v = he[c];
                    if (!(s && v === "constructor") && $(e, v)) {
                        B(o, v)
                    }
                }
            }
            return o
        }
    });
    var we = r.keys && function () {
        return r.keys(arguments).length === 2
    }(1, 2);
    var be = r.keys && function () {
        var e = r.keys(arguments);
        return arguments.length !== 1 || e.length !== 1 || e[0] !== 1
    }(1);
    var Te = r.keys;
    k(r, {
        keys: function keys(e) {
            if (me(e)) {
                return Te(l.call(e))
            } else {
                return Te(e)
            }
        }
    }, !we || be);
    var xe = -621987552e5;
    var Oe = "-000001";
    var Se = Date.prototype.toISOString && new Date(xe).toISOString().indexOf(Oe) === -1;
    var Ie = Date.prototype.toISOString && new Date(-1).toISOString() !== "1969-12-31T23:59:59.999Z";
    k(Date.prototype, {
        toISOString: function toISOString() {
            var e, t, r, n, i;
            if (!isFinite(this)) {
                throw new RangeError("Date.prototype.toISOString called on non-finite value.")
            }
            n = this.getUTCFullYear();
            i = this.getUTCMonth();
            n += Math.floor(i / 12);
            i = (i % 12 + 12) % 12;
            e = [i + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
            n = (n < 0 ? "-" : n > 9999 ? "+" : "") + Z("00000" + Math.abs(n), 0 <= n && n <= 9999 ? -4 : -6);
            t = e.length;
            while (t--) {
                r = e[t];
                if (r < 10) {
                    e[t] = "0" + r
                }
            }
            return n + "-" + l.call(e, 0, 2).join("-") + "T" + l.call(e, 2).join(":") + "." + Z("000" + this.getUTCMilliseconds(), -3) + "Z"
        }
    }, Se || Ie);
    var je = function () {
        try {
            return Date.prototype.toJSON && new Date(NaN).toJSON() === null && new Date(xe).toJSON().indexOf(Oe) !== -1 && Date.prototype.toJSON.call({
                toISOString: function () {
                    return true
                }
            })
        } catch (e) {
            return false
        }
    }();
    if (!je) {
        Date.prototype.toJSON = function toJSON(e) {
            var t = r(this);
            var n = A.ToPrimitive(t);
            if (typeof n === "number" && !isFinite(n)) {
                return null
            }
            var i = t.toISOString;
            if (!w(i)) {
                throw new TypeError("toISOString property is not callable")
            }
            return i.call(t)
        }
    }
    var Ee = Date.parse("+033658-09-27T01:46:40.000Z") === 1e15;
    var Ne = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z"));
    var De = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
    if (De || Ne || !Ee) {
        var Me = Math.pow(2, 31) - 1;
        var Ue = Math.floor(Me / 1e3);
        var ke = F(new Date(1970, 0, 1, 0, 0, 0, Me + 1).getTime());
        Date = function (e) {
            var t = function Date(r, n, i, o, u, f, l) {
                var s = arguments.length;
                var c;
                if (this instanceof e) {
                    var v = f;
                    var p = l;
                    if (ke && s >= 7 && l > Me) {
                        var h = Math.floor(l / Me) * Me;
                        var g = Math.floor(h / 1e3);
                        v += g;
                        p -= g * 1e3
                    }
                    c = s === 1 && a(r) === r ? new e(t.parse(r)) : s >= 7 ? new e(r, n, i, o, u, v, p) : s >= 6 ? new e(r, n, i, o, u, v) : s >= 5 ? new e(r, n, i, o, u) : s >= 4 ? new e(r, n, i, o) : s >= 3 ? new e(r, n, i) : s >= 2 ? new e(r, n) : s >= 1 ? new e(r) : new e
                } else {
                    c = e.apply(this, arguments)
                }
                if (!R(c)) {
                    k(c, {constructor: t}, true)
                }
                return c
            };
            var r = new RegExp("^" + "(\\d{4}|[+-]\\d{6})" + "(?:-(\\d{2})" + "(?:-(\\d{2})" + "(?:" + "T(\\d{2})" + ":(\\d{2})" + "(?:" + ":(\\d{2})" + "(?:(\\.\\d{1,}))?" + ")?" + "(" + "Z|" + "(?:" + "([-+])" + "(\\d{2})" + ":(\\d{2})" + ")" + ")?)?)?)?" + "$");
            var n = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
            var i = function dayFromMonth(e, t) {
                var r = t > 1 ? 1 : 0;
                return n[t] + Math.floor((e - 1969 + r) / 4) - Math.floor((e - 1901 + r) / 100) + Math.floor((e - 1601 + r) / 400) + 365 * (e - 1970)
            };
            var o = function toUTC(t) {
                var r = 0;
                var n = t;
                if (ke && n > Me) {
                    var i = Math.floor(n / Me) * Me;
                    var a = Math.floor(i / 1e3);
                    r += a;
                    n -= a * 1e3
                }
                return u(new e(1970, 0, 1, 0, 0, r, n))
            };
            for (var f in e) {
                if ($(e, f)) {
                    t[f] = e[f]
                }
            }
            k(t, {now: e.now, UTC: e.UTC}, true);
            t.prototype = e.prototype;
            k(t.prototype, {constructor: t}, true);
            var l = function parse(t) {
                var n = r.exec(t);
                if (n) {
                    var a = u(n[1]), f = u(n[2] || 1) - 1, l = u(n[3] || 1) - 1, s = u(n[4] || 0), c = u(n[5] || 0),
                        v = u(n[6] || 0), p = Math.floor(u(n[7] || 0) * 1e3), h = Boolean(n[4] && !n[8]),
                        g = n[9] === "-" ? 1 : -1, y = u(n[10] || 0), d = u(n[11] || 0), m;
                    var w = c > 0 || v > 0 || p > 0;
                    if (s < (w ? 24 : 25) && c < 60 && v < 60 && p < 1e3 && f > -1 && f < 12 && y < 24 && d < 60 && l > -1 && l < i(a, f + 1) - i(a, f)) {
                        m = ((i(a, f) + l) * 24 + s + y * g) * 60;
                        m = ((m + c + d * g) * 60 + v) * 1e3 + p;
                        if (h) {
                            m = o(m)
                        }
                        if (-864e13 <= m && m <= 864e13) {
                            return m
                        }
                    }
                    return NaN
                }
                return e.parse.apply(this, arguments)
            };
            k(t, {parse: l});
            return t
        }(Date)
    }
    if (!Date.now) {
        Date.now = function now() {
            return (new Date).getTime()
        }
    }
    var Re = f.toFixed && (8e-5.toFixed(3) !== "0.000" || .9.toFixed(0) !== "1" || 1.255.toFixed(2) !== "1.25" || 0xde0b6b3a7640080.toFixed(0) !== "1000000000000000128");
    var Fe = {
        base: 1e7, size: 6, data: [0, 0, 0, 0, 0, 0], multiply: function multiply(e, t) {
            var r = -1;
            var n = t;
            while (++r < Fe.size) {
                n += e * Fe.data[r];
                Fe.data[r] = n % Fe.base;
                n = Math.floor(n / Fe.base)
            }
        }, divide: function divide(e) {
            var t = Fe.size, r = 0;
            while (--t >= 0) {
                r += Fe.data[t];
                Fe.data[t] = Math.floor(r / e);
                r = r % e * Fe.base
            }
        }, numToString: function numToString() {
            var e = Fe.size;
            var t = "";
            while (--e >= 0) {
                if (t !== "" || e === 0 || Fe.data[e] !== 0) {
                    var r = a(Fe.data[e]);
                    if (t === "") {
                        t = r
                    } else {
                        t += Z("0000000", 0, 7 - r.length) + r
                    }
                }
            }
            return t
        }, pow: function pow(e, t, r) {
            return t === 0 ? r : t % 2 === 1 ? pow(e, t - 1, r * e) : pow(e * e, t / 2, r)
        }, log: function log(e) {
            var t = 0;
            var r = e;
            while (r >= 4096) {
                t += 12;
                r /= 4096
            }
            while (r >= 2) {
                t += 1;
                r /= 2
            }
            return t
        }
    };
    var Ae = function toFixed(e) {
        var t, r, n, i, o, f, l, s;
        t = u(e);
        t = F(t) ? 0 : Math.floor(t);
        if (t < 0 || t > 20) {
            throw new RangeError("Number.toFixed called with invalid number of decimals")
        }
        r = u(this);
        if (F(r)) {
            return "NaN"
        }
        if (r <= -1e21 || r >= 1e21) {
            return a(r)
        }
        n = "";
        if (r < 0) {
            n = "-";
            r = -r
        }
        i = "0";
        if (r > 1e-21) {
            o = Fe.log(r * Fe.pow(2, 69, 1)) - 69;
            f = o < 0 ? r * Fe.pow(2, -o, 1) : r / Fe.pow(2, o, 1);
            f *= 4503599627370496;
            o = 52 - o;
            if (o > 0) {
                Fe.multiply(0, f);
                l = t;
                while (l >= 7) {
                    Fe.multiply(1e7, 0);
                    l -= 7
                }
                Fe.multiply(Fe.pow(10, l, 1), 0);
                l = o - 1;
                while (l >= 23) {
                    Fe.divide(1 << 23);
                    l -= 23
                }
                Fe.divide(1 << l);
                Fe.multiply(1, 1);
                Fe.divide(2);
                i = Fe.numToString()
            } else {
                Fe.multiply(0, f);
                Fe.multiply(1 << -o, 0);
                i = Fe.numToString() + Z("0.00000000000000000000", 2, 2 + t)
            }
        }
        if (t > 0) {
            s = i.length;
            if (s <= t) {
                i = n + Z("0.0000000000000000000", 0, t - s + 2) + i
            } else {
                i = n + Z(i, 0, s - t) + "." + Z(i, s - t)
            }
        } else {
            i = n + i
        }
        return i
    };
    k(f, {toFixed: Ae}, Re);
    var Pe = function () {
        try {
            return 1..toPrecision(undefined) === "1"
        } catch (e) {
            return true
        }
    }();
    var $e = f.toPrecision;
    k(f, {
        toPrecision: function toPrecision(e) {
            return typeof e === "undefined" ? $e.call(this) : $e.call(this, e)
        }
    }, Pe);
    if ("ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || "tesst".split(/(s)*/)[1] === "t" || "test".split(/(?:)/, -1).length !== 4 || "".split(/.?/).length || ".".split(/()()/).length > 1) {
        (function () {
            var e = typeof/()??/.exec("")[1] === "undefined";
            var t = Math.pow(2, 32) - 1;
            o.split = function (r, n) {
                var i = this;
                if (typeof r === "undefined" && n === 0) {
                    return []
                }
                if (!S(r)) {
                    return J(this, r, n)
                }
                var a = [];
                var o = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (r.sticky ? "y" : ""),
                    u = 0, f, s, v, p;
                var h = new RegExp(r.source, o + "g");
                i += "";
                if (!e) {
                    f = new RegExp("^" + h.source + "$(?!\\s)", o)
                }
                var g = typeof n === "undefined" ? t : A.ToUint32(n);
                s = h.exec(i);
                while (s) {
                    v = s.index + s[0].length;
                    if (v > u) {
                        B(a, Z(i, u, s.index));
                        if (!e && s.length > 1) {
                            s[0].replace(f, function () {
                                for (var e = 1; e < arguments.length - 2; e++) {
                                    if (typeof arguments[e] === "undefined") {
                                        s[e] = void 0
                                    }
                                }
                            })
                        }
                        if (s.length > 1 && s.index < i.length) {
                            c.apply(a, l.call(s, 1))
                        }
                        p = s[0].length;
                        u = v;
                        if (a.length >= g) {
                            break
                        }
                    }
                    if (h.lastIndex === s.index) {
                        h.lastIndex++
                    }
                    s = h.exec(i)
                }
                if (u === i.length) {
                    if (p || !h.test("")) {
                        B(a, "")
                    }
                } else {
                    B(a, Z(i, u))
                }
                return a.length > g ? Z(a, 0, g) : a
            }
        })()
    } else if ("0".split(void 0, 0).length) {
        o.split = function split(e, t) {
            if (typeof e === "undefined" && t === 0) {
                return []
            }
            return J(this, e, t)
        }
    }
    var Ce = o.replace;
    var Ze = function () {
        var e = [];
        "x".replace(/x(.)?/g, function (t, r) {
            B(e, r)
        });
        return e.length === 1 && typeof e[0] === "undefined"
    }();
    if (!Ze) {
        o.replace = function replace(e, t) {
            var r = w(t);
            var n = S(e) && /\)[*?]/.test(e.source);
            if (!r || !n) {
                return Ce.call(this, e, t)
            } else {
                var i = function (r) {
                    var n = arguments.length;
                    var i = e.lastIndex;
                    e.lastIndex = 0;
                    var a = e.exec(r) || [];
                    e.lastIndex = i;
                    B(a, arguments[n - 2], arguments[n - 1]);
                    return t.apply(this, a)
                };
                return Ce.call(this, e, i)
            }
        }
    }
    var Je = o.substr;
    var ze = "".substr && "0b".substr(-1) !== "b";
    k(o, {
        substr: function substr(e, t) {
            var r = e;
            if (e < 0) {
                r = g(this.length + e, 0)
            }
            return Je.call(this, r, t)
        }
    }, ze);
    var Be = "    \n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028" + "\u2029\ufeff";
    var Ge = "\u200b";
    var He = "[" + Be + "]";
    var Le = new RegExp("^" + He + He + "*");
    var Xe = new RegExp(He + He + "*$");
    var Ye = o.trim && (Be.trim() || !Ge.trim());
    k(o, {
        trim: function trim() {
            if (typeof this === "undefined" || this === null) {
                throw new TypeError("can't convert " + this + " to object")
            }
            return a(this).replace(Le, "").replace(Xe, "")
        }
    }, Ye);
    var qe = o.lastIndexOf && "abc\u3042\u3044".lastIndexOf("\u3042\u3044", 2) !== -1;
    k(o, {
        lastIndexOf: function lastIndexOf(e) {
            if (typeof this === "undefined" || this === null) {
                throw new TypeError("can't convert " + this + " to object")
            }
            var t = a(this);
            var r = a(e);
            var n = arguments.length > 1 ? u(arguments[1]) : NaN;
            var i = F(n) ? Infinity : A.ToInteger(n);
            var o = y(g(i, 0), t.length);
            var f = r.length;
            var l = o + f;
            while (l > 0) {
                l = g(0, l - f);
                var s = z(Z(t, l, o + f), r);
                if (s !== -1) {
                    return l + s
                }
            }
            return -1
        }
    }, qe);
    var Ke = o.lastIndexOf;
    k(o, {
        lastIndexOf: function lastIndexOf(e) {
            return Ke.apply(this, arguments)
        }
    }, o.lastIndexOf.length !== 1);
    if (parseInt(Be + "08") !== 8 || parseInt(Be + "0x16") !== 22) {
        parseInt = function (e) {
            var t = /^[\-+]?0[xX]/;
            return function parseInt(r, n) {
                var i = a(r).trim();
                var o = u(n) || (t.test(i) ? 16 : 10);
                return e(i, o)
            }
        }(parseInt)
    }
    if (String(new RangeError("test")) !== "RangeError: test") {
        var Qe = Error.prototype.toString;
        var Ve = function toString() {
            if (typeof this === "undefined" || this === null) {
                throw new TypeError("can't convert " + this + " to object")
            }
            var e = this.name;
            if (typeof e === "undefined") {
                e = "Error"
            } else if (typeof e !== "string") {
                e = a(e)
            }
            var t = this.message;
            if (typeof t === "undefined") {
                t = ""
            } else if (typeof t !== "string") {
                t = a(t)
            }
            if (!e) {
                return t
            }
            if (!t) {
                return e
            }
            return e + ": " + t
        };
        Error.prototype.toString = Ve
    }
});

/*
 * @Author: zhuxy
 * @Date:   2015-12-03 09:46:32
 * @Last Modified by:   zhuxy
 * @Last Modified time: 2015-12-03 09:46:40
 */
(function (e, t) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define(t)
    } else if (typeof exports === "object") {
        module.exports = t()
    } else {
        e.returnExports = t()
    }
})(this, function () {
    var e = Function.prototype.call;
    var t = Object.prototype;
    var r = e.bind(t.hasOwnProperty);
    var n = e.bind(t.propertyIsEnumerable);
    var o = e.bind(t.toString);
    var i;
    var c;
    var f;
    var a;
    var l = r(t, "__defineGetter__");
    if (l) {
        i = e.bind(t.__defineGetter__);
        c = e.bind(t.__defineSetter__);
        f = e.bind(t.__lookupGetter__);
        a = e.bind(t.__lookupSetter__)
    }
    if (!Object.getPrototypeOf) {
        Object.getPrototypeOf = function getPrototypeOf(e) {
            var r = e.__proto__;
            if (r || r === null) {
                return r
            } else if (o(e.constructor) === "[object Function]") {
                return e.constructor.prototype
            } else if (e instanceof Object) {
                return t
            } else {
                return null
            }
        }
    }
    var u = function doesGetOwnPropertyDescriptorWork(e) {
        try {
            e.sentinel = 0;
            return Object.getOwnPropertyDescriptor(e, "sentinel").value === 0
        } catch (t) {
            return false
        }
    };
    if (Object.defineProperty) {
        var p = u({});
        var s = typeof document === "undefined" || u(document.createElement("div"));
        if (!s || !p) {
            var b = Object.getOwnPropertyDescriptor
        }
    }
    if (!Object.getOwnPropertyDescriptor || b) {
        var O = "Object.getOwnPropertyDescriptor called on a non-object: ";
        Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(e, o) {
            if (typeof e !== "object" && typeof e !== "function" || e === null) {
                throw new TypeError(O + e)
            }
            if (b) {
                try {
                    return b.call(Object, e, o)
                } catch (i) {
                }
            }
            var c;
            if (!r(e, o)) {
                return c
            }
            c = {enumerable: n(e, o), configurable: true};
            if (l) {
                var u = e.__proto__;
                var p = e !== t;
                if (p) {
                    e.__proto__ = t
                }
                var s = f(e, o);
                var y = a(e, o);
                if (p) {
                    e.__proto__ = u
                }
                if (s || y) {
                    if (s) {
                        c.get = s
                    }
                    if (y) {
                        c.set = y
                    }
                    return c
                }
            }
            c.value = e[o];
            c.writable = true;
            return c
        }
    }
    if (!Object.getOwnPropertyNames) {
        Object.getOwnPropertyNames = function getOwnPropertyNames(e) {
            return Object.keys(e)
        }
    }
    if (!Object.create) {
        var y;
        var d = !({__proto__: null} instanceof Object);
        var j = function shouldUseActiveX() {
            if (!document.domain) {
                return false
            }
            try {
                return !!new ActiveXObject("htmlfile")
            } catch (e) {
                return false
            }
        };
        var v = function getEmptyViaActiveX() {
            var e;
            var t;
            t = new ActiveXObject("htmlfile");
            t.write("<script></script>");
            t.close();
            e = t.parentWindow.Object.prototype;
            t = null;
            return e
        };
        var _ = function getEmptyViaIFrame() {
            var e = document.createElement("iframe");
            var t = document.body || document.documentElement;
            var r;
            e.style.display = "none";
            t.appendChild(e);
            e.src = "javascript:";
            r = e.contentWindow.Object.prototype;
            t.removeChild(e);
            e = null;
            return r
        };
        if (d || typeof document === "undefined") {
            y = function () {
                return {__proto__: null}
            }
        } else {
            y = function () {
                var e = j() ? v() : _();
                delete e.constructor;
                delete e.hasOwnProperty;
                delete e.propertyIsEnumerable;
                delete e.isPrototypeOf;
                delete e.toLocaleString;
                delete e.toString;
                delete e.valueOf;
                var t = function Empty() {
                };
                t.prototype = e;
                y = function () {
                    return new t
                };
                return new t
            }
        }
        Object.create = function create(e, t) {
            var r;
            var n = function Type() {
            };
            if (e === null) {
                r = y()
            } else {
                if (typeof e !== "object" && typeof e !== "function") {
                    throw new TypeError("Object prototype may only be an Object or null")
                }
                n.prototype = e;
                r = new n;
                r.__proto__ = e
            }
            if (t !== void 0) {
                Object.defineProperties(r, t)
            }
            return r
        }
    }
    var w = function doesDefinePropertyWork(e) {
        try {
            Object.defineProperty(e, "sentinel", {});
            return "sentinel" in e
        } catch (t) {
            return false
        }
    };
    if (Object.defineProperty) {
        var m = w({});
        var P = typeof document === "undefined" || w(document.createElement("div"));
        if (!m || !P) {
            var E = Object.defineProperty, h = Object.defineProperties
        }
    }
    if (!Object.defineProperty || E) {
        var g = "Property description must be an object: ";
        var z = "Object.defineProperty called on non-object: ";
        var T = "getters & setters can not be defined on this javascript engine";
        Object.defineProperty = function defineProperty(e, r, n) {
            if (typeof e !== "object" && typeof e !== "function" || e === null) {
                throw new TypeError(z + e)
            }
            if (typeof n !== "object" && typeof n !== "function" || n === null) {
                throw new TypeError(g + n)
            }
            if (E) {
                try {
                    return E.call(Object, e, r, n)
                } catch (o) {
                }
            }
            if ("value" in n) {
                if (l && (f(e, r) || a(e, r))) {
                    var u = e.__proto__;
                    e.__proto__ = t;
                    delete e[r];
                    e[r] = n.value;
                    e.__proto__ = u
                } else {
                    e[r] = n.value
                }
            } else {
                if (!l && ("get" in n || "set" in n)) {
                    throw new TypeError(T)
                }
                if ("get" in n) {
                    i(e, r, n.get)
                }
                if ("set" in n) {
                    c(e, r, n.set)
                }
            }
            return e
        }
    }
    if (!Object.defineProperties || h) {
        Object.defineProperties = function defineProperties(e, t) {
            if (h) {
                try {
                    return h.call(Object, e, t)
                } catch (r) {
                }
            }
            Object.keys(t).forEach(function (r) {
                if (r !== "__proto__") {
                    Object.defineProperty(e, r, t[r])
                }
            });
            return e
        }
    }
    if (!Object.seal) {
        Object.seal = function seal(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.seal can only be called on Objects.")
            }
            return e
        }
    }
    if (!Object.freeze) {
        Object.freeze = function freeze(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.freeze can only be called on Objects.")
            }
            return e
        }
    }
    try {
        Object.freeze(function () {
        })
    } catch (x) {
        Object.freeze = function (e) {
            return function freeze(t) {
                if (typeof t === "function") {
                    return t
                } else {
                    return e(t)
                }
            }
        }(Object.freeze)
    }
    if (!Object.preventExtensions) {
        Object.preventExtensions = function preventExtensions(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.preventExtensions can only be called on Objects.")
            }
            return e
        }
    }
    if (!Object.isSealed) {
        Object.isSealed = function isSealed(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.isSealed can only be called on Objects.")
            }
            return false
        }
    }
    if (!Object.isFrozen) {
        Object.isFrozen = function isFrozen(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.isFrozen can only be called on Objects.")
            }
            return false
        }
    }
    if (!Object.isExtensible) {
        Object.isExtensible = function isExtensible(e) {
            if (Object(e) !== e) {
                throw new TypeError("Object.isExtensible can only be called on Objects.")
            }
            var t = "";
            while (r(e, t)) {
                t += "?"
            }
            e[t] = true;
            var n = r(e, t);
            delete e[t];
            return n
        }
    }
});