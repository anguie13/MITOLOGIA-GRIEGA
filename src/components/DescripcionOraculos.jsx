import React from "react";
import { Link } from "react-router-dom";

function DescripcionOraculos({nom='', resumen='', url_img='', btn_ant='', btn_sig=''}) {
  return (
    <div className="container">
      <img
        src="src/assets/img/fondo_descripcion_oraculo.avif"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">{nom}</p>
        <p className="limited-text-dioses">
          {resumen}
        </p>
        <img className="img_heroes"
        src={url_img}
        alt=""
      />
      </div>
      

      <div className="btn-dioses">
        <Link to={btn_ant}>
          <button>Anterior</button>
        </Link>
        <Link to={btn_sig}>
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default DescripcionOraculos;
