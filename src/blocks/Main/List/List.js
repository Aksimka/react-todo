import React from 'react';
import { Link } from "react-router-dom";


import './List.scss'
import AddTask from "../../../components/cards/AddTask/AddTask";
import Task from "../../../components/cards/Task/Task";

import { useStore } from "@mozaikjs/react";


export default function List (props) {

  const store = useStore()

  console.log(store, 'store');

  const addTodoItem = () => {
    const newItem = {
      id: store.todoList.length + 1,
      title: "Design Meeting 3",
      date: new Date(),
      time: "10:00 - 11:30",
    }
    store.addTodoItem(newItem)
  }
  const deleteTodoItem = (id, e) => {
    e.preventDefault()
    store.deleteTodoItem(store.todoList.findIndex(i => i.id === id))
  }

  const taskList = store.todoList.map((task, index) =>
    (
      <div className="main-task-wrapper" key={task.id}>
        <Link to={`/task/${task.id}`}>
          <Task
            title={task.title}
            date={task.date}
            time={task.time}
            buttonClick={(e) => deleteTodoItem(task.id, e)}
          />
        </Link>

      </div>
    )
  )

  return (
    <div className="list">
      <div className="add-task-wrapper">
        <Link to="/add">
          <AddTask />
        </Link>
      </div>
      <div className="main-tasks-list">
        {
          taskList
        }
      </div>
    </div>
  )

}
