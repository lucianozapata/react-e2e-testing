import React from "react";

export function ItemView(props) {
  const [name, setName] = React.useState("");
  const [found, setFound] = React.useState(false);

  return (
    <div id="testDiv">
      <div></div>
      {found && <div>You found an easter egg!</div>}

      <div id="Heading" onClick={changeColor}>
        Shopping list
      </div>
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
              id="katacodaid"
              name="inputDiv"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />{" "}
          </label>
        </div>
        <div>
          <input id="clickbutton" type="submit" />
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

  function changeColor() {
    setFound(true);
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("Heading").style.color = color;
  }
}
