import React from 'react'

import inmobiliaria_foto from '../../../assets/images/imge_interior_inmobiliaria_800.png'
import icono_check from '../../../assets/iconos/check_orange_96.png'

export default function Campaña({proporcional}) {
        
    return (
        <div style={{width: '100%', height: 'auto', background: '#f1f5ff'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '50%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', paddingLeft: 160 / proporcional, paddingRight: 120 / proporcional, paddingTop: 150 / proporcional, paddingBottom: 150 / proporcional}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <p style={{fontSize: 28 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontFamily: 'Roboto, serif', fontWeight: 500, 
                                color: 'rgb(45, 57, 84)'}}>
                                Campaña recién lanzada en agencias
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, fontWeight: 300, color: 'rgb(132, 143, 168)', fontFamily: 'Poppins, sans-serif'}}>
                                    Ut aliqquam purus sit amet luctus
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, fontWeight: 300, color: 'rgb(132, 143, 168)', fontFamily: 'Poppins, sans-serif'}}>
                                    Duis convallis convallis tellus id
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, fontWeight: 300, color: 'rgb(132, 143, 168)', fontFamily: 'Poppins, sans-serif'}}>
                                    Aliquet risus feugiat ante dictum at
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, fontWeight: 300, color: 'rgb(132, 143, 168)', fontFamily: 'Poppins, sans-serif'}}>
                                    Sit amet justo donec enim diam vul
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <img src={icono_check} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${23 / proporcional}px`, fontWeight: 300, color: 'rgb(132, 143, 168)', fontFamily: 'Poppins, sans-serif'}}>
                                    Nisi vitae suscipit tellus mauris
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: '50%', height: 'auto'}}>
                    <img src={inmobiliaria_foto} style={{width: 800 / proporcional, height: 600 / proporcional}}/>
                </div>
            </div>
        </div>
    )
}