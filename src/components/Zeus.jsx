import React from "react";
import { Link } from "react-router-dom";

function Zeus() {
  return (
    <div className="dios-container">
      <img
        src="src/assets/img/pergamino.svg"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">Zeus</p>
        <p className="limited-text-dioses">
          Hijo de Cronos y Rea. Zeus era el más poderoso de los dioses griegos.
          Como dios del cielo y rey del Olimpo, su temperamento afectaba el
          clima.Es el símbolo de la lluvia, el viento, las tormentas, del ciclo
          de las estaciones y de la sucesión de la noche y el día. Su misión es
          mantener el equilibrio del Universo y proteger los privilegios de los
          dioses
          <br />
          <br />
          Hermano de Hades y de Poseidón. Hermano y esposo de Hera, tuvo muchas
          amantes humanas y divinas, dando origen a diversos linajes heroicos.
        </p>
      </div>
      <img
        src="src/assets/img/zeus-circle.svg"
        alt=""
        className="bottom-right-image-dioses"
      />
      <div className="btn-dioses">
        <Link to="/descripcion_dioses_zeus">
          <button>Anterior</button>
        </Link>
        <Link to="/zeus_video">
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default Zeus;
