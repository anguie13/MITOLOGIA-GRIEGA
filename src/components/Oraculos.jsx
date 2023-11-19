import React from "react";
import "../estilos.css";
import TitleDioses from "./TitleDioses";
import { Link } from "react-router-dom";
import CriaturasBoton from "./CriaturasBoton";
import OraculosBoton from "./OraculosBoton";

function Oraculos() {
  return (
    <div>
      <img
        className="fondo7"
        src="src/assets/img/fondo_oraculos.svg"
        alt="Templo de atenea"
      />
      <div className="texto-principales-dioses">
        <TitleDioses title="Oráculos" />
      </div>
      <div className="boton-heroes-sobre-imagen">
        <div className="wrapper">
          <Link to="/descripcion_oraculos_delfos">
            <OraculosBoton nom_dios="Oráculo de Delfos" />
          </Link>

          <Link to="/descripcion_oraculos_dodoma">
            <OraculosBoton nom_dios="Oráculo de Dódona" />
          </Link>
          <Link to="/descripcion_oraculos_didima">
            <OraculosBoton nom_dios="Oráculo de Dídima" />
          </Link>
          <Link to="/descripcion_oraculos_epiro">
            <OraculosBoton nom_dios="Oráculo de Epiro" />
          </Link>
          <Link to="/descripcion_oraculos_claros">
            <OraculosBoton nom_dios="Oráculo de Claros" />
          </Link>
          <Link to="/descripcion_oraculos_amon">
            <OraculosBoton nom_dios="Oráculo de Amón en Libia" />
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

export default Oraculos;
