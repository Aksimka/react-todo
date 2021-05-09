import React from 'react'
import './Title.scss'

export default function Title(props) {
  const { children = '', level = '3' } = props

  const tag = `h${level}`
  const className = `ui-title ui-title_${tag}`

  return React.createElement(tag, {
    children: children,
    className: className,
  })
}
