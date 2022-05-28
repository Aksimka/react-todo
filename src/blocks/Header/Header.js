import React, { useState, useEffect } from 'react'
import './Header.scss'
import IconChevronLeft from '@/components/icons/IconChevronLeft'
import { useLocation, Link } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const [isDisplayedBackButton, setIsDisplayedBackButton] = useState(false)

  useEffect(() => {
    if (location.pathname === '/') {
      setIsDisplayedBackButton(false)
    } else {
      setIsDisplayedBackButton(true)
    }
  }, [location.pathname])

  return (
    <div className="header">
      <span className="header-back-button">
        {isDisplayedBackButton && (
          <Link to="/">
            <IconChevronLeft
              width={12}
              height={22}
              weight={3}
              color="var(--color-text_reversed)"
            />
          </Link>
        )}
      </span>
      <h1 className="header-logo">.todo</h1>
    </div>
  )
}

export default Header
