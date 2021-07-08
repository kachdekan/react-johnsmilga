import React from "react";
import ReactDom from "react-dom";

//JSX and Props
import "./index.css";
const books = [
  {
    imgsrc:
      "https://images-na.ssl-images-amazon.com/images/I/81GIvo3b02L._AC_UL200_SR200,200_.jpg",
    imgalt: "Paint by Sticker Kids",
    title: "Paint by Sticker Kids: Zoo Animals",
    author: "Workman Publishing",
  },
  {
    imgsrc:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    imgalt: "i love you to the moon",
    title: "I Love You to the Moon and Back",
    author: "Amalia Hepworth",
  },
  {
    imgsrc:
      "https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_UL200_SR200,200_.jpg",
    imgalt: "Where's Spot? ",
    title: "Where's Spot? Board book",
    author: "Eric Hill",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { imgsrc, imgalt, title, author } = book;
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { imgsrc, imgalt, title, author } = props.book;
  return (
    <article className="book">
      <img src={imgsrc} alt={imgalt} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const AltBook = ({ imgsrc, imgalt, title, author }) => {
  return (
    <article className="book">
      <img src={imgsrc} alt={imgalt} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
