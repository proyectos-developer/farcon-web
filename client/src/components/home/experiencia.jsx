import React from 'react'

import image_experiencia from '../../assets/images/experiencia_calidad_home.png'

export default function Experiencia({proporcional}) {

    return (
        <div style={{width: '100%', paddingRight: 350 / proporcional, paddingLeft: 350 / proporcional, paddingTop: 75 / proporcional, height: 'auto',
            marginTop: 734 / proporcional}}>
            <p style={{fontSize: 20 / proporcional, lineHeight: `${33 / proporcional}px`, color: '#222222', marginBottom: 55 / proporcional,
                borderBottom: '1px solid #f6f6f6', fontFamily: 'Montserrat, sans-serif', textAlign: 'center', fontWeight: 600, paddingBottom: 20 / proporcional}}>
                Experiencia & calidad
            </p>
            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex' style={{width: 430 / proporcional, height: 430 / proporcional, marginRight: 30 / proporcional}}>
                    <img src={image_experiencia} style={{width: 430 / proporcional, height: 430 / proporcional}}/>
                </div>
                <div style={{width: '100%', hight: 430 / proporcional}}>
                    <p style={{fontSize: 24 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 500,
                        color: '#222222', fontFamily: 'Montserrat, sans-serif'}}>Brindamos calidad en nuetros servicios</p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 30 / proporcional, fontWeight: 400,
                        color: '#848484', fontFamily: 'Montserrat, sans-serif'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </div>
    )
}

