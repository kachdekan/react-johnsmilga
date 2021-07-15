import React from "react";
import { useGlobalContext } from "./projects/14-shopping-cart/setup/context";

// components
import Navbar from "./projects/14-shopping-cart/setup/Navbar";
import CartContainer from "./projects/14-shopping-cart/setup/CartContainer";
// items

function App() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
