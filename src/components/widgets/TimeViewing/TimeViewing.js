export default function TimeViewing(props) {
  const { from, to } = props

  const computeTimeToShow = () => {
    if (!from && !to) {
      return '—'
    } else {
      return `${to ? from + ' -' : from} ${to || ''}`
    }
  }

  return <span className="time-viewing">{computeTimeToShow()}</span>
}
