import React, {Component} from 'react'

class ToDolist extends Component {
    constructor() {
        super();
        this.state = {Title: "", Description: "", Status: ""};
        this.taskChange = this.taskChange.bind(this);
    }

    taskChange = e => this.setState({Title: e.target.value});

    formSubmit = e => {
        e.preventDefault();
        fetch('https://localhost:44368/api/Todo', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "Title": this.state.Title,
                "Description": this.state.Description,
                "Status": this.state.Status
            })
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.formSubmit}>
                        <div className="divstyl"><input placeholder="Task" name="task" value={this.state.Title}
                                                        onChange={this.taskChange}/></div>
                        <div className="divstyl"><input placeholder="Description" name="description"
                                                        value={this.state.Description}
                                                        onChange={e => {
                                                            this.setState({Description: e.target.value})
                                                        }}/></div>
                        <select id="selectAddID" className="selectAdd form-control" name="select" value={this.state.Status}
                                onChange={e => {
                                    this.setState({Status: e.target.value})
                                }}>
                            <option value="null" id="null">Set status</option>
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