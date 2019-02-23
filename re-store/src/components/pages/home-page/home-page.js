import React from "react";

import "./home-page.css";
import BookList from "../../book-list";

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J. Fowler"
    },
    {
      id: 2,
      title: "Release It!",
      author: "Michael T. Nygard"
    }
  ];
  return (
    <div>
      <h2>HomePage</h2>
      <BookList books={books}/>
    </div>
  );
};

export default HomePage;