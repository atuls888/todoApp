import { useState } from "react";
import Todo from "./component/Todo";

function App() {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInput("");

    setArr((prev) => [input, ...prev]);
  }

  function handleDelete(id) {
    // console.log(todo,id)
    setArr((prev) => {
      return prev.filter((todo, index) => {
        return id != index;
      });
    });
  }

  function handleEdit(newTodo, id) {
    setArr((prev) => {
      return prev.map((todo, index) =>
        id === index ? (prev[id] = newTodo) : todo
      );
    });
  }

  //  console.log(arr);

  return (
    <>
      <form id="inputContainer" onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      <div id="listContainer">
        <div id="list">
          {arr.map((todo, index) => {
            return (
              <Todo
                todo={todo}
                key={index}
                handleDelete={handleDelete}
                id={index}
                handleEdit={handleEdit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
