import React from "react";
import "../estilos.css";
import PrincipalesDiosesBoton from "./PrincipalesDiosesBoton";
import BotonVacio from "./BotonVacio";
import TitleDioses from "./TitleDioses";
import { Link } from "react-router-dom";

function DiosesOlimpo() {
  return (
    <div>
      <img
        className="fondo2"
        src="src/assets/img/fondo_dioses_olimpo.svg"
        alt="Templo de atenea"
      />
      <div className="texto-principales-dioses">
        <TitleDioses title="Dioses del Olimpo" />
      </div>
      <div className="boton-dios-sobre-imagen">
        <div className="wrapper">
          <Link to="/descripcion_dioses_zeus">
            <PrincipalesDiosesBoton nom_dios="ZEUS" />
          </Link>

          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/descripcion_dioses_hera">
            <PrincipalesDiosesBoton nom_dios="HERA" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/descripcion_dioses_poseidon">
            <PrincipalesDiosesBoton nom_dios="POSEIDÓN" />
          </Link>
          <BotonVacio />
          <Link to="/descripcion_dioses_atenea">
            <PrincipalesDiosesBoton nom_dios="ATENEA" />
          </Link>
          <BotonVacio />
          <Link to="/descripcion_dioses_hefesto">
            <PrincipalesDiosesBoton nom_dios="HEFESTO" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/descripcion_dioses_apolo">
            <PrincipalesDiosesBoton nom_dios="APOLO" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/descripcion_dioses_artemisa">
            <PrincipalesDiosesBoton nom_dios="ARTEMISA" />
          </Link>
          <BotonVacio />
          <Link to="/descripcion_dioses_hermes">
            <PrincipalesDiosesBoton nom_dios="HERMES" />
          </Link>
          <BotonVacio />
          <Link to="/descripcion_dioses_ares">
            <PrincipalesDiosesBoton nom_dios="ARES" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/descripcion_dioses_afrodita">
            <PrincipalesDiosesBoton nom_dios="AFRODITA" />
          </Link>
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <Link to="/descripcion_dioses_dionisio">
            <PrincipalesDiosesBoton nom_dios="DIONISIO" />
          </Link>
          <BotonVacio />
          <Link to="/descripcion_dioses_demeter">
            <PrincipalesDiosesBoton nom_dios="DEMÉTER" />
          </Link>
          <Link to="/otros_dioses">
            <div className="btn-otros-dioses">
              <button>Otros Dioses</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DiosesOlimpo;
