import { Header } from "./assets/components/Header";
import { Tabs } from "./assets/components/Tabs";
import { TodoInput } from "./assets/components/TodoInput";
import { TodoList } from "./assets/components/TodoList";
import { useState, useEffect,  } from "react";
function App() {
  //   const todos = [
  //   {
  //     input: "Finish React todo UI",
  //     complete: false
  //   },
  //   {
  //     input: "Push code to GitHub",
  //     complete: true
  //   },
  //   {
  //     input: "Fix Socket.IO real-time sync",
  //     complete: false
  //   },
  //   {
  //     input: "Write backend API documentation",
  //     complete: true
  //   },
  //   {
  //     input: "Test app on mobile browser",
  //     complete: false
  //   }
  // ];
  const [todos, setTodos] = useState([
    {
      input: "Finish React todo UI",
      complete: false,
    },
  ]);
  const [selectedTab, setSelectedTab] = useState("All");

  function handleSaveTodo(currentTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodos }));
  }
  function handleAddTodo(newTodo) {
    const newtodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newtodoList);
    handleSaveTodo(newtodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveTodo(newTodoList);
  }
  function completeTodo(index) {
    const newTodoList = [...todos];

    const completedTodo = {
      ...newTodoList[index],
      complete: true,
    };

    newTodoList[index] = completedTodo;

    setTodos(newTodoList);
    handleSaveTodo(newTodoList);
  }
  useEffect(() => {
    const storedData = localStorage.getItem("todo-app");

    if (!storedData) return;

    try {
      const db = JSON.parse(storedData);
      setTodos(db?.todos || []);
    } catch (error) {
      console.error("Invalid data in localStorage:", error);
    }
  }, []);

  return (
    <>
      <Header todoList={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todoList={todos}
      />
      <TodoList
        todoList={todos}
        selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        completeTodo={completeTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
