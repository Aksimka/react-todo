import React, {useEffect} from 'react'

// import logo from './logo.svg';
import './App.css'
import Header from './blocks/Header/Header.js'
import Theme from './themes/Theme'
import Main from './blocks/Main/Main'

export default () => {
  const body = document.querySelector('body')

  useEffect(() => {
    new Theme({attachEl: body, themeName: 'defaultLight'})
  }, [])

  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  )
}
