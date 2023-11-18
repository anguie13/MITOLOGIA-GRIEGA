import React from "react";
import { Link } from "react-router-dom";

function Deméter() {
  return (
    <div class="dios-container">
      <img
        src="src/assets/img/pergamino.svg"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">Demeter</p>
        <p className="limited-text-dioses">
          Hija de Cronos y Rea. Hermana de Zeus. Diosa de la fertilidad, las
          estaciones, de la agricultura y la naturaleza. Los antiguos griegos
          adoraban y rezaban a Deméter con la esperanza de que sus tierras
          produjeran con éxito.
          <br />
          <br />
          Deméter enseñó a los hombres mortales cómo cultivar maíz, y se creía
          que la esterilidad del invierno se debía a su tristeza porque su hija
          Perséfone tenía que vivir en el inframundo con Hades durante estos
          meses.
        </p>
      </div>
      <img
        src="src/assets/img/demeter-circle.svg"
        alt=""
        className="bottom-right-image-dioses"
      />

      <div className="btn-dioses">
        <Link to="/descripcion_dioses_demeter">
          <button>Anterior</button>
        </Link>
        <Link to="/videozeus">
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default Deméter;
