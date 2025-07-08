/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
var _x = /*#__PURE__*/new WeakMap();
var _y = /*#__PURE__*/new WeakMap();
var _color = /*#__PURE__*/new WeakMap();
var _gate = /*#__PURE__*/new WeakMap();
var _activeColor = /*#__PURE__*/new WeakMap();
var _el = /*#__PURE__*/new WeakMap();
var _size = /*#__PURE__*/new WeakMap();
var Sq = /*#__PURE__*/function () {
  function Sq(x, y, size) {
    var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'transparent';
    _classCallCheck(this, Sq);
    _classPrivateFieldInitSpec(this, _x, void 0);
    _classPrivateFieldInitSpec(this, _y, void 0);
    _classPrivateFieldInitSpec(this, _color, void 0);
    _classPrivateFieldInitSpec(this, _gate, false);
    _classPrivateFieldInitSpec(this, _activeColor, void 0);
    _classPrivateFieldInitSpec(this, _el, void 0);
    _classPrivateFieldInitSpec(this, _size, void 0);
    _classPrivateFieldSet(_x, this, x);
    _classPrivateFieldSet(_y, this, y);
    _classPrivateFieldSet(_color, this, color);
    _classPrivateFieldSet(_size, this, size);
    _classPrivateFieldSet(_el, this, document.createElement('div'));
    _classPrivateFieldGet(_el, this).style.left = _classPrivateFieldGet(_x, this) + 'px';
    _classPrivateFieldGet(_el, this).style.top = _classPrivateFieldGet(_y, this) + 'px';
    _classPrivateFieldGet(_el, this).style.width = _classPrivateFieldGet(_size, this) + 'px';
    _classPrivateFieldGet(_el, this).style.height = _classPrivateFieldGet(_size, this) + 'px';
    _classPrivateFieldGet(_el, this).style.backgroundColor = _classPrivateFieldGet(_color, this);
  }
  return _createClass(Sq, [{
    key: "addTo",
    value: function addTo(parent) {
      parent.appendChild(_classPrivateFieldGet(_el, this));
      _classPrivateFieldGet(_el, this).addEventListener('mouseover', function (_) {
        console.log('OK');
      });
    }
  }, {
    key: "open",
    value: function open(gate) {
      _classPrivateFieldSet(_gate, this, gate);
    }
  }, {
    key: "activeColor",
    set: function set(color) {
      _classPrivateFieldSet(_activeColor, this, color);
    }
  }]);
}();


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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sq */ "./src/Sq.js");
console.log('Labas, Projektai');

var A = new _Sq__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 300, 'crimson');
var b = document.querySelector('body');
A.addTo(b);
})();

/******/ })()
;