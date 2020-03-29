[@react.component]
let make = (~array: array('a), ~children: 'a => React.element) => {
  <React.Fragment>
    {array
     |> Array.mapi((i, item) =>
          <React.Fragment key={i->string_of_int}>
            {children(item)}
          </React.Fragment>
        )
     |> React.array}
  </React.Fragment>;
};

[@gentype]
let default = make;