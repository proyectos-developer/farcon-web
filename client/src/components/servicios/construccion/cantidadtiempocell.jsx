import React from 'react'

import imagen_experiencia from '../../../assets/images/construccion_experiencia.png'

export default function CantidadTiempoCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 54 / proporcional, paddingBottom: 54 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 'auto', marginTop: 30 / proporcional, marginBottom: 30 / proporcional}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                        <p style={{fontSize: 40 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 600, 
                            color: 'rgb(37, 40, 58', fontFamily: 'Poppins, serif', textAlign: 'center'}}>
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

                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginTop: 30 / proporcional, marginBottom: 30 / proporcional}}>
                    <img src={imagen_experiencia} className='rounded-3' style={{width: '90%', marginRight: '5%', height: '90%'}}/>
                </div>
            </div>
        </div>
    )
}