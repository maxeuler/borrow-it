webpackHotUpdate("static/development/pages/account.js",{

/***/ "./components/Signin.js":
/*!******************************!*\
  !*** ./components/Signin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Item */ "./components/Item.js");
/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Signup */ "./components/Signup.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./User */ "./components/User.js");










var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/borrow-it/frontend/components/Signin.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n\tmutation SIGNIN_MUTATION($email: String!, $password: String!) {\n\t\tsignin(email: $email, password: $password) {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n\ttext-decoration: none;\n\tcolor: ", ";\n\tcursor: pointer;\n\tmargin: 0;\n\tfont-size: 1.2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var StyledSmallLink = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].a(_templateObject(), function (props) {
  return props.theme.black;
});
var SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_15___default()(_templateObject2());

var Signin =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Signin, _Component);

  function Signin() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Signin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Signin)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      email: '',
      password: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChange", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, e.target.name, e.target.value));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Signin, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_14__["Mutation"], {
        mutation: SIGNIN_MUTATION,
        variables: this.state,
        refetchQueries: [{
          query: _User__WEBPACK_IMPORTED_MODULE_19__["CURRENT_USER_QUERY"]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, function (signin, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_17__["Title"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "Sign in my friend \uD83D\uDE4C\uD83C\uDFFC"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_16__["default"], {
          method: "POST",
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              var res;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();
                      _context.next = 3;
                      return signin();

                    case 3:
                      res = _context.sent;
                      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push({
                        pathname: '/'
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("fieldset", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, "Email", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
          type: "email",
          placeholder: "Email",
          name: "email",
          required: true,
          onChange: _this2.onChange,
          value: _this2.state.email,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
          htmlFor: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, "Password", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
          type: "password",
          placeholder: "Password",
          name: "password",
          required: true,
          onChange: _this2.onChange,
          value: _this2.state.password,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
          disabled: loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, "Sign In")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledSmallLink, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "Forgot password? \uD83D\uDE2E"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Signup__WEBPACK_IMPORTED_MODULE_18__["Footnote"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
          onClick: _this2.props.toggleHaveAccount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "No part of the community? \uD83D\uDC49\uD83C\uDFFC", ' ', react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, "Sign Up"))));
      });
    }
  }]);

  return Signin;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Signin);

/***/ })

})
//# sourceMappingURL=account.js.b6fb6214a1477ee88ed1.hot-update.js.map