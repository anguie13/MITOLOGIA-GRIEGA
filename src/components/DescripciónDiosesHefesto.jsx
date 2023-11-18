import React from "react";
import { Link } from "react-router-dom";


function DescripciónDiosesHefesto() {
  return (
    <div>
      <table className="tablaDescripcion">
        <tr>
          <td class="columna1">
            <img
              className="descripcion_img"
              src="src/assets/img/descripcion_hefesto.jpg"
              alt=""
            />
          </td>
          <td class="columna2">
            <ul>
              <li>
                <strong>Nombre: </strong>Hefesto
              </li>
              <li>
                <strong>Poderes: </strong>Dios del fuego, la forja y la
                metalurgia
              </li>
              <li>
                <strong>Fortalezas: </strong> Habilidad para la creación de
                objetos
              </li>
              <li>
                <strong>Debilidades: </strong>Cojera
              </li>
              <li>
                <strong>Rol: </strong>Forjador de armas divinas
              </li>
              <li>
                <strong>Arma: </strong>Martillo
              </li>
              <li>
                <strong>Nombre Romano: </strong>Vulcano
              </li>
            </ul>
          </td>
        </tr>
        <tr className="btn-descripcion-dioses">
          <Link to="/dioses_olimpo">
            <button>Anterior</button>
          </Link>
          <Link to="/hefesto">
            <button className="btn_siguiente">Siguiente</button>
          </Link>
        </tr>
      </table>
    </div>
  );
}

export default DescripciónDiosesHefesto;
