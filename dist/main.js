/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cannon.js":
/*!*******************!*\
  !*** ./cannon.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Cannon = /*#__PURE__*/function () {\n  function Cannon() {\n    _classCallCheck(this, Cannon);\n\n    this.pos = 285;\n    this.drawCannon(this.pos);\n    this.moveCannon = this.moveCannon.bind(this);\n    window.addEventListener(\"keydown\", this.moveCannon, false);\n  }\n\n  _createClass(Cannon, [{\n    key: \"drawCannon\",\n    value: function drawCannon(pos) {\n      var canvas = document.getElementById(\"board\");\n      var ctx = canvas.getContext(\"2d\");\n      var cannon = new Image(30, 30);\n      cannon.addEventListener('load', function () {\n        ctx.drawImage(cannon, pos, 570, 30, 30);\n      }, false);\n      cannon.src = \"./src/styles/cannon.png\";\n    }\n  }, {\n    key: \"moveCannon\",\n    value: function moveCannon(e) {\n      if (e.key === \"ArrowLeft\") {\n        this.pos -= 30;\n\n        if (this.pos < 0) {\n          this.pos = this.pos % 600;\n        }\n      } else if (e.key === \"ArrowRight\") {\n        this.pos += 30;\n      }\n\n      this.eraseCannon();\n      this.drawCannon(this.pos);\n    }\n  }, {\n    key: \"eraseCannon\",\n    value: function eraseCannon() {\n      var canvas = document.getElementById(\"board\");\n      var ctx = canvas.getContext(\"2d\");\n      ctx.clearRect(0, 570, canvas.width, canvas.height);\n    }\n  }]);\n\n  return Cannon;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cannon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVhdF9ob3VuZHMvLi9jYW5ub24uanM/YzI1NiJdLCJuYW1lcyI6WyJDYW5ub24iLCJwb3MiLCJkcmF3Q2Fubm9uIiwibW92ZUNhbm5vbiIsImJpbmQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJjYW5ub24iLCJJbWFnZSIsImRyYXdJbWFnZSIsInNyYyIsImUiLCJrZXkiLCJlcmFzZUNhbm5vbiIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQU1BLE07QUFDRixvQkFBYztBQUFBOztBQUNWLFNBQUtDLEdBQUwsR0FBVyxHQUFYO0FBQ0EsU0FBS0MsVUFBTCxDQUFnQixLQUFLRCxHQUFyQjtBQUNBLFNBQUtFLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFDQUMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxLQUFLSCxVQUF4QyxFQUFvRCxLQUFwRDtBQUNIOzs7O1dBRUQsb0JBQVdGLEdBQVgsRUFBZ0I7QUFDWixVQUFNTSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFmO0FBQ0EsVUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUVBLFVBQU1DLE1BQU0sR0FBRyxJQUFJQyxLQUFKLENBQVUsRUFBVixFQUFjLEVBQWQsQ0FBZjtBQUNBRCxZQUFNLENBQUNOLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVk7QUFDeENJLFdBQUcsQ0FBQ0ksU0FBSixDQUNJRixNQURKLEVBQ2FYLEdBRGIsRUFDbUIsR0FEbkIsRUFDd0IsRUFEeEIsRUFDNEIsRUFENUI7QUFHSCxPQUpELEVBSUcsS0FKSDtBQUtBVyxZQUFNLENBQUNHLEdBQVAsR0FBYSx5QkFBYjtBQUNIOzs7V0FFRCxvQkFBV0MsQ0FBWCxFQUFjO0FBQ1YsVUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsV0FBZCxFQUEyQjtBQUN2QixhQUFLaEIsR0FBTCxJQUFZLEVBQVo7O0FBQ0EsWUFBSSxLQUFLQSxHQUFMLEdBQVcsQ0FBZixFQUFrQjtBQUNkLGVBQUtBLEdBQUwsR0FBVyxLQUFLQSxHQUFMLEdBQVcsR0FBdEI7QUFDSDtBQUNKLE9BTEQsTUFLTyxJQUFJZSxDQUFDLENBQUNDLEdBQUYsS0FBVSxZQUFkLEVBQTRCO0FBQy9CLGFBQUtoQixHQUFMLElBQVksRUFBWjtBQUNIOztBQUNELFdBQUtpQixXQUFMO0FBQ0EsV0FBS2hCLFVBQUwsQ0FBZ0IsS0FBS0QsR0FBckI7QUFDSDs7O1dBRUQsdUJBQWM7QUFDVixVQUFNTSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFmO0FBQ0EsVUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUNBRCxTQUFHLENBQUNTLFNBQUosQ0FBYyxDQUFkLEVBQWdCLEdBQWhCLEVBQW9CWixNQUFNLENBQUNhLEtBQTNCLEVBQWtDYixNQUFNLENBQUNjLE1BQXpDO0FBQ0g7Ozs7OztBQUdMLCtEQUFlckIsTUFBZiIsImZpbGUiOiIuL2Nhbm5vbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhbm5vbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9zID0gMjg1O1xuICAgICAgICB0aGlzLmRyYXdDYW5ub24odGhpcy5wb3MpO1xuICAgICAgICB0aGlzLm1vdmVDYW5ub24gPSB0aGlzLm1vdmVDYW5ub24uYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMubW92ZUNhbm5vbiwgZmFsc2UpXG4gICAgfVxuXG4gICAgZHJhd0Nhbm5vbihwb3MpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKTtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgY29uc3QgY2Fubm9uID0gbmV3IEltYWdlKDMwLCAzMCk7XG4gICAgICAgIGNhbm5vbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjYW5ub24sIChwb3MpLCA1NzAsIDMwLCAzMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBjYW5ub24uc3JjID0gXCIuL3NyYy9zdHlsZXMvY2Fubm9uLnBuZ1wiO1xuICAgIH1cblxuICAgIG1vdmVDYW5ub24oZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgICAgIHRoaXMucG9zIC09IDMwO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zID0gdGhpcy5wb3MgJSA2MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgIHRoaXMucG9zICs9IDMwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJhc2VDYW5ub24oKTtcbiAgICAgICAgdGhpcy5kcmF3Q2Fubm9uKHRoaXMucG9zKTtcbiAgICB9XG5cbiAgICBlcmFzZUNhbm5vbigpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKTtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCw1NzAsY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fubm9uOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./cannon.js\n");

/***/ }),

/***/ "./dog.js":
/*!****************!*\
  !*** ./dog.js ***!
  \****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDogs\": function() { return /* binding */ createDogs; }\n/* harmony export */ });\nfunction createDogs() {\n  var canvas = document.getElementById(\"board\");\n  var ctx = canvas.getContext(\"2d\");\n\n  _createLucy();\n\n  _createCooper(); //create cooper\n\n\n  function _createCooper() {\n    //add in an option to \n    var cooper = new Image(30, 30);\n    cooper.addEventListener('load', function () {\n      ctx.drawImage(cooper, 30, 0, 30, 30);\n    }, false);\n    cooper.src = \"./src/styles/Cooper.png\";\n  } //create lucy\n\n\n  function _createLucy() {\n    var lucy = new Image(30, 30);\n    lucy.addEventListener('load', function () {\n      ctx.drawImage(lucy, 0, 0, 30, 30);\n    }, false);\n    lucy.src = \"./src/styles/Lucy.png\";\n  }\n} // some logic could be repurposed for populating several times\n// for (let j = 240; j < 360;) {\n//     for (let i = 0; i < 600;) {\n//         ctx.beginPath();\n//         ctx.rect(i, j, 30, 30);\n//         ctx.stroke();\n//         i += 30;\n//     };\n//     j += 30;\n// };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVhdF9ob3VuZHMvLi9kb2cuanM/NTBlMyJdLCJuYW1lcyI6WyJjcmVhdGVEb2dzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJfY3JlYXRlTHVjeSIsIl9jcmVhdGVDb29wZXIiLCJjb29wZXIiLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkcmF3SW1hZ2UiLCJzcmMiLCJsdWN5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsVUFBVCxHQUFzQjtBQUN6QixNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFmO0FBQ0EsTUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjs7QUFFQUMsYUFBVzs7QUFDWEMsZUFBYSxHQUxZLENBT3pCOzs7QUFDQSxXQUFTQSxhQUFULEdBQXlCO0FBQUU7QUFDdkIsUUFBTUMsTUFBTSxHQUFHLElBQUlDLEtBQUosQ0FBVSxFQUFWLEVBQWMsRUFBZCxDQUFmO0FBQ0FELFVBQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBWTtBQUN4Q04sU0FBRyxDQUFDTyxTQUFKLENBQ0lILE1BREosRUFDWSxFQURaLEVBQ2dCLENBRGhCLEVBQ21CLEVBRG5CLEVBQ3VCLEVBRHZCO0FBR0gsS0FKRCxFQUlHLEtBSkg7QUFLQUEsVUFBTSxDQUFDSSxHQUFQLEdBQWEseUJBQWI7QUFDSCxHQWhCd0IsQ0FrQnpCOzs7QUFDQSxXQUFTTixXQUFULEdBQXVCO0FBQ25CLFFBQU1PLElBQUksR0FBRyxJQUFJSixLQUFKLENBQVUsRUFBVixFQUFjLEVBQWQsQ0FBYjtBQUNBSSxRQUFJLENBQUNILGdCQUFMLENBQXNCLE1BQXRCLEVBQThCLFlBQVk7QUFDdENOLFNBQUcsQ0FBQ08sU0FBSixDQUNJRSxJQURKLEVBQ1UsQ0FEVixFQUNhLENBRGIsRUFDZ0IsRUFEaEIsRUFDb0IsRUFEcEI7QUFHSCxLQUpELEVBSUcsS0FKSDtBQUtBQSxRQUFJLENBQUNELEdBQUwsR0FBVyx1QkFBWDtBQUVIO0FBQ0osQyxDQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vZG9nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURvZ3MoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKTtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIF9jcmVhdGVMdWN5KCk7XG4gICAgX2NyZWF0ZUNvb3BlcigpO1xuXG4gICAgLy9jcmVhdGUgY29vcGVyXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUNvb3BlcigpIHsgLy9hZGQgaW4gYW4gb3B0aW9uIHRvIFxuICAgICAgICBjb25zdCBjb29wZXIgPSBuZXcgSW1hZ2UoMzAsIDMwKTtcbiAgICAgICAgY29vcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGNvb3BlciwgMzAsIDAsIDMwLCAzMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBjb29wZXIuc3JjID0gXCIuL3NyYy9zdHlsZXMvQ29vcGVyLnBuZ1wiO1xuICAgIH1cblxuICAgIC8vY3JlYXRlIGx1Y3lcbiAgICBmdW5jdGlvbiBfY3JlYXRlTHVjeSgpIHtcbiAgICAgICAgY29uc3QgbHVjeSA9IG5ldyBJbWFnZSgzMCwgMzApO1xuICAgICAgICBsdWN5LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGx1Y3ksIDAsIDAsIDMwLCAzMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBsdWN5LnNyYyA9IFwiLi9zcmMvc3R5bGVzL0x1Y3kucG5nXCI7XG5cbiAgICB9XG59XG5cblxuXG4vLyBzb21lIGxvZ2ljIGNvdWxkIGJlIHJlcHVycG9zZWQgZm9yIHBvcHVsYXRpbmcgc2V2ZXJhbCB0aW1lc1xuLy8gZm9yIChsZXQgaiA9IDI0MDsgaiA8IDM2MDspIHtcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwMDspIHtcbi8vICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuLy8gICAgICAgICBjdHgucmVjdChpLCBqLCAzMCwgMzApO1xuLy8gICAgICAgICBjdHguc3Ryb2tlKCk7XG4vLyAgICAgICAgIGkgKz0gMzA7XG4vLyAgICAgfTtcbi8vICAgICBqICs9IDMwO1xuLy8gfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dog.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dog */ \"./dog.js\");\n/* harmony import */ var _cannon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cannon */ \"./cannon.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  var canvas = document.getElementById(\"board\");\n  var ctx = canvas.getContext(\"2d\");\n  (0,_dog__WEBPACK_IMPORTED_MODULE_0__.createDogs)();\n  var cannon = new _cannon__WEBPACK_IMPORTED_MODULE_1__.default();\n}); // window.addEventListener(\"keydown\", moveObject, false)\n// //listen for key press and invoke moveObject method\n// const cannon = createCannon(xMove);\n// let xMove = 0;\n// function moveObject(object) {\n//     if (object.keyCode === 37) {\n//         return xMove -= 2;\n//     } else if (object.keyCode === 39) {\n//         return xMove += 2;\n//     }\n// }\n// moveObject(cannon);\n// window.addEventListener(\"keydown\", moveObject, false)\n// //listen for key press and invoke moveObject method\n// let xMove = 0;\n// function moveObject(object) {\n//     if (object.keyCode === 37) {\n//         return xMove -= 2;\n//     } else if (object.keyCode === 39) {\n//         return xMove += 2;\n//     }\n// }\n// const cannon = createCannon();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVhdF9ob3VuZHMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNyZWF0ZURvZ3MiLCJjYW5ub24iLCJDYW5ub24iXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JELE1BQU1DLE1BQU0sR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCLE9BQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUFDLGtEQUFVO0FBQ1YsTUFBTUMsTUFBTSxHQUFHLElBQUlDLDRDQUFKLEVBQWY7QUFHSCxDQVJELEUsQ0FXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRG9ncyB9IGZyb20gXCIuLi9kb2dcIjtcbmltcG9ydCBDYW5ub24gZnJvbSBcIi4uL2Nhbm5vblwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKVxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjcmVhdGVEb2dzKCk7XG4gICAgY29uc3QgY2Fubm9uID0gbmV3IENhbm5vbjtcbiAgICBcblxufSlcblxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgbW92ZU9iamVjdCwgZmFsc2UpXG4vLyAvL2xpc3RlbiBmb3Iga2V5IHByZXNzIGFuZCBpbnZva2UgbW92ZU9iamVjdCBtZXRob2Rcbi8vIGNvbnN0IGNhbm5vbiA9IGNyZWF0ZUNhbm5vbih4TW92ZSk7XG4vLyBsZXQgeE1vdmUgPSAwO1xuLy8gZnVuY3Rpb24gbW92ZU9iamVjdChvYmplY3QpIHtcbi8vICAgICBpZiAob2JqZWN0LmtleUNvZGUgPT09IDM3KSB7XG4vLyAgICAgICAgIHJldHVybiB4TW92ZSAtPSAyO1xuLy8gICAgIH0gZWxzZSBpZiAob2JqZWN0LmtleUNvZGUgPT09IDM5KSB7XG4vLyAgICAgICAgIHJldHVybiB4TW92ZSArPSAyO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gbW92ZU9iamVjdChjYW5ub24pO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgbW92ZU9iamVjdCwgZmFsc2UpXG4vLyAvL2xpc3RlbiBmb3Iga2V5IHByZXNzIGFuZCBpbnZva2UgbW92ZU9iamVjdCBtZXRob2RcblxuLy8gbGV0IHhNb3ZlID0gMDtcbi8vIGZ1bmN0aW9uIG1vdmVPYmplY3Qob2JqZWN0KSB7XG4vLyAgICAgaWYgKG9iamVjdC5rZXlDb2RlID09PSAzNykge1xuLy8gICAgICAgICByZXR1cm4geE1vdmUgLT0gMjtcbi8vICAgICB9IGVsc2UgaWYgKG9iamVjdC5rZXlDb2RlID09PSAzOSkge1xuLy8gICAgICAgICByZXR1cm4geE1vdmUgKz0gMjtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGNvbnN0IGNhbm5vbiA9IGNyZWF0ZUNhbm5vbigpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVhdF9ob3VuZHMvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSIsImZpbGUiOiIuL3NyYy9pbmRleC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;