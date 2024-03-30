import React from 'react'

import TituloImagen from './tituloimagen.jsx'
import TituloPagina from './titulopagina.jsx'
import Formulario from './formulario.jsx'

export default function Contacto({proporcional}) {
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <TituloImagen proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 80 / proporcional, paddingBottom: 80 / proporcional, paddingLeft: 320 / proporcional, paddingRight: 320 / proporcional}}>
                <TituloPagina proporcional={proporcional}/>
                <Formulario proporcional={proporcional}/>
            </div>
        </div>
    )
}