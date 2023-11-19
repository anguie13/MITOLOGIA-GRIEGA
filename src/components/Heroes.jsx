import React from "react";
import "../estilos.css";
import TitleDioses from "./TitleDioses";
import { Link } from "react-router-dom";
import HeroesBoton from "./HeroesBoton";

function Heroes() {
  return (
    <div>
      <img
        className="fondo6"
        src="src/assets/img/fondo_heroes.svg"
        alt="Templo de atenea"
      />
      <div className="texto-principales-dioses">
        <TitleDioses title="Héroes" />
      </div>
      <div className="boton-heroes-sobre-imagen">
        <div className="wrapper">
          <Link to="/descripcion_heroes_aquiles">
            <HeroesBoton nom_dios="AQUILES" />
          </Link>

          <Link to="/descripcion_heroes_ulises">
            <HeroesBoton nom_dios="ULISES" />
          </Link>
          <Link to="/descripcion_heroes_orfeo">
            <HeroesBoton nom_dios="ORFEO" />
          </Link>
          <Link to="/descripcion_heroes_perseo">
            <HeroesBoton nom_dios="PERSEO" />
          </Link>
          <Link to="/descripcion_heroes_edipo">
            <HeroesBoton nom_dios="EDIPO" />
          </Link>
          <Link to="/descripcion_heroes_heracles">
            <HeroesBoton nom_dios="HERACLES" />
          </Link>
          <Link to="/menu">
            <div className="btn-menu">
              <button>Menu</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Heroes;
