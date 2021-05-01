import Textarea from '../Textarea/Textarea'
import './UiTextarea.scss'

export default function UiTextarea(props) {
  const { label } = props

  return (
    <div className="ui-textarea">
      {label && <div className="ui-textarea__label">{label}</div>}

      <div className="ui-textarea__field">
        <Textarea {...props} />
      </div>
    </div>
  )
}
