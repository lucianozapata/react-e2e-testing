import React from "react";

function generateListItem(props, item, index) {
  return (
    <div className="mapList" id={`${index}`} key={index}>
      <div id="uniqueItemDiv">{item}</div>
      <div id="deleteDiv">x</div>
    </div>
  );
}

export function ItemView(props) {
  const [name, setName] = React.useState("");

  return (
    <div id="testDiv">
      <div></div>
      <div id="Heading">Shopping list</div>
      <form
        id="flexDiv"
        onSubmit={(e) => {
          e.preventDefault();
          props.updateList(name);
          setName("");
        }}
      >
        <div>
          <label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />{" "}
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>

      {/* The shopping list. */}
      <div id="itemDiv">
        {props.list.map((item, index) => generateListItem(props, item, index))}
      </div>
    </div>
  );
}
