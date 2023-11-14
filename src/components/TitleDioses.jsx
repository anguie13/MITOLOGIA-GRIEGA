import React from 'react'
import "../estilos.css";


function TitleDioses({title}) {
  return (
    <div>
        <table>
            <tr>
                <td><hr /></td>
                <td><h1 className='texto-principales-dioses'>{title}</h1></td>
                <td><hr /></td>
            </tr>
        </table>
    </div>
  )
}

export default TitleDioses