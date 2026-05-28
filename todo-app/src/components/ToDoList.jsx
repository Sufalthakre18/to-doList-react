import ToDoItem from "./ToDoItem";

function ToDoList({
    tasks,
    deleteTask,
    toggleComplete,
    editTask,
}) {
    return (
        <div className="todo-list">
            {tasks.length === 0 ? (
                <p className="empty">No tasks available</p>
            ) : (
                tasks.map((task) => (
                    <ToDoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                        editTask={editTask}
                    />
                ))
            )}

            <p className="footer">
                Total Tasks: {tasks.length}
            </p>
        </div>

    );
}

export default ToDoList;