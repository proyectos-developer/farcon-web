import React from 'react'

import SliderDetallesTablet from './slidertablet.jsx'
import DetallesInmuebleTablet from './detallestablet.jsx'
import FiltroDetallesTablet from './filtrotablet.jsx'

export default function DetallesSitioTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <SliderDetallesTablet proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
                background: 'rgba(132, 143, 168, 0.2)'}}>
                <DetallesInmuebleTablet proporcional={proporcional}/>
                <FiltroDetallesTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}