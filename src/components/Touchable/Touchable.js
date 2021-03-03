import './Touchable.scss'

export default function Touchable (props) {
  const child = props.children;

  return (
    <div className="touchable">
      { child && child }
    </div>
  )
}