import React from 'react'

import equipo_01 from '../../assets/images/nosotros_equipo_1.png'
import equipo_02 from '../../assets/images/nosotros_equipo_2.png'
import equipo_03 from '../../assets/images/nosotros_equipo_3.png'
import equipo_04 from '../../assets/images/nosotros_equipo_4.png'

import facebook from '../../assets/iconos/icono_nosotros_facebook_grey_96.png'
import twitter from '../../assets/iconos/icono_nosotros_twitter_grey_96.png'
import linkedin from '../../assets/iconos/icono_nosotros_linkedin_grey_96.png'

import email from '../../assets/iconos/icono_email_grey_96.png'

export default function ConoceNuestroEquipoTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 40 / proporcional, paddingBottom: 40 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 55 / proporcional}}>
                <div style={{width: '100%', height: 33 / proporcional, marginBottom: 20 / proporcional}}>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${33 / proporcional}px`, fontWeight: 600, color: '#222222', fontFamily: 'Montserrat, sans-serif', marginBottom: 0}}>
                        Conóce nuestro equipo
                    </p>
                </div>
                <div style={{width: '10%', background: 'rgb(239, 126, 50)', height: 2 / proporcional}}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 40 / proporcional}}>
                    <div style={{width: '48%', height: 'auto', border: '1px solid rgb(239, 126, 50)', padding: 10 / proporcional}}>
                        <div className='position-relative' style={{width: '100%', height: 332 / proporcional, marginBottom: 76 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 332 / proporcional}}>
                                <img src={equipo_01} style={{width: 278 / proporcional, height: 332 / proporcional}}/>
                            </div>
                            <div className='position-absolute d-flex justify-content-center' style={{width: '100%', height: 'auto', top: 312 / proporcional}}>
                                <div className='d-flex justify-content-between' style={{width: 115 / proporcional, height: 38 / proporcional}}>
                                    <div style={{width: 28 / proporcional, height: 38 / proporcional, borderRight: '1px solid rgb(119, 119, 119)'}}>
                                        <img src={facebook} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 9 / proporcional, marginBottom: 9 / proporcional}}/>
                                    </div>
                                    <div style={{width: 28 / proporcional, height: 38 / proporcional, borderRight: '1px solid rgb(119, 119, 119)'}}>
                                        <img src={twitter} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 9 / proporcional, marginBottom: 9 / proporcional}}/>
                                    </div>
                                    <div style={{width: 28 / proporcional, height: 38 / proporcional}}>
                                        <img src={linkedin} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 9 / proporcional, marginBottom: 9 / proporcional}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'rgb(34, 34, 34)', fontWeight: 400, marginBottom: 0,
                                fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                                Chaz Chuthbert
                            </p>
                            <p style={{fontSize: 16 / proporcional, color: 'rgb(239, 126, 50)', marginBottom: 6 / proporcional, lineHeight: `${27 / proporcional}px`, fontWeight: 400,
                                fontFamily: 'Raleway, sans-serif', textAlign: 'center'}}>
                                Manager
                            </p>
                            <p style={{fontSize: 16 / proporcional, color: 'rgb(132, 132, 132)', marginBottom: 20 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 400,
                                fontFamily: 'Raleway, sans-serif', textAlign: 'center'}}>
                                Great explorer of the truth seds builder human happiness
                            </p>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 27 / proporcional}}>
                                    <img src={email} style={{width: 20 / proporcional, height: 20 / proporcional,  marginRight: 5 / proporcional}}/>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${20 / proporcional}px`, coolor: '#848484', marginBottom: 0, fontFamily: 'Relaway, sans-serif',
                                    fontWeight: 400}}>
                                    correo@dominio.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '48%', height: 'auto', border: '1px solid rgb(239, 126, 50)', padding: 10 / proporcional}}>
                        <div className='position-relative' style={{width: '100%', height: 332 / proporcional, marginBottom: 76 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 332 / proporcional}}>
                                <img src={equipo_02} style={{width: 278 / proporcional, height: 332 / proporcional}}/>
                            </div>
                            <div className='position-absolute d-flex justify-content-center' style={{width: '100%', height: 'auto', top: 312 / proporcional}}>
                                <div className='d-flex justify-content-between' style={{width: 115 / proporcional, height: 38 / proporcional}}>
                                    <div style={{width: 28 / proporcional, height: 38 / proporcional, borderRight: '1px solid rgb(119, 119, 119)'}}>
                                        <img src={facebook} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 9 / proporcional, marginBottom: 9 / proporcional}}/>
                                    </div>
                                    <div style={{width: 28 / proporcional, height: 38 / proporcional, borderRight: '1px solid rgb(119, 119, 119)'}}>
                                        <img src={twitter} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 9 / proporcional, marginBottom: 9 / proporcional}}/>
                                    </div>
                                    <div style={{width: 28 / proporcional, height: 38 / proporcional}}>
                                        <img src={linkedin} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 9 / proporcional, marginBottom: 9 / proporcional}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'rgb(34, 34, 34)', fontWeight: 400, marginBottom: 0,
                                fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                                Chaz Chuthbert
                            </p>
                            <p style={{fontSize: 16 / proporcional, color: 'rgb(239, 126, 50)', marginBottom: 6 / proporcional, lineHeight: `${27 / proporcional}px`, fontWeight: 400,
                                fontFamily: 'Raleway, sans-serif', textAlign: 'center'}}>
                                Manager
                            </p>
                            <p style={{fontSize: 16 / proporcional, color: 'rgb(132, 132, 132)', marginBottom: 20 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 400,
                                fontFamily: 'Raleway, sans-serif', textAlign: 'center'}}>
                                Great explorer of the truth seds builder human happiness
                            </p>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 27 / proporcional}}>
                                    <img src={email} style={{width: 20 / proporcional, height: 20 / proporcional,  marginRight: 5 / proporcional}}/>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${20 / proporcional}px`, coolor: '#848484', marginBottom: 0, fontFamily: 'Relaway, sans-serif',
                                    fontWeight: 400}}>
                                    correo@dominio.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 40 / proporcional}}>
                    <div style={{width: '48%', height: 'auto', border: '1px solid rgb(239, 126, 50)', padding: 10 / proporcional}}>
                        <div className='position-relative' style={{width: '100%', height: 332 / proporcional, marginBottom: 76 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 332 / proporcional}}>
                                <img src={equipo_03} style={{width: 278 / proporcional, height: 332 / proporcional}}/>
                            </div>
                            <div className='position-absolute d-flex justify-content-center' style={{width: '100%', height: 'auto', top: 312 / proporcional}}>
                                <div className='d-flex justify-content-between' style={{width: 115 / proporcional, height: 38 / proporcional}}>
                                    <div style={{width: 28 / proporcional, height: 38 / proporcional, borderRight: '1px solid rgb(119, 119, 119)'}}>
                                        <img src={facebook} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 9 / proporcional, marginBottom: 9 / proporcional}}/>
                                    </div>
                                    <div style={{width: 28 / proporcional, height: 38 / proporcional, borderRight: '1px solid rgb(119, 119, 119)'}}>
                                        <img src={twitter} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 9 / proporcional, marginBottom: 9 / proporcional}}/>
                                    </div>
                                    <div style={{width: 28 / proporcional, height: 38 / proporcional}}>
                                        <img src={linkedin} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 9 / proporcional, marginBottom: 9 / proporcional}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'rgb(34, 34, 34)', fontWeight: 400, marginBottom: 0,
                                fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                                Chaz Chuthbert
                            </p>
                            <p style={{fontSize: 16 / proporcional, color: 'rgb(239, 126, 50)', marginBottom: 6 / proporcional, lineHeight: `${27 / proporcional}px`, fontWeight: 400,
                                fontFamily: 'Raleway, sans-serif', textAlign: 'center'}}>
                                Manager
                            </p>
                            <p style={{fontSize: 16 / proporcional, color: 'rgb(132, 132, 132)', marginBottom: 20 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 400,
                                fontFamily: 'Raleway, sans-serif', textAlign: 'center'}}>
                                Great explorer of the truth seds builder human happiness
                            </p>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 27 / proporcional}}>
                                    <img src={email} style={{width: 20 / proporcional, height: 20 / proporcional,  marginRight: 5 / proporcional}}/>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${20 / proporcional}px`, coolor: '#848484', marginBottom: 0, fontFamily: 'Relaway, sans-serif',
                                    fontWeight: 400}}>
                                    correo@dominio.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '48%', height: 'auto', border: '1px solid rgb(239, 126, 50)', padding: 10 / proporcional}}>
                        <div className='position-relative' style={{width: '100%', height: 332 / proporcional, marginBottom: 76 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 332 / proporcional}}>
                                <img src={equipo_04} style={{width: 278 / proporcional, height: 332 / proporcional}}/>
                            </div>
                            <div className='position-absolute d-flex justify-content-center' style={{width: '100%', height: 'auto', top: 312 / proporcional}}>
                                <div className='d-flex justify-content-between' style={{width: 115 / proporcional, height: 38 / proporcional}}>
                                    <div style={{width: 28 / proporcional, height: 38 / proporcional, borderRight: '1px solid rgb(119, 119, 119)'}}>
                                        <img src={facebook} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 9 / proporcional, marginBottom: 9 / proporcional}}/>
                                    </div>
                                    <div style={{width: 28 / proporcional, height: 38 / proporcional, borderRight: '1px solid rgb(119, 119, 119)'}}>
                                        <img src={twitter} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 9 / proporcional, marginBottom: 9 / proporcional}}/>
                                    </div>
                                    <div style={{width: 28 / proporcional, height: 38 / proporcional}}>
                                        <img src={linkedin} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 9 / proporcional, marginBottom: 9 / proporcional}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'rgb(34, 34, 34)', fontWeight: 400, marginBottom: 0,
                                fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
                                Chaz Chuthbert
                            </p>
                            <p style={{fontSize: 16 / proporcional, color: 'rgb(239, 126, 50)', marginBottom: 6 / proporcional, lineHeight: `${27 / proporcional}px`, fontWeight: 400,
                                fontFamily: 'Raleway, sans-serif', textAlign: 'center'}}>
                                Manager
                            </p>
                            <p style={{fontSize: 16 / proporcional, color: 'rgb(132, 132, 132)', marginBottom: 20 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 400,
                                fontFamily: 'Raleway, sans-serif', textAlign: 'center'}}>
                                Great explorer of the truth seds builder human happiness
                            </p>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 27 / proporcional}}>
                                    <img src={email} style={{width: 20 / proporcional, height: 20 / proporcional,  marginRight: 5 / proporcional}}/>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${20 / proporcional}px`, coolor: '#848484', marginBottom: 0, fontFamily: 'Relaway, sans-serif',
                                    fontWeight: 400}}>
                                    correo@dominio.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
