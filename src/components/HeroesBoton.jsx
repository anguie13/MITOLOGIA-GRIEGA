import React from 'react'
import "../estilos.css";


function HeroesBoton({nom_dios = ''}) {
  return (
    <div className="box">
    <img src="src/assets/img/btn_heroe.png" alt={'boton dios '+ nom_dios} />
    <span className="overlay-text"><p>{nom_dios}</p></span>
    </div>
    
  )
}

export default HeroesBoton