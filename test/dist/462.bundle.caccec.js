"use strict";
(self["webpackChunk_q_webpack_upload_plugin"] = self["webpackChunk_q_webpack_upload_plugin"] || []).push([[462],{

/***/ 462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Topics)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(897);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(837);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);


function Topics() {
  let match = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .useRouteMatch */ .$B)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Topics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU, {
    to: `${match.url}/components`
  }, "Components")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU, {
    to: `${match.url}/props-v-state`
  }, "Props v. State"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .Switch */ .rs, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .Route */ .AW, {
    path: `${match.path}/:topicId`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Topic, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .Route */ .AW, {
    path: match.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Please select a topic."))));
}

function Topic() {
  let {
    topicId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .useParams */ .UO)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Requested topic ID: ", topicId);
}

/***/ })

}]);