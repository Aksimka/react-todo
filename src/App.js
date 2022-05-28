import React, {useEffect, useState} from 'react'
import OnlyMobile from './blocks/OnlyMobile/OnlyMobile'

import './App.css'
import Header from './blocks/Header/Header.js'
import Theme from './themes/Theme'
import Main from './blocks/Main/Main'

const App = () => {
  const [width, setWidth] = useState(null)
  useEffect(() => {
    const body = document.querySelector('body')
    new Theme({attachEl: body, themeName: 'defaultLight'})
    setWidth(window.innerWidth)
    window.addEventListener('resize', e => {
      setWidth(e.target.innerWidth)
    })
  }, [])

  if (width <= 820) {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    )
  } else {
    return (
      <OnlyMobile />
    )
  }
}

export default App
