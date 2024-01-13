import React from 'react'

import proyecto_comercial from '../../assets/images/proyecto_comercial_380.png'
import proyecto_industrial from '../../assets/images/proyecto_industrial_380.png'
import proyecto_residencial from '../../assets/images/proyecto_residencial_380.png'
import proyecto_metales from '../../assets/images/proyecto_metales_380.png'
import proyecto_techos from '../../assets/images/proyecto_techos_380.png'
import proyecto_canaletas from '../../assets/images/proyecto_canaletas_380.png'

export default function Proyectos({proporcional}) {
    
    return (
        <div className='position-absolute' style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, top: 670 / proporcional,
                background: 'transparent', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <div className='shadow' style={{width: 378 / proporcional, marginLet: 10 / proporcional, marginRight: 10 / proporcional, border: '1px solid #bdbdbd'}}>
                    <div style={{width: 378 / proporcional, height: 280 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={proyecto_comercial} style={{width: 378 / proporcional, height: 280 / proporcional}}/>
                    </div>
                    <div className='position-relative' style={{width: 380 / proporcional, height: 90 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, 
                        paddingTop: 10 / proporcional}}>
                        <div className='position-absolute' style={{width: 360 / proporcional, height: 'auto', top: '40%'}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight: 400, margin: 0, textAlign: 'center', lineHeight: `${30 / proporcional}px`, color: '#292929'}}>
                                Proyectos comerciales
                            </p>
                        </div>
                    </div>
                </div>
                <div className='shadow' style={{width: 378 / proporcional, marginLet: 10 / proporcional, marginRight: 10 / proporcional, border: '1px solid #bdbdbd'}}>
                    <div style={{width: 378 / proporcional, height: 280 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={proyecto_residencial} style={{width: 378 / proporcional, height: 280 / proporcional}}/>
                    </div>
                    <div className='position-relative' style={{width: 380 / proporcional, height: 90 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, 
                        paddingTop: 10 / proporcional}}>
                        <div className='position-absolute' style={{width: 360 / proporcional, height: 'auto', top: '40%'}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight: 400, margin: 0, textAlign: 'center', lineHeight: `${30 / proporcional}px`, color: '#292929'}}>
                                Proyectos residenciales
                            </p>
                        </div>
                    </div>     
                </div>               
                <div className='shadow' style={{width: 378 / proporcional, marginLet: 10 / proporcional, marginRight: 10 / proporcional, border: '1px solid #bdbdbd'}}>
                    <div style={{width: 378 / proporcional, height: 280 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={proyecto_industrial} style={{width: 378 / proporcional, height: 280 / proporcional}}/>
                    </div>
                    <div className='position-relative' style={{width: 380 / proporcional, height: 90 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, 
                        paddingTop: 10 / proporcional}}>
                        <div className='position-absolute' style={{width: 360 / proporcional, height: 'auto', top: '40%'}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight: 400, margin: 0, textAlign: 'center', lineHeight: `${30 / proporcional}px`, color: '#292929'}}>
                                Proyectos industriales
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <div className='shadow' style={{width: 378 / proporcional, marginLet: 10 / proporcional, marginRight: 10 / proporcional, border: '1px solid #bdbdbd'}}>
                    <div style={{width: 378 / proporcional, height: 280 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={proyecto_techos} style={{width: 378 / proporcional, height: 280 / proporcional}}/>
                    </div>
                    <div className='position-relative' style={{width: 380 / proporcional, height: 90 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, 
                        paddingTop: 10 / proporcional}}>
                        <div className='position-absolute' style={{width: 360 / proporcional, height: 'auto', top: '40%'}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight: 400, margin: 0, textAlign: 'center', lineHeight: `${30 / proporcional}px`, color: '#292929'}}>
                                Reparación de techos
                            </p>
                        </div>
                    </div>
                </div>
                <div className='shadow' style={{width: 378 / proporcional, marginLet: 10 / proporcional, marginRight: 10 / proporcional, border: '1px solid #bdbdbd'}}>
                    <div style={{width: 378 / proporcional, height: 280 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={proyecto_canaletas} style={{width: 378 / proporcional, height: 280 / proporcional}}/>
                    </div>
                    <div className='position-relative' style={{width: 380 / proporcional, height: 90 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, 
                        paddingTop: 10 / proporcional}}>
                        <div className='position-absolute' style={{width: 360 / proporcional, height: 'auto', top: '40%'}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight: 400, margin: 0, textAlign: 'center', lineHeight: `${30 / proporcional}px`, color: '#292929'}}>
                                Reparación canaletas
                            </p>
                        </div>
                    </div>     
                </div>               
                <div className='shadow' style={{width: 378 / proporcional, marginLet: 10 / proporcional, marginRight: 10 / proporcional, border: '1px solid #bdbdbd'}}>
                    <div style={{width: 378 / proporcional, height: 280 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={proyecto_metales} style={{width: 378 / proporcional, height: 280 / proporcional}}/>
                    </div>
                    <div className='position-relative' style={{width: 380 / proporcional, height: 90 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, 
                        paddingTop: 10 / proporcional}}>
                        <div className='position-absolute' style={{width: 360 / proporcional, height: 'auto', top: '40%'}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight: 400, margin: 0, textAlign: 'center', lineHeight: `${30 / proporcional}px`, color: '#292929'}}>
                                Proyectos metales
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
