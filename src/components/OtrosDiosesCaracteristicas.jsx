import React from "react";
import { Link } from "react-router-dom";

function OtrosDiosesCaracteristicas({
  img_dios = "",
  nom_dios = "",
  dominio = "",
  simbolos = "",
  caracteristicas = "",
  ruta_anterior = "",
  ruta_siguiente = "",
}) {
  return (
    <div class="contenedor-otros">
      <div class="imagen-principal-otros">
        <img
          src="src/assets/img/pergamino-otros-dioses.svg"
          alt="Imagen Principal"
        />
        <div className="text-overlay-otros-dioses">
          <div className="limited-text-otros-dioses">
            <strong>{nom_dios}</strong>
            <br />
            <br />
            <strong>Dominio: </strong>
            {dominio}
            <br />
            <br />
            <strong>Simbolos: </strong>
            {simbolos}
            <br />
            <br />
            <strong>Caracteristicas: </strong>
            {caracteristicas}
          </div>
        </div>
        <div class="imagen-derecha-otros">
          <img src={img_dios} alt="Imagen Derecha" />
        </div>
      </div>
      <div class="btn-dioses-otros">
        <Link to={ruta_anterior}>
          <button>Anterior</button>
        </Link>
        <Link to={ruta_siguiente}>
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default OtrosDiosesCaracteristicas;
