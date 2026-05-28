import { useState } from "react";

function ToDoItem({
  task,
  deleteTask,
  toggleComplete,
  editTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    if (editedText.trim() === "") return;

    editTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span
          className={task.completed ? "completed" : ""}
        >
          {task.text}
        </span>
      )}

      <div className="buttons">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Undo" : "Done"}
        </button>

        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}

        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;