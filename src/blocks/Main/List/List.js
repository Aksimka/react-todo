import React from 'react'
import { Link } from 'react-router-dom'

import './List.scss'
import AddTask from '@/components/cards/AddTask/AddTask'
import Task from '@/components/cards/Task/Task'

import { useStore } from '@mozaikjs/react'

export default function List() {
  const store = useStore()

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


// [{"id":4,"title":"Work","date":"2022-05-25","fromTime":"10:00","toTime":"19:00","description":""},{"id":3,"title":"Work on my own project","date":"2022-05-26","fromTime":"19:00","toTime":"22:00","description":"Usability research, think about new features"},{"id":2,"title":"Meet with Jane","date":"2022-05-26","fromTime":"12:30","toTime":"15:00","description":"Talk about Mike's birthday"},{"id":1,"title":"Going shop","date":"2022-05-26","fromTime":"10:00","toTime":"12:00","description":"Milk, bread, vegetables"}]
// List.js:12 [{"id":4,"title":"Work","date":"2022-05-25","fromTime":"10:00","toTime":"19:00","description":""},{"id":3,"title":"Work on my own project","date":"2022-05-26","fromTime":"19:00","toTime":"22:00","description":"Usability research, think about new features"},{"id":2,"title":"Meet with Jane","date":"2022-05-26","fromTime":"12:30","toTime":"15:00","description":"Talk about Mike's birthday"},{"id":1,"title":"Going shop","date":"2022-05-26","fromTime":"10:00","toTime":"12:00","description":"Milk, bread, vegetables"}]