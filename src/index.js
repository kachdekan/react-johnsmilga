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
const title = "I Love You to the Moon and Back";
const author = "Amalia Hepworth";
const imgsrc =
  "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg";
const imgalt = "i love you to the moon";

function BookList() {
  return (
    <section className="booklist">
      <Book
        imgsrc={firstBook.imgsrc}
        imgalt={firstBook.imgalt}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book imgsrc={imgsrc} imgalt={imgalt} title={title} author={author} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.imgsrc} alt={props.imgalt} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      <p>{props.job}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
