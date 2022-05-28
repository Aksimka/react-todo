import {useEffect, useState} from "react";

export default () => {
  const [width, setWidth] = useState(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', e => {
      setWidth(e.target.innerWidth)
    })
  }, [])

  useEffect(() => {
    if (width >= 820) {
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  }, [width])

  return {isDesktop}
}