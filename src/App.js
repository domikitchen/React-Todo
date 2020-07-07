import React from 'react';

import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import './style.css';

const toDo = [
  {
    task: 'Organize Garage',
    id: 123,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1234,
    completed: false
  },
  {
    task: 'Take Out Garbage',
    id: 1230,
    completed: false
  },
  {
    task: 'Call Dentist',
    id: 1295,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDo: toDo
    }
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: (Math.floor(Math.random() * 100000)),
      completed: false
    };
    this.setState({
      toDo: [...this.state.toDo, newTask]
    });
  }

  toggleTask = taskId => {
    this.setState({
      toDo: this.state.toDo.map(tasks => {
        if(tasks.id === taskId){
          return {
            ...tasks,
            completed: !tasks.completed
          };
        }
        else {
          return tasks;
        }
      })
    });
  }

  removeTask = () => {
    console.log(this.state.toDo);
    this.setState({
      toDo: this.state.toDo.filter((comp) => {
        if(comp.completed === !false){
          console.log(comp)
        }
        return (comp.completed === false);
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask = {this.addTask} />
        <TodoList toggleTask = {this.toggleTask} todo = {this.state.toDo} removeTask = {this.removeTask} />
      </div>
    );
  }
}

export default App;
