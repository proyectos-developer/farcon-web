import React from 'react'

import image_construccion from '../../assets/construccion_pagina_991.png'
import logo from '../../assets/logo_350.png'

export default function PanelHome({proporcional}) {

    return (
        <div style={{width: '100%', height: 600 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 120 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional,
                paddingRight: 60 / proporcional, paddingLeft: 100 / proporcional}}>
                <img src={logo} style={{widht: 206 / proporcional, height: 100 / proporcional}}/>
                <div className='d-flex justify-content-center' style={{width: '100%'}}>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${100 / proporcional}px`, fontWeight: 700, color: '#1b2944'}}>
                        PÁGINA EN CONSTRUCCIÓN
                    </p>
                </div>
            </div>
            <img src={image_construccion} style={{width: '100%', height: 600 / proporcional}}/>
        </div>
    )
}
