import React, { Component } from "react";

import "./add-edit-task-form.css";

export default class AddEditTaskForm extends Component {
  render() {
    return (
      <div>

        <input
          type="text"
          placeholder="add task"
          defaultValue="new task"
        />
        <button>add</button>
      </div>
    );
  }
}