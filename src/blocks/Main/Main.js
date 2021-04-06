import React from 'react';

import './Main.scss'
import AddTask from "../../components/cards/AddTask/AddTask";
import Task from "../../components/cards/Task/Task";
import {addTodoItem} from "../../store/todoReducer/actions";
import { connect } from "react-redux";

class Main extends React.Component{

  constructor(props) {
    super(props);
  }

  addTodoItem = e => {
    const newItem = {
      id: 3,
      title: "Design Meeting2",
      date: new Date().toISOString(),
      time: "10:00 - 11:30",
    }
    this.props.addTodoItem(newItem)
  }

  render() {

    const taskList = this.props.todoList.map(task =>
      (
        <div className="main-task-wrapper" key={task.id}>
          <Task title={task.title} date={task.date} time={task.time} />
        </div>
      )
    )

    return (
      <div className="main">
        <div className="add-task-wrapper" onClick={this.addTodoItem}>
          <AddTask />
        </div>

        <div className="main-tasks-list">
          {
            taskList
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todo.todoList
  }
}

const mapDispatchToProps = {
  addTodoItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
