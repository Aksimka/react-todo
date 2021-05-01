import './Input.scss'

export default function Input(props) {
  const { nativeEvent } = props

  const handleChange = (e) => {
    if (nativeEvent) {
      return props.onChange(e)
    } else {
      return props.onChange(e.target.value)
    }
  }

  return (
    <div className="input-wrapper">
      <input {...props} onChange={(e) => handleChange(e)} />
    </div>
  )
}
