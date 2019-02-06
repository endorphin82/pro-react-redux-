import React, { Component } from "react";
import classnames from "classnames";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  constructor() {
    super();

    this.state = {
      done: false,
      important: false
    };

    this.onLabelClick = this.onLabelClick.bind(this);
    this.onMarkImportant = this.onMarkImportant.bind(this);
  }

  onLabelClick() {
    this.setState(({ done }) => ({
        done: !done
      })
    );
  }

  onMarkImportant() {
    this.setState(state => ({
        important: !state.important
      })
    );
  }

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = classnames({
      "todo-list-item": true,
      "done": done,
      "important": important
    });

    return (
      <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={this.onLabelClick}
      >
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={this.onMarkImportant}>
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDeleted}
      >
        <i className="fa fa-trash-o"/>
      </button>
    </span>
    );
  }
}

