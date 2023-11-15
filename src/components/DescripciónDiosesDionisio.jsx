import React from "react";

export default function DescripciónDiosesDionisio() {
  return (
    <div>
      <table className="tablaDescripcion">
        <tr>
          <td class="columna1">
            <img
              className="descripcion_img"
              src="src/assets/img/descripcion_dionisio.jpg"
              alt=""
            />
          </td>
          <td class="columna2">
            <ul>
              <li>
                <strong>Nombre: </strong>Dionisio
              </li>
              <li>
                <strong>Poderes: </strong>Dios del vino, la diversión y el teatro
              </li>
              <li>
                <strong>Fortalezas: </strong>Inspirador de la alegría y la celebración
              </li>
              <li>
                <strong>Debilidades: </strong>Puede ser indulgente en exceso
              </li>
              <li>
                <strong>Rol: </strong>Fomentador de la diversión y la embriaguez
              </li>
              <li>
                <strong>Arma: </strong>Tirso (vara con piñas o racimos de uvas)
              </li>
              <li>
                <strong>Nombre Romano: </strong>Baco
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
