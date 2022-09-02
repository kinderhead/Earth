// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iJYvl":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _app = require("./app");
var _appDefault = parcelHelpers.interopDefault(_app);
new (0, _appDefault.default)();

},{"./app":"kuM8f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kuM8f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _image = require("konva/lib/shapes/Image");
var _stage = require("konva/lib/Stage");
class App {
    textures = {};
    constructor(){
        this.stage = new (0, _stage.Stage)({
            container: "Main",
            width: window.innerWidth,
            height: window.innerHeight
        });
        this.loadImages();
    }
    update() {}
    loadImages() {
        this.textures["earth"] = new (0, _image.Image)({
            image: document.getElementById("earth")
        });
    }
}
exports.default = App;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","konva/lib/Stage":"38rm3","konva/lib/shapes/Image":"8V6x8"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"38rm3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stages", ()=>stages);
parcelHelpers.export(exports, "Stage", ()=>Stage);
var _utilJs = require("./Util.js");
var _factoryJs = require("./Factory.js");
var _containerJs = require("./Container.js");
var _globalJs = require("./Global.js");
var _canvasJs = require("./Canvas.js");
var _dragAndDropJs = require("./DragAndDrop.js");
var _pointerEventsJs = require("./PointerEvents.js");
var STAGE = "Stage", STRING = "string", PX = "px", MOUSEOUT = "mouseout", MOUSELEAVE = "mouseleave", MOUSEOVER = "mouseover", MOUSEENTER = "mouseenter", MOUSEMOVE = "mousemove", MOUSEDOWN = "mousedown", MOUSEUP = "mouseup", POINTERMOVE = "pointermove", POINTERDOWN = "pointerdown", POINTERUP = "pointerup", POINTERCANCEL = "pointercancel", LOSTPOINTERCAPTURE = "lostpointercapture", POINTEROUT = "pointerout", POINTERLEAVE = "pointerleave", POINTEROVER = "pointerover", POINTERENTER = "pointerenter", CONTEXTMENU = "contextmenu", TOUCHSTART = "touchstart", TOUCHEND = "touchend", TOUCHMOVE = "touchmove", TOUCHCANCEL = "touchcancel", WHEEL = "wheel", MAX_LAYERS_NUMBER = 5, EVENTS = [
    [
        MOUSEENTER,
        "_pointerenter"
    ],
    [
        MOUSEDOWN,
        "_pointerdown"
    ],
    [
        MOUSEMOVE,
        "_pointermove"
    ],
    [
        MOUSEUP,
        "_pointerup"
    ],
    [
        MOUSELEAVE,
        "_pointerleave"
    ],
    [
        TOUCHSTART,
        "_pointerdown"
    ],
    [
        TOUCHMOVE,
        "_pointermove"
    ],
    [
        TOUCHEND,
        "_pointerup"
    ],
    [
        TOUCHCANCEL,
        "_pointercancel"
    ],
    [
        MOUSEOVER,
        "_pointerover"
    ],
    [
        WHEEL,
        "_wheel"
    ],
    [
        CONTEXTMENU,
        "_contextmenu"
    ],
    [
        POINTERDOWN,
        "_pointerdown"
    ],
    [
        POINTERMOVE,
        "_pointermove"
    ],
    [
        POINTERUP,
        "_pointerup"
    ],
    [
        POINTERCANCEL,
        "_pointercancel"
    ],
    [
        LOSTPOINTERCAPTURE,
        "_lostpointercapture"
    ], 
];
const EVENTS_MAP = {
    mouse: {
        [POINTEROUT]: MOUSEOUT,
        [POINTERLEAVE]: MOUSELEAVE,
        [POINTEROVER]: MOUSEOVER,
        [POINTERENTER]: MOUSEENTER,
        [POINTERMOVE]: MOUSEMOVE,
        [POINTERDOWN]: MOUSEDOWN,
        [POINTERUP]: MOUSEUP,
        [POINTERCANCEL]: "mousecancel",
        pointerclick: "click",
        pointerdblclick: "dblclick"
    },
    touch: {
        [POINTEROUT]: "touchout",
        [POINTERLEAVE]: "touchleave",
        [POINTEROVER]: "touchover",
        [POINTERENTER]: "touchenter",
        [POINTERMOVE]: TOUCHMOVE,
        [POINTERDOWN]: TOUCHSTART,
        [POINTERUP]: TOUCHEND,
        [POINTERCANCEL]: TOUCHCANCEL,
        pointerclick: "tap",
        pointerdblclick: "dbltap"
    },
    pointer: {
        [POINTEROUT]: POINTEROUT,
        [POINTERLEAVE]: POINTERLEAVE,
        [POINTEROVER]: POINTEROVER,
        [POINTERENTER]: POINTERENTER,
        [POINTERMOVE]: POINTERMOVE,
        [POINTERDOWN]: POINTERDOWN,
        [POINTERUP]: POINTERUP,
        [POINTERCANCEL]: POINTERCANCEL,
        pointerclick: "pointerclick",
        pointerdblclick: "pointerdblclick"
    }
};
const getEventType = (type)=>{
    if (type.indexOf("pointer") >= 0) return "pointer";
    if (type.indexOf("touch") >= 0) return "touch";
    return "mouse";
};
const getEventsMap = (eventType)=>{
    const type = getEventType(eventType);
    if (type === "pointer") return (0, _globalJs.Konva).pointerEventsEnabled && EVENTS_MAP.pointer;
    if (type === "touch") return EVENTS_MAP.touch;
    if (type === "mouse") return EVENTS_MAP.mouse;
};
function checkNoClip(attrs = {}) {
    if (attrs.clipFunc || attrs.clipWidth || attrs.clipHeight) (0, _utilJs.Util).warn("Stage does not support clipping. Please use clip for Layers or Groups.");
    return attrs;
}
const NO_POINTERS_MESSAGE = `Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);`;
const stages = [];
class Stage extends (0, _containerJs.Container) {
    constructor(config){
        super(checkNoClip(config));
        this._pointerPositions = [];
        this._changedPointerPositions = [];
        this._buildDOM();
        this._bindContentEvents();
        stages.push(this);
        this.on("widthChange.konva heightChange.konva", this._resizeDOM);
        this.on("visibleChange.konva", this._checkVisibility);
        this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", ()=>{
            checkNoClip(this.attrs);
        });
        this._checkVisibility();
    }
    _validateAdd(child) {
        const isLayer = child.getType() === "Layer";
        const isFastLayer = child.getType() === "FastLayer";
        const valid = isLayer || isFastLayer;
        if (!valid) (0, _utilJs.Util).throw("You may only add layers to the stage.");
    }
    _checkVisibility() {
        if (!this.content) return;
        const style = this.visible() ? "" : "none";
        this.content.style.display = style;
    }
    setContainer(container) {
        if (typeof container === STRING) {
            if (container.charAt(0) === ".") {
                var className = container.slice(1);
                container = document.getElementsByClassName(className)[0];
            } else {
                var id;
                if (container.charAt(0) !== "#") id = container;
                else id = container.slice(1);
                container = document.getElementById(id);
            }
            if (!container) throw "Can not find container in document with id " + id;
        }
        this._setAttr("container", container);
        if (this.content) {
            if (this.content.parentElement) this.content.parentElement.removeChild(this.content);
            container.appendChild(this.content);
        }
        return this;
    }
    shouldDrawHit() {
        return true;
    }
    clear() {
        var layers = this.children, len = layers.length, n;
        for(n = 0; n < len; n++)layers[n].clear();
        return this;
    }
    clone(obj) {
        if (!obj) obj = {};
        obj.container = typeof document !== "undefined" && document.createElement("div");
        return (0, _containerJs.Container).prototype.clone.call(this, obj);
    }
    destroy() {
        super.destroy();
        var content = this.content;
        if (content && (0, _utilJs.Util)._isInDocument(content)) this.container().removeChild(content);
        var index = stages.indexOf(this);
        if (index > -1) stages.splice(index, 1);
        return this;
    }
    getPointerPosition() {
        const pos = this._pointerPositions[0] || this._changedPointerPositions[0];
        if (!pos) {
            (0, _utilJs.Util).warn(NO_POINTERS_MESSAGE);
            return null;
        }
        return {
            x: pos.x,
            y: pos.y
        };
    }
    _getPointerById(id) {
        return this._pointerPositions.find((p)=>p.id === id);
    }
    getPointersPositions() {
        return this._pointerPositions;
    }
    getStage() {
        return this;
    }
    getContent() {
        return this.content;
    }
    _toKonvaCanvas(config) {
        config = config || {};
        config.x = config.x || 0;
        config.y = config.y || 0;
        config.width = config.width || this.width();
        config.height = config.height || this.height();
        var canvas = new (0, _canvasJs.SceneCanvas)({
            width: config.width,
            height: config.height,
            pixelRatio: config.pixelRatio || 1
        });
        var _context = canvas.getContext()._context;
        var layers = this.children;
        if (config.x || config.y) _context.translate(-1 * config.x, -1 * config.y);
        layers.forEach(function(layer) {
            if (!layer.isVisible()) return;
            var layerCanvas = layer._toKonvaCanvas(config);
            _context.drawImage(layerCanvas._canvas, config.x, config.y, layerCanvas.getWidth() / layerCanvas.getPixelRatio(), layerCanvas.getHeight() / layerCanvas.getPixelRatio());
        });
        return canvas;
    }
    getIntersection(pos) {
        if (!pos) return null;
        var layers = this.children, len = layers.length, end = len - 1, n;
        for(n = end; n >= 0; n--){
            const shape = layers[n].getIntersection(pos);
            if (shape) return shape;
        }
        return null;
    }
    _resizeDOM() {
        var width = this.width();
        var height = this.height();
        if (this.content) {
            this.content.style.width = width + PX;
            this.content.style.height = height + PX;
        }
        this.bufferCanvas.setSize(width, height);
        this.bufferHitCanvas.setSize(width, height);
        this.children.forEach((layer)=>{
            layer.setSize({
                width,
                height
            });
            layer.draw();
        });
    }
    add(layer, ...rest) {
        if (arguments.length > 1) {
            for(var i = 0; i < arguments.length; i++)this.add(arguments[i]);
            return this;
        }
        super.add(layer);
        var length = this.children.length;
        if (length > MAX_LAYERS_NUMBER) (0, _utilJs.Util).warn("The stage has " + length + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.");
        layer.setSize({
            width: this.width(),
            height: this.height()
        });
        layer.draw();
        if ((0, _globalJs.Konva).isBrowser) this.content.appendChild(layer.canvas._canvas);
        return this;
    }
    getParent() {
        return null;
    }
    getLayer() {
        return null;
    }
    hasPointerCapture(pointerId) {
        return _pointerEventsJs.hasPointerCapture(pointerId, this);
    }
    setPointerCapture(pointerId) {
        _pointerEventsJs.setPointerCapture(pointerId, this);
    }
    releaseCapture(pointerId) {
        _pointerEventsJs.releaseCapture(pointerId, this);
    }
    getLayers() {
        return this.children;
    }
    _bindContentEvents() {
        if (!(0, _globalJs.Konva).isBrowser) return;
        EVENTS.forEach(([event, methodName])=>{
            this.content.addEventListener(event, (evt)=>{
                this[methodName](evt);
            });
        });
    }
    _pointerenter(evt) {
        this.setPointersPositions(evt);
        const events = getEventsMap(evt.type);
        this._fire(events.pointerenter, {
            evt: evt,
            target: this,
            currentTarget: this
        });
    }
    _pointerover(evt) {
        this.setPointersPositions(evt);
        const events = getEventsMap(evt.type);
        this._fire(events.pointerover, {
            evt: evt,
            target: this,
            currentTarget: this
        });
    }
    _getTargetShape(evenType) {
        let shape = this[evenType + "targetShape"];
        if (shape && !shape.getStage()) shape = null;
        return shape;
    }
    _pointerleave(evt) {
        const events = getEventsMap(evt.type);
        const eventType = getEventType(evt.type);
        if (!events) return;
        this.setPointersPositions(evt);
        var targetShape = this._getTargetShape(eventType);
        var eventsEnabled = !(0, _dragAndDropJs.DD).isDragging || (0, _globalJs.Konva).hitOnDragEnabled;
        if (targetShape && eventsEnabled) {
            targetShape._fireAndBubble(events.pointerout, {
                evt: evt
            });
            targetShape._fireAndBubble(events.pointerleave, {
                evt: evt
            });
            this._fire(events.pointerleave, {
                evt: evt,
                target: this,
                currentTarget: this
            });
            this[eventType + "targetShape"] = null;
        } else if (eventsEnabled) {
            this._fire(events.pointerleave, {
                evt: evt,
                target: this,
                currentTarget: this
            });
            this._fire(events.pointerout, {
                evt: evt,
                target: this,
                currentTarget: this
            });
        }
        this.pointerPos = undefined;
        this._pointerPositions = [];
    }
    _pointerdown(evt) {
        const events = getEventsMap(evt.type);
        const eventType = getEventType(evt.type);
        if (!events) return;
        this.setPointersPositions(evt);
        var triggeredOnShape = false;
        this._changedPointerPositions.forEach((pos)=>{
            var shape = this.getIntersection(pos);
            (0, _dragAndDropJs.DD).justDragged = false;
            (0, _globalJs.Konva)["_" + eventType + "ListenClick"] = true;
            const hasShape = shape && shape.isListening();
            if (!hasShape) return;
            if ((0, _globalJs.Konva).capturePointerEventsEnabled) shape.setPointerCapture(pos.id);
            this[eventType + "ClickStartShape"] = shape;
            shape._fireAndBubble(events.pointerdown, {
                evt: evt,
                pointerId: pos.id
            });
            triggeredOnShape = true;
            const isTouch = evt.type.indexOf("touch") >= 0;
            if (shape.preventDefault() && evt.cancelable && isTouch) evt.preventDefault();
        });
        if (!triggeredOnShape) this._fire(events.pointerdown, {
            evt: evt,
            target: this,
            currentTarget: this,
            pointerId: this._pointerPositions[0].id
        });
    }
    _pointermove(evt) {
        const events = getEventsMap(evt.type);
        const eventType = getEventType(evt.type);
        if (!events) return;
        if ((0, _dragAndDropJs.DD).isDragging && (0, _dragAndDropJs.DD).node.preventDefault() && evt.cancelable) evt.preventDefault();
        this.setPointersPositions(evt);
        var eventsEnabled = !(0, _dragAndDropJs.DD).isDragging || (0, _globalJs.Konva).hitOnDragEnabled;
        if (!eventsEnabled) return;
        var processedShapesIds = {};
        let triggeredOnShape = false;
        var targetShape = this._getTargetShape(eventType);
        this._changedPointerPositions.forEach((pos)=>{
            const shape = _pointerEventsJs.getCapturedShape(pos.id) || this.getIntersection(pos);
            const pointerId = pos.id;
            const event = {
                evt: evt,
                pointerId
            };
            var differentTarget = targetShape !== shape;
            if (differentTarget && targetShape) {
                targetShape._fireAndBubble(events.pointerout, Object.assign({}, event), shape);
                targetShape._fireAndBubble(events.pointerleave, Object.assign({}, event), shape);
            }
            if (shape) {
                if (processedShapesIds[shape._id]) return;
                processedShapesIds[shape._id] = true;
            }
            if (shape && shape.isListening()) {
                triggeredOnShape = true;
                if (differentTarget) {
                    shape._fireAndBubble(events.pointerover, Object.assign({}, event), targetShape);
                    shape._fireAndBubble(events.pointerenter, Object.assign({}, event), targetShape);
                    this[eventType + "targetShape"] = shape;
                }
                shape._fireAndBubble(events.pointermove, Object.assign({}, event));
            } else if (targetShape) {
                this._fire(events.pointerover, {
                    evt: evt,
                    target: this,
                    currentTarget: this,
                    pointerId
                });
                this[eventType + "targetShape"] = null;
            }
        });
        if (!triggeredOnShape) this._fire(events.pointermove, {
            evt: evt,
            target: this,
            currentTarget: this,
            pointerId: this._changedPointerPositions[0].id
        });
    }
    _pointerup(evt) {
        const events = getEventsMap(evt.type);
        const eventType = getEventType(evt.type);
        if (!events) return;
        this.setPointersPositions(evt);
        const clickStartShape = this[eventType + "ClickStartShape"];
        const clickEndShape = this[eventType + "ClickEndShape"];
        var processedShapesIds = {};
        let triggeredOnShape = false;
        this._changedPointerPositions.forEach((pos)=>{
            const shape = _pointerEventsJs.getCapturedShape(pos.id) || this.getIntersection(pos);
            if (shape) {
                shape.releaseCapture(pos.id);
                if (processedShapesIds[shape._id]) return;
                processedShapesIds[shape._id] = true;
            }
            const pointerId = pos.id;
            const event = {
                evt: evt,
                pointerId
            };
            let fireDblClick = false;
            if ((0, _globalJs.Konva)["_" + eventType + "InDblClickWindow"]) {
                fireDblClick = true;
                clearTimeout(this[eventType + "DblTimeout"]);
            } else if (!(0, _dragAndDropJs.DD).justDragged) {
                (0, _globalJs.Konva)["_" + eventType + "InDblClickWindow"] = true;
                clearTimeout(this[eventType + "DblTimeout"]);
            }
            this[eventType + "DblTimeout"] = setTimeout(function() {
                (0, _globalJs.Konva)["_" + eventType + "InDblClickWindow"] = false;
            }, (0, _globalJs.Konva).dblClickWindow);
            if (shape && shape.isListening()) {
                triggeredOnShape = true;
                this[eventType + "ClickEndShape"] = shape;
                shape._fireAndBubble(events.pointerup, Object.assign({}, event));
                if ((0, _globalJs.Konva)["_" + eventType + "ListenClick"] && clickStartShape && clickStartShape === shape) {
                    shape._fireAndBubble(events.pointerclick, Object.assign({}, event));
                    if (fireDblClick && clickEndShape && clickEndShape === shape) shape._fireAndBubble(events.pointerdblclick, Object.assign({}, event));
                }
            } else {
                this[eventType + "ClickEndShape"] = null;
                if ((0, _globalJs.Konva)["_" + eventType + "ListenClick"]) this._fire(events.pointerclick, {
                    evt: evt,
                    target: this,
                    currentTarget: this,
                    pointerId
                });
                if (fireDblClick) this._fire(events.pointerdblclick, {
                    evt: evt,
                    target: this,
                    currentTarget: this,
                    pointerId
                });
            }
        });
        if (!triggeredOnShape) this._fire(events.pointerup, {
            evt: evt,
            target: this,
            currentTarget: this,
            pointerId: this._changedPointerPositions[0].id
        });
        (0, _globalJs.Konva)["_" + eventType + "ListenClick"] = false;
        if (evt.cancelable && eventType !== "touch") evt.preventDefault();
    }
    _contextmenu(evt) {
        this.setPointersPositions(evt);
        var shape = this.getIntersection(this.getPointerPosition());
        if (shape && shape.isListening()) shape._fireAndBubble(CONTEXTMENU, {
            evt: evt
        });
        else this._fire(CONTEXTMENU, {
            evt: evt,
            target: this,
            currentTarget: this
        });
    }
    _wheel(evt) {
        this.setPointersPositions(evt);
        var shape = this.getIntersection(this.getPointerPosition());
        if (shape && shape.isListening()) shape._fireAndBubble(WHEEL, {
            evt: evt
        });
        else this._fire(WHEEL, {
            evt: evt,
            target: this,
            currentTarget: this
        });
    }
    _pointercancel(evt) {
        this.setPointersPositions(evt);
        const shape = _pointerEventsJs.getCapturedShape(evt.pointerId) || this.getIntersection(this.getPointerPosition());
        if (shape) shape._fireAndBubble(POINTERUP, _pointerEventsJs.createEvent(evt));
        _pointerEventsJs.releaseCapture(evt.pointerId);
    }
    _lostpointercapture(evt) {
        _pointerEventsJs.releaseCapture(evt.pointerId);
    }
    setPointersPositions(evt) {
        var contentPosition = this._getContentPosition(), x = null, y = null;
        evt = evt ? evt : window.event;
        if (evt.touches !== undefined) {
            this._pointerPositions = [];
            this._changedPointerPositions = [];
            Array.prototype.forEach.call(evt.touches, (touch)=>{
                this._pointerPositions.push({
                    id: touch.identifier,
                    x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
                    y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
                });
            });
            Array.prototype.forEach.call(evt.changedTouches || evt.touches, (touch)=>{
                this._changedPointerPositions.push({
                    id: touch.identifier,
                    x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
                    y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
                });
            });
        } else {
            x = (evt.clientX - contentPosition.left) / contentPosition.scaleX;
            y = (evt.clientY - contentPosition.top) / contentPosition.scaleY;
            this.pointerPos = {
                x: x,
                y: y
            };
            this._pointerPositions = [
                {
                    x,
                    y,
                    id: (0, _utilJs.Util)._getFirstPointerId(evt)
                }
            ];
            this._changedPointerPositions = [
                {
                    x,
                    y,
                    id: (0, _utilJs.Util)._getFirstPointerId(evt)
                }, 
            ];
        }
    }
    _setPointerPosition(evt) {
        (0, _utilJs.Util).warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.');
        this.setPointersPositions(evt);
    }
    _getContentPosition() {
        if (!this.content || !this.content.getBoundingClientRect) return {
            top: 0,
            left: 0,
            scaleX: 1,
            scaleY: 1
        };
        var rect = this.content.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left,
            scaleX: rect.width / this.content.clientWidth || 1,
            scaleY: rect.height / this.content.clientHeight || 1
        };
    }
    _buildDOM() {
        this.bufferCanvas = new (0, _canvasJs.SceneCanvas)({
            width: this.width(),
            height: this.height()
        });
        this.bufferHitCanvas = new (0, _canvasJs.HitCanvas)({
            pixelRatio: 1,
            width: this.width(),
            height: this.height()
        });
        if (!(0, _globalJs.Konva).isBrowser) return;
        var container = this.container();
        if (!container) throw "Stage has no container. A container is required.";
        container.innerHTML = "";
        this.content = document.createElement("div");
        this.content.style.position = "relative";
        this.content.style.userSelect = "none";
        this.content.className = "konvajs-content";
        this.content.setAttribute("role", "presentation");
        container.appendChild(this.content);
        this._resizeDOM();
    }
    cache() {
        (0, _utilJs.Util).warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.");
        return this;
    }
    clearCache() {
        return this;
    }
    batchDraw() {
        this.getChildren().forEach(function(layer) {
            layer.batchDraw();
        });
        return this;
    }
}
Stage.prototype.nodeType = STAGE;
(0, _globalJs._registerNode)(Stage);
(0, _factoryJs.Factory).addGetterSetter(Stage, "container");

},{"./Util.js":"a2B39","./Factory.js":"cBseC","./Container.js":"5xUok","./Global.js":"asjHM","./Canvas.js":"2h78K","./DragAndDrop.js":"1gkRd","./PointerEvents.js":"aGqy9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2B39":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transform", ()=>Transform);
parcelHelpers.export(exports, "Util", ()=>Util);
var _globalJs = require("./Global.js");
class Transform {
    constructor(m = [
        1,
        0,
        0,
        1,
        0,
        0
    ]){
        this.dirty = false;
        this.m = m && m.slice() || [
            1,
            0,
            0,
            1,
            0,
            0
        ];
    }
    reset() {
        this.m[0] = 1;
        this.m[1] = 0;
        this.m[2] = 0;
        this.m[3] = 1;
        this.m[4] = 0;
        this.m[5] = 0;
    }
    copy() {
        return new Transform(this.m);
    }
    copyInto(tr) {
        tr.m[0] = this.m[0];
        tr.m[1] = this.m[1];
        tr.m[2] = this.m[2];
        tr.m[3] = this.m[3];
        tr.m[4] = this.m[4];
        tr.m[5] = this.m[5];
    }
    point(point) {
        var m = this.m;
        return {
            x: m[0] * point.x + m[2] * point.y + m[4],
            y: m[1] * point.x + m[3] * point.y + m[5]
        };
    }
    translate(x, y) {
        this.m[4] += this.m[0] * x + this.m[2] * y;
        this.m[5] += this.m[1] * x + this.m[3] * y;
        return this;
    }
    scale(sx, sy) {
        this.m[0] *= sx;
        this.m[1] *= sx;
        this.m[2] *= sy;
        this.m[3] *= sy;
        return this;
    }
    rotate(rad) {
        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var m11 = this.m[0] * c + this.m[2] * s;
        var m12 = this.m[1] * c + this.m[3] * s;
        var m21 = this.m[0] * -s + this.m[2] * c;
        var m22 = this.m[1] * -s + this.m[3] * c;
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        return this;
    }
    getTranslation() {
        return {
            x: this.m[4],
            y: this.m[5]
        };
    }
    skew(sx, sy) {
        var m11 = this.m[0] + this.m[2] * sy;
        var m12 = this.m[1] + this.m[3] * sy;
        var m21 = this.m[2] + this.m[0] * sx;
        var m22 = this.m[3] + this.m[1] * sx;
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        return this;
    }
    multiply(matrix) {
        var m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
        var m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];
        var m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
        var m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];
        var dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
        var dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        this.m[4] = dx;
        this.m[5] = dy;
        return this;
    }
    invert() {
        var d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
        var m0 = this.m[3] * d;
        var m1 = -this.m[1] * d;
        var m2 = -this.m[2] * d;
        var m3 = this.m[0] * d;
        var m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
        var m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
        this.m[0] = m0;
        this.m[1] = m1;
        this.m[2] = m2;
        this.m[3] = m3;
        this.m[4] = m4;
        this.m[5] = m5;
        return this;
    }
    getMatrix() {
        return this.m;
    }
    decompose() {
        var a = this.m[0];
        var b = this.m[1];
        var c = this.m[2];
        var d = this.m[3];
        var e = this.m[4];
        var f = this.m[5];
        var delta = a * d - b * c;
        let result = {
            x: e,
            y: f,
            rotation: 0,
            scaleX: 0,
            scaleY: 0,
            skewX: 0,
            skewY: 0
        };
        if (a != 0 || b != 0) {
            var r = Math.sqrt(a * a + b * b);
            result.rotation = b > 0 ? Math.acos(a / r) : -Math.acos(a / r);
            result.scaleX = r;
            result.scaleY = delta / r;
            result.skewX = (a * c + b * d) / delta;
            result.skewY = 0;
        } else if (c != 0 || d != 0) {
            var s = Math.sqrt(c * c + d * d);
            result.rotation = Math.PI / 2 - (d > 0 ? Math.acos(-c / s) : -Math.acos(c / s));
            result.scaleX = delta / s;
            result.scaleY = s;
            result.skewX = 0;
            result.skewY = (a * c + b * d) / delta;
        }
        result.rotation = Util._getRotation(result.rotation);
        return result;
    }
}
var OBJECT_ARRAY = "[object Array]", OBJECT_NUMBER = "[object Number]", OBJECT_STRING = "[object String]", OBJECT_BOOLEAN = "[object Boolean]", PI_OVER_DEG180 = Math.PI / 180, DEG180_OVER_PI = 180 / Math.PI, HASH = "#", EMPTY_STRING = "", ZERO = "0", KONVA_WARNING = "Konva warning: ", KONVA_ERROR = "Konva error: ", RGB_PAREN = "rgb(", COLORS = {
    aliceblue: [
        240,
        248,
        255
    ],
    antiquewhite: [
        250,
        235,
        215
    ],
    aqua: [
        0,
        255,
        255
    ],
    aquamarine: [
        127,
        255,
        212
    ],
    azure: [
        240,
        255,
        255
    ],
    beige: [
        245,
        245,
        220
    ],
    bisque: [
        255,
        228,
        196
    ],
    black: [
        0,
        0,
        0
    ],
    blanchedalmond: [
        255,
        235,
        205
    ],
    blue: [
        0,
        0,
        255
    ],
    blueviolet: [
        138,
        43,
        226
    ],
    brown: [
        165,
        42,
        42
    ],
    burlywood: [
        222,
        184,
        135
    ],
    cadetblue: [
        95,
        158,
        160
    ],
    chartreuse: [
        127,
        255,
        0
    ],
    chocolate: [
        210,
        105,
        30
    ],
    coral: [
        255,
        127,
        80
    ],
    cornflowerblue: [
        100,
        149,
        237
    ],
    cornsilk: [
        255,
        248,
        220
    ],
    crimson: [
        220,
        20,
        60
    ],
    cyan: [
        0,
        255,
        255
    ],
    darkblue: [
        0,
        0,
        139
    ],
    darkcyan: [
        0,
        139,
        139
    ],
    darkgoldenrod: [
        184,
        132,
        11
    ],
    darkgray: [
        169,
        169,
        169
    ],
    darkgreen: [
        0,
        100,
        0
    ],
    darkgrey: [
        169,
        169,
        169
    ],
    darkkhaki: [
        189,
        183,
        107
    ],
    darkmagenta: [
        139,
        0,
        139
    ],
    darkolivegreen: [
        85,
        107,
        47
    ],
    darkorange: [
        255,
        140,
        0
    ],
    darkorchid: [
        153,
        50,
        204
    ],
    darkred: [
        139,
        0,
        0
    ],
    darksalmon: [
        233,
        150,
        122
    ],
    darkseagreen: [
        143,
        188,
        143
    ],
    darkslateblue: [
        72,
        61,
        139
    ],
    darkslategray: [
        47,
        79,
        79
    ],
    darkslategrey: [
        47,
        79,
        79
    ],
    darkturquoise: [
        0,
        206,
        209
    ],
    darkviolet: [
        148,
        0,
        211
    ],
    deeppink: [
        255,
        20,
        147
    ],
    deepskyblue: [
        0,
        191,
        255
    ],
    dimgray: [
        105,
        105,
        105
    ],
    dimgrey: [
        105,
        105,
        105
    ],
    dodgerblue: [
        30,
        144,
        255
    ],
    firebrick: [
        178,
        34,
        34
    ],
    floralwhite: [
        255,
        255,
        240
    ],
    forestgreen: [
        34,
        139,
        34
    ],
    fuchsia: [
        255,
        0,
        255
    ],
    gainsboro: [
        220,
        220,
        220
    ],
    ghostwhite: [
        248,
        248,
        255
    ],
    gold: [
        255,
        215,
        0
    ],
    goldenrod: [
        218,
        165,
        32
    ],
    gray: [
        128,
        128,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    greenyellow: [
        173,
        255,
        47
    ],
    grey: [
        128,
        128,
        128
    ],
    honeydew: [
        240,
        255,
        240
    ],
    hotpink: [
        255,
        105,
        180
    ],
    indianred: [
        205,
        92,
        92
    ],
    indigo: [
        75,
        0,
        130
    ],
    ivory: [
        255,
        255,
        240
    ],
    khaki: [
        240,
        230,
        140
    ],
    lavender: [
        230,
        230,
        250
    ],
    lavenderblush: [
        255,
        240,
        245
    ],
    lawngreen: [
        124,
        252,
        0
    ],
    lemonchiffon: [
        255,
        250,
        205
    ],
    lightblue: [
        173,
        216,
        230
    ],
    lightcoral: [
        240,
        128,
        128
    ],
    lightcyan: [
        224,
        255,
        255
    ],
    lightgoldenrodyellow: [
        250,
        250,
        210
    ],
    lightgray: [
        211,
        211,
        211
    ],
    lightgreen: [
        144,
        238,
        144
    ],
    lightgrey: [
        211,
        211,
        211
    ],
    lightpink: [
        255,
        182,
        193
    ],
    lightsalmon: [
        255,
        160,
        122
    ],
    lightseagreen: [
        32,
        178,
        170
    ],
    lightskyblue: [
        135,
        206,
        250
    ],
    lightslategray: [
        119,
        136,
        153
    ],
    lightslategrey: [
        119,
        136,
        153
    ],
    lightsteelblue: [
        176,
        196,
        222
    ],
    lightyellow: [
        255,
        255,
        224
    ],
    lime: [
        0,
        255,
        0
    ],
    limegreen: [
        50,
        205,
        50
    ],
    linen: [
        250,
        240,
        230
    ],
    magenta: [
        255,
        0,
        255
    ],
    maroon: [
        128,
        0,
        0
    ],
    mediumaquamarine: [
        102,
        205,
        170
    ],
    mediumblue: [
        0,
        0,
        205
    ],
    mediumorchid: [
        186,
        85,
        211
    ],
    mediumpurple: [
        147,
        112,
        219
    ],
    mediumseagreen: [
        60,
        179,
        113
    ],
    mediumslateblue: [
        123,
        104,
        238
    ],
    mediumspringgreen: [
        0,
        250,
        154
    ],
    mediumturquoise: [
        72,
        209,
        204
    ],
    mediumvioletred: [
        199,
        21,
        133
    ],
    midnightblue: [
        25,
        25,
        112
    ],
    mintcream: [
        245,
        255,
        250
    ],
    mistyrose: [
        255,
        228,
        225
    ],
    moccasin: [
        255,
        228,
        181
    ],
    navajowhite: [
        255,
        222,
        173
    ],
    navy: [
        0,
        0,
        128
    ],
    oldlace: [
        253,
        245,
        230
    ],
    olive: [
        128,
        128,
        0
    ],
    olivedrab: [
        107,
        142,
        35
    ],
    orange: [
        255,
        165,
        0
    ],
    orangered: [
        255,
        69,
        0
    ],
    orchid: [
        218,
        112,
        214
    ],
    palegoldenrod: [
        238,
        232,
        170
    ],
    palegreen: [
        152,
        251,
        152
    ],
    paleturquoise: [
        175,
        238,
        238
    ],
    palevioletred: [
        219,
        112,
        147
    ],
    papayawhip: [
        255,
        239,
        213
    ],
    peachpuff: [
        255,
        218,
        185
    ],
    peru: [
        205,
        133,
        63
    ],
    pink: [
        255,
        192,
        203
    ],
    plum: [
        221,
        160,
        203
    ],
    powderblue: [
        176,
        224,
        230
    ],
    purple: [
        128,
        0,
        128
    ],
    rebeccapurple: [
        102,
        51,
        153
    ],
    red: [
        255,
        0,
        0
    ],
    rosybrown: [
        188,
        143,
        143
    ],
    royalblue: [
        65,
        105,
        225
    ],
    saddlebrown: [
        139,
        69,
        19
    ],
    salmon: [
        250,
        128,
        114
    ],
    sandybrown: [
        244,
        164,
        96
    ],
    seagreen: [
        46,
        139,
        87
    ],
    seashell: [
        255,
        245,
        238
    ],
    sienna: [
        160,
        82,
        45
    ],
    silver: [
        192,
        192,
        192
    ],
    skyblue: [
        135,
        206,
        235
    ],
    slateblue: [
        106,
        90,
        205
    ],
    slategray: [
        119,
        128,
        144
    ],
    slategrey: [
        119,
        128,
        144
    ],
    snow: [
        255,
        255,
        250
    ],
    springgreen: [
        0,
        255,
        127
    ],
    steelblue: [
        70,
        130,
        180
    ],
    tan: [
        210,
        180,
        140
    ],
    teal: [
        0,
        128,
        128
    ],
    thistle: [
        216,
        191,
        216
    ],
    transparent: [
        255,
        255,
        255,
        0
    ],
    tomato: [
        255,
        99,
        71
    ],
    turquoise: [
        64,
        224,
        208
    ],
    violet: [
        238,
        130,
        238
    ],
    wheat: [
        245,
        222,
        179
    ],
    white: [
        255,
        255,
        255
    ],
    whitesmoke: [
        245,
        245,
        245
    ],
    yellow: [
        255,
        255,
        0
    ],
    yellowgreen: [
        154,
        205,
        5
    ]
}, RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, animQueue = [];
const req = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame || function(f) {
    setTimeout(f, 60);
};
const Util = {
    _isElement (obj) {
        return !!(obj && obj.nodeType == 1);
    },
    _isFunction (obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    },
    _isPlainObject (obj) {
        return !!obj && obj.constructor === Object;
    },
    _isArray (obj) {
        return Object.prototype.toString.call(obj) === OBJECT_ARRAY;
    },
    _isNumber (obj) {
        return Object.prototype.toString.call(obj) === OBJECT_NUMBER && !isNaN(obj) && isFinite(obj);
    },
    _isString (obj) {
        return Object.prototype.toString.call(obj) === OBJECT_STRING;
    },
    _isBoolean (obj) {
        return Object.prototype.toString.call(obj) === OBJECT_BOOLEAN;
    },
    isObject (val) {
        return val instanceof Object;
    },
    isValidSelector (selector) {
        if (typeof selector !== "string") return false;
        var firstChar = selector[0];
        return firstChar === "#" || firstChar === "." || firstChar === firstChar.toUpperCase();
    },
    _sign (number) {
        if (number === 0) return 1;
        if (number > 0) return 1;
        else return -1;
    },
    requestAnimFrame (callback) {
        animQueue.push(callback);
        if (animQueue.length === 1) req(function() {
            const queue = animQueue;
            animQueue = [];
            queue.forEach(function(cb) {
                cb();
            });
        });
    },
    createCanvasElement () {
        var canvas = document.createElement("canvas");
        try {
            canvas.style = canvas.style || {};
        } catch (e) {}
        return canvas;
    },
    createImageElement () {
        return document.createElement("img");
    },
    _isInDocument (el) {
        while(el = el.parentNode){
            if (el == document) return true;
        }
        return false;
    },
    _urlToImage (url, callback) {
        var imageObj = Util.createImageElement();
        imageObj.onload = function() {
            callback(imageObj);
        };
        imageObj.src = url;
    },
    _rgbToHex (r, g, b) {
        return (16777216 + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    _hexToRgb (hex) {
        hex = hex.replace(HASH, EMPTY_STRING);
        var bigint = parseInt(hex, 16);
        return {
            r: bigint >> 16 & 255,
            g: bigint >> 8 & 255,
            b: bigint & 255
        };
    },
    getRandomColor () {
        var randColor = (Math.random() * 0xffffff << 0).toString(16);
        while(randColor.length < 6)randColor = ZERO + randColor;
        return HASH + randColor;
    },
    getRGB (color) {
        var rgb;
        if (color in COLORS) {
            rgb = COLORS[color];
            return {
                r: rgb[0],
                g: rgb[1],
                b: rgb[2]
            };
        } else if (color[0] === HASH) return this._hexToRgb(color.substring(1));
        else if (color.substr(0, 4) === RGB_PAREN) {
            rgb = RGB_REGEX.exec(color.replace(/ /g, ""));
            return {
                r: parseInt(rgb[1], 10),
                g: parseInt(rgb[2], 10),
                b: parseInt(rgb[3], 10)
            };
        } else return {
            r: 0,
            g: 0,
            b: 0
        };
    },
    colorToRGBA (str) {
        str = str || "black";
        return Util._namedColorToRBA(str) || Util._hex3ColorToRGBA(str) || Util._hex6ColorToRGBA(str) || Util._rgbColorToRGBA(str) || Util._rgbaColorToRGBA(str) || Util._hslColorToRGBA(str);
    },
    _namedColorToRBA (str) {
        var c = COLORS[str.toLowerCase()];
        if (!c) return null;
        return {
            r: c[0],
            g: c[1],
            b: c[2],
            a: 1
        };
    },
    _rgbColorToRGBA (str) {
        if (str.indexOf("rgb(") === 0) {
            str = str.match(/rgb\(([^)]+)\)/)[1];
            var parts = str.split(/ *, */).map(Number);
            return {
                r: parts[0],
                g: parts[1],
                b: parts[2],
                a: 1
            };
        }
    },
    _rgbaColorToRGBA (str) {
        if (str.indexOf("rgba(") === 0) {
            str = str.match(/rgba\(([^)]+)\)/)[1];
            var parts = str.split(/ *, */).map((n, index)=>{
                if (n.slice(-1) === "%") return index === 3 ? parseInt(n) / 100 : parseInt(n) / 100 * 255;
                return Number(n);
            });
            return {
                r: parts[0],
                g: parts[1],
                b: parts[2],
                a: parts[3]
            };
        }
    },
    _hex6ColorToRGBA (str) {
        if (str[0] === "#" && str.length === 7) return {
            r: parseInt(str.slice(1, 3), 16),
            g: parseInt(str.slice(3, 5), 16),
            b: parseInt(str.slice(5, 7), 16),
            a: 1
        };
    },
    _hex3ColorToRGBA (str) {
        if (str[0] === "#" && str.length === 4) return {
            r: parseInt(str[1] + str[1], 16),
            g: parseInt(str[2] + str[2], 16),
            b: parseInt(str[3] + str[3], 16),
            a: 1
        };
    },
    _hslColorToRGBA (str) {
        if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(str)) {
            const [_, ...hsl] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(str);
            const h = Number(hsl[0]) / 360;
            const s = Number(hsl[1]) / 100;
            const l = Number(hsl[2]) / 100;
            let t2;
            let t3;
            let val;
            if (s === 0) {
                val = l * 255;
                return {
                    r: Math.round(val),
                    g: Math.round(val),
                    b: Math.round(val),
                    a: 1
                };
            }
            if (l < 0.5) t2 = l * (1 + s);
            else t2 = l + s - l * s;
            const t1 = 2 * l - t2;
            const rgb = [
                0,
                0,
                0
            ];
            for(let i = 0; i < 3; i++){
                t3 = h + 1 / 3 * -(i - 1);
                if (t3 < 0) t3++;
                if (t3 > 1) t3--;
                if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;
                else if (2 * t3 < 1) val = t2;
                else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
                else val = t1;
                rgb[i] = val * 255;
            }
            return {
                r: Math.round(rgb[0]),
                g: Math.round(rgb[1]),
                b: Math.round(rgb[2]),
                a: 1
            };
        }
    },
    haveIntersection (r1, r2) {
        return !(r2.x > r1.x + r1.width || r2.x + r2.width < r1.x || r2.y > r1.y + r1.height || r2.y + r2.height < r1.y);
    },
    cloneObject (obj) {
        var retObj = {};
        for(var key in obj){
            if (this._isPlainObject(obj[key])) retObj[key] = this.cloneObject(obj[key]);
            else if (this._isArray(obj[key])) retObj[key] = this.cloneArray(obj[key]);
            else retObj[key] = obj[key];
        }
        return retObj;
    },
    cloneArray (arr) {
        return arr.slice(0);
    },
    degToRad (deg) {
        return deg * PI_OVER_DEG180;
    },
    radToDeg (rad) {
        return rad * DEG180_OVER_PI;
    },
    _degToRad (deg) {
        Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead.");
        return Util.degToRad(deg);
    },
    _radToDeg (rad) {
        Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead.");
        return Util.radToDeg(rad);
    },
    _getRotation (radians) {
        return (0, _globalJs.Konva).angleDeg ? Util.radToDeg(radians) : radians;
    },
    _capitalize (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    throw (str) {
        throw new Error(KONVA_ERROR + str);
    },
    error (str) {
        console.error(KONVA_ERROR + str);
    },
    warn (str) {
        if (!(0, _globalJs.Konva).showWarnings) return;
        console.warn(KONVA_WARNING + str);
    },
    each (obj, func) {
        for(var key in obj)func(key, obj[key]);
    },
    _inRange (val, left, right) {
        return left <= val && val < right;
    },
    _getProjectionToSegment (x1, y1, x2, y2, x3, y3) {
        var x, y, dist;
        var pd2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
        if (pd2 == 0) {
            x = x1;
            y = y1;
            dist = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
        } else {
            var u = ((x3 - x1) * (x2 - x1) + (y3 - y1) * (y2 - y1)) / pd2;
            if (u < 0) {
                x = x1;
                y = y1;
                dist = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3);
            } else if (u > 1.0) {
                x = x2;
                y = y2;
                dist = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3);
            } else {
                x = x1 + u * (x2 - x1);
                y = y1 + u * (y2 - y1);
                dist = (x - x3) * (x - x3) + (y - y3) * (y - y3);
            }
        }
        return [
            x,
            y,
            dist
        ];
    },
    _getProjectionToLine (pt, line, isClosed) {
        var pc = Util.cloneObject(pt);
        var dist = Number.MAX_VALUE;
        line.forEach(function(p1, i) {
            if (!isClosed && i === line.length - 1) return;
            var p2 = line[(i + 1) % line.length];
            var proj = Util._getProjectionToSegment(p1.x, p1.y, p2.x, p2.y, pt.x, pt.y);
            var px = proj[0], py = proj[1], pdist = proj[2];
            if (pdist < dist) {
                pc.x = px;
                pc.y = py;
                dist = pdist;
            }
        });
        return pc;
    },
    _prepareArrayForTween (startArray, endArray, isClosed) {
        var n, start = [], end = [];
        if (startArray.length > endArray.length) {
            var temp = endArray;
            endArray = startArray;
            startArray = temp;
        }
        for(n = 0; n < startArray.length; n += 2)start.push({
            x: startArray[n],
            y: startArray[n + 1]
        });
        for(n = 0; n < endArray.length; n += 2)end.push({
            x: endArray[n],
            y: endArray[n + 1]
        });
        var newStart = [];
        end.forEach(function(point) {
            var pr = Util._getProjectionToLine(point, start, isClosed);
            newStart.push(pr.x);
            newStart.push(pr.y);
        });
        return newStart;
    },
    _prepareToStringify (obj) {
        var desc;
        obj.visitedByCircularReferenceRemoval = true;
        for(var key in obj){
            if (!(obj.hasOwnProperty(key) && obj[key] && typeof obj[key] == "object")) continue;
            desc = Object.getOwnPropertyDescriptor(obj, key);
            if (obj[key].visitedByCircularReferenceRemoval || Util._isElement(obj[key])) {
                if (desc.configurable) delete obj[key];
                else return null;
            } else if (Util._prepareToStringify(obj[key]) === null) {
                if (desc.configurable) delete obj[key];
                else return null;
            }
        }
        delete obj.visitedByCircularReferenceRemoval;
        return obj;
    },
    _assign (target, source) {
        for(var key in source)target[key] = source[key];
        return target;
    },
    _getFirstPointerId (evt) {
        if (!evt.touches) return evt.pointerId || 999;
        else return evt.changedTouches[0].identifier;
    }
};

},{"./Global.js":"asjHM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"asjHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "glob", ()=>glob);
parcelHelpers.export(exports, "Konva", ()=>Konva);
parcelHelpers.export(exports, "_registerNode", ()=>_registerNode);
var global = arguments[3];
var PI_OVER_180 = Math.PI / 180;
function detectBrowser() {
    return typeof window !== "undefined" && (({}).toString.call(window) === "[object Window]" || ({}).toString.call(window) === "[object global]");
}
const glob = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" ? self : {};
const Konva = {
    _global: glob,
    version: "8.3.12",
    isBrowser: detectBrowser(),
    isUnminified: /param/.test((function(param) {}).toString()),
    dblClickWindow: 400,
    getAngle (angle) {
        return Konva.angleDeg ? angle * PI_OVER_180 : angle;
    },
    enableTrace: false,
    pointerEventsEnabled: true,
    autoDrawEnabled: true,
    hitOnDragEnabled: false,
    capturePointerEventsEnabled: false,
    _mouseListenClick: false,
    _touchListenClick: false,
    _pointerListenClick: false,
    _mouseInDblClickWindow: false,
    _touchInDblClickWindow: false,
    _pointerInDblClickWindow: false,
    _mouseDblClickPointerId: null,
    _touchDblClickPointerId: null,
    _pointerDblClickPointerId: null,
    pixelRatio: typeof window !== "undefined" && window.devicePixelRatio || 1,
    dragDistance: 3,
    angleDeg: true,
    showWarnings: true,
    dragButtons: [
        0,
        1
    ],
    isDragging () {
        return Konva["DD"].isDragging;
    },
    isDragReady () {
        return !!Konva["DD"].node;
    },
    document: glob.document,
    _injectGlobal (Konva) {
        glob.Konva = Konva;
    }
};
const _registerNode = (NodeClass)=>{
    Konva[NodeClass.prototype.getClassName()] = NodeClass;
};
Konva._injectGlobal(Konva);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cBseC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Factory", ()=>Factory);
var _utilJs = require("./Util.js");
var _validatorsJs = require("./Validators.js");
var GET = "get", SET = "set";
const Factory = {
    addGetterSetter (constructor, attr, def, validator, after) {
        Factory.addGetter(constructor, attr, def);
        Factory.addSetter(constructor, attr, validator, after);
        Factory.addOverloadedGetterSetter(constructor, attr);
    },
    addGetter (constructor, attr, def) {
        var method = GET + (0, _utilJs.Util)._capitalize(attr);
        constructor.prototype[method] = constructor.prototype[method] || function() {
            var val = this.attrs[attr];
            return val === undefined ? def : val;
        };
    },
    addSetter (constructor, attr, validator, after) {
        var method = SET + (0, _utilJs.Util)._capitalize(attr);
        if (!constructor.prototype[method]) Factory.overWriteSetter(constructor, attr, validator, after);
    },
    overWriteSetter (constructor, attr, validator, after) {
        var method = SET + (0, _utilJs.Util)._capitalize(attr);
        constructor.prototype[method] = function(val) {
            if (validator && val !== undefined && val !== null) val = validator.call(this, val, attr);
            this._setAttr(attr, val);
            if (after) after.call(this);
            return this;
        };
    },
    addComponentsGetterSetter (constructor, attr, components, validator, after) {
        var len = components.length, capitalize = (0, _utilJs.Util)._capitalize, getter = GET + capitalize(attr), setter = SET + capitalize(attr), n, component;
        constructor.prototype[getter] = function() {
            var ret = {};
            for(n = 0; n < len; n++){
                component = components[n];
                ret[component] = this.getAttr(attr + capitalize(component));
            }
            return ret;
        };
        var basicValidator = (0, _validatorsJs.getComponentValidator)(components);
        constructor.prototype[setter] = function(val) {
            var oldVal = this.attrs[attr], key;
            if (validator) val = validator.call(this, val);
            if (basicValidator) basicValidator.call(this, val, attr);
            for(key in val){
                if (!val.hasOwnProperty(key)) continue;
                this._setAttr(attr + capitalize(key), val[key]);
            }
            if (!val) components.forEach((component)=>{
                this._setAttr(attr + capitalize(component), undefined);
            });
            this._fireChangeEvent(attr, oldVal, val);
            if (after) after.call(this);
            return this;
        };
        Factory.addOverloadedGetterSetter(constructor, attr);
    },
    addOverloadedGetterSetter (constructor, attr) {
        var capitalizedAttr = (0, _utilJs.Util)._capitalize(attr), setter = SET + capitalizedAttr, getter = GET + capitalizedAttr;
        constructor.prototype[attr] = function() {
            if (arguments.length) {
                this[setter](arguments[0]);
                return this;
            }
            return this[getter]();
        };
    },
    addDeprecatedGetterSetter (constructor, attr, def, validator) {
        (0, _utilJs.Util).error("Adding deprecated " + attr);
        var method = GET + (0, _utilJs.Util)._capitalize(attr);
        var message = attr + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
        constructor.prototype[method] = function() {
            (0, _utilJs.Util).error(message);
            var val = this.attrs[attr];
            return val === undefined ? def : val;
        };
        Factory.addSetter(constructor, attr, validator, function() {
            (0, _utilJs.Util).error(message);
        });
        Factory.addOverloadedGetterSetter(constructor, attr);
    },
    backCompat (constructor, methods) {
        (0, _utilJs.Util).each(methods, function(oldMethodName, newMethodName) {
            var method = constructor.prototype[newMethodName];
            var oldGetter = GET + (0, _utilJs.Util)._capitalize(oldMethodName);
            var oldSetter = SET + (0, _utilJs.Util)._capitalize(oldMethodName);
            function deprecated() {
                method.apply(this, arguments);
                (0, _utilJs.Util).error('"' + oldMethodName + '" method is deprecated and will be removed soon. Use ""' + newMethodName + '" instead.');
            }
            constructor.prototype[oldMethodName] = deprecated;
            constructor.prototype[oldGetter] = deprecated;
            constructor.prototype[oldSetter] = deprecated;
        });
    },
    afterSetFilter () {
        this._filterUpToDate = false;
    }
};

},{"./Util.js":"a2B39","./Validators.js":"gkzNd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkzNd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RGBComponent", ()=>RGBComponent);
parcelHelpers.export(exports, "alphaComponent", ()=>alphaComponent);
parcelHelpers.export(exports, "getNumberValidator", ()=>getNumberValidator);
parcelHelpers.export(exports, "getNumberOrArrayOfNumbersValidator", ()=>getNumberOrArrayOfNumbersValidator);
parcelHelpers.export(exports, "getNumberOrAutoValidator", ()=>getNumberOrAutoValidator);
parcelHelpers.export(exports, "getStringValidator", ()=>getStringValidator);
parcelHelpers.export(exports, "getStringOrGradientValidator", ()=>getStringOrGradientValidator);
parcelHelpers.export(exports, "getFunctionValidator", ()=>getFunctionValidator);
parcelHelpers.export(exports, "getNumberArrayValidator", ()=>getNumberArrayValidator);
parcelHelpers.export(exports, "getBooleanValidator", ()=>getBooleanValidator);
parcelHelpers.export(exports, "getComponentValidator", ()=>getComponentValidator);
var _globalJs = require("./Global.js");
var _utilJs = require("./Util.js");
function _formatValue(val) {
    if ((0, _utilJs.Util)._isString(val)) return '"' + val + '"';
    if (Object.prototype.toString.call(val) === "[object Number]") return val;
    if ((0, _utilJs.Util)._isBoolean(val)) return val;
    return Object.prototype.toString.call(val);
}
function RGBComponent(val) {
    if (val > 255) return 255;
    else if (val < 0) return 0;
    return Math.round(val);
}
function alphaComponent(val) {
    if (val > 1) return 1;
    else if (val < 0.0001) return 0.0001;
    return val;
}
function getNumberValidator() {
    if ((0, _globalJs.Konva).isUnminified) return function(val, attr) {
        if (!(0, _utilJs.Util)._isNumber(val)) (0, _utilJs.Util).warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number.');
        return val;
    };
}
function getNumberOrArrayOfNumbersValidator(noOfElements) {
    if ((0, _globalJs.Konva).isUnminified) return function(val, attr) {
        let isNumber = (0, _utilJs.Util)._isNumber(val);
        let isValidArray = (0, _utilJs.Util)._isArray(val) && val.length == noOfElements;
        if (!isNumber && !isValidArray) (0, _utilJs.Util).warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or Array<number>(' + noOfElements + ")");
        return val;
    };
}
function getNumberOrAutoValidator() {
    if ((0, _globalJs.Konva).isUnminified) return function(val, attr) {
        var isNumber = (0, _utilJs.Util)._isNumber(val);
        var isAuto = val === "auto";
        if (!(isNumber || isAuto)) (0, _utilJs.Util).warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or "auto".');
        return val;
    };
}
function getStringValidator() {
    if ((0, _globalJs.Konva).isUnminified) return function(val, attr) {
        if (!(0, _utilJs.Util)._isString(val)) (0, _utilJs.Util).warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string.');
        return val;
    };
}
function getStringOrGradientValidator() {
    if ((0, _globalJs.Konva).isUnminified) return function(val, attr) {
        const isString = (0, _utilJs.Util)._isString(val);
        const isGradient = Object.prototype.toString.call(val) === "[object CanvasGradient]" || val && val.addColorStop;
        if (!(isString || isGradient)) (0, _utilJs.Util).warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string or a native gradient.');
        return val;
    };
}
function getFunctionValidator() {
    if ((0, _globalJs.Konva).isUnminified) return function(val, attr) {
        if (!(0, _utilJs.Util)._isFunction(val)) (0, _utilJs.Util).warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a function.');
        return val;
    };
}
function getNumberArrayValidator() {
    if ((0, _globalJs.Konva).isUnminified) return function(val, attr) {
        const TypedArray = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
        if (TypedArray && val instanceof TypedArray) return val;
        if (!(0, _utilJs.Util)._isArray(val)) (0, _utilJs.Util).warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a array of numbers.');
        else val.forEach(function(item) {
            if (!(0, _utilJs.Util)._isNumber(item)) (0, _utilJs.Util).warn('"' + attr + '" attribute has non numeric element ' + item + ". Make sure that all elements are numbers.");
        });
        return val;
    };
}
function getBooleanValidator() {
    if ((0, _globalJs.Konva).isUnminified) return function(val, attr) {
        var isBool = val === true || val === false;
        if (!isBool) (0, _utilJs.Util).warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a boolean.');
        return val;
    };
}
function getComponentValidator(components) {
    if ((0, _globalJs.Konva).isUnminified) return function(val, attr) {
        if (val === undefined || val === null) return val;
        if (!(0, _utilJs.Util).isObject(val)) (0, _utilJs.Util).warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be an object with properties ' + components);
        return val;
    };
}

},{"./Global.js":"asjHM","./Util.js":"a2B39","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5xUok":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Container", ()=>Container);
var _factoryJs = require("./Factory.js");
var _nodeJs = require("./Node.js");
var _validatorsJs = require("./Validators.js");
class Container extends (0, _nodeJs.Node) {
    constructor(){
        super(...arguments);
        this.children = [];
    }
    getChildren(filterFunc) {
        if (!filterFunc) return this.children || [];
        const children = this.children || [];
        var results = [];
        children.forEach(function(child) {
            if (filterFunc(child)) results.push(child);
        });
        return results;
    }
    hasChildren() {
        return this.getChildren().length > 0;
    }
    removeChildren() {
        this.getChildren().forEach((child)=>{
            child.parent = null;
            child.index = 0;
            child.remove();
        });
        this.children = [];
        this._requestDraw();
        return this;
    }
    destroyChildren() {
        this.getChildren().forEach((child)=>{
            child.parent = null;
            child.index = 0;
            child.destroy();
        });
        this.children = [];
        this._requestDraw();
        return this;
    }
    add(...children) {
        if (arguments.length > 1) {
            for(var i = 0; i < arguments.length; i++)this.add(arguments[i]);
            return this;
        }
        var child = children[0];
        if (child.getParent()) {
            child.moveTo(this);
            return this;
        }
        this._validateAdd(child);
        child.index = this.getChildren().length;
        child.parent = this;
        child._clearCaches();
        this.getChildren().push(child);
        this._fire("add", {
            child: child
        });
        this._requestDraw();
        return this;
    }
    destroy() {
        if (this.hasChildren()) this.destroyChildren();
        super.destroy();
        return this;
    }
    find(selector) {
        return this._generalFind(selector, false);
    }
    findOne(selector) {
        var result = this._generalFind(selector, true);
        return result.length > 0 ? result[0] : undefined;
    }
    _generalFind(selector, findOne) {
        var retArr = [];
        this._descendants((node)=>{
            const valid = node._isMatch(selector);
            if (valid) retArr.push(node);
            if (valid && findOne) return true;
            return false;
        });
        return retArr;
    }
    _descendants(fn) {
        let shouldStop = false;
        const children = this.getChildren();
        for (const child of children){
            shouldStop = fn(child);
            if (shouldStop) return true;
            if (!child.hasChildren()) continue;
            shouldStop = child._descendants(fn);
            if (shouldStop) return true;
        }
        return false;
    }
    toObject() {
        var obj = (0, _nodeJs.Node).prototype.toObject.call(this);
        obj.children = [];
        this.getChildren().forEach((child)=>{
            obj.children.push(child.toObject());
        });
        return obj;
    }
    isAncestorOf(node) {
        var parent = node.getParent();
        while(parent){
            if (parent._id === this._id) return true;
            parent = parent.getParent();
        }
        return false;
    }
    clone(obj) {
        var node = (0, _nodeJs.Node).prototype.clone.call(this, obj);
        this.getChildren().forEach(function(no) {
            node.add(no.clone());
        });
        return node;
    }
    getAllIntersections(pos) {
        var arr = [];
        this.find("Shape").forEach(function(shape) {
            if (shape.isVisible() && shape.intersects(pos)) arr.push(shape);
        });
        return arr;
    }
    _clearSelfAndDescendantCache(attr) {
        var _a;
        super._clearSelfAndDescendantCache(attr);
        if (this.isCached()) return;
        (_a = this.children) === null || _a === void 0 || _a.forEach(function(node) {
            node._clearSelfAndDescendantCache(attr);
        });
    }
    _setChildrenIndices() {
        var _a;
        (_a = this.children) === null || _a === void 0 || _a.forEach(function(child, n) {
            child.index = n;
        });
        this._requestDraw();
    }
    drawScene(can, top) {
        var layer = this.getLayer(), canvas = can || layer && layer.getCanvas(), context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedSceneCanvas = cachedCanvas && cachedCanvas.scene;
        var caching = canvas && canvas.isCache;
        if (!this.isVisible() && !caching) return this;
        if (cachedSceneCanvas) {
            context.save();
            var m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedSceneCanvas(context);
            context.restore();
        } else this._drawChildren("drawScene", canvas, top);
        return this;
    }
    drawHit(can, top) {
        if (!this.shouldDrawHit(top)) return this;
        var layer = this.getLayer(), canvas = can || layer && layer.hitCanvas, context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
        if (cachedHitCanvas) {
            context.save();
            var m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedHitCanvas(context);
            context.restore();
        } else this._drawChildren("drawHit", canvas, top);
        return this;
    }
    _drawChildren(drawMethod, canvas, top) {
        var _a;
        var context = canvas && canvas.getContext(), clipWidth = this.clipWidth(), clipHeight = this.clipHeight(), clipFunc = this.clipFunc(), hasClip = clipWidth && clipHeight || clipFunc;
        const selfCache = top === this;
        if (hasClip) {
            context.save();
            var transform = this.getAbsoluteTransform(top);
            var m = transform.getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            context.beginPath();
            if (clipFunc) clipFunc.call(this, context, this);
            else {
                var clipX = this.clipX();
                var clipY = this.clipY();
                context.rect(clipX, clipY, clipWidth, clipHeight);
            }
            context.clip();
            m = transform.copy().invert().getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
        }
        var hasComposition = !selfCache && this.globalCompositeOperation() !== "source-over" && drawMethod === "drawScene";
        if (hasComposition) {
            context.save();
            context._applyGlobalCompositeOperation(this);
        }
        (_a = this.children) === null || _a === void 0 || _a.forEach(function(child) {
            child[drawMethod](canvas, top);
        });
        if (hasComposition) context.restore();
        if (hasClip) context.restore();
    }
    getClientRect(config) {
        var _a;
        config = config || {};
        var skipTransform = config.skipTransform;
        var relativeTo = config.relativeTo;
        var minX, minY, maxX, maxY;
        var selfRect = {
            x: Infinity,
            y: Infinity,
            width: 0,
            height: 0
        };
        var that = this;
        (_a = this.children) === null || _a === void 0 || _a.forEach(function(child) {
            if (!child.visible()) return;
            var rect = child.getClientRect({
                relativeTo: that,
                skipShadow: config.skipShadow,
                skipStroke: config.skipStroke
            });
            if (rect.width === 0 && rect.height === 0) return;
            if (minX === undefined) {
                minX = rect.x;
                minY = rect.y;
                maxX = rect.x + rect.width;
                maxY = rect.y + rect.height;
            } else {
                minX = Math.min(minX, rect.x);
                minY = Math.min(minY, rect.y);
                maxX = Math.max(maxX, rect.x + rect.width);
                maxY = Math.max(maxY, rect.y + rect.height);
            }
        });
        var shapes = this.find("Shape");
        var hasVisible = false;
        for(var i = 0; i < shapes.length; i++){
            var shape = shapes[i];
            if (shape._isVisible(this)) {
                hasVisible = true;
                break;
            }
        }
        if (hasVisible && minX !== undefined) selfRect = {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        };
        else selfRect = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        if (!skipTransform) return this._transformedRect(selfRect, relativeTo);
        return selfRect;
    }
}
(0, _factoryJs.Factory).addComponentsGetterSetter(Container, "clip", [
    "x",
    "y",
    "width",
    "height", 
]);
(0, _factoryJs.Factory).addGetterSetter(Container, "clipX", undefined, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Container, "clipY", undefined, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Container, "clipWidth", undefined, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Container, "clipHeight", undefined, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Container, "clipFunc");

},{"./Factory.js":"cBseC","./Node.js":"bfHol","./Validators.js":"gkzNd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfHol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Node", ()=>Node);
var _utilJs = require("./Util.js");
var _factoryJs = require("./Factory.js");
var _canvasJs = require("./Canvas.js");
var _globalJs = require("./Global.js");
var _dragAndDropJs = require("./DragAndDrop.js");
var _validatorsJs = require("./Validators.js");
var ABSOLUTE_OPACITY = "absoluteOpacity", ALL_LISTENERS = "allEventListeners", ABSOLUTE_TRANSFORM = "absoluteTransform", ABSOLUTE_SCALE = "absoluteScale", CANVAS = "canvas", CHANGE = "Change", CHILDREN = "children", KONVA = "konva", LISTENING = "listening", MOUSEENTER = "mouseenter", MOUSELEAVE = "mouseleave", NAME = "name", SET = "set", SHAPE = "Shape", SPACE = " ", STAGE = "stage", TRANSFORM = "transform", UPPER_STAGE = "Stage", VISIBLE = "visible", TRANSFORM_CHANGE_STR = [
    "xChange.konva",
    "yChange.konva",
    "scaleXChange.konva",
    "scaleYChange.konva",
    "skewXChange.konva",
    "skewYChange.konva",
    "rotationChange.konva",
    "offsetXChange.konva",
    "offsetYChange.konva",
    "transformsEnabledChange.konva", 
].join(SPACE);
let idCounter = 1;
class Node {
    constructor(config){
        this._id = idCounter++;
        this.eventListeners = {};
        this.attrs = {};
        this.index = 0;
        this._allEventListeners = null;
        this.parent = null;
        this._cache = new Map();
        this._attachedDepsListeners = new Map();
        this._lastPos = null;
        this._batchingTransformChange = false;
        this._needClearTransformCache = false;
        this._filterUpToDate = false;
        this._isUnderCache = false;
        this._dragEventId = null;
        this._shouldFireChangeEvents = false;
        this.setAttrs(config);
        this._shouldFireChangeEvents = true;
    }
    hasChildren() {
        return false;
    }
    _clearCache(attr) {
        if ((attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM) && this._cache.get(attr)) this._cache.get(attr).dirty = true;
        else if (attr) this._cache.delete(attr);
        else this._cache.clear();
    }
    _getCache(attr, privateGetter) {
        var cache = this._cache.get(attr);
        var isTransform = attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM;
        var invalid = cache === undefined || isTransform && cache.dirty === true;
        if (invalid) {
            cache = privateGetter.call(this);
            this._cache.set(attr, cache);
        }
        return cache;
    }
    _calculate(name, deps, getter) {
        if (!this._attachedDepsListeners.get(name)) {
            const depsString = deps.map((dep)=>dep + "Change.konva").join(SPACE);
            this.on(depsString, ()=>{
                this._clearCache(name);
            });
            this._attachedDepsListeners.set(name, true);
        }
        return this._getCache(name, getter);
    }
    _getCanvasCache() {
        return this._cache.get(CANVAS);
    }
    _clearSelfAndDescendantCache(attr) {
        this._clearCache(attr);
        if (attr === ABSOLUTE_TRANSFORM) this.fire("absoluteTransformChange");
    }
    clearCache() {
        this._cache.delete(CANVAS);
        this._clearSelfAndDescendantCache();
        this._requestDraw();
        return this;
    }
    cache(config) {
        var conf = config || {};
        var rect = {};
        if (conf.x === undefined || conf.y === undefined || conf.width === undefined || conf.height === undefined) rect = this.getClientRect({
            skipTransform: true,
            relativeTo: this.getParent()
        });
        var width = Math.ceil(conf.width || rect.width), height = Math.ceil(conf.height || rect.height), pixelRatio = conf.pixelRatio, x = conf.x === undefined ? Math.floor(rect.x) : conf.x, y = conf.y === undefined ? Math.floor(rect.y) : conf.y, offset = conf.offset || 0, drawBorder = conf.drawBorder || false, hitCanvasPixelRatio = conf.hitCanvasPixelRatio || 1;
        if (!width || !height) {
            (0, _utilJs.Util).error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
            return;
        }
        width += offset * 2 + 1;
        height += offset * 2 + 1;
        x -= offset;
        y -= offset;
        var cachedSceneCanvas = new (0, _canvasJs.SceneCanvas)({
            pixelRatio: pixelRatio,
            width: width,
            height: height
        }), cachedFilterCanvas = new (0, _canvasJs.SceneCanvas)({
            pixelRatio: pixelRatio,
            width: 0,
            height: 0
        }), cachedHitCanvas = new (0, _canvasJs.HitCanvas)({
            pixelRatio: hitCanvasPixelRatio,
            width: width,
            height: height
        }), sceneContext = cachedSceneCanvas.getContext(), hitContext = cachedHitCanvas.getContext();
        cachedHitCanvas.isCache = true;
        cachedSceneCanvas.isCache = true;
        this._cache.delete(CANVAS);
        this._filterUpToDate = false;
        if (conf.imageSmoothingEnabled === false) {
            cachedSceneCanvas.getContext()._context.imageSmoothingEnabled = false;
            cachedFilterCanvas.getContext()._context.imageSmoothingEnabled = false;
        }
        sceneContext.save();
        hitContext.save();
        sceneContext.translate(-x, -y);
        hitContext.translate(-x, -y);
        this._isUnderCache = true;
        this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
        this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
        this.drawScene(cachedSceneCanvas, this);
        this.drawHit(cachedHitCanvas, this);
        this._isUnderCache = false;
        sceneContext.restore();
        hitContext.restore();
        if (drawBorder) {
            sceneContext.save();
            sceneContext.beginPath();
            sceneContext.rect(0, 0, width, height);
            sceneContext.closePath();
            sceneContext.setAttr("strokeStyle", "red");
            sceneContext.setAttr("lineWidth", 5);
            sceneContext.stroke();
            sceneContext.restore();
        }
        this._cache.set(CANVAS, {
            scene: cachedSceneCanvas,
            filter: cachedFilterCanvas,
            hit: cachedHitCanvas,
            x: x,
            y: y
        });
        this._requestDraw();
        return this;
    }
    isCached() {
        return this._cache.has(CANVAS);
    }
    getClientRect(config) {
        throw new Error('abstract "getClientRect" method call');
    }
    _transformedRect(rect, top) {
        var points = [
            {
                x: rect.x,
                y: rect.y
            },
            {
                x: rect.x + rect.width,
                y: rect.y
            },
            {
                x: rect.x + rect.width,
                y: rect.y + rect.height
            },
            {
                x: rect.x,
                y: rect.y + rect.height
            }, 
        ];
        var minX, minY, maxX, maxY;
        var trans = this.getAbsoluteTransform(top);
        points.forEach(function(point) {
            var transformed = trans.point(point);
            if (minX === undefined) {
                minX = maxX = transformed.x;
                minY = maxY = transformed.y;
            }
            minX = Math.min(minX, transformed.x);
            minY = Math.min(minY, transformed.y);
            maxX = Math.max(maxX, transformed.x);
            maxY = Math.max(maxY, transformed.y);
        });
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    }
    _drawCachedSceneCanvas(context) {
        context.save();
        context._applyOpacity(this);
        context._applyGlobalCompositeOperation(this);
        const canvasCache = this._getCanvasCache();
        context.translate(canvasCache.x, canvasCache.y);
        var cacheCanvas = this._getCachedSceneCanvas();
        var ratio = cacheCanvas.pixelRatio;
        context.drawImage(cacheCanvas._canvas, 0, 0, cacheCanvas.width / ratio, cacheCanvas.height / ratio);
        context.restore();
    }
    _drawCachedHitCanvas(context) {
        var canvasCache = this._getCanvasCache(), hitCanvas = canvasCache.hit;
        context.save();
        context.translate(canvasCache.x, canvasCache.y);
        context.drawImage(hitCanvas._canvas, 0, 0, hitCanvas.width / hitCanvas.pixelRatio, hitCanvas.height / hitCanvas.pixelRatio);
        context.restore();
    }
    _getCachedSceneCanvas() {
        var filters = this.filters(), cachedCanvas = this._getCanvasCache(), sceneCanvas = cachedCanvas.scene, filterCanvas = cachedCanvas.filter, filterContext = filterCanvas.getContext(), len, imageData, n, filter;
        if (filters) {
            if (!this._filterUpToDate) {
                var ratio = sceneCanvas.pixelRatio;
                filterCanvas.setSize(sceneCanvas.width / sceneCanvas.pixelRatio, sceneCanvas.height / sceneCanvas.pixelRatio);
                try {
                    len = filters.length;
                    filterContext.clear();
                    filterContext.drawImage(sceneCanvas._canvas, 0, 0, sceneCanvas.getWidth() / ratio, sceneCanvas.getHeight() / ratio);
                    imageData = filterContext.getImageData(0, 0, filterCanvas.getWidth(), filterCanvas.getHeight());
                    for(n = 0; n < len; n++){
                        filter = filters[n];
                        if (typeof filter !== "function") {
                            (0, _utilJs.Util).error("Filter should be type of function, but got " + typeof filter + " instead. Please check correct filters");
                            continue;
                        }
                        filter.call(this, imageData);
                        filterContext.putImageData(imageData, 0, 0);
                    }
                } catch (e) {
                    (0, _utilJs.Util).error("Unable to apply filter. " + e.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
                }
                this._filterUpToDate = true;
            }
            return filterCanvas;
        }
        return sceneCanvas;
    }
    on(evtStr, handler) {
        this._cache && this._cache.delete(ALL_LISTENERS);
        if (arguments.length === 3) return this._delegate.apply(this, arguments);
        var events = evtStr.split(SPACE), len = events.length, n, event, parts, baseEvent, name;
        for(n = 0; n < len; n++){
            event = events[n];
            parts = event.split(".");
            baseEvent = parts[0];
            name = parts[1] || "";
            if (!this.eventListeners[baseEvent]) this.eventListeners[baseEvent] = [];
            this.eventListeners[baseEvent].push({
                name: name,
                handler: handler
            });
        }
        return this;
    }
    off(evtStr, callback) {
        var events = (evtStr || "").split(SPACE), len = events.length, n, t, event, parts, baseEvent, name;
        this._cache && this._cache.delete(ALL_LISTENERS);
        if (!evtStr) for(t in this.eventListeners)this._off(t);
        for(n = 0; n < len; n++){
            event = events[n];
            parts = event.split(".");
            baseEvent = parts[0];
            name = parts[1];
            if (baseEvent) {
                if (this.eventListeners[baseEvent]) this._off(baseEvent, name, callback);
            } else for(t in this.eventListeners)this._off(t, name, callback);
        }
        return this;
    }
    dispatchEvent(evt) {
        var e = {
            target: this,
            type: evt.type,
            evt: evt
        };
        this.fire(evt.type, e);
        return this;
    }
    addEventListener(type, handler) {
        this.on(type, function(evt) {
            handler.call(this, evt.evt);
        });
        return this;
    }
    removeEventListener(type) {
        this.off(type);
        return this;
    }
    _delegate(event, selector, handler) {
        var stopNode = this;
        this.on(event, function(evt) {
            var targets = evt.target.findAncestors(selector, true, stopNode);
            for(var i = 0; i < targets.length; i++){
                evt = (0, _utilJs.Util).cloneObject(evt);
                evt.currentTarget = targets[i];
                handler.call(targets[i], evt);
            }
        });
    }
    remove() {
        if (this.isDragging()) this.stopDrag();
        (0, _dragAndDropJs.DD)._dragElements.delete(this._id);
        this._remove();
        return this;
    }
    _clearCaches() {
        this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
        this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
        this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
        this._clearSelfAndDescendantCache(STAGE);
        this._clearSelfAndDescendantCache(VISIBLE);
        this._clearSelfAndDescendantCache(LISTENING);
    }
    _remove() {
        this._clearCaches();
        var parent = this.getParent();
        if (parent && parent.children) {
            parent.children.splice(this.index, 1);
            parent._setChildrenIndices();
            this.parent = null;
        }
    }
    destroy() {
        this.remove();
        return this;
    }
    getAttr(attr) {
        var method = "get" + (0, _utilJs.Util)._capitalize(attr);
        if ((0, _utilJs.Util)._isFunction(this[method])) return this[method]();
        return this.attrs[attr];
    }
    getAncestors() {
        var parent = this.getParent(), ancestors = [];
        while(parent){
            ancestors.push(parent);
            parent = parent.getParent();
        }
        return ancestors;
    }
    getAttrs() {
        return this.attrs || {};
    }
    setAttrs(config) {
        this._batchTransformChanges(()=>{
            var key, method;
            if (!config) return this;
            for(key in config){
                if (key === CHILDREN) continue;
                method = SET + (0, _utilJs.Util)._capitalize(key);
                if ((0, _utilJs.Util)._isFunction(this[method])) this[method](config[key]);
                else this._setAttr(key, config[key]);
            }
        });
        return this;
    }
    isListening() {
        return this._getCache(LISTENING, this._isListening);
    }
    _isListening(relativeTo) {
        const listening = this.listening();
        if (!listening) return false;
        const parent = this.getParent();
        if (parent && parent !== relativeTo && this !== relativeTo) return parent._isListening(relativeTo);
        else return true;
    }
    isVisible() {
        return this._getCache(VISIBLE, this._isVisible);
    }
    _isVisible(relativeTo) {
        const visible = this.visible();
        if (!visible) return false;
        const parent = this.getParent();
        if (parent && parent !== relativeTo && this !== relativeTo) return parent._isVisible(relativeTo);
        else return true;
    }
    shouldDrawHit(top, skipDragCheck = false) {
        if (top) return this._isVisible(top) && this._isListening(top);
        var layer = this.getLayer();
        var layerUnderDrag = false;
        (0, _dragAndDropJs.DD)._dragElements.forEach((elem)=>{
            if (elem.dragStatus !== "dragging") return;
            else if (elem.node.nodeType === "Stage") layerUnderDrag = true;
            else if (elem.node.getLayer() === layer) layerUnderDrag = true;
        });
        var dragSkip = !skipDragCheck && !(0, _globalJs.Konva).hitOnDragEnabled && layerUnderDrag;
        return this.isListening() && this.isVisible() && !dragSkip;
    }
    show() {
        this.visible(true);
        return this;
    }
    hide() {
        this.visible(false);
        return this;
    }
    getZIndex() {
        return this.index || 0;
    }
    getAbsoluteZIndex() {
        var depth = this.getDepth(), that = this, index = 0, nodes, len, n, child;
        function addChildren(children) {
            nodes = [];
            len = children.length;
            for(n = 0; n < len; n++){
                child = children[n];
                index++;
                if (child.nodeType !== SHAPE) nodes = nodes.concat(child.getChildren().slice());
                if (child._id === that._id) n = len;
            }
            if (nodes.length > 0 && nodes[0].getDepth() <= depth) addChildren(nodes);
        }
        if (that.nodeType !== UPPER_STAGE) addChildren(that.getStage().getChildren());
        return index;
    }
    getDepth() {
        var depth = 0, parent = this.parent;
        while(parent){
            depth++;
            parent = parent.parent;
        }
        return depth;
    }
    _batchTransformChanges(func) {
        this._batchingTransformChange = true;
        func();
        this._batchingTransformChange = false;
        if (this._needClearTransformCache) {
            this._clearCache(TRANSFORM);
            this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
        }
        this._needClearTransformCache = false;
    }
    setPosition(pos) {
        this._batchTransformChanges(()=>{
            this.x(pos.x);
            this.y(pos.y);
        });
        return this;
    }
    getPosition() {
        return {
            x: this.x(),
            y: this.y()
        };
    }
    getRelativePointerPosition() {
        if (!this.getStage()) return null;
        var pos = this.getStage().getPointerPosition();
        if (!pos) return null;
        var transform = this.getAbsoluteTransform().copy();
        transform.invert();
        return transform.point(pos);
    }
    getAbsolutePosition(top) {
        let haveCachedParent = false;
        let parent = this.parent;
        while(parent){
            if (parent.isCached()) {
                haveCachedParent = true;
                break;
            }
            parent = parent.parent;
        }
        if (haveCachedParent && !top) top = true;
        var absoluteMatrix = this.getAbsoluteTransform(top).getMatrix(), absoluteTransform = new (0, _utilJs.Transform)(), offset = this.offset();
        absoluteTransform.m = absoluteMatrix.slice();
        absoluteTransform.translate(offset.x, offset.y);
        return absoluteTransform.getTranslation();
    }
    setAbsolutePosition(pos) {
        var origTrans = this._clearTransform();
        this.attrs.x = origTrans.x;
        this.attrs.y = origTrans.y;
        delete origTrans.x;
        delete origTrans.y;
        this._clearCache(TRANSFORM);
        var it = this._getAbsoluteTransform().copy();
        it.invert();
        it.translate(pos.x, pos.y);
        pos = {
            x: this.attrs.x + it.getTranslation().x,
            y: this.attrs.y + it.getTranslation().y
        };
        this._setTransform(origTrans);
        this.setPosition({
            x: pos.x,
            y: pos.y
        });
        this._clearCache(TRANSFORM);
        this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
        return this;
    }
    _setTransform(trans) {
        var key;
        for(key in trans)this.attrs[key] = trans[key];
    }
    _clearTransform() {
        var trans = {
            x: this.x(),
            y: this.y(),
            rotation: this.rotation(),
            scaleX: this.scaleX(),
            scaleY: this.scaleY(),
            offsetX: this.offsetX(),
            offsetY: this.offsetY(),
            skewX: this.skewX(),
            skewY: this.skewY()
        };
        this.attrs.x = 0;
        this.attrs.y = 0;
        this.attrs.rotation = 0;
        this.attrs.scaleX = 1;
        this.attrs.scaleY = 1;
        this.attrs.offsetX = 0;
        this.attrs.offsetY = 0;
        this.attrs.skewX = 0;
        this.attrs.skewY = 0;
        return trans;
    }
    move(change) {
        var changeX = change.x, changeY = change.y, x = this.x(), y = this.y();
        if (changeX !== undefined) x += changeX;
        if (changeY !== undefined) y += changeY;
        this.setPosition({
            x: x,
            y: y
        });
        return this;
    }
    _eachAncestorReverse(func, top) {
        var family = [], parent = this.getParent(), len, n;
        if (top && top._id === this._id) return;
        family.unshift(this);
        while(parent && (!top || parent._id !== top._id)){
            family.unshift(parent);
            parent = parent.parent;
        }
        len = family.length;
        for(n = 0; n < len; n++)func(family[n]);
    }
    rotate(theta) {
        this.rotation(this.rotation() + theta);
        return this;
    }
    moveToTop() {
        if (!this.parent) {
            (0, _utilJs.Util).warn("Node has no parent. moveToTop function is ignored.");
            return false;
        }
        var index = this.index, len = this.parent.getChildren().length;
        if (index < len - 1) {
            this.parent.children.splice(index, 1);
            this.parent.children.push(this);
            this.parent._setChildrenIndices();
            return true;
        }
        return false;
    }
    moveUp() {
        if (!this.parent) {
            (0, _utilJs.Util).warn("Node has no parent. moveUp function is ignored.");
            return false;
        }
        var index = this.index, len = this.parent.getChildren().length;
        if (index < len - 1) {
            this.parent.children.splice(index, 1);
            this.parent.children.splice(index + 1, 0, this);
            this.parent._setChildrenIndices();
            return true;
        }
        return false;
    }
    moveDown() {
        if (!this.parent) {
            (0, _utilJs.Util).warn("Node has no parent. moveDown function is ignored.");
            return false;
        }
        var index = this.index;
        if (index > 0) {
            this.parent.children.splice(index, 1);
            this.parent.children.splice(index - 1, 0, this);
            this.parent._setChildrenIndices();
            return true;
        }
        return false;
    }
    moveToBottom() {
        if (!this.parent) {
            (0, _utilJs.Util).warn("Node has no parent. moveToBottom function is ignored.");
            return false;
        }
        var index = this.index;
        if (index > 0) {
            this.parent.children.splice(index, 1);
            this.parent.children.unshift(this);
            this.parent._setChildrenIndices();
            return true;
        }
        return false;
    }
    setZIndex(zIndex) {
        if (!this.parent) {
            (0, _utilJs.Util).warn("Node has no parent. zIndex parameter is ignored.");
            return this;
        }
        if (zIndex < 0 || zIndex >= this.parent.children.length) (0, _utilJs.Util).warn("Unexpected value " + zIndex + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
        var index = this.index;
        this.parent.children.splice(index, 1);
        this.parent.children.splice(zIndex, 0, this);
        this.parent._setChildrenIndices();
        return this;
    }
    getAbsoluteOpacity() {
        return this._getCache(ABSOLUTE_OPACITY, this._getAbsoluteOpacity);
    }
    _getAbsoluteOpacity() {
        var absOpacity = this.opacity();
        var parent = this.getParent();
        if (parent && !parent._isUnderCache) absOpacity *= parent.getAbsoluteOpacity();
        return absOpacity;
    }
    moveTo(newContainer) {
        if (this.getParent() !== newContainer) {
            this._remove();
            newContainer.add(this);
        }
        return this;
    }
    toObject() {
        var obj = {}, attrs = this.getAttrs(), key, val, getter, defaultValue, nonPlainObject;
        obj.attrs = {};
        for(key in attrs){
            val = attrs[key];
            nonPlainObject = (0, _utilJs.Util).isObject(val) && !(0, _utilJs.Util)._isPlainObject(val) && !(0, _utilJs.Util)._isArray(val);
            if (nonPlainObject) continue;
            getter = typeof this[key] === "function" && this[key];
            delete attrs[key];
            defaultValue = getter ? getter.call(this) : null;
            attrs[key] = val;
            if (defaultValue !== val) obj.attrs[key] = val;
        }
        obj.className = this.getClassName();
        return (0, _utilJs.Util)._prepareToStringify(obj);
    }
    toJSON() {
        return JSON.stringify(this.toObject());
    }
    getParent() {
        return this.parent;
    }
    findAncestors(selector, includeSelf, stopNode) {
        var res = [];
        if (includeSelf && this._isMatch(selector)) res.push(this);
        var ancestor = this.parent;
        while(ancestor){
            if (ancestor === stopNode) return res;
            if (ancestor._isMatch(selector)) res.push(ancestor);
            ancestor = ancestor.parent;
        }
        return res;
    }
    isAncestorOf(node) {
        return false;
    }
    findAncestor(selector, includeSelf, stopNode) {
        return this.findAncestors(selector, includeSelf, stopNode)[0];
    }
    _isMatch(selector) {
        if (!selector) return false;
        if (typeof selector === "function") return selector(this);
        var selectorArr = selector.replace(/ /g, "").split(","), len = selectorArr.length, n, sel;
        for(n = 0; n < len; n++){
            sel = selectorArr[n];
            if (!(0, _utilJs.Util).isValidSelector(sel)) {
                (0, _utilJs.Util).warn('Selector "' + sel + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".');
                (0, _utilJs.Util).warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".');
                (0, _utilJs.Util).warn("Konva is awesome, right?");
            }
            if (sel.charAt(0) === "#") {
                if (this.id() === sel.slice(1)) return true;
            } else if (sel.charAt(0) === ".") {
                if (this.hasName(sel.slice(1))) return true;
            } else if (this.className === sel || this.nodeType === sel) return true;
        }
        return false;
    }
    getLayer() {
        var parent = this.getParent();
        return parent ? parent.getLayer() : null;
    }
    getStage() {
        return this._getCache(STAGE, this._getStage);
    }
    _getStage() {
        var parent = this.getParent();
        if (parent) return parent.getStage();
        else return undefined;
    }
    fire(eventType, evt = {}, bubble) {
        evt.target = evt.target || this;
        if (bubble) this._fireAndBubble(eventType, evt);
        else this._fire(eventType, evt);
        return this;
    }
    getAbsoluteTransform(top) {
        if (top) return this._getAbsoluteTransform(top);
        else return this._getCache(ABSOLUTE_TRANSFORM, this._getAbsoluteTransform);
    }
    _getAbsoluteTransform(top) {
        var at;
        if (top) {
            at = new (0, _utilJs.Transform)();
            this._eachAncestorReverse(function(node) {
                var transformsEnabled = node.transformsEnabled();
                if (transformsEnabled === "all") at.multiply(node.getTransform());
                else if (transformsEnabled === "position") at.translate(node.x() - node.offsetX(), node.y() - node.offsetY());
            }, top);
            return at;
        } else {
            at = this._cache.get(ABSOLUTE_TRANSFORM) || new (0, _utilJs.Transform)();
            if (this.parent) this.parent.getAbsoluteTransform().copyInto(at);
            else at.reset();
            var transformsEnabled = this.transformsEnabled();
            if (transformsEnabled === "all") at.multiply(this.getTransform());
            else if (transformsEnabled === "position") {
                const x = this.attrs.x || 0;
                const y = this.attrs.y || 0;
                const offsetX = this.attrs.offsetX || 0;
                const offsetY = this.attrs.offsetY || 0;
                at.translate(x - offsetX, y - offsetY);
            }
            at.dirty = false;
            return at;
        }
    }
    getAbsoluteScale(top) {
        var parent = this;
        while(parent){
            if (parent._isUnderCache) top = parent;
            parent = parent.getParent();
        }
        const transform = this.getAbsoluteTransform(top);
        const attrs = transform.decompose();
        return {
            x: attrs.scaleX,
            y: attrs.scaleY
        };
    }
    getAbsoluteRotation() {
        return this.getAbsoluteTransform().decompose().rotation;
    }
    getTransform() {
        return this._getCache(TRANSFORM, this._getTransform);
    }
    _getTransform() {
        var _a, _b;
        var m = this._cache.get(TRANSFORM) || new (0, _utilJs.Transform)();
        m.reset();
        var x = this.x(), y = this.y(), rotation = (0, _globalJs.Konva).getAngle(this.rotation()), scaleX = (_a = this.attrs.scaleX) !== null && _a !== void 0 ? _a : 1, scaleY = (_b = this.attrs.scaleY) !== null && _b !== void 0 ? _b : 1, skewX = this.attrs.skewX || 0, skewY = this.attrs.skewY || 0, offsetX = this.attrs.offsetX || 0, offsetY = this.attrs.offsetY || 0;
        if (x !== 0 || y !== 0) m.translate(x, y);
        if (rotation !== 0) m.rotate(rotation);
        if (skewX !== 0 || skewY !== 0) m.skew(skewX, skewY);
        if (scaleX !== 1 || scaleY !== 1) m.scale(scaleX, scaleY);
        if (offsetX !== 0 || offsetY !== 0) m.translate(-1 * offsetX, -1 * offsetY);
        m.dirty = false;
        return m;
    }
    clone(obj) {
        var attrs = (0, _utilJs.Util).cloneObject(this.attrs), key, allListeners, len, n, listener;
        for(key in obj)attrs[key] = obj[key];
        var node = new this.constructor(attrs);
        for(key in this.eventListeners){
            allListeners = this.eventListeners[key];
            len = allListeners.length;
            for(n = 0; n < len; n++){
                listener = allListeners[n];
                if (listener.name.indexOf(KONVA) < 0) {
                    if (!node.eventListeners[key]) node.eventListeners[key] = [];
                    node.eventListeners[key].push(listener);
                }
            }
        }
        return node;
    }
    _toKonvaCanvas(config) {
        config = config || {};
        var box = this.getClientRect();
        var stage = this.getStage(), x = config.x !== undefined ? config.x : Math.floor(box.x), y = config.y !== undefined ? config.y : Math.floor(box.y), pixelRatio = config.pixelRatio || 1, canvas = new (0, _canvasJs.SceneCanvas)({
            width: config.width || Math.ceil(box.width) || (stage ? stage.width() : 0),
            height: config.height || Math.ceil(box.height) || (stage ? stage.height() : 0),
            pixelRatio: pixelRatio
        }), context = canvas.getContext();
        if (config.imageSmoothingEnabled === false) context._context.imageSmoothingEnabled = false;
        context.save();
        if (x || y) context.translate(-1 * x, -1 * y);
        this.drawScene(canvas);
        context.restore();
        return canvas;
    }
    toCanvas(config) {
        return this._toKonvaCanvas(config)._canvas;
    }
    toDataURL(config) {
        config = config || {};
        var mimeType = config.mimeType || null, quality = config.quality || null;
        var url = this._toKonvaCanvas(config).toDataURL(mimeType, quality);
        if (config.callback) config.callback(url);
        return url;
    }
    toImage(config) {
        return new Promise((resolve, reject)=>{
            try {
                const callback = config === null || config === void 0 ? void 0 : config.callback;
                if (callback) delete config.callback;
                (0, _utilJs.Util)._urlToImage(this.toDataURL(config), function(img) {
                    resolve(img);
                    callback === null || callback === void 0 || callback(img);
                });
            } catch (err) {
                reject(err);
            }
        });
    }
    toBlob(config) {
        return new Promise((resolve, reject)=>{
            try {
                const callback = config === null || config === void 0 ? void 0 : config.callback;
                if (callback) delete config.callback;
                this.toCanvas(config).toBlob((blob)=>{
                    resolve(blob);
                    callback === null || callback === void 0 || callback(blob);
                });
            } catch (err) {
                reject(err);
            }
        });
    }
    setSize(size) {
        this.width(size.width);
        this.height(size.height);
        return this;
    }
    getSize() {
        return {
            width: this.width(),
            height: this.height()
        };
    }
    getClassName() {
        return this.className || this.nodeType;
    }
    getType() {
        return this.nodeType;
    }
    getDragDistance() {
        if (this.attrs.dragDistance !== undefined) return this.attrs.dragDistance;
        else if (this.parent) return this.parent.getDragDistance();
        else return (0, _globalJs.Konva).dragDistance;
    }
    _off(type, name, callback) {
        var evtListeners = this.eventListeners[type], i, evtName, handler;
        for(i = 0; i < evtListeners.length; i++){
            evtName = evtListeners[i].name;
            handler = evtListeners[i].handler;
            if ((evtName !== "konva" || name === "konva") && (!name || evtName === name) && (!callback || callback === handler)) {
                evtListeners.splice(i, 1);
                if (evtListeners.length === 0) {
                    delete this.eventListeners[type];
                    break;
                }
                i--;
            }
        }
    }
    _fireChangeEvent(attr, oldVal, newVal) {
        this._fire(attr + CHANGE, {
            oldVal: oldVal,
            newVal: newVal
        });
    }
    addName(name) {
        if (!this.hasName(name)) {
            var oldName = this.name();
            var newName = oldName ? oldName + " " + name : name;
            this.name(newName);
        }
        return this;
    }
    hasName(name) {
        if (!name) return false;
        const fullName = this.name();
        if (!fullName) return false;
        var names = (fullName || "").split(/\s/g);
        return names.indexOf(name) !== -1;
    }
    removeName(name) {
        var names = (this.name() || "").split(/\s/g);
        var index = names.indexOf(name);
        if (index !== -1) {
            names.splice(index, 1);
            this.name(names.join(" "));
        }
        return this;
    }
    setAttr(attr, val) {
        var func = this[SET + (0, _utilJs.Util)._capitalize(attr)];
        if ((0, _utilJs.Util)._isFunction(func)) func.call(this, val);
        else this._setAttr(attr, val);
        return this;
    }
    _requestDraw() {
        if ((0, _globalJs.Konva).autoDrawEnabled) {
            const drawNode = this.getLayer() || this.getStage();
            drawNode === null || drawNode === void 0 || drawNode.batchDraw();
        }
    }
    _setAttr(key, val) {
        var oldVal = this.attrs[key];
        if (oldVal === val && !(0, _utilJs.Util).isObject(val)) return;
        if (val === undefined || val === null) delete this.attrs[key];
        else this.attrs[key] = val;
        if (this._shouldFireChangeEvents) this._fireChangeEvent(key, oldVal, val);
        this._requestDraw();
    }
    _setComponentAttr(key, component, val) {
        var oldVal;
        if (val !== undefined) {
            oldVal = this.attrs[key];
            if (!oldVal) this.attrs[key] = this.getAttr(key);
            this.attrs[key][component] = val;
            this._fireChangeEvent(key, oldVal, val);
        }
    }
    _fireAndBubble(eventType, evt, compareShape) {
        if (evt && this.nodeType === SHAPE) evt.target = this;
        var shouldStop = (eventType === MOUSEENTER || eventType === MOUSELEAVE) && (compareShape && (this === compareShape || this.isAncestorOf && this.isAncestorOf(compareShape)) || this.nodeType === "Stage" && !compareShape);
        if (!shouldStop) {
            this._fire(eventType, evt);
            var stopBubble = (eventType === MOUSEENTER || eventType === MOUSELEAVE) && compareShape && compareShape.isAncestorOf && compareShape.isAncestorOf(this) && !compareShape.isAncestorOf(this.parent);
            if ((evt && !evt.cancelBubble || !evt) && this.parent && this.parent.isListening() && !stopBubble) {
                if (compareShape && compareShape.parent) this._fireAndBubble.call(this.parent, eventType, evt, compareShape);
                else this._fireAndBubble.call(this.parent, eventType, evt);
            }
        }
    }
    _getProtoListeners(eventType) {
        let listeners = this._cache.get(ALL_LISTENERS);
        if (!listeners) {
            listeners = {};
            let obj = Object.getPrototypeOf(this);
            while(obj){
                if (!obj.eventListeners) {
                    obj = Object.getPrototypeOf(obj);
                    continue;
                }
                for(var event in obj.eventListeners){
                    const newEvents = obj.eventListeners[event];
                    const oldEvents = listeners[event] || [];
                    listeners[event] = newEvents.concat(oldEvents);
                }
                obj = Object.getPrototypeOf(obj);
            }
            this._cache.set(ALL_LISTENERS, listeners);
        }
        return listeners[eventType];
    }
    _fire(eventType, evt) {
        evt = evt || {};
        evt.currentTarget = this;
        evt.type = eventType;
        const topListeners = this._getProtoListeners(eventType);
        if (topListeners) for(var i = 0; i < topListeners.length; i++)topListeners[i].handler.call(this, evt);
        const selfListeners = this.eventListeners[eventType];
        if (selfListeners) for(var i = 0; i < selfListeners.length; i++)selfListeners[i].handler.call(this, evt);
    }
    draw() {
        this.drawScene();
        this.drawHit();
        return this;
    }
    _createDragElement(evt) {
        var pointerId = evt ? evt.pointerId : undefined;
        var stage = this.getStage();
        var ap = this.getAbsolutePosition();
        var pos = stage._getPointerById(pointerId) || stage._changedPointerPositions[0] || ap;
        (0, _dragAndDropJs.DD)._dragElements.set(this._id, {
            node: this,
            startPointerPos: pos,
            offset: {
                x: pos.x - ap.x,
                y: pos.y - ap.y
            },
            dragStatus: "ready",
            pointerId
        });
    }
    startDrag(evt, bubbleEvent = true) {
        if (!(0, _dragAndDropJs.DD)._dragElements.has(this._id)) this._createDragElement(evt);
        const elem = (0, _dragAndDropJs.DD)._dragElements.get(this._id);
        elem.dragStatus = "dragging";
        this.fire("dragstart", {
            type: "dragstart",
            target: this,
            evt: evt && evt.evt
        }, bubbleEvent);
    }
    _setDragPosition(evt, elem) {
        const pos = this.getStage()._getPointerById(elem.pointerId);
        if (!pos) return;
        var newNodePos = {
            x: pos.x - elem.offset.x,
            y: pos.y - elem.offset.y
        };
        var dbf = this.dragBoundFunc();
        if (dbf !== undefined) {
            const bounded = dbf.call(this, newNodePos, evt);
            if (!bounded) (0, _utilJs.Util).warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
            else newNodePos = bounded;
        }
        if (!this._lastPos || this._lastPos.x !== newNodePos.x || this._lastPos.y !== newNodePos.y) {
            this.setAbsolutePosition(newNodePos);
            this._requestDraw();
        }
        this._lastPos = newNodePos;
    }
    stopDrag(evt) {
        const elem = (0, _dragAndDropJs.DD)._dragElements.get(this._id);
        if (elem) elem.dragStatus = "stopped";
        (0, _dragAndDropJs.DD)._endDragBefore(evt);
        (0, _dragAndDropJs.DD)._endDragAfter(evt);
    }
    setDraggable(draggable) {
        this._setAttr("draggable", draggable);
        this._dragChange();
    }
    isDragging() {
        const elem = (0, _dragAndDropJs.DD)._dragElements.get(this._id);
        return elem ? elem.dragStatus === "dragging" : false;
    }
    _listenDrag() {
        this._dragCleanup();
        this.on("mousedown.konva touchstart.konva", function(evt) {
            var shouldCheckButton = evt.evt["button"] !== undefined;
            var canDrag = !shouldCheckButton || (0, _globalJs.Konva).dragButtons.indexOf(evt.evt["button"]) >= 0;
            if (!canDrag) return;
            if (this.isDragging()) return;
            var hasDraggingChild = false;
            (0, _dragAndDropJs.DD)._dragElements.forEach((elem)=>{
                if (this.isAncestorOf(elem.node)) hasDraggingChild = true;
            });
            if (!hasDraggingChild) this._createDragElement(evt);
        });
    }
    _dragChange() {
        if (this.attrs.draggable) this._listenDrag();
        else {
            this._dragCleanup();
            var stage = this.getStage();
            if (!stage) return;
            const dragElement = (0, _dragAndDropJs.DD)._dragElements.get(this._id);
            const isDragging = dragElement && dragElement.dragStatus === "dragging";
            const isReady = dragElement && dragElement.dragStatus === "ready";
            if (isDragging) this.stopDrag();
            else if (isReady) (0, _dragAndDropJs.DD)._dragElements.delete(this._id);
        }
    }
    _dragCleanup() {
        this.off("mousedown.konva");
        this.off("touchstart.konva");
    }
    isClientRectOnScreen(margin = {
        x: 0,
        y: 0
    }) {
        const stage = this.getStage();
        if (!stage) return false;
        const screenRect = {
            x: -margin.x,
            y: -margin.y,
            width: stage.width() + 2 * margin.x,
            height: stage.height() + 2 * margin.y
        };
        return (0, _utilJs.Util).haveIntersection(screenRect, this.getClientRect());
    }
    static create(data, container) {
        if ((0, _utilJs.Util)._isString(data)) data = JSON.parse(data);
        return this._createNode(data, container);
    }
    static _createNode(obj, container) {
        var className = Node.prototype.getClassName.call(obj), children = obj.children, no, len, n;
        if (container) obj.attrs.container = container;
        if (!(0, _globalJs.Konva)[className]) {
            (0, _utilJs.Util).warn('Can not find a node with class name "' + className + '". Fallback to "Shape".');
            className = "Shape";
        }
        const Class = (0, _globalJs.Konva)[className];
        no = new Class(obj.attrs);
        if (children) {
            len = children.length;
            for(n = 0; n < len; n++)no.add(Node._createNode(children[n]));
        }
        return no;
    }
}
Node.prototype.nodeType = "Node";
Node.prototype._attrsAffectingSize = [];
Node.prototype.eventListeners = {};
Node.prototype.on.call(Node.prototype, TRANSFORM_CHANGE_STR, function() {
    if (this._batchingTransformChange) {
        this._needClearTransformCache = true;
        return;
    }
    this._clearCache(TRANSFORM);
    this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
});
Node.prototype.on.call(Node.prototype, "visibleChange.konva", function() {
    this._clearSelfAndDescendantCache(VISIBLE);
});
Node.prototype.on.call(Node.prototype, "listeningChange.konva", function() {
    this._clearSelfAndDescendantCache(LISTENING);
});
Node.prototype.on.call(Node.prototype, "opacityChange.konva", function() {
    this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
});
const addGetterSetter = (0, _factoryJs.Factory).addGetterSetter;
addGetterSetter(Node, "zIndex");
addGetterSetter(Node, "absolutePosition");
addGetterSetter(Node, "position");
addGetterSetter(Node, "x", 0, (0, _validatorsJs.getNumberValidator)());
addGetterSetter(Node, "y", 0, (0, _validatorsJs.getNumberValidator)());
addGetterSetter(Node, "globalCompositeOperation", "source-over", (0, _validatorsJs.getStringValidator)());
addGetterSetter(Node, "opacity", 1, (0, _validatorsJs.getNumberValidator)());
addGetterSetter(Node, "name", "", (0, _validatorsJs.getStringValidator)());
addGetterSetter(Node, "id", "", (0, _validatorsJs.getStringValidator)());
addGetterSetter(Node, "rotation", 0, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addComponentsGetterSetter(Node, "scale", [
    "x",
    "y"
]);
addGetterSetter(Node, "scaleX", 1, (0, _validatorsJs.getNumberValidator)());
addGetterSetter(Node, "scaleY", 1, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addComponentsGetterSetter(Node, "skew", [
    "x",
    "y"
]);
addGetterSetter(Node, "skewX", 0, (0, _validatorsJs.getNumberValidator)());
addGetterSetter(Node, "skewY", 0, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addComponentsGetterSetter(Node, "offset", [
    "x",
    "y"
]);
addGetterSetter(Node, "offsetX", 0, (0, _validatorsJs.getNumberValidator)());
addGetterSetter(Node, "offsetY", 0, (0, _validatorsJs.getNumberValidator)());
addGetterSetter(Node, "dragDistance", null, (0, _validatorsJs.getNumberValidator)());
addGetterSetter(Node, "width", 0, (0, _validatorsJs.getNumberValidator)());
addGetterSetter(Node, "height", 0, (0, _validatorsJs.getNumberValidator)());
addGetterSetter(Node, "listening", true, (0, _validatorsJs.getBooleanValidator)());
addGetterSetter(Node, "preventDefault", true, (0, _validatorsJs.getBooleanValidator)());
addGetterSetter(Node, "filters", null, function(val) {
    this._filterUpToDate = false;
    return val;
});
addGetterSetter(Node, "visible", true, (0, _validatorsJs.getBooleanValidator)());
addGetterSetter(Node, "transformsEnabled", "all", (0, _validatorsJs.getStringValidator)());
addGetterSetter(Node, "size");
addGetterSetter(Node, "dragBoundFunc");
addGetterSetter(Node, "draggable", false, (0, _validatorsJs.getBooleanValidator)());
(0, _factoryJs.Factory).backCompat(Node, {
    rotateDeg: "rotate",
    setRotationDeg: "setRotation",
    getRotationDeg: "getRotation"
});

},{"./Util.js":"a2B39","./Factory.js":"cBseC","./Canvas.js":"2h78K","./Global.js":"asjHM","./DragAndDrop.js":"1gkRd","./Validators.js":"gkzNd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2h78K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Canvas", ()=>Canvas);
parcelHelpers.export(exports, "SceneCanvas", ()=>SceneCanvas);
parcelHelpers.export(exports, "HitCanvas", ()=>HitCanvas);
var _utilJs = require("./Util.js");
var _contextJs = require("./Context.js");
var _globalJs = require("./Global.js");
var _factoryJs = require("./Factory.js");
var _validatorsJs = require("./Validators.js");
var _pixelRatio;
function getDevicePixelRatio() {
    if (_pixelRatio) return _pixelRatio;
    var canvas = (0, _utilJs.Util).createCanvasElement();
    var context = canvas.getContext("2d");
    _pixelRatio = function() {
        var devicePixelRatio = (0, _globalJs.Konva)._global.devicePixelRatio || 1, backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
        return devicePixelRatio / backingStoreRatio;
    }();
    return _pixelRatio;
}
class Canvas {
    constructor(config){
        this.pixelRatio = 1;
        this.width = 0;
        this.height = 0;
        this.isCache = false;
        var conf = config || {};
        var pixelRatio = conf.pixelRatio || (0, _globalJs.Konva).pixelRatio || getDevicePixelRatio();
        this.pixelRatio = pixelRatio;
        this._canvas = (0, _utilJs.Util).createCanvasElement();
        this._canvas.style.padding = "0";
        this._canvas.style.margin = "0";
        this._canvas.style.border = "0";
        this._canvas.style.background = "transparent";
        this._canvas.style.position = "absolute";
        this._canvas.style.top = "0";
        this._canvas.style.left = "0";
    }
    getContext() {
        return this.context;
    }
    getPixelRatio() {
        return this.pixelRatio;
    }
    setPixelRatio(pixelRatio) {
        var previousRatio = this.pixelRatio;
        this.pixelRatio = pixelRatio;
        this.setSize(this.getWidth() / previousRatio, this.getHeight() / previousRatio);
    }
    setWidth(width) {
        this.width = this._canvas.width = width * this.pixelRatio;
        this._canvas.style.width = width + "px";
        var pixelRatio = this.pixelRatio, _context = this.getContext()._context;
        _context.scale(pixelRatio, pixelRatio);
    }
    setHeight(height) {
        this.height = this._canvas.height = height * this.pixelRatio;
        this._canvas.style.height = height + "px";
        var pixelRatio = this.pixelRatio, _context = this.getContext()._context;
        _context.scale(pixelRatio, pixelRatio);
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setSize(width, height) {
        this.setWidth(width || 0);
        this.setHeight(height || 0);
    }
    toDataURL(mimeType, quality) {
        try {
            return this._canvas.toDataURL(mimeType, quality);
        } catch (e) {
            try {
                return this._canvas.toDataURL();
            } catch (err) {
                (0, _utilJs.Util).error("Unable to get data URL. " + err.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.");
                return "";
            }
        }
    }
}
(0, _factoryJs.Factory).addGetterSetter(Canvas, "pixelRatio", undefined, (0, _validatorsJs.getNumberValidator)());
class SceneCanvas extends Canvas {
    constructor(config = {
        width: 0,
        height: 0
    }){
        super(config);
        this.context = new (0, _contextJs.SceneContext)(this);
        this.setSize(config.width, config.height);
    }
}
class HitCanvas extends Canvas {
    constructor(config = {
        width: 0,
        height: 0
    }){
        super(config);
        this.hitCanvas = true;
        this.context = new (0, _contextJs.HitContext)(this);
        this.setSize(config.width, config.height);
    }
}

},{"./Util.js":"a2B39","./Context.js":"3L4VA","./Global.js":"asjHM","./Factory.js":"cBseC","./Validators.js":"gkzNd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3L4VA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Context", ()=>Context);
parcelHelpers.export(exports, "SceneContext", ()=>SceneContext);
parcelHelpers.export(exports, "HitContext", ()=>HitContext);
var _utilJs = require("./Util.js");
var _globalJs = require("./Global.js");
function simplifyArray(arr) {
    var retArr = [], len = arr.length, util = (0, _utilJs.Util), n, val;
    for(n = 0; n < len; n++){
        val = arr[n];
        if (util._isNumber(val)) val = Math.round(val * 1000) / 1000;
        else if (!util._isString(val)) val = val + "";
        retArr.push(val);
    }
    return retArr;
}
var COMMA = ",", OPEN_PAREN = "(", CLOSE_PAREN = ")", OPEN_PAREN_BRACKET = "([", CLOSE_BRACKET_PAREN = "])", SEMICOLON = ";", DOUBLE_PAREN = "()", EQUALS = "=", CONTEXT_METHODS = [
    "arc",
    "arcTo",
    "beginPath",
    "bezierCurveTo",
    "clearRect",
    "clip",
    "closePath",
    "createLinearGradient",
    "createPattern",
    "createRadialGradient",
    "drawImage",
    "ellipse",
    "fill",
    "fillText",
    "getImageData",
    "createImageData",
    "lineTo",
    "moveTo",
    "putImageData",
    "quadraticCurveTo",
    "rect",
    "restore",
    "rotate",
    "save",
    "scale",
    "setLineDash",
    "setTransform",
    "stroke",
    "strokeText",
    "transform",
    "translate", 
];
var CONTEXT_PROPERTIES = [
    "fillStyle",
    "strokeStyle",
    "shadowColor",
    "shadowBlur",
    "shadowOffsetX",
    "shadowOffsetY",
    "lineCap",
    "lineDashOffset",
    "lineJoin",
    "lineWidth",
    "miterLimit",
    "font",
    "textAlign",
    "textBaseline",
    "globalAlpha",
    "globalCompositeOperation",
    "imageSmoothingEnabled", 
];
const traceArrMax = 100;
class Context {
    constructor(canvas){
        this.canvas = canvas;
        this._context = canvas._canvas.getContext("2d");
        if ((0, _globalJs.Konva).enableTrace) {
            this.traceArr = [];
            this._enableTrace();
        }
    }
    fillShape(shape) {
        if (shape.fillEnabled()) this._fill(shape);
    }
    _fill(shape) {}
    strokeShape(shape) {
        if (shape.hasStroke()) this._stroke(shape);
    }
    _stroke(shape) {}
    fillStrokeShape(shape) {
        if (shape.attrs.fillAfterStrokeEnabled) {
            this.strokeShape(shape);
            this.fillShape(shape);
        } else {
            this.fillShape(shape);
            this.strokeShape(shape);
        }
    }
    getTrace(relaxed, rounded) {
        var traceArr = this.traceArr, len = traceArr.length, str = "", n, trace, method, args;
        for(n = 0; n < len; n++){
            trace = traceArr[n];
            method = trace.method;
            if (method) {
                args = trace.args;
                str += method;
                if (relaxed) str += DOUBLE_PAREN;
                else if ((0, _utilJs.Util)._isArray(args[0])) str += OPEN_PAREN_BRACKET + args.join(COMMA) + CLOSE_BRACKET_PAREN;
                else {
                    if (rounded) args = args.map((a)=>typeof a === "number" ? Math.floor(a) : a);
                    str += OPEN_PAREN + args.join(COMMA) + CLOSE_PAREN;
                }
            } else {
                str += trace.property;
                if (!relaxed) str += EQUALS + trace.val;
            }
            str += SEMICOLON;
        }
        return str;
    }
    clearTrace() {
        this.traceArr = [];
    }
    _trace(str) {
        var traceArr = this.traceArr, len;
        traceArr.push(str);
        len = traceArr.length;
        if (len >= traceArrMax) traceArr.shift();
    }
    reset() {
        var pixelRatio = this.getCanvas().getPixelRatio();
        this.setTransform(1 * pixelRatio, 0, 0, 1 * pixelRatio, 0, 0);
    }
    getCanvas() {
        return this.canvas;
    }
    clear(bounds) {
        var canvas = this.getCanvas();
        if (bounds) this.clearRect(bounds.x || 0, bounds.y || 0, bounds.width || 0, bounds.height || 0);
        else this.clearRect(0, 0, canvas.getWidth() / canvas.pixelRatio, canvas.getHeight() / canvas.pixelRatio);
    }
    _applyLineCap(shape) {
        var lineCap = shape.getLineCap();
        if (lineCap) this.setAttr("lineCap", lineCap);
    }
    _applyOpacity(shape) {
        var absOpacity = shape.getAbsoluteOpacity();
        if (absOpacity !== 1) this.setAttr("globalAlpha", absOpacity);
    }
    _applyLineJoin(shape) {
        var lineJoin = shape.attrs.lineJoin;
        if (lineJoin) this.setAttr("lineJoin", lineJoin);
    }
    setAttr(attr, val) {
        this._context[attr] = val;
    }
    arc(a0, a1, a2, a3, a4, a5) {
        this._context.arc(a0, a1, a2, a3, a4, a5);
    }
    arcTo(a0, a1, a2, a3, a4) {
        this._context.arcTo(a0, a1, a2, a3, a4);
    }
    beginPath() {
        this._context.beginPath();
    }
    bezierCurveTo(a0, a1, a2, a3, a4, a5) {
        this._context.bezierCurveTo(a0, a1, a2, a3, a4, a5);
    }
    clearRect(a0, a1, a2, a3) {
        this._context.clearRect(a0, a1, a2, a3);
    }
    clip() {
        this._context.clip();
    }
    closePath() {
        this._context.closePath();
    }
    createImageData(a0, a1) {
        var a = arguments;
        if (a.length === 2) return this._context.createImageData(a0, a1);
        else if (a.length === 1) return this._context.createImageData(a0);
    }
    createLinearGradient(a0, a1, a2, a3) {
        return this._context.createLinearGradient(a0, a1, a2, a3);
    }
    createPattern(a0, a1) {
        return this._context.createPattern(a0, a1);
    }
    createRadialGradient(a0, a1, a2, a3, a4, a5) {
        return this._context.createRadialGradient(a0, a1, a2, a3, a4, a5);
    }
    drawImage(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        var a = arguments, _context = this._context;
        if (a.length === 3) _context.drawImage(a0, a1, a2);
        else if (a.length === 5) _context.drawImage(a0, a1, a2, a3, a4);
        else if (a.length === 9) _context.drawImage(a0, a1, a2, a3, a4, a5, a6, a7, a8);
    }
    ellipse(a0, a1, a2, a3, a4, a5, a6, a7) {
        this._context.ellipse(a0, a1, a2, a3, a4, a5, a6, a7);
    }
    isPointInPath(x, y) {
        return this._context.isPointInPath(x, y);
    }
    fill(path2d) {
        if (path2d) this._context.fill(path2d);
        else this._context.fill();
    }
    fillRect(x, y, width, height) {
        this._context.fillRect(x, y, width, height);
    }
    strokeRect(x, y, width, height) {
        this._context.strokeRect(x, y, width, height);
    }
    fillText(text, x, y, maxWidth) {
        if (maxWidth) this._context.fillText(text, x, y, maxWidth);
        else this._context.fillText(text, x, y);
    }
    measureText(text) {
        return this._context.measureText(text);
    }
    getImageData(a0, a1, a2, a3) {
        return this._context.getImageData(a0, a1, a2, a3);
    }
    lineTo(a0, a1) {
        this._context.lineTo(a0, a1);
    }
    moveTo(a0, a1) {
        this._context.moveTo(a0, a1);
    }
    rect(a0, a1, a2, a3) {
        this._context.rect(a0, a1, a2, a3);
    }
    putImageData(a0, a1, a2) {
        this._context.putImageData(a0, a1, a2);
    }
    quadraticCurveTo(a0, a1, a2, a3) {
        this._context.quadraticCurveTo(a0, a1, a2, a3);
    }
    restore() {
        this._context.restore();
    }
    rotate(a0) {
        this._context.rotate(a0);
    }
    save() {
        this._context.save();
    }
    scale(a0, a1) {
        this._context.scale(a0, a1);
    }
    setLineDash(a0) {
        if (this._context.setLineDash) this._context.setLineDash(a0);
        else if ("mozDash" in this._context) this._context["mozDash"] = a0;
        else if ("webkitLineDash" in this._context) this._context["webkitLineDash"] = a0;
    }
    getLineDash() {
        return this._context.getLineDash();
    }
    setTransform(a0, a1, a2, a3, a4, a5) {
        this._context.setTransform(a0, a1, a2, a3, a4, a5);
    }
    stroke(path2d) {
        if (path2d) this._context.stroke(path2d);
        else this._context.stroke();
    }
    strokeText(a0, a1, a2, a3) {
        this._context.strokeText(a0, a1, a2, a3);
    }
    transform(a0, a1, a2, a3, a4, a5) {
        this._context.transform(a0, a1, a2, a3, a4, a5);
    }
    translate(a0, a1) {
        this._context.translate(a0, a1);
    }
    _enableTrace() {
        var that = this, len = CONTEXT_METHODS.length, origSetter = this.setAttr, n, args;
        var func = function(methodName) {
            var origMethod = that[methodName], ret;
            that[methodName] = function() {
                args = simplifyArray(Array.prototype.slice.call(arguments, 0));
                ret = origMethod.apply(that, arguments);
                that._trace({
                    method: methodName,
                    args: args
                });
                return ret;
            };
        };
        for(n = 0; n < len; n++)func(CONTEXT_METHODS[n]);
        that.setAttr = function() {
            origSetter.apply(that, arguments);
            var prop = arguments[0];
            var val = arguments[1];
            if (prop === "shadowOffsetX" || prop === "shadowOffsetY" || prop === "shadowBlur") val = val / this.canvas.getPixelRatio();
            that._trace({
                property: prop,
                val: val
            });
        };
    }
    _applyGlobalCompositeOperation(node) {
        const op = node.attrs.globalCompositeOperation;
        var def = !op || op === "source-over";
        if (!def) this.setAttr("globalCompositeOperation", op);
    }
}
CONTEXT_PROPERTIES.forEach(function(prop) {
    Object.defineProperty(Context.prototype, prop, {
        get () {
            return this._context[prop];
        },
        set (val) {
            this._context[prop] = val;
        }
    });
});
class SceneContext extends Context {
    _fillColor(shape) {
        var fill = shape.fill();
        this.setAttr("fillStyle", fill);
        shape._fillFunc(this);
    }
    _fillPattern(shape) {
        this.setAttr("fillStyle", shape._getFillPattern());
        shape._fillFunc(this);
    }
    _fillLinearGradient(shape) {
        var grd = shape._getLinearGradient();
        if (grd) {
            this.setAttr("fillStyle", grd);
            shape._fillFunc(this);
        }
    }
    _fillRadialGradient(shape) {
        var grd = shape._getRadialGradient();
        if (grd) {
            this.setAttr("fillStyle", grd);
            shape._fillFunc(this);
        }
    }
    _fill(shape) {
        var hasColor = shape.fill(), fillPriority = shape.getFillPriority();
        if (hasColor && fillPriority === "color") {
            this._fillColor(shape);
            return;
        }
        var hasPattern = shape.getFillPatternImage();
        if (hasPattern && fillPriority === "pattern") {
            this._fillPattern(shape);
            return;
        }
        var hasLinearGradient = shape.getFillLinearGradientColorStops();
        if (hasLinearGradient && fillPriority === "linear-gradient") {
            this._fillLinearGradient(shape);
            return;
        }
        var hasRadialGradient = shape.getFillRadialGradientColorStops();
        if (hasRadialGradient && fillPriority === "radial-gradient") {
            this._fillRadialGradient(shape);
            return;
        }
        if (hasColor) this._fillColor(shape);
        else if (hasPattern) this._fillPattern(shape);
        else if (hasLinearGradient) this._fillLinearGradient(shape);
        else if (hasRadialGradient) this._fillRadialGradient(shape);
    }
    _strokeLinearGradient(shape) {
        var start = shape.getStrokeLinearGradientStartPoint(), end = shape.getStrokeLinearGradientEndPoint(), colorStops = shape.getStrokeLinearGradientColorStops(), grd = this.createLinearGradient(start.x, start.y, end.x, end.y);
        if (colorStops) {
            for(var n = 0; n < colorStops.length; n += 2)grd.addColorStop(colorStops[n], colorStops[n + 1]);
            this.setAttr("strokeStyle", grd);
        }
    }
    _stroke(shape) {
        var dash = shape.dash(), strokeScaleEnabled = shape.getStrokeScaleEnabled();
        if (shape.hasStroke()) {
            if (!strokeScaleEnabled) {
                this.save();
                var pixelRatio = this.getCanvas().getPixelRatio();
                this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            }
            this._applyLineCap(shape);
            if (dash && shape.dashEnabled()) {
                this.setLineDash(dash);
                this.setAttr("lineDashOffset", shape.dashOffset());
            }
            this.setAttr("lineWidth", shape.strokeWidth());
            if (!shape.getShadowForStrokeEnabled()) this.setAttr("shadowColor", "rgba(0,0,0,0)");
            var hasLinearGradient = shape.getStrokeLinearGradientColorStops();
            if (hasLinearGradient) this._strokeLinearGradient(shape);
            else this.setAttr("strokeStyle", shape.stroke());
            shape._strokeFunc(this);
            if (!strokeScaleEnabled) this.restore();
        }
    }
    _applyShadow(shape) {
        var _a, _b, _c;
        var color = (_a = shape.getShadowRGBA()) !== null && _a !== void 0 ? _a : "black", blur = (_b = shape.getShadowBlur()) !== null && _b !== void 0 ? _b : 5, offset = (_c = shape.getShadowOffset()) !== null && _c !== void 0 ? _c : {
            x: 0,
            y: 0
        }, scale = shape.getAbsoluteScale(), ratio = this.canvas.getPixelRatio(), scaleX = scale.x * ratio, scaleY = scale.y * ratio;
        this.setAttr("shadowColor", color);
        this.setAttr("shadowBlur", blur * Math.min(Math.abs(scaleX), Math.abs(scaleY)));
        this.setAttr("shadowOffsetX", offset.x * scaleX);
        this.setAttr("shadowOffsetY", offset.y * scaleY);
    }
}
class HitContext extends Context {
    _fill(shape) {
        this.save();
        this.setAttr("fillStyle", shape.colorKey);
        shape._fillFuncHit(this);
        this.restore();
    }
    strokeShape(shape) {
        if (shape.hasHitStroke()) this._stroke(shape);
    }
    _stroke(shape) {
        if (shape.hasHitStroke()) {
            var strokeScaleEnabled = shape.getStrokeScaleEnabled();
            if (!strokeScaleEnabled) {
                this.save();
                var pixelRatio = this.getCanvas().getPixelRatio();
                this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            }
            this._applyLineCap(shape);
            var hitStrokeWidth = shape.hitStrokeWidth();
            var strokeWidth = hitStrokeWidth === "auto" ? shape.strokeWidth() : hitStrokeWidth;
            this.setAttr("lineWidth", strokeWidth);
            this.setAttr("strokeStyle", shape.colorKey);
            shape._strokeFuncHit(this);
            if (!strokeScaleEnabled) this.restore();
        }
    }
}

},{"./Util.js":"a2B39","./Global.js":"asjHM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1gkRd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DD", ()=>DD);
var _globalJs = require("./Global.js");
var _utilJs = require("./Util.js");
const DD = {
    get isDragging () {
        var flag = false;
        DD._dragElements.forEach((elem)=>{
            if (elem.dragStatus === "dragging") flag = true;
        });
        return flag;
    },
    justDragged: false,
    get node () {
        var node;
        DD._dragElements.forEach((elem)=>{
            node = elem.node;
        });
        return node;
    },
    _dragElements: new Map(),
    _drag (evt) {
        const nodesToFireEvents = [];
        DD._dragElements.forEach((elem, key)=>{
            const { node  } = elem;
            const stage = node.getStage();
            stage.setPointersPositions(evt);
            if (elem.pointerId === undefined) elem.pointerId = (0, _utilJs.Util)._getFirstPointerId(evt);
            const pos = stage._changedPointerPositions.find((pos)=>pos.id === elem.pointerId);
            if (!pos) return;
            if (elem.dragStatus !== "dragging") {
                var dragDistance = node.dragDistance();
                var distance = Math.max(Math.abs(pos.x - elem.startPointerPos.x), Math.abs(pos.y - elem.startPointerPos.y));
                if (distance < dragDistance) return;
                node.startDrag({
                    evt
                });
                if (!node.isDragging()) return;
            }
            node._setDragPosition(evt, elem);
            nodesToFireEvents.push(node);
        });
        nodesToFireEvents.forEach((node)=>{
            node.fire("dragmove", {
                type: "dragmove",
                target: node,
                evt: evt
            }, true);
        });
    },
    _endDragBefore (evt) {
        const drawNodes = [];
        DD._dragElements.forEach((elem)=>{
            const { node  } = elem;
            const stage = node.getStage();
            if (evt) stage.setPointersPositions(evt);
            const pos = stage._changedPointerPositions.find((pos)=>pos.id === elem.pointerId);
            if (!pos) return;
            if (elem.dragStatus === "dragging" || elem.dragStatus === "stopped") {
                DD.justDragged = true;
                (0, _globalJs.Konva)._mouseListenClick = false;
                (0, _globalJs.Konva)._touchListenClick = false;
                (0, _globalJs.Konva)._pointerListenClick = false;
                elem.dragStatus = "stopped";
            }
            const drawNode = elem.node.getLayer() || elem.node instanceof (0, _globalJs.Konva)["Stage"] && elem.node;
            if (drawNode && drawNodes.indexOf(drawNode) === -1) drawNodes.push(drawNode);
        });
        drawNodes.forEach((drawNode)=>{
            drawNode.draw();
        });
    },
    _endDragAfter (evt) {
        DD._dragElements.forEach((elem, key)=>{
            if (elem.dragStatus === "stopped") elem.node.fire("dragend", {
                type: "dragend",
                target: elem.node,
                evt: evt
            }, true);
            if (elem.dragStatus !== "dragging") DD._dragElements.delete(key);
        });
    }
};
if ((0, _globalJs.Konva).isBrowser) {
    window.addEventListener("mouseup", DD._endDragBefore, true);
    window.addEventListener("touchend", DD._endDragBefore, true);
    window.addEventListener("mousemove", DD._drag);
    window.addEventListener("touchmove", DD._drag);
    window.addEventListener("mouseup", DD._endDragAfter, false);
    window.addEventListener("touchend", DD._endDragAfter, false);
}

},{"./Global.js":"asjHM","./Util.js":"a2B39","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aGqy9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCapturedShape", ()=>getCapturedShape);
parcelHelpers.export(exports, "createEvent", ()=>createEvent);
parcelHelpers.export(exports, "hasPointerCapture", ()=>hasPointerCapture);
parcelHelpers.export(exports, "setPointerCapture", ()=>setPointerCapture);
parcelHelpers.export(exports, "releaseCapture", ()=>releaseCapture);
var _globalJs = require("./Global.js");
const Captures = new Map();
const SUPPORT_POINTER_EVENTS = (0, _globalJs.Konva)._global["PointerEvent"] !== undefined;
function getCapturedShape(pointerId) {
    return Captures.get(pointerId);
}
function createEvent(evt) {
    return {
        evt,
        pointerId: evt.pointerId
    };
}
function hasPointerCapture(pointerId, shape) {
    return Captures.get(pointerId) === shape;
}
function setPointerCapture(pointerId, shape) {
    releaseCapture(pointerId);
    const stage = shape.getStage();
    if (!stage) return;
    Captures.set(pointerId, shape);
    if (SUPPORT_POINTER_EVENTS) shape._fire("gotpointercapture", createEvent(new PointerEvent("gotpointercapture")));
}
function releaseCapture(pointerId, target) {
    const shape = Captures.get(pointerId);
    if (!shape) return;
    const stage = shape.getStage();
    stage && stage.content;
    Captures.delete(pointerId);
    if (SUPPORT_POINTER_EVENTS) shape._fire("lostpointercapture", createEvent(new PointerEvent("lostpointercapture")));
}

},{"./Global.js":"asjHM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8V6x8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Image", ()=>Image);
var _utilJs = require("../Util.js");
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _validatorsJs = require("../Validators.js");
var _globalJs = require("../Global.js");
class Image extends (0, _shapeJs.Shape) {
    constructor(attrs){
        super(attrs);
        this.on("imageChange.konva", ()=>{
            this._setImageLoad();
        });
        this._setImageLoad();
    }
    _setImageLoad() {
        const image = this.image();
        if (image && image.complete) return;
        if (image && image.readyState === 4) return;
        if (image && image["addEventListener"]) image["addEventListener"]("load", ()=>{
            this._requestDraw();
        });
    }
    _useBufferCanvas() {
        return super._useBufferCanvas(true);
    }
    _sceneFunc(context) {
        const width = this.getWidth();
        const height = this.getHeight();
        const image = this.attrs.image;
        let params;
        if (image) {
            const cropWidth = this.attrs.cropWidth;
            const cropHeight = this.attrs.cropHeight;
            if (cropWidth && cropHeight) params = [
                image,
                this.cropX(),
                this.cropY(),
                cropWidth,
                cropHeight,
                0,
                0,
                width,
                height, 
            ];
            else params = [
                image,
                0,
                0,
                width,
                height
            ];
        }
        if (this.hasFill() || this.hasStroke()) {
            context.beginPath();
            context.rect(0, 0, width, height);
            context.closePath();
            context.fillStrokeShape(this);
        }
        if (image) context.drawImage.apply(context, params);
    }
    _hitFunc(context) {
        var width = this.width(), height = this.height();
        context.beginPath();
        context.rect(0, 0, width, height);
        context.closePath();
        context.fillStrokeShape(this);
    }
    getWidth() {
        var _a, _b;
        return (_a = this.attrs.width) !== null && _a !== void 0 ? _a : (_b = this.image()) === null || _b === void 0 ? void 0 : _b.width;
    }
    getHeight() {
        var _a, _b;
        return (_a = this.attrs.height) !== null && _a !== void 0 ? _a : (_b = this.image()) === null || _b === void 0 ? void 0 : _b.height;
    }
    static fromURL(url, callback, onError = null) {
        var img = (0, _utilJs.Util).createImageElement();
        img.onload = function() {
            var image = new Image({
                image: img
            });
            callback(image);
        };
        img.onerror = onError;
        img.crossOrigin = "Anonymous";
        img.src = url;
    }
}
Image.prototype.className = "Image";
(0, _globalJs._registerNode)(Image);
(0, _factoryJs.Factory).addGetterSetter(Image, "image");
(0, _factoryJs.Factory).addComponentsGetterSetter(Image, "crop", [
    "x",
    "y",
    "width",
    "height"
]);
(0, _factoryJs.Factory).addGetterSetter(Image, "cropX", 0, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Image, "cropY", 0, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Image, "cropWidth", 0, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Image, "cropHeight", 0, (0, _validatorsJs.getNumberValidator)());

},{"../Util.js":"a2B39","../Factory.js":"cBseC","../Shape.js":"9jDGX","../Validators.js":"gkzNd","../Global.js":"asjHM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9jDGX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shapes", ()=>shapes);
parcelHelpers.export(exports, "Shape", ()=>Shape);
var _globalJs = require("./Global.js");
var _utilJs = require("./Util.js");
var _factoryJs = require("./Factory.js");
var _nodeJs = require("./Node.js");
var _validatorsJs = require("./Validators.js");
var _pointerEventsJs = require("./PointerEvents.js");
var HAS_SHADOW = "hasShadow";
var SHADOW_RGBA = "shadowRGBA";
var patternImage = "patternImage";
var linearGradient = "linearGradient";
var radialGradient = "radialGradient";
let dummyContext;
function getDummyContext() {
    if (dummyContext) return dummyContext;
    dummyContext = (0, _utilJs.Util).createCanvasElement().getContext("2d");
    return dummyContext;
}
const shapes = {};
function _fillFunc(context) {
    context.fill();
}
function _strokeFunc(context) {
    context.stroke();
}
function _fillFuncHit(context) {
    context.fill();
}
function _strokeFuncHit(context) {
    context.stroke();
}
function _clearHasShadowCache() {
    this._clearCache(HAS_SHADOW);
}
function _clearGetShadowRGBACache() {
    this._clearCache(SHADOW_RGBA);
}
function _clearFillPatternCache() {
    this._clearCache(patternImage);
}
function _clearLinearGradientCache() {
    this._clearCache(linearGradient);
}
function _clearRadialGradientCache() {
    this._clearCache(radialGradient);
}
class Shape extends (0, _nodeJs.Node) {
    constructor(config){
        super(config);
        let key;
        while(true){
            key = (0, _utilJs.Util).getRandomColor();
            if (key && !(key in shapes)) break;
        }
        this.colorKey = key;
        shapes[key] = this;
    }
    getContext() {
        (0, _utilJs.Util).warn("shape.getContext() method is deprecated. Please do not use it.");
        return this.getLayer().getContext();
    }
    getCanvas() {
        (0, _utilJs.Util).warn("shape.getCanvas() method is deprecated. Please do not use it.");
        return this.getLayer().getCanvas();
    }
    getSceneFunc() {
        return this.attrs.sceneFunc || this["_sceneFunc"];
    }
    getHitFunc() {
        return this.attrs.hitFunc || this["_hitFunc"];
    }
    hasShadow() {
        return this._getCache(HAS_SHADOW, this._hasShadow);
    }
    _hasShadow() {
        return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
    }
    _getFillPattern() {
        return this._getCache(patternImage, this.__getFillPattern);
    }
    __getFillPattern() {
        if (this.fillPatternImage()) {
            var ctx = getDummyContext();
            const pattern = ctx.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
            if (pattern && pattern.setTransform) {
                const tr = new (0, _utilJs.Transform)();
                tr.translate(this.fillPatternX(), this.fillPatternY());
                tr.rotate((0, _globalJs.Konva).getAngle(this.fillPatternRotation()));
                tr.scale(this.fillPatternScaleX(), this.fillPatternScaleY());
                tr.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
                const m = tr.getMatrix();
                const matrix = typeof DOMMatrix === "undefined" ? {
                    a: m[0],
                    b: m[1],
                    c: m[2],
                    d: m[3],
                    e: m[4],
                    f: m[5]
                } : new DOMMatrix(m);
                pattern.setTransform(matrix);
            }
            return pattern;
        }
    }
    _getLinearGradient() {
        return this._getCache(linearGradient, this.__getLinearGradient);
    }
    __getLinearGradient() {
        var colorStops = this.fillLinearGradientColorStops();
        if (colorStops) {
            var ctx = getDummyContext();
            var start = this.fillLinearGradientStartPoint();
            var end = this.fillLinearGradientEndPoint();
            var grd = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
            for(var n = 0; n < colorStops.length; n += 2)grd.addColorStop(colorStops[n], colorStops[n + 1]);
            return grd;
        }
    }
    _getRadialGradient() {
        return this._getCache(radialGradient, this.__getRadialGradient);
    }
    __getRadialGradient() {
        var colorStops = this.fillRadialGradientColorStops();
        if (colorStops) {
            var ctx = getDummyContext();
            var start = this.fillRadialGradientStartPoint();
            var end = this.fillRadialGradientEndPoint();
            var grd = ctx.createRadialGradient(start.x, start.y, this.fillRadialGradientStartRadius(), end.x, end.y, this.fillRadialGradientEndRadius());
            for(var n = 0; n < colorStops.length; n += 2)grd.addColorStop(colorStops[n], colorStops[n + 1]);
            return grd;
        }
    }
    getShadowRGBA() {
        return this._getCache(SHADOW_RGBA, this._getShadowRGBA);
    }
    _getShadowRGBA() {
        if (this.hasShadow()) {
            var rgba = (0, _utilJs.Util).colorToRGBA(this.shadowColor());
            return "rgba(" + rgba.r + "," + rgba.g + "," + rgba.b + "," + rgba.a * (this.shadowOpacity() || 1) + ")";
        }
    }
    hasFill() {
        return this._calculate("hasFill", [
            "fillEnabled",
            "fill",
            "fillPatternImage",
            "fillLinearGradientColorStops",
            "fillRadialGradientColorStops", 
        ], ()=>{
            return this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops());
        });
    }
    hasStroke() {
        return this._calculate("hasStroke", [
            "strokeEnabled",
            "strokeWidth",
            "stroke",
            "strokeLinearGradientColorStops", 
        ], ()=>{
            return this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops());
        });
    }
    hasHitStroke() {
        const width = this.hitStrokeWidth();
        if (width === "auto") return this.hasStroke();
        return this.strokeEnabled() && !!width;
    }
    intersects(point) {
        var stage = this.getStage(), bufferHitCanvas = stage.bufferHitCanvas, p;
        bufferHitCanvas.getContext().clear();
        this.drawHit(bufferHitCanvas, null, true);
        p = bufferHitCanvas.context.getImageData(Math.round(point.x), Math.round(point.y), 1, 1).data;
        return p[3] > 0;
    }
    destroy() {
        (0, _nodeJs.Node).prototype.destroy.call(this);
        delete shapes[this.colorKey];
        delete this.colorKey;
        return this;
    }
    _useBufferCanvas(forceFill) {
        var _a;
        if (!this.getStage()) return false;
        const perfectDrawEnabled = (_a = this.attrs.perfectDrawEnabled) !== null && _a !== void 0 ? _a : true;
        if (!perfectDrawEnabled) return false;
        const hasFill = forceFill || this.hasFill();
        const hasStroke = this.hasStroke();
        const isTransparent = this.getAbsoluteOpacity() !== 1;
        if (hasFill && hasStroke && isTransparent) return true;
        const hasShadow = this.hasShadow();
        const strokeForShadow = this.shadowForStrokeEnabled();
        if (hasFill && hasStroke && hasShadow && strokeForShadow) return true;
        return false;
    }
    setStrokeHitEnabled(val) {
        (0, _utilJs.Util).warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.");
        if (val) this.hitStrokeWidth("auto");
        else this.hitStrokeWidth(0);
    }
    getStrokeHitEnabled() {
        if (this.hitStrokeWidth() === 0) return false;
        else return true;
    }
    getSelfRect() {
        var size = this.size();
        return {
            x: this._centroid ? -size.width / 2 : 0,
            y: this._centroid ? -size.height / 2 : 0,
            width: size.width,
            height: size.height
        };
    }
    getClientRect(config = {}) {
        const skipTransform = config.skipTransform;
        const relativeTo = config.relativeTo;
        const fillRect = this.getSelfRect();
        const applyStroke = !config.skipStroke && this.hasStroke();
        const strokeWidth = applyStroke && this.strokeWidth() || 0;
        const fillAndStrokeWidth = fillRect.width + strokeWidth;
        const fillAndStrokeHeight = fillRect.height + strokeWidth;
        const applyShadow = !config.skipShadow && this.hasShadow();
        const shadowOffsetX = applyShadow ? this.shadowOffsetX() : 0;
        const shadowOffsetY = applyShadow ? this.shadowOffsetY() : 0;
        const preWidth = fillAndStrokeWidth + Math.abs(shadowOffsetX);
        const preHeight = fillAndStrokeHeight + Math.abs(shadowOffsetY);
        const blurRadius = applyShadow && this.shadowBlur() || 0;
        const width = preWidth + blurRadius * 2;
        const height = preHeight + blurRadius * 2;
        const rect = {
            width: width,
            height: height,
            x: -(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetX, 0) + fillRect.x,
            y: -(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetY, 0) + fillRect.y
        };
        if (!skipTransform) return this._transformedRect(rect, relativeTo);
        return rect;
    }
    drawScene(can, top) {
        var layer = this.getLayer(), canvas = can || layer.getCanvas(), context = canvas.getContext(), cachedCanvas = this._getCanvasCache(), drawFunc = this.getSceneFunc(), hasShadow = this.hasShadow(), stage, bufferCanvas, bufferContext;
        var skipBuffer = canvas.isCache;
        var cachingSelf = top === this;
        if (!this.isVisible() && !cachingSelf) return this;
        if (cachedCanvas) {
            context.save();
            var m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedSceneCanvas(context);
            context.restore();
            return this;
        }
        if (!drawFunc) return this;
        context.save();
        if (this._useBufferCanvas() && !skipBuffer) {
            stage = this.getStage();
            bufferCanvas = stage.bufferCanvas;
            bufferContext = bufferCanvas.getContext();
            bufferContext.clear();
            bufferContext.save();
            bufferContext._applyLineJoin(this);
            var o = this.getAbsoluteTransform(top).getMatrix();
            bufferContext.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
            drawFunc.call(this, bufferContext, this);
            bufferContext.restore();
            var ratio = bufferCanvas.pixelRatio;
            if (hasShadow) context._applyShadow(this);
            context._applyOpacity(this);
            context._applyGlobalCompositeOperation(this);
            context.drawImage(bufferCanvas._canvas, 0, 0, bufferCanvas.width / ratio, bufferCanvas.height / ratio);
        } else {
            context._applyLineJoin(this);
            if (!cachingSelf) {
                var o = this.getAbsoluteTransform(top).getMatrix();
                context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
                context._applyOpacity(this);
                context._applyGlobalCompositeOperation(this);
            }
            if (hasShadow) context._applyShadow(this);
            drawFunc.call(this, context, this);
        }
        context.restore();
        return this;
    }
    drawHit(can, top, skipDragCheck = false) {
        if (!this.shouldDrawHit(top, skipDragCheck)) return this;
        var layer = this.getLayer(), canvas = can || layer.hitCanvas, context = canvas && canvas.getContext(), drawFunc = this.hitFunc() || this.sceneFunc(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
        if (!this.colorKey) (0, _utilJs.Util).warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()");
        if (cachedHitCanvas) {
            context.save();
            var m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedHitCanvas(context);
            context.restore();
            return this;
        }
        if (!drawFunc) return this;
        context.save();
        context._applyLineJoin(this);
        const selfCache = this === top;
        if (!selfCache) {
            var o = this.getAbsoluteTransform(top).getMatrix();
            context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
        }
        drawFunc.call(this, context, this);
        context.restore();
        return this;
    }
    drawHitFromCache(alphaThreshold = 0) {
        var cachedCanvas = this._getCanvasCache(), sceneCanvas = this._getCachedSceneCanvas(), hitCanvas = cachedCanvas.hit, hitContext = hitCanvas.getContext(), hitWidth = hitCanvas.getWidth(), hitHeight = hitCanvas.getHeight(), hitImageData, hitData, len, rgbColorKey, i, alpha;
        hitContext.clear();
        hitContext.drawImage(sceneCanvas._canvas, 0, 0, hitWidth, hitHeight);
        try {
            hitImageData = hitContext.getImageData(0, 0, hitWidth, hitHeight);
            hitData = hitImageData.data;
            len = hitData.length;
            rgbColorKey = (0, _utilJs.Util)._hexToRgb(this.colorKey);
            for(i = 0; i < len; i += 4){
                alpha = hitData[i + 3];
                if (alpha > alphaThreshold) {
                    hitData[i] = rgbColorKey.r;
                    hitData[i + 1] = rgbColorKey.g;
                    hitData[i + 2] = rgbColorKey.b;
                    hitData[i + 3] = 255;
                } else hitData[i + 3] = 0;
            }
            hitContext.putImageData(hitImageData, 0, 0);
        } catch (e) {
            (0, _utilJs.Util).error("Unable to draw hit graph from cached scene canvas. " + e.message);
        }
        return this;
    }
    hasPointerCapture(pointerId) {
        return _pointerEventsJs.hasPointerCapture(pointerId, this);
    }
    setPointerCapture(pointerId) {
        _pointerEventsJs.setPointerCapture(pointerId, this);
    }
    releaseCapture(pointerId) {
        _pointerEventsJs.releaseCapture(pointerId, this);
    }
}
Shape.prototype._fillFunc = _fillFunc;
Shape.prototype._strokeFunc = _strokeFunc;
Shape.prototype._fillFuncHit = _fillFuncHit;
Shape.prototype._strokeFuncHit = _strokeFuncHit;
Shape.prototype._centroid = false;
Shape.prototype.nodeType = "Shape";
(0, _globalJs._registerNode)(Shape);
Shape.prototype.eventListeners = {};
Shape.prototype.on.call(Shape.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _clearHasShadowCache);
Shape.prototype.on.call(Shape.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _clearGetShadowRGBACache);
Shape.prototype.on.call(Shape.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", _clearFillPatternCache);
Shape.prototype.on.call(Shape.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", _clearLinearGradientCache);
Shape.prototype.on.call(Shape.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", _clearRadialGradientCache);
(0, _factoryJs.Factory).addGetterSetter(Shape, "stroke", undefined, (0, _validatorsJs.getStringOrGradientValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "strokeWidth", 2, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillAfterStrokeEnabled", false);
(0, _factoryJs.Factory).addGetterSetter(Shape, "hitStrokeWidth", "auto", (0, _validatorsJs.getNumberOrAutoValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "strokeHitEnabled", true, (0, _validatorsJs.getBooleanValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "perfectDrawEnabled", true, (0, _validatorsJs.getBooleanValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "shadowForStrokeEnabled", true, (0, _validatorsJs.getBooleanValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "lineJoin");
(0, _factoryJs.Factory).addGetterSetter(Shape, "lineCap");
(0, _factoryJs.Factory).addGetterSetter(Shape, "sceneFunc");
(0, _factoryJs.Factory).addGetterSetter(Shape, "hitFunc");
(0, _factoryJs.Factory).addGetterSetter(Shape, "dash");
(0, _factoryJs.Factory).addGetterSetter(Shape, "dashOffset", 0, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "shadowColor", undefined, (0, _validatorsJs.getStringValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "shadowBlur", 0, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "shadowOpacity", 1, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addComponentsGetterSetter(Shape, "shadowOffset", [
    "x",
    "y"
]);
(0, _factoryJs.Factory).addGetterSetter(Shape, "shadowOffsetX", 0, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "shadowOffsetY", 0, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillPatternImage");
(0, _factoryJs.Factory).addGetterSetter(Shape, "fill", undefined, (0, _validatorsJs.getStringOrGradientValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillPatternX", 0, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillPatternY", 0, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillLinearGradientColorStops");
(0, _factoryJs.Factory).addGetterSetter(Shape, "strokeLinearGradientColorStops");
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillRadialGradientStartRadius", 0);
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillRadialGradientEndRadius", 0);
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillRadialGradientColorStops");
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillPatternRepeat", "repeat");
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillEnabled", true);
(0, _factoryJs.Factory).addGetterSetter(Shape, "strokeEnabled", true);
(0, _factoryJs.Factory).addGetterSetter(Shape, "shadowEnabled", true);
(0, _factoryJs.Factory).addGetterSetter(Shape, "dashEnabled", true);
(0, _factoryJs.Factory).addGetterSetter(Shape, "strokeScaleEnabled", true);
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillPriority", "color");
(0, _factoryJs.Factory).addComponentsGetterSetter(Shape, "fillPatternOffset", [
    "x",
    "y"
]);
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillPatternOffsetX", 0, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillPatternOffsetY", 0, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addComponentsGetterSetter(Shape, "fillPatternScale", [
    "x",
    "y"
]);
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillPatternScaleX", 1, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillPatternScaleY", 1, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addComponentsGetterSetter(Shape, "fillLinearGradientStartPoint", [
    "x",
    "y", 
]);
(0, _factoryJs.Factory).addComponentsGetterSetter(Shape, "strokeLinearGradientStartPoint", [
    "x",
    "y", 
]);
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillLinearGradientStartPointX", 0);
(0, _factoryJs.Factory).addGetterSetter(Shape, "strokeLinearGradientStartPointX", 0);
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillLinearGradientStartPointY", 0);
(0, _factoryJs.Factory).addGetterSetter(Shape, "strokeLinearGradientStartPointY", 0);
(0, _factoryJs.Factory).addComponentsGetterSetter(Shape, "fillLinearGradientEndPoint", [
    "x",
    "y", 
]);
(0, _factoryJs.Factory).addComponentsGetterSetter(Shape, "strokeLinearGradientEndPoint", [
    "x",
    "y", 
]);
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillLinearGradientEndPointX", 0);
(0, _factoryJs.Factory).addGetterSetter(Shape, "strokeLinearGradientEndPointX", 0);
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillLinearGradientEndPointY", 0);
(0, _factoryJs.Factory).addGetterSetter(Shape, "strokeLinearGradientEndPointY", 0);
(0, _factoryJs.Factory).addComponentsGetterSetter(Shape, "fillRadialGradientStartPoint", [
    "x",
    "y", 
]);
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillRadialGradientStartPointX", 0);
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillRadialGradientStartPointY", 0);
(0, _factoryJs.Factory).addComponentsGetterSetter(Shape, "fillRadialGradientEndPoint", [
    "x",
    "y", 
]);
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillRadialGradientEndPointX", 0);
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillRadialGradientEndPointY", 0);
(0, _factoryJs.Factory).addGetterSetter(Shape, "fillPatternRotation", 0);
(0, _factoryJs.Factory).backCompat(Shape, {
    dashArray: "dash",
    getDashArray: "getDash",
    setDashArray: "getDash",
    drawFunc: "sceneFunc",
    getDrawFunc: "getSceneFunc",
    setDrawFunc: "setSceneFunc",
    drawHitFunc: "hitFunc",
    getDrawHitFunc: "getHitFunc",
    setDrawHitFunc: "setHitFunc"
});

},{"./Global.js":"asjHM","./Util.js":"a2B39","./Factory.js":"cBseC","./Node.js":"bfHol","./Validators.js":"gkzNd","./PointerEvents.js":"aGqy9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequire5d24")

//# sourceMappingURL=index.b71e74eb.js.map
