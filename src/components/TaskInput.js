import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() === '') return;
    addTask(inputValue);
    setInputValue('');
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
