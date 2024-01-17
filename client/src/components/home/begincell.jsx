import React from 'react'

import SliderHomeCell from './sliderhomecell.jsx'
import ProyectosCell from './proyectoscell.jsx'
import ExperienciaCell from './experienciacell.jsx'
import EscogenCell from './escogencell.jsx'
import RecientesCell from './recientescell.jsx'
import MencionesCell from './mencionescell.jsx'

export default function HomeBeginCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <SliderHomeCell proporcional={proporcional}/>
            <ProyectosCell proporcional={proporcional}/>
            <ExperienciaCell proporcional={proporcional}/>
            <EscogenCell proporcional={proporcional}/>
            <RecientesCell proporcional={proporcional}/>
            <MencionesCell proporcional={proporcional}/>
        </div>
    )
}
