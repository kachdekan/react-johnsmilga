import React from "react";
import ReactDom from "react-dom";

//Import and Export
import "./index.css";

import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { imgsrc, imgalt, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
