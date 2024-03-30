import React, { useState } from 'react'

export default function Filtros({proporcional}) {

    const [menu, setMenu] = useState ('todo')

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 55 / proporcional}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div className='' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                    <div style={{width: '100%', height: 54 / proporcional, marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 30 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, color: 'rgb(34, 34, 34)', fontFamily: 'Montserrat, sans-serif', 
                                fontWeight: 600}}>
                            Nuestros proyectos
                        </p>
                        <div style={{width: '20%', height: 2 / proporcional, background: 'rgb(239, 126, 50)'}}/> 
                    </div>

                    <div className='d-flex justify-content-end' style={{width: '100%', height: 54 / proporcional}}>
                        <div style={{width: '33%', height: 54 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 54 / proporcional, cursor: 'pointer'}}
                                onClick={() => {setMenu('todo')}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, color: menu === 'todo' ? '#d32525' : '#848484', 
                                        fontFamily: 'Raleway, sans-serif', fontWeight: 400}}>
                                    Todo
                                </p>
                            </div>
                        </div>
                        <div style={{width: '33%', height: 54 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 54 / proporcional, cursor: 'pointer'}}
                                onClick={() => {setMenu('construccion')}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, color: menu === 'construccion' ? '#d32525' : '#848484', 
                                        fontFamily: 'Raleway, sans-serif', fontWeight: 400}}>
                                    Construcción
                                </p>
                            </div>

                        </div>
                        <div style={{width: '33%', height: 54 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 54 / proporcional, cursor: 'pointer'}}
                                onClick={() => {setMenu('inmobiliaria')}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, color: menu === 'inmobiliaria' ? '#d32525' : '#848484', 
                                        fontFamily: 'Raleway, sans-serif', fontWeight: 400}}>
                                    Inmobiliaria
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    )
}