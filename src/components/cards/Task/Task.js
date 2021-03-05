import React from 'react';

import './Task.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  _computeDateToShow(date) {
    const nowDate = new Date;
    const tomorow = nowDate.setDate(nowDate.getDate() - 1)
    console.log(new Date(tomorow));
    const parsedDate = new Date(date);
    console.log(parsedDate, 'date');
  }

  render() {
    const { title, date, time } = this.props;
    return (
      <div className="task-card">
        <div className="task-card-top">
          <div className="task-card-top-heading">
            <div className="task-card-top-heading__title">{ title }</div>
            <div className="task-card-top-heading__time">{ time }</div>
          </div>
          <div className="task-card-top-day">{ this._computeDateToShow(date) }</div>
        </div>
      </div>
    )
  }
}
