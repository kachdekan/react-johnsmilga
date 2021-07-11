import React, { useState } from "react";
import data from "./projects/07-slider/setup/data";
import Slider from "./projects/07-slider/setup/Slider";

function App() {
  const [people] = useState(data);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <Slider people={people} />
    </section>
  );
}

export default App;
