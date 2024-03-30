import React from 'react'

import SliderDetalles from './slider.jsx'
import DetallesInmueble from './detalles.jsx'
import FiltroDetalles from './filtro.jsx'

export default function DetallesSitio({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <SliderDetalles proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 320 / proporcional, paddingRight: 320 / proporcional,
                background: 'rgba(132, 143, 168, 0.2)'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '60%', height: 'auto'}}>
                        <DetallesInmueble proporcional={proporcional}/>
                    </div>
                    <div style={{width: '39%', height: 'auto'}}>
                        <FiltroDetalles proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}