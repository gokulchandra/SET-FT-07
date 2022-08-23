import React, { useState } from 'react';
import './App.css';
import Title from './Title';
import TaskList from './TaskList'
import TaskItem from "./TaskItem";

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, name: 'task 1', done: false },
    { id: 2, name: 'task 2', done: false },
    { id: 3, name: 'task 3', done: false },
  ]);

  const handleClick = (id) => {
    const newTasks = [...tasks];
    const indexToBeUpdated = newTasks.findIndex(task => task.id === id);
    newTasks[indexToBeUpdated].done = true;

    setTasks(newTasks);
  }


  const improvedHandleClick = function (index) {
    return function () {
      const newTasks = [...tasks];
      newTasks[index].done = true;
      setTasks(newTasks);
    }
  }

  return (
    <React.Fragment>
      <Title />
      <TaskList>
        {
          tasks.map(({ name, id, done }, index) => {
            return <TaskItem key={id} name={name} done={done} handleClick={improvedHandleClick(index)} />
          })
        }
      </TaskList>

    </React.Fragment>
  );
}

export default App;
