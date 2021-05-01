import './IconButton.scss'

export default function IconButton(props) {
  const { color = '#fffbc0', icon = '', onClick = () => {} } = props

  const buttonColors = {
    backgroundColor: color,
  }

  return (
    <span className="icon-button display-center" style={buttonColors}>
      {icon && (
        <span
          className="icon-wrapper display-center"
          onClick={(e) => onClick(e)}
        >
          {icon}
        </span>
      )}
    </span>
  )
}
