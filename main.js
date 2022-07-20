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














var main = function () {
    var playerImg = new Image();
    var bgImg = new Image();
    var fgImg = new Image();
    var enemyImg = new Image();
    bgImg.src = _img_november_png__WEBPACK_IMPORTED_MODULE_10__["default"];
    playerImg.src = _img_main_char_sprite_png__WEBPACK_IMPORTED_MODULE_12__["default"];
    fgImg.src = _img_november_foreground_png__WEBPACK_IMPORTED_MODULE_11__["default"];
    enemyImg.src = _img_mushroom_boss_png__WEBPACK_IMPORTED_MODULE_13__["default"];
    var playerFrames = 16;
    var bg = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Sprite({
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
    var fg = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Sprite({
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
    var player = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Playable({
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
    var enemyCoords = [{ x: 265, y: 20 }]; //, { x: 1500, y: 550 }, { x: 500, y: 500 }];
    var enemies = enemyCoords.map(function (enemyCoords) {
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
    var state = new _state__WEBPACK_IMPORTED_MODULE_5__.State({
        controller: {
            up: "w",
            down: "s",
            left: "a",
            right: "d",
            attacks: ["y", "u", "i", "o"],
        },
    });
    var canvas = (0,_render_canvas__WEBPACK_IMPORTED_MODULE_1__.mapSetup)(_constants__WEBPACK_IMPORTED_MODULE_4__.MAP_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_HEIGHT);
    (0,_events_keys__WEBPACK_IMPORTED_MODULE_2__.configureKeyPress)(state.controller);
    (0,_render_animation__WEBPACK_IMPORTED_MODULE_3__.animationBuilder)({ bg: bg, player: player, state: state, canvas: canvas, fg: fg, enemies: enemies })();
};
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




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
    var sprites = __spreadArray([bg, player, fg], enemies, true);
    sprites.forEach(function (sprite) { return sprite.loadImage(ctx); });
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
    return animate;
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
    Sprite.prototype.loadImage = function (ctx) {
        var _this = this;
        this.image.onload = function () {
            _this.draw(ctx);
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGdCQUFnQiw4QkFBOEIsdUJBQXVCLEdBQUcsU0FBUyxvRkFBb0YsVUFBVSxZQUFZLGFBQWEsZ0NBQWdDLGdCQUFnQiw4QkFBOEIsdUJBQXVCLEdBQUcscUJBQXFCO0FBQ3JYO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRUMvRSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmaUM7QUFFWTtBQUU3QztJQUFtQyxpQ0FBTTtJQUN2QztlQUNFLGtCQUFNO1lBQ0osSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSTtZQUNYLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQztZQUNYLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO0lBQ0osQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxJQUFjLEVBQUUsTUFBZ0I7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQ0UsSUFBYyxFQUNkLE1BQWdCLEVBQ2hCLEdBQTZCO1FBRTdCLElBQU0sQ0FBQyxHQUFHLHNEQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxTQUFTLEdBQUcsMEJBQTBCLENBQUM7UUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixJQUFNLENBQUMsR0FBRyxzREFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRSxJQUFNLENBQUMsR0FBRyxzREFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzNELElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNaLElBQU0sQ0FBQyxHQUFHLHNEQUFTLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQ0FyQ2tDLHlDQUFNLEdBcUN4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDZ0M7QUFFWTtBQUU3QztJQUErQiw2QkFBTTtJQUNuQztlQUNFLGtCQUFNO1lBQ0osSUFBSSxFQUFFLFlBQVk7WUFDbEIsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDO1lBQ1gsV0FBVyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUM7SUFDSixDQUFDO0lBRUQsNEJBQVEsR0FBUixVQUFTLElBQWMsRUFBRSxNQUFnQjtRQUN2QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDNUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJO2FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzVCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUNFLElBQWMsRUFDZCxNQUFnQixFQUNoQixHQUE2QjtRQUU3QixJQUFNLENBQUMsR0FBRyxzREFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxHQUFHLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsR0FBRyxDQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDakMsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FDWixDQUFDO1FBQ0YsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxDQTNDOEIseUNBQU0sR0EyQ3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NnQztBQUVZO0FBRTdDO0lBQWdDLDhCQUFNO0lBQ3BDO2VBQ0Usa0JBQU07WUFDSixJQUFJLEVBQUUsYUFBYTtZQUNuQixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsR0FBRztZQUNiLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLENBQUM7WUFDWCxXQUFXLEVBQ1QsbUdBQW1HO1lBQ3JHLE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxRQUFRLEVBQUUsQ0FBQztvQkFDWCxVQUFVLEVBQUUsQ0FBQztvQkFDYixRQUFRLEVBQUUsRUFBRTtvQkFDWixHQUFHLEVBQUUsQ0FBQztvQkFDTixNQUFNLEVBQUUsSUFBSTtpQkFDYjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCw2QkFBUSxHQUFSLFVBQVMsSUFBZSxFQUFFLE1BQWlCO1FBQ3pDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFDRSxJQUFjLEVBQ2QsTUFBZ0IsRUFDaEIsR0FBNkI7UUFFN0IsSUFBTSxDQUFDLEdBQUcsc0RBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsR0FBRyxDQUFDLFNBQVMsR0FBRywwQkFBMEIsQ0FBQztRQUMzQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FDTCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2pDLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQ1osQ0FBQztRQUNGLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQ0FuRCtCLHlDQUFNLEdBbURyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkREO0lBUUksZ0JBQVksRUFPRjtZQU5OLElBQUksWUFDSixRQUFRLGdCQUNSLFVBQVUsa0JBQ1YsUUFBUSxnQkFDUixHQUFHLFdBQ0gsTUFBTTtRQUVOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDOztBQUVEO0lBWUUsZ0JBQVksRUFXRjtZQVZSLElBQUksWUFDSixNQUFNLGNBQ04sSUFBSSxZQUNKLEtBQUssYUFDTCxRQUFRLGdCQUNSLFFBQVEsZ0JBQ1IsSUFBSSxZQUNKLElBQUksWUFDSixPQUFPLGVBQ1AsV0FBVztRQUVYLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx5QkFBUSxHQUFSLFVBQVMsSUFBZSxFQUFFLE1BQWlCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFTSxJQUFNLFNBQVMsR0FBVyxJQUFJLENBQUM7QUFDL0IsSUFBTSxVQUFVLEdBQVcsSUFBSSxDQUFDO0FBQ2hDLElBQU0sVUFBVSxHQUFXLEVBQUUsQ0FBQztBQUM5QixJQUFNLFdBQVcsR0FBVyxFQUFFLENBQUM7QUFDL0IsSUFBTSxVQUFVLEdBQVcsRUFBRSxDQUFDO0FBQzlCLElBQU0sV0FBVyxHQUFXLEVBQUUsQ0FBQztBQUMvQixJQUFNLFlBQVksR0FBVyxDQUFDLEdBQUcsQ0FBQztBQUNsQyxJQUFNLFlBQVksR0FBVyxDQUFDLEdBQUcsQ0FBQztBQUVsQyxJQUFNLGFBQWEsR0FBVyxHQUFHLENBQUM7QUFDbEMsSUFBTSxhQUFhLEdBQVcsR0FBRyxDQUFDO0FBQ2xDLElBQU0sVUFBVSxHQUFXLENBQUMsQ0FBQztBQUM3QixJQUFNLFVBQVUsR0FBVyxFQUFFLENBQUM7QUFFOUIsSUFBTSxjQUFjLEdBQVcsR0FBRyxDQUFDO0FBQ25DLElBQU0sY0FBYyxHQUFXLEVBQUUsQ0FBQztBQUNsQyxJQUFNLG9CQUFvQixHQUFXLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFFckQsSUFBTSxXQUFXLEdBQVcsR0FBRyxDQUFDO0FBQ2hDLElBQU0sU0FBUyxHQUFXLENBQUMsQ0FBQztBQUM1QixJQUFNLEtBQUssR0FBbUM7SUFDakQsSUFBSSxFQUFFLEVBQUU7SUFDUixJQUFJLEVBQUUsRUFBRTtDQUNYO0FBRU0sSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCdEQsSUFBTSxVQUFVLEdBQWE7SUFDakMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM5SyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzFILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDOUgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM1SSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3BKLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDcEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM1SixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2xJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDaEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUN4SSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ2xKLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDeEosQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNsSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3hJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDMUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNsSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3BKLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDcEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2xJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDeEssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFF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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2ltZy9tYWluX2NoYXJfc3ByaXRlLnBuZyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2ltZy9tdXNocm9vbV9ib3NzLnBuZyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2ltZy9ub3ZlbWJlci5wbmciLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9pbWcvbm92ZW1iZXJfZm9yZWdyb3VuZC5wbmciLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy90eXBlcy9pbmRleC5kLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9hdHRhY2tzL2F0dGFja0xpc3QvY2l0cmljSGVhbGluZy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC9zb2Z0R3Jhc3MudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9hdHRhY2tzL2F0dGFja0xpc3QvdG94aWNEcmFpbi50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2F0dGFja3MvY29yZS50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2RhdGEvY29sbGlzaW9uLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvZXZlbnRzL2tleXMudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3JlbmRlci9hbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9yZW5kZXIvY2FudmFzLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvcmVuZGVyL2NvbGxpZGVyL2NvbGxpc2lvbnMudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9yZW5kZXIvY29sbGlkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9zcHJpdGVzL2luZGV4LnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvc3ByaXRlcy9wYXRoZmluZGVyLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvc3RhdGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy91dGlscy9taXNjLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvdXRpbHMvcHJpb3JpdHlRdWV1ZS50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzZmU3OWE2N2ViMzk0MDIwM2RmOTkyYjI4NTU1MmMzZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDVmOGRkZjE5NDBmZjI1YWZiODlmMjkyM2YzYTA4MWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjUxNjc5Mjk5NTU1ZWY2OTEzOTAwMWI1OTY3NTI0MWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3YTdlNTczMWY2OWE4NDkxOGNmODYzNzA2NDYzNjZmZi5wbmdcIjsiLCIiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQXR0YWNrIH0gZnJvbSBcIi4uL2NvcmVcIjtcbmltcG9ydCB7IFBsYXlhYmxlIH0gZnJvbSBcIi4uLy4uL3Nwcml0ZXNcIjtcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gXCIuLi8uLi91dGlscy9taXNjXCI7XG5cbmV4cG9ydCBjbGFzcyBDaXRyaWNIZWFsaW5nIGV4dGVuZHMgQXR0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogXCJDaXRyaWMgSGVhbGluZ1wiLFxuICAgICAgZGFtYWdlOiAwLFxuICAgICAgaGVhbDogMTAsXG4gICAgICB0eXBlOiBcImdyYXNzXCIsXG4gICAgICByYW5nZTogMTAwMCxcbiAgICAgIGNvc3Q6IDUwLFxuICAgICAgYWNjdXJhY3k6IDAuOCxcbiAgICAgIGNvb2xkb3duOiAyLFxuICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICBlZmZlY3RzOiBbXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKHVzZXI6IFBsYXlhYmxlLCB0YXJnZXQ6IFBsYXlhYmxlKTogQ2l0cmljSGVhbGluZyB7XG4gICAgdXNlci5oZWFsKHRoaXMuaGVhbCkucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIHVzZXI6IFBsYXlhYmxlLFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKTogQ2l0cmljSGVhbGluZyB7XG4gICAgY29uc3QgciA9IHJhbmRvbUludCh1c2VyLndpZHRoIC8gMTYsIHVzZXIud2lkdGgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KVwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJhbmRvbUludCh1c2VyLnBvc2l0aW9uLngsIHVzZXIucG9zaXRpb24ueCArIHVzZXIud2lkdGgpO1xuICAgICAgY29uc3QgeSA9IHJhbmRvbUludCh1c2VyLnBvc2l0aW9uLnksIHVzZXIucG9zaXRpb24ueSAtIDUwKTtcbiAgICAgIGNvbnN0IHcgPSA1O1xuICAgICAgY29uc3QgaCA9IHJhbmRvbUludCgyMCwgMTAwKTtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0dGFjayB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBQbGF5YWJsZSB9IGZyb20gXCIuLi8uLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY2xhc3MgU29mdEdyYXNzIGV4dGVuZHMgQXR0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogXCJTb2Z0IEdyYXNzXCIsXG4gICAgICBkYW1hZ2U6IDIsXG4gICAgICB0eXBlOiBcImdyYXNzXCIsXG4gICAgICByYW5nZTogMTYsXG4gICAgICBjb3N0OiAyMCxcbiAgICAgIGFjY3VyYWN5OiAwLjgsXG4gICAgICBjb29sZG93bjogMixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgZWZmZWN0czogW10sXG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSh1c2VyOiBQbGF5YWJsZSwgdGFyZ2V0OiBQbGF5YWJsZSk6IFNvZnRHcmFzcyB7XG4gICAgY29uc3QgZGFtYWdlID0gdXNlci5tYWdpayAvIHRhcmdldC5pbW11bml0eTtcbiAgICB0YXJnZXQudGFrZURhbWFnZShkYW1hZ2UpO1xuICAgIHVzZXJcbiAgICAgIC5oZWFsKE1hdGguZmxvb3IoZGFtYWdlIC8gMikpXG4gICAgICAucmVkdWNlTWFuYSh0aGlzLmNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIHVzZXI6IFBsYXlhYmxlLFxuICAgIHRhcmdldDogUGxheWFibGUsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKTogU29mdEdyYXNzIHtcbiAgICBjb25zdCByID0gcmFuZG9tSW50KHVzZXIud2lkdGggLyAxNiwgdXNlci53aWR0aCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSg4LCAxNjgsIDg2LCAwLjUpXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICB1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoIC8gMixcbiAgICAgIHVzZXIucG9zaXRpb24ueSArIHVzZXIuaGVpZ2h0IC8gMixcbiAgICAgIHIsXG4gICAgICAwLFxuICAgICAgMiAqIE1hdGguUElcbiAgICApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBdHRhY2sgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgUGxheWFibGUgfSBmcm9tIFwiLi4vLi4vc3ByaXRlc1wiO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL21pc2NcIjtcblxuZXhwb3J0IGNsYXNzIFRveGljRHJhaW4gZXh0ZW5kcyBBdHRhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBcIlRveGljIERyYWluXCIsXG4gICAgICBkYW1hZ2U6IDIwLFxuICAgICAgdHlwZTogXCJwb2lzb25cIixcbiAgICAgIHJhbmdlOiAxNixcbiAgICAgIGFjY3VyYWN5OiAwLjgsXG4gICAgICBjb3N0OiAyMCxcbiAgICAgIGNvb2xkb3duOiAyLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiVGhlIHVzZXIgZHJhaW5zIHRoZSB0YXJnZXQncyBIUCBhbmQgcmVsZWFzZXMgdG94aWMgZnVtZXMuIEhhcyAxNSUgY2hhbmNlIG9mIHBvaXNvbmluZyB0aGUgdGFyZ2V0LlwiLFxuICAgICAgZWZmZWN0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJwb2lzb25cIixcbiAgICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgICBzdGFydFZhbHVlOiAwLFxuICAgICAgICAgIGVuZFZhbHVlOiAxMCxcbiAgICAgICAgICBpbmM6IDEsXG4gICAgICAgICAgY2hhbmNlOiAwLjE1LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKHVzZXI6IElQbGF5YWJsZSwgdGFyZ2V0OiBJUGxheWFibGUpOiBUb3hpY0RyYWluIHtcbiAgICBjb25zdCBkYW1hZ2UgPSB1c2VyLm1hZ2lrIC8gdGFyZ2V0LmltbXVuaXR5O1xuICAgIHRhcmdldC50YWtlRGFtYWdlKGRhbWFnZSk7XG4gICAgdXNlci5yZWR1Y2VNYW5hKHRoaXMuY29zdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXIoXG4gICAgdXNlcjogUGxheWFibGUsXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApOiBUb3hpY0RyYWluIHtcbiAgICBjb25zdCByID0gcmFuZG9tSW50KHVzZXIud2lkdGggLyAxNiwgdXNlci53aWR0aCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgxODAsIDExMiwgMjI0LCAwLjUpXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICB1c2VyLnBvc2l0aW9uLnggKyB1c2VyLndpZHRoIC8gMixcbiAgICAgIHVzZXIucG9zaXRpb24ueSArIHVzZXIuaGVpZ2h0IC8gMixcbiAgICAgIHIsXG4gICAgICAwLFxuICAgICAgMiAqIE1hdGguUElcbiAgICApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRWZmZWN0IGltcGxlbWVudHMgSUVmZmVjdCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgc3RhcnRWYWx1ZTogbnVtYmVyO1xuICAgIGVuZFZhbHVlOiBudW1iZXI7XG4gICAgaW5jOiBudW1iZXI7XG4gICAgY2hhbmNlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBzdGFydFZhbHVlLFxuICAgICAgICBlbmRWYWx1ZSxcbiAgICAgICAgaW5jLFxuICAgICAgICBjaGFuY2VcbiAgICB9OiBJRWZmZWN0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgdGhpcy5lbmRWYWx1ZSA9IGVuZFZhbHVlO1xuICAgICAgICB0aGlzLmluYyA9IGluYztcbiAgICAgICAgdGhpcy5jaGFuY2UgPSBjaGFuY2U7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXR0YWNrIGltcGxlbWVudHMgSUF0dGFjayB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGFtYWdlOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbiAgcmFuZ2U6IG51bWJlcjtcbiAgaGVhbDogbnVtYmVyO1xuICBhY2N1cmFjeTogbnVtYmVyO1xuICBjb29sZG93bjogbnVtYmVyO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjb3N0OiBudW1iZXI7XG4gIGVmZmVjdHM6IEVmZmVjdFtdO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBuYW1lLFxuICAgIGRhbWFnZSxcbiAgICB0eXBlLFxuICAgIHJhbmdlLFxuICAgIGFjY3VyYWN5LFxuICAgIGNvb2xkb3duLFxuICAgIGNvc3QsXG4gICAgaGVhbCxcbiAgICBlZmZlY3RzLFxuICAgIGRlc2NyaXB0aW9uXG4gIH06IElBdHRhY2spIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jb3N0ID0gY29zdDtcbiAgICB0aGlzLmhlYWwgPSBoZWFsO1xuICAgIHRoaXMuZWZmZWN0cyA9IGVmZmVjdHM7XG4gICAgdGhpcy5yYW5nZSA9IHJhbmdlO1xuICAgIHRoaXMuYWNjdXJhY3kgPSBhY2N1cmFjeTtcbiAgICB0aGlzLmNvb2xkb3duID0gY29vbGRvd247XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgYWN0aXZhdGUodXNlcjogSVBsYXlhYmxlLCB0YXJnZXQ6IElQbGF5YWJsZSk6IElBdHRhY2sge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgTUFQX1dJRFRIOiBudW1iZXIgPSAxOTIwO1xuZXhwb3J0IGNvbnN0IE1BUF9IRUlHSFQ6IG51bWJlciA9IDE0NDA7XG5leHBvcnQgY29uc3QgVElMRV9XSURUSDogbnVtYmVyID0gNjQ7XG5leHBvcnQgY29uc3QgVElMRV9IRUlHSFQ6IG51bWJlciA9IDY0O1xuZXhwb3J0IGNvbnN0IENIQVJfV0lEVEg6IG51bWJlciA9IDE2O1xuZXhwb3J0IGNvbnN0IENIQVJfSEVJR0hUOiBudW1iZXIgPSAxNjtcbmV4cG9ydCBjb25zdCBNQVBfWF9PRkZTRVQ6IG51bWJlciA9IC02MDA7XG5leHBvcnQgY29uc3QgTUFQX1lfT0ZGU0VUOiBudW1iZXIgPSAtOTAwO1xuXG5leHBvcnQgY29uc3QgQ0hBUl9YX09GRlNFVDogbnVtYmVyID0gNjAwO1xuZXhwb3J0IGNvbnN0IENIQVJfWV9PRkZTRVQ6IG51bWJlciA9IDYwMDtcbmV4cG9ydCBjb25zdCBCQVJfT0ZGU0VUOiBudW1iZXIgPSAyO1xuZXhwb3J0IGNvbnN0IEJBUl9IRUlHSFQ6IG51bWJlciA9IDEwO1xuXG5leHBvcnQgY29uc3QgRU5FTVlfWF9PRkZTRVQ6IG51bWJlciA9IDI2NTtcbmV4cG9ydCBjb25zdCBFTkVNWV9ZX09GRlNFVDogbnVtYmVyID0gMjA7XG5leHBvcnQgY29uc3QgRU5FTVlfQ0hBU0VfRElTVEFOQ0U6IG51bWJlciA9IENIQVJfV0lEVEggKiA1MDtcblxuZXhwb3J0IGNvbnN0IElTX0NPTExJREVSOiBudW1iZXIgPSA5NTU7XG5leHBvcnQgY29uc3QgTU9WRVNQRUVEOiBudW1iZXIgPSA0O1xuZXhwb3J0IGNvbnN0IFRJTEVTOiB7IHJvd3M6IG51bWJlciwgY29sczogbnVtYmVyIH0gPSB7XG4gICAgcm93czogNDAsXG4gICAgY29sczogMzAsXG59XG5cbmV4cG9ydCBjb25zdCBESVJFQ1RJT05TID0gW1stMSwgMF0sIFswLCAtMV0sIFsxLCAwXSwgWzAsIDFdXTtcbiIsImV4cG9ydCBjb25zdCBjb2xsaXNpb25zOiBudW1iZXJbXSA9IFtcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCA5NTUsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCAwLCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCA5NTUsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDk1NSwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgOTU1LCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBcbl0iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmVLZXlQcmVzcyA9IChjb250cm9sbGVyOiBDb250cm9sbGVyKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnRyb2xsZXIucHJlc3MoZS5rZXkpO1xuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnRyb2xsZXIucmVsZWFzZShlLmtleSk7XG4gICAgfSlcbn1cbiIsImltcG9ydCB7IFNwcml0ZSwgUGxheWFibGUgfSBmcm9tIFwiLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyBtYXBTZXR1cCB9IGZyb20gXCIuL3JlbmRlci9jYW52YXNcIjtcbmltcG9ydCB7IGNvbmZpZ3VyZUtleVByZXNzIH0gZnJvbSBcIi4vZXZlbnRzL2tleXNcIjtcbmltcG9ydCB7IGFuaW1hdGlvbkJ1aWxkZXIgfSBmcm9tIFwiLi9yZW5kZXIvYW5pbWF0aW9uXCI7XG5pbXBvcnQge1xuICBNQVBfV0lEVEgsXG4gIE1BUF9IRUlHSFQsXG4gIE1BUF9YX09GRlNFVCxcbiAgTUFQX1lfT0ZGU0VULFxuICBDSEFSX1hfT0ZGU0VULFxuICBDSEFSX1lfT0ZGU0VULFxuICBFTkVNWV9YX09GRlNFVCxcbiAgRU5FTVlfWV9PRkZTRVQsXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgVG94aWNEcmFpbiB9IGZyb20gXCIuL2F0dGFja3MvYXR0YWNrTGlzdC90b3hpY0RyYWluXCI7XG5pbXBvcnQgeyBTb2Z0R3Jhc3MgfSBmcm9tIFwiLi9hdHRhY2tzL2F0dGFja0xpc3Qvc29mdEdyYXNzXCI7XG5pbXBvcnQgeyBDaXRyaWNIZWFsaW5nIH0gZnJvbSBcIi4vYXR0YWNrcy9hdHRhY2tMaXN0L2NpdHJpY0hlYWxpbmdcIjtcblxuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgQmFja2dyb3VuZFNwcml0ZSBmcm9tIFwiLi9pbWcvbm92ZW1iZXIucG5nXCI7XG5pbXBvcnQgRm9yZWdyb3VuZFNwcml0ZSBmcm9tIFwiLi9pbWcvbm92ZW1iZXJfZm9yZWdyb3VuZC5wbmdcIjtcbmltcG9ydCBQbGF5ZXJTcHJpdGUgZnJvbSBcIi4vaW1nL21haW5fY2hhcl9zcHJpdGUucG5nXCI7XG5pbXBvcnQgRW5lbXlTcHJpdGUgZnJvbSBcIi4vaW1nL211c2hyb29tX2Jvc3MucG5nXCI7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllckltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBiZ0ltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBmZ0ltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBlbmVteUltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIGJnSW1nLnNyYyA9IEJhY2tncm91bmRTcHJpdGU7XG4gIHBsYXllckltZy5zcmMgPSBQbGF5ZXJTcHJpdGU7XG4gIGZnSW1nLnNyYyA9IEZvcmVncm91bmRTcHJpdGU7XG4gIGVuZW15SW1nLnNyYyA9IEVuZW15U3ByaXRlO1xuXG4gIGNvbnN0IHBsYXllckZyYW1lcyA9IDE2O1xuXG4gIGNvbnN0IGJnID0gbmV3IFNwcml0ZSh7XG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IE1BUF9YX09GRlNFVCxcbiAgICAgIHk6IE1BUF9ZX09GRlNFVCxcbiAgICB9LFxuICAgIGltYWdlOiBiZ0ltZyxcbiAgICB3aWR0aDogTUFQX1dJRFRILFxuICAgIGhlaWdodDogTUFQX0hFSUdIVCxcbiAgICBkaXJlY3Rpb25zOiB7XG4gICAgICBkb3duOiAwLFxuICAgICAgdXA6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGZnID0gbmV3IFNwcml0ZSh7XG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IE1BUF9YX09GRlNFVCxcbiAgICAgIHk6IE1BUF9ZX09GRlNFVCxcbiAgICB9LFxuICAgIGltYWdlOiBmZ0ltZyxcbiAgICB3aWR0aDogTUFQX1dJRFRILFxuICAgIGhlaWdodDogTUFQX0hFSUdIVCxcbiAgICBkaXJlY3Rpb25zOiB7XG4gICAgICBkb3duOiAwLFxuICAgICAgdXA6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5YWJsZShcbiAgICB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiBDSEFSX1hfT0ZGU0VULFxuICAgICAgICB5OiBDSEFSX1lfT0ZGU0VULFxuICAgICAgfSxcbiAgICAgIGltYWdlOiBwbGF5ZXJJbWcsXG4gICAgICB3aWR0aDogcGxheWVySW1nLndpZHRoIC8gcGxheWVyRnJhbWVzLFxuICAgICAgaGVpZ2h0OiBwbGF5ZXJJbWcuaGVpZ2h0LFxuICAgICAgem9vbTogNCxcbiAgICAgIGZyYW1lczogcGxheWVyRnJhbWVzLFxuICAgICAgZGlyZWN0aW9uczoge1xuICAgICAgICBkb3duOiAwLFxuICAgICAgICB1cDogNCxcbiAgICAgICAgbGVmdDogOCxcbiAgICAgICAgcmlnaHQ6IDEyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhwOiAxMDAsXG4gICAgICBocFJlZ2VuOiAxZS00LFxuICAgICAgbWFuYTogMTAwMCxcbiAgICAgIG1hbmFSZWdlbjogMC4wMDEsXG4gICAgICBtdXNjbGU6IDMwLFxuICAgICAgbWFnaWs6IDMwLFxuICAgICAgYXJtb3VyOiAzMCxcbiAgICAgIGltbXVuaXR5OiAzMCxcbiAgICAgIGF0dGFja3M6IFtuZXcgU29mdEdyYXNzKCksIG5ldyBDaXRyaWNIZWFsaW5nKCldLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgZW5lbXlDb29yZHMgPSBbeyB4OiAyNjUsIHk6IDIwIH1dIC8vLCB7IHg6IDE1MDAsIHk6IDU1MCB9LCB7IHg6IDUwMCwgeTogNTAwIH1dO1xuXG4gIGNvbnN0IGVuZW1pZXMgPSBlbmVteUNvb3Jkcy5tYXAoZW5lbXlDb29yZHMgPT4ge1xuICAgIGNvbnN0IGVuZW15ID0gbmV3IFBsYXlhYmxlKHtcbiAgICAgICAgcG9zaXRpb246IGVuZW15Q29vcmRzLFxuICAgICAgICBpbWFnZTogZW5lbXlJbWcsXG4gICAgICAgIHdpZHRoOiBlbmVteUltZy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBlbmVteUltZy5oZWlnaHQsXG4gICAgICAgIHpvb206IDQsXG4gICAgICAgIGRpcmVjdGlvbnM6IHtcbiAgICAgICAgICBkb3duOiAwLFxuICAgICAgICAgIHVwOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBocDogMTAwLFxuICAgICAgICBocFJlZ2VuOiAxZS00LFxuICAgICAgICBtYW5hOiAxMDAwLFxuICAgICAgICBtYW5hUmVnZW46IDAuMDAxLFxuICAgICAgICBtdXNjbGU6IDEwLFxuICAgICAgICBtYWdpazogMzAsXG4gICAgICAgIGFybW91cjogMTAsXG4gICAgICAgIGltbXVuaXR5OiAzMCxcbiAgICAgICAgYXR0YWNrczogW25ldyBUb3hpY0RyYWluKCldLFxuICAgICAgfVxuICAgIClcbiAgICByZXR1cm4gZW5lbXk7XG4gIH0pO1xuXG4gIGNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKHtcbiAgICBjb250cm9sbGVyOiB7XG4gICAgICB1cDogXCJ3XCIsXG4gICAgICBkb3duOiBcInNcIixcbiAgICAgIGxlZnQ6IFwiYVwiLFxuICAgICAgcmlnaHQ6IFwiZFwiLFxuICAgICAgYXR0YWNrczogW1wieVwiLCBcInVcIiwgXCJpXCIsIFwib1wiXSxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgY2FudmFzID0gbWFwU2V0dXAoTUFQX1dJRFRILCBNQVBfSEVJR0hUKTtcbiAgY29uZmlndXJlS2V5UHJlc3Moc3RhdGUuY29udHJvbGxlcik7XG4gIGFuaW1hdGlvbkJ1aWxkZXIoeyBiZywgcGxheWVyLCBzdGF0ZSwgY2FudmFzLCBmZywgZW5lbWllcyB9KSgpO1xufTtcblxubWFpbigpO1xuIiwiaW1wb3J0IHsgZ2V0Q3R4IH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBNT1ZFU1BFRUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBnZXRDb2xsaWRlcnMsIGNoZWNrQ29sbGlzaW9uIH0gZnJvbSBcIi4vY29sbGlkZXJcIjtcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIi4vY29sbGlkZXJcIjtcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5pbXBvcnQgeyBTcHJpdGUsIFBsYXlhYmxlIH0gZnJvbSBcIi4uL3Nwcml0ZXNcIjtcbmltcG9ydCB7IGhhc0tleSwgcmFuZG9tSW50IH0gZnJvbSBcIi4uL3V0aWxzL21pc2NcIjtcblxudHlwZSBNb3Rpb25Db250cm9sQXJncyA9IHtcbiAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIHN0YXRlOiBTdGF0ZTtcbiAgYmc6IFNwcml0ZTtcbiAgcGxheWVyOiBQbGF5YWJsZTtcbiAgZW5lbWllczogUGxheWFibGVbXTtcbiAgZmc6IFNwcml0ZTtcbiAgY29sbGlkZXJzOiBCb3hDb2xsaWRlcltdO1xufTtcblxudHlwZSBBbmltYXRpb25CdWlsZGVyQXJncyA9IHtcbiAgYmc6IFNwcml0ZTtcbiAgcGxheWVyOiBQbGF5YWJsZTtcbiAgZW5lbWllczogUGxheWFibGVbXTtcbiAgZmc6IFNwcml0ZTtcbiAgc3RhdGU6IFN0YXRlO1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xufTtcblxuY29uc3QgbW90aW9uQ29udHJvbCA9ICh7XG4gIGN0eCxcbiAgc3RhdGUsXG4gIHBsYXllcixcbiAgZW5lbWllcyxcbiAgY29sbGlkZXJzLFxufTogTW90aW9uQ29udHJvbEFyZ3MpOiB2b2lkID0+IHtcbiAgY29uc3QgeyBjb250cm9sbGVyIH0gPSBzdGF0ZTtcbiAgbGV0IGZ1dHVyZUtleVN0YXRlOiBjb29yZGluYXRlcyA9IHsgeDogMCwgeTogMCB9O1xuXG4gIGlmIChjb250cm9sbGVyLmlzUHJlc3NlZChcInVwXCIpKSB7XG4gICAgZnV0dXJlS2V5U3RhdGUueSA9IE1PVkVTUEVFRDtcbiAgfSBlbHNlIGlmIChjb250cm9sbGVyLmlzUHJlc3NlZChcImxlZnRcIikpIHtcbiAgICBmdXR1cmVLZXlTdGF0ZS54ID0gTU9WRVNQRUVEO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIuaXNQcmVzc2VkKFwiZG93blwiKSkge1xuICAgIGZ1dHVyZUtleVN0YXRlLnkgPSAtTU9WRVNQRUVEO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIuaXNQcmVzc2VkKFwicmlnaHRcIikpIHtcbiAgICBmdXR1cmVLZXlTdGF0ZS54ID0gLU1PVkVTUEVFRDtcbiAgfVxuXG4gIGNvbnN0IHBsYXllckNvbGxpc2lvbnMgPSBjb2xsaWRlcnMuc29tZSgoY29sbGlkZXI6IEJveENvbGxpZGVyKSA9PlxuICAgIGNoZWNrQ29sbGlzaW9uKHBsYXllciwgY29sbGlkZXIsIGZ1dHVyZUtleVN0YXRlKVxuICApO1xuXG4gIGNvbnN0IG1vdmVNb2JpbGUgPSAobW9iaWxlOiBCb3hDb2xsaWRlciB8IFNwcml0ZSkgPT4ge1xuICAgIGNvbnN0IG1vdmVtZW50RGlyZWN0aW9uID0gY29udHJvbGxlci5nZXRNb3ZlbWVudCgpO1xuICAgIGlmICghbW92ZW1lbnREaXJlY3Rpb24pIHtcbiAgICAgIHBsYXllci5hbmltYXRlKFwiaWRsZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBheGlzLCB2ZWxvY2l0eSB9ID0gY29udHJvbGxlci5tb3Rpb25bbW92ZW1lbnREaXJlY3Rpb25dO1xuICAgIHBsYXllci5hbmltYXRlKG1vdmVtZW50RGlyZWN0aW9uKTtcbiAgICBlbmVtaWVzLmZvckVhY2goZW5lbXkgPT4gZW5lbXkuZm9sbG93KHBsYXllciwgY29sbGlkZXJzKSlcblxuICAgIGlmICghcGxheWVyQ29sbGlzaW9ucyAmJiBoYXNLZXkobW9iaWxlLnBvc2l0aW9uLCBheGlzKSkge1xuICAgICAgbW9iaWxlLnBvc2l0aW9uW2F4aXNdICs9IHZlbG9jaXR5O1xuICAgIH1cbiAgfTtcblxuICBtb3ZlTW9iaWxlKHBsYXllcik7XG5cbiAgZW5lbWllcy5mb3JFYWNoKChlbmVteTogUGxheWFibGUpID0+IHtcbiAgICBlbmVteS5yZWdlbigpLmF0dGFjayhwbGF5ZXIsIHJhbmRvbUludCgwLCBlbmVteS5hdHRhY2tzLmxlbmd0aCAtIDEpLCBjdHgpO1xuICAgIHBsYXllci5yZWdlbigpLmF0dGFjayhlbmVteSwgY29udHJvbGxlci5nZXRBdHRhY2soKSwgY3R4KTtcbiAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBhbmltYXRpb25CdWlsZGVyID0gKHtcbiAgYmcsXG4gIHBsYXllcixcbiAgc3RhdGUsXG4gIGNhbnZhcyxcbiAgZmcsXG4gIGVuZW1pZXMsXG59OiBBbmltYXRpb25CdWlsZGVyQXJncyk6ICgoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gZ2V0Q3R4KGNhbnZhcyk7XG4gIGNvbnN0IHNwcml0ZXM6IFNwcml0ZVtdID0gW2JnLCBwbGF5ZXIsIGZnLCAuLi5lbmVtaWVzXTtcbiAgc3ByaXRlcy5mb3JFYWNoKChzcHJpdGUpID0+IHNwcml0ZS5sb2FkSW1hZ2UoY3R4KSk7XG4gIGNvbnN0IGNvbGxpZGVycyA9IGdldENvbGxpZGVycygpO1xuXG4gIGNvbnN0IGFuaW1hdGUgPSAoKTogdm9pZCA9PiB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMFwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGJnLmRyYXcoY3R4KTtcbiAgICBwbGF5ZXIuZHJhdyhjdHgpO1xuICAgIGVuZW1pZXMuZm9yRWFjaCgoZW5lbXkpID0+IGVuZW15LmRyYXcoY3R4KSk7XG4gICAgZmcuZHJhdyhjdHgpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgbW90aW9uQ29udHJvbCh7IGN0eCwgc3RhdGUsIGJnLCBwbGF5ZXIsIGVuZW1pZXMsIGZnLCBjb2xsaWRlcnMgfSk7XG4gIH07XG4gIHJldHVybiBhbmltYXRlO1xufTtcbiIsImV4cG9ydCBjb25zdCBtYXBTZXR1cCA9IChcbiAgbWFwX3dpZHRoOiBudW1iZXIsXG4gIG1hcF9oZWlnaHQ6IG51bWJlclxuKTogSFRNTENhbnZhc0VsZW1lbnQgPT4ge1xuICBjb25zdCBjYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNhbnZhcy53aWR0aCA9IG1hcF93aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IG1hcF9oZWlnaHQ7XG4gIHJldHVybiBjYW52YXM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q3R4ID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPT4ge1xuICBjb25zdCBjdHggPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGN0eDtcbn07XG4iLCJpbXBvcnQgeyBjb2xsaXNpb25zIH0gZnJvbSBcIi4uLy4uL2RhdGEvY29sbGlzaW9uXCI7XG5cbmV4cG9ydCBjb25zdCBtYWtlR3JpZCA9IChjaHVua1NpemU6IG51bWJlcik6IG51bWJlcltdW10gPT4ge1xuICAgIGNvbnN0IGNvbGxpc2lvbkdyaWQ6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpc2lvbnMubGVuZ3RoOyBpICs9IGNodW5rU2l6ZSkge1xuICAgICAgICBjb2xsaXNpb25HcmlkLnB1c2goY29sbGlzaW9ucy5zbGljZShpLCBpICsgY2h1bmtTaXplKSk7XG4gICAgfVxuICAgIHJldHVybiBjb2xsaXNpb25HcmlkXG59XG4iLCJpbXBvcnQgeyBtYWtlR3JpZCB9IGZyb20gXCIuL2NvbGxpc2lvbnNcIjtcbmltcG9ydCB7IElTX0NPTExJREVSLCBNQVBfWF9PRkZTRVQsIE1BUF9ZX09GRlNFVCwgVElMRVMsIFRJTEVfSEVJR0hULCBUSUxFX1dJRFRIIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBCb3hDb2xsaWRlciBpbXBsZW1lbnRzIEJveCB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBwb3NpdGlvbjogY29vcmRpbmF0ZXM7XG4gICAgaXNDb2xsaWRlcjogYm9vbGVhbjtcbiAgICBzdGF0aWMgd2lkdGggPSBUSUxFX1dJRFRIO1xuICAgIHN0YXRpYyBoZWlnaHQgPSBUSUxFX0hFSUdIVDtcblxuICAgIGNvbnN0cnVjdG9yKHsgcG9zaXRpb24gfTogQm94UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLndpZHRoID0gQm94Q29sbGlkZXIud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQm94Q29sbGlkZXIuaGVpZ2h0O1xuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDEwMCwgMCwgMCwgMC41KVwiO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgQm94Q29sbGlkZXIud2lkdGgsIEJveENvbGxpZGVyLmhlaWdodCk7XG4gICAgICAgIGN0eC5mb250ID0gXCIxMHB4IEFyaWFsXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChgKCR7dGhpcy5wb3NpdGlvbi54fSwgJHt0aGlzLnBvc2l0aW9uLnl9KWAsIHRoaXMucG9zaXRpb24ueCArIDEwLCB0aGlzLnBvc2l0aW9uLnkgKyAyMCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgNSwgNSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY29vcmRzQWJzUG9zaXRpb24gPSAoY29vcmRzOiBjb29yZGluYXRlcyk6IGNvb3JkaW5hdGVzID0+ICh7XG4gICAgeDogTWF0aC5mbG9vcigoY29vcmRzLnggLSBNQVBfWF9PRkZTRVQpIC8gVElMRV9XSURUSCksXG4gICAgeTogTWF0aC5mbG9vcigoY29vcmRzLnkgLSBNQVBfWV9PRkZTRVQpIC8gVElMRV9IRUlHSFQpLFxufSlcblxuZXhwb3J0IGNvbnN0IGNvb3Jkc01hcFBvc2l0aW9uID0gKGNvb3JkczogY29vcmRpbmF0ZXMpOiBjb29yZGluYXRlcyA9PiAoe1xuICAgIHg6IChjb29yZHMueCAqIFRJTEVfV0lEVEgpICsgTUFQX1hfT0ZGU0VULFxuICAgIHk6IChjb29yZHMueSAqIFRJTEVfSEVJR0hUKSArIE1BUF9ZX09GRlNFVCxcbn0pXG5cbmV4cG9ydCBjb25zdCBnZXRDb2xsaWRlcnMgPSAoKTogQm94Q29sbGlkZXJbXSA9PiB7XG4gICAgY29uc3QgY29sbGlkZXJzOiBCb3hDb2xsaWRlcltdID0gW107XG4gICAgY29uc3QgZ3JpZDogbnVtYmVyW11bXSA9IG1ha2VHcmlkKFRJTEVTLnJvd3MpO1xuICAgIGdyaWQuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGopID0+IHtcbiAgICAgICAgICAgIGlmIChjb2wgPT09IElTX0NPTExJREVSKSB7XG4gICAgICAgICAgICAgICAgY29sbGlkZXJzLnB1c2gobmV3IEJveENvbGxpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNvb3Jkc01hcFBvc2l0aW9uKHsgeDogaiwgeTogaSB9KSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgcmV0dXJuIGNvbGxpZGVycztcbn1cblxuLyoqXG4gKiAgICAgICAgICBfX19fXyBfX19fX1xuICogICAgICAgICAgfCBQIHwgfCBDIHxcbiAqICAgICAgICAgIOKAvuKAvuKAvuKAvuKAviDigL7igL7igL7igL7igL5cbiAqICAgICAgICAgXG4gKiBAcGFyYW0gc2hhcGUxIFxuICogQHBhcmFtIHNoYXBlMiBcbiAqIEBwYXJhbSBwYXJhbTIgXG4gKiBAcGFyYW0gdG9sZXJhbmNlIFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBjb25zdCBjaGVja0NvbGxpc2lvbiA9IChcbiAgICBzaGFwZTE6IEJveCxcbiAgICBzaGFwZTI6IEJveCxcbiAgICB7IHgsIHkgfTogY29vcmRpbmF0ZXMsXG4gICAgdG9sZXJhbmNlOiBudW1iZXIgPSAxNlxuKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3Qgc2hhcGUxUG9zaXRpb24gPSBzaGFwZTEucG9zaXRpb247XG4gICAgY29uc3Qgc2hhcGUyUG9zaXRpb24gPSBzaGFwZTIucG9zaXRpb247XG5cbiAgICByZXR1cm4gKChzaGFwZTFQb3NpdGlvbi54ICsgc2hhcGUxLndpZHRoID4gc2hhcGUyUG9zaXRpb24ueCArIHggKyB0b2xlcmFuY2UpIC8vIHBsYXllciBpcyB0byB0aGUgcmlnaHQgb2YgY29sbGlkZXJcbiAgICAmJiAoc2hhcGUxUG9zaXRpb24ueCA8IHNoYXBlMlBvc2l0aW9uLnggKyB4ICsgc2hhcGUyLndpZHRoIC0gdG9sZXJhbmNlKSAvLyBwbGF5ZXIgaXMgdG8gdGhlIGxlZnQgb2YgY29sbGlkZXJcbiAgICAmJiAoc2hhcGUxUG9zaXRpb24ueSArIHNoYXBlMS5oZWlnaHQgPiBzaGFwZTJQb3NpdGlvbi55ICsgeSArIHRvbGVyYW5jZSkgLy8gcGxheWVyIGlzIGJlbG93IGNvbGxpZGVyXG4gICAgJiYgKHNoYXBlMVBvc2l0aW9uLnkgPCBzaGFwZTJQb3NpdGlvbi55ICsgeSArIHNoYXBlMi5oZWlnaHQgLSB0b2xlcmFuY2UpKSAvLyBwbGF5ZXIgaXMgYWJvdmUgY29sbGlkZXJcbn1cbiIsImltcG9ydCB7IGhhc0tleSB9IGZyb20gXCIuLi91dGlscy9taXNjXCI7XG5pbXBvcnQgeyBCQVJfSEVJR0hULCBCQVJfT0ZGU0VUIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtcbiAgQm94Q29sbGlkZXIsXG4gIGNvb3Jkc0Fic1Bvc2l0aW9uLFxuICBjb29yZHNNYXBQb3NpdGlvbixcbn0gZnJvbSBcIi4uL3JlbmRlci9jb2xsaWRlclwiO1xuaW1wb3J0IHsgUGF0aEZpbmRlciB9IGZyb20gXCIuL3BhdGhmaW5kZXJcIjtcbmltcG9ydCB7IGNoZWNrQ29sbGlzaW9uIH0gZnJvbSBcIi4uL3JlbmRlci9jb2xsaWRlclwiO1xuXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcbiAgcG9zaXRpb246IGNvb3JkaW5hdGVzO1xuICB6b29tPzogbnVtYmVyO1xuICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGZhY2U6IG51bWJlcjtcbiAgZnJhbWVzPzogbnVtYmVyO1xuICBjdXJyZW50RnJhbWU6IG51bWJlcjtcbiAgZGlyZWN0aW9uczogRGlyZWN0aW9uRmFjZUFyZ3M7XG4gIGZyYW1lc1BlckRpcmVjdGlvbjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBwb3NpdGlvbixcbiAgICBpbWFnZSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgZGlyZWN0aW9ucyxcbiAgICB6b29tID0gMSxcbiAgICBmcmFtZXMgPSAxLFxuICB9OiBTcHJpdGVBcmdzKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuem9vbSA9IHpvb207XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aCAqIHRoaXMuem9vbTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCAqIHRoaXMuem9vbTtcbiAgICB0aGlzLmZhY2UgPSAwO1xuICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcbiAgICB0aGlzLmRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zO1xuICAgIHRoaXMuZnJhbWVzUGVyRGlyZWN0aW9uID0gdGhpcy5mcmFtZXMgLyBPYmplY3Qua2V5cyh0aGlzLmRpcmVjdGlvbnMpLmxlbmd0aDtcbiAgfVxuXG4gIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBTcHJpdGUge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5jdXJyZW50RnJhbWUsXG4gICAgICAwLFxuICAgICAgdGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzLFxuICAgICAgdGhpcy5pbWFnZS5oZWlnaHQsXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAodGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzKSAqIHRoaXMuem9vbSxcbiAgICAgIHRoaXMuaW1hZ2UuaGVpZ2h0ICogdGhpcy56b29tXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxvYWRJbWFnZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IFNwcml0ZSB7XG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGF5YWJsZSBleHRlbmRzIFNwcml0ZSBpbXBsZW1lbnRzIElQbGF5YWJsZSB7XG4gIHBvc2l0aW9uOiBjb29yZGluYXRlcztcbiAgem9vbT86IG51bWJlcjtcbiAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBmYWNlOiBudW1iZXI7XG4gIGZyYW1lcz86IG51bWJlcjtcbiAgY3VycmVudEZyYW1lOiBudW1iZXI7XG4gIGRpcmVjdGlvbnM6IERpcmVjdGlvbkZhY2VBcmdzO1xuICBmcmFtZXNQZXJEaXJlY3Rpb246IG51bWJlcjtcbiAgcmVmcmVzaFJhdGU6IG51bWJlcjtcbiAgbWF4SHA6IG51bWJlcjtcbiAgaHA6IG51bWJlcjtcbiAgaHBSZWdlbjogbnVtYmVyO1xuICBhcm1vdXI6IG51bWJlcjtcbiAgaW1tdW5pdHk6IG51bWJlcjtcbiAgbXVzY2xlOiBudW1iZXI7XG4gIG1hZ2lrOiBudW1iZXI7XG4gIG1heE1hbmE6IG51bWJlcjtcbiAgbWFuYTogbnVtYmVyO1xuICBtYW5hUmVnZW46IG51bWJlcjtcbiAgcGF0aDogY29vcmRpbmF0ZXNbXTtcbiAgYXR0YWNrczogSUF0dGFja1tdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNwcml0ZUFyZ3M6IFNwcml0ZUFyZ3MsXG4gICAge1xuICAgICAgaHAsXG4gICAgICBocFJlZ2VuLFxuICAgICAgbWFuYSxcbiAgICAgIG1hbmFSZWdlbixcbiAgICAgIG11c2NsZSxcbiAgICAgIG1hZ2lrLFxuICAgICAgYXJtb3VyLFxuICAgICAgaW1tdW5pdHksXG4gICAgICBhdHRhY2tzLFxuICAgIH06IFBsYXlhYmxlQXJnc1xuICApIHtcbiAgICBzdXBlcihzcHJpdGVBcmdzKTtcbiAgICB0aGlzLm1heEhwID0gaHA7XG4gICAgdGhpcy5ocCA9IGhwO1xuICAgIHRoaXMuaHBSZWdlbiA9IGhwUmVnZW47XG4gICAgdGhpcy5tYXhNYW5hID0gbWFuYTtcbiAgICB0aGlzLm1hbmEgPSBtYW5hO1xuICAgIHRoaXMubWFuYVJlZ2VuID0gbWFuYVJlZ2VuO1xuICAgIHRoaXMubXVzY2xlID0gbXVzY2xlO1xuICAgIHRoaXMubWFnaWsgPSBtYWdpaztcbiAgICB0aGlzLnJlZnJlc2hSYXRlID0gdGhpcy5mcmFtZXNQZXJEaXJlY3Rpb24gLyAodGhpcy5mcmFtZXMgKiAyKTtcbiAgICB0aGlzLmFybW91ciA9IGFybW91cjtcbiAgICB0aGlzLmltbXVuaXR5ID0gaW1tdW5pdHk7XG4gICAgdGhpcy5wYXRoID0gW107XG4gICAgdGhpcy5hdHRhY2tzID0gYXR0YWNrcztcbiAgfVxuXG4gIGlkbGVBbmltYXRpb24oKTogUGxheWFibGUge1xuICAgIGZvciAobGV0IGZyYW1lSWR4IG9mIE9iamVjdC52YWx1ZXModGhpcy5kaXJlY3Rpb25zKSkge1xuICAgICAgY29uc3QgZmFjZSA9IHRoaXMuY3VycmVudEZyYW1lIC8gdGhpcy5mcmFtZXM7XG4gICAgICBpZiAoZmFjZSA8IGZyYW1lSWR4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5mYWNlID0gZnJhbWVJZHg7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudEZyYW1lID0gTWF0aC5mbG9vcih0aGlzLmZhY2UpICogdGhpcy5mcmFtZXM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3YWxrQW5pbWF0aW9uKGRpcmVjdGlvbjogc3RyaW5nKTogUGxheWFibGUge1xuICAgIGlmICghaGFzS2V5KHRoaXMuZGlyZWN0aW9ucywgZGlyZWN0aW9uKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RGcmFtZSA9IHRoaXMuZGlyZWN0aW9uc1tkaXJlY3Rpb25dO1xuICAgIGNvbnN0IGxhc3RGcmFtZSA9IHRoaXMuZGlyZWN0aW9uc1tkaXJlY3Rpb25dICsgdGhpcy5mcmFtZXNQZXJEaXJlY3Rpb247XG4gICAgdGhpcy5mYWNlID1cbiAgICAgIHRoaXMuZmFjZSA+PSBmaXJzdEZyYW1lICYmIHRoaXMuZmFjZSA8IGxhc3RGcmFtZVxuICAgICAgICA/IHRoaXMuZmFjZSArIHRoaXMucmVmcmVzaFJhdGVcbiAgICAgICAgOiBmaXJzdEZyYW1lO1xuICAgIHRoaXMuY3VycmVudEZyYW1lID0gTWF0aC5mbG9vcih0aGlzLmZhY2UpICogdGhpcy5mcmFtZXM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhbmltYXRlKGRpcmVjdGlvbjogc3RyaW5nKTogUGxheWFibGUge1xuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaWRsZVwiKSB7XG4gICAgICB0aGlzLmlkbGVBbmltYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53YWxrQW5pbWF0aW9uKGRpcmVjdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWxpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaHAgPiAwO1xuICB9XG5cbiAgcmVnZW4oKTogUGxheWFibGUge1xuICAgIGlmICghdGhpcy5hbGl2ZSgpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5ocCA9IE1hdGgubWluKHRoaXMubWF4SHAsIHRoaXMuaHAgKyB0aGlzLm1heEhwICogdGhpcy5ocFJlZ2VuKTtcbiAgICB0aGlzLm1hbmEgPSBNYXRoLm1pbih0aGlzLm1heE1hbmEsIHRoaXMubWFuYSArIHRoaXMubWF4TWFuYSAqIHRoaXMubWFuYVJlZ2VuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZvbGxvdyh0YXJnZXQ6IFBsYXlhYmxlLCBjb2xsaWRlcnM6IEJveENvbGxpZGVyW10pOiBQbGF5YWJsZSB7XG4gICAgaWYgKCF0YXJnZXQuYWxpdmUoKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGNvb3Jkc0Fic1Bvc2l0aW9uKHRoaXMucG9zaXRpb24pO1xuICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gY29vcmRzQWJzUG9zaXRpb24odGFyZ2V0LnBvc2l0aW9uKTtcbiAgICBpZiAodGhpcy5wYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5wYXRoID0gbmV3IFBhdGhGaW5kZXIoKVxuICAgICAgICAuZmluZChjdXJyZW50UG9zaXRpb24sIHRhcmdldFBvc2l0aW9uLCBjb2xsaWRlcnMpXG4gICAgICAgIC5tYXAoY29vcmRzTWFwUG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhdGgubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNyYXdsKHRoaXMucGF0aC5zaGlmdCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjcmF3bChjb29yZHM6IGNvb3JkaW5hdGVzKTogUGxheWFibGUge1xuICAgIGNvbnN0IHggPSBjb29yZHMueCAtIHRoaXMucG9zaXRpb24ueDtcbiAgICBjb25zdCB5ID0gY29vcmRzLnkgLSB0aGlzLnBvc2l0aW9uLnk7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHg7XG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhdHRhY2soXG4gICAgdGFyZ2V0OiBQbGF5YWJsZSxcbiAgICBjaG9pY2U6IG51bWJlciB8IG51bGwsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKTogUGxheWFibGUge1xuICAgIGlmICh0aGlzLmhwID09PSAwIHx8IGNob2ljZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbnN0IGF0dGFjazogSUF0dGFjayA9IHRoaXMuYXR0YWNrc1tjaG9pY2VdO1xuICAgIGNvbnN0IGluUmFuZ2UgPSBjaGVja0NvbGxpc2lvbih0YXJnZXQsIHRoaXMsIHsgeDogMCwgeTogMCB9LCAtYXR0YWNrLnJhbmdlKTtcblxuICAgIGlmIChcbiAgICAgICFpblJhbmdlIHx8XG4gICAgICAoYXR0YWNrLmRhbWFnZSA+IDAgJiYgdGFyZ2V0LmhwID09PSAwKSB8fFxuICAgICAgYXR0YWNrLmNvc3QgPiB0aGlzLm1hbmFcbiAgICApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXIgPSB0aGlzO1xuICAgIGF0dGFjay5hY3RpdmF0ZSh1c2VyLCB0YXJnZXQpLnJlbmRlcih1c2VyLCB0YXJnZXQsIGN0eCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0YWtlRGFtYWdlKGRhbWFnZTogbnVtYmVyKTogUGxheWFibGUge1xuICAgIHRoaXMuaHAgPSBNYXRoLm1heCgwLCB0aGlzLmhwIC0gZGFtYWdlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhlYWwoYm9udXNIcDogbnVtYmVyKTogUGxheWFibGUge1xuICAgIHRoaXMuaHAgPSBNYXRoLm1pbih0aGlzLm1heEhwLCB0aGlzLmhwICsgYm9udXNIcCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZWR1Y2VNYW5hKG1hbmFDb3N0OiBudW1iZXIpOiBQbGF5YWJsZSB7XG4gICAgdGhpcy5tYW5hID0gTWF0aC5tYXgoMCwgdGhpcy5tYW5hIC0gbWFuYUNvc3QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaHBCYXJDb2xvcigpIHtcbiAgICBpZiAodGhpcy5ocCA+IDUwKSB7XG4gICAgICByZXR1cm4gXCIjNjVkNjcwXCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLmhwID4gMjApIHtcbiAgICAgIHJldHVybiBcIiNmZmQ3MDBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiI2ZmMDAwMFwiO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdNZXRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IFBsYXlhYmxlIHtcbiAgICBjb25zdCBCYXJNYXhXaWR0aCA9IHRoaXMud2lkdGg7XG4gICAgY29uc3QgeCA9IHRoaXMucG9zaXRpb24ueCAtIEJBUl9PRkZTRVQ7XG4gICAgY29uc3QgeSA9IHRoaXMucG9zaXRpb24ueSAtIDIwO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgICBjdHguZmlsbFJlY3QoXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIEJhck1heFdpZHRoICsgQkFSX09GRlNFVCAqIDIsXG4gICAgICBCQVJfSEVJR0hUICsgQkFSX09GRlNFVCAqIDJcbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZHJhd0hQKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogUGxheWFibGUge1xuICAgIGNvbnN0IEJhck1heFdpZHRoID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCBocEJhciA9ICh0aGlzLmhwIC8gdGhpcy5tYXhIcCkgKiBCYXJNYXhXaWR0aDtcbiAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbi54O1xuICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uLnkgLSAyMCArIEJBUl9PRkZTRVQ7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuaHBCYXJDb2xvcigpO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCBocEJhciwgNSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmF3TWFuYShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IFBsYXlhYmxlIHtcbiAgICBjb25zdCBCYXJNYXhXaWR0aCA9IHRoaXMud2lkdGg7XG4gICAgY29uc3QgY3VycmVudE1hbmEgPSAodGhpcy5tYW5hIC8gdGhpcy5tYXhNYW5hKSAqIEJhck1heFdpZHRoO1xuICAgIGNvbnN0IHggPSB0aGlzLnBvc2l0aW9uLng7XG4gICAgY29uc3QgeSA9IHRoaXMucG9zaXRpb24ueSAtIDIwICsgQkFSX09GRlNFVCArIDUgKyBCQVJfT0ZGU0VUO1xuICAgIGNvbnN0IHdpZHRoID0gY3VycmVudE1hbmE7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwNzdkYVwiO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgMyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmF3RGVidWcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBQbGF5YWJsZSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDEwMCwgMCwgMCwgMC41KVwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHguZm9udCA9IFwiMTBweCBBcmlhbFwiO1xuICAgIGN0eC5maWxsVGV4dChcbiAgICAgIGAoJHt0aGlzLnBvc2l0aW9uLnh9LCAke3RoaXMucG9zaXRpb24ueX0pYCxcbiAgICAgIHRoaXMucG9zaXRpb24ueCArIDEwLFxuICAgICAgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgKyAyMFxuICAgICk7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCA1LCA1KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBQbGF5YWJsZSB7XG4gICAgaWYgKHRoaXMuaHAgPT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMuZHJhd01ldGVyKGN0eCkuZHJhd0hQKGN0eCkuZHJhd01hbmEoY3R4KTtcblxuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5jdXJyZW50RnJhbWUsXG4gICAgICAwLFxuICAgICAgdGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzLFxuICAgICAgdGhpcy5pbWFnZS5oZWlnaHQsXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAodGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzKSAqIHRoaXMuem9vbSxcbiAgICAgIHRoaXMuaW1hZ2UuaGVpZ2h0ICogdGhpcy56b29tXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgVElMRVMsIERJUkVDVElPTlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCb3hDb2xsaWRlciwgY29vcmRzQWJzUG9zaXRpb24gfSBmcm9tIFwiLi4vcmVuZGVyL2NvbGxpZGVyXCI7XG5pbXBvcnQgeyBtYWtlR3JpZCB9IGZyb20gXCIuLi9yZW5kZXIvY29sbGlkZXIvY29sbGlzaW9uc1wiO1xuaW1wb3J0IHsgbWFuaGF0dGFuRGlzdGFuY2UgfSBmcm9tIFwiLi4vdXRpbHMvbWlzY1wiO1xuaW1wb3J0IHsgUHJpb3JpdHlRdWV1ZSB9IGZyb20gXCIuLi91dGlscy9wcmlvcml0eVF1ZXVlXCI7XG5cbmNvbnN0IGVuY29kZUNvb3JkcyA9IChjb29yZGluYXRlczogY29vcmRpbmF0ZXMpID0+XG4gIGAke2Nvb3JkaW5hdGVzLnh9LSR7Y29vcmRpbmF0ZXMueX1gO1xuXG5leHBvcnQgY2xhc3MgUGF0aEZpbmRlciB7XG4gIHZpc2l0ZWQ6IFNldDxzdHJpbmc+O1xuICBzdXJyb3VuZGluZ3M6IFByaW9yaXR5UXVldWU8QVN0YXJSZWNvcmQ+O1xuICBwYXRoczogVGlsZU1hcDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhdGhzID0ge307XG4gICAgdGhpcy52aXNpdGVkID0gbmV3IFNldCgpO1xuICAgIHRoaXMuc3Vycm91bmRpbmdzID0gbmV3IFByaW9yaXR5UXVldWUoKTtcbiAgfVxuXG4gIGlzU2FtZUNvb3JkcyhjMTogY29vcmRpbmF0ZXMsIGMyOiBjb29yZGluYXRlcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjMS54ID09PSBjMi54ICYmIGMxLnkgPT09IGMyLnk7XG4gIH1cblxuICBidWlsZFBhdGgoa2V5OiBzdHJpbmcpOiBjb29yZGluYXRlc1tdIHtcbiAgICBpZiAoIXRoaXMucGF0aHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBwYXRoOiBjb29yZGluYXRlc1tdID0gW107XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLnBhdGhzW2tleV07XG4gICAgd2hpbGUgKGN1cnJlbnQucGFyZW50KSB7XG4gICAgICBwYXRoLnB1c2goY3VycmVudC5wb3NpdGlvbik7XG4gICAgICBjdXJyZW50ID0gdGhpcy5wYXRoc1tlbmNvZGVDb29yZHMoY3VycmVudC5wYXJlbnQpXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGgucmV2ZXJzZSgpO1xuICB9XG5cbiAgZmluZChcbiAgICBzb3VyY2U6IGNvb3JkaW5hdGVzLFxuICAgIGRlc3RpbmF0aW9uOiBjb29yZGluYXRlcyxcbiAgICBjb2xsaWRlcnM6IEJveENvbGxpZGVyW11cbiAgKTogY29vcmRpbmF0ZXNbXSB7XG4gICAgY29uc3Qgc3JjS2V5ID0gZW5jb2RlQ29vcmRzKHNvdXJjZSk7XG4gICAgbGV0IHBhdGg6IGNvb3JkaW5hdGVzW10gPSBbXTtcbiAgICBjb25zdCBhU3RhclJlY29yZDogQVN0YXJSZWNvcmQgPSB7XG4gICAgICBmU2NvcmU6IDAsXG4gICAgICBnU2NvcmU6IDAsXG4gICAgICBoU2NvcmU6IDAsXG4gICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICBwb3NpdGlvbjogc291cmNlLFxuICAgICAga2V5OiBzcmNLZXksXG4gICAgfTtcbiAgICB0aGlzLnZpc2l0ZWQuYWRkKHNyY0tleSk7XG4gICAgdGhpcy5wYXRoc1tzcmNLZXldID0gYVN0YXJSZWNvcmQ7XG4gICAgdGhpcy5zdXJyb3VuZGluZ3MubnEoMCwgYVN0YXJSZWNvcmQpO1xuXG4gICAgd2hpbGUgKCF0aGlzLnN1cnJvdW5kaW5ncy5lbXB0eSgpKSB7XG4gICAgICBjb25zdCBjdXJyZW50OiBBU3RhclJlY29yZCA9IHRoaXMuc3Vycm91bmRpbmdzLmRxKCk7XG4gICAgICB0aGlzLnBhdGhzW2N1cnJlbnQua2V5XSA9IGN1cnJlbnQ7XG5cbiAgICAgIGlmICh0aGlzLmlzU2FtZUNvb3JkcyhjdXJyZW50LnBvc2l0aW9uLCBkZXN0aW5hdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRQYXRoKGN1cnJlbnQua2V5KTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgZGlyZWN0aW9uIG9mIERJUkVDVElPTlMpIHtcbiAgICAgICAgY29uc3QgW2hvcml6b250YWwsIHZlcnRpY2FsXSA9IGRpcmVjdGlvbjtcbiAgICAgICAgY29uc3QgbmV3Q29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgeDogY3VycmVudC5wb3NpdGlvbi54ICsgaG9yaXpvbnRhbCxcbiAgICAgICAgICB5OiBjdXJyZW50LnBvc2l0aW9uLnkgKyB2ZXJ0aWNhbCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmV3S2V5ID0gZW5jb2RlQ29vcmRzKG5ld0Nvb3JkaW5hdGVzKTtcbiAgICAgICAgY29uc3QgaXNCb3VuZGFyeSA9IGNvbGxpZGVycy5zb21lKChjb2xsaWRlcjogQm94Q29sbGlkZXIpID0+XG4gICAgICAgICAgdGhpcy5pc1NhbWVDb29yZHMoXG4gICAgICAgICAgICBuZXdDb29yZGluYXRlcyxcbiAgICAgICAgICAgIGNvb3Jkc0Fic1Bvc2l0aW9uKGNvbGxpZGVyLnBvc2l0aW9uKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoaXNCb3VuZGFyeSB8fCB0aGlzLnZpc2l0ZWQuaGFzKG5ld0tleSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdTY29yZSA9IGN1cnJlbnQuZ1Njb3JlICsgMTtcbiAgICAgICAgY29uc3QgaFNjb3JlID0gbWFuaGF0dGFuRGlzdGFuY2UobmV3Q29vcmRpbmF0ZXMsIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgY29uc3QgZlNjb3JlID0gZ1Njb3JlICsgaFNjb3JlO1xuXG4gICAgICAgIHRoaXMudmlzaXRlZC5hZGQobmV3S2V5KTtcbiAgICAgICAgdGhpcy5zdXJyb3VuZGluZ3MubnEoZlNjb3JlLCB7XG4gICAgICAgICAgZlNjb3JlLFxuICAgICAgICAgIGdTY29yZSxcbiAgICAgICAgICBoU2NvcmUsXG4gICAgICAgICAgcGFyZW50OiBjdXJyZW50LnBvc2l0aW9uLFxuICAgICAgICAgIHBvc2l0aW9uOiBuZXdDb29yZGluYXRlcyxcbiAgICAgICAgICBrZXk6IG5ld0tleSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNT1ZFU1BFRUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBoYXNLZXkgfSBmcm9tIFwiLi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgbW90aW9uOiB7IFtrZXk6IHN0cmluZ106IHsga2V5OiBzdHJpbmcsIGF4aXM6IHN0cmluZywgdmVsb2NpdHk6IG51bWJlciwgcHJlc3NlZDogYm9vbGVhbiB9IH1cbiAgICBhdHRhY2s6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgICBkaXJlY3Rpb25CaW5kaW5nczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICAgIGF0dGFja0JpbmRpbmdzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9XG4gICAgYWN0aXZlQXR0YWNrczogYm9vbGVhbltdO1xuXG4gICAgY29uc3RydWN0b3IoeyB1cCwgZG93biwgbGVmdCwgcmlnaHQsIGF0dGFja3MgfTogRGlyZWN0aW9uS2V5QXJncykge1xuICAgICAgICB0aGlzLm1vdGlvbiA9IHtcbiAgICAgICAgICAgIHVwOiB7XG4gICAgICAgICAgICAgICAga2V5OiB1cCxcbiAgICAgICAgICAgICAgICBheGlzOiBcInlcIixcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogLU1PVkVTUEVFRCxcbiAgICAgICAgICAgICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3duOiB7XG4gICAgICAgICAgICAgICAga2V5OiBkb3duLFxuICAgICAgICAgICAgICAgIGF4aXM6IFwieVwiLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBNT1ZFU1BFRUQsXG4gICAgICAgICAgICAgICAgcHJlc3NlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgIGtleTogbGVmdCxcbiAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogLU1PVkVTUEVFRCxcbiAgICAgICAgICAgICAgICBwcmVzc2VkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICAgICAga2V5OiByaWdodCxcbiAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogTU9WRVNQRUVELFxuICAgICAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uQmluZGluZ3MgPSB7XG4gICAgICAgICAgICBbdXBdOiBcInVwXCIsXG4gICAgICAgICAgICBbZG93bl06IFwiZG93blwiLFxuICAgICAgICAgICAgW2xlZnRdOiBcImxlZnRcIixcbiAgICAgICAgICAgIFtyaWdodF06IFwicmlnaHRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXR0YWNrQmluZGluZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5hY3RpdmVBdHRhY2tzID0gYXR0YWNrcy5tYXAoXyA9PiBmYWxzZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmF0dGFja0JpbmRpbmdzW2F0dGFja3NbaV1dID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlkbGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLm1vdGlvbikuZXZlcnkoZGlyZWN0aW9uID0+ICF0aGlzLm1vdGlvbltkaXJlY3Rpb25dLnByZXNzZWQpXG4gICAgfVxuXG4gICAgZ2V0TW92ZW1lbnQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBPYmplY3Qua2V5cyh0aGlzLm1vdGlvbikuZmlsdGVyKGRpcmVjdGlvbiA9PiB0aGlzLm1vdGlvbltkaXJlY3Rpb25dLnByZXNzZWQpO1xuICAgICAgICBpZiAoZGlyZWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb25zWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldEF0dGFjaygpOiBudW1iZXIgfCBudWxsIHtcbiAgICAgICAgY29uc3QgYXR0YWNrSW5kaWNlcyA9IHRoaXMuYWN0aXZlQXR0YWNrcy5tYXAoKGF0dGFja0FjdGl2ZSwgaSkgPT4gYXR0YWNrQWN0aXZlID8gaSA6IC0xKS5maWx0ZXIoYXR0YWNrSWR4ID0+IGF0dGFja0lkeCAhPT0gLTEpO1xuICAgICAgICBpZiAoYXR0YWNrSW5kaWNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRhY2tJbmRpY2VzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByZXNzKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChoYXNLZXkodGhpcy5kaXJlY3Rpb25CaW5kaW5ncywga2V5KSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb25CaW5kaW5nc1trZXldO1xuICAgICAgICAgICAgdGhpcy5tb3Rpb25bZGlyZWN0aW9uXS5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNLZXkodGhpcy5hdHRhY2tCaW5kaW5ncywga2V5KSkge1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrID0gdGhpcy5hdHRhY2tCaW5kaW5nc1trZXldO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVBdHRhY2tzW2F0dGFja10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVsZWFzZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoaGFzS2V5KHRoaXMuZGlyZWN0aW9uQmluZGluZ3MsIGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uQmluZGluZ3Nba2V5XTtcbiAgICAgICAgICAgIHRoaXMubW90aW9uW2RpcmVjdGlvbl0ucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGhhc0tleSh0aGlzLmF0dGFja0JpbmRpbmdzLCBrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2sgPSB0aGlzLmF0dGFja0JpbmRpbmdzW2tleV07XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUF0dGFja3NbYXR0YWNrXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNQcmVzc2VkKGtleTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChoYXNLZXkodGhpcy5tb3Rpb24sIGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdGlvbltrZXldLnByZXNzZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzS2V5KHRoaXMuYWN0aXZlQXR0YWNrcywga2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQXR0YWNrc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZSB7XG4gICAgY29udHJvbGxlcjogQ29udHJvbGxlclxuICAgIGNvbnN0cnVjdG9yKHsgY29udHJvbGxlciB9OiB7IGNvbnRyb2xsZXI6IERpcmVjdGlvbktleUFyZ3MgfSkge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihjb250cm9sbGVyKVxuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBoYXNLZXkgPSA8Tz4ob2JqOiBPLCBrZXk6IFByb3BlcnR5S2V5KToga2V5IGlzIGtleW9mIE8gPT4ge1xuICAgIHJldHVybiBrZXkgaW4gb2JqXG59O1xuXG5cbmV4cG9ydCBjb25zdCBtYW5oYXR0YW5EaXN0YW5jZSA9IChhOiBjb29yZGluYXRlcywgYjogY29vcmRpbmF0ZXMpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBNYXRoLmFicyhhLnggLSBiLngpICsgTWF0aC5hYnMoYS55IC0gYi55KVxufVxuXG5leHBvcnQgY29uc3QgcmFuZG9tSW50ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cbiIsImV4cG9ydCBjbGFzcyBQcmlvcml0eVF1ZXVlPFQ+IHtcbiAgICBpdGVtczoge3ByaW9yaXR5OiBudW1iZXIsIGVsZW1lbnQ6IFR9W11cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBucShwcmlvcml0eTogbnVtYmVyLCBlbGVtZW50OiBUKTogUHJpb3JpdHlRdWV1ZTxUPiB7XG4gICAgICAgIGxldCBsZWZ0ID0gMDtcbiAgICAgICAgbGV0IHJpZ2h0ID0gdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgbWlkID0gMDtcbiAgICAgICAgbGV0IHBvcyA9IC0xO1xuXG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtwcmlvcml0eSwgZWxlbWVudH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCkge1xuICAgICAgICAgICAgbWlkID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbbWlkXS5wcmlvcml0eSA+IHByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgcmlnaHQgPSBtaWQgLSAxO1xuICAgICAgICAgICAgICAgIHBvcyA9IG1pZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IG1pZCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShwb3MsIDAsIHtwcmlvcml0eSwgZWxlbWVudH0pXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRxKCk6IFQge1xuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnNoaWZ0KCkuZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGVtcHR5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGggPT09IDA7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hdHRhY2tzL2F0dGFja0xpc3QvY2l0cmljSGVhbGluZy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hdHRhY2tzL2F0dGFja0xpc3Qvc29mdEdyYXNzLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvYXR0YWNrTGlzdC90b3hpY0RyYWluLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2F0dGFja3MvY29yZS50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb25zdGFudHMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZGF0YS9jb2xsaXNpb24udHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZXZlbnRzL2tleXMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcmVuZGVyL2FuaW1hdGlvbi50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9yZW5kZXIvY2FudmFzLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3JlbmRlci9jb2xsaWRlci9jb2xsaXNpb25zLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3JlbmRlci9jb2xsaWRlci9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zcHJpdGVzL2luZGV4LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nwcml0ZXMvcGF0aGZpbmRlci50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zdGF0ZS9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90eXBlcy9pbmRleC5kLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3V0aWxzL21pc2MudHNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy91dGlscy9wcmlvcml0eVF1ZXVlLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9