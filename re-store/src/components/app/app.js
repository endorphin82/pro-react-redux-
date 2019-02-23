import React from "react";

import "./app.css";
import { withBookstoreService } from "../hoc";

const App = ({bookstoreService}) => {
  console.log(bookstoreService.getBooks());
  return (
    <div>
      <h2>App</h2>
    </div>
  );
};

export default withBookstoreService()(App);