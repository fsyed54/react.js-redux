import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./redux/todoSlice";

function App() {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue.trim()));
      setInputValue("");
    }
  };

  const handleToggleTodo = (index) => {
    dispatch(toggleTodo(index));
  };
  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-purple-400 h-screen">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a todo item"
          className="flex-grow mr-2 px-3 py-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {todos &&
          todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center mb-2 bg-gray-100 p-2 rounded"
            >
              <span
                className={`flex-grow ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleToggleTodo(index)}
                className={`ml-2 px-2 py-1 ${
                  todo.completed ? "bg-green-500" : "bg-orange-500"
                } text-white rounded `}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="mx-4  font-bold "
                onClick={() => handleRemoveTodo(index)}
              >
                x
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
