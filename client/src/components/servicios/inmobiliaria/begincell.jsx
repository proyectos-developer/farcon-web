import React from 'react'

import SliderInmobiliariaCell from './slidercell.jsx'
import FiltrosCell from './filtroscell.jsx'
import CampañaCell from './campañacell.jsx'
import PasosCell from './pasoscell.jsx'
import OpinionesCell from './opinionescell.jsx'

export default function InmobiliariaCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <SliderInmobiliariaCell proporcional={proporcional}/>
            <FiltrosCell proporcional={proporcional}/>
            <CampañaCell proporcional={proporcional}/>
            <PasosCell proporcional={proporcional}/>
            <OpinionesCell proporcional={proporcional}/>
        </div>
    )
}