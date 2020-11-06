import React from "react";

function TodoItem(props) {
  //return <li onClick={props.onCheck}>{props.item}</li>;
  return (
    <li
      onClick={() => {
        props.onCheck(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default TodoItem;
