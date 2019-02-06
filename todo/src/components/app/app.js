import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
// import AddEditTaskForm from "../add-edit-task-form";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {
  constructor() {
    super();

    this.maxId = 100;

    this.state = {
      todoData: [
        { label: "Drink Coffee", important: false, id: 1 },
        { label: "Make Awesome App", important: true, id: 2 },
        { label: "Have a lunch", important: false, id: 3 }
      ]
    };
  }

  //bind(this)
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      // [a, b, c, d, e]
      // [a, b,  , d, e]
      return {
        todoData: [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1)
        ]
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    this.setState(({ todoData }) => {
      return { todoData: [...todoData, newItem] };
    });
  };

  onToggleImportant = (id) => {
    console.log("Toggle Important", id);
  };

  onToggleDone = (id) => {
    console.log("Toggle Done", id);
  };

  render() {
    const { todoData } = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        {/*<AddEditTaskForm />*/}
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  }
};
