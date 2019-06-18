import React, {Component} from "react";
import ListTask from "./ListTask";

class TableList extends Component {

    taskChange = e => this.setState({taskTitle: e.target.value});

    onClickRemove = e => {
        e.preventDefault();
        prompt("Uwaga USUWASZ rekord w bazie");
        fetch(`https://localhost:44337/api/Task/${e.target.value}`, {
            method: 'delete',
        })
            .then(res => res.json())
            .then(<ListTask/>)
    }


    onClickEdit() {
        prompt("Uwaga edytujesz rekord w bazie")
    }


    render() {
        const {oneTask} = this.props;

        return (

            <tr>
                <td>{oneTask.taskTitle}</td>
                <td>{oneTask.taskDescription}</td>
                <td>{oneTask.taskStatus}</td>
                <td>{oneTask.taskId}</td>
                <td>
                    <button className="btn btn-danger" value={oneTask.taskId} onClick={this.onClickRemove}>Usuń</button>
                </td>
                <td>
                    <button className="btn btn-success" value={oneTask.taskId} onClick={this.onClickEdit}>Edytuj
                    </button>
                </td>
            </tr>

        );

    }

}

export default TableList;