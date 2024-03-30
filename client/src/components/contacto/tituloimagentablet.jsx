import React from 'react'

import fondo_contacto from '../../assets/images/fondo_contacto.png'

export default function TituloImageTablet({proporcional}) {

    return (
        <div className='position-relative' style={{width: '100%', height: 300 / proporcional, backgroundImage: `url(${fondo_contacto})`, backgroundPosition: 'center', 
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 54 / proporcional}}>
                <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', fontWeight: 600, marginBottom: 20 / proporcional}}>
                    CONTÁCTANOS
                </p>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '20%', height: 2 / proporcional, background: 'rgb(239, 126, 50)'}}/>
                </div>
            </div>
        </div>
    )
}