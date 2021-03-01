import React from 'react'

import logo from './logo.svg';
import './App.css';
import Header from './blocks/Header/Header.js';
import Theme from './themes/Theme'


export class App extends React.Component {

  componentDidMount() {
    const body = document.querySelector('body')
    console.log(body);
    const theme = new Theme(body, 'defaultLight');
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App;
