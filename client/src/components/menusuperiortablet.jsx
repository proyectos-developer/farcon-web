import React from 'react'

import icono_lupa from '../assets/iconos/icono_lupa_white_40.png'

export default function MenuSuperiorTablet({proporcional}) {
    return (
        <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, height: 70 / proporcional, background: '#1a2948'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 70 / proporcional}}>
                <div className='d-flex' style={{width: 'auto', height: 70 / proporcional}}>
                    <div style={{width: 'auto', height: 70 / proporcional, paddingRight: 24 / proporcional, paddingLeft: 24 / proporcional}}>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${70 / proporcional}px`, textAlign: 'center', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}}>
                                Inicio
                        </p>
                    </div>
                    <div style={{width: 'auto', height: 70 / proporcional, paddingRight: 24 / proporcional, paddingLeft: 24 / proporcional}}>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${70 / proporcional}px`, textAlign: 'center', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}}>
                                Nosotros
                        </p>
                    </div>
                    <div style={{width: 'auto', height: 70 / proporcional, paddingRight: 24 / proporcional, paddingLeft: 24 / proporcional}}>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${70 / proporcional}px`, textAlign: 'center', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}}>
                                Servicios
                        </p>
                    </div>
                    <div style={{width: 'auto', height: 70 / proporcional, paddingRight: 24 / proporcional, paddingLeft: 24 / proporcional}}>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${70 / proporcional}px`, textAlign: 'center', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}}>
                                Proyectos
                        </p>
                    </div>
                    <div style={{width: 'auto', height: 70 / proporcional, paddingRight: 24 / proporcional, paddingLeft: 24 / proporcional}}>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${70 / proporcional}px`, textAlign: 'center', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}}>
                                Inmobiliaria
                        </p>
                    </div>
                    <div style={{width: 'auto', height: 70 / proporcional, paddingRight: 24 / proporcional, paddingLeft: 24 / proporcional}}>
                        <p className='mb-0' style={{fontSize: 18 / proporcional, lineHeight: `${70 / proporcional}px`, textAlign: 'center', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}}>
                                Contácto
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-end' style={{width: 40 / proporcional, height: 70 / proporcional, paddingTop: 19 / proporcional, 
                    paddingBottom: 19 / proporcional}}>
                    <img src={icono_lupa} style={{with: 32 / proporcional, height: 32 / proporcional, cursor: 'pointer'}}/>
                </div>
            </div>
        </div>
    )
}
