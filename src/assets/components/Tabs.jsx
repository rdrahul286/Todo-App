export function Tabs({ todoList, selectedTab, setSelectedTab }) {
  const Tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {Tabs.map((tab, index) => {
        const numberOfTasks =
          tab === "All"
            ? todoList.length
            : tab === "Open"
              ? todoList.filter((val) => !val.complete).length
              : todoList.filter((val) => val.complete).length;

        return (
          <button
            key={index}
            className={
              "tab-button " + (selectedTab === tab ? "tab-selected" : "")
            }
            onClick={() => setSelectedTab(tab)}
          >
            <h4>
              {tab} <span>{numberOfTasks}</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
