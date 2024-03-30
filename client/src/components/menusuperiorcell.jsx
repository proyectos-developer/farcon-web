import React, { useState } from 'react'

import icono_lupa from '../assets/iconos/icono_lupa_white_40.png'
import icono_menu from '../assets/iconos/icono_menu_white_96.png'
import { useNavigate } from 'react-router-dom'

export default function MenuSuperiorCell({proporcional}) {

    const navigate = useNavigate()
    const [open_menu, setOpenMenu] = useState (false)

    return (
        <div className='position-relative' style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, height: 70 / proporcional, 
            background: '#1a2948'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 70 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: 40 / proporcional, height: 70 / proporcional, paddingTop: 19 / proporcional, 
                    paddingBottom: 19 / proporcional}}>
                    <img src={icono_lupa} style={{with: 32 / proporcional, height: 32 / proporcional, cursor: 'pointer'}}/>
                </div>
                <div className='d-flex justify-content-end' style={{width: 40 / proporcional, height: 70 / proporcional, paddingTop: 19 / proporcional, 
                    paddingBottom: 19 / proporcional, cursor: 'pointer'}}
                    onClick={() => setOpenMenu(!open_menu)}>
                    <img src={icono_menu} style={{with: 32 / proporcional, height: 32 / proporcional, cursor: 'pointer'}}/>
                </div>
            </div>
            {
              open_menu ? (
                <div className='position-absolute shadow-lg vh-100' style={{width: 400 / proporcional, padding: 20 / proporcional, background: '#1a2948', top: 70 / proporcional,
                    right: 0 / proporcional, zIndex: 99999}}>
                    <div style={{width: 260 / proporcional, height: 'auto'}}>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, textAlign: 'left', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}} onClick={() => {navigate('/'); setOpenMenu(false)}}>
                                Inicio
                        </p>
                    </div>
                    <div style={{width: 260 / proporcional, height: 'auto'}}>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, textAlign: 'left', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}} onClick={() => {navigate('/sobre-nosotros'); setOpenMenu(false)}}>
                                Nosotros
                        </p>
                    </div>
                    <div style={{width: 260 / proporcional, height: 'auto'}}>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, textAlign: 'left', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}} onClick={() => {navigate('/nuestros-servicios/construccion'); setOpenMenu(false)}}>
                                Construcción
                        </p>
                    </div>
                    <div style={{width: 260 / proporcional, height: 'auto'}}>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, textAlign: 'left', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}} onClick={() => {navigate('/nuestros-servicios/inmobiliaria'); setOpenMenu(false)}}>
                                Inmobiliaria
                        </p>
                    </div>
                    <div style={{width: 260 / proporcional, height: 'auto'}}>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, textAlign: 'left', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}} onClick={() => {navigate('/galeria'); setOpenMenu(false)}}>
                                Galería
                        </p>
                    </div>
                    <div style={{width: 260 / proporcional, height: 'auto'}}>
                        <p className='mb-0' style={{fontSize: 18 / proporcional, lineHeight: `${40 / proporcional}px`, textAlign: 'left', 
                            fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: 600, cursor: 'pointer'}} onClick={() => {navigate('/contactanos'); setOpenMenu(false)}}>
                                Contácto
                        </p>
                    </div>
                </div>
              ) : null
            }
        </div>
    )
}
