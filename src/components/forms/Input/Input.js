

export default function Input (props) {

  const { customClass } = props

  return (
    <div className="input-wrapper">
      <input
        className={[
          customClass ? customClass : ''
        ]}
        { ...props }
      />
    </div>
  )
}