import React from "react";

function DescripciónDiosesHera() {
  return (
    <div>
      <table className="tablaDescripcion">
        <tr>
          <td class="columna1">
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
                <strong>Rol: </strong>Reina del Olimpo y protectora del matrimonio
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
        <tr className="btn-siguiente">
          <td></td>
          <button>Siguiente</button>
        </tr>
      </table>
    </div>
  );
}

export default DescripciónDiosesHera;
