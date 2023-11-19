import React from "react";
import { Link } from "react-router-dom";

function DescripciónDiosesAfrodita() {
  return (
    <div className="container">
      <div className="fondo_dios">
        <table className="tablaDescripcion">
          <tr>
            <td class="columna1">
              <img
                className="descripcion_img"
                src="src/assets/img/descripcion_afrodita.jpg"
                alt=""
              />
            </td>
            <td class="columna2">
              <ul>
                <li>
                  <strong>Nombre: </strong>Afrodita
                </li>
                <li>
                  <strong>Poderes: </strong>Diosa del amor y la belleza
                </li>
                <li>
                  <strong>Fortalezas: </strong>Encanto, seducción
                </li>
                <li>
                  <strong>Debilidades: </strong>Puede ser manipuladora
                </li>
                <li>
                  <strong>Rol: </strong>Inspiradora del amor y la pasión
                </li>
                <li>
                  <strong>Arma: </strong>Cinturón mágico
                </li>
                <li>
                  <strong>Nombre Romano: </strong>Venus
                </li>
              </ul>
            </td>
          </tr>
          <tr className="btn-descripcion-dioses">
            <Link to="/dioses_olimpo">
              <button>Anterior</button>
            </Link>
            <Link to="/afrodita">
              <button className="btn_siguiente">Siguiente</button>
            </Link>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DescripciónDiosesAfrodita;
