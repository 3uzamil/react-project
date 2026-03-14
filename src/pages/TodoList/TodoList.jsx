import React, { useState } from "react";
import "./TodoList.css";
import Header from "../../components/Header";

export default function TodoList() {
  let [todoItems, setTodoItems] = useState([]);
  let saveTodo = (event) => {
    event.preventDefault();
    let inputValue = event.target.todoInput;
    if (inputValue.value != "") {
      if (!todoItems.includes(inputValue.value)) {
        let finalTodo = [...todoItems, inputValue.value];
        setTodoItems(finalTodo);
        inputValue.value = "";
      } else {
        alert("Todo already exist in list.");
      }
    }
    else{
        alert("Todo is empty");
    }
  };
  let todoContext = todoItems.map((item, index) => {
    return <TodoHandle todoItems={item} key={index} />;
  });
  return (
    <>
    <Header pageName={"Todo List"} />
    <div>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <form onSubmit={saveTodo} className="todoForm">
        <input type="text" name="todoInput" />
        <button type="submit">Save</button>
      </form>
      <div className="contextCont">
        <ul>{todoContext != undefined ? todoContext : ""}</ul>
      </div>
    </div>
    </>
  );
}

function TodoHandle({ todoItems }) {
  return <li>{todoItems}</li>;
}
