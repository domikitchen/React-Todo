import React from 'react';

const Todo = props => {
    return (
        <div onClick = {() => props.toggleTask(props.tasks.id)} className={`task${props.tasks.completed ? " completed" : ""}`}>
            <p>{props.tasks.task}</p>
        </div>
    );
}

export default Todo;