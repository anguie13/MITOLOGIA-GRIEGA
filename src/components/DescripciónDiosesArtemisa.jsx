import React from "react";

function DescripciónDiosesArtemisa() {
  return (
    <div>
      <table className="tablaDescripcion">
        <tr>
          <td class="columna1">
            <img
              className="descripcion_img"
              src="src/assets/img/descripcion_artemisa.jpg"
              alt=""
            />
          </td>
          <td class="columna2">
            <ul>
              <li>
                <strong>Nombre: </strong>Artemisa
              </li>
              <li>
                <strong>Poderes: </strong>Diosa de la caza, la naturaleza y la
                Luna
              </li>
              <li>
                <strong>Fortalezas: </strong>Destreza en la caza y conexión con
                la naturaleza
              </li>
              <li>
                <strong>Debilidades: </strong>Intolerancia hacia aquellos que
                dañan la naturaleza
              </li>
              <li>
                <strong>Rol: </strong>Protectora de la vida silvestre y las
                doncellas
              </li>
              <li>
                <strong>Arma: </strong>Arco y flechas
              </li>
              <li>
                <strong>Nombre Romano: </strong>Diana
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

export default DescripciónDiosesArtemisa;
