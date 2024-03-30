import React from 'react'

import SliderConstruccion from './slider.jsx'
import CantidadTiempo from './cantidadtiempo.jsx'
import Trabajamos from './trabajamos.jsx'
import Maquinaria from './maquinaria.jsx'
import QueHacemos from './quehacemos.jsx'

export default function  Construccion({proporcional}) {

    return (
      <div style={{width: '100%', height: 'auto'}}>
          <SliderConstruccion proporcional={proporcional}/>
          <CantidadTiempo proporcional={proporcional}/>
          <Trabajamos proporcional={proporcional}/>
          <Maquinaria proporcional={proporcional}/>
          <QueHacemos proporcional={proporcional}/>
      </div>
    )
}