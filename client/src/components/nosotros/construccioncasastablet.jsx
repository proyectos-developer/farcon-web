import React, { useState } from 'react'

import image_nosotros from '../../assets/images/image_nosotros_527.jpg'

import icono_ubicacion from '../../assets/iconos/icono_ubicacion_orange_96.png'
import icono_certificado from '../../assets/iconos/icono_certificado_orange_96.png'
import icono_trabajador from '../../assets/iconos/icono_trabajador_orange_96.png'
import icono_call from '../../assets/iconos/nosotros_acerca_call_96.png'

export default function ConstruccionCasasTablet({proporcional}) {

    const [botton, setBotton] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 75 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 54 / proporcional, marginBottom: 55 / proporcional}}>
                    <p style={{width: '100%', fontSize: 30 / proporcional, lineHeight: `${33 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(34, 34, 34)', fontWeight: 600,
                            textAlign: 'center'}}>
                        Acerca de Construcción de casas
                    </p>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '20%', height: 2 / proporcional, background: 'rgb(239, 126, 50)'}}/>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <img src={image_nosotros} style={{width: 527 / proporcional, height: 437 / proporcional}}/>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <p style={{fontSize: 24 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 500, color: '#222222', textAlign: 'center'}}>
                        Proporcionamos soluciones completas y específicas para cada uno de nuestros clientes.
                    </p>
                    <div style={{width: '100%', height: 'auto', marginBottom: 15 / proporcional, textAlign: 'center'}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px}`, fontWeight: 400, color: 'rgb(132, 132, 132)', marginBottom: 0}}>
                            Bixal providing internationa construction services company and is leading builder in diverse market segments. The company has earnned recognition for undertaking
                            lare, complex projects, fostering innovation, embracing emerging technologies, and making a difference for their clients.
                        </p>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 14 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '33%', height: 'auto', marginBottom: 15 / proporcional}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto'}}>
                                <img src={icono_ubicacion} style={{width: 30 / proporcional, height: 30 / proporcional, marginRight: 14 / proporcional}}/>
                                <div style={{width: 'auto', height: 30 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 700, marginBottom: 0, color: 'rgb(34, 34, 34)'}}>
                                        Disponible más de <br/> 25 ciudades
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '33%', height: 'auto', marginBottom: 15 / proporcional}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto'}}>
                                <img src={icono_certificado} style={{width: 30 / proporcional, height: 30 / proporcional, marginRight: 14 / proporcional}}/>
                                <div style={{width: 'auto', height: 30 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 700, marginBottom: 0, color: 'rgb(34, 34, 34)'}}>
                                        Ganado mas de <br/> 50 certificaciones
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '33%', height: 'auto', marginBottom: 15 / proporcional}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto'}}>
                                <img src={icono_trabajador} style={{width: 30 / proporcional, height: 30 / proporcional, marginRight: 14 / proporcional}}/>
                                <div style={{width: 'auto', height: 30 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 700, marginBottom: 0, color: 'rgb(34, 34, 34)'}}>
                                        Más de 5000 <br/> trabajadores
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '50%', height: 54 / proporcional}}>
                            <button className='btn' style={{width: 250 / proporcional, height: 54 / proporcional, fontsize: 16 / proporcional, 
                                    background: !botton ? 'rgb(239, 126, 50)' : 'white', border: '1px solid rgb(239, 126, 58)', 
                                    fontWeight: 500, color: !botton  ? 'white' : 'rgb(239, 126, 58)'}}
                                    onMouseOver={() => setBotton(true)} onMouseLeave={() => setBotton(false)}>Conocer más</button>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '50%', height: 54 / proporcional}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto'}}>
                                <img src={icono_call} style={{width: 30 / proporcional, height: 30 / proporcional, marginRight: 17 / proporcional, marginTop: 13 / proporcional,
                                    marginBottom: 13 / proporcional}}/>
                                <div style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, color: 'rgb(239, 126, 50)', marginBottom: 0}}>
                                        O llamárnos al:
                                        <br/> <span style={{color: 'rgb(34, 34, 34)', fontWeight: 500}}>(+51 999 xxxxxx)</span>
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