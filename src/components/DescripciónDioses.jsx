import React from "react";

function DescripciónDioses() {
  return (
    <div>
      <table className="tablaDescripcion">
        <tr>
          <td class="columna1">
            <img
              className="descripcion_img"
              src="src/assets/img/descripcion_zeus.svg"
              alt=""
            />
          </td>
          <td class="columna2">
            <ul>
              <li><strong>Nombre: </strong>Zeus</li>
              <li><strong>Poderes: </strong>Control del cielo y tormentas. Líder del Olimpo.</li>
              <li>
              <strong>Fortalezas: </strong>Sabiduría, autoridad y control sobre la naturaleza.
              </li>
              <li><strong>Debilidades: </strong>Pasiones fuertes y propenso a la ira.</li>
              <li><strong>Rol: </strong>Rey del Olimpo y guardián del orden divino.</li>
              <li><strong>Arma: </strong> Rayo</li>
            </ul>
          </td>
        </tr>
        <tr className="btn-siguiente">
          <td>
          </td>
          <button >Siguiente</button>
        </tr>
      </table>
    </div>
  );
}

export default DescripciónDioses;
