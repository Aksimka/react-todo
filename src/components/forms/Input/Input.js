import "./Input.scss"

export default function Input (props) {

  const { nativeEvent } = props

  const handleChange = (e) => {
    if (nativeEvent) {
      return props.onChange(e.target.value)
    } else {
      return props.onChange(e)
    }
  }

  return (
    <div className="input-wrapper">
      <input className="input" { ...props } onChange={ e => handleChange(e) } />
    </div>
  )
}