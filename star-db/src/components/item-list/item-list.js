import React, { Component } from "react";

import "./item-list.css";

import Spinner from "../spinner";

export default class ItemList extends Component {
  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      });
    //todo .catch()
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {

    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner/>;
    }

    const items = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
