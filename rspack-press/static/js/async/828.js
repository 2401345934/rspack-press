(self['webpackChunkrspress_doc_template'] = self['webpackChunkrspress_doc_template'] || []).push([["828"], {
"./docs/hello.md": function (module, __webpack_exports__, __webpack_require__) {
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
globalThis.__RSPRESS_PAGE_META["hello.md"] = {
    "toc": [
        {
            "id": "start",
            "text": "Start",
            "depth": 2
        }
    ],
    "title": "Hello World!",
    "frontmatter": {}
};
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    var _components = Object.assign({
        h1: "h1",
        a: "a",
        h2: "h2",
        p: "p"
    }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_2_.useMDXComponents)(), props.components);
    return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.Fragment, {
        children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h1, {
                id: "hello-world",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#hello-world",
                        children: "#"
                    }),
                    "Hello World!"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsxs)(_components.h2, {
                id: "start",
                children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.a, {
                        className: "header-anchor",
                        "aria-hidden": "true",
                        href: "#start",
                        children: "#"
                    }),
                    "Start"
                ]
            }),
            "\n",
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1_.jsx)(_components.p, {
                children: "Write something to build your own docs! 🎁"
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
//# sourceMappingURL=828.js.map