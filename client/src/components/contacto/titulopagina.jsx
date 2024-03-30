import React from 'react'

export default function TituloPagina({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 128 / proporcional, marginBottom: 40 / proporcional}}>
                <div style={{width: '100%', height: 33 / proporcional}}>
                    <p style={{fontSize: 30 / proporcional,  lineHeight: `${33 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(34, 34, 34)', fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600, textAlign: 'center'}}>
                        Déjanos tu mensaje
                    </p>
                    <div className='d-flex' style={{width: '100%', height: 4 / proporcional, marginBottom: 20 / proporcional}}>
                        <div style={{width: '45%', height: 2 / proporcional, background: '#f6f6f6'}}/>
                        <div style={{width: '10%', height: 2 / proporcional, background: 'rgb(239, 126, 50)'}}/>
                        <div style={{width: '45%', height: 2 / proporcional, background: '#f6f6f6'}}/>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 15 / proporcional,  lineHeight: `${27 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(119, 119, 119)', fontFamily: 'Raleway, sans-serif',
                            fontWeight: 400, textAlign: 'center'}}>
                            Si tieie alguna pregunta sobre los servicios que ofrecemos, simplemente utilice el siguiente formulario.<br/>
                            Intentamos responder a todos las consultas y comentarios en un plazo de 24 horas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}