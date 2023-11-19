import React from "react";
import "../estilos.css";
import PrincipalesDiosesBoton from "./PrincipalesDiosesBoton";
import BotonVacio from "./BotonVacio";
import TitleDioses from "./TitleDioses";
import { Link } from "react-router-dom";
import OtrosDiosesBoton from "./OtrosDiosesBoton";

function OtrosDioses() {
  return (
    <div>
      <img
        className="fondo4"
        src="src/assets/img/fondo_otros_dioses.svg"
        alt="Templo de atenea"
      />
      <div className="texto-otros-dioses">
        <TitleDioses title="Otros Dioses" />
      </div>
      <div className="boton-otros-dioses-sobre-imagen">
        <div className="wrapper">
          <Link to="/otros_dioses_caracteristicas">
            <OtrosDiosesBoton nom_dios="GEA" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/descripcion_dioses_hera">
            <OtrosDiosesBoton nom_dios="URANO" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/descripcion_dioses_poseidon">
            <OtrosDiosesBoton nom_dios="CRONO" />
          </Link>
          <BotonVacio />
          <Link to="/descripcion_dioses_atenea">
            <OtrosDiosesBoton nom_dios="REA" />
          </Link>
          <BotonVacio />
          <Link to="/descripcion_dioses_hefesto">
            <OtrosDiosesBoton nom_dios="HADES" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/descripcion_dioses_apolo">
            <OtrosDiosesBoton nom_dios="METIS" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/descripcion_dioses_artemisa">
            <OtrosDiosesBoton nom_dios="PERSÉFONE" />
          </Link>
          <BotonVacio />
          <Link to="/descripcion_dioses_hermes">
            <OtrosDiosesBoton nom_dios="EROS" />
          </Link>
          <BotonVacio />
          <Link to="/descripcion_dioses_ares">
            <OtrosDiosesBoton nom_dios="NYX" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/descripcion_dioses_afrodita">
            <OtrosDiosesBoton nom_dios="ÉREBO" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/descripcion_dioses_dionisio">
            <OtrosDiosesBoton nom_dios="TIQUE" />
          </Link>
          <BotonVacio />
          <Link to="/descripcion_dioses_demeter">
            <OtrosDiosesBoton nom_dios="SELENE" />
          </Link>
          <BotonVacio />
          <Link to="/descripcion_dioses_ares">
            <OtrosDiosesBoton nom_dios="HÉCATE" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/descripcion_dioses_afrodita">
            <OtrosDiosesBoton nom_dios="MOIRAS" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/descripcion_dioses_dionisio">
            <OtrosDiosesBoton nom_dios="EOLO" />
          </Link>
          <BotonVacio />
          <Link to="/descripcion_dioses_demeter">
            <OtrosDiosesBoton nom_dios="PÁN" />
          </Link>

          <Link to="/zeus">
            <div className="btn-juego">
              <button>
                <p>
                  ¡Pon a prueba tu conocimiento acerca de los dioses griegos!
                </p>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OtrosDioses;
