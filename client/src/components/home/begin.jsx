import React from 'react'

import SliderHome from './sliderhome.jsx'
import Proyectos from './proyectos.jsx'
import Experiencia from './experiencia.jsx'

export default function HomeBegin({proporcional}) {
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <SliderHome proporcional={proporcional}/>
                <Proyectos proporcional={proporcional}/>
            </div>
            <Experiencia proporcional={proporcional}/>
        </div>
    )
}
