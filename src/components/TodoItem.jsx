import React, { useState } from "react";

function TodoItem(props) {
  const [itemState, setItemState] = useState({
    todoItem: props.item,
    isCrossed: false,
  });

  function onClickItem(event) {
    console.log(event.target);
    setItemState((prevState) => {
      return { ...prevState, isCrossed: !prevState.isCrossed };
    });
  }

  return (
    <li
      onClick={onClickItem}
      style={
        itemState.isCrossed
          ? { textDecoration: "line-through" }
          : { textDecoration: "none" }
      }
    >
      {itemState.todoItem}
    </li>
  );
}

export default TodoItem;
