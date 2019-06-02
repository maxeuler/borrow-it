webpackHotUpdate("static/development/pages/item.js",{

/***/ "./components/ItemDetail.js":
/*!**********************************!*\
  !*** ./components/ItemDetail.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item */ "./components/Item.js");
/* harmony import */ var _styles_StyledLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/StyledLink */ "./components/styles/StyledLink.js");
/* harmony import */ var _Reviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Reviews */ "./components/Reviews.js");

var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/borrow-it/frontend/components/ItemDetail.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery ITEM_DETAIL_QUERY($id: ID!) {\n\t\titem(where: { id: $id }) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\timage\n\t\t\tuser {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tmax-width: 1200px;\n\tmargin: 3rem auto;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, 50%);\n\tmin-height: 500px;\n\tbox-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tobject-fit: cover;\n\t}\n\t.itemData {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tmargin: 1rem auto;\n\t\tfont-size: 1.5rem;\n\t\th3 {\n\t\t\tfont-size: 3rem;\n\t\t}\n\t\tp {\n\t\t\tfont-size: 2rem;\n\t\t\tpadding: 2rem;\n\t\t}\n\t}\n\t@media (max-width: 1000px) {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 300px 200px;\n\t\timg {\n\t\t\tobject-fit: contain;\n\t\t}\n\t\tp {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var StyledItemDetail = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var ITEM_DETAIL_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2());

var ItemDetail = function ItemDetail(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: ITEM_DETAIL_QUERY,
    variables: {
      id: props.id
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Error");
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Loading");
    var item = data.item;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledItemDetail, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.image,
      alt: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "itemData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_6__["Title"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, item.user.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, item.description))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Reviews__WEBPACK_IMPORTED_MODULE_8__["default"], {
      item: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ItemDetail);

/***/ })

})
//# sourceMappingURL=item.js.ec2806d4de02aa37c3e0.hot-update.js.map