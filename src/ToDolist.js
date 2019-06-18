import React, {Component} from 'react'

class ToDolist extends Component {
    constructor() {
        super();
        this.state = {taskTitle: "", taskDescription: "", taskStatus: ""};
        this.taskChange = this.taskChange.bind(this);
    }

    taskChange = e => this.setState({taskTitle: e.target.value});

    formSubmit = e => {
        e.preventDefault();
        fetch('https://localhost:44337/api/Task', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "taskTitle": this.state.taskTitle,
                "taskDescription": this.state.taskDescription,
                "taskStatus": this.state.taskStatus
            })
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.formSubmit}>
                        <div className="divstyl"><input placeholder="Task" name="task" value={this.state.taskTitle}
                                                        onChange={this.taskChange}/></div>
                        <div className="divstyl"><input placeholder="Description" name="description"
                                                        value={this.state.taskDescription}
                                                        onChange={e => {
                                                            this.setState({taskDescription: e.target.value})
                                                        }}/></div>
                        <select id="selectAddID" className="selectAdd form-control" name="select" value={this.state.taskStatus}
                                onChange={e => {
                                    this.setState({taskStatus: e.target.value})
                                }}>
                            <option value="null" id="null">Wybierz status</option>
                            <option value="To Do">To do</option>
                            <option value="In Progress">In progress</option>
                            <option value="Done">Done</option>
                        </select>
                        <div>
                            <button className="btn btn-info" type="submit"> Add Task</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default ToDolist;