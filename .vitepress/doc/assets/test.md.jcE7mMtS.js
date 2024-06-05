import { o as e, c as n, D as d, I as s, w as t, j as a, a as k, a1 as r, k as E } from "./chunks/framework.DNMIihaV.js";
const c = "John", o = {
  __name: "john-name",
  setup(l) {
    return (h, p) => (e(), n("lazy-test", { name: c }));
  }
}, g = "Lucy", y = {
  __name: "lucy-name",
  setup(l) {
    return (h, p) => (e(), n("lazy-test", { name: g }));
  }
}, m = "1.0.0", u = "", _ = [
  {
    kind: "javascript-module",
    path: "packages/test/test.ce.js",
    declarations: [
      {
        kind: "class",
        description: "",
        name: "LazyTest",
        members: [
          {
            kind: "field",
            name: "name",
            privacy: "public",
            type: {
              text: "string"
            },
            default: "'Somebody'",
            attribute: "name"
          }
        ],
        attributes: [
          {
            name: "name",
            type: {
              text: "string"
            },
            default: "'Somebody'",
            fieldName: "name"
          }
        ],
        superclass: {
          name: "LitElement",
          package: "lit"
        },
        tagName: "lazy-test",
        customElement: !0
      }
    ],
    exports: [
      {
        kind: "js",
        name: "LazyTest",
        declaration: {
          name: "LazyTest",
          module: "packages/test/test.ce.js"
        }
      },
      {
        kind: "custom-element-definition",
        name: "lazy-test",
        declaration: {
          name: "LazyTest",
          module: "packages/test/test.ce.js"
        }
      }
    ]
  }
], F = {
  schemaVersion: m,
  readme: u,
  modules: _
}, b = /* @__PURE__ */ a("h1", {
  id: "test-测试",
  tabindex: "-1"
}, [
  /* @__PURE__ */ k("Test 测试 "),
  /* @__PURE__ */ a("a", {
    class: "header-anchor",
    href: "#test-测试",
    "aria-label": 'Permalink to "Test 测试"'
  }, "​")
], -1), C = /* @__PURE__ */ a("h2", {
  id: "名称为-john",
  tabindex: "-1"
}, [
  /* @__PURE__ */ k("名称为 John "),
  /* @__PURE__ */ a("a", {
    class: "header-anchor",
    href: "#名称为-john",
    "aria-label": 'Permalink to "名称为 John"'
  }, "​")
], -1), f = /* @__PURE__ */ r(`<details class="details custom-block"><summary>展开代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lazy-test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lazy-test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;John&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></details><h2 id="名称为-lucy" tabindex="-1">名称为 Lucy <a class="header-anchor" href="#名称为-lucy" aria-label="Permalink to &quot;名称为 Lucy&quot;">​</a></h2>`, 2), A = /* @__PURE__ */ r(`<details class="details custom-block"><summary>展开代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lazy-test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lazy-test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Lucy&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2>`, 2), D = ["manifest"], x = JSON.parse('{"title":"Test 测试","description":"","frontmatter":{},"headers":[],"relativePath":"test.md","filePath":"packages/test/test.md"}'), T = { name: "test.md" }, B = /* @__PURE__ */ Object.assign(T, {
  setup(l) {
    return (h, p) => {
      const i = d("ClientOnly");
      return e(), n("div", null, [
        b,
        C,
        s(i, null, {
          default: t(() => [
            s(o)
          ]),
          _: 1
        }),
        f,
        s(i, null, {
          default: t(() => [
            s(y)
          ]),
          _: 1
        }),
        A,
        s(i, null, {
          default: t(() => [
            a("api-docs", { manifest: E(F) }, null, 8, D)
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  x as __pageData,
  B as default
};
