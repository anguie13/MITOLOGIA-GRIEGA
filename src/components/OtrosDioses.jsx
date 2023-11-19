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
          <Link to="/otros_dioses_caracteristicas_gea">
            <OtrosDiosesBoton nom_dios="GEA" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/otros_dioses_caracteristicas_urano">
            <OtrosDiosesBoton nom_dios="URANO" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/otros_dioses_caracteristicas_crono">
            <OtrosDiosesBoton nom_dios="CRONO" />
          </Link>
          <BotonVacio />
          <Link to="/otros_dioses_caracteristicas_rea">
            <OtrosDiosesBoton nom_dios="REA" />
          </Link>
          <BotonVacio />
          <Link to="/otros_dioses_caracteristicas_hades">
            <OtrosDiosesBoton nom_dios="HADES" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/otros_dioses_caracteristicas_metis">
            <OtrosDiosesBoton nom_dios="METIS" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/otros_dioses_caracteristicas_persefone">
            <OtrosDiosesBoton nom_dios="PERSÉFONE" />
          </Link>
          <BotonVacio />
          <Link to="/otros_dioses_caracteristicas_hecate">
            <OtrosDiosesBoton nom_dios="HÉCATE" />
          </Link>
          <BotonVacio />


          <Link to="/juego_dioses">
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
