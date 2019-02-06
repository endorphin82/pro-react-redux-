import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  render() {
    const { onItemAdded } = this.props;
    return (
      <div className="input-group item-add-form">
        <input
          className="form-control"
          type="text"
          placeholder="add task"
          defaultValue="new task"
        />
        <button
          className="btn btn-outline-secondary"
          onClick={() => onItemAdded('hi')}
        >Add Item
        </button>
      </div>
    );
  }
}
