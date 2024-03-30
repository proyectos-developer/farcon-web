import React, { useState } from 'react'

import equipo_00 from '../../../assets/iconos/icono_constructor_00.png'
import equipo_01 from '../../../assets/iconos/icono_constructor_01.png'
import equipo_02 from '../../../assets/iconos/icono_constructor_02.png'

export default function MaquinariaTablet({proporcional}) {

    const [seleccion_equipo, setSeleccionEquipo] = useState ('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 54 / proporcional, paddingBottom: 54 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className={`${seleccion_equipo === 'equipo0' ? 'shadow-lg rounded' : 'shadow rounded'}`} style={{width: '48%', height: 'auto', border: '1ps solid 2px solid rgb(239, 126, 50)',
                        background: seleccion_equipo === 'equipo0' ? 'rgb(239, 126, 50)' : 'white', cursor: 'pointer'}}
                        onMouseOver={() => setSeleccionEquipo('equipo0')} onMouseLeave={() => setSeleccionEquipo('')}>
                        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <img src={equipo_00} style={{width: 64 / proporcional, height: 64 / proporcional}}/>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0, fontWeight: 600, 
                                        color: seleccion_equipo === 'equipo0' ? 'white' : 'black', fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'left'}}>
                                        General construcción
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontWeight: 300, 
                                        color: seleccion_equipo === 'equipo0' ? 'white' : 'black', fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'left'}}>
                                        Lorem ipsum is simply summy text of the printing and typesetting industry
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${seleccion_equipo === 'equipo1' ? 'shadow-lg rounded' : 'shadow rounded'}`} style={{width: '48%', height: 'auto', border: '1ps solid 2px solid rgb(239, 126, 50)',
                        background: seleccion_equipo === 'equipo1' ? 'rgb(239, 126, 50)' : 'white', cursor: 'pointer'}}
                        onMouseOver={() => setSeleccionEquipo('equipo1')} onMouseLeave={() => setSeleccionEquipo('')}>
                        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <img src={equipo_01} style={{width: 64 / proporcional, height: 64 / proporcional}}/>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0, fontWeight: 600, 
                                        color: seleccion_equipo === 'equipo1' ? 'white' : 'black', fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'left'}}>
                                        General construcción
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontWeight: 300, 
                                        color: seleccion_equipo === 'equipo1' ? 'white' : 'black', fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'left'}}>
                                        Lorem ipsum is simply summy text of the printing and typesetting industry
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>        
                    <div className={`${seleccion_equipo === 'equipo2' ? 'shadow-lg rounded' : 'shadow rounded'}`} style={{width: '48%', height: 'auto', border: '1ps solid 2px solid rgb(239, 126, 50)',
                        background: seleccion_equipo === 'equipo2' ? 'rgb(239, 126, 50)' : 'white', cursor: 'pointer'}}
                        onMouseOver={() => setSeleccionEquipo('equipo2')} onMouseLeave={() => setSeleccionEquipo('')}>
                        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <img src={equipo_02} style={{width: 64 / proporcional, height: 64 / proporcional}}/>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0, fontWeight: 600, 
                                        color: seleccion_equipo === 'equipo2' ? 'white' : 'black', fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'left'}}>
                                        General construcción
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontWeight: 300, 
                                        color: seleccion_equipo === 'equipo2' ? 'white' : 'black', fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'left'}}>
                                        Lorem ipsum is simply summy text of the printing and typesetting industry
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}