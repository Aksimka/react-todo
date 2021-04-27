

export default function IconChevronLeft (props) {
  const width = props.width || '12'
  const height = props.height || '22'
  const weight = props.weight || '2';
  const color = props.color || '#ffffff';

  return (
    <svg width={width} height={height} viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 21L1 11L11 1"  stroke={color} strokeWidth={weight} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}