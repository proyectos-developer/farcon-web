import React, { useState } from 'react'

import icono_mision from '../../../assets/iconos/icono_mision_white_96.png'
import icono_vision from '../../../assets/iconos/icono_vision_white_96.png'
import icono_valores from '../../../assets/iconos/icono_valores_white_96.png'

import imagen_constructores from '../../../assets/images/contruccion_definicion.png'

export default function TrabajamosTablet({proporcional}) {

    const [seleccion_trabajo, setSeleccionTrabajo] = useState('')

    return (
         <div style={{width: '100%', height: 'auto', background: 'rgb(239, 126, 50)', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='' style={{width: 'auto', height: 148 / proporcional, marginTop: 40 / proporcional, marginBottom: 40 / proporcional, cursor: 'pointer',
                                padding: 20 / proporcional}}
                            onMouseOver={() => setSeleccionTrabajo('mision')} onMouseLeave={() => setSeleccionTrabajo('')}>
                            <div className={`${seleccion_trabajo === 'mision' ? 'd-flex shadow-lg rounded' : 'd-flex'}`} style={{width: '100%', height: 'auto'}}>
                                <div style={{width: 32 / proporcional, height: 148 /proporcional, marginRight: 10 / proporcional}}>
                                    <img src={icono_mision} style={{width: 32 / proporcional, height: 32 / proporcional}}/> 
                                </div>
                                <div style={{width: '100%', height: 148 / proporcional}}>
                                    <p style={{fontSize: 26 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 500, color: 'white', fontFamily: 'Roboto, serif'}}>
                                        NUESTRA MISIÓN
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 500, color: 'white', fontFamily: 'Roboto, serif'}}>
                                        Lore ipsum dolor amet consectetur adipiscing elit sed elusmod tempor incididunt labore dolor magna alliqua enim ad minimveniam quis nostrud exercita.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='' style={{width: 'auto', height: 148 / proporcional, marginTop: 40 / proporcional, marginBottom: 40 / proporcional, cursor: 'pointer',
                                padding: 20 / proporcional}}
                            onMouseOver={() => setSeleccionTrabajo('vision')} onMouseLeave={() => setSeleccionTrabajo('')}>
                            <div className={`${seleccion_trabajo === 'vision' ? 'd-flex shadow-lg rounded' : 'd-flex'}`} style={{width: '100%', height: 'auto'}}>
                                <div style={{width: 32 / proporcional, height: 148 /proporcional, marginRight: 10 / proporcional}}>
                                    <img src={icono_vision} style={{width: 32 / proporcional, height: 32 / proporcional}}/> 
                                </div>
                                <div style={{width: '100%', height: 148 / proporcional}}>
                                    <p style={{fontSize: 26 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 500, color: 'white', fontFamily: 'Roboto, serif'}}>
                                        NUESTRA VISIÓN
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 500, color: 'white', fontFamily: 'Roboto, serif'}}>
                                        Lore ipsum dolor amet consectetur adipiscing elit sed elusmod tempor incididunt labore dolor magna alliqua enim ad minimveniam quis nostrud exercita.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='' style={{width: 'auto', height: 148 / proporcional, marginTop: 40 / proporcional, marginBottom: 40 / proporcional, cursor: 'pointer',
                                padding: 20 / proporcional}}
                            onMouseOver={() => setSeleccionTrabajo('valores')} onMouseLeave={() => setSeleccionTrabajo('')}>
                            <div className={`${seleccion_trabajo === 'valores' ? 'd-flex shadow-lg rounded' : 'd-flex'}`} style={{width: '100%', height: 'auto'}}>
                                <div style={{width: 32 / proporcional, height: 148 /proporcional, marginRight: 10 / proporcional}}>
                                    <img src={icono_valores} style={{width: 32 / proporcional, height: 32 / proporcional}}/> 
                                </div>
                                <div style={{width: '100%', height: 108 / proporcional}}>
                                    <p style={{fontSize: 26 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 500, color: 'white', fontFamily: 'Roboto, serif'}}>
                                        NUESTRA VALORES
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 500, color: 'white', fontFamily: 'Roboto, serif'}}>
                                        Lore ipsum dolor amet consectetur adipiscing elit sed elusmod tempor incididunt labore dolor magna alliqua enim ad minimveniam quis nostrud exercita.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <img src={imagen_constructores} style={{width: 514 / proporcional, height: 560 / proporcional, marginTop: 40 / proporcional, marginBottom: 40 / proporcional}}/>
                    </div>
            </div>
        </div>
    )
}