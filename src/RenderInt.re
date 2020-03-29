[@react.component]
let make = (~value: int) => {
  <React.Fragment> {value->string_of_int->React.string} </React.Fragment>;
};

[@gentype]
let default = make;