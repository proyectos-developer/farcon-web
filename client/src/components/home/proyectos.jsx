import React from 'react'

import tipo_proyecto_01 from '../../assets/images/tipo_proyecto_01_380.png'
import tipo_proyecto_02 from '../../assets/images/tipo_proyecto_02_380.png'
import tipo_proyecto_03 from '../../assets/images/tipo_proyecto_03_380.png'
import tipo_proyecto_04 from '../../assets/images/tipo_proyecto_04_380.png'

export default function Proyectos({proporcional}) {
    
    return (
        <div className='position-absolute' style={{width: '100%', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional, top: 670 / proporcional,
                background: 'transparent', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <div className='shadow' style={{width: '23%' / proporcional, marginLeft: 10 / proporcional, marginRight: 10 / proporcional, border: '1px solid #bdbdbd'}}>
                    <div style={{width: '100%', height: 280 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={tipo_proyecto_01} style={{width: '100%', height: 280 / proporcional}}/>
                    </div>
                    <div className='position-relative' style={{width: 380 / proporcional, height: 90 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, 
                        paddingTop: 10 / proporcional}}>
                        <div className='position-absolute' style={{width: 360 / proporcional, height: 'auto', top: '40%'}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight: 400, margin: 0, textAlign: 'center', lineHeight: `${30 / proporcional}px`, color: '#292929'}}>
                                Proyectos inmobiliarios
                            </p>
                        </div>
                    </div>
                </div>
                <div className='shadow' style={{width: '23%', marginLeft: 10 / proporcional, marginRight: 10 / proporcional, border: '1px solid #bdbdbd'}}>
                    <div style={{width: '100%', height: 280 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={tipo_proyecto_02} style={{width: '100%', height: 280 / proporcional}}/>
                    </div>
                    <div className='position-relative' style={{width: 380 / proporcional, height: 90 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, 
                        paddingTop: 10 / proporcional}}>
                        <div className='position-absolute' style={{width: 360 / proporcional, height: 'auto', top: '40%'}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight: 400, margin: 0, textAlign: 'center', lineHeight: `${30 / proporcional}px`, color: '#292929'}}>
                                Proyectos de construcción
                            </p>
                        </div>
                    </div>     
                </div>               
                <div className='shadow' style={{width: '23%', marginLeft: 10 / proporcional, marginRight: 10 / proporcional, border: '1px solid #bdbdbd'}}>
                    <div style={{width: '100%', height: 280 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={tipo_proyecto_03} style={{width: '100%', height: 280 / proporcional}}/>
                    </div>
                    <div className='position-relative' style={{width: 380 / proporcional, height: 90 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, 
                        paddingTop: 10 / proporcional}}>
                        <div className='position-absolute' style={{width: 360 / proporcional, height: 'auto', top: '40%'}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight: 400, margin: 0, textAlign: 'center', lineHeight: `${30 / proporcional}px`, color: '#292929'}}>
                                Proyectos de obras
                            </p>
                        </div>
                    </div>
                </div>
                <div className='shadow' style={{width: '23%', marginLeft: 10 / proporcional, marginRight: 10 / proporcional, border: '1px solid #bdbdbd'}}>
                    <div style={{width: '100%', height: 280 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={tipo_proyecto_04} style={{width: '100%', height: 280 / proporcional}}/>
                    </div>
                    <div className='position-relative' style={{width: 380 / proporcional, height: 90 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, 
                        paddingTop: 10 / proporcional}}>
                        <div className='position-absolute' style={{width: 360 / proporcional, height: 'auto', top: '40%'}}>
                            <p style={{fontSize: 18 / proporcional, fontWeight: 400, margin: 0, textAlign: 'center', lineHeight: `${30 / proporcional}px`, color: '#292929'}}>
                                Proyectos de remodelación
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
