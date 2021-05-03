import { createRef, forwardRef, useRef, useState } from 'react'
import './AddTask.scss'

import Form from '../../../components/forms/Form/Form'
import { useStore } from '@mozaikjs/react'
import UiInput from '../../../components/forms/UiInput/UiInput'
import Title from '../../../components/Typography/Title/Title'
import Div from '../../../components/Div/Div'
import UiTextarea from '../../../components/forms/UiTextarea/UiTextarea'
import Button from '../../../components/buttons/Button/Button'

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [fromTime, setFromTime] = useState('')
  const [toTime, setToTime] = useState('')
  const [description, setDescription] = useState('')

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

  const formRef = createRef()

  const submitForm = () => {
    console.log(formRef, 'formRef')
  }

  const FormWithRef = forwardRef((props, ref) => {
    return (
      <Form ref={ref} {...props}>
        {' '}
        {props.children}{' '}
      </Form>
    )
  })

  return (
    <div className="add-task">
      <Title level={2} className="add-task__title" bold>
        Add new task:{' '}
      </Title>
      <Div>
        <FormWithRef onSubmit={(e) => addNewTask(e)} ref={formRef}>
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
                value={fromDate}
                onChange={(e) => setFromDate(e)}
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

          <div className="form-footer">
            <Button
              color="var(--color-primary)"
              dark="true"
              onClick={submitForm}
            >
              Add
            </Button>
          </div>
        </FormWithRef>
      </Div>
    </div>
  )
}
