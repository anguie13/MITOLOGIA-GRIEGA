import React from "react";

function DescripciónDiosesDemeter() {
  return (
    <div>
      <table className="tablaDescripcion">
        <tr>
          <td class="columna1">
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
                <strong>Debilidades: </strong>Aflicción por la pérdida de su hija Perséfone
              </li>
              <li>
                <strong>Rol: </strong>Protectora de la agricultura y las estaciones
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
        <tr className="btn-siguiente">
          <td></td>
          <button>Siguiente</button>
        </tr>
      </table>
    </div>
  );
}

export default DescripciónDiosesDemeter;
