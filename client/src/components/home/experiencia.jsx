import React from 'react'

import image_experiencia from '../../assets/images/experiencia_calidad_home.png'
import icono_ubicacion from '../../assets/iconos/icono_location_orange_96.png'
import icono_trabajador from '../../assets/iconos/icono_trabajador_orange_96.png'
import icono_certificado from '../../assets/iconos/icono_certificado_orange_96.png'
import icono_phone from '../../assets/iconos/icono_phone_orange_96.png'

export default function Experiencia({proporcional}) {

    return (
        <div style={{width: '100%', paddingRight: 350 / proporcional, paddingLeft: 350 / proporcional, paddingTop: 75 / proporcional, height: 'auto',
            marginBottom: 40 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${33 / proporcional}px`, color: '#222222', marginBottom: 55 / proporcional,
                    borderBottom: '1px solid #f6f6f6', fontFamily: 'Montserrat, sans-serif', textAlign: 'center', fontWeight: 600, paddingBottom: 20 / proporcional}}>
                    Experiencia & calidad
                </p>
            </div>
            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex' style={{width: 430 / proporcional, height: 430 / proporcional, marginRight: 30 / proporcional}}>
                    <img src={image_experiencia} style={{width: 430 / proporcional, height: 430 / proporcional}}/>
                </div>
                <div style={{width: 740 / proporcional, height: 430 / proporcional}}>
                    <p style={{fontSize: 24 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 500,
                        color: '#222222', fontFamily: 'Montserrat, sans-serif'}}>Brindamos calidad en nuetros servicios</p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 30 / proporcional, fontWeight: 400,
                        color: '#848484', fontFamily: 'Montserrat, sans-serif'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className='d-flex justify-content-between' style={{width: 740 / proporcional, height: 48 / proporcional, marginBottom: 30 / proporcional}}>
                        <div className='d-flex' style={{width: 240 / proporcional, height: 48 / proporcional}}>
                            <img src={icono_ubicacion} style={{width: 48 / proporcional, height: 48 / proporcional, marginRight: 10 / proporcional}}/>
                            <div style={{width: 195 / proporcional, height: 48 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, fontWeight: 700, lineHeight: `${30 / proporcional}px`, color: '#222222', marginBottom: 0 / proporcional}}>
                                    Locales disponibles <br/> xxxx 
                                </p>
                            </div>
                        </div>
                        <div className='d-flex' style={{width: 240 / proporcional, height: 48 / proporcional}}>
                            <img src={icono_certificado} style={{width: 48 / proporcional, height: 48 / proporcional, marginRight: 5 / proporcional}}/>
                            <div style={{width: 195 / proporcional, height: 48 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, fontWeight: 700, lineHeight: `${30 / proporcional}px`, color: '#222222', marginBottom: 0 / proporcional}}>
                                    Certificados <br/> +xx 
                                </p>
                            </div>
                        </div>
                        <div className='d-flex' style={{width: 240 / proporcional, height: 48 / proporcional}}>
                            <img src={icono_trabajador} style={{width: 48 / proporcional, height: 48 / proporcional, marginRight: 5 / proporcional}}/>
                            <div style={{width: 195 / proporcional, height: 48 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, fontWeight: 700, lineHeight: `${30 / proporcional}px`, color: '#222222', marginBottom: 0 / proporcional}}>
                                    Trabajadores <br/> +xxx 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: 740 / proporcional, height: 50 / proporcional, marginBottom: 30 / proporcional}}>
                        <button className='rounded' style={{width: 220 / proporcional, height: 50 / proporcional, background: '#f47c2e', color: 'white',
                            fontSize: 16 / proporcional, fontWeight: 500, border: '2px solid #f47c2e', marginRight: 20 / proporcional}}>Conocer más</button>
                            <div className='d-flex' style={{marginLeft: 20 / proporcional, height: 50 / proporcional, width: 500 / proporcional}}>
                                <div style={{width:50 / proporcional, height: 50 / proporcional, marginRight: 10 / proporcional}}>
                                    <img src={icono_phone} style={{width: 50 / proporcional, height: 50 / proporcional}}/>
                                </div>
                                <div style={{width: 440 / proporcional, height: 50 / proporcional, marginRight: 10 / proporcional}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: '#f47c2e', marginBottom: 0,
                                        fontFamily: 'Raleway, sans-serif'}}>Llámanos</p>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#222222', marginBottom: 0,
                                        fontFamily: 'Montserrat, sans-serif'}}>(+51 xxx xxxxxx)</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

