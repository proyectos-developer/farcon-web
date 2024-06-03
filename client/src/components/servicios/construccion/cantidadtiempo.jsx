import React from 'react'

import imagen_experiencia from '../../../assets/images/construccion_experiencia.png'

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
                        <img src={imagen_experiencia} className='rounded-3' style={{width: '100%', height: '100%'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}