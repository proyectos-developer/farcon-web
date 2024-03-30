import React from 'react'

import equipo_0 from '../../../assets/images/construccion_experiencia_0.png'
import equipo_1 from '../../../assets/images/construccion_experiencia_1.png'
import equipo_2 from '../../../assets/images/construccion_experiencia_2.png'
import equipo_3 from '../../../assets/images/construccion_experiencia_3.png'

export default function CantidadTiempo({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 54 / proporcional, paddingBottom: 54 / proporcional, paddingLeft: 320 / proporcional, paddingRight: 320 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '48%', height: 'auto', marginTop: 30 / proporcional, marginBottom: 30 / proporcional}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 600, 
                                color: 'rgb(37, 40, 58', fontFamily: 'Poppins, serif'}}>
                                    TENEMOS MAS DE 25 AñOS DE EXPERIENCIA CON PASÍON
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 500, 
                                color: 'rgb(37, 40, 58', fontFamily: 'Poppins, serif'}}>
                                Lorem ipsum sit amet, consectetur adipisicing elit sed doeiusmod tempor incididunt ut lboare et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco aliquip commodo consequat.
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 500, 
                                color: 'rgb(37, 40, 58', fontFamily: 'Poppins, serif'}}>
                                Lorem ipsum sit amet, consectetur adipisicing elit sed doeiusmod tempor incididunt ut lboare et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco aliquip commodo consequat.
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 500, 
                                color: 'rgb(37, 40, 58', fontFamily: 'Poppins, serif'}}>
                                Lorem ipsum sit amet, consectetur adipisicing elit sed doeiusmod tempor incididunt ut lboare et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco aliquip commodo consequat.
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 500, 
                                color: 'rgb(37, 40, 58', fontFamily: 'Poppins, serif'}}>
                                Lorem ipsum sit amet, consectetur adipisicing elit sed doeiusmod tempor incididunt ut lboare et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco aliquip commodo consequat.
                            </p>
                        </div>
                    </div>

                    <div style={{width: '48%', height: 'auto', marginTop: 30 / proporcional, marginBottom: 30 / proporcional}}>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                                <img src={equipo_0} className='rounded-3' style={{width: '48%', height: 172 / proporcional}}/>
                                <img src={equipo_1} className='rounded-3' style={{width: '48%', height: 172 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                                <img src={equipo_2} className='rounded-3' style={{width: '48%', height: 172 / proporcional}}/>
                                <img src={equipo_3} className='rounded-3' style={{width: '48%', height: 172 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}