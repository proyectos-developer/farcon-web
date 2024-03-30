import React, { useState } from 'react'

import icono_search from '../../../../assets/iconos/icono_search_white_96.png'
import icono_right from '../../../../assets/iconos/icono_arrow_right_orange_96.png'

import icono_facebook from '../../../../assets/iconos/icono_facebook_grey_dark_96.png'
import icono_twitter from '../../../../assets/iconos/icono_twitter_grey_dark_96.png'
import icono_instagram from '../../../../assets/iconos/icono_instagram_grey_dark_96.png'
import icono_linkedin from '../../../../assets/iconos/icono_linkedin_grey_dark_96.png'
import icono_tiktok from '../../../../assets/iconos/icono_tiktok_grey_dark_96.png'

export default function FiltroDetalles({proporcional}) {

    const [search, setSearch] = useState('')

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
            <div className='shadow rounded' style={{width: '100%', height: 'auto', marginBottom: 24, padding: 20 / proporcional, background: 'white'}}>
                <div style={{width: '100%', height: 28 / proporcional, marginBottom: 16 / proporcional}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${28 / proporcional}px`, color: 'rgb(45, 57, 84)', fontWeight: 700, fontFamily: 'Roboto, serif'}}>
                        Búsqueda
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 50 / proporcional}}>
                    <input 
                        style={{width: '90%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${50 / proporcional}px`, border: '1px solid rgb(222, 226, 230)',
                            fontWeight: 400}}
                        type='defaul'
                        value={search}
                        onChange={(event) => setSearch (event.target.value)}
                        placeholder='Buscar aquí'
                        id='search'
                        className='form-control'/>
                    <button className='btn d-flex justify-content-center' style={{width: '10%', height: 50 / proporcional, borderTopRightRadius: 50 / proporcional, borderBottomRightRadius: 50 / proporcional,
                            background: 'rgb(239, 126, 50)'}}>
                        <img src={icono_search} style={{width: 22 / proporcional, height: 22 / proporcional, marginTop: 5 / proporcional, marginBottom: 5 / proporcional}}/>
                    </button>
                </div>
            </div>

            <div className='shadow rounded' style={{width: '100%', height: 'auto', marginBottom: 24, padding: 20 / proporcional, background: 'white'}}>
                <div style={{width: '100%', height: 28 / proporcional, marginBottom: 16 / proporcional}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${28 / proporcional}px`, color: 'rgb(45, 57, 84)', fontWeight: 700, fontFamily: 'Roboto, serif'}}>
                        Categorías
                    </p>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: '100%', height: 24 / proporcional, marginBottom: 10 / proporcional, cursor: 'pointer'}}>
                        <img src={icono_right} style={{width: 12 / proporcional, height: 12 / proporcional, margin: 6 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans, serif', color: 'rgb(132, 143, 168)'}}>
                            Avisos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 24 / proporcional, marginBottom: 10 / proporcional, cursor: 'pointer'}}>
                        <img src={icono_right} style={{width: 12 / proporcional, height: 12 / proporcional, margin: 6 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans, serif', color: 'rgb(132, 143, 168)'}}>
                            Departamentos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 24 / proporcional, marginBottom: 10 / proporcional, cursor: 'pointer'}}>
                        <img src={icono_right} style={{width: 12 / proporcional, height: 12 / proporcional, margin: 6 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans, serif', color: 'rgb(132, 143, 168)'}}>
                            Ciudades
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 24 / proporcional, marginBottom: 10 / proporcional, cursor: 'pointer'}}>
                        <img src={icono_right} style={{width: 12 / proporcional, height: 12 / proporcional, margin: 6 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans, serif', color: 'rgb(132, 143, 168)'}}>
                            Muebles
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 24 / proporcional, marginBottom: 10 / proporcional, cursor: 'pointer'}}>
                        <img src={icono_right} style={{width: 12 / proporcional, height: 12 / proporcional, margin: 6 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans, serif', color: 'rgb(132, 143, 168)'}}>
                            Área
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 24 / proporcional, marginBottom: 10 / proporcional, cursor: 'pointer'}}>
                        <img src={icono_right} style={{width: 12 / proporcional, height: 12 / proporcional, margin: 6 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans, serif', color: 'rgb(132, 143, 168)'}}>
                            Estilo de vida
                        </p>
                    </div>
                </div>
            </div>

            <div className='shadow rounded' style={{width: '100%', height: 'auto', marginBottom: 24, padding: 20 / proporcional, background: 'white'}}>
                <div style={{width: '100%', height: 28 / proporcional, marginBottom: 16 / proporcional}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${28 / proporcional}px`, color: 'rgb(45, 57, 84)', fontWeight: 700, fontFamily: 'Roboto, serif'}}>
                        Síguenos
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 24 / proporcional}}>
                    <img src={icono_facebook} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer'}}/>
                    <img src={icono_instagram} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer'}}/>
                    <img src={icono_twitter} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer'}}/>
                    <img src={icono_tiktok} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer'}}/>
                    <img src={icono_linkedin} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer'}}/>
                </div>
            </div>

            <div className='shadow rounded' style={{width: '100%', height: 'auto', marginBottom: 24, padding: 20 / proporcional, background: 'white'}}>
                <div style={{width: '100%', height: 28 / proporcional, marginBottom: 16 / proporcional}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${28 / proporcional}px`, color: 'rgb(45, 57, 84)', fontWeight: 700, fontFamily: 'Roboto, serif'}}>
                        Similares
                    </p>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: '100%', height: 80 / proporcional, marginBottom: 16 / proporcional}}>
                        <div  className='rounded' style={{width: 120 / proporcional, height: 80 / proporcional, marginRight: 16 / proporcional, border: '1px solid #efefef'}}/>
                        <div style={{width: '100%', height: 80 / proporcional, paddingTop: 16 / proporcional, paddingBottom: 16 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, color: 'rgb(35, 35, 35)', fontWeight: 400, fontFamily: 'Roboto, serif',
                                marginBottom: 0}}>
                                Homes With Subway..
                            </p>
                            <p style={{fontSize: 13 / proporcional, lineHeight: `${24 / proporcional}px`, color: 'rgb(132, 143, 168)', fontWeight: 400, fontFamily: 'Roboto, serif',
                                marginBottom: 0}}>
                                Enero 02, 2024
                            </p>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 80 / proporcional, marginBottom: 16 / proporcional}}>
                        <div  className='rounded' style={{width: 120 / proporcional, height: 80 / proporcional, marginRight: 16 / proporcional, border: '1px solid #efefef'}}/>
                        <div style={{width: '100%', height: 80 / proporcional, paddingTop: 16 / proporcional, paddingBottom: 16 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, color: 'rgb(35, 35, 35)', fontWeight: 400, fontFamily: 'Roboto, serif',
                                marginBottom: 0}}>
                                Homes With Subway..
                            </p>
                            <p style={{fontSize: 13 / proporcional, lineHeight: `${24 / proporcional}px`, color: 'rgb(132, 143, 168)', fontWeight: 400, fontFamily: 'Roboto, serif',
                                marginBottom: 0}}>
                                Enero 02, 2024
                            </p>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 80 / proporcional, marginBottom: 16 / proporcional}}>
                        <div  className='rounded' style={{width: 120 / proporcional, height: 80 / proporcional, marginRight: 16 / proporcional, border: '1px solid #efefef'}}/>
                        <div style={{width: '100%', height: 80 / proporcional, paddingTop: 16 / proporcional, paddingBottom: 16 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, color: 'rgb(35, 35, 35)', fontWeight: 400, fontFamily: 'Roboto, serif',
                                marginBottom: 0}}>
                                Homes With Subway..
                            </p>
                            <p style={{fontSize: 13 / proporcional, lineHeight: `${24 / proporcional}px`, color: 'rgb(132, 143, 168)', fontWeight: 400, fontFamily: 'Roboto, serif',
                                marginBottom: 0}}>
                                Enero 02, 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='shadow rounded' style={{width: '100%', height: 'auto', marginBottom: 24, padding: 20 / proporcional, background: 'white'}}>
                <div style={{width: '100%', height: 28 / proporcional, marginBottom: 16 / proporcional}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${28 / proporcional}px`, color: 'rgb(45, 57, 84)', fontWeight: 700, fontFamily: 'Roboto, serif'}}>
                        Tags
                    </p>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: '100%', height: 45 / proporcional, marginBottom: 16 / proporcional}}>
                        <div className='rounded' style={{width: 'auto', height: 45 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(132, 143, 168)', marginRight: 10 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 400}}>
                                Departamento
                            </p>
                        </div>
                        <div className='rounded' style={{width: 'auto', height: 45 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(132, 143, 168)', marginRight: 10 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 400}}>
                                Fashion
                            </p>
                        </div>
                    </div>

                    <div className='d-flex' style={{width: '100%', height: 45 / proporcional, marginBottom: 16 / proporcional}}>
                        <div className='rounded' style={{width: 'auto', height: 45 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(132, 143, 168)', marginRight: 10 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 400}}>
                                Estilo de vida
                            </p>
                        </div>
                        <div className='rounded' style={{width: 'auto', height: 45 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(132, 143, 168)', marginRight: 10 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 400}}>
                                Música
                            </p>
                        </div>
                    </div>

                    <div className='d-flex' style={{width: '100%', height: 45 / proporcional, marginBottom: 16 / proporcional}}>
                        <div className='rounded' style={{width: 'auto', height: 45 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(132, 143, 168)', marginRight: 10 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 400}}>
                                Propiedades
                            </p>
                        </div>
                        <div className='rounded' style={{width: 'auto', height: 45 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(132, 143, 168)', marginRight: 10 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 400}}>
                                Viaje
                            </p>
                        </div>
                    </div>

                    <div className='d-flex' style={{width: '100%', height: 45 / proporcional, marginBottom: 16 / proporcional}}>
                        <div className='rounded' style={{width: 'auto', height: 45 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(132, 143, 168)', marginRight: 10 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 400}}>
                                Tipo de villa
                            </p>
                        </div>
                        <div className='rounded' style={{width: 'auto', height: 45 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(132, 143, 168)', marginRight: 10 / proporcional, cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 400}}>
                                Fotografía
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}