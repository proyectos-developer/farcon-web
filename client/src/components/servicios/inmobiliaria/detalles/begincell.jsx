import React from 'react'

import SliderDetallesCell from './slidercell.jsx'
import DetallesInmuebleCell from './detallescell.jsx'
import FiltroDetallesCell from './filtrocell.jsx'

export default function DetallesSitioCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <SliderDetallesCell proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                background: 'rgba(132, 143, 168, 0.2)'}}>
                <DetallesInmuebleCell proporcional={proporcional}/>
                <FiltroDetallesCell proporcional={proporcional}/>
            </div>
        </div>
    )
}