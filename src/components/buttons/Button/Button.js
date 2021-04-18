import './Button.scss'

export default function Button(props) {
  const children = props.children || '';
  const color = props.color || 'var(--color-white_half)';
  console.log(color, 'color');
  const styles = {
    'backgroundColor': color,
  }
  return (
    <button className="button" style={styles} onClick={props.click}>
      { children && children }
    </button>
  )
}
