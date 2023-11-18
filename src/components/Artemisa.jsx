import React from "react";
import { Link } from "react-router-dom";

function Artemisa() {
  return (
    <div class="dios-container">
      <img
        src="src/assets/img/pergamino.svg"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">Artemisa</p>
        <p className="limited-text-dioses">
          Hija de Zeus y Leto. Hermana gemela de Apolo.Era una diosa asociada
          con la caza, la naturaleza salvaje y la Luna.
          <br />
          <br />
          Como diosa de la caza, empleaba su arco y flechas y tenía un perro de
          caza como compañero. Entre la población rural, Artemisa era la diosa
          favorita. Diosa de los animales, Artemisa castigaba a cualquiera que
          lastimara a cualquier animal sagrado para ella, incluidos los osos y
          los ciervos.
        </p>
      </div>
      <img
        src="src/assets/img/artemisa-circle.svg"
        alt=""
        className="bottom-right-image-dioses"
      />

      <div className="btn-dioses">
        <Link to="/descripcion_dioses_artemisa">
          <button>Anterior</button>
        </Link>
        <Link to="/videozeus">
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default Artemisa;
