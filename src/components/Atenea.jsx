import React from "react";
import { Link } from "react-router-dom";

function Atenea() {
  return (
    <div className="dios-container">
      <img
        src="src/assets/img/pergamino.svg"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">Atenea</p>
        <p className="limited-text-dioses">
          Hija de Zeus. Nació de la cabeza de Zeus ya adulta y usando una
          armadura, luego de que éste se tragara a su madre Metis. Diosa
          guerrera, de la sabiduría, la artesanía, la defensa y la estrategia de
          guerra
          <br />
          <br />
          También era la patrona de Atenas, la ciudad a la que dio su nombre, y
          se la adoraba por su contribución a la civilización y las artes.
        </p>
      </div>
      <img
        src="src/assets/img/atenea-circle.svg"
        alt=""
        className="bottom-right-image-dioses"
      />

      <div className="btn-dioses">
        <Link to="/descripcion_dioses_atenea">
          <button>Anterior</button>
        </Link>
        <Link to="/atenea_video">
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default Atenea;
