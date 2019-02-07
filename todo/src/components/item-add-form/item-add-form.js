import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {

  state = {
    label: ""
  };

  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
  };

  render() {
    const { onItemAdded } = this.props;
    return (
      <form className="input-group item-add-form d-flex"
            onSubmit={this.onSubmit}
      >
        <input
          className="form-control"
          type="text"
          placeholder="add task"
          onChange={this.onLabelChange}
        />
        <button
          className="btn btn-outline-secondary"
        >Add Item
        </button>
      </form>
    );
  }
}
