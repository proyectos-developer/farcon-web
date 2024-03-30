import React from 'react'

import SliderInmobiliaria from './slider.jsx'
import Filtros from './filtros.jsx'
import Campaña from './campaña.jsx'
import Pasos from './pasos.jsx'
import Opiniones from './opiniones.jsx'

export default function Inmobiliaria({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <SliderInmobiliaria proporcional={proporcional}/>
            <Filtros proporcional={proporcional}/>
            <Campaña proporcional={proporcional}/>
            <Pasos proporcional={proporcional}/>
            <Opiniones proporcional={proporcional}/>
        </div>
    )
}