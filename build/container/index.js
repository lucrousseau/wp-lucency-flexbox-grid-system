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

/***/ "./src/commons/AlignementsMarginPadding/index.js":
/*!*******************************************************!*\
  !*** ./src/commons/AlignementsMarginPadding/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignementsMarginPadding: () => (/* binding */ AlignementsMarginPadding),
/* harmony export */   updateClasses: () => (/* binding */ updateClasses),
/* harmony export */   updateStyles: () => (/* binding */ updateStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _abstracts_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../abstracts/constants */ "./src/abstracts/constants.js");
/* harmony import */ var _Collapsible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Collapsible */ "./src/commons/Collapsible/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/commons/AlignementsMarginPadding/editor.scss");







function AlignementsMarginPadding({
  marginPadding = {},
  setAttributes
}) {
  const marginPaddingObject = (() => {
    const obj = {};
    Object.keys(_abstracts_constants__WEBPACK_IMPORTED_MODULE_4__.BREAKPOINTS).map(size => {
      obj[size] = {};
    });
    return obj;
  })();
  const handleChange = props => {
    const {
      size,
      prop,
      value,
      direction
    } = props;
    const updateVariables = () => {
      var _marginPadding$size$v, _marginPadding$size$v2;
      return {
        ...((_marginPadding$size$v = marginPadding[size]?.variables) !== null && _marginPadding$size$v !== void 0 ? _marginPadding$size$v : {}),
        variables: {
          ...((_marginPadding$size$v2 = marginPadding[size]?.variables) !== null && _marginPadding$size$v2 !== void 0 ? _marginPadding$size$v2 : {}),
          [prop]: value
        }
      };
    };
    const updateClasses = () => {
      var _marginPadding$size$c, _marginPadding$size$c2;
      return {
        ...((_marginPadding$size$c = marginPadding[size]?.classes) !== null && _marginPadding$size$c !== void 0 ? _marginPadding$size$c : {}),
        classes: {
          ...((_marginPadding$size$c2 = marginPadding[size]?.classes) !== null && _marginPadding$size$c2 !== void 0 ? _marginPadding$size$c2 : {}),
          [prop]: value
        }
      };
    };
    let updatedAttributes = {
      ...marginPadding,
      [size]: {
        ...marginPadding[size],
        ...(direction ? updateVariables() : updateClasses())
      }
    };
    setAttributes({
      marginPadding: updatedAttributes
    });
  };
  const renderSelectControl = props => {
    const {
      options,
      label,
      prop,
      size
    } = props;
    const setOptions = [...[{
      label: "",
      value: null
    }], ...options];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col col--6"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: label,
      value: marginPadding?.[size]?.classes?.[prop],
      options: setOptions,
      onChange: value => handleChange({
        size,
        prop,
        value
      }),
      __nextHasNoMarginBottom: true
    })));
  };
  const renderNumberControl = props => {
    var _marginPadding$size$v3;
    const {
      label,
      prop,
      size
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col col--3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
      label: label,
      value: (_marginPadding$size$v3 = marginPadding?.[size]?.variables?.[prop]) !== null && _marginPadding$size$v3 !== void 0 ? _marginPadding$size$v3 : null,
      onChange: value => handleChange({
        size,
        prop,
        value,
        direction: true
      }),
      step: 0.1,
      isShiftStepEnabled: true,
      shiftStep: 10
    }));
  };
  const createItems = ({
    marginPaddingObject,
    marginPadding,
    handleChange
  }) => Object.entries(marginPaddingObject).reduce((acc, [size, props]) => {
    const title = `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(size.toUpperCase(), "lucidity-flexbox-grid-system")}${size !== "full" ? `, ${_abstracts_constants__WEBPACK_IMPORTED_MODULE_4__.BREAKPOINTS[size]}px` : ""}`;
    const content = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "AlignementsMarginPadding"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Alignements"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row",
      style: {
        "--gap": "0.25em"
      }
    }, renderSelectControl({
      options: [{
        label: "left",
        value: "left"
      }, {
        label: "center",
        value: "center"
      }, {
        label: "right",
        value: "right"
      }, {
        label: "justify",
        value: "justify"
      }],
      label: "Text Align",
      prop: "text-align",
      size
    }), renderSelectControl({
      options: [{
        label: "flex-start",
        value: "flex-start"
      }, {
        label: "flex-end",
        value: "flex-end"
      }, {
        label: "center",
        value: "center"
      }, {
        label: "space-between",
        value: "space-between"
      }, {
        label: "space-around",
        value: "space-around"
      }, {
        label: "space-evenly",
        value: "space-evenly"
      }],
      label: "Justify Content",
      prop: "justify-content",
      size
    }), renderSelectControl({
      options: [{
        label: "flex-start",
        value: "flex-start"
      }, {
        label: "flex-end",
        value: "flex-end"
      }, {
        label: "center",
        value: "center"
      }, {
        label: "baseline",
        value: "baseline"
      }, {
        label: "stretch",
        value: "stretch"
      }],
      label: "Align Items",
      prop: "align-items",
      size
    }), renderSelectControl({
      options: [{
        label: "flex-start",
        value: "flex-start"
      }, {
        label: "flex-end",
        value: "flex-end"
      }, {
        label: "center",
        value: "center"
      }, {
        label: "space-between",
        value: "space-between"
      }, {
        label: "space-around",
        value: "space-around"
      }, {
        label: "stretch",
        value: "stretch"
      }],
      label: "Align Content",
      prop: "align-content",
      size
    }), renderSelectControl({
      options: [{
        label: "row",
        value: "row"
      }, {
        label: "row-reverse",
        value: "row-reverse"
      }, {
        label: "column",
        value: "column"
      }, {
        label: "column-reverse",
        value: "column-reverse"
      }],
      label: "Flex Direction",
      prop: "flex-direction",
      size
    }), renderSelectControl({
      options: [{
        label: "nowrap",
        value: "nowrap"
      }, {
        label: "wrap",
        value: "wrap"
      }, {
        label: "wrap-reverse",
        value: "wrap-reverse"
      }],
      label: "Flex Wrap",
      prop: "flex-wrap",
      size
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margins", "lucidity-flexbox-grid-system")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row",
      style: {
        "--gap": "0.25em"
      }
    }, renderNumberControl({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top", "lucidity-flexbox-grid-system"),
      prop: "margin-top",
      size
    }), renderNumberControl({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bottom", "lucidity-flexbox-grid-system"),
      prop: "margin-bottom",
      size
    }), renderNumberControl({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Left", "lucidity-flexbox-grid-system"),
      prop: "margin-left",
      size
    }), renderNumberControl({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Right", "lucidity-flexbox-grid-system"),
      prop: "margin-right",
      size
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Paddings", "lucidity-flexbox-grid-system")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row",
      style: {
        "--gap": "0.25em"
      }
    }, renderNumberControl({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top", "lucidity-flexbox-grid-system"),
      prop: "padding-top",
      size
    }), renderNumberControl({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bottom", "lucidity-flexbox-grid-system"),
      prop: "padding-bottom",
      size
    }), renderNumberControl({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Left", "lucidity-flexbox-grid-system"),
      prop: "padding-left",
      size
    }), renderNumberControl({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Right", "lucidity-flexbox-grid-system"),
      prop: "padding-right",
      size
    })));
    acc[size] = {
      title,
      content
    };
    return acc;
  }, {});
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin & Padding")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("All units are in REM and use sizes for all breakpoints", "lucidity-flexbox-grid-system"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Collapsible__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: createItems({
      marginPaddingObject,
      marginPadding,
      handleChange
    }),
    initialOpenPanel: "full"
  }));
}
function updateStyles({
  marginPadding,
  style = {}
}) {
  let newStyle = {
    ...style
  };
  Object.entries(marginPadding !== null && marginPadding !== void 0 ? marginPadding : {}).forEach(([size, props]) => {
    var _props$variables;
    Object.entries((_props$variables = props?.variables) !== null && _props$variables !== void 0 ? _props$variables : {}).forEach(([prop, value]) => {
      if (value !== undefined && value !== null) {
        const prefix = size === "full" ? "" : `${size}-`;
        newStyle[`--${prefix}${prop}`] = `${value}rem`;
      }
    });
  });
  return newStyle;
}
function updateClasses({
  marginPadding,
  classes = {}
}) {
  let newClasses = {
    ...classes
  };
  Object.entries(marginPadding !== null && marginPadding !== void 0 ? marginPadding : {}).forEach(([size, props]) => {
    var _props$classes;
    Object.entries((_props$classes = props?.classes) !== null && _props$classes !== void 0 ? _props$classes : {}).forEach(([prop, value]) => {
      if (value !== undefined && value !== null) {
        const prefix = size === "full" ? "" : `${size}-`;
        newClasses[`${prefix}${prop}-${value}`] = true;
      }
    });
  });
  return classnames__WEBPACK_IMPORTED_MODULE_2___default()(newClasses);
}

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
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("lucidity-flexbox-grid-system__collapsible")
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
      className: "lucidity-flexbox-grid-system__collapsible__panel",
      style: openPanel !== item ? {
        display: "none"
      } : null
    }, content), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null));
  }));
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
/* harmony import */ var _commons_AlignementsMarginPadding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commons/AlignementsMarginPadding */ "./src/commons/AlignementsMarginPadding/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/container/editor.scss");







function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    tag,
    marginPadding
  } = attributes;
  const Tag = tag;
  const style = (0,_commons_AlignementsMarginPadding__WEBPACK_IMPORTED_MODULE_5__.updateStyles)({
    marginPadding
  });
  const {
    hasInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => ({
    hasInnerBlocks: select("core/block-editor").getBlockCount(clientId) > 0
  }));
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: (0,_commons_AlignementsMarginPadding__WEBPACK_IMPORTED_MODULE_5__.updateClasses)({
      marginPadding
    }, classnames__WEBPACK_IMPORTED_MODULE_1___default()("container"))
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useInnerBlocksProps)(blockProps, {
    renderAppender: !hasInnerBlocks ? () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.ButtonBlockAppender, null) : null
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_commons_AlignementsMarginPadding__WEBPACK_IMPORTED_MODULE_5__.AlignementsMarginPadding, {
    marginPadding: marginPadding,
    setAttributes: setAttributes
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    ...innerBlocksProps,
    style: style
  }));
}

/***/ }),

/***/ "./src/container/index.js":
/*!********************************!*\
  !*** ./src/container/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/mobile.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/container/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/container/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/container/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/container/style.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

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
/* harmony import */ var _commons_AlignementsMarginPadding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commons/AlignementsMarginPadding */ "./src/commons/AlignementsMarginPadding/index.js");




function save({
  attributes
}) {
  const {
    tag,
    marginPadding
  } = attributes;
  const Tag = tag;
  const style = (0,_commons_AlignementsMarginPadding__WEBPACK_IMPORTED_MODULE_3__.updateStyles)({
    marginPadding
  });
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: (0,_commons_AlignementsMarginPadding__WEBPACK_IMPORTED_MODULE_3__.updateClasses)({
      marginPadding
    }, classnames__WEBPACK_IMPORTED_MODULE_1___default()("container"))
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps.save(blockProps);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    ...innerBlocksProps,
    style: style
  });
}

/***/ }),

/***/ "./src/commons/AlignementsMarginPadding/editor.scss":
/*!**********************************************************!*\
  !*** ./src/commons/AlignementsMarginPadding/editor.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./src/container/editor.scss":
/*!***********************************!*\
  !*** ./src/container/editor.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/container/style.scss":
/*!**********************************!*\
  !*** ./src/container/style.scss ***!
  \**********************************/
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
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"lucidity-flexbox-grid-system/container","version":"1.0.0","title":"Container for flexbox grid system","category":"design","description":"Container for flexbox grid system","example":{},"supports":{"html":false},"parent":[null],"textdomain":"lucidity-flexbox-grid-system","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"tag":{"type":"string","default":"section"},"marginPadding":{"type":"object","default":{"full":{"variables":{"padding-top":4,"padding-right":2,"padding-bottom":4,"padding-left":2}}}}}}');

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
/******/ 			"container/index": 0,
/******/ 			"container/style-index": 0
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunklucidity_flexbox_grid_system"] = globalThis["webpackChunklucidity_flexbox_grid_system"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["container/style-index"], () => (__webpack_require__("./src/container/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map