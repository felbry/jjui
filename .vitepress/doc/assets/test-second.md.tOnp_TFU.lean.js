import { D as a, o as n, c as o, I as c, w as d, j as e, a as t, k as i } from "./chunks/framework.DNMIihaV.js";
const l = "1.0.0", r = "", m = [
  {
    kind: "javascript-module",
    path: "packages/test-second/test-second.ce.js",
    declarations: [
      {
        kind: "class",
        description: "",
        name: "LazyTestSecond",
        members: [
          {
            kind: "field",
            name: "age",
            privacy: "public",
            type: {
              text: "string"
            },
            default: "'19'",
            attribute: "age"
          }
        ],
        attributes: [
          {
            name: "age",
            type: {
              text: "string"
            },
            default: "'19'",
            fieldName: "age"
          }
        ],
        superclass: {
          name: "LitElement",
          package: "lit"
        },
        tagName: "lazy-test-second",
        customElement: !0
      }
    ],
    exports: [
      {
        kind: "js",
        name: "LazyTestSecond",
        declaration: {
          name: "LazyTestSecond",
          module: "packages/test-second/test-second.ce.js"
        }
      },
      {
        kind: "custom-element-definition",
        name: "lazy-test-second",
        declaration: {
          name: "LazyTestSecond",
          module: "packages/test-second/test-second.ce.js"
        }
      }
    ]
  }
], p = {
  schemaVersion: l,
  readme: r,
  modules: m
}, u = /* @__PURE__ */ e("h1", {
  id: "testsecond-测试二",
  tabindex: "-1"
}, [
  /* @__PURE__ */ t("TestSecond 测试二 "),
  /* @__PURE__ */ e("a", {
    class: "header-anchor",
    href: "#testsecond-测试二",
    "aria-label": 'Permalink to "TestSecond 测试二"'
  }, "​")
], -1), _ = /* @__PURE__ */ e("p", null, "这是测试二的描述", -1), h = /* @__PURE__ */ e("h2", {
  id: "api",
  tabindex: "-1"
}, [
  /* @__PURE__ */ t("API "),
  /* @__PURE__ */ e("a", {
    class: "header-anchor",
    href: "#api",
    "aria-label": 'Permalink to "API"'
  }, "​")
], -1), f = ["manifest"], S = JSON.parse('{"title":"TestSecond 测试二","description":"","frontmatter":{},"headers":[],"relativePath":"test-second.md","filePath":"packages/test-second/test-second.md"}'), k = { name: "test-second.md" }, T = /* @__PURE__ */ Object.assign(k, {
  setup(g) {
    return (y, b) => {
      const s = a("ClientOnly");
      return n(), o("div", null, [
        u,
        _,
        h,
        c(s, null, {
          default: d(() => [
            e("api-docs", { manifest: i(p) }, null, 8, f)
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  S as __pageData,
  T as default
};
