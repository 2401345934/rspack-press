(self['webpackChunkrspress_doc_template'] = self['webpackChunkrspress_doc_template'] || []).push([["lib-router"], {
"./node_modules/.pnpm/@remix-run+router@1.9.0/node_modules/@remix-run/router/dist/router.js": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  'AbortedDeferredError': function() { return AbortedDeferredError; },
  'Action': function() { return Action; },
  'IDLE_BLOCKER': function() { return IDLE_BLOCKER; },
  'IDLE_FETCHER': function() { return IDLE_FETCHER; },
  'IDLE_NAVIGATION': function() { return IDLE_NAVIGATION; },
  'UNSAFE_DEFERRED_SYMBOL': function() { return UNSAFE_DEFERRED_SYMBOL; },
  'UNSAFE_DeferredData': function() { return DeferredData; },
  'UNSAFE_ErrorResponseImpl': function() { return ErrorResponseImpl; },
  'UNSAFE_convertRouteMatchToUiMatch': function() { return convertRouteMatchToUiMatch; },
  'UNSAFE_convertRoutesToDataRoutes': function() { return convertRoutesToDataRoutes; },
  'UNSAFE_getPathContributingMatches': function() { return getPathContributingMatches; },
  'UNSAFE_invariant': function() { return invariant; },
  'UNSAFE_warning': function() { return warning; },
  'createBrowserHistory': function() { return createBrowserHistory; },
  'createHashHistory': function() { return createHashHistory; },
  'createMemoryHistory': function() { return createMemoryHistory; },
  'createPath': function() { return createPath; },
  'createRouter': function() { return createRouter; },
  'createStaticHandler': function() { return createStaticHandler; },
  'defer': function() { return defer; },
  'generatePath': function() { return generatePath; },
  'getStaticContextFromError': function() { return getStaticContextFromError; },
  'getToPathname': function() { return getToPathname; },
  'isDeferredData': function() { return isDeferredData; },
  'isRouteErrorResponse': function() { return isRouteErrorResponse; },
  'joinPaths': function() { return joinPaths; },
  'json': function() { return json; },
  'matchPath': function() { return matchPath; },
  'matchRoutes': function() { return matchRoutes; },
  'normalizePathname': function() { return normalizePathname; },
  'parsePath': function() { return parsePath; },
  'redirect': function() { return redirect; },
  'redirectDocument': function() { return redirectDocument; },
  'resolvePath': function() { return resolvePath; },
  'resolveTo': function() { return resolveTo; },
  'stripBasename': function() { return stripBasename; }
});
/* harmony import */var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* @swc/helpers/_/_async_to_generator */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_async_to_generator.js");
/* harmony import */var _swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_1_ = __webpack_require__(/* @swc/helpers/_/_class_call_check */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_class_call_check.js");
/* harmony import */var _swc_helpers_create_class__WEBPACK_IMPORTED_MODULE_2_ = __webpack_require__(/* @swc/helpers/_/_create_class */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_create_class.js");
/* harmony import */var _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_ = __webpack_require__(/* @swc/helpers/_/_define_property */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_define_property.js");
/* harmony import */var _swc_helpers_inherits__WEBPACK_IMPORTED_MODULE_4_ = __webpack_require__(/* @swc/helpers/_/_inherits */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_inherits.js");
/* harmony import */var _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_5_ = __webpack_require__(/* @swc/helpers/_/_instanceof */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_instanceof.js");
/* harmony import */var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6_ = __webpack_require__(/* @swc/helpers/_/_sliced_to_array */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_sliced_to_array.js");
/* harmony import */var _swc_helpers_to_array__WEBPACK_IMPORTED_MODULE_7_ = __webpack_require__(/* @swc/helpers/_/_to_array */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_to_array.js");
/* harmony import */var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8_ = __webpack_require__(/* @swc/helpers/_/_to_consumable_array */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_to_consumable_array.js");
/* harmony import */var _swc_helpers_wrap_native_super__WEBPACK_IMPORTED_MODULE_9_ = __webpack_require__(/* @swc/helpers/_/_wrap_native_super */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_wrap_native_super.js");
/* harmony import */var _swc_helpers_create_super__WEBPACK_IMPORTED_MODULE_10_ = __webpack_require__(/* @swc/helpers/_/_create_super */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_create_super.js");
/* harmony import */var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_ = __webpack_require__(/* @swc/helpers/_/_ts_generator */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_ts_generator.js");
/* harmony import */var _swc_helpers_ts_values__WEBPACK_IMPORTED_MODULE_12_ = __webpack_require__(/* @swc/helpers/_/_ts_values */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_ts_values.js");
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 












function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function _extends(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */ var Action;
(function(Action) {
    /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */ Action["Pop"] = "POP";
    /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */ Action["Push"] = "PUSH";
    /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */ Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
var PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */ function createMemoryHistory(options) {
    var clampIndex = function clampIndex(n) {
        return Math.min(Math.max(n, 0), entries.length - 1);
    };
    var getCurrentLocation = function getCurrentLocation() {
        return entries[index];
    };
    var createMemoryLocation = function createMemoryLocation(to, state, key) {
        if (state === void 0) state = null;
        var location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
        warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
        return location;
    };
    var createHref = function createHref(to) {
        return typeof to === "string" ? to : createPath(to);
    };
    if (options === void 0) options = {};
    var _options_initialEntries = options.initialEntries, initialEntries = _options_initialEntries === void 0 ? [
        "/"
    ] : _options_initialEntries, initialIndex = options.initialIndex, _options_v5Compat = options.v5Compat, v5Compat = _options_v5Compat === void 0 ? false : _options_v5Compat;
    var entries; // Declare so we can access from createMemoryLocation
    entries = initialEntries.map(function(entry, index) {
        return createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined);
    });
    var index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
    var action = Action.Pop;
    var listener = null;
    var history = {
        get index () {
            return index;
        },
        get action () {
            return action;
        },
        get location () {
            return getCurrentLocation();
        },
        createHref: createHref,
        createURL: function createURL(to) {
            return new URL(createHref(to), "http://localhost");
        },
        encodeLocation: function encodeLocation(to) {
            var path = typeof to === "string" ? parsePath(to) : to;
            return {
                pathname: path.pathname || "",
                search: path.search || "",
                hash: path.hash || ""
            };
        },
        push: function push(to, state) {
            action = Action.Push;
            var nextLocation = createMemoryLocation(to, state);
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            if (v5Compat && listener) listener({
                action: action,
                location: nextLocation,
                delta: 1
            });
        },
        replace: function replace(to, state) {
            action = Action.Replace;
            var nextLocation = createMemoryLocation(to, state);
            entries[index] = nextLocation;
            if (v5Compat && listener) listener({
                action: action,
                location: nextLocation,
                delta: 0
            });
        },
        go: function go(delta) {
            action = Action.Pop;
            var nextIndex = clampIndex(index + delta);
            var nextLocation = entries[nextIndex];
            index = nextIndex;
            if (listener) listener({
                action: action,
                location: nextLocation,
                delta: delta
            });
        },
        listen: function listen(fn) {
            listener = fn;
            return function() {
                listener = null;
            };
        }
    };
    return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */ function createBrowserHistory(options) {
    var createBrowserLocation = function createBrowserLocation(window1, globalHistory) {
        var _window_location = window1.location, pathname = _window_location.pathname, search = _window_location.search, hash = _window_location.hash;
        return createLocation("", {
            pathname: pathname,
            search: search,
            hash: hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    };
    var createBrowserHref = function createBrowserHref(window1, to) {
        return typeof to === "string" ? to : createPath(to);
    };
    if (options === void 0) options = {};
    return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */ function createHashHistory(options) {
    var createHashLocation = function createHashLocation(window1, globalHistory) {
        var _parsePath = parsePath(window1.location.hash.substr(1)), _parsePath_pathname = _parsePath.pathname, pathname = _parsePath_pathname === void 0 ? "/" : _parsePath_pathname, _parsePath_search = _parsePath.search, search = _parsePath_search === void 0 ? "" : _parsePath_search, _parsePath_hash = _parsePath.hash, hash = _parsePath_hash === void 0 ? "" : _parsePath_hash;
        // Hash URL should always have a leading / just like window.location.pathname
        // does, so if an app ends up at a route like /#something then we add a
        // leading slash so all of our path-matching behaves the same as if it would
        // in a browser router.  This is particularly important when there exists a
        // root splat route (<Route path="*">) since that matches internally against
        // "/*" and we'd expect /#something to 404 in a hash router app.
        if (!pathname.startsWith("/") && !pathname.startsWith(".")) pathname = "/" + pathname;
        return createLocation("", {
            pathname: pathname,
            search: search,
            hash: hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    };
    var createHashHref = function createHashHref(window1, to) {
        var base = window1.document.querySelector("base");
        var href = "";
        if (base && base.getAttribute("href")) {
            var url = window1.location.href;
            var hashIndex = url.indexOf("#");
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href + "#" + (typeof to === "string" ? to : createPath(to));
    };
    var validateHashLocation = function validateHashLocation(location, to) {
        warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
    };
    if (options === void 0) options = {};
    return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") throw new Error(message);
}
function warning(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== "undefined") console.warn(message);
        try {
            // Welcome to debugging history!
            //
            // This error is thrown as a convenience, so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message);
        // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}
function createKey() {
    return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */ function getHistoryState(location, index) {
    return {
        usr: location.state,
        key: location.key,
        idx: index
    };
}
/**
 * Creates a Location object with a unique key from the given Path
 */ function createLocation(current, to, state, key) {
    if (state === void 0) state = null;
    var location = _extends({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
    }, typeof to === "string" ? parsePath(to) : to, {
        state: state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to && to.key || key || createKey()
    });
    return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */ function createPath(_ref) {
    var _ref_pathname = _ref.pathname, pathname = _ref_pathname === void 0 ? "/" : _ref_pathname, _ref_search = _ref.search, search = _ref_search === void 0 ? "" : _ref_search, _ref_hash = _ref.hash, hash = _ref_hash === void 0 ? "" : _ref_hash;
    if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */ function parsePath(path) {
    var parsedPath = {};
    if (path) {
        var hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
        }
        var searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
        }
        if (path) parsedPath.pathname = path;
    }
    return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
    var getIndex = function getIndex() {
        var state = globalHistory.state || {
            idx: null
        };
        return state.idx;
    };
    var handlePop = function handlePop() {
        action = Action.Pop;
        var nextIndex = getIndex();
        var delta = nextIndex == null ? null : nextIndex - index;
        index = nextIndex;
        if (listener) listener({
            action: action,
            location: history.location,
            delta: delta
        });
    };
    var push = function push(to, state) {
        action = Action.Push;
        var location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex() + 1;
        var historyState = getHistoryState(location, index);
        var url = history.createHref(location);
        // try...catch because iOS limits us to 100 pushState calls :/
        try {
            globalHistory.pushState(historyState, "", url);
        } catch (error) {
            // If the exception is because `state` can't be serialized, let that throw
            // outwards just like a replace call would so the dev knows the cause
            // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
            // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
            if ((0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_5_._)(error, DOMException) && error.name === "DataCloneError") throw error;
            // They are going to lose state here, but there is no real
            // way to warn them about it since the page will refresh...
            window1.location.assign(url);
        }
        if (v5Compat && listener) listener({
            action: action,
            location: history.location,
            delta: 1
        });
    };
    var replace = function replace(to, state) {
        action = Action.Replace;
        var location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex();
        var historyState = getHistoryState(location, index);
        var url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) listener({
            action: action,
            location: history.location,
            delta: 0
        });
    };
    var createURL = function createURL(to) {
        // window.location.origin is "null" (the literal string value) in Firefox
        // under certain conditions, notably when serving from a local HTML file
        // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
        var base = window1.location.origin !== "null" ? window1.location.origin : window1.location.href;
        var href = typeof to === "string" ? to : createPath(to);
        invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
    };
    if (options === void 0) options = {};
    var _options_window = options.window, window1 = _options_window === void 0 ? document.defaultView : _options_window, _options_v5Compat = options.v5Compat, v5Compat = _options_v5Compat === void 0 ? false : _options_v5Compat;
    var globalHistory = window1.history;
    var action = Action.Pop;
    var listener = null;
    var index = getIndex();
    // Index should only be null when we initialize. If not, it's because the
    // user called history.pushState or history.replaceState directly, in which
    // case we should log a warning as it will result in bugs.
    if (index == null) {
        index = 0;
        globalHistory.replaceState(_extends({}, globalHistory.state, {
            idx: index
        }), "");
    }
    var history = {
        get action () {
            return action;
        },
        get location () {
            return getLocation(window1, globalHistory);
        },
        listen: function listen(fn) {
            if (listener) throw new Error("A history only accepts one active listener");
            window1.addEventListener(PopStateEventType, handlePop);
            listener = fn;
            return function() {
                window1.removeEventListener(PopStateEventType, handlePop);
                listener = null;
            };
        },
        createHref: function createHref1(to) {
            return createHref(window1, to);
        },
        createURL: createURL,
        encodeLocation: function encodeLocation(to) {
            // Encode a Location the same way window.location would
            var url = createURL(to);
            return {
                pathname: url.pathname,
                search: url.search,
                hash: url.hash
            };
        },
        push: push,
        replace: replace,
        go: function go(n) {
            return globalHistory.go(n);
        }
    };
    return history;
}
//#endregion
var ResultType;
(function(ResultType) {
    ResultType["data"] = "data";
    ResultType["deferred"] = "deferred";
    ResultType["redirect"] = "redirect";
    ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
var immutableRouteKeys = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children"
]);
function isIndexRoute(route) {
    return route.index === true;
}
// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath, manifest) {
    if (parentPath === void 0) parentPath = [];
    if (manifest === void 0) manifest = {};
    return routes.map(function(route, index) {
        var treePath = (0, _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8_._)(parentPath).concat([
            index
        ]);
        var id = typeof route.id === "string" ? route.id : treePath.join("-");
        invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
        invariant(!manifest[id], "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
        if (isIndexRoute(route)) {
            var indexRoute = _extends({}, route, mapRouteProperties(route), {
                id: id
            });
            manifest[id] = indexRoute;
            return indexRoute;
        } else {
            var pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
                id: id,
                children: undefined
            });
            manifest[id] = pathOrLayoutRoute;
            if (route.children) pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
            return pathOrLayoutRoute;
        }
    });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */ function matchRoutes(routes, locationArg, basename) {
    if (basename === void 0) basename = "/";
    var location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    var pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) return null;
    var branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    var matches = null;
    for(var i = 0; matches == null && i < branches.length; ++i)matches = matchRouteBranch(branches[i], // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    safelyDecodeURI(pathname));
    return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
    var route = match.route, pathname = match.pathname, params = match.params;
    return {
        id: route.id,
        pathname: pathname,
        params: params,
        data: loaderData[route.id],
        handle: route.handle
    };
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) branches = [];
    if (parentsMeta === void 0) parentsMeta = [];
    if (parentPath === void 0) parentPath = "";
    var flattenRoute = function(route, index, relativePath) {
        var meta = {
            relativePath: relativePath === undefined ? route.path || "" : relativePath,
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
            route: route
        };
        if (meta.relativePath.startsWith("/")) {
            invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
            meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        var path = joinPaths([
            parentPath,
            meta.relativePath
        ]);
        var routesMeta = parentsMeta.concat(meta);
        // Add the children before adding this route to the array, so we traverse the
        // route tree depth-first and child routes appear before their parents in
        // the "flattened" version.
        if (route.children && route.children.length > 0) {
            invariant(// Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
            flattenRoutes(route.children, branches, routesMeta, path);
        }
        // Routes without a path shouldn't ever match by themselves unless they are
        // index routes, so don't add them to the list of possible branches.
        if (route.path == null && !route.index) return;
        branches.push({
            path: path,
            score: computeScore(path, route.index),
            routesMeta: routesMeta
        });
    };
    routes.forEach(function(route, index) {
        var _route$path;
        // coarse-grain check for optional params
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) flattenRoute(route, index);
        else {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = explodeOptionalSegments(route.path)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var exploded = _step.value;
                    flattenRoute(route, index, exploded);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) _iterator.return();
                } finally{
                    if (_didIteratorError) throw _iteratorError;
                }
            }
        }
    });
    return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */ function explodeOptionalSegments(path) {
    var // All child paths with the prefix.  Do this for all children before the
    // optional version for all children, so we get consistent ordering where the
    // parent optional aspect is preferred as required.  Otherwise, we can get
    // child sections interspersed where deeper optional segments are higher than
    // parent optional segments, where for example, /:two would explode _earlier_
    // then /:one.  By always including the parent as required _for all children_
    // first, we avoid this issue
    _result;
    var segments = path.split("/");
    if (segments.length === 0) return [];
    var _segments = (0, _swc_helpers_to_array__WEBPACK_IMPORTED_MODULE_7_._)(segments), first = _segments[0], rest = _segments.slice(1);
    // Optional path segments are denoted by a trailing `?`
    var isOptional = first.endsWith("?");
    // Compute the corresponding required segment: `foo?` -> `foo`
    var required = first.replace(/\?$/, "");
    if (rest.length === 0) // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [
        required,
        ""
    ] : [
        required
    ];
    var restExploded = explodeOptionalSegments(rest.join("/"));
    var result = [];
    (_result = result).push.apply(_result, (0, _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8_._)(restExploded.map(function(subpath) {
        return subpath === "" ? required : [
            required,
            subpath
        ].join("/");
    })));
    // Then, if this is an optional value, add all child versions without
    if (isOptional) {
        var _result1;
        (_result1 = result).push.apply(_result1, (0, _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8_._)(restExploded));
    }
    // for absolute paths, ensure `/` instead of empty segment
    return result.map(function(exploded) {
        return path.startsWith("/") && exploded === "" ? "/" : exploded;
    });
}
function rankRouteBranches(branches) {
    branches.sort(function(a, b) {
        return a.score !== b.score ? b.score - a.score // Higher score first
         : compareIndexes(a.routesMeta.map(function(meta) {
            return meta.childrenIndex;
        }), b.routesMeta.map(function(meta) {
            return meta.childrenIndex;
        }));
    });
}
var paramRe = /^:\w+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = function(s) {
    return s === "*";
};
function computeScore(path, index) {
    var segments = path.split("/");
    var initialScore = segments.length;
    if (segments.some(isSplat)) initialScore += splatPenalty;
    if (index) initialScore += indexRouteValue;
    return segments.filter(function(s) {
        return !isSplat(s);
    }).reduce(function(score, segment) {
        return score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue);
    }, initialScore);
}
function compareIndexes(a, b) {
    var siblings = a.length === b.length && a.slice(0, -1).every(function(n, i) {
        return n === b[i];
    });
    return siblings ? // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0;
}
function matchRouteBranch(branch, pathname) {
    var routesMeta = branch.routesMeta;
    var matchedParams = {};
    var matchedPathname = "/";
    var matches = [];
    for(var i = 0; i < routesMeta.length; ++i){
        var meta = routesMeta[i];
        var end = i === routesMeta.length - 1;
        var remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        var match = matchPath({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: end
        }, remainingPathname);
        if (!match) return null;
        Object.assign(matchedParams, match.params);
        var route = meta.route;
        matches.push({
            // TODO: Can this as be avoided?
            params: matchedParams,
            pathname: joinPaths([
                matchedPathname,
                match.pathname
            ]),
            pathnameBase: normalizePathname(joinPaths([
                matchedPathname,
                match.pathnameBase
            ])),
            route: route
        });
        if (match.pathnameBase !== "/") matchedPathname = joinPaths([
            matchedPathname,
            match.pathnameBase
        ]);
    }
    return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */ function generatePath(originalPath, params) {
    if (params === void 0) params = {};
    var path = originalPath;
    if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
        warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
        path = path.replace(/\*$/, "/*");
    }
    // ensure `/` is added at the beginning if the path is absolute
    var prefix = path.startsWith("/") ? "/" : "";
    var stringify = function(p) {
        return p == null ? "" : typeof p === "string" ? p : String(p);
    };
    var segments = path.split(/\/+/).map(function(segment, index, array) {
        var isLastSegment = index === array.length - 1;
        // only apply the splat if it's the last segment
        if (isLastSegment && segment === "*") {
            var star = "*";
            // Apply the splat
            return stringify(params[star]);
        }
        var keyMatch = segment.match(/^:(\w+)(\??)$/);
        if (keyMatch) {
            var _keyMatch = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6_._)(keyMatch, 3), key = _keyMatch[1], optional = _keyMatch[2];
            var param = params[key];
            invariant(optional === "?" || param != null, "Missing \":" + key + "\" param");
            return stringify(param);
        }
        // Remove any optional markers from optional static segments
        return segment.replace(/\?$/g, "");
    })// Remove empty segments
    .filter(function(segment) {
        return !!segment;
    });
    return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */ function matchPath(pattern, pathname) {
    if (typeof pattern === "string") pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
    };
    var _compilePath = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6_._)(compilePath(pattern.path, pattern.caseSensitive, pattern.end), 2), matcher = _compilePath[0], paramNames = _compilePath[1];
    var match = pathname.match(matcher);
    if (!match) return null;
    var matchedPathname = match[0];
    var pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    var captureGroups = match.slice(1);
    var params = paramNames.reduce(function(memo, paramName, index) {
        // We need to compute the pathnameBase here using the raw splat value
        // instead of using params["*"] later because it will be decoded then
        if (paramName === "*") {
            var splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
        return memo;
    }, {});
    return {
        params: params,
        pathname: matchedPathname,
        pathnameBase: pathnameBase,
        pattern: pattern
    };
}
function compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) caseSensitive = false;
    if (end === void 0) end = true;
    warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    var paramNames = [];
    var regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
    .replace(/^\/*/, "/") // Make sure it has a leading /
    .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
    .replace(/\/:(\w+)/g, function(_, paramName) {
        paramNames.push(paramName);
        return "/([^\\/]+)";
    });
    if (path.endsWith("*")) {
        paramNames.push("*");
        regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
         : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
    } else if (end) // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
    else if (path !== "" && path !== "/") // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
    var matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
    return [
        matcher,
        paramNames
    ];
}
function safelyDecodeURI(value) {
    try {
        return decodeURI(value);
    } catch (error) {
        warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
        return value;
    }
}
function safelyDecodeURIComponent(value, paramName) {
    try {
        return decodeURIComponent(value);
    } catch (error) {
        warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
        return value;
    }
}
/**
 * @private
 */ function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) return null;
    // We want to leave trailing slash behavior in the user's control, so if they
    // specify a basename with a trailing slash, we should support it
    var startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    var nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") // pathname does not start with basename/
    return null;
    return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */ function resolvePath(to, fromPathname) {
    if (fromPathname === void 0) fromPathname = "/";
    var _ref = typeof to === "string" ? parsePath(to) : to, toPathname = _ref.pathname, _ref_search = _ref.search, search = _ref_search === void 0 ? "" : _ref_search, _ref_hash = _ref.hash, hash = _ref_hash === void 0 ? "" : _ref_hash;
    var pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
        pathname: pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
    };
}
function resolvePathname(relativePath, fromPathname) {
    var segments = fromPathname.replace(/\/+$/, "").split("/");
    var relativeSegments = relativePath.split("/");
    relativeSegments.forEach(function(segment) {
        if (segment === "..") // Keep the root "" segment so the pathname starts at /
        {
            if (segments.length > 1) segments.pop();
        } else if (segment !== ".") segments.push(segment);
    });
    return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
    return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */ function getPathContributingMatches(matches) {
    return matches.filter(function(match, index) {
        return index === 0 || match.route.path && match.route.path.length > 0;
    });
}
/**
 * @private
 */ function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
    if (isPathRelative === void 0) isPathRelative = false;
    var to;
    if (typeof toArg === "string") to = parsePath(toArg);
    else {
        to = _extends({}, toArg);
        invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
        invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
        invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
    }
    var isEmptyPath = toArg === "" || to.pathname === "";
    var toPathname = isEmptyPath ? "/" : to.pathname;
    var from;
    // Routing is relative to the current pathname if explicitly requested.
    //
    // If a pathname is explicitly provided in `to`, it should be relative to the
    // route context. This is explained in `Note on `<Link to>` values` in our
    // migration guide from v5 as a means of disambiguation between `to` values
    // that begin with `/` and those that do not. However, this is problematic for
    // `to` values that do not provide a pathname. `to` can simply be a search or
    // hash string, in which case we should assume that the navigation is relative
    // to the current location's pathname and *not* the route pathname.
    if (isPathRelative || toPathname == null) from = locationPathname;
    else {
        var routePathnameIndex = routePathnames.length - 1;
        if (toPathname.startsWith("..")) {
            var toSegments = toPathname.split("/");
            // Each leading .. segment means "go up one route" instead of "go up one
            // URL segment".  This is a key difference from how <a href> works and a
            // major reason we call this a "to" value instead of a "href".
            while(toSegments[0] === ".."){
                toSegments.shift();
                routePathnameIndex -= 1;
            }
            to.pathname = toSegments.join("/");
        }
        // If there are more ".." segments than parent routes, resolve relative to
        // the root / URL.
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    var path = resolvePath(to, from);
    // Ensure the pathname has a trailing slash if the original "to" had one
    var hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    // Or if this was a link to the current path which has a trailing slash
    var hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) path.pathname += "/";
    return path;
}
/**
 * @private
 */ function getToPathname(to) {
    // Empty strings should be treated the same as / paths
    return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */ var joinPaths = function(paths) {
    return paths.join("/").replace(/\/\/+/g, "/");
};
/**
 * @private
 */ var normalizePathname = function(pathname) {
    return pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
};
/**
 * @private
 */ var normalizeSearch = function(search) {
    return !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
};
/**
 * @private
 */ var normalizeHash = function(hash) {
    return !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
};
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */ var json = function json(data, init) {
    if (init === void 0) init = {};
    var responseInit = typeof init === "number" ? {
        status: init
    } : init;
    var headers = new Headers(responseInit.headers);
    if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json; charset=utf-8");
    return new Response(JSON.stringify(data), _extends({}, responseInit, {
        headers: headers
    }));
};
var AbortedDeferredError = function(Error1) {
    "use strict";
    (0, _swc_helpers_inherits__WEBPACK_IMPORTED_MODULE_4_._)(AbortedDeferredError, Error1);
    var _super = (0, _swc_helpers_create_super__WEBPACK_IMPORTED_MODULE_10_._)(AbortedDeferredError);
    function AbortedDeferredError() {
        (0, _swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_1_._)(this, AbortedDeferredError);
        return _super.apply(this, arguments);
    }
    return AbortedDeferredError;
}((0, _swc_helpers_wrap_native_super__WEBPACK_IMPORTED_MODULE_9_._)(Error));
var DeferredData = function() {
    "use strict";
    function DeferredData(data, responseInit) {
        var _this = this;
        (0, _swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_1_._)(this, DeferredData);
        this.pendingKeysSet = new Set();
        this.subscribers = new Set();
        this.deferredKeys = [];
        invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
        // Set up an AbortController + Promise we can race against to exit early
        // cancellation
        var reject;
        this.abortPromise = new Promise(function(_, r) {
            return reject = r;
        });
        this.controller = new AbortController();
        var onAbort = function() {
            return reject(new AbortedDeferredError("Deferred data aborted"));
        };
        this.unlistenAbortSignal = function() {
            return _this.controller.signal.removeEventListener("abort", onAbort);
        };
        this.controller.signal.addEventListener("abort", onAbort);
        this.data = Object.entries(data).reduce(function(acc, _ref) {
            var _$_ref = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6_._)(_ref, 2), key = _$_ref[0], value = _$_ref[1];
            return Object.assign(acc, (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, key, _this.trackPromise(key, value)));
        }, {});
        if (this.done) // All incoming values were resolved
        this.unlistenAbortSignal();
        this.init = responseInit;
    }
    (0, _swc_helpers_create_class__WEBPACK_IMPORTED_MODULE_2_._)(DeferredData, [
        {
            key: "trackPromise",
            value: function trackPromise(key, value) {
                var _this = this;
                if (!(0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_5_._)(value, Promise)) return value;
                this.deferredKeys.push(key);
                this.pendingKeysSet.add(key);
                // We store a little wrapper promise that will be extended with
                // _data/_error props upon resolve/reject
                var promise = Promise.race([
                    value,
                    this.abortPromise
                ]).then(function(data) {
                    return _this.onSettle(promise, key, undefined, data);
                }, function(error) {
                    return _this.onSettle(promise, key, error);
                });
                // Register rejection listeners to avoid uncaught promise rejections on
                // errors or aborted deferred values
                promise.catch(function() {});
                Object.defineProperty(promise, "_tracked", {
                    get: function() {
                        return true;
                    }
                });
                return promise;
            }
        },
        {
            key: "onSettle",
            value: function onSettle(promise, key, error, data) {
                if (this.controller.signal.aborted && (0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_5_._)(error, AbortedDeferredError)) {
                    this.unlistenAbortSignal();
                    Object.defineProperty(promise, "_error", {
                        get: function() {
                            return error;
                        }
                    });
                    return Promise.reject(error);
                }
                this.pendingKeysSet.delete(key);
                if (this.done) // Nothing left to abort!
                this.unlistenAbortSignal();
                // If the promise was resolved/rejected with undefined, we'll throw an error as you
                // should always resolve with a value or null
                if (error === undefined && data === undefined) {
                    var undefinedError = new Error("Deferred data for key \"" + key + "\" resolved/rejected with `undefined`, " + "you must resolve/reject with a value or `null`.");
                    Object.defineProperty(promise, "_error", {
                        get: function() {
                            return undefinedError;
                        }
                    });
                    this.emit(false, key);
                    return Promise.reject(undefinedError);
                }
                if (data === undefined) {
                    Object.defineProperty(promise, "_error", {
                        get: function() {
                            return error;
                        }
                    });
                    this.emit(false, key);
                    return Promise.reject(error);
                }
                Object.defineProperty(promise, "_data", {
                    get: function() {
                        return data;
                    }
                });
                this.emit(false, key);
                return data;
            }
        },
        {
            key: "emit",
            value: function emit(aborted, settledKey) {
                this.subscribers.forEach(function(subscriber) {
                    return subscriber(aborted, settledKey);
                });
            }
        },
        {
            key: "subscribe",
            value: function subscribe(fn) {
                var _this = this;
                this.subscribers.add(fn);
                return function() {
                    return _this.subscribers.delete(fn);
                };
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                var _this = this;
                this.controller.abort();
                this.pendingKeysSet.forEach(function(v, k) {
                    return _this.pendingKeysSet.delete(k);
                });
                this.emit(true);
            }
        },
        {
            key: "resolveData",
            value: function resolveData(signal) {
                var _this = this;
                return (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function() {
                    var aborted, onAbort;
                    return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                aborted = false;
                                if (!!_this.done) return [
                                    3,
                                    2
                                ];
                                onAbort = function() {
                                    return _this.cancel();
                                };
                                signal.addEventListener("abort", onAbort);
                                return [
                                    4,
                                    new Promise(function(resolve) {
                                        _this.subscribe(function(aborted) {
                                            signal.removeEventListener("abort", onAbort);
                                            if (aborted || _this.done) resolve(aborted);
                                        });
                                    })
                                ];
                            case 1:
                                aborted = _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    aborted
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "done",
            get: function get() {
                return this.pendingKeysSet.size === 0;
            }
        },
        {
            key: "unwrappedData",
            get: function get() {
                invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
                return Object.entries(this.data).reduce(function(acc, _ref2) {
                    var _$_ref2 = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6_._)(_ref2, 2), key = _$_ref2[0], value = _$_ref2[1];
                    return Object.assign(acc, (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, key, unwrapTrackedPromise(value)));
                }, {});
            }
        },
        {
            key: "pendingKeys",
            get: function get() {
                return Array.from(this.pendingKeysSet);
            }
        }
    ]);
    return DeferredData;
}();
function isTrackedPromise(value) {
    return (0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_5_._)(value, Promise) && value._tracked === true;
}
function unwrapTrackedPromise(value) {
    if (!isTrackedPromise(value)) return value;
    if (value._error) throw value._error;
    return value._data;
}
var defer = function defer(data, init) {
    if (init === void 0) init = {};
    var responseInit = typeof init === "number" ? {
        status: init
    } : init;
    return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ var redirect = function redirect(url, init) {
    if (init === void 0) init = 302;
    var responseInit = init;
    if (typeof responseInit === "number") responseInit = {
        status: responseInit
    };
    else if (typeof responseInit.status === "undefined") responseInit.status = 302;
    var headers = new Headers(responseInit.headers);
    headers.set("Location", url);
    return new Response(null, _extends({}, responseInit, {
        headers: headers
    }));
};
/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ var redirectDocument = function(url, init) {
    var response = redirect(url, init);
    response.headers.set("X-Remix-Reload-Document", "true");
    return response;
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 */ var ErrorResponseImpl = function ErrorResponseImpl(status, statusText, data, internal) {
    "use strict";
    (0, _swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_1_._)(this, ErrorResponseImpl);
    if (internal === void 0) internal = false;
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if ((0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_5_._)(data, Error)) {
        this.data = data.toString();
        this.error = data;
    } else this.data = data;
};
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */ function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
var validMutationMethodsArr = [
    "post",
    "put",
    "patch",
    "delete"
];
var validMutationMethods = new Set(validMutationMethodsArr);
var validRequestMethodsArr = [
    "get"
].concat((0, _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8_._)(validMutationMethodsArr));
var validRequestMethods = new Set(validRequestMethodsArr);
var redirectStatusCodes = new Set([
    301,
    302,
    303,
    307,
    308
]);
var redirectPreserveMethodStatusCodes = new Set([
    307,
    308
]);
var IDLE_NAVIGATION = {
    state: "idle",
    location: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
var IDLE_FETCHER = {
    state: "idle",
    data: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
var IDLE_BLOCKER = {
    state: "unblocked",
    proceed: undefined,
    reset: undefined,
    location: undefined
};
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var defaultMapRouteProperties = function(route) {
    return {
        hasErrorBoundary: Boolean(route.hasErrorBoundary)
    };
};
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */ function createRouter(init) {
    var initialize = // Initialize the router, all side effects should be kicked off from here.
    // Implemented as a Fluent API for ease of:
    //   let router = createRouter(init).initialize();
    function initialize() {
        // If history informs us of a POP navigation, start the navigation but do not update
        // state.  We'll update our own state once the navigation completes
        unlistenHistory = init.history.listen(function(_ref) {
            var historyAction = _ref.action, location = _ref.location, delta = _ref.delta;
            // Ignore this event if it was just us resetting the URL from a
            // blocked POP navigation
            if (ignoreNextHistoryUpdate) {
                ignoreNextHistoryUpdate = false;
                return;
            }
            warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            var blockerKey = shouldBlockNavigation({
                currentLocation: state.location,
                nextLocation: location,
                historyAction: historyAction
            });
            if (blockerKey && delta != null) {
                // Restore the URL to match the current UI, but don't update router state
                ignoreNextHistoryUpdate = true;
                init.history.go(delta * -1);
                // Put the blocker into a blocked state
                updateBlocker(blockerKey, {
                    state: "blocked",
                    location: location,
                    proceed: function proceed() {
                        updateBlocker(blockerKey, {
                            state: "proceeding",
                            proceed: undefined,
                            reset: undefined,
                            location: location
                        });
                        // Re-do the same POP navigation we just blocked
                        init.history.go(delta);
                    },
                    reset: function reset() {
                        var blockers = new Map(state.blockers);
                        blockers.set(blockerKey, IDLE_BLOCKER);
                        updateState({
                            blockers: blockers
                        });
                    }
                });
                return;
            }
            return startNavigation(historyAction, location);
        });
        // Kick off initial data load if needed.  Use Pop to avoid modifying history
        // Note we don't do any handling of lazy here.  For SPA's it'll get handled
        // in the normal navigation flow.  For SSR it's expected that lazy modules are
        // resolved prior to router creation since we can't go into a fallbackElement
        // UI for SSR'd apps
        if (!state.initialized) startNavigation(Action.Pop, state.location);
        return router;
    };
    var dispose = // Clean up a router and it's side effects
    function dispose() {
        if (unlistenHistory) unlistenHistory();
        subscribers.clear();
        pendingNavigationController && pendingNavigationController.abort();
        state.fetchers.forEach(function(_, key) {
            return deleteFetcher(key);
        });
        state.blockers.forEach(function(_, key) {
            return deleteBlocker(key);
        });
    };
    var subscribe = // Subscribe to state updates for the router
    function subscribe(fn) {
        subscribers.add(fn);
        return function() {
            return subscribers.delete(fn);
        };
    };
    var updateState = // Update our state and notify the calling context of the change
    function updateState(newState) {
        state = _extends({}, state, newState);
        subscribers.forEach(function(subscriber) {
            return subscriber(state);
        });
    };
    var completeNavigation = // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
    // and setting state.[historyAction/location/matches] to the new route.
    // - Location is a required param
    // - Navigation will always be set to IDLE_NAVIGATION
    // - Can pass any other state in newState
    function completeNavigation(location, newState) {
        var _location$state, _location$state2;
        // Deduce if we're in a loading/actionReload state:
        // - We have committed actionData in the store
        // - The current navigation was a mutation submission
        // - We're past the submitting state and into the loading state
        // - The location being loaded is not the result of a redirect
        var isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
        var actionData;
        if (newState.actionData) {
            if (Object.keys(newState.actionData).length > 0) actionData = newState.actionData;
            else // Empty actionData -> clear prior actionData due to an action error
            actionData = null;
        } else if (isActionReload) // Keep the current data if we're wrapping up the action reload
        actionData = state.actionData;
        else // Clear actionData on any other completed navigations
        actionData = null;
        // Always preserve any existing loaderData from re-used routes
        var loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
        // On a successful navigation we can assume we got through all blockers
        // so we can start fresh
        var blockers = state.blockers;
        if (blockers.size > 0) {
            blockers = new Map(blockers);
            blockers.forEach(function(_, k) {
                return blockers.set(k, IDLE_BLOCKER);
            });
        }
        // Always respect the user flag.  Otherwise don't reset on mutation
        // submission navigations unless they redirect
        var preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
        if (inFlightDataRoutes) {
            dataRoutes = inFlightDataRoutes;
            inFlightDataRoutes = undefined;
        }
        if (isUninterruptedRevalidation) ;
        else if (pendingAction === Action.Pop) ;
        else if (pendingAction === Action.Push) init.history.push(location, location.state);
        else if (pendingAction === Action.Replace) init.history.replace(location, location.state);
        updateState(_extends({}, newState, {
            actionData: actionData,
            loaderData: loaderData,
            historyAction: pendingAction,
            location: location,
            initialized: true,
            navigation: IDLE_NAVIGATION,
            revalidation: "idle",
            restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
            preventScrollReset: preventScrollReset,
            blockers: blockers
        }));
        // Reset stateful navigation vars
        pendingAction = Action.Pop;
        pendingPreventScrollReset = false;
        isUninterruptedRevalidation = false;
        isRevalidationRequired = false;
        cancelledDeferredRoutes = [];
        cancelledFetcherLoads = [];
    };
    var revalidate = // Revalidate all current loaders.  If a navigation is in progress or if this
    // is interrupted by a navigation, allow this to "succeed" by calling all
    // loaders during the next loader round
    function revalidate() {
        interruptActiveLoads();
        updateState({
            revalidation: "loading"
        });
        // If we're currently submitting an action, we don't need to start a new
        // navigation, we'll just let the follow up loader execution call all loaders
        if (state.navigation.state === "submitting") return;
        // If we're currently in an idle state, start a new navigation for the current
        // action/location and mark it as uninterrupted, which will skip the history
        // update in completeNavigation
        if (state.navigation.state === "idle") {
            startNavigation(state.historyAction, state.location, {
                startUninterruptedRevalidation: true
            });
            return;
        }
        // Otherwise, if we're currently in a loading state, just start a new
        // navigation to the navigation.location but do not trigger an uninterrupted
        // revalidation so that history correctly updates once the navigation completes
        startNavigation(pendingAction || state.historyAction, state.navigation.location, {
            overrideNavigation: state.navigation
        });
    };
    var getFetcher = function getFetcher(key) {
        return state.fetchers.get(key) || IDLE_FETCHER;
    };
    var fetch = // Trigger a fetcher load/submit for the given fetcher key
    function fetch(key, routeId, href, opts) {
        if (isServer) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        if (fetchControllers.has(key)) abortFetcher(key);
        var routesToUse = inFlightDataRoutes || dataRoutes;
        var normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, routeId, opts == null ? void 0 : opts.relative);
        var matches = matchRoutes(routesToUse, normalizedPath, basename);
        if (!matches) {
            setFetcherError(key, routeId, getInternalRouterError(404, {
                pathname: normalizedPath
            }));
            return;
        }
        var _normalizeNavigateOptions = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts), path = _normalizeNavigateOptions.path, submission = _normalizeNavigateOptions.submission, error = _normalizeNavigateOptions.error;
        if (error) {
            setFetcherError(key, routeId, error);
            return;
        }
        var match = getTargetMatch(matches, path);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        if (submission && isMutationMethod(submission.formMethod)) {
            handleFetcherAction(key, routeId, path, match, matches, submission);
            return;
        }
        // Store off the match so we can call it's shouldRevalidate on subsequent
        // revalidations
        fetchLoadMatches.set(key, {
            routeId: routeId,
            path: path
        });
        handleFetcherLoader(key, routeId, path, match, matches, submission);
    };
    var interruptActiveLoads = function interruptActiveLoads() {
        var // Cancel pending route-level deferreds and mark cancelled routes for
        // revalidation
        _cancelledDeferredRoutes;
        // Every interruption triggers a revalidation
        isRevalidationRequired = true;
        (_cancelledDeferredRoutes = cancelledDeferredRoutes).push.apply(_cancelledDeferredRoutes, (0, _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8_._)(cancelActiveDeferreds()));
        // Abort in-flight fetcher loads
        fetchLoadMatches.forEach(function(_, key) {
            if (fetchControllers.has(key)) {
                cancelledFetcherLoads.push(key);
                abortFetcher(key);
            }
        });
    };
    var setFetcherError = function setFetcherError(key, routeId, error) {
        var boundaryMatch = findNearestBoundary(state.matches, routeId);
        deleteFetcher(key);
        updateState({
            errors: (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, boundaryMatch.route.id, error),
            fetchers: new Map(state.fetchers)
        });
    };
    var deleteFetcher = function deleteFetcher(key) {
        var fetcher = state.fetchers.get(key);
        // Don't abort the controller if this is a deletion of a fetcher.submit()
        // in it's loading phase since - we don't want to abort the corresponding
        // revalidation and want them to complete and land
        if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) abortFetcher(key);
        fetchLoadMatches.delete(key);
        fetchReloadIds.delete(key);
        fetchRedirectIds.delete(key);
        state.fetchers.delete(key);
    };
    var abortFetcher = function abortFetcher(key) {
        var controller = fetchControllers.get(key);
        invariant(controller, "Expected fetch controller: " + key);
        controller.abort();
        fetchControllers.delete(key);
    };
    var markFetchersDone = function markFetchersDone(keys) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                var fetcher = getFetcher(key);
                var doneFetcher = getDoneFetcher(fetcher.data);
                state.fetchers.set(key, doneFetcher);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) _iterator.return();
            } finally{
                if (_didIteratorError) throw _iteratorError;
            }
        }
    };
    var markFetchRedirectsDone = function markFetchRedirectsDone() {
        var doneKeys = [];
        var updatedFetchers = false;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = fetchRedirectIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                var fetcher = state.fetchers.get(key);
                invariant(fetcher, "Expected fetcher: " + key);
                if (fetcher.state === "loading") {
                    fetchRedirectIds.delete(key);
                    doneKeys.push(key);
                    updatedFetchers = true;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) _iterator.return();
            } finally{
                if (_didIteratorError) throw _iteratorError;
            }
        }
        markFetchersDone(doneKeys);
        return updatedFetchers;
    };
    var abortStaleFetchLoads = function abortStaleFetchLoads(landedId) {
        var yeetedKeys = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = fetchReloadIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6_._)(_step.value, 2), key = _step_value[0], id = _step_value[1];
                if (id < landedId) {
                    var fetcher = state.fetchers.get(key);
                    invariant(fetcher, "Expected fetcher: " + key);
                    if (fetcher.state === "loading") {
                        abortFetcher(key);
                        fetchReloadIds.delete(key);
                        yeetedKeys.push(key);
                    }
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) _iterator.return();
            } finally{
                if (_didIteratorError) throw _iteratorError;
            }
        }
        markFetchersDone(yeetedKeys);
        return yeetedKeys.length > 0;
    };
    var getBlocker = function getBlocker(key, fn) {
        var blocker = state.blockers.get(key) || IDLE_BLOCKER;
        if (blockerFunctions.get(key) !== fn) blockerFunctions.set(key, fn);
        return blocker;
    };
    var deleteBlocker = function deleteBlocker(key) {
        state.blockers.delete(key);
        blockerFunctions.delete(key);
    };
    var updateBlocker = // Utility function to update blockers, ensuring valid state transitions
    function updateBlocker(key, newBlocker) {
        var blocker = state.blockers.get(key) || IDLE_BLOCKER;
        // Poor mans state machine :)
        // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
        invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
        var blockers = new Map(state.blockers);
        blockers.set(key, newBlocker);
        updateState({
            blockers: blockers
        });
    };
    var shouldBlockNavigation = function shouldBlockNavigation(_ref2) {
        var currentLocation = _ref2.currentLocation, nextLocation = _ref2.nextLocation, historyAction = _ref2.historyAction;
        if (blockerFunctions.size === 0) return;
        // We ony support a single active blocker at the moment since we don't have
        // any compelling use cases for multi-blocker yet
        if (blockerFunctions.size > 1) warning(false, "A router only supports one blocker at a time");
        var entries = Array.from(blockerFunctions.entries());
        var _entries_ = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6_._)(entries[entries.length - 1], 2), blockerKey = _entries_[0], blockerFunction = _entries_[1];
        var blocker = state.blockers.get(blockerKey);
        if (blocker && blocker.state === "proceeding") // If the blocker is currently proceeding, we don't need to re-check
        // it and can let this navigation continue
        return;
        // At this point, we know we're unblocked/blocked so we need to check the
        // user-provided blocker function
        if (blockerFunction({
            currentLocation: currentLocation,
            nextLocation: nextLocation,
            historyAction: historyAction
        })) return blockerKey;
    };
    var cancelActiveDeferreds = function cancelActiveDeferreds(predicate) {
        var cancelledRouteIds = [];
        activeDeferreds.forEach(function(dfd, routeId) {
            if (!predicate || predicate(routeId)) {
                // Cancel the deferred - but do not remove from activeDeferreds here -
                // we rely on the subscribers to do that so our tests can assert proper
                // cleanup via _internalActiveDeferreds
                dfd.cancel();
                cancelledRouteIds.push(routeId);
                activeDeferreds.delete(routeId);
            }
        });
        return cancelledRouteIds;
    };
    var enableScrollRestoration = // Opt in to capturing and reporting scroll positions during navigations,
    // used by the <ScrollRestoration> component
    function enableScrollRestoration(positions, getPosition, getKey) {
        savedScrollPositions = positions;
        getScrollPosition = getPosition;
        getScrollRestorationKey = getKey || null;
        // Perform initial hydration scroll restoration, since we miss the boat on
        // the initial updateState() because we've not yet rendered <ScrollRestoration/>
        // and therefore have no savedScrollPositions available
        if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
            initialScrollRestored = true;
            var y = getSavedScrollPosition(state.location, state.matches);
            if (y != null) updateState({
                restoreScrollPosition: y
            });
        }
        return function() {
            savedScrollPositions = null;
            getScrollPosition = null;
            getScrollRestorationKey = null;
        };
    };
    var getScrollKey = function getScrollKey(location, matches) {
        if (getScrollRestorationKey) {
            var key = getScrollRestorationKey(location, matches.map(function(m) {
                return convertRouteMatchToUiMatch(m, state.loaderData);
            }));
            return key || location.key;
        }
        return location.key;
    };
    var saveScrollPosition = function saveScrollPosition(location, matches) {
        if (savedScrollPositions && getScrollPosition) {
            var key = getScrollKey(location, matches);
            savedScrollPositions[key] = getScrollPosition();
        }
    };
    var getSavedScrollPosition = function getSavedScrollPosition(location, matches) {
        if (savedScrollPositions) {
            var key = getScrollKey(location, matches);
            var y = savedScrollPositions[key];
            if (typeof y === "number") return y;
        }
        return null;
    };
    var _internalSetRoutes = function _internalSetRoutes(newRoutes) {
        manifest = {};
        inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, undefined, manifest);
    };
    var routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
    var isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
    var isServer = !isBrowser;
    invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    var mapRouteProperties;
    if (init.mapRouteProperties) mapRouteProperties = init.mapRouteProperties;
    else if (init.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        var detectErrorBoundary = init.detectErrorBoundary;
        mapRouteProperties = function(route) {
            return {
                hasErrorBoundary: detectErrorBoundary(route)
            };
        };
    } else mapRouteProperties = defaultMapRouteProperties;
    // Routes keyed by ID
    var manifest = {};
    // Routes in tree format for matching
    var dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, undefined, manifest);
    var inFlightDataRoutes;
    var basename = init.basename || "/";
    // Config driven behavior flags
    var future = _extends({
        v7_normalizeFormMethod: false,
        v7_prependBasename: false
    }, init.future);
    // Cleanup function for history
    var unlistenHistory = null;
    // Externally-provided functions to call on all state changes
    var subscribers = new Set();
    // Externally-provided object to hold scroll restoration locations during routing
    var savedScrollPositions = null;
    // Externally-provided function to get scroll restoration keys
    var getScrollRestorationKey = null;
    // Externally-provided function to get current scroll position
    var getScrollPosition = null;
    // One-time flag to control the initial hydration scroll restoration.  Because
    // we don't get the saved positions from <ScrollRestoration /> until _after_
    // the initial render, we need to manually trigger a separate updateState to
    // send along the restoreScrollPosition
    // Set to true if we have `hydrationData` since we assume we were SSR'd and that
    // SSR did the initial scroll restoration.
    var initialScrollRestored = init.hydrationData != null;
    var initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
    var initialErrors = null;
    if (initialMatches == null) {
        // If we do not match a user-provided-route, fall back to the root
        // to allow the error boundary to take over
        var error = getInternalRouterError(404, {
            pathname: init.history.location.pathname
        });
        var _getShortCircuitMatches = getShortCircuitMatches(dataRoutes), matches = _getShortCircuitMatches.matches, route = _getShortCircuitMatches.route;
        initialMatches = matches;
        initialErrors = (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, route.id, error);
    }
    var initialized = // All initialMatches need to be loaded before we're ready.  If we have lazy
    // functions around still then we'll need to run them in initialize()
    !initialMatches.some(function(m) {
        return m.route.lazy;
    }) && // And we have to either have no loaders or have been provided hydrationData
    (!initialMatches.some(function(m) {
        return m.route.loader;
    }) || init.hydrationData != null);
    var router;
    var state = {
        historyAction: init.history.action,
        location: init.history.location,
        matches: initialMatches,
        initialized: initialized,
        navigation: IDLE_NAVIGATION,
        // Don't restore on initial updateState() if we were SSR'd
        restoreScrollPosition: init.hydrationData != null ? false : null,
        preventScrollReset: false,
        revalidation: "idle",
        loaderData: init.hydrationData && init.hydrationData.loaderData || {},
        actionData: init.hydrationData && init.hydrationData.actionData || null,
        errors: init.hydrationData && init.hydrationData.errors || initialErrors,
        fetchers: new Map(),
        blockers: new Map()
    };
    // -- Stateful internal variables to manage navigations --
    // Current navigation in progress (to be committed in completeNavigation)
    var pendingAction = Action.Pop;
    // Should the current navigation prevent the scroll reset if scroll cannot
    // be restored?
    var pendingPreventScrollReset = false;
    // AbortController for the active navigation
    var pendingNavigationController;
    // We use this to avoid touching history in completeNavigation if a
    // revalidation is entirely uninterrupted
    var isUninterruptedRevalidation = false;
    // Use this internal flag to force revalidation of all loaders:
    //  - submissions (completed or interrupted)
    //  - useRevalidator()
    //  - X-Remix-Revalidate (from redirect)
    var isRevalidationRequired = false;
    // Use this internal array to capture routes that require revalidation due
    // to a cancelled deferred on action submission
    var cancelledDeferredRoutes = [];
    // Use this internal array to capture fetcher loads that were cancelled by an
    // action navigation and require revalidation
    var cancelledFetcherLoads = [];
    // AbortControllers for any in-flight fetchers
    var fetchControllers = new Map();
    // Track loads based on the order in which they started
    var incrementingLoadId = 0;
    // Track the outstanding pending navigation data load to be compared against
    // the globally incrementing load when a fetcher load lands after a completed
    // navigation
    var pendingNavigationLoadId = -1;
    // Fetchers that triggered data reloads as a result of their actions
    var fetchReloadIds = new Map();
    // Fetchers that triggered redirect navigations
    var fetchRedirectIds = new Set();
    // Most recent href/match for fetcher.load calls for fetchers
    var fetchLoadMatches = new Map();
    // Store DeferredData instances for active route matches.  When a
    // route loader returns defer() we stick one in here.  Then, when a nested
    // promise resolves we update loaderData.  If a new navigation starts we
    // cancel active deferreds for eliminated routes.
    var activeDeferreds = new Map();
    // Store blocker functions in a separate Map outside of router state since
    // we don't need to update UI state if they change
    var blockerFunctions = new Map();
    // Flag to ignore the next history update, so we can revert the URL change on
    // a POP navigation that was blocked by the user without touching router state
    var ignoreNextHistoryUpdate = false;
    function navigate(to, opts) {
        return _navigate.apply(this, arguments);
    }
    function _navigate() {
        _navigate = // Trigger a navigation event, which can either be a numerical POP or a PUSH
        // replace with an optional submission
        (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(to, opts) {
            var normalizedPath, _normalizeNavigateOptions, path, submission, error, currentLocation, nextLocation, userReplace, historyAction, preventScrollReset, blockerKey;
            return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (typeof to === "number") {
                            init.history.go(to);
                            return [
                                2
                            ];
                        }
                        normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
                        _normalizeNavigateOptions = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts), path = _normalizeNavigateOptions.path, submission = _normalizeNavigateOptions.submission, error = _normalizeNavigateOptions.error;
                        currentLocation = state.location;
                        nextLocation = createLocation(state.location, path, opts && opts.state);
                        // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
                        // URL from window.location, so we need to encode it here so the behavior
                        // remains the same as POP and non-data-router usages.  new URL() does all
                        // the same encoding we'd get from a history.pushState/window.location read
                        // without having to touch history
                        nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
                        userReplace = opts && opts.replace != null ? opts.replace : undefined;
                        historyAction = Action.Push;
                        if (userReplace === true) historyAction = Action.Replace;
                        else if (userReplace === false) ;
                        else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) // By default on submissions to the current location we REPLACE so that
                        // users don't have to double-click the back button to get to the prior
                        // location.  If the user redirects to a different location from the
                        // action/loader this will be ignored and the redirect will be a PUSH
                        historyAction = Action.Replace;
                        preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
                        blockerKey = shouldBlockNavigation({
                            currentLocation: currentLocation,
                            nextLocation: nextLocation,
                            historyAction: historyAction
                        });
                        if (blockerKey) {
                            // Put the blocker into a blocked state
                            updateBlocker(blockerKey, {
                                state: "blocked",
                                location: nextLocation,
                                proceed: function proceed() {
                                    updateBlocker(blockerKey, {
                                        state: "proceeding",
                                        proceed: undefined,
                                        reset: undefined,
                                        location: nextLocation
                                    });
                                    // Send the same navigation through
                                    navigate(to, opts);
                                },
                                reset: function reset() {
                                    var blockers = new Map(state.blockers);
                                    blockers.set(blockerKey, IDLE_BLOCKER);
                                    updateState({
                                        blockers: blockers
                                    });
                                }
                            });
                            return [
                                2
                            ];
                        }
                        return [
                            4,
                            startNavigation(historyAction, nextLocation, {
                                submission: submission,
                                // Send through the formData serialization error if we have one so we can
                                // render at the right error boundary after we match routes
                                pendingError: error,
                                preventScrollReset: preventScrollReset,
                                replace: opts && opts.replace
                            })
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        });
        return _navigate.apply(this, arguments);
    }
    function startNavigation(historyAction, location, opts) {
        return _startNavigation.apply(this, arguments);
    }
    function _startNavigation() {
        _startNavigation = // Start a navigation to the given action/location.  Can optionally provide a
        // overrideNavigation which will override the normalLoad in the case of a redirect
        // navigation
        (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(historyAction, location, opts) {
            var routesToUse, loadingNavigation, matches, error, _getShortCircuitMatches, notFoundMatches, route, request, pendingActionData, pendingError, actionOutput, _ref, shortCircuited, loaderData, errors;
            return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Abort any in-progress navigations and start a new one. Unset any ongoing
                        // uninterrupted revalidations unless told otherwise, since we want this
                        // new navigation to update history normally
                        pendingNavigationController && pendingNavigationController.abort();
                        pendingNavigationController = null;
                        pendingAction = historyAction;
                        isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
                        // Save the current scroll position every time we start a new navigation,
                        // and track whether we should reset scroll on completion
                        saveScrollPosition(state.location, state.matches);
                        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
                        routesToUse = inFlightDataRoutes || dataRoutes;
                        loadingNavigation = opts && opts.overrideNavigation;
                        matches = matchRoutes(routesToUse, location, basename);
                        // Short circuit with a 404 on the root error boundary if we match nothing
                        if (!matches) {
                            error = getInternalRouterError(404, {
                                pathname: location.pathname
                            });
                            _getShortCircuitMatches = getShortCircuitMatches(routesToUse), notFoundMatches = _getShortCircuitMatches.matches, route = _getShortCircuitMatches.route;
                            // Cancel all pending deferred on 404s since we don't keep any routes
                            cancelActiveDeferreds();
                            completeNavigation(location, {
                                matches: notFoundMatches,
                                loaderData: {},
                                errors: (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, route.id, error)
                            });
                            return [
                                2
                            ];
                        }
                        // Short circuit if it's only a hash change and not a revalidation or
                        // mutation submission.
                        //
                        // Ignore on initial page loads because since the initial load will always
                        // be "same hash".  For example, on /page#hash and submit a <Form method="post">
                        // which will default to a navigation to /page
                        if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
                            completeNavigation(location, {
                                matches: matches
                            });
                            return [
                                2
                            ];
                        }
                        // Create a controller/Request for this navigation
                        pendingNavigationController = new AbortController();
                        request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
                        if (!(opts && opts.pendingError)) return [
                            3,
                            1
                        ];
                        // If we have a pendingError, it means the user attempted a GET submission
                        // with binary FormData so assign here and skip to handleLoaders.  That
                        // way we handle calling loaders above the boundary etc.  It's not really
                        // different from an actionError in that sense.
                        pendingError = (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, findNearestBoundary(matches).route.id, opts.pendingError);
                        return [
                            3,
                            3
                        ];
                    case 1:
                        if (!(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            handleAction(request, location, opts.submission, matches, {
                                replace: opts.replace
                            })
                        ];
                    case 2:
                        actionOutput = _state.sent();
                        if (actionOutput.shortCircuited) return [
                            2
                        ];
                        pendingActionData = actionOutput.pendingActionData;
                        pendingError = actionOutput.pendingActionError;
                        loadingNavigation = getLoadingNavigation(location, opts.submission);
                        // Create a GET request for the loaders
                        request = new Request(request.url, {
                            signal: request.signal
                        });
                        _state.label = 3;
                    case 3:
                        return [
                            4,
                            handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, pendingActionData, pendingError)
                        ];
                    case 4:
                        _ref = _state.sent(), shortCircuited = _ref.shortCircuited, loaderData = _ref.loaderData, errors = _ref.errors;
                        if (shortCircuited) return [
                            2
                        ];
                        // Clean up now that the action/loaders have completed.  Don't clean up if
                        // we short circuited because pendingNavigationController will have already
                        // been assigned to a new controller for the next navigation
                        pendingNavigationController = null;
                        completeNavigation(location, _extends({
                            matches: matches
                        }, pendingActionData ? {
                            actionData: pendingActionData
                        } : {}, {
                            loaderData: loaderData,
                            errors: errors
                        }));
                        return [
                            2
                        ];
                }
            });
        });
        return _startNavigation.apply(this, arguments);
    }
    function handleAction(request, location, submission, matches, opts) {
        return _handleAction.apply(this, arguments);
    }
    function _handleAction() {
        _handleAction = // Call the action matched by the leaf route for this navigation and handle
        // redirects/errors
        (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(request, location, submission, matches, opts) {
            var navigation, result, actionMatch, replace, boundaryMatch;
            return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (opts === void 0) opts = {};
                        interruptActiveLoads();
                        navigation = getSubmittingNavigation(location, submission);
                        updateState({
                            navigation: navigation
                        });
                        actionMatch = getTargetMatch(matches, location);
                        if (!(!actionMatch.route.action && !actionMatch.route.lazy)) return [
                            3,
                            1
                        ];
                        result = {
                            type: ResultType.error,
                            error: getInternalRouterError(405, {
                                method: request.method,
                                pathname: location.pathname,
                                routeId: actionMatch.route.id
                            })
                        };
                        return [
                            3,
                            3
                        ];
                    case 1:
                        return [
                            4,
                            callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename)
                        ];
                    case 2:
                        result = _state.sent();
                        if (request.signal.aborted) return [
                            2,
                            {
                                shortCircuited: true
                            }
                        ];
                        _state.label = 3;
                    case 3:
                        if (!isRedirectResult(result)) return [
                            3,
                            5
                        ];
                        if (opts && opts.replace != null) replace = opts.replace;
                        else // If the user didn't explicity indicate replace behavior, replace if
                        // we redirected to the exact same location we're currently at to avoid
                        // double back-buttons
                        replace = result.location === state.location.pathname + state.location.search;
                        return [
                            4,
                            startRedirectNavigation(state, result, {
                                submission: submission,
                                replace: replace
                            })
                        ];
                    case 4:
                        _state.sent();
                        return [
                            2,
                            {
                                shortCircuited: true
                            }
                        ];
                    case 5:
                        if (isErrorResult(result)) {
                            boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
                            // By default, all submissions are REPLACE navigations, but if the
                            // action threw an error that'll be rendered in an errorElement, we fall
                            // back to PUSH so that the user can use the back button to get back to
                            // the pre-submission form location to try again
                            if ((opts && opts.replace) !== true) pendingAction = Action.Push;
                            return [
                                2,
                                {
                                    // Send back an empty object we can use to clear out any prior actionData
                                    pendingActionData: {},
                                    pendingActionError: (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, boundaryMatch.route.id, result.error)
                                }
                            ];
                        }
                        if (isDeferredResult(result)) throw getInternalRouterError(400, {
                            type: "defer-action"
                        });
                        return [
                            2,
                            {
                                pendingActionData: (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, actionMatch.route.id, result.data)
                            }
                        ];
                }
            });
        });
        return _handleAction.apply(this, arguments);
    }
    function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, pendingActionData, pendingError) {
        return _handleLoaders.apply(this, arguments);
    }
    function _handleLoaders() {
        _handleLoaders = // Call all applicable loaders for the given matches, handling redirects,
        // errors, etc.
        (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, pendingActionData, pendingError) {
            var loadingNavigation, activeSubmission, routesToUse, _getMatchesToLoad, matchesToLoad, revalidatingFetchers, updatedFetchers, actionData, abortPendingFetchRevalidations, _ref, results, loaderResults, fetcherResults, redirect, fetcherKey, _processLoaderData, loaderData, errors, updatedFetchers1, didAbortFetchLoads, shouldUpdateFetchers;
            return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
                        activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
                        routesToUse = inFlightDataRoutes || dataRoutes;
                        _getMatchesToLoad = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6_._)(getMatchesToLoad(init.history, state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError), 2), matchesToLoad = _getMatchesToLoad[0], revalidatingFetchers = _getMatchesToLoad[1];
                        // Cancel pending deferreds for no-longer-matched routes or routes we're
                        // about to reload.  Note that if this is an action reload we would have
                        // already cancelled all pending deferreds so this would be a no-op
                        cancelActiveDeferreds(function(routeId) {
                            return !(matches && matches.some(function(m) {
                                return m.route.id === routeId;
                            })) || matchesToLoad && matchesToLoad.some(function(m) {
                                return m.route.id === routeId;
                            });
                        });
                        pendingNavigationLoadId = ++incrementingLoadId;
                        // Short circuit if we have no loaders to run
                        if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
                            updatedFetchers = markFetchRedirectsDone();
                            completeNavigation(location, _extends({
                                matches: matches,
                                loaderData: {},
                                // Commit pending error if we're short circuiting
                                errors: pendingError || null
                            }, pendingActionData ? {
                                actionData: pendingActionData
                            } : {}, updatedFetchers ? {
                                fetchers: new Map(state.fetchers)
                            } : {}));
                            return [
                                2,
                                {
                                    shortCircuited: true
                                }
                            ];
                        }
                        // If this is an uninterrupted revalidation, we remain in our current idle
                        // state.  If not, we need to switch to our loading state and load data,
                        // preserving any new action data or existing action data (in the case of
                        // a revalidation interrupting an actionReload)
                        if (!isUninterruptedRevalidation) {
                            revalidatingFetchers.forEach(function(rf) {
                                var fetcher = state.fetchers.get(rf.key);
                                var revalidatingFetcher = getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
                                state.fetchers.set(rf.key, revalidatingFetcher);
                            });
                            actionData = pendingActionData || state.actionData;
                            updateState(_extends({
                                navigation: loadingNavigation
                            }, actionData ? Object.keys(actionData).length === 0 ? {
                                actionData: null
                            } : {
                                actionData: actionData
                            } : {}, revalidatingFetchers.length > 0 ? {
                                fetchers: new Map(state.fetchers)
                            } : {}));
                        }
                        revalidatingFetchers.forEach(function(rf) {
                            if (fetchControllers.has(rf.key)) abortFetcher(rf.key);
                            if (rf.controller) // Fetchers use an independent AbortController so that aborting a fetcher
                            // (via deleteFetcher) does not abort the triggering navigation that
                            // triggered the revalidation
                            fetchControllers.set(rf.key, rf.controller);
                        });
                        abortPendingFetchRevalidations = function() {
                            return revalidatingFetchers.forEach(function(f) {
                                return abortFetcher(f.key);
                            });
                        };
                        if (pendingNavigationController) pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
                        return [
                            4,
                            callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request)
                        ];
                    case 1:
                        _ref = _state.sent(), results = _ref.results, loaderResults = _ref.loaderResults, fetcherResults = _ref.fetcherResults;
                        if (request.signal.aborted) return [
                            2,
                            {
                                shortCircuited: true
                            }
                        ];
                        // Clean up _after_ loaders have completed.  Don't clean up if we short
                        // circuited because fetchControllers would have been aborted and
                        // reassigned to new controllers for the next navigation
                        if (pendingNavigationController) pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
                        revalidatingFetchers.forEach(function(rf) {
                            return fetchControllers.delete(rf.key);
                        });
                        redirect = findRedirect(results);
                        if (!redirect) return [
                            3,
                            3
                        ];
                        if (redirect.idx >= matchesToLoad.length) {
                            fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
                            fetchRedirectIds.add(fetcherKey);
                        }
                        return [
                            4,
                            startRedirectNavigation(state, redirect.result, {
                                replace: replace
                            })
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2,
                            {
                                shortCircuited: true
                            }
                        ];
                    case 3:
                        _processLoaderData = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds), loaderData = _processLoaderData.loaderData, errors = _processLoaderData.errors;
                        // Wire up subscribers to update loaderData as promises settle
                        activeDeferreds.forEach(function(deferredData, routeId) {
                            deferredData.subscribe(function(aborted) {
                                // Note: No need to updateState here since the TrackedPromise on
                                // loaderData is stable across resolve/reject
                                // Remove this instance if we were aborted or if promises have settled
                                if (aborted || deferredData.done) activeDeferreds.delete(routeId);
                            });
                        });
                        updatedFetchers1 = markFetchRedirectsDone();
                        didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
                        shouldUpdateFetchers = updatedFetchers1 || didAbortFetchLoads || revalidatingFetchers.length > 0;
                        return [
                            2,
                            _extends({
                                loaderData: loaderData,
                                errors: errors
                            }, shouldUpdateFetchers ? {
                                fetchers: new Map(state.fetchers)
                            } : {})
                        ];
                }
            });
        });
        return _handleLoaders.apply(this, arguments);
    }
    function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
        return _handleFetcherAction.apply(this, arguments);
    }
    function _handleFetcherAction() {
        _handleFetcherAction = // Call the action for the matched fetcher.submit(), and then handle redirects,
        // errors, and revalidation
        (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(key, routeId, path, match, requestMatches, submission) {
            var error, existingFetcher, fetcher, abortController, fetchRequest, originatingLoadId, actionResult, doneFetcher, loadingFetcher, nextLocation, revalidationRequest, routesToUse, matches, loadId, loadFetcher, _getMatchesToLoad, matchesToLoad, revalidatingFetchers, abortPendingFetchRevalidations, _ref, results, loaderResults, fetcherResults, redirect, fetcherKey, _processLoaderData, loaderData, errors, doneFetcher1, didAbortFetchLoads;
            return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        interruptActiveLoads();
                        fetchLoadMatches.delete(key);
                        if (!match.route.action && !match.route.lazy) {
                            error = getInternalRouterError(405, {
                                method: submission.formMethod,
                                pathname: path,
                                routeId: routeId
                            });
                            setFetcherError(key, routeId, error);
                            return [
                                2
                            ];
                        }
                        existingFetcher = state.fetchers.get(key);
                        fetcher = getSubmittingFetcher(submission, existingFetcher);
                        state.fetchers.set(key, fetcher);
                        updateState({
                            fetchers: new Map(state.fetchers)
                        });
                        abortController = new AbortController();
                        fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
                        fetchControllers.set(key, abortController);
                        originatingLoadId = incrementingLoadId;
                        return [
                            4,
                            callLoaderOrAction("action", fetchRequest, match, requestMatches, manifest, mapRouteProperties, basename)
                        ];
                    case 1:
                        actionResult = _state.sent();
                        if (fetchRequest.signal.aborted) {
                            // We can delete this so long as we weren't aborted by ou our own fetcher
                            // re-submit which would have put _new_ controller is in fetchControllers
                            if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
                            return [
                                2
                            ];
                        }
                        if (isRedirectResult(actionResult)) {
                            fetchControllers.delete(key);
                            if (pendingNavigationLoadId > originatingLoadId) {
                                doneFetcher = getDoneFetcher(undefined);
                                state.fetchers.set(key, doneFetcher);
                                updateState({
                                    fetchers: new Map(state.fetchers)
                                });
                                return [
                                    2
                                ];
                            } else {
                                fetchRedirectIds.add(key);
                                loadingFetcher = getLoadingFetcher(submission);
                                state.fetchers.set(key, loadingFetcher);
                                updateState({
                                    fetchers: new Map(state.fetchers)
                                });
                                return [
                                    2,
                                    startRedirectNavigation(state, actionResult, {
                                        fetcherSubmission: submission
                                    })
                                ];
                            }
                        }
                        // Process any non-redirect errors thrown
                        if (isErrorResult(actionResult)) {
                            setFetcherError(key, routeId, actionResult.error);
                            return [
                                2
                            ];
                        }
                        if (isDeferredResult(actionResult)) throw getInternalRouterError(400, {
                            type: "defer-action"
                        });
                        nextLocation = state.navigation.location || state.location;
                        revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
                        routesToUse = inFlightDataRoutes || dataRoutes;
                        matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
                        invariant(matches, "Didn't find any matches after fetcher action");
                        loadId = ++incrementingLoadId;
                        fetchReloadIds.set(key, loadId);
                        loadFetcher = getLoadingFetcher(submission, actionResult.data);
                        state.fetchers.set(key, loadFetcher);
                        _getMatchesToLoad = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6_._)(getMatchesToLoad(init.history, state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, match.route.id, actionResult.data), undefined // No need to send through errors since we short circuit above
                        ), 2), matchesToLoad = _getMatchesToLoad[0], revalidatingFetchers = _getMatchesToLoad[1];
                        // Put all revalidating fetchers into the loading state, except for the
                        // current fetcher which we want to keep in it's current loading state which
                        // contains it's action submission info + action data
                        revalidatingFetchers.filter(function(rf) {
                            return rf.key !== key;
                        }).forEach(function(rf) {
                            var staleKey = rf.key;
                            var existingFetcher = state.fetchers.get(staleKey);
                            var revalidatingFetcher = getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
                            state.fetchers.set(staleKey, revalidatingFetcher);
                            if (fetchControllers.has(staleKey)) abortFetcher(staleKey);
                            if (rf.controller) fetchControllers.set(staleKey, rf.controller);
                        });
                        updateState({
                            fetchers: new Map(state.fetchers)
                        });
                        abortPendingFetchRevalidations = function() {
                            return revalidatingFetchers.forEach(function(rf) {
                                return abortFetcher(rf.key);
                            });
                        };
                        abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
                        return [
                            4,
                            callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest)
                        ];
                    case 2:
                        _ref = _state.sent(), results = _ref.results, loaderResults = _ref.loaderResults, fetcherResults = _ref.fetcherResults;
                        if (abortController.signal.aborted) return [
                            2
                        ];
                        abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
                        fetchReloadIds.delete(key);
                        fetchControllers.delete(key);
                        revalidatingFetchers.forEach(function(r) {
                            return fetchControllers.delete(r.key);
                        });
                        redirect = findRedirect(results);
                        if (redirect) {
                            if (redirect.idx >= matchesToLoad.length) {
                                fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
                                fetchRedirectIds.add(fetcherKey);
                            }
                            return [
                                2,
                                startRedirectNavigation(state, redirect.result)
                            ];
                        }
                        _processLoaderData = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds), loaderData = _processLoaderData.loaderData, errors = _processLoaderData.errors;
                        // Since we let revalidations complete even if the submitting fetcher was
                        // deleted, only put it back to idle if it hasn't been deleted
                        if (state.fetchers.has(key)) {
                            doneFetcher1 = getDoneFetcher(actionResult.data);
                            state.fetchers.set(key, doneFetcher1);
                        }
                        didAbortFetchLoads = abortStaleFetchLoads(loadId);
                        // If we are currently in a navigation loading state and this fetcher is
                        // more recent than the navigation, we want the newer data so abort the
                        // navigation and complete it with the fetcher data
                        if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
                            invariant(pendingAction, "Expected pending action");
                            pendingNavigationController && pendingNavigationController.abort();
                            completeNavigation(state.navigation.location, {
                                matches: matches,
                                loaderData: loaderData,
                                errors: errors,
                                fetchers: new Map(state.fetchers)
                            });
                        } else {
                            // otherwise just update with the fetcher data, preserving any existing
                            // loaderData for loaders that did not need to reload.  We have to
                            // manually merge here since we aren't going through completeNavigation
                            updateState(_extends({
                                errors: errors,
                                loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
                            }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
                                fetchers: new Map(state.fetchers)
                            } : {}));
                            isRevalidationRequired = false;
                        }
                        return [
                            2
                        ];
                }
            });
        });
        return _handleFetcherAction.apply(this, arguments);
    }
    function handleFetcherLoader(key, routeId, path, match, matches, submission) {
        return _handleFetcherLoader.apply(this, arguments);
    }
    function _handleFetcherLoader() {
        _handleFetcherLoader = // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
        (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(key, routeId, path, match, matches, submission) {
            var existingFetcher, loadingFetcher, abortController, fetchRequest, originatingLoadId, result, doneFetcher, boundaryMatch, doneFetcher1;
            return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        existingFetcher = state.fetchers.get(key);
                        loadingFetcher = getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined);
                        state.fetchers.set(key, loadingFetcher);
                        updateState({
                            fetchers: new Map(state.fetchers)
                        });
                        abortController = new AbortController();
                        fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
                        fetchControllers.set(key, abortController);
                        originatingLoadId = incrementingLoadId;
                        return [
                            4,
                            callLoaderOrAction("loader", fetchRequest, match, matches, manifest, mapRouteProperties, basename)
                        ];
                    case 1:
                        result = _state.sent();
                        if (!isDeferredResult(result)) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            resolveDeferredData(result, fetchRequest.signal, true)
                        ];
                    case 2:
                        result = _state.sent() || result;
                        _state.label = 3;
                    case 3:
                        // We can delete this so long as we weren't aborted by our our own fetcher
                        // re-load which would have put _new_ controller is in fetchControllers
                        if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
                        if (fetchRequest.signal.aborted) return [
                            2
                        ];
                        if (!isRedirectResult(result)) return [
                            3,
                            6
                        ];
                        if (!(pendingNavigationLoadId > originatingLoadId)) return [
                            3,
                            4
                        ];
                        doneFetcher = getDoneFetcher(undefined);
                        state.fetchers.set(key, doneFetcher);
                        updateState({
                            fetchers: new Map(state.fetchers)
                        });
                        return [
                            2
                        ];
                    case 4:
                        fetchRedirectIds.add(key);
                        return [
                            4,
                            startRedirectNavigation(state, result)
                        ];
                    case 5:
                        _state.sent();
                        return [
                            2
                        ];
                    case 6:
                        // Process any non-redirect errors thrown
                        if (isErrorResult(result)) {
                            boundaryMatch = findNearestBoundary(state.matches, routeId);
                            state.fetchers.delete(key);
                            // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
                            // do we need to behave any differently with our non-redirect errors?
                            // What if it was a non-redirect Response?
                            updateState({
                                fetchers: new Map(state.fetchers),
                                errors: (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, boundaryMatch.route.id, result.error)
                            });
                            return [
                                2
                            ];
                        }
                        invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
                        doneFetcher1 = getDoneFetcher(result.data);
                        state.fetchers.set(key, doneFetcher1);
                        updateState({
                            fetchers: new Map(state.fetchers)
                        });
                        return [
                            2
                        ];
                }
            });
        });
        return _handleFetcherLoader.apply(this, arguments);
    }
    function startRedirectNavigation(state, redirect, _temp) {
        return _startRedirectNavigation.apply(this, arguments);
    }
    function _startRedirectNavigation() {
        _startRedirectNavigation = /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */ (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(state, redirect, _temp) {
            var _ref, submission, fetcherSubmission, replace, redirectLocation, isDocumentReload, url, redirectHistoryAction, _state_navigation, formMethod, formAction, formEncType, activeSubmission, overrideNavigation;
            return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ref = _temp === void 0 ? {} : _temp, submission = _ref.submission, fetcherSubmission = _ref.fetcherSubmission, replace = _ref.replace;
                        if (redirect.revalidate) isRevalidationRequired = true;
                        redirectLocation = createLocation(state.location, redirect.location, {
                            _isRedirect: true
                        });
                        invariant(redirectLocation, "Expected a location on the redirect navigation");
                        if (isBrowser) {
                            isDocumentReload = false;
                            if (redirect.reloadDocument) // Hard reload if the response contained X-Remix-Reload-Document
                            isDocumentReload = true;
                            else if (ABSOLUTE_URL_REGEX.test(redirect.location)) {
                                url = init.history.createURL(redirect.location);
                                isDocumentReload = // Hard reload if it's an absolute URL to a new origin
                                url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
                                stripBasename(url.pathname, basename) == null;
                            }
                            if (isDocumentReload) {
                                if (replace) routerWindow.location.replace(redirect.location);
                                else routerWindow.location.assign(redirect.location);
                                return [
                                    2
                                ];
                            }
                        }
                        // There's no need to abort on redirects, since we don't detect the
                        // redirect until the action/loaders have settled
                        pendingNavigationController = null;
                        redirectHistoryAction = replace === true ? Action.Replace : Action.Push;
                        _state_navigation = state.navigation, formMethod = _state_navigation.formMethod, formAction = _state_navigation.formAction, formEncType = _state_navigation.formEncType;
                        if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) submission = getSubmissionFromNavigation(state.navigation);
                        activeSubmission = submission || fetcherSubmission;
                        if (!(redirectPreserveMethodStatusCodes.has(redirect.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod))) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            startNavigation(redirectHistoryAction, redirectLocation, {
                                submission: _extends({}, activeSubmission, {
                                    formAction: redirect.location
                                }),
                                // Preserve this flag across redirects
                                preventScrollReset: pendingPreventScrollReset
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 2:
                        overrideNavigation = getLoadingNavigation(redirectLocation, submission);
                        return [
                            4,
                            startNavigation(redirectHistoryAction, redirectLocation, {
                                overrideNavigation: overrideNavigation,
                                // Send fetcher submissions through for shouldRevalidate
                                fetcherSubmission: fetcherSubmission,
                                // Preserve this flag across redirects
                                preventScrollReset: pendingPreventScrollReset
                            })
                        ];
                    case 3:
                        _state.sent();
                        _state.label = 4;
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return _startRedirectNavigation.apply(this, arguments);
    }
    function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
        return _callLoadersAndMaybeResolveData.apply(this, arguments);
    }
    function _callLoadersAndMaybeResolveData() {
        _callLoadersAndMaybeResolveData = (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
            var results, loaderResults, fetcherResults;
            return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            Promise.all((0, _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8_._)(matchesToLoad.map(function(match) {
                                return callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename);
                            })).concat((0, _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8_._)(fetchersToLoad.map(function(f) {
                                if (f.matches && f.match && f.controller) return callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, f.controller.signal), f.match, f.matches, manifest, mapRouteProperties, basename);
                                else {
                                    var error = {
                                        type: ResultType.error,
                                        error: getInternalRouterError(404, {
                                            pathname: f.path
                                        })
                                    };
                                    return error;
                                }
                            }))))
                        ];
                    case 1:
                        results = _state.sent();
                        loaderResults = results.slice(0, matchesToLoad.length);
                        fetcherResults = results.slice(matchesToLoad.length);
                        return [
                            4,
                            Promise.all([
                                resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(function() {
                                    return request.signal;
                                }), false, state.loaderData),
                                resolveDeferredResults(currentMatches, fetchersToLoad.map(function(f) {
                                    return f.match;
                                }), fetcherResults, fetchersToLoad.map(function(f) {
                                    return f.controller ? f.controller.signal : null;
                                }), true)
                            ])
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2,
                            {
                                results: results,
                                loaderResults: loaderResults,
                                fetcherResults: fetcherResults
                            }
                        ];
                }
            });
        });
        return _callLoadersAndMaybeResolveData.apply(this, arguments);
    }
    router = {
        get basename () {
            return basename;
        },
        get state () {
            return state;
        },
        get routes () {
            return dataRoutes;
        },
        initialize: initialize,
        subscribe: subscribe,
        enableScrollRestoration: enableScrollRestoration,
        navigate: navigate,
        fetch: fetch,
        revalidate: revalidate,
        // Passthrough to history-aware createHref used by useHref so we get proper
        // hash-aware URLs in DOM paths
        createHref: function(to) {
            return init.history.createHref(to);
        },
        encodeLocation: function(to) {
            return init.history.encodeLocation(to);
        },
        getFetcher: getFetcher,
        deleteFetcher: deleteFetcher,
        dispose: dispose,
        getBlocker: getBlocker,
        deleteBlocker: deleteBlocker,
        _internalFetchControllers: fetchControllers,
        _internalActiveDeferreds: activeDeferreds,
        // TODO: Remove setRoutes, it's temporary to avoid dealing with
        // updating the tree while validating the update algorithm.
        _internalSetRoutes: _internalSetRoutes
    };
    return router;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
var UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
    invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
    var manifest = {};
    var basename = (opts ? opts.basename : null) || "/";
    var mapRouteProperties;
    if (opts != null && opts.mapRouteProperties) mapRouteProperties = opts.mapRouteProperties;
    else if (opts != null && opts.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        var detectErrorBoundary = opts.detectErrorBoundary;
        mapRouteProperties = function(route) {
            return {
                hasErrorBoundary: detectErrorBoundary(route)
            };
        };
    } else mapRouteProperties = defaultMapRouteProperties;
    var dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, undefined, manifest);
    function query(request, _temp2) {
        return _query.apply(this, arguments);
    }
    function _query() {
        _query = /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */ (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(request, _temp2) {
            var requestContext, url, method, location, matches, error, _getShortCircuitMatches, methodNotAllowedMatches, route, error1, _getShortCircuitMatches1, notFoundMatches, route1, result;
            return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        requestContext = (_temp2 === void 0 ? {} : _temp2).requestContext;
                        url = new URL(request.url);
                        method = request.method;
                        location = createLocation("", createPath(url), null, "default");
                        matches = matchRoutes(dataRoutes, location, basename);
                        // SSR supports HEAD requests while SPA doesn't
                        if (!isValidMethod(method) && method !== "HEAD") {
                            error = getInternalRouterError(405, {
                                method: method
                            });
                            _getShortCircuitMatches = getShortCircuitMatches(dataRoutes), methodNotAllowedMatches = _getShortCircuitMatches.matches, route = _getShortCircuitMatches.route;
                            return [
                                2,
                                {
                                    basename: basename,
                                    location: location,
                                    matches: methodNotAllowedMatches,
                                    loaderData: {},
                                    actionData: null,
                                    errors: (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, route.id, error),
                                    statusCode: error.status,
                                    loaderHeaders: {},
                                    actionHeaders: {},
                                    activeDeferreds: null
                                }
                            ];
                        } else if (!matches) {
                            error1 = getInternalRouterError(404, {
                                pathname: location.pathname
                            });
                            _getShortCircuitMatches1 = getShortCircuitMatches(dataRoutes), notFoundMatches = _getShortCircuitMatches1.matches, route1 = _getShortCircuitMatches1.route;
                            return [
                                2,
                                {
                                    basename: basename,
                                    location: location,
                                    matches: notFoundMatches,
                                    loaderData: {},
                                    actionData: null,
                                    errors: (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, route1.id, error1),
                                    statusCode: error1.status,
                                    loaderHeaders: {},
                                    actionHeaders: {},
                                    activeDeferreds: null
                                }
                            ];
                        }
                        return [
                            4,
                            queryImpl(request, location, matches, requestContext)
                        ];
                    case 1:
                        result = _state.sent();
                        if (isResponse(result)) return [
                            2,
                            result
                        ];
                        // When returning StaticHandlerContext, we patch back in the location here
                        // since we need it for React Context.  But this helps keep our submit and
                        // loadRouteData operating on a Request instead of a Location
                        return [
                            2,
                            _extends({
                                location: location,
                                basename: basename
                            }, result)
                        ];
                }
            });
        });
        return _query.apply(this, arguments);
    }
    function queryRoute(request, _temp3) {
        return _queryRoute.apply(this, arguments);
    }
    function _queryRoute() {
        _queryRoute = /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */ (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(request, _temp3) {
            var _ref, routeId, requestContext, url, method, location, matches, match, result, error, _result$activeDeferre, data;
            return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ref = _temp3 === void 0 ? {} : _temp3, routeId = _ref.routeId, requestContext = _ref.requestContext;
                        url = new URL(request.url);
                        method = request.method;
                        location = createLocation("", createPath(url), null, "default");
                        matches = matchRoutes(dataRoutes, location, basename);
                        // SSR supports HEAD requests while SPA doesn't
                        if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") throw getInternalRouterError(405, {
                            method: method
                        });
                        else if (!matches) throw getInternalRouterError(404, {
                            pathname: location.pathname
                        });
                        match = routeId ? matches.find(function(m) {
                            return m.route.id === routeId;
                        }) : getTargetMatch(matches, location);
                        if (routeId && !match) throw getInternalRouterError(403, {
                            pathname: location.pathname,
                            routeId: routeId
                        });
                        else if (!match) // This should never hit I don't think?
                        throw getInternalRouterError(404, {
                            pathname: location.pathname
                        });
                        return [
                            4,
                            queryImpl(request, location, matches, requestContext, match)
                        ];
                    case 1:
                        result = _state.sent();
                        if (isResponse(result)) return [
                            2,
                            result
                        ];
                        error = result.errors ? Object.values(result.errors)[0] : undefined;
                        if (error !== undefined) // If we got back result.errors, that means the loader/action threw
                        // _something_ that wasn't a Response, but it's not guaranteed/required
                        // to be an `instanceof Error` either, so we have to use throw here to
                        // preserve the "error" state outside of queryImpl.
                        throw error;
                        // Pick off the right state value to return
                        if (result.actionData) return [
                            2,
                            Object.values(result.actionData)[0]
                        ];
                        if (result.loaderData) {
                            data = Object.values(result.loaderData)[0];
                            if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
                            return [
                                2,
                                data
                            ];
                        }
                        return [
                            2,
                            undefined
                        ];
                }
            });
        });
        return _queryRoute.apply(this, arguments);
    }
    function queryImpl(request, location, matches, requestContext, routeMatch) {
        return _queryImpl.apply(this, arguments);
    }
    function _queryImpl() {
        _queryImpl = (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(request, location, matches, requestContext, routeMatch) {
            var result, result1, e;
            return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            5,
                            ,
                            6
                        ]);
                        if (!isMutationMethod(request.method.toLowerCase())) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null)
                        ];
                    case 2:
                        result = _state.sent();
                        return [
                            2,
                            result
                        ];
                    case 3:
                        return [
                            4,
                            loadRouteData(request, matches, requestContext, routeMatch)
                        ];
                    case 4:
                        result1 = _state.sent();
                        return [
                            2,
                            isResponse(result1) ? result1 : _extends({}, result1, {
                                actionData: null,
                                actionHeaders: {}
                            })
                        ];
                    case 5:
                        e = _state.sent();
                        // If the user threw/returned a Response in callLoaderOrAction, we throw
                        // it to bail out and then return or throw here based on whether the user
                        // returned or threw
                        if (isQueryRouteResponse(e)) {
                            if (e.type === ResultType.error) throw e.response;
                            return [
                                2,
                                e.response
                            ];
                        }
                        // Redirects are always returned since they don't propagate to catch
                        // boundaries
                        if (isRedirectResponse(e)) return [
                            2,
                            e
                        ];
                        throw e;
                    case 6:
                        return [
                            2
                        ];
                }
            });
        });
        return _queryImpl.apply(this, arguments);
    }
    function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
        return _submit.apply(this, arguments);
    }
    function _submit() {
        _submit = (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(request, matches, actionMatch, requestContext, isRouteRequest) {
            var result, error, method, error1, boundaryMatch, context, loaderRequest, context1;
            return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!(!actionMatch.route.action && !actionMatch.route.lazy)) return [
                            3,
                            1
                        ];
                        error = getInternalRouterError(405, {
                            method: request.method,
                            pathname: new URL(request.url).pathname,
                            routeId: actionMatch.route.id
                        });
                        if (isRouteRequest) throw error;
                        result = {
                            type: ResultType.error,
                            error: error
                        };
                        return [
                            3,
                            3
                        ];
                    case 1:
                        return [
                            4,
                            callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename, {
                                isStaticRequest: true,
                                isRouteRequest: isRouteRequest,
                                requestContext: requestContext
                            })
                        ];
                    case 2:
                        result = _state.sent();
                        if (request.signal.aborted) {
                            method = isRouteRequest ? "queryRoute" : "query";
                            throw new Error(method + "() call aborted: " + request.method + " " + request.url);
                        }
                        _state.label = 3;
                    case 3:
                        if (isRedirectResult(result)) // Uhhhh - this should never happen, we should always throw these from
                        // callLoaderOrAction, but the type narrowing here keeps TS happy and we
                        // can get back on the "throw all redirect responses" train here should
                        // this ever happen :/
                        throw new Response(null, {
                            status: result.status,
                            headers: {
                                Location: result.location
                            }
                        });
                        if (isDeferredResult(result)) {
                            error1 = getInternalRouterError(400, {
                                type: "defer-action"
                            });
                            if (isRouteRequest) throw error1;
                            result = {
                                type: ResultType.error,
                                error: error1
                            };
                        }
                        if (isRouteRequest) {
                            // Note: This should only be non-Response values if we get here, since
                            // isRouteRequest should throw any Response received in callLoaderOrAction
                            if (isErrorResult(result)) throw result.error;
                            return [
                                2,
                                {
                                    matches: [
                                        actionMatch
                                    ],
                                    loaderData: {},
                                    actionData: (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, actionMatch.route.id, result.data),
                                    errors: null,
                                    // Note: statusCode + headers are unused here since queryRoute will
                                    // return the raw Response or value
                                    statusCode: 200,
                                    loaderHeaders: {},
                                    actionHeaders: {},
                                    activeDeferreds: null
                                }
                            ];
                        }
                        if (!isErrorResult(result)) return [
                            3,
                            5
                        ];
                        boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
                        return [
                            4,
                            loadRouteData(request, matches, requestContext, undefined, (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, boundaryMatch.route.id, result.error))
                        ];
                    case 4:
                        context = _state.sent();
                        // action status codes take precedence over loader status codes
                        return [
                            2,
                            _extends({}, context, {
                                statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
                                actionData: null,
                                actionHeaders: _extends({}, result.headers ? (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, actionMatch.route.id, result.headers) : {})
                            })
                        ];
                    case 5:
                        loaderRequest = new Request(request.url, {
                            headers: request.headers,
                            redirect: request.redirect,
                            signal: request.signal
                        });
                        return [
                            4,
                            loadRouteData(loaderRequest, matches, requestContext)
                        ];
                    case 6:
                        context1 = _state.sent();
                        return [
                            2,
                            _extends({}, context1, result.statusCode ? {
                                statusCode: result.statusCode
                            } : {}, {
                                actionData: (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, actionMatch.route.id, result.data),
                                actionHeaders: _extends({}, result.headers ? (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, actionMatch.route.id, result.headers) : {})
                            })
                        ];
                }
            });
        });
        return _submit.apply(this, arguments);
    }
    function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
        return _loadRouteData.apply(this, arguments);
    }
    function _loadRouteData() {
        _loadRouteData = (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(request, matches, requestContext, routeMatch, pendingActionError) {
            var isRouteRequest, requestMatches, matchesToLoad, results, method, activeDeferreds, context, executedLoaders;
            return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        isRouteRequest = routeMatch != null;
                        // Short circuit if we have no loaders to run (queryRoute())
                        if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) throw getInternalRouterError(400, {
                            method: request.method,
                            pathname: new URL(request.url).pathname,
                            routeId: routeMatch == null ? void 0 : routeMatch.route.id
                        });
                        requestMatches = routeMatch ? [
                            routeMatch
                        ] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
                        matchesToLoad = requestMatches.filter(function(m) {
                            return m.route.loader || m.route.lazy;
                        });
                        // Short circuit if we have no loaders to run (query())
                        if (matchesToLoad.length === 0) return [
                            2,
                            {
                                matches: matches,
                                // Add a null for all matched routes for proper revalidation on the client
                                loaderData: matches.reduce(function(acc, m) {
                                    return Object.assign(acc, (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, m.route.id, null));
                                }, {}),
                                errors: pendingActionError || null,
                                statusCode: 200,
                                loaderHeaders: {},
                                activeDeferreds: null
                            }
                        ];
                        return [
                            4,
                            Promise.all((0, _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8_._)(matchesToLoad.map(function(match) {
                                return callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename, {
                                    isStaticRequest: true,
                                    isRouteRequest: isRouteRequest,
                                    requestContext: requestContext
                                });
                            })))
                        ];
                    case 1:
                        results = _state.sent();
                        if (request.signal.aborted) {
                            method = isRouteRequest ? "queryRoute" : "query";
                            throw new Error(method + "() call aborted: " + request.method + " " + request.url);
                        }
                        activeDeferreds = new Map();
                        context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds);
                        executedLoaders = new Set(matchesToLoad.map(function(match) {
                            return match.route.id;
                        }));
                        matches.forEach(function(match) {
                            if (!executedLoaders.has(match.route.id)) context.loaderData[match.route.id] = null;
                        });
                        return [
                            2,
                            _extends({}, context, {
                                matches: matches,
                                activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
                            })
                        ];
                }
            });
        });
        return _loadRouteData.apply(this, arguments);
    }
    return {
        dataRoutes: dataRoutes,
        query: query,
        queryRoute: queryRoute
    };
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */ function getStaticContextFromError(routes, context, error) {
    var newContext = _extends({}, context, {
        statusCode: 500,
        errors: (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, context._deepestRenderedBoundaryId || routes[0].id, error)
    });
    return newContext;
}
function isSubmissionNavigation(opts) {
    return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
}
function normalizeTo(location, matches, basename, prependBasename, to, fromRouteId, relative) {
    var contextualMatches;
    var activeRouteMatch;
    if (fromRouteId != null && relative !== "path") {
        // Grab matches up to the calling route so our route-relative logic is
        // relative to the correct source route.  When using relative:path,
        // fromRouteId is ignored since that is always relative to the current
        // location path
        contextualMatches = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var match = _step.value;
                contextualMatches.push(match);
                if (match.route.id === fromRouteId) {
                    activeRouteMatch = match;
                    break;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) _iterator.return();
            } finally{
                if (_didIteratorError) throw _iteratorError;
            }
        }
    } else {
        contextualMatches = matches;
        activeRouteMatch = matches[matches.length - 1];
    }
    // Resolve the relative path
    var path = resolveTo(to ? to : ".", getPathContributingMatches(contextualMatches).map(function(m) {
        return m.pathnameBase;
    }), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
    // When `to` is not specified we inherit search/hash from the current
    // location, unlike when to="." and we just inherit the path.
    // See https://github.com/remix-run/remix/issues/927
    if (to == null) {
        path.search = location.search;
        path.hash = location.hash;
    }
    // Add an ?index param for matched index routes if we don't already have one
    if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !hasNakedIndexQuery(path.search)) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    // If we're operating within a basename, prepend it to the pathname.  If
    // this is a root navigation, then just use the raw basename which allows
    // the basename to have full control over the presence of a trailing slash
    // on root actions
    if (prependBasename && basename !== "/") path.pathname = path.pathname === "/" ? basename : joinPaths([
        basename,
        path.pathname
    ]);
    return createPath(path);
}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
    // Return location verbatim on non-submission navigations
    if (!opts || !isSubmissionNavigation(opts)) return {
        path: path
    };
    if (opts.formMethod && !isValidMethod(opts.formMethod)) return {
        path: path,
        error: getInternalRouterError(405, {
            method: opts.formMethod
        })
    };
    var getInvalidBodyError = function() {
        return {
            path: path,
            error: getInternalRouterError(400, {
                type: "invalid-body"
            })
        };
    };
    // Create a Submission on non-GET navigations
    var rawFormMethod = opts.formMethod || "get";
    var formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
    var formAction = stripHashFromPath(path);
    if (opts.body !== undefined) {
        if (opts.formEncType === "text/plain") {
            // text only support POST/PUT/PATCH/DELETE submissions
            if (!isMutationMethod(formMethod)) return getInvalidBodyError();
            var text = typeof opts.body === "string" ? opts.body : (0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_5_._)(opts.body, FormData) || (0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_5_._)(opts.body, URLSearchParams) ? // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
            Array.from(opts.body.entries()).reduce(function(acc, _ref3) {
                var _$_ref3 = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6_._)(_ref3, 2), name = _$_ref3[0], value = _$_ref3[1];
                return "" + acc + name + "=" + value + "\n";
            }, "") : String(opts.body);
            return {
                path: path,
                submission: {
                    formMethod: formMethod,
                    formAction: formAction,
                    formEncType: opts.formEncType,
                    formData: undefined,
                    json: undefined,
                    text: text
                }
            };
        } else if (opts.formEncType === "application/json") {
            // json only supports POST/PUT/PATCH/DELETE submissions
            if (!isMutationMethod(formMethod)) return getInvalidBodyError();
            try {
                var json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
                return {
                    path: path,
                    submission: {
                        formMethod: formMethod,
                        formAction: formAction,
                        formEncType: opts.formEncType,
                        formData: undefined,
                        json: json,
                        text: undefined
                    }
                };
            } catch (e) {
                return getInvalidBodyError();
            }
        }
    }
    invariant(typeof FormData === "function", "FormData is not available in this environment");
    var searchParams;
    var formData;
    if (opts.formData) {
        searchParams = convertFormDataToSearchParams(opts.formData);
        formData = opts.formData;
    } else if ((0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_5_._)(opts.body, FormData)) {
        searchParams = convertFormDataToSearchParams(opts.body);
        formData = opts.body;
    } else if ((0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_5_._)(opts.body, URLSearchParams)) {
        searchParams = opts.body;
        formData = convertSearchParamsToFormData(searchParams);
    } else if (opts.body == null) {
        searchParams = new URLSearchParams();
        formData = new FormData();
    } else try {
        searchParams = new URLSearchParams(opts.body);
        formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
        return getInvalidBodyError();
    }
    var submission = {
        formMethod: formMethod,
        formAction: formAction,
        formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
        formData: formData,
        json: undefined,
        text: undefined
    };
    if (isMutationMethod(submission.formMethod)) return {
        path: path,
        submission: submission
    };
    // Flatten submission onto URLSearchParams for GET submissions
    var parsedPath = parsePath(path);
    // On GET navigation submissions we can drop the ?index param from the
    // resulting location since all loaders will run.  But fetcher GET submissions
    // only run a single loader so we need to preserve any incoming ?index params
    if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) searchParams.append("index", "");
    parsedPath.search = "?" + searchParams;
    return {
        path: createPath(parsedPath),
        submission: submission
    };
}
// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
function getLoaderMatchesUntilBoundary(matches, boundaryId) {
    var boundaryMatches = matches;
    if (boundaryId) {
        var index = matches.findIndex(function(m) {
            return m.route.id === boundaryId;
        });
        if (index >= 0) boundaryMatches = matches.slice(0, index);
    }
    return boundaryMatches;
}
function getMatchesToLoad(history, state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError) {
    var actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
    var currentUrl = history.createURL(state.location);
    var nextUrl = history.createURL(location);
    // Pick navigation matches that are net-new or qualify for revalidation
    var boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
    var boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
    var navigationMatches = boundaryMatches.filter(function(match, index) {
        if (match.route.lazy) // We haven't loaded this route yet so we don't know if it's got a loader!
        return true;
        if (match.route.loader == null) return false;
        // Always call the loader on new route instances and pending defer cancellations
        if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(function(id) {
            return id === match.route.id;
        })) return true;
        // This is the default implementation for when we revalidate.  If the route
        // provides it's own implementation, then we give them full control but
        // provide this value so they can leverage it if needed after they check
        // their own specific use cases
        var currentRouteMatch = state.matches[index];
        var nextRouteMatch = match;
        return shouldRevalidateLoader(match, _extends({
            currentUrl: currentUrl,
            currentParams: currentRouteMatch.params,
            nextUrl: nextUrl,
            nextParams: nextRouteMatch.params
        }, submission, {
            actionResult: actionResult,
            defaultShouldRevalidate: // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
            isRevalidationRequired || // Clicked the same link, resubmitted a GET form
            currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
            currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
        }));
    });
    // Pick fetcher.loads that need to be revalidated
    var revalidatingFetchers = [];
    fetchLoadMatches.forEach(function(f, key) {
        // Don't revalidate if fetcher won't be present in the subsequent render
        if (!matches.some(function(m) {
            return m.route.id === f.routeId;
        })) return;
        var fetcherMatches = matchRoutes(routesToUse, f.path, basename);
        // If the fetcher path no longer matches, push it in with null matches so
        // we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
        // currently only a use-case for Remix HMR where the route tree can change
        // at runtime and remove a route previously loaded via a fetcher
        if (!fetcherMatches) {
            revalidatingFetchers.push({
                key: key,
                routeId: f.routeId,
                path: f.path,
                matches: null,
                match: null,
                controller: null
            });
            return;
        }
        // Revalidating fetchers are decoupled from the route matches since they
        // load from a static href.  They revalidate based on explicit revalidation
        // (submission, useRevalidator, or X-Remix-Revalidate)
        var fetcher = state.fetchers.get(key);
        var fetcherMatch = getTargetMatch(fetcherMatches, f.path);
        var shouldRevalidate = false;
        if (fetchRedirectIds.has(key)) // Never trigger a revalidation of an actively redirecting fetcher
        shouldRevalidate = false;
        else if (cancelledFetcherLoads.includes(key)) // Always revalidate if the fetcher was cancelled
        shouldRevalidate = true;
        else if (fetcher && fetcher.state !== "idle" && fetcher.data === undefined) // If the fetcher hasn't ever completed loading yet, then this isn't a
        // revalidation, it would just be a brand new load if an explicit
        // revalidation is required
        shouldRevalidate = isRevalidationRequired;
        else // Otherwise fall back on any user-defined shouldRevalidate, defaulting
        // to explicit revalidations only
        shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
            currentUrl: currentUrl,
            currentParams: state.matches[state.matches.length - 1].params,
            nextUrl: nextUrl,
            nextParams: matches[matches.length - 1].params
        }, submission, {
            actionResult: actionResult,
            defaultShouldRevalidate: isRevalidationRequired
        }));
        if (shouldRevalidate) revalidatingFetchers.push({
            key: key,
            routeId: f.routeId,
            path: f.path,
            matches: fetcherMatches,
            match: fetcherMatch,
            controller: new AbortController()
        });
    });
    return [
        navigationMatches,
        revalidatingFetchers
    ];
}
function isNewLoader(currentLoaderData, currentMatch, match) {
    var isNew = // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id;
    // Handle the case that we don't have data for a re-used route, potentially
    // from a prior error or from a cancelled pending deferred
    var isMissingData = currentLoaderData[match.route.id] === undefined;
    // Always load if this is a net-new route or we don't yet have data
    return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
    var currentPath = currentMatch.route.path;
    return(// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]);
}
function shouldRevalidateLoader(loaderMatch, arg) {
    if (loaderMatch.route.shouldRevalidate) {
        var routeChoice = loaderMatch.route.shouldRevalidate(arg);
        if (typeof routeChoice === "boolean") return routeChoice;
    }
    return arg.defaultShouldRevalidate;
}
function loadLazyRouteModule(route, mapRouteProperties, manifest) {
    return _loadLazyRouteModule.apply(this, arguments);
}
function _loadLazyRouteModule() {
    _loadLazyRouteModule = /**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */ (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(route, mapRouteProperties, manifest) {
        var lazyRoute, routeToUpdate, routeUpdates, lazyRouteProperty, staticRouteValue, isPropertyStaticallyDefined;
        return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!route.lazy) return [
                        2
                    ];
                    return [
                        4,
                        route.lazy()
                    ];
                case 1:
                    lazyRoute = _state.sent();
                    // If the lazy route function was executed and removed by another parallel
                    // call then we can return - first lazy() to finish wins because the return
                    // value of lazy is expected to be static
                    if (!route.lazy) return [
                        2
                    ];
                    routeToUpdate = manifest[route.id];
                    invariant(routeToUpdate, "No route found in manifest");
                    routeUpdates = {};
                    for(var lazyRouteProperty in lazyRoute){
                        staticRouteValue = routeToUpdate[lazyRouteProperty];
                        isPropertyStaticallyDefined = staticRouteValue !== undefined && // This property isn't static since it should always be updated based
                        // on the route updates
                        lazyRouteProperty !== "hasErrorBoundary";
                        warning(!isPropertyStaticallyDefined, "Route \"" + routeToUpdate.id + "\" has a static property \"" + lazyRouteProperty + "\" " + "defined but its lazy function is also returning a value for this property. " + ("The lazy route property \"" + lazyRouteProperty + "\" will be ignored."));
                        if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
                    }
                    // Mutate the route with the provided updates.  Do this first so we pass
                    // the updated version to mapRouteProperties
                    Object.assign(routeToUpdate, routeUpdates);
                    // Mutate the `hasErrorBoundary` property on the route based on the route
                    // updates and remove the `lazy` function so we don't resolve the lazy
                    // route again.
                    Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
                        lazy: undefined
                    }));
                    return [
                        2
                    ];
            }
        });
    });
    return _loadLazyRouteModule.apply(this, arguments);
}
function callLoaderOrAction(type, request, match, matches, manifest, mapRouteProperties, basename, opts) {
    return _callLoaderOrAction.apply(this, arguments);
}
function _callLoaderOrAction() {
    _callLoaderOrAction = (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(type, request, match, matches, manifest, mapRouteProperties, basename, opts) {
        var resultType, result, onReject, runHandler, handler, handlerError, values, url, pathname, url1, pathname1, e, status, location, currentUrl, url2, isSameBasename, queryRouteResponse, data, contentType, _result$init, _result$init2;
        return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (opts === void 0) opts = {};
                    runHandler = function(handler) {
                        // Setup a promise we can race against so that abort signals short circuit
                        var reject;
                        var abortPromise = new Promise(function(_, r) {
                            return reject = r;
                        });
                        onReject = function() {
                            return reject();
                        };
                        request.signal.addEventListener("abort", onReject);
                        return Promise.race([
                            handler({
                                request: request,
                                params: match.params,
                                context: opts.requestContext
                            }),
                            abortPromise
                        ]);
                    };
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        12,
                        13,
                        14
                    ]);
                    handler = match.route[type];
                    if (!match.route.lazy) return [
                        3,
                        8
                    ];
                    if (!handler) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        Promise.all([
                            // If the handler throws, don't let it immediately bubble out,
                            // since we need to let the lazy() execution finish so we know if this
                            // route has a boundary that can handle the error
                            runHandler(handler).catch(function(e) {
                                handlerError = e;
                            }),
                            loadLazyRouteModule(match.route, mapRouteProperties, manifest)
                        ])
                    ];
                case 2:
                    values = _state.sent();
                    if (handlerError) throw handlerError;
                    result = values[0];
                    return [
                        3,
                        7
                    ];
                case 3:
                    // Load lazy route module, then run any returned handler
                    return [
                        4,
                        loadLazyRouteModule(match.route, mapRouteProperties, manifest)
                    ];
                case 4:
                    _state.sent();
                    handler = match.route[type];
                    if (!handler) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        runHandler(handler)
                    ];
                case 5:
                    // Handler still run even if we got interrupted to maintain consistency
                    // with un-abortable behavior of handler execution on non-lazy or
                    // previously-lazy-loaded routes
                    result = _state.sent();
                    return [
                        3,
                        7
                    ];
                case 6:
                    if (type === "action") {
                        url = new URL(request.url);
                        pathname = url.pathname + url.search;
                        throw getInternalRouterError(405, {
                            method: request.method,
                            pathname: pathname,
                            routeId: match.route.id
                        });
                    } else // lazy() route has no loader to run.  Short circuit here so we don't
                    // hit the invariant below that errors on returning undefined.
                    return [
                        2,
                        {
                            type: ResultType.data,
                            data: undefined
                        }
                    ];
                    _state.label = 7;
                case 7:
                    return [
                        3,
                        11
                    ];
                case 8:
                    if (!!handler) return [
                        3,
                        9
                    ];
                    url1 = new URL(request.url);
                    pathname1 = url1.pathname + url1.search;
                    throw getInternalRouterError(404, {
                        pathname: pathname1
                    });
                case 9:
                    return [
                        4,
                        runHandler(handler)
                    ];
                case 10:
                    result = _state.sent();
                    _state.label = 11;
                case 11:
                    invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
                    return [
                        3,
                        14
                    ];
                case 12:
                    e = _state.sent();
                    resultType = ResultType.error;
                    result = e;
                    return [
                        3,
                        14
                    ];
                case 13:
                    if (onReject) request.signal.removeEventListener("abort", onReject);
                    return [
                        7
                    ];
                case 14:
                    if (!isResponse(result)) return [
                        3,
                        19
                    ];
                    status = result.status;
                    // Process redirects
                    if (redirectStatusCodes.has(status)) {
                        location = result.headers.get("Location");
                        invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
                        // Support relative routing in internal redirects
                        if (!ABSOLUTE_URL_REGEX.test(location)) location = normalizeTo(new URL(request.url), matches.slice(0, matches.indexOf(match) + 1), basename, true, location);
                        else if (!opts.isStaticRequest) {
                            currentUrl = new URL(request.url);
                            url2 = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
                            isSameBasename = stripBasename(url2.pathname, basename) != null;
                            if (url2.origin === currentUrl.origin && isSameBasename) location = url2.pathname + url2.search + url2.hash;
                        }
                        // Don't process redirects in the router during static requests requests.
                        // Instead, throw the Response and let the server handle it with an HTTP
                        // redirect.  We also update the Location header in place in this flow so
                        // basename and relative routing is taken into account
                        if (opts.isStaticRequest) {
                            result.headers.set("Location", location);
                            throw result;
                        }
                        return [
                            2,
                            {
                                type: ResultType.redirect,
                                status: status,
                                location: location,
                                revalidate: result.headers.get("X-Remix-Revalidate") !== null,
                                reloadDocument: result.headers.get("X-Remix-Reload-Document") !== null
                            }
                        ];
                    }
                    // For SSR single-route requests, we want to hand Responses back directly
                    // without unwrapping.  We do this with the QueryRouteResponse wrapper
                    // interface so we can know whether it was returned or thrown
                    if (opts.isRouteRequest) {
                        queryRouteResponse = {
                            type: resultType === ResultType.error ? ResultType.error : ResultType.data,
                            response: result
                        };
                        throw queryRouteResponse;
                    }
                    contentType = result.headers.get("Content-Type");
                    if (!(contentType && /\bapplication\/json\b/.test(contentType))) return [
                        3,
                        16
                    ];
                    return [
                        4,
                        result.json()
                    ];
                case 15:
                    data = _state.sent();
                    return [
                        3,
                        18
                    ];
                case 16:
                    return [
                        4,
                        result.text()
                    ];
                case 17:
                    data = _state.sent();
                    _state.label = 18;
                case 18:
                    if (resultType === ResultType.error) return [
                        2,
                        {
                            type: resultType,
                            error: new ErrorResponseImpl(status, result.statusText, data),
                            headers: result.headers
                        }
                    ];
                    return [
                        2,
                        {
                            type: ResultType.data,
                            data: data,
                            statusCode: result.status,
                            headers: result.headers
                        }
                    ];
                case 19:
                    if (resultType === ResultType.error) return [
                        2,
                        {
                            type: resultType,
                            error: result
                        }
                    ];
                    if (isDeferredData(result)) return [
                        2,
                        {
                            type: ResultType.deferred,
                            deferredData: result,
                            statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
                            headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
                        }
                    ];
                    return [
                        2,
                        {
                            type: ResultType.data,
                            data: result
                        }
                    ];
            }
        });
    });
    return _callLoaderOrAction.apply(this, arguments);
}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function createClientSideRequest(history, location, signal, submission) {
    var url = history.createURL(stripHashFromPath(location)).toString();
    var init = {
        signal: signal
    };
    if (submission && isMutationMethod(submission.formMethod)) {
        var formMethod = submission.formMethod, formEncType = submission.formEncType;
        // Didn't think we needed this but it turns out unlike other methods, patch
        // won't be properly normalized to uppercase and results in a 405 error.
        // See: https://fetch.spec.whatwg.org/#concept-method
        init.method = formMethod.toUpperCase();
        if (formEncType === "application/json") {
            init.headers = new Headers({
                "Content-Type": formEncType
            });
            init.body = JSON.stringify(submission.json);
        } else if (formEncType === "text/plain") // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
        init.body = submission.text;
        else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
        init.body = convertFormDataToSearchParams(submission.formData);
        else // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
        init.body = submission.formData;
    }
    return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
    var searchParams = new URLSearchParams();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = formData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6_._)(_step.value, 2), key = _step_value[0], value = _step_value[1];
            // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
            searchParams.append(key, typeof value === "string" ? value : value.name);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) _iterator.return();
        } finally{
            if (_didIteratorError) throw _iteratorError;
        }
    }
    return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
    var formData = new FormData();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = searchParams.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6_._)(_step.value, 2), key = _step_value[0], value = _step_value[1];
            formData.append(key, value);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) _iterator.return();
        } finally{
            if (_didIteratorError) throw _iteratorError;
        }
    }
    return formData;
}
function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
    // Fill in loaderData/errors from our loaders
    var loaderData = {};
    var errors = null;
    var statusCode;
    var foundError = false;
    var loaderHeaders = {};
    // Process loader results into state.loaderData/state.errors
    results.forEach(function(result, index) {
        var id = matchesToLoad[index].route.id;
        invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
        if (isErrorResult(result)) {
            // Look upwards from the matched route for the closest ancestor
            // error boundary, defaulting to the root match
            var boundaryMatch = findNearestBoundary(matches, id);
            var error = result.error;
            // If we have a pending action error, we report it at the highest-route
            // that throws a loader error, and then clear it out to indicate that
            // it was consumed
            if (pendingError) {
                error = Object.values(pendingError)[0];
                pendingError = undefined;
            }
            errors = errors || {};
            // Prefer higher error values if lower errors bubble to the same boundary
            if (errors[boundaryMatch.route.id] == null) errors[boundaryMatch.route.id] = error;
            // Clear our any prior loaderData for the throwing route
            loaderData[id] = undefined;
            // Once we find our first (highest) error, we set the status code and
            // prevent deeper status codes from overriding
            if (!foundError) {
                foundError = true;
                statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
            }
            if (result.headers) loaderHeaders[id] = result.headers;
        } else {
            if (isDeferredResult(result)) {
                activeDeferreds.set(id, result.deferredData);
                loaderData[id] = result.deferredData.data;
            } else loaderData[id] = result.data;
            // Error status codes always override success status codes, but if all
            // loaders are successful we take the deepest status code.
            if (result.statusCode != null && result.statusCode !== 200 && !foundError) statusCode = result.statusCode;
            if (result.headers) loaderHeaders[id] = result.headers;
        }
    });
    // If we didn't consume the pending action error (i.e., all loaders
    // resolved), then consume it here.  Also clear out any loaderData for the
    // throwing route
    if (pendingError) {
        errors = pendingError;
        loaderData[Object.keys(pendingError)[0]] = undefined;
    }
    return {
        loaderData: loaderData,
        errors: errors,
        statusCode: statusCode || 200,
        loaderHeaders: loaderHeaders
    };
}
function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
    var _processRouteLoaderData = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds), loaderData = _processRouteLoaderData.loaderData, errors = _processRouteLoaderData.errors;
    // Process results from our revalidating fetchers
    for(var index = 0; index < revalidatingFetchers.length; index++){
        var _revalidatingFetchers_index = revalidatingFetchers[index], key = _revalidatingFetchers_index.key, match = _revalidatingFetchers_index.match, controller = _revalidatingFetchers_index.controller;
        invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
        var result = fetcherResults[index];
        // Process fetcher non-redirect errors
        if (controller && controller.signal.aborted) continue;
        else if (isErrorResult(result)) {
            var boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
            if (!(errors && errors[boundaryMatch.route.id])) errors = _extends({}, errors, (0, _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_3_._)({}, boundaryMatch.route.id, result.error));
            state.fetchers.delete(key);
        } else if (isRedirectResult(result)) // Should never get here, redirects should get processed above, but we
        // keep this to type narrow to a success result in the else
        invariant(false, "Unhandled fetcher revalidation redirect");
        else if (isDeferredResult(result)) // Should never get here, deferred data should be awaited for fetchers
        // in resolveDeferredResults
        invariant(false, "Unhandled fetcher deferred data");
        else {
            var doneFetcher = getDoneFetcher(result.data);
            state.fetchers.set(key, doneFetcher);
        }
    }
    return {
        loaderData: loaderData,
        errors: errors
    };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
    var mergedLoaderData = _extends({}, newLoaderData);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var match = _step.value;
            var id = match.route.id;
            if (newLoaderData.hasOwnProperty(id)) {
                if (newLoaderData[id] !== undefined) mergedLoaderData[id] = newLoaderData[id];
            } else if (loaderData[id] !== undefined && match.route.loader) // Preserve existing keys not included in newLoaderData and where a loader
            // wasn't removed by HMR
            mergedLoaderData[id] = loaderData[id];
            if (errors && errors.hasOwnProperty(id)) break;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) _iterator.return();
        } finally{
            if (_didIteratorError) throw _iteratorError;
        }
    }
    return mergedLoaderData;
}
// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function findNearestBoundary(matches, routeId) {
    var eligibleMatches = routeId ? matches.slice(0, matches.findIndex(function(m) {
        return m.route.id === routeId;
    }) + 1) : (0, _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8_._)(matches);
    return eligibleMatches.reverse().find(function(m) {
        return m.route.hasErrorBoundary === true;
    }) || matches[0];
}
function getShortCircuitMatches(routes) {
    // Prefer a root layout route if present, otherwise shim in a route object
    var route = routes.find(function(r) {
        return r.index || !r.path || r.path === "/";
    }) || {
        id: "__shim-error-route__"
    };
    return {
        matches: [
            {
                params: {},
                pathname: "",
                pathnameBase: "",
                route: route
            }
        ],
        route: route
    };
}
function getInternalRouterError(status, _temp4) {
    var _ref = _temp4 === void 0 ? {} : _temp4, pathname = _ref.pathname, routeId = _ref.routeId, method = _ref.method, type = _ref.type;
    var statusText = "Unknown Server Error";
    var errorMessage = "Unknown @remix-run/router error";
    if (status === 400) {
        statusText = "Bad Request";
        if (method && pathname && routeId) errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
        else if (type === "defer-action") errorMessage = "defer() is not supported in actions";
        else if (type === "invalid-body") errorMessage = "Unable to encode submission body";
    } else if (status === 403) {
        statusText = "Forbidden";
        errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
    } else if (status === 404) {
        statusText = "Not Found";
        errorMessage = "No route matches URL \"" + pathname + "\"";
    } else if (status === 405) {
        statusText = "Method Not Allowed";
        if (method && pathname && routeId) errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
        else if (method) errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
    return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
// Find any returned redirect errors, starting from the lowest match
function findRedirect(results) {
    for(var i = results.length - 1; i >= 0; i--){
        var result = results[i];
        if (isRedirectResult(result)) return {
            result: result,
            idx: i
        };
    }
}
function stripHashFromPath(path) {
    var parsedPath = typeof path === "string" ? parsePath(path) : path;
    return createPath(_extends({}, parsedPath, {
        hash: ""
    }));
}
function isHashChangeOnly(a, b) {
    if (a.pathname !== b.pathname || a.search !== b.search) return false;
    if (a.hash === "") // /page -> /page#hash
    return b.hash !== "";
    else if (a.hash === b.hash) // /page#hash -> /page#hash
    return true;
    else if (b.hash !== "") // /page#hash -> /page#other
    return true;
    // If the hash is removed the browser will re-perform a request to the server
    // /page#hash -> /page
    return false;
}
function isDeferredResult(result) {
    return result.type === ResultType.deferred;
}
function isErrorResult(result) {
    return result.type === ResultType.error;
}
function isRedirectResult(result) {
    return (result && result.type) === ResultType.redirect;
}
function isDeferredData(value) {
    var deferred = value;
    return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
    return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(result) {
    if (!isResponse(result)) return false;
    var status = result.status;
    var location = result.headers.get("Location");
    return status >= 300 && status <= 399 && location != null;
}
function isQueryRouteResponse(obj) {
    return obj && isResponse(obj.response) && (obj.type === ResultType.data || obj.type === ResultType.error);
}
function isValidMethod(method) {
    return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
    return validMutationMethods.has(method.toLowerCase());
}
function resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
    return _resolveDeferredResults.apply(this, arguments);
}
function _resolveDeferredResults() {
    _resolveDeferredResults = (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
        var _loop, index;
        return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    _loop = function(index) {
                        var result, match, currentMatch, isRevalidatingLoader, signal;
                        return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    result = results[index];
                                    match = matchesToLoad[index];
                                    // If we don't have a match, then we can have a deferred result to do
                                    // anything with.  This is for revalidating fetchers where the route was
                                    // removed during HMR
                                    if (!match) return [
                                        2,
                                        "continue"
                                    ];
                                    currentMatch = currentMatches.find(function(m) {
                                        return m.route.id === match.route.id;
                                    });
                                    isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
                                    if (!(isDeferredResult(result) && (isFetcher || isRevalidatingLoader))) return [
                                        3,
                                        2
                                    ];
                                    signal = signals[index];
                                    invariant(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
                                    return [
                                        4,
                                        resolveDeferredData(result, signal, isFetcher).then(function(result) {
                                            if (result) results[index] = result || results[index];
                                        })
                                    ];
                                case 1:
                                    _state.sent();
                                    _state.label = 2;
                                case 2:
                                    return [
                                        2
                                    ];
                            }
                        });
                    };
                    index = 0;
                    _state.label = 1;
                case 1:
                    if (!(index < results.length)) return [
                        3,
                        4
                    ];
                    return [
                        5,
                        (0, _swc_helpers_ts_values__WEBPACK_IMPORTED_MODULE_12_._)(_loop(index))
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    index++;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _resolveDeferredResults.apply(this, arguments);
}
function resolveDeferredData(result, signal, unwrap) {
    return _resolveDeferredData.apply(this, arguments);
}
function _resolveDeferredData() {
    _resolveDeferredData = (0, _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0_._)(function(result, signal, unwrap) {
        var aborted;
        return (0, _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_11_._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (unwrap === void 0) unwrap = false;
                    return [
                        4,
                        result.deferredData.resolveData(signal)
                    ];
                case 1:
                    aborted = _state.sent();
                    if (aborted) return [
                        2
                    ];
                    if (unwrap) try {
                        return [
                            2,
                            {
                                type: ResultType.data,
                                data: result.deferredData.unwrappedData
                            }
                        ];
                    } catch (e) {
                        // Handle any TrackedPromise._error values encountered while unwrapping
                        return [
                            2,
                            {
                                type: ResultType.error,
                                error: e
                            }
                        ];
                    }
                    return [
                        2,
                        {
                            type: ResultType.data,
                            data: result.deferredData.data
                        }
                    ];
            }
        });
    });
    return _resolveDeferredData.apply(this, arguments);
}
function hasNakedIndexQuery(search) {
    return new URLSearchParams(search).getAll("index").some(function(v) {
        return v === "";
    });
}
function getTargetMatch(matches, location) {
    var search = typeof location === "string" ? parsePath(location).search : location.search;
    if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) // Return the leaf index route when index is present
    return matches[matches.length - 1];
    // Otherwise grab the deepest "path contributing" match (ignoring index and
    // pathless layout routes)
    var pathMatches = getPathContributingMatches(matches);
    return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
    var formMethod = navigation.formMethod, formAction = navigation.formAction, formEncType = navigation.formEncType, text = navigation.text, formData = navigation.formData, json = navigation.json;
    if (!formMethod || !formAction || !formEncType) return;
    if (text != null) return {
        formMethod: formMethod,
        formAction: formAction,
        formEncType: formEncType,
        formData: undefined,
        json: undefined,
        text: text
    };
    else if (formData != null) return {
        formMethod: formMethod,
        formAction: formAction,
        formEncType: formEncType,
        formData: formData,
        json: undefined,
        text: undefined
    };
    else if (json !== undefined) return {
        formMethod: formMethod,
        formAction: formAction,
        formEncType: formEncType,
        formData: undefined,
        json: json,
        text: undefined
    };
}
function getLoadingNavigation(location, submission) {
    if (submission) {
        var navigation = {
            state: "loading",
            location: location,
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text
        };
        return navigation;
    } else {
        var navigation1 = {
            state: "loading",
            location: location,
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined
        };
        return navigation1;
    }
}
function getSubmittingNavigation(location, submission) {
    var navigation = {
        state: "submitting",
        location: location,
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text
    };
    return navigation;
}
function getLoadingFetcher(submission, data) {
    if (submission) {
        var fetcher = {
            state: "loading",
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text,
            data: data
        };
        return fetcher;
    } else {
        var fetcher1 = {
            state: "loading",
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined,
            data: data
        };
        return fetcher1;
    }
}
function getSubmittingFetcher(submission, existingFetcher) {
    var fetcher = {
        state: "submitting",
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text,
        data: existingFetcher ? existingFetcher.data : undefined
    };
    return fetcher;
}
function getDoneFetcher(data) {
    var fetcher = {
        state: "idle",
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        json: undefined,
        text: undefined,
        data: data
    };
    return fetcher;
}
//#endregion
 //# sourceMappingURL=router.js.map
},
"./node_modules/.pnpm/react-router-dom@6.16.0_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  'AbortedDeferredError': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.AbortedDeferredError; },
  'Await': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.Await; },
  'MemoryRouter': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.MemoryRouter; },
  'Navigate': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.Navigate; },
  'NavigationType': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.NavigationType; },
  'Outlet': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.Outlet; },
  'Route': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.Route; },
  'Router': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.Router; },
  'RouterProvider': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.RouterProvider; },
  'Routes': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.Routes; },
  'UNSAFE_DataRouterContext': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_DataRouterContext; },
  'UNSAFE_DataRouterStateContext': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_DataRouterStateContext; },
  'UNSAFE_LocationContext': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_LocationContext; },
  'UNSAFE_NavigationContext': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_NavigationContext; },
  'UNSAFE_RouteContext': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_RouteContext; },
  'UNSAFE_useRouteId': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_useRouteId; },
  'createMemoryRouter': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.createMemoryRouter; },
  'createPath': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.createPath; },
  'createRoutesFromChildren': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.createRoutesFromChildren; },
  'createRoutesFromElements': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.createRoutesFromElements; },
  'defer': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.defer; },
  'generatePath': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.generatePath; },
  'isRouteErrorResponse': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.isRouteErrorResponse; },
  'json': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.json; },
  'matchPath': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.matchPath; },
  'matchRoutes': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.matchRoutes; },
  'parsePath': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.parsePath; },
  'redirect': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.redirect; },
  'redirectDocument': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.redirectDocument; },
  'renderMatches': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.renderMatches; },
  'resolvePath': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.resolvePath; },
  'unstable_useBlocker': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.unstable_useBlocker; },
  'useActionData': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useActionData; },
  'useAsyncError': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useAsyncError; },
  'useAsyncValue': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useAsyncValue; },
  'useHref': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useHref; },
  'useInRouterContext': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useInRouterContext; },
  'useLoaderData': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useLoaderData; },
  'useLocation': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useLocation; },
  'useMatch': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useMatch; },
  'useMatches': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useMatches; },
  'useNavigate': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useNavigate; },
  'useNavigation': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useNavigation; },
  'useNavigationType': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useNavigationType; },
  'useOutlet': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useOutlet; },
  'useOutletContext': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useOutletContext; },
  'useParams': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useParams; },
  'useResolvedPath': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useResolvedPath; },
  'useRevalidator': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useRevalidator; },
  'useRouteError': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useRouteError; },
  'useRouteLoaderData': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useRouteLoaderData; },
  'useRoutes': function() { return react_router__WEBPACK_IMPORTED_MODULE_4_.useRoutes; },
  'BrowserRouter': function() { return BrowserRouter; },
  'Form': function() { return Form; },
  'HashRouter': function() { return HashRouter; },
  'Link': function() { return Link; },
  'NavLink': function() { return NavLink; },
  'ScrollRestoration': function() { return ScrollRestoration; },
  'UNSAFE_useScrollRestoration': function() { return useScrollRestoration; },
  'createBrowserRouter': function() { return createBrowserRouter; },
  'createHashRouter': function() { return createHashRouter; },
  'createSearchParams': function() { return createSearchParams; },
  'unstable_HistoryRouter': function() { return HistoryRouter; },
  'unstable_usePrompt': function() { return usePrompt; },
  'useBeforeUnload': function() { return useBeforeUnload; },
  'useFetcher': function() { return useFetcher; },
  'useFetchers': function() { return useFetchers; },
  'useFormAction': function() { return useFormAction; },
  'useLinkClickHandler': function() { return useLinkClickHandler; },
  'useSearchParams': function() { return useSearchParams; },
  'useSubmit': function() { return useSubmit; }
});
/* harmony import */var _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* @swc/helpers/_/_instanceof */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_instanceof.js");
/* harmony import */var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_ = __webpack_require__(/* @swc/helpers/_/_sliced_to_array */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_sliced_to_array.js");
/* harmony import */var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_2_ = __webpack_require__(/* @swc/helpers/_/_to_consumable_array */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_to_consumable_array.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_3_ = __webpack_require__(/* react */"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_3__default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3_);
/* harmony import */var react_router__WEBPACK_IMPORTED_MODULE_4_ = __webpack_require__(/* react-router */"./node_modules/.pnpm/react-router@6.16.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */var _remix_run_router__WEBPACK_IMPORTED_MODULE_5_ = __webpack_require__(/* @remix-run/router */"./node_modules/.pnpm/@remix-run+router@1.9.0/node_modules/@remix-run/router/dist/router.js");
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 






function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function _extends(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
    return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */ function createSearchParams(init) {
    if (init === void 0) init = "";
    return new URLSearchParams(typeof init === "string" || Array.isArray(init) || (0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_0_._)(init, URLSearchParams) ? init : Object.keys(init).reduce(function(memo, key) {
        var value = init[key];
        return memo.concat(Array.isArray(value) ? value.map(function(v) {
            return [
                key,
                v
            ];
        }) : [
            [
                key,
                value
            ]
        ]);
    }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
    var searchParams = createSearchParams(locationSearch);
    if (defaultSearchParams) // Use `defaultSearchParams.forEach(...)` here instead of iterating of
    // `defaultSearchParams.keys()` to work-around a bug in Firefox related to
    // web extensions. Relevant Bugzilla tickets:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
    defaultSearchParams.forEach(function(_, key) {
        if (!searchParams.has(key)) defaultSearchParams.getAll(key).forEach(function(value) {
            searchParams.append(key, value);
        });
    });
    return searchParams;
}
// One-time check for submitter support
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) try {
        new FormData(document.createElement("form"), // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0);
        _formDataSupportsSubmitter = false;
    } catch (e) {
        _formDataSupportsSubmitter = true;
    }
    return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
]);
function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
        (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_warning)(false, "\"" + encType + "\" is not a valid `encType` for `<Form>`/`<fetcher.Form>` " + ("and will default to \"" + defaultEncType + "\""));
        return null;
    }
    return encType;
}
function getFormSubmissionInfo(target, basename) {
    var method;
    var action;
    var encType;
    var formData;
    var body;
    if (isFormElement(target)) {
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        var attr = target.getAttribute("action");
        action = attr ? (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.stripBasename)(attr, basename) : null;
        method = target.getAttribute("method") || defaultMethod;
        encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
        formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
        var form = target.form;
        if (form == null) throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
        // <button>/<input type="submit"> may override attributes of <form>
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        var attr1 = target.getAttribute("formaction") || form.getAttribute("action");
        action = attr1 ? (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.stripBasename)(attr1, basename) : null;
        method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
        encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
        // Build a FormData object populated from a form and submitter
        formData = new FormData(form, target);
        // If this browser doesn't support the `FormData(el, submitter)` format,
        // then tack on the submitter value at the end.  This is a lightweight
        // solution that is not 100% spec compliant.  For complete support in older
        // browsers, consider using the `formdata-submitter-polyfill` package
        if (!isFormDataSubmitterSupported()) {
            var name = target.name, type = target.type, value = target.value;
            if (type === "image") {
                var prefix = name ? name + "." : "";
                formData.append(prefix + "x", "0");
                formData.append(prefix + "y", "0");
            } else if (name) formData.append(name, value);
        }
    } else if (isHtmlElement(target)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    else {
        method = defaultMethod;
        action = null;
        encType = defaultEncType;
        body = target;
    }
    // Send body for <Form encType="text/plain" so we encode it into text
    if (formData && encType === "text/plain") {
        body = formData;
        formData = undefined;
    }
    return {
        action: action,
        method: method.toLowerCase(),
        encType: encType,
        formData: formData,
        body: body
    };
}
var _excluded = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset"
], _excluded2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children"
], _excluded3 = [
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "submit",
    "relative",
    "preventScrollReset"
];
function createBrowserRouter(routes, opts) {
    return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.createRouter)({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.createBrowserHistory)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
        routes: routes,
        mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_mapRouteProperties
    }).initialize();
}
function createHashRouter(routes, opts) {
    return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.createRouter)({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.createHashHistory)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
        routes: routes,
        mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_mapRouteProperties
    }).initialize();
}
function parseHydrationData() {
    var _window;
    var state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
    if (state && state.errors) state = _extends({}, state, {
        errors: deserializeErrors(state.errors)
    });
    return state;
}
function deserializeErrors(errors) {
    if (!errors) return null;
    var entries = Object.entries(errors);
    var serialized = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(_step.value, 2), key = _step_value[0], val = _step_value[1];
            // Hey you!  If you change this, please change the corresponding logic in
            // serializeErrors in react-router-dom/server.tsx :)
            if (val && val.__type === "RouteErrorResponse") serialized[key] = new _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
            else if (val && val.__type === "Error") {
                // Attempt to reconstruct the right type of Error (i.e., ReferenceError)
                if (val.__subType) {
                    var ErrorConstructor = window[val.__subType];
                    if (typeof ErrorConstructor === "function") try {
                        // @ts-expect-error
                        var error = new ErrorConstructor(val.message);
                        // Wipe away the client-side stack trace.  Nothing to fill it in with
                        // because we don't serialize SSR stack traces for security reasons
                        error.stack = "";
                        serialized[key] = error;
                    } catch (e) {
                    // no-op - fall through and create a normal Error
                    }
                }
                if (serialized[key] == null) {
                    var error1 = new Error(val.message);
                    // Wipe away the client-side stack trace.  Nothing to fill it in with
                    // because we don't serialize SSR stack traces for security reasons
                    error1.stack = "";
                    serialized[key] = error1;
                }
            } else serialized[key] = val;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) _iterator.return();
        } finally{
            if (_didIteratorError) throw _iteratorError;
        }
    }
    return serialized;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ var START_TRANSITION = "startTransition";
var startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_3_[START_TRANSITION];
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */ function BrowserRouter(_ref) {
    var basename = _ref.basename, children = _ref.children, future = _ref.future, _$window = _ref.window;
    var historyRef = react__WEBPACK_IMPORTED_MODULE_3_.useRef();
    if (historyRef.current == null) historyRef.current = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.createBrowserHistory)({
        window: _$window,
        v5Compat: true
    });
    var history = historyRef.current;
    var _React_useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(react__WEBPACK_IMPORTED_MODULE_3_.useState({
        action: history.action,
        location: history.location
    }), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function(newState) {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(function() {
            return setStateImpl(newState);
        }) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_3_.useLayoutEffect(function() {
        return history.listen(setState);
    }, [
        history,
        setState
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.createElement(react_router__WEBPACK_IMPORTED_MODULE_4_.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */ function HashRouter(_ref2) {
    var basename = _ref2.basename, children = _ref2.children, future = _ref2.future, _$window = _ref2.window;
    var historyRef = react__WEBPACK_IMPORTED_MODULE_3_.useRef();
    if (historyRef.current == null) historyRef.current = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.createHashHistory)({
        window: _$window,
        v5Compat: true
    });
    var history = historyRef.current;
    var _React_useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(react__WEBPACK_IMPORTED_MODULE_3_.useState({
        action: history.action,
        location: history.location
    }), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function(newState) {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(function() {
            return setStateImpl(newState);
        }) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_3_.useLayoutEffect(function() {
        return history.listen(setState);
    }, [
        history,
        setState
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.createElement(react_router__WEBPACK_IMPORTED_MODULE_4_.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */ function HistoryRouter(_ref3) {
    var basename = _ref3.basename, children = _ref3.children, future = _ref3.future, history = _ref3.history;
    var _React_useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(react__WEBPACK_IMPORTED_MODULE_3_.useState({
        action: history.action,
        location: history.location
    }), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function(newState) {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(function() {
            return setStateImpl(newState);
        }) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_3_.useLayoutEffect(function() {
        return history.listen(setState);
    }, [
        history,
        setState
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.createElement(react_router__WEBPACK_IMPORTED_MODULE_4_.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
HistoryRouter.displayName = "unstable_HistoryRouter";
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware <a>.
 */ var Link = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.forwardRef(function LinkWithRef(_ref4, ref) {
    var handleClick = function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) internalOnClick(event);
    };
    var onClick = _ref4.onClick, relative = _ref4.relative, reloadDocument = _ref4.reloadDocument, replace = _ref4.replace, state = _ref4.state, target = _ref4.target, to = _ref4.to, preventScrollReset = _ref4.preventScrollReset, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
    var basename = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_NavigationContext).basename;
    // Rendered into <a href> for absolute URLs
    var absoluteHref;
    var isExternal = false;
    if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
        // Render the absolute href server- and client-side
        absoluteHref = to;
        // Only check for external origins client-side
        if (isBrowser) try {
            var currentUrl = new URL(window.location.href);
            var targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
            var path = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.stripBasename)(targetUrl.pathname, basename);
            if (targetUrl.origin === currentUrl.origin && path != null) // Strip the protocol/origin/basename for same-origin absolute URLs
            to = path + targetUrl.search + targetUrl.hash;
            else isExternal = true;
        } catch (e) {
            (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_warning)(false, "<Link to=\"" + to + "\"> contains an invalid URL which will probably break " + "when clicked - please update to a valid URL path.");
        }
    }
    // Rendered into <a href> for relative URLs
    var href = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useHref)(to, {
        relative: relative
    });
    var internalOnClick = useLinkClickHandler(to, {
        replace: replace,
        state: state,
        target: target,
        preventScrollReset: preventScrollReset,
        relative: relative
    });
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
    react__WEBPACK_IMPORTED_MODULE_3_.createElement("a", _extends({}, rest, {
        href: absoluteHref || href,
        onClick: isExternal || reloadDocument ? onClick : handleClick,
        ref: ref,
        target: target
    })));
});
Link.displayName = "Link";
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */ var NavLink = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.forwardRef(function NavLinkWithRef(_ref5, ref) {
    var tmp = _ref5["aria-current"], ariaCurrentProp = tmp === void 0 ? "page" : tmp, _ref5_caseSensitive = _ref5.caseSensitive, caseSensitive = _ref5_caseSensitive === void 0 ? false : _ref5_caseSensitive, tmp1 = _ref5.className, classNameProp = tmp1 === void 0 ? "" : tmp1, _ref5_end = _ref5.end, end = _ref5_end === void 0 ? false : _ref5_end, styleProp = _ref5.style, to = _ref5.to, children = _ref5.children, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
    var path = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useResolvedPath)(to, {
        relative: rest.relative
    });
    var location = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useLocation)();
    var routerState = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_DataRouterStateContext);
    var navigator = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_NavigationContext).navigator;
    var toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
    var locationPathname = location.pathname;
    var nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
    }
    var isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
    var isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    var ariaCurrent = isActive ? ariaCurrentProp : undefined;
    var className;
    if (typeof classNameProp === "function") className = classNameProp({
        isActive: isActive,
        isPending: isPending
    });
    else // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null
    ].filter(Boolean).join(" ");
    var style = typeof styleProp === "function" ? styleProp({
        isActive: isActive,
        isPending: isPending
    }) : styleProp;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.createElement(Link, _extends({}, rest, {
        "aria-current": ariaCurrent,
        className: className,
        ref: ref,
        style: style,
        to: to
    }), typeof children === "function" ? children({
        isActive: isActive,
        isPending: isPending
    }) : children);
});
NavLink.displayName = "NavLink";
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */ var Form = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.forwardRef(function(props, ref) {
    var submit = useSubmit();
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.createElement(FormImpl, _extends({}, props, {
        submit: submit,
        ref: ref
    }));
});
Form.displayName = "Form";
var FormImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.forwardRef(function(_ref6, forwardedRef) {
    var reloadDocument = _ref6.reloadDocument, replace = _ref6.replace, state = _ref6.state, _ref6_method = _ref6.method, method = _ref6_method === void 0 ? defaultMethod : _ref6_method, action = _ref6.action, onSubmit = _ref6.onSubmit, submit = _ref6.submit, relative = _ref6.relative, preventScrollReset = _ref6.preventScrollReset, props = _objectWithoutPropertiesLoose(_ref6, _excluded3);
    var formMethod = method.toLowerCase() === "get" ? "get" : "post";
    var formAction = useFormAction(action, {
        relative: relative
    });
    var submitHandler = function(event) {
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        var submitter = event.nativeEvent.submitter;
        var submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
        submit(submitter || event.currentTarget, {
            method: submitMethod,
            replace: replace,
            state: state,
            relative: relative,
            preventScrollReset: preventScrollReset
        });
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.createElement("form", _extends({
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler
    }, props));
});
FormImpl.displayName = "FormImpl";
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */ function ScrollRestoration(_ref7) {
    var getKey = _ref7.getKey, storageKey = _ref7.storageKey;
    useScrollRestoration({
        getKey: getKey,
        storageKey: storageKey
    });
    return null;
}
ScrollRestoration.displayName = "ScrollRestoration";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var DataRouterHook;
(function(DataRouterHook) {
    DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
    DataRouterHook["UseSubmit"] = "useSubmit";
    DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
    DataRouterHook["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook) {
    DataRouterStateHook["UseFetchers"] = "useFetchers";
    DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
    var ctx = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_DataRouterContext);
    !ctx && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return ctx;
}
function useDataRouterState(hookName) {
    var state = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_DataRouterStateContext);
    !state && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return state;
}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */ function useLinkClickHandler(to, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, target = _ref.target, replaceProp = _ref.replace, state = _ref.state, preventScrollReset = _ref.preventScrollReset, relative = _ref.relative;
    var navigate = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useNavigate)();
    var location = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useLocation)();
    var path = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useResolvedPath)(to, {
        relative: relative
    });
    return react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function(event) {
        if (shouldProcessLinkClick(event, target)) {
            event.preventDefault();
            // If the URL hasn't changed, a regular <a> will do a replace instead of
            // a push, so do the same here unless the replace prop is explicitly set
            var replace = replaceProp !== undefined ? replaceProp : (0, react_router__WEBPACK_IMPORTED_MODULE_4_.createPath)(location) === (0, react_router__WEBPACK_IMPORTED_MODULE_4_.createPath)(path);
            navigate(to, {
                replace: replace,
                state: state,
                preventScrollReset: preventScrollReset,
                relative: relative
            });
        }
    }, [
        location,
        navigate,
        path,
        replaceProp,
        state,
        target,
        to,
        preventScrollReset,
        relative
    ]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */ function useSearchParams(defaultInit) {
    (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_warning)(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
    var defaultSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_3_.useRef(createSearchParams(defaultInit));
    var hasSetSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_3_.useRef(false);
    var location = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useLocation)();
    var searchParams = react__WEBPACK_IMPORTED_MODULE_3_.useMemo(function() {
        return(// Only merge in the defaults if we haven't yet called setSearchParams.
        // Once we call that we want those to take precedence, otherwise you can't
        // remove a param with setSearchParams({}) if it has an initial value
        getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current));
    }, [
        location.search
    ]);
    var navigate = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useNavigate)();
    var setSearchParams = react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function(nextInit, navigateOptions) {
        var newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
        hasSetSearchParamsRef.current = true;
        navigate("?" + newSearchParams, navigateOptions);
    }, [
        navigate,
        searchParams
    ]);
    return [
        searchParams,
        setSearchParams
    ];
}
function validateClientSideSubmission() {
    if (typeof document === "undefined") throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */ function useSubmit() {
    var router = useDataRouterContext(DataRouterHook.UseSubmit).router;
    var basename = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_NavigationContext).basename;
    var currentRouteId = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_useRouteId)();
    return react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function(target, options) {
        if (options === void 0) options = {};
        validateClientSideSubmission();
        var _getFormSubmissionInfo = getFormSubmissionInfo(target, basename), action = _getFormSubmissionInfo.action, method = _getFormSubmissionInfo.method, encType = _getFormSubmissionInfo.encType, formData = _getFormSubmissionInfo.formData, body = _getFormSubmissionInfo.body;
        router.navigate(options.action || action, {
            preventScrollReset: options.preventScrollReset,
            formData: formData,
            body: body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId
        });
    }, [
        router,
        basename,
        currentRouteId
    ]);
}
/**
 * Returns the implementation for fetcher.submit
 */ function useSubmitFetcher(fetcherKey, fetcherRouteId) {
    var router = useDataRouterContext(DataRouterHook.UseSubmitFetcher).router;
    var basename = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_NavigationContext).basename;
    return react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function(target, options) {
        if (options === void 0) options = {};
        validateClientSideSubmission();
        var _getFormSubmissionInfo = getFormSubmissionInfo(target, basename), action = _getFormSubmissionInfo.action, method = _getFormSubmissionInfo.method, encType = _getFormSubmissionInfo.encType, formData = _getFormSubmissionInfo.formData, body = _getFormSubmissionInfo.body;
        !(fetcherRouteId != null) && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, "No routeId available for useFetcher()");
        router.fetch(fetcherKey, fetcherRouteId, options.action || action, {
            preventScrollReset: options.preventScrollReset,
            formData: formData,
            body: body,
            formMethod: options.method || method,
            formEncType: options.encType || encType
        });
    }, [
        router,
        basename,
        fetcherKey,
        fetcherRouteId
    ]);
}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function useFormAction(action, _temp2) {
    var relative = (_temp2 === void 0 ? {} : _temp2).relative;
    var basename = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_NavigationContext).basename;
    var routeContext = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_RouteContext);
    !routeContext && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, "useFormAction must be used inside a RouteContext");
    var _routeContext_matches_slice = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(routeContext.matches.slice(-1), 1), match = _routeContext_matches_slice[0];
    // Shallow clone path so we can modify it below, otherwise we modify the
    // object referenced by useMemo inside useResolvedPath
    var path = _extends({}, (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useResolvedPath)(action ? action : ".", {
        relative: relative
    }));
    // Previously we set the default action to ".". The problem with this is that
    // `useResolvedPath(".")` excludes search params of the resolved URL. This is
    // the intended behavior of when "." is specifically provided as
    // the form action, but inconsistent w/ browsers when the action is omitted.
    // https://github.com/remix-run/remix/issues/927
    var location = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useLocation)();
    if (action == null) {
        // Safe to write to this directly here since if action was undefined, we
        // would have called useResolvedPath(".") which will never include a search
        path.search = location.search;
        // When grabbing search params from the URL, remove the automatically
        // inserted ?index param so we match the useResolvedPath search behavior
        // which would not include ?index
        if (match.route.index) {
            var params = new URLSearchParams(path.search);
            params.delete("index");
            path.search = params.toString() ? "?" + params.toString() : "";
        }
    }
    if ((!action || action === ".") && match.route.index) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the form action.  If this is a root navigation, then just use
    // the raw basename which allows the basename to have full control over the
    // presence of a trailing slash on root actions
    if (basename !== "/") path.pathname = path.pathname === "/" ? basename : (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.joinPaths)([
        basename,
        path.pathname
    ]);
    return (0, react_router__WEBPACK_IMPORTED_MODULE_4_.createPath)(path);
}
function createFetcherForm(fetcherKey, routeId) {
    var FetcherForm = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.forwardRef(function(props, ref) {
        var submit = useSubmitFetcher(fetcherKey, routeId);
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3_.createElement(FormImpl, _extends({}, props, {
            ref: ref,
            submit: submit
        }));
    });
    FetcherForm.displayName = "fetcher.Form";
    return FetcherForm;
}
var fetcherId = 0;
// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */ function useFetcher() {
    var _route$matches;
    var router = useDataRouterContext(DataRouterHook.UseFetcher).router;
    var route = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_RouteContext);
    !route && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, "useFetcher must be used inside a RouteContext");
    var routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
    !(routeId != null) && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, "useFetcher can only be used on routes that contain a unique \"id\"");
    var _React_useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(react__WEBPACK_IMPORTED_MODULE_3_.useState(function() {
        return String(++fetcherId);
    }), 1), fetcherKey = _React_useState[0];
    var _React_useState1 = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(react__WEBPACK_IMPORTED_MODULE_3_.useState(function() {
        !routeId && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, "No routeId available for fetcher.Form()");
        return createFetcherForm(fetcherKey, routeId);
    }), 1), Form = _React_useState1[0];
    var _React_useState2 = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1_._)(react__WEBPACK_IMPORTED_MODULE_3_.useState(function() {
        return function(href) {
            !router && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, "No router available for fetcher.load()");
            !routeId && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.UNSAFE_invariant)(false, "No routeId available for fetcher.load()");
            router.fetch(fetcherKey, routeId, href);
        };
    }), 1), load = _React_useState2[0];
    var submit = useSubmitFetcher(fetcherKey, routeId);
    var fetcher = router.getFetcher(fetcherKey);
    var fetcherWithComponents = react__WEBPACK_IMPORTED_MODULE_3_.useMemo(function() {
        return _extends({
            Form: Form,
            submit: submit,
            load: load
        }, fetcher);
    }, [
        fetcher,
        Form,
        submit,
        load
    ]);
    react__WEBPACK_IMPORTED_MODULE_3_.useEffect(function() {
        // Is this busted when the React team gets real weird and calls effects
        // twice on mount?  We really just need to garbage collect here when this
        // fetcher is no longer around.
        return function() {
            if (!router) {
                console.warn("No router available to clean up from useFetcher()");
                return;
            }
            router.deleteFetcher(fetcherKey);
        };
    }, [
        router,
        fetcherKey
    ]);
    return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */ function useFetchers() {
    var state = useDataRouterState(DataRouterStateHook.UseFetchers);
    return (0, _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_2_._)(state.fetchers.values());
}
var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
var savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */ function useScrollRestoration(_temp3) {
    var _ref = _temp3 === void 0 ? {} : _temp3, getKey = _ref.getKey, storageKey = _ref.storageKey;
    var router = useDataRouterContext(DataRouterHook.UseScrollRestoration).router;
    var _useDataRouterState = useDataRouterState(DataRouterStateHook.UseScrollRestoration), restoreScrollPosition = _useDataRouterState.restoreScrollPosition, preventScrollReset = _useDataRouterState.preventScrollReset;
    var basename = react__WEBPACK_IMPORTED_MODULE_3_.useContext(react_router__WEBPACK_IMPORTED_MODULE_4_.UNSAFE_NavigationContext).basename;
    var location = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useLocation)();
    var matches = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useMatches)();
    var navigation = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.useNavigation)();
    // Trigger manual scroll restoration while we're active
    react__WEBPACK_IMPORTED_MODULE_3_.useEffect(function() {
        window.history.scrollRestoration = "manual";
        return function() {
            window.history.scrollRestoration = "auto";
        };
    }, []);
    // Save positions on pagehide
    usePageHide(react__WEBPACK_IMPORTED_MODULE_3_.useCallback(function() {
        if (navigation.state === "idle") {
            var key = (getKey ? getKey(location, matches) : null) || location.key;
            savedScrollPositions[key] = window.scrollY;
        }
        sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
        window.history.scrollRestoration = "auto";
    }, [
        storageKey,
        getKey,
        navigation.state,
        location,
        matches
    ]));
    // Read in any saved scroll locations
    if (typeof document !== "undefined") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        react__WEBPACK_IMPORTED_MODULE_3_.useLayoutEffect(function() {
            try {
                var sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
                if (sessionPositions) savedScrollPositions = JSON.parse(sessionPositions);
            } catch (e) {
            // no-op, use default empty object
            }
        }, [
            storageKey
        ]);
        // Enable scroll restoration in the router
        // eslint-disable-next-line react-hooks/rules-of-hooks
        react__WEBPACK_IMPORTED_MODULE_3_.useLayoutEffect(function() {
            var getKeyWithoutBasename = getKey && basename !== "/" ? function(location, matches) {
                return getKey(_extends({}, location, {
                    pathname: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_5_.stripBasename)(location.pathname, basename) || location.pathname
                }), matches);
            } : getKey;
            var disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, function() {
                return window.scrollY;
            }, getKeyWithoutBasename);
            return function() {
                return disableScrollRestoration && disableScrollRestoration();
            };
        }, [
            router,
            basename,
            getKey
        ]);
        // Restore scrolling when state.restoreScrollPosition changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        react__WEBPACK_IMPORTED_MODULE_3_.useLayoutEffect(function() {
            // Explicit false means don't do anything (used for submissions)
            if (restoreScrollPosition === false) return;
            // been here before, scroll to it
            if (typeof restoreScrollPosition === "number") {
                window.scrollTo(0, restoreScrollPosition);
                return;
            }
            // try to scroll to the hash
            if (location.hash) {
                var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
                if (el) {
                    el.scrollIntoView();
                    return;
                }
            }
            // Don't reset if this navigation opted out
            if (preventScrollReset === true) return;
            // otherwise go to the top on new locations
            window.scrollTo(0, 0);
        }, [
            location,
            restoreScrollPosition,
            preventScrollReset
        ]);
    }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function useBeforeUnload(callback, options) {
    var capture = (options || {}).capture;
    react__WEBPACK_IMPORTED_MODULE_3_.useEffect(function() {
        var opts = capture != null ? {
            capture: capture
        } : undefined;
        window.addEventListener("beforeunload", callback, opts);
        return function() {
            window.removeEventListener("beforeunload", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function usePageHide(callback, options) {
    var capture = (options || {}).capture;
    react__WEBPACK_IMPORTED_MODULE_3_.useEffect(function() {
        var opts = capture != null ? {
            capture: capture
        } : undefined;
        window.addEventListener("pagehide", callback, opts);
        return function() {
            window.removeEventListener("pagehide", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */ function usePrompt(_ref8) {
    var when = _ref8.when, message = _ref8.message;
    var blocker = (0, react_router__WEBPACK_IMPORTED_MODULE_4_.unstable_useBlocker)(when);
    react__WEBPACK_IMPORTED_MODULE_3_.useEffect(function() {
        if (blocker.state === "blocked") {
            var proceed = window.confirm(message);
            if (proceed) // This timeout is needed to avoid a weird "race" on POP navigations
            // between the `window.history` revert navigation and the result of
            // `window.confirm`
            setTimeout(blocker.proceed, 0);
            else blocker.reset();
        }
    }, [
        blocker,
        message
    ]);
    react__WEBPACK_IMPORTED_MODULE_3_.useEffect(function() {
        if (blocker.state === "blocked" && !when) blocker.reset();
    }, [
        blocker,
        when
    ]);
}
//#endregion
 //# sourceMappingURL=index.js.map
},
"./node_modules/.pnpm/react-router@6.16.0_react@18.2.0/node_modules/react-router/dist/index.js": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  'AbortedDeferredError': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.AbortedDeferredError; },
  'NavigationType': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.Action; },
  'createPath': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.createPath; },
  'defer': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.defer; },
  'generatePath': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.generatePath; },
  'isRouteErrorResponse': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.isRouteErrorResponse; },
  'json': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.json; },
  'matchPath': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.matchPath; },
  'matchRoutes': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.matchRoutes; },
  'parsePath': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.parsePath; },
  'redirect': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.redirect; },
  'redirectDocument': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.redirectDocument; },
  'resolvePath': function() { return _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.resolvePath; },
  'Await': function() { return Await; },
  'MemoryRouter': function() { return MemoryRouter; },
  'Navigate': function() { return Navigate; },
  'Outlet': function() { return Outlet; },
  'Route': function() { return Route; },
  'Router': function() { return Router; },
  'RouterProvider': function() { return RouterProvider; },
  'Routes': function() { return Routes; },
  'UNSAFE_DataRouterContext': function() { return DataRouterContext; },
  'UNSAFE_DataRouterStateContext': function() { return DataRouterStateContext; },
  'UNSAFE_LocationContext': function() { return LocationContext; },
  'UNSAFE_NavigationContext': function() { return NavigationContext; },
  'UNSAFE_RouteContext': function() { return RouteContext; },
  'UNSAFE_mapRouteProperties': function() { return mapRouteProperties; },
  'UNSAFE_useRouteId': function() { return useRouteId; },
  'UNSAFE_useRoutesImpl': function() { return useRoutesImpl; },
  'createMemoryRouter': function() { return createMemoryRouter; },
  'createRoutesFromChildren': function() { return createRoutesFromChildren; },
  'createRoutesFromElements': function() { return createRoutesFromChildren; },
  'renderMatches': function() { return renderMatches; },
  'unstable_useBlocker': function() { return useBlocker; },
  'useActionData': function() { return useActionData; },
  'useAsyncError': function() { return useAsyncError; },
  'useAsyncValue': function() { return useAsyncValue; },
  'useHref': function() { return useHref; },
  'useInRouterContext': function() { return useInRouterContext; },
  'useLoaderData': function() { return useLoaderData; },
  'useLocation': function() { return useLocation; },
  'useMatch': function() { return useMatch; },
  'useMatches': function() { return useMatches; },
  'useNavigate': function() { return useNavigate; },
  'useNavigation': function() { return useNavigation; },
  'useNavigationType': function() { return useNavigationType; },
  'useOutlet': function() { return useOutlet; },
  'useOutletContext': function() { return useOutletContext; },
  'useParams': function() { return useParams; },
  'useResolvedPath': function() { return useResolvedPath; },
  'useRevalidator': function() { return useRevalidator; },
  'useRouteError': function() { return useRouteError; },
  'useRouteLoaderData': function() { return useRouteLoaderData; },
  'useRoutes': function() { return useRoutes; }
});
/* harmony import */var _swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* @swc/helpers/_/_class_call_check */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_class_call_check.js");
/* harmony import */var _swc_helpers_create_class__WEBPACK_IMPORTED_MODULE_1_ = __webpack_require__(/* @swc/helpers/_/_create_class */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_create_class.js");
/* harmony import */var _swc_helpers_inherits__WEBPACK_IMPORTED_MODULE_2_ = __webpack_require__(/* @swc/helpers/_/_inherits */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_inherits.js");
/* harmony import */var _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_3_ = __webpack_require__(/* @swc/helpers/_/_instanceof */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_instanceof.js");
/* harmony import */var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4_ = __webpack_require__(/* @swc/helpers/_/_sliced_to_array */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_sliced_to_array.js");
/* harmony import */var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5_ = __webpack_require__(/* @swc/helpers/_/_to_consumable_array */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_to_consumable_array.js");
/* harmony import */var _swc_helpers_create_super__WEBPACK_IMPORTED_MODULE_6_ = __webpack_require__(/* @swc/helpers/_/_create_super */"./node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/esm/_create_super.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_7_ = __webpack_require__(/* react */"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_7__default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7_);
/* harmony import */var _remix_run_router__WEBPACK_IMPORTED_MODULE_8_ = __webpack_require__(/* @remix-run/router */"./node_modules/.pnpm/@remix-run+router@1.9.0/node_modules/@remix-run/router/dist/router.js");
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 









function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function _extends(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
var DataRouterContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext(null);
DataRouterContext.displayName = "DataRouter";
var DataRouterStateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext(null);
DataRouterStateContext.displayName = "DataRouterState";
var AwaitContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext(null);
AwaitContext.displayName = "Await";
/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level <Router> API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */ var NavigationContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext(null);
NavigationContext.displayName = "Navigation";
var LocationContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext(null);
LocationContext.displayName = "Location";
var RouteContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
});
RouteContext.displayName = "Route";
var RouteErrorContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext(null);
RouteErrorContext.displayName = "RouteError";
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */ function useHref(to, _temp) {
    var relative = (_temp === void 0 ? {} : _temp).relative;
    !useInRouterContext() && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component.");
    var _React_useContext = react__WEBPACK_IMPORTED_MODULE_7_.useContext(NavigationContext), basename = _React_useContext.basename, navigator = _React_useContext.navigator;
    var _useResolvedPath = useResolvedPath(to, {
        relative: relative
    }), hash = _useResolvedPath.hash, pathname = _useResolvedPath.pathname, search = _useResolvedPath.search;
    var joinedPathname = pathname;
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the href.  If this is a root navigation, then just use the raw
    // basename which allows the basename to have full control over the presence
    // of a trailing slash on root links
    if (basename !== "/") joinedPathname = pathname === "/" ? basename : (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.joinPaths)([
        basename,
        pathname
    ]);
    return navigator.createHref({
        pathname: joinedPathname,
        search: search,
        hash: hash
    });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */ function useInRouterContext() {
    return react__WEBPACK_IMPORTED_MODULE_7_.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */ function useLocation() {
    !useInRouterContext() && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component.");
    return react__WEBPACK_IMPORTED_MODULE_7_.useContext(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */ function useNavigationType() {
    return react__WEBPACK_IMPORTED_MODULE_7_.useContext(LocationContext).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/hooks/use-match
 */ function useMatch(pattern) {
    !useInRouterContext() && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useMatch() may be used only in the context of a <Router> component.");
    var pathname = useLocation().pathname;
    return react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.matchPath)(pattern, pathname);
    }, [
        pathname,
        pattern
    ]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */ var navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
    var isStatic = react__WEBPACK_IMPORTED_MODULE_7_.useContext(NavigationContext).static;
    if (!isStatic) // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_7_.useLayoutEffect(cb);
}
/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */ function useNavigate() {
    var isDataRoute = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext).isDataRoute;
    // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
    !useInRouterContext() && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component.");
    var dataRouterContext = react__WEBPACK_IMPORTED_MODULE_7_.useContext(DataRouterContext);
    var _React_useContext = react__WEBPACK_IMPORTED_MODULE_7_.useContext(NavigationContext), basename = _React_useContext.basename, navigator = _React_useContext.navigator;
    var matches = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext).matches;
    var _useLocation = useLocation(), locationPathname = _useLocation.pathname;
    var routePathnamesJson = JSON.stringify((0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_getPathContributingMatches)(matches).map(function(match) {
        return match.pathnameBase;
    }));
    var activeRef = react__WEBPACK_IMPORTED_MODULE_7_.useRef(false);
    useIsomorphicLayoutEffect(function() {
        activeRef.current = true;
    });
    var navigate = react__WEBPACK_IMPORTED_MODULE_7_.useCallback(function(to, options) {
        if (options === void 0) options = {};
        (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(activeRef.current, navigateEffectWarning);
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our history listener yet
        if (!activeRef.current) return;
        if (typeof to === "number") {
            navigator.go(to);
            return;
        }
        var path = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        // If we're operating within a basename, prepend it to the pathname prior
        // to handing off to history (but only if we're not in a data router,
        // otherwise it'll prepend the basename inside of the router).
        // If this is a root navigation, then we navigate to the raw basename
        // which allows the basename to have full control over the presence of a
        // trailing slash on root links
        if (dataRouterContext == null && basename !== "/") path.pathname = path.pathname === "/" ? basename : (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.joinPaths)([
            basename,
            path.pathname
        ]);
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
    }, [
        basename,
        navigator,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
    ]);
    return navigate;
}
var OutletContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */ function useOutletContext() {
    return react__WEBPACK_IMPORTED_MODULE_7_.useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */ function useOutlet(context) {
    var outlet = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext).outlet;
    if (outlet) return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(OutletContext.Provider, {
        value: context
    }, outlet);
    return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */ function useParams() {
    var matches = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext).matches;
    var routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */ function useResolvedPath(to, _temp2) {
    var relative = (_temp2 === void 0 ? {} : _temp2).relative;
    var matches = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext).matches;
    var _useLocation = useLocation(), locationPathname = _useLocation.pathname;
    var routePathnamesJson = JSON.stringify((0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_getPathContributingMatches)(matches).map(function(match) {
        return match.pathnameBase;
    }));
    return react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path");
    }, [
        to,
        routePathnamesJson,
        locationPathname,
        relative
    ]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */ function useRoutes(routes, locationArg) {
    return useRoutesImpl(routes, locationArg);
}
// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState) {
    !useInRouterContext() && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component.");
    var navigator = react__WEBPACK_IMPORTED_MODULE_7_.useContext(NavigationContext).navigator;
    var _React_useContext = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext), parentMatches = _React_useContext.matches;
    var routeMatch = parentMatches[parentMatches.length - 1];
    var parentParams = routeMatch ? routeMatch.params : {};
    var parentPathname = routeMatch ? routeMatch.pathname : "/";
    var parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    var parentRoute = routeMatch && routeMatch.route;
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    var parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
    var locationFromContext = useLocation();
    var location;
    if (locationArg) {
        var _parsedLocationArg$pa;
        var parsedLocationArg = typeof locationArg === "string" ? (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.parsePath)(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop."));
        location = parsedLocationArg;
    } else location = locationFromContext;
    var pathname = location.pathname || "/";
    var remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
    var matches = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.matchRoutes)(routes, {
        pathname: remainingPathname
    });
    (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ");
    (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" " + "does not have an element or Component. This means it will render an <Outlet /> with a " + "null value by default resulting in an \"empty\" page.");
    var renderedMatches = _renderMatches(matches && matches.map(function(match) {
        return Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.joinPaths)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.joinPaths)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
            ])
        });
    }), parentMatches, dataRouterState);
    // When a user passes in a `locationArg`, the associated routes need to
    // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
    // to use the scoped location instead of the global location.
    if (locationArg && renderedMatches) return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(LocationContext.Provider, {
        value: {
            location: _extends({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, location),
            navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.Action.Pop
        }
    }, renderedMatches);
    return renderedMatches;
}
function DefaultErrorComponent() {
    var error = useRouteError();
    var message = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : (0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_3_._)(error, Error) ? error.message : JSON.stringify(error);
    var stack = (0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_3_._)(error, Error) ? error.stack : null;
    var lightgrey = "rgba(200,200,200, 0.5)";
    var preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
    };
    var codeStyles = {
        padding: "2px 4px",
        backgroundColor: lightgrey
    };
    var devInfo = null;
    console.error("Error handled by React Router default ErrorBoundary:", error);
    devInfo = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(react__WEBPACK_IMPORTED_MODULE_7_.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement("code", {
        style: codeStyles
    }, "ErrorBoundary"), " or", " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement("code", {
        style: codeStyles
    }, "errorElement"), " prop on your route."));
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(react__WEBPACK_IMPORTED_MODULE_7_.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, message), stack ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement("pre", {
        style: preStyles
    }, stack) : null, devInfo);
}
var defaultErrorElement = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = function(_React_Component) {
    "use strict";
    (0, _swc_helpers_inherits__WEBPACK_IMPORTED_MODULE_2_._)(RenderErrorBoundary, _React_Component);
    var _super = (0, _swc_helpers_create_super__WEBPACK_IMPORTED_MODULE_6_._)(RenderErrorBoundary);
    function RenderErrorBoundary(props) {
        (0, _swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_0_._)(this, RenderErrorBoundary);
        var _this;
        _this = _super.call(this, props);
        _this.state = {
            location: props.location,
            revalidation: props.revalidation,
            error: props.error
        };
        return _this;
    }
    (0, _swc_helpers_create_class__WEBPACK_IMPORTED_MODULE_1_._)(RenderErrorBoundary, [
        {
            key: "componentDidCatch",
            value: function componentDidCatch(error, errorInfo) {
                console.error("React Router caught the following error during render", error, errorInfo);
            }
        },
        {
            key: "render",
            value: function render() {
                return this.state.error ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(RouteContext.Provider, {
                    value: this.props.routeContext
                }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(RouteErrorContext.Provider, {
                    value: this.state.error,
                    children: this.props.component
                })) : this.props.children;
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
                return {
                    error: error
                };
            }
        },
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(props, state) {
                // When we get into an error state, the user will likely click "back" to the
                // previous page that didn't have an error. Because this wraps the entire
                // application, that will have no effect--the error page continues to display.
                // This gives us a mechanism to recover from the error when the location changes.
                //
                // Whether we're in an error state or not, we update the location in state
                // so that when we are in an error state, it gets reset when a new location
                // comes in and the user recovers from the error.
                if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") return {
                    error: props.error,
                    location: props.location,
                    revalidation: props.revalidation
                };
                // If we're not changing locations, preserve the location but still surface
                // any new errors that may come through. We retain the existing error, we do
                // this because the error provided from the app state may be cleared without
                // the location changing.
                return {
                    error: props.error || state.error,
                    location: state.location,
                    revalidation: props.revalidation || state.revalidation
                };
            }
        }
    ]);
    return RenderErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_7_.Component);
function RenderedRoute(_ref) {
    var routeContext = _ref.routeContext, match = _ref.match, children = _ref.children;
    var dataRouterContext = react__WEBPACK_IMPORTED_MODULE_7_.useContext(DataRouterContext);
    // Track how deep we got in our render pass to emulate SSR componentDidCatch
    // in a DataStaticRouter
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(RouteContext.Provider, {
        value: routeContext
    }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
    var _dataRouterState2;
    if (parentMatches === void 0) parentMatches = [];
    if (dataRouterState === void 0) dataRouterState = null;
    if (matches == null) {
        var _dataRouterState;
        if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) // Don't bail if we have data router errors so we can render them in the
        // boundary.  Use the pre-matched (or shimmed) matches
        matches = dataRouterState.matches;
        else return null;
    }
    var renderedMatches = matches;
    // If we have data errors, trim matches to the highest error boundary
    var errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
    if (errors != null) {
        var errorIndex = renderedMatches.findIndex(function(m) {
            return m.route.id && (errors == null ? void 0 : errors[m.route.id]);
        });
        !(errorIndex >= 0) && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(","));
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    return renderedMatches.reduceRight(function(outlet, match, index) {
        var error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
        // Only data routers handle errors
        var errorElement = null;
        if (dataRouterState) errorElement = match.route.errorElement || defaultErrorElement;
        var _$matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
        var getChildren = function() {
            var children;
            if (error) children = errorElement;
            else if (match.route.Component) // Note: This is a de-optimized path since React won't re-use the
            // ReactElement since it's identity changes with each new
            // React.createElement call.  We keep this so folks can use
            // `<Route Component={...}>` in `<Routes>` but generally `Component`
            // usage is only advised in `RouterProvider` when we can convert it to
            // `element` ahead of time.
            children = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(match.route.Component, null);
            else if (match.route.element) children = match.route.element;
            else children = outlet;
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(RenderedRoute, {
                match: match,
                routeContext: {
                    outlet: outlet,
                    matches: _$matches,
                    isDataRoute: dataRouterState != null
                },
                children: children
            });
        };
        // Only wrap in an error boundary within data router usages when we have an
        // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
        // an ancestor ErrorBoundary/errorElement
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(RenderErrorBoundary, {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error: error,
            children: getChildren(),
            routeContext: {
                outlet: null,
                matches: _$matches,
                isDataRoute: true
            }
        }) : getChildren();
    }, null);
}
var DataRouterHook = /*#__PURE__*/ function(DataRouterHook) {
    DataRouterHook["UseBlocker"] = "useBlocker";
    DataRouterHook["UseRevalidator"] = "useRevalidator";
    DataRouterHook["UseNavigateStable"] = "useNavigate";
    return DataRouterHook;
}(DataRouterHook || {});
var DataRouterStateHook = /*#__PURE__*/ function(DataRouterStateHook) {
    DataRouterStateHook["UseBlocker"] = "useBlocker";
    DataRouterStateHook["UseLoaderData"] = "useLoaderData";
    DataRouterStateHook["UseActionData"] = "useActionData";
    DataRouterStateHook["UseRouteError"] = "useRouteError";
    DataRouterStateHook["UseNavigation"] = "useNavigation";
    DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
    DataRouterStateHook["UseMatches"] = "useMatches";
    DataRouterStateHook["UseRevalidator"] = "useRevalidator";
    DataRouterStateHook["UseNavigateStable"] = "useNavigate";
    DataRouterStateHook["UseRouteId"] = "useRouteId";
    return DataRouterStateHook;
}(DataRouterStateHook || {});
function getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
    var ctx = react__WEBPACK_IMPORTED_MODULE_7_.useContext(DataRouterContext);
    !ctx && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return ctx;
}
function useDataRouterState(hookName) {
    var state = react__WEBPACK_IMPORTED_MODULE_7_.useContext(DataRouterStateContext);
    !state && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return state;
}
function useRouteContext(hookName) {
    var route = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext);
    !route && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName));
    return route;
}
// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
    var route = useRouteContext(hookName);
    var thisRoute = route.matches[route.matches.length - 1];
    !thisRoute.route.id && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, hookName + " can only be used on routes that contain a unique \"id\"");
    return thisRoute.route.id;
}
/**
 * Returns the ID for the nearest contextual route
 */ function useRouteId() {
    return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */ function useNavigation() {
    var state = useDataRouterState(DataRouterStateHook.UseNavigation);
    return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */ function useRevalidator() {
    var dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
    var state = useDataRouterState(DataRouterStateHook.UseRevalidator);
    return react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        return {
            revalidate: dataRouterContext.router.revalidate,
            state: state.revalidation
        };
    }, [
        dataRouterContext.router.revalidate,
        state.revalidation
    ]);
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */ function useMatches() {
    var _useDataRouterState = useDataRouterState(DataRouterStateHook.UseMatches), matches = _useDataRouterState.matches, loaderData = _useDataRouterState.loaderData;
    return react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        return matches.map(function(m) {
            return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_convertRouteMatchToUiMatch)(m, loaderData);
        });
    }, [
        matches,
        loaderData
    ]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */ function useLoaderData() {
    var state = useDataRouterState(DataRouterStateHook.UseLoaderData);
    var routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
    if (state.errors && state.errors[routeId] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
        return undefined;
    }
    return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */ function useRouteLoaderData(routeId) {
    var state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
    return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */ function useActionData() {
    var state = useDataRouterState(DataRouterStateHook.UseActionData);
    var route = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext);
    !route && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, "useActionData must be used inside a RouteContext");
    return Object.values((state == null ? void 0 : state.actionData) || {})[0];
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */ function useRouteError() {
    var _state$errors;
    var error = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteErrorContext);
    var state = useDataRouterState(DataRouterStateHook.UseRouteError);
    var routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
    // If this was a render error, we put it in a RouteError context inside
    // of RenderErrorBoundary
    if (error) return error;
    // Otherwise look for errors from our data router state
    return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor <Await /> value
 */ function useAsyncValue() {
    var value = react__WEBPACK_IMPORTED_MODULE_7_.useContext(AwaitContext);
    return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor <Await /> value
 */ function useAsyncError() {
    var value = react__WEBPACK_IMPORTED_MODULE_7_.useContext(AwaitContext);
    return value == null ? void 0 : value._error;
}
var blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */ function useBlocker(shouldBlock) {
    var _useDataRouterContext = useDataRouterContext(DataRouterHook.UseBlocker), router = _useDataRouterContext.router, basename = _useDataRouterContext.basename;
    var state = useDataRouterState(DataRouterStateHook.UseBlocker);
    var _React_useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4_._)(react__WEBPACK_IMPORTED_MODULE_7_.useState(""), 2), blockerKey = _React_useState[0], setBlockerKey = _React_useState[1];
    var blockerFunction = react__WEBPACK_IMPORTED_MODULE_7_.useCallback(function(arg) {
        if (typeof shouldBlock !== "function") return !!shouldBlock;
        if (basename === "/") return shouldBlock(arg);
        // If they provided us a function and we've got an active basename, strip
        // it from the locations we expose to the user to match the behavior of
        // useLocation
        var currentLocation = arg.currentLocation, nextLocation = arg.nextLocation, historyAction = arg.historyAction;
        return shouldBlock({
            currentLocation: _extends({}, currentLocation, {
                pathname: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.stripBasename)(currentLocation.pathname, basename) || currentLocation.pathname
            }),
            nextLocation: _extends({}, nextLocation, {
                pathname: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.stripBasename)(nextLocation.pathname, basename) || nextLocation.pathname
            }),
            historyAction: historyAction
        });
    }, [
        basename,
        shouldBlock
    ]);
    // This effect is in charge of blocker key assignment and deletion (which is
    // tightly coupled to the key)
    react__WEBPACK_IMPORTED_MODULE_7_.useEffect(function() {
        var key = String(++blockerId);
        setBlockerKey(key);
        return function() {
            return router.deleteBlocker(key);
        };
    }, [
        router
    ]);
    // This effect handles assigning the blockerFunction.  This is to handle
    // unstable blocker function identities, and happens only after the prior
    // effect so we don't get an orphaned blockerFunction in the router with a
    // key of "".  Until then we just have the IDLE_BLOCKER.
    react__WEBPACK_IMPORTED_MODULE_7_.useEffect(function() {
        if (blockerKey !== "") router.getBlocker(blockerKey, blockerFunction);
    }, [
        router,
        blockerKey,
        blockerFunction
    ]);
    // Prefer the blocker from `state` not `router.state` since DataRouterContext
    // is memoized so this ensures we update on blocker state updates
    return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.IDLE_BLOCKER;
}
/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */ function useNavigateStable() {
    var router = useDataRouterContext(DataRouterHook.UseNavigateStable).router;
    var id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
    var activeRef = react__WEBPACK_IMPORTED_MODULE_7_.useRef(false);
    useIsomorphicLayoutEffect(function() {
        activeRef.current = true;
    });
    var navigate = react__WEBPACK_IMPORTED_MODULE_7_.useCallback(function(to, options) {
        if (options === void 0) options = {};
        (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(activeRef.current, navigateEffectWarning);
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our router subscriber yet
        if (!activeRef.current) return;
        if (typeof to === "number") router.navigate(to);
        else router.navigate(to, _extends({
            fromRouteId: id
        }, options));
    }, [
        router,
        id
    ]);
    return navigate;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
        alreadyWarned[key] = true;
        (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(false, message);
    }
}
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ var START_TRANSITION = "startTransition";
var startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_7_[START_TRANSITION];
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function RouterProvider(_ref) {
    var fallbackElement = _ref.fallbackElement, router = _ref.router, future = _ref.future;
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    var _React_useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4_._)(react__WEBPACK_IMPORTED_MODULE_7_.useState(router.state), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = react__WEBPACK_IMPORTED_MODULE_7_.useCallback(function(newState) {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(function() {
            return setStateImpl(newState);
        }) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_7_.useLayoutEffect(function() {
        return router.subscribe(setState);
    }, [
        router,
        setState
    ]);
    var navigator = react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: function(n) {
                return router.navigate(n);
            },
            push: function(to, state, opts) {
                return router.navigate(to, {
                    state: state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                });
            },
            replace: function(to, state, opts) {
                return router.navigate(to, {
                    replace: true,
                    state: state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                });
            }
        };
    }, [
        router
    ]);
    var basename = router.basename || "/";
    var dataRouterContext = react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        return {
            router: router,
            navigator: navigator,
            static: false,
            basename: basename
        };
    }, [
        router,
        navigator,
        basename
    ]);
    // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(react__WEBPACK_IMPORTED_MODULE_7_.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(DataRouterContext.Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(DataRouterStateContext.Provider, {
        value: state
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(Router, {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator
    }, state.initialized ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(DataRoutes, {
        routes: router.routes,
        state: state
    }) : fallbackElement))), null);
}
function DataRoutes(_ref2) {
    var routes = _ref2.routes, state = _ref2.state;
    return useRoutesImpl(routes, undefined, state);
}
/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */ function MemoryRouter(_ref3) {
    var basename = _ref3.basename, children = _ref3.children, initialEntries = _ref3.initialEntries, initialIndex = _ref3.initialIndex, future = _ref3.future;
    var historyRef = react__WEBPACK_IMPORTED_MODULE_7_.useRef();
    if (historyRef.current == null) historyRef.current = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.createMemoryHistory)({
        initialEntries: initialEntries,
        initialIndex: initialIndex,
        v5Compat: true
    });
    var history = historyRef.current;
    var _React_useState = (0, _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4_._)(react__WEBPACK_IMPORTED_MODULE_7_.useState({
        action: history.action,
        location: history.location
    }), 2), state = _React_useState[0], setStateImpl = _React_useState[1];
    var v7_startTransition = (future || {}).v7_startTransition;
    var setState = react__WEBPACK_IMPORTED_MODULE_7_.useCallback(function(newState) {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(function() {
            return setStateImpl(newState);
        }) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_7_.useLayoutEffect(function() {
        return history.listen(setState);
    }, [
        history,
        setState
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */ function Navigate(_ref4) {
    var to = _ref4.to, replace = _ref4.replace, state = _ref4.state, relative = _ref4.relative;
    !useInRouterContext() && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component.");
    (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(!react__WEBPACK_IMPORTED_MODULE_7_.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    var matches = react__WEBPACK_IMPORTED_MODULE_7_.useContext(RouteContext).matches;
    var _useLocation = useLocation(), locationPathname = _useLocation.pathname;
    var navigate = useNavigate();
    // Resolve the path outside of the effect so that when effects run twice in
    // StrictMode they navigate to the same place
    var path = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.resolveTo)(to, (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_getPathContributingMatches)(matches).map(function(match) {
        return match.pathnameBase;
    }), locationPathname, relative === "path");
    var jsonPath = JSON.stringify(path);
    react__WEBPACK_IMPORTED_MODULE_7_.useEffect(function() {
        return navigate(JSON.parse(jsonPath), {
            replace: replace,
            state: state,
            relative: relative
        });
    }, [
        navigate,
        jsonPath,
        relative,
        replace,
        state
    ]);
    return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */ function Outlet(props) {
    return useOutlet(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */ function Route(_props) {
    (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */ function Router(_ref5) {
    var tmp = _ref5.basename, basenameProp = tmp === void 0 ? "/" : tmp, _ref5_children = _ref5.children, children = _ref5_children === void 0 ? null : _ref5_children, locationProp = _ref5.location, _ref5_navigationType = _ref5.navigationType, navigationType = _ref5_navigationType === void 0 ? _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.Action.Pop : _ref5_navigationType, navigator = _ref5.navigator, tmp1 = _ref5.static, staticProp = tmp1 === void 0 ? false : tmp1;
    !!useInRouterContext() && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    // Preserve trailing slashes on basename, so we can let the user control
    // the enforcement of trailing slashes throughout the app
    var basename = basenameProp.replace(/^\/*/, "/");
    var navigationContext = react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        return {
            basename: basename,
            navigator: navigator,
            static: staticProp
        };
    }, [
        basename,
        navigator,
        staticProp
    ]);
    if (typeof locationProp === "string") locationProp = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.parsePath)(locationProp);
    var _locationProp_pathname = locationProp.pathname, pathname = _locationProp_pathname === void 0 ? "/" : _locationProp_pathname, _locationProp_search = locationProp.search, search = _locationProp_search === void 0 ? "" : _locationProp_search, _locationProp_hash = locationProp.hash, hash = _locationProp_hash === void 0 ? "" : _locationProp_hash, _locationProp_state = locationProp.state, state = _locationProp_state === void 0 ? null : _locationProp_state, _locationProp_key = locationProp.key, key = _locationProp_key === void 0 ? "default" : _locationProp_key;
    var locationContext = react__WEBPACK_IMPORTED_MODULE_7_.useMemo(function() {
        var trailingPathname = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.stripBasename)(pathname, basename);
        if (trailingPathname == null) return null;
        return {
            location: {
                pathname: trailingPathname,
                search: search,
                hash: hash,
                state: state,
                key: key
            },
            navigationType: navigationType
        };
    }, [
        basename,
        pathname,
        search,
        hash,
        state,
        key,
        navigationType
    ]);
    (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(locationContext != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.");
    if (locationContext == null) return null;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(NavigationContext.Provider, {
        value: navigationContext
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(LocationContext.Provider, {
        children: children,
        value: locationContext
    }));
}
/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */ function Routes(_ref6) {
    var children = _ref6.children, location = _ref6.location;
    return useRoutes(createRoutesFromChildren(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */ function Await(_ref7) {
    var children = _ref7.children, errorElement = _ref7.errorElement, resolve = _ref7.resolve;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(AwaitErrorBoundary, {
        resolve: resolve,
        errorElement: errorElement
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus = /*#__PURE__*/ function(AwaitRenderStatus) {
    AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
    AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
    AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
    return AwaitRenderStatus;
}(AwaitRenderStatus || {});
var neverSettledPromise = new Promise(function() {});
var AwaitErrorBoundary = function(_React_Component) {
    "use strict";
    (0, _swc_helpers_inherits__WEBPACK_IMPORTED_MODULE_2_._)(AwaitErrorBoundary, _React_Component);
    var _super = (0, _swc_helpers_create_super__WEBPACK_IMPORTED_MODULE_6_._)(AwaitErrorBoundary);
    function AwaitErrorBoundary(props) {
        (0, _swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_0_._)(this, AwaitErrorBoundary);
        var _this;
        _this = _super.call(this, props);
        _this.state = {
            error: null
        };
        return _this;
    }
    (0, _swc_helpers_create_class__WEBPACK_IMPORTED_MODULE_1_._)(AwaitErrorBoundary, [
        {
            key: "componentDidCatch",
            value: function componentDidCatch(error, errorInfo) {
                console.error("<Await> caught the following error during render", error, errorInfo);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this_props = this.props, children = _this_props.children, errorElement = _this_props.errorElement, resolve = _this_props.resolve;
                var promise = null;
                var status = AwaitRenderStatus.pending;
                if (!(0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_3_._)(resolve, Promise)) {
                    // Didn't get a promise - provide as a resolved promise
                    status = AwaitRenderStatus.success;
                    promise = Promise.resolve();
                    Object.defineProperty(promise, "_tracked", {
                        get: function() {
                            return true;
                        }
                    });
                    Object.defineProperty(promise, "_data", {
                        get: function() {
                            return resolve;
                        }
                    });
                } else if (this.state.error) {
                    // Caught a render error, provide it as a rejected promise
                    status = AwaitRenderStatus.error;
                    var renderError = this.state.error;
                    promise = Promise.reject().catch(function() {}); // Avoid unhandled rejection warnings
                    Object.defineProperty(promise, "_tracked", {
                        get: function() {
                            return true;
                        }
                    });
                    Object.defineProperty(promise, "_error", {
                        get: function() {
                            return renderError;
                        }
                    });
                } else if (resolve._tracked) {
                    // Already tracked promise - check contents
                    promise = resolve;
                    status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
                } else {
                    // Raw (untracked) promise - track it
                    status = AwaitRenderStatus.pending;
                    Object.defineProperty(resolve, "_tracked", {
                        get: function() {
                            return true;
                        }
                    });
                    promise = resolve.then(function(data) {
                        return Object.defineProperty(resolve, "_data", {
                            get: function() {
                                return data;
                            }
                        });
                    }, function(error) {
                        return Object.defineProperty(resolve, "_error", {
                            get: function() {
                                return error;
                            }
                        });
                    });
                }
                if (status === AwaitRenderStatus.error && (0, _swc_helpers_instanceof__WEBPACK_IMPORTED_MODULE_3_._)(promise._error, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.AbortedDeferredError)) // Freeze the UI by throwing a never resolved promise
                throw neverSettledPromise;
                if (status === AwaitRenderStatus.error && !errorElement) // No errorElement, throw to the nearest route-level error boundary
                throw promise._error;
                if (status === AwaitRenderStatus.error) // Render via our errorElement
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(AwaitContext.Provider, {
                    value: promise,
                    children: errorElement
                });
                if (status === AwaitRenderStatus.success) // Render children with resolved value
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(AwaitContext.Provider, {
                    value: promise,
                    children: children
                });
                // Throw to the suspense boundary
                throw promise;
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
                return {
                    error: error
                };
            }
        }
    ]);
    return AwaitErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_7_.Component);
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on <Await>
 */ function ResolveAwait(_ref8) {
    var children = _ref8.children;
    var data = useAsyncValue();
    var toRender = typeof children === "function" ? children(data) : children;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(react__WEBPACK_IMPORTED_MODULE_7_.Fragment, null, toRender);
}
///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */ function createRoutesFromChildren(children, parentPath) {
    if (parentPath === void 0) parentPath = [];
    var routes = [];
    react__WEBPACK_IMPORTED_MODULE_7_.Children.forEach(children, function(element, index) {
        if (!/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.isValidElement(element)) // Ignore non-elements. This allows people to more easily inline
        // conditionals in their route config.
        return;
        var treePath = (0, _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5_._)(parentPath).concat([
            index
        ]);
        if (element.type === react__WEBPACK_IMPORTED_MODULE_7_.Fragment) {
            // Transparently support React.Fragment and its children.
            routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
            return;
        }
        !(element.type === Route) && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>");
        !(!element.props.index || !element.props.children) && (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_invariant)(false, "An index route cannot have child routes.");
        var route = {
            id: element.props.id || treePath.join("-"),
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            Component: element.props.Component,
            index: element.props.index,
            path: element.props.path,
            loader: element.props.loader,
            action: element.props.action,
            errorElement: element.props.errorElement,
            ErrorBoundary: element.props.ErrorBoundary,
            hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
            shouldRevalidate: element.props.shouldRevalidate,
            handle: element.props.handle,
            lazy: element.props.lazy
        };
        if (element.props.children) route.children = createRoutesFromChildren(element.props.children, treePath);
        routes.push(route);
    });
    return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */ function renderMatches(matches) {
    return _renderMatches(matches);
}
function mapRouteProperties(route) {
    var updates = {
        // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this -- please and thank you!
        hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
    };
    if (route.Component) {
        if (route.element) (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(false, "You should not include both `Component` and `element` on your route - `Component` will be used.");
        Object.assign(updates, {
            element: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(route.Component),
            Component: undefined
        });
    }
    if (route.ErrorBoundary) {
        if (route.errorElement) (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.UNSAFE_warning)(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.");
        Object.assign(updates, {
            errorElement: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7_.createElement(route.ErrorBoundary),
            ErrorBoundary: undefined
        });
    }
    return updates;
}
function createMemoryRouter(routes, opts) {
    return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.createRouter)({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_8_.createMemoryHistory)({
            initialEntries: opts == null ? void 0 : opts.initialEntries,
            initialIndex: opts == null ? void 0 : opts.initialIndex
        }),
        hydrationData: opts == null ? void 0 : opts.hydrationData,
        routes: routes,
        mapRouteProperties: mapRouteProperties
    }).initialize();
}
 //# sourceMappingURL=index.js.map
},

}]);
//# sourceMappingURL=lib-router.js.map