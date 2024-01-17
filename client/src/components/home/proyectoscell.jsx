import React from 'react'

import proyecto_comercial from '../../assets/images/proyecto_comercial_380.png'
import proyecto_industrial from '../../assets/images/proyecto_industrial_380.png'
import proyecto_residencial from '../../assets/images/proyecto_residencial_380.png'
import proyecto_metales from '../../assets/images/proyecto_metales_380.png'
import proyecto_techos from '../../assets/images/proyecto_techos_380.png'
import proyecto_canaletas from '../../assets/images/proyecto_canaletas_380.png'

export default function ProyectosCell({proporcional}) {
    
    return (
        <div className='' style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 80 / proporcional,
                paddingBottom: 40 / proporcional, background: 'transparent', height: 'auto'}}>
                <div className='shadow' style={{width: 459 / proporcional, marginBottom: 30 / proporcional, 
                    border: '1px solid #bdbdbd'}}>
                    <div style={{width: 459 / proporcional, height: 340 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={proyecto_comercial} style={{width: 459 / proporcional, height: 340 / proporcional}}/>
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
                <div className='shadow' style={{width: 459 / proporcional, marginBottom: 30 / proporcional, 
                    border: '1px solid #bdbdbd'}}>
                    <div style={{width: 459 / proporcional, height: 340 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={proyecto_residencial} style={{width: 459 / proporcional, height: 340 / proporcional}}/>
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
                <div className='shadow' style={{width: 459 / proporcional, marginBottom: 30 / proporcional, 
                    border: '1px solid #bdbdbd'}}>
                    <div style={{width: 459 / proporcional, height: 340 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={proyecto_industrial} style={{width: 459 / proporcional, height: 340 / proporcional}}/>
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
                <div className='shadow' style={{width: 459 / proporcional, marginBottom: 30 / proporcional, 
                    border: '1px solid #bdbdbd'}}>
                    <div style={{width: 459 / proporcional, height: 340 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={proyecto_techos} style={{width: 459 / proporcional, height: 340 / proporcional}}/>
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
                <div className='shadow' style={{width: 459 / proporcional, marginBottom: 30 / proporcional, 
                    border: '1px solid #bdbdbd'}}>
                    <div style={{width: 459 / proporcional, height: 340 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={proyecto_canaletas} style={{width: 459 / proporcional, height: 340 / proporcional}}/>
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
                <div className='shadow' style={{width: 459 / proporcional, marginBottom: 30 / proporcional, 
                    border: '1px solid #bdbdbd'}}>
                    <div style={{width: 459 / proporcional, height: 340 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={proyecto_metales} style={{width: 459 / proporcional, height: 340 / proporcional}}/>
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
    )
}
