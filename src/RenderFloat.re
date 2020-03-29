[@react.component]
let make = (~value: float) => {
  <React.Fragment> {value->Js.Float.toString->React.string} </React.Fragment>;
};

[@gentype]
let default = make;