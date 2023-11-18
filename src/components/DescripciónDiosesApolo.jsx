import React from "react";
import { Link } from "react-router-dom";


function DescripciónDiosesApolo() {
  return (
    <div>
      <table className="tablaDescripcion">
        <tr>
          <td class="columna1">
            <img
              className="descripcion_img"
              src="src/assets/img/descripcion_apolo.jpg"
              alt=""
            />
          </td>
          <td class="columna2">
            <ul>
              <li>
                <strong>Nombre: </strong>Apolo
              </li>
              <li>
                <strong>Poderes: </strong>Dios del sol, la música, la poesía y
                la profecía
              </li>
              <li>
                <strong>Fortalezas: </strong>Talento artístico
              </li>
              <li>
                <strong>Debilidades: </strong>Arrogancia
              </li>
              <li>
                <strong>Rol: </strong>Patrón de las artes y la música
              </li>
              <li>
                <strong>Arma: </strong>Lira
              </li>
              <li>
                <strong>Nombre Romano: </strong>Febo
              </li>
            </ul>
          </td>
        </tr>
        <tr className="btn-descripcion-dioses">
          <Link to="/dioses_olimpo">
            <button>Anterior</button>
          </Link>
          <Link to="/apolo">
            <button className="btn_siguiente">Siguiente</button>
          </Link>
        </tr>
      </table>
    </div>
  );
}

export default DescripciónDiosesApolo;
