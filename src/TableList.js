import React, {Component} from "react";

class TableList extends Component {
    onClickRemove() {
        prompt("hkjghkjhkjhhj")
        // alert("Kliknięto USUŃ!");
    }

    onClickEdit() {
        alert("Kliknięto EDIT!");
    }

    render() {
        const {oneTask} = this.props;

        return (
            <tr>
                <td>{oneTask.taskTitle}</td>
                <td>{oneTask.taskDescription}</td>
                <td>{oneTask.taskStatus}</td>
                <td>
                    <button className="btn btn-danger" onClick={this.onClickRemove}>Usuń</button>
                </td>
                <td>
                    <button className="btn btn-success" onClick={this.onClickEdit}>Edytuj</button>
                </td>
            </tr>

        );

    }

}

export default TableList;