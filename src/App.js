import React, { useState, useRef } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/actions/addtodo";
import { removetodo } from "./redux/actions/removetodo";

function App() {
  const entered_todo = useRef(null);
  const todoItem = useRef(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handle_todoAdd = (e) => {
    e.preventDefault();
    const todo = entered_todo.current.value;
    console.log(todo);
    dispatch(
      addTodo({
        todo,
        id: uuid(),
      })
    );
  };

  const handleAllDone = (e) => {
    e.preventDefault();
    const res = e.currentTarget.id;
    const index = todos.find((obj) => obj.id === res);
    console.log(index);
    dispatch(
      removetodo({
        index: index,
      })
    );
    /**
     * send to remove todo
     */
  };

  function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  return (
    <div className="content">
      <div className="header">
        <h1>Got something in mind?</h1>
        <label>Enter your todo!</label>
        <div className="todo-input">
          <input type="text" placeholder="Your Todo" ref={entered_todo} />{" "}
          <br />
          <button onClick={handle_todoAdd}>
            <strong>Drop it!</strong>
          </button>
        </div>
      </div>

      <div className="todo-content">
        {todos.map((t) => (
          <div className="todo" ref={todoItem}>
            <h1>{t.todo}</h1>
            <div className="control">
              <button
                style={{ background: "red" }}
                onClick={handleAllDone}
                id={t.id}
                accessKey={t.id}
              >
                <strong>All done!</strong>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
