import React from "react";
import "../estilos.css";
import TitleDioses from "./TitleDioses";
import { Link } from "react-router-dom";
import CriaturasBoton from "./CriaturasBoton";

function Criaturas() {
  return (
    <div>
      <img
        className="fondo7"
        src="src/assets/img/fondo_monstruos.svg"
        alt="Templo de atenea"
      />
      <div className="texto-principales-dioses">
        <TitleDioses title="Criaturas y Monstruos" />
      </div>
      <div className="boton-heroes-sobre-imagen">
        <div className="wrapper">
          <Link to="/descripcion_criaturas_quimera">
            <CriaturasBoton nom_dios="QUIMERA" />
          </Link>

          <Link to="/descripcion_criaturas_minotauro">
            <CriaturasBoton nom_dios="MINOTAURO" />
          </Link>
          <Link to="/descripcion_criaturas_cerbero">
            <CriaturasBoton nom_dios="CERBERO" />
          </Link>
          <Link to="/descripcion_criaturas_ciclope">
            <CriaturasBoton nom_dios="CICLOPE" />
          </Link>
          <Link to="/descripcion_criaturas_grifo">
            <CriaturasBoton nom_dios="GRIFO" />
          </Link>
          <Link to="/descripcion_criaturas_esfinge">
            <CriaturasBoton nom_dios="ESFINGE" />
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

export default Criaturas;
