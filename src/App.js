import React, {useEffect} from 'react'
import OnlyMobile from './blocks/OnlyMobile/OnlyMobile'

import './App.css'
import Header from './blocks/Header/Header.js'
import Theme from './themes/Theme'
import Main from './blocks/Main/Main'
import useClientSize from "@/hooks/useClientSize";

const App = () => {
  const {isDesktop} = useClientSize()

  useEffect(() => {
    const body = document.querySelector('body')
    new Theme({attachEl: body, themeName: 'defaultLight'})
  }, [])

  return isDesktop ? <OnlyMobile /> :
    (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    )
}

export default App
