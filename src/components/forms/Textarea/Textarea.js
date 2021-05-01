import React from 'react'
import './Textarea.scss'

export default function Textarea(props) {
  const { nativeEvent } = props

  const handleChange = (e) => {
    console.log(e, 'e')
    if (nativeEvent) {
      return props.onChange(e)
    } else {
      return props.onChange(e.target.value)
    }
  }

  return (
    <div className="textarea-wrapper">
      <textarea {...props} onChange={(e) => handleChange(e)} />
    </div>
  )
}
