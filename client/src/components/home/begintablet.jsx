import React from 'react'

import SliderHomeTablet from './sliderhometablet.jsx'
import ProyectosTablet from './proyectostablet.jsx'
import ExperienciaTablet from './experienciatablet.jsx'
import EscogenTablet from './escogentablet.jsx'
import RecientesTablet from './recientestablet.jsx'
import MencionesTablet from './mencionestablet.jsx'

export default function HomeBeginTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <SliderHomeTablet proporcional={proporcional}/>
            <ProyectosTablet proporcional={proporcional}/>
            <ExperienciaTablet proporcional={proporcional}/>
            <EscogenTablet proporcional={proporcional}/>
            <RecientesTablet proporcional={proporcional}/>
            <MencionesTablet proporcional={proporcional}/>
        </div>
    )
}
