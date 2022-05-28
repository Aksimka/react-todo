import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useStore } from '@mozaikjs/react'
import './AddTask.scss'

import Form from '@/components/forms/Form/Form'
import UiInput from '@/components/forms/UiInput/UiInput'
import Title from '@/components/Typography/Title/Title'
import Div from '@/components/Div/Div'
import UiTextarea from '@/components/forms/UiTextarea/UiTextarea'
import Button from '@/components/buttons/Button/Button'
import Actions from '@/components/widgets/Actions/Actions'

const AddTask = (props) => {
  const [taskTitle, setTaskTitle] = useState('')
  const [date, setDate] = useState('')
  const [fromTime, setFromTime] = useState('')
  const [toTime, setToTime] = useState('')
  const [description, setDescription] = useState('')

  const { todo } = useStore()

  const addNewTask = () => {
    const newItem = {
      id: todo.todoList.length + 1,
      title: taskTitle,
      date: date,
      fromTime: fromTime,
      toTime: toTime,
      description: description,
    }
    todo.addTodoItem(newItem)
    props.history.push('/')
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
            onChange={(e) => setTaskTitle(e)}
            label="Title:"
          />
          <div className="form-datetime">
            <div className="from-date">
              <UiInput
                type="date"
                value={date}
                onChange={(e) => setDate(e)}
                label="Date:"
              />
            </div>
            <div className="from-time">
              <div className="from-time__cell">
                <UiInput
                  type="time"
                  value={fromTime}
                  onChange={(e) => setFromTime(e)}
                  label="From time:"
                />
              </div>
              <div className="from-time__cell">
                <UiInput
                  type="time"
                  value={toTime}
                  onChange={(e) => setToTime(e)}
                  label="To time:"
                />
              </div>
            </div>
          </div>
          <UiTextarea
            value={description}
            onChange={(e) => setDescription(e)}
            label="Description:"
          />

          <Actions>
            <Button color="var(--color-primary)" dark="true" type="submit">
              Add
            </Button>
          </Actions>
        </Form>
      </Div>
    </div>
  )
}

export default withRouter(AddTask)
