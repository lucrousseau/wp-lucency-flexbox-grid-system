/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/mobile.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/mobile.js ***!
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

const mobile = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobile);
//# sourceMappingURL=mobile.js.map

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
/* harmony export */   COLUMNS: () => (/* binding */ COLUMNS)
/* harmony export */ });
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

/***/ }),

/***/ "./src/commons/Collapsible/index.js":
/*!******************************************!*\
  !*** ./src/commons/Collapsible/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Collapsible)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/commons/Collapsible/editor.scss");




function Collapsible({
  items = {},
  initialOpenPanel = ""
}) {
  const [openPanel, setOpenPanel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialOpenPanel);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("lucency__collapsible")
  }, Object.entries(items).map(([item, props]) => {
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

/***/ "./src/commons/StylesClassesPanel/createCollapsibleItems.js":
/*!******************************************************************!*\
  !*** ./src/commons/StylesClassesPanel/createCollapsibleItems.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCollapsibleItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _abstracts_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../abstracts/constants */ "./src/abstracts/constants.js");
/* harmony import */ var _renderControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderControls */ "./src/commons/StylesClassesPanel/renderControls.js");




function createCollapsibleItems({
  stylesClasses,
  setAttributes
}) {
  const stylesClassesObject = Object.fromEntries(Object.keys(_abstracts_constants__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS).map(size => [size, {}]));
  const handleChange = ({
    size,
    prop,
    value,
    key
  }) => {
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
    if (!value) {
      delete updatedStylesClasses[size][key];
    }
    if (Object.keys(updatedStylesClasses[size]).length === 0) {
      delete updatedStylesClasses[size];
    }
    console.log(value, !!value, {
      updatedStylesClasses
    });
    setAttributes({
      stylesClasses: updatedStylesClasses
    });
  };
  const createCollapsibleItemsContentAlignements = ({
    size
  }) => {
    const controls = [{
      options: [{
        label: "flex",
        value: "lucency-flex"
      }, {
        label: "inline-flex",
        value: "lucency-inline-flex"
      }],
      label: "Display",
      prop: "display"
    }, {
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
      label: "Flex Direction",
      prop: "flex-direction"
    }, {
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
      label: "Flex Wrap",
      prop: "flex-wrap"
    }, {
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
      label: "Justify Content",
      prop: "justify-content"
    }, {
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
      label: "Align Items",
      prop: "align-items"
    }, {
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
      label: "Align Content",
      prop: "align-content"
    }, {
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
      label: "Text Align",
      prop: "text-align"
    }, {
      label: "Gap",
      prop: "gap"
    }];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, controls.map(({
      options,
      label,
      prop
    }) => (0,_renderControls__WEBPACK_IMPORTED_MODULE_3__["default"])({
      stylesClasses,
      options,
      label,
      prop,
      size,
      col: 6,
      handleChange
    })));
  };
  const createCollapsibleItemsContentMargins = ({
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, controls.map(({
      label,
      prop
    }) => (0,_renderControls__WEBPACK_IMPORTED_MODULE_3__["default"])({
      stylesClasses,
      label,
      prop,
      size,
      col: 3,
      handleChange
    })));
  };
  const createCollapsibleItemsContentPaddings = ({
    size
  }) => {
    const controls = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top", "lucency"),
      prop: "padding-top",
      size
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bottom", "lucency"),
      prop: "padding-bottom",
      size
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Left", "lucency"),
      prop: "padding-left",
      size
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Right", "lucency"),
      prop: "padding-right",
      size
    }];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, controls.map(({
      label,
      prop
    }) => (0,_renderControls__WEBPACK_IMPORTED_MODULE_3__["default"])({
      stylesClasses,
      label,
      prop,
      size,
      col: 3,
      handleChange
    })));
  };
  const createCollapsibleItemsContent = ({
    title,
    size,
    fn
  }) => {
    const functionMap = {
      createCollapsibleItemsContentAlignements,
      createCollapsibleItemsContentMargins,
      createCollapsibleItemsContentPaddings
    };
    const ContentFunction = functionMap[fn];
    if (!ContentFunction) {
      console.error(`No function found for type: ${fn}`);
      return null;
    }
    //lucency-col

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "lucency lucency-flex lucency-flex-wrap",
      style: {
        "--gap": "0.25em"
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentFunction, {
      size: size
    })));
  };
  return Object.keys(stylesClassesObject).reduce((collapsibleItems, size) => {
    const title = `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(size.toUpperCase(), "lucency")}${size !== "full" ? `, ${_abstracts_constants__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS[size]}px` : ""}`;
    const content = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "stylesClassesPanel"
    }, createCollapsibleItemsContent({
      title: "Alignments",
      fn: "createCollapsibleItemsContentAlignements",
      size
    }), createCollapsibleItemsContent({
      title: "Margins",
      fn: "createCollapsibleItemsContentMargins",
      size
    }), createCollapsibleItemsContent({
      title: "Paddings",
      fn: "createCollapsibleItemsContentPaddings",
      size
    }));
    collapsibleItems[size] = {
      title,
      content
    };
    return collapsibleItems;
  }, {});
}

/***/ }),

/***/ "./src/commons/StylesClassesPanel/index.js":
/*!*************************************************!*\
  !*** ./src/commons/StylesClassesPanel/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StylesClassesPanel),
/* harmony export */   updateClasses: () => (/* binding */ updateClasses),
/* harmony export */   updateStyles: () => (/* binding */ updateStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Collapsible */ "./src/commons/Collapsible/index.js");
/* harmony import */ var _createCollapsibleItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createCollapsibleItems */ "./src/commons/StylesClassesPanel/createCollapsibleItems.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/commons/StylesClassesPanel/editor.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);







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
  return classnames__WEBPACK_IMPORTED_MODULE_6___default()(classes, {
    ...processed
  });
}
function StylesClassesPanel({
  stylesClasses = {},
  setAttributes
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin & Padding")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("All units are in REM and use sizes for all breakpoints", "lucency"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Collapsible__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: (0,_createCollapsibleItems__WEBPACK_IMPORTED_MODULE_4__["default"])({
      stylesClasses,
      setAttributes
    }),
    initialOpenPanel: "full"
  }));
}

/***/ }),

/***/ "./src/commons/StylesClassesPanel/renderControls.js":
/*!**********************************************************!*\
  !*** ./src/commons/StylesClassesPanel/renderControls.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function renderControl({
  stylesClasses,
  options,
  label,
  prop,
  size,
  col = 6,
  handleChange
}) {
  const renderSelectControl = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `lucency-col lucency-col-${col}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: label,
    value: stylesClasses?.[size]?.classes?.[prop],
    options: [...[{
      label: "",
      value: null
    }], ...options],
    onChange: value => handleChange({
      size,
      prop,
      value,
      key: "classes"
    }),
    __nextHasNoMarginBottom: true
  }));
  const renderNumberControl = () => {
    var _stylesClasses$size$v;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `lucency-col lucency-col-${col}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
      label: label,
      value: (_stylesClasses$size$v = stylesClasses?.[size]?.variables?.[prop]) !== null && _stylesClasses$size$v !== void 0 ? _stylesClasses$size$v : null,
      onChange: value => handleChange({
        size,
        prop,
        value,
        key: "variables"
      }),
      step: 0.1,
      isShiftStepEnabled: true,
      shiftStep: 10
    }));
  };
  return options ? renderSelectControl() : renderNumberControl();
}

/***/ }),

/***/ "./src/container/edit.js":
/*!*******************************!*\
  !*** ./src/container/edit.js ***!
  \*******************************/
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
/* harmony import */ var _commons_StylesClassesPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commons/StylesClassesPanel */ "./src/commons/StylesClassesPanel/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/container/editor.scss");







function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    tag,
    stylesClasses
  } = attributes;
  const Tag = tag;
  const style = (0,_commons_StylesClassesPanel__WEBPACK_IMPORTED_MODULE_5__.updateStyles)({
    stylesClasses
  });
  const {
    hasInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => ({
    hasInnerBlocks: select("core/block-editor").getBlockCount(clientId) > 0
  }));
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: (0,_commons_StylesClassesPanel__WEBPACK_IMPORTED_MODULE_5__.updateClasses)({
      stylesClasses
    }, classnames__WEBPACK_IMPORTED_MODULE_1___default()("container"))
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useInnerBlocksProps)(blockProps, {
    renderAppender: !hasInnerBlocks ? () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.ButtonBlockAppender, null) : null
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_commons_StylesClassesPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    stylesClasses: stylesClasses,
    setAttributes: setAttributes
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    ...innerBlocksProps,
    style: style
  }));
}

/***/ }),

/***/ "./src/container/save.js":
/*!*******************************!*\
  !*** ./src/container/save.js ***!
  \*******************************/
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
/* harmony import */ var _commons_StylesClassesPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commons/StylesClassesPanel */ "./src/commons/StylesClassesPanel/index.js");




function save({
  attributes
}) {
  const {
    tag,
    stylesClasses
  } = attributes;
  const Tag = tag;
  const style = (0,_commons_StylesClassesPanel__WEBPACK_IMPORTED_MODULE_3__.updateStyles)({
    stylesClasses
  });
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: (0,_commons_StylesClassesPanel__WEBPACK_IMPORTED_MODULE_3__.updateClasses)({
      stylesClasses
    }, classnames__WEBPACK_IMPORTED_MODULE_1___default()("container"))
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps.save(blockProps);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    ...innerBlocksProps,
    style: style
  });
}

/***/ }),

/***/ "./src/commons/Collapsible/editor.scss":
/*!*********************************************!*\
  !*** ./src/commons/Collapsible/editor.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/commons/StylesClassesPanel/editor.scss":
/*!****************************************************!*\
  !*** ./src/commons/StylesClassesPanel/editor.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/container/editor.scss":
/*!***********************************!*\
  !*** ./src/container/editor.scss ***!
  \***********************************/
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

/***/ "./src/container/block.json":
/*!**********************************!*\
  !*** ./src/container/block.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"lucency-grid/container","version":"1.0.0","title":"Container for flexbox grid system","category":"design","description":"Container for flexbox grid system","example":{},"supports":{"html":false},"parent":[null],"textdomain":"lucency","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"tag":{"type":"string","default":"section"},"stylesClasses":{"type":"object","default":{"full":{"variables":{"padding-top":4,"padding-right":2,"padding-bottom":4,"padding-left":2}}}}}}');

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
/*!********************************!*\
  !*** ./src/container/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/mobile.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/container/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/container/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/container/block.json");






//import "./style.scss";

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map