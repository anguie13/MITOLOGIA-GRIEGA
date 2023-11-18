import React from "react";
import { Link } from "react-router-dom";


function DescripciónDiosesPoseidon() {
  return (
    <div>
      <table className="tablaDescripcion">
        <tr>
          <td className="columna1">
            <img
              className="descripcion_img"
              src="src/assets/img/descripcion_poseidon.jpg"
              alt=""
            />
          </td>
          <td class="columna2">
            <ul>
              <li>
                <strong>Nombre: </strong>Poseidón
              </li>
              <li>
                <strong>Poderes: </strong>Dios del mar y los terremotos
              </li>
              <li>
                <strong>Fortalezas: </strong>Control sobre los océanos
              </li>
              <li>
                <strong>Debilidades: </strong>Impulsividad
              </li>
              <li>
                <strong>Rol: </strong>Gobernante de los mares
              </li>
              <li>
                <strong>Arma: </strong>Tridente
              </li>
              <li>
                <strong>Nombre Romano: </strong>Neptuno
              </li>
            </ul>
          </td>
        </tr>
        <tr className="btn-descripcion-dioses">
          <Link to="/dioses_olimpo">
            <button>Anterior</button>
          </Link>
          <Link to="/poseidon">
            <button className="btn_siguiente">Siguiente</button>
          </Link>
        </tr>
      </table>
    </div>
  );
}

export default DescripciónDiosesPoseidon;
