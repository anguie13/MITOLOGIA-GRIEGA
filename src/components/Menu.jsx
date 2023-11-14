import React from "react";
import BotonVacio from "./BotonVacio";
import MenuBoton from "./MenuBoton";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <img
        className="fondo3"
        src="src/assets/img/fondo_menu.svg"
        alt="Templo de atenea"
      />
      <div className="boton-menu-sobre-imagen">
        <div className="box_menu">
          <BotonVacio />
          <MenuBoton
            url="src/assets/img/btn_heroes.png"
            text_alt="boton heroes"
            text_btn="Heroes"
          />

          <MenuBoton
            url="src/assets/img/btn_criaturas.png"
            text_alt="boton Criaturas y Monstruos"
            text_btn="Criaturas y Monstruos"
          />
          <BotonVacio />

          <Link to="/principales_dioses">
            <MenuBoton
              url="src/assets/img/btn_dioses.png"
              text_alt="boton dioses"
              text_btn="Dioses"
            />
          </Link>

          <BotonVacio />
          <BotonVacio />
          <MenuBoton
            url="src/assets/img/btn_oraculos.png"
            text_alt="boton oraculos"
            text_btn="Oráculos"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
