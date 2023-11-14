import React from 'react'
import "../estilos.css";


function MenuBoton({url = '', text_alt = '', text_btn = ''}) {
  return (
    <div className="box-menu-principal">
    <img src={url} alt={text_alt} />
    <span className="overlay-text-menu"><p>{text_btn}</p></span>
    </div>
    
  )
}

export default MenuBoton