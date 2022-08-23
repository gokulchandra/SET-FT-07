import React, { useEffect, useState } from 'react';
import './App.css';
import Title from './Title';
import TaskList from './TaskList'
import TaskItem from "./TaskItem";
import NewTaskItem from './NewTaskItem';
import IncompleteBanner from './IncompleteBanner';


function App() {

  const [tasks, setTasks] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {

   setIntervalId(setInterval(() => {
      fetch('https://run.mocky.io/v3/c6db7d7c-08ec-424f-8d88-12057a9b5fe1')
      .then(res => res.json())
      .then(data => setTasks(data))
    }, 10000));


    return () => {
      clearInterval(intervalId);
    }

    
  }, []);

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

  const createTask = function (taskName) {
    const newTask = {
      id: Date.now(),
      name: taskName,
      done: false
    }

    setTasks([...tasks, newTask]);
  }

   return (
    <React.Fragment>
      <Title />
      { tasks.some(task => !task.done) && <IncompleteBanner tasks={tasks} /> }
      <TaskList>
        {
          tasks.map(({ name, id, done }, index) => {
            return <TaskItem key={id} name={name} done={done} handleClick={improvedHandleClick(index)} />
          })
        }
      </TaskList>

      <NewTaskItem createTask={createTask} />
    </React.Fragment>
  );
}

export default App;
