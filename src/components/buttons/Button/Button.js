import './Button.scss'

export default function Button(props) {
  const {
    children = '',
    color = 'var(--color-white_half)',
    dark = false,
    onClick,
  } = props
  const styles = {
    backgroundColor: color,
    color: dark ? 'var(--color-light)' : 'var(--color-text)',
  }
  return (
    <div className="button-wrapper">
      <button className="button" style={styles} onClick={onClick}>
        {children && children}
      </button>
    </div>
  )
}
