import React, { useState } from 'react'

import icono_valvula_grey from '../../assets/iconos/nosotros_eligen_valvula_grey_96.png'
import icono_valvula_white from '../../assets/iconos/nosotros_eligen_valvula_white_96.png'
import icono_proyectos_grey from '../../assets/iconos/nosotros_eligen_proyectos_grey_96.png'
import icono_proyectos_white from '../../assets/iconos/nosotros_eligen_proyectos_white_96.png'
import icono_experiencia_grey from '../../assets/iconos/nosotros_eligen_experiencia_grey_96.png'
import icono_experiencia_white from '../../assets/iconos/nosotros_eligen_experiencia_white_96.png'
import icono_certificado_grey from '../../assets/iconos/nosotros_eligen_certificado_grey_96.png'
import icono_certificado_white from '../../assets/iconos/nosotros_eligen_certificado_white_96.png'
import icono_trabajadores_grey from '../../assets/iconos/nosotros_eligen_trabajadores_grey_96.png'
import icono_trabajadores_white from '../../assets/iconos/nosotros_eligen_trabajadores_white_96.png'
import icono_empresa_grey from '../../assets/iconos/nosotros_eligen_empresa_grey_96.png'
import icono_empresa_white from '../../assets/iconos/nosotros_eligen_empresa_white_96.png'

export default function PorqueNosEligenTablet({proporcional}) {

    const [seleccion_eligen, setSeleccionEligen] = useState ('')

    return (
        <div style={{background: '#f7f7f7', height: 'auto', paddingTop: 80 / proporcional, paddingBottom: 20 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='' style={{width: '100%', height: 'auto', marginBottom: 55 / proporcional}}>
                    <p style={{textAlign: 'center', fontSize: 30 / proporcional, lineHeight: `${33 / proporcional}px`, fontWeight: 600, marginBottom: 0, color: 'rgb(34, 34, 34)', marginBottom: 20 / proporcional}}>
                        ¿Porqué las personas nos eligen?
                    </p>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 2 / proporcional}}>
                        <div style={{width: '10%', height: 2 / proporcional, background: 'rgb(239, 126, 50)'}}/>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 46 / proporcional}}>
                        <div style={{width: '90%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <div className='rounded-circle d-flex justify-content-center' 
                                        style={{width:  80 / proporcional, height: 80 / proporcional, background: seleccion_eligen === 'experiencia' ? '#ef9c32' : 'white', marginRight: 20 / proporcional, paddingTop: 17.5 / proporcional,
                                                paddingBottom: 17.5 / proporcional}}
                                        onMouseOver={() => setSeleccionEligen('experiencia')} onMouseLeave={() => setSeleccionEligen('')}>
                                    <img src={seleccion_eligen === 'experiencia' ? icono_experiencia_white : icono_experiencia_grey} style={{width: 45 / proporcional, height: 46 / proporcional}}/>
                                </div>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(119, 119, 119)',
                                        fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                        30 años de experiencia
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: '"rgb(132, 132, 132)"',
                                        fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                        El gran explorador rechaza la verdad del maestro constructor de la filicidad humana, no le gusta el placer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 46 / proporcional}}>
                        <div style={{width: '90%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <div className='rounded-circle d-flex justify-content-center' 
                                        style={{width:  80 / proporcional, height: 80 / proporcional, background: seleccion_eligen === 'empresa' ? '#ef9c32' : 'white', marginRight: 20 / proporcional, paddingTop: 17.5 / proporcional,
                                                paddingBottom: 17.5 / proporcional}}
                                        onMouseOver={() => setSeleccionEligen('empresa')} onMouseLeave={() => setSeleccionEligen('')}>
                                    <img src={seleccion_eligen === 'empresa' ? icono_empresa_white : icono_empresa_grey} style={{width: 45 / proporcional, height: 46 / proporcional}}/>
                                </div>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(119, 119, 119)',
                                        fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                        Licencia y seguro
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: '"rgb(132, 132, 132)"',
                                        fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                        Debo explicarle cuán equivocada era la idea de denunciar le placer y alabar el dolor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 46 / proporcional}}>
                        <div style={{width: '90%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <div className='rounded-circle d-flex justify-content-center' 
                                        style={{width:  80 / proporcional, height: 80 / proporcional, background: seleccion_eligen === 'certificado' ? '#ef9c32' : 'white', marginRight: 20 / proporcional, paddingTop: 17.5 / proporcional,
                                                paddingBottom: 17.5 / proporcional}}
                                        onMouseOver={() => setSeleccionEligen('certificado')} onMouseLeave={() => setSeleccionEligen('')}>
                                    <img src={seleccion_eligen === 'certificado' ? icono_certificado_white : icono_certificado_grey} style={{width: 45 / proporcional, height: 46 / proporcional}}/>
                                </div>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(119, 119, 119)',
                                        fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                        Honestidad y fiable
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: '"rgb(132, 132, 132)"',
                                        fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                        Denunciar el placer alabando el dolor nació y darpe un gran exploradora completa y expuesta.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 46 / proporcional}}>
                        <div style={{width: '90%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <div className='rounded-circle d-flex justify-content-center' 
                                        style={{width:  80 / proporcional, height: 80 / proporcional, background: seleccion_eligen === 'valvula' ? '#ef9c32' : 'white', marginRight: 20 / proporcional, paddingTop: 17.5 / proporcional,
                                                paddingBottom: 17.5 / proporcional}}
                                        onMouseOver={() => setSeleccionEligen('valvula')} onMouseLeave={() => setSeleccionEligen('')}>
                                    <img src={seleccion_eligen === 'valvula' ? icono_valvula_white : icono_valvula_grey} style={{width: 45 / proporcional, height: 46 / proporcional}}/>
                                </div>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(119, 119, 119)',
                                        fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                        Empresa galardonada
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: '"rgb(132, 132, 132)"',
                                        fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                        El gran explorador rechaza la verdad del maestro constructor de la filicidad humana, no le gusta el placer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 46 / proporcional}}>
                        <div style={{width: '90%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <div className='rounded-circle d-flex justify-content-center' 
                                        style={{width:  80 / proporcional, height: 80 / proporcional, background: seleccion_eligen === 'proyectos' ? '#ef9c32' : 'white', marginRight: 20 / proporcional, paddingTop: 17.5 / proporcional,
                                                paddingBottom: 17.5 / proporcional}}
                                        onMouseOver={() => setSeleccionEligen('proyectos')} onMouseLeave={() => setSeleccionEligen('')}>
                                    <img src={seleccion_eligen === 'proyectos' ? icono_proyectos_white : icono_proyectos_grey} style={{width: 45 / proporcional, height: 46 / proporcional}}/>
                                </div>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(119, 119, 119)',
                                        fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                        800 proyectos exitosos
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: '"rgb(132, 132, 132)"',
                                        fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                        El gran explorador rechaza la verdad del maestro constructor de la filicidad humana, no le gusta el placer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 46 / proporcional}}>
                        <div style={{width: '90%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <div className='rounded-circle d-flex justify-content-center' 
                                        style={{width:  80 / proporcional, height: 80 / proporcional, background: seleccion_eligen === 'trabajadores' ? '#ef9c32' : 'white', marginRight: 20 / proporcional, paddingTop: 17.5 / proporcional,
                                                paddingBottom: 17.5 / proporcional}}
                                        onMouseOver={() => setSeleccionEligen('trabajadores')} onMouseLeave={() => setSeleccionEligen('')}>
                                    <img src={seleccion_eligen === 'trabajadores' ? icono_trabajadores_white : icono_trabajadores_grey} style={{width: 45 / proporcional, height: 46 / proporcional}}/>
                                </div>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 15 / proporcional, color: 'rgb(119, 119, 119)',
                                        fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                        Trabajadores profesionales
                                    </p>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: '"rgb(132, 132, 132)"',
                                        fontWeight: 400, fontFamily: 'Montserrat, sans-serif'}}>
                                        El gran explorador rechaza la verdad del maestro constructor de la filicidad humana, no le gusta el placer
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
