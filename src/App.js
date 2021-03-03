import React from 'react'

// import logo from './logo.svg';
import './App.css';
import Header from './blocks/Header/Header.js';
import Theme from './themes/Theme'
import Main from "./blocks/Main/Main";


export class App extends React.Component {

  componentDidMount() {
    const body = document.querySelector('body');
    // console.log(body, 'a');
    new Theme({attachEl: body, themeName: 'defaultLight'});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;
