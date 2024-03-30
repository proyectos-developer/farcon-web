import React from 'react'

import logo from '../assets/logo_168.png'
import icono_location from '../assets/iconos/icono_location_black_40.png'
import icono_clock from '../assets/iconos/icono_clock_black_40.png'
import icono_phone from '../assets/iconos/icono_phone_black_40.png'
import { useNavigate } from 'react-router-dom'

export default function BarraSuperiorCell({proporcional}) {

    const navigate = useNavigate() 
    
    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, padingTop: 15 / proporcional, 
            paddingBottom: 15 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 112 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                <img src={logo} style={{width: 168 / proporcional, height: 82 / proporcional}} onClick={() => navigate ('/')}/>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 70 / proporcional, paddingTop: 15 / proporcional, 
                paddingBottom: 15 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: 290 / proporcional, hight: 40 / proporcional}}>
                    <img src={icono_location} style={{width: 28 / proporcional, height: 40 / proporcional, marginRight: 17 / proporcional}}/>  
                    <div style={{width: 127 / proporcional, height: 40 / proporcional}}>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#222222', fontWeight: 700,
                            fontFamily: 'Montserrat, sans-serif'}}>Dirección</p>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#848484', fontWeight: 500,
                            fontFamily: 'Montserrat, sans-serif'}}>Av, Calle</p>
                    </div>  
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 70 / proporcional, paddingTop: 15 / proporcional, 
                paddingBottom: 15 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: 290 / proporcional, hight: 40 / proporcional}}>
                    <img src={icono_phone} style={{width: 40 / proporcional, height: 40 / proporcional, marginRight: 5 / proporcional}}/> 
                    <div style={{width: 127 / proporcional, height: 40 / proporcional}}>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#222222', fontWeight: 700,
                            fontFamily: 'Montserrat, sans-serif'}}>+51 xxx xxxxxx</p>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#848484', fontWeight: 500,
                            fontFamily: 'Montserrat, sans-serif'}}>correo@dominio.com</p>
                    </div>  
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 70 / proporcional, paddingTop: 15 / proporcional, 
                paddingBottom: 15 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: 290 / proporcional, hight: 40 / proporcional}}>
                    <img src={icono_clock} style={{width: 40 / proporcional, height: 40 / proporcional, marginRight: 5 / proporcional}}/> 
                    <div style={{width: 127 / proporcional, height: 40 / proporcional}}>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#222222', fontWeight: 700,
                            fontFamily: 'Montserrat, sans-serif'}}>Lu - Sa: 8 - 18</p>
                        <p className='mb-0' style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#848484', fontWeight: 500,
                            fontFamily: 'Montserrat, sans-serif'}}>Do cerrados</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}
