import "./Div.scss"

export default function Div (props) {

  return (
    <div { ...props } className="ui-div">
      { props.children }
    </div>
  )
}