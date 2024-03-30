import React from 'react'

import TituloImagenCell from './tituloimagencell.jsx'
import ConstruccionCasasCell from './construccioncasascell.jsx'
import TrabajosConstruccionCell from './trabajosconstrucioncell.jsx'
import PorqueNosEligenCell from './porqueeligencell.jsx'
import ConoceNuestroEquipoCell from './nuestroequipocell.jsx'

export default function SobreNosotrosCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <TituloImagenCell proporcional={proporcional}/>
            <ConstruccionCasasCell proporcional={proporcional}/>
            <TrabajosConstruccionCell proporcional={proporcional}/>
            <PorqueNosEligenCell proporcional={proporcional}/>
            <ConoceNuestroEquipoCell proporcional={proporcional}/>
        </div>
    )
}