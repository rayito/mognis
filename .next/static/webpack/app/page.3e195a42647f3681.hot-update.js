"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.scss */ \"(app-pages-browser)/./app/home.scss\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Content(param) {\n    let { approach, celebration } = param;\n    if (celebration === \"familia\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"content\",\n            children: [\n                \"Nos ha dao por casarnos y \",\n                approach,\n                \" a la cenita que vamos a organazar para celebrarlo.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/edehernandez/Documents/mognis/app/page.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"content\",\n            children: [\n                \"Nos ha dao por casarnos y \",\n                approach,\n                \" al fiestote que se viene en sabe dios d\\xf3nde para celebrarlo.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/edehernandez/Documents/mognis/app/page.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this);\n    }\n}\n_c = Content;\nfunction Home() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    //const queryParameters = new URLSearchParams(window.location.search);\n    let count = 0;\n    const celebration = searchParams.get(\"celebration\");\n    const singleGender = searchParams.get(\"singlegender\") || \"F\";\n    const name1 = searchParams.get(\"name1\") || \"\";\n    if (name1 != \"\") count++;\n    const name2 = searchParams.get(\"name2\") || \"\";\n    if (name2 != \"\") count++;\n    const name3 = searchParams.get(\"name3\") || \"\";\n    if (name3 != \"\") count++;\n    const name4 = searchParams.get(\"name4\") || \"\";\n    if (name4 != \"\") count++;\n    const getSalute = ()=>{\n        const salutes = [\n            \"\",\n            \" \".concat(name1),\n            \" \".concat(name1, \" y \").concat(name2),\n            \" \".concat(name1, \", \").concat(name2, \" y \").concat(name3),\n            \" \".concat(name1, \", \").concat(name2, \", \").concat(name3, \" y \").concat(name4)\n        ];\n        return \"\\xa1Hola\".concat(salutes[count], \"!\");\n    };\n    const getApproach = ()=>{\n        let youAre;\n        let invited;\n        if (count === 1) {\n            youAre = \"est\\xe1s\";\n            invited = singleGender === \"M\" ? \"invitado\" : \"invitada\";\n        } else {\n            youAre = \"est\\xe1is\";\n            invited = \"invitadas\";\n        }\n        return \"\".concat(youAre, \" \").concat(invited);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"salute center\",\n                children: [\n                    getSalute(),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/edehernandez/Documents/mognis/app/page.js\",\n                        lineNumber: 64,\n                        columnNumber: 23\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/edehernandez/Documents/mognis/app/page.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                approach: getApproach(),\n                celebration: celebration\n            }, void 0, false, {\n                fileName: \"/Users/edehernandez/Documents/mognis/app/page.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                    className: \"map\",\n                    src: \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2098.511041693763!2d-3.176546502468392!3d37.364052801021806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6e2c1f335fae4f%3A0x9d6ce650a994a5c0!2sCuevas%20La%20Chumbera!5e1!3m2!1ses!2ses!4v1713879856018!5m2!1ses!2ses\"\n                }, void 0, false, {\n                    fileName: \"/Users/edehernandez/Documents/mognis/app/page.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/edehernandez/Documents/mognis/app/page.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/edehernandez/Documents/mognis/app/page.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"a+DZx9DY26Zf8FVy1bxe3vp9l1w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Content\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVxQjtBQUM0QjtBQUVqRCxTQUFTQyxRQUFRLEtBQXlCO1FBQXpCLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFLEdBQXpCO0lBQ2YsSUFBSUEsZ0JBQWdCLFdBQVc7UUFDN0IscUJBQ0UsOERBQUNDO1lBQUlDLFdBQVU7O2dCQUFVO2dCQUNJSDtnQkFBUzs7Ozs7OztJQUcxQyxPQUFPO1FBQ0wscUJBQ0UsOERBQUNFO1lBQUlDLFdBQVU7O2dCQUFVO2dCQUNJSDtnQkFBUzs7Ozs7OztJQUcxQztBQUNGO0tBZFNEO0FBZ0JNLFNBQVNLOztJQUN0QixNQUFNQyxlQUFlUCxnRUFBZUE7SUFDcEMsc0VBQXNFO0lBQ3RFLElBQUlRLFFBQVE7SUFDWixNQUFNTCxjQUFjSSxhQUFhRSxHQUFHLENBQUM7SUFDckMsTUFBTUMsZUFBZUgsYUFBYUUsR0FBRyxDQUFDLG1CQUFtQjtJQUN6RCxNQUFNRSxRQUFRSixhQUFhRSxHQUFHLENBQUMsWUFBWTtJQUMzQyxJQUFJRSxTQUFTLElBQUlIO0lBQ2pCLE1BQU1JLFFBQVFMLGFBQWFFLEdBQUcsQ0FBQyxZQUFZO0lBQzNDLElBQUlHLFNBQVMsSUFBSUo7SUFDakIsTUFBTUssUUFBUU4sYUFBYUUsR0FBRyxDQUFDLFlBQVk7SUFDM0MsSUFBSUksU0FBUyxJQUFJTDtJQUNqQixNQUFNTSxRQUFRUCxhQUFhRSxHQUFHLENBQUMsWUFBWTtJQUMzQyxJQUFJSyxTQUFTLElBQUlOO0lBRWpCLE1BQU1PLFlBQVk7UUFDaEIsTUFBTUMsVUFBVTtZQUNkO1lBQ0MsSUFBUyxPQUFOTDtZQUNILElBQWNDLE9BQVhELE9BQU0sT0FBVyxPQUFOQztZQUNkLElBQWFBLE9BQVZELE9BQU0sTUFBZUUsT0FBWEQsT0FBTSxPQUFXLE9BQU5DO1lBQ3hCLElBQWFELE9BQVZELE9BQU0sTUFBY0UsT0FBVkQsT0FBTSxNQUFlRSxPQUFYRCxPQUFNLE9BQVcsT0FBTkM7U0FDcEM7UUFDRCxPQUFPLFdBQXVCLE9BQWZFLE9BQU8sQ0FBQ1IsTUFBTSxFQUFDO0lBQ2hDO0lBRUEsTUFBTVMsY0FBYztRQUNsQixJQUFJQztRQUNKLElBQUlDO1FBQ0osSUFBSVgsVUFBVSxHQUFHO1lBQ2ZVLFNBQVM7WUFDVEMsVUFBVVQsaUJBQWlCLE1BQU0sYUFBYTtRQUNoRCxPQUFPO1lBQ0xRLFNBQVM7WUFDVEMsVUFBVTtRQUNaO1FBQ0EsT0FBTyxHQUFhQSxPQUFWRCxRQUFPLEtBQVcsT0FBUkM7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDaEI7Z0JBQUlDLFdBQVU7O29CQUNaVTtvQkFBWTtrQ0FBQyw4REFBQ007Ozs7Ozs7Ozs7OzBCQUVqQiw4REFBQ3BCO2dCQUNDQyxVQUFVZTtnQkFDVmQsYUFBYUE7Ozs7OzswQkFFZiw4REFBQ0M7MEJBQ0MsNEVBQUNrQjtvQkFBT2pCLFdBQVU7b0JBQU1rQixLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlwQztHQXJEd0JqQjs7UUFDRE4sNERBQWVBOzs7TUFEZE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0ICcuL2hvbWUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5cbmZ1bmN0aW9uIENvbnRlbnQoeyBhcHByb2FjaCwgY2VsZWJyYXRpb24gfSkge1xuICBpZiAoY2VsZWJyYXRpb24gPT09IFwiZmFtaWxpYVwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgTm9zIGhhIGRhbyBwb3IgY2FzYXJub3MgeSB7YXBwcm9hY2h9IGEgbGEgY2VuaXRhIHF1ZSB2YW1vcyBhIG9yZ2FuYXphciBwYXJhIGNlbGVicmFybG8uIFxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICBOb3MgaGEgZGFvIHBvciBjYXNhcm5vcyB5IHthcHByb2FjaH0gYWwgZmllc3RvdGUgcXVlIHNlIHZpZW5lIGVuIHNhYmUgZGlvcyBkw7NuZGUgcGFyYSBjZWxlYnJhcmxvLlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKVxuICAvL2NvbnN0IHF1ZXJ5UGFyYW1ldGVycyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIGxldCBjb3VudCA9IDA7XG4gIGNvbnN0IGNlbGVicmF0aW9uID0gc2VhcmNoUGFyYW1zLmdldCgnY2VsZWJyYXRpb24nKTtcbiAgY29uc3Qgc2luZ2xlR2VuZGVyID0gc2VhcmNoUGFyYW1zLmdldCgnc2luZ2xlZ2VuZGVyJykgfHwgJ0YnO1xuICBjb25zdCBuYW1lMSA9IHNlYXJjaFBhcmFtcy5nZXQoJ25hbWUxJykgfHwgJyc7XG4gIGlmIChuYW1lMSAhPSAnJykgY291bnQrKztcbiAgY29uc3QgbmFtZTIgPSBzZWFyY2hQYXJhbXMuZ2V0KCduYW1lMicpIHx8ICcnO1xuICBpZiAobmFtZTIgIT0gJycpIGNvdW50Kys7XG4gIGNvbnN0IG5hbWUzID0gc2VhcmNoUGFyYW1zLmdldCgnbmFtZTMnKSB8fCAnJztcbiAgaWYgKG5hbWUzICE9ICcnKSBjb3VudCsrO1xuICBjb25zdCBuYW1lNCA9IHNlYXJjaFBhcmFtcy5nZXQoJ25hbWU0JykgfHwgJyc7XG4gIGlmIChuYW1lNCAhPSAnJykgY291bnQrKztcblxuICBjb25zdCBnZXRTYWx1dGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2FsdXRlcyA9IFtcbiAgICAgICcnLFxuICAgICAgYCAke25hbWUxfWAsXG4gICAgICBgICR7bmFtZTF9IHkgJHtuYW1lMn1gLFxuICAgICAgYCAke25hbWUxfSwgJHtuYW1lMn0geSAke25hbWUzfWAsXG4gICAgICBgICR7bmFtZTF9LCAke25hbWUyfSwgJHtuYW1lM30geSAke25hbWU0fWAsXG4gICAgXTtcbiAgICByZXR1cm4gYMKhSG9sYSR7c2FsdXRlc1tjb3VudF19IWA7XG4gIH1cblxuICBjb25zdCBnZXRBcHByb2FjaCA9ICgpID0+IHtcbiAgICBsZXQgeW91QXJlO1xuICAgIGxldCBpbnZpdGVkOyBcbiAgICBpZiAoY291bnQgPT09IDEpIHtcbiAgICAgIHlvdUFyZSA9ICdlc3TDoXMnO1xuICAgICAgaW52aXRlZCA9IHNpbmdsZUdlbmRlciA9PT0gJ00nID8gJ2ludml0YWRvJyA6ICdpbnZpdGFkYSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHlvdUFyZSA9ICdlc3TDoWlzJztcbiAgICAgIGludml0ZWQgPSAnaW52aXRhZGFzJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3lvdUFyZX0gJHtpbnZpdGVkfWA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NhbHV0ZSBjZW50ZXInPlxuICAgICAgICB7Z2V0U2FsdXRlKCl9IDxicj48L2JyPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGVudFxuICAgICAgICBhcHByb2FjaD17Z2V0QXBwcm9hY2goKX1cbiAgICAgICAgY2VsZWJyYXRpb249e2NlbGVicmF0aW9ufVxuICAgICAgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPSdtYXAnIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDIwOTguNTExMDQxNjkzNzYzITJkLTMuMTc2NTQ2NTAyNDY4MzkyITNkMzcuMzY0MDUyODAxMDIxODA2ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHhkNmUyYzFmMzM1ZmFlNGYlM0EweDlkNmNlNjUwYTk5NGE1YzAhMnNDdWV2YXMlMjBMYSUyMENodW1iZXJhITVlMSEzbTIhMXNlcyEyc2VzITR2MTcxMzg3OTg1NjAxOCE1bTIhMXNlcyEyc2VzXCI+PC9pZnJhbWU+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwiQ29udGVudCIsImFwcHJvYWNoIiwiY2VsZWJyYXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJIb21lIiwic2VhcmNoUGFyYW1zIiwiY291bnQiLCJnZXQiLCJzaW5nbGVHZW5kZXIiLCJuYW1lMSIsIm5hbWUyIiwibmFtZTMiLCJuYW1lNCIsImdldFNhbHV0ZSIsInNhbHV0ZXMiLCJnZXRBcHByb2FjaCIsInlvdUFyZSIsImludml0ZWQiLCJtYWluIiwiYnIiLCJpZnJhbWUiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});