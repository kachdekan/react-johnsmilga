import React from "react";
import ReactDom from "react-dom";

// JSX Rules
// return single element
// div / section / article / react-fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function Greeting() {
  return (
    <div>
      <h3>Hello People</h3>
      <ul>
        <li>
          <a href="/">hello world</a>
        </li>
        <input type="text" name="" id="" />
        <img src="" alt="" />
      </ul>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
