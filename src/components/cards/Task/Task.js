import React from 'react';
import dayjs from "dayjs";

import './Task.scss';
import Touchable from "../../Touchable/Touchable";
import Button from "../../buttons/Button/Button";

const DAY_MILLISECONDS = 86400000;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textDay: null,
    }
  }

  componentDidMount() {
    this.setState({textDay: this._computeDateToShow(this.props.date)});
  }

  _computeDateToShow(date) {
    const nowDate = dayjs(new Date()).format('YYYY-MM-DD');
    const parsedPayloadDate = dayjs(date).format('YYYY-MM-DD');
    const timeing = dayjs(nowDate).valueOf() - dayjs(parsedPayloadDate).valueOf();
    if (timeing === 0) {
      return 'today';
    } else if (timeing <= DAY_MILLISECONDS) {
      return 'tomorow';
    } else {
      return 'older';
    }
  }

  render() {
    const { title, time } = this.props;
    return (
      <Touchable>
        <div className={['task-card', this.state.textDay].join(' ')}>
          <div className="task-card-top">
            <div className="task-card-top-heading">
              <div className="task-card-top-heading__title">{ title }</div>
              <div className="task-card-top-heading__time">{ time }</div>
            </div>
            <div className="task-card-top-day">{ this.state.textDay }</div>
          </div>
          <div className="task-card-footer">
            <div className="task-card-footer-actions">
              <div className="task-card-footer-action">
                <Button color={`--color-${this.state.textDay}`} children="Кнопка" click={this.props.buttonClick} />
              </div>
            </div>
          </div>
        </div>
      </Touchable>

    )
  }
}
