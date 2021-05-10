import React from 'react'
import { Link } from 'react-router-dom'

import './List.scss'
import AddTask from '../../../components/cards/AddTask/AddTask'
import Task from '../../../components/cards/Task/Task'

import { useStore } from '@mozaikjs/react'

export default function List() {
  const store = useStore()
  console.log(store, 'store')

  const deleteTodoItem = (id, e) => {
    e.preventDefault()
    store.todo.deleteTodoItem(id)
  }

  const taskList = store.todo.filteredTodoList.map((task) => (
    <div className="main-task-wrapper" key={task.id}>
      <Link to={`/task/${task.id}`}>
        <Task
          title={task.title}
          date={task.date}
          fromTime={task.fromTime}
          toTime={task.toTime}
          description={task.description}
          buttonClick={(e) => deleteTodoItem(task.id, e)}
        />
      </Link>
    </div>
  ))

  return (
    <div className="list">
      <div className="add-task-wrapper">
        <Link to="/add">
          <AddTask />
        </Link>
      </div>
      <div className="main-tasks-list">{taskList}</div>
    </div>
  )
}
