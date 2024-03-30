import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import icono_lupa from '../assets/iconos/icono_lupa_white_40.png'

export default function MenuSuperior({proporcional}) {

    const navigate = useNavigate()
    const [menu_opcion, setMenuOpcion] = useState('')
    const [sub_menu_opcion, setSubMenuOpcion] = useState('')

    return (
        <div style={{width: '100%', paddingLeft: 365 / proporcional, paddingRight: 365 / proporcional, height: 70 / proporcional, background: '#1a2948'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 70 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '60%', height: 70 / proporcional}}>
                    <div style={{width: '20%', height: menu_opcion === 'inicio' ? 65 / proporcional : 70 / proporcional, paddingRight: 24 / proporcional, paddingLeft: 24 / proporcional}}
                        onMouseOver={() => setMenuOpcion('inicio')} onMouseLeave={() => setMenuOpcion('')}>
                        <p className='mb-0' style={{fontSize: 18 / proporcional, lineHeight: `${menu_opcion === 'inicio' ? 65 / proporcional : 70 / proporcional}px`, textAlign: 'center', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}}
                                onClick={() => navigate ('/')}>
                                Inicio
                        </p>
                        {
                            menu_opcion === 'inicio' ? (
                                <div className='rounded' style={{width: '100%', height: 5 / proporcional, background: 'rgb(231, 129, 56)'}}/>
                            ) : null
                        }
                    </div>
                    <div style={{width: '20%', height: menu_opcion === 'nosotros' ? 65 / proporcional : 70 / proporcional, paddingRight: 24 / proporcional, paddingLeft: 24 / proporcional}}
                        onMouseOver={() => setMenuOpcion('nosotros')} onMouseLeave={() => setMenuOpcion('')}>
                        <p className='mb-0' style={{fontSize: 18 / proporcional, lineHeight: `${menu_opcion === 'nosotros' ? 65 / proporcional : 70 / proporcional}px`, textAlign: 'center', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}}
                                onClick={() => navigate ('/sobre-nosotros')}>
                                Nosotros
                        </p>
                        {
                            menu_opcion === 'nosotros' ? (
                                <div className='rounded' style={{width: '100%', height: 5 / proporcional, background: 'rgb(231, 129, 56)'}}/>
                            ) : null
                        }
                    </div>
                    <div className='position-relative' style={{width: '20%', height: menu_opcion === 'servicios' ? 65 / proporcional : 70 / proporcional, paddingRight: 24 / proporcional, paddingLeft: 24 / proporcional}}
                        onMouseOver={() => setMenuOpcion('servicios')} onMouseLeave={() => setMenuOpcion('')}>
                        <p className='mb-0' style={{fontSize: 18 / proporcional, lineHeight: `${menu_opcion === 'servicios' ? 65 / proporcional : 70 / proporcional}px`, textAlign: 'center', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}}>
                                Servicios
                        </p>
                        {
                            menu_opcion === 'servicios' ? (
                                <div className='rounded' style={{width: '100%', height: 5 / proporcional, background: 'rgb(231, 129, 56)'}}/>
                            ) : null
                        }
                        {
                            menu_opcion === 'servicios' ? (
                                <div className='shadow rounded position-absolute' style={{width: 250 / proporcional, height: 107 / proporcional, zIndex: 99999, background: 'white'}}>
                                    <div style={{width: 250 / proporcional, height: 53 / proporcional, padding: `${14 / proporcional}px ${20 / proporcional}px ${14 / proporcional}px ${20 / proporcional}px`,
                                        cursor: 'pointer', background: sub_menu_opcion === 'construccion' ? 'rgb(231, 129, 56)' : 'white'}}
                                        onMouseOver={() => setSubMenuOpcion('construccion')} onMouseLeave={() => setSubMenuOpcion('')}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, color: sub_menu_opcion === 'construccion' ? 'white' : 'rgb(37,37, 37)', fontWeight: 600, fontFamily: 'Montserrat, sans-serif',
                                                marginBottom: 0}} onClick={() => navigate ('/nuestros-servicios/construccion')}>
                                            Construcción
                                        </p>
                                    </div>
                                    <div style={{width: 250 / proporcional, height: 53 / proporcional, padding: `${14 / proporcional}px ${20 / proporcional}px ${14 / proporcional}px ${20 / proporcional}px`,
                                        cursor: 'pointer', background: sub_menu_opcion === 'inmobiliaria' ? 'rgb(231, 129, 56)' : 'white'}}
                                        onMouseOver={() => setSubMenuOpcion('inmobiliaria')} onMouseLeave={() => setSubMenuOpcion('')}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, color: sub_menu_opcion === 'inmobiliaria' ? 'white' : 'rgb(37,37, 37)', fontWeight: 600, fontFamily: 'Montserrat, sans-serif',
                                                marginBottom: 0}} onClick={() => navigate ('/nuestros-servicios/inmobiliaria')}>
                                            Inmobiliaria
                                        </p>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                    <div style={{width: '20%', height: menu_opcion === 'galeria' ? 65 / proporcional : 70 / proporcional, paddingRight: 24 / proporcional, paddingLeft: 24 / proporcional}}
                        onMouseOver={() => setMenuOpcion('galeria')} onMouseLeave={() => setMenuOpcion('')}>
                        <p className='mb-0' style={{fontSize: 18 / proporcional, lineHeight: `${menu_opcion === 'galeria' ? 65 / proporcional : 70 / proporcional}px`, textAlign: 'center', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}}
                                onClick={() => navigate ('/galeria')}>
                                Galería
                        </p>
                        {
                            menu_opcion === 'galeria' ? (
                                <div className='rounded' style={{width: '100%', height: 5 / proporcional, background: 'rgb(231, 129, 56)'}}/>
                            ) : null
                        }
                    </div>
                    <div style={{width: '20%', height: menu_opcion === 'contacto' ? 65 / proporcional : 70 / proporcional, paddingRight: 24 / proporcional, paddingLeft: 24 / proporcional}}
                        onMouseOver={() => setMenuOpcion('contacto')} onMouseLeave={() => setMenuOpcion('')}>
                        <p className='mb-0' style={{fontSize: 18 / proporcional, lineHeight: `${menu_opcion === 'contacto' ? 65 / proporcional : 70 / proporcional}px`, textAlign: 'center', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}}
                                onClick={() => navigate ('/contactanos')}>
                                Contácto
                        </p>
                        {
                            menu_opcion === 'contacto' ? (
                                <div className='rounded' style={{width: '100%', height: 5 / proporcional, background: 'rgb(231, 129, 56)'}}/>
                            ) : null
                        }
                    </div>
                </div>
                <div className='d-flex justify-content-end' style={{width: '20%', height: 70 / proporcional, padding: 19 / proporcional}}>
                    <img src={icono_lupa} style={{with: 32 / proporcional, height: 32 / proporcional, cursor: 'pointer'}}/>
                </div>
            </div>
        </div>
    )
}
