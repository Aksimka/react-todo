import React from 'react'

import IconButton from '../../buttons/IconButton/IconButton'
import './AddTask.scss'
import IconPlus from '../../icons/IconPlus'
import Touchable from '../../Touchable/Touchable'

export default class AddTask extends React.Component {
  render() {
    return (
      <Touchable
        children={
          <div className="add-task-card">
            <span className="add-task-card__icon">
              <IconButton
                icon={
                  <IconPlus size={24} weight={3} color="var(--color-primary)" />
                }
              />
            </span>
            <span className="add-task-card__text">Add new task</span>
          </div>
        }
      />
    )
  }
}
