import React from "react";
import { Link } from "react-router-dom";


function Demeter() {
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
          Como diosa griega de la agricultura y la cosecha, Deméter controlaba
          las estaciones y el crecimiento de los cultivos. Por lo tanto, los
          antiguos griegos adoraban y rezaban a Deméter con la esperanza de que
          sus tierras produjeran con éxito.
          <br />
          <br />
          Deméter enseñó a los hombres mortales cómo cultivar maíz, y se creía
          que la esterilidad del invierno se debía a su tristeza porque su hija
          Perséfone tenía que vivir en el inframundo con Hades durante estos
          meses.
        </p>
      </div>
      <img
        src="src/assets/img/descripcion_demeter.svg"
        alt=""
        className="bottom-right-image-dioses"
      />
      <Link to="/fondo">
      <button class="centered-button-dioses">Siguiente</button>
      </Link>
    </div>
  );
}

export default Demeter;
