import React, { forwardRef } from 'react'
import './Form.scss'

export default function Form(props) {
  const handleSubmit = (e) => {
    onSubmit(e)
  }

  const { children, onSubmit } = props

  const childrenAsArray = children && children.length && children
  const childrenAsOne = !children.length && children

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      {childrenAsArray ? (
        childrenAsArray.map((child, index) => {
          return (
            <div className="form-cell" key={index}>
              {child}
            </div>
          )
        })
      ) : (
        <div className="form-cell">{childrenAsOne}</div>
      )}
    </form>
  )
}
