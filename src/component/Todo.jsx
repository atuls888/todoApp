import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../store/todoSlice";

function Todo({ todo }) {
  const [disabled, setdisabled] = useState(true);
  const [updatedTodo, setUpdatedTodo] = useState(todo.text);
  const [buttonText, setButtonText] = useState("Edit");

  function handleChange(e) {
    setUpdatedTodo(e.target.value);
  }

  const dispatch = useDispatch();

  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input disabled={disabled} value={updatedTodo} onChange={handleChange} />
      <button
        onClick={() => {
          if (!disabled) {
            if (updatedTodo !== todo.text) {
              dispatch(updateTodo({ updatedTodo: updatedTodo, id: todo.id }));
            }
            setdisabled(true);
            setButtonText("Edit");
          } else {
            setdisabled(false);
            setButtonText("Save");
          }
        }}
        type="button"
        style={{ cursor: "pointer", margin: "10px" }}
      >
        {buttonText}
      </button>

      <button
        onClick={() => {
          dispatch(deleteTodo(todo.id));
        }}
        type="button"
        style={{ cursor: "pointer" }}
      >
        Delete
      </button>
    </span>
  );
}

export default Todo;
