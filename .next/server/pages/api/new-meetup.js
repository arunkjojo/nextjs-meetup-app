/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// api/new-meetup\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    const data = req.body;\n    const {\n      title,\n      image,\n      address,\n      description\n    } = data;\n    console.log(data);\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://DevAJoin:DevAJoin2786@cluster0.slfxf.mongodb.net/meetups?retryWrites=true&w=majority\");\n    const db = client.db();\n    const meetupsCollection = db.collection('meetups');\n    const result = await meetupsCollection.insertOne(data);\n    console.log(result);\n    client.close();\n    res.status(201).json({\n      massage: 'Meetup Insterted!'\n    }); // res.status(200).json({ massage: \"Hi POST API Wornking\" });\n  } // if (req.method === 'GET') {\n  //     res.status(200).json({ massage: 'Hi GET API Wornking' });\n  // }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/OGI4NiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtYXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ2UsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzVDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCLFVBQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFqQjtBQUNBLFVBQU07QUFBRUMsV0FBRjtBQUFTQyxXQUFUO0FBQWdCQyxhQUFoQjtBQUF5QkM7QUFBekIsUUFBeUNMLElBQS9DO0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaO0FBQ0EsVUFBTVEsTUFBTSxHQUFHLE1BQU1DLHdEQUFBLENBQ2pCLG9HQURpQixDQUFyQjtBQUlBLFVBQU1DLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFQLEVBQVg7QUFFQSxVQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsU0FBZCxDQUExQjtBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNRixpQkFBaUIsQ0FBQ0csU0FBbEIsQ0FBNEJkLElBQTVCLENBQXJCO0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTSxNQUFaO0FBQ0FMLFVBQU0sQ0FBQ08sS0FBUDtBQUVBakIsT0FBRyxDQUFDa0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCLEVBZnVCLENBaUJ2QjtBQUNILEdBbkIyQyxDQW9CNUM7QUFDQTtBQUNBOztBQUNIIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGkvbmV3LW1lZXR1cFxuaW1wb3J0IHtNb25nb0NsaWVudH0gZnJvbSAnbW9uZ29kYidcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgaW1hZ2UsIGFkZHJlc3MsIGRlc2NyaXB0aW9uIH0gPSBkYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAgICAgICAgIFwibW9uZ29kYitzcnY6Ly9EZXZBSm9pbjpEZXZBSm9pbjI3ODZAY2x1c3RlcjAuc2xmeGYubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtYXNzYWdlOiAnTWVldHVwIEluc3RlcnRlZCEnIH0pO1xuXG4gICAgICAgIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWFzc2FnZTogXCJIaSBQT1NUIEFQSSBXb3Jua2luZ1wiIH0pO1xuICAgIH1cbiAgICAvLyBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAvLyAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtYXNzYWdlOiAnSGkgR0VUIEFQSSBXb3Jua2luZycgfSk7XG4gICAgLy8gfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/new-meetup.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();