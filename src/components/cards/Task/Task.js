import React, { useEffect, useState } from 'react'

import './Task.scss'
import Touchable from '@/components/Touchable/Touchable'
import IconTrash from '@/components/icons/IconTrash'
import IconWrapper from '@/components/icons/IconWrapper/IconWrapper'
import { computeDateToShow } from '@/helpers/computeDateToShow'
import TimeViewing from '@/components/widgets/TimeViewing/TimeViewing'

export default function Task(props) {
  const { date, title, fromTime, toTime, description, buttonClick } = props

  const [textDay, setTextDay] = useState(null)

  useEffect(() => {
    setTextDay(computeDateToShow(date))
  }, [date])

  return (
    <Touchable>
      <div className={['task-card', textDay].join(' ')}>
        <div className="task-card-top">
          <div className="task-card-top-heading">
            <div className="task-card-top-heading__title">{title}</div>
            <div className="time">
              <TimeViewing from={fromTime} to={toTime} />
            </div>
          </div>
          <div className="task-card-top-day">{textDay}</div>
        </div>
        <div className="task-card-footer">
          <div className="task-card-footer__description">{description}</div>
          <div className="task-card-footer-actions">
            <div className="task-card-footer__action">
              <IconWrapper
                onClick={buttonClick}
                icon={
                  <IconTrash
                    size={24}
                    weight={3}
                    color={`var(--color-${textDay}_text)`}
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Touchable>
  )
}
