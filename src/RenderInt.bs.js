'use strict';

var React = require("react");

function RenderInt(Props) {
  var value = Props.value;
  return React.createElement(React.Fragment, {
              children: String(value)
            });
}

var make = RenderInt;

var $$default = RenderInt;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
