import React, {Component} from 'react'
import TableList from './TableList'
import 'bootstrap/dist/css/bootstrap.css';


class ListTask extends Component {
    constructor(props) {
        super(props);
        this.state = {task: null, isLoading: false};
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        this.setState({isLoading: true});
        fetch("https://localhost:44368/api/Todo")
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
                {this.state.task &&
                this.state.task.map(item => <TableList key={item.id} oneTask={item} refresh={this.fetchData}/>)}
                </tbody>
            </table>
        );
    }
}


export default ListTask;