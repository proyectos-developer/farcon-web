import React from 'react'

import fondo from '../../../assets/images/inmobiliaria_clientes_llaves.png'
import cliente from '../../../assets/images/inmobiliaria_cliente_satisfecho_150.png'

export default function OpinionesTablet({proporcional}) {

    return (
        <div style={{width: 'auto', height: 'auto', backgroundImage: `url(${fondo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cober'}}>
            <div style={{width: '100%', height: 'auto', background: 'rgba(33, 37, 41, 0.6)', zIndex: 99999, paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional,
                    paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div className='' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: 'auto', height: 36 / proporcional, marginBottom: 60 / proporcional}}>
                            <div style={{width: 'auto', height: 'auto'}}>
                                <p style={{fontSize: 28 / proporcional, lineHeight: `${32 / proporcional}px`, color: 'white', fontWeight: 400, fontFamily: 'Roboto, serif', marginBottom: 0}}>
                                    Lo que dicen las personas
                                </p>
                                <div style={{width: '10%', height: 4 / proporcional, background: 'rgb(239, 126, 50)'}}/>
                            </div>
                        </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 150 / proporcional}}>
                                    <img className='rounded-circle' src={cliente} style={{width: 150 / proporcional, height: 150 / proporcional}}/>
                                </div>
                                <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                                    <div style={{width: 'auto', height: 'auto', paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, paddingLeft: 30 / proporcional}}>
                                        <p style={{fontSize: 24 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Roboto, serif',
                                                color: 'white'}}>
                                            May Diaz
                                        </p>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'white', fontFamily: 'Poppins, sans-serif'}}>
                                            Fotógrafa
                                        </p>
                                    </div>
                                    <div style={{width: 'auto', height: 'auto', paddingLeft: 30 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 400, 
                                                color: 'white', fontFamily: 'Poppins, sans-serif'}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim vniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>  
                                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}