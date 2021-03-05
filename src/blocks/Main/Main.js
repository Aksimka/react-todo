import React from 'react';

import './Main.scss'
import AddTask from "../../components/cards/AddTask/AddTask";
import Task from "../../components/cards/Task/Task";

export default class Main extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          title: "Design Meeting",
          date: "2021-03-04T19:44:22.107Z",
          time: "10:00 - 11:30",
        }
      ]
    }
  }

  render() {

    const taskList = this.state.tasks.map(task =>
      (
        <div className="main-task-wrapper" key={task.id}>
          <Task title={task.title} date={task.date} time={task.time} />
        </div>
      )
    )

    return (
      <div className="main">
        <AddTask />
        <div className="main-tasks-list">
          {
            taskList
          }
        </div>


      </div>
    );
  }
}
