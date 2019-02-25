import React from "react";

import "./book-list.css";
import BookListItem from "../book-list-item";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
            return <li key={book.id}>
              <BookListItem
                onAddedToCart={() => onAddedToCart(book.id)}
                book={book}/>
            </li>;
          }
        )
      }
    </ul>
  );
};

export default BookList;
