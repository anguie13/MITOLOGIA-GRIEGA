import React from "react";
import { Link } from "react-router-dom";

function DescripciónDiosesAres() {
  return (
    <div className="container">
      <div className="fondo_dios">
        <table className="tablaDescripcion">
          <tr>
            <td>
              <img
                className="descripcion_img"
                src="src/assets/img/descripcion_ares.jpg"
                alt=""
              />
            </td>
            <td class="columna2">
              <ul>
                <li>
                  <strong>Nombre: </strong>Ares
                </li>
                <li>
                  <strong>Poderes: </strong>Dios de la guerra
                </li>
                <li>
                  <strong>Fortalezas: </strong>Valor en la batalla
                </li>
                <li>
                  <strong>Debilidades: </strong>Impulsividad, falta de
                  estrategia
                </li>
                <li>
                  <strong>Rol: </strong>Incitador de la guerra
                </li>
                <li>
                  <strong>Arma: </strong>Lanza y escudo
                </li>
                <li>
                  <strong>Nombre Romano: </strong>Marte
                </li>
              </ul>
            </td>
          </tr>
          <tr className="btn-descripcion-dioses">
            <Link to="/dioses_olimpo">
              <button>Anterior</button>
            </Link>
            <Link to="/ares">
              <button className="btn_siguiente">Siguiente</button>
            </Link>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DescripciónDiosesAres;
