import React from "react";
import { Link } from "react-router-dom";

function DescripciónDiosesDemeter() {
  return (
    <div className="container">
      <div className="fondo_dios">
        <table className="tablaDescripcion">
          <tr>
            <td>
              <img
                className="descripcion_img"
                src="src/assets/img/descripcion_demeter.jpg"
                alt=""
              />
            </td>
            <td class="columna2">
              <ul>
                <li>
                  <strong>Nombre: </strong>Deméter
                </li>
                <li>
                  <strong>Poderes: </strong>Diosa de la agricultura y la cosecha
                </li>
                <li>
                  <strong>Fortalezas: </strong>Fertilidad de la tierra
                </li>
                <li>
                  <strong>Debilidades: </strong>Aflicción por la pérdida de su
                  hija Perséfone
                </li>
                <li>
                  <strong>Rol: </strong>Protectora de la agricultura y las
                  estaciones
                </li>
                <li>
                  <strong>Arma: </strong>Ninguna
                </li>
                <li>
                  <strong>Nombre Romano: </strong>Ceres
                </li>
              </ul>
            </td>
          </tr>
          <tr className="btn-descripcion-dioses">
            <Link to="/dioses_olimpo">
              <button>Anterior</button>
            </Link>
            <Link to="/demeter">
              <button className="btn_siguiente">Siguiente</button>
            </Link>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DescripciónDiosesDemeter;
