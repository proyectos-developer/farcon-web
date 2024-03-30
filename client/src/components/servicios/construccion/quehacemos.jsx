import React, { useState } from 'react'

import hacemos_0 from '../../../assets/images/hacemos_edificios.png'
import hacemos_1 from '../../../assets/images/hacemos_casas.png'
import hacemos_2 from '../../../assets/images/hacemos_diseño.png'
import hacemos_3 from '../../../assets/images/hacemos_pistas.png'
import hacemos_4 from '../../../assets/images/hacemos_renovacion.png'
import hacemos_5 from '../../../assets/images/hacemos_excavacion.png'

export default function QueHacemos({proporcional}) {

    const [seleccion_hacemos, setSeleccionHacemos] = useState('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 54 / proporcional, paddingBottom: 54 / proporcional, paddingLeft: 320 / proporcional, paddingRight: 320 / proporcional,
            background: '#efefef'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 60 / proporcional, marginBottom: 27 / proporcional}}>
                    <p style={{fontSize: 42 / proporcional, lineHeight: `${52 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 700, fontFamily: 'Poppins, serif',
                            color: 'rgb(51, 51, 51)'}}>
                        ¿QUÉ HACEMOS?
                    </p>
                   <div className='rounded-pill' style={{width: '20%', height: 4 / proporcional, background: 'rgb(239, 126, 50)', marginBottom: 23 / proporcional}}/> 
                </div>
                <div style={{width: '100%', height: 'auto', paddingTop: 27 / proporcional, paddingBottom: 27 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 34 / proporcional}}>
                        <div style={{width: '30%', height: 'auto'}}
                            onMouseOver={() => setSeleccionHacemos('hacemos_0')} onMouseLeave={() => setSeleccionHacemos('')}>
                            <div className='' style={{width: '90%', height: 174 / proporcional, border: '2px solid rgb(239, 126, 50)', marginBottom: 30 / proporcional,
                                borderRadius: seleccion_hacemos === 'hacemos_0' ? 64 / proporcional : 8 / proporcional, cursor: 'pointer'}}>
                                <img src={hacemos_0} style={{width: '100%', height: 170 / proporcional, borderRadius: seleccion_hacemos === 'hacemos_0' ? 64 / proporcional : 8 / proporcional}}/>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 34 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, fontFamily: 'Poppins, serif',
                                        color: 'rgb(51, 51, 51)'}}>
                                    CONSTRUYEDO EDIFICIOS
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${27 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 500, fontFamily: 'Open Sans',
                                        color: 'rgb(51, 51, 51)'}}>
                                    Lorem ipsum is simply dummy text of the pringint and typesetting industry.
                                </p>
                            </div>
                            <div style={{width: '100%', height: 40 / proporcional}}>
                                <button className='btn' style={{width: 200 / proporcional, height: 40 / proporcional, background: 'rgb(239, 126, 50)', color: 'white', fontSize: 18 / proporcional,
                                        fontWeight: 600}}>
                                    Leer más
                                </button>
                            </div>
                        </div>

                        <div style={{width: '30%', height: 'auto'}}
                            onMouseOver={() => setSeleccionHacemos('hacemos_1')} onMouseLeave={() => setSeleccionHacemos('')}>
                            <div className='' style={{width: '90%', height: 174 / proporcional, border: '2px solid rgb(239, 126, 50)', marginBottom: 30 / proporcional,
                                borderRadius: seleccion_hacemos === 'hacemos_1' ? 64 / proporcional : 8 / proporcional, cursor: 'pointer'}}>
                                <img src={hacemos_1} style={{width: '100%', height: 170 / proporcional, borderRadius: seleccion_hacemos === 'hacemos_1' ? 64 / proporcional : 8 / proporcional}}/>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 34 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, fontFamily: 'Poppins, serif',
                                        color: 'rgb(51, 51, 51)'}}>
                                    CONSTRUYENDO CASAS
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${27 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 500, fontFamily: 'Open Sans',
                                        color: 'rgb(51, 51, 51)'}}>
                                    Lorem ipsum is simply dummy text of the pringint and typesetting industry.
                                </p>
                            </div>
                            <div style={{width: '100%', height: 40 / proporcional}}>
                                <button className='btn' style={{width: 200 / proporcional, height: 40 / proporcional, background: 'rgb(239, 126, 50)', color: 'white', fontSize: 18 / proporcional,
                                        fontWeight: 600}}>
                                    Leer más
                                </button>
                            </div>
                        </div>

                        <div style={{width: '30%', height: 'auto'}}
                            onMouseOver={() => setSeleccionHacemos('hacemos_2')} onMouseLeave={() => setSeleccionHacemos('')}>
                            <div className='' style={{width: '90%', height: 174 / proporcional, border: '2px solid rgb(239, 126, 50)', marginBottom: 30 / proporcional,
                                borderRadius: seleccion_hacemos === 'hacemos_2' ? 64 / proporcional : 8 / proporcional, cursor: 'pointer'}}>
                                <img src={hacemos_2} style={{width: '100%', height: 170 / proporcional, borderRadius: seleccion_hacemos === 'hacemos_2' ? 64 / proporcional : 8 / proporcional}}/>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 34 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, fontFamily: 'Poppins, serif',
                                        color: 'rgb(51, 51, 51)'}}>
                                    DISEñO DE INTERIORES
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${27 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 500, fontFamily: 'Open Sans',
                                        color: 'rgb(51, 51, 51)'}}>
                                    Lorem ipsum is simply dummy text of the pringint and typesetting industry.
                                </p>
                            </div>
                            <div style={{width: '100%', height: 40 / proporcional}}>
                                <button className='btn' style={{width: 200 / proporcional, height: 40 / proporcional, background: 'rgb(239, 126, 50)', color: 'white', fontSize: 18 / proporcional,
                                        fontWeight: 600}}>
                                    Leer más
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 34 / proporcional}}>
                        <div style={{width: '30%', height: 'auto'}}
                            onMouseOver={() => setSeleccionHacemos('hacemos_3')} onMouseLeave={() => setSeleccionHacemos('')}>
                            <div className='' style={{width: '90%', height: 174 / proporcional, border: '2px solid rgb(239, 126, 50)', marginBottom: 30 / proporcional,
                                borderRadius: seleccion_hacemos === 'hacemos_3' ? 64 / proporcional : 8 / proporcional, cursor: 'pointer'}}>
                                <img src={hacemos_3} style={{width: '100%', height: 170 / proporcional, borderRadius: seleccion_hacemos === 'hacemos_3' ? 64 / proporcional : 8 / proporcional}}/>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 34 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, fontFamily: 'Poppins, serif',
                                        color: 'rgb(51, 51, 51)'}}>
                                    REPARAMOS PISTAS
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${27 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 500, fontFamily: 'Open Sans',
                                        color: 'rgb(51, 51, 51)'}}>
                                    Lorem ipsum is simply dummy text of the pringint and typesetting industry.
                                </p>
                            </div>
                            <div style={{width: '100%', height: 40 / proporcional}}>
                                <button className='btn' style={{width: 200 / proporcional, height: 40 / proporcional, background: 'rgb(239, 126, 50)', color: 'white', fontSize: 18 / proporcional,
                                        fontWeight: 600}}>
                                    Leer más
                                </button>
                            </div>
                        </div>

                        <div style={{width: '30%', height: 'auto'}}
                            onMouseOver={() => setSeleccionHacemos('hacemos_4')} onMouseLeave={() => setSeleccionHacemos('')}>
                            <div className='' style={{width: '90%', height: 174 / proporcional, border: '2px solid rgb(239, 126, 50)', marginBottom: 30 / proporcional,
                                borderRadius: seleccion_hacemos === 'hacemos_4' ? 64 / proporcional : 8 / proporcional, cursor: 'pointer'}}>
                                <img src={hacemos_4} style={{width: '100%', height: 170 / proporcional, borderRadius: seleccion_hacemos === 'hacemos_4' ? 64 / proporcional : 8 / proporcional}}/>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 34 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, fontFamily: 'Poppins, serif',
                                        color: 'rgb(51, 51, 51)'}}>
                                    RENOVACIÓN
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${27 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 500, fontFamily: 'Open Sans',
                                        color: 'rgb(51, 51, 51)'}}>
                                    Lorem ipsum is simply dummy text of the pringint and typesetting industry.
                                </p>
                            </div>
                            <div style={{width: '100%', height: 40 / proporcional}}>
                                <button className='btn' style={{width: 200 / proporcional, height: 40 / proporcional, background: 'rgb(239, 126, 50)', color: 'white', fontSize: 18 / proporcional,
                                        fontWeight: 600}}>
                                    Leer más
                                </button>
                            </div>
                        </div>

                        <div style={{width: '30%', height: 'auto'}}
                            onMouseOver={() => setSeleccionHacemos('hacemos_5')} onMouseLeave={() => setSeleccionHacemos('')}>
                            <div className='' style={{width: '90%', height: 174 / proporcional, border: '2px solid rgb(239, 126, 50)', marginBottom: 30 / proporcional,
                                borderRadius: seleccion_hacemos === 'hacemos_5' ? 64 / proporcional : 8 / proporcional, cursor: 'pointer'}}>
                                <img src={hacemos_5} style={{width: '100%', height: 170 / proporcional, borderRadius: seleccion_hacemos === 'hacemos_5' ? 64 / proporcional : 8 / proporcional}}/>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 34 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, fontFamily: 'Poppins, serif',
                                        color: 'rgb(51, 51, 51)'}}>
                                    EXCAVACIONES
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${27 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 500, fontFamily: 'Open Sans',
                                        color: 'rgb(51, 51, 51)'}}>
                                    Lorem ipsum is simply dummy text of the pringint and typesetting industry.
                                </p>
                            </div>
                            <div style={{width: '100%', height: 40 / proporcional}}>
                                <button className='btn' style={{width: 200 / proporcional, height: 40 / proporcional, background: 'rgb(239, 126, 50)', color: 'white', fontSize: 18 / proporcional,
                                        fontWeight: 600}}>
                                    Leer más
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}