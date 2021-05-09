import classNames from 'classnames'

export default function Block(props) {
  console.log(props, 'props')
  const { className: customClass } = props

  const classes = classNames('ui-block', customClass)

  return (
    <div {...props} className={classes}>
      {props.children}
    </div>
  )
}
