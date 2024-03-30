import React from 'react'

import SliderConstruccionTablet from './slidertablet.jsx'
import CantidadTiempoTablet from './cantidadtiempotablet.jsx'
import TrabajamosTablet from './trabajamostablet.jsx'
import MaquinariaTablet from './maquinariatablet.jsx'
import QueHacemosTablet from './quehacemostablet.jsx'

export default function  Construccion({proporcional}) {

    return (
      <div style={{width: '100%', height: 'auto'}}>
          <SliderConstruccionTablet proporcional={proporcional}/>
          <CantidadTiempoTablet proporcional={proporcional}/>
          <TrabajamosTablet proporcional={proporcional}/>
          <MaquinariaTablet proporcional={proporcional}/>
          <QueHacemosTablet proporcional={proporcional}/>
      </div>
    )
}