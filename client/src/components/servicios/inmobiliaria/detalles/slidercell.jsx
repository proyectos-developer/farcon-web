import React from 'react'

import imagen_fondo from '../../../../assets/images/imagen_detalles_1920.png'

export default function SliderDetallesCell({proporcional}) {
        
    return (
        <div style={{width: '100%', height: 500 / proporcional, backgroundImage: `url(${imagen_fondo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className='position-relative' style={{width: '100%', height: 500 / proporcional, background: 'rgba(26, 41, 72, 0.4)'}}>
                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                    <p style={{fontSize: 45 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 30 / proporcional, fontWeight: 700, color: 'white', fontFamily: 'Roboto, serif',
                            textAlign: 'center'}}>
                        CARACTERÍSTICAS <br/>DEL DEPARTAMENTO
                    </p>
                </div>
            </div>
        </div>
    )
}