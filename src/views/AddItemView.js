import React from "react";
const sqlite3 = require("sqlite3").verbose();

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
        {props.list.map((item, index) => {
          return (
            <div id="mapList" key={index}>
              <div id="uniqueItemDiv">{item}</div>
              <div
                onClick={() => {
                  props.removeItem(item);
                }}
                id="deleteDiv"
              >
                x
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
