import { useState } from 'react'
import './AddTask.scss'

import Form from '../../../components/forms/Form/Form'
import { useStore } from '@mozaikjs/react'
import UiInput from '../../../components/forms/UiInput/UiInput'
import Title from '../../../components/Typography/Title/Title'
import Div from '../../../components/Div/Div'

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState('')
  const [fromTime, setFromTime] = useState('')
  const [toTime, setToTime] = useState('')

  const store = useStore()

  const addNewTask = (e) => {
    const newItem = {
      id: store.todoList.length + 1,
      title: 'Design Meeting 3',
      date: new Date(),
      time: '10:00 - 11:30',
    }
    store.addTodoItem(newItem)
  }

  return (
    <div className="add-task">
      <Title level={2} className="add-task__title" bold>
        Add new task:{' '}
      </Title>
      <Div>
        <Form onSubmit={(e) => addNewTask(e)}>
          <UiInput
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            label="Заголовок:"
          />
          <UiInput
            type="time"
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
            label="Время с:"
          />
          <UiInput
            type="time"
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
            label="Время по:"
          />
        </Form>
      </Div>
    </div>
  )
}
