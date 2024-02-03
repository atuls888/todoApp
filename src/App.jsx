import { useState } from "react";
import Todo from "./component/Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/todoSlice";

function App() {
  // console.log('render')
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInput("");
    if (input == "") {
      alert("No Input Found");
      return;
    }
    dispatch(addTodo(input));
  }

  const arr = useSelector((state) => state.todos);

  return (
    <>
      <div id="mainContainer">
        <h1>Todo App</h1>
        <form id="inputContainer" onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleChange} />
          <button type="submit">Add Todo</button>
        </form>

        <div id="listContainer">
          <div id="list">
            {arr.map((todo) => {
              return <Todo todo={todo} key={todo.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
