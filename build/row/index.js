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
  setAttributes
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
  if (!value) {
    delete updatedStylesClasses[size][key][prop];
  }
  if (Object.keys(updatedStylesClasses[size]).length === 0) {
    delete updatedStylesClasses[size];
  }
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
/* harmony import */ var _responsivePanelItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./responsivePanelItems */ "./src/commons/ResponsivePanel/responsivePanelItems.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/commons/ResponsivePanel/editor.scss");








function ResponsivePanel(props) {
  const [openPanel, setOpenPanel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("full");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("lucency__responsivepanel")
  }, Object.entries((0,_responsivePanelItems__WEBPACK_IMPORTED_MODULE_6__["default"])(props)).map(([item, props]) => {
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _handleStylesClassesChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleStylesClassesChange */ "./src/commons/ResponsivePanel/handleStylesClassesChange.js");





function responsivePanelItems({
  enabled = {
    margin: true,
    padding: true
  },
  stylesClasses,
  setAttributes,
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
  const renderControl = ({
    stylesClasses,
    label,
    prop,
    size,
    col = 6,
    min
  }) => {
    var _stylesClasses$size$v;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `lucency-col lucency-col-${col}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
      label: label,
      value: (_stylesClasses$size$v = stylesClasses?.[size]?.variables?.[prop]) !== null && _stylesClasses$size$v !== void 0 ? _stylesClasses$size$v : null,
      onChange: value => (0,_handleStylesClassesChange__WEBPACK_IMPORTED_MODULE_4__["default"])({
        size,
        prop,
        value,
        key: "variables",
        stylesClasses,
        setAttributes
      }),
      min: min,
      step: 0.1,
      isShiftStepEnabled: true,
      shiftStep: 10
    }));
  };
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, controls.map(({
      label,
      prop
    }) => renderControl({
      stylesClasses,
      label,
      prop,
      size,
      col: 3
    })));
  };
  const responsivePanelPaddings = ({
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
    }) => renderControl({
      stylesClasses,
      label,
      prop,
      size,
      min: 0,
      col: 3
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

/***/ "./src/row/ColumnsLength.js":
/*!**********************************!*\
  !*** ./src/row/ColumnsLength.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColumnsLength)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _abstracts_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abstracts/constants */ "./src/abstracts/constants.js");







function ColumnsLength({
  columns,
  setAttributes,
  setShowNotice,
  clientId
}) {
  const {
    hasInnerBlocks,
    innerBlocksCount
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const count = select("core/block-editor").getBlockCount(clientId);
    return {
      hasInnerBlocks: count > 0,
      innerBlocksCount: count
    };
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!hasInnerBlocks && columns === 1) {
      const initialBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)("lucency-grid/column");
      replaceInnerBlocks(clientId, [initialBlock], false);
    }
    if (innerBlocksCount > _abstracts_constants__WEBPACK_IMPORTED_MODULE_6__.COLUMNS) {
      setShowNotice(true);
    } else {
      setShowNotice(false);
    }
  }, [columns, hasInnerBlocks, innerBlocksCount]);
  const {
    replaceInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)("core/block-editor");
  const innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select("core/block-editor").getBlocks(clientId), [clientId]);
  const savedContentRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => onColumnsLengthChange(columns), []);
  const onColumnsLengthChange = value => {
    if (value < 1 || value > _abstracts_constants__WEBPACK_IMPORTED_MODULE_6__.COLUMNS) {
      console.error(`The number of columns must be between 1 and ${_abstracts_constants__WEBPACK_IMPORTED_MODULE_6__.COLUMNS}.`);
      return;
    }
    const updatedInnerBlocks = [...innerBlocks];
    const currentCount = updatedInnerBlocks.length;
    const difference = value - currentCount;
    if (difference < 0) {
      updatedInnerBlocks.slice(value).forEach((block, index) => {
        savedContentRef.current[value + index] = block;
      });
      updatedInnerBlocks.length = value;
    }
    for (let i = currentCount; i < value; i++) {
      let newBlock;
      if (savedContentRef.current[i]) {
        newBlock = savedContentRef.current[i];
        delete savedContentRef.current[i];
      } else {
        newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)("lucency-grid/column");
      }
      updatedInnerBlocks.push(newBlock);
    }
    replaceInnerBlocks(clientId, updatedInnerBlocks, false);
    setAttributes({
      columns: value
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Number of Columns in the Row", "lucency"),
    min: 1,
    max: _abstracts_constants__WEBPACK_IMPORTED_MODULE_6__.COLUMNS,
    value: columns,
    onChange: onColumnsLengthChange
  });
}

/***/ }),

/***/ "./src/row/edit.js":
/*!*************************!*\
  !*** ./src/row/edit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ColumnsLength__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ColumnsLength */ "./src/row/ColumnsLength.js");
/* harmony import */ var _commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../commons/ResponsivePanel */ "./src/commons/ResponsivePanel/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./src/row/editor.scss");










function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    tag,
    stylesClasses,
    columns
  } = attributes;
  const Tag = tag;
  const [showNotice, setShowNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const hasInnerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const count = select("core/block-editor").getBlockCount(clientId);
    return count > 0;
  });
  const style = (0,_commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_8__.updateStyles)({
    stylesClasses
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    className: (0,_commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_8__.updateClasses)({
      stylesClasses
    }, classnames__WEBPACK_IMPORTED_MODULE_2___default()("lucency"))
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useInnerBlocksProps)(blockProps, {
    allowedBlocks: ["lucency-grid/column"],
    renderAppender: !hasInnerBlocks ? () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.ButtonBlockAppender, null) : null
  });
  const renderControl = ({
    stylesClasses,
    options,
    label,
    prop,
    size,
    col = 6
  }) => {
    const renderSelectControl = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `lucency-col lucency-col-${col}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
      label: label,
      value: stylesClasses?.[size]?.classes?.[prop],
      options: [...[{
        label: "",
        value: null
      }], ...options],
      onChange: value => (0,_commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_8__.handleStylesClassesChange)({
        size,
        prop,
        value,
        key: "classes",
        stylesClasses,
        setAttributes
      }),
      __nextHasNoMarginBottom: true
    }));
    const renderNumberControl = () => {
      var _stylesClasses$size$v;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `lucency-col lucency-col-${col}`
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalNumberControl, {
        label: label,
        value: (_stylesClasses$size$v = stylesClasses?.[size]?.variables?.[prop]) !== null && _stylesClasses$size$v !== void 0 ? _stylesClasses$size$v : null,
        onChange: value => (0,_commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_8__.handleStylesClassesChange)({
          size,
          prop,
          value,
          key: "variables",
          stylesClasses,
          setAttributes
        }),
        step: 0.1,
        isShiftStepEnabled: true,
        shiftStep: 10
      }));
    };
    return options ? renderSelectControl() : renderNumberControl();
  };
  const responsivePanelBefore = ({
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
    }) => renderControl({
      stylesClasses,
      options,
      label,
      prop,
      size,
      col: 6
    })));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Row Settings")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ColumnsLength__WEBPACK_IMPORTED_MODULE_7__["default"], {
    columns: columns,
    setAttributes: setAttributes,
    clientId: clientId,
    setShowNotice: setShowNotice
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    stylesClasses: stylesClasses,
    setAttributes: setAttributes,
    responsivePanelBefore: {
      fn: responsivePanelBefore,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Alignment", "lucency")
    }
  }))), showNotice && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Notice, {
    status: "error",
    isDismissible: false
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("This block is intended to be used with 12 columns. Having more can lead to unexpected results.", "lucency")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    ...innerBlocksProps,
    style: style
  }));
}

/***/ }),

/***/ "./src/row/index.js":
/*!**************************!*\
  !*** ./src/row/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/mobile.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/row/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/row/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/row/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/row/style.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/row/save.js":
/*!*************************!*\
  !*** ./src/row/save.js ***!
  \*************************/
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




function save({
  attributes
}) {
  const {
    tag,
    stylesClasses
  } = attributes;
  const Tag = tag;
  const style = (0,_commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_3__.updateStyles)({
    stylesClasses
  });
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: (0,_commons_ResponsivePanel__WEBPACK_IMPORTED_MODULE_3__.updateClasses)({
      stylesClasses
    }, classnames__WEBPACK_IMPORTED_MODULE_1___default()("lucency"))
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps.save(blockProps);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    ...innerBlocksProps,
    style: style
  });
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

/***/ "./src/row/editor.scss":
/*!*****************************!*\
  !*** ./src/row/editor.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/row/style.scss":
/*!****************************!*\
  !*** ./src/row/style.scss ***!
  \****************************/
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

/***/ "./src/row/block.json":
/*!****************************!*\
  !*** ./src/row/block.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"lucency-grid/row","version":"1.0.0","title":"Row for flexbox grid system","category":"design","description":"Container for flexbox grid system","example":{},"supports":{"html":true},"textdomain":"lucency","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"tag":{"type":"string","default":"div"},"columns":{"type":"number","default":2},"stylesClasses":{"type":"object","default":{"full":{"classes":{"display":"lucency-flex","flex-direction":"lucency-flex-row","flex-wrap":"lucency-flex-wrap"},"variables":{"gap":"1"}}}}}}');

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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"row/index": 0,
/******/ 			"row/style-index": 0
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunklucency"] = globalThis["webpackChunklucency"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["row/style-index"], () => (__webpack_require__("./src/row/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map