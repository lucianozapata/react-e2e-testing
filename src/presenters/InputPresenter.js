import React from "react";
import { ItemView } from "../views/AddItemView";

export function InputPresenter() {
  // Initial List
  let initialList = ["Milk", "Chocolate"];

  /**
   * Function that adds a new item to the shopping list.
   * @param {*} newItem
   */
  function addToList(newItem) {
    const newList = theList.concat(newItem);
    setTheList(newList);
  }

  /**
   * Remove an item from the active shopping list.
   * @param {*} newItem
   */
  function removeFromList(newItem) {
    const activeList = theList.filter((value) => {
      return value !== newItem;
    });
    setTheList(activeList);
  }
  const [theList, setTheList] = React.useState(initialList);

  return (
    <ItemView
      list={theList}
      updateList={(item) => addToList(item)}
      removeItem={(item) => removeFromList(item)}
    />
  );
}
