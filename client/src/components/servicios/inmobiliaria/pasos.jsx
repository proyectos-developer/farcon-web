import React from 'react'

import paso_00 from '../../../assets/images/inmobiliaria_pasos_residencial_178.png'
import paso_01 from '../../../assets/images/inmobiliaria_pasos_confianza_178.png'
import paso_02 from '../../../assets/images/inmobiliaria_pasos_llaves_178.png'
import paso_03  from '../../../assets/images/inmobiliaria_pasos_vivir_178.png'

export default function Pasos({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 320 / proporcional, paddingRight: 320 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '24%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <img className='rounded-circle' src={paso_00} style={{width: 178 / proporcional, height: 178 / proporcional}}/>
                                <div className='rounded-circle position-absolute' style={{width: 45 / proporcional, height: 45 / proporcional, border: '2px solid rgb(239, 126, 50)', top: 10 / proporcional,
                                        right: 60 / proporcional, background: 'white'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${45 / proporcional}px`, marginBottom: 0, color: 'rgb(239, 126, 50)', fontFamily: 'Roboto, sans-serif',
                                            fontWeight: 400, cursor: 'pointer', textAlign: 'center'}}>
                                        1
                                    </p>
                                </div>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, fontWeight: 600, fontFamily: 'Roboto, sans-serif',
                                                textAlign: 'center'}}>
                                        Find real estate
                                    </p>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginBottom: 0 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Poppins, sans-serif',
                                                textAlign: 'center'}}>
                                        Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width: '24%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <img className='rounded-circle' src={paso_00} style={{width: 178 / proporcional, height: 178 / proporcional}}/>
                                <div className='rounded-circle position-absolute' style={{width: 45 / proporcional, height: 45 / proporcional, border: '2px solid rgb(239, 126, 50)', top: 10 / proporcional,
                                        right: 60 / proporcional, background: 'white'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${45 / proporcional}px`, marginBottom: 0, color: 'rgb(239, 126, 50)', fontFamily: 'Roboto, sans-serif',
                                            fontWeight: 400, cursor: 'pointer', textAlign: 'center'}}>
                                        2
                                    </p>
                                </div>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, fontWeight: 600, fontFamily: 'Roboto, sans-serif',
                                                textAlign: 'center'}}>
                                        Trusted by thousands
                                    </p>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginBottom: 0 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Poppins, sans-serif',
                                                textAlign: 'center'}}>
                                        Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width: '24%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <img className='rounded-circle' src={paso_00} style={{width: 178 / proporcional, height: 178 / proporcional}}/>
                                <div className='rounded-circle position-absolute' style={{width: 45 / proporcional, height: 45 / proporcional, border: '2px solid rgb(239, 126, 50)', top: 10 / proporcional,
                                        right: 60 / proporcional, background: 'white'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${45 / proporcional}px`, marginBottom: 0, color: 'rgb(239, 126, 50)', fontFamily: 'Roboto, sans-serif',
                                            fontWeight: 400, cursor: 'pointer', textAlign: 'center'}}>
                                        3
                                    </p>
                                </div>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, fontWeight: 600, fontFamily: 'Roboto, sans-serif',
                                                textAlign: 'center'}}>
                                        Take the keys
                                    </p>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginBottom: 0 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Poppins, sans-serif',
                                                textAlign: 'center'}}>
                                        Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width: '24%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <img className='rounded-circle' src={paso_00} style={{width: 178 / proporcional, height: 178 / proporcional}}/>
                                <div className='rounded-circle position-absolute' style={{width: 45 / proporcional, height: 45 / proporcional, border: '2px solid rgb(239, 126, 50)', top: 10 / proporcional,
                                        right: 60 / proporcional, background: 'white'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${45 / proporcional}px`, marginBottom: 0, color: 'rgb(239, 126, 50)', fontFamily: 'Roboto, sans-serif',
                                            fontWeight: 400, cursor: 'pointer', textAlign: 'center'}}>
                                        4
                                    </p>
                                </div>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, fontWeight: 600, fontFamily: 'Roboto, sans-serif',
                                                textAlign: 'center'}}>
                                        Live happy
                                    </p>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginBottom: 0 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Poppins, sans-serif',
                                                textAlign: 'center'}}>
                                        Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.
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