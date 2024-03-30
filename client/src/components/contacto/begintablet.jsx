import React from 'react'

import TituloImagenTablet from './tituloimagentablet.jsx'
import TituloPaginaTablet from './titulopaginatablet.jsx'
import FormularioTablet from './formulariotablet.jsx'

export default function ContactoTablet({proporcional}) {
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <TituloImagenTablet proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 80 / proporcional, paddingBottom: 80 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <TituloPaginaTablet proporcional={proporcional}/>
                <FormularioTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}