import React from "react";
import "../estilos.css";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="contenedor">
      <img
        className="fondo"
        src="src/assets/img/fondo_index.svg"
        alt="Olimpo en unatardecer"
      />
      <div className="texto-sobre-imagen">
        <h1>TRAVESÍA EN LA MITOLOGÍA GRIEGA</h1>
      </div>
      <Link to="/principales_dioses">
        <button className="boton-sobre-imagen">Play</button>
      </Link>
    </div>
  );
}

export default Index;
