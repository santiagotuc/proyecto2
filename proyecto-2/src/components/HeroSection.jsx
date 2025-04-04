import React from "react";
import featuredMovie from "../assets/featured-movie.jpg";
import Button from "./Button";
import "./HeroSection.css";

function HeroSection() {
  const movieTitle = "El señor de los anillos";
  const movieDescription =
    "La trilogía cinematográfica de El Señor de los Anillos, basada en la novela homónima del escritor británico J. R. R. Tolkien, comprende tres películas épicas de fantasía, acción y aventuras: El Señor de los Anillos: la Comunidad del Anillo (2001), El Señor de los Anillos: las dos torres (2002) y El Señor de los Anillos: el retorno del Rey (2003).";

  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img
          src={featuredMovie}
          alt="El señor de los anillos"
          className="hero-image"
        />
      </div>
      <div className="hero-content">
        <h1>{movieTitle}</h1>
        <p>{movieDescription}</p>
        <Button
          onClick={() => (window.location.href = "/ver-pelicula")}
          text="Reproducir"
        />
        {}
      </div>
    </section>
  );
}

export default HeroSection;
