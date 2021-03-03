import './IconButton.scss'

export default function IconButton (props) {
  const color = props.color || '#fffbc0';
  const icon = props.icon || '';

  const buttonColors = {
    'backgroundColor': color,
  };

  return (
    <span
      className="icon-button"
      style={buttonColors}
    >
      {icon && (
        <span className="icon-wrapper display-center"> {icon} </span>
      )}
    </span>
  )
}