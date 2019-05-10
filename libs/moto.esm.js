var commonjsGlobal = typeof window === 'undefined' ? typeof global === 'undefined' ? typeof self === 'undefined' ? {} : self : global : window; function createCommonjsModule(a, b) { return b = {exports: {}}, a(b, b.exports), b.exports } var polyfill = createCommonjsModule(function() { commonjsGlobal.requestAnimationFrame = commonjsGlobal.requestAnimationFrame || setImmediate, commonjsGlobal.cancelAnimationFrame = commonjsGlobal.cancelAnimationFrame || clearImmediate }); function tween(a) { var b; var c; var d; var e; var f = a.duration; var g = void 0 === f ? 1 : f; var h = a.ease; var i = void 0 === h ? function(a) { return a } : h; var j = a.yoyo; var k = void 0 === j ? 0 : j; var l = a.loop; var m = void 0 === l ? 0 : l; var n = isNaN(a.from); if (n) for (var o in c = {}, d = {}, b = {}, e = {}, a.from)c[o] = a.from[o], d[o] = a.to[o], b[o] = d[o] - c[o]; else c = a.from, d = a.to, b = d - c; return {start: function(a) { function d() { if (p += 1 / 60 / g * q, p > 1 ? p = 1 : p < 0 ? p = 0 : null, n) for (var a in b)e[a] = c[a] + b[a] * i(p); else e = c + b * i(p); h(e), r || s || (q === 1 && p == 1 || q === -1 && p == 0 ? m > o.loop ? (o.loop++, p = 0, l = requestAnimationFrame(d)) : k > o.yoyo ? (o.yoyo++, q *= -1, l = requestAnimationFrame(d)) : (u = !0, j && j()) : l = requestAnimationFrame(d)) } var f; var h; var j; var l; var o = {yoyo: 0, loop: 0}; var p = 0; var q = 1; var r = !1; var s = !1; var u = !1; return a instanceof Function ? h = a : (f = a, h = f.update, j = f.complete, f), d(), {stop() { r = !0, cancelAnimationFrame(l) }, pause() { return r || u ? this : (s = !0, cancelAnimationFrame(l), this) }, resume() { return s && (s = !1, d()), this }} }} } function chain() { for (var a = arguments.length, b = Array(a), c = 0; c < a; c++)b[c] = arguments[c]; return {start: function(a) { function c() { g = b.shift().start({update: e, complete() { b.length ? c() : (i = !0, f && f()) }}) } var d; var e; var f; var g; var h = !1; var i = !1; var j = !1; return a instanceof Function ? e = a : (d = a, e = d.update, f = d.complete, d), c(), {stop() { h = !0, g && g.stop() }, pause() { if (!(h || i)) return j = !0, g.pause(), this }, resume() { return j && g && (j = !1, g.resume()), this }} }} } function composite(a) { var b = Object.keys(a); return {start: function(c) { var d; var e; var f; var g = {}; var h = {start: 0, end: 0}; var i = !1; var j = !1; c instanceof Function ? e = c : (d = c, e = d.update, f = d.complete, d); var k = b.map(function(c) { return h.start++, a[c].start({update: function(a) { g[c] = a, h.start === b.length && e(g) }, complete: function() { h.end++, h.end === b.length && f && f() }}) }); return {stop() { i = !0, k.forEach(function(a) { return a.stop() }) }, pause() { if (!(i || !1)) return j = !0, k.forEach(function(a) { return a.pause() }), this }, resume() { return j ? (j = !1, void k.forEach(function(a) { return a.resume() })) : this }} }} } function linear(a) { return a } function easeInQuad(a) { return Math.pow(a, 2) } function easeOutQuad(a) { return a * (2 - a) } function easeInOutQuad(a) { return a < 0.5 ? 2 * Math.pow(a, 2) : -1 + (4 - 2 * a) * a } function easeInCubic(a) { return Math.pow(a, 3) } function easeOutCubic(a) { return --a * Math.pow(a, 2) + 1 } function easeInOutCubic(a) { return a < 0.5 ? 4 * Math.pow(a, 3) : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1 } function easeInQuart(a) { return Math.pow(a, 4) } function easeOutQuart(a) { return 1 - --a * Math.pow(a, 3) } function easeInOutQuart(a) { var b = Math.pow; return a < 0.5 ? 8 * b(a, 4) : 1 - 8 * --a * b(a, 3) } function easeInQuint(a) { return Math.pow(a, 5) } function easeOutQuint(a) { return 1 + --a * Math.pow(a, 4) } function easeInOutQuint(a) { var b = Math.pow; return a < 0.5 ? 16 * b(a, 5) : 1 + 16 * --a * b(a, 4) } function cubicBezier(a, b) { return function(c) { return calc(0, a, b, 1, c) } } function calc(a, b, c, d, e) { var f = Math.pow; return f(1 - e, 3) * a + 3 * f(1 - e, 2) * e * b + 3 * (1 - e) * f(e, 2) * c + f(e, 3) * d } var easing = Object.freeze({linear: linear, easeInQuad: easeInQuad, easeOutQuad: easeOutQuad, easeInOutQuad: easeInOutQuad, easeInCubic: easeInCubic, easeOutCubic: easeOutCubic, easeInOutCubic: easeInOutCubic, easeInQuart: easeInQuart, easeOutQuart: easeOutQuart, easeInOutQuart: easeInOutQuart, easeInQuint: easeInQuint, easeOutQuint: easeOutQuint, easeInOutQuint: easeInOutQuint, cubicBezier: cubicBezier}); function bezier(a) { var b = a.points; var c = void 0 === b ? [] : b; var d = a.duration; var e = void 0 === d ? 1 : d; var f = a.ease; var g = void 0 === f ? function(a) { return a } : f; var h = a.loop; var i = void 0 === h ? 0 : h; var j = a.yoyo; var k = void 0 === j ? 0 : j; var l = {yoyo: 0, loop: 0}; return {start: function(a) { function b() { m += 1 / 60 / e * n, m > 1 ? m = 1 : m < 0 ? m = 0 : null, h(bezier$1(c, g(m))), o || p || (n === 1 && m == 1 || n === -1 && m == 0 ? i > l.loop ? (l.loop++, m = 0, f = requestAnimationFrame(b)) : k > l.yoyo ? (l.yoyo++, n *= -1, f = requestAnimationFrame(b)) : (q = !0, j && j()) : f = requestAnimationFrame(b)) } var d; var f; var h; var j; var m = 0; var n = 1; var o = !1; var p = !1; var q = !1; return a instanceof Function ? h = a : (d = a, h = d.update, j = d.complete, d), b(), {stop() { o = !0, cancelAnimationFrame(f) }, pause() { if (!(o || q)) return p = !0, cancelAnimationFrame(f), this }, resume() { return p && (p = !1, b()), this }} }} } function bezier$1(a, b) { return {x: calc$1(a[0].x, a[1].x, a[2].x, b), y: calc$1(a[0].y, a[1].y, a[2].y, b)} } function calc$1(a, b, c, d) { var e = Math.pow; return e(1 - d, 2) * a + 2 * (1 - d) * d * b + e(d, 2) * c } function bezier_cubic(a) { var b = a.points; var c = void 0 === b ? [] : b; var d = a.duration; var e = void 0 === d ? 1 : d; var f = a.ease; var g = void 0 === f ? function(a) { return a } : f; var h = a.yoyo; var i = void 0 === h ? 0 : h; var j = a.loop; var k = void 0 === j ? 0 : j; var l = {yoyo: 0, loop: 0}; return {start: function(a) { function b() { m += 1 / 60 / e * n, m > 1 ? m = 1 : m < 0 ? m = 0 : 0, h(bezier$2(c, g(m))), o || p || (n === 1 && m == 1 || n === -1 && m == 0 ? k > l.loop ? (l.loop++, m = 0, f = requestAnimationFrame(b)) : i > l.yoyo ? (l.yoyo++, n *= -1, f = requestAnimationFrame(b)) : (q = !0, j && j()) : f = requestAnimationFrame(b)) } var d; var f; var h; var j; var m = 0; var n = 1; var o = !1; var p = !1; var q = !1; return a instanceof Function ? h = a : (d = a, h = d.update, j = d.complete, d), b(), {stop() { o = !0, cancelAnimationFrame(f) }, pause() { if (!(o || q)) return p = !0, cancelAnimationFrame(f), this }, resume() { return p && (p = !1, b()), this }} }} } function bezier$2(a, b) { return {x: calc$2(a[0].x, a[1].x, a[2].x, a[3].x, b), y: calc$2(a[0].y, a[1].y, a[2].y, a[3].y, b)} } function calc$2(a, b, c, d, e) { var f = Math.pow; return f(1 - e, 3) * a + 3 * f(1 - e, 2) * e * b + 3 * (1 - e) * f(e, 2) * c + f(e, 3) * d } function catmullRom(a) { var b = a.points; var c = a.speed; var d = void 0 === c ? 10 : c; var e = a.loop; if (void 0 !== e && e) { var f = b[0]; var g = b[b.length - 1]; f.x === g.x && f.y === g.y || b.push(f) } return b.unshift(b[0]), b.push(b[b.length - 1]), {start: function(a) { function c() { if (i += r, i > 1 ? i = 1 : null, g(catmullRom$1(n, o, p, q, i)), !(j || k)) if (i === 1) { var a = l.next(); var b = a.value; var d = a.done; d ? h && h() : (n = b.p1, o = b.p2, p = b.p3, q = b.p4, r = b.dt, i = 0, f = requestAnimationFrame(c)) } else f = requestAnimationFrame(c) } var e; var f; var g; var h; var i = 0; var j = !1; var k = !1; a instanceof Function ? g = a : (e = a, g = e.update, h = e.complete, e); var l = (function() { var a = 0; return {next() { var c = {p1: b[a], p2: b[a + 1], p3: b[a + 2], p4: b[a + 3], dt: d / distance(b[a + 1], b[a + 2])}; var e = a + 3 >= b.length; return a++, {value: c, done: e} }} }()); var m = l.next().value; var n = m.p1; var o = m.p2; var p = m.p3; var q = m.p4; var r = m.dt; return c(), {stop() { j = !0, cancelAnimationFrame(f) }, pause() { if (!(j || !1)) return k = !0, cancelAnimationFrame(f), this }, resume() { return k && (k = !1, c()), this }} }} } function distance(a, b) { var c = Math.pow; return Math.sqrt(c(a.x - b.x, 2) + c(a.y - b.y, 2)) } function catmullRom$1(a, b, c, d, e) { return {x: calc$3(a.x, b.x, c.x, d.x, e), y: calc$3(a.y, b.y, c.y, d.y, e)} } function calc$3(a, b, c, d, e) { return 0.5 * (((-a + 3 * b - 3 * c + d) * e + (2 * a - 5 * b + 4 * c - d)) * e + c - a) * e + b } var index = Object.freeze({bezier: bezier, cubicBezier: bezier_cubic, catmullRom: catmullRom}); export {tween, chain, composite, easing, index as curve}
// # sourceMappingURL=moto.esm.js.map
