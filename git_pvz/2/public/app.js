/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

var nr = document.querySelector('[data-nr]');
var dokData = document.querySelector('[data-dokData]');
var apmoketi = document.querySelector('[data-apmoketi]');
var pardavejas = document.querySelectorAll('[data-seller] div');
var pirkejas = document.querySelectorAll('[data-buyer] div');
var list = document.querySelector('[data-list]');
var delivery = document.querySelector('[data-pristatymas]');
var tarpine = document.querySelector('[data-tarpine]');
var viso = document.querySelector('[data-viso]');
var visoPVM = document.querySelector('[data-visoPvm');
fetch('https://in3.dev/inv/').then(function (response) {
  return response.json();
}).then(function (data) {
  var number = data.number,
    date = data.date,
    due_date = data.due_date,
    company = data.company,
    items = data.items,
    shippingPrice = data.shippingPrice;
  nr.innerText += ' ' + number;
  dokData.innerText += ' ' + date;
  apmoketi.innerText += ' ' + due_date;
  delivery.innerText = shippingPrice.toFixed(2) + ' €';
  var buyer = company.buyer,
    seller = company.seller;
  var i = 0;
  pirkejas.forEach(function (div) {
    // const {name, address, code, vat, phone, email} = buyer;
    var Buyer = Object.values(buyer);
    div.innerText = Buyer[i];
    i++;
  });
  var j = 0;
  pardavejas.forEach(function (div) {
    // const {name, address, code, vat, phone, email} = seller;
    var Seller = Object.values(seller);
    div.innerText = Seller[j];
    j++;
  });
  var k = 1;
  var afterDiscount;
  var pvmSuma;
  var sum;
  var tarpineSuma = 0;
  var visoPvm = 0;
  items.forEach(function (item) {
    var description = item.description,
      discount = item.discount,
      price = item.price,
      quantity = item.quantity;
    var Discount = Object.values(discount);
    var type = '';
    if (Discount[0] === 'percentage') {
      type = "".concat(Discount[1], " %");
      afterDiscount = price - price / 100 * Discount[1];
    } else if (Discount[0] === 'fixed') {
      type = "".concat(Discount[1], " \u20AC");
      afterDiscount = price - Discount[1];
    } else {
      afterDiscount = price;
    }
    ;
    pvmSuma = afterDiscount * 0.21 * quantity;
    sum = afterDiscount * quantity + pvmSuma;
    tarpineSuma += sum;
    visoPvm += pvmSuma;
    var preke = "<tr>\n                        <td>00".concat(k, "</td>\n                        <td>").concat(description, "</td>\n                        <td class=\"right\">").concat(quantity, "</td>                        \n                        <td class=\"right\">").concat(price.toFixed(2), "</td>\n                        <td class=\"right\">").concat(type, "</td>                        \n                        <td class=\"right\">").concat(afterDiscount.toFixed(2), "</td>\n                        <td class=\"right\">21 %</td>\n                        <td class=\"right\">").concat(pvmSuma.toFixed(2), "</td>\n                        <td class=\"right\">").concat(sum.toFixed(2), "</td>\n                    </tr>");
    list.innerHTML += preke;
    k++;
  });
  tarpine.innerText = tarpineSuma.toFixed(2) + ' €';
  visoPVM.innerText = (visoPvm + shippingPrice * 0.21).toFixed(2) + ' €';
  viso.innerText = (tarpineSuma + shippingPrice).toFixed(2) + ' €';
  console.log('data:', data);
});

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkpvm"] = self["webpackChunkpvm"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/style"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/style"], () => (__webpack_require__("./src/css/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;