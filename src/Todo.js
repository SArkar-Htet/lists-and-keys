import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    const {list, onClick} = this.props;
    const lists = list.map((list) => (
      <tr key={list.id}>
        <td>{list.id}</td>
        <td>
          <input type="text"/>
        </td>
        <td>
          {list.created_at.toLocaleTimeString()}
        </td>
        <td>
          <button onClick={() => onClick(list.id)}>Delete</button>
        </td>
      </tr>
    ));
    return (
      <div className="button">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Input</th>
              <th>Crated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {lists}
          </tbody>
        </table>
      </div>
    )
  }
}
