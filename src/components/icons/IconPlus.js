

export default function IconPlus (props) {
  const size = props.size || '32';
  const weight = props.weight || '2';
  const color = props.color || '#ffffff';

  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 16H27" stroke={color} strokeWidth={weight} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 5V27" stroke={color} strokeWidth={weight} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}