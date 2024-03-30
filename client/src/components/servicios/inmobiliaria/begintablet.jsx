import React from 'react'

import SliderInmobiliariaTablet from './slidertablet.jsx'
import FiltrosTablet from './filtrostablet.jsx'
import CampañaTablet from './campañatablet.jsx'
import PasosTablet from './pasostablet.jsx'
import OpinionesTablet from './opinionestablet.jsx'

export default function InmobiliariaTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <SliderInmobiliariaTablet proporcional={proporcional}/>
            <FiltrosTablet proporcional={proporcional}/>
            <CampañaTablet proporcional={proporcional}/>
            <PasosTablet proporcional={proporcional}/>
            <OpinionesTablet proporcional={proporcional}/>
        </div>
    )
}