import React from 'react';
import TaskItem from './TaskItem';
import { Droppable } from 'react-beautiful-dnd';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <Droppable droppableId="tasks">
      {(provided) => (
        <div className="task-list" {...provided.droppableProps} ref={provided.innerRef}>
          {tasks.map((task, index) => (
            <TaskItem
              key={task.id}
              task={task}
              index={index}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
