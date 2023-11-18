import React from "react";
import { Link } from "react-router-dom";

function Hera() {
  return (
    <div class="dios-container">
      <img
        src="src/assets/img/pergamino.svg"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">Hera</p>
        <p className="limited-text-dioses">
          Esposa de Zeus, Hera era la reina de los dioses griegos y también la
          diosa del matrimonio, las mujeres, las familias y el nacimiento,
          actuando como su protectora.
          <br />
          <br />A menudo cobraba venganza de las infidelidades de su esposo en
          sus amantes o en la descendencia de éstas, por lo que era antagonista
          de muchos héroes.
        </p>
      </div>
      <img
        src="src/assets/img/hera-circle.svg"
        alt=""
        className="bottom-right-image-dioses"
      />

      <div className="btn-dioses">
        <Link to="/descripcion_dioses_hera">
          <button>Anterior</button>
        </Link>
        <Link to="/videozeus">
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default Hera;
