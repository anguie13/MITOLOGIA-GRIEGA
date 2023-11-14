import React from "react";
import "../estilos.css";
import PrincipalesDiosesBoton from "./PrincipalesDiosesBoton";
import BotonVacio from "./BotonVacio";
import TitleDioses from "./TitleDioses";
import { Link } from "react-router-dom";

function PrincipalesDioses() {
  return (
    <div>
      <img
        className="fondo2"
        src="src/assets/img/fondo_principales_dioses.svg"
        alt="Templo de atenea"
      />
      <div className="texto-principales-dioses">
        <TitleDioses title="Principales Dioses" />
      </div>
      <div className="boton-dios-sobre-imagen">
        <div className="wrapper">
          <Link to="/descripcion-dioses">
            <PrincipalesDiosesBoton nom_dios="ZEUS" />
          </Link>

          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <PrincipalesDiosesBoton nom_dios="HERA" />
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <PrincipalesDiosesBoton nom_dios="POSEIDÓN" />
          <BotonVacio />
          <PrincipalesDiosesBoton nom_dios="ATENEA" />
          <BotonVacio />
          <PrincipalesDiosesBoton nom_dios="HEFESTO" />
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <PrincipalesDiosesBoton nom_dios="APOLO" />
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <PrincipalesDiosesBoton nom_dios="ARTEMISA" />
          <BotonVacio />
          <PrincipalesDiosesBoton nom_dios="HERMES" />
          <BotonVacio />
          <PrincipalesDiosesBoton nom_dios="ARES" />
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <PrincipalesDiosesBoton nom_dios="AFRODITA" />
          <BotonVacio />
          <BotonVacio />
          <BotonVacio />
          <PrincipalesDiosesBoton nom_dios="DIONISIO" />
          <BotonVacio />
          <PrincipalesDiosesBoton nom_dios="DEMÉTER" />
        </div>
      </div>
    </div>
  );
}

export default PrincipalesDioses;
