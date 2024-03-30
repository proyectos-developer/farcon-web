import React from 'react'

import nosotros_1920 from '../../assets/images/nosotros_up_1920.png'

export default function TituloImageTablet({proporcional}) {

    return (
        <div className='position-relative' style={{width: '100%', height: 300 / proporcional, backgroundImage: `url(${nosotros_1920})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 54 / proporcional}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${33 / proporcional}px`, color: 'white', fontWeight: 600, marginBottom: 20 / proporcional,
                    textAlign: 'center'}}>
                    ACERCA DE NOSOTROS
                </p>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '20%', height: 2 / proporcional, background: 'rgb(239, 126, 50)'}}/>
                </div>
            </div>
        </div>
    )
}