import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import TodoItem from "./TodoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function onClickItem(id) {
    console.log("onClickItem(), id=" + id);

    //remove item with given id (index)
    setItems((prevItems) => {
      return prevItems.filter((element, index) => index !== id);
    });
  }

  // const uuid = uuidv4();

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, id) => (
            <TodoItem key={id} id={id} item={todoItem} onCheck={onClickItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
