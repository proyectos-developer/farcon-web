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

export default function Escogen({proporcional}) {

    return (
        <div className='' style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional,
                background: 'transparent', height: 'auto', marginBottom: 40 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${33 / proporcional}px`, color: '#222222', marginBottom: 55 / proporcional,
                    borderBottom: '1px solid #f6f6f6', fontFamily: 'Montserrat, sans-serif', textAlign: 'center', fontWeight: 600, paddingBottom: 20 / proporcional}}>
                    Porque nos eligen
                </p>
            </div>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 45 / proporcional}}>
                    <div className='d-flex' style={{width: 380 / proporcional, height: 120 / proporcional}}>
                        <div className='rounded-circle' style={{width: 80 / proporcional, height: 80 / proporcional, marginRight: 10 / proporcional, padding: 20 / proporcional,
                                background: '#f7f7f7'}}>
                            <img src={icono_experiencia_grey} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                        </div>
                        <div style={{width: 290 / proporcional, height: 120 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(34, 34, 34)', 
                                        fontFamily: 'Montserrat, sans-serif'}}>
                                xx años de experiencia
                            </p>
                            <div style={{width: 290 / proporcional, height: 81 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 21 / proporcional, color: '#848484', 
                                            fontFamily: 'Montserrat, sans-serif'}}>
                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                </p>                                
                            </div>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: 380 / proporcional, height: 120 / proporcional}}>
                        <div className='rounded-circle' style={{width: 80 / proporcional, height: 80 / proporcional, marginRight: 10 / proporcional, padding: 20 / proporcional,
                                background: '#f7f7f7'}}>
                            <img src={icono_licencia_grey} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                        </div>
                        <div style={{width: 290 / proporcional, height: 80 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(34, 34, 34)', 
                                        fontFamily: 'Montserrat, sans-serif'}}>
                                Licensia y seguro
                            </p>
                            <div style={{width: 290 / proporcional, height: 81 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 21 / proporcional, color: '#848484', 
                                            fontFamily: 'Montserrat, sans-serif'}}>
                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                </p>                                
                            </div>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: 380 / proporcional, height: 120 / proporcional}}>
                        <div className='rounded-circle' style={{width: 80 / proporcional, height: 80 / proporcional, marginRight: 10 / proporcional, padding: 20 / proporcional,
                                background: '#f7f7f7'}}>
                            <img src={icono_honestidad_grey} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                        </div>
                        <div style={{width: 290 / proporcional, height: 80 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(34, 34, 34)', 
                                        fontFamily: 'Montserrat, sans-serif'}}>
                                Honestidad
                            </p>
                            <div style={{width: 290 / proporcional, height: 81 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 21 / proporcional, color: '#848484', 
                                            fontFamily: 'Montserrat, sans-serif'}}>
                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                </p>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: 380 / proporcional, height: 120 / proporcional}}>
                        <div className='rounded-circle' style={{width: 80 / proporcional, height: 80 / proporcional, marginRight: 10 / proporcional, padding: 20 / proporcional,
                                background: '#f7f7f7'}}>
                            <img src={icono_certificado_grey} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                        </div>
                        <div style={{width: 290 / proporcional, height: 80 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(34, 34, 34)', 
                                        fontFamily: 'Montserrat, sans-serif'}}>
                                Premios ganados
                            </p>
                            <div style={{width: 290 / proporcional, height: 81 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 21 / proporcional, color: '#848484', 
                                            fontFamily: 'Montserrat, sans-serif'}}>
                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                </p>                                
                            </div>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: 380 / proporcional, height: 120 / proporcional}}>
                        <div className='rounded-circle' style={{width: 80 / proporcional, height: 80 / proporcional, marginRight: 10 / proporcional, padding: 20 / proporcional,
                                background: '#f7f7f7'}}>
                            <img src={icono_proyectos_grey} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                        </div>
                        <div style={{width: 290 / proporcional, height: 80 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(34, 34, 34)', 
                                        fontFamily: 'Montserrat, sans-serif'}}>
                                xxx proyectos exitosos
                            </p>
                            <div style={{width: 290 / proporcional, height: 81 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 21 / proporcional, color: '#848484', 
                                            fontFamily: 'Montserrat, sans-serif'}}>
                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                </p>                                
                            </div>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: 380 / proporcional, height: 120 / proporcional}}>
                        <div className='rounded-circle' style={{width: 80 / proporcional, height: 80 / proporcional, marginRight: 10 / proporcional, padding: 20 / proporcional,
                                background: '#f7f7f7'}}>
                            <img src={icono_trabajadores_grey} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                        </div>
                        <div style={{width: 290 / proporcional, height: 80 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(34, 34, 34)', 
                                        fontFamily: 'Montserrat, sans-serif'}}>
                                Profesionales
                            </p>
                            <div style={{width: 290 / proporcional, height: 81 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 21 / proporcional, color: '#848484', 
                                            fontFamily: 'Montserrat, sans-serif'}}>
                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                </p>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}