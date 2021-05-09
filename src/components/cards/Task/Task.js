import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import './Task.scss'
import Touchable from '../../Touchable/Touchable'
import IconTrash from '../../icons/IconTrash'
import IconWrapper from '../../icons/IconWrapper/IconWrapper'

const DAY_MILLISECONDS = 86400000

export default function Task(props) {
  const { date, title, fromTime, toTime, description, buttonClick } = props

  const [textDay, setTextDay] = useState(null)

  useEffect(() => {
    setTextDay(_computeDateToShow(date))
  }, [])

  const _computeDateToShow = (payloadDate) => {
    const nowDate = dayjs(dayjs(new Date()).format('YYYY-MM-DD'))
    const parsedPayloadDate = dayjs(payloadDate)
    const diff = parsedPayloadDate.diff(nowDate)

    if (diff === 0) {
      return 'today'
    } else if (diff > 0) {
      if (diff <= DAY_MILLISECONDS) {
        return 'tomorrow'
      } else {
        return 'latest'
      }
    } else if (diff < 0) {
      if (Math.abs(diff) <= DAY_MILLISECONDS) {
        return 'yesterday'
      } else {
        return 'older'
      }
    }
  }

  const _computeTimeToShow = () => {
    if (!fromTime && !toTime) {
      return '—'
    } else {
      return `${fromTime || ''} - ${toTime || ''}`
    }
  }

  return (
    <Touchable>
      <div className={['task-card', textDay].join(' ')}>
        <div className="task-card-top">
          <div className="task-card-top-heading">
            <div className="task-card-top-heading__title">{title}</div>
            <div className="time">{_computeTimeToShow()}</div>
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
