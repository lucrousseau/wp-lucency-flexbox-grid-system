/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/column.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/column.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const column = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM6 17.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h3v10H6zm13.5-.5c0 .3-.2.5-.5.5h-3v-10h3c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (column);
//# sourceMappingURL=column.js.map

/***/ }),

/***/ "./src/abstracts/constants.js":
/*!************************************!*\
  !*** ./src/abstracts/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BREAKPOINTS: () => (/* binding */ BREAKPOINTS),
/* harmony export */   COLUMNS: () => (/* binding */ COLUMNS),
/* harmony export */   FLEX_CSS_PROPS: () => (/* binding */ FLEX_CSS_PROPS)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const COLUMNS = 12;
const BREAKPOINTS = {
  full: 999999,
  xxl: 1400,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 480
};
const FLEX_CSS_PROPS = {
  display: {
    options: [{
      label: "flex",
      value: "lucency-flex"
    }, {
      label: "inline-flex",
      value: "lucency-inline-flex"
    }],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display", "lucency"),
    type: "select",
    key: "classes"
  },
  "flex-direction": {
    options: [{
      label: "row",
      value: "lucency-flex-row"
    }, {
      label: "row-reverse",
      value: "lucency-flex-row-reverse"
    }, {
      label: "column",
      value: "lucency-flex-column"
    }, {
      label: "column-reverse",
      value: "lucency-flex-column-reverse"
    }],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flex Direction", "lucency"),
    type: "select",
    key: "classes"
  },
  "flex-wrap": {
    options: [{
      label: "wrap",
      value: "lucency-flex-wrap"
    }, {
      label: "wrap-reverse",
      value: "lucency-flex-wrap-reverse"
    }, {
      label: "nowrap",
      value: "lucency-flex-wrap-nowrap"
    }],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flex Wrap", "lucency"),
    type: "select",
    key: "classes"
  },
  "justify-content": {
    options: [{
      label: "normal",
      value: "lucency-justify-normal"
    }, {
      label: "flex-start",
      value: "lucency-justify-start"
    }, {
      label: "flex-end",
      value: "lucency-justify-end"
    }, {
      label: "center",
      value: "lucency-justify-center"
    }, {
      label: "between",
      value: "lucency-justify-between"
    }, {
      label: "around",
      value: "lucency-justify-around"
    }, {
      label: "evenly",
      value: "lucency-justify-evenly"
    }, {
      label: "stretch",
      value: "lucency-justify-stretch"
    }],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Justify Content", "lucency"),
    type: "select",
    key: "classes"
  },
  "align-items": {
    options: [{
      label: "flex-start",
      value: "lucency-items-start"
    }, {
      label: "flex-end",
      value: "lucency-items-end"
    }, {
      label: "center",
      value: "lucency-items-center"
    }, {
      label: "baseline",
      value: "lucency-items-baseline"
    }, {
      label: "stretch",
      value: "lucency-items-stretch"
    }],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Align Items", "lucency"),
    type: "select",
    key: "classes"
  },
  "align-content": {
    options: [{
      label: "normal",
      value: "lucency-content-normal"
    }, {
      label: "center",
      value: "lucency-content-center"
    }, {
      label: "flex-start",
      value: "lucency-content-start"
    }, {
      label: "flex-end",
      value: "lucency-content-end"
    }, {
      label: "space-between",
      value: "lucency-content-between"
    }, {
      label: "space-around",
      value: "lucency-content-around"
    }, {
      label: "space-evenly",
      value: "lucency-content-evenly"
    }, {
      label: "baseline",
      value: "lucency-content-baseline"
    }, {
      label: "stretch",
      value: "lucency-content-stretch"
    }],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Align Content", "lucency"),
    type: "select",
    key: "classes"
  },
  "text-align": {
    options: [{
      label: "left",
      value: "lucency-align-left"
    }, {
      label: "center",
      value: "lucency-align-center"
    }, {
      label: "right",
      value: "lucency-align-right"
    }, {
      label: "justify",
      value: "lucency-align-justify"
    }],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Align", "lucency"),
    type: "select",
    key: "classes"
  },
  gap: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gap", "lucency"),
    type: "number",
    key: "variables"
  }
};

/***/ }),

/***/ "./src/column/edit.js":
/*!****************************!*\
  !*** ./src/column/edit.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _abstracts_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abstracts/constants */ "./src/abstracts/constants.js");
/* harmony import */ var _commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../commons/ResponsivePanel */ "./src/commons/ResponsivePanel/index.js");
/* harmony import */ var _responsiveColumnSizes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./responsiveColumnSizes.js */ "./src/column/responsiveColumnSizes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block.json */ "./src/column/block.json");










function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    stylesClasses,
    sizes
  } = attributes;
  const style = (0,_commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_7__.updateStyles)({
    stylesClasses
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: (0,_commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_7__.updateClasses)({
      stylesClasses
    }, classnames__WEBPACK_IMPORTED_MODULE_1___default()("lucency-col", (0,_responsiveColumnSizes_js__WEBPACK_IMPORTED_MODULE_8__["default"])({
      sizes
    })))
  });
  const {
    hasInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => ({
    hasInnerBlocks: select("core/block-editor").getBlockCount(clientId) > 0
  }));
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useInnerBlocksProps)(blockProps, {
    renderAppender: !hasInnerBlocks ? () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.ButtonBlockAppender, null) : null
  });
  const handleSizeChange = ({
    size,
    sizes,
    value
  }) => {
    const updatedColumnSize = {
      ...sizes,
      [size]: value
    };
    setAttributes({
      sizes: updatedColumnSize
    });
  };
  const responsivePanelBefore = {
    fn: ({
      size
    }) => {
      var _sizes$size;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `lucency-col`
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Columns Width", "lucency"),
        min: 0,
        max: _abstracts_constants__WEBPACK_IMPORTED_MODULE_6__.COLUMNS,
        value: (_sizes$size = sizes?.[size]) !== null && _sizes$size !== void 0 ? _sizes$size : 0,
        onChange: value => handleSizeChange({
          size,
          sizes,
          value
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Leave at 0 for auto width", "lucency")
      }));
    },
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Alignment", "lucency")
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Notice, {
    status: "warning",
    isDismissible: false
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Comulative column width for sleected breakpoints should not exceed 12 or row will break in another line", "lucency")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Column Settings")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    enabled: {
      padding: true
    },
    stylesClasses: stylesClasses,
    setAttributes: setAttributes,
    responsivePanelBefore: responsivePanelBefore,
    defaultStylesClasses: _block_json__WEBPACK_IMPORTED_MODULE_9__?.attributes?.stylesClasses?.default
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps,
    style: style
  }));
}

/***/ }),

/***/ "./src/column/responsiveColumnSizes.js":
/*!*********************************************!*\
  !*** ./src/column/responsiveColumnSizes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ responsiveColumnSizes)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);

function responsiveColumnSizes({
  sizes
}) {
  const classes = Object.entries(sizes).reduce((acc, [size, value]) => {
    const prefix = size === "full" ? "" : `--${size}`;
    acc[`lucency-col-${value}${prefix}`] = value ? true : false;
    return acc;
  }, {});
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classes);
}

/***/ }),

/***/ "./src/column/save.js":
/*!****************************!*\
  !*** ./src/column/save.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commons/ResponsivePanel */ "./src/commons/ResponsivePanel/index.js");
/* harmony import */ var _responsiveColumnSizes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsiveColumnSizes.js */ "./src/column/responsiveColumnSizes.js");





function save({
  attributes
}) {
  const {
    sizes,
    stylesClasses
  } = attributes;
  const style = (0,_commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_3__.updateStyles)({
    stylesClasses
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps.save({
    className: (0,_commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_3__.updateClasses)({
      stylesClasses
    }, classnames__WEBPACK_IMPORTED_MODULE_1___default()("lucency-col", (0,_responsiveColumnSizes_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
      sizes
    })))
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps,
    style: style
  });
}

/***/ }),

/***/ "./src/commons/ResponsivePanel/functions.js":
/*!**************************************************!*\
  !*** ./src/commons/ResponsivePanel/functions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateClasses: () => (/* binding */ updateClasses),
/* harmony export */   updateStyles: () => (/* binding */ updateStyles)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);

function processStylesClasses({
  key,
  stylesClasses,
  processEntry
}) {
  let result = {};
  Object.entries(stylesClasses !== null && stylesClasses !== void 0 ? stylesClasses : {}).forEach(([size, props]) => {
    var _props$key;
    Object.entries((_props$key = props?.[key]) !== null && _props$key !== void 0 ? _props$key : {}).forEach(([prop, value]) => {
      if (value !== undefined && value !== null) {
        const prefix = size === "full" ? "" : `--${size}`;
        processEntry(result, prefix, prop, value);
      }
    });
  });
  return result;
}
function updateStyles({
  stylesClasses
}, style = {}) {
  const key = "variables";
  let processed = processStylesClasses({
    key,
    stylesClasses,
    processEntry: (result, prefix, prop, value) => {
      result[`--${prefix}${prop}`] = `${value}rem`;
    }
  });
  return {
    ...style,
    ...processed
  };
}
function updateClasses({
  stylesClasses
}, classes = null) {
  const key = "classes";
  let processed = processStylesClasses({
    key,
    stylesClasses,
    processEntry: (result, prefix, prop, value) => {
      result[`${value}${prefix}`] = true;
    }
  });
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classes, {
    ...processed
  });
}

/***/ }),

/***/ "./src/commons/ResponsivePanel/handleStylesClassesChange.js":
/*!******************************************************************!*\
  !*** ./src/commons/ResponsivePanel/handleStylesClassesChange.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleStylesClassesChange)
/* harmony export */ });
function handleStylesClassesChange({
  size,
  prop,
  value,
  key,
  stylesClasses,
  setAttributes,
  defaultValue
}) {
  const updatedStylesClasses = {
    ...stylesClasses,
    [size]: {
      ...stylesClasses[size],
      [key]: {
        ...stylesClasses[size]?.[key],
        ...(value !== null ? {
          [prop]: value
        } : {})
      }
    }
  };
  console.log({
    updatedStylesClasses
  }, "A");
  if (!value || value === defaultValue?.toString()) {
    delete updatedStylesClasses[size][key][prop];
  }
  if (Object.keys(updatedStylesClasses[size]).length === 0) {
    delete updatedStylesClasses[size];
  }
  console.log({
    updatedStylesClasses,
    defaultValue
  }, "B");
  setAttributes({
    stylesClasses: updatedStylesClasses
  });
}

/***/ }),

/***/ "./src/commons/ResponsivePanel/index.js":
/*!**********************************************!*\
  !*** ./src/commons/ResponsivePanel/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponsivePanel),
/* harmony export */   handleStylesClassesChange: () => (/* reexport safe */ _handleStylesClassesChange__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   responsivePanelControls: () => (/* reexport safe */ _responsivePanelControls__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   updateClasses: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_4__.updateClasses),
/* harmony export */   updateStyles: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_4__.updateStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions */ "./src/commons/ResponsivePanel/functions.js");
/* harmony import */ var _handleStylesClassesChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handleStylesClassesChange */ "./src/commons/ResponsivePanel/handleStylesClassesChange.js");
/* harmony import */ var _responsivePanelControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./responsivePanelControls */ "./src/commons/ResponsivePanel/responsivePanelControls.js");
/* harmony import */ var _responsivePanelItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./responsivePanelItems */ "./src/commons/ResponsivePanel/responsivePanelItems.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/commons/ResponsivePanel/editor.scss");









function ResponsivePanel(props) {
  const [openPanel, setOpenPanel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("full");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("lucency__responsivepanel")
  }, Object.entries((0,_responsivePanelItems__WEBPACK_IMPORTED_MODULE_7__["default"])(props)).map(([item, props]) => {
    const {
      title,
      content
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: item
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      onClick: () => setOpenPanel(item)
    }, title, openPanel !== item && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z"
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "lucency__collapsible__panel",
      style: openPanel !== item ? {
        display: "none"
      } : null
    }, content), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null));
  }));
}


/***/ }),

/***/ "./src/commons/ResponsivePanel/responsivePanelControls.js":
/*!****************************************************************!*\
  !*** ./src/commons/ResponsivePanel/responsivePanelControls.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/commons/ResponsivePanel/index.js");



const responsivePanelControls = ({
  stylesClasses,
  setAttributes,
  options,
  label,
  type,
  prop,
  size,
  key,
  min,
  max,
  col = 6,
  shiftStep = 10,
  onChange = null,
  defaultStylesClasses = {}
}) => {
  var _stylesClasses$size$k;
  const defaultValue = defaultStylesClasses?.[size]?.[key]?.[prop];
  const setValues = (_stylesClasses$size$k = stylesClasses?.[size]?.[key]?.[prop]) !== null && _stylesClasses$size$k !== void 0 ? _stylesClasses$size$k : null;
  const setOnChange = onChange !== null && onChange !== void 0 ? onChange : value => (0,___WEBPACK_IMPORTED_MODULE_2__.handleStylesClassesChange)({
    size,
    prop,
    value,
    key,
    stylesClasses,
    setAttributes,
    defaultValue
  });
  let output = null;
  switch (type) {
    case "select":
      const setOptions = !defaultValue ? [...[{
        label: "",
        value: null
      }], ...options] : options;
      output = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: label,
        value: setValues !== null && setValues !== void 0 ? setValues : defaultValue,
        options: setOptions,
        onChange: setOnChange,
        __nextHasNoMarginBottom: true
      });
      break;
    case "number":
      output = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
        label: label,
        value: setValues !== null && setValues !== void 0 ? setValues : defaultValue,
        onChange: setOnChange,
        step: 0.1,
        isShiftStepEnabled: true,
        shiftStep: shiftStep,
        min: min,
        max: max
      });
      break;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `lucency-col lucency-col-${col}`
  }, output);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (responsivePanelControls);

/***/ }),

/***/ "./src/commons/ResponsivePanel/responsivePanelItems.js":
/*!*************************************************************!*\
  !*** ./src/commons/ResponsivePanel/responsivePanelItems.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ responsivePanelItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _abstracts_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../abstracts/constants */ "./src/abstracts/constants.js");
/* harmony import */ var _responsivePanelControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./responsivePanelControls */ "./src/commons/ResponsivePanel/responsivePanelControls.js");




function responsivePanelItems({
  enabled = {
    margin: true,
    padding: true
  },
  stylesClasses,
  setAttributes,
  defaultStylesClasses = {},
  responsivePanelBefore = {
    title: null,
    fn: null
  },
  responsivePanelAfter = {
    title: null,
    fn: null
  }
}) {
  const stylesClassesObject = Object.fromEntries(Object.keys(_abstracts_constants__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS).map(size => [size, {}]));
  const responsivePanelMargins = ({
    size
  }) => {
    const controls = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top", "lucency"),
      prop: "margin-top"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bottom", "lucency"),
      prop: "margin-bottom"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Left", "lucency"),
      prop: "margin-left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Right", "lucency"),
      prop: "margin-right"
    }];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, controls.map(props => (0,_responsivePanelControls__WEBPACK_IMPORTED_MODULE_3__["default"])({
      stylesClasses,
      setAttributes,
      defaultStylesClasses,
      size,
      type: "number",
      key: "variables",
      col: 3,
      ...props
    })));
  };
  const responsivePanelPaddings = ({
    size
  }) => {
    const controls = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top", "lucency"),
      prop: "padding-top"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bottom", "lucency"),
      prop: "padding-bottom"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Left", "lucency"),
      prop: "padding-left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Right", "lucency"),
      prop: "padding-right"
    }];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, controls.map(props => (0,_responsivePanelControls__WEBPACK_IMPORTED_MODULE_3__["default"])({
      stylesClasses,
      setAttributes,
      defaultStylesClasses,
      type: "number",
      key: "variables",
      col: 3,
      min: 0,
      size,
      ...props
    })));
  };
  const createResponsivePanelItemsContent = ({
    title,
    size,
    fn
  }) => {
    if (!fn) {
      console.error(`No function found for type: ${fn}`);
      return null;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "lucency lucency-flex lucency-flex-wrap",
      style: {
        "--gap": "0.25em"
      }
    }, fn({
      size
    })));
  };
  const panelSettings = [{
    condition: responsivePanelBefore?.fn,
    title: responsivePanelBefore.title || null,
    fn: responsivePanelBefore.fn
  }, {
    condition: enabled?.margin,
    title: "Margins",
    fn: responsivePanelMargins
  }, {
    condition: enabled?.padding,
    title: "Paddings",
    fn: responsivePanelPaddings
  }, {
    condition: responsivePanelAfter?.fn,
    title: responsivePanelAfter?.title || null,
    fn: responsivePanelAfter.fn
  }];
  return Object.keys(stylesClassesObject).reduce((collapsibleItems, size) => {
    const title = `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(size.toUpperCase(), "lucency")}${size !== "full" ? `, ${_abstracts_constants__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS[size]}px` : ""}`;
    const content = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "responsiveResponsiveStylesClassesPanel"
    }, panelSettings.map(({
      condition,
      title,
      fn
    }) => condition ? createResponsivePanelItemsContent({
      title,
      fn,
      size
    }) : null));
    collapsibleItems[size] = {
      title,
      content
    };
    return collapsibleItems;
  }, {});
}

/***/ }),

/***/ "./src/commons/ResponsivePanel/editor.scss":
/*!*************************************************!*\
  !*** ./src/commons/ResponsivePanel/editor.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/column/block.json":
/*!*******************************!*\
  !*** ./src/column/block.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"lucency-grid/column","version":"1.0.0","title":"Column","category":"design","description":"","example":{},"supports":{"html":false,"inserter":false},"parent":["lucency-grid/row"],"textdomain":"lucency","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"sizes":{"type":"object","default":{}},"stylesClasses":{"type":"object","default":{"full":{"classes":{},"variables":{}}}}}}');

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/column/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/column.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/column/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/column/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/column/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map