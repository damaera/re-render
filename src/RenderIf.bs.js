'use strict';

var React = require("react");

function RenderIf(Props) {
  var condition = Props.condition;
  var children = Props.children;
  return React.createElement(React.Fragment, {
              children: condition ? children : null
            });
}

var make = RenderIf;

var $$default = RenderIf;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
