import React from "react";
import { Link } from "react-router-dom";

function DescripciónDiosesZeus() {
  return (
    <div>
      <table className="tablaDescripcion">
        <tr>
          <td class="columna1">
            <img
              className="descripcion_img"
              src="src/assets/img/descripcion_zeus.svg"
              alt=""
            />
          </td>
          <td class="columna2">
            <ul>
              <li>
                <strong>Nombre: </strong>Zeus
              </li>
              <li>
                <strong>Poderes: </strong>Control del cielo y tormentas. Líder
                del Olimpo
              </li>
              <li>
                <strong>Fortalezas: </strong>Sabiduría, autoridad y control
                sobre la naturaleza
              </li>
              <li>
                <strong>Debilidades: </strong>A veces impulsivo y susceptible a
                la ira
              </li>
              <li>
                <strong>Rol: </strong>Rey del Olimpo y gobernante de los dioses
              </li>
              <li>
                <strong>Arma: </strong>Rayo
              </li>
              <li>
                <strong>Nombre Romano: </strong>Júpiter
              </li>
            </ul>
          </td>
        </tr>
        <tr className="btn-descripcion-dioses">
          <Link to="/dioses_olimpo">
            <button>Anterior</button>
          </Link>
          <Link to="/zeus">
            <button className="btn_siguiente">Siguiente</button>
          </Link>
        </tr>
      </table>
    </div>
  );
}

export default DescripciónDiosesZeus;
