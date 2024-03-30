import React from 'react'

import TituloImagenCell from './tituloimagencell.jsx'
import TituloPaginaCell from './titulopaginacell.jsx'
import FormularioCell from './formulariocell.jsx'

export default function ContactoCell({proporcional}) {
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <TituloImagenCell proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 80 / proporcional, paddingBottom: 80 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <TituloPaginaCell proporcional={proporcional}/>
                <FormularioCell proporcional={proporcional}/>
            </div>
        </div>
    )
}