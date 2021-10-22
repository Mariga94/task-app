//App.js
import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: " ",
        id: uniqid()
      },
      tasks: [],
    };
  }
    /* update state. */
    handleChange = (e) => {
      this.setState({
        task: {
          text: e.target.value,
          id: this.state.task.id,
        },
      });
    };

  onSubmitTask = (event) => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
      id: uniqid()
    },
    });
  };


  render() {

    const { task, tasks} = this.state;

    return (
      <div>
        <form onSubmit = {this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input value = {task.text} 
          onChange = {this.handleChange}
          type="text" id="taskInput" />
          <button type="submit" >
            Add Task
          </button>
        </form>

        <Overview tasks = {tasks} />
      </div>
    )
  }
}

export default App;
