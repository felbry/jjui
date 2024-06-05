import { d as _, o as a, c, r as l, n as T, a as D, t as I, b, w as v, e as f, T as de, _ as k, u as Oe, i as Ue, f as Ge, g as ve, h as $, j as p, k as r, p as C, l as H, m as z, q as ie, s as w, v as j, x as Z, y as R, z as pe, A as ge, B as je, C as ze, D as q, F as M, E, G as ye, H as x, I as m, J as K, K as Pe, L as ee, M as Y, N as te, O as qe, P as Le, Q as We, R as Ke, S as Ve, U as oe, V as Re, W as Se, X as Ie, Y as Je, Z as Ye, $ as Qe, a0 as Xe } from "./framework.DNMIihaV.js";
const Ze = /* @__PURE__ */ _({
  __name: "VPBadge",
  props: {
    text: {},
    type: { default: "tip" }
  },
  setup(o) {
    return (e, t) => (a(), c("span", {
      class: T(["VPBadge", e.type])
    }, [
      l(e.$slots, "default", {}, () => [
        D(I(e.text), 1)
      ])
    ], 2));
  }
}), xe = {
  key: 0,
  class: "VPBackdrop"
}, et = /* @__PURE__ */ _({
  __name: "VPBackdrop",
  props: {
    show: { type: Boolean }
  },
  setup(o) {
    return (e, t) => (a(), b(de, { name: "fade" }, {
      default: v(() => [
        e.show ? (a(), c("div", xe)) : f("", !0)
      ]),
      _: 1
    }));
  }
}), tt = /* @__PURE__ */ k(et, [["__scopeId", "data-v-54a304ca"]]), L = Oe;
function ot(o, e) {
  let t, n = !1;
  return () => {
    t && clearTimeout(t), n ? t = setTimeout(o, e) : (o(), (n = !0) && setTimeout(() => n = !1, e));
  };
}
function le(o) {
  return /^\//.test(o) ? o : `/${o}`;
}
function he(o) {
  const { pathname: e, search: t, hash: n, protocol: s } = new URL(o, "http://a.com");
  if (Ue(o) || o.startsWith("#") || !s.startsWith("http") || !Ge(e))
    return o;
  const { site: i } = L(), u = e.endsWith("/") || e.endsWith(".html") ? o : o.replace(/(?:(^\.+)\/)?.*$/, `$1${e.replace(/(\.md)?$/, i.value.cleanUrls ? "" : ".html")}${t}${n}`);
  return ve(u);
}
function J({ correspondingLink: o = !1 } = {}) {
  const { site: e, localeIndex: t, page: n, theme: s, hash: i } = L(), u = $(() => {
    var d, g;
    return {
      label: (d = e.value.locales[t.value]) == null ? void 0 : d.label,
      link: ((g = e.value.locales[t.value]) == null ? void 0 : g.link) || (t.value === "root" ? "/" : `/${t.value}/`)
    };
  });
  return { localeLinks: $(() => Object.entries(e.value.locales).flatMap(([d, g]) => u.value.label === g.label ? [] : {
    text: g.label,
    link: st(g.link || (d === "root" ? "/" : `/${d}/`), s.value.i18nRouting !== !1 && o, n.value.relativePath.slice(u.value.link.length - 1), !e.value.cleanUrls) + i.value
  })), currentLang: u };
}
function st(o, e, t, n) {
  return e ? o.replace(/\/$/, "") + le(t.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, n ? ".html" : "")) : o;
}
const nt = (o) => (C("data-v-6ff51ddd"), o = o(), H(), o), at = { class: "NotFound" }, rt = { class: "code" }, it = { class: "title" }, lt = /* @__PURE__ */ nt(() => /* @__PURE__ */ p("div", { class: "divider" }, null, -1)), ct = { class: "quote" }, ut = { class: "action" }, dt = ["href", "aria-label"], vt = /* @__PURE__ */ _({
  __name: "NotFound",
  setup(o) {
    const { theme: e } = L(), { currentLang: t } = J();
    return (n, s) => {
      var i, u, h, d, g;
      return a(), c("div", at, [
        p("p", rt, I(((i = r(e).notFound) == null ? void 0 : i.code) ?? "404"), 1),
        p("h1", it, I(((u = r(e).notFound) == null ? void 0 : u.title) ?? "PAGE NOT FOUND"), 1),
        lt,
        p("blockquote", ct, I(((h = r(e).notFound) == null ? void 0 : h.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading."), 1),
        p("div", ut, [
          p("a", {
            class: "link",
            href: r(ve)(r(t).link),
            "aria-label": ((d = r(e).notFound) == null ? void 0 : d.linkLabel) ?? "go to home"
          }, I(((g = r(e).notFound) == null ? void 0 : g.linkText) ?? "Take me home"), 9, dt)
        ])
      ]);
    };
  }
}), pt = /* @__PURE__ */ k(vt, [["__scopeId", "data-v-6ff51ddd"]]);
function we(o, e) {
  if (Array.isArray(o))
    return Q(o);
  if (o == null)
    return [];
  e = le(e);
  const t = Object.keys(o).sort((s, i) => i.split("/").length - s.split("/").length).find((s) => e.startsWith(le(s))), n = t ? o[t] : [];
  return Array.isArray(n) ? Q(n) : Q(n.items, n.base);
}
function ht(o) {
  const e = [];
  let t = 0;
  for (const n in o) {
    const s = o[n];
    if (s.items) {
      t = e.push(s);
      continue;
    }
    e[t] || e.push({ items: [] }), e[t].items.push(s);
  }
  return e;
}
function ft(o) {
  const e = [];
  function t(n) {
    for (const s of n)
      s.text && s.link && e.push({
        text: s.text,
        link: s.link,
        docFooterText: s.docFooterText
      }), s.items && t(s.items);
  }
  return t(o), e;
}
function ce(o, e) {
  return Array.isArray(e) ? e.some((t) => ce(o, t)) : z(o, e.link) ? !0 : e.items ? ce(o, e.items) : !1;
}
function Q(o, e) {
  return [...o].map((t) => {
    const n = { ...t }, s = n.base || e;
    return s && n.link && (n.link = s + n.link), n.items && (n.items = Q(n.items, s)), n;
  });
}
function O() {
  const { frontmatter: o, page: e, theme: t } = L(), n = ie("(min-width: 960px)"), s = w(!1), i = $(() => {
    const B = t.value.sidebar, S = e.value.relativePath;
    return B ? we(B, S) : [];
  }), u = w(i.value);
  j(i, (B, S) => {
    JSON.stringify(B) !== JSON.stringify(S) && (u.value = i.value);
  });
  const h = $(() => o.value.sidebar !== !1 && u.value.length > 0 && o.value.layout !== "home"), d = $(() => g ? o.value.aside == null ? t.value.aside === "left" : o.value.aside === "left" : !1), g = $(() => o.value.layout === "home" ? !1 : o.value.aside != null ? !!o.value.aside : t.value.aside !== !1), P = $(() => h.value && n.value), y = $(() => h.value ? ht(u.value) : []);
  function V() {
    s.value = !0;
  }
  function N() {
    s.value = !1;
  }
  function A() {
    s.value ? N() : V();
  }
  return {
    isOpen: s,
    sidebar: u,
    sidebarGroups: y,
    hasSidebar: h,
    hasAside: g,
    leftAside: d,
    isSidebarEnabled: P,
    open: V,
    close: N,
    toggle: A
  };
}
function _t(o, e) {
  let t;
  Z(() => {
    t = o.value ? document.activeElement : void 0;
  }), R(() => {
    window.addEventListener("keyup", n);
  }), pe(() => {
    window.removeEventListener("keyup", n);
  });
  function n(s) {
    s.key === "Escape" && o.value && (e(), t == null || t.focus());
  }
}
function mt(o) {
  const { page: e, hash: t } = L(), n = w(!1), s = $(() => o.value.collapsed != null), i = $(() => !!o.value.link), u = w(!1), h = () => {
    u.value = z(e.value.relativePath, o.value.link);
  };
  j([e, o, t], h), R(h);
  const d = $(() => u.value ? !0 : o.value.items ? ce(e.value.relativePath, o.value.items) : !1), g = $(() => !!(o.value.items && o.value.items.length));
  Z(() => {
    n.value = !!(s.value && o.value.collapsed);
  }), ge(() => {
    (u.value || d.value) && (n.value = !1);
  });
  function P() {
    s.value && (n.value = !n.value);
  }
  return {
    collapsed: n,
    collapsible: s,
    isLink: i,
    isActiveLink: u,
    hasActiveLink: d,
    hasChildren: g,
    toggle: P
  };
}
function kt() {
  const { hasSidebar: o } = O(), e = ie("(min-width: 960px)"), t = ie("(min-width: 1280px)");
  return {
    isAsideEnabled: $(() => !t.value && !e.value ? !1 : o.value ? t.value : e.value)
  };
}
const ue = [];
function Te(o) {
  return typeof o.outline == "object" && !Array.isArray(o.outline) && o.outline.label || o.outlineTitle || "On this page";
}
function fe(o) {
  const e = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((t) => t.id && t.hasChildNodes()).map((t) => {
    const n = Number(t.tagName[1]);
    return {
      element: t,
      title: bt(t),
      link: "#" + t.id,
      level: n
    };
  });
  return $t(e, o);
}
function bt(o) {
  let e = "";
  for (const t of o.childNodes)
    if (t.nodeType === 1) {
      if (t.classList.contains("VPBadge") || t.classList.contains("header-anchor") || t.classList.contains("ignore-header"))
        continue;
      e += t.textContent;
    } else
      t.nodeType === 3 && (e += t.textContent);
  return e.trim();
}
function $t(o, e) {
  if (e === !1)
    return [];
  const t = (typeof e == "object" && !Array.isArray(e) ? e.level : e) || 2, [n, s] = typeof t == "number" ? [t, t] : t === "deep" ? [2, 6] : t;
  o = o.filter((u) => u.level >= n && u.level <= s), ue.length = 0;
  for (const { element: u, link: h } of o)
    ue.push({ element: u, link: h });
  const i = [];
  e:
    for (let u = 0; u < o.length; u++) {
      const h = o[u];
      if (u === 0)
        i.push(h);
      else {
        for (let d = u - 1; d >= 0; d--) {
          const g = o[d];
          if (g.level < h.level) {
            (g.children || (g.children = [])).push(h);
            continue e;
          }
        }
        i.push(h);
      }
    }
  return i;
}
function gt(o, e) {
  const { isAsideEnabled: t } = kt(), n = ot(i, 100);
  let s = null;
  R(() => {
    requestAnimationFrame(i), window.addEventListener("scroll", n);
  }), je(() => {
    u(location.hash);
  }), pe(() => {
    window.removeEventListener("scroll", n);
  });
  function i() {
    if (!t.value)
      return;
    const h = window.scrollY, d = window.innerHeight, g = document.body.offsetHeight, P = Math.abs(h + d - g) < 1, y = ue.map(({ element: N, link: A }) => ({
      link: A,
      top: yt(N)
    })).filter(({ top: N }) => !Number.isNaN(N)).sort((N, A) => N.top - A.top);
    if (!y.length) {
      u(null);
      return;
    }
    if (h < 1) {
      u(null);
      return;
    }
    if (P) {
      u(y[y.length - 1].link);
      return;
    }
    let V = null;
    for (const { link: N, top: A } of y) {
      if (A > h + ze() + 4)
        break;
      V = N;
    }
    u(V);
  }
  function u(h) {
    s && s.classList.remove("active"), h == null ? s = null : s = o.value.querySelector(`a[href="${decodeURIComponent(h)}"]`);
    const d = s;
    d ? (d.classList.add("active"), e.value.style.top = d.offsetTop + 39 + "px", e.value.style.opacity = "1") : (e.value.style.top = "33px", e.value.style.opacity = "0");
  }
}
function yt(o) {
  let e = 0;
  for (; o !== document.body; ) {
    if (o === null)
      return NaN;
    e += o.offsetTop, o = o.offsetParent;
  }
  return e;
}
const Pt = ["href", "title"], Lt = /* @__PURE__ */ _({
  __name: "VPDocOutlineItem",
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(o) {
    function e({ target: t }) {
      const n = t.href.split("#")[1], s = document.getElementById(decodeURIComponent(n));
      s == null || s.focus({ preventScroll: !0 });
    }
    return (t, n) => {
      const s = q("VPDocOutlineItem", !0);
      return a(), c("ul", {
        class: T(["VPDocOutlineItem", t.root ? "root" : "nested"])
      }, [
        (a(!0), c(M, null, E(t.headers, ({ children: i, link: u, title: h }) => (a(), c("li", null, [
          p("a", {
            class: "outline-link",
            href: u,
            onClick: e,
            title: h
          }, I(h), 9, Pt),
          i != null && i.length ? (a(), b(s, {
            key: 0,
            headers: i
          }, null, 8, ["headers"])) : f("", !0)
        ]))), 256))
      ], 2);
    };
  }
}), Ne = /* @__PURE__ */ k(Lt, [["__scopeId", "data-v-53c99d69"]]), Vt = { class: "content" }, St = {
  "aria-level": "2",
  class: "outline-title",
  id: "doc-outline-aria-label",
  role: "heading"
}, It = /* @__PURE__ */ _({
  __name: "VPDocAsideOutline",
  setup(o) {
    const { frontmatter: e, theme: t } = L(), n = ye([]);
    x(() => {
      n.value = fe(e.value.outline ?? t.value.outline);
    });
    const s = w(), i = w();
    return gt(s, i), (u, h) => (a(), c("nav", {
      "aria-labelledby": "doc-outline-aria-label",
      class: T(["VPDocAsideOutline", { "has-outline": n.value.length > 0 }]),
      ref_key: "container",
      ref: s
    }, [
      p("div", Vt, [
        p("div", {
          class: "outline-marker",
          ref_key: "marker",
          ref: i
        }, null, 512),
        p("div", St, I(r(Te)(r(t))), 1),
        m(Ne, {
          headers: n.value,
          root: !0
        }, null, 8, ["headers"])
      ])
    ], 2));
  }
}), wt = /* @__PURE__ */ k(It, [["__scopeId", "data-v-f610f197"]]), Tt = { class: "VPDocAsideCarbonAds" }, Nt = /* @__PURE__ */ _({
  __name: "VPDocAsideCarbonAds",
  props: {
    carbonAds: {}
  },
  setup(o) {
    const e = () => null;
    return (t, n) => (a(), c("div", Tt, [
      m(r(e), { "carbon-ads": t.carbonAds }, null, 8, ["carbon-ads"])
    ]));
  }
}), Mt = (o) => (C("data-v-cb998dce"), o = o(), H(), o), At = { class: "VPDocAside" }, Bt = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("div", { class: "spacer" }, null, -1)), Ct = /* @__PURE__ */ _({
  __name: "VPDocAside",
  setup(o) {
    const { theme: e } = L();
    return (t, n) => (a(), c("div", At, [
      l(t.$slots, "aside-top", {}, void 0, !0),
      l(t.$slots, "aside-outline-before", {}, void 0, !0),
      m(wt),
      l(t.$slots, "aside-outline-after", {}, void 0, !0),
      Bt,
      l(t.$slots, "aside-ads-before", {}, void 0, !0),
      r(e).carbonAds ? (a(), b(Nt, {
        key: 0,
        "carbon-ads": r(e).carbonAds
      }, null, 8, ["carbon-ads"])) : f("", !0),
      l(t.$slots, "aside-ads-after", {}, void 0, !0),
      l(t.$slots, "aside-bottom", {}, void 0, !0)
    ]));
  }
}), Ht = /* @__PURE__ */ k(Ct, [["__scopeId", "data-v-cb998dce"]]);
function Et() {
  const { theme: o, page: e } = L();
  return $(() => {
    const { text: t = "Edit this page", pattern: n = "" } = o.value.editLink || {};
    let s;
    return typeof n == "function" ? s = n(e.value) : s = n.replace(/:path/g, e.value.filePath), { url: s, text: t };
  });
}
function Ft() {
  const { page: o, theme: e, frontmatter: t } = L();
  return $(() => {
    var g, P, y, V, N, A, B, S;
    const n = we(e.value.sidebar, o.value.relativePath), s = ft(n), i = Dt(s, (U) => U.link.replace(/[?#].*$/, "")), u = i.findIndex((U) => z(o.value.relativePath, U.link)), h = ((g = e.value.docFooter) == null ? void 0 : g.prev) === !1 && !t.value.prev || t.value.prev === !1, d = ((P = e.value.docFooter) == null ? void 0 : P.next) === !1 && !t.value.next || t.value.next === !1;
    return {
      prev: h ? void 0 : {
        text: (typeof t.value.prev == "string" ? t.value.prev : typeof t.value.prev == "object" ? t.value.prev.text : void 0) ?? ((y = i[u - 1]) == null ? void 0 : y.docFooterText) ?? ((V = i[u - 1]) == null ? void 0 : V.text),
        link: (typeof t.value.prev == "object" ? t.value.prev.link : void 0) ?? ((N = i[u - 1]) == null ? void 0 : N.link)
      },
      next: d ? void 0 : {
        text: (typeof t.value.next == "string" ? t.value.next : typeof t.value.next == "object" ? t.value.next.text : void 0) ?? ((A = i[u + 1]) == null ? void 0 : A.docFooterText) ?? ((B = i[u + 1]) == null ? void 0 : B.text),
        link: (typeof t.value.next == "object" ? t.value.next.link : void 0) ?? ((S = i[u + 1]) == null ? void 0 : S.link)
      }
    };
  });
}
function Dt(o, e) {
  const t = /* @__PURE__ */ new Set();
  return o.filter((n) => {
    const s = e(n);
    return t.has(s) ? !1 : t.add(s);
  });
}
const F = /* @__PURE__ */ _({
  __name: "VPLink",
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(o) {
    const e = o, t = $(() => e.tag ?? (e.href ? "a" : "span")), n = $(
      () => e.href && Pe.test(e.href) || e.target === "_blank"
    );
    return (s, i) => (a(), b(K(t.value), {
      class: T(["VPLink", {
        link: s.href,
        "vp-external-link-icon": n.value,
        "no-icon": s.noIcon
      }]),
      href: s.href ? r(he)(s.href) : void 0,
      target: s.target ?? (n.value ? "_blank" : void 0),
      rel: s.rel ?? (n.value ? "noreferrer" : void 0)
    }, {
      default: v(() => [
        l(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "href", "target", "rel"]));
  }
}), Ot = { class: "VPLastUpdated" }, Ut = ["datetime"], Gt = /* @__PURE__ */ _({
  __name: "VPDocFooterLastUpdated",
  setup(o) {
    const { theme: e, page: t, frontmatter: n, lang: s } = L(), i = $(
      () => new Date(n.value.lastUpdated ?? t.value.lastUpdated)
    ), u = $(() => i.value.toISOString()), h = w("");
    return R(() => {
      Z(() => {
        var d, g, P;
        h.value = new Intl.DateTimeFormat(
          (g = (d = e.value.lastUpdated) == null ? void 0 : d.formatOptions) != null && g.forceLocale ? s.value : void 0,
          ((P = e.value.lastUpdated) == null ? void 0 : P.formatOptions) ?? {
            dateStyle: "short",
            timeStyle: "short"
          }
        ).format(i.value);
      });
    }), (d, g) => {
      var P;
      return a(), c("p", Ot, [
        D(I(((P = r(e).lastUpdated) == null ? void 0 : P.text) || r(e).lastUpdatedText || "Last updated") + ": ", 1),
        p("time", { datetime: u.value }, I(h.value), 9, Ut)
      ]);
    };
  }
}), jt = /* @__PURE__ */ k(Gt, [["__scopeId", "data-v-19a7ae4e"]]), Me = (o) => (C("data-v-5941af80"), o = o(), H(), o), zt = {
  key: 0,
  class: "VPDocFooter"
}, qt = {
  key: 0,
  class: "edit-info"
}, Wt = {
  key: 0,
  class: "edit-link"
}, Kt = /* @__PURE__ */ Me(() => /* @__PURE__ */ p("span", { class: "vpi-square-pen edit-link-icon" }, null, -1)), Rt = {
  key: 1,
  class: "last-updated"
}, Jt = {
  key: 1,
  class: "prev-next",
  "aria-labelledby": "doc-footer-aria-label"
}, Yt = /* @__PURE__ */ Me(() => /* @__PURE__ */ p("span", {
  class: "visually-hidden",
  id: "doc-footer-aria-label"
}, "Pager", -1)), Qt = { class: "pager" }, Xt = ["innerHTML"], Zt = ["innerHTML"], xt = { class: "pager" }, eo = ["innerHTML"], to = ["innerHTML"], oo = /* @__PURE__ */ _({
  __name: "VPDocFooter",
  setup(o) {
    const { theme: e, page: t, frontmatter: n } = L(), s = Et(), i = Ft(), u = $(() => e.value.editLink && n.value.editLink !== !1), h = $(() => t.value.lastUpdated && n.value.lastUpdated !== !1), d = $(() => u.value || h.value || i.value.prev || i.value.next);
    return (g, P) => {
      var y, V, N, A;
      return d.value ? (a(), c("footer", zt, [
        l(g.$slots, "doc-footer-before", {}, void 0, !0),
        u.value || h.value ? (a(), c("div", qt, [
          u.value ? (a(), c("div", Wt, [
            m(F, {
              class: "edit-link-button",
              href: r(s).url,
              "no-icon": !0
            }, {
              default: v(() => [
                Kt,
                D(" " + I(r(s).text), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ])) : f("", !0),
          h.value ? (a(), c("div", Rt, [
            m(jt)
          ])) : f("", !0)
        ])) : f("", !0),
        (y = r(i).prev) != null && y.link || (V = r(i).next) != null && V.link ? (a(), c("nav", Jt, [
          Yt,
          p("div", Qt, [
            (N = r(i).prev) != null && N.link ? (a(), b(F, {
              key: 0,
              class: "pager-link prev",
              href: r(i).prev.link
            }, {
              default: v(() => {
                var B;
                return [
                  p("span", {
                    class: "desc",
                    innerHTML: ((B = r(e).docFooter) == null ? void 0 : B.prev) || "Previous page"
                  }, null, 8, Xt),
                  p("span", {
                    class: "title",
                    innerHTML: r(i).prev.text
                  }, null, 8, Zt)
                ];
              }),
              _: 1
            }, 8, ["href"])) : f("", !0)
          ]),
          p("div", xt, [
            (A = r(i).next) != null && A.link ? (a(), b(F, {
              key: 0,
              class: "pager-link next",
              href: r(i).next.link
            }, {
              default: v(() => {
                var B;
                return [
                  p("span", {
                    class: "desc",
                    innerHTML: ((B = r(e).docFooter) == null ? void 0 : B.next) || "Next page"
                  }, null, 8, eo),
                  p("span", {
                    class: "title",
                    innerHTML: r(i).next.text
                  }, null, 8, to)
                ];
              }),
              _: 1
            }, 8, ["href"])) : f("", !0)
          ])
        ])) : f("", !0)
      ])) : f("", !0);
    };
  }
}), so = /* @__PURE__ */ k(oo, [["__scopeId", "data-v-5941af80"]]), no = (o) => (C("data-v-e6f2a212"), o = o(), H(), o), ao = { class: "container" }, ro = /* @__PURE__ */ no(() => /* @__PURE__ */ p("div", { class: "aside-curtain" }, null, -1)), io = { class: "aside-container" }, lo = { class: "aside-content" }, co = { class: "content" }, uo = { class: "content-container" }, vo = { class: "main" }, po = /* @__PURE__ */ _({
  __name: "VPDoc",
  setup(o) {
    const { theme: e } = L(), t = ee(), { hasSidebar: n, hasAside: s, leftAside: i } = O(), u = $(
      () => t.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (h, d) => {
      const g = q("Content");
      return a(), c("div", {
        class: T(["VPDoc", { "has-sidebar": r(n), "has-aside": r(s) }])
      }, [
        l(h.$slots, "doc-top", {}, void 0, !0),
        p("div", ao, [
          r(s) ? (a(), c("div", {
            key: 0,
            class: T(["aside", { "left-aside": r(i) }])
          }, [
            ro,
            p("div", io, [
              p("div", lo, [
                m(Ht, null, {
                  "aside-top": v(() => [
                    l(h.$slots, "aside-top", {}, void 0, !0)
                  ]),
                  "aside-bottom": v(() => [
                    l(h.$slots, "aside-bottom", {}, void 0, !0)
                  ]),
                  "aside-outline-before": v(() => [
                    l(h.$slots, "aside-outline-before", {}, void 0, !0)
                  ]),
                  "aside-outline-after": v(() => [
                    l(h.$slots, "aside-outline-after", {}, void 0, !0)
                  ]),
                  "aside-ads-before": v(() => [
                    l(h.$slots, "aside-ads-before", {}, void 0, !0)
                  ]),
                  "aside-ads-after": v(() => [
                    l(h.$slots, "aside-ads-after", {}, void 0, !0)
                  ]),
                  _: 3
                })
              ])
            ])
          ], 2)) : f("", !0),
          p("div", co, [
            p("div", uo, [
              l(h.$slots, "doc-before", {}, void 0, !0),
              p("main", vo, [
                m(g, {
                  class: T(["vp-doc", [
                    u.value,
                    r(e).externalLinkIcon && "external-link-icon-enabled"
                  ]])
                }, null, 8, ["class"])
              ]),
              m(so, null, {
                "doc-footer-before": v(() => [
                  l(h.$slots, "doc-footer-before", {}, void 0, !0)
                ]),
                _: 3
              }),
              l(h.$slots, "doc-after", {}, void 0, !0)
            ])
          ])
        ]),
        l(h.$slots, "doc-bottom", {}, void 0, !0)
      ], 2);
    };
  }
}), ho = /* @__PURE__ */ k(po, [["__scopeId", "data-v-e6f2a212"]]), fo = /* @__PURE__ */ _({
  __name: "VPButton",
  props: {
    tag: {},
    size: { default: "medium" },
    theme: { default: "brand" },
    text: {},
    href: {},
    target: {},
    rel: {}
  },
  setup(o) {
    const e = o, t = $(
      () => e.href && Pe.test(e.href)
    ), n = $(() => e.tag || e.href ? "a" : "button");
    return (s, i) => (a(), b(K(n.value), {
      class: T(["VPButton", [s.size, s.theme]]),
      href: s.href ? r(he)(s.href) : void 0,
      target: e.target ?? (t.value ? "_blank" : void 0),
      rel: e.rel ?? (t.value ? "noreferrer" : void 0)
    }, {
      default: v(() => [
        D(I(s.text), 1)
      ]),
      _: 1
    }, 8, ["class", "href", "target", "rel"]));
  }
}), _o = /* @__PURE__ */ k(fo, [["__scopeId", "data-v-c9cf0e3c"]]), mo = ["src", "alt"], ko = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "VPImage",
  props: {
    image: {},
    alt: {}
  },
  setup(o) {
    return (e, t) => {
      const n = q("VPImage", !0);
      return e.image ? (a(), c(M, { key: 0 }, [
        typeof e.image == "string" || "src" in e.image ? (a(), c("img", Y({
          key: 0,
          class: "VPImage"
        }, typeof e.image == "string" ? e.$attrs : { ...e.image, ...e.$attrs }, {
          src: r(ve)(typeof e.image == "string" ? e.image : e.image.src),
          alt: e.alt ?? (typeof e.image == "string" ? "" : e.image.alt || "")
        }), null, 16, mo)) : (a(), c(M, { key: 1 }, [
          m(n, Y({
            class: "dark",
            image: e.image.dark,
            alt: e.image.alt
          }, e.$attrs), null, 16, ["image", "alt"]),
          m(n, Y({
            class: "light",
            image: e.image.light,
            alt: e.image.alt
          }, e.$attrs), null, 16, ["image", "alt"])
        ], 64))
      ], 64)) : f("", !0);
    };
  }
}), X = /* @__PURE__ */ k(ko, [["__scopeId", "data-v-ab19afbb"]]), bo = (o) => (C("data-v-b10c5094"), o = o(), H(), o), $o = { class: "container" }, go = { class: "main" }, yo = {
  key: 0,
  class: "name"
}, Po = ["innerHTML"], Lo = ["innerHTML"], Vo = ["innerHTML"], So = {
  key: 0,
  class: "actions"
}, Io = {
  key: 0,
  class: "image"
}, wo = { class: "image-container" }, To = /* @__PURE__ */ bo(() => /* @__PURE__ */ p("div", { class: "image-bg" }, null, -1)), No = /* @__PURE__ */ _({
  __name: "VPHero",
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(o) {
    const e = te("hero-image-slot-exists");
    return (t, n) => (a(), c("div", {
      class: T(["VPHero", { "has-image": t.image || r(e) }])
    }, [
      p("div", $o, [
        p("div", go, [
          l(t.$slots, "home-hero-info-before", {}, void 0, !0),
          l(t.$slots, "home-hero-info", {}, () => [
            t.name ? (a(), c("h1", yo, [
              p("span", {
                innerHTML: t.name,
                class: "clip"
              }, null, 8, Po)
            ])) : f("", !0),
            t.text ? (a(), c("p", {
              key: 1,
              innerHTML: t.text,
              class: "text"
            }, null, 8, Lo)) : f("", !0),
            t.tagline ? (a(), c("p", {
              key: 2,
              innerHTML: t.tagline,
              class: "tagline"
            }, null, 8, Vo)) : f("", !0)
          ], !0),
          l(t.$slots, "home-hero-info-after", {}, void 0, !0),
          t.actions ? (a(), c("div", So, [
            (a(!0), c(M, null, E(t.actions, (s) => (a(), c("div", {
              key: s.link,
              class: "action"
            }, [
              m(_o, {
                tag: "a",
                size: "medium",
                theme: s.theme,
                text: s.text,
                href: s.link,
                target: s.target,
                rel: s.rel
              }, null, 8, ["theme", "text", "href", "target", "rel"])
            ]))), 128))
          ])) : f("", !0),
          l(t.$slots, "home-hero-actions-after", {}, void 0, !0)
        ]),
        t.image || r(e) ? (a(), c("div", Io, [
          p("div", wo, [
            To,
            l(t.$slots, "home-hero-image", {}, () => [
              t.image ? (a(), b(X, {
                key: 0,
                class: "image-src",
                image: t.image
              }, null, 8, ["image"])) : f("", !0)
            ], !0)
          ])
        ])) : f("", !0)
      ])
    ], 2));
  }
}), Mo = /* @__PURE__ */ k(No, [["__scopeId", "data-v-b10c5094"]]), Ao = /* @__PURE__ */ _({
  __name: "VPHomeHero",
  setup(o) {
    const { frontmatter: e } = L();
    return (t, n) => r(e).hero ? (a(), b(Mo, {
      key: 0,
      class: "VPHomeHero",
      name: r(e).hero.name,
      text: r(e).hero.text,
      tagline: r(e).hero.tagline,
      image: r(e).hero.image,
      actions: r(e).hero.actions
    }, {
      "home-hero-info-before": v(() => [
        l(t.$slots, "home-hero-info-before")
      ]),
      "home-hero-info": v(() => [
        l(t.$slots, "home-hero-info")
      ]),
      "home-hero-info-after": v(() => [
        l(t.$slots, "home-hero-info-after")
      ]),
      "home-hero-actions-after": v(() => [
        l(t.$slots, "home-hero-actions-after")
      ]),
      "home-hero-image": v(() => [
        l(t.$slots, "home-hero-image")
      ]),
      _: 3
    }, 8, ["name", "text", "tagline", "image", "actions"])) : f("", !0);
  }
}), Bo = (o) => (C("data-v-bd37d1a2"), o = o(), H(), o), Co = { class: "box" }, Ho = {
  key: 0,
  class: "icon"
}, Eo = ["innerHTML"], Fo = ["innerHTML"], Do = ["innerHTML"], Oo = {
  key: 4,
  class: "link-text"
}, Uo = { class: "link-text-value" }, Go = /* @__PURE__ */ Bo(() => /* @__PURE__ */ p("span", { class: "vpi-arrow-right link-text-icon" }, null, -1)), jo = /* @__PURE__ */ _({
  __name: "VPFeature",
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {},
    target: {}
  },
  setup(o) {
    return (e, t) => (a(), b(F, {
      class: "VPFeature",
      href: e.link,
      rel: e.rel,
      target: e.target,
      "no-icon": !0,
      tag: e.link ? "a" : "div"
    }, {
      default: v(() => [
        p("article", Co, [
          typeof e.icon == "object" && e.icon.wrap ? (a(), c("div", Ho, [
            m(X, {
              image: e.icon,
              alt: e.icon.alt,
              height: e.icon.height || 48,
              width: e.icon.width || 48
            }, null, 8, ["image", "alt", "height", "width"])
          ])) : typeof e.icon == "object" ? (a(), b(X, {
            key: 1,
            image: e.icon,
            alt: e.icon.alt,
            height: e.icon.height || 48,
            width: e.icon.width || 48
          }, null, 8, ["image", "alt", "height", "width"])) : e.icon ? (a(), c("div", {
            key: 2,
            class: "icon",
            innerHTML: e.icon
          }, null, 8, Eo)) : f("", !0),
          p("h2", {
            class: "title",
            innerHTML: e.title
          }, null, 8, Fo),
          e.details ? (a(), c("p", {
            key: 3,
            class: "details",
            innerHTML: e.details
          }, null, 8, Do)) : f("", !0),
          e.linkText ? (a(), c("div", Oo, [
            p("p", Uo, [
              D(I(e.linkText) + " ", 1),
              Go
            ])
          ])) : f("", !0)
        ])
      ]),
      _: 1
    }, 8, ["href", "rel", "target", "tag"]));
  }
}), zo = /* @__PURE__ */ k(jo, [["__scopeId", "data-v-bd37d1a2"]]), qo = {
  key: 0,
  class: "VPFeatures"
}, Wo = { class: "container" }, Ko = { class: "items" }, Ro = /* @__PURE__ */ _({
  __name: "VPFeatures",
  props: {
    features: {}
  },
  setup(o) {
    const e = o, t = $(() => {
      const n = e.features.length;
      if (n) {
        if (n === 2)
          return "grid-2";
        if (n === 3)
          return "grid-3";
        if (n % 3 === 0)
          return "grid-6";
        if (n > 3)
          return "grid-4";
      } else
        return;
    });
    return (n, s) => n.features ? (a(), c("div", qo, [
      p("div", Wo, [
        p("div", Ko, [
          (a(!0), c(M, null, E(n.features, (i) => (a(), c("div", {
            key: i.title,
            class: T(["item", [t.value]])
          }, [
            m(zo, {
              icon: i.icon,
              title: i.title,
              details: i.details,
              link: i.link,
              "link-text": i.linkText,
              rel: i.rel,
              target: i.target
            }, null, 8, ["icon", "title", "details", "link", "link-text", "rel", "target"])
          ], 2))), 128))
        ])
      ])
    ])) : f("", !0);
  }
}), Jo = /* @__PURE__ */ k(Ro, [["__scopeId", "data-v-b1eea84a"]]), Yo = /* @__PURE__ */ _({
  __name: "VPHomeFeatures",
  setup(o) {
    const { frontmatter: e } = L();
    return (t, n) => r(e).features ? (a(), b(Jo, {
      key: 0,
      class: "VPHomeFeatures",
      features: r(e).features
    }, null, 8, ["features"])) : f("", !0);
  }
}), Qo = /* @__PURE__ */ _({
  __name: "VPHomeContent",
  setup(o) {
    const { width: e } = qe({
      initialWidth: 0,
      includeScrollbar: !1
    });
    return (t, n) => (a(), c("div", {
      class: "vp-doc container",
      style: Le(r(e) ? { "--vp-offset": `calc(50% - ${r(e) / 2}px)` } : {})
    }, [
      l(t.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Xo = /* @__PURE__ */ k(Qo, [["__scopeId", "data-v-c141a4bd"]]), Zo = { class: "VPHome" }, xo = /* @__PURE__ */ _({
  __name: "VPHome",
  setup(o) {
    const { frontmatter: e } = L();
    return (t, n) => {
      const s = q("Content");
      return a(), c("div", Zo, [
        l(t.$slots, "home-hero-before", {}, void 0, !0),
        m(Ao, null, {
          "home-hero-info-before": v(() => [
            l(t.$slots, "home-hero-info-before", {}, void 0, !0)
          ]),
          "home-hero-info": v(() => [
            l(t.$slots, "home-hero-info", {}, void 0, !0)
          ]),
          "home-hero-info-after": v(() => [
            l(t.$slots, "home-hero-info-after", {}, void 0, !0)
          ]),
          "home-hero-actions-after": v(() => [
            l(t.$slots, "home-hero-actions-after", {}, void 0, !0)
          ]),
          "home-hero-image": v(() => [
            l(t.$slots, "home-hero-image", {}, void 0, !0)
          ]),
          _: 3
        }),
        l(t.$slots, "home-hero-after", {}, void 0, !0),
        l(t.$slots, "home-features-before", {}, void 0, !0),
        m(Yo),
        l(t.$slots, "home-features-after", {}, void 0, !0),
        r(e).markdownStyles !== !1 ? (a(), b(Xo, { key: 0 }, {
          default: v(() => [
            m(s)
          ]),
          _: 1
        })) : (a(), b(s, { key: 1 }))
      ]);
    };
  }
}), es = /* @__PURE__ */ k(xo, [["__scopeId", "data-v-07b1ad08"]]), ts = {}, os = { class: "VPPage" };
function ss(o, e) {
  const t = q("Content");
  return a(), c("div", os, [
    l(o.$slots, "page-top"),
    m(t),
    l(o.$slots, "page-bottom")
  ]);
}
const ns = /* @__PURE__ */ k(ts, [["render", ss]]), as = /* @__PURE__ */ _({
  __name: "VPContent",
  setup(o) {
    const { page: e, frontmatter: t } = L(), { hasSidebar: n } = O();
    return (s, i) => (a(), c("div", {
      class: T(["VPContent", {
        "has-sidebar": r(n),
        "is-home": r(t).layout === "home"
      }]),
      id: "VPContent"
    }, [
      r(e).isNotFound ? l(s.$slots, "not-found", { key: 0 }, () => [
        m(pt)
      ], !0) : r(t).layout === "page" ? (a(), b(ns, { key: 1 }, {
        "page-top": v(() => [
          l(s.$slots, "page-top", {}, void 0, !0)
        ]),
        "page-bottom": v(() => [
          l(s.$slots, "page-bottom", {}, void 0, !0)
        ]),
        _: 3
      })) : r(t).layout === "home" ? (a(), b(es, { key: 2 }, {
        "home-hero-before": v(() => [
          l(s.$slots, "home-hero-before", {}, void 0, !0)
        ]),
        "home-hero-info-before": v(() => [
          l(s.$slots, "home-hero-info-before", {}, void 0, !0)
        ]),
        "home-hero-info": v(() => [
          l(s.$slots, "home-hero-info", {}, void 0, !0)
        ]),
        "home-hero-info-after": v(() => [
          l(s.$slots, "home-hero-info-after", {}, void 0, !0)
        ]),
        "home-hero-actions-after": v(() => [
          l(s.$slots, "home-hero-actions-after", {}, void 0, !0)
        ]),
        "home-hero-image": v(() => [
          l(s.$slots, "home-hero-image", {}, void 0, !0)
        ]),
        "home-hero-after": v(() => [
          l(s.$slots, "home-hero-after", {}, void 0, !0)
        ]),
        "home-features-before": v(() => [
          l(s.$slots, "home-features-before", {}, void 0, !0)
        ]),
        "home-features-after": v(() => [
          l(s.$slots, "home-features-after", {}, void 0, !0)
        ]),
        _: 3
      })) : r(t).layout && r(t).layout !== "doc" ? (a(), b(K(r(t).layout), { key: 3 })) : (a(), b(ho, { key: 4 }, {
        "doc-top": v(() => [
          l(s.$slots, "doc-top", {}, void 0, !0)
        ]),
        "doc-bottom": v(() => [
          l(s.$slots, "doc-bottom", {}, void 0, !0)
        ]),
        "doc-footer-before": v(() => [
          l(s.$slots, "doc-footer-before", {}, void 0, !0)
        ]),
        "doc-before": v(() => [
          l(s.$slots, "doc-before", {}, void 0, !0)
        ]),
        "doc-after": v(() => [
          l(s.$slots, "doc-after", {}, void 0, !0)
        ]),
        "aside-top": v(() => [
          l(s.$slots, "aside-top", {}, void 0, !0)
        ]),
        "aside-outline-before": v(() => [
          l(s.$slots, "aside-outline-before", {}, void 0, !0)
        ]),
        "aside-outline-after": v(() => [
          l(s.$slots, "aside-outline-after", {}, void 0, !0)
        ]),
        "aside-ads-before": v(() => [
          l(s.$slots, "aside-ads-before", {}, void 0, !0)
        ]),
        "aside-ads-after": v(() => [
          l(s.$slots, "aside-ads-after", {}, void 0, !0)
        ]),
        "aside-bottom": v(() => [
          l(s.$slots, "aside-bottom", {}, void 0, !0)
        ]),
        _: 3
      }))
    ], 2));
  }
}), rs = /* @__PURE__ */ k(as, [["__scopeId", "data-v-9a6c75ad"]]), is = { class: "container" }, ls = ["innerHTML"], cs = ["innerHTML"], us = /* @__PURE__ */ _({
  __name: "VPFooter",
  setup(o) {
    const { theme: e, frontmatter: t } = L(), { hasSidebar: n } = O();
    return (s, i) => r(e).footer && r(t).footer !== !1 ? (a(), c("footer", {
      key: 0,
      class: T(["VPFooter", { "has-sidebar": r(n) }])
    }, [
      p("div", is, [
        r(e).footer.message ? (a(), c("p", {
          key: 0,
          class: "message",
          innerHTML: r(e).footer.message
        }, null, 8, ls)) : f("", !0),
        r(e).footer.copyright ? (a(), c("p", {
          key: 1,
          class: "copyright",
          innerHTML: r(e).footer.copyright
        }, null, 8, cs)) : f("", !0)
      ])
    ], 2)) : f("", !0);
  }
}), ds = /* @__PURE__ */ k(us, [["__scopeId", "data-v-566314d4"]]);
function vs() {
  const { theme: o, frontmatter: e } = L(), t = ye([]), n = $(() => t.value.length > 0);
  return x(() => {
    t.value = fe(e.value.outline ?? o.value.outline);
  }), {
    headers: t,
    hasLocalNav: n
  };
}
const ps = (o) => (C("data-v-883964e0"), o = o(), H(), o), hs = { class: "menu-text" }, fs = /* @__PURE__ */ ps(() => /* @__PURE__ */ p("span", { class: "vpi-chevron-right icon" }, null, -1)), _s = { class: "header" }, ms = { class: "outline" }, ks = /* @__PURE__ */ _({
  __name: "VPLocalNavOutlineDropdown",
  props: {
    headers: {},
    navHeight: {}
  },
  setup(o) {
    const e = o, { theme: t } = L(), n = w(!1), s = w(0), i = w(), u = w();
    function h(y) {
      var V;
      (V = i.value) != null && V.contains(y.target) || (n.value = !1);
    }
    j(n, (y) => {
      if (y) {
        document.addEventListener("click", h);
        return;
      }
      document.removeEventListener("click", h);
    }), We("Escape", () => {
      n.value = !1;
    }), x(() => {
      n.value = !1;
    });
    function d() {
      n.value = !n.value, s.value = window.innerHeight + Math.min(window.scrollY - e.navHeight, 0);
    }
    function g(y) {
      y.target.classList.contains("outline-link") && (u.value && (u.value.style.transition = "none"), Ke(() => {
        n.value = !1;
      }));
    }
    function P() {
      n.value = !1, window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (y, V) => (a(), c("div", {
      class: "VPLocalNavOutlineDropdown",
      style: Le({ "--vp-vh": s.value + "px" }),
      ref_key: "main",
      ref: i
    }, [
      y.headers.length > 0 ? (a(), c("button", {
        key: 0,
        onClick: d,
        class: T({ open: n.value })
      }, [
        p("span", hs, I(r(Te)(r(t))), 1),
        fs
      ], 2)) : (a(), c("button", {
        key: 1,
        onClick: P
      }, I(r(t).returnToTopLabel || "Return to top"), 1)),
      m(de, { name: "flyout" }, {
        default: v(() => [
          n.value ? (a(), c("div", {
            key: 0,
            ref_key: "items",
            ref: u,
            class: "items",
            onClick: g
          }, [
            p("div", _s, [
              p("a", {
                class: "top-link",
                href: "#",
                onClick: P
              }, I(r(t).returnToTopLabel || "Return to top"), 1)
            ]),
            p("div", ms, [
              m(Ne, { headers: y.headers }, null, 8, ["headers"])
            ])
          ], 512)) : f("", !0)
        ]),
        _: 1
      })
    ], 4));
  }
}), bs = /* @__PURE__ */ k(ks, [["__scopeId", "data-v-883964e0"]]), $s = (o) => (C("data-v-2488c25a"), o = o(), H(), o), gs = { class: "container" }, ys = ["aria-expanded"], Ps = /* @__PURE__ */ $s(() => /* @__PURE__ */ p("span", { class: "vpi-align-left menu-icon" }, null, -1)), Ls = { class: "menu-text" }, Vs = /* @__PURE__ */ _({
  __name: "VPLocalNav",
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(o) {
    const { theme: e, frontmatter: t } = L(), { hasSidebar: n } = O(), { headers: s } = vs(), { y: i } = Ve(), u = w(0);
    R(() => {
      u.value = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    }), x(() => {
      s.value = fe(t.value.outline ?? e.value.outline);
    });
    const h = $(() => s.value.length === 0), d = $(() => h.value && !n.value), g = $(() => ({
      VPLocalNav: !0,
      "has-sidebar": n.value,
      empty: h.value,
      fixed: d.value
    }));
    return (P, y) => r(t).layout !== "home" && (!d.value || r(i) >= u.value) ? (a(), c("div", {
      key: 0,
      class: T(g.value)
    }, [
      p("div", gs, [
        r(n) ? (a(), c("button", {
          key: 0,
          class: "menu",
          "aria-expanded": P.open,
          "aria-controls": "VPSidebarNav",
          onClick: y[0] || (y[0] = (V) => P.$emit("open-menu"))
        }, [
          Ps,
          p("span", Ls, I(r(e).sidebarMenuLabel || "Menu"), 1)
        ], 8, ys)) : f("", !0),
        m(bs, {
          headers: r(s),
          navHeight: u.value
        }, null, 8, ["headers", "navHeight"])
      ])
    ], 2)) : f("", !0);
  }
}), Ss = /* @__PURE__ */ k(Vs, [["__scopeId", "data-v-2488c25a"]]);
function Is() {
  const o = w(!1);
  function e() {
    o.value = !0, window.addEventListener("resize", s);
  }
  function t() {
    o.value = !1, window.removeEventListener("resize", s);
  }
  function n() {
    o.value ? t() : e();
  }
  function s() {
    window.outerWidth >= 768 && t();
  }
  const i = ee();
  return j(() => i.path, t), {
    isScreenOpen: o,
    openScreen: e,
    closeScreen: t,
    toggleScreen: n
  };
}
const ws = {}, Ts = {
  class: "VPSwitch",
  type: "button",
  role: "switch"
}, Ns = { class: "check" }, Ms = {
  key: 0,
  class: "icon"
};
function As(o, e) {
  return a(), c("button", Ts, [
    p("span", Ns, [
      o.$slots.default ? (a(), c("span", Ms, [
        l(o.$slots, "default", {}, void 0, !0)
      ])) : f("", !0)
    ])
  ]);
}
const Bs = /* @__PURE__ */ k(ws, [["render", As], ["__scopeId", "data-v-b4ccac88"]]), Ae = (o) => (C("data-v-7df97737"), o = o(), H(), o), Cs = /* @__PURE__ */ Ae(() => /* @__PURE__ */ p("span", { class: "vpi-sun sun" }, null, -1)), Hs = /* @__PURE__ */ Ae(() => /* @__PURE__ */ p("span", { class: "vpi-moon moon" }, null, -1)), Es = /* @__PURE__ */ _({
  __name: "VPSwitchAppearance",
  setup(o) {
    const { isDark: e, theme: t } = L(), n = te("toggle-appearance", () => {
      e.value = !e.value;
    }), s = $(() => e.value ? t.value.lightModeSwitchTitle || "Switch to light theme" : t.value.darkModeSwitchTitle || "Switch to dark theme");
    return (i, u) => (a(), b(Bs, {
      title: s.value,
      class: "VPSwitchAppearance",
      "aria-checked": r(e),
      onClick: r(n)
    }, {
      default: v(() => [
        Cs,
        Hs
      ]),
      _: 1
    }, 8, ["title", "aria-checked", "onClick"]));
  }
}), _e = /* @__PURE__ */ k(Es, [["__scopeId", "data-v-7df97737"]]), Fs = {
  key: 0,
  class: "VPNavBarAppearance"
}, Ds = /* @__PURE__ */ _({
  __name: "VPNavBarAppearance",
  setup(o) {
    const { site: e } = L();
    return (t, n) => r(e).appearance && r(e).appearance !== "force-dark" ? (a(), c("div", Fs, [
      m(_e)
    ])) : f("", !0);
  }
}), Os = /* @__PURE__ */ k(Ds, [["__scopeId", "data-v-283b26e9"]]), me = w();
let Be = !1, re = 0;
function Us(o) {
  const e = w(!1);
  if (oe) {
    !Be && Gs(), re++;
    const t = j(me, (n) => {
      var s, i, u;
      n === o.el.value || (s = o.el.value) != null && s.contains(n) ? (e.value = !0, (i = o.onFocus) == null || i.call(o)) : (e.value = !1, (u = o.onBlur) == null || u.call(o));
    });
    pe(() => {
      t(), re--, re || js();
    });
  }
  return Re(e);
}
function Gs() {
  document.addEventListener("focusin", Ce), Be = !0, me.value = document.activeElement;
}
function js() {
  document.removeEventListener("focusin", Ce);
}
function Ce() {
  me.value = document.activeElement;
}
const zs = { class: "VPMenuLink" }, qs = /* @__PURE__ */ _({
  __name: "VPMenuLink",
  props: {
    item: {}
  },
  setup(o) {
    const { page: e } = L();
    return (t, n) => (a(), c("div", zs, [
      m(F, {
        class: T({ active: r(z)(r(e).relativePath, t.item.activeMatch || t.item.link, !!t.item.activeMatch) }),
        href: t.item.link,
        target: t.item.target,
        rel: t.item.rel
      }, {
        default: v(() => [
          D(I(t.item.text), 1)
        ]),
        _: 1
      }, 8, ["class", "href", "target", "rel"])
    ]));
  }
}), se = /* @__PURE__ */ k(qs, [["__scopeId", "data-v-f51f088d"]]), Ws = { class: "VPMenuGroup" }, Ks = {
  key: 0,
  class: "title"
}, Rs = /* @__PURE__ */ _({
  __name: "VPMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(o) {
    return (e, t) => (a(), c("div", Ws, [
      e.text ? (a(), c("p", Ks, I(e.text), 1)) : f("", !0),
      (a(!0), c(M, null, E(e.items, (n) => (a(), c(M, null, [
        "link" in n ? (a(), b(se, {
          key: 0,
          item: n
        }, null, 8, ["item"])) : f("", !0)
      ], 64))), 256))
    ]));
  }
}), Js = /* @__PURE__ */ k(Rs, [["__scopeId", "data-v-a6b0397c"]]), Ys = { class: "VPMenu" }, Qs = {
  key: 0,
  class: "items"
}, Xs = /* @__PURE__ */ _({
  __name: "VPMenu",
  props: {
    items: {}
  },
  setup(o) {
    return (e, t) => (a(), c("div", Ys, [
      e.items ? (a(), c("div", Qs, [
        (a(!0), c(M, null, E(e.items, (n) => (a(), c(M, {
          key: n.text
        }, [
          "link" in n ? (a(), b(se, {
            key: 0,
            item: n
          }, null, 8, ["item"])) : (a(), b(Js, {
            key: 1,
            text: n.text,
            items: n.items
          }, null, 8, ["text", "items"]))
        ], 64))), 128))
      ])) : f("", !0),
      l(e.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Zs = /* @__PURE__ */ k(Xs, [["__scopeId", "data-v-e42ed9b3"]]), xs = (o) => (C("data-v-af5898d3"), o = o(), H(), o), en = ["aria-expanded", "aria-label"], tn = {
  key: 0,
  class: "text"
}, on = ["innerHTML"], sn = /* @__PURE__ */ xs(() => /* @__PURE__ */ p("span", { class: "vpi-chevron-down text-icon" }, null, -1)), nn = {
  key: 1,
  class: "vpi-more-horizontal icon"
}, an = { class: "menu" }, rn = /* @__PURE__ */ _({
  __name: "VPFlyout",
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(o) {
    const e = w(!1), t = w();
    Us({ el: t, onBlur: n });
    function n() {
      e.value = !1;
    }
    return (s, i) => (a(), c("div", {
      class: "VPFlyout",
      ref_key: "el",
      ref: t,
      onMouseenter: i[1] || (i[1] = (u) => e.value = !0),
      onMouseleave: i[2] || (i[2] = (u) => e.value = !1)
    }, [
      p("button", {
        type: "button",
        class: "button",
        "aria-haspopup": "true",
        "aria-expanded": e.value,
        "aria-label": s.label,
        onClick: i[0] || (i[0] = (u) => e.value = !e.value)
      }, [
        s.button || s.icon ? (a(), c("span", tn, [
          s.icon ? (a(), c("span", {
            key: 0,
            class: T([s.icon, "option-icon"])
          }, null, 2)) : f("", !0),
          s.button ? (a(), c("span", {
            key: 1,
            innerHTML: s.button
          }, null, 8, on)) : f("", !0),
          sn
        ])) : (a(), c("span", nn))
      ], 8, en),
      p("div", an, [
        m(Zs, { items: s.items }, {
          default: v(() => [
            l(s.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["items"])
      ])
    ], 544));
  }
}), ke = /* @__PURE__ */ k(rn, [["__scopeId", "data-v-af5898d3"]]), ln = ["href", "aria-label", "innerHTML"], cn = /* @__PURE__ */ _({
  __name: "VPSocialLink",
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(o) {
    const e = o, t = $(() => typeof e.icon == "object" ? e.icon.svg : `<span class="vpi-social-${e.icon}" />`);
    return (n, s) => (a(), c("a", {
      class: "VPSocialLink no-icon",
      href: n.link,
      "aria-label": n.ariaLabel ?? (typeof n.icon == "string" ? n.icon : ""),
      target: "_blank",
      rel: "noopener",
      innerHTML: t.value
    }, null, 8, ln));
  }
}), un = /* @__PURE__ */ k(cn, [["__scopeId", "data-v-358b6670"]]), dn = { class: "VPSocialLinks" }, vn = /* @__PURE__ */ _({
  __name: "VPSocialLinks",
  props: {
    links: {}
  },
  setup(o) {
    return (e, t) => (a(), c("div", dn, [
      (a(!0), c(M, null, E(e.links, ({ link: n, icon: s, ariaLabel: i }) => (a(), b(un, {
        key: n,
        icon: s,
        link: n,
        ariaLabel: i
      }, null, 8, ["icon", "link", "ariaLabel"]))), 128))
    ]));
  }
}), be = /* @__PURE__ */ k(vn, [["__scopeId", "data-v-e71e869c"]]), pn = {
  key: 0,
  class: "group translations"
}, hn = { class: "trans-title" }, fn = {
  key: 1,
  class: "group"
}, _n = { class: "item appearance" }, mn = { class: "label" }, kn = { class: "appearance-action" }, bn = {
  key: 2,
  class: "group"
}, $n = { class: "item social-links" }, gn = /* @__PURE__ */ _({
  __name: "VPNavBarExtra",
  setup(o) {
    const { site: e, theme: t } = L(), { localeLinks: n, currentLang: s } = J({ correspondingLink: !0 }), i = $(
      () => n.value.length && s.value.label || e.value.appearance || t.value.socialLinks
    );
    return (u, h) => i.value ? (a(), b(ke, {
      key: 0,
      class: "VPNavBarExtra",
      label: "extra navigation"
    }, {
      default: v(() => [
        r(n).length && r(s).label ? (a(), c("div", pn, [
          p("p", hn, I(r(s).label), 1),
          (a(!0), c(M, null, E(r(n), (d) => (a(), b(se, {
            key: d.link,
            item: d
          }, null, 8, ["item"]))), 128))
        ])) : f("", !0),
        r(e).appearance && r(e).appearance !== "force-dark" ? (a(), c("div", fn, [
          p("div", _n, [
            p("p", mn, I(r(t).darkModeSwitchLabel || "Appearance"), 1),
            p("div", kn, [
              m(_e)
            ])
          ])
        ])) : f("", !0),
        r(t).socialLinks ? (a(), c("div", bn, [
          p("div", $n, [
            m(be, {
              class: "social-links-list",
              links: r(t).socialLinks
            }, null, 8, ["links"])
          ])
        ])) : f("", !0)
      ]),
      _: 1
    })) : f("", !0);
  }
}), yn = /* @__PURE__ */ k(gn, [["__scopeId", "data-v-8e87c032"]]), Pn = (o) => (C("data-v-6bee1efd"), o = o(), H(), o), Ln = ["aria-expanded"], Vn = /* @__PURE__ */ Pn(() => /* @__PURE__ */ p("span", { class: "container" }, [
  /* @__PURE__ */ p("span", { class: "top" }),
  /* @__PURE__ */ p("span", { class: "middle" }),
  /* @__PURE__ */ p("span", { class: "bottom" })
], -1)), Sn = [
  Vn
], In = /* @__PURE__ */ _({
  __name: "VPNavBarHamburger",
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(o) {
    return (e, t) => (a(), c("button", {
      type: "button",
      class: T(["VPNavBarHamburger", { active: e.active }]),
      "aria-label": "mobile navigation",
      "aria-expanded": e.active,
      "aria-controls": "VPNavScreen",
      onClick: t[0] || (t[0] = (n) => e.$emit("click"))
    }, Sn, 10, Ln));
  }
}), wn = /* @__PURE__ */ k(In, [["__scopeId", "data-v-6bee1efd"]]), Tn = ["innerHTML"], Nn = /* @__PURE__ */ _({
  __name: "VPNavBarMenuLink",
  props: {
    item: {}
  },
  setup(o) {
    const { page: e } = L();
    return (t, n) => (a(), b(F, {
      class: T({
        VPNavBarMenuLink: !0,
        active: r(z)(
          r(e).relativePath,
          t.item.activeMatch || t.item.link,
          !!t.item.activeMatch
        )
      }),
      href: t.item.link,
      noIcon: t.item.noIcon,
      target: t.item.target,
      rel: t.item.rel,
      tabindex: "0"
    }, {
      default: v(() => [
        p("span", {
          innerHTML: t.item.text
        }, null, 8, Tn)
      ]),
      _: 1
    }, 8, ["class", "href", "noIcon", "target", "rel"]));
  }
}), Mn = /* @__PURE__ */ k(Nn, [["__scopeId", "data-v-08fbf4b6"]]), An = /* @__PURE__ */ _({
  __name: "VPNavBarMenuGroup",
  props: {
    item: {}
  },
  setup(o) {
    const e = o, { page: t } = L(), n = (i) => "link" in i ? z(
      t.value.relativePath,
      i.link,
      !!e.item.activeMatch
    ) : i.items.some(n), s = $(() => n(e.item));
    return (i, u) => (a(), b(ke, {
      class: T({
        VPNavBarMenuGroup: !0,
        active: r(z)(
          r(t).relativePath,
          i.item.activeMatch,
          !!i.item.activeMatch
        ) || s.value
      }),
      button: i.item.text,
      items: i.item.items
    }, null, 8, ["class", "button", "items"]));
  }
}), Bn = (o) => (C("data-v-f732b5d0"), o = o(), H(), o), Cn = {
  key: 0,
  "aria-labelledby": "main-nav-aria-label",
  class: "VPNavBarMenu"
}, Hn = /* @__PURE__ */ Bn(() => /* @__PURE__ */ p("span", {
  id: "main-nav-aria-label",
  class: "visually-hidden"
}, "Main Navigation", -1)), En = /* @__PURE__ */ _({
  __name: "VPNavBarMenu",
  setup(o) {
    const { theme: e } = L();
    return (t, n) => r(e).nav ? (a(), c("nav", Cn, [
      Hn,
      (a(!0), c(M, null, E(r(e).nav, (s) => (a(), c(M, {
        key: s.text
      }, [
        "link" in s ? (a(), b(Mn, {
          key: 0,
          item: s
        }, null, 8, ["item"])) : (a(), b(An, {
          key: 1,
          item: s
        }, null, 8, ["item"]))
      ], 64))), 128))
    ])) : f("", !0);
  }
}), Fn = /* @__PURE__ */ k(En, [["__scopeId", "data-v-f732b5d0"]]);
function Dn(o) {
  const { localeIndex: e, theme: t } = L();
  function n(s) {
    var A, B, S;
    const i = s.split("."), u = (A = t.value.search) == null ? void 0 : A.options, h = u && typeof u == "object", d = h && ((S = (B = u.locales) == null ? void 0 : B[e.value]) == null ? void 0 : S.translations) || null, g = h && u.translations || null;
    let P = d, y = g, V = o;
    const N = i.pop();
    for (const U of i) {
      let G = null;
      const W = V == null ? void 0 : V[U];
      W && (G = V = W);
      const ne = y == null ? void 0 : y[U];
      ne && (G = y = ne);
      const ae = P == null ? void 0 : P[U];
      ae && (G = P = ae), W || (V = G), ne || (y = G), ae || (P = G);
    }
    return (P == null ? void 0 : P[N]) ?? (y == null ? void 0 : y[N]) ?? (V == null ? void 0 : V[N]) ?? "";
  }
  return n;
}
const On = ["aria-label"], Un = { class: "DocSearch-Button-Container" }, Gn = /* @__PURE__ */ p("span", { class: "vp-icon DocSearch-Search-Icon" }, null, -1), jn = { class: "DocSearch-Button-Placeholder" }, zn = /* @__PURE__ */ p("span", { class: "DocSearch-Button-Keys" }, [
  /* @__PURE__ */ p("kbd", { class: "DocSearch-Button-Key" }),
  /* @__PURE__ */ p("kbd", { class: "DocSearch-Button-Key" }, "K")
], -1), $e = /* @__PURE__ */ _({
  __name: "VPNavBarSearchButton",
  setup(o) {
    const t = Dn({
      button: {
        buttonText: "Search",
        buttonAriaLabel: "Search"
      }
    });
    return (n, s) => (a(), c("button", {
      type: "button",
      class: "DocSearch DocSearch-Button",
      "aria-label": r(t)("button.buttonAriaLabel")
    }, [
      p("span", Un, [
        Gn,
        p("span", jn, I(r(t)("button.buttonText")), 1)
      ]),
      zn
    ], 8, On));
  }
}), qn = { class: "VPNavBarSearch" }, Wn = { id: "local-search" }, Kn = {
  key: 1,
  id: "docsearch"
}, Rn = /* @__PURE__ */ _({
  __name: "VPNavBarSearch",
  setup(o) {
    const e = () => null, t = () => null, { theme: n } = L(), s = w(!1), i = w(!1);
    R(() => {
    });
    function u() {
      s.value || (s.value = !0, setTimeout(h, 16));
    }
    function h() {
      const P = new Event("keydown");
      P.key = "k", P.metaKey = !0, window.dispatchEvent(P), setTimeout(() => {
        document.querySelector(".DocSearch-Modal") || h();
      }, 16);
    }
    const d = w(!1), g = "";
    return (P, y) => {
      var V;
      return a(), c("div", qn, [
        r(g) === "local" ? (a(), c(M, { key: 0 }, [
          d.value ? (a(), b(r(e), {
            key: 0,
            onClose: y[0] || (y[0] = (N) => d.value = !1)
          })) : f("", !0),
          p("div", Wn, [
            m($e, {
              onClick: y[1] || (y[1] = (N) => d.value = !0)
            })
          ])
        ], 64)) : r(g) === "algolia" ? (a(), c(M, { key: 1 }, [
          s.value ? (a(), b(r(t), {
            key: 0,
            algolia: ((V = r(n).search) == null ? void 0 : V.options) ?? r(n).algolia,
            onVnodeBeforeMount: y[2] || (y[2] = (N) => i.value = !0)
          }, null, 8, ["algolia"])) : f("", !0),
          i.value ? f("", !0) : (a(), c("div", Kn, [
            m($e, { onClick: u })
          ]))
        ], 64)) : f("", !0)
      ]);
    };
  }
}), Jn = /* @__PURE__ */ _({
  __name: "VPNavBarSocialLinks",
  setup(o) {
    const { theme: e } = L();
    return (t, n) => r(e).socialLinks ? (a(), b(be, {
      key: 0,
      class: "VPNavBarSocialLinks",
      links: r(e).socialLinks
    }, null, 8, ["links"])) : f("", !0);
  }
}), Yn = /* @__PURE__ */ k(Jn, [["__scopeId", "data-v-ef6192dc"]]), Qn = ["href", "rel", "target"], Xn = { key: 1 }, Zn = { key: 2 }, xn = /* @__PURE__ */ _({
  __name: "VPNavBarTitle",
  setup(o) {
    const { site: e, theme: t } = L(), { hasSidebar: n } = O(), { currentLang: s } = J(), i = $(
      () => {
        var d;
        return typeof t.value.logoLink == "string" ? t.value.logoLink : (d = t.value.logoLink) == null ? void 0 : d.link;
      }
    ), u = $(
      () => {
        var d;
        return typeof t.value.logoLink == "string" || (d = t.value.logoLink) == null ? void 0 : d.rel;
      }
    ), h = $(
      () => {
        var d;
        return typeof t.value.logoLink == "string" || (d = t.value.logoLink) == null ? void 0 : d.target;
      }
    );
    return (d, g) => (a(), c("div", {
      class: T(["VPNavBarTitle", { "has-sidebar": r(n) }])
    }, [
      p("a", {
        class: "title",
        href: i.value ?? r(he)(r(s).link),
        rel: u.value,
        target: h.value
      }, [
        l(d.$slots, "nav-bar-title-before", {}, void 0, !0),
        r(t).logo ? (a(), b(X, {
          key: 0,
          class: "logo",
          image: r(t).logo
        }, null, 8, ["image"])) : f("", !0),
        r(t).siteTitle ? (a(), c("span", Xn, I(r(t).siteTitle), 1)) : r(t).siteTitle === void 0 ? (a(), c("span", Zn, I(r(e).title), 1)) : f("", !0),
        l(d.$slots, "nav-bar-title-after", {}, void 0, !0)
      ], 8, Qn)
    ], 2));
  }
}), ea = /* @__PURE__ */ k(xn, [["__scopeId", "data-v-0ad69264"]]), ta = { class: "items" }, oa = { class: "title" }, sa = /* @__PURE__ */ _({
  __name: "VPNavBarTranslations",
  setup(o) {
    const { theme: e } = L(), { localeLinks: t, currentLang: n } = J({ correspondingLink: !0 });
    return (s, i) => r(t).length && r(n).label ? (a(), b(ke, {
      key: 0,
      class: "VPNavBarTranslations",
      icon: "vpi-languages",
      label: r(e).langMenuLabel || "Change language"
    }, {
      default: v(() => [
        p("div", ta, [
          p("p", oa, I(r(n).label), 1),
          (a(!0), c(M, null, E(r(t), (u) => (a(), b(se, {
            key: u.link,
            item: u
          }, null, 8, ["item"]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["label"])) : f("", !0);
  }
}), na = /* @__PURE__ */ k(sa, [["__scopeId", "data-v-acee064b"]]), aa = (o) => (C("data-v-844edcde"), o = o(), H(), o), ra = { class: "wrapper" }, ia = { class: "container" }, la = { class: "title" }, ca = { class: "content" }, ua = { class: "content-body" }, da = /* @__PURE__ */ aa(() => /* @__PURE__ */ p("div", { class: "divider" }, [
  /* @__PURE__ */ p("div", { class: "divider-line" })
], -1)), va = /* @__PURE__ */ _({
  __name: "VPNavBar",
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(o) {
    const { y: e } = Ve(), { hasSidebar: t } = O(), { frontmatter: n } = L(), s = w({});
    return ge(() => {
      s.value = {
        "has-sidebar": t.value,
        home: n.value.layout === "home",
        top: e.value === 0
      };
    }), (i, u) => (a(), c("div", {
      class: T(["VPNavBar", s.value])
    }, [
      p("div", ra, [
        p("div", ia, [
          p("div", la, [
            m(ea, null, {
              "nav-bar-title-before": v(() => [
                l(i.$slots, "nav-bar-title-before", {}, void 0, !0)
              ]),
              "nav-bar-title-after": v(() => [
                l(i.$slots, "nav-bar-title-after", {}, void 0, !0)
              ]),
              _: 3
            })
          ]),
          p("div", ca, [
            p("div", ua, [
              l(i.$slots, "nav-bar-content-before", {}, void 0, !0),
              m(Rn, { class: "search" }),
              m(Fn, { class: "menu" }),
              m(na, { class: "translations" }),
              m(Os, { class: "appearance" }),
              m(Yn, { class: "social-links" }),
              m(yn, { class: "extra" }),
              l(i.$slots, "nav-bar-content-after", {}, void 0, !0),
              m(wn, {
                class: "hamburger",
                active: i.isScreenOpen,
                onClick: u[0] || (u[0] = (h) => i.$emit("toggle-screen"))
              }, null, 8, ["active"])
            ])
          ])
        ])
      ]),
      da
    ], 2));
  }
}), pa = /* @__PURE__ */ k(va, [["__scopeId", "data-v-844edcde"]]), ha = {
  key: 0,
  class: "VPNavScreenAppearance"
}, fa = { class: "text" }, _a = /* @__PURE__ */ _({
  __name: "VPNavScreenAppearance",
  setup(o) {
    const { site: e, theme: t } = L();
    return (n, s) => r(e).appearance && r(e).appearance !== "force-dark" ? (a(), c("div", ha, [
      p("p", fa, I(r(t).darkModeSwitchLabel || "Appearance"), 1),
      m(_e)
    ])) : f("", !0);
  }
}), ma = /* @__PURE__ */ k(_a, [["__scopeId", "data-v-338d9b48"]]), ka = /* @__PURE__ */ _({
  __name: "VPNavScreenMenuLink",
  props: {
    item: {}
  },
  setup(o) {
    const e = te("close-screen");
    return (t, n) => (a(), b(F, {
      class: "VPNavScreenMenuLink",
      href: t.item.link,
      target: t.item.target,
      rel: t.item.rel,
      onClick: r(e),
      innerHTML: t.item.text
    }, null, 8, ["href", "target", "rel", "onClick", "innerHTML"]));
  }
}), ba = /* @__PURE__ */ k(ka, [["__scopeId", "data-v-1a934d60"]]), $a = /* @__PURE__ */ _({
  __name: "VPNavScreenMenuGroupLink",
  props: {
    item: {}
  },
  setup(o) {
    const e = te("close-screen");
    return (t, n) => (a(), b(F, {
      class: "VPNavScreenMenuGroupLink",
      href: t.item.link,
      target: t.item.target,
      rel: t.item.rel,
      onClick: r(e)
    }, {
      default: v(() => [
        D(I(t.item.text), 1)
      ]),
      _: 1
    }, 8, ["href", "target", "rel", "onClick"]));
  }
}), He = /* @__PURE__ */ k($a, [["__scopeId", "data-v-aea78dd1"]]), ga = { class: "VPNavScreenMenuGroupSection" }, ya = {
  key: 0,
  class: "title"
}, Pa = /* @__PURE__ */ _({
  __name: "VPNavScreenMenuGroupSection",
  props: {
    text: {},
    items: {}
  },
  setup(o) {
    return (e, t) => (a(), c("div", ga, [
      e.text ? (a(), c("p", ya, I(e.text), 1)) : f("", !0),
      (a(!0), c(M, null, E(e.items, (n) => (a(), b(He, {
        key: n.text,
        item: n
      }, null, 8, ["item"]))), 128))
    ]));
  }
}), La = /* @__PURE__ */ k(Pa, [["__scopeId", "data-v-f60dbfa7"]]), Va = (o) => (C("data-v-d2212c70"), o = o(), H(), o), Sa = ["aria-controls", "aria-expanded"], Ia = ["innerHTML"], wa = /* @__PURE__ */ Va(() => /* @__PURE__ */ p("span", { class: "vpi-plus button-icon" }, null, -1)), Ta = ["id"], Na = {
  key: 1,
  class: "group"
}, Ma = /* @__PURE__ */ _({
  __name: "VPNavScreenMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(o) {
    const e = o, t = w(!1), n = $(
      () => `NavScreenGroup-${e.text.replace(" ", "-").toLowerCase()}`
    );
    function s() {
      t.value = !t.value;
    }
    return (i, u) => (a(), c("div", {
      class: T(["VPNavScreenMenuGroup", { open: t.value }])
    }, [
      p("button", {
        class: "button",
        "aria-controls": n.value,
        "aria-expanded": t.value,
        onClick: s
      }, [
        p("span", {
          class: "button-text",
          innerHTML: i.text
        }, null, 8, Ia),
        wa
      ], 8, Sa),
      p("div", {
        id: n.value,
        class: "items"
      }, [
        (a(!0), c(M, null, E(i.items, (h) => (a(), c(M, {
          key: h.text
        }, [
          "link" in h ? (a(), c("div", {
            key: h.text,
            class: "item"
          }, [
            m(He, { item: h }, null, 8, ["item"])
          ])) : (a(), c("div", Na, [
            m(La, {
              text: h.text,
              items: h.items
            }, null, 8, ["text", "items"])
          ]))
        ], 64))), 128))
      ], 8, Ta)
    ], 2));
  }
}), Aa = /* @__PURE__ */ k(Ma, [["__scopeId", "data-v-d2212c70"]]), Ba = {
  key: 0,
  class: "VPNavScreenMenu"
}, Ca = /* @__PURE__ */ _({
  __name: "VPNavScreenMenu",
  setup(o) {
    const { theme: e } = L();
    return (t, n) => r(e).nav ? (a(), c("nav", Ba, [
      (a(!0), c(M, null, E(r(e).nav, (s) => (a(), c(M, {
        key: s.text
      }, [
        "link" in s ? (a(), b(ba, {
          key: 0,
          item: s
        }, null, 8, ["item"])) : (a(), b(Aa, {
          key: 1,
          text: s.text || "",
          items: s.items
        }, null, 8, ["text", "items"]))
      ], 64))), 128))
    ])) : f("", !0);
  }
}), Ha = /* @__PURE__ */ _({
  __name: "VPNavScreenSocialLinks",
  setup(o) {
    const { theme: e } = L();
    return (t, n) => r(e).socialLinks ? (a(), b(be, {
      key: 0,
      class: "VPNavScreenSocialLinks",
      links: r(e).socialLinks
    }, null, 8, ["links"])) : f("", !0);
  }
}), Ee = (o) => (C("data-v-516e4bc3"), o = o(), H(), o), Ea = /* @__PURE__ */ Ee(() => /* @__PURE__ */ p("span", { class: "vpi-languages icon lang" }, null, -1)), Fa = /* @__PURE__ */ Ee(() => /* @__PURE__ */ p("span", { class: "vpi-chevron-down icon chevron" }, null, -1)), Da = { class: "list" }, Oa = /* @__PURE__ */ _({
  __name: "VPNavScreenTranslations",
  setup(o) {
    const { localeLinks: e, currentLang: t } = J({ correspondingLink: !0 }), n = w(!1);
    function s() {
      n.value = !n.value;
    }
    return (i, u) => r(e).length && r(t).label ? (a(), c("div", {
      key: 0,
      class: T(["VPNavScreenTranslations", { open: n.value }])
    }, [
      p("button", {
        class: "title",
        onClick: s
      }, [
        Ea,
        D(" " + I(r(t).label) + " ", 1),
        Fa
      ]),
      p("ul", Da, [
        (a(!0), c(M, null, E(r(e), (h) => (a(), c("li", {
          key: h.link,
          class: "item"
        }, [
          m(F, {
            class: "link",
            href: h.link
          }, {
            default: v(() => [
              D(I(h.text), 1)
            ]),
            _: 2
          }, 1032, ["href"])
        ]))), 128))
      ])
    ], 2)) : f("", !0);
  }
}), Ua = /* @__PURE__ */ k(Oa, [["__scopeId", "data-v-516e4bc3"]]), Ga = { class: "container" }, ja = /* @__PURE__ */ _({
  __name: "VPNavScreen",
  props: {
    open: { type: Boolean }
  },
  setup(o) {
    const e = w(null), t = Se(oe ? document.body : null);
    return (n, s) => (a(), b(de, {
      name: "fade",
      onEnter: s[0] || (s[0] = (i) => t.value = !0),
      onAfterLeave: s[1] || (s[1] = (i) => t.value = !1)
    }, {
      default: v(() => [
        n.open ? (a(), c("div", {
          key: 0,
          class: "VPNavScreen",
          ref_key: "screen",
          ref: e,
          id: "VPNavScreen"
        }, [
          p("div", Ga, [
            l(n.$slots, "nav-screen-content-before", {}, void 0, !0),
            m(Ca, { class: "menu" }),
            m(Ua, { class: "translations" }),
            m(ma, { class: "appearance" }),
            m(Ha, { class: "social-links" }),
            l(n.$slots, "nav-screen-content-after", {}, void 0, !0)
          ])
        ], 512)) : f("", !0)
      ]),
      _: 3
    }));
  }
}), za = /* @__PURE__ */ k(ja, [["__scopeId", "data-v-57cce842"]]), qa = {
  key: 0,
  class: "VPNav"
}, Wa = /* @__PURE__ */ _({
  __name: "VPNav",
  setup(o) {
    const { isScreenOpen: e, closeScreen: t, toggleScreen: n } = Is(), { frontmatter: s } = L(), i = $(() => s.value.navbar !== !1);
    return Ie("close-screen", t), Z(() => {
      oe && document.documentElement.classList.toggle("hide-nav", !i.value);
    }), (u, h) => i.value ? (a(), c("header", qa, [
      m(pa, {
        "is-screen-open": r(e),
        onToggleScreen: r(n)
      }, {
        "nav-bar-title-before": v(() => [
          l(u.$slots, "nav-bar-title-before", {}, void 0, !0)
        ]),
        "nav-bar-title-after": v(() => [
          l(u.$slots, "nav-bar-title-after", {}, void 0, !0)
        ]),
        "nav-bar-content-before": v(() => [
          l(u.$slots, "nav-bar-content-before", {}, void 0, !0)
        ]),
        "nav-bar-content-after": v(() => [
          l(u.$slots, "nav-bar-content-after", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["is-screen-open", "onToggleScreen"]),
      m(za, { open: r(e) }, {
        "nav-screen-content-before": v(() => [
          l(u.$slots, "nav-screen-content-before", {}, void 0, !0)
        ]),
        "nav-screen-content-after": v(() => [
          l(u.$slots, "nav-screen-content-after", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["open"])
    ])) : f("", !0);
  }
}), Ka = /* @__PURE__ */ k(Wa, [["__scopeId", "data-v-7ad780c2"]]), Fe = (o) => (C("data-v-c24f735a"), o = o(), H(), o), Ra = ["role", "tabindex"], Ja = /* @__PURE__ */ Fe(() => /* @__PURE__ */ p("div", { class: "indicator" }, null, -1)), Ya = /* @__PURE__ */ Fe(() => /* @__PURE__ */ p("span", { class: "vpi-chevron-right caret-icon" }, null, -1)), Qa = [
  Ya
], Xa = {
  key: 1,
  class: "items"
}, Za = /* @__PURE__ */ _({
  __name: "VPSidebarItem",
  props: {
    item: {},
    depth: {}
  },
  setup(o) {
    const e = o, {
      collapsed: t,
      collapsible: n,
      isLink: s,
      isActiveLink: i,
      hasActiveLink: u,
      hasChildren: h,
      toggle: d
    } = mt($(() => e.item)), g = $(() => h.value ? "section" : "div"), P = $(() => s.value ? "a" : "div"), y = $(() => h.value ? e.depth + 2 === 7 ? "p" : `h${e.depth + 2}` : "p"), V = $(() => s.value ? void 0 : "button"), N = $(() => [
      [`level-${e.depth}`],
      { collapsible: n.value },
      { collapsed: t.value },
      { "is-link": s.value },
      { "is-active": i.value },
      { "has-active": u.value }
    ]);
    function A(S) {
      "key" in S && S.key !== "Enter" || !e.item.link && d();
    }
    function B() {
      e.item.link && d();
    }
    return (S, U) => {
      const G = q("VPSidebarItem", !0);
      return a(), b(K(g.value), {
        class: T(["VPSidebarItem", N.value])
      }, {
        default: v(() => [
          S.item.text ? (a(), c("div", Y({
            key: 0,
            class: "item",
            role: V.value
          }, Je(
            S.item.items ? { click: A, keydown: A } : {},
            !0
          ), {
            tabindex: S.item.items && 0
          }), [
            Ja,
            S.item.link ? (a(), b(F, {
              key: 0,
              tag: P.value,
              class: "link",
              href: S.item.link,
              rel: S.item.rel,
              target: S.item.target
            }, {
              default: v(() => [
                (a(), b(K(y.value), {
                  class: "text",
                  innerHTML: S.item.text
                }, null, 8, ["innerHTML"]))
              ]),
              _: 1
            }, 8, ["tag", "href", "rel", "target"])) : (a(), b(K(y.value), {
              key: 1,
              class: "text",
              innerHTML: S.item.text
            }, null, 8, ["innerHTML"])),
            S.item.collapsed != null && S.item.items && S.item.items.length ? (a(), c("div", {
              key: 2,
              class: "caret",
              role: "button",
              "aria-label": "toggle section",
              onClick: B,
              onKeydown: Ye(B, ["enter"]),
              tabindex: "0"
            }, Qa, 32)) : f("", !0)
          ], 16, Ra)) : f("", !0),
          S.item.items && S.item.items.length ? (a(), c("div", Xa, [
            S.depth < 5 ? (a(!0), c(M, { key: 0 }, E(S.item.items, (W) => (a(), b(G, {
              key: W.text,
              item: W,
              depth: S.depth + 1
            }, null, 8, ["item", "depth"]))), 128)) : f("", !0)
          ])) : f("", !0)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
}), xa = /* @__PURE__ */ k(Za, [["__scopeId", "data-v-c24f735a"]]), De = (o) => (C("data-v-4871f9f5"), o = o(), H(), o), er = /* @__PURE__ */ De(() => /* @__PURE__ */ p("div", { class: "curtain" }, null, -1)), tr = {
  class: "nav",
  id: "VPSidebarNav",
  "aria-labelledby": "sidebar-aria-label",
  tabindex: "-1"
}, or = /* @__PURE__ */ De(() => /* @__PURE__ */ p("span", {
  class: "visually-hidden",
  id: "sidebar-aria-label"
}, " Sidebar Navigation ", -1)), sr = /* @__PURE__ */ _({
  __name: "VPSidebar",
  props: {
    open: { type: Boolean }
  },
  setup(o) {
    const { sidebarGroups: e, hasSidebar: t } = O(), n = o, s = w(null), i = Se(oe ? document.body : null);
    return j(
      [n, s],
      () => {
        var u;
        n.open ? (i.value = !0, (u = s.value) == null || u.focus()) : i.value = !1;
      },
      { immediate: !0, flush: "post" }
    ), (u, h) => r(t) ? (a(), c("aside", {
      key: 0,
      class: T(["VPSidebar", { open: u.open }]),
      ref_key: "navEl",
      ref: s,
      onClick: h[0] || (h[0] = Qe(() => {
      }, ["stop"]))
    }, [
      er,
      p("nav", tr, [
        or,
        l(u.$slots, "sidebar-nav-before", {}, void 0, !0),
        (a(!0), c(M, null, E(r(e), (d) => (a(), c("div", {
          key: d.text,
          class: "group"
        }, [
          m(xa, {
            item: d,
            depth: 0
          }, null, 8, ["item"])
        ]))), 128)),
        l(u.$slots, "sidebar-nav-after", {}, void 0, !0)
      ])
    ], 2)) : f("", !0);
  }
}), nr = /* @__PURE__ */ k(sr, [["__scopeId", "data-v-4871f9f5"]]), ar = /* @__PURE__ */ _({
  __name: "VPSkipLink",
  setup(o) {
    const e = ee(), t = w();
    j(() => e.path, () => t.value.focus());
    function n({ target: s }) {
      const i = document.getElementById(
        decodeURIComponent(s.hash).slice(1)
      );
      if (i) {
        const u = () => {
          i.removeAttribute("tabindex"), i.removeEventListener("blur", u);
        };
        i.setAttribute("tabindex", "-1"), i.addEventListener("blur", u), i.focus(), window.scrollTo(0, 0);
      }
    }
    return (s, i) => (a(), c(M, null, [
      p("span", {
        ref_key: "backToTop",
        ref: t,
        tabindex: "-1"
      }, null, 512),
      p("a", {
        href: "#VPContent",
        class: "VPSkipLink visually-hidden",
        onClick: n
      }, " Skip to content ")
    ], 64));
  }
}), rr = /* @__PURE__ */ k(ar, [["__scopeId", "data-v-c8291ffa"]]), ir = /* @__PURE__ */ _({
  __name: "Layout",
  setup(o) {
    const {
      isOpen: e,
      open: t,
      close: n
    } = O(), s = ee();
    j(() => s.path, n), _t(e, n);
    const { frontmatter: i } = L(), u = Xe(), h = $(() => !!u["home-hero-image"]);
    return Ie("hero-image-slot-exists", h), (d, g) => {
      const P = q("Content");
      return r(i).layout !== !1 ? (a(), c("div", {
        key: 0,
        class: T(["Layout", r(i).pageClass])
      }, [
        l(d.$slots, "layout-top", {}, void 0, !0),
        m(rr),
        m(tt, {
          class: "backdrop",
          show: r(e),
          onClick: r(n)
        }, null, 8, ["show", "onClick"]),
        m(Ka, null, {
          "nav-bar-title-before": v(() => [
            l(d.$slots, "nav-bar-title-before", {}, void 0, !0)
          ]),
          "nav-bar-title-after": v(() => [
            l(d.$slots, "nav-bar-title-after", {}, void 0, !0)
          ]),
          "nav-bar-content-before": v(() => [
            l(d.$slots, "nav-bar-content-before", {}, void 0, !0)
          ]),
          "nav-bar-content-after": v(() => [
            l(d.$slots, "nav-bar-content-after", {}, void 0, !0)
          ]),
          "nav-screen-content-before": v(() => [
            l(d.$slots, "nav-screen-content-before", {}, void 0, !0)
          ]),
          "nav-screen-content-after": v(() => [
            l(d.$slots, "nav-screen-content-after", {}, void 0, !0)
          ]),
          _: 3
        }),
        m(Ss, {
          open: r(e),
          onOpenMenu: r(t)
        }, null, 8, ["open", "onOpenMenu"]),
        m(nr, { open: r(e) }, {
          "sidebar-nav-before": v(() => [
            l(d.$slots, "sidebar-nav-before", {}, void 0, !0)
          ]),
          "sidebar-nav-after": v(() => [
            l(d.$slots, "sidebar-nav-after", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["open"]),
        m(rs, null, {
          "page-top": v(() => [
            l(d.$slots, "page-top", {}, void 0, !0)
          ]),
          "page-bottom": v(() => [
            l(d.$slots, "page-bottom", {}, void 0, !0)
          ]),
          "not-found": v(() => [
            l(d.$slots, "not-found", {}, void 0, !0)
          ]),
          "home-hero-before": v(() => [
            l(d.$slots, "home-hero-before", {}, void 0, !0)
          ]),
          "home-hero-info-before": v(() => [
            l(d.$slots, "home-hero-info-before", {}, void 0, !0)
          ]),
          "home-hero-info": v(() => [
            l(d.$slots, "home-hero-info", {}, void 0, !0)
          ]),
          "home-hero-info-after": v(() => [
            l(d.$slots, "home-hero-info-after", {}, void 0, !0)
          ]),
          "home-hero-actions-after": v(() => [
            l(d.$slots, "home-hero-actions-after", {}, void 0, !0)
          ]),
          "home-hero-image": v(() => [
            l(d.$slots, "home-hero-image", {}, void 0, !0)
          ]),
          "home-hero-after": v(() => [
            l(d.$slots, "home-hero-after", {}, void 0, !0)
          ]),
          "home-features-before": v(() => [
            l(d.$slots, "home-features-before", {}, void 0, !0)
          ]),
          "home-features-after": v(() => [
            l(d.$slots, "home-features-after", {}, void 0, !0)
          ]),
          "doc-footer-before": v(() => [
            l(d.$slots, "doc-footer-before", {}, void 0, !0)
          ]),
          "doc-before": v(() => [
            l(d.$slots, "doc-before", {}, void 0, !0)
          ]),
          "doc-after": v(() => [
            l(d.$slots, "doc-after", {}, void 0, !0)
          ]),
          "doc-top": v(() => [
            l(d.$slots, "doc-top", {}, void 0, !0)
          ]),
          "doc-bottom": v(() => [
            l(d.$slots, "doc-bottom", {}, void 0, !0)
          ]),
          "aside-top": v(() => [
            l(d.$slots, "aside-top", {}, void 0, !0)
          ]),
          "aside-bottom": v(() => [
            l(d.$slots, "aside-bottom", {}, void 0, !0)
          ]),
          "aside-outline-before": v(() => [
            l(d.$slots, "aside-outline-before", {}, void 0, !0)
          ]),
          "aside-outline-after": v(() => [
            l(d.$slots, "aside-outline-after", {}, void 0, !0)
          ]),
          "aside-ads-before": v(() => [
            l(d.$slots, "aside-ads-before", {}, void 0, !0)
          ]),
          "aside-ads-after": v(() => [
            l(d.$slots, "aside-ads-after", {}, void 0, !0)
          ]),
          _: 3
        }),
        m(ds),
        l(d.$slots, "layout-bottom", {}, void 0, !0)
      ], 2)) : (a(), b(P, { key: 1 }));
    };
  }
}), lr = /* @__PURE__ */ k(ir, [["__scopeId", "data-v-d8b57b2d"]]), cr = {
  Layout: lr,
  enhanceApp: ({ app: o }) => {
    o.component("Badge", Ze);
  }
}, dr = {
  extends: cr
};
export {
  dr as R
};
