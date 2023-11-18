import React from "react";
import { Link } from "react-router-dom";

function Apolo() {
  return (
    <div class="dios-container">
      <img
        src="src/assets/img/pergamino.svg"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">Apolo</p>
        <p className="limited-text-dioses">
          Hijo de Zeus y Leto. Su hermana gemela era Artemisa.Dios solar, de la
          luz, del conocimiento y la medicina, del tiro con arco, la música y la
          profecía.Su imagen estaba vinculada a la belleza y la perfección.
          <br />
          <br />
          Apolo tocaba música para los dioses y diosas griegos con su lira
          dorada. También enseñó a los humanos el arte de la medicina y, a
          veces, se le conoce como “el sanador” por tener la capacidad de curar
          a las personas de enfermedades, pero también por transmitir
          infecciones a quienes lo enfadaron.
        </p>
      </div>
      <img
        src="src/assets/img/apolo-circle.svg"
        alt=""
        className="bottom-right-image-dioses"
      />

      <div className="btn-dioses">
        <Link to="/descripcion_dioses_apolo">
          <button>Anterior</button>
        </Link>
        <Link to="/videozeus">
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default Apolo;
