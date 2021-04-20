import Input from "../Input/Input";
import "./UiInput.scss"


export default function UiInput (props) {

  const { label } = props

  return (
    <div className="ui-input">
      {
        label && (
          <div className="ui-input__label">{ label }</div>
        )
      }

      <div className="ui-input__field">
        <Input { ...props } />
      </div>
    </div>
  )
}