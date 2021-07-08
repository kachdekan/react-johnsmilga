import React from "react";
import ReactDom from "react-dom";

//JSX and Props
import "./index.css";
const firstBook = {
  imgsrc:
    "https://images-na.ssl-images-amazon.com/images/I/81GIvo3b02L._AC_UL200_SR200,200_.jpg",
  imgalt: "Paint by Sticker Kids",
  title: "Paint by Sticker Kids: Zoo Animals",
  author: "Workman Publishing",
};
const secondBook = {
  imgsrc:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  imgalt: "i love you to the moon",
  title: "I Love You to the Moon and Back",
  author: "Amalia Hepworth",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        imgsrc={firstBook.imgsrc}
        imgalt={firstBook.imgalt}
        title={firstBook.title}
        author={firstBook.author}
      />
      <AltBook
        imgsrc={secondBook.imgsrc}
        imgalt={secondBook.imgalt}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { imgsrc, imgalt, title, author } = props;
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
