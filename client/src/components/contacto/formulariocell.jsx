import React, { useState } from 'react'

export default function FormularioCell({proporcional}) {

    const [nombres, setNombres] = useState ('')
    const [email, setEmail] = useState ('')
    const [nro_telefono, setNroTelefono] = useState ('')
    const [tema_mensaje, setTemaMensaje] = useState ('')
    const [mensaje, setMensaje] = useState ('')

    const [boton_enviar, setBotonEnviar] = useState(false)

    return (
        <div atyle={{width: '100%', height: 'autp'}}>
                <input 
                    type='default'
                    className='form-control border-0'
                    style={{width: '100%', height: 46 / proporcional, marginBottom: 16 / proporcional, fontSize: 16 / proporcional, fontWeight: 400, color: 'rgb(119, 119, 119)', fontFamily: 'Raleway, sans-serif',
                            lineHeight: `${46 / proporcional}px`}}
                    placeholder='nombres'
                    value={nombres}
                    onChange={(event) => setNombres(event.target.value)}
                    id='nombres'/>
                <input 
                    type='default'
                    className='form-control border-0'
                    style={{width: '100%', height: 46 / proporcional, marginBottom: 16 / proporcional, fontSize: 16 / proporcional, fontWeight: 400, color: 'rgb(119, 119, 119)', fontFamily: 'Raleway, sans-serif',
                            lineHeight: `${46 / proporcional}px`}}
                    placeholder='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    id='email'/>

                <input 
                    type='number'
                    className='form-control border-0'
                    style={{width: '100%', height: 46 / proporcional, marginBottom: 16 / proporcional, fontSize: 16 / proporcional, fontWeight: 400, color: 'rgb(119, 119, 119)', fontFamily: 'Raleway, sans-serif',
                            lineHeight: `${46 / proporcional}px`}}
                    placeholder='Número de teléfono'
                    value={nro_telefono}
                    onChange={(event) => setNroTelefono(event.target.value)}
                    id='nro_telefono'/>
                <input 
                    type='default'
                    className='form-control border-0'
                    style={{width: '100%', height: 46 / proporcional, marginBottom: 16 / proporcional, fontSize: 16 / proporcional, fontWeight: 400, color: 'rgb(119, 119, 119)', fontFamily: 'Raleway, sans-serif',
                            lineHeight: `${46 / proporcional}px`}}
                    placeholder='Tema de mensaje'
                    value={tema_mensaje}
                    onChange={(event) => setTemaMensaje(event.target.value)}
                    id='tema_mensaje'/>

                    <textarea 
                        type='number'
                        rows={3}
                        className='form-control border-0'
                        style={{width: '100%', height: 120 / proporcional, fontSize: 16 / proporcional, fontWeight: 400, color: 'rgb(119, 119, 119)', fontFamily: 'Raleway, sans-serif',
                                lineHeight: `${18 / proporcional}px`, marginBottom: 16 / proporcional}}
                        placeholder='Mensaje'
                        value={mensaje}
                        onChange={(event) => setMensaje(event.target.value)}
                        id='mensaje'/>

            <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                <button className='btn' style={{width: 200 / proporcional, height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: boton_enviar ? 'rgb(239, 126, 50)' : 'white',
                    background: boton_enviar  ? 'white' : 'rgb(239, 126, 50)', border: '2px solid rgb(239, 126, 50)'}}
                    onMouseOver={() => setBotonEnviar(true)} onMouseLeave={() => setBotonEnviar(false)}>
                    Enviar mensaje
                </button>
            </div>
        </div>
    )
}