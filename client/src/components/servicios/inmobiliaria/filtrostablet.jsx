import React, { useState } from 'react'

import box from '../../../assets/iconos/check_box_orange_96.png'
import check_box from '../../../assets/iconos/box_semi_grey_96.png'

import icono_location from '../../../assets/iconos/icono_location_grey_96.png'
import icono_ubicacion_orange from '../../../assets/iconos/icono_location_orange_96.png'

import icono_cama from '../../../assets/iconos/icono_cama_grey_96.png'
import icono_perimetro from '../../../assets/iconos/icono_perimetro_grey_96.png'
import icono_precio from '../../../assets/iconos/icono_precio_grey_96.png'
import icono_baño from '../../../assets/iconos/icono_baño_grey_96.png'

import icono_right from '../../../assets/iconos/icono_arrow_right_orange_96.png'

import icono_dot_grey from '../../../assets/iconos/icono_dot_grey_96.png'
import icono_dot_orange from '../../../assets/iconos/icono_dot_orange_96.png'
import { useNavigate } from 'react-router-dom'

export default function FiltrosTablet({proporcional}) {

    const navigate = useNavigate()

    const [nro_baños, setNroBaños] = useState(0)
    const [nro_cuartos, setNroCuartos] = useState(0)
    const [año_construccion, setAñoConstruccion] = useState(0)
    const [area_construida, setAreaConstruida] = useState(0)
    const [tipo_inmueble, setTipoInmueble] = useState('')
    const [nro_pisos, setNroPisos] = useState('')

    const [condicionado, setCondicionado] = useState (false)
    const [microondas, setMicroondas] = useState (false)
    const [gimnasio, setGiminasio] = useState (false)
    const [sauna, setSauna] = useState (false)
    const [cesped, setCesped] = useState (false)
    const [tv_cable, setTvCable] = useState (false)
    const [refrigerador, setRefrigerador] = useState (false)
    const [ventanas, setVentanas] = useState (false)


    const [piscina, setPiscina] = useState (false)
    const [secador, setSecador] = useState (false)
    const [wifi, setWifi] = useState (false)
    const [estacionamiento, setEstacionamiento] = useState (false)
    const [barbeque, setBarbeque] = useState (false)
    const [ducha, setDucha] = useState (false)
    const [lavanderia, setLavanderia] = useState (false)
    const [terraza, setTerraza] = useState (false)

    const [ubicacion, setUbicacion] = useState ('')

    const [seleccion_propiedad, setSeleccionPropiedad] = useState ('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <div style={{width: '31%', height: 50 / proporcional}}>
                        <select
                            className='form-select'
                            style={{width: '100%', height: 50 / proporcional, border: '1px solid rgb(132, 143, 168)', fontSize: 16  / proporcional, fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 400, color: '#f62621'}}
                            value={tipo_inmueble}
                            onChange={(value) => {value !== '0' ? setTipoInmueble(value) : setTipoInmueble(0)}}>
                            <option value='0'>Tipo inmmuele</option>
                            <option value='Oficina'>Oficina</option>
                            <option value='Local'>Local</option>
                            <option value='Departamento'>Departamento</option>
                            <option value='Casa'>Casa</option>
                        </select>
                    </div>

                    <div style={{width: '31%', height: 50 / proporcional}}>
                        <select
                            className='form-select'
                            style={{width: '100%', height: 50 / proporcional, border: '1px solid rgb(132, 143, 168)', fontSize: 16  / proporcional, fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 400, color: '#f62621'}}
                            value={nro_pisos}
                            onChange={(value) => {value !== '0' ? setNroPisos(value) : setNroPisos(0)}}>
                            <option value='0'>Número de pisos</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                        </select>
                    </div>

                    <div style={{width: '31%', height: 50 / proporcional}}>
                        <select
                            className='form-select'
                            style={{width: '100%', height: 50 / proporcional, border: '1px solid rgb(132, 143, 168)', fontSize: 16  / proporcional, fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 400, color: '#f62621'}}
                            value={area_construida}
                            onChange={(value) => {value !== '0' ? setAreaConstruida(value) : setAreaConstruida(0)}}>
                            <option value='0'>Área de construcción</option>
                            <option value='80'>80</option>
                            <option value='120'>120</option>
                            <option value='160'>160</option>
                            <option value='180'>180</option>
                            <option value='200'>200</option>
                        </select>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <div style={{width: '31%', height: 50 / proporcional}}>
                        <select
                            className='form-select'
                            style={{width: '100%', height: 50 / proporcional, border: '1px solid rgb(132, 143, 168)', fontSize: 16  / proporcional, fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 400, color: '#f62621'}}
                            value={nro_baños}
                            onChange={(value) => {value !== '0' ? setNroBaños(value) : setNroBaños(0)}}>
                            <option value='0'>Número de baños</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                        </select>
                    </div>

                    <div style={{width: '31%', height: 50 / proporcional}}>
                        <select
                            className='form-select'
                            style={{width: '100%', height: 50 / proporcional, border: '1px solid rgb(132, 143, 168)', fontSize: 16  / proporcional, fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 400, color: '#f62621'}}
                            value={nro_cuartos}
                            onChange={(value) => {value !== '0' ? setNroCuartos(value) : setNroCuartos(0)}}>
                            <option value='0'>Número de cuartos</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                        </select>
                    </div>                

                    <div style={{width: '31%', height: 50 / proporcional}}>
                        <select
                            className='form-select'
                            style={{width: '100%', height: 50 / proporcional, border: '1px solid rgb(132, 143, 168)', fontSize: 16  / proporcional, fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 400, color: '#f62621'}}
                            value={año_construccion}
                            onChange={(value) => {value !== '0' ? setAñoConstruccion(value) : setAñoConstruccion(0)}}>
                            <option value='0'>Año de construcción</option>
                            <option value='2024'>2024</option>
                            <option value='2023'>2023</option>
                            <option value='2022'>2022</option>
                            <option value='2021'>2021</option>
                            <option value='2020'>2020</option>
                            <option value='2019'>2019</option>
                        </select>
                    </div>
                </div>
            </div>

            <div style={{width: '100%', height: 'auto', marginBottom: 24 / proporcional, marginTop: 24 / proporcional}}>
                <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <p style={{fontSize: 24 / proporcional, fontWeight: 600, fontFamily: 'Roboto, serif', color: 'rgb(45, 57, 84)', marginBottom: 0, lineHeight: `${28 / proporcional}px`}}>
                        Comodidades incluidas
                    </p>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setCondicionado(!condicionado)}>
                            <img src={!condicionado ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Aire acondicionado
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setMicroondas(!microondas)}>
                            <img src={!microondas ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Microondas
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setGiminasio(!gimnasio)}>
                            <img src={!gimnasio ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Gimnasio
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setSauna(!sauna)}>
                            <img src={!sauna ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Sauna
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setCesped(!cesped)}>
                            <img src={!cesped ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Césped
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setTvCable(!tv_cable)}>
                            <img src={!tv_cable ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Tv Cable
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setRefrigerador(!refrigerador)}>
                            <img src={!refrigerador ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Refrigeradora
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setVentanas(!ventanas)}>
                            <img src={!ventanas ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Cortinas
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setPiscina(!piscina)}>
                            <img src={!piscina ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Piscina
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setSecador(!secador)}>
                            <img src={!secador ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Secador
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setDucha(!ducha)}>
                            <img src={!ducha ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Ducha
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setWifi(!wifi)}>
                            <img src={!wifi ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Wifi
                            </p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setTerraza(!terraza)}>
                            <img src={!terraza ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Terraza
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setBarbeque(!barbeque)}>
                            <img src={!barbeque ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Espacio para parrilla
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setEstacionamiento(!estacionamiento)}>
                            <img src={!estacionamiento ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Estacionamiento
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <div className='d-flex' style={{width: '33%', height: 24 / proporcional}}
                            onClick={() => setLavanderia(!lavanderia)}>
                            <img src={!lavanderia ? check_box : box} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Poppins, sans-serif', marginBottom: 0}}>
                                Lavandería
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{width: '100%', height: 'auto', marginTop: 24 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional}}>
                    <div className='d-flex' style={{width: '60%', height: 50 / proporcional, border: '1px solid rgb(206, 212, 218)'}}>
                        <div style={{width: '80%', height: 50 / proporcional}}>
                            <input 
                                type='default'
                                className='form-control border-0'
                                style={{width: '100%', height: 46 / proporcional, fontSize: 16 / proporcional, color: 'red', lineHeight: `${46 / proporcional}px`}}
                                value={ubicacion}
                                onChange={(event) => setUbicacion(event.target.value)}
                                placeholder='Ubicación'/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '20%', height: 50 / proporcional}}>
                            <img src={icono_location} style={{width: 24 / proporcional, height: 24 / proporcional, marginTop: 13 / proporcional, marginBottom: 13 / proporcional}}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '20%', height: 50 / proporcional}}>
                        <button className='btn' style={{width: 200 / proporcional, height: 50 / proporcional, fontSize: 16 / proporcional, color: 'white', background: 'rgb(239, 126, 50)'}}>
                            Buscar
                        </button>
                    </div>
                </div>
            </div>

            <div style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional}}>
                <div style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 98 / proporcional, marginBottom: 40 / proporcional}}>
                        <p style={{fontSize: 32 / proporcional, lineHeight: `${56 / proporcional}px`, color: 'rgb(45, 57, 84)', fontWeight: 700, fontFamily: 'Roboto, serif', marginBottom: 0,
                                textAlign: 'center'}}>
                            MEJORES PROPIEDADES
                        </p>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 4 / proporcional, marginBottom: 20 / proporcional}}>
                            <div style={{width: '10%', height: 4 / proporcional, background: 'rgb(239, 126, 50)'}}/>
                        </div>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0, color: 'rgb(95, 95, 95)', fontFamily: 'Poppins, sans-serif',
                                fontWeight: 300, textAlign: 'center'}}>
                            Propiedades cuidadosamente seleccionadas por nuestro equipo.
                        </p>
                    </div>
                </div>

                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                        <div className='shadow rounded' style={{width: '48%', height: 'auto', border: '1px solid #efefef'}}>
                            <div className='position-relative' style={{width: '100%', height: 302 / proporcional}}>
                                <div style={{width: '100%', height: 300 / proporcional, border: '1px solid #efefef', background: '#bdbdbd'}}
                                    onMouseOver={() => setSeleccionPropiedad('propiedad_uno')} onMouseLeave={() => setSeleccionPropiedad('')}/>
                                <div className='position-absolute' style={{width: 150 / proporcional, height: 40 / proporcional, top: 14 / proporcional, left: 21 / proporcional}}>
                                    <button className='border-0 rounded-pill' style={{width: 150 / proporcional, height: 40 / proporcional, background: 'rgb(239, 126, 50)', fontSize: 16 / proporcional,
                                        fontFamily: 'Poppins, sans-serif', fontWeight: 400, color: 'white', cursor: 'pointer', lineHeight: `${40 / proporcional}px`}}>
                                        Para rentar
                                    </button>
                                </div>
                                {
                                    seleccion_propiedad === 'propiedad_uno' ? (
                                        <div className='position-absolute' style={{width: 150 / proporcional, height: 40 / proporcional, top: 188 / proporcional, left: 21 / proporcional}}>
                                            <button className='border-0 rounded-pill' style={{width: 150 / proporcional, height: 40 / proporcional, background: 'rgba(23, 42, 76, 0.5)', fontSize: 16 / proporcional,
                                                fontFamily: 'Poppins, sans-serif', fontWeight: 400, color: 'white', cursor: 'pointer', lineHeight: `${40 / proporcional}px`}}>
                                                Hace 4 días
                                            </button>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontsize: 20 / proporcional, lineHeight: `${28 / proporcional}px`, fontFamily: 'Roboto, serif', fontWeight: 500, color: !seleccion_propiedad === 'propiedad_uno' ? 'red' : 'rgb(45, 57, 84)',
                                            marginBottom: 10 / proporcional}}>
                                        LUXURY Home In Globetown
                                    </p>
                                    <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                        <img src={icono_ubicacion_orange} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional}}/>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, color: 'rgb(152, 162, 184)', fontWeight: 300, fontFamily: 'Poppins, sans-serif',
                                            marginBottom: 20 / proporcional}}>
                                            Dirección de la casa o departamento
                                        </p>
                                    </div>
                                    <div style={{width: '100%', height: 'auto', marginBottom: 0}}>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                            <div className='d-flex justify-content-start' sytle={{width: '50%', height: 'auto'}}>
                                                <img src={icono_cama} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional}}/>
                                                <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0, color: 'rgb(132, 143, 168', fontWeight: 300, 
                                                    fontFamily: 'Poppins, sans-serif'}}>
                                                    4 camas
                                                </p>
                                            </div>
                                            <div className='d-flex justify-content-end' sytle={{width: '50%', height: 'auto'}}>
                                                <img src={icono_baño} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional}}/>
                                                <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0, color: 'rgb(132, 143, 168', fontWeight: 300, 
                                                    fontFamily: 'Poppins, sans-serif'}}>
                                                    2 baños
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                            <div className='d-flex justify-content-start' sytle={{width: '50%', height: 'auto'}}>
                                                <img src={icono_perimetro} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional}}/>
                                                <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0, color: 'rgb(132, 143, 168', fontWeight: 300, 
                                                    fontFamily: 'Poppins, sans-serif'}}>
                                                    Perímetro 180
                                                </p>
                                            </div>
                                            <div className='d-flex justify-content-end' sytle={{width: '50%', height: 'auto'}}>
                                                <img src={icono_precio} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional}}/>
                                                <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0, color: 'rgb(132, 143, 168', fontWeight: 300, 
                                                    fontFamily: 'Poppins, sans-serif'}}>
                                                    Precio S/. 17,200
                                                </p>
                                            </div>
                                        </div>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <div className='d-flex' style={{width: '100%', height: 'auto', cursor: 'pointer'}} 
                                                onClick={() => navigate ('/nuestros-servicios/inmobiliaria/lugar')}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, color: 'rgb(35, 35, 35)', marginBottom: 0, fontFamily: 'Poppins, sans-serif'}}>
                                                    Detalles de propiedad
                                                </p>
                                                <img src={icono_right} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow rounded' style={{width: '48%', height: 'auto', border: '1px solid #efefef'}}>
                            <div className='position-relative' style={{width: '100%', height: 302 / proporcional}}>
                                <div style={{width: '100%', height: 300 / proporcional, border: '1px solid #efefef', background: '#bdbdbd'}}
                                    onMouseOver={() => setSeleccionPropiedad('propiedad_dos')} onMouseLeave={() => setSeleccionPropiedad('')}/>
                                <div className='position-absolute' style={{width: 150 / proporcional, height: 40 / proporcional, top: 14 / proporcional, left: 21 / proporcional}}>
                                    <button className='border-0 rounded-pill' style={{width: 150 / proporcional, height: 40 / proporcional, background: 'rgb(239, 126, 50)', fontSize: 16 / proporcional,
                                        fontFamily: 'Poppins, sans-serif', fontWeight: 400, color: 'white', cursor: 'pointer', lineHeight: `${40 / proporcional}px`}}>
                                        Para rentar
                                    </button>
                                </div>
                                {
                                    seleccion_propiedad === 'propiedad_dos' ? (
                                        <div className='position-absolute' style={{width: 150 / proporcional, height: 40 / proporcional, top: 188 / proporcional, left: 21 / proporcional}}>
                                            <button className='border-0 rounded-pill' style={{width: 150 / proporcional, height: 40 / proporcional, background: 'rgba(23, 42, 76, 0.5)', fontSize: 16 / proporcional,
                                                fontFamily: 'Poppins, sans-serif', fontWeight: 400, color: 'white', cursor: 'pointer', lineHeight: `${40 / proporcional}px`}}>
                                                Hace 4 días
                                            </button>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontsize: 20 / proporcional, lineHeight: `${28 / proporcional}px`, fontFamily: 'Roboto, serif', fontWeight: 500, color: !seleccion_propiedad === 'propiedad_uno' ? 'red' : 'rgb(45, 57, 84)',
                                            marginBottom: 10 / proporcional}}>
                                        LUXURY Home In Globetown
                                    </p>
                                    <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                        <img src={icono_ubicacion_orange} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional}}/>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, color: 'rgb(152, 162, 184)', fontWeight: 300, fontFamily: 'Poppins, sans-serif',
                                            marginBottom: 20 / proporcional}}>
                                            Dirección de la casa o departamento
                                        </p>
                                    </div>
                                    <div style={{width: '100%', height: 'auto', marginBottom: 0}}>
                                    </div>          
                                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                        <div className='d-flex justify-content-start' sytle={{width: '50%', height: 'auto'}}>
                                            <img src={icono_cama} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional}}/>
                                            <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0, color: 'rgb(132, 143, 168', fontWeight: 300, 
                                                fontFamily: 'Poppins, sans-serif'}}>
                                                4 camas
                                            </p>
                                        </div>
                                        <div className='d-flex justify-content-end' sytle={{width: '50%', height: 'auto'}}>
                                            <img src={icono_baño} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional}}/>
                                            <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0, color: 'rgb(132, 143, 168', fontWeight: 300, 
                                                fontFamily: 'Poppins, sans-serif'}}>
                                                2 baños
                                            </p>
                                        </div>
                                    </div>
                                    </div>          
                                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                        <div className='d-flex justify-content-start' sytle={{width: '50%', height: 'auto'}}>
                                            <img src={icono_perimetro} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional}}/>
                                                <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0, color: 'rgb(132, 143, 168', fontWeight: 300, 
                                                    fontFamily: 'Poppins, sans-serif'}}>
                                                Perímetro 180
                                                </p>
                                        </div>
                                        <div className='d-flex justify-content-end' sytle={{width: '50%', height: 'auto'}}>
                                            <img src={icono_precio} style={{width: 16 / proporcional, height: 16 / proporcional, marginRight: 5 / proporcional}}/>
                                                <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0, color: 'rgb(132, 143, 168', fontWeight: 300, 
                                                    fontFamily: 'Poppins, sans-serif'}}>
                                                    Precio S/. 17,200
                                                </p>
                                        </div>
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex' style={{width: '100%', height: 'auto', cursor: 'pointer'}} 
                                            onClick={() => navigate ('/nuestros-servicios/inmobiliaria/lugar')}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, color: 'rgb(35, 35, 35)', marginBottom: 0, fontFamily: 'Poppins, sans-serif'}}>
                                                Detalles de propiedad
                                            </p>
                                            <img src={icono_right} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: 'auto', height: 'auto'}}>
                                <div style={{width: '10%', height: 40 / proporcional}}>
                                    <img src={icono_dot_grey} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                                </div>
                                <div style={{width: '10%', height: 40 / proporcional}}>
                                    <img src={icono_dot_orange} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                                </div>
                                <div style={{width: '10%', height: 40 / proporcional}}>
                                    <img src={icono_dot_grey} style={{width: 40 / proporcional, height: 40 / proporcional, cursor: 'pointer'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}