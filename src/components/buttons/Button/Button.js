import './Button.scss'
import Touchable from '@/components/Touchable/Touchable'
import classNames from 'classnames'

export default function Button(props) {
  const {
    children = '',
    color = 'var(--color-white_half)',
    dark = false,
    onClick,
    size = 'md',
  } = props

  const styles = {
    backgroundColor: color,
    color: dark ? 'var(--color-light)' : 'var(--color-text)',
  }

  const btnClass = classNames('button', {
    md: size === 'md',
    lg: size === 'lg',
  })

  return (
    <div className="button-wrapper">
      <Touchable>
        <button
          role="button"
          className={btnClass}
          style={styles}
          onClick={onClick}
          {...props}
        >
          {children && children}
        </button>
      </Touchable>
    </div>
  )
}
