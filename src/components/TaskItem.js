import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskItem = ({ task, index, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(task.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, editedContent);
    setIsEditing(false);
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task-item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <div>
              <p>{task.content}</p>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
