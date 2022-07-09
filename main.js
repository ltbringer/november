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
/* harmony export */   "ENEMY_CHASE_DISTANCE": () => (/* binding */ ENEMY_CHASE_DISTANCE),
/* harmony export */   "ENEMY_X_OFFSET": () => (/* binding */ ENEMY_X_OFFSET),
/* harmony export */   "ENEMY_Y_OFFSET": () => (/* binding */ ENEMY_Y_OFFSET),
/* harmony export */   "IS_COLLIDER": () => (/* binding */ IS_COLLIDER),
/* harmony export */   "MAP_HEIGHT": () => (/* binding */ MAP_HEIGHT),
/* harmony export */   "MAP_WIDTH": () => (/* binding */ MAP_WIDTH),
/* harmony export */   "MAP_X_OFFSET": () => (/* binding */ MAP_X_OFFSET),
/* harmony export */   "MAP_Y_OFFSET": () => (/* binding */ MAP_Y_OFFSET),
/* harmony export */   "PLAYER_MOVESPEED": () => (/* binding */ PLAYER_MOVESPEED),
/* harmony export */   "TILES": () => (/* binding */ TILES)
/* harmony export */ });
var MAP_WIDTH = 1920;
var MAP_HEIGHT = 1440;
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
var ENEMY_CHASE_DISTANCE = CHAR_WIDTH * 20;
var IS_COLLIDER = 955;
var PLAYER_MOVESPEED = 4;
var TILES = {
    rows: 40,
    cols: 30,
};


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
var configureKeyPress = function (keys) {
    window.addEventListener("keydown", function (e) {
        keys.press(e.key);
    });
    window.addEventListener("keyup", function (e) {
        keys.release(e.key);
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
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _img_november_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/november.png */ "./src/img/november.png");
/* harmony import */ var _img_november_foreground_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/november_foreground.png */ "./src/img/november_foreground.png");
/* harmony import */ var _img_main_char_sprite_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/main_char_sprite.png */ "./src/img/main_char_sprite.png");
/* harmony import */ var _img_mushroom_boss_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/mushroom_boss.png */ "./src/img/mushroom_boss.png");











var main = function () {
    var playerImg = new Image();
    var bgImg = new Image();
    var fgImg = new Image();
    var enemyImg = new Image();
    bgImg.src = _img_november_png__WEBPACK_IMPORTED_MODULE_7__["default"];
    playerImg.src = _img_main_char_sprite_png__WEBPACK_IMPORTED_MODULE_9__["default"];
    fgImg.src = _img_november_foreground_png__WEBPACK_IMPORTED_MODULE_8__["default"];
    enemyImg.src = _img_mushroom_boss_png__WEBPACK_IMPORTED_MODULE_10__["default"];
    var playerFrames = 16;
    var bg = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Sprite({
        position: {
            x: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_X_OFFSET,
            y: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_Y_OFFSET
        },
        image: bgImg,
        width: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_WIDTH,
        height: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_HEIGHT,
        directions: {
            down: 0,
            up: 0,
            left: 0,
            right: 0
        }
    });
    var fg = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Sprite({
        position: {
            x: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_X_OFFSET,
            y: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_Y_OFFSET
        },
        image: fgImg,
        width: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_WIDTH,
        height: _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_HEIGHT,
        directions: {
            down: 0,
            up: 0,
            left: 0,
            right: 0
        }
    });
    var player = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Playable({
        position: {
            x: _constants__WEBPACK_IMPORTED_MODULE_4__.CHAR_X_OFFSET,
            y: _constants__WEBPACK_IMPORTED_MODULE_4__.CHAR_Y_OFFSET
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
            right: 12
        }
    }, { hp: 100, mana: 100, muscle: 30, magik: 30, armour: 30, immunity: 30 });
    var enemy = new _sprites__WEBPACK_IMPORTED_MODULE_0__.Playable({
        position: {
            x: _constants__WEBPACK_IMPORTED_MODULE_4__.ENEMY_X_OFFSET,
            y: _constants__WEBPACK_IMPORTED_MODULE_4__.ENEMY_Y_OFFSET
        },
        image: enemyImg,
        width: enemyImg.width,
        height: enemyImg.height,
        zoom: 4,
        directions: {
            down: 0,
            up: 0,
            left: 0,
            right: 0
        }
    }, { hp: 80, mana: 100, muscle: 10, magik: 30, armour: 10, immunity: 30 });
    var state = new _state__WEBPACK_IMPORTED_MODULE_5__.State({ keys: { up: "w", down: "s", left: "a", right: "d" } });
    var canvas = (0,_render_canvas__WEBPACK_IMPORTED_MODULE_1__.mapSetup)(_constants__WEBPACK_IMPORTED_MODULE_4__.MAP_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_4__.MAP_HEIGHT);
    (0,_events_keys__WEBPACK_IMPORTED_MODULE_2__.configureKeyPress)(state.keys);
    (0,_render_animation__WEBPACK_IMPORTED_MODULE_3__.animationBuilder)({ bg: bg, player: player, state: state, canvas: canvas, fg: fg, enemy: enemy })();
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
    var ctx = _a.ctx, state = _a.state, bg = _a.bg, player = _a.player, enemy = _a.enemy, fg = _a.fg, colliders = _a.colliders;
    var keys = state.keys;
    var futureKeyState = { x: 0, y: 0 };
    if (keys.isPressed(keys.up)) {
        futureKeyState.y = _constants__WEBPACK_IMPORTED_MODULE_1__.PLAYER_MOVESPEED;
    }
    else if (keys.isPressed(keys.left)) {
        futureKeyState.x = _constants__WEBPACK_IMPORTED_MODULE_1__.PLAYER_MOVESPEED;
    }
    else if (keys.isPressed(keys.down)) {
        futureKeyState.y = -_constants__WEBPACK_IMPORTED_MODULE_1__.PLAYER_MOVESPEED;
    }
    else if (keys.isPressed(keys.right)) {
        futureKeyState.x = -_constants__WEBPACK_IMPORTED_MODULE_1__.PLAYER_MOVESPEED;
    }
    var playerCollisions = colliders.some(function (collider) { return (0,_collider__WEBPACK_IMPORTED_MODULE_2__.checkCollision)(player, collider, futureKeyState); });
    var enemyCollisions = colliders.some(function (collider) { return (0,_collider__WEBPACK_IMPORTED_MODULE_2__.checkCollision)(enemy, collider, futureKeyState); });
    var moveMobile = function (mobile) {
        if (keys.isPressed(keys.up) && !playerCollisions) {
            mobile.position.y += _constants__WEBPACK_IMPORTED_MODULE_1__.PLAYER_MOVESPEED;
            player.animate("up");
        }
        else if (keys.isPressed(keys.left) && !playerCollisions) {
            mobile.position.x += _constants__WEBPACK_IMPORTED_MODULE_1__.PLAYER_MOVESPEED;
            player.animate("left");
        }
        else if (keys.isPressed(keys.down) && !playerCollisions) {
            mobile.position.y -= _constants__WEBPACK_IMPORTED_MODULE_1__.PLAYER_MOVESPEED;
            player.animate("down");
        }
        else if (keys.isPressed(keys.right) && !playerCollisions) {
            mobile.position.x -= _constants__WEBPACK_IMPORTED_MODULE_1__.PLAYER_MOVESPEED;
            player.animate("right");
        }
    };
    var enemyDistance = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_3__.manhattanDistance)(player.position, enemy.position);
    if (enemyDistance <= _constants__WEBPACK_IMPORTED_MODULE_1__.ENEMY_CHASE_DISTANCE && !enemyCollisions) {
        __spreadArray(__spreadArray([], colliders, true), [bg, fg], false).forEach(moveMobile);
        enemy.follow(player.position, enemyCollisions);
    }
    else if ((0,_collider__WEBPACK_IMPORTED_MODULE_2__.checkCollision)(enemy, player, { x: 0, y: 0 })) {
        enemy.attack(player, true).drawAttackEffects(ctx, player);
        player.attack(enemy, keys.isPressed("y"));
    }
    else {
        __spreadArray(__spreadArray([], colliders, true), [bg, fg, enemy], false).forEach(moveMobile);
    }
};
var animationBuilder = function (_a) {
    var bg = _a.bg, player = _a.player, state = _a.state, canvas = _a.canvas, fg = _a.fg, enemy = _a.enemy;
    var ctx = (0,_canvas__WEBPACK_IMPORTED_MODULE_0__.getCtx)(canvas);
    var sprites = [bg, player, fg, enemy];
    sprites.forEach(function (sprite) { return sprite.loadImage(ctx); });
    var colliders = (0,_collider__WEBPACK_IMPORTED_MODULE_2__.getColliders)();
    var animate = function () {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        bg.draw(ctx);
        player.draw(ctx);
        enemy.draw(ctx);
        fg.draw(ctx);
        window.requestAnimationFrame(animate);
        motionControl({ ctx: ctx, state: state, bg: bg, player: player, enemy: enemy, fg: fg, colliders: colliders });
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
/* harmony export */   "makeCollisionGrid": () => (/* binding */ makeCollisionGrid)
/* harmony export */ });
/* harmony import */ var _data_collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/collision */ "./src/data/collision.ts");

var makeCollisionGrid = function (chunkSize) {
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
        this.isCollider = true;
    }
    BoxCollider.prototype.draw = function (ctx) {
        ctx.strokeStyle = "rgba(100, 0, 0, 0.5)";
        ctx.strokeRect(this.position.x, this.position.y, BoxCollider.width, BoxCollider.height);
        ctx.font = "10px Arial";
        ctx.fillText("(".concat(this.position.x, ", ").concat(this.position.y, ")"), this.position.x + 10, this.position.y + 20);
        ctx.fillStyle = "black";
        ctx.fillRect(this.position.x, this.position.y, 5, 5);
    };
    BoxCollider.width = 64;
    BoxCollider.height = 64;
    return BoxCollider;
}());

var getColliders = function () {
    var colliders = [];
    var collisionGrid = (0,_collisions__WEBPACK_IMPORTED_MODULE_0__.makeCollisionGrid)(_constants__WEBPACK_IMPORTED_MODULE_1__.TILES.rows);
    collisionGrid.forEach(function (row, i) {
        row.forEach(function (col, j) {
            if (col === _constants__WEBPACK_IMPORTED_MODULE_1__.IS_COLLIDER) {
                colliders.push(new BoxCollider({
                    position: {
                        x: j * BoxCollider.width + _constants__WEBPACK_IMPORTED_MODULE_1__.MAP_X_OFFSET,
                        y: i * BoxCollider.height + _constants__WEBPACK_IMPORTED_MODULE_1__.MAP_Y_OFFSET
                    }
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

/***/ "./src/render/collider/types.ts":
/*!**************************************!*\
  !*** ./src/render/collider/types.ts ***!
  \**************************************/
/***/ (() => {



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
        this.refreshRate = 5e-4;
        this.framesPerDirection = this.frames / Object.keys(this.directions).length;
    }
    Sprite.prototype.draw = function (ctx) {
        ctx.drawImage(this.image, this.currentFrame, 0, this.image.width / this.frames, this.image.height, this.position.x, this.position.y, this.image.width / this.frames * this.zoom, this.image.height * this.zoom);
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
        var hp = _a.hp, mana = _a.mana, muscle = _a.muscle, magik = _a.magik, armour = _a.armour, immunity = _a.immunity;
        var _this = _super.call(this, spriteArgs) || this;
        _this.hp = hp;
        _this.mana = mana;
        _this.muscle = muscle;
        _this.magik = magik;
        _this.armour = armour;
        _this.immunity = immunity;
        return _this;
    }
    Playable.prototype.animate = function (direction) {
        if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_0__.hasKey)(this.directions, direction)) {
            var firstFrame = this.directions[direction];
            var lastFrame = this.directions[direction] + this.framesPerDirection;
            this.face = (this.face >= firstFrame && this.face < lastFrame)
                ? this.face + this.refreshRate
                : firstFrame;
        }
        this.currentFrame = Math.floor(this.face) * this.frames;
        return this;
    };
    Playable.prototype.follow = function (position, collisions) {
        var newX = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_0__.randomInt)(-1, 1);
        var newY = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_0__.randomInt)(-1, 1);
        if (!collisions) {
            this.position.x += newX;
            this.position.y += newY;
        }
        return this;
    };
    Playable.prototype.attack = function (target, condition) {
        if (condition && this.hp > 0 && target.hp > 0) {
            var damage = this.muscle / target.armour;
            target.hp = (target.hp - damage > 0) ? target.hp - damage : 0;
        }
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
        var hpBar = this.hp / 100 * BarMaxWidth;
        var x = this.position.x;
        var y = this.position.y - 20 + _constants__WEBPACK_IMPORTED_MODULE_1__.BAR_OFFSET;
        ctx.fillStyle = this.hpBarColor();
        ctx.fillRect(x, y, hpBar, 5);
        return this;
    };
    Playable.prototype.drawMana = function (ctx) {
        var BarMaxWidth = this.width;
        var currentMana = this.mana / 100 * BarMaxWidth;
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
    Playable.prototype.drawAttackEffects = function (ctx, target) {
        if (target.hp == 0 || this.hp == 0) {
            return this;
        }
        var r = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_0__.randomInt)(this.width / 16, this.width);
        ctx.fillStyle = "rgba(180, 112, 224, 0.5)";
        ctx.beginPath();
        ctx.arc(this.position.x + (this.width / 2), this.position.y + (this.height / 2), r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        return this;
    };
    Playable.prototype.draw = function (ctx) {
        if (this.hp == 0) {
            return this;
        }
        this.drawMeter(ctx)
            .drawHP(ctx)
            .drawMana(ctx);
        ctx.drawImage(this.image, this.currentFrame, 0, this.image.width / this.frames, this.image.height, this.position.x, this.position.y, this.image.width / this.frames * this.zoom, this.image.height * this.zoom);
        return this;
    };
    return Playable;
}(Sprite));



/***/ }),

/***/ "./src/sprites/types.ts":
/*!******************************!*\
  !*** ./src/sprites/types.ts ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/state/index.ts":
/*!****************************!*\
  !*** ./src/state/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keys": () => (/* binding */ Keys),
/* harmony export */   "State": () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

var Keys = /** @class */ (function () {
    function Keys(_a) {
        var _b, _c, _d;
        var up = _a.up, down = _a.down, left = _a.left, right = _a.right;
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
        this.pressed = (_b = {},
            _b[this.up] = false,
            _b[this.down] = false,
            _b[this.left] = false,
            _b[this.right] = false,
            _b);
        this.motion = (_c = {},
            _c[this.up] = ["y", _constants__WEBPACK_IMPORTED_MODULE_0__.PLAYER_MOVESPEED],
            _c[this.down] = ["y", -_constants__WEBPACK_IMPORTED_MODULE_0__.PLAYER_MOVESPEED],
            _c[this.left] = ["x", _constants__WEBPACK_IMPORTED_MODULE_0__.PLAYER_MOVESPEED],
            _c[this.right] = ["x", -_constants__WEBPACK_IMPORTED_MODULE_0__.PLAYER_MOVESPEED],
            _c);
        this.lastKey = null;
        this.keysToDirection = (_d = {},
            _d[this.up] = "up",
            _d[this.down] = "down",
            _d[this.left] = "left",
            _d[this.right] = "right",
            _d);
    }
    Keys.prototype.idle = function () {
        var _this = this;
        return Object.keys(this.pressed).every(function (key) { return !_this.pressed[key]; });
    };
    Keys.prototype.getLastDirection = function () {
        if (this.lastKey) {
            return this.keysToDirection[this.lastKey];
        }
    };
    Keys.prototype.press = function (key) {
        this.pressed[key] = true;
        if (key in Object.values(this.keysToDirection)) {
            this.lastKey = key;
        }
    };
    Keys.prototype.release = function (key) {
        this.pressed[key] = false;
    };
    Keys.prototype.isPressed = function (direction) {
        return this.pressed[direction];
    };
    return Keys;
}());

var State = /** @class */ (function () {
    function State(_a) {
        var keys = _a.keys;
        this.keys = new Keys(keys);
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
/******/ 	__webpack_require__("./src/constants.ts");
/******/ 	__webpack_require__("./src/data/collision.ts");
/******/ 	__webpack_require__("./src/events/keys.ts");
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	__webpack_require__("./src/render/animation.ts");
/******/ 	__webpack_require__("./src/render/canvas.ts");
/******/ 	__webpack_require__("./src/render/collider/collisions.ts");
/******/ 	__webpack_require__("./src/render/collider/index.ts");
/******/ 	__webpack_require__("./src/render/collider/types.ts");
/******/ 	__webpack_require__("./src/sprites/index.ts");
/******/ 	__webpack_require__("./src/sprites/types.ts");
/******/ 	__webpack_require__("./src/state/index.ts");
/******/ 	__webpack_require__("./src/types/index.d.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/utils/misc.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzlLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDMUgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM5SCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzVJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDcEosQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNwSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzVKLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDbEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNoSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3hJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDbEosQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUN4SixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ2xJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDeEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUMxSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ2xJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDcEosQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNwSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDbEksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN4SyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUN4SDs7Ozs7Ozs7Ozs7Ozs7OztBQzdCTSxJQUFNLGlCQUFpQixHQUFHLFVBQUMsSUFBVTtJQUN4QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBZ0I7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQWdCO1FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y0QztBQUNGO0FBQ087QUFDSTtBQUN3RjtBQUM5RztBQUVQO0FBQ3lCO0FBQ1c7QUFDUDtBQUNKO0FBR2xELElBQU0sSUFBSSxHQUFHO0lBQ1QsSUFBTSxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUM5QixJQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzFCLElBQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDMUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUU3QixLQUFLLENBQUMsR0FBRyxHQUFHLHlEQUFnQixDQUFDO0lBQzdCLFNBQVMsQ0FBQyxHQUFHLEdBQUcsaUVBQVksQ0FBQztJQUM3QixLQUFLLENBQUMsR0FBRyxHQUFHLG9FQUFnQixDQUFDO0lBQzdCLFFBQVEsQ0FBQyxHQUFHLEdBQUcsK0RBQVcsQ0FBQztJQUUzQixJQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7SUFFeEIsSUFBTSxFQUFFLEdBQUcsSUFBSSw0Q0FBTSxDQUFDO1FBQ2xCLFFBQVEsRUFBRTtZQUNOLENBQUMsRUFBRSxvREFBWTtZQUNmLENBQUMsRUFBRSxvREFBWTtTQUNsQjtRQUNELEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLGlEQUFTO1FBQ2hCLE1BQU0sRUFBRSxrREFBVTtRQUNsQixVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsQ0FBQztZQUNQLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLLEVBQUUsQ0FBQztTQUNYO0tBQ0osQ0FBQyxDQUFDO0lBQ0gsSUFBTSxFQUFFLEdBQUcsSUFBSSw0Q0FBTSxDQUFDO1FBQ2xCLFFBQVEsRUFBRTtZQUNOLENBQUMsRUFBRSxvREFBWTtZQUNmLENBQUMsRUFBRSxvREFBWTtTQUNsQjtRQUNELEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLGlEQUFTO1FBQ2hCLE1BQU0sRUFBRSxrREFBVTtRQUNsQixVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsQ0FBQztZQUNQLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLLEVBQUUsQ0FBQztTQUNYO0tBQ0osQ0FBQztJQUNGLElBQU0sTUFBTSxHQUFHLElBQUksOENBQVEsQ0FBQztRQUN4QixRQUFRLEVBQUU7WUFDTixDQUFDLEVBQUUscURBQWE7WUFDaEIsQ0FBQyxFQUFFLHFEQUFhO1NBQ25CO1FBQ0QsS0FBSyxFQUFFLFNBQVM7UUFDaEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsWUFBWTtRQUNyQyxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDeEIsSUFBSSxFQUFFLENBQUM7UUFDUCxNQUFNLEVBQUUsWUFBWTtRQUNwQixVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsQ0FBQztZQUNQLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLLEVBQUUsRUFBRTtTQUNaO0tBQ0osRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1RSxJQUFNLEtBQUssR0FBRyxJQUFJLDhDQUFRLENBQUM7UUFDdkIsUUFBUSxFQUFFO1lBQ04sQ0FBQyxFQUFFLHNEQUFjO1lBQ2pCLENBQUMsRUFBRSxzREFBYztTQUNwQjtRQUNELEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO1FBQ3JCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtRQUN2QixJQUFJLEVBQUUsQ0FBQztRQUNQLFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxDQUFDO1lBQ1AsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsQ0FBQztZQUNQLEtBQUssRUFBRSxDQUFDO1NBQ1g7S0FDSixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRTNFLElBQU0sS0FBSyxHQUFHLElBQUkseUNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDaEYsSUFBTSxNQUFNLEdBQUcsd0RBQVEsQ0FBQyxpREFBUyxFQUFFLGtEQUFVLENBQUMsQ0FBQztJQUMvQywrREFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsbUVBQWdCLENBQUMsRUFBRSxFQUFFLE1BQUUsTUFBTSxVQUFFLEtBQUssU0FBRSxNQUFNLFVBQUUsRUFBRSxNQUFFLEtBQUssU0FBRSxDQUFDLEVBQUUsQ0FBQztBQUNqRSxDQUFDO0FBR0QsSUFBSSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEcyQjtBQUNvQztBQUNaO0FBSVI7QUFLbEQsSUFBTSxhQUFhLEdBQUcsVUFBQyxFQUFtRTtRQUFqRSxHQUFHLFdBQUUsS0FBSyxhQUFFLEVBQUUsVUFBRSxNQUFNLGNBQUUsS0FBSyxhQUFFLEVBQUUsVUFBRSxTQUFTO0lBQ3pELFFBQUksR0FBSyxLQUFLLEtBQVYsQ0FBVztJQUN2QixJQUFJLGNBQWMsR0FBZ0IsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7SUFDOUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN6QixjQUFjLENBQUMsQ0FBQyxHQUFHLHdEQUFnQixDQUFDO0tBQ3ZDO1NBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNsQyxjQUFjLENBQUMsQ0FBQyxHQUFHLHdEQUFnQixDQUFDO0tBQ3ZDO1NBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNsQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsd0RBQWdCLENBQUM7S0FDeEM7U0FBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ25DLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyx3REFBZ0IsQ0FBQztLQUN4QztJQUVELElBQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQXFCLElBQUssZ0VBQWMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7SUFDckgsSUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQXFCLElBQUssZ0VBQWMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxFQUEvQyxDQUErQyxDQUFDLENBQUM7SUFFbkgsSUFBTSxVQUFVLEdBQUcsVUFBQyxNQUE0QjtRQUM1QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDOUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksd0RBQWdCO1lBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksd0RBQWdCO1lBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUI7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksd0RBQWdCO1lBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUI7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDeEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksd0RBQWdCO1lBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQsSUFBTSxhQUFhLEdBQUcsOERBQWlCLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekUsSUFBSSxhQUFhLElBQUksNERBQW9CLElBQUksQ0FBQyxlQUFlLEVBQUU7UUFDM0QsZ0NBQUksU0FBUyxVQUFFLEVBQUUsRUFBRSxFQUFFLFVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxNQUFNLENB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QSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9pbWcvbWFpbl9jaGFyX3Nwcml0ZS5wbmciLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9pbWcvbXVzaHJvb21fYm9zcy5wbmciLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9pbWcvbm92ZW1iZXIucG5nIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvaW1nL25vdmVtYmVyX2ZvcmVncm91bmQucG5nIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvdHlwZXMvaW5kZXguZC50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvZGF0YS9jb2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9ldmVudHMva2V5cy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL25vdmVtYmVyanMvLi9zcmMvcmVuZGVyL2FuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3JlbmRlci9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9yZW5kZXIvY29sbGlkZXIvY29sbGlzaW9ucy50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3JlbmRlci9jb2xsaWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3Nwcml0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy8uL3NyYy9zdGF0ZS9pbmRleC50cyIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzLy4vc3JjL3V0aWxzL21pc2MudHMiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ub3ZlbWJlcmpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbm92ZW1iZXJqcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL25vdmVtYmVyanMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2ZlNzlhNjdlYjM5NDAyMDNkZjk5MmIyODU1NTJjM2UucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ1ZjhkZGYxOTQwZmYyNWFmYjg5ZjI5MjNmM2EwODFlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1MTY3OTI5OTU1NWVmNjkxMzkwMDFiNTk2NzUyNDFlMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2E3ZTU3MzFmNjlhODQ5MThjZjg2MzcwNjQ2MzY2ZmYucG5nXCI7IiwiIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBNQVBfV0lEVEg6IG51bWJlciA9IDE5MjA7XG5leHBvcnQgY29uc3QgTUFQX0hFSUdIVDogbnVtYmVyID0gMTQ0MDtcbmV4cG9ydCBjb25zdCBDSEFSX1dJRFRIOiBudW1iZXIgPSAxNjtcbmV4cG9ydCBjb25zdCBDSEFSX0hFSUdIVDogbnVtYmVyID0gMTY7XG5leHBvcnQgY29uc3QgTUFQX1hfT0ZGU0VUOiBudW1iZXIgPSAtNjAwO1xuZXhwb3J0IGNvbnN0IE1BUF9ZX09GRlNFVDogbnVtYmVyID0gLTkwMDtcblxuZXhwb3J0IGNvbnN0IENIQVJfWF9PRkZTRVQ6IG51bWJlciA9IDYwMDtcbmV4cG9ydCBjb25zdCBDSEFSX1lfT0ZGU0VUOiBudW1iZXIgPSA2MDA7XG5leHBvcnQgY29uc3QgQkFSX09GRlNFVDogbnVtYmVyID0gMjtcbmV4cG9ydCBjb25zdCBCQVJfSEVJR0hUOiBudW1iZXIgPSAxMDtcblxuZXhwb3J0IGNvbnN0IEVORU1ZX1hfT0ZGU0VUOiBudW1iZXIgPSAyNjU7XG5leHBvcnQgY29uc3QgRU5FTVlfWV9PRkZTRVQ6IG51bWJlciA9IDIwO1xuZXhwb3J0IGNvbnN0IEVORU1ZX0NIQVNFX0RJU1RBTkNFOiBudW1iZXIgPSBDSEFSX1dJRFRIICogMjA7XG5cbmV4cG9ydCBjb25zdCBJU19DT0xMSURFUjogbnVtYmVyID0gOTU1O1xuZXhwb3J0IGNvbnN0IFBMQVlFUl9NT1ZFU1BFRUQ6IG51bWJlciA9IDQ7XG5leHBvcnQgY29uc3QgVElMRVM6IHsgcm93czogbnVtYmVyLCBjb2xzOiBudW1iZXIgfSA9IHtcbiAgICByb3dzOiA0MCxcbiAgICBjb2xzOiAzMCxcbn1cbiIsImV4cG9ydCBjb25zdCBjb2xsaXNpb25zOiBudW1iZXJbXSA9IFtcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCA5NTUsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCAwLCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCA5NTUsIDAsIDk1NSwgMCwgMCwgOTU1LFxuICAgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgOTU1LCAwLCA5NTUsIDAsIDAsIDk1NSxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCwgOTU1LCA5NTUsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDk1NSwgOTU1LCAwLCAwLCA5NTUsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDk1NSwgMCwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDk1NSwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDk1NSwgMCwgOTU1LCAwLCA5NTUsIDk1NSwgMCwgMCwgMCwgOTU1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCA5NTUsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDk1NSwgOTU1LCA5NTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBcbl0iLCJpbXBvcnQgeyBLZXlzIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmVLZXlQcmVzcyA9IChrZXlzOiBLZXlzKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGtleXMucHJlc3MoZS5rZXkpO1xuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGtleXMucmVsZWFzZShlLmtleSk7XG4gICAgfSlcbn1cbiIsImltcG9ydCB7IFNwcml0ZSwgUGxheWFibGUgfSBmcm9tIFwiLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyBtYXBTZXR1cCB9IGZyb20gXCIuL3JlbmRlci9jYW52YXNcIjtcbmltcG9ydCB7IGNvbmZpZ3VyZUtleVByZXNzIH0gZnJvbSBcIi4vZXZlbnRzL2tleXNcIjtcbmltcG9ydCB7IGFuaW1hdGlvbkJ1aWxkZXIgfSBmcm9tIFwiLi9yZW5kZXIvYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBNQVBfV0lEVEgsIE1BUF9IRUlHSFQsIE1BUF9YX09GRlNFVCwgTUFQX1lfT0ZGU0VULCBDSEFSX1hfT0ZGU0VULCBDSEFSX1lfT0ZGU0VULCBFTkVNWV9YX09GRlNFVCwgRU5FTVlfWV9PRkZTRVQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcblxuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgQmFja2dyb3VuZFNwcml0ZSBmcm9tIFwiLi9pbWcvbm92ZW1iZXIucG5nXCI7XG5pbXBvcnQgRm9yZWdyb3VuZFNwcml0ZSBmcm9tIFwiLi9pbWcvbm92ZW1iZXJfZm9yZWdyb3VuZC5wbmdcIjtcbmltcG9ydCBQbGF5ZXJTcHJpdGUgZnJvbSBcIi4vaW1nL21haW5fY2hhcl9zcHJpdGUucG5nXCI7XG5pbXBvcnQgRW5lbXlTcHJpdGUgZnJvbSBcIi4vaW1nL211c2hyb29tX2Jvc3MucG5nXCI7XG5cblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBiZ0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGZnSW1nID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgZW5lbXlJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGJnSW1nLnNyYyA9IEJhY2tncm91bmRTcHJpdGU7XG4gICAgcGxheWVySW1nLnNyYyA9IFBsYXllclNwcml0ZTtcbiAgICBmZ0ltZy5zcmMgPSBGb3JlZ3JvdW5kU3ByaXRlO1xuICAgIGVuZW15SW1nLnNyYyA9IEVuZW15U3ByaXRlO1xuXG4gICAgY29uc3QgcGxheWVyRnJhbWVzID0gMTY7XG5cbiAgICBjb25zdCBiZyA9IG5ldyBTcHJpdGUoe1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgeDogTUFQX1hfT0ZGU0VULFxuICAgICAgICAgICAgeTogTUFQX1lfT0ZGU0VUXG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlOiBiZ0ltZyxcbiAgICAgICAgd2lkdGg6IE1BUF9XSURUSCxcbiAgICAgICAgaGVpZ2h0OiBNQVBfSEVJR0hULFxuICAgICAgICBkaXJlY3Rpb25zOiB7XG4gICAgICAgICAgICBkb3duOiAwLFxuICAgICAgICAgICAgdXA6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGZnID0gbmV3IFNwcml0ZSh7XG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICB4OiBNQVBfWF9PRkZTRVQsXG4gICAgICAgICAgICB5OiBNQVBfWV9PRkZTRVRcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2U6IGZnSW1nLFxuICAgICAgICB3aWR0aDogTUFQX1dJRFRILFxuICAgICAgICBoZWlnaHQ6IE1BUF9IRUlHSFQsXG4gICAgICAgIGRpcmVjdGlvbnM6IHtcbiAgICAgICAgICAgIGRvd246IDAsXG4gICAgICAgICAgICB1cDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICByaWdodDogMFxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWFibGUoe1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgeDogQ0hBUl9YX09GRlNFVCxcbiAgICAgICAgICAgIHk6IENIQVJfWV9PRkZTRVRcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2U6IHBsYXllckltZyxcbiAgICAgICAgd2lkdGg6IHBsYXllckltZy53aWR0aCAvIHBsYXllckZyYW1lcyxcbiAgICAgICAgaGVpZ2h0OiBwbGF5ZXJJbWcuaGVpZ2h0LFxuICAgICAgICB6b29tOiA0LFxuICAgICAgICBmcmFtZXM6IHBsYXllckZyYW1lcyxcbiAgICAgICAgZGlyZWN0aW9uczoge1xuICAgICAgICAgICAgZG93bjogMCxcbiAgICAgICAgICAgIHVwOiA0LFxuICAgICAgICAgICAgbGVmdDogOCxcbiAgICAgICAgICAgIHJpZ2h0OiAxMlxuICAgICAgICB9XG4gICAgfSwgeyBocDogMTAwLCBtYW5hOiAxMDAsIG11c2NsZTogMzAsIG1hZ2lrOiAzMCwgYXJtb3VyOiAzMCwgaW1tdW5pdHk6IDMwIH0pO1xuICAgIGNvbnN0IGVuZW15ID0gbmV3IFBsYXlhYmxlKHtcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIHg6IEVORU1ZX1hfT0ZGU0VULFxuICAgICAgICAgICAgeTogRU5FTVlfWV9PRkZTRVRcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2U6IGVuZW15SW1nLFxuICAgICAgICB3aWR0aDogZW5lbXlJbWcud2lkdGgsXG4gICAgICAgIGhlaWdodDogZW5lbXlJbWcuaGVpZ2h0LFxuICAgICAgICB6b29tOiA0LFxuICAgICAgICBkaXJlY3Rpb25zOiB7XG4gICAgICAgICAgICBkb3duOiAwLFxuICAgICAgICAgICAgdXA6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgfVxuICAgIH0sIHsgaHA6IDgwLCBtYW5hOiAxMDAsIG11c2NsZTogMTAsIG1hZ2lrOiAzMCwgYXJtb3VyOiAxMCwgaW1tdW5pdHk6IDMwIH0pO1xuXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoeyBrZXlzOiB7IHVwOiBcIndcIiwgZG93bjogXCJzXCIsIGxlZnQ6IFwiYVwiLCByaWdodDogXCJkXCIgfX0pO1xuICAgIGNvbnN0IGNhbnZhcyA9IG1hcFNldHVwKE1BUF9XSURUSCwgTUFQX0hFSUdIVCk7XG4gICAgY29uZmlndXJlS2V5UHJlc3Moc3RhdGUua2V5cyk7XG4gICAgYW5pbWF0aW9uQnVpbGRlcih7IGJnLCBwbGF5ZXIsIHN0YXRlLCBjYW52YXMsIGZnLCBlbmVteSB9KSgpO1xufVxuXG5cbm1haW4oKTsiLCJpbXBvcnQgeyBnZXRDdHggfSBmcm9tIFwiLi9jYW52YXNcIjtcbmltcG9ydCB7IEVORU1ZX0NIQVNFX0RJU1RBTkNFLCBQTEFZRVJfTU9WRVNQRUVEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZ2V0Q29sbGlkZXJzLCBjaGVja0NvbGxpc2lvbiB9IGZyb20gXCIuL2NvbGxpZGVyXCI7XG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCIuL2NvbGxpZGVyXCI7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuaW1wb3J0IHsgU3ByaXRlLCBQbGF5YWJsZSB9IGZyb20gXCIuLi9zcHJpdGVzXCI7XG5pbXBvcnQgeyBtYW5oYXR0YW5EaXN0YW5jZSB9IGZyb20gXCIuLi91dGlscy9taXNjXCI7XG5cbnR5cGUgTW90aW9uQ29udHJvbEFyZ3MgPSB7IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzdGF0ZTogU3RhdGUsIGJnOiBTcHJpdGUsIHBsYXllcjogUGxheWFibGUsIGVuZW15OiBQbGF5YWJsZSwgZmc6IFNwcml0ZSwgY29sbGlkZXJzOiBCb3hDb2xsaWRlcltdfVxudHlwZSBBbmltYXRpb25CdWlsZGVyQXJncyA9IHsgYmc6IFNwcml0ZSwgcGxheWVyOiBQbGF5YWJsZSwgZW5lbXk6IFBsYXlhYmxlLCBmZzogU3ByaXRlLCBzdGF0ZTogU3RhdGUsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnR9XG5cbmNvbnN0IG1vdGlvbkNvbnRyb2wgPSAoeyBjdHgsIHN0YXRlLCBiZywgcGxheWVyLCBlbmVteSwgZmcsIGNvbGxpZGVycyB9OiBNb3Rpb25Db250cm9sQXJncyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsga2V5cyB9ID0gc3RhdGU7XG4gICAgbGV0IGZ1dHVyZUtleVN0YXRlOiBjb29yZGluYXRlcyA9IHt4OiAwLCB5OiAwfVxuICAgIGlmIChrZXlzLmlzUHJlc3NlZChrZXlzLnVwKSkge1xuICAgICAgICBmdXR1cmVLZXlTdGF0ZS55ID0gUExBWUVSX01PVkVTUEVFRDtcbiAgICB9IGVsc2UgaWYgKGtleXMuaXNQcmVzc2VkKGtleXMubGVmdCkpIHtcbiAgICAgICAgZnV0dXJlS2V5U3RhdGUueCA9IFBMQVlFUl9NT1ZFU1BFRUQ7XG4gICAgfSBlbHNlIGlmIChrZXlzLmlzUHJlc3NlZChrZXlzLmRvd24pKSB7XG4gICAgICAgIGZ1dHVyZUtleVN0YXRlLnkgPSAtUExBWUVSX01PVkVTUEVFRDtcbiAgICB9IGVsc2UgaWYgKGtleXMuaXNQcmVzc2VkKGtleXMucmlnaHQpKSB7XG4gICAgICAgIGZ1dHVyZUtleVN0YXRlLnggPSAtUExBWUVSX01PVkVTUEVFRDtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ZXJDb2xsaXNpb25zID0gY29sbGlkZXJzLnNvbWUoKGNvbGxpZGVyOiBCb3hDb2xsaWRlcikgPT4gY2hlY2tDb2xsaXNpb24ocGxheWVyLCBjb2xsaWRlciwgZnV0dXJlS2V5U3RhdGUpKTtcbiAgICBjb25zdCBlbmVteUNvbGxpc2lvbnMgPSBjb2xsaWRlcnMuc29tZSgoY29sbGlkZXI6IEJveENvbGxpZGVyKSA9PiBjaGVja0NvbGxpc2lvbihlbmVteSwgY29sbGlkZXIsIGZ1dHVyZUtleVN0YXRlKSk7XG5cbiAgICBjb25zdCBtb3ZlTW9iaWxlID0gKG1vYmlsZTogQm94Q29sbGlkZXIgfCBTcHJpdGUpID0+IHtcbiAgICAgICAgaWYgKGtleXMuaXNQcmVzc2VkKGtleXMudXApICYmICFwbGF5ZXJDb2xsaXNpb25zKSB7XG4gICAgICAgICAgICBtb2JpbGUucG9zaXRpb24ueSArPSBQTEFZRVJfTU9WRVNQRUVEXG4gICAgICAgICAgICBwbGF5ZXIuYW5pbWF0ZShcInVwXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleXMuaXNQcmVzc2VkKGtleXMubGVmdCkgJiYgIXBsYXllckNvbGxpc2lvbnMpIHtcbiAgICAgICAgICAgIG1vYmlsZS5wb3NpdGlvbi54ICs9IFBMQVlFUl9NT1ZFU1BFRURcbiAgICAgICAgICAgIHBsYXllci5hbmltYXRlKFwibGVmdFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXlzLmlzUHJlc3NlZChrZXlzLmRvd24pICYmICFwbGF5ZXJDb2xsaXNpb25zKSB7XG4gICAgICAgICAgICBtb2JpbGUucG9zaXRpb24ueSAtPSBQTEFZRVJfTU9WRVNQRUVEXG4gICAgICAgICAgICBwbGF5ZXIuYW5pbWF0ZShcImRvd25cIik7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5cy5pc1ByZXNzZWQoa2V5cy5yaWdodCkgJiYgIXBsYXllckNvbGxpc2lvbnMpIHtcbiAgICAgICAgICAgIG1vYmlsZS5wb3NpdGlvbi54IC09IFBMQVlFUl9NT1ZFU1BFRURcbiAgICAgICAgICAgIHBsYXllci5hbmltYXRlKFwicmlnaHRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbmVteURpc3RhbmNlID0gbWFuaGF0dGFuRGlzdGFuY2UocGxheWVyLnBvc2l0aW9uLCBlbmVteS5wb3NpdGlvbik7XG4gICAgaWYgKGVuZW15RGlzdGFuY2UgPD0gRU5FTVlfQ0hBU0VfRElTVEFOQ0UgJiYgIWVuZW15Q29sbGlzaW9ucykge1xuICAgICAgICBbLi4uY29sbGlkZXJzLCBiZywgZmddLmZvckVhY2gobW92ZU1vYmlsZSk7XG4gICAgICAgIGVuZW15LmZvbGxvdyhwbGF5ZXIucG9zaXRpb24sIGVuZW15Q29sbGlzaW9ucyk7XG4gICAgfSBlbHNlIGlmIChjaGVja0NvbGxpc2lvbihlbmVteSwgcGxheWVyLCB7IHg6IDAsIHk6IDAgfSkpIHtcbiAgICAgICAgZW5lbXkuYXR0YWNrKHBsYXllciwgdHJ1ZSkuZHJhd0F0dGFja0VmZmVjdHMoY3R4LCBwbGF5ZXIpO1xuICAgICAgICBwbGF5ZXIuYXR0YWNrKGVuZW15LCBrZXlzLmlzUHJlc3NlZChcInlcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFsuLi5jb2xsaWRlcnMsIGJnLCBmZywgZW5lbXldLmZvckVhY2gobW92ZU1vYmlsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uQnVpbGRlciA9ICh7IGJnLCBwbGF5ZXIsIHN0YXRlLCBjYW52YXMsIGZnLCBlbmVteSB9OiBBbmltYXRpb25CdWlsZGVyQXJncyk6ICgpID0+IHZvaWQgPT4ge1xuICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gZ2V0Q3R4KGNhbnZhcyk7XG4gICAgY29uc3Qgc3ByaXRlczogU3ByaXRlW10gPSBbYmcsIHBsYXllciwgZmcsIGVuZW15XTtcbiAgICBzcHJpdGVzLmZvckVhY2goc3ByaXRlID0+IHNwcml0ZS5sb2FkSW1hZ2UoY3R4KSk7XG4gICAgY29uc3QgY29sbGlkZXJzID0gZ2V0Q29sbGlkZXJzKCk7XG5cbiAgICBjb25zdCBhbmltYXRlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBiZy5kcmF3KGN0eCk7XG4gICAgICAgIHBsYXllci5kcmF3KGN0eCk7XG4gICAgICAgIGVuZW15LmRyYXcoY3R4KTtcbiAgICAgICAgZmcuZHJhdyhjdHgpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICBtb3Rpb25Db250cm9sKHsgY3R4LCBzdGF0ZSwgYmcsIHBsYXllciwgZW5lbXksIGZnLCBjb2xsaWRlcnMgfSk7XG4gICAgfVxuICAgIHJldHVybiBhbmltYXRlO1xufVxuIiwiZXhwb3J0IGNvbnN0IG1hcFNldHVwID0gKG1hcF93aWR0aDogbnVtYmVyLCBtYXBfaGVpZ2h0OiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSBtYXBfd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IG1hcF9oZWlnaHQ7XG4gICAgcmV0dXJuIGNhbnZhcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldEN0eCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0+IHtcbiAgICBjb25zdCBjdHggPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPiBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gY3R4O1xufVxuIiwiaW1wb3J0IHsgY29sbGlzaW9ucyB9IGZyb20gXCIuLi8uLi9kYXRhL2NvbGxpc2lvblwiO1xuXG5leHBvcnQgY29uc3QgbWFrZUNvbGxpc2lvbkdyaWQgPSAoY2h1bmtTaXplOiBudW1iZXIpOiBudW1iZXJbXVtdID0+IHtcbiAgICBjb25zdCBjb2xsaXNpb25HcmlkOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaXNpb25zLmxlbmd0aDsgaSArPSBjaHVua1NpemUpIHtcbiAgICAgICAgY29sbGlzaW9uR3JpZC5wdXNoKGNvbGxpc2lvbnMuc2xpY2UoaSwgaSArIGNodW5rU2l6ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gY29sbGlzaW9uR3JpZFxufVxuIiwiaW1wb3J0IHsgbWFrZUNvbGxpc2lvbkdyaWQgfSBmcm9tIFwiLi9jb2xsaXNpb25zXCI7XG5pbXBvcnQgeyBJU19DT0xMSURFUiwgTUFQX1hfT0ZGU0VULCBNQVBfWV9PRkZTRVQsIFRJTEVTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBCb3hDb2xsaWRlciBpbXBsZW1lbnRzIEJveCB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBwb3NpdGlvbjogY29vcmRpbmF0ZXM7XG4gICAgaXNDb2xsaWRlcjogYm9vbGVhbjtcbiAgICBzdGF0aWMgd2lkdGggPSA2NDtcbiAgICBzdGF0aWMgaGVpZ2h0ID0gNjQ7XG4gICAgY29uc3RydWN0b3IoeyBwb3NpdGlvbiB9OiBwb3NpdGlvbikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMud2lkdGggPSBCb3hDb2xsaWRlci53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBCb3hDb2xsaWRlci5oZWlnaHQ7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRlciA9IHRydWU7XG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMTAwLCAwLCAwLCAwLjUpXCI7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCBCb3hDb2xsaWRlci53aWR0aCwgQm94Q29sbGlkZXIuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZvbnQgPSBcIjEwcHggQXJpYWxcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGAoJHt0aGlzLnBvc2l0aW9uLnh9LCAke3RoaXMucG9zaXRpb24ueX0pYCwgdGhpcy5wb3NpdGlvbi54ICsgMTAsIHRoaXMucG9zaXRpb24ueSArIDIwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCA1LCA1KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb2xsaWRlcnMgPSAoKTogQm94Q29sbGlkZXJbXSA9PiB7XG4gICAgY29uc3QgY29sbGlkZXJzOiBCb3hDb2xsaWRlcltdID0gW107XG4gICAgY29uc3QgY29sbGlzaW9uR3JpZDogbnVtYmVyW11bXSA9IG1ha2VDb2xsaXNpb25HcmlkKFRJTEVTLnJvd3MpO1xuICAgIGNvbGxpc2lvbkdyaWQuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGopID0+IHtcbiAgICAgICAgICAgIGlmIChjb2wgPT09IElTX0NPTExJREVSKSB7XG4gICAgICAgICAgICAgICAgY29sbGlkZXJzLnB1c2gobmV3IEJveENvbGxpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGogKiBCb3hDb2xsaWRlci53aWR0aCArIE1BUF9YX09GRlNFVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGkgKiBCb3hDb2xsaWRlci5oZWlnaHQgKyBNQVBfWV9PRkZTRVRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICByZXR1cm4gY29sbGlkZXJzO1xufVxuXG4vKipcbiAqICAgICAgICAgIF9fX19fIF9fX19fXG4gKiAgICAgICAgICB8IFAgfCB8IEMgfFxuICogICAgICAgICAg4oC+4oC+4oC+4oC+4oC+IOKAvuKAvuKAvuKAvuKAvlxuICogICAgICAgICBcbiAqIEBwYXJhbSBzaGFwZTEgXG4gKiBAcGFyYW0gc2hhcGUyIFxuICogQHBhcmFtIHBhcmFtMiBcbiAqIEBwYXJhbSB0b2xlcmFuY2UgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoZWNrQ29sbGlzaW9uID0gKFxuICAgIHNoYXBlMTogQm94LFxuICAgIHNoYXBlMjogQm94LFxuICAgIHsgeCwgeSB9OiBjb29yZGluYXRlcyxcbiAgICB0b2xlcmFuY2U6IG51bWJlciA9IDE2XG4pOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBzaGFwZTFQb3NpdGlvbiA9IHNoYXBlMS5wb3NpdGlvbjtcbiAgICBjb25zdCBzaGFwZTJQb3NpdGlvbiA9IHNoYXBlMi5wb3NpdGlvbjtcblxuICAgIHJldHVybiAoKHNoYXBlMVBvc2l0aW9uLnggKyBzaGFwZTEud2lkdGggPiBzaGFwZTJQb3NpdGlvbi54ICsgeCArIHRvbGVyYW5jZSkgLy8gcGxheWVyIGlzIHRvIHRoZSByaWdodCBvZiBjb2xsaWRlclxuICAgICYmIChzaGFwZTFQb3NpdGlvbi54IDwgc2hhcGUyUG9zaXRpb24ueCArIHggKyBzaGFwZTIud2lkdGggLSB0b2xlcmFuY2UpIC8vIHBsYXllciBpcyB0byB0aGUgbGVmdCBvZiBjb2xsaWRlclxuICAgICYmIChzaGFwZTFQb3NpdGlvbi55ICsgc2hhcGUxLmhlaWdodCA+IHNoYXBlMlBvc2l0aW9uLnkgKyB5ICsgdG9sZXJhbmNlKSAvLyBwbGF5ZXIgaXMgYmVsb3cgY29sbGlkZXJcbiAgICAmJiAoc2hhcGUxUG9zaXRpb24ueSA8IHNoYXBlMlBvc2l0aW9uLnkgKyB5ICsgc2hhcGUyLmhlaWdodCAtIHRvbGVyYW5jZSkpIC8vIHBsYXllciBpcyBhYm92ZSBjb2xsaWRlclxufVxuIiwiaW1wb3J0IHsgaGFzS2V5LCByYW5kb21JbnQgfSBmcm9tICcuLi91dGlscy9taXNjJztcbmltcG9ydCB7IEJBUl9IRUlHSFQsIEJBUl9PRkZTRVQgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcbiAgICBwb3NpdGlvbjogY29vcmRpbmF0ZXM7XG4gICAgem9vbT86IG51bWJlcjtcbiAgICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGZhY2U6IG51bWJlcjtcbiAgICBmcmFtZXM/OiBudW1iZXI7XG4gICAgY3VycmVudEZyYW1lOiBudW1iZXI7XG4gICAgZGlyZWN0aW9uczogRGlyZWN0aW9uRmFjZUFyZ3NcbiAgICBmcmFtZXNQZXJEaXJlY3Rpb246IG51bWJlcjtcbiAgICByZWZyZXNoUmF0ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIGRpcmVjdGlvbnMsXG4gICAgICAgIHpvb20gPSAxLFxuICAgICAgICBmcmFtZXMgPSAxLFxuICAgIH06IFNwcml0ZUFyZ3MpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aCAqIHRoaXMuem9vbTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgKiB0aGlzLnpvb207XG4gICAgICAgIHRoaXMuZmFjZSA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnM7XG4gICAgICAgIHRoaXMucmVmcmVzaFJhdGUgPSA1ZS00O1xuICAgICAgICB0aGlzLmZyYW1lc1BlckRpcmVjdGlvbiA9IHRoaXMuZnJhbWVzIC8gT2JqZWN0LmtleXModGhpcy5kaXJlY3Rpb25zKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IFNwcml0ZSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmltYWdlLFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzLFxuICAgICAgICAgICAgdGhpcy5pbWFnZS5oZWlnaHQsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICB0aGlzLmltYWdlLndpZHRoIC8gdGhpcy5mcmFtZXMgKiB0aGlzLnpvb20sXG4gICAgICAgICAgICB0aGlzLmltYWdlLmhlaWdodCAqIHRoaXMuem9vbSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxvYWRJbWFnZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IFNwcml0ZSB7XG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcmF3KGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBQbGF5YWJsZSBleHRlbmRzIFNwcml0ZSBpbXBsZW1lbnRzIEJveCB7XG4gICAgcG9zaXRpb246IGNvb3JkaW5hdGVzO1xuICAgIHpvb20/OiBudW1iZXI7XG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBmYWNlOiBudW1iZXI7XG4gICAgZnJhbWVzPzogbnVtYmVyO1xuICAgIGN1cnJlbnRGcmFtZTogbnVtYmVyO1xuICAgIGRpcmVjdGlvbnM6IERpcmVjdGlvbkZhY2VBcmdzXG4gICAgZnJhbWVzUGVyRGlyZWN0aW9uOiBudW1iZXI7XG4gICAgcmVmcmVzaFJhdGU6IG51bWJlcjtcbiAgICBocDogbnVtYmVyO1xuICAgIGFybW91cjogbnVtYmVyO1xuICAgIGltbXVuaXR5OiBudW1iZXI7XG4gICAgbXVzY2xlOiBudW1iZXI7XG4gICAgbWFnaWs6IG51bWJlcjtcbiAgICBtYW5hOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzcHJpdGVBcmdzOiBTcHJpdGVBcmdzLCB7IGhwLCBtYW5hLCBtdXNjbGUsIG1hZ2lrLCBhcm1vdXIsIGltbXVuaXR5fTogUGxheWFibGVBcmdzKSB7XG4gICAgICAgc3VwZXIoc3ByaXRlQXJncyk7XG4gICAgICAgdGhpcy5ocCA9IGhwO1xuICAgICAgIHRoaXMubWFuYSA9IG1hbmE7XG4gICAgICAgdGhpcy5tdXNjbGUgPSBtdXNjbGU7XG4gICAgICAgdGhpcy5tYWdpayA9IG1hZ2lrO1xuICAgICAgIHRoaXMuYXJtb3VyID0gYXJtb3VyO1xuICAgICAgIHRoaXMuaW1tdW5pdHkgPSBpbW11bml0eTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGRpcmVjdGlvbjogc3RyaW5nKTogUGxheWFibGUge1xuICAgICAgICBpZiAoaGFzS2V5KHRoaXMuZGlyZWN0aW9ucywgZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RGcmFtZSA9IHRoaXMuZGlyZWN0aW9uc1tkaXJlY3Rpb25dO1xuICAgICAgICAgICAgY29uc3QgbGFzdEZyYW1lID0gdGhpcy5kaXJlY3Rpb25zW2RpcmVjdGlvbl0gKyB0aGlzLmZyYW1lc1BlckRpcmVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuZmFjZSA9ICh0aGlzLmZhY2UgPj0gZmlyc3RGcmFtZSAmJiB0aGlzLmZhY2UgPCBsYXN0RnJhbWUpXG4gICAgICAgICAgICAgICAgPyB0aGlzLmZhY2UgKyB0aGlzLnJlZnJlc2hSYXRlXG4gICAgICAgICAgICAgICAgOiBmaXJzdEZyYW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gTWF0aC5mbG9vcih0aGlzLmZhY2UpICogdGhpcy5mcmFtZXM7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZm9sbG93KHBvc2l0aW9uOiBjb29yZGluYXRlcywgY29sbGlzaW9uczogYm9vbGVhbik6IFBsYXlhYmxlIHtcbiAgICAgICAgY29uc3QgbmV3WCA9IHJhbmRvbUludCgtMSwgMSk7XG4gICAgICAgIGNvbnN0IG5ld1kgPSByYW5kb21JbnQoLTEsIDEpO1xuICAgICAgICBpZiAoIWNvbGxpc2lvbnMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBuZXdYO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IG5ld1k7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXR0YWNrKHRhcmdldDogUGxheWFibGUsIGNvbmRpdGlvbjogYm9vbGVhbik6IFBsYXlhYmxlIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbiAmJiB0aGlzLmhwID4gMCAmJiB0YXJnZXQuaHAgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBkYW1hZ2UgPSB0aGlzLm11c2NsZSAvIHRhcmdldC5hcm1vdXI7XG4gICAgICAgICAgICB0YXJnZXQuaHAgPSAodGFyZ2V0LmhwIC0gZGFtYWdlID4gMCkgPyB0YXJnZXQuaHAgLSBkYW1hZ2U6IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaHBCYXJDb2xvcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaHAgPiA1MCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiIzY1ZDY3MFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaHAgPiAyMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiI2ZmZDcwMFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiI2ZmMDAwMFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd01ldGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogUGxheWFibGUge1xuICAgICAgICBjb25zdCBCYXJNYXhXaWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIGNvbnN0IHggPSB0aGlzLnBvc2l0aW9uLnggLSBCQVJfT0ZGU0VUO1xuICAgICAgICBjb25zdCB5ID0gdGhpcy5wb3NpdGlvbi55IC0gMjA7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICBCYXJNYXhXaWR0aCArIEJBUl9PRkZTRVQgKiAyLFxuICAgICAgICAgICAgQkFSX0hFSUdIVCArIEJBUl9PRkZTRVQgKiAyXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRyYXdIUChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IFBsYXlhYmxlIHtcbiAgICAgICAgY29uc3QgQmFyTWF4V2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCBocEJhciA9IHRoaXMuaHAgLyAxMDAgKiBCYXJNYXhXaWR0aDtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMucG9zaXRpb24ueDtcbiAgICAgICAgY29uc3QgeSA9IHRoaXMucG9zaXRpb24ueSAtIDIwICsgQkFSX09GRlNFVDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuaHBCYXJDb2xvcigpO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeSwgaHBCYXIsIDUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkcmF3TWFuYShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IFBsYXlhYmxlIHtcbiAgICAgICAgY29uc3QgQmFyTWF4V2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCBjdXJyZW50TWFuYSA9IHRoaXMubWFuYSAvIDEwMCAqIEJhck1heFdpZHRoO1xuICAgICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbi54XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uLnkgLSAyMCArIEJBUl9PRkZTRVQgKyA1ICsgQkFSX09GRlNFVDtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBjdXJyZW50TWFuYTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwNzdkYVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIDMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkcmF3RGVidWcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBQbGF5YWJsZSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgxMDAsIDAsIDAsIDAuNSlcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZvbnQgPSBcIjEwcHggQXJpYWxcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGAoJHt0aGlzLnBvc2l0aW9uLnh9LCAke3RoaXMucG9zaXRpb24ueX0pYCwgdGhpcy5wb3NpdGlvbi54ICsgMTAsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICsgMjApO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDUsIDUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkcmF3QXR0YWNrRWZmZWN0cyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgdGFyZ2V0OiBQbGF5YWJsZSk6IFBsYXlhYmxlIHtcbiAgICAgICAgaWYgKHRhcmdldC5ocCA9PSAwIHx8IHRoaXMuaHAgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgciA9IHJhbmRvbUludCh0aGlzLndpZHRoIC8gMTYsIHRoaXMud2lkdGgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDE4MCwgMTEyLCAyMjQsIDAuNSlcIjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMucG9zaXRpb24ueCArICh0aGlzLndpZHRoIC8gMiksIHRoaXMucG9zaXRpb24ueSArICh0aGlzLmhlaWdodCAvIDIpLCByLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IFBsYXlhYmxlIHtcbiAgICAgICAgaWYgKHRoaXMuaHAgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3TWV0ZXIoY3R4KVxuICAgICAgICAgICAgLmRyYXdIUChjdHgpXG4gICAgICAgICAgICAuZHJhd01hbmEoY3R4KTtcblxuICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmZyYW1lcyxcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgdGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzICogdGhpcy56b29tLFxuICAgICAgICAgICAgdGhpcy5pbWFnZS5oZWlnaHQgKiB0aGlzLnpvb20pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQTEFZRVJfTU9WRVNQRUVEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY2xhc3MgS2V5cyB7XG4gICAgdXA6IHN0cmluZ1xuICAgIGRvd246IHN0cmluZ1xuICAgIGxlZnQ6IHN0cmluZ1xuICAgIHJpZ2h0OiBzdHJpbmdcbiAgICBwcmVzc2VkOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfVxuICAgIG1vdGlvbjogeyBba2V5OiBzdHJpbmddOiBbc3RyaW5nLCBudW1iZXJdIH1cbiAgICBsYXN0S2V5OiBzdHJpbmcgfCBudWxsXG4gICAga2V5c1RvRGlyZWN0aW9uOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG5cbiAgICBjb25zdHJ1Y3Rvcih7IHVwLCBkb3duLCBsZWZ0LCByaWdodCB9OiBEaXJlY3Rpb25LZXlBcmdzKSB7XG4gICAgICAgIHRoaXMudXAgPSB1cFxuICAgICAgICB0aGlzLmRvd24gPSBkb3duXG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnRcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0XG4gICAgICAgIHRoaXMucHJlc3NlZCA9IHtcbiAgICAgICAgICAgIFt0aGlzLnVwXTogZmFsc2UsXG4gICAgICAgICAgICBbdGhpcy5kb3duXTogZmFsc2UsXG4gICAgICAgICAgICBbdGhpcy5sZWZ0XTogZmFsc2UsXG4gICAgICAgICAgICBbdGhpcy5yaWdodF06IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3Rpb24gPSB7XG4gICAgICAgICAgICBbdGhpcy51cF06IFtcInlcIiwgUExBWUVSX01PVkVTUEVFRF0sXG4gICAgICAgICAgICBbdGhpcy5kb3duXTogW1wieVwiLCAtUExBWUVSX01PVkVTUEVFRF0sXG4gICAgICAgICAgICBbdGhpcy5sZWZ0XTogW1wieFwiLCBQTEFZRVJfTU9WRVNQRUVEXSxcbiAgICAgICAgICAgIFt0aGlzLnJpZ2h0XTogW1wieFwiLCAtUExBWUVSX01PVkVTUEVFRF1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RLZXkgPSBudWxsO1xuICAgICAgICB0aGlzLmtleXNUb0RpcmVjdGlvbiA9IHtcbiAgICAgICAgICAgIFt0aGlzLnVwXTogXCJ1cFwiLFxuICAgICAgICAgICAgW3RoaXMuZG93bl06IFwiZG93blwiLFxuICAgICAgICAgICAgW3RoaXMubGVmdF06IFwibGVmdFwiLFxuICAgICAgICAgICAgW3RoaXMucmlnaHRdOiBcInJpZ2h0XCIsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZGxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5wcmVzc2VkKS5ldmVyeShrZXkgPT4gIXRoaXMucHJlc3NlZFtrZXldKVxuICAgIH1cblxuICAgIGdldExhc3REaXJlY3Rpb24oKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICAgIGlmICh0aGlzLmxhc3RLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmtleXNUb0RpcmVjdGlvblt0aGlzLmxhc3RLZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJlc3Moa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcmVzc2VkW2tleV0gPSB0cnVlO1xuICAgICAgICBpZiAoa2V5IGluIE9iamVjdC52YWx1ZXModGhpcy5rZXlzVG9EaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RLZXkgPSBrZXk7ICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVsZWFzZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnByZXNzZWRba2V5XSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlzUHJlc3NlZChkaXJlY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVzc2VkW2RpcmVjdGlvbl07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3RhdGUge1xuICAgIGtleXM6IEtleXNcbiAgICBjb25zdHJ1Y3Rvcih7IGtleXMgfTogeyBrZXlzOiBEaXJlY3Rpb25LZXlBcmdzIH0pIHtcbiAgICAgICAgdGhpcy5rZXlzID0gbmV3IEtleXMoa2V5cylcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgaGFzS2V5ID0gPE8+KG9iajogTywga2V5OiBQcm9wZXJ0eUtleSk6IGtleSBpcyBrZXlvZiBPID0+IHtcbiAgICByZXR1cm4ga2V5IGluIG9ialxufTtcblxuXG5leHBvcnQgY29uc3QgbWFuaGF0dGFuRGlzdGFuY2UgPSAoYTogY29vcmRpbmF0ZXMsIGI6IGNvb3JkaW5hdGVzKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gTWF0aC5hYnMoYS54IC0gYi54KSArIE1hdGguYWJzKGEueSAtIGIueSlcbn1cblxuZXhwb3J0IGNvbnN0IHJhbmRvbUludCA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbnN0YW50cy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9kYXRhL2NvbGxpc2lvbi50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9ldmVudHMva2V5cy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9yZW5kZXIvYW5pbWF0aW9uLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3JlbmRlci9jYW52YXMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcmVuZGVyL2NvbGxpZGVyL2NvbGxpc2lvbnMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcmVuZGVyL2NvbGxpZGVyL2luZGV4LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3JlbmRlci9jb2xsaWRlci90eXBlcy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zcHJpdGVzL2luZGV4LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nwcml0ZXMvdHlwZXMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc3RhdGUvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHlwZXMvaW5kZXguZC50c1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3V0aWxzL21pc2MudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=