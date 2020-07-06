// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo.js';

const TodoList = props => {
    return (
        <div>
            {
                props.todo.map(tasks => (
                    <Todo toggleTask = {props.toggleTask} key = {tasks.id} tasks = {tasks} />
                ))
            }
            <button onClick = {props.removeTask} >Clear Completed</button>
        </div>
    );
}

export default TodoList;