import React from "react";

const Book = ({ imgsrc, imgalt, title, author }) => {
  // attribute, eventHandler
  // onlick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };

  const complexHandler = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={imgsrc} alt={imgalt} />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <button type="button" onClick={() => complexHandler(author)}>
        Complex Ex
      </button>
    </article>
  );
};

export default Book;
