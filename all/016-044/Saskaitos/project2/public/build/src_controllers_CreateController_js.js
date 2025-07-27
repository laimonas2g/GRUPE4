"use strict";
(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([["src_controllers_CreateController_js"],{

/***/ "./src/controllers/CreateController.js":
/*!*********************************************!*\
  !*** ./src/controllers/CreateController.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateController)
/* harmony export */ });
/* harmony import */ var _storage_InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/InvoiceRepository.js */ "./src/storage/InvoiceRepository.js");
/* harmony import */ var _models_Invoice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Invoice.js */ "./src/models/Invoice.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var CreateController = /*#__PURE__*/function () {
  function CreateController() {
    _classCallCheck(this, CreateController);
    this.form = document.getElementById('create-form');
    this.loadFromAPI();
    this.bindEvents();
  }
  return _createClass(CreateController, [{
    key: "loadFromAPI",
    value: function () {
      var _loadFromAPI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var res, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return fetch('https://in3.dev/inv/');
            case 1:
              res = _context.v;
              _context.n = 2;
              return res.json();
            case 2:
              data = _context.v;
              this.currentInvoice = _models_Invoice_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromAPI(data);
              this.render();
            case 3:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function loadFromAPI() {
        return _loadFromAPI.apply(this, arguments);
      }
      return loadFromAPI;
    }()
  }, {
    key: "render",
    value: function render() {
      document.getElementById('invoice-number').textContent = this.currentInvoice.number;
      document.getElementById('invoice-date').textContent = this.currentInvoice.date;
      // Render products table, etc.
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;
      document.getElementById('save-btn').onclick = function () {
        _storage_InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_0__["default"].save(_this.currentInvoice);
        alert('Saved!');
        window.location = 'list.html';
      };
      document.getElementById('update-btn').onclick = function () {
        return _this.loadFromAPI();
      };
      document.getElementById('cancel-btn').onclick = function () {
        return window.location = 'list.html';
      };
    }
  }]);
}();


/***/ }),

/***/ "./src/models/Invoice.js":
/*!*******************************!*\
  !*** ./src/models/Invoice.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Invoice)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Invoice = /*#__PURE__*/function () {
  function Invoice(_ref) {
    var id = _ref.id,
      number = _ref.number,
      date = _ref.date,
      products = _ref.products,
      discount = _ref.discount,
      vat = _ref.vat,
      total = _ref.total;
    _classCallCheck(this, Invoice);
    this.id = id;
    this.number = number;
    this.date = date;
    this.products = products;
    this.discount = discount;
    this.vat = vat;
    this.total = total;
  }
  return _createClass(Invoice, null, [{
    key: "fromAPI",
    value: function fromAPI(data) {
      return new Invoice({
        id: data.id || null,
        number: data.number,
        date: data.date,
        products: data.products,
        discount: data.discount || 0,
        vat: data.vat,
        total: data.total
      });
    }
  }, {
    key: "calculateTotal",
    value: function calculateTotal(products) {
      var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var subtotal = products.reduce(function (sum, p) {
        return sum + p.price * p.qty;
      }, 0);
      var vat = subtotal * 0.21;
      var total = subtotal + vat - discount;
      return {
        subtotal: subtotal,
        vat: vat,
        total: total
      };
    }
  }]);
}();


/***/ }),

/***/ "./src/storage/InvoiceRepository.js":
/*!******************************************!*\
  !*** ./src/storage/InvoiceRepository.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvoiceRepository)
/* harmony export */ });
/* harmony import */ var _models_Invoice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Invoice.js */ "./src/models/Invoice.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var InvoiceRepository = /*#__PURE__*/function () {
  function InvoiceRepository() {
    _classCallCheck(this, InvoiceRepository);
  }
  return _createClass(InvoiceRepository, null, [{
    key: "getAll",
    value: function getAll() {
      var data = localStorage.getItem(this.KEY);
      return data ? JSON.parse(data).map(function (i) {
        return new _models_Invoice_js__WEBPACK_IMPORTED_MODULE_0__["default"](i);
      }) : [];
    }
  }, {
    key: "save",
    value: function save(invoice) {
      var all = this.getAll();
      all.push(invoice);
      localStorage.setItem(this.KEY, JSON.stringify(all));
    }
  }, {
    key: "update",
    value: function update(id, data) {
      var all = this.getAll();
      all = all.map(function (i) {
        return i.id === id ? _objectSpread(_objectSpread({}, i), data) : i;
      });
      localStorage.setItem(this.KEY, JSON.stringify(all));
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var all = this.getAll().filter(function (i) {
        return i.id !== id;
      });
      localStorage.setItem(this.KEY, JSON.stringify(all));
    }
  }, {
    key: "getById",
    value: function getById(id) {
      return this.getAll().find(function (i) {
        return i.id === id;
      });
    }
  }]);
}();
_defineProperty(InvoiceRepository, "KEY", 'vat_invoices');


/***/ })

}]);