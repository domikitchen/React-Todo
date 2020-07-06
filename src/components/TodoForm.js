import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    changes = evt => {
        this.setState({
            task: evt.target.value
        })
    }

    submit = evt => {
        evt.preventDefault();
        this.props.addTask(this.state.task);
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.submit}>
                    <input
                        type = 'text'
                        name = 'task'
                        value = {this.state.task}
                        onChange = {this.changes}
                    />
                    <button>New Task</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;