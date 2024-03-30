import React from 'react'

import inmobiliaria_foto from '../../../assets/images/imge_interior_inmobiliaria_800.png'
import icono_check from '../../../assets/iconos/check_orange_96.png'

export default function CampañaTablet({proporcional}) {
        
    return (
        <div style={{width: '100%', height: 'auto', background: '#f1f5ff'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional}}>
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
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <img src={inmobiliaria_foto} style={{width: 400 / proporcional, height: 400 / proporcional}}/>
            </div>
        </div>
    )
}