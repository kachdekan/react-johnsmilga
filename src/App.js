import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./projects/15-cocktails/setup/pages/Home";
import About from "./projects/15-cocktails/setup/pages/About";
import SingleCocktail from "./projects/15-cocktails/setup/pages/SingleCocktail";
import Error from "./projects/15-cocktails/setup/pages/Error";
// import components
import Navbar from "./projects/15-cocktails/setup/components/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cocktail/:id">
            <SingleCocktail />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
