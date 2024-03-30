import React from 'react'

import icono_experiencia from '../../assets/iconos/nosotros_experiencia_96.png'
import icono_valvula from '../../assets/iconos/nosotros_valvula_96.png'
import icono_trabajadores from '../../assets/iconos/nosotros_trabajadores_96.png'
import icono_cafe from '../../assets/iconos/nosotros_cafe_96.png'

import nosotros_fondo from '../../assets/images/nosotros_fondo_section.png'

export default function TrabajosConstruccion({proporcional}) {

    return (
        <div style={{width: '100%', height: 380 / proporcional, backgroundImage: `url(${nosotros_fondo})`, backgroundSize: 'cover', backgroundPosition: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div style={{width: '100%', height: 'auto', paddingTop: 80 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 320 / proporcional, paddingRight: 320 / proporcional,
                    background: 'rgba(33, 37, 41, 0.6)', zIndex: 99999}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '24%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingTop: 22 / proporcional, paddingBottom: 22 / proporcional,
                            marginBottom: 20 / proporcional, border: '1px solid rgb(255, 255, 255, 0.10)'}}>
                            <img src={icono_experiencia} style={{width: 70 / proporcional, height: 70 / proporcional}}/>
                        </div>
                        <div className='' style={{width: '100%', height: 32 / proporcional, marginBottom: 8 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, color: 'white', fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                25 años de experiencia
                            </p>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 15 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, fontFamily: 'Relaway, sans-serif'}}>
                                Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu guiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                    <div style={{width: '24%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingTop: 22 / proporcional, paddingBottom: 22 / proporcional,
                            marginBottom: 20 / proporcional, border: '1px solid rgb(255, 255, 255, 0.10)'}}>
                            <img src={icono_valvula} style={{width: 70 / proporcional, height: 70 / proporcional}}/>
                        </div>
                        <div className='' style={{width: '100%', height: 32 / proporcional, marginBottom: 8 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, color: 'white', fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                842 casas construidas
                            </p>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 15 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, fontFamily: 'Relaway, sans-serif'}}>
                                Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu guiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                    <div style={{width: '24%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingTop: 22 / proporcional, paddingBottom: 22 / proporcional,
                            marginBottom: 20 / proporcional, border: '1px solid rgb(255, 255, 255, 0.10)'}}>
                            <img src={icono_trabajadores} style={{width: 70 / proporcional, height: 70 / proporcional}}/>
                        </div>
                        <div className='' style={{width: '100%', height: 32 / proporcional, marginBottom: 8 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, color: 'white', fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                240 expertos trabajando
                            </p>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 15 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, fontFamily: 'Relaway, sans-serif'}}>
                                Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu guiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                    <div style={{width: '24%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingTop: 22 / proporcional, paddingBottom: 22 / proporcional,
                            marginBottom: 20 / proporcional, border: '1px solid rgb(255, 255, 255, 0.10)'}}>
                            <img src={icono_cafe} style={{width: 70 / proporcional, height: 70 / proporcional}}/>
                        </div>
                        <div className='' style={{width: '100%', height: 32 / proporcional, marginBottom: 8 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, color: 'white', fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                Más de 2500 tazas de café
                            </p>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 15 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, fontFamily: 'Relaway, sans-serif'}}>
                                Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu guiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

