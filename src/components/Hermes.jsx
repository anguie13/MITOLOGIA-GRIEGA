import React from "react";
import { Link } from "react-router-dom";

function Hermes() {
  return (
    <div class="dios-container">
      <img
        src="src/assets/img/pergamino.svg"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">Hermes</p>
        <p className="limited-text-dioses">
          Hijo de Zeus y Maia, una de las Pléyades.Hermes era el mensajero de
          los dioses, tenía la habilidad de viajar entre el mundo de los dioses
          y el de los mortales.
          <br />
          <br />
          El hijo menor de Zeus, Hermes, se convirtió en el mensajero de los
          dioses debido a su rapidez y confiabilidad. Llevaba puestos zapatos
          alados, y así podía volar y viajar rápidamente. Era el protector de
          los viajeros y comerciantes, patrono del comercio, la retórica, la
          mentira y los ladrones,se le atribuye la creación del boxeo y la
          gimnasia.
        </p>
      </div>
      <img
        src="src/assets/img/hermes-circle.svg"
        alt=""
        className="bottom-right-image-dioses"
      />

      <div className="btn-dioses">
        <Link to="/descripcion_dioses_hermes">
          <button>Anterior</button>
        </Link>
        <Link to="/videozeus">
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default Hermes;
