import React from 'react'

import SliderServicios from './servicios'
import Construccion from './construccion.jsx'
import Inmobiliaria from './inmobiliaria.jsx'

export default function NuestrosServicios({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <SliderServicios proporcional={proporcional}/>
            <Construccion proporcional={proporcional}/>
            <Inmobiliaria proporcional={proporcional}/>
        </div>
    )
}