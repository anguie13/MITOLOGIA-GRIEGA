import React from "react";
import { Link } from "react-router-dom";

function Afrodita() {
  return (
    <div className="dios-container">
      <img
        src="src/assets/img/pergamino.svg"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">Afrodita</p>
        <p className="limited-text-dioses">
          Afrodita era la diosa del amor, la belleza y la fertilidad.Se creía
          que Afrodita era la hija de Zeus o que había surgido del mar sobre una
          concha.
          <br />
          <br />
          Fue adorada en gran medida como diosa del amor y la belleza en muchas
          de las ciudades que componían la antigua Grecia. Esposa de Hefesto, le
          era infiel con muchos, entre ellos con Ares.
        </p>
      </div>
      <img
        src="src/assets/img/afrodita-circle.svg"
        alt=""
        className="bottom-right-image-dioses"
      />

      <div className="btn-dioses">
        <Link to="/descripcion_dioses_afrodita">
          <button>Anterior</button>
        </Link>
        <Link to="/afrodita_video">
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default Afrodita;
