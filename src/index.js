import React from "react";
import ReactDom from "react-dom";

//JSX and Props
import "./index.css";
const title = "I Love You to the Moon and Back";
const author = "Amalia Hepworth";
const imgsrc =
  "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg";
const imgalt = "i love you to the moon";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={imgsrc} alt={imgalt} />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
