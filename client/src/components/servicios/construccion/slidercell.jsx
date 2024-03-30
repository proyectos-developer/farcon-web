import React from 'react'

import fondo_construccion from '../../../assets/images/construccion_home_00.png'

export default function SliderConstruccionCell({proporcional}) {
 
    return (
        <div style={{width: '100%', height: 800 / proporcional, backgroundImage: `url(${fondo_construccion})`, backgroundSize: 'cover', backgroundPosition: 'center', 
                     backgroundRepeat: 'no-repeat'}}>
            <div className='position-relative' style={{width: '100%', height: 800 / proporcional, background: 'rgba(26, 41, 72, 0.4)'}}>
                <div className='position-absolute top-50 translate-middle' style={{width: 'auto', height: 'auto', left: '40%'}}>
                    <p style={{fontSize: 60 / proporcional, lineHeight: `${80 / proporcional}px`, marginBottom: 30 / proporcional, fontWeight: 700, color: 'white', fontFamily: 'Roboto, serif'}}>
                        CONFIA <br/> EN NOSOTROS
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 300, color: 'white', fontFamily: 'Poppins, sans-serif',
                        textAlign: 'left'}}>
                        Construcción de casas, oficinas, locales, 
                    </p>
                </div>
            </div>
        </div>
    )
}