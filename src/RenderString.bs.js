'use strict';

var React = require("react");

function RenderString(Props) {
  var value = Props.value;
  return React.createElement(React.Fragment, {
              children: value
            });
}

var make = RenderString;

var $$default = RenderString;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
