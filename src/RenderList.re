[@react.component]
let make = (~list, ~children) => {
  <React.Fragment>
    {list
     |> List.mapi((i, item) =>
          <React.Fragment key={i->string_of_int}>
            {children(item)}
          </React.Fragment>
        )
     |> Array.of_list
     |> React.array}
  </React.Fragment>;
};

[@gentype]
let default = make;