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
                        <Route path="/" exact component={ListTask}/>
                        <Route path="/add/" component={ToDolist}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App