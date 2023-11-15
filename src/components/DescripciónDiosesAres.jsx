import React from "react";

function DescripciónDiosesAres() {
  return (
    <div>
      <table className="tablaDescripcion">
        <tr>
          <td class="columna1">
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
                <strong>Debilidades: </strong>Impulsividad, falta de estrategia
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
        <tr className="btn-siguiente">
          <td></td>
          <button>Siguiente</button>
        </tr>
      </table>
    </div>
  );
}

export default DescripciónDiosesAres;
