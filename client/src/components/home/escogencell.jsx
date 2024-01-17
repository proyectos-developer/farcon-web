import React from 'react'

import icono_experiencia_grey from '../../assets/iconos/icono_experiencia_grey_96.png'
import icono_experiencia_white from '../../assets/iconos/icono_experiencia_white_96.png'
import icono_licencia_grey from '../../assets/iconos/icono_licencia_grey_96.png'
import icono_licencia_white from '../../assets/iconos/icono_licencia_white_96.png'
import icono_honestidad_grey from '../../assets/iconos/icono_honestidad_grey_96.png'
import icono_honestidad_white from '../../assets/iconos/icono_honestidad_white_96.png'
import icono_certificado_grey from '../../assets/iconos/icono_certificado_grey_96.png'
import icono_certificado_white from '../../assets/iconos/icono_certificado_white_96.png'
import icono_proyectos_grey from '../../assets/iconos/icono_proyectos_grey_96.png'
import icono_proyectos_white from '../../assets/iconos/icono_proyectos_white_96.png'
import icono_trabajadores_grey from '../../assets/iconos/icono_trabajadores_grey_96.png'
import icono_trabajadores_white from '../../assets/iconos/icono_trabajadores_white_96.png'

export default function EscogenCell({proporcional}) {

    return (
        <div className='' style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                background: 'transparent', height: 'auto', paddingBottom: 40 / proporcional, paddingTop: 40 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${33 / proporcional}px`, color: '#222222', marginBottom: 55 / proporcional,
                    borderBottom: '1px solid #f6f6f6', fontFamily: 'Montserrat, sans-serif', textAlign: 'center', fontWeight: 600, paddingBottom: 20 / proporcional}}>
                    Porque nos eligen
                </p>
            </div>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <div className='' style={{width: 459 / proporcional, height: 'auto', marginBottom: 30 / proporcional}}>
                    <div className='d-flex justify-content-center' 
                        style={{width: '100%', height: 80 / proporcional, marginBottom: 20 / proporcional}}>
                        <div className='rounded-circle' 
                            style={{width: 80 / proporcional, height: 80 / proporcional, padding: 20 / proporcional,
                                background: '#f7f7f7'}}>
                            <img src={icono_experiencia_grey} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div style={{width: 459 / proporcional, height: 'auto'}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(34, 34, 34)', 
                                    fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                            xx años de experiencia
                        </p>
                        <div style={{width: 459 / proporcional, height: 'auto'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 21 / proporcional, color: '#848484', 
                                        fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                            </p>                                
                        </div>
                    </div>
                </div>
                <div className='' style={{width: 459 / proporcional, height: 'auto', marginBottom: 30 / proporcional}}>
                    <div className='d-flex justify-content-center' 
                        style={{width: '100%', height: 80 / proporcional, marginBottom: 20 / proporcional}}>
                        <div className='rounded-circle' 
                            style={{width: 80 / proporcional, height: 80 / proporcional, padding: 20 / proporcional,
                                background: '#f7f7f7'}}>
                            <img src={icono_licencia_grey} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div style={{width: 459 / proporcional, height: 'auto'}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(34, 34, 34)', 
                                    fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                            Licensia y seguro
                        </p>
                        <div style={{width: 459 / proporcional, height: 'auto'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 21 / proporcional, color: '#848484', 
                                        fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                            </p>                                
                        </div>
                    </div>
                </div>
                <div className='' style={{width: 459 / proporcional, height: 'auto', marginBottom: 30 / proporcional}}>
                    <div className='d-flex justify-content-center' 
                        style={{width: '100%', height: 80 / proporcional, marginBottom: 20 / proporcional}}>
                        <div className='rounded-circle' 
                            style={{width: 80 / proporcional, height: 80 / proporcional, padding: 20 / proporcional,
                                background: '#f7f7f7'}}>
                            <img src={icono_honestidad_grey} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div style={{width: 459 / proporcional, height: 'auto'}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(34, 34, 34)', 
                                    fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                            Honestidad
                        </p>
                        <div style={{width: 459 / proporcional, height: 'auto'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 21 / proporcional, color: '#848484', 
                                        fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                            </p>                                
                        </div>
                    </div>
                </div>
                <div className='' style={{width: 459 / proporcional, height: 'auto', marginBottom: 30 / proporcional}}>
                    <div className='d-flex justify-content-center' 
                        style={{width: '100%', height: 80 / proporcional, marginBottom: 20 / proporcional}}>
                        <div className='rounded-circle' 
                            style={{width: 80 / proporcional, height: 80 / proporcional, padding: 20 / proporcional,
                                background: '#f7f7f7'}}>
                            <img src={icono_certificado_grey} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div style={{width: 459 / proporcional, height: 'auto'}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(34, 34, 34)', 
                                    fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                            Premios ganados
                        </p>
                        <div style={{width: 459 / proporcional, height: 'auto'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 21 / proporcional, color: '#848484', 
                                        fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                            </p>                                
                        </div>
                    </div>
                </div>
                <div className='' style={{width: 459 / proporcional, height: 'auto', marginBottom: 30 / proporcional}}>
                    <div className='d-flex justify-content-center' 
                        style={{width: '100%', height: 80 / proporcional, marginBottom: 20 / proporcional}}>
                        <div className='rounded-circle' 
                            style={{width: 80 / proporcional, height: 80 / proporcional, padding: 20 / proporcional,
                                background: '#f7f7f7'}}>
                            <img src={icono_proyectos_grey} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div style={{width: 459 / proporcional, height: 'auto'}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(34, 34, 34)', 
                                    fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                            xxx proyectos exitosos
                        </p>
                        <div style={{width: 459 / proporcional, height: 'auto'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 21 / proporcional, color: '#848484', 
                                        fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                            </p>                                
                        </div>
                    </div>
                </div>
                <div className='' style={{width: 459 / proporcional, height: 'auto', marginBottom: 30 / proporcional}}>
                    <div className='d-flex justify-content-center' 
                        style={{width: '100%', height: 80 / proporcional, marginBottom: 20 / proporcional}}>
                        <div className='rounded-circle' 
                            style={{width: 80 / proporcional, height: 80 / proporcional, padding: 20 / proporcional,
                                background: '#f7f7f7'}}>
                            <img src={icono_trabajadores_grey} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div style={{width: 459 / proporcional, height: 'auto'}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(34, 34, 34)', 
                                    fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                            Profesionales
                        </p>
                        <div style={{width: 459 / proporcional, height: 'auto'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 21 / proporcional, color: '#848484', 
                                        fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                            </p>                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}