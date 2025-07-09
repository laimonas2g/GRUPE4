/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Frame.js":
/*!**********************!*\
  !*** ./src/Frame.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Frame)
/* harmony export */ });
/* harmony import */ var _Sq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sq */ "./src/Sq.js");
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }

var _size = /*#__PURE__*/new WeakMap();
var _mode = /*#__PURE__*/new WeakMap();
var _frameSize = /*#__PURE__*/new WeakMap();
var _data = /*#__PURE__*/new WeakMap();
var _frameHolderElement = /*#__PURE__*/new WeakMap();
var _sqs = /*#__PURE__*/new WeakMap();
var Frame = /*#__PURE__*/function () {
  // kvadratuku objektai

  function Frame(size, frameSizeOrFrameData, frameHolderElement) {
    var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'view';
    _classCallCheck(this, Frame);
    _classPrivateFieldInitSpec(this, _size, void 0);
    _classPrivateFieldInitSpec(this, _mode, void 0);
    _classPrivateFieldInitSpec(this, _frameSize, void 0);
    _classPrivateFieldInitSpec(this, _data, void 0);
    _classPrivateFieldInitSpec(this, _frameHolderElement, void 0);
    _classPrivateFieldInitSpec(this, _sqs, []);
    _classPrivateFieldSet(_size, this, size);
    _classPrivateFieldSet(_mode, this, mode);
    _classPrivateFieldSet(_frameHolderElement, this, frameHolderElement);
    if (typeof frameSizeOrFrameData === 'number') {
      _classPrivateFieldSet(_frameSize, this, frameSizeOrFrameData);
      _classPrivateFieldSet(_data, this, null);
    } else if (_typeof(frameSizeOrFrameData) === 'object' && Array.isArray(frameSizeOrFrameData)) {
      _classPrivateFieldSet(_frameSize, this, Math.sqrt(frameSizeOrFrameData.length));
      _classPrivateFieldSet(_data, this, frameSizeOrFrameData);
    } else {
      throw new Error('Invalid argument: frameSizeOrFrameData must be a number or an array');
    }
    this.makeFrame();
  }
  return _createClass(Frame, [{
    key: "makeFrame",
    value: function makeFrame() {
      var sqNumber = 0;
      for (var i = 0; i < _classPrivateFieldGet(_frameSize, this); i++) {
        for (var j = 0; j < _classPrivateFieldGet(_frameSize, this); j++) {
          var args = [_classPrivateFieldGet(_size, this) * j, _classPrivateFieldGet(_size, this) * i, _classPrivateFieldGet(_size, this)];
          _classPrivateFieldGet(_data, this) !== null && args.push(_classPrivateFieldGet(_data, this)[sqNumber]);
          var sq = _construct(_Sq__WEBPACK_IMPORTED_MODULE_0__["default"], args);
          sq.addTo(_classPrivateFieldGet(_frameHolderElement, this), _classPrivateFieldGet(_mode, this));
          _classPrivateFieldGet(_sqs, this).push(sq);
          sqNumber++;
        }
      }
    }
  }, {
    key: "openGates",
    value: function openGates() {
      _classPrivateFieldGet(_sqs, this).forEach(function (sq) {
        return sq.open(true);
      });
    }
  }, {
    key: "closeGates",
    value: function closeGates() {
      _classPrivateFieldGet(_sqs, this).forEach(function (sq) {
        return sq.open(false);
      });
    }
  }, {
    key: "setActiveColor",
    value: function setActiveColor(color) {
      _classPrivateFieldGet(_sqs, this).forEach(function (sq) {
        return sq.activeColor = color;
      });
    }
  }]);
}();


/***/ }),

/***/ "./src/Sq.js":
/*!*******************!*\
  !*** ./src/Sq.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sq)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _color = /*#__PURE__*/new WeakMap();
var _gate = /*#__PURE__*/new WeakMap();
var _activeColor = /*#__PURE__*/new WeakMap();
var _el = /*#__PURE__*/new WeakMap();
var Sq = /*#__PURE__*/function () {
  function Sq(x, y, size) {
    var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'transparent';
    _classCallCheck(this, Sq);
    _classPrivateFieldInitSpec(this, _color, void 0);
    _classPrivateFieldInitSpec(this, _gate, false);
    _classPrivateFieldInitSpec(this, _activeColor, void 0);
    _classPrivateFieldInitSpec(this, _el, void 0);
    _classPrivateFieldSet(_color, this, color);
    _classPrivateFieldSet(_el, this, document.createElement('div'));
    _classPrivateFieldGet(_el, this).style.left = x + 'px';
    _classPrivateFieldGet(_el, this).style.top = y + 'px';
    _classPrivateFieldGet(_el, this).style.width = size + 'px';
    _classPrivateFieldGet(_el, this).style.height = size + 'px';
    _classPrivateFieldGet(_el, this).style.backgroundColor = _classPrivateFieldGet(_color, this);
    _classPrivateFieldGet(_el, this).style.position = 'absolute';
  }
  return _createClass(Sq, [{
    key: "addTo",
    value: function addTo(parent) {
      var _this = this;
      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'view';
      parent.appendChild(_classPrivateFieldGet(_el, this));
      if (mode == 'view') {
        return;
      }
      _classPrivateFieldGet(_el, this).addEventListener('mouseover', function (_) {
        if (_classPrivateFieldGet(_gate, _this)) {
          _classPrivateFieldSet(_color, _this, _classPrivateFieldGet(_activeColor, _this));
          console.log(_classPrivateFieldGet(_color, _this));
          _classPrivateFieldGet(_el, _this).style.backgroundColor = _classPrivateFieldGet(_color, _this);
        }
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      _classPrivateFieldSet(_color, this, 'transparent');
      _classPrivateFieldGet(_el, this).style.backgroundColor = _classPrivateFieldGet(_color, this);
    }
  }, {
    key: "open",
    value: function open(gate) {
      _classPrivateFieldSet(_gate, this, gate);
    }

    /**
     * @param {string} color
     */
  }, {
    key: "activeColor",
    set: function set(color) {
      _classPrivateFieldSet(_activeColor, this, color);
    }
  }]);
}();


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frame */ "./src/Frame.js");
console.log('Labas, Projektai');

var tf = document.querySelector('.test-frame');
var F = new _Frame__WEBPACK_IMPORTED_MODULE_0__["default"](10, 100, tf, 'edit');
F.openGates();
F.setActiveColor('crimson');

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/app": 0,
/******/ 			"public/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproject"] = self["webpackChunkproject"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;