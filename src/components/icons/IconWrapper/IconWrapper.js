import './IconWrapper.scss'

export default function IconButton(props) {
  const { icon = '', onClick = () => {} } = props

  return (
    <span className="icon-wrapper display-center">
      {icon && (
        <span className="display-center" onClick={(e) => onClick(e)}>
          {icon}
        </span>
      )}
    </span>
  )
}
