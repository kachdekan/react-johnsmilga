import React, { useState } from "react";
import data from "./projects/01-bday-reminder/setup/data";
import List from "./projects/01-bday-reminder/setup/List";
function App() {
  const [people, setPeople] = useState(data);
  const removeBday = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    // console.log("Removed " + id);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} removeBday={removeBday} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
