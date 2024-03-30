import React, { useState } from 'react'

import imagen from '../../../../assets/images/lugar_detalles_690.png'

import icono_perfil from '../../../../assets/iconos/icono_perfil_grey_96.png'
import icono_comentarios from '../../../../assets/iconos/icono_comentarios_grey_96.png'

import icono_facebook_grey from '../../../../assets/iconos/icono_facebook_grey_dark_96.png'
import icono_instagram_grey from '../../../../assets/iconos/icono_instagram_grey_dark_96.png'
import icono_twitter_grey from '../../../../assets/iconos/icono_twitter_grey_dark_96.png'
import icono_tiktok_grey from '../../../../assets/iconos/icono_tiktok_grey_dark_96.png'
import icono_linkedin_grey from '../../../../assets/iconos/icono_linkedin_grey_dark_96.png'

import icono_facebook_orange from '../../../../assets/iconos/icono_facebook_orange_96.png'
import icono_instagram_orange from '../../../../assets/iconos/icono_instagram_orange_96.png'
import icono_twitter_orange from '../../../../assets/iconos/icono_twitter_orange_96.png'
import icono_tiktok_orange from '../../../../assets/iconos/icono_tiktok_orange_96.png'
import icono_linkedin_orange from '../../../../assets/iconos/icono_linkedin_orange_96.png'

import cliente_coment_1 from '../../../../assets/images/comments_client_1.png'
import cliente_coment_2 from '../../../../assets/images/comments_client_2.png'

import icono_replay_black from '../../../../assets/iconos/icono_replay_black_96.png'
import icono_comments_red from '../../../../assets/iconos/icono_replay_red_96.png'

import icono_calendar_grey from '../../../../assets/iconos/icono_calendar_grey_96.png'

export default function DetallesInmuebleTablet({proporcional}) {

    const [red_seleccionada, setRedSeleccionada] = useState('')

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [url, setUrl] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='shadow rounded' style={{width: '100%', height: 'auto', background: 'white', padding: 20 / proporcional}}>
                    <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                            <img src={imagen} style={{width: '100%', height: 300 / proporcional}}/>
                        </div>
                        <div className='position-absolute' style={{top: 40 / proporcional, left: 50 / proporcional, width: 200 / proporcional, height: 40 / proporcional}}>
                            <div className='rounded-pill' style={{width: 200 / proporcional, height: 40 / proporcional, background: 'rgba(23, 42, 76, 0.5)', zIndex: 99999}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'white', marginBottom: 0, fontWeight: 400, textAlign: 'center',
                                    fontFamily: 'Poppins, sans-serif'}}>
                                    31 de Julio 2023
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', marginTop: 20 / proporcional, marginBottom: 20 / proporcional}}>
                            <div className='d-flex' style={{width: '100%', height: 40 / proporcional}}>
                                <div style={{width: 40 / proporcional, height: 40 / proporcional, marginRight: 10 / proporcional}}>
                                    <img src={icono_perfil} style={{width: 40 / proporcional, height: 40 / proporcional}}/>
                                </div>
                                <div style={{width: 'auto', height: 40 / proporcional, marginRight: 8 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'rgb(35, 35, 35)', marginBottom: 0, fontWeight: 400, textAlign: 'center',
                                        fontFamily: 'Roboto, serif'}}>
                                        admin
                                    </p>
                                </div>
                                <div className='d-flex' style={{width: 'auto', height: 40 / proporcional}}>
                                    <img src={icono_comentarios} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 10 / proporcional, marginBottom: 10 / proporcional,
                                        marginRight: 5 / proporcional}}/>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'rgb(132, 132, 132)', marginBottom: 0, fontWeight: 400, textAlign: 'center',
                                        fontFamily: 'Poppins, serif'}}>
                                        0 Comentarios
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 700, fontFamily: 'Roboto, serif', color: 'rgb(45, 57, 84)',
                            marginBottom: 0}}>
                            Descripción del departamento
                        </p>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, serif', color: 'rgb(132, 143, 168)',
                            marginBottom: 0 / proporcional}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                            incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut alliquip ex ea commodo consequat Duis aute irure dolor inreprehenderit in voluptate velit esse ecillum dolore eu fugiat nulla paiatur. Excepteur sint occeaecat cupidat non proident, sunt in culpa qui officia deserunt mollit anim ie est laborum.
                        </p>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, serif', color: 'rgb(132, 143, 168)',
                            marginBottom: 0 / proporcional}}>
                            Duis aute irure dolor in reprehenderit in voluptate velit ese cillum dolore eu fugiat nulla paratur. Excepeteur sin occaecat cupidatata non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusaintium doloremqe laudantium.
                        </p>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional, padding: 30 / proporcional, background: '#f1f1f1'}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, serif', color: 'rgb(132, 143, 168)',
                            marginBottom: 0 / proporcional}}>
                            Lorem ipsum dolor si amet, consectetur adipiscing elit, ased do eiusmod tempor incididut ut labore et dolore magna aiqua.
                        </p>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, serif', color: 'rgb(132, 143, 168)',
                            marginBottom: 0 / proporcional}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                            incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut alliquip ex ea commodo consequat Duis aute irure dolor inreprehenderit in voluptate velit esse ecillum dolore eu fugiat nulla paiatur. Excepteur sint occeaecat cupidat non proident, sunt in culpa qui officia deserunt mollit anim ie est laborum.
                        </p>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 40 / proporcional, marginTop: 40 / proporcional}}>
                        <div style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '100%', height: 30 / proporcional, marginBottom: 20 / proporcional}}>
                                    <div className='d-flex justify-content-between' style={{width: '100%', height: 30 / proporcional}}>
                                        <div style={{width: '20%', height: 30 / proporcional}}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 600, fontFamily: 'Roboto, serif', color: 'rgb(45, 57, 84)',
                                                marginBottom: 0 / proporcional}}>
                                                Tags:
                                            </p>
                                        </div>
                                        <div className='rounded' style={{width: '40%', height: 30 / proporcional, background: '#f1f1f1', marginRight: 5 / proporcional}}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, fontFamily: 'Roboto, serif', color: 'rgb(45, 57, 84)',
                                                marginBottom: 0 / proporcional, textAlign: 'center'}}>
                                                Apartment
                                            </p>
                                        </div>
                                        <div className='rounded' style={{width: '40%', height: 30 / proporcional, background: '#f1f1f1'}}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, fontFamily: 'Roboto, serif', color: 'rgb(45, 57, 84)',
                                                marginBottom: 0 / proporcional, textAlign: 'center'}}>
                                                Properties
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '100%', height: 30 / proporcional}}>
                                    <div className='d-flex justify-content-end' style={{width: '100%', height: 30 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 600, fontFamily: 'Roboto, serif', color: 'rgb(45, 57, 84)',
                                            marginBottom: 0 / proporcional}}>
                                            Compartir en:
                                        </p>
                                        <div className='d-flex justify-content-center' style={{width: 30 / proporcional, height: 30 / proporcional}}
                                            onMouseOver={() => setRedSeleccionada('facebook')} onMouseLeave={() => setRedSeleccionada('')}>
                                            <img src={red_seleccionada === 'facebook' ? icono_facebook_orange : icono_facebook_grey} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 6 / proporcional}}/>
                                        </div>
                                        <div className='d-flex justify-content-center' style={{width: 30 / proporcional, height: 30 / proporcional}}
                                            onMouseOver={() => setRedSeleccionada('twitter')} onMouseLeave={() => setRedSeleccionada('')}>
                                            <img src={red_seleccionada === 'twitter' ? icono_twitter_orange : icono_twitter_grey} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 6 / proporcional}}/>
                                        </div>
                                        <div className='d-flex justify-content-center' style={{width: 30 / proporcional, height: 30 / proporcional}}
                                            onMouseOver={() => setRedSeleccionada('instagram')} onMouseLeave={() => setRedSeleccionada('')}>
                                            <img src={red_seleccionada === 'instagram' ? icono_instagram_orange : icono_instagram_grey} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 6 / proporcional}}/>
                                        </div>
                                        <div className='d-flex justify-content-center' style={{width: 30 / proporcional, height: 30 / proporcional}}
                                            onMouseOver={() => setRedSeleccionada('linkedin')} onMouseLeave={() => setRedSeleccionada('')}>
                                            <img src={red_seleccionada === 'linkedin' ? icono_linkedin_orange : icono_linkedin_grey} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 6 / proporcional}}/>
                                        </div>
                                        <div className='d-flex justify-content-center' style={{width: 30 / proporcional, height: 30 / proporcional}}
                                            onMouseOver={() => setRedSeleccionada('tiktok')} onMouseLeave={() => setRedSeleccionada('')}>
                                            <img src={red_seleccionada === 'tiktok' ? icono_tiktok_orange : icono_tiktok_grey} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 6 / proporcional}}/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div style={{width: '100%', height: 2 / proporcional, background: 'rgb(241, 241, 241)'}}/>

                    <div style={{width: '100%', height: 'auto', marginBottom: 48 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                        <div style={{width: '100%', height: 28 / proporcional, marginTop: 20 / proporcional, marginBottom: 30 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 600, fontFamily: 'Roboto, serif', marginBottom: 0, color: 'rgb(45, 57, 84)'}}>
                                2 Comentarios
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='' style={{width: '100%', height: 'auto', marginBottom: 48 / proporcional}}>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                        <img className='rounded-circle' src={cliente_coment_1} style={{width: 150 / proporcional, height: 150 / proporcional}}/>
                                    </div>
                                    <div style={{width: 'auto', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, fontWeight: 600, lineHeight: `${28 / proporcional}px`, color: 'rgb(45, 57, 84)', marginBottom: 0,
                                                    fontFamily: 'Roboto, serif'}}>
                                                Thomas Jamie
                                            </p>
                                            <div className='d-flex' style={{width: '100%', height: 20 / proporcional}}>
                                                <img src={icono_calendar_grey} style={{width: 14 / proporcional, height: 14 / proporcional, margin: 3 / proporcional}}/>
                                                <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, color: 'rgb(132, 143, 168)', marginBottom: 0,
                                                        fontFamily: 'Roboto, serif'}}>
                                                    Mayo 15 2022 a las 8:30
                                                </p>
                                            </div>
                                        </div>
                                        <div style={{width: '100%', height: 'auto', marginTop: 10 / proporcional, marginBottom: 10 / proporcional}}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', 
                                                    marginBottom: 0, color: 'rgb(132, 143, 168)'}}>
                                                Lorem ipsum dolor sit amet consectetur adipcing elit sed do aiusmod tempor incididunt labore et dorore magna aliqua.
                                            </p>
                                        </div>
                                        <div style={{width: '100%', height: 24 / proporcional}}>
                                            <div className='d-flex' style={{width: '100%', height: 24 / proporcional, cursor: 'pointer'}}>
                                                <img src={icono_replay_black} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 4 / proporcional}}/>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', 
                                                        marginBottom: 0, color: 'rgb(35, 35, 35)'}}>
                                                    replay
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='' style={{width: '100%', height: 'auto', marginBottom: 48 / proporcional}}>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                        <img className='rounded-circle' src={cliente_coment_2} style={{width: 150 / proporcional, height: 150 / proporcional}}/>
                                    </div>
                                    <div style={{width: 'auto', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, fontWeight: 600, lineHeight: `${28 / proporcional}px`, color: 'rgb(45, 57, 84)', marginBottom: 0,
                                                    fontFamily: 'Roboto, serif'}}>
                                                Leon Carter
                                            </p>
                                            <div className='d-flex' style={{width: '100%', height: 20 / proporcional}}>
                                                <img src={icono_calendar_grey} style={{width: 14 / proporcional, height: 14 / proporcional, margin: 3 / proporcional}}/>
                                                <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, color: 'rgb(132, 143, 168)', marginBottom: 0,
                                                        fontFamily: 'Roboto, serif'}}>
                                                    Mayo 15 2021 a las 10:30
                                                </p>
                                            </div>
                                        </div>
                                        <div style={{width: '100%', height: 'auto', marginTop: 10 / proporcional, marginBottom: 10 / proporcional}}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', 
                                                    marginBottom: 0, color: 'rgb(132, 143, 168)'}}>
                                                Lorem ipsum dolor sit amet consectetur adipcing elit sed do aiusmod tempor incididunt labore et dorore magna aliqua.
                                            </p>
                                        </div>
                                        <div style={{width: '100%', height: 24 / proporcional}}>
                                            <div className='d-flex' style={{width: '100%', height: 24 / proporcional, cursor: 'pointer'}}>
                                                <img src={icono_replay_black} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 4 / proporcional}}/>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', 
                                                        marginBottom: 0, color: 'rgb(35, 35, 35)'}}>
                                                    replay
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width: '100%', height: 2 / proporcional, background: 'rgb(241, 241, 241)', marginBottom: 48 / proporcional}}/>

                    <div style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 24 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 600, fontFamily: 'Roboto, serif', marginBottom: 0, color: 'rgb(45, 57, 84)'}}>
                                Deja un comentario
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                                <input 
                                    style={{width: '100%', marginBottom: 20 / proporcional, height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${48 / proporcional}px`, color: '#495057', border: '1px solid #ced4da'}}
                                    type='default'
                                    className='form-control'
                                    value={nombres}
                                    onChange={(event) => setNombres(event.target.value)} 
                                    placeholder='Tus nomobres'
                                    id='nombres'/>
                            <input 
                                    style={{width: '100%', marginBottom: 20 / proporcional, height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${48 / proporcional}px`, color: '#495057', border: '1px solid #ced4da'}}
                                    type='default'
                                    className='form-control'
                                    value={apellidos}
                                    onChange={(event) => setApellidos(event.target.value)} 
                                    placeholder='Tus apellidos'
                                    id='apellidos'/>
                            <input 
                                style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional, fontSize: 16 / proporcional, lineHeight: `${48 / proporcional}px`, color: '#495057', border: '1px solid #ced4da'}}
                                type='default'
                                className='form-control'
                                value={url}
                                onChange={(event) => setUrl(event.target.value)} 
                                placeholder='URL'
                                id='url'/>
                            <textarea 
                                style={{width: '100%', height: 134 / proporcional, height: 104 / proporcional, marginBottom: 20 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'rgb(73, 80, 87', border: '1px solid #ced4da'}}
                                type='default'
                                className='form-control'
                                value={message}
                                onChange={(event) => setMessage(event.target.value)} 
                                placeholder='Menssage'
                                id='message'/>
                            <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                                <button className='btn' style={{width: 200 / proporcional, height: 40 / proporcional, background: 'rgb(239, 126, 50)', fontSize: 16 / proporcional, fontFamily: 'Poppins, sans-serif',
                                            fontWeight: 500, color: 'white'}}>
                                    Enviar comentario
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}