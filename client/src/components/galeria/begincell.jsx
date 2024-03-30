import React, { useState } from 'react'

import TituloImagenCell from './titulocell.jsx'
import FiltrosCell from './filtroscell.jsx'
import GaleriaFotosCell from './galeriafotoscell.jsx'

export default function GaleriaCell({proporcional}) {

    const [boton_mas, setBotonMas] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <TituloImagenCell proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 70 / proporcional, paddingBottom: 40 / proporcional, marginTop: 40 / proporcional}}>
                <FiltrosCell proporcional={proporcional}/>
                <GaleriaFotosCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                    <button className='btn rounded' style={{width: 200 / proporcional, height: 60 / proporcional, border: '2px solid rgb(239, 126, 50)',
                            background: boton_mas ? 'white' : 'rgb(239, 126, 50)', color: boton_mas ? 'rgb(239, 126, 50)' : 'white', fontSize: 16 / proporcional,
                            fontWeight: 500}}
                            onMouseOver={() => setBotonMas(true)} onMouseLeave={() => setBotonMas(false)}>
                        Mostrar más
                    </button>
                </div>
            </div>
        </div>
    )
}
