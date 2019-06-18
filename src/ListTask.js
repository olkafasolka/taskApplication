import React, {Component} from 'react'
import TableList from './TableList'
import 'bootstrap/dist/css/bootstrap.css';

class ListTask extends Component {
    constructor(props) {
        super(props);
        this.state = {task: null, isLoading: false};
    }

    componentDidMount() {

        fetch("https://localhost:44337/api/Task")
            .then(res => {
                return res.json();
            })
            .then(resp => {
                console.log(resp);

                this.setState({
                    task: resp,
                    isLoading: false

                });
            });
    }

    render() {
        return (
            <table className="table table-dark">
                <tbody>
                <th scope="col">Zadanie</th><th scope="col">Opis</th><th scope="col">Status</th><th scope="col">Usuń</th><th scope="col">Edytuj</th>
                {this.state.isLoading}
                {this.state.task &&
                this.state.task.map(item => <TableList oneTask={item}/>)}
                </tbody>
            </table>
        );
    }
}


export default ListTask;