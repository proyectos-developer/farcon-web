import React from 'react'

import logo_white from '../assets/logo_white_246.png'
import icono_clock from '../assets/iconos/icono_clock_orange_40.png'
import icono_location from '../assets/iconos/icono_location_orange_40.png'
import icono_phone from '../assets/iconos/icono_phone_orange_40.png'
import { useNavigate } from 'react-router-dom'

export default function Footer({proporcional}) {

    const navigate = useNavigate()

    return (
        <div className='d-flex' style={{width: '100%', height: 'auto', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional,
                background: '#1b2848', paddingTop: 80 / proporcional, paddingBottom: 30 / proporcional}}>
            <div style={{width: '25%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                <img src={logo_white} style={{width: 246 / proporcional, height: 44 / proporcional, marginBottom: 32 / proporcional}}/>
                <p style={{fontSize: 16 / proporcional, marginBottom: 25 / proporcional, lineHeight: `${28 / proporcional}px`, color: '#dedede', fontWeight: 400,
                            fontFamily: 'Relaway, sans-serif'}}>
                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. 
                </p>
                <button className='rounded' style={{width: 230 / proporcional, height: 50 / proporcional, fontSize: 16 / proporcional, background: '#ef7e32', 
                    border: '2px solid #ef7e32', color: '#ffffff', fontWeight: 500}}>
                    Contáctanos
                </button>
            </div>
            <div style={{width: '25%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                <p style={{fontSize: 24 / proporcional, marginBottom: 18 / proporcional, lineHeight: `${40 / proporcional}px`, color: '#ffffff', fontWeight: 600,
                            fontFamily: 'Montserrat, sans-serif'}}>
                Menú
                </p>                
                <div style={{width: 70 / proporcional, marginBottom: 30 / proporcional, height: 1 / proporcional, background: '#ef7e32'}}/>
                <div style={{width: 270 / proporcional, height: 'auto'}}>
                    <p style={{fontSize: 16 / proporcional, marginBottom: 10 / proporcional, lineHeight: `${28 / proporcional}px`, color: '#dedede', fontWeight: 400, cursor: 'pointer',
                                fontFamily: 'Relaway, sans-serif'}} onClick={() => {navigate ('/sobre-nosotros'); window.scrollTo(0, 0)}}>
                    Nosotros 
                    </p>                
                    <p style={{fontSize: 16 / proporcional, marginBottom: 10 / proporcional, lineHeight: `${28 / proporcional}px`, color: '#dedede', fontWeight: 400, cursor: 'pointer',
                                fontFamily: 'Relaway, sans-serif'}} onClick={() => {navigate ('/nuestros-servicios/construccion'); window.scrollTo(0, 0)}}>
                    Construcción 
                    </p>                
                    <p style={{fontSize: 16 / proporcional, marginBottom: 10 / proporcional, lineHeight: `${28 / proporcional}px`, color: '#dedede', fontWeight: 400, cursor: 'pointer',
                                fontFamily: 'Relaway, sans-serif'}} onClick={() => {navigate ('/nuestros-servicios/inmobiliaria'); window.scrollTo(0, 0)}}>
                    Inmobiliaria 
                    </p>                
                    <p style={{fontSize: 16 / proporcional, marginBottom: 10 / proporcional, lineHeight: `${28 / proporcional}px`, color: '#dedede', fontWeight: 400, cursor: 'pointer',
                                fontFamily: 'Relaway, sans-serif'}} onClick={() => {navigate ('/galeria'); window.scrollTo(0, 0)}}>
                    Galería 
                    </p>                
                    <p style={{fontSize: 16 / proporcional, marginBottom: 10 / proporcional, lineHeight: `${28 / proporcional}px`, color: '#dedede', fontWeight: 400, cursor: 'pointer',
                                fontFamily: 'Relaway, sans-serif'}} onClick={() => {navigate ('/contactanos'); window.scrollTo(0, 0)}}>
                    Contácto 
                    </p>                
                </div>
            </div>
            <div style={{width: '25%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                <p style={{fontSize: 24 / proporcional, marginBottom: 18 / proporcional, lineHeight: `${40 / proporcional}px`, color: '#ffffff', fontWeight: 600,
                            fontFamily: 'Montserrat, sans-serif'}}>
                Servicios
                </p>                
                <div style={{width: 70 / proporcional, marginBottom: 30 / proporcional, height: 1 / proporcional, background: '#ef7e32'}}/>
                <div style={{width: 270 / proporcional, height: 'auto'}}>
                    <p style={{fontSize: 16 / proporcional, marginBottom: 10 / proporcional, lineHeight: `${28 / proporcional}px`, color: '#dedede', fontWeight: 400,
                                fontFamily: 'Relaway, sans-serif'}}>
                    Servicios 1 
                    </p>                
                    <p style={{fontSize: 16 / proporcional, marginBottom: 10 / proporcional, lineHeight: `${28 / proporcional}px`, color: '#dedede', fontWeight: 400,
                                fontFamily: 'Relaway, sans-serif'}}>
                    Servicios 2 
                    </p>                
                    <p style={{fontSize: 16 / proporcional, marginBottom: 10 / proporcional, lineHeight: `${28 / proporcional}px`, color: '#dedede', fontWeight: 400,
                                fontFamily: 'Relaway, sans-serif'}}>
                    Servicios 3 
                    </p>                
                    <p style={{fontSize: 16 / proporcional, marginBottom: 10 / proporcional, lineHeight: `${28 / proporcional}px`, color: '#dedede', fontWeight: 400,
                                fontFamily: 'Relaway, sans-serif'}}>
                    Servicios 4 
                    </p>                
                    <p style={{fontSize: 16 / proporcional, marginBottom: 10 / proporcional, lineHeight: `${28 / proporcional}px`, color: '#dedede', fontWeight: 400,
                                fontFamily: 'Relaway, sans-serif'}}>
                    Servicios 5 
                    </p>  
                </div>              
            </div>                
            <div style={{width: '25%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                <p style={{fontSize: 24 / proporcional, marginBottom: 18 / proporcional, lineHeight: `${40 / proporcional}px`, color: '#ffffff', fontWeight: 600,
                            fontFamily: 'Montserrat, sans-serif'}}>
                Contáctanos
                </p>                
                <div style={{width: 70 / proporcional, marginBottom: 30 / proporcional, height: 1 / proporcional, background: '#ef7e32'}}/>
                <div style={{width: 270 / proporcional, height: 'auto'}}>
                    <div className='d-flex' style={{width: 270 / proporcional, height: 'auto'}}>
                        <img src={icono_location} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 38 / proporcional}}/>
                        <div style={{width: 208 / proporcional, lineHeight: 43 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, color: '#dedede', marginBottom: 14 / proporcional,
                                lineHeight: `${28 / proporcional}px`, fontFamily: 'Relaway, sans-serif'}}>
                                Ubicación
                            </p>
                            <div style={{width: 208 / proporcional, height: 1, background: 'rgba(255,255,255,0.10)', marginBottom: 14 / proporcional}}/>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: 270 / proporcional, height: 'auto'}}>
                        <img src={icono_phone} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 38 / proporcional}}/>
                        <div style={{width: 208 / proporcional, lineHeight: 55 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, color: '#dedede',
                                lineHeight: `${20 / proporcional}px`, fontFamily: 'Relaway, sans-serif'}}>
                                +51 xxx xxxxxx
                            </p>
                            <p style={{fontSize: 16 / proporcional, color: '#dedede', marginBottom: 14 / proporcional,
                                lineHeight: `${20 / proporcional}px`, fontFamily: 'Relaway, sans-serif'}}>
                                correo@dominio.com
                            </p>
                            <div style={{width: 208 / proporcional, height: 1, background: 'rgba(255,255,255,0.10)', marginBottom: 14 / proporcional}}/>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: 270 / proporcional, height: 'auto'}}>
                        <img src={icono_clock} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 38 / proporcional}}/>
                        <div style={{width: 208 / proporcional, lineHeight: 55 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, color: '#dedede',
                                lineHeight: `${20 / proporcional}px`, fontFamily: 'Relaway, sans-serif'}}>
                                Lu - Sa: 8-18
                            </p>
                            <p style={{fontSize: 16 / proporcional, color: '#dedede', marginBottom: 14 / proporcional,
                                lineHeight: `${20 / proporcional}px`, fontFamily: 'Relaway, sans-serif'}}>
                                Domingos cerrado
                            </p>
                            <div style={{width: 208 / proporcional, height: 1, background: 'rgba(255,255,255,0.10)', marginBottom: 14 / proporcional}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}