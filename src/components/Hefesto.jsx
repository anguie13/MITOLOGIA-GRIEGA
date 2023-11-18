import React from "react";
import { Link } from "react-router-dom";

function Hefesto() {
  return (
    <div class="dios-container">
      <img
        src="src/assets/img/pergamino.svg"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">Hefesto</p>
        <p className="limited-text-dioses">
          Hijo Hera (con Zeus o sin él). Hefesto era el dios del fuego y la
          forja en la mitología griega. Era un artesano extraordinariamente
          habilidoso, forjando armas y herramientas para los dioses, sus
          creaciones incluían armas divinas, armaduras y otros objetos mágicos.
          <br />
          <br />
          Fue arrojado por Hera poco después de su nacimiento debido a su
          fealdad, lo que le ocasionó una cojera. Hefesto estaba asociado con
          artesanos y herreros, y estaba casado con la diosa Afrodita.
        </p>
      </div>
      <img
        src="src/assets/img/hefesto-circle.svg"
        alt=""
        className="bottom-right-image-dioses"
      />

      <div className="btn-dioses">
        <Link to="/descripcion_dioses_hefesto">
          <button>Anterior</button>
        </Link>
        <Link to="/videozeus">
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default Hefesto;
