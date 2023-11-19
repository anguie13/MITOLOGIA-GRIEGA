import React from "react";
import { Link } from "react-router-dom";

function Poseidon() {
  return (
    <div className="dios-container">
      <img
        src="src/assets/img/pergamino.svg"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">Poseidon</p>
        <p className="limited-text-dioses">
          Poseidón era uno de los dioses principales del Olimpo y gobernaba
          sobre los mares. Era el hermano de Zeus y Hades, y como dios del mar,
          controlaba las olas y los vientos.
          <br />
          <br />
          Su tridente, un arma de tres puntas, simbolizaba su dominio sobre los
          océanos. Poseidón también estaba asociado con los terremotos, ya que
          se creía que agitaba la tierra con su tridente.
        </p>
      </div>
      <img
        src="src/assets/img/poseidon-circle.svg"
        alt=""
        className="bottom-right-image-dioses"
      />

      <div className="btn-dioses">
        <Link to="/descripcion_dioses_poseidon">
          <button>Anterior</button>
        </Link>
        <Link to="/poseidon_video">
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default Poseidon;
