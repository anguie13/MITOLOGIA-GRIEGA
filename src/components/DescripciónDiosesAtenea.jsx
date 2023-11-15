import React from "react";

function DescripciónDiosesAtenea() {
  return (
    <div>
      <table className="tablaDescripcion">
        <tr>
          <td class="columna1">
            <img
              className="descripcion_img"
              src="src/assets/img/descripcion_atenea.jpg"
              alt=""
            />
          </td>
          <td class="columna2">
            <ul>
              <li>
                <strong>Nombre: </strong>Atenea
              </li>
              <li>
                <strong>Poderes: </strong>Diosa de la sabiduría y la estrategia
              </li>
              <li>
                <strong>Fortalezas: </strong>Inteligencia, habilidades estratégicas
              </li>
              <li>
                <strong>Debilidades: </strong>No suele ceder en sus decisiones
              </li>
              <li>
                <strong>Rol: </strong>Protectora de Atenas y de la sabiduría
              </li>
              <li>
                <strong>Arma: </strong>Lanza y escudo
              </li>
              <li>
                <strong>Nombre Romano: </strong>Minerva
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

export default DescripciónDiosesAtenea;
