webpackHotUpdate("static/development/pages/sell.js",{

/***/ "./components/IsAuthenticated.js":
/*!***************************************!*\
  !*** ./components/IsAuthenticated.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Signin */ "./components/Signin.js");
var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/borrow-it/frontend/components/IsAuthenticated.js";





var IsAuthenticated = function IsAuthenticated(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _User__WEBPACK_IMPORTED_MODULE_2__["CURRENT_USER_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Loading...");

    if (!data.currentUser) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Please Sign In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }));
    }

    return props.children;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (IsAuthenticated);

/***/ }),

/***/ "./components/SellForm.js":
/*!********************************!*\
  !*** ./components/SellForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Item */ "./components/Item.js");
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Items */ "./components/Items.js");
/* harmony import */ var _IsAuthenticated__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./IsAuthenticated */ "./components/IsAuthenticated.js");











var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/borrow-it/frontend/components/SellForm.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n\tmutation CREATE_ITEM_MUTATION(\n\t\t$title: String!\n\t\t$description: String!\n\t\t$image: String!\n\t\t$maxDays: Int\n\t) {\n\t\tcreateItem(\n\t\t\ttitle: $title\n\t\t\tdescription: $description\n\t\t\timage: $image\n\t\t\tmaxDays: $maxDays\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var CREATE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_13___default()(_templateObject());

var SellForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(SellForm, _Component);

  function SellForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SellForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(SellForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      title: '',
      description: '',
      image: '',
      maxDays: 7
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(value) : value;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, val));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "uploadFile",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var files, data, res, file;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                files = e.target.files;
                data = new FormData();
                data.append('file', files[0]);
                data.append('upload_preset', 'borrowit');
                _context.next = 6;
                return fetch('https://api.cloudinary.com/v1_1/maxeulercloud/image/upload', {
                  method: 'POST',
                  body: data
                });

              case 6:
                res = _context.sent;
                _context.next = 9;
                return res.json();

              case 9:
                file = _context.sent;

                _this.setState({
                  image: file.secure_url
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SellForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_IsAuthenticated__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_12__["Mutation"], {
        mutation: CREATE_ITEM_MUTATION,
        variables: this.state,
        refetchQueries: [{
          query: _Items__WEBPACK_IMPORTED_MODULE_17__["ALL_ITEMS_QUERY"]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, function (createItem, _ref2) {
        var loading = _ref2.loading,
            error = _ref2.error;
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_16__["Title"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, "Borrow Your Stuff! \uD83D\uDE80"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_15__["default"], {
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
              var res;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      e.preventDefault();
                      _context2.next = 3;
                      return createItem();

                    case 3:
                      res = _context2.sent;
                      console.log(res);
                      next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push({
                        pathname: '/item',
                        query: {
                          id: res.data.createItem.id
                        }
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            return function (_x2) {
              return _ref3.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("fieldset", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
          htmlFor: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, "Title", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          type: "text",
          name: "title",
          placeholder: "Title",
          required: true,
          onChange: _this2.handleChange,
          value: _this2.state.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
          htmlFor: "image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, "Image", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          type: "file",
          name: "image",
          placeholder: "Upload An Image",
          required: true,
          onChange: _this2.uploadFile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }), _this2.state.image && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
          src: _this2.state.image,
          width: "200",
          alt: "Upload Preview",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
          htmlFor: "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, "Description", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("textarea", {
          name: "description",
          placeholer: "Enter a description",
          required: true,
          onChange: _this2.handleChange,
          value: _this2.state.description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
          htmlFor: "maxDays",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, "Max Days", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          type: "number",
          name: "maxDays",
          required: true,
          onChange: _this2.handleChange,
          value: _this2.state.maxDays,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, "Upload", loading ? 'ing' : ''))));
      }));
    }
  }]);

  return SellForm;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SellForm);

/***/ })

})
//# sourceMappingURL=sell.js.b43c0a94bf5694663209.hot-update.js.map