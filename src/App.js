import React, { useState } from "react";
import Menu from "./projects/05-menu/setup/Menu";
import Categories from "./projects/05-menu/setup/Categories";
import items from "./projects/05-menu/setup/data";

// getting unique categories
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
