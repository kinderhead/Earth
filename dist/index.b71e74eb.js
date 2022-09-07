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
var _layer = require("konva/lib/Layer");
var _image = require("konva/lib/shapes/Image");
var _stage = require("konva/lib/Stage");
var _jquery = require("jquery");
var _jqueryDefault = parcelHelpers.interopDefault(_jquery);
var _platesJson = require("../res/plates.json");
var _platesJsonDefault = parcelHelpers.interopDefault(_platesJson);
var _line = require("konva/lib/shapes/Line");
class App {
    textures = {};
    earthSize = [
        0,
        0
    ];
    constructor(){
        console.log("Initializing");
        this.stage = new (0, _stage.Stage)({
            container: "Main",
            width: window.innerWidth,
            height: window.innerHeight
        });
        this.layer = new (0, _layer.Layer)();
        this.stage.add(this.layer);
        this.loadImages().then(()=>{
            addEventListener("resize", (event)=>this.update());
            this.update();
        });
    }
    update() {
        this.stage.clear();
        this.layer.add(this.textures["earth"]);
        (0, _platesJsonDefault.default).features.forEach((i)=>{
            let points = [];
            i.geometry.coordinates.forEach((i)=>{
                let p = this.latLongToXY(i[1], i[0]);
                if (isNaN(p[0]) || isNaN(p[1])) throw new RangeError("Uh oh");
                points.push(p[0]);
                points.push(p[1]);
            });
            this.layer.add(new (0, _line.Line)({
                points: points,
                stroke: "red"
            }));
        });
        this.layer.draw();
    }
    loadImages() {
        return new Promise((resolve, reject)=>{
            var count = 0;
            var total = 0;
            (0, _jqueryDefault.default)("img").each(function(idx, img) {
                total++;
                (0, _jqueryDefault.default)("<img>").on("load", ()=>{
                    console.log("Loaded " + (0, _jqueryDefault.default)(img).attr("src"));
                    count++;
                }).attr("src", (0, _jqueryDefault.default)(img).attr("src"));
            });
            var wait = ()=>{
                if (count == total) {
                    this.textures["earth"] = new (0, _image.Image)({
                        image: document.getElementById("earth")
                    });
                    this.earthSize = [
                        this.textures["earth"].width(),
                        this.textures["earth"].height()
                    ];
                    resolve();
                } else setTimeout(wait, 50);
            };
            setTimeout(wait, 50);
        });
    }
    latLongToXY(latitude, longitude) {
        return [
            (longitude + 180) * (this.earthSize[0] / 360),
            this.earthSize[1] / 2 - this.earthSize[0] * Math.log(Math.tan(Math.PI / 4 + latitude * Math.PI / 180 / 2)) / (2 * Math.PI)
        ];
    }
}
exports.default = App;

},{"konva/lib/Layer":"1Tbuc","konva/lib/shapes/Image":"8V6x8","konva/lib/Stage":"38rm3","jquery":"hgMhh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../res/plates.json":"adjI2","konva/lib/shapes/Line":"lpEAb"}],"1Tbuc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Layer", ()=>Layer);
var _utilJs = require("./Util.js");
var _containerJs = require("./Container.js");
var _nodeJs = require("./Node.js");
var _factoryJs = require("./Factory.js");
var _canvasJs = require("./Canvas.js");
var _validatorsJs = require("./Validators.js");
var _shapeJs = require("./Shape.js");
var _globalJs = require("./Global.js");
var HASH = "#", BEFORE_DRAW = "beforeDraw", DRAW = "draw", INTERSECTION_OFFSETS = [
    {
        x: 0,
        y: 0
    },
    {
        x: -1,
        y: -1
    },
    {
        x: 1,
        y: -1
    },
    {
        x: 1,
        y: 1
    },
    {
        x: -1,
        y: 1
    }, 
], INTERSECTION_OFFSETS_LEN = INTERSECTION_OFFSETS.length;
class Layer extends (0, _containerJs.Container) {
    constructor(config){
        super(config);
        this.canvas = new (0, _canvasJs.SceneCanvas)();
        this.hitCanvas = new (0, _canvasJs.HitCanvas)({
            pixelRatio: 1
        });
        this._waitingForDraw = false;
        this.on("visibleChange.konva", this._checkVisibility);
        this._checkVisibility();
        this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled);
        this._setSmoothEnabled();
    }
    createPNGStream() {
        const c = this.canvas._canvas;
        return c.createPNGStream();
    }
    getCanvas() {
        return this.canvas;
    }
    getNativeCanvasElement() {
        return this.canvas._canvas;
    }
    getHitCanvas() {
        return this.hitCanvas;
    }
    getContext() {
        return this.getCanvas().getContext();
    }
    clear(bounds) {
        this.getContext().clear(bounds);
        this.getHitCanvas().getContext().clear(bounds);
        return this;
    }
    setZIndex(index) {
        super.setZIndex(index);
        var stage = this.getStage();
        if (stage && stage.content) {
            stage.content.removeChild(this.getNativeCanvasElement());
            if (index < stage.children.length - 1) stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[index + 1].getCanvas()._canvas);
            else stage.content.appendChild(this.getNativeCanvasElement());
        }
        return this;
    }
    moveToTop() {
        (0, _nodeJs.Node).prototype.moveToTop.call(this);
        var stage = this.getStage();
        if (stage && stage.content) {
            stage.content.removeChild(this.getNativeCanvasElement());
            stage.content.appendChild(this.getNativeCanvasElement());
        }
        return true;
    }
    moveUp() {
        var moved = (0, _nodeJs.Node).prototype.moveUp.call(this);
        if (!moved) return false;
        var stage = this.getStage();
        if (!stage || !stage.content) return false;
        stage.content.removeChild(this.getNativeCanvasElement());
        if (this.index < stage.children.length - 1) stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[this.index + 1].getCanvas()._canvas);
        else stage.content.appendChild(this.getNativeCanvasElement());
        return true;
    }
    moveDown() {
        if ((0, _nodeJs.Node).prototype.moveDown.call(this)) {
            var stage = this.getStage();
            if (stage) {
                var children = stage.children;
                if (stage.content) {
                    stage.content.removeChild(this.getNativeCanvasElement());
                    stage.content.insertBefore(this.getNativeCanvasElement(), children[this.index + 1].getCanvas()._canvas);
                }
            }
            return true;
        }
        return false;
    }
    moveToBottom() {
        if ((0, _nodeJs.Node).prototype.moveToBottom.call(this)) {
            var stage = this.getStage();
            if (stage) {
                var children = stage.children;
                if (stage.content) {
                    stage.content.removeChild(this.getNativeCanvasElement());
                    stage.content.insertBefore(this.getNativeCanvasElement(), children[1].getCanvas()._canvas);
                }
            }
            return true;
        }
        return false;
    }
    getLayer() {
        return this;
    }
    remove() {
        var _canvas = this.getNativeCanvasElement();
        (0, _nodeJs.Node).prototype.remove.call(this);
        if (_canvas && _canvas.parentNode && (0, _utilJs.Util)._isInDocument(_canvas)) _canvas.parentNode.removeChild(_canvas);
        return this;
    }
    getStage() {
        return this.parent;
    }
    setSize({ width , height  }) {
        this.canvas.setSize(width, height);
        this.hitCanvas.setSize(width, height);
        this._setSmoothEnabled();
        return this;
    }
    _validateAdd(child) {
        var type = child.getType();
        if (type !== "Group" && type !== "Shape") (0, _utilJs.Util).throw("You may only add groups and shapes to a layer.");
    }
    _toKonvaCanvas(config) {
        config = config || {};
        config.width = config.width || this.getWidth();
        config.height = config.height || this.getHeight();
        config.x = config.x !== undefined ? config.x : this.x();
        config.y = config.y !== undefined ? config.y : this.y();
        return (0, _nodeJs.Node).prototype._toKonvaCanvas.call(this, config);
    }
    _checkVisibility() {
        const visible = this.visible();
        if (visible) this.canvas._canvas.style.display = "block";
        else this.canvas._canvas.style.display = "none";
    }
    _setSmoothEnabled() {
        this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
    }
    getWidth() {
        if (this.parent) return this.parent.width();
    }
    setWidth() {
        (0, _utilJs.Util).warn('Can not change width of layer. Use "stage.width(value)" function instead.');
    }
    getHeight() {
        if (this.parent) return this.parent.height();
    }
    setHeight() {
        (0, _utilJs.Util).warn('Can not change height of layer. Use "stage.height(value)" function instead.');
    }
    batchDraw() {
        if (!this._waitingForDraw) {
            this._waitingForDraw = true;
            (0, _utilJs.Util).requestAnimFrame(()=>{
                this.draw();
                this._waitingForDraw = false;
            });
        }
        return this;
    }
    getIntersection(pos) {
        if (!this.isListening() || !this.isVisible()) return null;
        var spiralSearchDistance = 1;
        var continueSearch = false;
        while(true){
            for(let i = 0; i < INTERSECTION_OFFSETS_LEN; i++){
                const intersectionOffset = INTERSECTION_OFFSETS[i];
                const obj = this._getIntersection({
                    x: pos.x + intersectionOffset.x * spiralSearchDistance,
                    y: pos.y + intersectionOffset.y * spiralSearchDistance
                });
                const shape = obj.shape;
                if (shape) return shape;
                continueSearch = !!obj.antialiased;
                if (!obj.antialiased) break;
            }
            if (continueSearch) spiralSearchDistance += 1;
            else return null;
        }
    }
    _getIntersection(pos) {
        const ratio = this.hitCanvas.pixelRatio;
        const p = this.hitCanvas.context.getImageData(Math.round(pos.x * ratio), Math.round(pos.y * ratio), 1, 1).data;
        const p3 = p[3];
        if (p3 === 255) {
            const colorKey = (0, _utilJs.Util)._rgbToHex(p[0], p[1], p[2]);
            const shape = (0, _shapeJs.shapes)[HASH + colorKey];
            if (shape) return {
                shape: shape
            };
            return {
                antialiased: true
            };
        } else if (p3 > 0) return {
            antialiased: true
        };
        return {};
    }
    drawScene(can, top) {
        var layer = this.getLayer(), canvas = can || layer && layer.getCanvas();
        this._fire(BEFORE_DRAW, {
            node: this
        });
        if (this.clearBeforeDraw()) canvas.getContext().clear();
        (0, _containerJs.Container).prototype.drawScene.call(this, canvas, top);
        this._fire(DRAW, {
            node: this
        });
        return this;
    }
    drawHit(can, top) {
        var layer = this.getLayer(), canvas = can || layer && layer.hitCanvas;
        if (layer && layer.clearBeforeDraw()) layer.getHitCanvas().getContext().clear();
        (0, _containerJs.Container).prototype.drawHit.call(this, canvas, top);
        return this;
    }
    enableHitGraph() {
        this.hitGraphEnabled(true);
        return this;
    }
    disableHitGraph() {
        this.hitGraphEnabled(false);
        return this;
    }
    setHitGraphEnabled(val) {
        (0, _utilJs.Util).warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead.");
        this.listening(val);
    }
    getHitGraphEnabled(val) {
        (0, _utilJs.Util).warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead.");
        return this.listening();
    }
    toggleHitCanvas() {
        if (!this.parent || !this.parent["content"]) return;
        var parent = this.parent;
        var added = !!this.hitCanvas._canvas.parentNode;
        if (added) parent.content.removeChild(this.hitCanvas._canvas);
        else parent.content.appendChild(this.hitCanvas._canvas);
    }
}
Layer.prototype.nodeType = "Layer";
(0, _globalJs._registerNode)(Layer);
(0, _factoryJs.Factory).addGetterSetter(Layer, "imageSmoothingEnabled", true);
(0, _factoryJs.Factory).addGetterSetter(Layer, "clearBeforeDraw", true);
(0, _factoryJs.Factory).addGetterSetter(Layer, "hitGraphEnabled", true, (0, _validatorsJs.getBooleanValidator)());

},{"./Util.js":"a2B39","./Container.js":"5xUok","./Node.js":"bfHol","./Factory.js":"cBseC","./Canvas.js":"2h78K","./Validators.js":"gkzNd","./Shape.js":"9jDGX","./Global.js":"asjHM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2B39":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"5xUok":[function(require,module,exports) {
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

},{"./Factory.js":"cBseC","./Node.js":"bfHol","./Validators.js":"gkzNd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cBseC":[function(require,module,exports) {
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

},{"./Global.js":"asjHM","./Util.js":"a2B39","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfHol":[function(require,module,exports) {
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

},{"./Global.js":"asjHM","./Util.js":"a2B39","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9jDGX":[function(require,module,exports) {
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

},{"./Global.js":"asjHM","./Util.js":"a2B39","./Factory.js":"cBseC","./Node.js":"bfHol","./Validators.js":"gkzNd","./PointerEvents.js":"aGqy9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aGqy9":[function(require,module,exports) {
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

},{"../Util.js":"a2B39","../Factory.js":"cBseC","../Shape.js":"9jDGX","../Validators.js":"gkzNd","../Global.js":"asjHM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"38rm3":[function(require,module,exports) {
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

},{"./Util.js":"a2B39","./Factory.js":"cBseC","./Container.js":"5xUok","./Global.js":"asjHM","./Canvas.js":"2h78K","./DragAndDrop.js":"1gkRd","./PointerEvents.js":"aGqy9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hgMhh":[function(require,module,exports) {
/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */ (function(global, factory) {
    "use strict";
    if (typeof module.exports === "object") // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket trac-14549 for more info.
    module.exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) throw new Error("jQuery requires a window with a document");
        return factory(w);
    };
    else factory(global);
// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function(window1, noGlobal) {
    // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
    // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
    // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
    // enough that all such attempts are guarded in a try block.
    "use strict";
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
    } : function(array) {
        return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    var isFunction = function isFunction(obj) {
        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
        // Plus for old WebKit, typeof returns "function" for HTML collections
        // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
    };
    var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
    };
    var document = window1.document;
    var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
    };
    function DOMEval(code, node, doc) {
        doc = doc || document;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) for(i in preservedScriptAttributes){
            // Support: Firefox 64+, Edge 18+
            // Some browsers don't support the "nonce" property on scripts.
            // On the other hand, just using `getAttribute` is not enough as
            // the `nonce` attribute is reset to an empty string whenever it
            // becomes browsing-context connected.
            // See https://github.com/whatwg/html/issues/2369
            // See https://html.spec.whatwg.org/#nonce-attributes
            // The `node.getAttribute` check was added for the sake of
            // `jQuery.globalEval` so that it can fake a nonce-containing node
            // via an object.
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) script.setAttribute(i, val);
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function toType(obj) {
        if (obj == null) return obj + "";
        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    }
    /* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module
    var version = "3.6.1", // Define a local copy of jQuery
    jQuery = function(selector, context) {
        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
            // Return all the elements in a clean array
            if (num == null) return slice.call(this);
            // Return just the one element from the set
            return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
            // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems);
            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
            // Return the newly-formed element set
            return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
            return jQuery.each(this, callback);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return (i + 1) % 2;
            }));
        },
        odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return i % 2;
            }));
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [
                this[j]
            ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }
        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !isFunction(target)) target = {};
        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }
        for(; i < length; i++){
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) // Extend the base object
            for(name in options){
                copy = options[name];
                // Prevent Object.prototype pollution
                // Prevent never-ending loop
                if (name === "__proto__" || target === copy) continue;
                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    src = target[name];
                    // Ensure proper type for the source value
                    if (copyIsArray && !Array.isArray(src)) clone = [];
                    else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {};
                    else clone = src;
                    copyIsArray = false;
                    // Never move original objects, clone them
                    target[name] = jQuery.extend(deep, clone, copy);
                // Don't bring in undefined values
                } else if (copy !== undefined) target[name] = copy;
            }
        }
        // Return the modified object
        return target;
    };
    jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {},
        isPlainObject: function(obj) {
            var proto, Ctor;
            // Detect obvious negatives
            // Use toString instead of jQuery.type to catch host objects
            if (!obj || toString.call(obj) !== "[object Object]") return false;
            proto = getProto(obj);
            // Objects with no prototype (e.g., `Object.create( null )`) are plain
            if (!proto) return true;
            // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
            var name;
            for(name in obj)return false;
            return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
            DOMEval(code, {
                nonce: options && options.nonce
            }, doc);
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                length = obj.length;
                for(; i < length; i++){
                    if (callback.call(obj[i], i, obj[i]) === false) break;
                }
            } else for(i in obj){
                if (callback.call(obj[i], i, obj[i]) === false) break;
            }
            return obj;
        },
        // results is for internal usage only
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArrayLike(Object(arr))) jQuery.merge(ret, typeof arr === "string" ? [
                    arr
                ] : arr);
                else push.call(ret, arr);
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for(; j < len; j++)first[i++] = second[j];
            first.length = i;
            return first;
        },
        grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            // Go through the array, only saving the items
            // that pass the validator function
            for(; i < length; i++){
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) matches.push(elems[i]);
            }
            return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            // Go through the array, translating each of the items to their new values
            if (isArrayLike(elems)) {
                length = elems.length;
                for(; i < length; i++){
                    value = callback(elems[i], i, arg);
                    if (value != null) ret.push(value);
                }
            // Go through every key on the object,
            } else for(i in elems){
                value = callback(elems[i], i, arg);
                if (value != null) ret.push(value);
            }
            // Flatten any nested arrays
            return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });
    if (typeof Symbol === "function") jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    // Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArrayLike(obj) {
        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) return false;
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    var Sizzle = /*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */ function(window1) {
        var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, // Local document vars
        setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, // Instance-specific data
        expando = "sizzle" + 1 * new Date(), preferredDoc = window1.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) hasDuplicate = true;
            return 0;
        }, // Instance methods
        hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, pushNative = arr.push, push = arr.push, slice = arr.slice, // Use a stripped-down indexOf as it's faster than native
        // https://jsperf.com/thor-indexof-vs-for/5
        indexOf = function(list, elem) {
            var i = 0, len = list.length;
            for(; i < len; i++){
                if (list[i] === elem) return i;
            }
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
        // http://www.w3.org/TR/css3-selectors/#whitespace
        whitespace = "[\\x20\\t\\r\\n\\f]", // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
        identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
        // or strings [capture 3 or capture 4]"
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
        // 1. quoted (capture 3; capture 4 or capture 5)
        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
        ".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rhtml = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, // CSS escapes
        // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 0x10000;
            return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
            nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
            // Support: IE <=11+
            // For values outside the Basic Multilingual Plane (BMP), manually construct a
            // surrogate pair
            high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        }, // CSS string/identifier serialization
        // https://drafts.csswg.org/cssom/#common-serializing-idioms
        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
            if (asCodePoint) {
                // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                if (ch === "\0") return "�";
                // Control characters and (dependent upon position) numbers get escaped as code points
                return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
            }
            // Other potentially-special ASCII characters get backslash-escaped
            return "\\" + ch;
        }, // Used for iframes
        // See setDocument()
        // Removing the function wrapper causes a "Permission Denied"
        // error in IE
        unloadHandler = function() {
            setDocument();
        }, inDisabledFieldset = addCombinator(function(elem) {
            return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
        }, {
            dir: "parentNode",
            next: "legend"
        });
        // Optimize for push.apply( _, NodeList )
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            // Support: Android<4.0
            // Detect silently failing push.apply
            // eslint-disable-next-line no-unused-expressions
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr.length ? // Leverage slice if possible
                function(target, els) {
                    pushNative.apply(target, slice.call(els));
                } : // Support: IE<9
                // Otherwise append directly
                function(target, els) {
                    var j = target.length, i = 0;
                    // Can't trust NodeList.length
                    while(target[j++] = els[i++]);
                    target.length = j - 1;
                }
            };
        }
        function Sizzle(selector, context, results, seed) {
            var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, // nodeType defaults to 9, since context defaults to document
            nodeType = context ? context.nodeType : 9;
            results = results || [];
            // Return early from calls with invalid selector or context
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
            // Try to shortcut find operations (as opposed to filters) in HTML documents
            if (!seed) {
                setDocument(context);
                context = context || document;
                if (documentIsHTML) {
                    // If the selector is sufficiently simple, try using a "get*By*" DOM method
                    // (excepting DocumentFragment context, where the methods don't exist)
                    if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                        // ID selector
                        if (m = match[1]) {
                            // Document context
                            if (nodeType === 9) {
                                if (elem = context.getElementById(m)) // Support: IE, Opera, Webkit
                                // TODO: identify versions
                                // getElementById can match elements by name instead of ID
                                {
                                    if (elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                } else return results;
                            // Element context
                            } else // Support: IE, Opera, Webkit
                            // TODO: identify versions
                            // getElementById can match elements by name instead of ID
                            if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                results.push(elem);
                                return results;
                            }
                        // Type selector
                        } else if (match[2]) {
                            push.apply(results, context.getElementsByTagName(selector));
                            return results;
                        // Class selector
                        } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                            push.apply(results, context.getElementsByClassName(m));
                            return results;
                        }
                    }
                    // Take advantage of querySelectorAll
                    if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                        newSelector = selector;
                        newContext = context;
                        // qSA considers elements outside a scoping root when evaluating child or
                        // descendant combinators, which is not what we want.
                        // In such cases, we work around the behavior by prefixing every selector in the
                        // list with an ID selector referencing the scope context.
                        // The technique has to be used as well when a leading combinator is used
                        // as such selectors are not recognized by querySelectorAll.
                        // Thanks to Andrew Dupont for this technique.
                        if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                            // Expand context for sibling selectors
                            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                            // We can use :scope instead of the ID hack if the browser
                            // supports it & if we're not changing the context.
                            if (newContext !== context || !support.scope) {
                                // Capture the context ID, setting it first if necessary
                                if (nid = context.getAttribute("id")) nid = nid.replace(rcssescape, fcssescape);
                                else context.setAttribute("id", nid = expando);
                            }
                            // Prefix every selector in the list
                            groups = tokenize(selector);
                            i = groups.length;
                            while(i--)groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                            newSelector = groups.join(",");
                        }
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {
                            nonnativeSelectorCache(selector, true);
                        } finally{
                            if (nid === expando) context.removeAttribute("id");
                        }
                    }
                }
            }
            // All others
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        /**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */ function createCache() {
            var keys = [];
            function cache(key, value) {
                // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                if (keys.push(key + " ") > Expr.cacheLength) // Only keep the most recent entries
                delete cache[keys.shift()];
                return cache[key + " "] = value;
            }
            return cache;
        }
        /**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */ function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        /**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */ function assert(fn) {
            var el = document.createElement("fieldset");
            try {
                return !!fn(el);
            } catch (e) {
                return false;
            } finally{
                // Remove from its parent by default
                if (el.parentNode) el.parentNode.removeChild(el);
                // release memory in IE
                el = null;
            }
        }
        /**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */ function addHandle(attrs, handler) {
            var arr = attrs.split("|"), i = arr.length;
            while(i--)Expr.attrHandle[arr[i]] = handler;
        }
        /**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */ function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
            // Use IE sourceIndex if available on both nodes
            if (diff) return diff;
            // Check if b follows a
            if (cur) while(cur = cur.nextSibling){
                if (cur === b) return -1;
            }
            return a ? 1 : -1;
        }
        /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */ function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */ function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */ function createDisabledPseudo(disabled) {
            // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
            return function(elem) {
                // Only certain elements can match :enabled or :disabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                if ("form" in elem) {
                    // Check for inherited disabledness on relevant non-disabled elements:
                    // * listed form-associated elements in a disabled fieldset
                    //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                    // * option elements in a disabled optgroup
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                    // All such elements have a "form" property.
                    if (elem.parentNode && elem.disabled === false) {
                        // Option elements defer to a parent optgroup if present
                        if ("label" in elem) {
                            if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled;
                            else return elem.disabled === disabled;
                        }
                        // Support: IE 6 - 11
                        // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                        return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                        /* jshint -W018 */ elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                    }
                    return elem.disabled === disabled;
                // Try to winnow out elements that can't be disabled before trusting the disabled property.
                // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                // even exist on them, let alone have a boolean value.
                } else if ("label" in elem) return elem.disabled === disabled;
                // Remaining elements are neither :enabled nor :disabled
                return false;
            };
        }
        /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */ function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    // Match elements found at the specified indexes
                    while(i--)if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                });
            });
        }
        /**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */ function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        // Expose support vars for convenience
        support = Sizzle.support = {};
        /**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */ isXML = Sizzle.isXML = function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            // Support: IE <=8
            // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
            // https://bugs.jquery.com/ticket/4833
            return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
        };
        /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */ setDocument = Sizzle.setDocument = function(node) {
            var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            // Return early if doc is invalid or already selected
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if (doc == document || doc.nodeType !== 9 || !doc.documentElement) return document;
            // Update global variables
            document = doc;
            docElem = document.documentElement;
            documentIsHTML = !isXML(document);
            // Support: IE 9 - 11+, Edge 12 - 18+
            // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
                // Support: IE 11, Edge
                if (subWindow.addEventListener) subWindow.addEventListener("unload", unloadHandler, false);
                else if (subWindow.attachEvent) subWindow.attachEvent("onunload", unloadHandler);
            }
            // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
            // Safari 4 - 5 only, Opera <=11.6 - 12.x only
            // IE/Edge & older browsers don't support the :scope pseudo-class.
            // Support: Safari 6.0 only
            // Safari 6.0 supports :scope but it's an alias of :root there.
            support.scope = assert(function(el) {
                docElem.appendChild(el).appendChild(document.createElement("div"));
                return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
            });
            /* Attributes
	---------------------------------------------------------------------- */ // Support: IE<8
            // Verify that getAttribute really returns attributes and not properties
            // (excepting IE8 booleans)
            support.attributes = assert(function(el) {
                el.className = "i";
                return !el.getAttribute("className");
            });
            /* getElement(s)By*
	---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
            support.getElementsByTagName = assert(function(el) {
                el.appendChild(document.createComment(""));
                return !el.getElementsByTagName("*").length;
            });
            // Support: IE<9
            support.getElementsByClassName = rnative.test(document.getElementsByClassName);
            // Support: IE<10
            // Check if getElementById returns elements by name
            // The broken getElementById methods don't pick up programmatically-set names,
            // so use a roundabout getElementsByName test
            support.getById = assert(function(el) {
                docElem.appendChild(el).id = expando;
                return !document.getElementsByName || !document.getElementsByName(expando).length;
            });
            // ID filter and find
            if (support.getById) {
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var elem = context.getElementById(id);
                        return elem ? [
                            elem
                        ] : [];
                    }
                };
            } else {
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
                // Support: IE 6 - 7 only
                // getElementById is not reliable as a find shortcut
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var node, i, elems, elem = context.getElementById(id);
                        if (elem) {
                            // Verify the id attribute
                            node = elem.getAttributeNode("id");
                            if (node && node.value === id) return [
                                elem
                            ];
                            // Fall back on getElementsByName
                            elems = context.getElementsByName(id);
                            i = 0;
                            while(elem = elems[i++]){
                                node = elem.getAttributeNode("id");
                                if (node && node.value === id) return [
                                    elem
                                ];
                            }
                        }
                        return [];
                    }
                };
            }
            // Tag
            Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") return context.getElementsByTagName(tag);
                else if (support.qsa) return context.querySelectorAll(tag);
            } : function(tag, context) {
                var elem, tmp = [], i = 0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                results = context.getElementsByTagName(tag);
                // Filter out possible comments
                if (tag === "*") {
                    while(elem = results[i++])if (elem.nodeType === 1) tmp.push(elem);
                    return tmp;
                }
                return results;
            };
            // Class
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) return context.getElementsByClassName(className);
            };
            /* QSA/matchesSelector
	---------------------------------------------------------------------- */ // QSA and matchesSelector support
            // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
            rbuggyMatches = [];
            // qSa(:focus) reports false when true (Chrome 21)
            // We allow this because of a bug in IE8/9 that throws an error
            // whenever `document.activeElement` is accessed on an iframe
            // So, we allow :focus to pass through QSA all the time to avoid the IE error
            // See https://bugs.jquery.com/ticket/13378
            rbuggyQSA = [];
            if (support.qsa = rnative.test(document.querySelectorAll)) {
                // Build QSA regex
                // Regex strategy adopted from Diego Perini
                assert(function(el) {
                    var input;
                    // Select is set to empty string on purpose
                    // This is to test IE's treatment of not explicitly
                    // setting a boolean content attribute,
                    // since its presence should be enough
                    // https://bugs.jquery.com/ticket/12359
                    docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                    // Support: IE8, Opera 11-12.16
                    // Nothing should be selected when empty strings follow ^= or $= or *=
                    // The test attribute must be unknown in Opera but "safe" for WinRT
                    // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                    if (el.querySelectorAll("[msallowcapture^='']").length) rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                    // Support: IE8
                    // Boolean attributes and "value" are not treated correctly
                    if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                    // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                    if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                    // Support: IE 11+, Edge 15 - 18+
                    // IE 11/Edge don't find elements on a `[name='']` query in some cases.
                    // Adding a temporary attribute to the document before the selection works
                    // around the issue.
                    // Interestingly, IE 10 & older don't seem to have the issue.
                    input = document.createElement("input");
                    input.setAttribute("name", "");
                    el.appendChild(input);
                    if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
                    // Webkit/Opera - :checked should return selected option elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    // IE8 throws error here and will not see later tests
                    if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                    // Support: Safari 8+, iOS 8+
                    // https://bugs.webkit.org/show_bug.cgi?id=136851
                    // In-page `selector#id sibling-combinator selector` fails
                    if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                    // Support: Firefox <=3.6 - 5 only
                    // Old Firefox doesn't throw on a badly-escaped identifier.
                    el.querySelectorAll("\\\f");
                    rbuggyQSA.push("[\\r\\n\\f]");
                });
                assert(function(el) {
                    el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    // Support: Windows 8 Native Apps
                    // The type and name attributes are restricted during .innerHTML assignment
                    var input = document.createElement("input");
                    input.setAttribute("type", "hidden");
                    el.appendChild(input).setAttribute("name", "D");
                    // Support: IE8
                    // Enforce case-sensitivity of name attribute
                    if (el.querySelectorAll("[name=d]").length) rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                    // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                    // IE8 throws error here and will not see later tests
                    if (el.querySelectorAll(":enabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                    // Support: IE9-11+
                    // IE's :disabled selector does not pick up the children of disabled fieldsets
                    docElem.appendChild(el).disabled = true;
                    if (el.querySelectorAll(":disabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                    // Support: Opera 10 - 11 only
                    // Opera 10-11 does not throw on post-comma invalid pseudos
                    el.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:");
                });
            }
            if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) assert(function(el) {
                // Check to see if it's possible to do matchesSelector
                // on a disconnected node (IE 9)
                support.disconnectedMatch = matches.call(el, "*");
                // This should fail with an exception
                // Gecko does not error, returns false instead
                matches.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
            });
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            /* Contains
	---------------------------------------------------------------------- */ hasCompare = rnative.test(docElem.compareDocumentPosition);
            // Element contains another
            // Purposefully self-exclusive
            // As in, an element does not contain itself
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
                if (b) while(b = b.parentNode){
                    if (b === a) return true;
                }
                return false;
            };
            /* Sorting
	---------------------------------------------------------------------- */ // Document order sorting
            sortOrder = hasCompare ? function(a, b) {
                // Flag for duplicate removal
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                // Sort on method existence if only one input has compareDocumentPosition
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) return compare;
                // Calculate position if both inputs belong to the same document
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
                1;
                // Disconnected nodes
                if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                    // Choose the first element that is related to our preferred document
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) return -1;
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) return 1;
                    // Maintain original order
                    return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                }
                return compare & 4 ? -1 : 1;
            } : function(a, b) {
                // Exit early if the nodes are identical
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [
                    a
                ], bp = [
                    b
                ];
                // Parentless nodes are either documents or disconnected
                if (!aup || !bup) // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                /* eslint-disable eqeqeq */ return a == document ? -1 : b == document ? 1 : /* eslint-enable eqeqeq */ aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                else if (aup === bup) return siblingCheck(a, b);
                // Otherwise we need full lists of their ancestors for comparison
                cur = a;
                while(cur = cur.parentNode)ap.unshift(cur);
                cur = b;
                while(cur = cur.parentNode)bp.unshift(cur);
                // Walk down the tree looking for a discrepancy
                while(ap[i] === bp[i])i++;
                return i ? // Do a sibling check if the nodes have a common ancestor
                siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                /* eslint-disable eqeqeq */ ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 : /* eslint-enable eqeqeq */ 0;
            };
            return document;
        };
        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        };
        Sizzle.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                var ret = matches.call(elem, expr);
                // IE 9's matchesSelector returns false on disconnected nodes
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) return ret;
            } catch (e) {
                nonnativeSelectorCache(expr, true);
            }
            return Sizzle(expr, document, null, [
                elem
            ]).length > 0;
        };
        Sizzle.contains = function(context, elem) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((context.ownerDocument || context) != document) setDocument(context);
            return contains(context, elem);
        };
        Sizzle.attr = function(elem, name) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((elem.ownerDocument || elem) != document) setDocument(elem);
            var fn = Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };
        Sizzle.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
        };
        Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */ Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            // Unless we *know* we can detect duplicates, assume their presence
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
                while(elem = results[i++])if (elem === results[i]) j = duplicates.push(i);
                while(j--)results.splice(duplicates[j], 1);
            }
            // Clear input after sorting to release objects
            // See https://github.com/jquery/sizzle/pull/225
            sortInput = null;
            return results;
        };
        /**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */ getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) // If no nodeType, this is expected to be an array
            while(node = elem[i++])// Do not traverse comment nodes
            ret += getText(node);
            else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                // Use textContent for elements
                // innerText usage removed for consistency of new lines (jQuery #11153)
                if (typeof elem.textContent === "string") return elem.textContent;
                else // Traverse its children
                for(elem = elem.firstChild; elem; elem = elem.nextSibling)ret += getText(elem);
            } else if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
            // Do not include comment or processing instruction nodes
            return ret;
        };
        Expr = Sizzle.selectors = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                "ATTR": function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    // Move the given value to match[3] whether quoted or unquoted
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") match[3] = " " + match[3] + " ";
                    return match.slice(0, 4);
                },
                "CHILD": function(match) {
                    /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/ match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        // nth-* requires argument
                        if (!match[3]) Sizzle.error(match[0]);
                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    // other types prohibit arguments
                    } else if (match[3]) Sizzle.error(match[0]);
                    return match;
                },
                "PSEUDO": function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    if (matchExpr["CHILD"].test(match[0])) return null;
                    // Accept quoted arguments as-is
                    if (match[3]) match[2] = match[4] || match[5] || "";
                    else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        // excess is a negative index
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    // Return only captures needed by the pseudo filter method (type and argument)
                    return match.slice(0, 3);
                }
            },
            filter: {
                "TAG": function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                "CLASS": function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)"), classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                    }));
                },
                "ATTR": function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        if (result == null) return operator === "!=";
                        if (!operator) return true;
                        result += "";
                        /* eslint-disable max-len */ return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                    /* eslint-enable max-len */ };
                },
                "CHILD": function(type, what, _argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
                    function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, _context, xml) {
                        var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                        if (parent) {
                            // :(first|last|only)-(child|of-type)
                            if (simple) {
                                while(dir){
                                    node = elem;
                                    while(node = node[dir]){
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) return false;
                                    }
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [
                                forward ? parent.firstChild : parent.lastChild
                            ];
                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (forward && useCache) {
                                // Seek `elem` from a previously-cached index
                                // ...in a gzip-friendly way
                                node = parent;
                                outerCache = node[expando] || (node[expando] = {});
                                // Support: IE <9 only
                                // Defend against cloned attroperties (jQuery gh-1709)
                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                cache = uniqueCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = nodeIndex && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())// When found, cache indexes on `parent` and break
                                if (node.nodeType === 1 && ++diff && node === elem) {
                                    uniqueCache[type] = [
                                        dirruns,
                                        nodeIndex,
                                        diff
                                    ];
                                    break;
                                }
                            } else {
                                // Use previously-cached element index if available
                                if (useCache) {
                                    // ...in a gzip-friendly way
                                    node = elem;
                                    outerCache = node[expando] || (node[expando] = {});
                                    // Support: IE <9 only
                                    // Defend against cloned attroperties (jQuery gh-1709)
                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                    cache = uniqueCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex;
                                }
                                // xml :nth-child(...)
                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                if (diff === false) {
                                    // Use the same loop as above to seek `elem` from the start
                                    while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                        // Cache the index of each encountered element
                                        if (useCache) {
                                            outerCache = node[expando] || (node[expando] = {});
                                            // Support: IE <9 only
                                            // Defend against cloned attroperties (jQuery gh-1709)
                                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                            uniqueCache[type] = [
                                                dirruns,
                                                diff
                                            ];
                                        }
                                        if (node === elem) break;
                                    }
                                }
                            }
                            // Incorporate the offset, then check against cycle size
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                "PSEUDO": function(pseudo, argument) {
                    // pseudo-class names are case-insensitive
                    // http://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as Sizzle does
                    if (fn[expando]) return fn(argument);
                    // But maintain support for old signatures
                    if (fn.length > 1) {
                        args = [
                            pseudo,
                            pseudo,
                            "",
                            argument
                        ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while(i--){
                                idx = indexOf(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                // Potentially complex pseudos
                "not": markFunction(function(selector) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, _context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        // Match elements unmatched by `matcher`
                        while(i--)if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                    }) : function(elem, _context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        // Don't keep the element (issue #299)
                        input[0] = null;
                        return !results.pop();
                    };
                }),
                "has": markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                "contains": markFunction(function(text) {
                    text = text.replace(runescape, funescape);
                    return function(elem) {
                        return (elem.textContent || getText(elem)).indexOf(text) > -1;
                    };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // http://www.w3.org/TR/selectors/#lang-pseudo
                "lang": markFunction(function(lang) {
                    // lang value must be a valid identifier
                    if (!ridentifier.test(lang || "")) Sizzle.error("unsupported lang: " + lang);
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                            elemLang = elemLang.toLowerCase();
                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                        }
                        while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                // Miscellaneous
                "target": function(elem) {
                    var hash = window1.location && window1.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                "root": function(elem) {
                    return elem === docElem;
                },
                "focus": function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                // Boolean properties
                "enabled": createDisabledPseudo(false),
                "disabled": createDisabledPseudo(true),
                "checked": function(elem) {
                    // In CSS3, :checked should return both checked and selected elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                "selected": function(elem) {
                    // Accessing this property makes selected-by-default
                    // options in Safari work properly
                    if (elem.parentNode) // eslint-disable-next-line no-unused-expressions
                    elem.parentNode.selectedIndex;
                    return elem.selected === true;
                },
                // Contents
                "empty": function(elem) {
                    // http://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                    //   but not by others (comment: 8; processing instruction: 7; etc.)
                    // nodeType < 6 works because attributes (2) do not appear as children
                    for(elem = elem.firstChild; elem; elem = elem.nextSibling){
                        if (elem.nodeType < 6) return false;
                    }
                    return true;
                },
                "parent": function(elem) {
                    return !Expr.pseudos["empty"](elem);
                },
                // Element/input types
                "header": function(elem) {
                    return rheader.test(elem.nodeName);
                },
                "input": function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                "button": function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },
                "text": function(elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                // Position-in-collection
                "first": createPositionalPseudo(function() {
                    return [
                        0
                    ];
                }),
                "last": createPositionalPseudo(function(_matchIndexes, length) {
                    return [
                        length - 1
                    ];
                }),
                "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                    return [
                        argument < 0 ? argument + length : argument
                    ];
                }),
                "even": createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for(; i < length; i += 2)matchIndexes.push(i);
                    return matchIndexes;
                }),
                "odd": createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for(; i < length; i += 2)matchIndexes.push(i);
                    return matchIndexes;
                }),
                "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument > length ? length : argument;
                    for(; --i >= 0;)matchIndexes.push(i);
                    return matchIndexes;
                }),
                "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for(; ++i < length;)matchIndexes.push(i);
                    return matchIndexes;
                })
            }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        // Add button/input type pseudos
        for(i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        })Expr.pseudos[i] = createInputPseudo(i);
        for(i in {
            submit: true,
            reset: true
        })Expr.pseudos[i] = createButtonPseudo(i);
        // Easy API for creating new setFilters
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        tokenize = Sizzle.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) return parseOnly ? 0 : cached.slice(0);
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while(soFar){
                // Comma and first run
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) // Don't consume trailing commas as valid
                    soFar = soFar.slice(match[0].length) || soFar;
                    groups.push(tokens = []);
                }
                matched = false;
                // Combinators
                if (match = rcombinators.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        // Cast descendant combinators to space
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                // Filters
                for(type in Expr.filter)if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: type,
                        matches: match
                    });
                    soFar = soFar.slice(matched.length);
                }
                if (!matched) break;
            }
            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
            tokenCache(selector, groups).slice(0);
        };
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for(; i < len; i++)selector += tokens[i].value;
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? // Check against closest ancestor/preceding element
            function(elem, context, xml) {
                while(elem = elem[dir]){
                    if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
                }
                return false;
            } : // Check against all ancestor/preceding elements
            function(elem, context, xml) {
                var oldCache, uniqueCache, outerCache, newCache = [
                    dirruns,
                    doneName
                ];
                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                if (xml) {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        if (matcher(elem, context, xml)) return true;
                    }
                } else {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)
                        uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                        if (skip && skip === elem.nodeName.toLowerCase()) elem = elem[dir] || elem;
                        else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) // Assign to newCache so results back-propagate to previous elements
                        return newCache[2] = oldCache[2];
                        else {
                            // Reuse newcache so results back-propagate to previous elements
                            uniqueCache[key] = newCache;
                            // A match means we're done; a fail means we have to keep checking
                            if (newCache[2] = matcher(elem, context, xml)) return true;
                        }
                    }
                }
                return false;
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while(i--){
                    if (!matchers[i](elem, context, xml)) return false;
                }
                return true;
            } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for(; i < len; i++)Sizzle(selector, contexts[i], results);
            return results;
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for(; i < len; i++){
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) map.push(i);
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
            if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, // Get initial elements from seed or context
                elems = seed || multipleContexts(selector || "*", context.nodeType ? [
                    context
                ] : context, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
                [] : // ...otherwise use results directly
                results : matcherIn;
                // Find primary matches
                if (matcher) matcher(matcherIn, matcherOut, context, xml);
                // Apply postFilter
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    // Un-match failing elements by moving them back to matcherIn
                    i = temp.length;
                    while(i--)if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            // Get the final matcherOut by condensing this intermediate into postFinder contexts
                            temp = [];
                            i = matcherOut.length;
                            while(i--)if (elem = matcherOut[i]) // Restore matcherIn since elem is not yet a final match
                            temp.push(matcherIn[i] = elem);
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        // Move matched elements from seed to results to keep them synchronized
                        i = matcherOut.length;
                        while(i--)if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) postFinder(null, results, matcherOut, xml);
                    else push.apply(results, matcherOut);
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
            matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [
                function(elem, context, xml) {
                    var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    // Avoid hanging onto element (issue #299)
                    checkContext = null;
                    return ret;
                }
            ];
            for(; i < len; i++)if (matcher = Expr.relative[tokens[i].type]) matchers = [
                addCombinator(elementMatcher(matchers), matcher)
            ];
            else {
                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                // Return special upon seeing a positional matcher
                if (matcher[expando]) {
                    // Find the next relative operator (if any) for proper handling
                    j = ++i;
                    for(; j < len; j++){
                        if (Expr.relative[tokens[j].type]) break;
                    }
                    return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i - 1).concat({
                        value: tokens[i - 2].type === " " ? "*" : ""
                    })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                }
                matchers.push(matcher);
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, // We must always have either seed elements or outermost context
                elems = seed || byElement && Expr.find["TAG"]("*", outermost), // Use integer dirruns iff this is the outermost matcher
                dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
                if (outermost) // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                outermostContext = context == document || context || outermost;
                // Add elements passing elementMatchers directly to results
                // Support: IE<9, Safari
                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                for(; i !== len && (elem = elems[i]) != null; i++){
                    if (byElement && elem) {
                        j = 0;
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (!context && elem.ownerDocument != document) {
                            setDocument(elem);
                            xml = !documentIsHTML;
                        }
                        while(matcher = elementMatchers[j++])if (matcher(elem, context || document, xml)) {
                            results.push(elem);
                            break;
                        }
                        if (outermost) dirruns = dirrunsUnique;
                    }
                    // Track unmatched elements for set filters
                    if (bySet) {
                        // They will have gone through all possible matchers
                        if (elem = !matcher && elem) matchedCount--;
                        // Lengthen the array for every element, matched or not
                        if (seed) unmatched.push(elem);
                    }
                }
                // `i` is now the count of elements visited above, and adding it to `matchedCount`
                // makes the latter nonnegative.
                matchedCount += i;
                // Apply set filters to unmatched elements
                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                // no element matchers and no seed.
                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                // numerically zero.
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while(matcher = setMatchers[j++])matcher(unmatched, setMatched, context, xml);
                    if (seed) {
                        // Reintegrate element matches to eliminate the need for sorting
                        if (matchedCount > 0) {
                            while(i--)if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                        }
                        // Discard index placeholder values to get only actual matches
                        setMatched = condense(setMatched);
                    }
                    // Add matches to results
                    push.apply(results, setMatched);
                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) Sizzle.uniqueSort(results);
                }
                // Override manipulation of globals by nested matchers
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, match /* Internal Use Only */ ) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                // Generate a function of recursive functions that can be used to check each element
                if (!match) match = tokenize(selector);
                i = match.length;
                while(i--){
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) setMatchers.push(cached);
                    else elementMatchers.push(cached);
                }
                // Cache the compiled function
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                // Save selector and tokenization
                cached.selector = selector;
            }
            return cached;
        };
        /**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */ select = Sizzle.select = function(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            // Try to minimize operations if there is only one selector in the list and no seed
            // (the latter of which guarantees us context)
            if (match.length === 1) {
                // Reduce context if the leading compound selector is an ID
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                    context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) return results;
                    else if (compiled) context = context.parentNode;
                    selector = selector.slice(tokens.shift().value.length);
                }
                // Fetch a seed set for right-to-left matching
                i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                while(i--){
                    token = tokens[i];
                    // Abort if we hit a combinator
                    if (Expr.relative[type = token.type]) break;
                    if (find = Expr.find[type]) // Search, expanding context for leading sibling combinators
                    {
                        if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                            // If seed is empty or no tokens remain, we can return early
                            tokens.splice(i, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push.apply(results, seed);
                                return results;
                            }
                            break;
                        }
                    }
                }
            }
            // Compile and execute a filtering function if one is not provided
            // Provide `match` to avoid retokenization if we modified the selector above
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
        };
        // One-time assignments
        // Sort stability
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        // Support: Chrome 14-35+
        // Always assume duplicates if they aren't passed to the comparison function
        support.detectDuplicates = !!hasDuplicate;
        // Initialize against the default document
        setDocument();
        // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
        // Detached nodes confoundingly follow *each other*
        support.sortDetached = assert(function(el) {
            // Should return 1, but returns 4 (following)
            return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
        });
        // Support: IE<8
        // Prevent attribute/property "interpolation"
        // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
        if (!assert(function(el) {
            el.innerHTML = "<a href='#'></a>";
            return el.firstChild.getAttribute("href") === "#";
        })) addHandle("type|href|height|width", function(elem, name, isXML) {
            if (!isXML) return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        });
        // Support: IE<9
        // Use defaultValue in place of getAttribute("value")
        if (!support.attributes || !assert(function(el) {
            el.innerHTML = "<input/>";
            el.firstChild.setAttribute("value", "");
            return el.firstChild.getAttribute("value") === "";
        })) addHandle("value", function(elem, _name, isXML) {
            if (!isXML && elem.nodeName.toLowerCase() === "input") return elem.defaultValue;
        });
        // Support: IE<9
        // Use getAttributeNode to fetch booleans when getAttribute lies
        if (!assert(function(el) {
            return el.getAttribute("disabled") == null;
        })) addHandle(booleans, function(elem, name, isXML) {
            var val;
            if (!isXML) return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        });
        return Sizzle;
    }(window1);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    // Deprecated
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;
    var dir = function(elem, dir, until) {
        var matched = [], truncate = until !== undefined;
        while((elem = elem[dir]) && elem.nodeType !== 9)if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) break;
            matched.push(elem);
        }
        return matched;
    };
    var siblings = function(n, elem) {
        var matched = [];
        for(; n; n = n.nextSibling)if (n.nodeType === 1 && n !== elem) matched.push(n);
        return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    // Implement the identical functionality for filter and not
    function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
        });
        // Single element
        if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
        });
        // Arraylike of elements (jQuery, arguments, Array)
        if (typeof qualifier !== "string") return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
        });
        // Filtered directly for both simple and complex selectors
        return jQuery.filter(qualifier, elements, not);
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) expr = ":not(" + expr + ")";
        if (elems.length === 1 && elem.nodeType === 1) return jQuery.find.matchesSelector(elem, expr) ? [
            elem
        ] : [];
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") return this.pushStack(jQuery(selector).filter(function() {
                for(i = 0; i < len; i++){
                    if (jQuery.contains(self[i], this)) return true;
                }
            }));
            ret = this.pushStack([]);
            for(i = 0; i < len; i++)jQuery.find(selector, self[i], ret);
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
            return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    });
    // Initialize a jQuery object
    // A central reference to the root jQuery(document)
    var rootjQuery, // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
    // Strict HTML recognition (trac-11290: must start with <)
    // Shortcut simple #id case for speed
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        // HANDLE: $(""), $(null), $(undefined), $(false)
        if (!selector) return this;
        // Method init() accepts an alternate rootjQuery
        // so migrate can support jQuery.sub (gh-2101)
        root = root || rootjQuery;
        // Handle HTML strings
        if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) // Assume that strings that start and end with <> are HTML and skip the regex check
            match = [
                null,
                selector,
                null
            ];
            else match = rquickExpr.exec(selector);
            // Match html or make sure no context is specified for #id
            if (match && (match[1] || !context)) {
                // HANDLE: $(html) -> $(array)
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    // Option to run scripts is true for back-compat
                    // Intentionally let the error be thrown if parseHTML is not present
                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                    // HANDLE: $(html, props)
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for(match in context)// Properties of context are called as methods if possible
                        if (isFunction(this[match])) this[match](context[match]);
                        else this.attr(match, context[match]);
                    }
                    return this;
                // HANDLE: $(#id)
                } else {
                    elem = document.getElementById(match[2]);
                    if (elem) {
                        // Inject the element directly into the jQuery object
                        this[0] = elem;
                        this.length = 1;
                    }
                    return this;
                }
            } else if (!context || context.jquery) return (context || root).find(selector);
            else return this.constructor(context).find(selector);
        // HANDLE: $(DOMElement)
        } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
        // HANDLE: $(function)
        // Shortcut for document ready
        } else if (isFunction(selector)) return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
        selector(jQuery);
        return jQuery.makeArray(selector, this);
    };
    // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;
    // Initialize central reference
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
    guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                var i = 0;
                for(; i < l; i++){
                    if (jQuery.contains(this, targets[i])) return true;
                }
            });
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            // Positional selectors never match, since there's no _selection_ context
            if (!rneedsContext.test(selectors)) for(; i < l; i++){
                for(cur = this[i]; cur && cur !== context; cur = cur.parentNode)// Always skip document fragments
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
                cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
            // No argument, return index in parent
            if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            // Index in selector
            if (typeof elem === "string") return indexOf.call(jQuery(elem), this[0]);
            // Locate the position of the desired element
            return indexOf.call(this, // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        while((cur = cur[dir]) && cur.nodeType !== 1);
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return siblings(elem.firstChild);
        },
        contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) return elem.contentDocument;
            // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
            // Treat the template element as a regular one in browsers that
            // don't support it.
            if (nodeName(elem, "template")) elem = elem.content || elem;
            return jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") selector = until;
            if (selector && typeof selector === "string") matched = jQuery.filter(selector, matched);
            if (this.length > 1) {
                // Remove duplicates
                if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) matched.reverse();
            }
            return this.pushStack(matched);
        };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    // Convert String-formatted options into Object-formatted ones
    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */ jQuery.Callbacks = function(options) {
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, // Last fire value for non-forgettable lists
        memory, // Flag to know if list was already fired
        fired, // Flag to prevent firing
        locked, // Actual callback list
        list = [], // Queue of execution data for repeatable lists
        queue = [], // Index of currently firing callback (modified by add/remove as needed)
        firingIndex = -1, // Fire callbacks
        fire = function() {
            // Enforce single-firing
            locked = locked || options.once;
            // Execute callbacks for all pending executions,
            // respecting firingIndex overrides and runtime changes
            fired = firing = true;
            for(; queue.length; firingIndex = -1){
                memory = queue.shift();
                while(++firingIndex < list.length)// Run callback and check for early termination
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                    // Jump to end and forget the data so .add doesn't re-fire
                    firingIndex = list.length;
                    memory = false;
                }
            }
            // Forget the data if we're done with it
            if (!options.memory) memory = false;
            firing = false;
            // Clean up if we're done firing for good
            if (locked) {
                // Keep an empty list if we have data for future add calls
                if (memory) list = [];
                else list = "";
            }
        }, // Actual Callbacks object
        self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
                if (list) {
                    // If we have memory from a past run, we should fire after adding
                    if (memory && !firing) {
                        firingIndex = list.length - 1;
                        queue.push(memory);
                    }
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            if (isFunction(arg)) {
                                if (!options.unique || !self.has(arg)) list.push(arg);
                            } else if (arg && arg.length && toType(arg) !== "string") // Inspect recursively
                            add(arg);
                        });
                    })(arguments);
                    if (memory && !firing) fire();
                }
                return this;
            },
            // Remove a callback from the list
            remove: function() {
                jQuery.each(arguments, function(_, arg) {
                    var index;
                    while((index = jQuery.inArray(arg, list, index)) > -1){
                        list.splice(index, 1);
                        // Handle firing indexes
                        if (index <= firingIndex) firingIndex--;
                    }
                });
                return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
                if (list) list = [];
                return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
                locked = queue = [];
                list = memory = "";
                return this;
            },
            disabled: function() {
                return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
                locked = queue = [];
                if (!memory && !firing) list = memory = "";
                return this;
            },
            locked: function() {
                return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
                if (!locked) {
                    args = args || [];
                    args = [
                        context,
                        args.slice ? args.slice() : args
                    ];
                    queue.push(args);
                    if (!firing) fire();
                }
                return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    function Identity(v) {
        return v;
    }
    function Thrower(ex) {
        throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
            // Check for promise aspect first to privilege synchronous behavior
            if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject);
            else if (value && isFunction(method = value.then)) method.call(value, resolve, reject);
            else // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
            // * false: [ value ].slice( 0 ) => resolve( value )
            // * true: [ value ].slice( 1 ) => resolve()
            resolve.apply(undefined, [
                value
            ].slice(noValue));
        // For Promises/A+, convert exceptions into rejections
        // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
        // Deferred#then to conditionally suppress rejection.
        } catch (value1) {
            // Support: Android 4.0 only
            // Strict mode functions invoked without .call/.apply get global-object context
            reject.apply(undefined, [
                value1
            ]);
        }
    }
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [
                // action, add listener, callbacks,
                // ... .then handlers, argument index, [final state]
                [
                    "notify",
                    "progress",
                    jQuery.Callbacks("memory"),
                    jQuery.Callbacks("memory"),
                    2
                ],
                [
                    "resolve",
                    "done",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    0,
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    1,
                    "rejected"
                ]
            ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                "catch": function(fn) {
                    return promise.then(null, fn);
                },
                // Keep pipe for back-compat
                pipe: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(_i, tuple) {
                            // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                            var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                            // deferred.progress(function() { bind to newDefer or newDefer.notify })
                            // deferred.done(function() { bind to newDefer or newDefer.resolve })
                            // deferred.fail(function() { bind to newDefer or newDefer.reject })
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                else newDefer[tuple[0] + "With"](this, fn ? [
                                    returned
                                ] : arguments);
                            });
                        });
                        fns = null;
                    }).promise();
                },
                then: function(onFulfilled, onRejected, onProgress) {
                    var maxDepth = 0;
                    function resolve(depth, deferred, handler, special) {
                        return function() {
                            var that = this, args = arguments, mightThrow = function() {
                                var returned, then;
                                // Support: Promises/A+ section 2.3.3.3.3
                                // https://promisesaplus.com/#point-59
                                // Ignore double-resolution attempts
                                if (depth < maxDepth) return;
                                returned = handler.apply(that, args);
                                // Support: Promises/A+ section 2.3.1
                                // https://promisesaplus.com/#point-48
                                if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                // Support: Promises/A+ sections 2.3.3.1, 3.5
                                // https://promisesaplus.com/#point-54
                                // https://promisesaplus.com/#point-75
                                // Retrieve `then` only once
                                then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                                // Handle a returned thenable
                                if (isFunction(then)) {
                                    // Special processors (notify) just wait for resolution
                                    if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                                    else {
                                        // ...and disregard older resolution values
                                        maxDepth++;
                                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                    }
                                } else {
                                    // Only substitute handlers pass on context
                                    // and multiple values (non-spec behavior)
                                    if (handler !== Identity) {
                                        that = undefined;
                                        args = [
                                            returned
                                        ];
                                    }
                                    // Process the value(s)
                                    // Default process is resolve
                                    (special || deferred.resolveWith)(that, args);
                                }
                            }, // Only normal processors (resolve) catch and reject exceptions
                            process = special ? mightThrow : function() {
                                try {
                                    mightThrow();
                                } catch (e) {
                                    if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                    // Support: Promises/A+ section 2.3.3.3.4.1
                                    // https://promisesaplus.com/#point-61
                                    // Ignore post-resolution exceptions
                                    if (depth + 1 >= maxDepth) {
                                        // Only substitute handlers pass on context
                                        // and multiple values (non-spec behavior)
                                        if (handler !== Thrower) {
                                            that = undefined;
                                            args = [
                                                e
                                            ];
                                        }
                                        deferred.rejectWith(that, args);
                                    }
                                }
                            };
                            // Support: Promises/A+ section 2.3.3.3.1
                            // https://promisesaplus.com/#point-57
                            // Re-resolve promises immediately to dodge false rejection from
                            // subsequent errors
                            if (depth) process();
                            else {
                                // Call an optional hook to record the stack, in case of exception
                                // since it's otherwise lost when execution goes async
                                if (jQuery.Deferred.getStackHook) process.stackTrace = jQuery.Deferred.getStackHook();
                                window1.setTimeout(process);
                            }
                        };
                    }
                    return jQuery.Deferred(function(newDefer) {
                        // progress_handlers.add( ... )
                        tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                        // fulfilled_handlers.add( ... )
                        tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                        // rejected_handlers.add( ... )
                        tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                    }).promise();
                },
                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            // Add list-specific methods
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[5];
                // promise.progress = list.add
                // promise.done = list.add
                // promise.fail = list.add
                promise[tuple[1]] = list.add;
                // Handle state
                if (stateString) list.add(function() {
                    // state = "resolved" (i.e., fulfilled)
                    // state = "rejected"
                    state = stateString;
                }, // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable, // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable, // progress_callbacks.lock
                tuples[0][2].lock, // progress_handlers.lock
                tuples[0][3].lock);
                // progress_handlers.fire
                // fulfilled_handlers.fire
                // rejected_handlers.fire
                list.add(tuple[3].fire);
                // deferred.notify = function() { deferred.notifyWith(...) }
                // deferred.resolve = function() { deferred.resolveWith(...) }
                // deferred.reject = function() { deferred.rejectWith(...) }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                    return this;
                };
                // deferred.notifyWith = list.fireWith
                // deferred.resolveWith = list.fireWith
                // deferred.rejectWith = list.fireWith
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            // Make the deferred a promise
            promise.promise(deferred);
            // Call given func if any
            if (func) func.call(deferred, deferred);
            // All done!
            return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
            var // count of uncompleted subordinates
            remaining = arguments.length, // count of unprocessed arguments
            i = remaining, // subordinate fulfillment data
            resolveContexts = Array(i), resolveValues = slice.call(arguments), // the primary Deferred
            primary = jQuery.Deferred(), // subordinate callback factory
            updateFunc = function(i) {
                return function(value) {
                    resolveContexts[i] = this;
                    resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                    if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
                };
            };
            // Single- and empty arguments are adopted like Promise.resolve
            if (remaining <= 1) {
                adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
                // Use .then() to unwrap secondary thenables (cf. gh-3000)
                if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) return primary.then();
            }
            // Multiple arguments are aggregated like Promise.all array elements
            while(i--)adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            return primary.promise();
        }
    });
    // These usually indicate a programmer mistake during development,
    // warn about them ASAP rather than swallowing them by default.
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function(error, stack) {
        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if (window1.console && window1.console.warn && error && rerrorNames.test(error.name)) window1.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    };
    jQuery.readyException = function(error) {
        window1.setTimeout(function() {
            throw error;
        });
    };
    // The deferred used on DOM ready
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(fn) {
        readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
        // happens at the time of error handling instead of callback
        // registration.
        .catch(function(error) {
            jQuery.readyException(error);
        });
        return this;
    };
    jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
            // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) return;
            // Remember that the DOM is ready
            jQuery.isReady = true;
            // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && --jQuery.readyWait > 0) return;
            // If there are functions bound, to execute
            readyList.resolveWith(document, [
                jQuery
            ]);
        }
    });
    jQuery.ready.then = readyList.then;
    // The ready event handler and self cleanup method
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window1.removeEventListener("load", completed);
        jQuery.ready();
    }
    // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE <=9 - 10 only
    // Older IE sometimes signals "interactive" too soon
    if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) // Handle it asynchronously to allow scripts the opportunity to delay ready
    window1.setTimeout(jQuery.ready);
    else {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed);
        // A fallback to window.onload, that will always work
        window1.addEventListener("load", completed);
    }
    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        // Sets many values
        if (toType(key) === "object") {
            chainable = true;
            for(i in key)access(elems, fn, i, key[i], true, emptyGet, raw);
        // Sets one value
        } else if (value !== undefined) {
            chainable = true;
            if (!isFunction(value)) raw = true;
            if (bulk) {
                // Bulk operations run against the entire set
                if (raw) {
                    fn.call(elems, value);
                    fn = null;
                // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function(elem, _key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            if (fn) for(; i < len; i++)fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
        if (chainable) return elems;
        // Gets
        if (bulk) return fn.call(elems);
        return len ? fn(elems[0], key) : emptyGet;
    };
    // Matches dashed string for camelizing
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
    // Used by camelCase as callback to replace()
    function fcamelCase(_all, letter) {
        return letter.toUpperCase();
    }
    // Convert dashed to camelCase; used by the css and data modules
    // Support: IE <=9 - 11, Edge 12 - 15
    // Microsoft forgot to hump their vendor prefix (trac-9572)
    function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }
    var acceptData = function(owner) {
        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
        cache: function(owner) {
            // Check if the owner object already has a cache
            var value = owner[this.expando];
            // If not, create one
            if (!value) {
                value = {};
                // We can accept data for non-element nodes in modern browsers,
                // but we should not, see trac-8335.
                // Always return an empty object.
                if (acceptData(owner)) {
                    // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) owner[this.expando] = value;
                    else Object.defineProperty(owner, this.expando, {
                        value: value,
                        configurable: true
                    });
                }
            }
            return value;
        },
        set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            // Handle: [ owner, key, value ] args
            // Always use camelCase key (gh-2257)
            if (typeof data === "string") cache[camelCase(data)] = value;
            else // Copy the properties one-by-one to the cache object
            for(prop in data)cache[camelCase(prop)] = data[prop];
            return cache;
        },
        get: function(owner, key) {
            return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function(owner, key, value) {
            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if (key === undefined || key && typeof key === "string" && value === undefined) return this.get(owner, key);
            // When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set(owner, key, value);
            // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === undefined) return;
            if (key !== undefined) {
                // Support array or space separated string of keys
                if (Array.isArray(key)) // If key is an array of keys...
                // We always set camelCase keys, so remove that.
                key = key.map(camelCase);
                else {
                    key = camelCase(key);
                    // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ? [
                        key
                    ] : key.match(rnothtmlwhite) || [];
                }
                i = key.length;
                while(i--)delete cache[key[i]];
            }
            // Remove the expando if there's no more data
            if (key === undefined || jQuery.isEmptyObject(cache)) {
                // Support: Chrome <=35 - 45
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                if (owner.nodeType) owner[this.expando] = undefined;
                else delete owner[this.expando];
            }
        },
        hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function getData(data) {
        if (data === "true") return true;
        if (data === "false") return false;
        if (data === "null") return null;
        // Only convert to a number if it doesn't change the string
        if (data === +data + "") return +data;
        if (rbrace.test(data)) return JSON.parse(data);
        return data;
    }
    function dataAttr(elem, key, data) {
        var name;
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = getData(data);
                } catch (e) {}
                // Make sure we set the data so it isn't changed later
                dataUser.set(elem, key, data);
            } else data = undefined;
        }
        return data;
    }
    jQuery.extend({
        hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
            dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            // Gets all values
            if (key === undefined) {
                if (this.length) {
                    data = dataUser.get(elem);
                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while(i--)// Support: IE 11 only
                        // The attrs elements can be null (trac-14894)
                        if (attrs[i]) {
                            name = attrs[i].name;
                            if (name.indexOf("data-") === 0) {
                                name = camelCase(name.slice(5));
                                dataAttr(elem, name, data[name]);
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", true);
                    }
                }
                return data;
            }
            // Sets multiple values
            if (typeof key === "object") return this.each(function() {
                dataUser.set(this, key);
            });
            return access(this, function(value) {
                var data;
                // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if (elem && value === undefined) {
                    // Attempt to get data from the cache
                    // The key will always be camelCased in Data
                    data = dataUser.get(elem, key);
                    if (data !== undefined) return data;
                    // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr(elem, key);
                    if (data !== undefined) return data;
                    // We tried really hard, but the data doesn't exist.
                    return;
                }
                // Set the data...
                this.each(function() {
                    // We always store the camelCased key
                    dataUser.set(this, key, value);
                });
            }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
            return this.each(function() {
                dataUser.remove(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type);
                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                    else queue.push(data);
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") queue.unshift("inprogress");
                // Clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) hooks.empty.fire();
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [
                        type + "queue",
                        key
                    ]);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) return jQuery.queue(this[0], type);
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                // Ensure a hooks for this queue
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") jQuery.dequeue(this, type);
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) defer.resolveWith(elements, [
                    elements
                ]);
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while(i--){
                tmp = dataPriv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ];
    var documentElement = document.documentElement;
    var isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
    }, composed = {
        composed: true
    };
    // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
    // Check attachment across shadow DOM boundaries when possible (gh-3504)
    // Support: iOS 10.0-10.2 only
    // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
    // leading to errors. We need to check for `getRootNode`.
    if (documentElement.getRootNode) isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
    var isHiddenWithinTree = function(elem, el) {
        // isHiddenWithinTree might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;
        // Inline style trumps all
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery.css(elem, "display") === "none";
    };
    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
        } : function() {
            return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), // Starting value computation is required for potential unit mismatches
        initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            // Support: Firefox <=54
            // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
            initial = initial / 2;
            // Trust units reported by jQuery.css
            unit = unit || initialInUnit[3];
            // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;
            while(maxIterations--){
                // Evaluate and update our best guess (doubling guesses that zero out).
                // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                jQuery.style(elem, prop, initialInUnit + unit);
                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) maxIterations = 0;
                initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            // Make sure we update the tween properties later on
            valueParts = valueParts || [];
        }
        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }
    var defaultDisplayMap = {};
    function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
        if (display) return display;
        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") display = "block";
        defaultDisplayMap[nodeName] = display;
        return display;
    }
    function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        // Determine new display value for elements that need to change
        for(; index < length; index++){
            elem = elements[index];
            if (!elem.style) continue;
            display = elem.style.display;
            if (show) {
                // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                // check is required in this first loop unless we have a nonempty display value (either
                // inline or about-to-be-restored)
                if (display === "none") {
                    values[index] = dataPriv.get(elem, "display") || null;
                    if (!values[index]) elem.style.display = "";
                }
                if (elem.style.display === "" && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
            } else if (display !== "none") {
                values[index] = "none";
                // Remember what we're overwriting
                dataPriv.set(elem, "display", display);
            }
        }
        // Set the display of the elements in a second loop to avoid constant reflow
        for(index = 0; index < length; index++)if (values[index] != null) elements[index].style.display = values[index];
        return elements;
    }
    jQuery.fn.extend({
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            if (typeof state === "boolean") return state ? this.show() : this.hide();
            return this.each(function() {
                if (isHiddenWithinTree(this)) jQuery(this).show();
                else jQuery(this).hide();
            });
        }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (trac-11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (trac-14901)
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        // Support: IE <=9 only
        // IE <=9 replaces <option> tags with their contents when inserted outside of
        // the select element.
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
    })();
    // We have to close these tags to support XHTML (trac-13200)
    var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        col: [
            2,
            "<table><colgroup>",
            "</colgroup></table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: [
            0,
            "",
            ""
        ]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    // Support: IE <=9 only
    if (!support.option) wrapMap.optgroup = wrapMap.option = [
        1,
        "<select multiple='multiple'>",
        "</select>"
    ];
    function getAll(context, tag) {
        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") ret = context.getElementsByTagName(tag || "*");
        else if (typeof context.querySelectorAll !== "undefined") ret = context.querySelectorAll(tag || "*");
        else ret = [];
        if (tag === undefined || tag && nodeName(context, tag)) return jQuery.merge([
            context
        ], ret);
        return ret;
    }
    // Mark scripts as having already been evaluated
    function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for(; i < l; i++)dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for(; i < l; i++){
            elem = elems[i];
            if (elem || elem === 0) {
                // Add nodes directly
                if (toType(elem) === "object") // Support: Android <=4.0 only, PhantomJS 1 only
                // push.apply(_, arraylike) throws on ancient WebKit
                jQuery.merge(nodes, elem.nodeType ? [
                    elem
                ] : elem);
                else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem));
                else {
                    tmp = tmp || fragment.appendChild(context.createElement("div"));
                    // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || [
                        "",
                        ""
                    ])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                    // Descend through wrappers to the right content
                    j = wrap[0];
                    while(j--)tmp = tmp.lastChild;
                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, tmp.childNodes);
                    // Remember the top-level container
                    tmp = fragment.firstChild;
                    // Ensure the created nodes are orphaned (trac-12392)
                    tmp.textContent = "";
                }
            }
        }
        // Remove wrapper from fragment
        fragment.textContent = "";
        i = 0;
        while(elem = nodes[i++]){
            // Skip elements already in the context collection (trac-4087)
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) ignored.push(elem);
                continue;
            }
            attached = isAttached(elem);
            // Append to fragment
            tmp = getAll(fragment.appendChild(elem), "script");
            // Preserve script evaluation history
            if (attached) setGlobalEval(tmp);
            // Capture executables
            if (scripts) {
                j = 0;
                while(elem = tmp[j++])if (rscriptType.test(elem.type || "")) scripts.push(elem);
            }
        }
        return fragment;
    }
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    // Support: IE <=9 - 11+
    // focus() and blur() are asynchronous, except when they are no-op.
    // So expect focus to be synchronous when the element is already active,
    // and blur to be synchronous when the element is not already active.
    // (focus and blur are always synchronous in other supported browsers,
    // this just defines when we can count on it).
    function expectSync(elem, type) {
        return elem === safeActiveElement() === (type === "focus");
    }
    // Support: IE <=9 only
    // Accessing document.activeElement can throw unexpectedly
    // https://bugs.jquery.com/ticket/13393
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        // Types can be a map of types/handlers
        if (typeof types === "object") {
            // ( types-Object, selector, data )
            if (typeof selector !== "string") {
                // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for(type in types)on(elem, type, selector, data, types[type], one);
            return elem;
        }
        if (data == null && fn == null) {
            // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {
                // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else {
                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) fn = returnFalse;
        else if (!fn) return elem;
        if (one === 1) {
            origFn = fn;
            fn = function(event) {
                // Can use an empty set, since event contains the info
                jQuery().off(event);
                return origFn.apply(this, arguments);
            };
            // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }
    /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */ jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            // Only attach events to objects that accept data
            if (!acceptData(elem)) return;
            // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            // Ensure that invalid selectors throw exceptions at attach time
            // Evaluate against documentElement in case elem is a non-element node (e.g., document)
            if (selector) jQuery.find.matchesSelector(documentElement, selector);
            // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) handler.guid = jQuery.guid++;
            // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) events = elemData.events = Object.create(null);
            if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                // Discard the second event of a jQuery.event.trigger() and
                // when an event is called after a page has unloaded
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
            // Handle multiple events separated by a space
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // There *must* be a type, no attaching namespace-only handlers
                if (!type) continue;
                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {};
                // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type;
                // Update special based on newly reset type
                special = jQuery.event.special[type] || {};
                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    // Only use addEventListener if the special events handler returns false
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                }
                // Add to the element's handler list, delegates in front
                if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj);
                else handlers.push(handleObj);
                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) return;
            // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    for(type in events)jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                // Remove matching events
                origCount = j = handlers.length;
                while(j--){
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) handlers.delegateCount--;
                        if (special.remove) special.remove.call(elem, handleObj);
                    }
                }
                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) jQuery.removeEvent(elem, type, elemData.handle);
                    delete events[type];
                }
            }
            // Remove data and the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
        },
        dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            for(i = 1; i < arguments.length; i++)args[i] = arguments[i];
            event.delegateTarget = this;
            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) return;
            // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while((matched = handlerQueue[i++]) && !event.isPropagationStopped()){
                event.currentTarget = matched.elem;
                j = 0;
                while((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped())// If the event is namespaced, then each handler is only invoked if it is
                // specially universal or its namespaces are a superset of the event's.
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                    event.handleObj = handleObj;
                    event.data = handleObj.data;
                    ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                    if (ret !== undefined) {
                        if ((event.result = ret) === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                }
            }
            // Call the postDispatch hook for the mapped type
            if (special.postDispatch) special.postDispatch.call(this, event);
            return event.result;
        },
        handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            // Find delegate handlers
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
                for(; cur !== this; cur = cur.parentNode || this)// Don't check non-elements (trac-13208)
                // Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                    matchedHandlers = [];
                    matchedSelectors = {};
                    for(i = 0; i < delegateCount; i++){
                        handleObj = handlers[i];
                        // Don't conflict with Object.prototype properties (trac-13203)
                        sel = handleObj.selector + " ";
                        if (matchedSelectors[sel] === undefined) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [
                            cur
                        ]).length;
                        if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                    }
                    if (matchedHandlers.length) handlerQueue.push({
                        elem: cur,
                        handlers: matchedHandlers
                    });
                }
            }
            // Add the remaining (directly-bound) handlers
            cur = this;
            if (delegateCount < handlers.length) handlerQueue.push({
                elem: cur,
                handlers: handlers.slice(delegateCount)
            });
            return handlerQueue;
        },
        addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,
                get: isFunction(hook) ? function() {
                    if (this.originalEvent) return hook(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[name];
                },
                set: function(value) {
                    Object.defineProperty(this, name, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value
                    });
                }
            });
        },
        fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            click: {
                // Utilize native event to ensure correct state for checkable inputs
                setup: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Claim the first handler
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) // dataPriv.set( el, "click", ... )
                    leverageNative(el, "click", returnTrue);
                    // Return false to allow normal processing in the caller
                    return false;
                },
                trigger: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Force setup before triggering a click
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click");
                    // Return non-false to allow normal event-path propagation
                    return true;
                },
                // For cross-browser consistency, suppress native .click() on links
                // Also prevent it if we're currently inside a leveraged native-event stack
                _default: function(event) {
                    var target = event.target;
                    return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) event.originalEvent.returnValue = event.result;
                }
            }
        }
    };
    // Ensure the presence of an event listener that handles manually-triggered
    // synthetic events by interrupting progress until reinvoked in response to
    // *native* events that it fires directly, ensuring that state changes have
    // already occurred before other listeners are invoked.
    function leverageNative(el, type, expectSync) {
        // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
        if (!expectSync) {
            if (dataPriv.get(el, type) === undefined) jQuery.event.add(el, type, returnTrue);
            return;
        }
        // Register the controller as a special universal handler for all event namespaces
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
                var notAsync, result, saved = dataPriv.get(this, type);
                if (event.isTrigger & 1 && this[type]) {
                    // Interrupt processing of the outer synthetic .trigger()ed event
                    // Saved data should be false in such cases, but might be a leftover capture object
                    // from an async native handler (gh-4350)
                    if (!saved.length) {
                        // Store arguments for use when handling the inner native event
                        // There will always be at least one argument (an event object), so this array
                        // will not be confused with a leftover capture object.
                        saved = slice.call(arguments);
                        dataPriv.set(this, type, saved);
                        // Trigger the native event and capture its result
                        // Support: IE <=9 - 11+
                        // focus() and blur() are asynchronous
                        notAsync = expectSync(this, type);
                        this[type]();
                        result = dataPriv.get(this, type);
                        if (saved !== result || notAsync) dataPriv.set(this, type, false);
                        else result = {};
                        if (saved !== result) {
                            // Cancel the outer synthetic event
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            // Support: Chrome 86+
                            // In Chrome, if an element having a focusout handler is blurred by
                            // clicking outside of it, it invokes the handler synchronously. If
                            // that handler calls `.remove()` on the element, the data is cleared,
                            // leaving `result` undefined. We need to guard against this.
                            return result && result.value;
                        }
                    // If this is an inner synthetic event for an event with a bubbling surrogate
                    // (focus or blur), assume that the surrogate already propagated from triggering the
                    // native event and prevent that from happening again here.
                    // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                    // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                    // less bad than duplication.
                    } else if ((jQuery.event.special[type] || {}).delegateType) event.stopPropagation();
                // If this is a native event triggered above, everything is now in order
                // Fire an inner synthetic event with the original arguments
                } else if (saved.length) {
                    // ...and capture the result
                    dataPriv.set(this, type, {
                        value: jQuery.event.trigger(// Support: IE <=9 - 11+
                        // Extend with the prototype to reset the above stopImmediatePropagation()
                        jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
                    });
                    // Abort handling of the native event
                    event.stopImmediatePropagation();
                }
            }
        });
    }
    jQuery.removeEvent = function(elem, type, handle) {
        // This "if" is needed for plain objects
        if (elem.removeEventListener) elem.removeEventListener(type, handle);
    };
    jQuery.Event = function(src, props) {
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            // Create target properties
            // Support: Safari <=6 - 7 only
            // Target should not be a text node (trac-504, trac-13143)
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
        // Event type
        } else this.type = src;
        // Put explicitly provided properties onto the event object
        if (props) jQuery.extend(this, props);
        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || Date.now();
        // Mark it as fixed
        this[jQuery.expando] = true;
    };
    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopImmediatePropagation();
            this.stopPropagation();
        }
    };
    // Includes all common event props including KeyEvent and MouseEvent specific props
    jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
    }, jQuery.event.addProp);
    jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(type, delegateType) {
        jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
                // Claim the first handler
                // dataPriv.set( this, "focus", ... )
                // dataPriv.set( this, "blur", ... )
                leverageNative(this, type, expectSync);
                // Return false to allow normal processing in the caller
                return false;
            },
            trigger: function() {
                // Force setup before trigger
                leverageNative(this, type);
                // Return non-false to allow normal event-path propagation
                return true;
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
                return dataPriv.get(event.target, type);
            },
            delegateType: delegateType
        };
    });
    // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    jQuery.fn.extend({
        on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                // ( types-object [, selector] )
                for(type in types)this.off(type, selector, types[type]);
                return this;
            }
            if (selector === false || typeof selector === "function") {
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) fn = returnFalse;
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });
    var // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i, // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    // Prefer a tbody over its parent table for containing new rows
    function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
        return elem;
    }
    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") elem.type = elem.type.slice(5);
        else elem.removeAttribute("type");
        return elem;
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) return;
        // 1. Copy private data: events, handlers, etc.
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
                dataPriv.remove(dest, "handle events");
                for(type in events)for(i = 0, l = events[type].length; i < l; i++)jQuery.event.add(dest, type, events[type][i]);
            }
        }
        // 2. Copy user data
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
        }
    }
    // Fix IE bugs, see support tests
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        // Fails to persist the checked state of a cloned checkbox or radio button.
        if (nodeName === "input" && rcheckableType.test(src.type)) dest.checked = src.checked;
        else if (nodeName === "input" || nodeName === "textarea") dest.defaultValue = src.defaultValue;
    }
    function domManip(collection, args, callback, ignored) {
        // Flatten any nested arrays
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        // We can't cloneNode fragments that contain checked, in WebKit
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) args[0] = value.call(this, index, self.html());
            domManip(self, args, callback, ignored);
        });
        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) fragment = first;
            // Require either new content or an interest in ignored elements to invoke the callback
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;
                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (trac-8070).
                for(; i < l; i++){
                    node = fragment;
                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true);
                        // Keep references to cloned scripts for later restoration
                        if (hasScripts) // Support: Android <=4.0 only, PhantomJS 1 only
                        // push.apply(_, arraylike) throws on ancient WebKit
                        jQuery.merge(scripts, getAll(node, "script"));
                    }
                    callback.call(collection[i], node, i);
                }
                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;
                    // Reenable scripts
                    jQuery.map(scripts, restoreScript);
                    // Evaluate executable scripts on first document insertion
                    for(i = 0; i < hasScripts; i++){
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                            if (node.src && (node.type || "").toLowerCase() !== "module") // Optional AJAX dependency, but won't run scripts if not present
                            {
                                if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
                                    nonce: node.nonce || node.getAttribute("nonce")
                                }, doc);
                            } else // Unwrap a CDATA section containing script contents. This shouldn't be
                            // needed as in XML documents they're already not visible when
                            // inspecting element contents and in HTML documents they have no
                            // meaning but we're preserving that logic for backwards compatibility.
                            // This will be removed completely in 4.0. See gh-4904.
                            DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                        }
                    }
                }
            }
        }
        return collection;
    }
    function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for(; (node = nodes[i]) != null; i++){
            if (!keepData && node.nodeType === 1) jQuery.cleanData(getAll(node));
            if (node.parentNode) {
                if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
                node.parentNode.removeChild(node);
            }
        }
        return elem;
    }
    jQuery.extend({
        htmlPrefilter: function(html) {
            return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            // Fix IE cloning issues
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for(i = 0, l = srcElements.length; i < l; i++)fixInput(srcElements[i], destElements[i]);
            }
            // Copy the events from the original to the clone
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for(i = 0, l = srcElements.length; i < l; i++)cloneCopyEvent(srcElements[i], destElements[i]);
                } else cloneCopyEvent(elem, clone);
            }
            // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            // Return the cloned set
            return clone;
        },
        cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for(; (elem = elems[i]) !== undefined; i++)if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                    if (data.events) {
                        for(type in data.events)if (special[type]) jQuery.event.remove(elem, type);
                        else jQuery.removeEvent(elem, type, data.handle);
                    }
                    // Support: Chrome <=35 - 45+
                    // Assign undefined instead of using delete, see Data#remove
                    elem[dataPriv.expando] = undefined;
                }
                if (elem[dataUser.expando]) // Support: Chrome <=35 - 45+
                // Assign undefined instead of using delete, see Data#remove
                elem[dataUser.expando] = undefined;
            }
        }
    });
    jQuery.fn.extend({
        detach: function(selector) {
            return remove(this, selector, true);
        },
        remove: function(selector) {
            return remove(this, selector);
        },
        text: function(value) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = value;
                });
            }, null, value, arguments.length);
        },
        append: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this);
            });
        },
        after: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
            });
        },
        empty: function() {
            var elem, i = 0;
            for(; (elem = this[i]) != null; i++)if (elem.nodeType === 1) {
                // Prevent memory leaks
                jQuery.cleanData(getAll(elem, false));
                // Remove any remaining nodes
                elem.textContent = "";
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined && elem.nodeType === 1) return elem.innerHTML;
                // See if we can take a shortcut and just use innerHTML
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [
                    "",
                    ""
                ])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for(; i < l; i++){
                            elem = this[i] || {};
                            // Remove element nodes and prevent memory leaks
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {}
                }
                if (elem) this.empty().append(value);
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var ignored = [];
            // Make the changes, replacing each non-ignored context element with the new content
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) parent.replaceChild(elem, this);
                }
            // Force callback invocation
            }, ignored);
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for(; i <= last; i++){
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                // Support: Android <=4.0 only, PhantomJS 1 only
                // .get() because push.apply(_, arraylike) throws on ancient WebKit
                push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var rcustomProp = /^--/;
    var getStyles = function(elem) {
        // Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) view = window1;
        return view.getComputedStyle(elem);
    };
    var swap = function(elem, options, callback) {
        var ret, name, old = {};
        // Remember the old values, and insert the new ones
        for(name in options){
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        // Revert the old values
        for(name in options)elem.style[name] = old[name];
        return ret;
    };
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    var whitespace = "[\\x20\\t\\r\\n\\f]";
    var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
    (function() {
        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {
            // This is a singleton, we need to execute it only once
            if (!div) return;
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window1.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
            // Some styles come back with percentage values, even though they shouldn't
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            // Support: IE 9 - 11 only
            // Detect misreporting of content dimensions for box-sizing:border-box elements
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            // Support: IE 9 only
            // Detect overflow:scroll screwiness (gh-3699)
            // Support: Chrome <=64
            // Don't get tricked when zoom affects offsetWidth (gh-4029)
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            // Nullify the div so it wouldn't be stored in the memory and
            // it will also be a sign that checks already performed
            div = null;
        }
        function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
        // Finish early in limited (non-browser) environments
        if (!div.style) return;
        // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (trac-8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
            boxSizingReliable: function() {
                computeStyleTests();
                return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
                computeStyleTests();
                return pixelBoxStylesVal;
            },
            pixelPosition: function() {
                computeStyleTests();
                return pixelPositionVal;
            },
            reliableMarginLeft: function() {
                computeStyleTests();
                return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
                computeStyleTests();
                return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
                var table, tr, trChild, trStyle;
                if (reliableTrDimensionsVal == null) {
                    table = document.createElement("table");
                    tr = document.createElement("tr");
                    trChild = document.createElement("div");
                    table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                    tr.style.cssText = "border:1px solid";
                    // Support: Chrome 86+
                    // Height set through cssText does not get applied.
                    // Computed height then comes back as 0.
                    tr.style.height = "1px";
                    trChild.style.height = "9px";
                    // Support: Android 8 Chrome 86+
                    // In our bodyBackground.html iframe,
                    // display for all div elements is set to "inline",
                    // which causes a problem only in Android 8 Chrome 86.
                    // Ensuring the div is display: block
                    // gets around this issue.
                    trChild.style.display = "block";
                    documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                    trStyle = window1.getComputedStyle(tr);
                    reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                    documentElement.removeChild(table);
                }
                return reliableTrDimensionsVal;
            }
        });
    })();
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), // Support: Firefox 51+
        // Retrieving style before computed somehow
        // fixes an issue with getting wrong values
        // on detached elements
        style = elem.style;
        computed = computed || getStyles(elem);
        // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, trac-12537)
        //   .css('--customProperty) (gh-3144)
        if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            // trim whitespace for custom property (issue gh-4926)
            if (isCustomProp) // rtrim treats U+000D CARRIAGE RETURN and U+000C FORM FEED
            // as whitespace while CSS does not, but this is not a problem
            // because CSS preprocessing replaces them with U+000A LINE FEED
            // (which *is* CSS whitespace)
            // https://www.w3.org/TR/css-syntax-3/#input-preprocessing
            ret = ret.replace(rtrimCSS, "$1");
            if (ret === "" && !isAttached(elem)) ret = jQuery.style(elem, name);
            // A tribute to the "awesome hack by Dean Edwards"
            // Android Browser returns percentage for some values,
            // but width seems to be reliably pixels.
            // This is against the CSSOM draft spec:
            // https://drafts.csswg.org/cssom/#resolved-values
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
        return ret !== undefined ? // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function() {
                if (conditionFn()) {
                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }
                // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    var cssPrefixes = [
        "Webkit",
        "Moz",
        "ms"
    ], emptyStyle = document.createElement("div").style, vendorProps = {};
    // Return a vendor-prefixed property or undefined
    function vendorPropName(name) {
        // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while(i--){
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) return name;
        }
    }
    // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
    function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) return final;
        if (name in emptyStyle) return name;
        return vendorProps[name] = vendorPropName(name) || name;
    }
    var // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function setPositiveNumber(_elem, value, subtract) {
        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
        // Adjustment may not be necessary
        if (box === (isBorderBox ? "border" : "content")) return 0;
        for(; i < 4; i += 2){
            // Both box models exclude margin
            if (box === "margin") delta += jQuery.css(elem, box + cssExpand[i], true, styles);
            // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
            if (!isBorderBox) {
                // Add padding
                delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // For "border" or "margin", add border
                if (box !== "padding") delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            // If we get here with a border-box (content + padding + border), we're seeking "content" or
            // "padding" or "margin"
            } else {
                // For "content", subtract padding
                if (box === "content") delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // For "content" or "padding", subtract border
                if (box !== "margin") delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
        }
        // Account for positive content-box scroll gutter when requested by providing computedVal
        if (!isBorderBox && computedVal >= 0) // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
        // Assuming integer scroll gutter, subtract the rest and round down
        delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
        return delta;
    }
    function getWidthOrHeight(elem, dimension, extra) {
        // Start with computed style
        var styles = getStyles(elem), // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
        // Fake content-box until we know it's needed to know the true value.
        boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        // Support: Firefox <=54
        // Return a confounding non-pixel value or feign ignorance, as appropriate.
        if (rnumnonpx.test(val)) {
            if (!extra) return val;
            val = "auto";
        }
        // Support: IE 9 - 11 only
        // Use offsetWidth/offsetHeight for when box sizing is unreliable.
        // In those cases, the computed value can be trusted to be border-box.
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            // Where available, offsetWidth/offsetHeight approximate border box dimensions.
            // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
            // retrieved value as a content box dimension.
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) val = elem[offsetProp];
        }
        // Normalize "" and auto
        val = parseFloat(val) || 0;
        // Adjust for the element's box model
        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
        val) + "px";
    }
    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "gridArea": true,
            "gridColumn": true,
            "gridColumnEnd": true,
            "gridColumnStart": true,
            "gridRow": true,
            "gridRowEnd": true,
            "gridRowStart": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
            // Make sure that we're working with the right name
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            // Make sure that we're working with the right name. We don't
            // want to query the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value;
                // Convert "+=" or "-=" to relative numbers (trac-7345)
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);
                    // Fixes bug trac-9237
                    type = "number";
                }
                // Make sure that null and NaN values aren't set (trac-7116)
                if (value == null || value !== value) return;
                // If a number was passed in, add the unit (except for certain CSS properties)
                // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                // "px" to a few hardcoded values.
                if (type === "number" && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                // background-* props affect original clone's values
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) style[name] = "inherit";
                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    if (isCustomProp) style.setProperty(name, value);
                    else style[name] = value;
                }
            } else {
                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) return ret;
                // Otherwise just get the value from the style object
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            // Make sure that we're working with the right name. We don't
            // want to modify the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
            // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) val = curCSS(elem, name, styles);
            // Convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) val = cssNormalTransform[name];
            // Make numeric if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each([
        "height",
        "width"
    ], function(_i, dimension) {
        jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
                if (computed) // Certain elements can have dimension info if we invisibly show them
                // but it must have a current display style that would benefit
                return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                    return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
            },
            set: function(elem, value, extra) {
                var matches, styles = getStyles(elem), // Only read styles.position if the test has a chance to fail
                // to avoid forcing a reflow.
                scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                // Account for unreliable border-box dimensions by comparing offset* to computed and
                // faking a content-box to get border and padding (gh-3699)
                if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
                // Convert to pixels if value adjustment is needed
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                    elem.style[dimension] = value;
                    value = jQuery.css(elem, dimension);
                }
                return setPositiveNumber(elem, value, subtract);
            }
        };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
        }, function() {
            return elem.getBoundingClientRect().left;
        })) + "px";
    });
    // These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {}, // Assumes a single number if not a string
                parts = typeof value === "string" ? value.split(" ") : [
                    value
                ];
                for(; i < 4; i++)expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                return expanded;
            }
        };
        if (prefix !== "margin") jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    });
    jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (Array.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for(; i < len; i++)map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        }
    });
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            else this.pos = eased = percent;
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) this.options.step.call(this.elem, this.now, this);
            if (hooks && hooks.set) hooks.set(this);
            else Tween.propHooks._default.set(this);
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) return tween.elem[tween.prop];
                // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css(tween.elem, tween.prop, "");
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween);
                else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                else tween.elem[tween.prop] = tween.now;
            }
        }
    };
    // Support: IE <=9 only
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
        }
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    // Back compat <1.8 extension point
    jQuery.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
        if (inProgress) {
            if (document.hidden === false && window1.requestAnimationFrame) window1.requestAnimationFrame(schedule);
            else window1.setTimeout(schedule, jQuery.fx.interval);
            jQuery.fx.tick();
        }
    }
    // Animations created synchronously will run synchronously
    function createFxNow() {
        window1.setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = Date.now();
    }
    // Generate parameters to create a standard animation
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for(; i < 4; i += 2 - includeWidth){
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) attrs.opacity = attrs.width = type;
        return attrs;
    }
    function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for(; index < length; index++){
            if (tween = collection[index].call(animation, prop, value)) // We're done with this property
            return tween;
        }
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        // Queue-skipping animations hijack the fx hooks
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) oldfire();
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                // Ensure the complete handler is called before this completes
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                });
            });
        }
        // Detect show/hide animations
        for(prop in props){
            value = props[prop];
            if (rfxtypes.test(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) hidden = true;
                    else continue;
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }
        // Bail out if this is a no-op like .hide().hide()
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) return;
        // Restrict "overflow" and "display" styles during box animations
        if (isBox && elem.nodeType === 1) {
            // Support: IE <=9 - 11, Edge 12 - 15
            // Record all 3 overflow attributes because IE does not infer the shorthand
            // from identically-valued overflowX and overflowY and Edge just mirrors
            // the overflowX value there.
            opts.overflow = [
                style.overflow,
                style.overflowX,
                style.overflowY
            ];
            // Identify a display type, preferring old show/hide data over the CSS cascade
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) restoreDisplay = dataPriv.get(elem, "display");
            display = jQuery.css(elem, "display");
            if (display === "none") {
                if (restoreDisplay) display = restoreDisplay;
                else {
                    // Get nonempty value(s) by temporarily forcing visibility
                    showHide([
                        elem
                    ], true);
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css(elem, "display");
                    showHide([
                        elem
                    ]);
                }
            }
            // Animate inline elements as inline-block
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                if (jQuery.css(elem, "float") === "none") {
                    // Restore the original display value at the end of pure show/hide animations
                    if (!propTween) {
                        anim.done(function() {
                            style.display = restoreDisplay;
                        });
                        if (restoreDisplay == null) {
                            display = style.display;
                            restoreDisplay = display === "none" ? "" : display;
                        }
                    }
                    style.display = "inline-block";
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }
        // Implement show/hide animations
        propTween = false;
        for(prop in orig){
            // General show/hide setup for this element animation
            if (!propTween) {
                if (dataShow) {
                    if ("hidden" in dataShow) hidden = dataShow.hidden;
                } else dataShow = dataPriv.access(elem, "fxshow", {
                    display: restoreDisplay
                });
                // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                if (toggle) dataShow.hidden = !hidden;
                // Show elements before animating them
                if (hidden) showHide([
                    elem
                ], true);
                /* eslint-disable no-loop-func */ anim.done(function() {
                    /* eslint-enable no-loop-func */ // The final step of a "hide" animation is actually hiding the element
                    if (!hidden) showHide([
                        elem
                    ]);
                    dataPriv.remove(elem, "fxshow");
                    for(prop in orig)jQuery.style(elem, prop, orig[prop]);
                });
            }
            // Per-property setup
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
                dataShow[prop] = propTween.start;
                if (hidden) {
                    propTween.end = propTween.start;
                    propTween.start = 0;
                }
            }
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        // camelCase, specialEasing and expand cssHook pass
        for(index in props){
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for(index in value)if (!(index in props)) {
                    props[index] = value[index];
                    specialEasing[index] = easing;
                }
            } else specialEasing[name] = easing;
        }
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            // Don't match elem in the :animated selector
            delete tick.elem;
        }), tick = function() {
            if (stopped) return false;
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), // Support: Android 2.3 only
            // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
            temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for(; index < length; index++)animation.tweens[index].run(percent);
            deferred.notifyWith(elem, [
                animation,
                percent,
                remaining
            ]);
            // If there's more to do, yield
            if (percent < 1 && length) return remaining;
            // If this was an empty animation, synthesize a final progress notification
            if (!length) deferred.notifyWith(elem, [
                animation,
                1,
                0
            ]);
            // Resolve the animation and report its conclusion
            deferred.resolveWith(elem, [
                animation
            ]);
            return false;
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {},
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, // If we are going to the end, we want to run all the tweens
                // otherwise we skip this part
                length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) return this;
                stopped = true;
                for(; index < length; index++)animation.tweens[index].run(1);
                // Resolve when we played the last frame; otherwise, reject
                if (gotoEnd) {
                    deferred.notifyWith(elem, [
                        animation,
                        1,
                        0
                    ]);
                    deferred.resolveWith(elem, [
                        animation,
                        gotoEnd
                    ]);
                } else deferred.rejectWith(elem, [
                    animation,
                    gotoEnd
                ]);
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for(; index < length; index++){
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
        // Attach callbacks from options
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation;
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [
                function(prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween;
                }
            ]
        },
        tweener: function(props, callback) {
            if (isFunction(props)) {
                callback = props;
                props = [
                    "*"
                ];
            } else props = props.match(rnothtmlwhite);
            var prop, index = 0, length = props.length;
            for(; index < length; index++){
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
            }
        },
        prefilters: [
            defaultPrefilter
        ],
        prefilter: function(callback, prepend) {
            if (prepend) Animation.prefilters.unshift(callback);
            else Animation.prefilters.push(callback);
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
        };
        // Go to the end state if fx are off
        if (jQuery.fx.off) opt.duration = 0;
        else if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration];
            else opt.duration = jQuery.fx.speeds._default;
        }
        // Normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) opt.queue = "fx";
        // Queueing
        opt.old = opt.complete;
        opt.complete = function() {
            if (isFunction(opt.old)) opt.old.call(this);
            if (opt.queue) jQuery.dequeue(this, opt.queue);
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            // Show any hidden elements after setting opacity to 0
            return this.filter(isHiddenWithinTree).css("opacity", 0).show()// Animate to the value specified
            .end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                // Operate on a copy of prop so per-property easing won't be lost
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                // Empty animations, or finishing resolves immediately
                if (empty || dataPriv.get(this, "finish")) anim.stop(true);
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue) this.queue(type || "fx", []);
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) stopQueue(data[index]);
                } else {
                    for(index in data)if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                }
                for(index = timers.length; index--;)if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                    timers[index].anim.stop(gotoEnd);
                    dequeue = false;
                    timers.splice(index, 1);
                }
                // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
            });
        },
        finish: function(type) {
            if (type !== false) type = type || "fx";
            return this.each(function() {
                var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                // Enable finishing flag on private data
                data.finish = true;
                // Empty the queue first
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) hooks.stop.call(this, true);
                // Look for any active animations, and finish them
                for(index = timers.length; index--;)if (timers[index].elem === this && timers[index].queue === type) {
                    timers[index].anim.stop(true);
                    timers.splice(index, 1);
                }
                // Look for any animations in the old queue and finish them
                for(index = 0; index < length; index++)if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                // Turn off finishing flag
                delete data.finish;
            });
        }
    });
    jQuery.each([
        "toggle",
        "show",
        "hide"
    ], function(_i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for(; i < timers.length; i++){
            timer = timers[i];
            // Run the timer and safely remove it when done (allowing for external removal)
            if (!timer() && timers[i] === timer) timers.splice(i--, 1);
        }
        if (!timers.length) jQuery.fx.stop();
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (inProgress) return;
        inProgress = true;
        schedule();
    };
    jQuery.fx.stop = function() {
        inProgress = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    };
    // Based off of the plugin by Clint Helfers, with permission.
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = window1.setTimeout(next, time);
            hooks.stop = function() {
                window1.clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== "";
        // Support: IE <=11 only
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected;
        // Support: IE <=11 only
        // An input loses its value after becoming a radio
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set attributes on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === "undefined") return jQuery.prop(elem, name, value);
            // Attribute hooks are determined by the lowercase version
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                elem.setAttribute(name, value + "");
                return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            ret = jQuery.find.attr(elem, name);
            // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) elem.value = val;
                        return value;
                    }
                }
            }
        },
        removeAttr: function(elem, value) {
            var name, i = 0, // Attribute names can contain non-HTML whitespace characters
            // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
            attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) while(name = attrNames[i++])elem.removeAttribute(name);
        }
    });
    // Hooks for boolean attributes
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) // Remove boolean attributes when set to false
            jQuery.removeAttr(elem, name);
            else elem.setAttribute(name, name);
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle, lowercaseName = name.toLowerCase();
            if (!isXML) {
                // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = ret;
                ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                attrHandle[lowercaseName] = handle;
            }
            return ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set properties on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            return elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // Use proper attribute retrieval (trac-12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    if (tabindex) return parseInt(tabindex, 10);
                    if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                    return -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    // eslint rule "no-unused-expressions" is disabled for this code
    // since it considers such accessions noop
    if (!support.optSelected) jQuery.propHooks.selected = {
        get: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent && parent.parentNode) parent.parentNode.selectedIndex;
            return null;
        },
        set: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) parent.parentNode.selectedIndex;
            }
        }
    };
    jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    // Strip and collapse whitespace according to HTML spec
    // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
    function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
    }
    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function classesToArray(value) {
        if (Array.isArray(value)) return value;
        if (typeof value === "string") return value.match(rnothtmlwhite) || [];
        return [];
    }
    jQuery.fn.extend({
        addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
            classNames = classesToArray(value);
            if (classNames.length) return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        if (cur.indexOf(" " + className + " ") < 0) cur += className + " ";
                    }
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) this.setAttribute("class", finalValue);
                }
            });
            return this;
        },
        removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            classNames = classesToArray(value);
            if (classNames.length) return this.each(function() {
                curValue = getClass(this);
                // This expression is here for better compressibility (see addClass)
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        // Remove *all* instances
                        while(cur.indexOf(" " + className + " ") > -1)cur = cur.replace(" " + className + " ", " ");
                    }
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) this.setAttribute("class", finalValue);
                }
            });
            return this;
        },
        toggleClass: function(value, stateVal) {
            var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) return this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            });
            if (typeof stateVal === "boolean" && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
            classNames = classesToArray(value);
            return this.each(function() {
                if (isValidValue) {
                    // Toggle individual class names
                    self = jQuery(this);
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        // Check each className given, space separated list
                        if (self.hasClass(className)) self.removeClass(className);
                        else self.addClass(className);
                    }
                // Toggle whole class name
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) // Store className if set
                    dataPriv.set(this, "__className__", className);
                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if (this.setAttribute) this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                }
            });
        },
        hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while(elem = this[i++]){
                if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
            }
            return false;
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) return ret;
                    ret = elem.value;
                    // Handle most common string cases
                    if (typeof ret === "string") return ret.replace(rreturn, "");
                    // Handle cases where value is null/undef or number
                    return ret == null ? "" : ret;
                }
                return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) return;
                if (valueIsFunction) val = value.call(this, i, jQuery(this).val());
                else val = value;
                // Treat null/undefined as ""; convert numbers to string
                if (val == null) val = "";
                else if (typeof val === "number") val += "";
                else if (Array.isArray(val)) val = jQuery.map(val, function(value) {
                    return value == null ? "" : value + "";
                });
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) this.value = val;
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : // Support: IE <=10 - 11 only
                    // option.text throws exceptions (trac-14686, trac-14858)
                    // Strip and collapse whitespace
                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                    stripAndCollapse(jQuery.text(elem));
                }
            },
            select: {
                get: function(elem) {
                    var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                    if (index < 0) i = max;
                    else i = one ? index : 0;
                    // Loop through all the selected options
                    for(; i < max; i++){
                        option = options[i];
                        // Support: IE <=9 only
                        // IE8-9 doesn't update selected after form reset (trac-2551)
                        if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                        !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                            // Get the specific value for the option
                            value = jQuery(option).val();
                            // We don't need an array for one selects
                            if (one) return value;
                            // Multi-Selects return an array
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while(i--){
                        option = options[i];
                        /* eslint-disable no-cond-assign */ if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                    /* eslint-enable no-cond-assign */ }
                    // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) elem.selectedIndex = -1;
                    return values;
                }
            }
        }
    });
    // Radios and checkboxes getter/setter
    jQuery.each([
        "radio",
        "checkbox"
    ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
        };
        if (!support.checkOn) jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
        };
    });
    // Return jQuery for attributes-only inclusion
    support.focusin = "onfocusin" in window1;
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
    };
    jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [
                elem || document
            ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document;
            // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) return;
            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) return;
            if (type.indexOf(".") > -1) {
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) event.target = elem;
            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ? [
                event
            ] : jQuery.makeArray(data, [
                event
            ]);
            // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) return;
            // Determine event propagation path in advance, per W3C events spec (trac-9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                for(; cur; cur = cur.parentNode){
                    eventPath.push(cur);
                    tmp = cur;
                }
                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) eventPath.push(tmp.defaultView || tmp.parentWindow || window1);
            }
            // Fire handlers on the event path
            i = 0;
            while((cur = eventPath[i++]) && !event.isPropagationStopped()){
                lastElement = cur;
                event.type = i > 1 ? bubbleType : special.bindType || type;
                // jQuery handler
                handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                if (handle) handle.apply(cur, data);
                // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) event.preventDefault();
                }
            }
            event.type = type;
            // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) // Call a native DOM method on the target with the same name as the event.
                // Don't do default actions on window, that's where global variables be (trac-6170)
                {
                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];
                        if (tmp) elem[ontype] = null;
                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                        elem[type]();
                        if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                        jQuery.event.triggered = undefined;
                        if (tmp) elem[ontype] = tmp;
                    }
                }
            }
            return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true
            });
            jQuery.event.trigger(e, null, elem);
        }
    });
    jQuery.fn.extend({
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) return jQuery.event.trigger(type, data, elem, true);
        }
    });
    // Support: Firefox <=44
    // Firefox doesn't have focus(in | out) events
    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
    //
    // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
    // focus(in | out) events fire after focus & blur events,
    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
    // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
    if (!support.focusin) jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(orig, fix) {
        // Attach a single capturing handler on the document while someone wants focusin/focusout
        var handler = function(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
        };
        jQuery.event.special[fix] = {
            setup: function() {
                // Handle: regular nodes (via `this.ownerDocument`), window
                // (via `this.document`) & document (via `this`).
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                if (!attaches) doc.addEventListener(orig, handler, true);
                dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                if (!attaches) {
                    doc.removeEventListener(orig, handler, true);
                    dataPriv.remove(doc, fix);
                } else dataPriv.access(doc, fix, attaches);
            }
        };
    });
    var location = window1.location;
    var nonce = {
        guid: Date.now()
    };
    var rquery = /\?/;
    // Cross-browser xml parsing
    jQuery.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") return null;
        // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.
        try {
            xml = new window1.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {}
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
        }).join("\n") : data));
        return xml;
    };
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) // Serialize array item.
        jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) // Treat each array item as a scalar.
            add(prefix, v);
            else // Item is non-scalar (array or object), encode its numeric index.
            buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        });
        else if (!traditional && toType(obj) === "object") // Serialize object item.
        for(name in obj)buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        else // Serialize scalar item.
        add(prefix, obj);
    }
    // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
            // If value is a function, invoke it and use its return value
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) return "";
        // If an array was passed in, assume that it is an array of form elements.
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) // Serialize the form elements
        jQuery.each(a, function() {
            add(this.name, this.value);
        });
        else // If traditional, encode the "old" way (the way 1.3.2 or older
        // did it), otherwise encode params recursively.
        for(prefix in a)buildParams(prefix, a[prefix], traditional, add);
        // Return the resulting serialization
        return s.join("&");
    };
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                // Use .is( ":disabled" ) so that fieldset[disabled] works
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
                var val = jQuery(this).val();
                if (val == null) return null;
                if (Array.isArray(val)) return jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                });
                return {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, // trac-7653, trac-8125, trac-8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */ prefilters = {}, /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */ transports = {}, // Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
    allTypes = "*/".concat("*"), // Anchor tag for parsing the document origin
    originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) {
        // dataTypeExpression is optional and defaults to "*"
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
                // For each dataType in the dataTypeExpression
                while(dataType = dataTypes[i++])// Prepend if requested
                if (dataType[0] === "+") {
                    dataType = dataType.slice(1) || "*";
                    (structure[dataType] = structure[dataType] || []).unshift(func);
                // Otherwise append
                } else (structure[dataType] = structure[dataType] || []).push(func);
            }
        };
    }
    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) return !(selected = dataTypeOrTransport);
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes trac-9887
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for(key in src)if (src[key] !== undefined) (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
        if (deep) jQuery.extend(true, target, deep);
        return target;
    }
    /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */ function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        // Remove auto dataType and get content-type in the process
        while(dataTypes[0] === "*"){
            dataTypes.shift();
            if (ct === undefined) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
        // Check if we're dealing with a known content-type
        if (ct) {
            for(type in contents)if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
            }
        }
        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) finalDataType = dataTypes[0];
        else {
            // Try convertible dataTypes
            for(type in responses){
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) firstDataType = type;
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }
        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
            return responses[finalDataType];
        }
    }
    /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */ function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, // Work with a copy of dataTypes in case we need to modify it for conversion
        dataTypes = s.dataTypes.slice();
        // Create converters map with lowercased keys
        if (dataTypes[1]) for(conv in s.converters)converters[conv.toLowerCase()] = s.converters[conv];
        current = dataTypes.shift();
        // Convert to each sequential dataType
        while(current){
            if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
            // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
            prev = current;
            current = dataTypes.shift();
            if (current) {
                // There's only work to do if current dataType is non-auto
                if (current === "*") current = prev;
                else if (prev !== "*" && prev !== current) {
                    // Seek a direct converter
                    conv = converters[prev + " " + current] || converters["* " + current];
                    // If none found, seek a pair
                    if (!conv) for(conv2 in converters){
                        // If conv2 outputs current
                        tmp = conv2.split(" ");
                        if (tmp[1] === current) {
                            // If prev can be converted to accepted input
                            conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                            if (conv) {
                                // Condense equivalence converters
                                if (conv === true) conv = converters[conv2];
                                else if (converters[conv2] !== true) {
                                    current = tmp[0];
                                    dataTypes.unshift(tmp[1]);
                                }
                                break;
                            }
                        }
                    }
                    // Apply converter (if not an equivalence)
                    if (conv !== true) {
                        // Unless errors are allowed to bubble, catch and return them
                        if (conv && s.throws) response = conv(response);
                        else try {
                            response = conv(response);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: conv ? e : "No conversion from " + prev + " to " + current
                            };
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/ accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
                // Convert anything to text
                "* text": String,
                // Text to html (true = no transformation)
                "text html": true,
                // Evaluate text as a json expression
                "text json": JSON.parse,
                // Parse text as xml
                "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
            return settings ? // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            // Force options to be an object
            options = options || {};
            var transport, // URL without anti-cache param
            cacheURL, // Response headers
            responseHeadersString, responseHeaders, // timeout handle
            timeoutTimer, // Url cleanup var
            urlAnchor, // Request state (becomes false upon send and true upon completion)
            completed, // To know if global events are to be dispatched
            fireGlobals, // Loop variable
            i, // uncached part of the url
            uncached, // Create the final options object
            s = jQuery.ajaxSetup({}, options), // Callbacks context
            callbackContext = s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
            globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, // Deferreds
            deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), // Status-dependent callbacks
            statusCode = s.statusCode || {}, // Headers (they are sent all at once)
            requestHeaders = {}, requestHeadersNames = {}, // Default abort message
            strAbort = "canceled", // Fake xhr
            jqXHR = {
                readyState: 0,
                // Builds headers hashtable if needed
                getResponseHeader: function(key) {
                    var match;
                    if (completed) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while(match = rheaders.exec(responseHeadersString))responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                        }
                        match = responseHeaders[key.toLowerCase() + " "];
                    }
                    return match == null ? null : match.join(", ");
                },
                // Raw string
                getAllResponseHeaders: function() {
                    return completed ? responseHeadersString : null;
                },
                // Caches the header
                setRequestHeader: function(name, value) {
                    if (completed == null) {
                        name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                // Overrides response content-type header
                overrideMimeType: function(type) {
                    if (completed == null) s.mimeType = type;
                    return this;
                },
                // Status-dependent callbacks
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (completed) // Execute the appropriate callbacks
                        jqXHR.always(map[jqXHR.status]);
                        else // Lazy-add the new callbacks in a way that preserves old ones
                        for(code in map)statusCode[code] = [
                            statusCode[code],
                            map[code]
                        ];
                    }
                    return this;
                },
                // Cancel the request
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) transport.abort(finalText);
                    done(0, finalText);
                    return this;
                }
            };
            // Attach deferreds
            deferred.promise(jqXHR);
            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (trac-10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            // Alias method option to type as per ticket trac-12004
            s.type = options.method || options.type || s.method || s.type;
            // Extract dataTypes list
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [
                ""
            ];
            // A cross-domain request is in order when the origin doesn't match the current origin.
            if (s.crossDomain == null) {
                urlAnchor = document.createElement("a");
                // Support: IE <=8 - 11, Edge 12 - 15
                // IE throws exception on accessing the href property if url is malformed,
                // e.g. http://example.com:80x/
                try {
                    urlAnchor.href = s.url;
                    // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e) {
                    // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                }
            }
            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") s.data = jQuery.param(s.data, s.traditional);
            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            // If request was aborted inside a prefilter, stop there
            if (completed) return jqXHR;
            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
            fireGlobals = jQuery.event && s.global;
            // Watch for a new set of requests
            if (fireGlobals && (jQuery.active++) === 0) jQuery.event.trigger("ajaxStart");
            // Uppercase the type
            s.type = s.type.toUpperCase();
            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);
            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            // Remove hash to simplify url manipulation
            cacheURL = s.url.replace(rhash, "");
            // More options handling for requests with no content
            if (!s.hasContent) {
                // Remember the hash so we can put it back
                uncached = s.url.slice(cacheURL.length);
                // If data is available and should be processed, append data to url
                if (s.data && (s.processData || typeof s.data === "string")) {
                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    // trac-9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }
                // Add or update anti-cache param if needed
                if (s.cache === false) {
                    cacheURL = cacheURL.replace(rantiCache, "$1");
                    uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                }
                // Put hash and anti-cache on the URL that will be requested (gh-1732)
                s.url = cacheURL + uncached;
            // Change '%20' to '+' if this is encoded form body content (gh-2658)
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) s.data = s.data.replace(r20, "+");
            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            // Check for headers option
            for(i in s.headers)jqXHR.setRequestHeader(i, s.headers[i]);
            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) // Abort if not done already and return
            return jqXHR.abort();
            // Aborting is no longer a cancellation
            strAbort = "abort";
            // Install callbacks on deferreds
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            // If no transport, we auto-abort
            if (!transport) done(-1, "No Transport");
            else {
                jqXHR.readyState = 1;
                // Send global event
                if (fireGlobals) globalEventContext.trigger("ajaxSend", [
                    jqXHR,
                    s
                ]);
                // If request was aborted inside ajaxSend, stop there
                if (completed) return jqXHR;
                // Timeout
                if (s.async && s.timeout > 0) timeoutTimer = window1.setTimeout(function() {
                    jqXHR.abort("timeout");
                }, s.timeout);
                try {
                    completed = false;
                    transport.send(requestHeaders, done);
                } catch (e1) {
                    // Rethrow post-completion exceptions
                    if (completed) throw e1;
                    // Propagate others as results
                    done(-1, e1);
                }
            }
            // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                // Ignore repeat invocations
                if (completed) return;
                completed = true;
                // Clear timeout if it exists
                if (timeoutTimer) window1.clearTimeout(timeoutTimer);
                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;
                // Cache response headers
                responseHeadersString = headers || "";
                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;
                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;
                // Get response data
                if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                // Use a noop converter for missing script but not if jsonp
                if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {};
                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                // If successful, handle type chaining
                if (isSuccess) {
                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) jQuery.lastModified[cacheURL] = modified;
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) jQuery.etag[cacheURL] = modified;
                    }
                    // if no content
                    if (status === 204 || s.type === "HEAD") statusText = "nocontent";
                    else if (status === 304) statusText = "notmodified";
                    else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) status = 0;
                    }
                }
                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                // Success/Error
                if (isSuccess) deferred.resolveWith(callbackContext, [
                    success,
                    statusText,
                    jqXHR
                ]);
                else deferred.rejectWith(callbackContext, [
                    jqXHR,
                    statusText,
                    error
                ]);
                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [
                    jqXHR,
                    s,
                    isSuccess ? success : error
                ]);
                // Complete
                completeDeferred.fireWith(callbackContext, [
                    jqXHR,
                    statusText
                ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [
                        jqXHR,
                        s
                    ]);
                    // Handle the global AJAX counter
                    if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([
        "get",
        "post"
    ], function(_i, method) {
        jQuery[method] = function(url, data, callback, type) {
            // Shift arguments if data argument was omitted
            if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            // The url can be an options object (which then must have .url)
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });
    jQuery.ajaxPrefilter(function(s) {
        var i;
        for(i in s.headers)if (i.toLowerCase() === "content-type") s.contentType = s.headers[i] || "";
    });
    jQuery._evalUrl = function(url, options, doc) {
        return jQuery.ajax({
            url: url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
                "text script": function() {}
            },
            dataFilter: function(response) {
                jQuery.globalEval(response, options, doc);
            }
        });
    };
    jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            if (this[0]) {
                if (isFunction(html)) html = html.call(this[0]);
                // The elements to wrap the target around
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) wrap.insertBefore(this[0]);
                wrap.map(function() {
                    var elem = this;
                    while(elem.firstElementChild)elem = elem.firstElementChild;
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (isFunction(html)) return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
            });
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) contents.wrapAll(html);
                else self.append(html);
            });
        },
        wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
                jQuery(this).replaceWith(this.childNodes);
            });
            return this;
        }
    });
    jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new window1.XMLHttpRequest();
        } catch (e) {}
    };
    var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        // Cross domain only allowed if supported through XMLHttpRequest
        if (support.cors || xhrSupported && !options.crossDomain) return {
            send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(options.type, options.url, options.async, options.username, options.password);
                // Apply custom fields if provided
                if (options.xhrFields) for(i in options.xhrFields)xhr[i] = options.xhrFields[i];
                // Override mime type if needed
                if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                // X-Requested-With header
                // For cross-domain requests, seeing as conditions for a preflight are
                // akin to a jigsaw puzzle, we simply never set it to be sure.
                // (it can always be set on a per-request basis or even using ajaxSetup)
                // For same-domain requests, won't change header if already provided.
                if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                // Set headers
                for(i in headers)xhr.setRequestHeader(i, headers[i]);
                // Callback
                callback = function(type) {
                    return function() {
                        if (callback) {
                            callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                            if (type === "abort") xhr.abort();
                            else if (type === "error") {
                                // Support: IE <=9 only
                                // On a manual native abort, IE9 throws
                                // errors on any property access that is not readyState
                                if (typeof xhr.status !== "number") complete(0, "error");
                                else complete(// File: protocol always yields status 0; see trac-8605, trac-14207
                                xhr.status, xhr.statusText);
                            } else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                            // IE9 has no XHR2 but throws on binary (trac-11426)
                            // For XHR2 non-text, let the caller handle it (gh-2498)
                            (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                binary: xhr.response
                            } : {
                                text: xhr.responseText
                            }, xhr.getAllResponseHeaders());
                        }
                    };
                };
                // Listen to events
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                // Support: IE 9 only
                // Use onreadystatechange to replace onabort
                // to handle uncaught aborts
                if (xhr.onabort !== undefined) xhr.onabort = errorCallback;
                else xhr.onreadystatechange = function() {
                    // Check readyState before timeout as it changes
                    if (xhr.readyState === 4) // Allow onerror to be called first,
                    // but that will not handle a native abort
                    // Also, save errorCallback to a variable
                    // as xhr.onerror cannot be accessed
                    window1.setTimeout(function() {
                        if (callback) errorCallback();
                    });
                };
                // Create the abort callback
                callback = callback("abort");
                try {
                    // Do send the request (this may raise an exception)
                    xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                    // trac-14683: Only rethrow if this hasn't been notified as an error yet
                    if (callback) throw e;
                }
            },
            abort: function() {
                if (callback) callback();
            }
        };
    });
    // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
    jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) s.contents.script = false;
    });
    // Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) s.cache = false;
        if (s.crossDomain) s.type = "GET";
    });
    // Bind script tag hack transport
    jQuery.ajaxTransport("script", function(s) {
        // This transport only deals with cross domain or forced-by-attrs requests
        if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove();
                        callback = null;
                        if (evt) complete(evt.type === "error" ? 404 : 200, evt.type);
                    });
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild(script[0]);
                },
                abort: function() {
                    if (callback) callback();
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    // Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
        }
    });
    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            // Insert callback into url or form data
            if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            else if (s.jsonp !== false) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function() {
                if (!responseContainer) jQuery.error(callbackName + " was not called");
                return responseContainer[0];
            };
            // Force json dataType
            s.dataTypes[0] = "json";
            // Install callback
            overwritten = window1[callbackName];
            window1[callbackName] = function() {
                responseContainer = arguments;
            };
            // Clean-up function (fires after converters)
            jqXHR.always(function() {
                // If previous value didn't exist - remove it
                if (overwritten === undefined) jQuery(window1).removeProp(callbackName);
                else window1[callbackName] = overwritten;
                // Save back as free
                if (s[callbackName]) {
                    // Make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    // Save the callback name for future use
                    oldCallbacks.push(callbackName);
                }
                // Call if it was a function and we have a response
                if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                responseContainer = overwritten = undefined;
            });
            // Delegate to script
            return "script";
        }
    });
    // Support: Safari 8 only
    // In Safari 8 documents created via document.implementation.createHTMLDocument
    // collapse sibling forms: the second one becomes a child of the first one.
    // Because of that, this security measure has to be disabled in Safari 8.
    // https://bugs.webkit.org/show_bug.cgi?id=137337
    support.createHTMLDocument = function() {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    }();
    // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") return [];
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        var base, parsed, scripts;
        if (!context) {
            // Stop scripts or inline event handlers from being executed immediately
            // by using document.implementation
            if (support.createHTMLDocument) {
                context = document.implementation.createHTMLDocument("");
                // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement("base");
                base.href = document.location.href;
                context.head.appendChild(base);
            } else context = document;
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        // Single tag
        if (parsed) return [
            context.createElement(parsed[1])
        ];
        parsed = buildFragment([
            data
        ], context, scripts);
        if (scripts && scripts.length) jQuery(scripts).remove();
        return jQuery.merge([], parsed.childNodes);
    };
    /**
 * Load a url into a page
 */ jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
        }
        // If it's a function
        if (isFunction(params)) {
            // We assume that it's the callback
            callback = params;
            params = undefined;
        // Otherwise, build a param string
        } else if (params && typeof params === "object") type = "POST";
        // If we have elements to modify, make the request
        if (self.length > 0) jQuery.ajax({
            url: url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
        }).done(function(responseText) {
            // Save response for use in complete callback
            response = arguments;
            self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
            responseText);
        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
        }).always(callback && function(jqXHR, status) {
            self.each(function() {
                callback.apply(this, response || [
                    jqXHR.responseText,
                    status,
                    jqXHR
                ]);
            });
        });
        return this;
    };
    jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            // Set position first, in-case top/left are set even on static elem
            if (position === "static") elem.style.position = "relative";
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
            options = options.call(elem, i, jQuery.extend({}, curOffset));
            if (options.top != null) props.top = options.top - curOffset.top + curTop;
            if (options.left != null) props.left = options.left - curOffset.left + curLeft;
            if ("using" in options) options.using.call(elem, props);
            else curElem.css(props);
        }
    };
    jQuery.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
            // Preserve chaining for setter
            if (arguments.length) return options === undefined ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
            var rect, win, elem = this[0];
            if (!elem) return;
            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if (!elem.getClientRects().length) return {
                top: 0,
                left: 0
            };
            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
            if (!this[0]) return;
            var offsetParent, offset, doc, elem = this[0], parentOffset = {
                top: 0,
                left: 0
            };
            // position:fixed elements are offset from the viewport, which itself always has zero offset
            if (jQuery.css(elem, "position") === "fixed") // Assume position:fixed implies availability of getBoundingClientRect
            offset = elem.getBoundingClientRect();
            else {
                offset = this.offset();
                // Account for the *real* offset parent, which can be the document or its root element
                // when a statically positioned element is identified
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while(offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.parentNode;
                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                    // Incorporate borders into its offset, since they are outside its content origin
                    parentOffset = jQuery(offsetParent).offset();
                    parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                }
            }
            // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent;
                while(offsetParent && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.offsetParent;
                return offsetParent || documentElement;
            });
        }
    });
    // Create scrollLeft and scrollTop methods
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                // Coalesce documents and windows
                var win;
                if (isWindow(elem)) win = elem;
                else if (elem.nodeType === 9) win = elem.defaultView;
                if (val === undefined) return win ? win[prop] : elem[method];
                if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                else elem[method] = val;
            }, method, val, arguments.length);
        };
    });
    // Support: Safari <=7 - 9.1, Chrome <=37 - 49
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each([
        "top",
        "left"
    ], function(_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                // If curCSS returns percentage, fallback to offset
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    });
    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            // Margin is only for outerHeight, outerWidth
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (isWindow(elem)) // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                    return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                    // Get document width or height
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
                    jQuery.css(elem, type, extra) : // Set width or height on the element
                    jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable);
            };
        });
    });
    jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(_i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.fn.extend({
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });
    jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
        // Handle event binding
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    // Support: Android <=4.0 only
    // Make sure we trim BOM and NBSP
    // Require that the "whitespace run" starts from a non-whitespace
    // to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
    var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    // Bind a function to a context, optionally partially applying any
    // arguments.
    // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
    // However, it is not slated for removal any time soon
    jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
        }
        // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.
        if (!isFunction(fn)) return undefined;
        // Simulated bind
        args = slice.call(arguments, 2);
        proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
    };
    jQuery.holdReady = function(hold) {
        if (hold) jQuery.readyWait++;
        else jQuery.ready(true);
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(obj) {
        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
    };
    jQuery.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
    };
    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    if (typeof define === "function" && define.amd) define("jquery", [], function() {
        return jQuery;
    });
    var // Map over jQuery in case of overwrite
    _jQuery = window1.jQuery, // Map over the $ in case of overwrite
    _$ = window1.$;
    jQuery.noConflict = function(deep) {
        if (window1.$ === jQuery) window1.$ = _$;
        if (deep && window1.jQuery === jQuery) window1.jQuery = _jQuery;
        return jQuery;
    };
    // Expose jQuery and $ identifiers, even in AMD
    // (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (trac-13566)
    if (typeof noGlobal === "undefined") window1.jQuery = window1.$ = jQuery;
    return jQuery;
});

},{}],"adjI2":[function(require,module,exports) {
module.exports = JSON.parse('{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AF-AN","Source":"Mueller et al. [1987]","PlateA":"AF","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[-0.4379,-54.8518],[-0.038826,-54.6772],[0.443182,-54.4512],[0.964534,-54.8322],[1.69481,-54.399],[2.35975,-54.0374],[3.02542,-53.6507],[3.36894,-53.8341],[3.95638,-54.1267],[4.41458,-54.4303],[4.82661,-54.1616],[5.08372,-54.3093],[5.49469,-54.5429],[6.18373,-54.1145],[6.6254,-53.8142],[7.23729,-54.1012],[7.77235,-54.396]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AF-AN","Source":"by Peter Bird, October 2001","PlateA":"AF","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[7.77235,-54.396],[8.28834,-54.0326],[8.79876,-53.668],[9.42869,-53.2326],[9.99306,-52.7923],[10.5424,-53.0655],[10.9748,-53.332],[11.7084,-52.7829],[12.2989,-52.375],[12.8951,-51.9629],[13.2042,-52.141],[13.7876,-52.4769],[14.4633,-51.9971],[15.1124,-52.3075],[15.428,-52.0836],[15.8223,-51.787],[16.9072,-52.1693],[17.8063,-52.4669],[18.5374,-52.7343],[18.7125,-52.5529],[19.9938,-52.8167],[21.2504,-52.9088],[22.5042,-53.0512],[23.0753,-53.0977],[23.0214,-53.2004],[23.8862,-53.3086],[24.6851,-53.4215],[24.8726,-53.3453]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AN-AF","Source":"Lemaux et al. [2002]","PlateA":"AN","PlateB":"AF","Type":""},"geometry":{"type":"LineString","coordinates":[[32.1258,-46.9998],[31.8654,-47.2011],[31.5885,-47.6822],[31.3065,-48.1627],[31.0081,-48.5871],[30.7046,-49.0106],[30.3617,-49.2155],[30.006,-49.6108],[29.7115,-49.9335],[29.3431,-50.507],[28.9688,-51.1373],[28.6054,-51.7716],[28.4027,-52.2771],[28.3122,-52.54],[28.1108,-52.9037],[27.4795,-52.7708],[27.3704,-52.673],[27.3221,-52.5472],[26.7131,-52.378],[26.5129,-52.6201],[26.3382,-53.065],[26.1809,-53.4288],[25.9869,-53.5818],[25.8614,-53.4799],[25.6475,-53.41],[25.1797,-53.4441],[24.8726,-53.3453]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SO-AN","Source":"Lemaux et al. [2002]","PlateA":"SO","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[32.1258,-46.9998],[33.1739,-47.2644],[33.3585,-46.8055],[33.54,-46.3464],[33.8184,-45.9791],[33.9824,-46.0812],[34.0869,-46.0899],[34.2672,-46.2123],[34.5037,-46.2216],[34.704,-45.9714],[34.8682,-45.4657],[35.0145,-45.1058],[35.1819,-44.8555],[35.6603,-44.866],[35.9729,-44.9607],[36.3029,-44.9665],[36.6774,-44.9197],[37.0855,-44.8043],[37.5083,-44.8753],[38.0827,-44.6188]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SO-AN","Source":"Mueller et al. [1987]","PlateA":"SO","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[38.0827,-44.6188],[38.1937,-44.401],[38.3383,-44.0547],[39.0729,-44.1648],[39.2673,-43.7257],[39.4588,-43.2862],[40.5058,-43.4376],[41.5578,-43.5794],[41.6859,-43.1174],[41.812,-42.6553],[42.4686,-42.7299],[42.5719,-42.2602],[42.6737,-41.7904],[42.774,-41.3205],[42.8729,-40.8505],[44.0092,-40.915],[44.023,-40.6708],[44.6858,-40.6911],[44.716,-40.3689],[45.3027,-40.3659],[45.3318,-40.1085],[46.0744,-40.119],[46.1602,-39.4945],[46.2444,-38.8699],[47.1353,-38.7637],[48.0234,-38.6507],[48.0171,-38.478],[48.6326,-38.0142],[49.0344,-37.9999],[49.0366,-37.7917],[49.9451,-37.7902],[49.9622,-37.5968],[50.8233,-37.5799],[50.827,-37.4507],[51.5548,-37.4415],[52.2827,-37.4322],[52.3106,-36.7973],[52.338,-36.1624],[52.9023,-36.153],[53.4665,-36.1409],[53.4706,-35.5167],[54.2161,-35.3024],[54.2551,-34.5416],[55.2747,-34.5605],[55.301,-34.2872],[55.6987,-34.235],[55.7379,-33.6528],[56.4006,-33.6268],[57.0607,-33.5542],[57.0912,-32.835],[57.1223,-32.3028],[57.153,-31.7706],[57.8,-31.722],[58.4563,-31.691],[58.5299,-31.0553],[59.1667,-31.0497],[59.188,-30.5671],[60.0054,-30.5607],[60.7628,-30.5315],[60.7473,-30.0145],[60.7624,-29.999],[60.7864,-29.4652],[60.8102,-28.9313],[61.5322,-28.9199],[61.5176,-28.7772],[62.1619,-28.8114],[62.1351,-28.4896],[62.7462,-28.4585],[62.703,-28.1525],[63.2112,-28.164],[63.1942,-28.0214],[63.6211,-28.0388],[63.6037,-27.8313],[64.4669,-27.8175],[65.3321,-27.8122],[65.3475,-27.5141],[66.359,-27.5145],[66.373,-27.2811],[67.129,-27.2692],[67.1555,-26.8674],[67.424,-26.8699],[67.4333,-26.5715],[67.9622,-26.583],[67.9791,-26.2906],[68.6219,-26.2625],[68.5979,-26.1206],[68.8197,-26.141],[68.8294,-26.0089],[69.15,-25.9933],[69.1379,-25.7843],[69.4603,-25.7822],[69.49,-25.6762],[69.9595,-25.6512]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SO-IN","Source":"Mueller et al. [1987]","PlateA":"SO","PlateB":"IN","Type":""},"geometry":{"type":"LineString","coordinates":[[58.2392,12.7455],[57.8675,13.0023],[57.6392,13.1377],[57.7327,13.309],[57.8096,13.4509],[57.6891,13.5225],[57.4775,13.643],[57.3015,13.74],[57.299,13.7718],[57.1397,13.8476],[56.9688,13.9372],[57.0372,14.0681],[56.9031,14.1407],[56.7616,14.2076],[56.8188,14.3021],[56.2652,14.6232]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AU-SO","Source":"Mueller et al. [1987]","PlateA":"AU","PlateB":"SO","Type":""},"geometry":{"type":"LineString","coordinates":[[68.2738,-6.8109],[67.8113,-7.2525],[68.0731,-7.64768],[67.6424,-8.02709],[68.039,-8.49189],[67.5648,-8.8814],[67.0896,-9.27031],[67.378,-9.62999],[66.9195,-9.99041],[66.46,-10.3502],[66.7874,-10.762],[66.1674,-11.21],[66.4182,-11.559],[65.6978,-12.0185],[66.033,-12.4258],[66.3692,-12.8327],[65.8205,-13.2681],[66.2097,-13.7773],[65.9278,-13.9791],[66.2076,-14.3387],[66.4883,-14.698],[66.8882,-15.2696],[67.2902,-15.8215],[67.3827,-15.9419],[67.033,-16.1389],[67.4105,-16.6587],[66.7081,-17.0901],[66.1428,-17.4501],[65.5424,-17.783],[65.0073,-18.0579],[65.2639,-18.4432],[65.5217,-18.8281],[66.0333,-19.5775],[66.428,-20.0783],[66.7513,-19.8703],[67.0404,-20.2181],[67.3095,-20.0725],[67.593,-20.3689],[67.7679,-20.28],[67.8967,-20.469],[68.2125,-20.2907],[68.5592,-20.7119],[68.2768,-20.8777],[68.6529,-21.4495],[69.2017,-22.0877],[68.7967,-22.387],[69.1621,-22.8305],[69.5577,-23.3731],[69.8497,-23.7087],[69.4016,-24.0396],[69.6804,-24.3686],[69.9393,-24.6785],[69.5921,-24.9701],[70.0896,-25.4825],[69.9595,-25.6512]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EU-AF","Source":"W part, by Peter Bird, 1999","PlateA":"EU","PlateB":"AF","Type":""},"geometry":{"type":"LineString","coordinates":[[-29.7698,39.3996],[-29.335,39.315],[-29.2971,39.2554],[-29.2603,39.2502],[-29.1881,39.2786],[-29.1472,39.2937],[-29.0904,39.3232],[-29.0495,39.3382],[-28.9819,39.3656],[-28.9505,39.3789],[-28.8946,39.412],[-28.8529,39.3725],[-28.7812,39.2993],[-28.7454,39.2626],[-28.6863,39.2144],[-28.666,39.179],[-28.6192,39.1208],[-28.5665,39.1299],[-28.4836,39.1558],[-28.4522,39.1339],[-28.4204,39.0927],[-28.3955,39.058],[-28.3649,39.0204],[-28.3421,38.9931],[-28.2919,38.9394],[-28.2155,38.9524],[-28.1199,38.9685],[-28.0588,38.9827],[-27.9546,39.0041],[-27.7933,38.9998],[-27.7223,38.9416],[-27.6797,38.9136],[-27.6061,38.8635],[-27.5588,38.8363],[-27.4844,38.7824],[-27.2394,38.7796],[-27.2033,38.6999],[-27.1743,38.6658],[-27.129,38.607],[-27.0895,38.5706],[-27.0289,38.4911],[-27.0068,38.4635],[-26.9408,38.4003],[-26.9006,38.3601],[-26.8299,38.2782],[-26.718,38.4202],[-26.6474,38.3576],[-26.6141,38.324],[-26.5323,38.2554],[-26.4943,38.2225],[-26.4166,38.1493],[-26.3787,38.1164],[-26.3021,38.0468],[-26.1714,38.036],[-26.0752,37.9655],[-26.0432,37.9355],[-25.9162,37.8386],[-25.8081,37.8783],[-25.7341,37.8159],[-25.6984,37.7902],[-25.6332,37.7225],[-25.5384,37.8181],[-25.4638,37.7517],[-25.4265,37.7185],[-25.3547,37.6633],[-25.2671,37.7692],[-25.1013,37.6463],[-24.9835,37.6441],[-24.9315,37.6091],[-24.8915,37.5839],[-24.8451,37.5519],[-24.8164,37.5328],[-24.7748,37.5001],[-24.7332,37.4673],[-24.6669,37.411],[-24.7022,37.3519],[-24.7379,37.2733],[-24.7495,37.2174],[-24.6805,37.1267],[-24.6345,37.0946],[-24.5541,37.0172],[-24.5002,36.9707],[-24.4337,36.9105],[-24.3846,36.8633],[-24.3111,36.7925],[-24.2554,36.781],[-24.1461,36.7885],[-24.0456,36.7548],[-23.5697,36.6459],[-22.8933,36.702],[-22.216,36.7543],[-21.5072,36.8197],[-20.7973,36.8809],[-20.2403,36.9543],[-19.6823,37.0251],[-18.618,37.307],[-18.1244,37.4657],[-17.5843,37.5034],[-16.742,37.4354],[-15.8415,37.2966],[-15.3865,37.2117],[-15.1427,37.0206],[-14.4109,37.2101],[-13.6754,37.395],[-12.9035,36.8638],[-12.1424,36.3276],[-11.5854,35.8512],[-10.9233,36.0984],[-10.4287,36.3916],[-9.97685,36.6514],[-9.54521,36.4296],[-8.78455,36.0509],[-8.03122,35.6675],[-7.19261,35.2729],[-6.73029,35.0633],[-6.06375,34.7839],[-6.03973,34.5174],[-6.00024,34.2634],[-5.80797,34.0191],[-5.39658,33.985],[-5.07226,34.0783],[-4.70562,34.0681],[-4.05645,34.1993],[-3.78187,35.0136],[-3.74936,35.5962],[-3.29595,35.8577],[-2.89332,36.0184],[-2.57291,36.1053],[-1.99172,35.8985],[-1.51624,35.7709],[-0.747757,35.7757],[0.003047,35.904],[0.667028,36.0723],[1.24471,36.2823],[1.97018,36.5026],[2.37988,36.5942],[3.45358,36.8509],[4.29653,36.9695],[5.14204,37.0821],[5.97383,37.154],[6.78405,37.3219]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EU-AF","Source":"by Peter Bird, 2002.03","PlateA":"EU","PlateB":"AF","Type":""},"geometry":{"type":"LineString","coordinates":[[6.78405,37.3219],[7.21517,37.3203],[7.80465,37.3582],[8.26517,37.4675],[8.62697,37.7896],[8.94209,38.2117],[9.26382,38.341],[9.70015,38.4698],[10.0893,38.5717],[10.3732,38.685]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EU\\\\AF","Source":"by Peter Bird, 2002.03","PlateA":"EU","PlateB":"AF","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[10.3732,38.685],[10.6091,38.8209],[10.8274,38.9939],[11.1176,39.0672],[11.3626,39.0748],[11.6589,39.0327],[11.7777,38.9344],[12.0574,38.8781],[12.4335,38.8487],[12.7076,38.6004],[13.3137,38.6105],[13.8115,38.625],[14.1139,38.6953],[14.5145,38.7653]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EU-AF","Source":"by Peter Bird, 2002.03","PlateA":"EU","PlateB":"AF","Type":""},"geometry":{"type":"LineString","coordinates":[[14.5145,38.7653],[15.1752,38.2924],[15.4993,38.4014],[15.6387,38.2993],[15.5511,38.1136],[15.4207,37.8857],[15.3444,37.6152],[15.3751,37.3401]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EU/AF","Source":"by Peter Bird, 2002.03","PlateA":"EU","PlateB":"AF","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[15.3751,37.3401],[15.8319,37.2743],[16.2365,37.3088],[16.8237,37.3985],[17.1676,37.5026],[17.4195,37.7008],[17.6117,37.9929],[17.7731,38.2855],[17.8447,38.4615],[18.0307,38.5162],[18.0857,38.7941],[18.0621,39.0063],[17.9599,39.1696]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EU-AF","Source":"by Peter Bird, 2002.03","PlateA":"EU","PlateB":"AF","Type":""},"geometry":{"type":"LineString","coordinates":[[17.9599,39.1696],[18.3644,38.9474],[18.895,38.6942],[19.5844,38.2716],[20,37.9075]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"IN-SO","Source":"Mueller et al. [1987]","PlateA":"IN","PlateB":"SO","Type":""},"geometry":{"type":"LineString","coordinates":[[58.2392,12.7455],[58.0174,12.2835],[57.7963,11.8213],[57.576,11.3589],[57.3564,10.8963],[57.1375,10.4336],[56.9192,9.97076],[56.9775,9.85724],[57.0289,9.85747],[57.2606,9.68141],[57.4906,9.94156],[58.063,9.53244],[58.0184,9.45008],[58.2625,9.29259],[58.1476,9.08978],[58.4302,8.86262],[58.2514,8.6469],[58.6106,8.40075],[58.9183,8.16694],[58.88,8.09719],[59.3092,7.76825],[59.2197,7.67308],[59.6997,7.31217],[60.1789,6.95076],[60.0383,6.76686],[60.6701,6.30983],[61.1417,5.90952],[61.6573,5.48967],[61.5293,5.26156],[61.9997,4.91131],[62.4568,4.52272],[63.0023,4.10805],[62.8678,3.89294],[63.3307,3.63067],[63.3882,3.70015],[63.8192,3.48212],[63.8898,3.60222],[64.6181,3.21695],[64.6822,3.29895],[65.2128,2.92078],[65.489,3.29907],[65.9626,2.9715],[66.3795,2.752],[66.1794,2.39253],[65.9923,2.052],[66.3328,1.85871],[66.6728,1.62094],[66.4925,1.33138],[66.8698,1.06795],[66.6573,0.722009],[67.1594,0.337135],[66.8392,-0.03884],[67.2089,-0.33984],[67.0231,-0.577879],[67.662,-1.0396],[67.3671,-1.43996],[67.9291,-1.91296],[67.7884,-2.08765],[68.249,-2.54022],[67.8921,-2.888],[68.2702,-3.35132],[68.6672,-3.77068],[68.3485,-4.11762],[68.751,-4.54877],[68.1985,-5.04193],[68.6069,-5.47188],[68.2191,-5.89099],[67.7823,-6.25933],[68.2738,-6.8109]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NA-AF","Source":"Mueller et al. [1987]","PlateA":"NA","PlateB":"AF","Type":""},"geometry":{"type":"LineString","coordinates":[[-46.7658,15.4506],[-46.6476,16.0187],[-46.5287,16.5868],[-46.5887,16.6067],[-46.4982,17.0865],[-46.4072,17.5663],[-46.5202,17.5883],[-46.3907,18.422],[-46.3182,18.4215],[-46.2243,18.9351],[-46.1844,18.9319],[-46.0932,19.3773],[-46.0015,19.8227],[-45.9398,19.8022],[-45.7737,20.618],[-45.557,20.5958],[-45.4187,21.2217],[-45.5152,21.2465],[-45.3853,21.8223],[-45.2483,21.8064],[-45.1574,22.3898],[-45.0658,22.9731],[-45.0239,22.9632],[-44.9245,23.6459],[-45.6993,23.7836],[-46.4758,23.9174],[-46.1961,24.5974],[-46.1188,24.5904],[-45.7915,25.2542],[-45.4988,25.1918],[-45.296,25.6367],[-45.0917,26.0814],[-44.8989,26.0554],[-44.8163,26.27],[-44.8666,26.2796],[-44.687,26.7668],[-44.5059,27.2538],[-44.3831,27.2355],[-44.2031,27.6713],[-44.0217,28.1069],[-43.9423,28.1049],[-43.5632,28.8108],[-43.4828,28.8021],[-43.0882,29.4691],[-43.0373,29.4714],[-42.7286,30.0697],[-42.1364,29.9733],[-41.7857,30.6056],[-41.4304,31.237],[-41.1836,31.1941],[-40.71,31.8173],[-40.5526,31.8025],[-40.1293,32.444],[-39.6999,33.0841],[-39.586,33.0673],[-39.3993,33.7676],[-38.5972,33.637],[-37.7975,33.5012],[-37.6776,33.7362],[-37.5328,33.7052],[-37.3364,34.1362],[-37.2446,34.1238],[-37.0461,34.5669],[-36.8618,34.5542],[-36.7846,34.7122],[-36.6231,34.6929],[-36.3731,35.2798],[-35.5584,35.1477],[-34.7464,35.0102],[-34.4595,35.6246],[-34.3354,35.616],[-34.1424,36.0794],[-34.0568,36.0713],[-33.9816,36.2212],[-33.7717,36.185],[-33.5947,36.7422],[-33.3135,36.691],[-33.2246,36.9408],[-33.0049,36.9159],[-32.9431,37.0654],[-32.7077,37.0333],[-32.6456,37.1763],[-32.3946,37.1369],[-32.2826,37.3915],[-31.5164,37.2823],[-31.3713,37.7049],[-31.0706,37.6802],[-30.6055,38.4025],[-30.4301,38.3883],[-30.1714,38.888],[-29.9091,39.3871],[-29.7698,39.3996]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AF-SA","Source":"Mueller et al. [1987]","PlateA":"AF","PlateB":"SA","Type":""},"geometry":{"type":"LineString","coordinates":[[-46.7658,15.4506],[-45.9475,15.3604],[-45.13,15.2673],[-45.1362,14.6467],[-45.1423,14.0261],[-45.0614,13.9917],[-45.0493,13.3358],[-45.0373,12.6799],[-44.262,12.6256],[-44.2775,12.1008],[-43.8845,12.0854],[-43.9026,11.5062],[-43.9206,10.927],[-43.4482,10.9055],[-42.9758,10.8832],[-42.5035,10.8602],[-42.0313,10.8365],[-41.5592,10.8121],[-41.0871,10.7869],[-41.0829,9.97939],[-40.8615,9.97269],[-40.8648,9.38937],[-40.6402,9.37285],[-40.6522,8.8406],[-40.1196,8.81526],[-40.1408,8.21537],[-39.6608,8.19726],[-39.1808,8.17858],[-38.7009,8.15934],[-38.221,8.13953],[-38.2065,7.70334],[-37.5356,7.67935],[-36.8648,7.65432],[-36.8514,7.40089],[-36.0577,7.36342],[-36.0469,7.02322],[-35.3665,6.93495],[-35.3629,6.61393],[-34.4937,6.61577],[-33.6244,6.6176],[-33.6203,6.10421],[-33.5136,6.07619],[-33.5068,5.64946],[-32.978,5.64716],[-32.9198,4.80377],[-32.8617,3.96038],[-32.387,3.9859],[-31.9122,4.01114],[-31.4374,4.03611],[-30.9625,4.06081],[-30.8868,3.25477],[-30.8113,2.44874],[-30.7358,1.64269],[-30.0269,1.60709],[-29.9203,0.797401],[-29.2096,0.848907],[-28.3465,0.953033],[-27.8309,1.00748],[-27.3153,1.06184],[-26.474,1.15918],[-26.2887,0.498136],[-25.6591,0.556165],[-25.0294,0.614126],[-24.8206,-0.244593],[-24.6117,-1.10331],[-24.0507,-1.03387],[-23.4897,-0.964324],[-22.9355,-0.880401],[-22.3813,-0.79639],[-21.5437,-0.680222],[-21.0168,-0.588493],[-20.4899,-0.496709],[-19.6747,-0.333378],[-18.8497,-0.176113],[-18.3693,-0.072752],[-17.8889,0.030609],[-17.3229,0.149605],[-16.7569,0.268587],[-16.4982,0.298947],[-16.2522,-0.5562],[-16.0372,-0.519631],[-15.8406,-1.1432],[-15.5652,-1.07324],[-15.4103,-1.49342],[-14.6594,-1.30094],[-13.9087,-1.10824],[-13.158,-0.915345],[-12.9298,-1.50722],[-12.7014,-2.09908],[-12.1641,-1.94545],[-11.9989,-2.40025],[-11.8336,-2.85504],[-12.0293,-3.01345],[-11.8975,-3.49273],[-11.7655,-3.97199],[-12.0968,-4.10303],[-12.0386,-4.58743],[-12.1445,-4.60882],[-12.0185,-5.02557],[-11.6044,-4.94231],[-11.5161,-5.41504],[-11.1669,-5.37706],[-11.0222,-5.93021],[-11.2671,-6.02023],[-11.1805,-6.75542],[-11.9933,-6.96082],[-12.8068,-7.16482],[-13.621,-7.3674],[-13.4894,-7.88908],[-13.3574,-8.41071],[-13.1911,-8.37401],[-13.023,-9.22523],[-13.2482,-9.27648],[-13.1663,-9.79444],[-13.3151,-9.82468],[-13.1736,-10.6231],[-13.0313,-11.4215],[-13.5243,-11.5387],[-14.0177,-11.6551],[-14.5115,-11.7706],[-15.0058,-11.8853],[-14.9077,-12.339],[-14.8611,-12.3196],[-14.791,-12.6562],[-14.5501,-12.577],[-14.4102,-13.2181],[-14.5996,-13.2655],[-14.5391,-13.7366],[-14.4784,-14.2077],[-13.6428,-14.0355],[-13.4352,-14.8494],[-13.2261,-15.6632],[-13.3835,-15.6882],[-13.2386,-16.2117],[-13.7702,-16.3229],[-14.3024,-16.4327],[-14.2381,-16.7645],[-14.3688,-16.777],[-14.2242,-17.3859],[-14.0786,-17.9946],[-13.5189,-17.893],[-12.9598,-17.7898],[-12.8598,-18.2872],[-12.7593,-18.7845],[-12.4772,-18.7465],[-12.3703,-19.3409],[-12.2626,-19.9353],[-11.9446,-19.8248],[-11.8522,-20.2784],[-11.9708,-20.2991],[-11.7632,-21.1759],[-12.0066,-21.2091],[-11.8495,-21.7351],[-11.9359,-21.7522],[-11.8192,-22.1534],[-12.3643,-22.2671],[-12.9102,-22.379],[-12.8511,-22.6298],[-13.3398,-22.7302],[-13.8293,-22.8292],[-13.6637,-23.5442],[-13.5703,-23.5143],[-13.4259,-24.1458],[-13.2801,-24.7771],[-13.8106,-24.8874],[-13.6632,-25.648],[-14.0485,-25.7376],[-13.8156,-26.5856],[-13.6896,-26.5644],[-13.4823,-27.4429],[-13.2716,-28.321],[-12.7456,-28.2133],[-12.5326,-28.9409]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AF-SA","Source":"by Peter Bird, October 2001","PlateA":"AF","PlateB":"SA","Type":""},"geometry":{"type":"LineString","coordinates":[[-12.5326,-28.9409],[-13.2624,-29.098],[-13.9902,-29.251],[-13.8201,-29.8515],[-13.7159,-29.828],[-13.5428,-30.4913],[-13.3666,-31.1567],[-13.4988,-31.1791],[-13.3714,-31.6612],[-13.2453,-32.1432],[-13.883,-32.2745],[-14.5229,-32.4002],[-14.4461,-32.8976],[-14.3668,-33.4989],[-14.7018,-33.5691],[-14.5151,-34.0434],[-15.2741,-34.2376],[-15.0834,-34.6898],[-15.2659,-34.7702],[-15.1,-35.1824],[-16.0274,-35.3431],[-16.9619,-35.4994],[-17.7032,-35.6633],[-17.4191,-36.0684],[-17.0847,-36.4724],[-17.4404,-36.5623],[-17.3331,-36.9436],[-17.2335,-37.3744],[-17.5331,-37.4724],[-17.3878,-38.0251],[-17.0505,-38.4467],[-16.7985,-38.4012],[-16.361,-38.5584],[-16.0438,-38.8834],[-15.9651,-39.3516],[-15.9224,-39.6807],[-16.4146,-39.79],[-16.4698,-40.2729],[-16.8674,-40.3663],[-16.8166,-40.7897],[-16.7436,-41.1763],[-16.678,-41.5191],[-16.3316,-41.8065],[-16.2146,-42.3377],[-16.4299,-42.8677]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AF-SA","Source":"Mueller et al. [1987]","PlateA":"AF","PlateB":"SA","Type":""},"geometry":{"type":"LineString","coordinates":[[-16.4299,-42.8677],[-16.3296,-43.387],[-16.2445,-43.6835],[-16.0856,-44.1319],[-15.9242,-44.58],[-15.7603,-45.0279],[-15.5939,-45.4756],[-14.894,-45.3714],[-14.7155,-45.8985],[-13.81,-45.7972],[-13.5715,-46.6878],[-13.3251,-47.5778],[-12.6102,-47.4714],[-11.8982,-47.3605],[-11.1892,-47.2452],[-10.4834,-47.1256],[-10.2958,-47.6487],[-10.1045,-48.1715],[-9.90926,-48.6939],[-9.70992,-49.216],[-8.92248,-49.0912],[-8.13908,-48.961],[-8.02211,-49.2826],[-7.96086,-49.2702],[-7.63767,-50.0587],[-7.43284,-50.0013],[-7.15851,-50.6096],[-6.15983,-50.4171],[-5.16942,-50.2161],[-4.94334,-50.6749],[-4.71279,-51.1333],[-4.47762,-51.5912],[-4.23767,-52.0486],[-3.95559,-51.9788],[-3.44688,-52.764],[-2.91952,-53.5469],[-2.37231,-54.3274],[-1.3822,-54.0533],[-0.914655,-54.4535],[-0.4379,-54.8518]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AU-AN","Source":"Mueller et al. [1987]","PlateA":"AU","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[69.9595,-25.6512],[70.4086,-26.0604],[70.6654,-25.9124],[70.9943,-26.1873],[71.1354,-26.0831],[71.58,-26.4544],[71.7166,-26.3857],[72.0656,-26.656],[72.0084,-26.7182],[72.4626,-27.1462],[72.9202,-27.5728],[73.1227,-27.4458],[73.3995,-27.655],[73.5342,-27.5698],[73.9685,-27.9442],[74.4058,-28.3173],[74.1922,-28.5413],[74.5917,-28.9035],[74.994,-29.2645],[74.9376,-29.3284],[75.5539,-29.8394],[75.3641,-30.0058],[75.5149,-30.1176],[75.3926,-30.2401],[75.7972,-30.5735],[76.2045,-30.9057],[76.1481,-30.9704],[76.6894,-31.4649],[76.3948,-31.7191],[76.8124,-32.09],[77.2334,-32.4595],[77.6578,-32.8276],[78.0858,-33.1942],[77.3518,-33.8383],[77.9166,-34.3238],[78.4879,-34.8067],[78.4423,-34.8423],[78.8035,-35.1612],[78.2011,-35.6831],[78.6899,-36.098],[79.1839,-36.5109],[78.6063,-36.9983],[78.0213,-37.4829],[78.7061,-38.0006],[78.1815,-38.3932],[78.5293,-38.6592],[78.0731,-39.0049],[78.3839,-39.262],[78.0024,-39.5385],[78.4254,-39.9049],[77.8245,-40.326],[78.4837,-40.8664],[78.6586,-40.8722],[79.3191,-41.384],[79.99,-41.8919],[80.4635,-41.5119],[80.9315,-41.1299],[81.752,-41.7225],[82.5877,-42.3091],[83.439,-42.8896],[83.8533,-42.5506],[84.2631,-42.2101],[84.6686,-41.8682],[85.0697,-41.5249],[85.4665,-41.1802],[85.8592,-40.8341],[86.402,-41.1288],[86.9497,-41.421],[87.5023,-41.7105],[88.0599,-41.9974],[88.4884,-41.6859],[89.0106,-41.9442],[89.537,-42.2002],[90.0677,-42.4538],[90.6027,-42.7049],[91.142,-42.9534],[91.6857,-43.1994],[92.2337,-43.4428],[92.7862,-43.6836],[93.3431,-43.9217],[93.9044,-44.1571],[94.4702,-44.3897],[95.0405,-44.6195],[94.9257,-44.8053],[95.8064,-45.1414],[96.6975,-45.4707],[96.2738,-45.9963],[95.842,-46.5203],[96.458,-46.7718],[97.0797,-47.02],[97.7072,-47.2648],[98.3404,-47.5061],[98.9794,-47.7439],[99.6243,-47.9781],[100.202,-47.2665],[100.817,-47.4654],[101.436,-47.661],[102.06,-47.8533],[102.688,-48.0421],[103.321,-48.2275],[103.959,-48.4093],[104.601,-48.5877],[105.247,-48.7624],[105.898,-48.9335],[106.554,-49.1009],[106.692,-48.8414],[107.486,-49.0146],[108.285,-49.1823],[108.24,-49.2587],[109.351,-49.5235]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AU-AN","Source":"by Peter Bird, October 2001","PlateA":"AU","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[109.351,-49.5235],[110.472,-49.779],[110.868,-49.8289],[111.129,-49.8004],[111.363,-49.9297],[111.666,-50.0838],[112.967,-50.2004],[114.024,-50.3877],[114.362,-49.8778],[115.5,-49.9743],[115.988,-49.8517],[116.256,-49.5404],[116.635,-49.2709],[117.523,-49.6199],[118.194,-49.8648],[118.547,-49.8017],[119.366,-49.9384],[120.273,-50.036],[120.516,-49.5243],[120.842,-48.8896],[121.555,-49.0056],[121.437,-49.6202],[121.866,-49.7355],[122.224,-49.8462],[122.553,-49.8116],[122.797,-49.7286],[123.013,-49.5424],[123.328,-49.5847],[123.771,-49.1216],[124.007,-48.9058],[124.213,-48.8476],[124.607,-48.9835],[124.992,-49.1528],[125.125,-49.3581],[125.262,-49.5983],[125.896,-49.7171],[126.074,-49.4014],[126.264,-49.0443],[126.434,-48.6297],[126.861,-48.6977],[127.313,-48.7639],[127.243,-49.2939],[127.196,-49.6429],[127.143,-49.9761],[128.312,-50.1592],[129.412,-50.348],[130.569,-50.5249],[131.256,-50.6037],[131.515,-50.2222],[132.261,-50.2228],[133.465,-50.3055],[134.245,-50.3475],[135.026,-50.3842],[135.246,-50.2093],[136.226,-50.2476],[136.946,-50.2204],[137.7,-50.2336],[138.401,-50.2311],[139.11,-50.2558],[139.645,-50.2794],[139.733,-51.1739],[139.813,-51.8376],[140.323,-51.7983],[140.4,-52.2743],[140.478,-52.7502],[140.584,-53.5044],[140.659,-53.8854],[141.451,-54.0528],[142.25,-54.2149],[143.778,-54.2343],[144.282,-54.7985],[145.401,-54.7555],[146.881,-54.6953]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AU-AN","Source":"Mueller et al. [1987]","PlateA":"AU","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[146.881,-54.6953],[147.043,-55.1749],[147.206,-55.6536],[147.373,-56.1321],[147.545,-56.6104],[147.721,-57.0884],[147.902,-57.5662],[148.076,-57.5271],[148.806,-57.4358],[149.15,-58.1044],[149.398,-58.5518],[149.652,-58.9988],[150.006,-59.5704],[150.733,-59.4753],[151.008,-59.9442],[151.29,-60.4126],[152.473,-60.1764],[153.639,-59.9299],[154.294,-60.6813],[154.981,-61.4294],[155.701,-62.1738],[156.457,-62.9143],[157.97,-62.4781],[159.44,-62.0259],[160.865,-61.5586],[161.228,-61.4567]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AN-NZ","Source":"mostly Mueller et al. [1987]; edited by P. Bird, 1999","PlateA":"AN","PlateB":"NZ","Type":""},"geometry":{"type":"LineString","coordinates":[[-76.0062,-45.6585],[-76.6746,-45.6427],[-77.6607,-45.7605],[-77.764,-45.5885],[-77.9902,-45.0916],[-78.2065,-44.4111],[-78.8933,-44.5449],[-79.5858,-44.6655],[-80.2811,-44.7819],[-81.1065,-44.876],[-81.9346,-44.9641],[-82.1377,-44.404],[-82.3507,-43.639],[-82.5089,-42.8607],[-83.4475,-42.9815],[-83.4538,-42.873],[-83.6037,-42.2225],[-83.7162,-41.6737],[-83.8269,-41.1247],[-84.487,-41.1909],[-85.1484,-41.2533],[-86.2401,-41.3925],[-87.3364,-41.5213],[-87.4171,-41.2729],[-88.4467,-41.3187],[-89.2496,-41.3781],[-90.054,-41.4319],[-90.0876,-41.0585],[-90.7391,-41.0823],[-91.391,-41.1025],[-91.4756,-40.7319],[-91.5122,-40.2824],[-91.5483,-39.8329],[-91.6035,-39.3493],[-91.6579,-38.8656],[-92.3397,-38.9184],[-93.0225,-38.9673],[-93.0748,-38.4294],[-93.9963,-38.4823],[-94.0931,-37.717],[-94.1298,-37.0006],[-94.9095,-36.9851],[-95.6889,-36.9646],[-96.5515,-36.9209],[-97.4131,-36.871],[-97.4017,-36.2936],[-98.4167,-36.1928],[-99.5318,-36.1332],[-100.645,-36.0632],[-101.286,-35.997],[-101.926,-35.9274],[-102.565,-35.8544],[-103.202,-35.7781],[-103.998,-35.6944],[-104.793,-35.6055],[-105.391,-35.5236],[-105.988,-35.4388],[-106.666,-35.3935],[-107.343,-35.3445],[-108.071,-35.2404],[-108.797,-35.1319],[-109.259,-34.5446]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-AN","Source":"Mueller et al. [1987]","PlateA":"PA","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[-180,-65.749397],[-179.197,-65.9859],[-178.793,-66.1632],[-177.926,-65.8623],[-177.072,-65.6069],[-175.729,-65.1825],[-175.07,-65.505],[-174.418,-65.8352],[-173.709,-65.5061],[-172.517,-64.9783],[-171.3,-64.3564],[-170.043,-64.8585],[-169.839,-64.7637],[-169.109,-64.2448],[-168.379,-63.7303],[-167.513,-63.106],[-166.608,-62.49],[-166.199,-62.6056],[-165.149,-63.007],[-163.921,-63.4667],[-163.001,-62.9675],[-162.061,-62.3936],[-161.338,-62.6144],[-160.43,-62.9233],[-159.888,-62.5954],[-158.703,-63.0044],[-158.394,-62.7885],[-157.601,-63.07],[-156.717,-63.324],[-156.022,-62.9525],[-155.254,-62.4327],[-154.324,-61.7762],[-154.181,-61.8361],[-153.661,-61.3992],[-152.943,-60.8407],[-152.119,-60.1575],[-151.329,-59.4694],[-150.382,-59.7176],[-149.809,-59.3141],[-149.264,-58.8221],[-148.276,-58.13],[-147.692,-57.5547],[-147.167,-57.6379],[-146.681,-57.3076],[-145.979,-56.6686],[-145.412,-56.2277],[-144.857,-55.7842],[-144.482,-55.9103],[-143.324,-56.2625],[-142.086,-56.6193],[-141.211,-56.8392],[-140.325,-57.0528],[-140.041,-56.7722],[-139.545,-56.2678],[-139.191,-55.7249],[-139.578,-55.6146],[-139.253,-55.2509],[-138.799,-54.7123],[-138.338,-54.141],[-137.89,-53.5679],[-137.522,-53.6878],[-136.59,-53.9067],[-136.18,-53.3957],[-135.307,-53.643],[-134.205,-53.8871],[-132.87,-54.2371],[-132.126,-54.4323],[-131.375,-54.6229],[-130.059,-54.9314],[-129.345,-55.1286],[-128.624,-55.3215],[-127.231,-55.5654],[-126.8,-55.0641],[-126.197,-55.1382],[-125.077,-55.4541],[-124.262,-55.5873],[-123.442,-55.715],[-122.655,-55.8731],[-121.862,-56.0262],[-121.635,-55.8321],[-121.228,-55.2189],[-120.663,-54.4098],[-119.685,-54.6416],[-118.581,-54.8185],[-118.313,-54.3503],[-118.037,-53.6908],[-117.661,-53.1241],[-118.977,-52.8974],[-118.875,-52.7524],[-118.422,-52.212],[-118.12,-51.7718],[-117.824,-51.3309],[-117.522,-50.8747],[-117.225,-50.4178],[-116.802,-49.8934],[-116.388,-49.3675],[-115.233,-49.5892],[-114.556,-49.721],[-113.875,-49.8489],[-113.745,-49.3574],[-113.528,-48.841],[-113.315,-48.3242],[-113.131,-47.7733],[-112.95,-47.2221],[-112.685,-46.5385],[-112.426,-45.8544],[-112.675,-45.8327],[-112.55,-45.4942],[-112.381,-44.9378],[-112.216,-44.3811],[-111.971,-43.7738],[-111.73,-43.1659],[-111.538,-42.6833],[-111.349,-42.2004],[-110.954,-42.2487],[-110.832,-41.3555],[-110.754,-40.7597],[-110.677,-40.1638],[-110.533,-39.5749],[-110.391,-38.9858],[-111.27,-38.9785],[-111.268,-38.8776],[-111.067,-38.276],[-110.869,-37.6741],[-110.668,-37.0423],[-110.471,-36.4102],[-110.739,-36.3578],[-110.715,-36.2186],[-110.579,-35.8301],[-110.895,-35.7967],[-110.877,-35.3191],[-110.827,-35.0908]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-AN","Source":"Mueller et al. [1987]","PlateA":"PA","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[161.228,-61.4567],[161.975,-61.763],[162.579,-62.2128],[163.202,-62.6599],[163.773,-62.4746],[164.275,-62.3219],[164.768,-62.1772],[165.103,-62.0772],[165.653,-62.4727],[165.969,-62.6676],[166.62,-63.0869],[166.858,-63.2206],[167.55,-62.9712],[168.277,-62.7732],[168.708,-62.6321],[169.238,-62.4461],[169.605,-62.6762],[170.068,-62.9724],[170.441,-63.1488],[171.009,-63.4473],[171.64,-63.8072],[172.164,-64.0974],[172.52,-64.2561],[173.631,-64.7379],[174.242,-64.5079],[174.814,-64.3149],[175.162,-64.1741],[175.582,-63.984],[176.063,-64.1878],[176.549,-64.4101],[176.819,-64.506],[177.338,-64.7362],[177.889,-64.9749],[178.24,-65.0791],[178.759,-65.274],[179.381,-65.4773],[179.963,-65.7385],[180,-65.749397]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-AN","Source":"Mueller et al. [1987]","PlateA":"PA","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[-180,-65.749397],[-179.197,-65.9859],[-178.793,-66.1632],[-177.926,-65.8623],[-177.072,-65.6069],[-175.729,-65.1825],[-175.07,-65.505],[-174.418,-65.8352],[-173.709,-65.5061],[-172.517,-64.9783],[-171.3,-64.3564],[-170.043,-64.8585],[-169.839,-64.7637],[-169.109,-64.2448],[-168.379,-63.7303],[-167.513,-63.106],[-166.608,-62.49],[-166.199,-62.6056],[-165.149,-63.007],[-163.921,-63.4667],[-163.001,-62.9675],[-162.061,-62.3936],[-161.338,-62.6144],[-160.43,-62.9233],[-159.888,-62.5954],[-158.703,-63.0044],[-158.394,-62.7885],[-157.601,-63.07],[-156.717,-63.324],[-156.022,-62.9525],[-155.254,-62.4327],[-154.324,-61.7762],[-154.181,-61.8361],[-153.661,-61.3992],[-152.943,-60.8407],[-152.119,-60.1575],[-151.329,-59.4694],[-150.382,-59.7176],[-149.809,-59.3141],[-149.264,-58.8221],[-148.276,-58.13],[-147.692,-57.5547],[-147.167,-57.6379],[-146.681,-57.3076],[-145.979,-56.6686],[-145.412,-56.2277],[-144.857,-55.7842],[-144.482,-55.9103],[-143.324,-56.2625],[-142.086,-56.6193],[-141.211,-56.8392],[-140.325,-57.0528],[-140.041,-56.7722],[-139.545,-56.2678],[-139.191,-55.7249],[-139.578,-55.6146],[-139.253,-55.2509],[-138.799,-54.7123],[-138.338,-54.141],[-137.89,-53.5679],[-137.522,-53.6878],[-136.59,-53.9067],[-136.18,-53.3957],[-135.307,-53.643],[-134.205,-53.8871],[-132.87,-54.2371],[-132.126,-54.4323],[-131.375,-54.6229],[-130.059,-54.9314],[-129.345,-55.1286],[-128.624,-55.3215],[-127.231,-55.5654],[-126.8,-55.0641],[-126.197,-55.1382],[-125.077,-55.4541],[-124.262,-55.5873],[-123.442,-55.715],[-122.655,-55.8731],[-121.862,-56.0262],[-121.635,-55.8321],[-121.228,-55.2189],[-120.663,-54.4098],[-119.685,-54.6416],[-118.581,-54.8185],[-118.313,-54.3503],[-118.037,-53.6908],[-117.661,-53.1241],[-118.977,-52.8974],[-118.875,-52.7524],[-118.422,-52.212],[-118.12,-51.7718],[-117.824,-51.3309],[-117.522,-50.8747],[-117.225,-50.4178],[-116.802,-49.8934],[-116.388,-49.3675],[-115.233,-49.5892],[-114.556,-49.721],[-113.875,-49.8489],[-113.745,-49.3574],[-113.528,-48.841],[-113.315,-48.3242],[-113.131,-47.7733],[-112.95,-47.2221],[-112.685,-46.5385],[-112.426,-45.8544],[-112.675,-45.8327],[-112.55,-45.4942],[-112.381,-44.9378],[-112.216,-44.3811],[-111.971,-43.7738],[-111.73,-43.1659],[-111.538,-42.6833],[-111.349,-42.2004],[-110.954,-42.2487],[-110.832,-41.3555],[-110.754,-40.7597],[-110.677,-40.1638],[-110.533,-39.5749],[-110.391,-38.9858],[-111.27,-38.9785],[-111.268,-38.8776],[-111.067,-38.276],[-110.869,-37.6741],[-110.668,-37.0423],[-110.471,-36.4102],[-110.739,-36.3578],[-110.715,-36.2186],[-110.579,-35.8301],[-110.895,-35.7967],[-110.877,-35.3191],[-110.827,-35.0908]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AN-SA","Source":"Mueller et al. [1987]","PlateA":"AN","PlateB":"SA","Type":""},"geometry":{"type":"LineString","coordinates":[[-0.4379,-54.8518],[-1.03898,-55.019],[-1.60588,-55.1293],[-1.61369,-55.6529],[-2.07998,-55.6568],[-2.89625,-55.7072],[-3.72024,-55.7399],[-4.05601,-55.7694],[-4.69061,-55.8072],[-4.67546,-56.2102],[-4.69342,-56.5916],[-5.44832,-56.627],[-6.05679,-56.6721],[-6.09431,-56.9823],[-6.13025,-57.2402],[-6.53815,-57.27],[-6.99917,-57.3176],[-7.01278,-57.6172],[-7.00902,-57.8694],[-7.52477,-57.9204],[-8.60685,-57.9888],[-9.88532,-58.0915],[-11.1897,-58.1577],[-12.6489,-58.2406],[-13.9543,-58.3173],[-15.0689,-58.3904],[-15.9715,-58.4388],[-16.0047,-58.4593],[-16.2258,-58.7672],[-16.41,-59.0984],[-16.9169,-59.0982],[-17.667,-59.1289],[-18.06,-59.1526],[-18.1233,-59.5093],[-18.4325,-59.5423],[-18.5472,-59.9376],[-18.6464,-60.25],[-19.3705,-60.2891],[-19.5812,-60.8108],[-20.651,-60.7817],[-21.7186,-60.7441],[-22.9137,-60.7232],[-24.1069,-60.6917],[-25.0935,-60.545],[-26.0709,-60.391]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AN\\\\SA","Source":"by Peter Bird, 1999","PlateA":"AN","PlateB":"SA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-76.4833,-52.0684],[-76.6257,-51.3775],[-76.7565,-50.7289],[-76.9898,-49.8446],[-77.024,-49.1923],[-76.9255,-48.5065],[-76.6497,-47.8746],[-76.321,-47.4777],[-75.9972,-47.0799],[-75.9581,-46.422],[-76.0062,-45.6585]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AR-EU","Source":"by Peter Bird, 1999","PlateA":"AR","PlateB":"EU","Type":""},"geometry":{"type":"LineString","coordinates":[[65.0282,24.3824],[64.1615,24.3498],[63.3656,24.2854],[62.5806,24.283],[61.9554,24.0869],[61.3646,24.122],[60.8696,24.1775],[60.3741,24.2315],[59.6026,24.3113],[58.7157,24.3633],[57.8316,24.4427],[57.3454,24.7884],[57.1214,25.5518],[57.057,26.0485],[56.9921,26.5452],[56.8753,27.3007],[56.4233,27.3685],[55.6618,26.9471],[54.7283,26.6679],[53.8601,26.7173],[53.2406,27.1213],[52.5038,27.5611],[51.912,27.9573],[51.283,28.4873],[50.9981,29.0719],[51.0573,29.578],[50.4526,30.1031],[49.974,30.4532],[49.4919,30.8016],[49.2649,31.2117],[49.036,31.6214],[48.4892,32.2374],[48.1702,32.3082],[47.7702,32.3111],[47.4107,32.4479],[46.6076,32.8874],[45.9177,33.3905],[45.5052,33.8933],[45,34.5906]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SU/AU","Source":"Mueller et al. [1987]","PlateA":"SU","PlateB":"AU","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[104.576,-8.16657],[104.981,-8.5688],[105.59,-8.92628],[106.123,-9.23956],[106.345,-9.37105],[106.827,-9.66517],[107.379,-9.89028],[107.836,-10.0528],[108.363,-10.1777],[109.067,-10.3276],[109.626,-10.3713],[110.159,-10.4399],[110.615,-10.4773],[111.015,-10.4773],[111.523,-10.5772],[112.17,-10.652],[112.563,-10.758],[113.204,-10.8702],[113.756,-10.9636],[114.41,-11.0882],[115.013,-11.1505],[115.571,-11.2189],[116.174,-11.275],[116.853,-11.331],[117.576,-11.3372],[118.236,-11.3869],[118.75,-11.3621],[119.27,-11.3932],[119.841,-11.4616],[120.451,-11.5238],[120.886,-11.4925]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"TI-AU","Source":"Mueller et al. [1987]","PlateA":"TI","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[120.886,-11.4925],[121.11,-11.4927],[121.783,-11.4118],[122.627,-11.1878],[123.217,-10.9948],[123.96,-10.7081],[124.734,-10.39],[125.159,-10.159],[125.482,-9.98405],[125.869,-9.78401],[126.333,-9.59637],[126.853,-9.38984],[127.43,-9.22077],[127.9,-9.13307],[128.376,-9.09547],[129.106,-9.02027],[129.861,-8.92625],[130.54,-8.7256],[130.933,-8.56249],[131.415,-8.26747]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"TI-AU","Source":"by Peter Bird, September 2001","PlateA":"TI","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[131.415,-8.26747],[131.867,-7.6612],[132.431,-6.98943],[132.689,-6.68099]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-AU","Source":"Mueller et al. [1987]","PlateA":"PA","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[159.803,-60.0055],[160.327,-60.5039],[160.74,-61.0526],[161.129,-61.3842],[161.228,-61.4567]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AU\\\\PA","Source":"Mueller et al. [1987]","PlateA":"AU","PlateB":"PA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[166.951,-44.9871],[167.1,-44.8262],[167.368,-44.6478],[167.688,-44.466],[168.081,-44.3297],[168.488,-44.166],[168.77,-44.0215]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AU-PA","Source":"Mueller et al. [1987]","PlateA":"AU","PlateB":"PA","Type":""},"geometry":{"type":"LineString","coordinates":[[168.77,-44.0215],[169.136,-43.8453],[169.647,-43.5943],[170.103,-43.3578],[170.638,-43.0879],[170.995,-42.9318],[171.277,-42.743],[171.473,-42.6755],[171.859,-42.6156],[172.593,-42.483],[173.126,-42.3917],[173.724,-42.2908],[174.304,-42.2013],[174.988,-42.1219],[175.503,-42.0593]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"KE/PA","Source":"Mueller et al. [1987]","PlateA":"KE","PlateB":"PA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-180,-37.160662],[-179.811,-36.793],[-179.371,-36.179],[-179.044,-35.5423],[-178.641,-35.0218],[-178.539,-34.7058],[-178.413,-34.4854],[-178.294,-34.2413],[-178.208,-33.8459],[-177.981,-33.5795],[-177.81,-33.1908],[-177.666,-32.6959],[-177.649,-32.2028],[-177.538,-31.9574],[-177.301,-31.7932],[-177.108,-31.4517],[-176.919,-31.0374],[-176.69,-30.6779],[-176.547,-30.3215],[-176.339,-29.8808],[-176.153,-29.4691],[-176.078,-29.0653],[-175.995,-28.6971],[-175.885,-28.2638],[-175.785,-27.7843],[-175.545,-27.318],[-175.4,-26.8569],[-175.423,-26.4372],[-175.415,-26.0248],[-175.382,-25.7295],[-175.297,-25.4257],[-175.261,-25.1425],[-175.229,-24.8362],[-175.209,-24.4719],[-175.102,-24.0701],[-174.985,-23.7499]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"KE/PA","Source":"Mueller et al. [1987]","PlateA":"KE","PlateB":"PA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[175.503,-42.0593],[176.081,-41.91],[176.673,-41.756],[177.123,-41.6566],[177.607,-41.4997],[178.015,-41.1879],[178.284,-40.8071],[178.566,-40.424],[178.792,-40.087],[178.95,-39.6848],[179.125,-39.2296],[179.215,-38.8885],[179.366,-38.538],[179.569,-38.2045],[179.838,-37.4758],[180,-37.160662]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"KE/PA","Source":"Mueller et al. [1987]","PlateA":"KE","PlateB":"PA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-180,-37.160662],[-179.811,-36.793],[-179.371,-36.179],[-179.044,-35.5423],[-178.641,-35.0218],[-178.539,-34.7058],[-178.413,-34.4854],[-178.294,-34.2413],[-178.208,-33.8459],[-177.981,-33.5795],[-177.81,-33.1908],[-177.666,-32.6959],[-177.649,-32.2028],[-177.538,-31.9574],[-177.301,-31.7932],[-177.108,-31.4517],[-176.919,-31.0374],[-176.69,-30.6779],[-176.547,-30.3215],[-176.339,-29.8808],[-176.153,-29.4691],[-176.078,-29.0653],[-175.995,-28.6971],[-175.885,-28.2638],[-175.785,-27.7843],[-175.545,-27.318],[-175.4,-26.8569],[-175.423,-26.4372],[-175.415,-26.0248],[-175.382,-25.7295],[-175.297,-25.4257],[-175.261,-25.1425],[-175.229,-24.8362],[-175.209,-24.4719],[-175.102,-24.0701],[-174.985,-23.7499]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"TO/PA","Source":"Mueller et al. [1987]","PlateA":"TO","PlateB":"PA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-174.985,-23.7499],[-174.842,-23.5126],[-174.663,-23.2205],[-174.489,-22.9058],[-174.323,-22.6169],[-174.139,-22.2898],[-173.952,-21.9153],[-173.818,-21.5263],[-173.703,-21.2476],[-173.551,-20.8926],[-173.403,-20.5862],[-173.218,-20.204],[-173.053,-19.7788],[-172.97,-19.4608],[-172.874,-19.071],[-172.786,-18.7769],[-172.698,-18.4832],[-172.591,-18.1523],[-172.54,-17.9348],[-172.445,-17.6766],[-172.374,-17.2706],[-172.335,-16.9629],[-172.311,-16.7157],[-172.307,-16.3319],[-172.3,-16.041],[-172.331,-15.732],[-172.355,-15.5611],[-172.428,-15.3734],[-172.602,-15.1514],[-172.774,-15.033],[-172.939,-14.8669],[-173.13,-14.7848],[-173.273,-14.6967],[-173.407,-14.584]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"KE-AU","Source":"Circum Pacific Map Project [1981]","PlateA":"KE","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[-177.419,-24.1051],[-177.448,-24.242],[-177.552,-24.7196],[-177.657,-25.1971],[-177.793,-25.9755],[-178.017,-26.7672],[-178.248,-27.3765],[-178.482,-27.9855],[-178.713,-28.6927],[-178.966,-29.4983],[-179.074,-29.7924],[-179.226,-30.3553],[-179.393,-30.9968],[-179.515,-31.3328],[-179.74,-31.751],[-180,-32.30415]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"KE-AU","Source":"Circum Pacific Map Project [1981]","PlateA":"KE","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[180,-32.30415],[179.98,-32.3467],[179.657,-33.0187],[179.345,-33.6016],[178.996,-34.246],[178.681,-34.7863],[178.403,-35.1612],[177.89,-35.9174],[177.507,-36.461],[177.049,-37.1022],[176.77,-37.485],[176.509,-37.8849],[176.241,-38.2869],[175.995,-38.6742],[175.932,-38.7623],[175.609,-39.2297],[176.074,-40.0461],[175.868,-40.3108],[175.537,-40.5983],[175.324,-40.7906],[175.012,-40.9786],[174.632,-41.1571],[174.763,-41.5656],[174.945,-41.7569],[175.503,-42.0593]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"KE-AU","Source":"Circum Pacific Map Project [1981]","PlateA":"KE","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[-177.419,-24.1051],[-177.448,-24.242],[-177.552,-24.7196],[-177.657,-25.1971],[-177.793,-25.9755],[-178.017,-26.7672],[-178.248,-27.3765],[-178.482,-27.9855],[-178.713,-28.6927],[-178.966,-29.4983],[-179.074,-29.7924],[-179.226,-30.3553],[-179.393,-30.9968],[-179.515,-31.3328],[-179.74,-31.751],[-180,-32.30415]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-NI","Source":"Mueller et al. [1987]","PlateA":"PA","PlateB":"NI","Type":""},"geometry":{"type":"LineString","coordinates":[[-176.346,-14.634],[-175.865,-14.4781],[-175.309,-14.4066],[-174.754,-14.3339],[-174.083,-14.3791],[-173.836,-14.5338]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-TO","Source":"","PlateA":"PA","PlateB":"TO","Type":""},"geometry":{"type":"LineString","coordinates":[[-173.836,-14.5338],[-173.407,-14.584]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"WL-MO","Source":"by Peter Bird, 2001.05","PlateA":"WL","PlateB":"MO","Type":""},"geometry":{"type":"LineString","coordinates":[[138.972,-1.6075],[139.205,-2.09261],[139.439,-2.57768],[139.809,-3.17775],[140.07,-3.64451],[140.328,-4.04505],[140.566,-4.5857],[140.798,-5.10959]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"WL-AU","Source":"by Peter Bird, 2001.05","PlateA":"WL","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[140.798,-5.10959],[140.847,-5.14497],[141.483,-5.7274],[142.231,-5.98645],[142.956,-6.29475],[143.569,-6.55817],[144.136,-6.81309],[144.74,-7.02342],[145.249,-7.37364],[145.666,-7.66091],[146.398,-8.10254],[146.918,-8.41044],[146.954,-8.59828]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SB/SS","Source":"Circum Pacific Map Project [1981]","PlateA":"SB","PlateB":"SS","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[148.587,-7.39451],[149.314,-7.03217],[149.86,-6.93936],[150.146,-6.88149],[150.663,-6.69359],[151.148,-6.44252],[151.519,-6.21031],[151.876,-5.92553],[152.257,-5.7549],[152.653,-5.64024],[153.107,-5.74072],[153.519,-5.94643],[153.93,-6.265]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NB/SS","Source":"Circum Pacific Map Project [1981]","PlateA":"NB","PlateB":"SS","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[153.93,-6.265],[154.225,-6.50689],[154.54,-6.81779],[154.927,-7.29284]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA/SS","Source":"Circum Pacific Map Project [1981]","PlateA":"PA","PlateB":"SS","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[154.927,-7.29284],[155.454,-7.48875]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA/WL","Source":"Circum Pacific Map Project [1981]","PlateA":"PA","PlateB":"WL","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[155.454,-7.48875],[155.812,-7.70595],[156.047,-7.88376],[156.296,-8.17405]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SS\\\\WL","Source":"Lock et al. [1987]","PlateA":"SS","PlateB":"WL","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[148.587,-7.39451],[148.733,-7.47525],[148.944,-7.60693],[149.148,-7.66468],[149.334,-7.66492],[149.609,-7.62419],[149.866,-7.61219],[150.173,-7.629],[150.555,-7.68698],[150.917,-7.75724],[151.307,-7.85219],[151.68,-7.95532],[152.062,-8.10364],[152.411,-8.26014],[152.685,-8.38779],[152.959,-8.54419],[153.108,-8.68401],[153.17,-8.78265],[153.237,-8.88951],[153.255,-9.18615]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AU-WL","Source":"by Peter Bird, 2001.05","PlateA":"AU","PlateB":"WL","Type":""},"geometry":{"type":"LineString","coordinates":[[151.654,-9.76005],[151.545,-9.67589],[151.005,-9.68138],[150.466,-9.68686],[150.245,-9.94531],[149.676,-9.80087],[149.133,-9.35255],[148.751,-9.56973],[148.207,-9.21176],[147.539,-8.88649],[146.954,-8.59828]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA/AU","Source":"Mueller et al. [1987]","PlateA":"PA","PlateB":"AU","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[156.296,-8.17405],[156.467,-8.3819],[156.706,-8.5629],[156.782,-8.60178],[156.858,-8.61536],[156.935,-8.64158],[157.049,-8.70619],[157.177,-8.74562],[157.241,-8.7843],[157.317,-8.82313],[157.419,-8.9002],[157.572,-8.96515],[157.648,-9.00394],[157.724,-9.06805],[157.827,-9.10708],[157.916,-9.15863],[157.992,-9.21004],[158.056,-9.24866],[158.145,-9.31285],[158.273,-9.39006],[158.388,-9.44177],[158.478,-9.48058],[158.58,-9.50679],[158.709,-9.54586],[158.773,-9.55904],[158.85,-9.58499],[158.926,-9.6236],[159.003,-9.64952],[159.068,-9.68801],[159.119,-9.72641],[159.17,-9.7648],[159.221,-9.82854],[159.285,-9.87969],[159.362,-9.93092],[159.439,-9.96945],[159.503,-10.0206],[159.58,-10.0844],[159.644,-10.1229],[159.708,-10.1739],[159.772,-10.1997],[159.837,-10.2507],[159.914,-10.2765],[159.978,-10.3149],[160.068,-10.3787],[160.132,-10.417],[160.21,-10.4681],[160.287,-10.5192],[160.364,-10.5702],[160.493,-10.6341],[160.544,-10.6723],[160.622,-10.7233],[160.725,-10.787],[160.776,-10.8379],[160.867,-10.9142],[160.931,-10.9651],[160.996,-11.0287],[161.06,-11.0541],[161.125,-11.1304],[161.202,-11.1685],[161.306,-11.194],[161.384,-11.2321],[161.461,-11.2448],[161.552,-11.2829],[161.72,-11.3209],[161.798,-11.3589],[161.901,-11.3968],[162.018,-11.422],[162.109,-11.4345],[162.225,-11.4216],[162.354,-11.4212],[162.484,-11.4208],[162.626,-11.3823],[162.833,-11.356],[163.053,-11.3106],[163.195,-11.2908],[163.311,-11.2647],[163.505,-11.2381],[163.699,-11.1987],[163.854,-11.1848],[163.996,-11.1583],[164.151,-11.1443],[164.267,-11.1179],[164.409,-11.0913],[164.512,-11.0903],[164.641,-11.1143],[164.758,-11.1637],[164.901,-11.2002],[165.07,-11.2869],[165.252,-11.4113],[165.396,-11.5487],[165.514,-11.6864],[165.621,-11.8875],[165.715,-12.1266],[165.77,-12.3157],[165.838,-12.5171],[165.894,-12.744],[165.909,-12.8703],[165.952,-13.0721],[166.02,-13.2608],[166.09,-13.5126],[166.132,-13.6763],[166.154,-13.7794]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NH/AU","Source":"Mueller et al. [1987]","PlateA":"NH","PlateB":"AU","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[166.154,-13.7794],[166.161,-13.8276],[166.204,-13.9913],[166.234,-14.1805],[166.25,-14.3447],[166.252,-14.4205],[166.268,-14.5594],[166.271,-14.6859],[166.262,-14.8885],[166.213,-15.0413],[166.228,-15.1296],[166.217,-15.2437],[166.193,-15.3454],[166.209,-15.4337],[166.225,-15.5599],[166.227,-15.6737],[166.27,-15.7993],[166.285,-15.8875],[166.34,-15.9749],[166.395,-16.0875],[166.45,-16.1874],[166.506,-16.3],[166.562,-16.4378],[166.604,-16.538],[166.659,-16.6251],[166.728,-16.7372],[166.81,-16.8363],[166.868,-16.9866],[166.95,-17.0982],[167.059,-17.209],[167.155,-17.3074],[167.171,-17.3955],[167.215,-17.5206],[167.245,-17.6335],[167.275,-17.759],[167.32,-17.9219],[167.35,-18.0221],[167.394,-18.1472],[167.424,-18.2473],[167.455,-18.3601],[167.486,-18.4855],[167.504,-18.6113],[167.521,-18.7118],[167.607,-18.8859],[167.68,-19.0477],[167.727,-19.2356],[167.812,-19.3716],[167.886,-19.5332],[167.943,-19.6322],[168.003,-19.769],[168.075,-19.8926],[168.16,-20.0031],[168.191,-20.0903],[168.263,-20.2012],[168.335,-20.3246],[168.396,-20.4737],[168.512,-20.6457],[168.585,-20.7815],[168.645,-20.8926],[168.705,-21.0162],[168.776,-21.1015],[168.879,-21.261],[168.996,-21.4198],[169.054,-21.5055],[169.143,-21.6401],[169.215,-21.725],[169.288,-21.8225],[169.32,-21.9092],[169.419,-21.9801],[169.491,-22.0522],[169.577,-22.1236],[169.719,-22.2298],[169.835,-22.3499],[169.95,-22.4447],[170.036,-22.5157],[170.109,-22.5873],[170.221,-22.6442],[170.321,-22.7017],[170.42,-22.7591],[170.547,-22.8274],[170.66,-22.8838],[170.745,-22.9166],[170.842,-22.9486],[170.939,-22.968],[171.037,-22.9998],[171.162,-23.0299],[171.288,-23.0724],[171.385,-23.0915],[171.496,-23.1096],[171.62,-23.1268],[171.703,-23.1464],[171.854,-23.1491],[171.95,-23.1553],[172.06,-23.173],[172.197,-23.1763],[172.278,-23.1707],[172.361,-23.1775],[172.439,-23.1781]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CA-NA","Source":"by Peter Bird, 1999","PlateA":"CA","PlateB":"NA","Type":""},"geometry":{"type":"LineString","coordinates":[[-61.5534,18.9589],[-62.1765,19.2752],[-62.8467,19.5743],[-63.3598,19.6915],[-63.7601,19.7242],[-64.3436,19.7794],[-65.1285,19.8329],[-65.694,19.8288],[-66.2594,19.8246],[-67.0405,19.7543],[-67.5313,19.7213],[-68.0218,19.687],[-68.8528,19.589],[-69.4148,19.6961],[-69.9775,19.8015],[-70.6265,20.0022],[-71.2771,20.2005],[-71.8044,20.2665],[-72.3322,20.331],[-73.2385,20.2913],[-73.9942,20.1659],[-74.7486,20.0372],[-75.2388,19.9902],[-75.7287,19.9419],[-76.3564,19.8453],[-76.9834,19.7465],[-77.6726,19.6228],[-78.3607,19.4965],[-79.011,19.3815],[-79.6604,19.2642],[-80.2095,19.1597],[-80.7579,19.0536],[-81.2563,18.9598],[-81.7541,18.8647],[-81.6893,18.3332],[-81.6248,17.8016],[-82.2442,17.6907],[-82.8646,17.6257],[-83.7058,17.4809],[-84.2479,17.344],[-84.9097,17.1066],[-85.6714,16.911],[-86.3195,16.6945],[-86.9661,16.4759],[-87.7228,16.2506],[-88.351,15.9583],[-88.8764,15.6222],[-89.3716,15.215],[-89.718,14.8151],[-90.0373,14.3923],[-90.426,13.9172],[-90.8103,13.3941],[-90.898,12.5837]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CA/CO","Source":"by Peter Bird, 1999","PlateA":"CA","PlateB":"CO","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-90.898,12.5837],[-90.2927,12.5426],[-89.619,12.2948],[-88.9197,11.9992],[-88.319,11.6968],[-87.8901,11.3967],[-87.4621,11.0959],[-86.9749,10.5473],[-86.648,10.235]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CA-SA","Source":"by Peter Bird, 1999","PlateA":"CA","PlateB":"SA","Type":""},"geometry":{"type":"LineString","coordinates":[[-63.8782,10.5316],[-63.2327,10.5091],[-62.6409,10.4818],[-62.1579,10.4585],[-61.5422,10.4273],[-60.9266,10.3949],[-60.4573,10.3453],[-59.9882,10.2951],[-59.1214,10.22],[-58.6392,10.1902],[-58.1571,10.1597]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CA/SA","Source":"by Peter Bird, 1999","PlateA":"CA","PlateB":"SA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-58.1571,10.1597],[-57.7617,10.6345],[-57.5326,11.1438],[-57.4238,11.6612],[-57.4681,12.4273],[-57.568,13.1016],[-57.7107,13.874],[-57.7906,14.4989],[-57.9132,14.8642],[-58.2884,15.15],[-58.5263,15.2839],[-58.6661,15.4116],[-58.6919,15.7703],[-58.8011,15.9911],[-58.824,16.397],[-59.0883,16.9121],[-59.4648,17.2431],[-59.819,17.5484],[-60.0513,17.8225],[-60.2784,18.191],[-60.5338,18.5131],[-60.729,18.5946],[-60.912,18.8885],[-61.5534,18.9589]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CO\\\\NA","Source":"by Peter Bird, 1999","PlateA":"CO","PlateB":"NA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-90.898,12.5837],[-91.3079,12.8322],[-91.7186,13.0801],[-92.0632,13.2712],[-92.2724,13.2233],[-92.5992,13.498],[-92.9619,13.7221],[-93.3094,13.7932],[-93.6558,14.0161],[-94.0552,14.2221],[-94.5422,14.4786],[-94.8729,14.6998],[-95.117,14.8866],[-95.4663,15.0902],[-95.7986,15.2765],[-96.219,15.3609],[-96.727,15.3601],[-97.2174,15.3584],[-97.6914,15.508],[-98.1657,15.6399],[-98.5878,15.7715],[-99.0281,15.9191],[-99.4347,16.134],[-99.806,16.298],[-100.336,16.4424],[-100.867,16.6363],[-101.703,17.0256],[-102.432,17.2799],[-103.2,17.6155],[-103.792,17.92],[-104.191,18.1383],[-104.406,18.209],[-104.725,18.3684],[-105.043,18.6216],[-105.247,18.7619]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CO-PA","Source":"truncated from Mueller et al. [1987]","PlateA":"CO","PlateB":"PA","Type":""},"geometry":{"type":"LineString","coordinates":[[-105.586,17.8808],[-105.399,17.7679],[-105.367,17.0308],[-105.398,16.2605],[-105.357,15.5576],[-105.32,15.1076],[-104.69,15.2745],[-104.563,14.6722],[-104.437,14.0698],[-104.181,13.3284],[-103.927,12.5868],[-103.772,11.8904],[-103.875,11.8723],[-103.807,11.4045],[-103.739,10.9366],[-103.628,10.2746],[-103.598,10.1232],[-104.296,10.0171],[-104.296,9.17474],[-104.258,8.45574],[-104.229,8.34001],[-103.595,8.37048],[-102.961,8.39993],[-102.81,7.79085],[-102.659,7.18172],[-102.558,6.35535],[-102.457,5.52897],[-102.32,4.65326],[-102.184,3.77753],[-102.259,3.75071],[-102.199,3.45816],[-102.219,3.23869]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CO-NZ","Source":"Mueller et al. [1987]","PlateA":"CO","PlateB":"NZ","Type":""},"geometry":{"type":"LineString","coordinates":[[-99.7389,2.26882],[-99.657,2.19007],[-98.9175,2.11218],[-98.8886,2.21253],[-98.3674,2.14463],[-97.8463,2.07656],[-97.5512,2.08841],[-97.5851,1.89824],[-96.88,1.88568],[-96.175,1.87283],[-96.1202,2.23785],[-95.2241,2.22175],[-95.1982,2.50694],[-94.4044,2.43994],[-93.6107,2.37248],[-92.9279,2.29988],[-92.2451,2.22695],[-92.0902,2.19975],[-92.1183,1.99009],[-91.5376,2.01117],[-91.5608,1.81659],[-90.6973,1.73615],[-90.6632,1.12041],[-89.7836,1.0729],[-88.9041,1.02514],[-88.0245,0.977144],[-87.145,0.928909],[-86.2656,0.880462],[-85.3861,0.831804],[-85.3494,1.64441],[-84.5759,1.59812],[-84.5713,2.06618],[-84.5667,2.53424],[-84.4671,3.11226],[-83.9225,3.13869],[-83.3779,3.16485],[-82.8064,3.11792],[-82.875,3.5949],[-82.875,4.07188],[-82.875,4.56303],[-82.875,5.05417],[-82.875,5.83296],[-82.875,6.56231],[-82.8749,7.11804],[-82.8748,7.36639]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EU-IN","Source":"by Peter Bird, 1999","PlateA":"EU","PlateB":"IN","Type":""},"geometry":{"type":"LineString","coordinates":[[65.0282,24.3824],[65.4921,24.6201],[65.9578,24.8564],[66.5296,25.1787],[67.1044,25.4987],[67.2681,25.9839],[67.2526,26.5184],[67.2478,27.0854],[67.3322,27.9115],[67.3421,28.4041],[67.2397,28.5731],[67.2767,29.3768],[67.3011,29.7948],[67.8492,30.0735],[68.3105,29.878],[68.6795,29.209],[69.0855,29.0959],[69.8806,29.2618],[70.0995,29.8402],[70.1783,30.423],[70.258,31.0057],[70.101,31.4594],[69.9425,31.913],[70.4394,32.431],[70.9421,32.9471],[71.392,33.4768],[71.8474,34.0048],[72.4591,34.6822]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EU-IN","Source":"by Peter Bird, 1999","PlateA":"EU","PlateB":"IN","Type":""},"geometry":{"type":"LineString","coordinates":[[72.4591,34.6822],[73.0296,34.1759],[73.5933,33.6669],[74.3142,33.1594],[75.0894,32.8806],[75.6749,32.1894],[75.722,31.6333],[76.521,31.1537],[77.0067,30.7376],[77.6407,30.558],[78.0762,30.2261],[78.4224,29.8869],[78.9118,29.6776],[79.1969,29.3934],[79.7898,29.1428],[80.2265,29.093],[80.5465,28.975],[81.043,28.7902],[81.361,28.4135],[82.2004,28.1669],[82.9354,27.8815],[83.6667,27.5929],[84.1585,27.4519],[84.6491,27.3091],[85.6219,27.1704],[86.2515,27.0946],[86.4809,26.7372],[86.8204,26.6683],[87.2186,27.022],[87.745,26.9089],[88.32,26.885],[89.2821,27.0268],[89.7724,26.8472],[90.3294,26.937],[91.258,27.0075],[91.7812,27.0329],[92.3047,27.0564],[93.2334,27.1165],[93.5704,27.1098],[94.189,27.5008],[94.8287,27.9182],[95.4657,28.1832],[96.2345,28.1349],[96.7916,28.1099],[97.3484,28.0826]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NA-EU","Source":"by Peter Bird, 1999","PlateA":"NA","PlateB":"EU","Type":""},"geometry":{"type":"LineString","coordinates":[[125.679,78.1326],[126.457,77.6844],[127.181,77.2341],[127.634,76.6425],[128.05,76.0501],[128.519,75.4945],[128.955,74.938],[129.595,74.4788],[130.2,74.0179],[131.263,73.3715],[132.483,72.6946],[133.267,72.2815],[134.017,71.8654],[134.854,71.2683],[135.595,70.6916],[135.962,70.5295],[136.758,69.9536],[137.368,69.6349],[138.523,69.0423],[138.963,68.4765],[139.381,67.9097],[140.33,67.4472],[141.242,66.9794],[142.503,66.6537],[143.731,66.3181],[144.344,65.8035],[144.932,65.2865]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NA-EU","Source":"Mueller et al. [1987]","PlateA":"NA","PlateB":"EU","Type":""},"geometry":{"type":"LineString","coordinates":[[-15.7156,69.5499],[-15.4245,69.8397],[-15.0245,70.1685],[-14.7339,70.3891],[-14.4479,70.3539],[-14.2367,70.5174],[-14.0364,70.7261],[-13.8924,70.8158],[-13.3957,70.7716],[-12.9046,70.6977],[-12.2549,70.563],[-12.0094,70.7065],[-11.6689,70.8763],[-11.3563,71.0519],[-11.8649,71.1472],[-12.3591,71.2522],[-12.1057,71.3958],[-11.7138,71.5878],[-11.3695,71.7744],[-10.356,71.6145],[-9.39339,71.4561],[-7.94124,71.2166],[-7.37469,71.1248],[-6.89992,71.2816],[-6.33268,71.3872],[-5.91711,71.4646],[-5.69853,71.5398],[-5.15729,71.431],[-4.74125,71.3332],[-4.36039,71.4324],[-4.07245,71.4905],[-3.69231,71.398],[-2.93661,71.5002],[-2.39894,71.5917],[-1.74252,71.6851],[-0.975025,71.8151],[-0.392476,71.9105],[0.281065,72.0148],[0.900715,72.1337],[1.99058,72.3278],[2.78103,72.4331],[3.60937,72.5801],[4.2999,72.697],[4.96961,72.8205],[5.58598,72.9243],[6.05514,73.0188],[6.78173,73.1448],[7.07072,73.2035],[7.391,73.2524],[7.79122,73.3712],[8.15023,73.4272],[8.38583,73.4853],[8.65212,73.5335],[8.83803,73.6282],[8.95698,73.7064],[9.03691,73.7585],[9.13963,73.882],[9.20295,73.9795],[9.20769,74.0964],[9.15258,74.2327],[9.13259,74.3772],[8.98399,74.5426],[8.78099,74.7631],[8.63037,74.9462],[8.46028,75.0755],[8.2122,75.1882],[7.94643,75.3817],[7.84163,75.5273],[7.60333,75.7289],[7.59292,75.9807],[7.51523,76.1167],[7.48044,76.279],[7.55713,76.4307],[7.56302,76.6015],[7.61545,76.7985],[7.62226,76.9692],[7.67201,77.1484],[7.809,77.4791],[7.88003,77.7119],[7.77119,77.9112],[7.82691,78.0903],[7.78484,78.2347],[6.77554,78.4438],[5.59209,78.641],[4.69068,78.8058],[3.85706,78.95],[3.43173,79.0302],[3.90068,79.228],[4.39026,79.5327],[3.29588,79.6575],[2.37761,79.7797],[1.4866,79.9085],[0.627928,80.0264],[-0.250723,80.1421],[-0.968769,80.2132],[-1.76559,80.3085],[-2.34079,80.3704],[-1.68388,80.6248],[-2.94156,80.7555],[-3.36375,80.7922],[-2.77949,80.9929],[-2.41413,81.1256],[-3.45411,81.2505],[-4.64116,81.3697],[-4.15208,81.5521],[-3.90911,81.6203],[-5.03297,81.9128],[-4.53664,82.0501],[-3.79607,82.2903],[-3.69993,82.3281],[-5.00975,82.5194],[-5.86541,82.6912],[-7.2124,82.8685],[-6.2343,83.0004],[-5.15419,83.2491],[-4.14804,83.4296],[-3.20433,83.5703],[-2.36257,83.6896],[-1.20617,83.8642],[-0.469122,83.9965],[0.404991,84.1017],[1.30114,84.2233],[2.23513,84.3435],[3.02402,84.4618],[3.84819,84.5611],[4.03467,84.5969],[4.50755,84.5702],[5.1775,84.6321],[6.6654,84.7622],[8.13393,84.8982],[8.93766,85.0094],[9.8085,84.9579],[10.6588,85.067],[11.7036,85.1373],[13.242,85.2814],[14.6662,85.3797],[16.0626,85.4855],[17.89,85.5912],[19.2845,85.6842],[21.3426,85.7987],[23.347,85.8174],[25.3828,85.8591],[27.4273,85.8674],[28.1433,85.8745],[29.2294,85.8101],[30.9721,85.9083],[33.34,86.0534],[35.6067,86.1607],[38.3013,86.2915],[41.7555,86.4316],[43.4795,86.4958],[46.3137,86.5612],[46.0625,86.5982],[47.5235,86.6406],[50.7696,86.706],[54.5614,86.7459],[58.0178,86.7875],[61.5056,86.8049],[62.4625,86.7548],[66.5438,86.6549],[66.301,86.6065],[69.7522,86.4724],[68.2081,86.3058],[70.9259,86.2026],[72.9842,86.1063],[75.0293,85.9885],[76.326,85.9167],[78.4034,85.7682],[81.1027,85.6388],[83.1425,85.556],[84.8021,85.4998],[86.8021,85.4175],[88.4863,85.3456],[89.9804,85.2957],[92.3129,85.2292],[94.1554,85.1545],[95.8392,85.1018],[97.2727,85.0279],[98.5682,84.9604],[99.4436,84.9108],[102.918,84.6639],[103.943,84.5785],[105.302,84.4855],[106.759,84.3686],[107.709,84.2946],[108.939,84.1936],[109.727,84.1097],[110.959,83.9655],[111.974,83.8238],[112.843,83.6744],[113.723,83.5124],[114.558,83.3209],[115.258,83.1508],[115.793,83.0141],[116.582,82.7402],[117.171,82.5394],[117.755,82.2981],[119.1,82.0874],[119.984,81.5953],[121.004,81.1146],[121.898,80.6434],[122.639,80.2061],[123.408,79.7593],[125.188,78.9901],[125.679,78.1326]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NA-EU","Source":"Mueller et al. [1987]","PlateA":"NA","PlateB":"EU","Type":""},"geometry":{"type":"LineString","coordinates":[[-29.7698,39.3996],[-29.6089,39.9928],[-29.6127,40.0328],[-29.5802,40.0788],[-29.5881,40.1065],[-29.6565,40.1068],[-29.6398,40.2082],[-29.6313,40.2851],[-29.5984,40.3835],[-29.5695,40.4695],[-29.577,40.5495],[-29.5605,40.5987],[-29.346,40.5699],[-29.2999,40.705],[-29.2777,40.871],[-29.256,40.9847],[-29.242,41.1261],[-29.2286,41.2153],[-29.3223,41.2467],[-29.292,41.3849],[-29.2452,41.52],[-29.206,41.6828],[-29.2003,41.7997],[-29.1616,41.9101],[-29.2606,41.9294],[-29.242,42.0831],[-29.2449,42.1754],[-29.2233,42.2368],[-29.2226,42.2891],[-29.4347,42.2905],[-29.3918,42.4133],[-29.3696,42.5271],[-29.3394,42.613],[-29.3177,42.6744],[-29.3214,42.7145],[-29.3715,42.724],[-29.3492,42.8378],[-29.3268,42.9515],[-29.3175,43.0284],[-29.3168,43.0807],[-29.1736,43.0796],[-29.0914,43.2082],[-29.0079,43.389],[-28.9339,43.4929],[-28.8845,43.6278],[-28.8405,43.6981],[-28.7964,43.7684],[-28.5237,43.768],[-28.5131,43.8448],[-28.4809,43.9305],[-28.4827,44.0229],[-28.4549,44.0963],[-28.4364,44.1453],[-28.4349,44.1976],[-28.3666,44.1843],[-28.32,44.3067],[-28.2825,44.4046],[-28.2574,44.518],[-28.215,44.6281],[-28.1676,44.7505],[-28.1438,44.8116],[-28.1421,44.8639],[-28.1057,44.9094],[-28.1575,44.9196],[-28.1385,44.9685],[-28.1146,45.0296],[-28.1002,45.0663],[-28.0763,45.1274],[-27.9945,45.0983],[-27.9877,45.1628],[-27.9857,45.2151],[-27.979,45.2796],[-27.9721,45.3441],[-27.9374,45.3373],[-27.9354,45.3896],[-27.9382,45.4296],[-27.9236,45.4663],[-27.8714,45.4561],[-27.8616,45.4805],[-27.8644,45.5206],[-27.877,45.5362],[-27.8246,45.5259],[-27.7952,45.5992],[-27.7734,45.7003],[-27.7592,45.8293],[-27.7394,45.8782],[-27.6994,45.8835],[-27.6971,45.9358],[-27.6773,45.9846],[-27.602,45.983],[-27.5847,46.0719],[-27.5723,46.1486],[-27.5649,46.2131],[-27.512,46.2027],[-27.4893,46.3037],[-27.4868,46.356],[-27.4717,46.485],[-27.4463,46.6383],[-27.4437,46.6906],[-27.436,46.7551],[-27.3775,46.7568],[-27.3774,46.8491],[-27.3466,46.9223],[-27.3336,46.999],[-27.3819,47.114],[-27.4407,47.2047],[-27.4741,47.264],[-27.4612,47.3406],[-27.4585,47.3929],[-27.4636,47.4731],[-27.4429,47.5219],[-27.448,47.602],[-27.4635,47.6578],[-27.5644,47.6508],[-27.5905,47.7746],[-27.6218,47.8861],[-27.6351,47.9942],[-27.6536,48.09],[-27.7036,48.205],[-27.7118,48.3252],[-27.7306,48.421],[-27.7494,48.5169],[-27.7602,48.5848],[-27.8895,48.6089],[-28.0108,48.605],[-28.0353,48.6885],[-28.0868,48.8034],[-28.1622,48.9093],[-28.2058,48.9962],[-28.2631,49.0987],[-28.3174,49.1611],[-28.353,49.2201],[-28.4262,49.2858],[-28.4518,49.3693],[-28.4861,49.4806],[-28.5446,49.583],[-28.5619,49.6386],[-28.7183,49.6528],[-28.8181,49.657],[-28.8686,49.7314],[-28.8952,49.8148],[-28.96,49.9047],[-28.9868,49.988],[-28.9947,50.0681],[-29.0217,50.1515],[-29.1265,50.1954],[-29.1982,50.2206],[-29.3218,50.3199],[-29.4266,50.4159],[-29.5081,50.4686],[-29.5368,50.4995],[-29.6619,50.5984],[-29.768,50.6941],[-29.8309,50.7435],[-29.8746,50.7897],[-29.9085,50.8605],[-29.9425,50.9313],[-29.9815,50.9898],[-29.9765,51.1067],[-30.001,51.2544],[-29.9961,51.4236],[-30.001,51.6205],[-30.006,51.7652],[-30.011,51.8575],[-30.0361,51.9528],[-30.0262,52.0297],[-30.3764,52.0568],[-30.8074,52.0945],[-31.0579,52.1048],[-31.2684,52.1089],[-31.2527,52.2628],[-31.2651,52.3427],[-31.2573,52.4197],[-31.5817,52.4649],[-31.866,52.5038],[-32.0535,52.516],[-32.3589,52.5564],[-32.6486,52.581],[-32.857,52.5946],[-33.0204,52.6151],[-33.3354,52.6281],[-33.7119,52.6477],[-34.1745,52.663],[-34.5719,52.6822],[-34.9248,52.708],[-34.8837,52.7036],[-35.0107,52.7044],[-35.1376,52.7051],[-35.1561,52.8611],[-35.1613,52.9901],[-35.1837,53.1336],[-35.1828,53.2105],[-35.3248,53.238],[-35.2818,53.3875],[-35.2565,53.4747],[-35.2457,53.5121],[-35.4517,53.5459],[-35.395,53.6684],[-35.3272,53.8282],[-35.2698,53.9507],[-35.2012,54.1105],[-35.1469,54.2204],[-35.121,54.3076],[-35.3132,54.3269],[-35.4878,54.3313],[-35.4123,54.5161],[-35.3651,54.6781],[-35.289,54.786],[-35.2739,54.9127],[-35.212,54.9707],[-35.3386,54.9959],[-35.2508,55.1412],[-35.1732,55.3259],[-35.0804,55.4835],[-34.9717,55.6909],[-34.9006,55.7738],[-34.8774,55.8485],[-34.6376,55.8119],[-34.6203,55.9386],[-34.5583,56.0608],[-34.5104,56.2101],[-34.4927,56.3368],[-34.4604,56.4363],[-34.4402,56.4985],[-34.346,56.502],[-34.3214,56.5766],[-34.2474,56.6592],[-34.2185,56.7462],[-34.0724,56.7388],[-34.043,56.7799],[-34.0035,56.8274],[-33.9781,56.9019],[-33.7961,56.8833],[-33.6824,56.8715],[-33.5871,56.8745],[-33.5662,57.001],[-33.5354,57.088],[-33.509,57.1625],[-33.4966,57.2643],[-33.3773,57.2647],[-33.2031,57.2849],[-33.0703,57.4512],[-33.0104,57.548],[-32.9641,57.6076],[-32.9177,57.6671],[-32.8065,57.6422],[-32.7082,57.7735],[-32.6188,57.88],[-32.4918,57.9566],[-32.4724,58.0062],[-32.2805,57.9979],[-32.1225,58.1484],[-31.9835,58.2492],[-31.8723,58.3402],[-31.7996,58.3967],[-31.7451,58.4683],[-31.556,58.4466],[-31.4274,58.5743],[-31.3031,58.6896],[-31.178,58.8048],[-31.0392,58.8923],[-30.977,58.9759],[-30.7911,58.9408],[-30.6466,59.0925],[-30.4527,59.2383],[-30.3055,59.3897],[-30.163,59.5286],[-30.0429,59.6182],[-29.8495,59.7508],[-29.6362,59.8678],[-29.5075,59.9692],[-29.3717,60.0827]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA\\\\OK","Source":"Mueller et al. [1987]","PlateA":"PA","PlateB":"OK","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[144.454,40.847],[144.479,40.5494],[144.399,40.3668],[144.328,40.2029],[144.283,40.0672],[144.254,39.9281],[144.225,39.7667],[144.236,39.5572],[144.203,39.3737],[144.189,39.1233],[144.119,38.9086],[144.061,38.7095],[144.017,38.5356],[143.973,38.3585],[143.928,38.1655],[143.888,37.9281],[143.843,37.7097],[143.743,37.4792],[143.637,37.2899],[143.518,37.0594],[143.408,36.8604],[143.275,36.6488],[143.151,36.5195],[143.02,36.3393],[142.887,36.2636],[142.761,36.1878],[142.681,36.0642],[142.606,36.0009],[142.555,35.9438],[142.46,35.673],[142.325,35.5027],[142.221,35.3333],[142.17,35.2168],[142.067,35.1636],[142.029,34.8886],[141.992,34.6663],[141.883,34.2127]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-JF","Source":"Mueller et al. [1987]; N end by Peter Bird, 1999","PlateA":"PA","PlateB":"JF","Type":""},"geometry":{"type":"LineString","coordinates":[[-124.742,40.3134],[-125.45,40.3541],[-126.159,40.3904],[-126.869,40.4224],[-127.579,40.45],[-127.579,40.5385],[-127.717,40.5726],[-127.639,41.0807],[-127.56,41.5888],[-127.446,41.5551],[-127.401,41.6405],[-127.241,41.6921],[-127.039,42.357],[-126.627,43.0136],[-127.571,43.4195],[-128.528,43.8176],[-129.498,44.2075],[-130.48,44.5892],[-130.367,44.9295],[-130.069,45.2854],[-130.187,45.414],[-129.936,45.7362],[-129.869,45.896],[-130.073,45.9427],[-130.051,46.1958],[-129.917,46.2291],[-129.803,46.4332],[-129.572,46.4015],[-129.259,47.0647],[-128.938,47.727],[-129.19,47.8354],[-128.94,48.3236],[-129.147,48.476],[-128.919,48.8687],[-129.705,49.1768],[-130.501,49.4794],[-130.162,49.9827],[-130.3,50.0554],[-130.162,50.2172],[-130.329,50.2979],[-130.254,50.4647],[-130.753,50.9076],[-131.074,51.1851],[-130.85,51.6121]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"JF\\\\NA","Source":"by Peter Bird, 1999","PlateA":"JF","PlateB":"NA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-124.742,40.3134],[-124.953,40.6333],[-124.933,40.8839],[-125.089,41.1354],[-125.182,41.3801],[-125.309,41.6522],[-125.281,41.8176],[-125.313,41.9856],[-125.331,42.1419],[-125.29,42.2845],[-125.209,42.3588],[-125.198,42.4917],[-125.268,42.5614],[-125.289,42.8624],[-125.289,43.0514],[-125.343,43.1426],[-125.394,43.2671],[-125.474,43.426],[-125.48,43.7375],[-125.45,43.9254],[-125.429,44.0023],[-125.362,44.0663],[-125.372,44.3226],[-125.372,44.5227],[-125.376,44.6675],[-125.434,44.7254],[-125.437,44.8813],[-125.435,45.1036],[-125.517,45.4738],[-125.655,45.9461],[-125.773,46.295],[-125.876,46.6433],[-125.998,46.9697],[-126.085,47.3503],[-126.37,47.748],[-126.486,47.9956],[-126.733,48.291],[-127.018,48.5646],[-127.378,48.7502],[-127.608,48.8768],[-127.818,49.0802],[-127.852,49.4906],[-128.029,49.7814],[-128.283,49.8847],[-128.414,50.0856],[-128.719,50.3103],[-129.01,50.4787],[-129.46,50.6472],[-129.738,50.8359],[-129.982,51.1013],[-130.212,51.2777],[-130.548,51.3981],[-130.85,51.6121]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"OK/PA","Source":"by Peter Bird, 1999","PlateA":"OK","PlateB":"PA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[144.454,40.847],[145.077,41.3192],[145.71,41.788],[146.198,42.0762],[146.69,42.3623],[147.345,42.6851],[148.34,43.2079],[149.311,43.7205],[150.339,44.1874],[150.877,44.447],[151.419,44.704],[152.24,45.1576],[152.88,45.5293],[153.528,45.8973],[154.195,46.44],[154.664,46.8526],[155.141,47.2632],[155.742,47.7246],[156.353,48.1828],[157.024,48.6594],[157.568,49.1072],[158.121,49.5524],[158.644,49.8546],[159.174,50.1545],[159.877,50.8551],[160.599,51.4877],[160.945,52.1588],[161.584,52.654],[162.458,53.0032],[162.79,53.6249],[163.282,54.3468],[163.67,54.7786],[164.066,55.2092]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NA/PA","Source":"by Peter Bird, September 2001","PlateA":"NA","PlateB":"PA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-180,50.50297],[-179.202,50.4965],[-178.48,50.4903],[-177.758,50.4842],[-177.088,50.496],[-176.223,50.5883],[-175.629,50.7447],[-174.907,50.8258],[-174.119,50.8963],[-173.328,50.9636],[-172.484,51.0693],[-171.634,51.1706],[-170.897,51.3061],[-170.159,51.4395],[-169.378,51.6322],[-168.972,51.74],[-167.99,52.0007],[-166.819,52.2568],[-166.108,52.4527],[-165.39,52.6443],[-164.665,52.8183],[-163.934,52.9879],[-163.177,53.18],[-162.413,53.3672],[-161.664,53.4964],[-160.91,53.6209],[-160.129,53.7408],[-159.344,53.8555],[-157.986,54.1008],[-157.067,54.3175],[-156.138,54.5272],[-155.239,54.7845],[-154.16,55.239],[-153.164,55.6104],[-152.227,56.0583],[-151.218,56.3092],[-150.547,56.4994],[-150.081,56.6229],[-149.22,56.9251],[-148.257,57.3469],[-147.449,57.8319],[-146.759,58.3521],[-146.264,58.8138],[-145.756,59.2735]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NA/PA","Source":"by Peter Bird, September 2001","PlateA":"NA","PlateB":"PA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[164.066,55.2092],[164.847,54.957],[165.771,54.5884],[166.407,54.2367],[167.413,53.906],[168.188,53.5694],[168.836,53.2079],[169.752,52.8555],[170.7,52.4979],[171.847,52.0259],[172.964,51.6839],[174.219,51.403],[175.571,51.1082],[176.72,50.8959],[177.68,50.6976],[178.498,50.6189],[179.688,50.5055],[180,50.50297]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NA/PA","Source":"by Peter Bird, September 2001","PlateA":"NA","PlateB":"PA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-180,50.50297],[-179.202,50.4965],[-178.48,50.4903],[-177.758,50.4842],[-177.088,50.496],[-176.223,50.5883],[-175.629,50.7447],[-174.907,50.8258],[-174.119,50.8963],[-173.328,50.9636],[-172.484,51.0693],[-171.634,51.1706],[-170.897,51.3061],[-170.159,51.4395],[-169.378,51.6322],[-168.972,51.74],[-167.99,52.0007],[-166.819,52.2568],[-166.108,52.4527],[-165.39,52.6443],[-164.665,52.8183],[-163.934,52.9879],[-163.177,53.18],[-162.413,53.3672],[-161.664,53.4964],[-160.91,53.6209],[-160.129,53.7408],[-159.344,53.8555],[-157.986,54.1008],[-157.067,54.3175],[-156.138,54.5272],[-155.239,54.7845],[-154.16,55.239],[-153.164,55.6104],[-152.227,56.0583],[-151.218,56.3092],[-150.547,56.4994],[-150.081,56.6229],[-149.22,56.9251],[-148.257,57.3469],[-147.449,57.8319],[-146.759,58.3521],[-146.264,58.8138],[-145.756,59.2735]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NA-PA","Source":"by Peter Bird, 1999","PlateA":"NA","PlateB":"PA","Type":""},"geometry":{"type":"LineString","coordinates":[[-145.756,59.2735],[-144.977,59.5759],[-144.316,59.9182],[-143.332,60.2057],[-142.405,60.465],[-141.598,60.4009],[-141.074,60.3099],[-140.128,60.3809],[-139.396,60.0897],[-138.86,59.7619],[-138.353,59.3357],[-137.819,58.9251],[-137.107,58.4379],[-136.895,58.0895],[-136.522,57.6342],[-136.209,57.1178],[-135.903,56.621],[-135.429,56.1024],[-135.18,55.8186],[-134.669,55.3165],[-134.151,54.8122],[-133.84,54.3774],[-133.426,53.9241],[-133.093,53.5217],[-132.714,53.127],[-132.169,52.6971],[-131.592,52.2591],[-131.177,51.8858],[-130.85,51.6121]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NA-PA","Source":"by Peter Bird, 1999","PlateA":"NA","PlateB":"PA","Type":""},"geometry":{"type":"LineString","coordinates":[[-124.742,40.3134],[-124.416,40.3107],[-124.163,39.9142],[-123.89,39.4388],[-123.597,38.9971],[-123.305,38.5406],[-122.696,37.874],[-122.38,37.527],[-122.005,37.2048],[-121.305,36.6983],[-120.897,36.3377],[-120.438,35.9102],[-119.936,35.4502],[-119.329,34.9812],[-118.912,34.8373],[-118.4,34.658],[-118.072,34.5641],[-117.746,34.4412],[-117.507,34.3498],[-117.159,34.1811],[-116.66,34.0424],[-116.209,33.7711],[-115.773,33.4211]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NA-PA","Source":"Mueller et al. [1987]","PlateA":"NA","PlateB":"PA","Type":""},"geometry":{"type":"LineString","coordinates":[[-115.773,33.4211],[-115.596,33.2366],[-115.717,33.1297],[-115.594,33.0402],[-115.508,32.9581],[-115.581,32.876],[-115.412,32.71],[-115.212,32.5118],[-115.33,32.4183],[-115.085,32.2359],[-114.765,31.9952],[-114.522,31.786],[-114.332,31.6016],[-114.207,31.4585],[-114.118,31.3557],[-114.33,31.1936],[-114.439,31.0972],[-114.303,30.9123],[-114.129,30.6797],[-113.986,30.5134],[-113.807,30.3135],[-114.041,30.1205],[-113.909,29.982],[-113.758,29.8344],[-113.87,29.7298],[-113.969,29.6458],[-113.775,29.4397],[-113.521,29.2054],[-113.281,29.0084],[-113.339,28.9498],[-113.087,28.7147],[-112.812,28.4987],[-112.589,28.3223],[-112.321,28.1249],[-112.015,27.906],[-111.711,27.6935],[-111.506,27.57],[-111.382,27.4969],[-111.569,27.2152],[-111.373,27.1053],[-111.506,26.9267],[-111.228,26.7234],[-110.957,26.535],[-110.758,26.4159],[-110.68,26.3605],[-110.778,26.2249],[-110.572,26.0661],[-110.291,25.8895],[-110.024,25.7063],[-109.872,25.6073],[-109.806,25.5567],[-110.007,25.3392],[-109.788,25.1797],[-109.591,25.0163],[-109.35,24.8568],[-109.178,24.7348],[-109.062,24.6582],[-109.276,24.396],[-109.002,24.1515],[-108.806,23.9844],[-108.61,23.8141],[-108.439,23.6743],[-108.357,23.6135],[-108.651,23.2413],[-108.388,23.0822],[-108.01,22.9857],[-108.232,22.7117]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NA-SA","Source":"by Peter Bird, September 2001","PlateA":"NA","PlateB":"SA","Type":""},"geometry":{"type":"LineString","coordinates":[[-61.5534,18.9589],[-60.7526,19.2082],[-59.9491,19.4547],[-59.1305,19.3251],[-58.309,19.1922],[-57.4928,19.052],[-56.8045,18.6941],[-56.1185,18.2576],[-55.4838,17.7843],[-54.8525,17.309],[-54.1555,17.1359],[-53.4599,16.9565],[-52.8812,16.7607],[-52.3037,16.567],[-51.661,16.321],[-51.0241,16.0729],[-50.4668,15.8704],[-49.8027,15.983],[-49.2071,16.0346],[-48.5146,16.0126],[-47.693,15.9566],[-47.3984,15.8043],[-46.7658,15.4506]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NZ-PA","Source":"Mueller et al. [1987]; Naar and Hey [1991]","PlateA":"NZ","PlateB":"PA","Type":""},"geometry":{"type":"LineString","coordinates":[[-102.319,-0.015477],[-102.397,-0.503231],[-102.524,-1.28284],[-102.399,-1.28336],[-102.462,-1.53269],[-102.307,-1.59589],[-102.402,-1.90746],[-102.621,-1.90611],[-102.687,-2.43571],[-102.754,-2.93392],[-102.566,-2.93572],[-102.571,-3.43472],[-102.735,-4.05639],[-103.637,-3.95089],[-104.539,-3.8444],[-104.699,-4.15158],[-105.38,-4.07847],[-105.544,-4.56935],[-106.253,-4.49391],[-106.45,-5.04324],[-106.587,-5.62383],[-106.741,-5.6199],[-106.752,-6.01875],[-106.845,-6.0162],[-106.95,-6.44278],[-107.441,-6.3667],[-107.607,-6.75924],[-107.653,-7.18594],[-107.88,-7.51409],[-108.063,-8.24014],[-108.192,-8.35695],[-108.32,-9.14481],[-109.038,-9.03537],[-109.756,-8.92454],[-109.857,-9.67656],[-110.071,-9.66505],[-110.218,-10.0804],[-110.292,-10.8017],[-110.447,-10.8224],[-110.485,-11.3942],[-110.675,-11.4724],[-110.926,-11.9684],[-111.077,-12.7417],[-110.892,-12.7553],[-111.007,-13.4108],[-111.191,-13.3964],[-111.266,-13.5413],[-111.846,-13.4645],[-112.426,-13.3863],[-112.439,-13.8646],[-112.581,-14.0619],[-112.613,-14.718],[-112.766,-14.7038],[-112.869,-15.2478],[-112.973,-15.7917],[-113.066,-16.3513],[-112.973,-16.3609],[-113.165,-16.6703],[-113.041,-16.6834],[-113.241,-17.0515],[-113.117,-17.065],[-113.329,-17.5211],[-113.174,-17.5384],[-113.388,-17.9938],[-113.264,-18.0081],[-113.383,-18.4442],[-113.52,-18.7579],[-113.364,-18.7766],[-113.623,-19.2852],[-113.498,-19.3006],[-113.697,-19.9675],[-113.796,-20.321],[-113.931,-20.5745],[-114.087,-20.5993],[-114.229,-21.1213],[-114.318,-21.5636],[-114.379,-21.627],[-114.421,-22.1145]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NZ\\\\SA","Source":"by Peter Bird, 1999","PlateA":"NZ","PlateB":"SA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-76.0062,-45.6585],[-75.8214,-44.8494],[-75.7824,-44.0506],[-75.6316,-43.6482],[-75.558,-42.9722],[-75.4017,-42.2845],[-75.3969,-41.8256],[-75.3922,-41.3666],[-75.1889,-40.8628],[-75.1948,-40.3589],[-75.1278,-39.8131],[-75.1495,-39.5644],[-74.9883,-39.0681],[-74.8359,-38.542],[-74.6548,-38.1376],[-74.5956,-37.5635],[-74.4416,-36.7249],[-74.2617,-36.1653],[-73.8974,-35.5777],[-73.6755,-34.8876],[-73.2457,-34.2904],[-72.9375,-33.8369],[-72.861,-33.3585],[-72.889,-32.7419],[-72.7622,-32.3188],[-72.6783,-31.5313],[-72.6181,-30.9652],[-72.5999,-30.1903],[-72.5546,-29.5357],[-72.4332,-28.9014],[-72.1698,-28.2776],[-71.9578,-27.7547],[-71.8471,-27.2478],[-71.7525,-26.6522],[-71.6283,-25.8397],[-71.5243,-25.0928],[-71.4659,-24.2626],[-71.3895,-23.5227],[-71.3475,-22.7584],[-71.3068,-21.9654]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NZ\\\\AP","Source":"by Peter Bird, 1999","PlateA":"NZ","PlateB":"AP","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-71.3068,-21.9654],[-71.2495,-21.2622],[-71.3228,-20.7577],[-71.3623,-20.2491],[-71.4865,-19.8112],[-71.7465,-19.2981],[-72.2664,-18.7215],[-72.7366,-18.2567],[-73.3997,-17.747],[-73.9493,-17.3735],[-74.6095,-16.823],[-75.2923,-16.3302],[-75.9163,-15.7355]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NZ\\\\SA","Source":"by Peter Bird, 1999","PlateA":"NZ","PlateB":"SA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-75.9163,-15.7355],[-76.4029,-15.2185],[-76.7648,-14.8433],[-77.1254,-14.4675],[-77.6388,-13.9136],[-78.1476,-13.3872],[-78.4069,-13.0144],[-78.6654,-12.6414],[-79.1472,-11.8903],[-79.6181,-11.2906],[-79.9966,-10.5603],[-80.3684,-9.92089],[-80.701,-9.434],[-81.0406,-8.6654],[-81.3747,-7.98838],[-81.5492,-7.30604],[-81.784,-6.65544],[-81.9541,-6.00265],[-81.9985,-5.2534],[-82.0098,-4.50353],[-81.9258,-3.72131],[-81.5989,-3.24451]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NZ\\\\ND","Source":"by Peter Bird, 1999","PlateA":"NZ","PlateB":"ND","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-81.5989,-3.24451],[-81.6519,-3.00021],[-81.5318,-2.43745],[-81.5985,-1.81384],[-81.4146,-1.09547],[-81.2294,-0.284454],[-80.8866,0.43189],[-80.5738,1.05338],[-80.2917,1.54938],[-79.7913,2.07369],[-79.478,2.42697],[-79.1646,2.78019],[-78.6617,3.39204],[-78.3419,4.06591],[-78.08,4.83152],[-77.9101,5.50529],[-78.008,6.00453]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"ON/PS","Source":"by Peter Bird, May 2002","PlateA":"ON","PlateB":"PS","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[128.462,25.4576],[128.978,25.8591],[129.36,26.1908],[129.785,26.6709],[130.211,27.2135],[130.523,27.7094],[130.649,28.1358],[131.097,28.3182],[131.309,28.4508],[131.467,28.7508],[131.524,28.8591],[131.628,28.9874],[131.76,29.3921],[132.073,29.8177],[132.402,30.2149],[132.63,30.4926],[132.824,30.7544]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AM/PS","Source":"by Peter Bird, September 2001","PlateA":"AM","PlateB":"PS","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[132.824,30.7544],[132.965,30.9698],[133.197,31.2162],[133.5,31.5152],[134.042,31.8821],[134.691,32.1997],[135.026,32.3264],[135.356,32.46],[135.612,32.5372],[136.025,32.686],[136.524,32.8681],[137.03,33.0526],[137.546,33.4046],[138.066,33.7495],[138.383,34.059],[138.508,34.5822],[138.674,35.0337]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"OK-PS","Source":"by Peter Bird, September 2001","PlateA":"OK","PlateB":"PS","Type":""},"geometry":{"type":"LineString","coordinates":[[138.674,35.0337],[139.234,35.0141],[139.429,34.8599],[139.923,34.7126],[140.44,34.631],[140.87,34.5295],[141.104,34.4389],[141.441,34.3565],[141.883,34.2127]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PS-CL","Source":"by Peter Bird, 1999","PlateA":"PS","PlateB":"CL","Type":""},"geometry":{"type":"LineString","coordinates":[[134.521,6.99019],[135.415,6.89507],[136.183,6.98895],[136.759,7.36771],[137.144,7.61961],[137.529,7.87117],[137.982,8.5336],[138.309,9.19616],[138.359,9.37865]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PS/PA","Source":"by Peter Bird, 1999","PlateA":"PS","PlateB":"PA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[138.359,9.37865],[138.574,9.95256],[138.71,10.6492],[138.813,11.1214],[139.483,10.9006],[140.1,10.9459],[140.772,10.8578],[141.608,11.0581],[142.122,11.2852],[142.961,11.4031],[143.097,11.5689]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"MA/PA","Source":"by Peter Bird, October 2001","PlateA":"MA","PlateB":"PA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[143.097,11.5689],[143.503,11.4936],[144.157,11.7896],[144.619,12.0206],[145.024,12.2112],[145.349,12.3141],[145.691,12.6466],[146.221,13.0015],[146.752,13.3632],[147.201,14.2158],[147.462,14.9661],[147.684,15.653],[147.787,16.5234],[147.856,17.2831],[147.811,18.0602],[147.82,18.6465],[147.619,19.1724],[147.46,19.7452],[147.207,20.3034],[147.019,20.8051],[146.822,21.3306],[146.545,21.7298],[146.062,22.2015],[145.292,22.7123],[144.706,23.2501],[144.022,23.7644],[143.522,24.3908]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PS/PA","Source":"by Peter Bird, 1999","PlateA":"PS","PlateB":"PA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[143.522,24.3908],[143.096,24.9092],[143.098,24.9176],[143.075,25.6124],[143.231,26.3289],[143.26,26.737],[143.243,27.4633],[143.172,27.9407],[143.002,28.5187],[142.748,28.9754],[142.507,29.6208],[142.473,30.1282],[142.224,30.711],[142.159,31.3152],[142.099,31.9825],[141.994,32.5576],[142.012,33.2525],[141.858,33.7039],[141.883,34.2127]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"KE-TO","Source":"by Peter Bird, 2001","PlateA":"KE","PlateB":"TO","Type":""},"geometry":{"type":"LineString","coordinates":[[-174.985,-23.7499],[-175.691,-23.8526],[-176.356,-23.952],[-176.887,-24.0295],[-177.419,-24.1051]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NI-FT","Source":"Zellmer and Taylor [2001]","PlateA":"NI","PlateB":"FT","Type":""},"geometry":{"type":"LineString","coordinates":[[-176.346,-14.634],[-176.339,-14.7803],[-176.319,-14.904],[-176.331,-15.0501],[-176.341,-15.1836],[-176.387,-15.3117],[-176.462,-15.4194],[-176.526,-15.4894],[-176.66,-15.6041],[-177.13,-15.5594]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NI-AU","Source":"Zellmer and Taylor [2001]","PlateA":"NI","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[-177.13,-15.5594],[-177.248,-15.7096],[-177.384,-15.8066],[-177.493,-15.8989],[-177.575,-15.9611],[-177.634,-16.0236],[-177.664,-16.1065],[-177.678,-16.1769],[-177.513,-16.3196],[-177.364,-16.437],[-177.201,-16.5746],[-177.068,-16.7246],[-176.921,-16.8772],[-176.82,-17.0344],[-176.713,-17.2194],[-176.625,-17.3992],[-176.532,-17.574],[-176.462,-17.731],[-176.403,-17.8727],[-176.304,-18.0551],[-176.297,-18.1308],[-176.33,-18.2666],[-176.346,-18.3068],[-176.44,-18.4723],[-176.511,-18.6002],[-176.551,-18.6855],[-176.584,-18.7684],[-176.587,-18.8364],[-176.57,-18.9752],[-176.549,-19.2174],[-175.979,-19.3865]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"TO-NI","Source":"Zellmer and Taylor [2001]","PlateA":"TO","PlateB":"NI","Type":""},"geometry":{"type":"LineString","coordinates":[[-173.836,-14.5338],[-173.905,-14.629],[-174.007,-14.7666],[-174.077,-14.8946],[-174.139,-15.015],[-174.188,-15.133],[-174.264,-15.3138],[-174.567,-15.2505],[-174.667,-15.3705],[-174.731,-15.4708],[-174.822,-15.6161],[-174.866,-15.7392],[-174.87,-15.8804],[-174.601,-15.9358],[-174.568,-16.0521],[-174.569,-16.2008],[-174.576,-16.3545],[-174.55,-16.5967],[-174.535,-16.7355],[-174.529,-16.8742],[-174.523,-17.0658],[-174.565,-17.1007],[-174.599,-17.3197],[-174.571,-17.3603],[-174.597,-17.6122],[-174.56,-17.6301],[-174.568,-17.8418],[-174.659,-18.0351],[-174.757,-18.2308],[-174.87,-18.4163],[-174.956,-18.6045],[-175.035,-18.7878],[-175.095,-19.0015],[-175.155,-19.2253],[-175.189,-19.4594],[-175.21,-19.7037],[-175.979,-19.3865]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"TO-AU","Source":"Zellmer and Taylor [2001]","PlateA":"TO","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[-175.979,-19.3865],[-176.027,-19.6508],[-176.079,-19.8141],[-176.122,-19.8843],[-176.182,-20.1056],[-176.116,-20.1289],[-176.152,-20.2647],[-176.159,-20.4234],[-176.176,-20.4939],[-176.19,-20.655],[-176.237,-20.7958],[-176.264,-20.8913],[-176.289,-20.9995],[-176.322,-21.1126],[-176.372,-21.3012],[-176.405,-21.4874],[-176.449,-21.6005],[-176.52,-21.8115],[-176.601,-22.0074],[-176.635,-22.2314],[-176.691,-22.2864],[-176.709,-22.5005],[-176.748,-22.7345],[-176.913,-23.0481],[-177.102,-23.4144],[-177.25,-23.7079],[-177.419,-24.1051]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SC/AN","Source":"Klepeis and Lawver, 1996","PlateA":"SC","PlateB":"AN","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-76.4833,-52.0684],[-76.3121,-52.9285],[-76.0197,-53.4352],[-75.7203,-53.9412],[-75.2389,-54.2941],[-74.7492,-54.6451],[-74.1202,-55.0037],[-73.4799,-55.359],[-72.9952,-55.6654],[-72.2772,-55.9624],[-71.5481,-56.2552],[-70.4011,-56.622],[-69.2561,-56.8522],[-68.0972,-57.0717],[-67.1018,-57.5019],[-65.8672,-57.7363],[-64.617,-57.9586]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SC-AN","Source":"Klepeis and Lawver, 1996","PlateA":"SC","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[-64.617,-57.9586],[-63.5707,-58.3592],[-62.5714,-58.6029],[-61.0399,-59.0105],[-59.7045,-59.4535],[-58.9698,-59.7285],[-58.223,-59.9993],[-56.925,-60.5647]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SL/AN","Source":"Klepeis and Lawver, 1996","PlateA":"SL","PlateB":"AN","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-56.925,-60.5647],[-57.4938,-60.8546],[-58.1308,-60.9615],[-58.8906,-61.0818],[-59.836,-61.1768],[-60.6502,-61.3632],[-61.3323,-61.5431],[-62.2029,-61.8412],[-63.1053,-62.11],[-63.9693,-62.4224]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SL-AN","Source":"Klepeis and Lawver, 1996","PlateA":"SL","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[-63.9693,-62.4224],[-63.2916,-62.8247],[-62.4198,-63.0013],[-61.7501,-63.2928],[-60.118,-62.9452],[-58.6143,-62.5533],[-57.3896,-62.3038],[-56.3056,-62.0627],[-55.4359,-61.6868],[-54.3007,-61.5102]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SC-SL","Source":"Peter Bird, September 2001","PlateA":"SC","PlateB":"SL","Type":""},"geometry":{"type":"LineString","coordinates":[[-56.925,-60.5647],[-56.2692,-60.7422],[-55.8097,-60.7001],[-55.0666,-60.7631],[-54.309,-60.9776],[-54.3007,-61.5102]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SC-AN","Source":"Klepeis and Lawver, 1996","PlateA":"SC","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[-54.3007,-61.5102],[-53.1221,-61.0366],[-52.0681,-60.7527],[-51.1194,-60.5725],[-50.8871,-60.0936],[-49.5994,-60.0436],[-48.2507,-59.9684],[-46.9632,-59.9598],[-45.6034,-60.0915],[-44.2259,-60.2425]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EU/AF","Source":"Peter Bird, September 2001","PlateA":"EU","PlateB":"AF","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[20,37.9075],[20.3001,37.8039]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AS-AT","Source":"McClusky et al., 2000","PlateA":"AS","PlateB":"AT","Type":""},"geometry":{"type":"LineString","coordinates":[[29.7309,35.4273],[29.3888,35.7284],[29.1369,35.9703],[28.7888,36.3607],[28.4107,36.9833],[28.2545,37.2689],[28.2543,37.5205],[28.278,37.757],[28.1998,37.9645],[27.9538,38.2275],[27.6719,38.4991],[27.138,38.8764],[26.6101,39.298],[26.2562,39.5286],[25.8605,39.7078],[25.4165,40.1564]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AS-EU","Source":"McClusky et al., 2000","PlateA":"AS","PlateB":"EU","Type":""},"geometry":{"type":"LineString","coordinates":[[25.4165,40.1564],[24.931,40.0922],[24.5595,40.0554],[24.0022,39.9178],[23.7866,39.7204],[23.4634,39.2869],[23.212,38.9484],[22.9546,38.599],[22.7272,38.2713],[22.1637,38.3553],[21.5822,38.4205],[21.0967,38.4389],[20.4374,38.4712],[20.2819,38.1148],[20.3001,37.8039]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AR-AF","Source":"McClusky et al., 2000","PlateA":"AR","PlateB":"AF","Type":""},"geometry":{"type":"LineString","coordinates":[[36.4134,36.0232],[36.4315,35.7522],[36.396,35.2854],[36.3249,34.4818],[36.0242,34.0961],[35.7262,33.7097],[35.6483,33.2325],[35.5713,32.7553],[35.4701,32.0035],[35.3089,31.3833],[35.1417,30.7025],[34.9519,30]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AT-AR","Source":"McClusky et al., 2000","PlateA":"AT","PlateB":"AR","Type":""},"geometry":{"type":"LineString","coordinates":[[36.4134,36.0232],[36.3892,36.2596],[36.4665,36.7303],[36.7895,37.3979],[37.0832,37.5118],[37.6822,37.8337],[38.0417,37.9941],[38.3652,38.1214],[38.8565,38.3141],[39.4017,38.497],[40.1627,38.7681],[40.6242,38.8568],[41.0015,39.0799]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EU-AR","Source":"Peter Bird, September 2001","PlateA":"EU","PlateB":"AR","Type":""},"geometry":{"type":"LineString","coordinates":[[41.0015,39.0799],[41.0262,38.8487],[41.2363,38.6156],[41.8391,38.3551],[42.2891,38.2127],[42.7973,37.9905],[43.1758,37.685],[43.6475,37.4066],[44.0195,37.0984],[44.3568,36.5716],[44.5148,36.015],[44.6705,35.4581],[44.8361,35.0245],[45,34.5906]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AT-EU","Source":"McClusky et al., 2000","PlateA":"AT","PlateB":"EU","Type":""},"geometry":{"type":"LineString","coordinates":[[41.0015,39.0799],[40.4492,39.3925],[39.892,39.7025],[39.2684,39.9087],[38.7948,40.0091],[38.0213,40.269],[37.062,40.6003],[36.1686,40.8487],[35.5272,41.0018],[34.8317,41.1231],[34.2864,41.1587],[33.4053,41.0231],[32.3925,40.8601],[31.4817,40.6786],[31.1161,40.6149],[30.7745,40.601],[30.0071,40.7682],[29.0302,40.6861],[28.7245,40.6679],[27.9873,40.6176],[27.5677,40.64],[27.2559,40.7892],[26.5968,40.5532],[26.0097,40.3255],[25.4165,40.1564]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"OK/NA","Source":"by Peter Bird, September 2001","PlateA":"OK","PlateB":"NA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[164.066,55.2092],[163.34,55.817],[162.592,56.4203],[162.96,56.836],[163.336,57.2505],[163.721,57.6638],[164.115,58.076],[164.518,58.4869],[164.93,58.8966],[166.258,59.3762],[167.623,59.842],[169.027,60.2932],[169.865,61.0172],[170.743,61.7358]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"OK-NA","Source":"by Peter Bird, September 2001","PlateA":"OK","PlateB":"NA","Type":""},"geometry":{"type":"LineString","coordinates":[[170.743,61.7358],[169.722,61.6666],[168.706,61.5898],[167.696,61.5055],[166.691,61.4138],[165.013,61.3376],[163.345,61.2409],[162.353,61.2721],[161.359,61.2961],[160.363,61.3128],[159.367,61.3222],[158.045,61.4068],[156.717,61.4785],[155.337,61.6067],[153.946,61.7209],[152.596,62.3526],[151.189,62.9707],[149.721,63.5742],[148.191,64.1621],[146.595,64.7332],[144.932,65.2865]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"OK-EU","Source":"by Peter Bird, September 2001","PlateA":"OK","PlateB":"EU","Type":""},"geometry":{"type":"LineString","coordinates":[[144.932,65.2865],[145.487,64.4376],[146.008,63.5867],[146.499,62.734],[146.963,61.8797],[146.126,61.5698],[145.306,61.2549],[144.502,60.9351],[143.715,60.6107],[142.943,60.2817],[142.187,59.9484],[142.086,59.4786],[141.988,59.0087],[141.893,58.5387],[141.8,58.0686],[141.709,57.5985],[141.621,57.1283],[141.535,56.6581],[141.451,56.1878],[141.7,55.6503],[141.943,55.1123],[142.179,54.5738],[142.409,54.0349]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"OK-AM","Source":"Wei and Seno, 1998; detail by Peter Bird","PlateA":"OK","PlateB":"AM","Type":""},"geometry":{"type":"LineString","coordinates":[[142.409,54.0349],[142.849,53.3843],[142.784,53.0425],[142.692,52.5418],[142.541,51.6998],[142.398,50.8574],[142.521,50.3178],[142.641,49.7781],[142.761,49.2409],[142.878,48.7036],[142.023,48.0512],[141.178,47.3923],[140.553,46.9557],[139.938,46.5157],[139.37,46.224],[139.158,45.9466],[139.038,45.4118],[138.85,44.8113],[138.577,44.2948],[138.563,43.9389],[138.801,43.1922],[138.811,42.7664],[138.824,41.9955],[138.743,41.7693],[138.489,41.4818],[138.475,41.103],[138.756,40.7823],[138.655,40.4744],[138.655,40.0722],[138.352,39.8324],[138.085,39.6594],[137.845,39.4043],[137.774,38.9816],[137.848,38.4846],[137.889,37.8556],[137.902,37.184],[137.854,36.5997],[137.894,36.3109],[138.121,36.0267],[138.259,35.734],[138.421,35.36],[138.674,35.0337]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AM-EU","Source":"by Peter Bird, May 2002","PlateA":"AM","PlateB":"EU","Type":""},"geometry":{"type":"LineString","coordinates":[[142.409,54.0349],[141.278,54.0742],[140.145,54.1028],[139.211,54.3328],[137.918,54.5883],[136.61,54.8299],[135.138,55.0602],[133.65,55.2726],[132.674,55.4913],[131.688,55.7022],[130.747,55.8611],[129.798,56.0127],[128.393,56.4015],[126.96,56.7741],[125.499,57.1299],[124.573,57.1781],[123.645,57.2194],[122.715,57.2538],[121.784,57.2814],[120.851,57.3021],[119.918,57.3159],[119.021,57.1509],[118.133,56.9796],[117.253,56.8021],[116.382,56.6184],[115.015,56.5256],[113.656,56.4179],[112.305,56.2954],[110.924,56.2207],[109.758,55.7616],[109.375,55.3308],[109,54.8989],[108.691,54.1503],[108.393,53.4009],[107.706,53.0813],[107.029,52.7578],[106.362,52.4305],[105.705,52.0994],[105.058,51.7648],[104.42,51.4267],[104.904,50.786],[105.375,50.1433],[105.582,49.2921],[105.781,48.4406],[105.916,47.9102],[106.048,47.3797],[106.177,46.849],[106.304,46.3182],[106.46,45.8748],[106.614,45.4311],[106.765,44.9873],[106.914,44.5432],[107.061,44.099],[107.205,43.6546],[108.131,43.1492],[109.041,42.6365],[109.693,42.07],[110.57,41.6014],[111.435,41.1262],[112.287,40.6446],[112.911,41.0237],[113.542,41.3993],[114.392,41.163],[115.235,40.9206],[115.81,40.5955],[116.379,40.2675],[117.01,40.0571],[117.638,39.8433],[118.245,40.0536],[118.856,40.2608],[119.846,40.6543],[120.848,41.0392],[121.313,41.3292],[121.782,41.6173],[122.255,41.9035],[122.732,42.1878],[123.51,41.5302],[124.272,40.8675],[125.019,40.1999],[125.199,39.7415],[125.376,39.2829],[125.551,38.824],[125.723,38.3648],[125.914,37.5413],[126.101,36.7175],[126.115,36.1691],[126.128,35.6207],[126.196,34.9364],[126.263,34.2521]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EU-SU","Source":"by Peter Bird, September 2001","PlateA":"EU","PlateB":"SU","Type":""},"geometry":{"type":"LineString","coordinates":[[96.4803,14.4],[97.39,14.4188],[98.2999,14.434],[99.2098,14.4458],[99.766,14.8381],[100.297,15.4616],[100.832,16.0838],[101.141,16.5753],[101.451,17.0663],[102.032,17.3503],[102.615,17.6327],[103.18,17.6596],[103.746,17.6848],[104.312,17.7085],[104.878,17.7305],[105.817,17.7504],[106.756,17.7659],[107.695,17.7769],[108.634,17.7835],[109.573,17.7855],[110.512,17.7831],[111.04,17.8697],[111.569,17.9548],[112.098,18.0385],[112.628,18.1207],[113.313,18.2804],[114,18.4377]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"YA-SU","Source":"by Peter Bird, September 2001","PlateA":"YA","PlateB":"SU","Type":""},"geometry":{"type":"LineString","coordinates":[[114,18.4377],[114.419,18.8261],[114.926,19.3405],[115.494,19.6873],[116.319,19.8153],[117.145,19.9395],[117.504,20.3301],[117.864,20.7199],[118.045,21.4983],[118.484,22.1067],[118.958,22.0031],[119.618,22.2686],[120.036,21.9509],[120.452,21.6321]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BU-EU","Source":"Circum Pacific Mapping Project, 1986","PlateA":"BU","PlateB":"EU","Type":""},"geometry":{"type":"LineString","coordinates":[[96.4803,14.4],[96.4537,14.9093],[96.4061,15.1355]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"IN-EU","Source":"by Peter Bird, October 2001","PlateA":"IN","PlateB":"EU","Type":""},"geometry":{"type":"LineString","coordinates":[[96.4061,15.1355],[96.4193,15.3962],[96.4472,16.0034],[96.4697,16.6438],[96.4661,17.4351],[96.4207,17.9816],[96.3414,18.7048],[96.2254,19.4119],[96.0158,20.0399],[95.9427,20.9001],[95.9183,21.681],[95.9181,22.3522],[95.9093,23.015],[95.9691,23.7605],[96.1173,24.4801],[96.3104,25.1336],[96.5813,25.6469],[96.9056,26.2874],[97.1304,26.8202],[97.3465,27.2411],[97.4711,27.7024],[97.3484,28.0826]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BU/IN","Source":"Circum Pacific Mapping Project, 1986","PlateA":"BU","PlateB":"IN","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[92.2781,6.94757],[92.3761,6.33253],[92.5375,5.70195],[92.6651,5.00508],[92.903,4.38448],[93.227,3.71599],[93.7535,3.04767],[94.4052,2.45683],[94.9794,2.1041]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BU/AU","Source":"Circum Pacific Mapping Project, 1986","PlateA":"BU","PlateB":"AU","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[94.9794,2.1041],[95.5419,1.88178],[96.0886,1.48729],[96.2019,1.345]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SU/AU","Source":"by Peter Bird, October 2001","PlateA":"SU","PlateB":"AU","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[96.2019,1.345],[96.3795,1.12302],[96.6703,0.758714],[97.0106,0.115925],[97.3722,-0.547177],[97.7695,-1.24714],[98.0354,-1.63424],[98.3013,-2.02129],[98.8744,-2.665],[99.3699,-3.3115],[99.6748,-3.72852],[99.98,-4.14544],[100.359,-4.65588],[100.791,-5.30492],[101.346,-5.98298],[101.858,-6.55836],[102.452,-7.19719],[103.183,-7.62145],[103.763,-7.86277],[104.576,-8.16657]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EU-YA","Source":"by Peter Bird, May 2002","PlateA":"EU","PlateB":"YA","Type":""},"geometry":{"type":"LineString","coordinates":[[114,18.4377],[113.759,18.863],[113.517,19.288],[113.274,19.7126],[113.03,20.1369],[112.784,20.5609],[112.537,20.9845],[112.288,21.4078],[112.038,21.8307],[111.175,22.1652],[110.308,22.4951],[109.436,22.8203],[108.561,23.1408],[107.681,23.4564],[107.132,24.0524],[106.578,24.6464],[106.018,25.2383],[105.72,25.7969],[105.419,26.3549],[105.182,27.1169],[104.942,27.8784],[105.17,28.3343],[105.399,28.7898],[106.262,29.2543],[107.133,29.7132],[108.043,30.0049],[108.959,30.2903],[109.88,30.5693],[110.806,30.8418],[111.209,31.2517],[111.615,31.6603],[111.633,32.2519],[111.651,32.8434],[112.274,33.4649],[112.905,34.0833],[113.25,34.469],[113.599,34.8538],[114.28,34.8426],[114.96,34.8277],[115.746,34.2128],[116.521,33.593],[117.284,32.9684],[117.719,32.5725],[118.15,32.1751],[118.577,31.7763],[119.001,31.376],[119.711,31.1994],[120.368,31.3919],[121.027,31.581],[121.611,31.5571],[122.195,31.5305],[122.78,31.5022],[123.364,31.4713]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AP-SA","Source":"by Peter Bird, September 2001","PlateA":"AP","PlateB":"SA","Type":""},"geometry":{"type":"LineString","coordinates":[[-71.3068,-21.9654],[-70.6833,-21.7339],[-70.0618,-21.5],[-69.1138,-21.5],[-68.1658,-21.5],[-67.6552,-21.5],[-67.1445,-21.5],[-66.6339,-21.5],[-66.1233,-21.5],[-65.4275,-21.4652],[-64.7321,-21.4275],[-64.1386,-21.3989],[-63.5454,-21.3683],[-63.36,-20.7593],[-63.176,-20.1502],[-63.2865,-19.5109],[-63.3962,-18.8716],[-63.6168,-18.3751],[-63.8362,-17.8783],[-63.8563,-17.4643],[-64.5845,-17.4023],[-65.4189,-17.11],[-65.7954,-16.7293],[-66.1705,-16.3479],[-66.6957,-15.7138],[-67.2176,-15.0785],[-67.4226,-14.5267],[-68.0077,-14.0278],[-68.5902,-13.5274],[-69.0461,-13.3947],[-69.5014,-13.2611],[-70.1246,-13.035],[-70.7466,-12.8075],[-71.3917,-12.5783],[-72.0356,-12.3476],[-72.6548,-12.4178],[-73.2744,-12.4865],[-73.85,-13.1819],[-74.4289,-13.876],[-74.9219,-14.4969],[-75.4176,-15.1167],[-75.9163,-15.7355]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-NA","Source":"DeMets and Wilson, 1997","PlateA":"PA","PlateB":"NA","Type":""},"geometry":{"type":"LineString","coordinates":[[-108.582,21.9047],[-108.676,21.9596],[-108.589,22.1024],[-108.516,22.2011],[-108.527,22.2769],[-108.407,22.4401],[-108.273,22.6134],[-108.232,22.7117]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"RI-PA","Source":"DeMets and Wilson, 1997","PlateA":"RI","PlateB":"PA","Type":""},"geometry":{"type":"LineString","coordinates":[[-108.582,21.9047],[-108.669,21.7739],[-108.784,21.6428],[-108.868,21.536],[-108.936,21.4513],[-108.977,21.347],[-108.809,21.2529],[-108.915,21.0679],[-109.013,20.949],[-109.111,20.824],[-109.194,20.7392],[-109.261,20.6426],[-109.285,20.5584],[-109.187,20.4995],[-109.215,20.3973],[-109.319,20.2423],[-109.378,20.1757],[-109.373,20.1418],[-109.45,20.0271],[-109.16,19.8065],[-108.903,19.6255],[-108.896,19.5496],[-108.534,19.3837],[-108.198,19.2235],[-108.233,19.1073],[-107.816,18.936],[-107.523,18.8632],[-107.272,18.7561],[-107.002,18.6471],[-106.756,18.5899],[-106.527,18.5444],[-106.244,18.5199],[-106.281,18.2814],[-106.311,18.1198],[-106.318,18.0163],[-106.308,17.929],[-105.586,17.8808]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NA-RI","Source":"DeMets and Wilson, 1997","PlateA":"NA","PlateB":"RI","Type":""},"geometry":{"type":"LineString","coordinates":[[-108.582,21.9047],[-108.397,21.8348],[-108.114,21.72],[-107.928,21.6861],[-107.774,21.7397],[-107.586,21.7417],[-107.393,21.7478],[-107.171,21.7522],[-107.046,21.7536],[-106.89,21.7992]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NA/RI","Source":"DeMets and Wilson, 1997","PlateA":"NA","PlateB":"RI","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-106.89,21.7992],[-106.862,21.7156],[-106.808,21.6403],[-106.757,21.483],[-106.624,21.3106],[-106.551,21.2355],[-106.525,21.1838],[-106.442,21.1208],[-106.381,20.8397],[-106.387,20.6379],[-106.385,20.4281],[-106.352,20.2027],[-106.271,19.9158],[-106.121,19.6437],[-105.949,19.4019],[-105.739,19.1644],[-105.546,18.9807],[-105.247,18.7619]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"RI-CO","Source":"DeMets and Wilson, 1997","PlateA":"RI","PlateB":"CO","Type":""},"geometry":{"type":"LineString","coordinates":[[-105.586,17.8808],[-105.51,18.1403],[-105.442,18.3552],[-105.352,18.5511],[-105.247,18.7619]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PS-YA","Source":"by Peter Bird, September 2001","PlateA":"PS","PlateB":"YA","Type":""},"geometry":{"type":"LineString","coordinates":[[121.575,24.6914],[121.335,24.963]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PS-YA","Source":"by Peter Bird, September 2001","PlateA":"PS","PlateB":"YA","Type":""},"geometry":{"type":"LineString","coordinates":[[121.335,24.963],[120.981,24.6536],[120.546,23.9788],[120.36,23.1983],[120.394,22.5813],[120.425,22.0434],[120.452,21.6321]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PS/SU","Source":"by Peter Bird, September 2001","PlateA":"PS","PlateB":"SU","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[120.452,21.6321],[120.344,21.2021],[120.29,20.6307],[120.502,20.255],[120.441,19.937],[120.115,19.4868],[119.795,18.8781],[119.279,18.2014],[119.161,17.629],[119.248,16.8402],[119.255,16.5557]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PS-SU","Source":"by Peter Bird, September 2001","PlateA":"PS","PlateB":"SU","Type":""},"geometry":{"type":"LineString","coordinates":[[119.255,16.5557],[119.728,16.407],[120.201,16.2573],[120.673,16.1065],[121.145,15.9547],[121.616,15.8018],[122.086,15.6479],[122.555,15.493],[123.024,15.3372],[123.492,15.1804],[123.959,15.0226],[124.425,14.8639],[124.891,14.7042]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PS\\\\SU","Source":"by Peter Bird, September 2001","PlateA":"PS","PlateB":"SU","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[124.891,14.7042],[125.15,14.1321],[125.494,13.3056],[125.686,12.8181],[126.137,12.2653],[126.24,11.6304],[126.214,11.0599],[126.573,10.2964],[126.824,9.44925],[127.053,8.75031],[127.219,8.13649],[127.234,7.29165],[127.25,6.44683],[127.459,5.89653],[127.498,5.47404],[127.836,5.22401],[128.151,4.76318],[128.387,4.33466],[128.684,3.70046],[128.998,3.11403],[129.217,2.67063],[129.246,1.92806],[129.197,1.05932]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SU-BH","Source":"by Peter Bird, June 2002","PlateA":"SU","PlateB":"BH","Type":""},"geometry":{"type":"LineString","coordinates":[[126.872,2.34565],[127.446,2.31942],[128.081,2.29031],[128.187,1.97371],[128.752,1.62297],[129.197,1.05932]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BH/SU","Source":"by Peter Bird, October 2001","PlateA":"BH","PlateB":"SU","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[126.872,2.34565],[126.426,1.70646]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"MS\\\\SU","Source":"by Peter Bird, September 2001","PlateA":"MS","PlateB":"SU","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[126.426,1.70646],[126.144,1.00135],[125.969,0.189999]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"MS/SU","Source":"Rangin et al. [1999]","PlateA":"MS","PlateB":"SU","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[123.43,2.00599],[123.219,2.02386],[122.48,2.37711],[121.669,2.30853],[120.824,2.31094],[120.189,2.20752],[119.696,2.03338],[119.306,1.57712],[119.249,0.713724],[119.475,-0.08103]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"MS-BS","Source":"Rangin et al. [1999]","PlateA":"MS","PlateB":"BS","Type":""},"geometry":{"type":"LineString","coordinates":[[119.475,-0.08103],[119.896,-0.85933],[120.388,-1.46145],[120.811,-1.71008],[121.234,-1.95861],[121.728,-2.15418],[122.223,-2.3496],[122.823,-2.59799],[123.424,-2.84609],[123.672,-3.09361],[123.706,-3.94122],[123.458,-4.57644],[124.06,-4.70066],[124.662,-4.82436],[125.282,-4.78921],[125.901,-4.75351],[126.432,-4.47072],[126.963,-4.18755],[127.325,-3.7191]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"MS-BS","Source":"by Peter Bird, October 2001","PlateA":"MS","PlateB":"BS","Type":""},"geometry":{"type":"LineString","coordinates":[[127.325,-3.7191],[127.51,-3.16252],[127.667,-2.44696],[127.666,-1.75821]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"MS\\\\BH","Source":"by Peter Bird, September 2001","PlateA":"MS","PlateB":"BH","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[125.969,-0.277582],[125.969,0.189999],[126.144,1.00135],[126.426,1.70646]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BS/SU","Source":"Rangin et al. [1999]","PlateA":"BS","PlateB":"SU","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[119.475,-0.08103],[119.296,-0.680331],[119.045,-1.49138],[118.884,-1.9498],[118.723,-2.40821],[118.578,-3.25522],[118.823,-3.60956]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BS-SU","Source":"Rangin et al. [1999]","PlateA":"BS","PlateB":"SU","Type":""},"geometry":{"type":"LineString","coordinates":[[118.823,-3.60956],[119.565,-3.96595],[119.953,-4.30293],[120.341,-4.6397],[120.516,-5.27551],[120.62,-6.12225],[120.546,-6.9676],[120.543,-7.81221]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BS-AU","Source":"by Peter Bird, October 2001","PlateA":"BS","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[132.689,-6.68099],[133.188,-6.51458],[133.686,-6.34769],[133.982,-5.6406],[133.449,-5.34429],[133.906,-4.812]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"MS-BH","Source":"by Peter Bird, October 2001","PlateA":"MS","PlateB":"BH","Type":""},"geometry":{"type":"LineString","coordinates":[[127.666,-1.75821],[127.241,-1.38815],[126.817,-1.01801],[126.393,-0.647813],[125.969,-0.277582]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BH-BS","Source":"by Peter Bird, October 2001","PlateA":"BH","PlateB":"BS","Type":""},"geometry":{"type":"LineString","coordinates":[[127.666,-1.75821],[128.383,-2.28637]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BH\\\\BS","Source":"Rangin et al. [1999]","PlateA":"BH","PlateB":"BS","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[128.383,-2.28637],[129.258,-2.41628],[130.107,-2.51922],[130.585,-2.6939],[131.063,-2.86839],[131.489,-3.14894],[131.915,-3.42931],[132.316,-3.93477],[132.717,-4.44004]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BH-BS","Source":"Rangin et al. [1999]","PlateA":"BH","PlateB":"BS","Type":""},"geometry":{"type":"LineString","coordinates":[[132.717,-4.44004],[133.311,-4.62627],[133.906,-4.812]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SU-TI","Source":"by Peter Bird, September 2001","PlateA":"SU","PlateB":"TI","Type":""},"geometry":{"type":"LineString","coordinates":[[120.886,-11.4925],[120.995,-10.8294],[121.033,-10.165],[120.821,-9.58604],[120.61,-9.00696],[120.576,-8.40958],[120.543,-7.81221]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BS-TI","Source":"Rangin et al. [1999]","PlateA":"BS","PlateB":"TI","Type":""},"geometry":{"type":"LineString","coordinates":[[120.543,-7.81221],[121.253,-7.99023],[121.891,-8.06221],[122.673,-7.85285],[123.383,-7.78357],[124.235,-7.78434],[124.75,-7.64403],[125.264,-7.5031],[125.761,-7.43253],[126.258,-7.30915],[126.755,-7.18521],[127.393,-7.1842],[127.854,-6.98976],[128.315,-6.79487],[128.776,-6.56475],[129.236,-6.33421],[129.839,-6.52615],[130.443,-6.71736],[131.01,-6.67987],[131.577,-6.64174],[132.133,-6.66168],[132.689,-6.68099]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BH/CL","Source":"Puntodewo et al. [1994]","PlateA":"BH","PlateB":"CL","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[138.793,-1.15941],[138.674,-0.819845],[138.054,-0.718157],[137.435,-0.616387],[136.943,-0.42228],[136.451,-0.228139],[135.656,-0.023042],[134.938,0.421235],[134.471,0.259038],[133.899,0.05668],[133.327,-0.145685],[132.824,-0.042897],[132.515,0.017058]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BH/PS","Source":"Puntodewo et al. [1994]","PlateA":"BH","PlateB":"PS","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[132.515,0.017058],[132.373,0.033902],[131.738,0.149742],[131.102,0.265561],[130.546,0.474879],[129.989,0.684156],[129.197,1.05932]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AU-MO","Source":"by Peter Bird, September 2001","PlateA":"AU","PlateB":"MO","Type":""},"geometry":{"type":"LineString","coordinates":[[140.798,-5.10959],[140.264,-4.93064],[139.731,-4.75127],[138.959,-4.54782],[138.484,-4.44247],[138.01,-4.33682],[137.177,-4.22116],[136.672,-4.19929],[136.167,-4.17709],[135.459,-4.21818],[134.966,-4.29798]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AU-BH","Source":"Rangin et al. [1999]","PlateA":"AU","PlateB":"BH","Type":""},"geometry":{"type":"LineString","coordinates":[[134.966,-4.29798],[134.488,-4.43733],[133.906,-4.812]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"MO-BH","Source":"Rangin et al. [1999]","PlateA":"MO","PlateB":"BH","Type":""},"geometry":{"type":"LineString","coordinates":[[138.972,-1.6075],[138.488,-1.75378],[138.003,-1.89992],[137.634,-2.08011],[137.282,-2.29536],[136.931,-2.49285],[136.562,-2.79637],[136.167,-3.10001],[135.771,-3.40349],[135.262,-3.84898],[134.966,-4.29798]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SU-BU","Source":"per Brian Taylor, p.c., 2002","PlateA":"SU","PlateB":"BU","Type":""},"geometry":{"type":"LineString","coordinates":[[96.4803,14.4],[96.5031,14.1292],[95.8571,13.7825],[95.5046,12.918],[95.1546,12.053],[94.8068,11.1876],[94.4146,10.679],[94.0238,10.17],[94.2164,9.71684],[94.4146,9.27021],[93.986,9.01948],[94.1712,8.686],[94.4288,8.31186],[94.7747,7.8472],[94.4599,7.60272],[94.8826,7.1393],[94.4975,6.83692],[94.9496,6.25911],[95.435,5.71525],[96.0135,5.11363],[96.5669,4.64448],[96.6014,3.77218],[96.6968,2.97907],[96.7828,2.1854],[96.7427,1.76284],[96.2019,1.345]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"IN\\\\BU","Source":"by Peter Bird, October 2001","PlateA":"IN","PlateB":"BU","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[92.2781,6.94757],[91.9032,7.66274],[91.7809,8.15983],[91.6511,8.6562],[91.5959,9.13017],[91.5334,9.6037],[91.5586,10.056],[91.5764,10.5142],[91.5907,11.3003],[91.6426,11.7915],[91.7,12.2832],[91.8889,13.1537],[92.0682,13.7149]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"IN-BU","Source":"by Peter Bird, October 2001","PlateA":"IN","PlateB":"BU","Type":""},"geometry":{"type":"LineString","coordinates":[[92.0682,13.7149],[92.5168,14.3843],[92.9413,14.8688],[93.3678,15.3526],[93.7878,15.5618],[94.2086,15.7702],[95.0951,15.8126],[95.9115,15.5345],[96.4061,15.1355]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"MS/SU","Source":"by Peter Bird, October 2001","PlateA":"MS","PlateB":"SU","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[125.969,0.189999],[125.616,-0.12779],[125.263,-0.445578]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"MS-SU","Source":"by Peter Bird, October 2001","PlateA":"MS","PlateB":"SU","Type":""},"geometry":{"type":"LineString","coordinates":[[125.263,-0.445578],[124.857,-0.269106],[124.416,0.013343],[124.01,0.436971],[123.746,0.842787],[123.535,1.35416],[123.448,1.81227],[123.43,2.00599]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EU-NA","Source":"by Peter Bird, November 2001","PlateA":"EU","PlateB":"NA","Type":""},"geometry":{"type":"LineString","coordinates":[[-15.7156,69.5499],[-16.0335,69.2647],[-16.2627,69.0379],[-16.4874,68.8084],[-17.1537,68.8649],[-17.3917,68.6995],[-17.8291,68.3998],[-18.2203,68.0662],[-18.4899,67.7376],[-18.7562,67.4434],[-19.0988,67.0581],[-18.118,66.9337],[-18.2473,66.7807],[-17.4735,66.6852],[-17.7178,66.3645],[-16.5068,66.203],[-16.6561,65.9435],[-16.8594,65.6773],[-17.025,65.3793],[-17.141,64.9952],[-17.3675,64.7367],[-17.8218,64.4892],[-18.6261,64.1823],[-19.0407,63.9849],[-19.2377,63.8625],[-20.0967,63.9494],[-20.7313,64.0171],[-21.2976,64.0672],[-22.0656,63.9224],[-22.5374,63.8361],[-22.872,63.7673],[-23.0586,63.6498],[-23.3303,63.6508],[-23.4873,63.5682],[-23.7405,63.4737],[-24.0095,63.3551],[-24.2547,63.2297],[-24.5193,63.1102],[-24.7207,62.9922],[-24.8881,62.9238],[-25.0351,62.8003],[-25.1564,62.71],[-25.3112,62.6137],[-25.4487,62.62],[-25.6435,62.5031],[-25.8748,62.3751],[-26.1072,62.2373],[-26.3089,62.105],[-26.5265,61.9392],[-26.768,61.8252],[-27.0316,61.6654],[-27.2257,61.532],[-27.3888,61.3976],[-27.5817,61.2519],[-27.8545,61.0664],[-28.0237,60.9563],[-28.1924,60.8483],[-28.4077,60.7045],[-28.6416,60.5661],[-28.8286,60.4186],[-28.9266,60.3334],[-29.0285,60.3399],[-29.118,60.2731],[-29.2245,60.1678],[-29.3717,60.0827]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"IN-AU","Source":"by Peter Bird, November 2001","PlateA":"IN","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[68.2738,-6.81092],[69.0074,-6.53842],[69.8059,-6.44461],[70.2918,-6.47357],[70.7856,-6.50237],[71.3125,-6.59931],[71.8341,-6.69593],[72.3549,-6.86701],[72.8839,-7.03843],[73.3917,-7.03892],[73.544,-6.19055],[73.7043,-5.77811],[73.7697,-4.92652],[73.8831,-4.30742],[74.358,-4.4108],[74.8331,-4.51388],[75.5177,-4.77642],[76.2028,-5.03829],[76.7791,-5.04649],[77.3555,-5.05469],[77.9808,-4.99351],[78.606,-4.93173],[79.1411,-4.75245],[79.6759,-4.57275],[80.3741,-4.39311],[81.072,-4.2128],[81.701,-4.03076],[82.3298,-3.84823],[82.7964,-3.64078],[83.2627,-3.43309],[83.7288,-3.22518],[84.1947,-3.01705],[84.9865,-3.18095],[85.7786,-3.34424],[86.5012,-3.71634],[87.2245,-4.08784],[87.9227,-3.52864],[88.62,-2.96892],[88.828,-2.27141],[89.0359,-1.57386],[89.4304,-1.1786],[89.8247,-0.783283],[90.6301,-0.450318],[91.4355,-0.117271],[92.2408,0.215803],[93.0462,0.548836],[93.8517,0.88176],[94.4154,1.493],[94.9794,2.1041]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA/AU","Source":"Massell et al., 2000, Figure 3, Puysegur thrust","PlateA":"PA","PlateB":"AU","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[166.951,-44.9871],[166.71,-45.2113],[166.537,-45.3502],[166.377,-45.515],[166.205,-45.7364],[166.019,-45.8872],[165.92,-45.9581],[165.733,-46.0648],[165.427,-46.1898],[165.168,-46.4052],[165.021,-46.6013],[164.943,-46.783],[164.923,-47.0108],[164.838,-47.1485],[164.739,-47.2562],[164.699,-47.4439],[164.651,-47.5208],[164.528,-47.6576],[164.48,-47.7595],[164.483,-47.9197],[164.398,-48.0593],[164.389,-48.202],[164.309,-48.2738],[164.287,-48.4286],[164.215,-48.5916],[164.13,-48.7417],[163.964,-48.9171],[163.868,-49.1157],[163.74,-49.3222],[163.545,-49.5732],[163.448,-49.7612],[163.412,-49.8466],[163.296,-49.9853],[163.235,-50.0787]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-AU","Source":"Massell et al., 2000, Figure 3","PlateA":"PA","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[163.235,-50.0787],[163.047,-50.2732],[162.963,-50.3688],[162.785,-50.4433],[162.594,-50.5495],[162.453,-50.6679],[162.273,-50.8174],[162.049,-50.9621],[161.825,-51.1182],[161.716,-51.1921],[161.542,-51.3988],[161.368,-51.5421],[161.162,-51.7508],[161.026,-51.9244],[160.762,-52.1656],[160.671,-52.2918],[160.535,-52.4327],[160.342,-52.6336],[160.092,-52.8217],[159.905,-52.9907],[159.731,-53.1704],[159.512,-53.3452],[159.318,-53.598],[159.216,-53.6195],[159.142,-53.8122],[158.985,-54.0883],[158.885,-54.308],[158.74,-54.5589],[158.674,-54.6894],[158.618,-54.9279],[158.596,-55.0467],[158.54,-55.2724],[158.465,-55.5216],[158.332,-55.7793],[158.226,-56.0216],[158.153,-56.1647],[158.042,-56.3105],[157.944,-56.4385],[157.823,-56.7248],[157.703,-56.9918],[157.64,-57.2302],[157.615,-57.474],[157.62,-57.7835],[157.751,-58.0681],[157.92,-58.3342],[158.121,-58.6051],[158.267,-58.7792],[158.385,-58.8581],[158.65,-59.0705],[158.972,-59.3046],[159.186,-59.5107],[159.413,-59.7316],[159.691,-59.9387],[159.803,-60.0055]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"ON-PS","Source":"by P. Bird, May 2002, after Lallemand et al. [1997b]","PlateA":"ON","PlateB":"PS","Type":""},"geometry":{"type":"LineString","coordinates":[[121.575,24.6914],[121.779,24.2554],[122.14,23.9492],[122.501,23.6429],[123.01,23.4686],[123.518,23.4541],[124.026,23.4381],[124.534,23.4203],[125.042,23.4009],[125.55,23.3799]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"ON/PS","Source":"by Peter Bird, September 2001","PlateA":"ON","PlateB":"PS","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[125.55,23.3799],[125.954,23.4977],[126.426,23.7606],[126.901,24.1011],[127.398,24.5029],[127.907,24.969],[128.462,25.4576]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"YA-ON","Source":"Letouzey & Kimura [1985]","PlateA":"YA","PlateB":"ON","Type":""},"geometry":{"type":"LineString","coordinates":[[121.575,24.6914],[122.024,24.853],[122.554,25.0649],[123.182,24.8598],[123.721,24.8985],[123.755,25.0165],[124.148,25.0702],[124.705,25.1197],[124.697,25.4751],[125.159,25.5691],[125.736,25.6437],[125.663,25.927],[126.065,26.1233],[126.383,26.37],[126.477,26.5403],[126.82,26.8106],[126.745,27.0057],[126.885,27.1491],[127.417,27.4855],[127.347,27.6615],[127.599,27.7896],[128.049,28.0528],[128.557,28.401],[128.321,28.7079],[128.687,29.0321],[129.055,29.3554],[128.646,29.8931],[128.881,30.1042],[128.848,30.387],[129.032,30.5854],[128.819,31.0245],[129.059,31.2645],[129.121,31.4094],[129.442,31.7926]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AM-ON","Source":"by Peter Bird, May 2002","PlateA":"AM","PlateB":"ON","Type":""},"geometry":{"type":"LineString","coordinates":[[129.442,31.7926],[129.768,32.0417],[130.185,32.0194],[130.835,31.9821],[131.284,31.8771],[131.717,31.7606],[132.03,31.4844],[132.269,31.2571],[132.581,30.9906],[132.824,30.7544]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EU-AM","Source":"by Peter Bird, May 2002","PlateA":"EU","PlateB":"AM","Type":""},"geometry":{"type":"LineString","coordinates":[[123.364,31.4713],[124.072,32.1727],[124.791,32.8701],[125.521,33.5633],[126.263,34.2521]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AM-YA","Source":"by Peter Bird, May 2002","PlateA":"AM","PlateB":"YA","Type":""},"geometry":{"type":"LineString","coordinates":[[123.364,31.4713],[123.867,31.3257],[124.487,31.2501],[125.03,31.1957],[125.729,31.2017],[126.404,31.2274],[127.054,31.273],[127.655,31.362],[128.258,31.4706],[128.812,31.6013],[129.442,31.7926]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CL-PS","Source":"Weissel and Anderson [1978]","PlateA":"CL","PlateB":"PS","Type":""},"geometry":{"type":"LineString","coordinates":[[134.521,6.99019],[134.269,6.61025],[133.989,6.33263],[133.674,6.15594],[133.429,5.96222],[133.308,5.73427],[133.24,5.34909],[133.189,5.0162],[133.032,4.78754],[132.911,4.45382],[132.79,4.11986],[132.74,3.69833],[132.795,3.31224],[132.85,2.90828],[132.817,2.53873],[132.766,2.25688],[132.734,1.72846],[132.72,1.16455],[132.651,0.81158],[132.515,0.017058]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-CL","Source":"by Peter Bird, June 2002","PlateA":"PA","PlateB":"CL","Type":""},"geometry":{"type":"LineString","coordinates":[[138.359,9.37865],[139.192,9.06494],[139.886,8.86631],[140.579,8.66639],[141.048,8.3925],[141.517,8.11804],[142.262,7.61077],[142.666,7.38844],[143.07,7.16576],[143.558,6.80532],[144.026,6.67698],[144.664,6.61101],[145.067,6.50348],[145.471,6.35347],[146.001,6.16022],[146.382,5.88304],[146.73,5.51071],[147.078,5.13818],[147.425,4.76546],[147.772,4.39257],[148.191,3.77564],[148.694,3.13658],[148.668,2.62928],[148.684,2.05827],[148.7,1.48745],[148.863,0.936586],[149.112,0.406263],[149.191,-0.143239],[149.251,-0.396981],[149.27,-0.65021]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CL-NB","Source":"by Peter Bird, June 2002","PlateA":"CL","PlateB":"NB","Type":""},"geometry":{"type":"LineString","coordinates":[[142.246,-2.6931],[142.394,-2.46221],[142.626,-1.91593],[142.922,-1.45354],[143.26,-1.15956],[143.808,-0.950568],[144.357,-0.741885],[145.033,-0.534111],[145.497,-0.473267],[145.919,-0.349163],[146.595,-0.290218],[147.059,-0.29351],[147.354,-0.274652],[147.859,-0.426351],[148.344,-0.40946],[148.724,-0.391858],[148.913,-0.456923],[149.27,-0.65021]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-NB","Source":"by Peter Bird, June 2002","PlateA":"PA","PlateB":"NB","Type":""},"geometry":{"type":"LineString","coordinates":[[149.27,-0.65021],[149.481,-0.818472],[149.769,-1.00453],[150.023,-1.02138],[150.344,-1.12276],[150.717,-1.22404],[151.089,-1.30833],[151.427,-1.46017],[151.816,-1.64562],[152.155,-1.86475],[152.578,-2.13414],[152.916,-2.1502],[153.119,-2.20029],[153.39,-2.43572],[153.542,-2.60389],[153.711,-2.68759],[153.882,-3.04097],[154.035,-3.3268],[154.256,-3.6121],[154.359,-3.94845],[154.7,-4.28294],[154.955,-4.55028],[154.992,-4.88657],[154.978,-5.24012],[154.592,-5.58051],[154.545,-5.90097],[154.533,-6.42324],[154.73,-6.85808],[154.927,-7.29284]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CL\\\\WL","Source":"by Peter Bird, June 2002","PlateA":"CL","PlateB":"WL","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[138.793,-1.15941],[139.257,-1.38997],[139.805,-1.55742],[140.226,-1.76738],[140.837,-1.89328],[141.195,-2.16673],[141.594,-2.27205],[141.868,-2.39843],[142.246,-2.6931]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"WL-BH","Source":"by Peter Bird, June 2001","PlateA":"WL","PlateB":"BH","Type":""},"geometry":{"type":"LineString","coordinates":[[138.793,-1.15941],[138.972,-1.6075]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NB-SB","Source":"Auzende et al. [2000]; Martinez and Taylor [1996]","PlateA":"NB","PlateB":"SB","Type":""},"geometry":{"type":"LineString","coordinates":[[143.743,-3.46045],[144.368,-3.53117],[144.807,-3.55013],[145.399,-3.48507],[146.11,-3.47062],[146.415,-3.43769],[146.836,-3.75493],[146.918,-3.64099],[146.999,-3.51435],[147.083,-3.38515],[147.162,-3.261],[147.241,-3.15205],[147.325,-3.05326],[147.407,-2.96204],[147.478,-2.90886],[147.539,-2.88103],[147.605,-2.87857],[147.816,-2.81284],[147.983,-2.92212],[148.123,-3.02628],[148.329,-3.14063],[148.499,-3.22195],[148.675,-3.30577],[148.878,-3.39465],[149.089,-3.46572],[149.295,-3.52151],[149.453,-3.54429],[149.603,-3.56959],[149.717,-3.57966],[149.773,-3.5923],[149.816,-3.61764]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NB\\\\WL","Source":"by Peter Bird, June 2002","PlateA":"NB","PlateB":"WL","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[142.246,-2.6931],[142.449,-2.81358],[142.633,-2.93233],[142.936,-3.01814],[143.172,-3.0531],[143.508,-3.15594],[143.743,-3.46045]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NB-MN","Source":"","PlateA":"NB","PlateB":"MN","Type":""},"geometry":{"type":"LineString","coordinates":[[149.817,-3.61656],[149.913,-3.49148],[150.034,-3.37167],[150.135,-3.27439],[150.249,-3.20201],[150.352,-3.14092],[150.436,-3.09258],[150.509,-3.06108],[150.56,-3.05074],[150.616,-3.04729],[150.615,-3.08491],[150.634,-3.16268],[150.683,-3.23453],[150.732,-3.29524],[150.789,-3.32939],[150.824,-3.34847],[150.879,-3.33111],[150.931,-3.3723],[150.982,-3.41905],[151.021,-3.47569],[151.095,-3.54725],[151.142,-3.58709],[151.204,-3.60167],[151.25,-3.60671],[151.301,-3.65625]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"MN-SB","Source":"","PlateA":"MN","PlateB":"SB","Type":""},"geometry":{"type":"LineString","coordinates":[[149.817,-3.61656],[149.872,-3.65909],[149.938,-3.72378],[150.027,-3.75198],[150.121,-3.78988],[150.192,-3.82943],[150.226,-3.8736],[150.24,-3.90269],[150.32,-3.88086],[150.447,-3.85709],[150.552,-3.83913],[150.678,-3.81816],[150.793,-3.77503],[150.909,-3.72352],[150.987,-3.69197],[151.095,-3.8063],[151.222,-3.73657],[151.301,-3.65625]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NB-SB","Source":"Martinez and Taylor [1996]; Taylor et al. [1995]","PlateA":"NB","PlateB":"SB","Type":""},"geometry":{"type":"LineString","coordinates":[[151.301,-3.65625],[151.375,-3.7062],[151.428,-3.75424],[151.563,-3.66511],[151.675,-3.76873],[151.814,-3.72013],[151.929,-3.67667],[151.987,-3.6486],[152.038,-3.63575],[152.132,-3.66584],[152.226,-3.73899],[152.328,-3.82223],[152.415,-3.90297],[152.478,-3.97364],[152.557,-4.03917],[152.616,-4.1301],[152.662,-4.18815],[152.927,-4.60329],[153.193,-5.01833],[153.403,-5.36112],[153.614,-5.70366],[153.823,-6.04594],[153.93,-6.265]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SB-WL","Source":"Tregoning et al. [1998]","PlateA":"SB","PlateB":"WL","Type":""},"geometry":{"type":"LineString","coordinates":[[143.743,-3.46045],[144.079,-3.76571],[144.416,-4.00368],[144.583,-4.37576],[144.733,-4.69723],[144.867,-4.96807],[145.007,-5.20188],[145.505,-5.76218],[146.007,-6.11228],[146.497,-6.51288],[146.956,-6.71785],[147.476,-7.10285],[148.01,-7.31238],[148.587,-7.39451]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"WL-SS","Source":"Taylor et al. [1995]","PlateA":"WL","PlateB":"SS","Type":""},"geometry":{"type":"LineString","coordinates":[[155.454,-7.48875],[155.262,-7.62863],[154.872,-7.96237],[154.481,-8.2962],[154.087,-8.63265],[153.697,-8.96649],[153.255,-9.18615]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"WL-AU","Source":"Taylor et al. [1995]","PlateA":"WL","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[151.654,-9.76005],[151.834,-9.76114],[151.838,-9.90561],[151.918,-9.93028],[152.024,-9.94203],[152.086,-9.944],[152.214,-9.94533],[152.223,-10.039],[152.413,-10.0473],[152.547,-10.056],[152.651,-10.0777],[152.849,-10.0881],[152.855,-10.3844],[153.174,-10.3981],[153.362,-10.3981],[153.552,-10.355],[153.752,-10.3446],[153.847,-10.3254],[154.01,-10.3407],[154.125,-10.3313],[154.169,-10.323],[154.219,-10.2792],[154.218,-9.91264],[154.379,-9.87219],[154.596,-9.81056],[154.719,-9.76305],[154.849,-9.72297],[154.856,-9.83902],[154.951,-9.83485],[155.07,-9.79486],[155.172,-9.72993],[155.172,-9.62138],[155.291,-9.55615],[155.347,-9.53242],[155.436,-9.49296],[155.473,-9.56795],[155.577,-9.53069],[155.599,-9.58072],[155.708,-9.54838],[155.797,-9.52648],[155.813,-9.57154],[155.908,-9.55456],[155.979,-9.5481],[155.989,-9.55797],[156.086,-9.53838],[156.066,-9.40524],[156.124,-9.3814],[156.101,-9.26847],[156.258,-9.22502],[156.35,-9.20553],[156.428,-9.17875],[156.39,-8.80938],[156.361,-8.59844],[156.331,-8.38495],[156.296,-8.17405]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PS-MA","Source":"Martinez et al. [2000]","PlateA":"PS","PlateB":"MA","Type":""},"geometry":{"type":"LineString","coordinates":[[143.097,11.5689],[143.082,11.7921],[143.106,12.0301],[143.143,12.265],[143.239,12.4781],[143.403,12.6947],[143.51,12.8222],[143.662,13.0577],[143.771,13.2676],[143.871,13.5409],[143.903,13.6235],[143.942,13.8108],[143.976,14.087],[144.082,14.6394],[144.216,14.6557],[144.334,14.8845],[144.53,14.9167],[144.453,15.5256],[144.799,15.6531],[144.792,16.1227],[144.841,16.478],[144.798,16.9793],[144.671,17.4201],[144.97,17.5346],[144.773,17.8295],[144.706,18.0198],[144.663,18.1656],[144.626,18.3591],[144.601,18.7556],[144.543,19.0727],[144.527,19.1234],[144.252,19.7253],[144.137,19.7533],[144.083,19.8577],[143.97,20.1109],[143.842,20.4178],[143.575,20.3968],[143.493,20.5325],[143.392,20.7283],[143.281,20.9619],[143.321,21.0606],[143.28,21.3203],[143.218,21.659],[143.15,21.9278],[142.997,22.1385],[142.774,22.3766],[142.56,22.662],[142.257,23.0091]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PS-MA","Source":"by Peter Bird, June 2002","PlateA":"PS","PlateB":"MA","Type":""},"geometry":{"type":"LineString","coordinates":[[142.257,23.0091],[142.886,23.7012],[143.522,24.3908]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NH-PA","Source":"Auzende et al. [1995a]","PlateA":"NH","PlateB":"PA","Type":""},"geometry":{"type":"LineString","coordinates":[[172.571,-13.4106],[172.434,-13.4349],[172.3,-13.4814],[172.163,-13.5688],[171.972,-13.6778],[171.619,-13.75],[171.296,-13.7934],[171.295,-14.0659],[171.181,-14.0834],[170.945,-14.0926],[170.642,-14.0878],[170.638,-13.942],[170.15,-13.9744],[169.739,-13.9535],[169.739,-13.8236],[169.622,-13.8084],[169.456,-13.8111],[169.231,-13.7995],[169.234,-13.6507],[169.026,-13.6393],[168.792,-13.6302],[168.577,-13.6024],[168.596,-13.5142],[168.159,-13.5147],[167.157,-13.6491],[166.154,-13.7794]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CR-NH","Source":"Auzende et al. [1994]","PlateA":"CR","PlateB":"NH","Type":""},"geometry":{"type":"LineString","coordinates":[[173.901,-16.8493],[173.88,-17.1634],[173.744,-17.49],[173.66,-17.6802],[173.55,-17.9623],[173.409,-18.238],[173.251,-18.5324],[173.425,-18.5203],[173.447,-18.774],[173.453,-18.9992],[173.439,-19.2211],[173.429,-19.4303],[173.398,-19.6616],[173.36,-19.8896],[173.335,-20.086],[173.351,-20.3774],[173.384,-20.6245],[173.38,-20.8367],[173.383,-20.9949],[173.379,-21.1405],[174.119,-21.1477],[174.115,-21.3565],[174.112,-21.5779],[174.09,-21.8407],[174.056,-22.2358],[174.034,-22.4881]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NH-AU","Source":"Peter Bird, June 2002","PlateA":"NH","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[172.439,-23.1781],[172.783,-23.0686],[173.04,-23.0068],[173.212,-22.8339],[173.606,-22.835],[174.034,-22.4881]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BR-NH","Source":"Peter Bird, June 2002","PlateA":"BR","PlateB":"NH","Type":""},"geometry":{"type":"LineString","coordinates":[[172.571,-13.4106],[172.74,-13.6927],[172.881,-13.9649],[173.019,-14.294],[173.139,-14.51],[173.178,-14.6687],[173.21,-14.7703],[173.259,-14.8973],[173.294,-14.9925],[173.32,-15.0814],[173.346,-15.1544],[173.359,-15.2337],[173.388,-15.3607],[173.428,-15.4369],[173.464,-15.5036],[173.516,-15.5671],[173.539,-15.6053],[173.555,-15.6973],[173.4,-15.7793],[173.485,-15.9223],[173.531,-16.0271],[173.567,-16.1509],[173.455,-16.2585],[173.593,-16.4967],[173.669,-16.6143],[173.718,-16.7127],[173.788,-16.7984],[173.901,-16.8493]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BR-CR","Source":"Auzende et al. [1994]","PlateA":"BR","PlateB":"CR","Type":""},"geometry":{"type":"LineString","coordinates":[[173.901,-16.8493],[174.503,-16.5632],[174.885,-16.8728],[175.107,-16.748],[175.226,-16.7409],[175.381,-16.6289],[175.487,-16.6218],[175.612,-16.586],[175.893,-16.5582],[176.184,-16.5521]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AU-CR","Source":"Auzende et al. [1994]","PlateA":"AU","PlateB":"CR","Type":""},"geometry":{"type":"LineString","coordinates":[[176.184,-16.5521],[176.179,-16.6696],[176.148,-16.8158],[176.106,-16.9654],[176.065,-17.0895],[176.036,-17.2389],[175.986,-17.5408],[175.973,-17.8043],[176.336,-17.8227],[176.342,-18.0384],[176.3,-18.1403],[176.244,-18.2425],[176.215,-18.3189],[176.212,-18.6107],[176.136,-18.732],[176.061,-18.8945],[175.975,-19.0222],[175.922,-19.0798],[175.9,-19.1624],[175.885,-19.3274],[175.839,-19.4451],[175.772,-19.5471],[175.559,-19.7548],[175.574,-19.9765],[175.59,-20.1887]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AU-CR","Source":"Peter Bird, June 2002","PlateA":"AU","PlateB":"CR","Type":""},"geometry":{"type":"LineString","coordinates":[[175.59,-20.1887],[175.828,-20.6294],[176.121,-21.1655],[175.733,-21.4216],[175.231,-21.75],[174.584,-22.1704],[174.034,-22.4881]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BR-AU","Source":"Auzende et al. [1995a]","PlateA":"BR","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[176.184,-16.5521],[176.377,-16.569],[176.545,-16.5574],[176.671,-16.5527],[176.79,-16.5447],[176.883,-16.5435],[176.949,-16.5235],[177.035,-16.5159],[177.13,-16.5049],[177.19,-16.504],[177.269,-16.5059],[177.412,-16.5099],[177.414,-16.3005],[177.345,-16.3016],[177.4,-16.2119],[177.588,-16.2245],[177.721,-16.2285],[177.806,-16.2269],[177.876,-16.2224],[178.007,-16.1723],[178.086,-16.1485],[178.171,-16.1151],[178.283,-16.1096],[178.402,-16.1039],[178.491,-16.0924],[178.524,-15.9838],[178.562,-15.8973]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BR-AU","Source":"Auzende et al. [1994]","PlateA":"BR","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[-180,-15.620711],[-179.739,-15.5422]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BR-AU","Source":"Auzende et al. [1994]","PlateA":"BR","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[178.562,-15.8973],[178.936,-15.8124],[179.332,-15.7295],[179.614,-15.6775],[179.89,-15.6538],[180,-15.620711]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"BR-AU","Source":"Auzende et al. [1994]","PlateA":"BR","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[-180,-15.620711],[-179.739,-15.5422]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-BR","Source":"Schellart et al. [2002]","PlateA":"PA","PlateB":"BR","Type":""},"geometry":{"type":"LineString","coordinates":[[172.571,-13.4106],[173.049,-13.4895],[173.671,-13.5168],[173.941,-13.2954],[174.482,-13.3961],[174.661,-13.4146],[174.784,-13.3952],[174.898,-13.3345],[175.314,-13.2436],[175.659,-13.3265],[175.947,-13.4221],[176.021,-13.6431],[176.256,-13.6723],[176.618,-13.7312],[176.966,-13.8531],[177.167,-13.9483],[177.417,-14.0551]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-BR","Source":"Peter Bird, June 2002","PlateA":"PA","PlateB":"BR","Type":""},"geometry":{"type":"LineString","coordinates":[[-180,-15.362382],[-179.739,-15.5422]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-BR","Source":"Peter Bird, June 2002","PlateA":"PA","PlateB":"BR","Type":""},"geometry":{"type":"LineString","coordinates":[[177.417,-14.0551],[178.029,-14.309],[178.469,-14.5006],[179.012,-14.7838],[179.389,-14.975],[179.79,-15.2177],[180,-15.362382]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-BR","Source":"Peter Bird, June 2002","PlateA":"PA","PlateB":"BR","Type":""},"geometry":{"type":"LineString","coordinates":[[-180,-15.362382],[-179.739,-15.5422]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-AU","Source":"Pelletier et al. [1998]","PlateA":"PA","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[-179.739,-15.5422],[-179.444,-15.5268]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"FT-AU","Source":"Peter Bird, June 2002","PlateA":"FT","PlateB":"AU","Type":""},"geometry":{"type":"LineString","coordinates":[[-179.444,-15.5268],[-178.812,-15.3773],[-178.264,-15.3255],[-177.691,-15.3981],[-177.13,-15.5594]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"FT-PA","Source":"Peter Bird, June 2002","PlateA":"FT","PlateB":"PA","Type":""},"geometry":{"type":"LineString","coordinates":[[-176.346,-14.634],[-176.88,-14.6708],[-177.415,-14.7064],[-177.746,-14.6461],[-178.24,-14.3166],[-178.733,-13.9861],[-178.768,-14.2304],[-178.888,-14.2241],[-179.048,-14.9275],[-179.288,-14.9356],[-179.444,-15.5268]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EA-PA","Source":"Naar and Hey, 1991","PlateA":"EA","PlateB":"PA","Type":""},"geometry":{"type":"LineString","coordinates":[[-114.421,-22.1145],[-114.505,-22.1961],[-114.498,-22.5426],[-114.567,-23.0236],[-114.875,-23.0396],[-114.962,-23.1789],[-115.183,-23.237],[-115.254,-23.3975],[-115.599,-23.4684],[-115.424,-23.8844],[-115.402,-24.0174],[-115.482,-24.1051],[-115.912,-24.2418],[-115.968,-24.3829],[-116.184,-24.4583],[-116.225,-24.5558],[-116.099,-24.8475],[-116.49,-25.172],[-116.353,-25.4158],[-116.028,-25.6738],[-115.769,-25.9677],[-115.518,-26.2434],[-115.291,-26.4659],[-115.105,-26.604],[-114.526,-26.7251],[-113.944,-26.7897],[-113.608,-26.8088],[-112.976,-26.8302]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"EA-NZ","Source":"Naar and Hey, 1991","PlateA":"EA","PlateB":"NZ","Type":""},"geometry":{"type":"LineString","coordinates":[[-112.976,-26.8302],[-112.947,-26.7241],[-112.684,-26.8009],[-112.658,-26.5538],[-112.683,-26.2823],[-112.672,-26.0379],[-112.62,-25.9342],[-112.55,-25.9259],[-112.541,-25.7874],[-112.455,-25.786],[-112.437,-25.6827],[-112.364,-25.6637],[-112.366,-25.5642],[-112.388,-25.4292],[-112.443,-25.1985],[-112.453,-25.0594],[-111.978,-25.0266],[-111.977,-24.8907],[-112.048,-24.6591],[-112.103,-24.4485],[-112.123,-24.2224],[-112.098,-24.1104],[-111.713,-24.032],[-111.763,-23.8598],[-111.832,-23.7275],[-111.864,-23.475],[-111.871,-23.3267],[-111.741,-23.2087],[-111.924,-23.0158],[-112.208,-22.8209],[-112.575,-22.6195],[-112.934,-22.407],[-113.28,-22.2231],[-113.61,-22.1264],[-113.906,-22.1022],[-114.125,-22.1057],[-114.421,-22.1145]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"JZ-PA","Source":"Larson et al. [1992]","PlateA":"JZ","PlateB":"PA","Type":""},"geometry":{"type":"LineString","coordinates":[[-112.023,-31.5362],[-112.041,-31.7737],[-112.063,-31.9485],[-112.065,-32.1144],[-112.151,-32.3426],[-112.356,-32.3278],[-112.415,-32.4889],[-112.418,-32.7938],[-112.442,-33.112],[-112.46,-33.3989],[-112.504,-33.6498],[-112.604,-33.6626],[-112.628,-33.9988],[-112.562,-34.2996],[-112.417,-34.5562],[-112.187,-34.6742],[-111.756,-34.8114],[-111.399,-34.9123],[-111.126,-34.9948],[-110.827,-35.0908]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"JZ-AN","Source":"Larson et al. [1992]","PlateA":"JZ","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[-110.827,-35.0908],[-110.527,-35.0613],[-110.326,-34.946],[-110.141,-34.8171],[-109.919,-34.7019],[-109.691,-34.6092],[-109.259,-34.5446]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"JZ-NZ","Source":"Larson et al. [1992]","PlateA":"JZ","PlateB":"NZ","Type":""},"geometry":{"type":"LineString","coordinates":[[-109.259,-34.5446],[-109.277,-34.2037],[-109.27,-33.9167],[-109.205,-33.7019],[-109.323,-33.3917],[-109.41,-33.1401],[-109.183,-33.0204],[-108.972,-32.9365],[-109.206,-32.6615],[-109.435,-32.4],[-109.791,-32.1152],[-110.21,-31.9198],[-110.687,-31.715],[-111.202,-31.5638],[-111.66,-31.5564],[-112.023,-31.5362]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NZ-PA","Source":"Hey et al. [1995]","PlateA":"NZ","PlateB":"PA","Type":""},"geometry":{"type":"LineString","coordinates":[[-112.976,-26.8302],[-113.112,-27.0143],[-113.129,-27.2727],[-113.133,-27.577],[-113.001,-27.6074],[-112.971,-27.8495],[-112.955,-28.129],[-112.934,-28.3794],[-113.01,-28.3829],[-113.021,-28.5495],[-113.02,-28.7872],[-112.956,-29.0088],[-112.367,-29.1602],[-111.806,-29.2656],[-111.749,-29.5788],[-111.773,-30.0247],[-111.775,-30.1873],[-111.797,-30.4248],[-111.851,-30.6244],[-111.885,-30.6658],[-111.951,-31.0446],[-111.978,-31.3862],[-111.964,-31.3905],[-112.023,-31.5362]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"GP-PA","Source":"Lonsdale [1988]","PlateA":"GP","PlateB":"PA","Type":""},"geometry":{"type":"LineString","coordinates":[[-102.068,2.63532],[-102.082,2.57438],[-102.077,2.50246],[-102.085,2.48615],[-102.085,2.41199],[-102.09,2.3909],[-102.088,2.32729],[-102.08,2.3083],[-102.075,2.16104],[-102.067,2.13734],[-102.075,2.02449],[-102.076,1.97154],[-102.088,1.90349],[-102.104,1.90382],[-102.133,1.77843],[-102.262,1.75155],[-102.23,1.54137],[-102.257,1.52778],[-102.222,1.3611],[-102.243,1.34857],[-102.203,1.22065],[-102.223,1.21398],[-102.181,1.13426]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"GP-NZ","Source":"Lonsdale [1988]","PlateA":"GP","PlateB":"NZ","Type":""},"geometry":{"type":"LineString","coordinates":[[-102.181,1.13426],[-102.082,1.20646],[-101.959,1.26876],[-101.825,1.33439],[-101.644,1.40377],[-101.58,1.31773],[-101.487,1.38887],[-101.423,1.33816],[-101.348,1.39907],[-101.315,1.35013],[-101.195,1.42309],[-101.153,1.38576],[-101.047,1.47077],[-101.074,1.51368],[-100.964,1.65513],[-100.973,1.67885],[-100.908,1.74348],[-100.974,1.83189],[-101.049,1.90637],[-101.149,1.98018],[-101.27,2.0485],[-101.356,2.10436],[-101.438,2.16015],[-101.512,2.23226]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"GP-CO","Source":"Lonsdale [1988]","PlateA":"GP","PlateB":"CO","Type":""},"geometry":{"type":"LineString","coordinates":[[-101.512,2.23226],[-101.49,2.60499],[-101.697,2.63971],[-101.878,2.64213],[-102.068,2.63532]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PA-CO","Source":"Lonsdale [1988]","PlateA":"PA","PlateB":"CO","Type":""},"geometry":{"type":"LineString","coordinates":[[-102.068,2.63532],[-102.109,2.78564],[-102.096,2.79833],[-102.118,2.89294],[-102.145,2.88876],[-102.193,3.07219],[-102.219,3.23869]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NZ-PA","Source":"Lonsdale [1988]","PlateA":"NZ","PlateB":"PA","Type":""},"geometry":{"type":"LineString","coordinates":[[-102.181,1.13426],[-102.24,0.712821],[-102.21,0.706338],[-102.253,0.3717],[-102.294,0.157068],[-102.319,-0.015477]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CO-NZ","Source":"Lonsdale [1988]","PlateA":"CO","PlateB":"NZ","Type":""},"geometry":{"type":"LineString","coordinates":[[-101.512,2.23226],[-101.203,2.24142],[-101.196,2.1989],[-101.067,2.21046],[-100.644,2.2044],[-100.394,2.2065],[-100.066,2.20704],[-100.047,2.29966],[-99.9129,2.27227],[-99.8108,2.2726],[-99.7389,2.26882]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SC-SA","Source":"Peter Bird, June 2002","PlateA":"SC","PlateB":"SA","Type":""},"geometry":{"type":"LineString","coordinates":[[-29.4885,-55.0334],[-30.9056,-54.8217],[-32.367,-54.5854],[-33.7338,-54.4603],[-33.3551,-54.86],[-33.0577,-55.458],[-33.6911,-55.605],[-34.5912,-55.7295],[-36.1083,-55.6416],[-36.846,-55.2149],[-37.8103,-55.0862],[-38.7149,-54.8532],[-39.7112,-54.6334],[-40.6597,-54.3972],[-41.5971,-54.1536],[-42.4101,-53.8797],[-43.2125,-53.6003],[-44.2095,-53.2697],[-45.191,-52.9309],[-46.4141,-52.8301],[-47.6626,-52.6907],[-49.1626,-52.664],[-50.6713,-52.71],[-52.1759,-52.8726],[-53.3821,-53.2094],[-54.7413,-53.406],[-55.5965,-53.5304],[-56.4567,-53.6486],[-57.75,-53.626],[-59.2458,-53.5981],[-60.5322,-53.6735],[-61.933,-53.81],[-62.8208,-53.9171],[-63.7131,-54.0177],[-64.788,-54.1726],[-65.8708,-54.3178],[-67.404,-54.3941],[-68.9886,-54.4297],[-69.8669,-54.2309],[-70.5127,-54.0994],[-71.2906,-53.9225],[-72.0816,-53.7183],[-73.0105,-53.3135],[-74.0351,-52.9111],[-74.9956,-52.5564],[-75.7435,-52.3147],[-76.4833,-52.0684]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SW-SC","Source":"Livermore et al. [1997]; Leat et al. [2000]","PlateA":"SW","PlateB":"SC","Type":""},"geometry":{"type":"LineString","coordinates":[[-29.4885,-55.0334],[-29.7147,-55.2043],[-29.8147,-55.3268],[-29.7936,-55.5009],[-29.7728,-55.6048],[-29.817,-55.6835],[-30.3157,-55.7539],[-30.3263,-55.8635],[-30.3343,-55.9491],[-30.3324,-56.0517],[-30.3253,-56.1345],[-30.3338,-56.2904],[-30.3779,-56.4434],[-30.721,-56.4492],[-30.7271,-56.511],[-30.7434,-56.5699],[-30.7431,-56.8593],[-30.469,-56.851],[-30.38,-57.0937],[-30.1292,-57.0954],[-30.0692,-57.5995],[-29.8517,-57.5979],[-29.8442,-58.2619],[-30.0069,-58.2719],[-29.9509,-58.8052],[-29.5634,-58.8167],[-29.5547,-59.5138],[-30.1075,-59.515],[-30.0314,-59.937],[-29.8812,-60.1736],[-29.598,-60.4347],[-28.6771,-60.4587],[-27.7048,-60.4673],[-27.6967,-60.6171]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SW-AN","Source":"Leat et al. [2000]","PlateA":"SW","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[-27.6967,-60.6171],[-26.8895,-60.506],[-26.0709,-60.391]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SC-AN","Source":"Maldonado et al., 1998","PlateA":"SC","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[-44.2259,-60.2425],[-43.1509,-60.3761],[-42.0674,-60.501],[-41.2136,-60.975],[-39.827,-60.634],[-39.093,-61.018],[-37.5605,-61.2433],[-36.4181,-61.392],[-34.8252,-60.9895],[-33.4464,-60.7009],[-32.367,-60.4089]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SC-AN","Source":"Leat et al. [2000]","PlateA":"SC","PlateB":"AN","Type":""},"geometry":{"type":"LineString","coordinates":[[-32.367,-60.4089],[-31.0139,-60.5118],[-29.7382,-60.5753],[-28.7433,-60.601],[-27.6967,-60.6171]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SW/SA","Source":"Peter Bird, June 2002","PlateA":"SW","PlateB":"SA","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-26.0709,-60.391],[-25.0688,-59.9733],[-24.4559,-59.3858],[-23.9907,-58.9209],[-23.8194,-58.195],[-24.1302,-57.4253],[-24.2327,-57.1736],[-24.6963,-56.7336],[-25.1492,-56.292],[-25.7205,-55.8396],[-26.414,-55.4244],[-26.9949,-55.2319],[-27.6044,-55.0948],[-28.6466,-55.0049],[-29.4885,-55.0334]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AR-IN","Source":"by Peter Bird, October 2001","PlateA":"AR","PlateB":"IN","Type":""},"geometry":{"type":"LineString","coordinates":[[60.2148,18.2397],[60.4564,18.7983],[60.7122,19.3057],[60.9696,19.8127],[61.2301,20.2303],[61.4919,20.6443],[61.8481,21.1258],[62.0963,21.4249],[62.1325,22.0828],[62.5025,22.385],[62.8772,22.683],[63.6313,23.2008],[64.2754,23.6936],[64.6511,24.0383],[65.0282,24.3824]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"IN-AR","Source":"Fournier et al. [2001]","PlateA":"IN","PlateB":"AR","Type":""},"geometry":{"type":"LineString","coordinates":[[60.2148,18.2397],[60.0619,17.4577],[60.0202,16.7126],[59.9642,16.1423],[59.9086,15.5721],[59.6423,15.2418],[59.4096,14.8951],[59.0337,15.0876],[58.5892,14.646],[58.2131,14.916],[57.9836,14.5994],[57.4762,14.662],[57.0015,14.6601],[56.2652,14.6232]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SO-AR","Source":"Peter Bird, June 2002","PlateA":"SO","PlateB":"AR","Type":""},"geometry":{"type":"LineString","coordinates":[[56.2652,14.6232],[56.2079,14.6433],[56.1791,14.6213],[56.0574,14.6411],[55.8218,14.6923],[55.6685,14.7216],[55.6312,14.6814],[55.48,14.7292],[55.2778,14.7885],[55.1084,14.8505],[55.0473,14.7116],[54.9576,14.7272],[54.7308,14.801],[54.5489,14.8698],[54.511,14.7601],[54.4505,14.621],[54.3873,14.6399],[54.3319,14.6707],[54.2874,14.6814],[54.2493,14.6914],[54.1926,14.7096],[54.1494,14.7328],[54.0687,14.7722],[54.0177,14.6573],[53.9287,14.4894],[53.8625,14.3509],[53.818,14.3615],[53.579,14.4408],[53.3584,14.5118],[53.2202,14.5623],[53.2113,14.5379],[53.1222,14.5586],[52.9071,14.6221],[52.737,14.6813],[52.6672,14.5615],[52.5469,14.5972],[52.2992,14.6625],[52.1389,14.6887],[51.94,14.353],[51.7625,14.0283],[51.5698,13.6673],[51.4487,13.4576],[51.3429,13.2718],[51.2532,13.1223],[51.079,13.1923],[50.8416,13.2794],[50.6615,13.3618],[50.573,13.2181],[50.4294,13.2725],[50.3102,13.3125],[50.2524,13.229],[50.1673,13.1225],[50.0614,13.1675],[49.8491,13.2512],[49.68,13.3128],[49.5926,13.1686],[49.4721,13.0078],[49.4296,13.0419],[49.349,12.8973],[49.2784,12.8019],[49.0705,12.8528],[48.882,12.9084],[48.8025,12.7698],[48.6992,12.6576],[48.5671,12.6906],[48.4479,12.7289],[48.3487,12.5726],[48.2675,12.6023],[48.142,12.6407],[48.0479,12.671],[47.9914,12.5807],[47.9014,12.4611],[47.7883,12.4923],[47.6494,12.5185],[47.5875,12.4409],[47.5389,12.3687],[47.319,12.4301],[47.1613,12.463],[47.1303,12.3587],[47.0489,12.3877],[46.9923,12.403],[46.9297,12.3002],[46.8487,12.2108],[46.7168,12.2482],[46.5789,12.2921],[46.5108,12.2019],[46.429,12.0875],[46.3107,12.1425],[46.1976,12.1724],[46.1503,12.1123],[46.1097,12.0581],[45.8509,12.1002],[45.6496,12.1519],[45.6372,12.1586],[45.6018,12.073],[45.5218,11.9829],[45.428,12.0176],[45.3277,12.0525],[45.2811,11.9983],[45.0969,11.9989],[44.9132,12.0116],[44.8817,12.0189],[44.7802,12.0224],[44.5131,12.0126],[44.0493,12.008],[43.6495,12.0127],[42.8413,11.795],[42.0332,11.5772]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AF-AR","Source":"Peter Bird, June 2002","PlateA":"AF","PlateB":"AR","Type":""},"geometry":{"type":"LineString","coordinates":[[39.2978,19.0298],[38.8261,19.4475],[38.3957,19.9075],[38.0745,20.3891],[37.9747,21.0213],[37.8253,21.8434],[37.5398,22.4945],[37.0425,23.2259],[36.5711,23.6392],[36.4073,24.1327],[36.2422,24.626],[36.0661,25.0553],[35.8888,25.4844],[35.5456,25.9191],[35.1999,26.353],[34.8748,26.8078],[34.547,27.2619],[34.2569,27.8853],[34.428,28.4143],[34.6009,28.9431],[34.7755,29.4717],[34.9519,30]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AR-AF","Source":"Brian Taylor, pers. comm., 2002","PlateA":"AR","PlateB":"AF","Type":""},"geometry":{"type":"LineString","coordinates":[[39.2978,19.0298],[39.5899,18.4193],[39.9867,17.9494],[40.3313,17.2662],[40.2512,16.7851],[40.1716,16.304],[39.6707,15.7716],[39.7767,15.1377],[40.0263,14.7192],[40.275,14.3005],[40.614,13.7417],[40.0912,13.2094],[40.5071,12.5998],[40.8568,12.2055],[41.2055,11.8107],[41.6487,12.189],[42.0332,11.5772]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AS/AF","Source":"Peter Bird, June 2002","PlateA":"AS","PlateB":"AF","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[20.3001,37.8039],[20.7603,37.0983],[21.3266,36.6289],[21.5988,36.2159],[21.8932,35.9334],[22.3752,35.7424],[22.8662,35.4367],[23.3986,34.99],[23.8739,34.6283],[24.5928,34.3397],[25.5767,34.2487],[26.4653,34.1983],[27.2265,34.3347],[27.6845,34.706],[28.0502,34.8702],[28.478,35.1272],[28.7789,35.3116],[29.0702,35.378],[29.3451,35.4249],[29.7309,35.4273]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AT/AF","Source":"Peter Bird, June 2002","PlateA":"AT","PlateB":"AF","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[29.7309,35.4273],[30.2208,35.1543],[30.7929,34.9908],[31.256,34.826],[31.7399,34.6341],[32.1719,34.4871],[32.6678,34.3899],[33.1007,34.2903],[33.7354,34.3017],[34.0542,34.5045],[34.4998,34.7855],[34.9001,35.091],[35.3621,35.4051],[35.7912,35.689],[36.4134,36.0232]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"SO-AF","Source":"by Peter Bird, September 2001","PlateA":"SO","PlateB":"AF","Type":""},"geometry":{"type":"LineString","coordinates":[[42.0332,11.5772],[41.4423,11.3169],[41.1166,10.7317],[40.7921,10.1462],[40.4494,9.79646],[40.1074,9.44636],[39.7898,9.07119],[39.4729,8.69575],[39.1565,8.29567],[38.8408,7.89535],[38.4775,7.44705],[38.115,6.99845],[37.8487,6.47715],[37.5829,5.95572],[36.9136,5.95844],[36.6014,5.48365],[36.2897,5.00869],[35.7824,5.09868],[35.2749,5.18828],[34.7673,5.27747],[34.2596,5.36626],[33.7517,5.45463],[33.2437,5.54257],[32.7355,5.63007],[32.2271,5.71714],[31.7527,5.09727],[31.2793,4.47706],[30.4713,4.23531],[30.4748,3.5237],[30.4783,2.81209],[31.0492,2.64788],[31.6199,2.48341],[31.1221,1.96007],[30.6247,1.43658],[30.2459,0.748524],[29.8673,0.060444],[29.6297,-0.626325],[29.392,-1.31308],[29.1299,-1.80931],[28.8677,-2.30551],[28.9103,-3.13391],[28.9529,-3.96229],[29.2804,-4.55689],[29.6085,-5.15135],[29.604,-5.62513],[29.5996,-6.09891],[30.0455,-6.79117],[30.4927,-7.48303],[31.042,-7.63081],[31.5917,-7.7779],[32.1166,-8.1622],[32.6426,-8.54581],[33.099,-8.64346],[33.5557,-8.74056],[33.8175,-9.59798],[34.0806,-10.4552],[34.7091,-11.0274],[34.4411,-11.717],[34.1717,-12.4064],[34.0714,-13.1674],[34.4608,-13.8586],[34.8525,-14.5491],[34.7288,-15.1914],[34.6043,-15.8337],[34.9008,-16.3337],[35.1989,-16.8333],[35.1995,-17.4044],[35.2001,-17.9755],[34.5989,-18.3559],[34.2716,-18.6879],[33.943,-19.0194],[33.6131,-19.3503],[33.2818,-19.6806],[33.1963,-20.5122],[33.1098,-21.3438],[32.6356,-21.492],[32.1605,-21.6388],[31.6844,-21.7842],[31.2073,-21.9283],[30.7293,-22.071],[30.2503,-22.2124],[29.7704,-22.3523],[29.2895,-22.4908],[28.8442,-22.9711],[28.3958,-23.4501],[27.9441,-23.9278],[27.489,-24.4042],[27.592,-24.8474],[27.6957,-25.2905],[27.8002,-25.7335],[27.9054,-26.1765],[27.2526,-26.4737],[26.5964,-26.768],[26.5952,-27.4774],[26.594,-28.1868],[27.1792,-28.6245],[27.7693,-29.0596],[28.054,-29.4544],[28.3409,-29.8486]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AF-SO","Source":"Lemaux et al. [2002]","PlateA":"AF","PlateB":"SO","Type":""},"geometry":{"type":"LineString","coordinates":[[32.1252,-46.9975],[32.6626,-46.1911],[33.1706,-45.3818],[33.6775,-44.5607],[34.1568,-43.7467],[34.636,-42.9307],[35.0898,-42.1032]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"AF-SO","Source":"Peter Bird, June 2002","PlateA":"AF","PlateB":"SO","Type":""},"geometry":{"type":"LineString","coordinates":[[35.0898,-42.1032],[35.528,-41.2537],[35.955,-40.4026],[36.3713,-39.55],[36.7774,-38.6959],[37.174,-37.8404],[37.5615,-36.9837],[36.7208,-36.4328],[35.892,-35.8761],[35.0748,-35.3138],[34.2689,-34.7461],[33.4741,-34.1731],[32.6901,-33.5951],[31.9165,-33.0122],[31.1532,-32.4246],[30.3997,-31.8325],[29.6559,-31.236],[28.9215,-30.6352],[28.3409,-29.8486]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PM-CA","Source":"Mann and Kolarsky [1995]","PlateA":"PM","PlateB":"CA","Type":""},"geometry":{"type":"LineString","coordinates":[[-76.684,8.7313],[-76.7653,9.06455],[-76.9243,9.37587],[-77.0829,9.63133],[-77.2914,9.89982],[-77.4993,10.0985],[-77.6786,10.2696],[-77.9217,10.4324],[-78.1287,10.547],[-78.2289,10.6146],[-78.4272,10.6388],[-78.7455,10.6534],[-78.9698,10.5795],[-79.1511,10.4787],[-79.2344,10.4145],[-79.4321,10.4311],[-79.7482,10.3894],[-80.1053,10.305],[-80.3646,10.2712],[-80.6357,10.1539],[-80.879,10.0579]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PM-CA","Source":"Kellogg and Vega [1995]","PlateA":"PM","PlateB":"CA","Type":""},"geometry":{"type":"LineString","coordinates":[[-80.879,10.0579],[-81.0792,9.93537],[-81.3063,9.77762],[-81.4692,9.58708],[-81.6542,9.44432],[-82.0802,9.43984],[-82.3126,9.50913],[-82.5246,9.5994],[-82.8019,9.76995],[-83.0213,9.87311],[-83.2085,10.0526],[-83.4648,10.2088],[-83.7824,10.3213],[-84.0727,10.4479],[-84.4241,10.5374],[-84.7462,10.5933],[-85.1238,10.6534],[-85.4349,10.6269],[-85.7164,10.5674],[-85.969,10.4886],[-86.2479,10.3882],[-86.648,10.235]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NZ-PM","Source":"Westbrook et al. [1995]","PlateA":"NZ","PlateB":"PM","Type":""},"geometry":{"type":"LineString","coordinates":[[-78.6463,7.33731],[-78.7511,7.32893],[-78.9818,7.31874],[-79.2402,7.30109],[-79.4697,7.22831],[-79.6576,7.18385],[-79.8456,7.1601],[-80.0958,7.10068],[-80.2498,7.13273]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NZ-PM","Source":"Kolarsky and Mann [1995]","PlateA":"NZ","PlateB":"PM","Type":""},"geometry":{"type":"LineString","coordinates":[[-80.2498,7.13273],[-80.3628,7.22073],[-80.5391,7.33519],[-80.687,7.41545],[-80.7835,7.35838],[-80.8937,7.29417],[-81.0385,7.22241],[-81.1628,7.17174],[-81.3423,7.09933],[-81.4874,7.05516],[-81.5843,7.03949],[-81.741,7.06054]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"NZ-PM","Source":"Moore and Sender [1995]","PlateA":"NZ","PlateB":"PM","Type":""},"geometry":{"type":"LineString","coordinates":[[-81.741,7.06054],[-81.8886,6.97836],[-81.9436,6.94971],[-82.0896,6.96742],[-82.1252,7.00801],[-82.2021,7.04084],[-82.2734,7.12881],[-82.3385,7.25127],[-82.492,7.29605],[-82.6171,7.30701],[-82.6857,7.27797],[-82.7482,7.28342],[-82.811,7.3026],[-82.8748,7.36639]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CO\\\\PM","Source":"Kellogg and Vega [1995]","PlateA":"CO","PlateB":"PM","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-82.8748,7.36639],[-83.0742,7.59169],[-83.2331,7.84854],[-83.3599,7.92759],[-83.6054,8.04445],[-83.8377,8.18189],[-84.0072,8.30028],[-84.1577,8.47377],[-84.4187,8.63674],[-84.6858,8.77169],[-85.0438,8.93723],[-85.3805,9.08908],[-85.6124,9.20327],[-85.9105,9.42337],[-86.2036,9.68364],[-86.4487,9.9383],[-86.648,10.235]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"ND/NZ","Source":"Westbrook et al. [1995]","PlateA":"ND","PlateB":"NZ","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-78.6463,7.33731],[-78.7148,7.23227],[-78.7619,7.09977],[-78.747,7.03058],[-78.6976,6.99653],[-78.599,6.94229],[-78.5419,6.85277],[-78.4428,6.7568],[-78.3997,6.66011],[-78.3356,6.56364],[-78.265,6.50195],[-78.1946,6.46107],[-78.1514,6.34345],[-78.1293,6.23949],[-78.0861,6.12184],[-78.0504,6.05273],[-78.008,6.00453]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"PM-ND","Source":"Mann and Kolarsky [1995]","PlateA":"PM","PlateB":"ND","Type":""},"geometry":{"type":"LineString","coordinates":[[-78.6463,7.33731],[-78.2285,7.50952],[-78.0129,7.63734],[-77.7067,7.82883],[-77.5335,8.01173],[-77.3309,8.10457],[-77.1492,8.19017],[-76.906,8.44344],[-76.684,8.7313]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CA\\\\ND","Source":"Taboada et al. [1997]","PlateA":"CA","PlateB":"ND","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-76.684,8.7313],[-76.7013,9.01654],[-76.7056,9.37852],[-76.7033,9.76145],[-76.5944,10.09],[-76.4559,10.3285],[-76.2748,10.5744],[-76.0645,10.765],[-75.905,11.0873],[-75.6313,11.39],[-75.3703,11.5948],[-75.1228,11.7645],[-74.7964,11.9138],[-74.4764,12.0208],[-74.3066,12.2243],[-74.0577,12.3863],[-73.8738,12.7431],[-73.632,13.0583],[-73.3032,13.2898],[-72.9161,13.3675],[-72.4282,13.4097],[-71.8397,13.4647],[-71.1949,13.5029],[-70.9525,13.4376],[-70.6594,13.3101]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CA\\\\ND","Source":"Perez et al. [1997]","PlateA":"CA","PlateB":"ND","Type":"subduction"},"geometry":{"type":"LineString","coordinates":[[-70.6594,13.3101],[-70.4957,13.1623],[-70.1827,12.9296],[-69.8634,12.6685],[-69.5944,12.4496],[-69.3478,12.1751],[-69.0241,11.8437],[-68.7297,11.5126],[-68.3792,11.1736],[-68.0865,10.8145],[-67.9613,10.4995]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"ND-SA","Source":"Collot et al. [2002]","PlateA":"ND","PlateB":"SA","Type":""},"geometry":{"type":"LineString","coordinates":[[-81.5989,-3.24451],[-81.3022,-3.26785],[-80.9772,-3.26376],[-80.5745,-3.07358],[-80.2061,-2.88264],[-79.8028,-2.64299],[-79.4968,-2.47156],[-79.2253,-2.27888],[-78.9289,-1.99438],[-78.667,-1.42089],[-78.4366,-0.748094],[-78.1931,-0.234463],[-78.0055,0.147576]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"ND-SA","Source":"Audemard and Audemard [2002]","PlateA":"ND","PlateB":"SA","Type":""},"geometry":{"type":"LineString","coordinates":[[-78.0055,0.147576],[-77.707,0.585555],[-77.3318,0.898863],[-76.9216,1.10119],[-76.5737,1.27575],[-76.2537,1.50607],[-75.9891,1.61798],[-75.7736,1.93192],[-75.4325,2.28107],[-75.2097,2.49764],[-74.8753,2.79118],[-74.5894,3.0219],[-74.3454,3.29442],[-74.101,3.42043],[-73.9265,3.56025],[-73.815,3.8186],[-73.7803,3.97914],[-73.5917,4.16783],[-73.3259,4.30774],[-73.13,4.41261],[-72.9202,4.7408],[-72.7732,4.9363],[-72.6331,5.11782],[-72.3528,5.26439],[-72.1985,5.53653],[-72.1492,5.78778],[-72.0789,6.04598],[-71.9242,6.26219],[-71.9029,6.46457],[-71.8886,6.68091],[-72.0499,7.03006],[-72.0709,7.1976],[-72.0637,7.32322],[-72.3592,7.5677],[-72.4366,7.70032],[-72.2464,7.81891],[-72.0913,7.90255],[-71.9148,8.10474],[-71.7948,8.19528],[-71.6958,8.34166],[-71.4557,8.45276],[-71.2084,8.57065],[-71.081,8.66092],[-70.9251,8.80684],[-70.7271,8.87572],[-70.5145,9.01417],[-70.3584,9.13886],[-70.0812,9.38819],[-69.8747,9.58196],[-69.6962,9.79669],[-69.5106,9.97637],[-69.2969,10.1208],[-69.1403,10.1959],[-68.9764,10.2986],[-68.67,10.4554],[-68.5065,10.5021],[-68.3502,10.535],[-68.1311,10.5111],[-67.9613,10.4995]]}},{"type":"Feature","properties":{"LAYER":"plate boundary","Name":"CA-SA","Source":"Taboada et al. [1997]","PlateA":"CA","PlateB":"SA","Type":""},"geometry":{"type":"LineString","coordinates":[[-67.9613,10.4995],[-67.4989,10.5924],[-66.8695,10.6666],[-66.4366,10.6624],[-65.9643,10.6528],[-65.5257,10.6153],[-65.1209,10.5999],[-64.997,10.5392],[-64.5077,10.474],[-64.2099,10.5194],[-63.8782,10.5316]]}}]}');

},{}],"lpEAb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Line", ()=>Line);
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _validatorsJs = require("../Validators.js");
var _globalJs = require("../Global.js");
function getControlPoints(x0, y0, x1, y1, x2, y2, t) {
    var d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)), d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), fa = t * d01 / (d01 + d12), fb = t * d12 / (d01 + d12), p1x = x1 - fa * (x2 - x0), p1y = y1 - fa * (y2 - y0), p2x = x1 + fb * (x2 - x0), p2y = y1 + fb * (y2 - y0);
    return [
        p1x,
        p1y,
        p2x,
        p2y
    ];
}
function expandPoints(p, tension) {
    var len = p.length, allPoints = [], n, cp;
    for(n = 2; n < len - 2; n += 2){
        cp = getControlPoints(p[n - 2], p[n - 1], p[n], p[n + 1], p[n + 2], p[n + 3], tension);
        if (isNaN(cp[0])) continue;
        allPoints.push(cp[0]);
        allPoints.push(cp[1]);
        allPoints.push(p[n]);
        allPoints.push(p[n + 1]);
        allPoints.push(cp[2]);
        allPoints.push(cp[3]);
    }
    return allPoints;
}
class Line extends (0, _shapeJs.Shape) {
    constructor(config){
        super(config);
        this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
            this._clearCache("tensionPoints");
        });
    }
    _sceneFunc(context) {
        var points = this.points(), length = points.length, tension = this.tension(), closed = this.closed(), bezier = this.bezier(), tp, len, n;
        if (!length) return;
        context.beginPath();
        context.moveTo(points[0], points[1]);
        if (tension !== 0 && length > 4) {
            tp = this.getTensionPoints();
            len = tp.length;
            n = closed ? 0 : 4;
            if (!closed) context.quadraticCurveTo(tp[0], tp[1], tp[2], tp[3]);
            while(n < len - 2)context.bezierCurveTo(tp[n++], tp[n++], tp[n++], tp[n++], tp[n++], tp[n++]);
            if (!closed) context.quadraticCurveTo(tp[len - 2], tp[len - 1], points[length - 2], points[length - 1]);
        } else if (bezier) {
            n = 2;
            while(n < length)context.bezierCurveTo(points[n++], points[n++], points[n++], points[n++], points[n++], points[n++]);
        } else for(n = 2; n < length; n += 2)context.lineTo(points[n], points[n + 1]);
        if (closed) {
            context.closePath();
            context.fillStrokeShape(this);
        } else context.strokeShape(this);
    }
    getTensionPoints() {
        return this._getCache("tensionPoints", this._getTensionPoints);
    }
    _getTensionPoints() {
        if (this.closed()) return this._getTensionPointsClosed();
        else return expandPoints(this.points(), this.tension());
    }
    _getTensionPointsClosed() {
        var p = this.points(), len = p.length, tension = this.tension(), firstControlPoints = getControlPoints(p[len - 2], p[len - 1], p[0], p[1], p[2], p[3], tension), lastControlPoints = getControlPoints(p[len - 4], p[len - 3], p[len - 2], p[len - 1], p[0], p[1], tension), middle = expandPoints(p, tension), tp = [
            firstControlPoints[2],
            firstControlPoints[3]
        ].concat(middle).concat([
            lastControlPoints[0],
            lastControlPoints[1],
            p[len - 2],
            p[len - 1],
            lastControlPoints[2],
            lastControlPoints[3],
            firstControlPoints[0],
            firstControlPoints[1],
            p[0],
            p[1], 
        ]);
        return tp;
    }
    getWidth() {
        return this.getSelfRect().width;
    }
    getHeight() {
        return this.getSelfRect().height;
    }
    getSelfRect() {
        var points = this.points();
        if (points.length < 4) return {
            x: points[0] || 0,
            y: points[1] || 0,
            width: 0,
            height: 0
        };
        if (this.tension() !== 0) points = [
            points[0],
            points[1],
            ...this._getTensionPoints(),
            points[points.length - 2],
            points[points.length - 1], 
        ];
        else points = this.points();
        var minX = points[0];
        var maxX = points[0];
        var minY = points[1];
        var maxY = points[1];
        var x, y;
        for(var i = 0; i < points.length / 2; i++){
            x = points[i * 2];
            y = points[i * 2 + 1];
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        }
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    }
}
Line.prototype.className = "Line";
Line.prototype._attrsAffectingSize = [
    "points",
    "bezier",
    "tension"
];
(0, _globalJs._registerNode)(Line);
(0, _factoryJs.Factory).addGetterSetter(Line, "closed", false);
(0, _factoryJs.Factory).addGetterSetter(Line, "bezier", false);
(0, _factoryJs.Factory).addGetterSetter(Line, "tension", 0, (0, _validatorsJs.getNumberValidator)());
(0, _factoryJs.Factory).addGetterSetter(Line, "points", [], (0, _validatorsJs.getNumberArrayValidator)());

},{"../Factory.js":"cBseC","../Shape.js":"9jDGX","../Validators.js":"gkzNd","../Global.js":"asjHM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequire5d24")

//# sourceMappingURL=index.b71e74eb.js.map
