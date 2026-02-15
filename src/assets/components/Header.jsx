

export function Header({todoList}) {
  
    const TodoLength = todoList.length
    const isTaskPlural = TodoLength !== 1
    const taskOrTask = isTaskPlural?'tasks':'task'
  return (
    <header>
      <h1 className="text-gradient">You Have {TodoLength} Open <span>{taskOrTask}</span> </h1>
    </header>
  );
}
