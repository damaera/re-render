'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function RenderList(Props) {
  var list = Props.list;
  var children = Props.children;
  return React.createElement(React.Fragment, {
              children: $$Array.of_list(List.mapi((function (i, item) {
                          return React.createElement(React.Fragment, {
                                      children: Curry._1(children, item),
                                      key: String(i)
                                    });
                        }), list))
            });
}

var make = RenderList;

var $$default = RenderList;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
