import React, { Component } from 'react';
import Button from './Button';
import Todo from './Todo';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      counter : 1,
      list : [
        {
          id : 1,
          created_at : new Date(),
        },
      ],
    };
  }

  addTo = (status) => {
    const {counter, list} = this.state;
    const id = counter + 1;
    const created_at = new Date();
    const newList = status ? [...list, { id, created_at } ] : [ { id, created_at }, ...list ]; 
    this.setState({
      counter : id,
      list : newList,
    });
  }

  toSort = (status) => {
    const {list} = this.state;
    const newList = [...list].sort((x, y) => (
      status ? x.id - y.id : y.id - x.id
    ));
    this.setState({list : newList});
  }

  toDelete = (id) => {
    const {list} = this.state;
    const index = list.findIndex((val) => (id === val.id));
    list.splice(index, 1);
    this.setState({list});
  }
  
  render() {
    const {list} = this.state;
    return (
      <div className="app">
        <div className="app__body">
          <div className="app__btn">
            <Button add={(e) => this.addTo(e)} sort={(e) => this.toSort(e)}/>
          </div>
          <Todo list={list}  onClick={(e) => this.toDelete(e)} />
        </div>
      </div>
    )
  }
}
