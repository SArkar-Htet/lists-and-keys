import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const {add, sort} = this.props;
    return (
      <div className="button">
        <button onClick={() => add(false)}>Add New To Start</button>
        <button onClick={() => add(true)}>Add New To End</button>
        <button onClick={() => sort(true)}>Sort By Earliest</button>
        <button onClick={() => sort(false)}>Sort By Latest</button>
      </div>
    )
  }
}
