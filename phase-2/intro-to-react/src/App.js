import React from 'react';
import './App.css';
import Title from './Title';
import TaskList from './TaskList'
import TaskItem from "./TaskItem";

const tasks = [
  { id: 1, name: 'task 1' },
  { id: 2, name: 'task 2' },
  { id: 3, name: 'task 3' },
]

function App() {
  return (
    <React.Fragment>
      <Title />
      <TaskList>
        {
          tasks.map(({ name, id }) => {
            return <TaskItem key={id} name={name} />
          })
        }
      </TaskList>

    </React.Fragment>
  );
}

export default App;
