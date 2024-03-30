import React from 'react'

import SliderConstruccionCell from './slidercell.jsx'
import CantidadTiempoCell from './cantidadtiempocell.jsx'
import TrabajamosCell from './trabajamoscell.jsx'
import MaquinariaCell from './maquinariacell.jsx'
import QueHacemosCell from './quehacemoscell.jsx'

export default function  Construccion({proporcional}) {

    return (
      <div style={{width: '100%', height: 'auto'}}>
          <SliderConstruccionCell proporcional={proporcional}/>
          <CantidadTiempoCell proporcional={proporcional}/>
          <TrabajamosCell proporcional={proporcional}/>
          <MaquinariaCell proporcional={proporcional}/>
          <QueHacemosCell proporcional={proporcional}/>
      </div>
    )
}