import React, {Component} from "react";
import ListTask from "./ListTask";

class TableList extends Component {

    taskChange = e => this.setState({Title: e.target.value});

    onClickRemove = e => {
        e.preventDefault();
        prompt("Uwaga USUWASZ rekord w bazie");
        fetch(`https://localhost:44368/api/Todo/${e.target.value}`, {
            method: 'delete',
        })
            .then(resp =>{
                this.props.refresh();
            })
    }


    onClickEdit() {
        prompt("Uwaga edytujesz rekord w bazie")
    }


    render() {
        const {oneTask} = this.props;

        return (

            <tr>
                <td>{oneTask.Title}</td>
                <td>{oneTask.Description}</td>
                <td>{oneTask.Status}</td>
                <td>{oneTask.Id}</td>
                <td>
                    <button className="btn btn-danger" value={oneTask.Id} onClick={this.onClickRemove}>Usuń</button>
                </td>
                <td>
                    <button className="btn btn-success" value={oneTask.Id} onClick={this.onClickEdit}>Edytuj
                    </button>
                </td>
            </tr>

        );

    }

}

export default TableList;