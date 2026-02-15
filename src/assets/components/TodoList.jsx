import { TodoCard } from "./TodoCard";

export function TodoList({
  todoList,
  selectedTab,
  handleDeleteTodo,
  completeTodo,
}) {
  const fileredTodoList =
    selectedTab == "All"
      ? todoList
      : selectedTab == "Completed"
        ? todoList.filter((val) => val.complete)
        : todoList.filter((val) => !val.complete);
  return (
    <>
      {fileredTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoList={todo}
            handleDeleteTodo={handleDeleteTodo}
            todoIndex={todoIndex}
            completeTodo={completeTodo}
          />
        );
      })}
    </>
  );
}
