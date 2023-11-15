import React from "react";

export default function DescripciónDiosesHermes() {
  return (
    <div>
      <table className="tablaDescripcion">
        <tr>
          <td class="columna1">
            <img
              className="descripcion_img"
              src="src/assets/img/descripcion_hermes.jpg"
              alt=""
            />
          </td>
          <td class="columna2">
            <ul>
              <li>
                <strong>Nombre: </strong>Hermes
              </li>
              <li>
                <strong>Poderes: </strong>Mensajero de los dioses, dios del comercio y los ladrones
              </li>
              <li>
                <strong>Fortalezas: </strong>Rapidez, astucia
              </li>
              <li>
                <strong>Debilidades: </strong>Propenso a la travesura
              </li>
              <li>
                <strong>Rol: </strong>Mensajero divino y conductor de almas al inframundo
              </li>
              <li>
                <strong>Arma: </strong>Caduceo
              </li>
              <li>
                <strong>Nombre Romano: </strong>Mercurio
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
