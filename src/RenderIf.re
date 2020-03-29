[@react.component]
let make = (~condition, ~children) => {
  <React.Fragment> {condition ? children : React.null} </React.Fragment>;
};

[@gentype]
let default = make;