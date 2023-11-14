import React from 'react'
import "../estilos.css";


function PrincipalesDiosesBoton({nom_dios = ''}) {
  return (
    <div className="box">
    <img src="src/assets/img/btn_dios.png" alt="" />
    <span className="overlay-text"><p>{nom_dios}</p></span>
    </div>
    
  )
}

export default PrincipalesDiosesBoton