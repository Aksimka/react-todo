import { useState } from 'react';

import Form from "../../../components/forms/Form/Form";
import { useStore } from "@mozaikjs/react";
import Input from "../../../components/forms/Input/Input";


export default function AddTask () {

  const [taskTitle, setTaskTitle] = useState('')

  const store = useStore(0)

  const addNewTask = (e) => {
    const newItem = {
      id: store.todoList.length + 1,
      title: "Design Meeting 3",
      date: new Date(),
      time: "10:00 - 11:30",
    }
    store.addTodoItem(newItem)
  }
  
  return (
    <div className="add-task">
      <div className="add-task__title">Add new task: </div>
      <Form onSubmit={ e => addNewTask(e) }>
        <Input type="text" value={taskTitle} onChange={ e => setTaskTitle(e.target.value) } ></Input>
      </Form>
    </div>
  )
}
