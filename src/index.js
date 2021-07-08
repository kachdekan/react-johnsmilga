import React from "react";
import ReactDom from "react-dom";

//JSX and Props
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

// const Book = (props) => {
//   const { imgsrc, imgalt, title, author } = props;
//   return (
//     <article className="book">
//       <img src={imgsrc} alt={imgalt} />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

ReactDom.render(<BookList />, document.getElementById("root"));
