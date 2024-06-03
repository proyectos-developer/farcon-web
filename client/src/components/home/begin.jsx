import React from 'react'

import SliderHome from './sliderhome.jsx'
import Proyectos from './proyectos.jsx'
import Experiencia from './experiencia.jsx'
import Escogen from './escogen.jsx'
import Recientes from './recientes.jsx'
import Menciones from './menciones.jsx'

export default function HomeBegin({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <SliderHome proporcional={proporcional}/>
                <Proyectos proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', marginTop: 340 / proporcional}}>
                <Experiencia proporcional={proporcional}/>
                <Escogen proporcional={proporcional}/>
                <Recientes proporcional={proporcional}/>
                <Menciones proporcional={proporcional}/>
            </div>
        </div>
    )
}
