import React, {Component} from 'react'
import './Todolist.css'
import ToDolist from "./ToDolist";
import {BrowserRouter, Router, Route, Link} from "react-router-dom";
import ListTask from "./ListTask";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <nav className="navbar navbar-light bg-light">
                        <form className="form-inline">
                            <button className="btn btn-outline-success" type="button"><Link to="/add">ADD TASK</Link></button>
                            <button className="btn btn-outline-success" type="button"><Link to="/">LIST TASKS</Link></button>
                        </form>
                    </nav>
                    <Route path="/" exact component={ListTask}/>
                    <Route path="/add/" component={ToDolist}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App