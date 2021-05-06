webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\code\\Twitter\\front\\pages\\signup.js",
    _templateObject,
    _s = $RefreshSig$();










var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  color: \"red\";\n"])));
_c = ErrorMessage;

function Signup(_ref) {
  _s();

  var setIsLoggedIn = _ref.setIsLoggedIn;

  //1 - CustomHook
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      Id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(""),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      Nickname = _useInput4[0],
      onChangeNickname = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(""),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      Password = _useInput6[0],
      onChangePassword = _useInput6[1]; //2 - 일일히 만들기


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      PasswordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      PasswordError = _useState2[0],
      setPasswordError = _useState2[1];

  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setPasswordCheck(e.target.value);
    setPasswordError(e.taget.value !== Password);
  }, [Password]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      Term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      TermError = _useState4[0],
      setTermError = _useState4[1];

  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setTerm(e.taget.checked);
    setTermError(false);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (Password !== PasswordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log(Id, Nickname, Password);
  }, [Password, PasswordCheck, Term]); //3 - 폼 라이브러리 이용하기

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onFinish: onSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
            htmlFor: "user-id",
            children: "\uC544\uC774\uB514"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
            name: "user-id",
            value: Id,
            required: true,
            onChange: onChangeId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
            htmlFor: "user-nick",
            children: "\uB2C9\uB124\uC784"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
            name: "user-nickname",
            value: Nickname,
            required: true,
            onChange: onChangeNickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
            htmlFor: "user-Password",
            children: "\uD328\uC2A4\uC6CC\uB4DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
            name: "user-Password",
            value: Password,
            required: true,
            onChange: onChangePassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
            htmlFor: "user-PasswordCheck",
            children: "\uD328\uC2A4\uC6CC\uB4DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
            name: "user-PasswordCheck",
            value: PasswordCheck,
            required: true,
            onChange: onChangePasswordCheck
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this), PasswordError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ErrorMessage, {
            children: " \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
            name: "user-term",
            checked: term,
            onChange: onChangeTerm,
            children: "\uD64D\uC4F0 \uC798 \uD558\uACE0 \uC788\uB294\uC9C0 \uCCB4\uD06C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this), TermError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ErrorMessage, {
            children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 27
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          style: {
            marginTop: 10
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Button, {
            type: "primary",
            htmlType: "submit",
            children: "\uAC00\uC785\uD558\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Signup, "aGig3f4TlaCPRB+en0EK2iE3ovI=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c2 = Signup;
_components_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"].PropTypes = {
  setIsLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c, _c2;

$RefreshReg$(_c, "ErrorMessage");
$RefreshReg$(_c2, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIlNpZ251cCIsInNldElzTG9nZ2VkSW4iLCJ1c2VJbnB1dCIsIklkIiwib25DaGFuZ2VJZCIsIk5pY2tuYW1lIiwib25DaGFuZ2VOaWNrbmFtZSIsIlBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInVzZVN0YXRlIiwiUGFzc3dvcmRDaGVjayIsInNldFBhc3N3b3JkQ2hlY2siLCJQYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGFnZXQiLCJUZXJtIiwic2V0VGVybSIsIlRlcm1FcnJvciIsInNldFRlcm1FcnJvciIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJvblN1Ym1pdCIsInRlcm0iLCJjb25zb2xlIiwibG9nIiwibWFyZ2luVG9wIiwiTG9naW5Gb3JtIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9LQUFsQjtLQUFNRixZOztBQUlOLFNBQVNHLE1BQVQsT0FBbUM7QUFBQTs7QUFBQSxNQUFqQkMsYUFBaUIsUUFBakJBLGFBQWlCOztBQUNqQztBQUNBLGtCQUF5QkMsK0RBQVEsQ0FBQyxFQUFELENBQWpDO0FBQUE7QUFBQSxNQUFPQyxFQUFQO0FBQUEsTUFBV0MsVUFBWDs7QUFDQSxtQkFBcUNGLCtEQUFRLENBQUMsRUFBRCxDQUE3QztBQUFBO0FBQUEsTUFBT0csUUFBUDtBQUFBLE1BQWlCQyxnQkFBakI7O0FBQ0EsbUJBQXFDSiwrREFBUSxDQUFDLEVBQUQs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RlE5QixNO1VBRWtCRSx1RCxFQUNZQSx1RCxFQUNBQSx1RDs7O01BSjlCRixNO0FBNEZUK0IsNkRBQVMsQ0FBQ0MsU0FBVixHQUFzQjtBQUNwQi9CLGVBQWEsRUFBRStCLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEVixDQUF0QjtBQUllbEMscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmVjYzg4OTg3NGE3OTYwOTVlNWNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW5Gb3JtXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogXCJyZWRcIjtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIFNpZ251cCh7IHNldElzTG9nZ2VkSW4gfSkge1xyXG4gIC8vMSAtIEN1c3RvbUhvb2tcclxuICBjb25zdCBbSWQsIG9uQ2hhbmdlSWRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW05pY2tuYW1lLCBvbkNoYW5nZU5pY2tuYW1lXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtQYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuXHJcbiAgLy8yIC0g7J287J287Z6IIOunjOuTpOq4sFxyXG4gIGNvbnN0IFtQYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtQYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICBzZXRQYXNzd29yZEVycm9yKGUudGFnZXQudmFsdWUgIT09IFBhc3N3b3JkKTtcclxuICAgIH0sXHJcbiAgICBbUGFzc3dvcmRdXHJcbiAgKTtcclxuICBjb25zdCBbVGVybSwgc2V0VGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbVGVybUVycm9yLCBzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRlcm0gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VGVybShlLnRhZ2V0LmNoZWNrZWQpO1xyXG4gICAgc2V0VGVybUVycm9yKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoUGFzc3dvcmQgIT09IFBhc3N3b3JkQ2hlY2spIHtcclxuICAgICAgcmV0dXJuIHNldFBhc3N3b3JkRXJyb3IodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRlcm0pIHtcclxuICAgICAgcmV0dXJuIHNldFRlcm1FcnJvcih0cnVlKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKElkLCBOaWNrbmFtZSwgUGFzc3dvcmQpO1xyXG4gIH0sIFtQYXNzd29yZCwgUGFzc3dvcmRDaGVjaywgVGVybV0pO1xyXG4gIC8vMyAtIO2PvCDrnbzsnbTruIzrn6zrpqwg7J207Jqp7ZWY6riwXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItaWRcIiB2YWx1ZT17SWR9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItbmlja1wiPuuLieuEpOyehDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlci1uaWNrbmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e05pY2tuYW1lfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1QYXNzd29yZFwiPu2MqOyKpOybjOuTnDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlci1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e1Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1QYXNzd29yZENoZWNrXCI+7Yyo7Iqk7JuM65OcPC9sYWJlbD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyLVBhc3N3b3JkQ2hlY2tcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtQYXNzd29yZENoZWNrfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge1Bhc3N3b3JkRXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2U+IOu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLjwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2hlY2tib3ggbmFtZT1cInVzZXItdGVybVwiIGNoZWNrZWQ9e3Rlcm19IG9uQ2hhbmdlPXtvbkNoYW5nZVRlcm19PlxyXG4gICAgICAgICAgICAgIO2ZjeyTsCDsnpgg7ZWY6rOgIOyeiOuKlOyngCDssrTtgaxcclxuICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAge1Rlcm1FcnJvciAmJiA8RXJyb3JNZXNzYWdlPuyVveq0gOyXkCDrj5nsnZjtlZjshZTslbwg7ZWp64uI64ukPC9FcnJvck1lc3NhZ2U+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIOqwgOyehe2VmOq4sFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5Mb2dpbkZvcm0uUHJvcFR5cGVzID0ge1xyXG4gIHNldElzTG9nZ2VkSW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=