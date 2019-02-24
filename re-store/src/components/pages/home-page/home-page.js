import React from "react";

import "./home-page.css";
import BookList from "../../book-list";
import ShoppingCartTable from "../../shopping-cart-table";

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;