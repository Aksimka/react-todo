

export default function Form (props) {

  const onSubmit = (e) => {
    props.onSubmit(e)
  }

  const childrenAsArray = (props.children && props.children.length) && props.children
  const childrenAsOne = !props.children.length && props.children

  console.log(props.children, 'props.children');

  return (
    <form className="form" onSubmit={ e => onSubmit(e) }>
      {
        childrenAsArray ?
          childrenAsArray.map((child, index) => {
            return (
              <div className="form-cell" key={index}>
                { child }
              </div>
            )
          }) :
          <div className="form-cell">
            { childrenAsOne }
          </div>
      }
    </form>
  )
}