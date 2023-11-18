import React from "react";
import { Link } from "react-router-dom";

function Dionisio() {
  return (
    <div class="dios-container">
      <img
        src="src/assets/img/pergamino.svg"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">Dionisio</p>
        <p className="limited-text-dioses">
          Hijo de Zeus y Sémele, una mortal.Dios del vino y la celebración,
          patrono del teatro y el más joven del olimpo. Al ser una parte
          importante de la antigua cultura griega, como dios del vino, era muy
          popular.
          <br />
          <br />
          A medida que Dionisio creció aprendió a cultivar uvas, convirtiéndose
          en la primera persona en hacer vino. Enseñó a la población cómo hacer
          vino y luego ascendió al monte Olimpo, siendo el último en llegar de
          los doce dioses y diosas griegos.
          <br />
          <br />
          La historia de su nacimiento es particularmente trágica, ya que su
          madre fue consumida por el fuego divino de Zeus cuando ella le pidió
          ver su forma verdadera.
        </p>
      </div>
      <img
        src="src/assets/img/dionisio-circle.svg"
        alt=""
        className="bottom-right-image-dioses"
      />

      <div className="btn-dioses">
        <Link to="/descripcion_dioses_dionisio">
          <button>Anterior</button>
        </Link>
        <Link to="/videozeus">
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default Dionisio;
