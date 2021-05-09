import React from 'react'
import './Actions.scss'

export default function Actions(props) {
  const { children } = props

  const childrenAsArray = children && children.length && children
  const childrenAsOne = !children.length && children

  return (
    <div className="actions">
      {childrenAsArray ? (
        childrenAsArray.map((child, index) => {
          return (
            <div className="action" key={index}>
              {child}
            </div>
          )
        })
      ) : (
        <div className="action">{childrenAsOne}</div>
      )}
    </div>
  )
}
