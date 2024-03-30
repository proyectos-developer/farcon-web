import React from 'react'

import fondo_construccion from '../../../assets/images/construccion_home_00.png'

export default function SliderConstruccion({proporcional}) {
 
    return (
        <div style={{width: '100%', height: 850 / proporcional, backgroundImage: `url(${fondo_construccion})`, backgroundSize: 'cover', backgroundPosition: 'center', 
                     backgroundRepeat: 'no-repeat'}}>
            <div className='position-relative' style={{width: '100%', height: 850 / proporcional, background: 'rgba(26, 41, 72, 0.4)'}}>
                <div className='position-absolute top-50 translate-middle' style={{width: 'auto', height: 'auto', left: '35%'}}>
                    <p style={{fontSize: 80 / proporcional, lineHeight: `${100 / proporcional}px`, marginBottom: 30 / proporcional, fontWeight: 700, color: 'white', fontFamily: 'Roboto, serif'}}>
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