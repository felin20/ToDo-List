import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: `task-${tasks.length + 1}`, content: task }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newContent) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, content: newContent } : task))
    );
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedTasks = Array.from(tasks);
    const [removed] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, removed);
    setTasks(reorderedTasks);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TaskInput addTask={addTask} />
      <DragDropContext onDragEnd={onDragEnd}>
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </DragDropContext>
    </div>
  );
};

export default App;
