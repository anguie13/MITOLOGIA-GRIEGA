import React from "react";
import { Link } from "react-router-dom";

function OtrosDiosesCaracteristicas() {
  return (
    <div className="dios-container2">
      <img
        src="src/assets/img/pergamino-otros-dioses.svg"
        alt=""
        className="pergamino-image-otros-dioses"
      />
      <div className="text-overlay-otros-dioses">
        <p className="limited-text-otros-dioses">
          <img
            src="src/assets/img/descripcion_demeter.jpg"
            alt=""
            className="bottom-right-image-otros-dioses"
          />
          <strong>dios</strong>
          <br />
          <br />
          <strong>Dominio: </strong>xxxx
          <br />
          <br />
          <strong>Simbolos: </strong>xxxxxx
          <br />
          <br />
          <strong>Caracteristicas: </strong>
          Hermano de Hades y de Poseidón. Hermano y esposo de Hera, tuvo muchas
          amantes humanas y divinas, dando origen a diversos linajes heroicos.
        </p>
      </div>
      <div className="btn-dioses">
        <div className="btn-otros-dioses">
          <Link to="/descripcion_dioses_zeus">
            <button>Anterior</button>
          </Link>
          <Link to="/zeus_video">
            <button>Siguiente</button>
          </Link>
        </div>
      </div>
      <div className="btn-otros-dioses2"></div>
    </div>
  );
}

export default OtrosDiosesCaracteristicas;
