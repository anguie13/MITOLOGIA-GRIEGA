import React from "react";
import { Link } from "react-router-dom";

function Ares() {
  return (
    <div class="dios-container">
      <img
        src="src/assets/img/pergamino.svg"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">Ares</p>
        <p className="limited-text-dioses">
          Hijo de Zeus y Hera, Ares era el dios de la guerra, personificaba la
          brutalidad y la violencia en la guerra, en contraste con Atenea, que
          representaba la guerra estratégica y justa.
          <br />
          <br />
          Despreciado por todos los otros dioses excepto por Afrodita, con quien
          tenía un amorío. Era un dios cruel, por lo que sus padres no lo
          querían a y no era adorado en la misma medida que otros dioses
          griegos. Su influencia era poderosa en la batalla, inspirando
          valentía, era adorado en Esparta, donde su brutalidad en la guerra era
          apreciada.
        </p>
      </div>
      <img
        src="src/assets/img/ares-circle.svg"
        alt=""
        className="bottom-right-image-dioses"
      />

      <div className="btn-dioses">
        <Link to="/descripcion_dioses_ares">
          <button>Anterior</button>
        </Link>
        <Link to="/videozeus">
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default Ares;
