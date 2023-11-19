import React from "react";
import { Link } from "react-router-dom";

function DescripciónDiosesHera() {
  return (
    <div className="className=" container>
      <div className="fondo_dios">
        <table className="tablaDescripcion">
          <tr>
            <td>
              <img
                className="descripcion_img"
                src="src/assets/img/descripcion_hera.jpg"
                alt=""
              />
            </td>
            <td class="columna2">
              <ul>
                <li>
                  <strong>Nombre: </strong>Hera
                </li>
                <li>
                  <strong>Poderes: </strong>Diosa del matrimonio y la familia
                </li>
                <li>
                  <strong>Fortalezas: </strong>Lealtad, protección de la familia
                </li>
                <li>
                  <strong>Debilidades: </strong>Celos, venganza
                </li>
                <li>
                  <strong>Rol: </strong>Reina del Olimpo y protectora del
                  matrimonio
                </li>
                <li>
                  <strong>Arma: </strong>Cetro
                </li>
                <li>
                  <strong>Nombre Romano: </strong>Juno
                </li>
              </ul>
            </td>
          </tr>
          <tr className="btn-descripcion-dioses">
            <Link to="/dioses_olimpo">
              <button>Anterior</button>
            </Link>
            <Link to="/hera">
              <button className="btn_siguiente">Siguiente</button>
            </Link>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DescripciónDiosesHera;
