export function TodoCard({
  todoList,
  handleDeleteTodo,
  todoIndex,
  completeTodo,
}) {
  return (
    <div className="card todo-item">
      <p>{todoList.input}</p>
      <div className="todo-buttons">
        <button
          disabled={todoList.complete}
          onClick={() => completeTodo(todoIndex)}
        >
          Done
        </button>
        <button onClick={() => handleDeleteTodo(todoIndex)}>Delete</button>
      </div>
    </div>
  );
}
