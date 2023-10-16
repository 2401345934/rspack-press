(self['webpackChunkrspress_doc_template'] = self['webpackChunkrspress_doc_template'] || []).push([["857"], {
"./docs/guide/index.md": function (module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  'default': function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_ = __webpack_require__(/* react/jsx-runtime */"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_);
/* harmony import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2_ = __webpack_require__(/* @mdx-js/react */"./node_modules/.pnpm/@mdx-js+react@2.2.1_react@18.2.0/node_modules/@mdx-js/react/index.js");
var _globalThis;
var $ReactRefreshRuntime$ = __webpack_require__(/* /Users/xiaominghui/Desktop/work/github-project/rspack-press/node_modules/.pnpm/@rspack+dev-client@0.3.4_react-refresh@0.14.0_webpack@5.89.0/node_modules/@rspack/dev-client/src/reactRefresh.js */"./node_modules/.pnpm/@rspack+dev-client@0.3.4_react-refresh@0.14.0_webpack@5.89.0/node_modules/@rspack/dev-client/src/reactRefresh.js");
(_globalThis = globalThis).__RSPRESS_PAGE_META || (_globalThis.__RSPRESS_PAGE_META = {});
globalThis.__RSPRESS_PAGE_META["guide%2Findex.md"] = {
    "toc": [
        {
            "id": "markdown",
            "text": "Markdown",
            "depth": 2
        },
        {
            "id": "use-component",
            "text": "Use Component",
            "depth": 2
        },
        {
            "id": "front-matter",
            "text": "Front Matter",
            "depth": 2
        },
        {
            "id": "custom-container",
            "text": "Custom Container",
            "depth": 2
        },
        {
            "id": "code-block",
            "text": "Code Block",
            "depth": 2
        },
        {
            "id": "basic-usage",
            "text": "Basic Usage",
            "depth": 3
        },
        {
            "id": "show-line-numbers",
            "text": "Show Line Numbers",
            "depth": 3
        },
        {
            "id": "line-highlighting",
            "text": "Line Highlighting",
            "depth": 3
        },
        {
            "id": "rustify-mdx-compiler",
            "text": "Rustify MDX compiler",
            "depth": 2
        }
    ],
    "title": "Markdown & MDX",
    "frontmatter": {}
};
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    var _components = Object.assign({
        h1: "h1",
        a: "a",
        p: "p",
        h2: "h2",
        pre: "pre",
        code: "code",
        blockquote: "blockquote",
        strong: "strong",
        div: "div",
        details: "details",
        summary: "summary",
        h3: "h3"
    }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_2_.useMDXComponents)(), props.components);
    return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.Fragment, {
        children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h1, {
                id: "markdown--mdx",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#markdown--mdx",
                        children: "#"
                    }),
                    "Markdown & MDX"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                children: [
                    "Rspress supports not only Markdown but also ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        href: "https://mdxjs.com/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "MDX"
                    }),
                    ", a powerful way to develop content."
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "markdown",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#markdown",
                        children: "#"
                    }),
                    "Markdown"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "MDX is a superset of Markdown, which means you can write Markdown files as usual. For example:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-md",
                    meta: "",
                    children: "# Hello World\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "use-component",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#use-component",
                        children: "#"
                    }),
                    "Use Component"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                children: [
                    "When you want to use React components in Markdown files, you should name your files with ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                        children: ".mdx"
                    }),
                    " extension. For example:"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-mdx",
                    meta: "",
                    children: "// docs/index.mdx\nimport { CustomComponent } from './custom';\n\n# Hello World\n\n<CustomComponent />\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "front-matter",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#front-matter",
                        children: "#"
                    }),
                    "Front Matter"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "You can add Front Matter at the beginning of your Markdown file, which is a YAML-formatted object that defines some metadata. For example:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-yaml",
                    meta: "",
                    children: "---\ntitle: Hello World\n---\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.blockquote, {
                children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                        children: "Note: By default, Rspress uses h1 headings as html headings."
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "You can also access properties defined in Front Matter in the body, for example:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-markdown",
                    meta: "",
                    children: "---\ntitle: Hello World\n---\n\n# {frontmatter.title}\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                children: [
                    "The previously defined properties will be passed to the component as ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                        children: "frontmatter"
                    }),
                    " properties. So the final output will be:"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-html",
                    meta: "",
                    children: "<h1>Hello World</h1>\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "custom-container",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#custom-container",
                        children: "#"
                    }),
                    "Custom Container"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                children: [
                    "You can use the ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                        children: ":::"
                    }),
                    " syntax to create custom containers and support custom titles. For example:"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.strong, {
                    children: "Input:"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-markdown",
                    meta: "",
                    children: ":::tip\nThis is a `block` of type `tip`\n:::\n\n:::info\nThis is a `block` of type `info`\n:::\n\n:::warning\nThis is a `block` of type `warning`\n:::\n\n:::danger\nThis is a `block` of type `danger`\n:::\n\n::: details\nThis is a `block` of type `details`\n:::\n\n:::tip Custom Title\nThis is a `block` of `Custom Title`\n:::\n\n:::tip{title=\"Custom Title\"}\nThis is a `block` of `Custom Title`\n:::\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.strong, {
                    children: "Output:"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.div, {
                className: "rspress-directive tip",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.div, {
                        className: "rspress-directive-title",
                        children: "TIP"
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.div, {
                        className: "rspress-directive-content",
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                            children: [
                                "\nThis is a ",
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                    children: "block"
                                }),
                                " of type ",
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                    children: "tip"
                                })
                            ]
                        })
                    })
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.div, {
                className: "rspress-directive info",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.div, {
                        className: "rspress-directive-title",
                        children: "INFO"
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.div, {
                        className: "rspress-directive-content",
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                            children: [
                                "\nThis is a ",
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                    children: "block"
                                }),
                                " of type ",
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                    children: "info"
                                })
                            ]
                        })
                    })
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.div, {
                className: "rspress-directive warning",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.div, {
                        className: "rspress-directive-title",
                        children: "WARNING"
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.div, {
                        className: "rspress-directive-content",
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                            children: [
                                "\nThis is a ",
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                    children: "block"
                                }),
                                " of type ",
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                    children: "warning"
                                })
                            ]
                        })
                    })
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.div, {
                className: "rspress-directive danger",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.div, {
                        className: "rspress-directive-title",
                        children: "DANGER"
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.div, {
                        className: "rspress-directive-content",
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                            children: [
                                "\nThis is a ",
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                    children: "block"
                                }),
                                " of type ",
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                    children: "danger"
                                })
                            ]
                        })
                    })
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.details, {
                className: "rspress-directive details",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.summary, {
                        className: "rspress-directive-title",
                        children: "DETAILS"
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.div, {
                        className: "rspress-directive-content",
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                            children: [
                                "\nThis is a ",
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                    children: "block"
                                }),
                                " of type ",
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                    children: "details"
                                })
                            ]
                        })
                    })
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.div, {
                className: "rspress-directive tip",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.div, {
                        className: "rspress-directive-title",
                        children: "Custom Title"
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.div, {
                        className: "rspress-directive-content",
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                            children: [
                                "\nThis is a ",
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                    children: "block"
                                }),
                                " of ",
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                    children: "Custom Title"
                                })
                            ]
                        })
                    })
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.div, {
                className: "rspress-directive tip",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.div, {
                        className: "rspress-directive-title",
                        children: "Custom Title"
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.div, {
                        className: "rspress-directive-content",
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                            children: [
                                "\nThis is a ",
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                    children: "block"
                                }),
                                " of ",
                                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                                    children: "Custom Title"
                                })
                            ]
                        })
                    })
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "code-block",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#code-block",
                        children: "#"
                    }),
                    "Code Block"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "basic-usage",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#basic-usage",
                        children: "#"
                    }),
                    "Basic Usage"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "You can use the ``` syntax to create code blocks and support custom titles. For example:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.strong, {
                    children: "Input:"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-md",
                    meta: "",
                    children: "```js\nconsole.log('Hello World');\n```\n\n```js title=\"hello.js\"\nconsole.log('Hello World');\n```\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.strong, {
                    children: "Output:"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-js",
                    meta: "",
                    children: "console.log('Hello World');\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-js",
                    meta: "title=\"hello.js\"",
                    children: "console.log('Hello World');\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "show-line-numbers",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#show-line-numbers",
                        children: "#"
                    }),
                    "Show Line Numbers"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.p, {
                children: [
                    "If you want to display line numbers, you can enable the ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                        children: "showLineNumbers"
                    }),
                    " option in the config file:"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-ts",
                    meta: "title=\"rspress.config.ts\"",
                    children: "export default {\n  // ...\n  markdown: {\n    showLineNumbers: true,\n  },\n};\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h3, {
                id: "line-highlighting",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#line-highlighting",
                        children: "#"
                    }),
                    "Line Highlighting"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "You can also apply line highlighting and code block title at the same time, for example:"
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.strong, {
                    children: "Input:"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-md",
                    meta: "",
                    children: "```js title=\"hello.js\" {1,3-5}\nconsole.log('Hello World');\n\nconst a = 1;\n\nconsole.log(a);\n\nconst b = 2;\n\nconsole.log(b);\n```\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.strong, {
                    children: "Ouput:"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.code, {
                    className: "language-js",
                    meta: "title=\"hello.js\" {1,3-5}",
                    children: "console.log('Hello World');\n\nconst a = 1;\n\nconsole.log(a);\n\nconst b = 2;\n\nconsole.log(b);\n"
                })
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "rustify-mdx-compiler",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#rustify-mdx-compiler",
                        children: "#"
                    }),
                    "Rustify MDX compiler"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "You can enable Rustify MDX compiler by following config:"
            })
        ]
    });
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _Object_assign = Object.assign({}, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_2_.useMDXComponents)(), props.components), MDXLayout = _Object_assign.wrapper;
    return MDXLayout ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(MDXLayout, Object.assign({}, props, {
        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_createMdxContent, props)
    })) : _createMdxContent(props);
}
_c = MDXContent;
var __WEBPACK_DEFAULT_EXPORT__ = MDXContent;
var _c;
$RefreshReg$(_c, "MDXContent");
function $RefreshReg$(type, id) {
    $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
    $ReactRefreshRuntime$.refresh(module.id, module.hot);
});
},

}]);
//# sourceMappingURL=857.js.map