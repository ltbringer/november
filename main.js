/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    background-color: black;\n    overflow: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,uBAAuB;IACvB,gBAAgB;AACpB","sourcesContent":["body {\n    margin: 0;\n    background-color: black;\n    overflow: hidden;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/img/main_char_sprite.png":
/*!**************************************!*\
  !*** ./src/img/main_char_sprite.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "3fe79a67eb3940203df992b285552c3e.png");

/***/ }),

/***/ "./src/img/mushroom_boss.png":
/*!***********************************!*\
  !*** ./src/img/mushroom_boss.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d5f8ddf1940ff25afb89f2923f3a081e.png");

/***/ }),

/***/ "./src/img/november.png":
/*!******************************!*\
  !*** ./src/img/november.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "51679299555ef69139001b59675241e3.png");

/***/ }),

/***/ "./src/img/november_foreground.png":
/*!*****************************************!*\
  !*** ./src/img/november_foreground.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7a7e5731f69a84918cf86370646366ff.png");

/***/ }),

/***/ "./src/types/index.d.ts":
/*!******************************!*\
  !*** ./src/types/index.d.ts ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/attacks/attackList/citricHealing.ts":
/*!*************************************************!*\
  !*** ./src/attacks/attackList/citricHealing.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitricHealing": () => (/* binding */ CitricHealing)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/attacks/core.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/misc */ "./src/utils/misc.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CitricHealing = /** @class */ (function (_super) {
    __extends(CitricHealing, _super);
    function CitricHealing() {
        return _super.call(this, {
            name: "Citric Healing",
            damage: 0,
            heal: 10,
            type: "grass",
            range: 1000,
            cost: 50,
            accuracy: 0.8,
            cooldown: 2,
            description: "",
            effects: [],
        }) || this;
    }
    CitricHealing.prototype.activate = function (user, target) {
        user.heal(this.heal).reduceMana(this.cost);
        return this;
    };
    CitricHealing.prototype.render = function (user, target, ctx) {
        var r = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(user.width / 16, user.width);
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        for (var i = 0; i < 10; i++) {
            var x = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(user.position.x, user.position.x + user.width);
            var y = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(user.position.y, user.position.y - 50);
            var w = 5;
            var h = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(20, 100);
            ctx.fillRect(x, y, w, h);
        }
        return this;
    };
    return CitricHealing;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Attack));



/***/ }),

/***/ "./src/attacks/attackList/softGrass.ts":
/*!*********************************************!*\
  !*** ./src/attacks/attackList/softGrass.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoftGrass": () => (/* binding */ SoftGrass)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/attacks/core.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/misc */ "./src/utils/misc.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SoftGrass = /** @class */ (function (_super) {
    __extends(SoftGrass, _super);
    function SoftGrass() {
        return _super.call(this, {
            name: "Soft Grass",
            damage: 2,
            type: "grass",
            range: 16,
            cost: 20,
            accuracy: 0.8,
            cooldown: 2,
            description: "",
            effects: [],
        }) || this;
    }
    SoftGrass.prototype.activate = function (user, target) {
        var damage = user.magik / target.immunity;
        target.takeDamage(damage);
        user
            .heal(Math.floor(damage / 2))
            .reduceMana(this.cost);
        return this;
    };
    SoftGrass.prototype.render = function (user, target, ctx) {
        var r = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(user.width / 16, user.width);
        ctx.fillStyle = "rgba(8, 168, 86, 0.5)";
        ctx.beginPath();
        ctx.arc(user.position.x + user.width / 2, user.position.y + user.height / 2, r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        return this;
    };
    return SoftGrass;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Attack));



/***/ }),

/***/ "./src/attacks/attackList/toxicDrain.ts":
/*!**********************************************!*\
  !*** ./src/attacks/attackList/toxicDrain.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToxicDrain": () => (/* binding */ ToxicDrain)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/attacks/core.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/misc */ "./src/utils/misc.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ToxicDrain = /** @class */ (function (_super) {
    __extends(ToxicDrain, _super);
    function ToxicDrain() {
        return _super.call(this, {
            name: "Toxic Drain",
            damage: 20,
            type: "poison",
            range: 16,
            accuracy: 0.8,
            cost: 20,
            cooldown: 2,
            description: "The user drains the target's HP and releases toxic fumes. Has 15% chance of poisoning the target.",
            effects: [
                {
                    name: "poison",
                    duration: 2,
                    startValue: 0,
                    endValue: 10,
                    inc: 1,
                    chance: 0.15,
                },
            ],
        }) || this;
    }
    ToxicDrain.prototype.activate = function (user, target) {
        var damage = user.magik / target.immunity;
        target.takeDamage(damage);
        user.reduceMana(this.cost);
        return this;
    };
    ToxicDrain.prototype.render = function (user, target, ctx) {
        var r = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.randomInt)(user.width / 16, user.width);
        ctx.fillStyle = "rgba(180, 112, 224, 0.5)";
        ctx.beginPath();
        ctx.arc(user.position.x + user.width / 2, user.position.y + user.height / 2, r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        return this;
    };
    return ToxicDrain;
}(_core__WEBPACK_IMPORTED_MODULE_0__.Attack));



/***/ }),

/***/ "./src/attacks/core.ts":
/*!*****************************!*\
  !*** ./src/attacks/core.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Attack": () => (/* binding */ Attack),
/* harmony export */   "Effect": () => (/* binding */ Effect)
/* harmony export */ });
var Effect = /** @class */ (function () {
    function Effect(_a) {
        var name = _a.name, duration = _a.duration, startValue = _a.startValue, endValue = _a.endValue, inc = _a.inc, chance = _a.chance;
        this.name = name;
        this.duration = duration;
        this.startValue = startValue;
        this.endValue = endValue;
        this.inc = inc;
        this.chance = chance;
    }
    return Effect;
}());

var Attack = /** @class */ (function () {
    function Attack(_a) {
        var name = _a.name, damage = _a.damage, type = _a.type, range = _a.range, accuracy = _a.accuracy, cooldown = _a.cooldown, cost = _a.cost, heal = _a.heal, effects = _a.effects, description = _a.description;
        this.name = name;
        this.damage = damage;
        this.type = type;
        this.cost = cost;
        this.heal = heal;
        this.effects = effects;
        this.range = range;
        this.accuracy = accuracy;
        this.cooldown = cooldown;
        this.description = description;
    }
    Attack.prototype.activate = function (user, target) {
        return this;
    };
    return Attack;
}());



/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BAR_HEIGHT": () => (/* binding */ BAR_HEIGHT),
/* harmony export */   "BAR_OFFSET": () => (/* binding */ BAR_OFFSET),
/* harmony export */   "CHAR_HEIGHT": () => (/* binding */ CHAR_HEIGHT),
/* harmony export */   "CHAR_WIDTH": () => (/* binding */ CHAR_WIDTH),
/* harmony export */   "CHAR_X_OFFSET": () => (/* binding */ CHAR_X_OFFSET),
/* harmony export */   "CHAR_Y_OFFSET": () => (/* binding */ CHAR_Y_OFFSET),
/* harmony export */   "DIRECTIONS": () => (/* binding */ DIRECTIONS),
/* harmony export */   "ENEMY_CHASE_DISTANCE": () => (/* binding */ ENEMY_CHASE_DISTANCE),
/* harmony export */   "ENEMY_X_OFFSET": () => (/* binding */ ENEMY_X_OFFSET),
/* harmony export */   "ENEMY_Y_OFFSET": () => (/* binding */ ENEMY_Y_OFFSET),
/* harmony export */   "IS_COLLIDER": () => (/* binding */ IS_COLLIDER),
/* harmony export */   "MAP_HEIGHT": () => (/* binding */ MAP_HEIGHT),
/* harmony export */   "MAP_WIDTH": () => (/* binding */ MAP_WIDTH),
/* harmony export */   "MAP_X_OFFSET": () => (/* binding */ MAP_X_OFFSET),
/* harmony export */   "MAP_Y_OFFSET": () => (/* binding */ MAP_Y_OFFSET),
/* harmony export */   "MOVESPEED": () => (/* binding */ MOVESPEED),
/* harmony export */   "TILES": () => (/* binding */ TILES),
/* harmony export */   "TILE_HEIGHT": () => (/* binding */ TILE_HEIGHT),
/* harmony export */   "TILE_WIDTH": () => (/* binding */ TILE_WIDTH)
/* harmony export */ });
var MAP_WIDTH = 1920;
var MAP_HEIGHT = 1440;
var TILE_WIDTH = 64;
var TILE_HEIGHT = 64;
var CHAR_WIDTH = 16;
var CHAR_HEIGHT = 16;
var MAP_X_OFFSET = -600;
var MAP_Y_OFFSET = -900;
var CHAR_X_OFFSET = 600;
var CHAR_Y_OFFSET = 600;
var BAR_OFFSET = 2;
var BAR_HEIGHT = 10;
var ENEMY_X_OFFSET = 265;
var ENEMY_Y_OFFSET = 20;
var ENEMY_CHASE_DISTANCE = CHAR_WIDTH * 50;
var IS_COLLIDER = 955;
var MOVESPEED = 4;
var TILES = {
    rows: 40,
    cols: 30,
};
var DIRECTIONS = [[-1, 0], [0, -1], [1, 0], [0, 1]];


/***/ }),

/***/ "./src/data/collision.ts":
/*!*******************************!*\
  !*** ./src/data/collision.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collisions": () => (/* binding */ collisions)
/* harmony export */ });
var collisions = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 955, 955, 0, 0, 0, 0, 0, 0, 955, 955, 955, 955, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 0, 955, 0, 0, 0, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 955, 0, 0, 0, 0, 0, 0, 955, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 955, 955, 955, 955, 0, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 955, 955, 955, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 955, 955, 0, 0, 955, 955, 955, 955, 955, 955, 955, 0, 0, 0, 0, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 0, 955, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 955, 0, 0, 0, 0, 0, 0, 955, 955, 955, 0, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 0, 0, 955, 955, 955, 955, 955, 955, 955, 955, 0, 955, 0, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 0, 0, 0, 0, 0, 0, 0, 955, 955, 955, 955, 0, 0, 955, 955, 955, 955, 0, 0, 0, 0, 0, 0, 955, 955, 955, 0, 0, 955,
    0, 0, 0, 0, 0, 955, 0, 955, 0, 955, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0,
    0, 0, 0, 0, 0, 955, 0, 0, 0, 955, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 955, 955, 955, 955, 0, 0,
    0, 0, 0, 0, 0, 955, 0, 955, 0, 955, 955, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 955, 0, 955, 955, 955, 955, 955, 955, 0, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 955, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];


/***/ }),

/***/ "./src/events/keys.ts":
/*!****************************!*\
  !*** ./src/events/keys.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configureKeyPress": () => (/* binding */ configureKeyPress)
/* harmony export */ });
var configureKeyPress = function (controller) {
    window.addEventListener("keydown", function (e) {
        controller.press(e.key);
    });
    window.addEventListener("keyup", function (e) {
        controller.release(e.key);
    });
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites */ "./src/sprites/index.ts");
/* harmony import */ var _render_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/canvas */ "./src/render/canvas.ts");
/* harmony import */ var _events_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/keys */ "./src/events/keys.ts");
/* harmony import */ var _render_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render/animation */ "./src/render/animation.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state */ "./src/state/index.ts");
/* harmony import */ var _attacks_attackList_toxicDrain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attacks/attackList/toxicDrain */ "./src/attacks/attackList/toxicDrain.ts");
/* harmony import */ var _attacks_attackList_softGrass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attacks/attackList/softGrass */ "./src/attacks/attackList/softGrass.ts");
/* harmony import */ var _attacks_attackList_citricHealing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attacks/attackList/citricHealing */ "./src/attacks/attackList/citricHealing.ts");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _img_november_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/november.png */ "./src/img/november.png");
/* harmony import */ var _img_november_foreground_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/november_foreground.png */ "./src/img/november_foreground.png");
/* harmony import */ var _img_main_char_sprite_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/main_char_sprite.png */ "./src/img/main_char_sprite.png");
/* harmony import */ var _img_mushroom_boss_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/mushroom_boss.png */ "./src/img/mushroom_boss.png");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














var loadImage = function (image) {
    return new Promise(function (resolve, reject) {
        image.onload = function () {
            resolve(image);
        };
        image.onerror = function (e) {
            reject(e);
        };
    });
};
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var playerImg, bgImg, fgImg, enemyImg, images, playerFrames, bg, fg, player, enemyCoords, enemies, state, canvas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                playerImg = new Image();
                bgImg = new Image();
                fgImg = new Image();
                enemyImg = new Image();
                images = [playerImg, bgImg, fgImg, enemyImg];
                bgImg.src = _img_november_png__WEBPACK_IMPORTED_MODULE_10__["default"];
                playerImg.src = _img_main_char_sprite_png__WEBPACK_IMPORTED_MODULE_12__["default"];
                fgImg.src = _img_november_foreground_png__WEBPACK_IMPORTED_MODULE_11__["default"];
                enemyImg.src = _img_mushroom_boss_png__WEBPACK_IMPORTED_MODULE_13__["default"];
                return [4 /*yield*/, Promise.all(images.map(loadImage))];
            case 1:
                _a.sent();
                playerFrames = 16;
                bg = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Sprite({
                    position: {
                        x: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_X_OFFSET,
                        y: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_Y_OFFSET,
                    },
                    image: bgImg,
                    width: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_WIDTH,
                    height: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_HEIGHT,
                    directions: {
                        down: 0,
                        up: 0,
                        left: 0,
                        right: 0,
                    },
                });
                fg = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Sprite({
                    position: {
                        x: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_X_OFFSET,
                        y: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_Y_OFFSET,
                    },
                    image: fgImg,
                    width: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_WIDTH,
                    height: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_HEIGHT,
                    directions: {
                        down: 0,
                        up: 0,
                        left: 0,
                        right: 0,
                    },
                });
                player = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Playable({
                    position: {
                        x: _constants__WEBPACK_IMPORTED_MODULE_4__.CHAR_X_OFFSET,
                        y: _constants__WEBPACK_IMPORTED_MODULE_4__.CHAR_Y_OFFSET,
                    },
                    image: playerImg,
                    width: playerImg.width / playerFrames,
                    height: playerImg.height,
                    zoom: 4,
                    frames: playerFrames,
                    directions: {
                        down: 0,
                        up: 4,
                        left: 8,
                        right: 12,
                    },
                }, {
                    hp: 100,
                    hpRegen: 1e-4,
                    mana: 1000,
                    manaRegen: 0.001,
                    muscle: 30,
                    magik: 30,
                    armour: 30,
                    immunity: 30,
                    attacks: [new _attacks_attackList_softGrass__WEBPACK_IMPORTED_MODULE_7__.SoftGrass(), new _attacks_attackList_citricHealing__WEBPACK_IMPORTED_MODULE_8__.CitricHealing()],
                });
                enemyCoords = [{ x: 265, y: 20 }] //, { x: 1500, y: 550 }, { x: 500, y: 500 }];
                ;
                enemies = enemyCoords.map(function (enemyCoords) {
                    var enemy = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Playable({
                        position: enemyCoords,
                        image: enemyImg,
                        width: enemyImg.width,
                        height: enemyImg.height,
                        zoom: 4,
                        directions: {
                            down: 0,
                            up: 0,
                            left: 0,
                            right: 0,
                        },
                    }, {
                        hp: 100,
                        hpRegen: 1e-4,
                        mana: 1000,
                        manaRegen: 0.001,
                        muscle: 10,
                        magik: 30,
                        armour: 10,
                        immunity: 30,
                        attacks: [new _attacks_attackList_toxicDrain__WEBPACK_IMPORTED_MODULE_6__.ToxicDrain()],
                    });
                    return enemy;
                });
                state = new _state__WEBPACK_IMPORTED_MODULE_5__.State({
                    controller: {
                        up: "w",
                        down: "s",
                        left: "a",
                        right: "d",
                        attacks: ["y", "u", "i", "o"],
                    },
                });
                canvas = (0,_render_canvas__WEBPACK_IMPORTED_MODULE_1__.mapSetup)(_constants__WEBPACK_IMPORTED_MODULE_4__.MAP_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_HEIGHT);
                (0,_events_keys__WEBPACK_IMPORTED_MODULE_2__.configureKeyPress)(state.controller);
                (0,_render_animation__WEBPACK_IMPORTED_MODULE_3__.animationBuilder)({ bg: bg, player: player, state: state, canvas: canvas, fg: fg, enemies: enemies });
                return [2 /*return*/];
        }
    });
}); };
main();


/***/ }),

/***/ "./src/render/animation.ts":
/*!*********************************!*\
  !*** ./src/render/animation.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationBuilder": () => (/* binding */ animationBuilder)
/* harmony export */ });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/render/canvas.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collider */ "./src/render/collider/index.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/misc */ "./src/utils/misc.ts");




var motionControl = function (_a) {
    var ctx = _a.ctx, state = _a.state, player = _a.player, enemies = _a.enemies, colliders = _a.colliders;
    var controller = state.controller;
    var futureKeyState = { x: 0, y: 0 };
    if (controller.isPressed("up")) {
        futureKeyState.y = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVESPEED;
    }
    else if (controller.isPressed("left")) {
        futureKeyState.x = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVESPEED;
    }
    else if (controller.isPressed("down")) {
        futureKeyState.y = -_constants__WEBPACK_IMPORTED_MODULE_1__.MOVESPEED;
    }
    else if (controller.isPressed("right")) {
        futureKeyState.x = -_constants__WEBPACK_IMPORTED_MODULE_1__.MOVESPEED;
    }
    var playerCollisions = colliders.some(function (collider) {
        return (0,_collider__WEBPACK_IMPORTED_MODULE_2__.checkCollision)(player, collider, futureKeyState);
    });
    var moveMobile = function (mobile) {
        var movementDirection = controller.getMovement();
        if (!movementDirection) {
            player.animate("idle");
            return;
        }
        var _a = controller.motion[movementDirection], axis = _a.axis, velocity = _a.velocity;
        player.animate(movementDirection);
        enemies.forEach(function (enemy) { return enemy.follow(player, colliders); });
        if (!playerCollisions && (0,_utils_misc__WEBPACK_IMPORTED_MODULE_3__.hasKey)(mobile.position, axis)) {
            mobile.position[axis] += velocity;
        }
    };
    moveMobile(player);
    enemies.forEach(function (enemy) {
        enemy.regen().attack(player, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_3__.randomInt)(0, enemy.attacks.length - 1), ctx);
        player.regen().attack(enemy, controller.getAttack(), ctx);
    });
};
var animationBuilder = function (_a) {
    var bg = _a.bg, player = _a.player, state = _a.state, canvas = _a.canvas, fg = _a.fg, enemies = _a.enemies;
    var ctx = (0,_canvas__WEBPACK_IMPORTED_MODULE_0__.getCtx)(canvas);
    var colliders = (0,_collider__WEBPACK_IMPORTED_MODULE_2__.getColliders)();
    var animate = function () {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        bg.draw(ctx);
        player.draw(ctx);
        enemies.forEach(function (enemy) { return enemy.draw(ctx); });
        fg.draw(ctx);
        window.requestAnimationFrame(animate);
        motionControl({ ctx: ctx, state: state, bg: bg, player: player, enemies: enemies, fg: fg, colliders: colliders });
    };
    animate();
};


/***/ }),

/***/ "./src/render/canvas.ts":
/*!******************************!*\
  !*** ./src/render/canvas.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCtx": () => (/* binding */ getCtx),
/* harmony export */   "mapSetup": () => (/* binding */ mapSetup)
/* harmony export */ });
var mapSetup = function (map_width, map_height) {
    var canvas = document.getElementById("canvas");
    canvas.width = map_width;
    canvas.height = map_height;
    return canvas;
};
var getCtx = function (canvas) {
    var ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    return ctx;
};


/***/ }),

/***/ "./src/render/collider/collisions.ts":
/*!*******************************************!*\
  !*** ./src/render/collider/collisions.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeGrid": () => (/* binding */ makeGrid)
/* harmony export */ });
/* harmony import */ var _data_collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/collision */ "./src/data/collision.ts");

var makeGrid = function (chunkSize) {
    var collisionGrid = [];
    for (var i = 0; i < _data_collision__WEBPACK_IMPORTED_MODULE_0__.collisions.length; i += chunkSize) {
        collisionGrid.push(_data_collision__WEBPACK_IMPORTED_MODULE_0__.collisions.slice(i, i + chunkSize));
    }
    return collisionGrid;
};


/***/ }),

/***/ "./src/render/collider/index.ts":
/*!**************************************!*\
  !*** ./src/render/collider/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxCollider": () => (/* binding */ BoxCollider),
/* harmony export */   "checkCollision": () => (/* binding */ checkCollision),
/* harmony export */   "coordsAbsPosition": () => (/* binding */ coordsAbsPosition),
/* harmony export */   "coordsMapPosition": () => (/* binding */ coordsMapPosition),
/* harmony export */   "getColliders": () => (/* binding */ getColliders)
/* harmony export */ });
/* harmony import */ var _collisions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collisions */ "./src/render/collider/collisions.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");


var BoxCollider = /** @class */ (function () {
    function BoxCollider(_a) {
        var position = _a.position;
        this.position = position;
        this.width = BoxCollider.width;
        this.height = BoxCollider.height;
    }
    BoxCollider.prototype.draw = function (ctx) {
        ctx.strokeStyle = "rgba(100, 0, 0, 0.5)";
        ctx.strokeRect(this.position.x, this.position.y, BoxCollider.width, BoxCollider.height);
        ctx.font = "10px Arial";
        ctx.fillText("(".concat(this.position.x, ", ").concat(this.position.y, ")"), this.position.x + 10, this.position.y + 20);
        ctx.fillStyle = "black";
        ctx.fillRect(this.position.x, this.position.y, 5, 5);
    };
    BoxCollider.width = _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_WIDTH;
    BoxCollider.height = _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_HEIGHT;
    return BoxCollider;
}());

var coordsAbsPosition = function (coords) { return ({
    x: Math.floor((coords.x - _constants__WEBPACK_IMPORTED_MODULE_1__.MAP_X_OFFSET) / _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_WIDTH),
    y: Math.floor((coords.y - _constants__WEBPACK_IMPORTED_MODULE_1__.MAP_Y_OFFSET) / _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_HEIGHT),
}); };
var coordsMapPosition = function (coords) { return ({
    x: (coords.x * _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_WIDTH) + _constants__WEBPACK_IMPORTED_MODULE_1__.MAP_X_OFFSET,
    y: (coords.y * _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_HEIGHT) + _constants__WEBPACK_IMPORTED_MODULE_1__.MAP_Y_OFFSET,
}); };
var getColliders = function () {
    var colliders = [];
    var grid = (0,_collisions__WEBPACK_IMPORTED_MODULE_0__.makeGrid)(_constants__WEBPACK_IMPORTED_MODULE_1__.TILES.rows);
    grid.forEach(function (row, i) {
        row.forEach(function (col, j) {
            if (col === _constants__WEBPACK_IMPORTED_MODULE_1__.IS_COLLIDER) {
                colliders.push(new BoxCollider({
                    position: coordsMapPosition({ x: j, y: i }),
                }));
            }
        });
    });
    return colliders;
};
/**
 *          _____ _____
 *          | P | | C |
 *          ‾‾‾‾‾ ‾‾‾‾‾
 *
 * @param shape1
 * @param shape2
 * @param param2
 * @param tolerance
 * @returns
 */
var checkCollision = function (shape1, shape2, _a, tolerance) {
    var x = _a.x, y = _a.y;
    if (tolerance === void 0) { tolerance = 16; }
    var shape1Position = shape1.position;
    var shape2Position = shape2.position;
    return ((shape1Position.x + shape1.width > shape2Position.x + x + tolerance) // player is to the right of collider
        && (shape1Position.x < shape2Position.x + x + shape2.width - tolerance) // player is to the left of collider
        && (shape1Position.y + shape1.height > shape2Position.y + y + tolerance) // player is below collider
        && (shape1Position.y < shape2Position.y + y + shape2.height - tolerance)); // player is above collider
};


/***/ }),

/***/ "./src/sprites/index.ts":
/*!******************************!*\
  !*** ./src/sprites/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Playable": () => (/* binding */ Playable),
/* harmony export */   "Sprite": () => (/* binding */ Sprite)
/* harmony export */ });
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/misc */ "./src/utils/misc.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _render_collider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/collider */ "./src/render/collider/index.ts");
/* harmony import */ var _pathfinder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pathfinder */ "./src/sprites/pathfinder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Sprite = /** @class */ (function () {
    function Sprite(_a) {
        var position = _a.position, image = _a.image, width = _a.width, height = _a.height, directions = _a.directions, _b = _a.zoom, zoom = _b === void 0 ? 1 : _b, _c = _a.frames, frames = _c === void 0 ? 1 : _c;
        this.position = position;
        this.zoom = zoom;
        this.image = image;
        this.width = width * this.zoom;
        this.height = height * this.zoom;
        this.face = 0;
        this.currentFrame = 0;
        this.frames = frames;
        this.directions = directions;
        this.framesPerDirection = this.frames / Object.keys(this.directions).length;
    }
    Sprite.prototype.draw = function (ctx) {
        ctx.drawImage(this.image, this.currentFrame, 0, this.image.width / this.frames, this.image.height, this.position.x, this.position.y, (this.image.width / this.frames) * this.zoom, this.image.height * this.zoom);
        return this;
    };
    return Sprite;
}());

var Playable = /** @class */ (function (_super) {
    __extends(Playable, _super);
    function Playable(spriteArgs, _a) {
        var hp = _a.hp, hpRegen = _a.hpRegen, mana = _a.mana, manaRegen = _a.manaRegen, muscle = _a.muscle, magik = _a.magik, armour = _a.armour, immunity = _a.immunity, attacks = _a.attacks;
        var _this = _super.call(this, spriteArgs) || this;
        _this.maxHp = hp;
        _this.hp = hp;
        _this.hpRegen = hpRegen;
        _this.maxMana = mana;
        _this.mana = mana;
        _this.manaRegen = manaRegen;
        _this.muscle = muscle;
        _this.magik = magik;
        _this.refreshRate = _this.framesPerDirection / (_this.frames * 2);
        _this.armour = armour;
        _this.immunity = immunity;
        _this.path = [];
        _this.attacks = attacks;
        return _this;
    }
    Playable.prototype.idleAnimation = function () {
        for (var _i = 0, _a = Object.values(this.directions); _i < _a.length; _i++) {
            var frameIdx = _a[_i];
            var face = this.currentFrame / this.frames;
            if (face < frameIdx) {
                break;
            }
            this.face = frameIdx;
        }
        this.currentFrame = Math.floor(this.face) * this.frames;
        return this;
    };
    Playable.prototype.walkAnimation = function (direction) {
        if (!(0,_utils_misc__WEBPACK_IMPORTED_MODULE_0__.hasKey)(this.directions, direction)) {
            return this;
        }
        var firstFrame = this.directions[direction];
        var lastFrame = this.directions[direction] + this.framesPerDirection;
        this.face =
            this.face >= firstFrame && this.face < lastFrame
                ? this.face + this.refreshRate
                : firstFrame;
        this.currentFrame = Math.floor(this.face) * this.frames;
        return this;
    };
    Playable.prototype.animate = function (direction) {
        if (direction === "idle") {
            this.idleAnimation();
        }
        else {
            this.walkAnimation(direction);
        }
        return this;
    };
    Playable.prototype.alive = function () {
        return this.hp > 0;
    };
    Playable.prototype.regen = function () {
        if (!this.alive()) {
            return this;
        }
        this.hp = Math.min(this.maxHp, this.hp + this.maxHp * this.hpRegen);
        this.mana = Math.min(this.maxMana, this.mana + this.maxMana * this.manaRegen);
        return this;
    };
    Playable.prototype.follow = function (target, colliders) {
        if (!target.alive()) {
            return this;
        }
        var currentPosition = (0,_render_collider__WEBPACK_IMPORTED_MODULE_2__.coordsAbsPosition)(this.position);
        var targetPosition = (0,_render_collider__WEBPACK_IMPORTED_MODULE_2__.coordsAbsPosition)(target.position);
        if (this.path.length === 0) {
            this.path = new _pathfinder__WEBPACK_IMPORTED_MODULE_3__.PathFinder()
                .find(currentPosition, targetPosition, colliders)
                .map(_render_collider__WEBPACK_IMPORTED_MODULE_2__.coordsMapPosition);
        }
        if (this.path.length) {
            this.crawl(this.path.shift());
        }
        return this;
    };
    Playable.prototype.crawl = function (coords) {
        var x = coords.x - this.position.x;
        var y = coords.y - this.position.y;
        this.position.x += x;
        this.position.y += y;
        return this;
    };
    Playable.prototype.attack = function (target, choice, ctx) {
        if (this.hp === 0 || choice === null) {
            return this;
        }
        var attack = this.attacks[choice];
        var inRange = (0,_render_collider__WEBPACK_IMPORTED_MODULE_2__.checkCollision)(target, this, { x: 0, y: 0 }, -attack.range);
        if (!inRange ||
            (attack.damage > 0 && target.hp === 0) ||
            attack.cost > this.mana) {
            return this;
        }
        var user = this;
        attack.activate(user, target).render(user, target, ctx);
        return this;
    };
    Playable.prototype.takeDamage = function (damage) {
        this.hp = Math.max(0, this.hp - damage);
        return this;
    };
    Playable.prototype.heal = function (bonusHp) {
        this.hp = Math.min(this.maxHp, this.hp + bonusHp);
        return this;
    };
    Playable.prototype.reduceMana = function (manaCost) {
        this.mana = Math.max(0, this.mana - manaCost);
        return this;
    };
    Playable.prototype.hpBarColor = function () {
        if (this.hp > 50) {
            return "#65d670";
        }
        else if (this.hp > 20) {
            return "#ffd700";
        }
        else {
            return "#ff0000";
        }
    };
    Playable.prototype.drawMeter = function (ctx) {
        var BarMaxWidth = this.width;
        var x = this.position.x - _constants__WEBPACK_IMPORTED_MODULE_1__.BAR_OFFSET;
        var y = this.position.y - 20;
        ctx.fillStyle = "#fff";
        ctx.fillRect(x, y, BarMaxWidth + _constants__WEBPACK_IMPORTED_MODULE_1__.BAR_OFFSET * 2, _constants__WEBPACK_IMPORTED_MODULE_1__.BAR_HEIGHT + _constants__WEBPACK_IMPORTED_MODULE_1__.BAR_OFFSET * 2);
        return this;
    };
    Playable.prototype.drawHP = function (ctx) {
        var BarMaxWidth = this.width;
        var hpBar = (this.hp / this.maxHp) * BarMaxWidth;
        var x = this.position.x;
        var y = this.position.y - 20 + _constants__WEBPACK_IMPORTED_MODULE_1__.BAR_OFFSET;
        ctx.fillStyle = this.hpBarColor();
        ctx.fillRect(x, y, hpBar, 5);
        return this;
    };
    Playable.prototype.drawMana = function (ctx) {
        var BarMaxWidth = this.width;
        var currentMana = (this.mana / this.maxMana) * BarMaxWidth;
        var x = this.position.x;
        var y = this.position.y - 20 + _constants__WEBPACK_IMPORTED_MODULE_1__.BAR_OFFSET + 5 + _constants__WEBPACK_IMPORTED_MODULE_1__.BAR_OFFSET;
        var width = currentMana;
        ctx.fillStyle = "#0077da";
        ctx.fillRect(x, y, width, 3);
        return this;
    };
    Playable.prototype.drawDebug = function (ctx) {
        ctx.strokeStyle = "rgba(100, 0, 0, 0.5)";
        ctx.fillStyle = "black";
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
        ctx.font = "10px Arial";
        ctx.fillText("(".concat(this.position.x, ", ").concat(this.position.y, ")"), this.position.x + 10, this.position.y + this.height + 20);
        ctx.fillRect(this.position.x, this.position.y, 5, 5);
        return this;
    };
    Playable.prototype.draw = function (ctx) {
        if (this.hp == 0) {
            return this;
        }
        this.drawMeter(ctx).drawHP(ctx).drawMana(ctx);
        ctx.drawImage(this.image, this.currentFrame, 0, this.image.width / this.frames, this.image.height, this.position.x, this.position.y, (this.image.width / this.frames) * this.zoom, this.image.height * this.zoom);
        return this;
    };
    return Playable;
}(Sprite));



/***/ }),

/***/ "./src/sprites/pathfinder.ts":
/*!***********************************!*\
  !*** ./src/sprites/pathfinder.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathFinder": () => (/* binding */ PathFinder)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _render_collider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/collider */ "./src/render/collider/index.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/misc */ "./src/utils/misc.ts");
/* harmony import */ var _utils_priorityQueue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/priorityQueue */ "./src/utils/priorityQueue.ts");




var encodeCoords = function (coordinates) {
    return "".concat(coordinates.x, "-").concat(coordinates.y);
};
var PathFinder = /** @class */ (function () {
    function PathFinder() {
        this.paths = {};
        this.visited = new Set();
        this.surroundings = new _utils_priorityQueue__WEBPACK_IMPORTED_MODULE_3__.PriorityQueue();
    }
    PathFinder.prototype.isSameCoords = function (c1, c2) {
        return c1.x === c2.x && c1.y === c2.y;
    };
    PathFinder.prototype.buildPath = function (key) {
        if (!this.paths.hasOwnProperty(key)) {
            return [];
        }
        var path = [];
        var current = this.paths[key];
        while (current.parent) {
            path.push(current.position);
            current = this.paths[encodeCoords(current.parent)];
        }
        return path.reverse();
    };
    PathFinder.prototype.find = function (source, destination, colliders) {
        var _this = this;
        var srcKey = encodeCoords(source);
        var path = [];
        var aStarRecord = {
            fScore: 0,
            gScore: 0,
            hScore: 0,
            parent: null,
            position: source,
            key: srcKey,
        };
        this.visited.add(srcKey);
        this.paths[srcKey] = aStarRecord;
        this.surroundings.nq(0, aStarRecord);
        while (!this.surroundings.empty()) {
            var current = this.surroundings.dq();
            this.paths[current.key] = current;
            if (this.isSameCoords(current.position, destination)) {
                return this.buildPath(current.key);
            }
            var _loop_1 = function (direction) {
                var horizontal = direction[0], vertical = direction[1];
                var newCoordinates = {
                    x: current.position.x + horizontal,
                    y: current.position.y + vertical,
                };
                var newKey = encodeCoords(newCoordinates);
                var isBoundary = colliders.some(function (collider) {
                    return _this.isSameCoords(newCoordinates, (0,_render_collider__WEBPACK_IMPORTED_MODULE_1__.coordsAbsPosition)(collider.position));
                });
                if (isBoundary || this_1.visited.has(newKey)) {
                    return "continue";
                }
                var gScore = current.gScore + 1;
                var hScore = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_2__.manhattanDistance)(newCoordinates, destination);
                var fScore = gScore + hScore;
                this_1.visited.add(newKey);
                this_1.surroundings.nq(fScore, {
                    fScore: fScore,
                    gScore: gScore,
                    hScore: hScore,
                    parent: current.position,
                    position: newCoordinates,
                    key: newKey,
                });
            };
            var this_1 = this;
            for (var _i = 0, DIRECTIONS_1 = _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS; _i < DIRECTIONS_1.length; _i++) {
                var direction = DIRECTIONS_1[_i];
                _loop_1(direction);
            }
        }
        return path;
    };
    return PathFinder;
}());



/***/ }),

/***/ "./src/state/index.ts":
/*!****************************!*\
  !*** ./src/state/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller),
/* harmony export */   "State": () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/misc */ "./src/utils/misc.ts");


var Controller = /** @class */ (function () {
    function Controller(_a) {
        var _b;
        var up = _a.up, down = _a.down, left = _a.left, right = _a.right, attacks = _a.attacks;
        this.motion = {
            up: {
                key: up,
                axis: "y",
                velocity: -_constants__WEBPACK_IMPORTED_MODULE_0__.MOVESPEED,
                pressed: false,
            },
            down: {
                key: down,
                axis: "y",
                velocity: _constants__WEBPACK_IMPORTED_MODULE_0__.MOVESPEED,
                pressed: false,
            },
            left: {
                key: left,
                axis: "x",
                velocity: -_constants__WEBPACK_IMPORTED_MODULE_0__.MOVESPEED,
                pressed: false
            },
            right: {
                key: right,
                axis: "x",
                velocity: _constants__WEBPACK_IMPORTED_MODULE_0__.MOVESPEED,
                pressed: false
            },
        };
        this.directionBindings = (_b = {},
            _b[up] = "up",
            _b[down] = "down",
            _b[left] = "left",
            _b[right] = "right",
            _b);
        this.attackBindings = {};
        this.activeAttacks = attacks.map(function (_) { return false; });
        for (var i = 0; i < attacks.length; i++) {
            this.attackBindings[attacks[i]] = i;
        }
    }
    Controller.prototype.idle = function () {
        var _this = this;
        return Object.keys(this.motion).every(function (direction) { return !_this.motion[direction].pressed; });
    };
    Controller.prototype.getMovement = function () {
        var _this = this;
        var directions = Object.keys(this.motion).filter(function (direction) { return _this.motion[direction].pressed; });
        if (directions.length === 1) {
            return directions[0];
        }
        return null;
    };
    Controller.prototype.getAttack = function () {
        var attackIndices = this.activeAttacks.map(function (attackActive, i) { return attackActive ? i : -1; }).filter(function (attackIdx) { return attackIdx !== -1; });
        if (attackIndices.length === 1) {
            return attackIndices[0];
        }
        return null;
    };
    Controller.prototype.press = function (key) {
        if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.hasKey)(this.directionBindings, key)) {
            var direction = this.directionBindings[key];
            this.motion[direction].pressed = true;
        }
        else if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.hasKey)(this.attackBindings, key)) {
            var attack = this.attackBindings[key];
            this.activeAttacks[attack] = true;
        }
    };
    Controller.prototype.release = function (key) {
        if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.hasKey)(this.directionBindings, key)) {
            var direction = this.directionBindings[key];
            this.motion[direction].pressed = false;
        }
        else if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.hasKey)(this.attackBindings, key)) {
            var attack = this.attackBindings[key];
            this.activeAttacks[attack] = false;
        }
    };
    Controller.prototype.isPressed = function (key) {
        if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.hasKey)(this.motion, key)) {
            return this.motion[key].pressed;
        }
        else if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.hasKey)(this.activeAttacks, key)) {
            return this.activeAttacks[key];
        }
        return false;
    };
    return Controller;
}());

var State = /** @class */ (function () {
    function State(_a) {
        var controller = _a.controller;
        this.controller = new Controller(controller);
    }
    return State;
}());



/***/ }),

/***/ "./src/utils/misc.ts":
/*!***************************!*\
  !*** ./src/utils/misc.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasKey": () => (/* binding */ hasKey),
/* harmony export */   "manhattanDistance": () => (/* binding */ manhattanDistance),
/* harmony export */   "randomInt": () => (/* binding */ randomInt)
/* harmony export */ });
var hasKey = function (obj, key) {
    return key in obj;
};
var manhattanDistance = function (a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
};
var randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


/***/ }),

/***/ "./src/utils/priorityQueue.ts":
/*!************************************!*\
  !*** ./src/utils/priorityQueue.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriorityQueue": () => (/* binding */ PriorityQueue)
/* harmony export */ });
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.items = [];
    }
    PriorityQueue.prototype.nq = function (priority, element) {
        var left = 0;
        var right = this.items.length - 1;
        var mid = 0;
        var pos = -1;
        if (this.items.length === 0) {
            this.items.push({ priority: priority, element: element });
            return this;
        }
        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (this.items[mid].priority > priority) {
                right = mid - 1;
                pos = mid;
            }
            else {
                left = mid + 1;
            }
        }
        this.items.splice(pos, 0, { priority: priority, element: element });
        return this;
    };
    PriorityQueue.prototype.dq = function () {
        if (this.items.length) {
            return this.items.shift().element;
        }
        return null;
    };
    PriorityQueue.prototype.empty = function () {
        return this.items.length === 0;
    };
    return PriorityQueue;
}());



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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/attacks/attackList/citricHealing.ts");
/******/ 	__webpack_require__("./src/attacks/attackList/softGrass.ts");
/******/ 	__webpack_require__("./src/attacks/attackList/toxicDrain.ts");
/******/ 	__webpack_require__("./src/attacks/core.ts");
/******/ 	__webpack_require__("./src/constants.ts");
/******/ 	__webpack_require__("./src/data/collision.ts");
/******/ 	__webpack_require__("./src/events/keys.ts");
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	__webpack_require__("./src/render/animation.ts");
/******/ 	__webpack_require__("./src/render/canvas.ts");
/******/ 	__webpack_require__("./src/render/collider/collisions.ts");
/******/ 	__webpack_require__("./src/render/collider/index.ts");
/******/ 	__webpack_require__("./src/sprites/index.ts");
/******/ 	__webpack_require__("./src/sprites/pathfinder.ts");
/******/ 	__webpack_require__("./src/state/index.ts");
/******/ 	__webpack_require__("./src/types/index.d.ts");
/******/ 	__webpack_require__("./src/utils/misc.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/utils/priorityQueue.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM5SyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzFILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDOUgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM1SSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3BKLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDcEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM1SixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2xJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDaEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUN4SSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ2xKLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDeEosQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNsSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3hJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDMUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNsSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3BKLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDcEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2xJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDeEssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFF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O1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2ltZy9tYWluX2NoYXJfc3ByaXRlLnBuZyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2ltZy9tdXNocm9vbV9ib3NzLnBuZyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2ltZy9ub3ZlbWJlci5wbmciLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9pbWcvbm92ZW1iZXJfZm9yZWdyb3VuZC5wbmciLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy90eXBlcy9pbmRleC5kLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9hdHRhY2tzL2F0dGFja0xpc3QvY2l0cmljSGVhbGluZy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9zb2Z0R3Jhc3MudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9hdHRhY2tzL2F0dGFja0xpc3QvdG94aWNEcmFpbi50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2F0dGFja3MvY29yZS50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2RhdGEvY29sbGlzaW9uLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvZXZlbnRzL2tleXMudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3JlbmRlci9hbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9yZW5kZXIvY2FudmFzLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvcmVuZGVyL2NvbGxpZGVyL2NvbGxpc2lvbnMudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9yZW5kZXIvY29sbGlkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9zcHJpdGVzL2luZGV4LnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvc3ByaXRlcy9wYXRoZmluZGVyLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvc3RhdGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy91dGlscy9taXNjLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvdXRpbHMvcHJpb3JpdHlRdWV1ZS50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzZmU3OWE2N2ViMzk0MDIwM2RmOTkyYjI4NTU1MmMzZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDVmOGRkZjE5NDBmZjI1YWZiODlmMjkyM2YzYTA4MWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjUxNjc5Mjk5NTU1ZWY2OTEzOTAwMWI1OTY3NTI0MWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3YTdlNTczMWY2OWE4NDkxOGNmODYzNzA2NDYzNjZmZi5wbmdcIjsiLCIiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQXR0YWNrIH0gZnJvbSBcIi4uL2NvcmVcIjtcbmltcG9ydCB7IFBsYXlhYmxlIH0gZnJvbSBcIi4uLy4uL3Nwcml0ZXNcIjtcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gXCIuLi8uLi91dGlscy9taXNjXCI7XG5cbmV4cG9ydCBjbGFzcyBDaXRyaWNIZWFsaW5nIGV4dGVuZHMgQXR0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogXCJDaXRyaWMgSGVhbGluZ1wiLFxuICAgICAgZGFtYWdlOiAwLFxuICAgICAgaGVhbDogMTAsXG4gICAgICB0eXBlOiBcImdyYXNzXCIsXG4gICAgICByYW5nZTogMTAwMCxcbiAgICAgIGNvc3Q6IDUwLFxuICAgICAgYWNjdXJhY3k6IDAuOCxcbiAgICAgIGNvb2xkb3duOiAyLFxuICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICBlZmZlY3RzOiBbXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKHVzZXI6IFBsYXlhYmxlLCB0YXJnZXQ6IFBsYXlhYmxlKTogQ2l0cmljSGVhbGluZyB7XG4gICAgdXNlci5oZWFsKHRoaXMuaGVhbCkucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIHVzZXI6IFBsYXlhYmxlLFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKTogQ2l0cmljSGVhbGluZyB7XG4gICAgY29uc3QgciA9IHJhbmRvbUludCh1c2VyLndpZHRoIC8gMTYsIHVzZXIud2lkdGgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KVwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJhbmRvbUludCh1c2VyLnBvc2l0aW9uLngsIHVzZXIucG9zaXRpb24ueCArIHVzZXIud2lkdGgpO1xuICAgICAgY29uc3QgeSA9IHJhbmRvbUludCh1c2VyLnBvc2l0aW9uLnksIHVzZXIucG9zaXRpb24ueSAtIDUwKTtcbiAgICAgIGNvbnN0IHcgPSA1O1xuICAgICAgY29uc3QgaCA9IHJhbmRvbUludCgyMCwgMTAwKTtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0dGFjayB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBQbGF5YWJsZSB9IGZyb20gXCIuLi8uLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY2xhc3MgU29mdEdyYXNzIGV4dGVuZHMgQXR0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogXCJTb2Z0IEdyYXNzXCIsXG4gICAgICBkYW1hZ2U6IDIsXG4gICAgICB0eXBlOiBcImdyYXNzXCIsXG4gICAgICByYW5nZTogMTYsXG4gICAgICBjb3N0OiAyMCxcbiAgICAgIGFjY3VyYWN5OiAwLjgsXG4gICAgICBjb29sZG93bjogMixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgZWZmZWN0czogW10sXG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSh1c2VyOiBQbGF5YWJsZSwgdGFyZ2V0OiBQbGF5YWJsZSk6IFNvZnRHcmFzcyB7XG4gICAgY29uc3QgZGFtYWdlID0gdXNlci5tYWdpayAvIHRhcmdldC5pbW11bml0eTtcbiAgICB0YXJnZXQudGFrZURhbWFnZShkYW1hZ2UpO1xuICAgIHVzZXJcbiAgICAgIC5oZWFsKE1hdGguZmxvb3IoZGFtYWdlIC8gMikpXG4gICAgICAucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIHVzZXI6IFBsYXlhYmxlLFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKTogU29mdEdyYXNzIHtcbiAgICBjb25zdCByID0gcmFuZG9tSW50KHVzZXIud2lkdGggLyAxNiwgdXNlci53aWR0aCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSg4LCAxNjgsIDg2LCAwLjUpXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICB1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoIC8gMixcbiAgICAgIHVzZXIucG9zaXRpb24ueSArIHVzZXIuaGVpZ2h0IC8gMixcbiAgICAgIHIsXG4gICAgICAwLFxuICAgICAgMiAqIE1hdGguUElcbiAgICApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBdHRhY2sgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgUGxheWFibGUgfSBmcm9tIFwiLi4vLi4vc3ByaXRlc1wiO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL21pc2NcIjtcblxuZXhwb3J0IGNsYXNzIFRveGljRHJhaW4gZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIlRveGljIERyYWluXCIsXG4gICAgICBkYW1hZ2U6IDIwLFxuICAgICAgdHlwZTogXCJwb2lzb25cIixcbiAgICAgIHJhbmdlOiAxNixcbiAgICAgIGFjY3VyYWN5OiAwLjgsXG4gICAgICBjb3N0OiAyMCxcbiAgICAgIGNvb2xkb3duOiAyLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiVGhlIHVzZXIgZHJhaW5zIHRoZSB0YXJnZXQncyBIUCBhbmQgcmVsZWFzZXMgdG94aWMgZnVtZXMuIEhhcyAxNSUgY2hhbmNlIG9mIHBvaXNvbmluZyB0aGUgdGFyZ2V0LlwiLFxuICAgICAgZWZmZWN0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJwb2lzb25cIixcbiAgICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgICBzdGFydFZhbHVlOiAwLFxuICAgICAgICAgIGVuZFZhbHVlOiAxMCxcbiAgICAgICAgICBpbmM6IDEsXG4gICAgICAgICAgY2hhbmNlOiAwLjE1LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKHVzZXI6IElQbGF5YWJsZSwgdGFyZ2V0OiBJUGxheWFibGUpOiBUb3hpY0RyYWluIHtcbiAgICBjb25zdCBkYW1hZ2UgPSB1c2VyLm1hZ2lrIC8gdGFyZ2V0LmltbXVuaXR5O1xuICAgIHRhcmdldC50YWtlRGFtYWdlKGRhbWFnZSk7XG4gICAgdXNlci5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBUb3hpY0RyYWluIHtcbiAgICBjb25zdCByID0gcmFuZG9tSW50KHVzZXIud2lkdGggLyAxNiwgdXNlci53aWR0aCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgxODAsIDExMiwgMjI0LCAwLjUpXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICB1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoIC8gMixcbiAgICAgIHVzZXIucG9zaXRpb24ueSArIHVzZXIuaGVpZ2h0IC8gMixcbiAgICAgIHIsXG4gICAgICAwLFxuICAgICAgMiAqIE1hdGguUElcbiAgICApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRWZmZWN0IGltcGxlbWVudHMgSUVmZmVjdCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgc3RhcnRWYWx1ZTogbnVtYmVyO1xuICAgIGVuZFZhbHVlOiBudW1iZXI7XG4gICAgaW5jOiBudW1iZXI7XG4gICAgY2hhbmNlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBzdGFydFZhbHVlLFxuICAgICAgICBlbmRWYWx1ZSxcbiAgICAgICAgaW5jLFxuICAgICAgICBjaGFuY2VcbiAgICB9OiBJRWZmZWN0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgdGhpcy5lbmRWYWx1ZSA9IGVuZFZhbHVlO1xuICAgICAgICB0aGlzLmluYyA9IGluYztcbiAgICAgICAgdGhpcy5jaGFuY2UgPSBjaGFuY2U7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXR0YWNrIGltcGxlbWVudHMgSUF0dGFjayB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGFtYWdlOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbiAgcmFuZ2U6IG51bWJlcjtcbiAgaGVhbDogbnVtYmVyO1xuICBhY2N1cmFjeTogbnVtYmVyO1xuICBjb29sZG93bjogbnVtYmVyO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjb3N0OiBudW1iZXI7XG4gIGVmZmVjdHM6IEVmZmVjdFtdO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBuYW1lLFxuICAgIGRhbWFnZSxcbiAgICB0eXBlLFxuICAgIHJhbmdlLFxuICAgIGFjY3VyYWN5LFxuICAgIGNvb2xkb3duLFxuICAgIGNvc3QsXG4gICAgaGVhbCxcbiAgICBlZmZlY3RzLFxuICAgIGRlc2NyaXB0aW9uXG4gIH06IElBdHRhY2spIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jb3N0ID0gY29zdDtcbiAgICB0aGlzLmhlYWwgPSBoZWFsO1xuICAgIHRoaXMuZWZmZWN0cyA9IGVmZmVjdHM7XG4gICAgdGhpcy5yYW5nZSA9IHJhbmdlO1xuICAgIHRoaXMuYWNjdXJhY3kgPSBhY2N1cmFjeTtcbiAgICB0aGlzLmNvb2xkb3duID0gY29vbGRvd247XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogSVBsYXlhYmxlLCB0YXJnZXQ6IElQbGF5YWJsZSk6IElBdHRhY2sge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgTUFQX1dJRFRIOiBudW1iZXIgPSAxOTIwO1xuZXhwb3J0IGNvbnN0IE1BUF9IRUlHSFQ6IG51bWJlciA9IDE0NDA7XG5leHBvcnQgY29uc3QgVElMRV9XSURUSDogbnVtYmVyID0gNjQ7XG5leHBvcnQgY29uc3QgVElMRV9IRUlHSFQ6IG51bWJlciA9IDY0O1xuZXhwb3J0IGNvbnN0IENIQVJfV0lEVEg6IG51bWJlciA9IDE2O1xuZXhwb3J0IGNvbnN0IENIQVJfSEVJR0hUOiBudW1iZXIgPSAxNjtcbmV4cG9ydCBjb25zdCBNQVBfWF9PRkZTRVQ6IG51bWJlciA9IC02MDA7XG5leHBvcnQgY29uc3QgTUFQX1lfT0ZGU0VUOiBudW1iZXIgPSAtOTAwO1xuXG5leHBvcnQgY29uc3QgQ0hBUl9YX09GRlNFVDogbnVtYmVyID0gNjAwO1xuZXhwb3J0IGNvbnN0IENIQVJfWV9PRkZTRVQ6IG51bWJlciA9IDYwMDtcbmV4cG9ydCBjb25zdCBCQVJfT0ZGU0VUOiBudW1iZXIgPSAyO1xuZXhwb3J0IGNvbnN0IEJBUl9IRUlHSFQ6IG51bWJlciA9IDEwO1xuXG5leHBvcnQgY29uc3QgRU5FTVlfWF9PRkZTRVQ6IG51bWJlciA9IDI2NTtcbmV4cG9ydCBjb25zdCBFTkVNWV9ZX09GRlNFVDogbnVtYmVyID0gMjA7XG5leHBvcnQgY29uc3QgRU5FTVlfQ0hBU0VfRElTVEFOQ0U6IG51bWJlciA9IENIQVJfV0lEVEggKiA1MDtcblxuZXhwb3J0IGNvbnN0IElTX0NPTExJREVSOiBudW1iZXIgPSA5NTU7XG5leHBvcnQgY29uc3QgTU9WRVNQRUVEOiBudW1iZXIgPSA0O1xuZXhwb3J0IGNvbnN0IFRJTEVTOiB7IHJvd3M6IG51bWJlciwgY29sczogbnVtYmVyIH0gPSB7XG4gICAgcm93czogNDAsXG4gICAgY29sczogMzAsXG59XG5cbmV4cG9ydCBjb25zdCBESVJFQ1RJT05TID0gW1stMSwgMF0sIFswLCAtMV0sIFsxLCAwXSwgWzAsIDFdXTtcbiIsImV4cG9ydCBjb25zdCBjb2xsaXNpb25zOiBudW1iZXJbXSA9IFtcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCA5NTUsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCAwLCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCA5NTUsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDk1NSwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgOTU1LCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBcbl0iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmVLZXlQcmVzcyA9IChjb250cm9sbGVyOiBDb250cm9sbGVyKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnRyb2xsZXIucHJlc3MoZS5rZXkpO1xuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnRyb2xsZXIucmVsZWFzZShlLmtleSk7XG4gICAgfSlcbn1cbiIsImltcG9ydCB7IFNwcml0ZSwgUGxheWFibGUgfSBmcm9tIFwiLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyBtYXBTZXR1cCB9IGZyb20gXCIuL3JlbmRlci9jYW52YXNcIjtcbmltcG9ydCB7IGNvbmZpZ3VyZUtleVByZXNzIH0gZnJvbSBcIi4vZXZlbnRzL2tleXNcIjtcbmltcG9ydCB7IGFuaW1hdGlvbkJ1aWxkZXIgfSBmcm9tIFwiLi9yZW5kZXIvYW5pbWF0aW9uXCI7XG5pbXBvcnQge1xuICBNQVBfV0lEVEgsXG4gIE1BUF9IRUlHSFQsXG4gIE1BUF9YX09GRlNFVCxcbiAgTUFQX1lfT0ZGU0VULFxuICBDSEFSX1hfT0ZGU0VULFxuICBDSEFSX1lfT0ZGU0VULFxuICBFTkVNWV9YX09GRlNFVCxcbiAgRU5FTVlfWV9PRkZTRVQsXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgVG94aWNEcmFpbiB9IGZyb20gXCIuL2F0dGFja3MvYXR0YWNrTGlzdC90b3hpY0RyYWluXCI7XG5pbXBvcnQgeyBTb2Z0R3Jhc3MgfSBmcm9tIFwiLi9hdHRhY2tzL2F0dGFja0xpc3Qvc29mdEdyYXNzXCI7XG5pbXBvcnQgeyBDaXRyaWNIZWFsaW5nIH0gZnJvbSBcIi4vYXR0YWNrcy9hdHRhY2tMaXN0L2NpdHJpY0hlYWxpbmdcIjtcblxuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgQmFja2dyb3VuZFNwcml0ZSBmcm9tIFwiLi9pbWcvbm92ZW1iZXIucG5nXCI7XG5pbXBvcnQgRm9yZWdyb3VuZFNwcml0ZSBmcm9tIFwiLi9pbWcvbm92ZW1iZXJfZm9yZWdyb3VuZC5wbmdcIjtcbmltcG9ydCBQbGF5ZXJTcHJpdGUgZnJvbSBcIi4vaW1nL21haW5fY2hhcl9zcHJpdGUucG5nXCI7XG5pbXBvcnQgRW5lbXlTcHJpdGUgZnJvbSBcIi4vaW1nL211c2hyb29tX2Jvc3MucG5nXCI7XG5cbmNvbnN0IGxvYWRJbWFnZSA9IChpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4gPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoaW1hZ2UpO1xuICAgIH1cbiAgICBpbWFnZS5vbmVycm9yID0gZSA9PiB7XG4gICAgICByZWplY3QoZSlcbiAgICB9XG4gIH0pXG59O1xuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgYmdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgZmdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgZW5lbXlJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgaW1hZ2VzID0gW3BsYXllckltZywgYmdJbWcsIGZnSW1nLCBlbmVteUltZ107XG4gIFxuICBiZ0ltZy5zcmMgPSBCYWNrZ3JvdW5kU3ByaXRlO1xuICBwbGF5ZXJJbWcuc3JjID0gUGxheWVyU3ByaXRlO1xuICBmZ0ltZy5zcmMgPSBGb3JlZ3JvdW5kU3ByaXRlO1xuICBlbmVteUltZy5zcmMgPSBFbmVteVNwcml0ZTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoaW1hZ2VzLm1hcChsb2FkSW1hZ2UpKTtcblxuICBjb25zdCBwbGF5ZXJGcmFtZXMgPSAxNjtcblxuXG5cbiAgY29uc3QgYmcgPSBuZXcgU3ByaXRlKHtcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogTUFQX1hfT0ZGU0VULFxuICAgICAgeTogTUFQX1lfT0ZGU0VULFxuICAgIH0sXG4gICAgaW1hZ2U6IGJnSW1nLFxuICAgIHdpZHRoOiBNQVBfV0lEVEgsXG4gICAgaGVpZ2h0OiBNQVBfSEVJR0hULFxuICAgIGRpcmVjdGlvbnM6IHtcbiAgICAgIGRvd246IDAsXG4gICAgICB1cDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgZmcgPSBuZXcgU3ByaXRlKHtcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogTUFQX1hfT0ZGU0VULFxuICAgICAgeTogTUFQX1lfT0ZGU0VULFxuICAgIH0sXG4gICAgaW1hZ2U6IGZnSW1nLFxuICAgIHdpZHRoOiBNQVBfV0lEVEgsXG4gICAgaGVpZ2h0OiBNQVBfSEVJR0hULFxuICAgIGRpcmVjdGlvbnM6IHtcbiAgICAgIGRvd246IDAsXG4gICAgICB1cDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXlhYmxlKFxuICAgIHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IENIQVJfWF9PRkZTRVQsXG4gICAgICAgIHk6IENIQVJfWV9PRkZTRVQsXG4gICAgICB9LFxuICAgICAgaW1hZ2U6IHBsYXllckltZyxcbiAgICAgIHdpZHRoOiBwbGF5ZXJJbWcud2lkdGggLyBwbGF5ZXJGcmFtZXMsXG4gICAgICBoZWlnaHQ6IHBsYXllckltZy5oZWlnaHQsXG4gICAgICB6b29tOiA0LFxuICAgICAgZnJhbWVzOiBwbGF5ZXJGcmFtZXMsXG4gICAgICBkaXJlY3Rpb25zOiB7XG4gICAgICAgIGRvd246IDAsXG4gICAgICAgIHVwOiA0LFxuICAgICAgICBsZWZ0OiA4LFxuICAgICAgICByaWdodDogMTIsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgaHA6IDEwMCxcbiAgICAgIGhwUmVnZW46IDFlLTQsXG4gICAgICBtYW5hOiAxMDAwLFxuICAgICAgbWFuYVJlZ2VuOiAwLjAwMSxcbiAgICAgIG11c2NsZTogMzAsXG4gICAgICBtYWdpazogMzAsXG4gICAgICBhcm1vdXI6IDMwLFxuICAgICAgaW1tdW5pdHk6IDMwLFxuICAgICAgYXR0YWNrczogW25ldyBTb2Z0R3Jhc3MoKSwgbmV3IENpdHJpY0hlYWxpbmcoKV0sXG4gICAgfVxuICApO1xuICBjb25zdCBlbmVteUNvb3JkcyA9IFt7IHg6IDI2NSwgeTogMjAgfV0gLy8sIHsgeDogMTUwMCwgeTogNTUwIH0sIHsgeDogNTAwLCB5OiA1MDAgfV07XG5cbiAgY29uc3QgZW5lbWllcyA9IGVuZW15Q29vcmRzLm1hcChlbmVteUNvb3JkcyA9PiB7XG4gICAgY29uc3QgZW5lbXkgPSBuZXcgUGxheWFibGUoe1xuICAgICAgICBwb3NpdGlvbjogZW5lbXlDb29yZHMsXG4gICAgICAgIGltYWdlOiBlbmVteUltZyxcbiAgICAgICAgd2lkdGg6IGVuZW15SW1nLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVuZW15SW1nLmhlaWdodCxcbiAgICAgICAgem9vbTogNCxcbiAgICAgICAgZGlyZWN0aW9uczoge1xuICAgICAgICAgIGRvd246IDAsXG4gICAgICAgICAgdXA6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhwOiAxMDAsXG4gICAgICAgIGhwUmVnZW46IDFlLTQsXG4gICAgICAgIG1hbmE6IDEwMDAsXG4gICAgICAgIG1hbmFSZWdlbjogMC4wMDEsXG4gICAgICAgIG11c2NsZTogMTAsXG4gICAgICAgIG1hZ2lrOiAzMCxcbiAgICAgICAgYXJtb3VyOiAxMCxcbiAgICAgICAgaW1tdW5pdHk6IDMwLFxuICAgICAgICBhdHRhY2tzOiBbbmV3IFRveGljRHJhaW4oKV0sXG4gICAgICB9XG4gICAgKVxuICAgIHJldHVybiBlbmVteTtcbiAgfSk7XG5cbiAgY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoe1xuICAgIGNvbnRyb2xsZXI6IHtcbiAgICAgIHVwOiBcIndcIixcbiAgICAgIGRvd246IFwic1wiLFxuICAgICAgbGVmdDogXCJhXCIsXG4gICAgICByaWdodDogXCJkXCIsXG4gICAgICBhdHRhY2tzOiBbXCJ5XCIsIFwidVwiLCBcImlcIiwgXCJvXCJdLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBjYW52YXMgPSBtYXBTZXR1cChNQVBfV0lEVEgsIE1BUF9IRUlHSFQpO1xuICBjb25maWd1cmVLZXlQcmVzcyhzdGF0ZS5jb250cm9sbGVyKTtcbiAgYW5pbWF0aW9uQnVpbGRlcih7IGJnLCBwbGF5ZXIsIHN0YXRlLCBjYW52YXMsIGZnLCBlbmVtaWVzIH0pO1xufTtcblxubWFpbigpO1xuIiwiaW1wb3J0IHsgZ2V0Q3R4IH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBNT1ZFU1BFRUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBnZXRDb2xsaWRlcnMsIGNoZWNrQ29sbGlzaW9uIH0gZnJvbSBcIi4vY29sbGlkZXJcIjtcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIi4vY29sbGlkZXJcIjtcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5pbXBvcnQgeyBTcHJpdGUsIFBsYXlhYmxlIH0gZnJvbSBcIi4uL3Nwcml0ZXNcIjtcbmltcG9ydCB7IGhhc0tleSwgcmFuZG9tSW50IH0gZnJvbSBcIi4uL3V0aWxzL21pc2NcIjtcblxudHlwZSBNb3Rpb25Db250cm9sQXJncyA9IHtcbiAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIHN0YXRlOiBTdGF0ZTtcbiAgYmc6IFNwcml0ZTtcbiAgcGxheWVyOiBQbGF5YWJsZTtcbiAgZW5lbWllczogUGxheWFibGVbXTtcbiAgZmc6IFNwcml0ZTtcbiAgY29sbGlkZXJzOiBCb3hDb2xsaWRlcltdO1xufTtcblxudHlwZSBBbmltYXRpb25CdWlsZGVyQXJncyA9IHtcbiAgYmc6IFNwcml0ZTtcbiAgcGxheWVyOiBQbGF5YWJsZTtcbiAgZW5lbWllczogUGxheWFibGVbXTtcbiAgZmc6IFNwcml0ZTtcbiAgc3RhdGU6IFN0YXRlO1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xufTtcblxuY29uc3QgbW90aW9uQ29udHJvbCA9ICh7XG4gIGN0eCxcbiAgc3RhdGUsXG4gIHBsYXllcixcbiAgZW5lbWllcyxcbiAgY29sbGlkZXJzLFxufTogTW90aW9uQ29udHJvbEFyZ3MpOiB2b2lkID0+IHtcbiAgY29uc3QgeyBjb250cm9sbGVyIH0gPSBzdGF0ZTtcbiAgbGV0IGZ1dHVyZUtleVN0YXRlOiBjb29yZGluYXRlcyA9IHsgeDogMCwgeTogMCB9O1xuXG4gIGlmIChjb250cm9sbGVyLmlzUHJlc3NlZChcInVwXCIpKSB7XG4gICAgZnV0dXJlS2V5U3RhdGUueSA9IE1PVkVTUEVFRDtcbiAgfSBlbHNlIGlmIChjb250cm9sbGVyLmlzUHJlc3NlZChcImxlZnRcIikpIHtcbiAgICBmdXR1cmVLZXlTdGF0ZS54ID0gTU9WRVNQRUVEO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIuaXNQcmVzc2VkKFwiZG93blwiKSkge1xuICAgIGZ1dHVyZUtleVN0YXRlLnkgPSAtTU9WRVNQRUVEO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIuaXNQcmVzc2VkKFwicmlnaHRcIikpIHtcbiAgICBmdXR1cmVLZXlTdGF0ZS54ID0gLU1PVkVTUEVFRDtcbiAgfVxuXG4gIGNvbnN0IHBsYXllckNvbGxpc2lvbnMgPSBjb2xsaWRlcnMuc29tZSgoY29sbGlkZXI6IEJveENvbGxpZGVyKSA9PlxuICAgIGNoZWNrQ29sbGlzaW9uKHBsYXllciwgY29sbGlkZXIsIGZ1dHVyZUtleVN0YXRlKVxuICApO1xuXG4gIGNvbnN0IG1vdmVNb2JpbGUgPSAobW9iaWxlOiBCb3hDb2xsaWRlciB8IFNwcml0ZSkgPT4ge1xuICAgIGNvbnN0IG1vdmVtZW50RGlyZWN0aW9uID0gY29udHJvbGxlci5nZXRNb3ZlbWVudCgpO1xuICAgIGlmICghbW92ZW1lbnREaXJlY3Rpb24pIHtcbiAgICAgIHBsYXllci5hbmltYXRlKFwiaWRsZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBheGlzLCB2ZWxvY2l0eSB9ID0gY29udHJvbGxlci5tb3Rpb25bbW92ZW1lbnREaXJlY3Rpb25dO1xuICAgIHBsYXllci5hbmltYXRlKG1vdmVtZW50RGlyZWN0aW9uKTtcbiAgICBlbmVtaWVzLmZvckVhY2goZW5lbXkgPT4gZW5lbXkuZm9sbG93KHBsYXllciwgY29sbGlkZXJzKSlcblxuICAgIGlmICghcGxheWVyQ29sbGlzaW9ucyAmJiBoYXNLZXkobW9iaWxlLnBvc2l0aW9uLCBheGlzKSkge1xuICAgICAgbW9iaWxlLnBvc2l0aW9uW2F4aXNdICs9IHZlbG9jaXR5O1xuICAgIH1cbiAgfTtcblxuICBtb3ZlTW9iaWxlKHBsYXllcik7XG5cbiAgZW5lbWllcy5mb3JFYWNoKChlbmVteTogUGxheWFibGUpID0+IHtcbiAgICBlbmVteS5yZWdlbigpLmF0dGFjayhwbGF5ZXIsIHJhbmRvbUludCgwLCBlbmVteS5hdHRhY2tzLmxlbmd0aCAtIDEpLCBjdHgpO1xuICAgIHBsYXllci5yZWdlbigpLmF0dGFjayhlbmVteSwgY29udHJvbGxlci5nZXRBdHRhY2soKSwgY3R4KTtcbiAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBhbmltYXRpb25CdWlsZGVyID0gKHtcbiAgYmcsXG4gIHBsYXllcixcbiAgc3RhdGUsXG4gIGNhbnZhcyxcbiAgZmcsXG4gIGVuZW1pZXMsXG59OiBBbmltYXRpb25CdWlsZGVyQXJncyk6IHZvaWQgPT4ge1xuICBjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGdldEN0eChjYW52YXMpO1xuICBjb25zdCBjb2xsaWRlcnMgPSBnZXRDb2xsaWRlcnMoKTtcbiAgY29uc3QgYW5pbWF0ZSA9ICgpOiB2b2lkID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgYmcuZHJhdyhjdHgpO1xuICAgIHBsYXllci5kcmF3KGN0eCk7XG4gICAgZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LmRyYXcoY3R4KSk7XG4gICAgZmcuZHJhdyhjdHgpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgbW90aW9uQ29udHJvbCh7IGN0eCwgc3RhdGUsIGJnLCBwbGF5ZXIsIGVuZW1pZXMsIGZnLCBjb2xsaWRlcnMgfSk7XG4gIH07XG4gIGFuaW1hdGUoKTtcbn07XG4iLCJleHBvcnQgY29uc3QgbWFwU2V0dXAgPSAoXG4gIG1hcF93aWR0aDogbnVtYmVyLFxuICBtYXBfaGVpZ2h0OiBudW1iZXJcbik6IEhUTUxDYW52YXNFbGVtZW50ID0+IHtcbiAgY29uc3QgY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjYW52YXMud2lkdGggPSBtYXBfd2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBtYXBfaGVpZ2h0O1xuICByZXR1cm4gY2FudmFzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEN0eCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0+IHtcbiAgY29uc3QgY3R4ID0gPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gIHJldHVybiBjdHg7XG59O1xuIiwiaW1wb3J0IHsgY29sbGlzaW9ucyB9IGZyb20gXCIuLi8uLi9kYXRhL2NvbGxpc2lvblwiO1xuXG5leHBvcnQgY29uc3QgbWFrZUdyaWQgPSAoY2h1bmtTaXplOiBudW1iZXIpOiBudW1iZXJbXVtdID0+IHtcbiAgICBjb25zdCBjb2xsaXNpb25HcmlkOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaXNpb25zLmxlbmd0aDsgaSArPSBjaHVua1NpemUpIHtcbiAgICAgICAgY29sbGlzaW9uR3JpZC5wdXNoKGNvbGxpc2lvbnMuc2xpY2UoaSwgaSArIGNodW5rU2l6ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gY29sbGlzaW9uR3JpZFxufVxuIiwiaW1wb3J0IHsgbWFrZUdyaWQgfSBmcm9tIFwiLi9jb2xsaXNpb25zXCI7XG5pbXBvcnQgeyBJU19DT0xMSURFUiwgTUFQX1hfT0ZGU0VULCBNQVBfWV9PRkZTRVQsIFRJTEVTLCBUSUxFX0hFSUdIVCwgVElMRV9XSURUSCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuXG5leHBvcnQgY2xhc3MgQm94Q29sbGlkZXIgaW1wbGVtZW50cyBCb3gge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgcG9zaXRpb246IGNvb3JkaW5hdGVzO1xuICAgIGlzQ29sbGlkZXI6IGJvb2xlYW47XG4gICAgc3RhdGljIHdpZHRoID0gVElMRV9XSURUSDtcbiAgICBzdGF0aWMgaGVpZ2h0ID0gVElMRV9IRUlHSFQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IHBvc2l0aW9uIH06IEJveFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy53aWR0aCA9IEJveENvbGxpZGVyLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEJveENvbGxpZGVyLmhlaWdodDtcbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgxMDAsIDAsIDAsIDAuNSlcIjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIEJveENvbGxpZGVyLndpZHRoLCBCb3hDb2xsaWRlci5oZWlnaHQpO1xuICAgICAgICBjdHguZm9udCA9IFwiMTBweCBBcmlhbFwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCgke3RoaXMucG9zaXRpb24ueH0sICR7dGhpcy5wb3NpdGlvbi55fSlgLCB0aGlzLnBvc2l0aW9uLnggKyAxMCwgdGhpcy5wb3NpdGlvbi55ICsgMjApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDUsIDUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvb3Jkc0Fic1Bvc2l0aW9uID0gKGNvb3JkczogY29vcmRpbmF0ZXMpOiBjb29yZGluYXRlcyA9PiAoe1xuICAgIHg6IE1hdGguZmxvb3IoKGNvb3Jkcy54IC0gTUFQX1hfT0ZGU0VUKSAvIFRJTEVfV0lEVEgpLFxuICAgIHk6IE1hdGguZmxvb3IoKGNvb3Jkcy55IC0gTUFQX1lfT0ZGU0VUKSAvIFRJTEVfSEVJR0hUKSxcbn0pXG5cbmV4cG9ydCBjb25zdCBjb29yZHNNYXBQb3NpdGlvbiA9IChjb29yZHM6IGNvb3JkaW5hdGVzKTogY29vcmRpbmF0ZXMgPT4gKHtcbiAgICB4OiAoY29vcmRzLnggKiBUSUxFX1dJRFRIKSArIE1BUF9YX09GRlNFVCxcbiAgICB5OiAoY29vcmRzLnkgKiBUSUxFX0hFSUdIVCkgKyBNQVBfWV9PRkZTRVQsXG59KVxuXG5leHBvcnQgY29uc3QgZ2V0Q29sbGlkZXJzID0gKCk6IEJveENvbGxpZGVyW10gPT4ge1xuICAgIGNvbnN0IGNvbGxpZGVyczogQm94Q29sbGlkZXJbXSA9IFtdO1xuICAgIGNvbnN0IGdyaWQ6IG51bWJlcltdW10gPSBtYWtlR3JpZChUSUxFUy5yb3dzKTtcbiAgICBncmlkLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBqKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29sID09PSBJU19DT0xMSURFUikge1xuICAgICAgICAgICAgICAgIGNvbGxpZGVycy5wdXNoKG5ldyBCb3hDb2xsaWRlcih7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjb29yZHNNYXBQb3NpdGlvbih7IHg6IGosIHk6IGkgfSksXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxuICAgIHJldHVybiBjb2xsaWRlcnM7XG59XG5cbi8qKlxuICogICAgICAgICAgX19fX18gX19fX19cbiAqICAgICAgICAgIHwgUCB8IHwgQyB8XG4gKiAgICAgICAgICDigL7igL7igL7igL7igL4g4oC+4oC+4oC+4oC+4oC+XG4gKiAgICAgICAgIFxuICogQHBhcmFtIHNoYXBlMSBcbiAqIEBwYXJhbSBzaGFwZTIgXG4gKiBAcGFyYW0gcGFyYW0yIFxuICogQHBhcmFtIHRvbGVyYW5jZSBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgY29uc3QgY2hlY2tDb2xsaXNpb24gPSAoXG4gICAgc2hhcGUxOiBCb3gsXG4gICAgc2hhcGUyOiBCb3gsXG4gICAgeyB4LCB5IH06IGNvb3JkaW5hdGVzLFxuICAgIHRvbGVyYW5jZTogbnVtYmVyID0gMTZcbik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHNoYXBlMVBvc2l0aW9uID0gc2hhcGUxLnBvc2l0aW9uO1xuICAgIGNvbnN0IHNoYXBlMlBvc2l0aW9uID0gc2hhcGUyLnBvc2l0aW9uO1xuXG4gICAgcmV0dXJuICgoc2hhcGUxUG9zaXRpb24ueCArIHNoYXBlMS53aWR0aCA+IHNoYXBlMlBvc2l0aW9uLnggKyB4ICsgdG9sZXJhbmNlKSAvLyBwbGF5ZXIgaXMgdG8gdGhlIHJpZ2h0IG9mIGNvbGxpZGVyXG4gICAgJiYgKHNoYXBlMVBvc2l0aW9uLnggPCBzaGFwZTJQb3NpdGlvbi54ICsgeCArIHNoYXBlMi53aWR0aCAtIHRvbGVyYW5jZSkgLy8gcGxheWVyIGlzIHRvIHRoZSBsZWZ0IG9mIGNvbGxpZGVyXG4gICAgJiYgKHNoYXBlMVBvc2l0aW9uLnkgKyBzaGFwZTEuaGVpZ2h0ID4gc2hhcGUyUG9zaXRpb24ueSArIHkgKyB0b2xlcmFuY2UpIC8vIHBsYXllciBpcyBiZWxvdyBjb2xsaWRlclxuICAgICYmIChzaGFwZTFQb3NpdGlvbi55IDwgc2hhcGUyUG9zaXRpb24ueSArIHkgKyBzaGFwZTIuaGVpZ2h0IC0gdG9sZXJhbmNlKSkgLy8gcGxheWVyIGlzIGFib3ZlIGNvbGxpZGVyXG59XG4iLCJpbXBvcnQgeyBoYXNLZXkgfSBmcm9tIFwiLi4vdXRpbHMvbWlzY1wiO1xuaW1wb3J0IHsgQkFSX0hFSUdIVCwgQkFSX09GRlNFVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7XG4gIEJveENvbGxpZGVyLFxuICBjb29yZHNBYnNQb3NpdGlvbixcbiAgY29vcmRzTWFwUG9zaXRpb24sXG59IGZyb20gXCIuLi9yZW5kZXIvY29sbGlkZXJcIjtcbmltcG9ydCB7IFBhdGhGaW5kZXIgfSBmcm9tIFwiLi9wYXRoZmluZGVyXCI7XG5pbXBvcnQgeyBjaGVja0NvbGxpc2lvbiB9IGZyb20gXCIuLi9yZW5kZXIvY29sbGlkZXJcIjtcblxuZXhwb3J0IGNsYXNzIFNwcml0ZSB7XG4gIHBvc2l0aW9uOiBjb29yZGluYXRlcztcbiAgem9vbT86IG51bWJlcjtcbiAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBmYWNlOiBudW1iZXI7XG4gIGZyYW1lcz86IG51bWJlcjtcbiAgY3VycmVudEZyYW1lOiBudW1iZXI7XG4gIGRpcmVjdGlvbnM6IERpcmVjdGlvbkZhY2VBcmdzO1xuICBmcmFtZXNQZXJEaXJlY3Rpb246IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgcG9zaXRpb24sXG4gICAgaW1hZ2UsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGRpcmVjdGlvbnMsXG4gICAgem9vbSA9IDEsXG4gICAgZnJhbWVzID0gMSxcbiAgfTogU3ByaXRlQXJncykge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGggKiB0aGlzLnpvb207XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgKiB0aGlzLnpvb207XG4gICAgdGhpcy5mYWNlID0gMDtcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgdGhpcy5kaXJlY3Rpb25zID0gZGlyZWN0aW9ucztcbiAgICB0aGlzLmZyYW1lc1BlckRpcmVjdGlvbiA9IHRoaXMuZnJhbWVzIC8gT2JqZWN0LmtleXModGhpcy5kaXJlY3Rpb25zKS5sZW5ndGg7XG4gIH1cblxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogU3ByaXRlIHtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHRoaXMuY3VycmVudEZyYW1lLFxuICAgICAgMCxcbiAgICAgIHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmZyYW1lcyxcbiAgICAgIHRoaXMuaW1hZ2UuaGVpZ2h0LFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgKHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmZyYW1lcykgKiB0aGlzLnpvb20sXG4gICAgICB0aGlzLmltYWdlLmhlaWdodCAqIHRoaXMuem9vbVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYXlhYmxlIGV4dGVuZHMgU3ByaXRlIGltcGxlbWVudHMgSVBsYXlhYmxlIHtcbiAgcG9zaXRpb246IGNvb3JkaW5hdGVzO1xuICB6b29tPzogbnVtYmVyO1xuICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGZhY2U6IG51bWJlcjtcbiAgZnJhbWVzPzogbnVtYmVyO1xuICBjdXJyZW50RnJhbWU6IG51bWJlcjtcbiAgZGlyZWN0aW9uczogRGlyZWN0aW9uRmFjZUFyZ3M7XG4gIGZyYW1lc1BlckRpcmVjdGlvbjogbnVtYmVyO1xuICByZWZyZXNoUmF0ZTogbnVtYmVyO1xuICBtYXhIcDogbnVtYmVyO1xuICBocDogbnVtYmVyO1xuICBocFJlZ2VuOiBudW1iZXI7XG4gIGFybW91cjogbnVtYmVyO1xuICBpbW11bml0eTogbnVtYmVyO1xuICBtdXNjbGU6IG51bWJlcjtcbiAgbWFnaWs6IG51bWJlcjtcbiAgbWF4TWFuYTogbnVtYmVyO1xuICBtYW5hOiBudW1iZXI7XG4gIG1hbmFSZWdlbjogbnVtYmVyO1xuICBwYXRoOiBjb29yZGluYXRlc1tdO1xuICBhdHRhY2tzOiBJQXR0YWNrW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc3ByaXRlQXJnczogU3ByaXRlQXJncyxcbiAgICB7XG4gICAgICBocCxcbiAgICAgIGhwUmVnZW4sXG4gICAgICBtYW5hLFxuICAgICAgbWFuYVJlZ2VuLFxuICAgICAgbXVzY2xlLFxuICAgICAgbWFnaWssXG4gICAgICBhcm1vdXIsXG4gICAgICBpbW11bml0eSxcbiAgICAgIGF0dGFja3MsXG4gICAgfTogUGxheWFibGVBcmdzXG4gICkge1xuICAgIHN1cGVyKHNwcml0ZUFyZ3MpO1xuICAgIHRoaXMubWF4SHAgPSBocDtcbiAgICB0aGlzLmhwID0gaHA7XG4gICAgdGhpcy5ocFJlZ2VuID0gaHBSZWdlbjtcbiAgICB0aGlzLm1heE1hbmEgPSBtYW5hO1xuICAgIHRoaXMubWFuYSA9IG1hbmE7XG4gICAgdGhpcy5tYW5hUmVnZW4gPSBtYW5hUmVnZW47XG4gICAgdGhpcy5tdXNjbGUgPSBtdXNjbGU7XG4gICAgdGhpcy5tYWdpayA9IG1hZ2lrO1xuICAgIHRoaXMucmVmcmVzaFJhdGUgPSB0aGlzLmZyYW1lc1BlckRpcmVjdGlvbiAvICh0aGlzLmZyYW1lcyAqIDIpO1xuICAgIHRoaXMuYXJtb3VyID0gYXJtb3VyO1xuICAgIHRoaXMuaW1tdW5pdHkgPSBpbW11bml0eTtcbiAgICB0aGlzLnBhdGggPSBbXTtcbiAgICB0aGlzLmF0dGFja3MgPSBhdHRhY2tzO1xuICB9XG5cbiAgaWRsZUFuaW1hdGlvbigpOiBQbGF5YWJsZSB7XG4gICAgZm9yIChsZXQgZnJhbWVJZHggb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRpcmVjdGlvbnMpKSB7XG4gICAgICBjb25zdCBmYWNlID0gdGhpcy5jdXJyZW50RnJhbWUgLyB0aGlzLmZyYW1lcztcbiAgICAgIGlmIChmYWNlIDwgZnJhbWVJZHgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLmZhY2UgPSBmcmFtZUlkeDtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50RnJhbWUgPSBNYXRoLmZsb29yKHRoaXMuZmFjZSkgKiB0aGlzLmZyYW1lcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdhbGtBbmltYXRpb24oZGlyZWN0aW9uOiBzdHJpbmcpOiBQbGF5YWJsZSB7XG4gICAgaWYgKCFoYXNLZXkodGhpcy5kaXJlY3Rpb25zLCBkaXJlY3Rpb24pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdEZyYW1lID0gdGhpcy5kaXJlY3Rpb25zW2RpcmVjdGlvbl07XG4gICAgY29uc3QgbGFzdEZyYW1lID0gdGhpcy5kaXJlY3Rpb25zW2RpcmVjdGlvbl0gKyB0aGlzLmZyYW1lc1BlckRpcmVjdGlvbjtcbiAgICB0aGlzLmZhY2UgPVxuICAgICAgdGhpcy5mYWNlID49IGZpcnN0RnJhbWUgJiYgdGhpcy5mYWNlIDwgbGFzdEZyYW1lXG4gICAgICAgID8gdGhpcy5mYWNlICsgdGhpcy5yZWZyZXNoUmF0ZVxuICAgICAgICA6IGZpcnN0RnJhbWU7XG4gICAgdGhpcy5jdXJyZW50RnJhbWUgPSBNYXRoLmZsb29yKHRoaXMuZmFjZSkgKiB0aGlzLmZyYW1lcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFuaW1hdGUoZGlyZWN0aW9uOiBzdHJpbmcpOiBQbGF5YWJsZSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJpZGxlXCIpIHtcbiAgICAgIHRoaXMuaWRsZUFuaW1hdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndhbGtBbmltYXRpb24oZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhbGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ocCA+IDA7XG4gIH1cblxuICByZWdlbigpOiBQbGF5YWJsZSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlKCkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLmhwID0gTWF0aC5taW4odGhpcy5tYXhIcCwgdGhpcy5ocCArIHRoaXMubWF4SHAgKiB0aGlzLmhwUmVnZW4pO1xuICAgIHRoaXMubWFuYSA9IE1hdGgubWluKHRoaXMubWF4TWFuYSwgdGhpcy5tYW5hICsgdGhpcy5tYXhNYW5hICogdGhpcy5tYW5hUmVnZW4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZm9sbG93KHRhcmdldDogUGxheWFibGUsIGNvbGxpZGVyczogQm94Q29sbGlkZXJbXSk6IFBsYXlhYmxlIHtcbiAgICBpZiAoIXRhcmdldC5hbGl2ZSgpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gY29vcmRzQWJzUG9zaXRpb24odGhpcy5wb3NpdGlvbik7XG4gICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBjb29yZHNBYnNQb3NpdGlvbih0YXJnZXQucG9zaXRpb24pO1xuICAgIGlmICh0aGlzLnBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnBhdGggPSBuZXcgUGF0aEZpbmRlcigpXG4gICAgICAgIC5maW5kKGN1cnJlbnRQb3NpdGlvbiwgdGFyZ2V0UG9zaXRpb24sIGNvbGxpZGVycylcbiAgICAgICAgLm1hcChjb29yZHNNYXBQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGF0aC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3Jhd2wodGhpcy5wYXRoLnNoaWZ0KCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNyYXdsKGNvb3JkczogY29vcmRpbmF0ZXMpOiBQbGF5YWJsZSB7XG4gICAgY29uc3QgeCA9IGNvb3Jkcy54IC0gdGhpcy5wb3NpdGlvbi54O1xuICAgIGNvbnN0IHkgPSBjb29yZHMueSAtIHRoaXMucG9zaXRpb24ueTtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0geDtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGF0dGFjayhcbiAgICB0YXJnZXQ6IFBsYXlhYmxlLFxuICAgIGNob2ljZTogbnVtYmVyIHwgbnVsbCxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBQbGF5YWJsZSB7XG4gICAgaWYgKHRoaXMuaHAgPT09IDAgfHwgY2hvaWNlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29uc3QgYXR0YWNrOiBJQXR0YWNrID0gdGhpcy5hdHRhY2tzW2Nob2ljZV07XG4gICAgY29uc3QgaW5SYW5nZSA9IGNoZWNrQ29sbGlzaW9uKHRhcmdldCwgdGhpcywgeyB4OiAwLCB5OiAwIH0sIC1hdHRhY2sucmFuZ2UpO1xuXG4gICAgaWYgKFxuICAgICAgIWluUmFuZ2UgfHxcbiAgICAgIChhdHRhY2suZGFtYWdlID4gMCAmJiB0YXJnZXQuaHAgPT09IDApIHx8XG4gICAgICBhdHRhY2suY29zdCA+IHRoaXMubWFuYVxuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IHRoaXM7XG4gICAgYXR0YWNrLmFjdGl2YXRlKHVzZXIsIHRhcmdldCkucmVuZGVyKHVzZXIsIHRhcmdldCwgY3R4KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRha2VEYW1hZ2UoZGFtYWdlOiBudW1iZXIpOiBQbGF5YWJsZSB7XG4gICAgdGhpcy5ocCA9IE1hdGgubWF4KDAsIHRoaXMuaHAgLSBkYW1hZ2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaGVhbChib251c0hwOiBudW1iZXIpOiBQbGF5YWJsZSB7XG4gICAgdGhpcy5ocCA9IE1hdGgubWluKHRoaXMubWF4SHAsIHRoaXMuaHAgKyBib251c0hwKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlZHVjZU1hbmEobWFuYUNvc3Q6IG51bWJlcik6IFBsYXlhYmxlIHtcbiAgICB0aGlzLm1hbmEgPSBNYXRoLm1heCgwLCB0aGlzLm1hbmEgLSBtYW5hQ29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBocEJhckNvbG9yKCkge1xuICAgIGlmICh0aGlzLmhwID4gNTApIHtcbiAgICAgIHJldHVybiBcIiM2NWQ2NzBcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaHAgPiAyMCkge1xuICAgICAgcmV0dXJuIFwiI2ZmZDcwMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCIjZmYwMDAwXCI7XG4gICAgfVxuICB9XG5cbiAgZHJhd01ldGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogUGxheWFibGUge1xuICAgIGNvbnN0IEJhck1heFdpZHRoID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbi54IC0gQkFSX09GRlNFVDtcbiAgICBjb25zdCB5ID0gdGhpcy5wb3NpdGlvbi55IC0gMjA7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZlwiO1xuICAgIGN0eC5maWxsUmVjdChcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgQmFyTWF4V2lkdGggKyBCQVJfT0ZGU0VUICogMixcbiAgICAgIEJBUl9IRUlHSFQgKyBCQVJfT0ZGU0VUICogMlxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmF3SFAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBQbGF5YWJsZSB7XG4gICAgY29uc3QgQmFyTWF4V2lkdGggPSB0aGlzLndpZHRoO1xuICAgIGNvbnN0IGhwQmFyID0gKHRoaXMuaHAgLyB0aGlzLm1heEhwKSAqIEJhck1heFdpZHRoO1xuICAgIGNvbnN0IHggPSB0aGlzLnBvc2l0aW9uLng7XG4gICAgY29uc3QgeSA9IHRoaXMucG9zaXRpb24ueSAtIDIwICsgQkFSX09GRlNFVDtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5ocEJhckNvbG9yKCk7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHksIGhwQmFyLCA1KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRyYXdNYW5hKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogUGxheWFibGUge1xuICAgIGNvbnN0IEJhck1heFdpZHRoID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCBjdXJyZW50TWFuYSA9ICh0aGlzLm1hbmEgLyB0aGlzLm1heE1hbmEpICogQmFyTWF4V2lkdGg7XG4gICAgY29uc3QgeCA9IHRoaXMucG9zaXRpb24ueDtcbiAgICBjb25zdCB5ID0gdGhpcy5wb3NpdGlvbi55IC0gMjAgKyBCQVJfT0ZGU0VUICsgNSArIEJBUl9PRkZTRVQ7XG4gICAgY29uc3Qgd2lkdGggPSBjdXJyZW50TWFuYTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA3N2RhXCI7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCAzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRyYXdEZWJ1ZyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IFBsYXlhYmxlIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMTAwLCAwLCAwLCAwLjUpXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGN0eC5mb250ID0gXCIxMHB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxUZXh0KFxuICAgICAgYCgke3RoaXMucG9zaXRpb24ueH0sICR7dGhpcy5wb3NpdGlvbi55fSlgLFxuICAgICAgdGhpcy5wb3NpdGlvbi54ICsgMTAsXG4gICAgICB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCArIDIwXG4gICAgKTtcbiAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDUsIDUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IFBsYXlhYmxlIHtcbiAgICBpZiAodGhpcy5ocCA9PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5kcmF3TWV0ZXIoY3R4KS5kcmF3SFAoY3R4KS5kcmF3TWFuYShjdHgpO1xuXG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICB0aGlzLmN1cnJlbnRGcmFtZSxcbiAgICAgIDAsXG4gICAgICB0aGlzLmltYWdlLndpZHRoIC8gdGhpcy5mcmFtZXMsXG4gICAgICB0aGlzLmltYWdlLmhlaWdodCxcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgICh0aGlzLmltYWdlLndpZHRoIC8gdGhpcy5mcmFtZXMpICogdGhpcy56b29tLFxuICAgICAgdGhpcy5pbWFnZS5oZWlnaHQgKiB0aGlzLnpvb21cbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUSUxFUywgRElSRUNUSU9OUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEJveENvbGxpZGVyLCBjb29yZHNBYnNQb3NpdGlvbiB9IGZyb20gXCIuLi9yZW5kZXIvY29sbGlkZXJcIjtcbmltcG9ydCB7IG1ha2VHcmlkIH0gZnJvbSBcIi4uL3JlbmRlci9jb2xsaWRlci9jb2xsaXNpb25zXCI7XG5pbXBvcnQgeyBtYW5oYXR0YW5EaXN0YW5jZSB9IGZyb20gXCIuLi91dGlscy9taXNjXCI7XG5pbXBvcnQgeyBQcmlvcml0eVF1ZXVlIH0gZnJvbSBcIi4uL3V0aWxzL3ByaW9yaXR5UXVldWVcIjtcblxuY29uc3QgZW5jb2RlQ29vcmRzID0gKGNvb3JkaW5hdGVzOiBjb29yZGluYXRlcykgPT5cbiAgYCR7Y29vcmRpbmF0ZXMueH0tJHtjb29yZGluYXRlcy55fWA7XG5cbmV4cG9ydCBjbGFzcyBQYXRoRmluZGVyIHtcbiAgdmlzaXRlZDogU2V0PHN0cmluZz47XG4gIHN1cnJvdW5kaW5nczogUHJpb3JpdHlRdWV1ZTxBU3RhclJlY29yZD47XG4gIHBhdGhzOiBUaWxlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGF0aHMgPSB7fTtcbiAgICB0aGlzLnZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5zdXJyb3VuZGluZ3MgPSBuZXcgUHJpb3JpdHlRdWV1ZSgpO1xuICB9XG5cbiAgaXNTYW1lQ29vcmRzKGMxOiBjb29yZGluYXRlcywgYzI6IGNvb3JkaW5hdGVzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGMxLnggPT09IGMyLnggJiYgYzEueSA9PT0gYzIueTtcbiAgfVxuXG4gIGJ1aWxkUGF0aChrZXk6IHN0cmluZyk6IGNvb3JkaW5hdGVzW10ge1xuICAgIGlmICghdGhpcy5wYXRocy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHBhdGg6IGNvb3JkaW5hdGVzW10gPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMucGF0aHNba2V5XTtcbiAgICB3aGlsZSAoY3VycmVudC5wYXJlbnQpIHtcbiAgICAgIHBhdGgucHVzaChjdXJyZW50LnBvc2l0aW9uKTtcbiAgICAgIGN1cnJlbnQgPSB0aGlzLnBhdGhzW2VuY29kZUNvb3JkcyhjdXJyZW50LnBhcmVudCldO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aC5yZXZlcnNlKCk7XG4gIH1cblxuICBmaW5kKFxuICAgIHNvdXJjZTogY29vcmRpbmF0ZXMsXG4gICAgZGVzdGluYXRpb246IGNvb3JkaW5hdGVzLFxuICAgIGNvbGxpZGVyczogQm94Q29sbGlkZXJbXVxuICApOiBjb29yZGluYXRlc1tdIHtcbiAgICBjb25zdCBzcmNLZXkgPSBlbmNvZGVDb29yZHMoc291cmNlKTtcbiAgICBsZXQgcGF0aDogY29vcmRpbmF0ZXNbXSA9IFtdO1xuICAgIGNvbnN0IGFTdGFyUmVjb3JkOiBBU3RhclJlY29yZCA9IHtcbiAgICAgIGZTY29yZTogMCxcbiAgICAgIGdTY29yZTogMCxcbiAgICAgIGhTY29yZTogMCxcbiAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgIHBvc2l0aW9uOiBzb3VyY2UsXG4gICAgICBrZXk6IHNyY0tleSxcbiAgICB9O1xuICAgIHRoaXMudmlzaXRlZC5hZGQoc3JjS2V5KTtcbiAgICB0aGlzLnBhdGhzW3NyY0tleV0gPSBhU3RhclJlY29yZDtcbiAgICB0aGlzLnN1cnJvdW5kaW5ncy5ucSgwLCBhU3RhclJlY29yZCk7XG5cbiAgICB3aGlsZSAoIXRoaXMuc3Vycm91bmRpbmdzLmVtcHR5KCkpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQ6IEFTdGFyUmVjb3JkID0gdGhpcy5zdXJyb3VuZGluZ3MuZHEoKTtcbiAgICAgIHRoaXMucGF0aHNbY3VycmVudC5rZXldID0gY3VycmVudDtcblxuICAgICAgaWYgKHRoaXMuaXNTYW1lQ29vcmRzKGN1cnJlbnQucG9zaXRpb24sIGRlc3RpbmF0aW9uKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFBhdGgoY3VycmVudC5rZXkpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBkaXJlY3Rpb24gb2YgRElSRUNUSU9OUykge1xuICAgICAgICBjb25zdCBbaG9yaXpvbnRhbCwgdmVydGljYWxdID0gZGlyZWN0aW9uO1xuICAgICAgICBjb25zdCBuZXdDb29yZGluYXRlcyA9IHtcbiAgICAgICAgICB4OiBjdXJyZW50LnBvc2l0aW9uLnggKyBob3Jpem9udGFsLFxuICAgICAgICAgIHk6IGN1cnJlbnQucG9zaXRpb24ueSArIHZlcnRpY2FsLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXdLZXkgPSBlbmNvZGVDb29yZHMobmV3Q29vcmRpbmF0ZXMpO1xuICAgICAgICBjb25zdCBpc0JvdW5kYXJ5ID0gY29sbGlkZXJzLnNvbWUoKGNvbGxpZGVyOiBCb3hDb2xsaWRlcikgPT5cbiAgICAgICAgICB0aGlzLmlzU2FtZUNvb3JkcyhcbiAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzLFxuICAgICAgICAgICAgY29vcmRzQWJzUG9zaXRpb24oY29sbGlkZXIucG9zaXRpb24pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChpc0JvdW5kYXJ5IHx8IHRoaXMudmlzaXRlZC5oYXMobmV3S2V5KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ1Njb3JlID0gY3VycmVudC5nU2NvcmUgKyAxO1xuICAgICAgICBjb25zdCBoU2NvcmUgPSBtYW5oYXR0YW5EaXN0YW5jZShuZXdDb29yZGluYXRlcywgZGVzdGluYXRpb24pO1xuICAgICAgICBjb25zdCBmU2NvcmUgPSBnU2NvcmUgKyBoU2NvcmU7XG5cbiAgICAgICAgdGhpcy52aXNpdGVkLmFkZChuZXdLZXkpO1xuICAgICAgICB0aGlzLnN1cnJvdW5kaW5ncy5ucShmU2NvcmUsIHtcbiAgICAgICAgICBmU2NvcmUsXG4gICAgICAgICAgZ1Njb3JlLFxuICAgICAgICAgIGhTY29yZSxcbiAgICAgICAgICBwYXJlbnQ6IGN1cnJlbnQucG9zaXRpb24sXG4gICAgICAgICAgcG9zaXRpb246IG5ld0Nvb3JkaW5hdGVzLFxuICAgICAgICAgIGtleTogbmV3S2V5LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1PVkVTUEVFRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGhhc0tleSB9IGZyb20gXCIuLi91dGlscy9taXNjXCI7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcbiAgICBtb3Rpb246IHsgW2tleTogc3RyaW5nXTogeyBrZXk6IHN0cmluZywgYXhpczogc3RyaW5nLCB2ZWxvY2l0eTogbnVtYmVyLCBwcmVzc2VkOiBib29sZWFuIH0gfVxuICAgIGF0dGFjazogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICAgIGRpcmVjdGlvbkJpbmRpbmdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICAgYXR0YWNrQmluZGluZ3M6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH1cbiAgICBhY3RpdmVBdHRhY2tzOiBib29sZWFuW107XG5cbiAgICBjb25zdHJ1Y3Rvcih7IHVwLCBkb3duLCBsZWZ0LCByaWdodCwgYXR0YWNrcyB9OiBEaXJlY3Rpb25LZXlBcmdzKSB7XG4gICAgICAgIHRoaXMubW90aW9uID0ge1xuICAgICAgICAgICAgdXA6IHtcbiAgICAgICAgICAgICAgICBrZXk6IHVwLFxuICAgICAgICAgICAgICAgIGF4aXM6IFwieVwiLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiAtTU9WRVNQRUVELFxuICAgICAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd246IHtcbiAgICAgICAgICAgICAgICBrZXk6IGRvd24sXG4gICAgICAgICAgICAgICAgYXhpczogXCJ5XCIsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IE1PVkVTUEVFRCxcbiAgICAgICAgICAgICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWZ0OiB7XG4gICAgICAgICAgICAgICAga2V5OiBsZWZ0LFxuICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiAtTU9WRVNQRUVELFxuICAgICAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgICBrZXk6IHJpZ2h0LFxuICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBNT1ZFU1BFRUQsXG4gICAgICAgICAgICAgICAgcHJlc3NlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXJlY3Rpb25CaW5kaW5ncyA9IHtcbiAgICAgICAgICAgIFt1cF06IFwidXBcIixcbiAgICAgICAgICAgIFtkb3duXTogXCJkb3duXCIsXG4gICAgICAgICAgICBbbGVmdF06IFwibGVmdFwiLFxuICAgICAgICAgICAgW3JpZ2h0XTogXCJyaWdodFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hdHRhY2tCaW5kaW5ncyA9IHt9O1xuICAgICAgICB0aGlzLmFjdGl2ZUF0dGFja3MgPSBhdHRhY2tzLm1hcChfID0+IGZhbHNlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dGFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrQmluZGluZ3NbYXR0YWNrc1tpXV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWRsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMubW90aW9uKS5ldmVyeShkaXJlY3Rpb24gPT4gIXRoaXMubW90aW9uW2RpcmVjdGlvbl0ucHJlc3NlZClcbiAgICB9XG5cbiAgICBnZXRNb3ZlbWVudCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9ucyA9IE9iamVjdC5rZXlzKHRoaXMubW90aW9uKS5maWx0ZXIoZGlyZWN0aW9uID0+IHRoaXMubW90aW9uW2RpcmVjdGlvbl0ucHJlc3NlZCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbnNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0QXR0YWNrKCk6IG51bWJlciB8IG51bGwge1xuICAgICAgICBjb25zdCBhdHRhY2tJbmRpY2VzID0gdGhpcy5hY3RpdmVBdHRhY2tzLm1hcCgoYXR0YWNrQWN0aXZlLCBpKSA9PiBhdHRhY2tBY3RpdmUgPyBpIDogLTEpLmZpbHRlcihhdHRhY2tJZHggPT4gYXR0YWNrSWR4ICE9PSAtMSk7XG4gICAgICAgIGlmIChhdHRhY2tJbmRpY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGF0dGFja0luZGljZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJlc3Moa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKGhhc0tleSh0aGlzLmRpcmVjdGlvbkJpbmRpbmdzLCBrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbkJpbmRpbmdzW2tleV07XG4gICAgICAgICAgICB0aGlzLm1vdGlvbltkaXJlY3Rpb25dLnByZXNzZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGhhc0tleSh0aGlzLmF0dGFja0JpbmRpbmdzLCBrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2sgPSB0aGlzLmF0dGFja0JpbmRpbmdzW2tleV07XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUF0dGFja3NbYXR0YWNrXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWxlYXNlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChoYXNLZXkodGhpcy5kaXJlY3Rpb25CaW5kaW5ncywga2V5KSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb25CaW5kaW5nc1trZXldO1xuICAgICAgICAgICAgdGhpcy5tb3Rpb25bZGlyZWN0aW9uXS5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzS2V5KHRoaXMuYXR0YWNrQmluZGluZ3MsIGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dGFjayA9IHRoaXMuYXR0YWNrQmluZGluZ3Nba2V5XTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQXR0YWNrc1thdHRhY2tdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1ByZXNzZWQoa2V5OiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGhhc0tleSh0aGlzLm1vdGlvbiwga2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW90aW9uW2tleV0ucHJlc3NlZDtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNLZXkodGhpcy5hY3RpdmVBdHRhY2tzLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVBdHRhY2tzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXRlIHtcbiAgICBjb250cm9sbGVyOiBDb250cm9sbGVyXG4gICAgY29uc3RydWN0b3IoeyBjb250cm9sbGVyIH06IHsgY29udHJvbGxlcjogRGlyZWN0aW9uS2V5QXJncyB9KSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKGNvbnRyb2xsZXIpXG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGhhc0tleSA9IDxPPihvYmo6IE8sIGtleTogUHJvcGVydHlLZXkpOiBrZXkgaXMga2V5b2YgTyA9PiB7XG4gICAgcmV0dXJuIGtleSBpbiBvYmpcbn07XG5cblxuZXhwb3J0IGNvbnN0IG1hbmhhdHRhbkRpc3RhbmNlID0gKGE6IGNvb3JkaW5hdGVzLCBiOiBjb29yZGluYXRlcyk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGEueCAtIGIueCkgKyBNYXRoLmFicyhhLnkgLSBiLnkpXG59XG5cbmV4cG9ydCBjb25zdCByYW5kb21JbnQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuIiwiZXhwb3J0IGNsYXNzIFByaW9yaXR5UXVldWU8VD4ge1xuICAgIGl0ZW1zOiB7cHJpb3JpdHk6IG51bWJlciwgZWxlbWVudDogVH1bXVxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIG5xKHByaW9yaXR5OiBudW1iZXIsIGVsZW1lbnQ6IFQpOiBQcmlvcml0eVF1ZXVlPFQ+IHtcbiAgICAgICAgbGV0IGxlZnQgPSAwO1xuICAgICAgICBsZXQgcmlnaHQgPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBtaWQgPSAwO1xuICAgICAgICBsZXQgcG9zID0gLTE7XG5cbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe3ByaW9yaXR5LCBlbGVtZW50fSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0KSB7XG4gICAgICAgICAgICBtaWQgPSBNYXRoLmZsb29yKChsZWZ0ICsgcmlnaHQpIC8gMik7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1ttaWRdLnByaW9yaXR5ID4gcHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICByaWdodCA9IG1pZCAtIDE7XG4gICAgICAgICAgICAgICAgcG9zID0gbWlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gbWlkICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHBvcywgMCwge3ByaW9yaXR5LCBlbGVtZW50fSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZHEoKTogVCB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuc2hpZnQoKS5lbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgZW1wdHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMDtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9jaXRyaWNIZWFsaW5nLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9zb2Z0R3Jhc3MudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXR0YWNrcy9hdHRhY2tMaXN0L3RveGljRHJhaW4udHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXR0YWNrcy9jb3JlLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbnN0YW50cy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9kYXRhL2NvbGxpc2lvbi50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9ldmVudHMva2V5cy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9yZW5kZXIvYW5pbWF0aW9uLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3JlbmRlci9jYW52YXMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcmVuZGVyL2NvbGxpZGVyL2NvbGxpc2lvbnMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcmVuZGVyL2NvbGxpZGVyL2luZGV4LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nwcml0ZXMvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc3ByaXRlcy9wYXRoZmluZGVyLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3N0YXRlL2luZGV4LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3R5cGVzL2luZGV4LmQudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdXRpbHMvbWlzYy50c1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3V0aWxzL3ByaW9yaXR5UXVldWUudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=