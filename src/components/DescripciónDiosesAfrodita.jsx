import React from "react";

function DescripciónDiosesAfrodita() {
  return (
    <div>
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
        <tr className="btn-siguiente">
          <td></td>
          <button>Siguiente</button>
        </tr>
      </table>
    </div>
  );
}

export default DescripciónDiosesAfrodita;
