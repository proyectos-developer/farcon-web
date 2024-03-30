import React, { useState } from 'react'

export default function GaleriaFotos({proporcional}) {

    const [proyecto, setProyecto] = useState('')

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_uno')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_uno' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>

                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_dos')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_dos' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>

            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_tres')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_tres' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>

                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_cuatro')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_cuatro' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>

            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_cinco')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_cinco' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>

                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_seis')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_seis' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            
            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_siete')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_siete' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>

                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_ocho')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_ocho' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>

            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_nueve')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_nueve' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>

                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_diez')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_diez' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>

            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_once')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_once' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>

                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_doce')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_doce' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>

            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_trece')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_trece' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>

                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_catorce')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_catorce' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>

            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_quince')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_quince' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>

                <div className='position-relative' style={{width: '50%', height: 340 / proporcional, border: '2px solid #efefef'}}>
                    <div style={{width: '100%', height: 340 / proporcional, background: '#bdbdbd', cursor: 'pointer'}}
                        onMouseOver={() => setProyecto('proyecto_diezyseis')} onMouseLeave={() => setProyecto('')}/>
                    {
                        proyecto === 'proyecto_diezyseis' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 340 / proporcional, background: 'rgba(34, 34, 34, 0.5)'}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serfif'}}>
                                        Nombre proyecto
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${27 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0 / proporcional,
                                        textAlign: 'center', fontFamily: 'Raleway, sans-serfif'}}>
                                        Tipo de proyecto
                                    </p>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}