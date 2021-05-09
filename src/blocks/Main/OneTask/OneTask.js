import { useParams, withRouter } from 'react-router-dom'
import { useStore } from '@mozaikjs/react'
import React, { useEffect, useState } from 'react'
import Div from '../../../components/Div/Div'
import Title from '../../../components/Typography/Title/Title'
import dayjs from 'dayjs'
import { computeDateToShow } from '../../../helpers/computeDateToShow'
import TimeViewing from '../../../components/widgets/TimeViewing/TimeViewing'
import './OneTask.scss'
import Actions from '../../../components/widgets/Actions/Actions'
import Button from '../../../components/buttons/Button/Button'

const OneTask = (props) => {
  const params = useParams()
  const { todo } = useStore()
  const { history } = props

  const [task, setTask] = useState({})

  useEffect(() => {
    setTask(todo.todoList.find((i) => i.id === Number(params.id)))
  }, [params.id])

  const goBack = () => {
    history.goBack()
  }

  const removeAndBack = () => {
    todo.deleteTodoItem(task.id)
    goBack()
  }

  return (
    <Div className="one-task">
      <Title level={2}>{task.title}</Title>
      <Div className="small-text">
        <span className="bold-text">Date: </span>{' '}
        {dayjs(task.date).format('DD.MM.YYYY')} ({computeDateToShow(task.date)})
      </Div>
      <Div className="small-text">
        <span className="bold-text">Time: </span>
        <TimeViewing from={task.fromTime} to={task.to} />
      </Div>
      <Div className="one-task__description small-text">
        <span className="bold-text">Description: </span>
        {task.description}
      </Div>
      <Div className="one-task-footer">
        <Actions>
          <Button color="var(--color-primary)" dark="true" onClick={goBack}>
            Back
          </Button>
          <Button
            color="var(--color-primary)"
            dark="true"
            onClick={removeAndBack}
          >
            Remove
          </Button>
        </Actions>
      </Div>
    </Div>
  )
}

export default withRouter(OneTask)
