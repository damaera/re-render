'use strict';

var React = require("react");

function RenderFloat(Props) {
  var value = Props.value;
  return React.createElement(React.Fragment, {
              children: value.toString()
            });
}

var make = RenderFloat;

var $$default = RenderFloat;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
