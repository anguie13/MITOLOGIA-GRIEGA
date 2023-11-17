import React from "react";

function Zeus() {
  return (
    <div class="dios-container">
      <img
        src="src/assets/img/pergamino.svg"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">Zeus</p>
        <p className="limited-text-dioses">
          Zeus ocupa el papel de “Padre de hombres y Dioses”, es el padre
          poderoso que ejerce autoridad patriarcal. Junto a él se encuentran sus
          hermanos, hijos del Titán Cronos y son: Hera, Deméter, Hestia,
          Poseidón y Hades.
          <br />
          <br />
          Zeus es el dios de la Luz. Personifica el Cielo con todo su poderío, es el símbolo de la lluvia, el viento, las tormentas, del ciclo de las estaciones y de la sucesión de la noche y el día. Su misión es mantener el equilibrio del Universo y proteger los privilegios de los dioses.
        </p>
      </div>
      <img
        src="src/assets/img/zeus-circle.svg"
        alt=""
        className="bottom-right-image-dioses"
      />
      <button class="centered-button-dioses">Siguiente</button>
    </div>
  );
}

export default Zeus;
