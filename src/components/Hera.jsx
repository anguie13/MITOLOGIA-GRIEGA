import React from "react";

function Hera() {
  return (
    <div class="dios-container">
      <img
        src="src/assets/img/pergamino.svg"
        alt=""
        className="pergamino-image"
      />
      <div className="text-overlay-dioses">
        <p className="title-dioses">Hera</p>
        <p className="limited-text-dioses">
          Hera es la esposa legitima de Zeus, es la señora de la casa y comparte
          trono a través del matrimonio con su marido, que a su vez son
          hermanos. Es madre,hijos suyos, Ares y Hefesto.
          <br />
          <br />
          Hera era la reina de los dioses griegos y también la diosa del
          matrimonio, las mujeres, las familias y el nacimiento, actuando como
          su protectora.
        </p>
      </div>
      <img
        src="src/assets/img/hera-circle.svg"
        alt=""
        className="bottom-right-image-dioses"
      />
      <button class="centered-button-dioses">Siguiente</button>
    </div>
  );
}

export default Hera;
