import React from 'react'

import TituloImagenTablet from './tituloimagentablet.jsx'
import ConstruccionCasasTablet from './construccioncasastablet.jsx'
import TrabajosConstruccionTablet from './trabajosconstruciontablet.jsx'
import PorqueNosEligenTablet from './porqueeligentablet.jsx'
import ConoceNuestroEquipoTablet from './nuestroequipotablet.jsx'

export default function SobreNosotrosTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <TituloImagenTablet proporcional={proporcional}/>
            <ConstruccionCasasTablet proporcional={proporcional}/>
            <TrabajosConstruccionTablet proporcional={proporcional}/>
            <PorqueNosEligenTablet proporcional={proporcional}/>
            <ConoceNuestroEquipoTablet proporcional={proporcional}/>
        </div>
    )
}