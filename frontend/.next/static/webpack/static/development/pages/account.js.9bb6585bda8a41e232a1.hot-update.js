webpackHotUpdate("static/development/pages/account.js",{

/***/ "./components/Account.js":
/*!*******************************!*\
  !*** ./components/Account.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Item */ "./components/Item.js");
/* harmony import */ var _Reviews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Reviews */ "./components/Reviews.js");
/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Signup */ "./components/Signup.js");
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Items */ "./components/Items.js");
/* harmony import */ var _UserStats__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./UserStats */ "./components/UserStats.js");






var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/borrow-it/frontend/components/Account.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n\tquery ITEMS_FOR_USER_QUERY {\n\t\tcurrentUserItems {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\timage\n\t\t\tmaxDays\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var ITEMS_FOR_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

var Account =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Account, _Component);

  function Account() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Account);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Account).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Account, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, function (_ref) {
        var currentUser = _ref.data.currentUser;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Query"], {
          query: ITEMS_FOR_USER_QUERY,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, function (_ref2) {
          var data = _ref2.data,
              loading = _ref2.loading,
              error = _ref2.error;
          console.log(data);
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_10__["Title"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, currentUser.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_UserStats__WEBPACK_IMPORTED_MODULE_14__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Items__WEBPACK_IMPORTED_MODULE_13__["ItemList"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, data.currentUserItems.map(function (item) {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_10__["default"], {
              key: item.id,
              item: item,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            });
          })));
        });
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Signup__WEBPACK_IMPORTED_MODULE_12__["Footnote"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Sign Out \uD83D\uDC4B\uD83C\uDFFC"))));
    }
  }]);

  return Account;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ })

})
//# sourceMappingURL=account.js.9bb6585bda8a41e232a1.hot-update.js.map