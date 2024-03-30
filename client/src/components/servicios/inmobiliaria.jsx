import React, { useState } from 'react'

export default function Inmobiliaria({proporcional}) {

    const [seleccion_proyecto, setSeleccionProyecto] = useState ('')

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', paddingTop: 70 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 320 / proporcional, paddingRight: 320 / proporcional}}>
                <div style={{width: '100%', height: 54 / proporcional, marginBottom: 55 / proporcional}}>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${33 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 600, fontFamily: 'Montserrat, sans-serif',
                        color: 'rgb(34, 34, 34)', textAlign: 'center'}}>
                        Inmobiliaria
                    </p>
                    <div className='d-flex' style={{width: '100%', height: 2 / proporcional}}>
                        <div style={{width: '45%', height: 2 / proporcional, background: '#f6f6f6'}}/>
                        <div style={{width: '10%', height: 2 / proporcional, background: 'rgb(231, 129, 56)'}}/>
                        <div style={{width: '45%', height: 2 / proporcional, background: '#f6f6f6'}}/>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 45 / proporcional}}>
                        <div className='shadow rounded' style={{width: '32%', height: 'auto'}}
                            onMouseOver={() => setSeleccionProyecto('proyecto_uno')} onMouseLeave={() => setSeleccionProyecto('')}>
                            <div style={{width: '100%', height: 275 / proporcional, background: seleccion_proyecto === 'proyecto_uno' ? 'rgba(34, 34, 34, 0.8)' : 'rgba(34, 34, 34, 0.4)'}}/>
                            <div style={{width: '100%', height: 100 / proporcional, paddingTop: 10 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional,
                                    border: '1px solid #eeeeee'}}>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '100%', height: 30 / proporcional, textAlign: 'center', 
                                            paddingTop: seleccion_proyecto === 'proyecto_uno' ? 0 : 30 / proporcional, marginBottom: seleccion_proyecto === 'proyecto_uno' ? 10 / proporcional : 0}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, color: seleccion_proyecto === 'proyecto_uno' ? 'red' : '#222222', lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif'}}>
                                            Casa San Isidro
                                        </p>
                                    </div>
                                    {
                                        seleccion_proyecto === 'proyecto_uno' ? ( 
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 40 / proporcional}}>
                                                <button className='btn' style={{width: '40%', height: 40 / proporcional, border: '2px solid #f4f4f4', fontSize: 15 / proporcional, fontWeight: 400}}>
                                                    Leer más
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='shadow rounded' style={{width: '32%', height: 'auto'}}
                            onMouseOver={() => setSeleccionProyecto('proyecto_dos')} onMouseLeave={() => setSeleccionProyecto('')}>
                            <div style={{width: '100%', height: 275 / proporcional, background: seleccion_proyecto === 'proyecto_dos' ? 'rgba(34, 34, 34, 0.8)' : 'rgba(34, 34, 34, 0.4)'}}/>
                            <div style={{width: '100%', height: 100 / proporcional, paddingTop: 10 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional,
                                    border: '1px solid #eeeeee'}}>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '100%', height: 30 / proporcional, textAlign: 'center', 
                                            paddingTop: seleccion_proyecto === 'proyecto_dos' ? 0 : 30 / proporcional, marginBottom: seleccion_proyecto === 'proyecto_dos' ? 10 / proporcional : 0}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, color: seleccion_proyecto === 'proyecto_dos' ? 'red' : '#222222', lineHeight: `${30 / proporcional}px`, marginbotom: 0, fontFamily: 'Montserrat, sans-serif'}}>
                                            Departamento San Miguel
                                        </p>
                                    </div>
                                    {
                                        seleccion_proyecto === 'proyecto_dos' ? ( 
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 40 / proporcional}}>
                                                <button className='btn' style={{width: '40%', height: 40 / proporcional, border: '2px solid #f4f4f4', fontSize: 15 / proporcional, fontWeight: 400}}>
                                                    Leer más
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='shadow rounded' style={{width: '32%', height: 'auto'}}
                            onMouseOver={() => setSeleccionProyecto('proyecto_tres')} onMouseLeave={() => setSeleccionProyecto('')}>
                            <div style={{width: '100%', height: 275 / proporcional, background: seleccion_proyecto === 'proyecto_tres' ? 'rgba(34, 34, 34, 0.8)' : 'rgba(34, 34, 34, 0.4)'}}/>
                            <div style={{width: '100%', height: 100 / proporcional, paddingTop: 10 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional,
                                    border: '1px solid #eeeeee'}}>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '100%', height: 30 / proporcional, textAlign: 'center', 
                                            paddingTop: seleccion_proyecto === 'proyecto_tres' ? 0 : 30 / proporcional, marginBottom: seleccion_proyecto === 'proyecto_tres' ? 10 / proporcional : 0}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, color: seleccion_proyecto === 'proyecto_tres' ? 'red' : '#222222', lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif'}}>
                                            Departamento La Molina
                                        </p>
                                    </div>
                                    {
                                        seleccion_proyecto === 'proyecto_tres' ? ( 
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 40 / proporcional}}>
                                                <button className='btn' style={{width: '40%', height: 40 / proporcional, border: '2px solid #f4f4f4', fontSize: 15 / proporcional, fontWeight: 400}}>
                                                    Leer más
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 45 / proporcional}}>
                        <div className='shadow rounded' style={{width: '32%', height: 'auto'}}
                            onMouseOver={() => setSeleccionProyecto('proyecto_cuatro')} onMouseLeave={() => setSeleccionProyecto('')}>
                            <div style={{width: '100%', height: 275 / proporcional, background: seleccion_proyecto === 'proyecto_cuatro' ? 'rgba(34, 34, 34, 0.8)' : 'rgba(34, 34, 34, 0.4)'}}/>
                            <div style={{width: '100%', height: 100 / proporcional, paddingTop: 10 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional,
                                    border: '1px solid #eeeeee'}}>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '100%', height: 30 / proporcional, textAlign: 'center', 
                                            paddingTop: seleccion_proyecto === 'proyecto_cuatro' ? 0 : 30 / proporcional, marginBottom: seleccion_proyecto === 'proyecto_cuatro' ? 10 / proporcional : 0}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, color: seleccion_proyecto === 'proyecto_cuatro' ? 'red' : '#222222', lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif'}}>
                                            Departamento Miraflores
                                        </p>
                                    </div>
                                    {
                                        seleccion_proyecto === 'proyecto_cuatro' ? ( 
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 40 / proporcional}}>
                                                <button className='btn' style={{width: '40%', height: 40 / proporcional, border: '2px solid #f4f4f4', fontSize: 15 / proporcional, fontWeight: 400}}>
                                                    Leer más
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='shadow rounded' style={{width: '32%', height: 'auto'}}
                            onMouseOver={() => setSeleccionProyecto('proyecto_cinco')} onMouseLeave={() => setSeleccionProyecto('')}>
                            <div style={{width: '100%', height: 275 / proporcional, background: seleccion_proyecto === 'proyecto_cinco' ? 'rgba(34, 34, 34, 0.8)' : 'rgba(34, 34, 34, 0.4)'}}/>
                            <div style={{width: '100%', height: 100 / proporcional, paddingTop: 10 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional,
                                    border: '1px solid #eeeeee'}}>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '100%', height: 30 / proporcional, textAlign: 'center', 
                                            paddingTop: seleccion_proyecto === 'proyecto_cinco' ? 0 : 30 / proporcional, marginBottom: seleccion_proyecto === 'proyecto_cinco' ? 10 / proporcional : 0}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, color: seleccion_proyecto === 'proyecto_cinco' ? 'red' : '#222222', lineHeight: `${30 / proporcional}px`, marginbotom: 0, fontFamily: 'Montserrat, sans-serif'}}>
                                            Casa Surquillo
                                        </p>
                                    </div>
                                    {
                                        seleccion_proyecto === 'proyecto_cinco' ? ( 
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 40 / proporcional}}>
                                                <button className='btn' style={{width: '40%', height: 40 / proporcional, border: '2px solid #f4f4f4', fontSize: 15 / proporcional, fontWeight: 400}}>
                                                    Leer más
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='shadow rounded' style={{width: '32%', height: 'auto'}}
                            onMouseOver={() => setSeleccionProyecto('proyecto_seis')} onMouseLeave={() => setSeleccionProyecto('')}>
                            <div style={{width: '100%', height: 275 / proporcional, background: seleccion_proyecto === 'proyecto_seis' ? 'rgba(34, 34, 34, 0.8)' : 'rgba(34, 34, 34, 0.4)'}}/>
                            <div style={{width: '100%', height: 100 / proporcional, paddingTop: 10 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional,
                                    border: '1px solid #eeeeee'}}>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '100%', height: 30 / proporcional, textAlign: 'center', 
                                            paddingTop: seleccion_proyecto === 'proyecto_seis' ? 0 : 30 / proporcional, marginBottom: seleccion_proyecto === 'proyecto_seis' ? 10 / proporcional : 0}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, color: seleccion_proyecto === 'proyecto_seis' ? 'red' : '#222222', lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif'}}>
                                            Casa Surco
                                        </p>
                                    </div>
                                    {
                                        seleccion_proyecto === 'proyecto_seis' ? ( 
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 40 / proporcional}}>
                                                <button className='btn' style={{width: '40%', height: 40 / proporcional, border: '2px solid #f4f4f4', fontSize: 15 / proporcional, fontWeight: 400}}>
                                                    Leer más
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 45 / proporcional}}>
                        <div className='shadow rounded' style={{width: '32%', height: 'auto'}}
                            onMouseOver={() => setSeleccionProyecto('proyecto_siete')} onMouseLeave={() => setSeleccionProyecto('')}>
                            <div style={{width: '100%', height: 275 / proporcional, background: seleccion_proyecto === 'proyecto_siete' ? 'rgba(34, 34, 34, 0.8)' : 'rgba(34, 34, 34, 0.4)'}}/>
                            <div style={{width: '100%', height: 100 / proporcional, paddingTop: 10 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional,
                                    border: '1px solid #eeeeee'}}>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '100%', height: 30 / proporcional, textAlign: 'center', 
                                            paddingTop: seleccion_proyecto === 'proyecto_siete' ? 0 : 30 / proporcional, marginBottom: seleccion_proyecto === 'proyecto_siete' ? 10 / proporcional : 0}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, color: seleccion_proyecto === 'proyecto_siete' ? 'red' : '#222222', lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif'}}>
                                            Cuarto en Miraflores
                                        </p>
                                    </div>
                                    {
                                        seleccion_proyecto === 'proyecto_siete' ? ( 
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 40 / proporcional}}>
                                                <button className='btn' style={{width: '40%', height: 40 / proporcional, border: '2px solid #f4f4f4', fontSize: 15 / proporcional, fontWeight: 400}}>
                                                    Leer más
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='shadow rounded' style={{width: '32%', height: 'auto'}}
                            onMouseOver={() => setSeleccionProyecto('proyecto_ocho')} onMouseLeave={() => setSeleccionProyecto('')}>
                            <div style={{width: '100%', height: 275 / proporcional, background: seleccion_proyecto === 'proyecto_ocho' ? 'rgba(34, 34, 34, 0.8)' : 'rgba(34, 34, 34, 0.4)'}}/>
                            <div style={{width: '100%', height: 100 / proporcional, paddingTop: 10 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional,
                                    border: '1px solid #eeeeee'}}>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '100%', height: 30 / proporcional, textAlign: 'center', 
                                            paddingTop: seleccion_proyecto === 'proyecto_ocho' ? 0 : 30 / proporcional, marginBottom: seleccion_proyecto === 'proyecto_ocho' ? 10 / proporcional : 0}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, color: seleccion_proyecto === 'proyecto_ocho' ? 'red' : '#222222', lineHeight: `${30 / proporcional}px`, marginbotom: 0, fontFamily: 'Montserrat, sans-serif'}}>
                                            Cuarto en Surquillo
                                        </p>
                                    </div>
                                    {
                                        seleccion_proyecto === 'proyecto_ocho' ? ( 
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 40 / proporcional}}>
                                                <button className='btn' style={{width: '40%', height: 40 / proporcional, border: '2px solid #f4f4f4', fontSize: 15 / proporcional, fontWeight: 400}}>
                                                    Leer más
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='shadow rounded' style={{width: '32%', height: 'auto'}}
                            onMouseOver={() => setSeleccionProyecto('proyecto_nueve')} onMouseLeave={() => setSeleccionProyecto('')}>
                            <div style={{width: '100%', height: 275 / proporcional, background: seleccion_proyecto === 'proyecto_nueve' ? 'rgba(34, 34, 34, 0.8)' : 'rgba(34, 34, 34, 0.4)'}}/>
                            <div style={{width: '100%', height: 100 / proporcional, paddingTop: 10 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional,
                                    border: '1px solid #eeeeee'}}>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '100%', height: 30 / proporcional, textAlign: 'center', 
                                            paddingTop: seleccion_proyecto === 'proyecto_nueve' ? 0 : 30 / proporcional, marginBottom: seleccion_proyecto === 'proyecto_nueve' ? 10 / proporcional : 0}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, color: seleccion_proyecto === 'proyecto_nueve' ? 'red' : '#222222', lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif'}}>
                                            Cuarto en La Molina
                                        </p>
                                    </div>
                                    {
                                        seleccion_proyecto === 'proyecto_nueve' ? ( 
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 40 / proporcional}}>
                                                <button className='btn' style={{width: '40%', height: 40 / proporcional, border: '2px solid #f4f4f4', fontSize: 15 / proporcional, fontWeight: 400}}>
                                                    Leer más
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 45 / proporcional}}>
                        <div className='shadow rounded' style={{width: '32%', height: 'auto'}}
                            onMouseOver={() => setSeleccionProyecto('proyecto_diez')} onMouseLeave={() => setSeleccionProyecto('')}>
                            <div style={{width: '100%', height: 275 / proporcional, background: seleccion_proyecto === 'proyecto_diez' ? 'rgba(34, 34, 34, 0.8)' : 'rgba(34, 34, 34, 0.4)'}}/>
                            <div style={{width: '100%', height: 100 / proporcional, paddingTop: 10 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional,
                                    border: '1px solid #eeeeee'}}>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '100%', height: 30 / proporcional, textAlign: 'center', 
                                            paddingTop: seleccion_proyecto === 'proyecto_diez' ? 0 : 30 / proporcional, marginBottom: seleccion_proyecto === 'proyecto_diez' ? 10 / proporcional : 0}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, color: seleccion_proyecto === 'proyecto_diez' ? 'red' : '#222222', lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif'}}>
                                            Local en Barranco
                                        </p>
                                    </div>
                                    {
                                        seleccion_proyecto === 'proyecto_diez' ? ( 
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 40 / proporcional}}>
                                                <button className='btn' style={{width: '40%', height: 40 / proporcional, border: '2px solid #f4f4f4', fontSize: 15 / proporcional, fontWeight: 400}}>
                                                    Leer más
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='shadow rounded' style={{width: '32%', height: 'auto'}}
                            onMouseOver={() => setSeleccionProyecto('proyecto_once')} onMouseLeave={() => setSeleccionProyecto('')}>
                            <div style={{width: '100%', height: 275 / proporcional, background: seleccion_proyecto === 'proyecto_once' ? 'rgba(34, 34, 34, 0.8)' : 'rgba(34, 34, 34, 0.4)'}}/>
                            <div style={{width: '100%', height: 100 / proporcional, paddingTop: 10 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional,
                                    border: '1px solid #eeeeee'}}>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '100%', height: 30 / proporcional, textAlign: 'center', 
                                            paddingTop: seleccion_proyecto === 'proyecto_once' ? 0 : 30 / proporcional, marginBottom: seleccion_proyecto === 'proyecto_once' ? 10 / proporcional : 0}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, color: seleccion_proyecto === 'proyecto_once' ? 'red' : '#222222', lineHeight: `${30 / proporcional}px`, marginbotom: 0, fontFamily: 'Montserrat, sans-serif'}}>
                                            Local en Chorrillos
                                        </p>
                                    </div>
                                    {
                                        seleccion_proyecto === 'proyecto_once' ? ( 
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 40 / proporcional}}>
                                                <button className='btn' style={{width: '40%', height: 40 / proporcional, border: '2px solid #f4f4f4', fontSize: 15 / proporcional, fontWeight: 400}}>
                                                    Leer más
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='shadow rounded' style={{width: '32%', height: 'auto'}}
                            onMouseOver={() => setSeleccionProyecto('proyecto_trece')} onMouseLeave={() => setSeleccionProyecto('')}>
                            <div style={{width: '100%', height: 275 / proporcional, background: seleccion_proyecto === 'proyecto_trece' ? 'rgba(34, 34, 34, 0.8)' : 'rgba(34, 34, 34, 0.4)'}}/>
                            <div style={{width: '100%', height: 100 / proporcional, paddingTop: 10 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional,
                                    border: '1px solid #eeeeee'}}>
                                <div className='' style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '100%', height: 30 / proporcional, textAlign: 'center', 
                                            paddingTop: seleccion_proyecto === 'proyecto_trece' ? 0 : 30 / proporcional, marginBottom: seleccion_proyecto === 'proyecto_trece' ? 10 / proporcional : 0}}>
                                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, color: seleccion_proyecto === 'proyecto_trece' ? 'red' : '#222222', lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif'}}>
                                            Local San Isidro
                                        </p>
                                    </div>
                                    {
                                        seleccion_proyecto === 'proyecto_trece' ? ( 
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 40 / proporcional}}>
                                                <button className='btn' style={{width: '40%', height: 40 / proporcional, border: '2px solid #f4f4f4', fontSize: 15 / proporcional, fontWeight: 400}}>
                                                    Leer más
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}