import React from 'react'

import icono_comillas from '../../assets/iconos/icono_comillas_grey_96.png'
import cliente_1 from '../../assets/images/cliente_1.png'
import cliente_2 from '../../assets/images/cliente_2.png'
import cliente_3 from '../../assets/images/cliente_3.png'

export default function MencionesTablet({proporcional}) {
    
    return (
        <div style={{width: '100%', height: 'auto', paddingRight: 60 / proporcional, paddingLeft: 60 / proporcional, paddingTop: 40 / proporcional,
            paddingBottom: 40 / proporcional}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 54 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${33 / proporcional}px`, color: '#222222', marginBottom: 55 / proporcional,
                    borderBottom: '1px solid #f6f6f6', fontFamily: 'Montserrat, sans-serif', textAlign: 'center', fontWeight: 600, paddingBottom: 20 / proporcional}}>
                    Opiniones de nuestros clientes
                </p>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, marginBottom: 25 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                    <div style={{width: 60 / proporcional, height: 60 / proporcional, border: '1px solid #e5e5e5'}}>
                        <img src={icono_comillas} style={{width: 58 / proporcional, height: 58 / proporcional}}/>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto', paddingTop: 40 / proporcional, paddingBottom: 40 / proporcional,
                        paddingLeft: 100 / proporcional, paddingRight: 100 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, color: '#848484', fontWeight: 400, fontFamily: 'Relaway, sans-serif',
                            textAlign: 'center'}}>
                        Lorem ipsum es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí".
                    </p>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingLeft: 100 / proporcional, paddingRight: 100 / proporcional}}>
                <div style={{width: 150 / proporcional, height: 172 / proporcional}}>
                    <div style={{width: 150 / proporcional, height: 172 / proporcional}}>
                        <div style={{width: 90 / proporcional, height: 90 / proporcional, paddingLeft: 13.5 / proporcional, paddingRight: 13.5 / proporcional,
                            marginLeft: 30 / proporcional, marginRight: 30 / proporcional, paddingTop: 13.5 / proporcional, paddingBottom: 13.5 / proporcional,
                            marginBottom: 25 / proporcional}}>
                            <img className='rounded-circle' src={cliente_2} style={{width: 63 / proporcional, height: 63 / proporcional, opacity: 0.6}}/>
                        </div>
                    </div>
                </div>
                <div style={{width: 150 / proporcional, height: 172 / proporcional}}>
                    <div style={{width: 90 / proporcional, height: 90 / proporcional, marginLeft: 30 / proporcional, marginRight: 30 / proporcional,
                            marginBottom: 25 / proporcional}}>
                        <img className='rounded-circle' src={cliente_3} style={{width: 90 / proporcional, height: 90 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 18 / proporcional, fontFamily: 'Montserrat, sans-serif', lineHeight: `${30 / proporcional}px`, fontWeight: 500,
                            color: '#222222', textAlign: 'center', marginBottom: 0}}>
                        Nombre cliente
                    </p>
                    <p style={{fontSize: 16 / proporcional, fontFamily: 'Relaway, sans-serif', lineHeight: `${27 / proporcional}px`, fontWeight: 500,
                            color: '#ef7e35', textAlign: 'center', marginBottom: 0}}>
                        Cargo cliente
                    </p>
                </div>
                <div style={{width: 150 / proporcional, height: 172 / proporcional}}>
                    <div style={{width: 150 / proporcional, height: 172 / proporcional}}>
                        <div style={{width: 90 / proporcional, height: 90 / proporcional, paddingLeft: 13.5 / proporcional, paddingRight: 13.5 / proporcional,
                            marginLeft: 30 / proporcional, marginRight: 30 / proporcional, paddingTop: 13.5 / proporcional, paddingBottom: 13.5 / proporcional,
                            marginBottom: 25 / proporcional}}>
                            <img className='rounded-circle' src={cliente_1} style={{width: 63 / proporcional, height: 63 / proporcional, opacity: 0.6}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
