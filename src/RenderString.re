[@react.component]
let make = (~value) => {
  <React.Fragment> value->React.string </React.Fragment>;
};

[@gentype]
let default = make;