import { R as p } from "./chunks/theme.F1mJu6FN.js";
import { U as o, a2 as u, a3 as l, a4 as c, a5 as f, a6 as d, a7 as m, a8 as h, a9 as g, aa as A, ab as y, d as P, u as v, y as w, x as C, ac as R, ad as b, ae as E, af as S } from "./chunks/framework.DNMIihaV.js";
function i(e) {
  if (e.extends) {
    const a = i(e.extends);
    return {
      ...a,
      ...e,
      async enhanceApp(t) {
        a.enhanceApp && await a.enhanceApp(t), e.enhanceApp && await e.enhanceApp(t);
      }
    };
  }
  return e;
}
const s = i(p), T = P({
  name: "VitePressApp",
  setup() {
    const { site: e, lang: a, dir: t } = v();
    return w(() => {
      C(() => {
        document.documentElement.lang = a.value, document.documentElement.dir = t.value;
      });
    }), e.value.router.prefetchLinks && R(), b(), E(), s.setup && s.setup(), () => S(s.Layout);
  }
});
async function x() {
  globalThis.__VITEPRESS__ = !0;
  const e = _(), a = D();
  a.provide(l, e);
  const t = c(e.route);
  return a.provide(f, t), a.component("Content", d), a.component("ClientOnly", m), Object.defineProperties(a.config.globalProperties, {
    $frontmatter: {
      get() {
        return t.frontmatter.value;
      }
    },
    $params: {
      get() {
        return t.page.value.params;
      }
    }
  }), s.enhanceApp && await s.enhanceApp({
    app: a,
    router: e,
    siteData: h
  }), { app: a, router: e, data: t };
}
function D() {
  return g(T);
}
function _() {
  let e = o, a;
  return A((t) => {
    let n = y(t), r = null;
    return n && (e && (a = n), (e || a === n) && (n = n.replace(/\.js$/, ".lean.js")), r = import(
      /*@vite-ignore*/
      n
    )), o && (e = !1), r;
  }, s.NotFound);
}
o && x().then(({ app: e, router: a, data: t }) => {
  a.go().then(() => {
    u(a.route, t.site), e.mount("#app");
  });
});
export {
  x as createApp
};
