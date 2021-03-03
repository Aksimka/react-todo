import React from 'react';

import './Main.scss'
import AddTask from "../../components/cards/AddTask/AddTask";

export default class Main extends React.Component{
  render() {
    return (
      <div className="main">
        <AddTask />
      </div>
    );
  }
}