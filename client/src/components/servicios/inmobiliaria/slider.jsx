import React from 'react'

import fondo_inmobiliaria from '../../../assets/images/inmobiliaria_home_00.png'

export default function SliderInmobiliaria({proporcional}) {

    return (
        <div style={{width: '100%', height: 850 / proporcional, backgroundImage: `url(${fondo_inmobiliaria})`, backgroundSize: 'cover', backgroundPosition: 'center', 
                     backgroundRepeat: 'no-repeat'}}>
            <div className='position-relative' style={{width: '100%', height: 850 / proporcional, background: 'rgba(26, 41, 72, 0.4)'}}>
                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                    <p style={{fontSize: 50 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 30 / proporcional, fontWeight: 700, color: 'white', fontFamily: 'Roboto, serif'}}>
                        ENCUENTRA LA CASA DE TUS SUEÑOS
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 300, color: 'white', fontFamily: 'Poppins, sans-serif',
                        textAlign: 'center'}}>
                        Lorem ipsum dolor sit amet consecteur dipisicing elit. Ttemporibus, vero.
                    </p>
                </div>
            </div>
        </div>
    )
}