import React from 'react'

import TituloImagen from './tituloimagen.jsx'
import ConstruccionCasas from './construccioncasas.jsx'
import TrabajosConstruccion from './trabajosconstrucion.jsx'
import PorqueNosEligen from './porqueeligen.jsx'
import ConoceNuestroEquipo from './nuestroequipo.jsx'

export default function SobreNosotros({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <TituloImagen proporcional={proporcional}/>
            <ConstruccionCasas proporcional={proporcional}/>
            <TrabajosConstruccion proporcional={proporcional}/>
            <PorqueNosEligen proporcional={proporcional}/>
            <ConoceNuestroEquipo proporcional={proporcional}/>
        </div>
    )
}