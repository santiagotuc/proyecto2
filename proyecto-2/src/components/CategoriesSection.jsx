import React from "react";
import "./CategoriesSection.css";

function CategoriesSection() {
  const categories = [
    {
      id: 1,
      name: "Acción",
      movies: ["Película A1", "Película A2", "Película A3", "Película A4"],
    },
    {
      id: 2,
      name: "Comedia",
      movies: ["Película C1", "Película C2", "Película C3"],
    },
    {
      id: 3,
      name: "Drama",
      movies: [
        "Película D1",
        "Película D2",
        "Película D3",
        "Película D4",
        "Película D5",
      ],
    },
  ];

  return (
    <section className="categories-section">
      <h2>Explora nuestras categorías</h2>
      {categories.map((category) => (
        <div key={category.id} className="category">
          <h3>{category.name}</h3>
        </div>
      ))}
    </section>
  );
}

export default CategoriesSection;
