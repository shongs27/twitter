webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\code\\Twitter\\front\\components\\FollowList.js";






function FollowList(_ref) {
  var _this = this;

  var header = _ref.header,
      data = _ref.data;
  return (
    /*#__PURE__*/
    // 최적화 해줘야겠네
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
      style: {
        marginBottom: 20
      },
      grid: {
        gutter: 4,
        xs: 2,
        md: 3
      },
      size: "small",
      header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: header
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 15
      }, this),
      loadMore: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        style: {
          textAlign: "center",
          margin: "10px 0"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          children: "\uB354\uBCF4\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this),
      bordered: true // dataSource를 renderItem에서 하나씩
      ,
      dataSource: data,
      renderItem: function renderItem(item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
          style: {
            marginTop: 20
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
            actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["StopOutlined"], {}, "stop", false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 27
            }, _this)],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
              description: item.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, this)
  );
}

_c = FollowList;
FollowList.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

var _c;

$RefreshReg$(_c, "FollowList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwibWFyZ2luQm90dG9tIiwiZ3V0dGVyIiwieHMiLCJtZCIsInRleHRBbGlnbiIsIm1hcmdpbiIsIml0ZW0iLCJtYXJnaW5Ub3AiLCJuaWNrbmFtZSIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0EsVUFBVCxPQUFzQztBQUFBOztBQUFBLE1BQWhCQyxNQUFnQixRQUFoQkEsTUFBZ0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDcEM7QUFBQTtBQUNFO0FBQ0EseUVBQUMseUNBQUQ7QUFDRSxXQUFLLEVBQUU7QUFBRUMsb0JBQVksRUFBRTtBQUFoQixPQURUO0FBRUUsVUFBSSxFQUFFO0FBQUVDLGNBQU0sRUFBRSxDQUFWO0FBQWFDLFVBQUUsRUFBRSxDQUFqQjtBQUFvQkMsVUFBRSxFQUFFO0FBQXhCLE9BRlI7QUFHRSxVQUFJLEVBQUMsT0FIUDtBQUlFLFlBQU0sZUFBRTtBQUFBLGtCQUFNTDtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKVjtBQUtFLGNBQVEsZUFDTjtBQUFLLGFBQUssRUFBRTtBQUFFTSxtQkFBUyxFQUFFLFFBQWI7QUFBdUJDLGdCQUFNLEVBQUU7QUFBL0IsU0FBWjtBQUFBLCtCQUNFLHFFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KO0FBVUUsY0FBUSxNQVZWLENBV0U7QUFYRjtBQVlFLGdCQUFVLEVBQUVOLElBWmQ7QUFhRSxnQkFBVSxFQUFFLG9CQUFDTyxJQUFEO0FBQUEsNEJBQ1YscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsZUFBSyxFQUFFO0FBQUVDLHFCQUFTLEVBQUU7QUFBYixXQUFsQjtBQUFBLGlDQUNFLHFFQUFDLHlDQUFEO0FBQU0sbUJBQU8sRUFBRSxjQUFDLHFFQUFDLDhEQUFELE1BQWtCLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUQsQ0FBZjtBQUFBLG1DQUNFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLHlCQUFXLEVBQUVELElBQUksQ0FBQ0U7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUE7QUFiZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUF3QkQ7O0tBekJRWCxVO0FBMkJUQSxVQUFVLENBQUNZLFNBQVgsR0FBdUIsRUFBdkI7QUFFZVoseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS44YzVhZGRhY2NlOWZlNmQ3MWE0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBMaXN0LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBTdG9wT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuZnVuY3Rpb24gRm9sbG93TGlzdCh7IGhlYWRlciwgZGF0YSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIOy1nOygge2ZlCDtlbTspJjslbzqsqDrhKRcclxuICAgIDxMaXN0XHJcbiAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgZ3JpZD17eyBndXR0ZXI6IDQsIHhzOiAyLCBtZDogMyB9fVxyXG4gICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICBoZWFkZXI9ezxkaXY+e2hlYWRlcn08L2Rpdj59XHJcbiAgICAgIGxvYWRNb3JlPXtcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcIjEwcHggMFwiIH19PlxyXG4gICAgICAgICAgPEJ1dHRvbj7rjZTrs7TquLA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgICBib3JkZXJlZFxyXG4gICAgICAvLyBkYXRhU291cmNl66W8IHJlbmRlckl0ZW3sl5DshJwg7ZWY64KY7JSpXHJcbiAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgICAgPENhcmQgYWN0aW9ucz17WzxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiIC8+XX0+XHJcbiAgICAgICAgICAgIDxDYXJkLk1ldGEgZGVzY3JpcHRpb249e2l0ZW0ubmlja25hbWV9IC8+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICl9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9