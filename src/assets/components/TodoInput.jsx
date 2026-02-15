import { HiPlus } from "react-icons/hi2";
import { useState } from "react";
export function TodoInput({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input-container">
      <input
        placeholder="Add Task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        className="add-button"
        onClick={() => {
          if (!inputValue) {
            return;
          }
          handleAddTodo(inputValue);
          setInputValue("");
        }}
      >
        <HiPlus color="#fff" />
      </button>
    </div>
  );
}
