import React from "react";

import "./home-page.css";
import ShoppingCartTable from "../../shopping-cart-table";
import { BookListContainer as BookList } from "../../../containers/book-list-container";

const HomePage = () => {
  return (
    <div>
      <BookList/>
      <ShoppingCartTable/>
    </div>
  );
};

export default HomePage;