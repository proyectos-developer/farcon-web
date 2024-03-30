import React from 'react'

import image_00 from '../../assets/images/servicios_construccion.png'
import image_01 from '../../assets/images/servicios_inmobiliaria.png'

export default function SliderServicios({proporcional}) {

    return (
        <div style={{width: '100%', height: 750 / proporcional}}>
            <div id='carouselServicios' className='carousel slide'>
                <div className='carousel-indicators'>
                    <button type='button' data-bs-target='#carouselServicios' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'/>
                    <button type='button' data-bs-target='#carouselServicios' data-bs-slide-to='1' aria-label='Slide 2'/>
                </div>
                <div className='carousel-inner' style={{width: '100%', height: 750 / proporcional}}>
                    <div className='carousel-item active' data-bs-interval='2000'
                        style={{backgroundImage: `url(${image_00})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100',
                                height: 750 / proporcional}}>
                        <div style={{width: '100%', height: 750 / proporcional, background: 'rgb(26, 41, 72, 0.6)'}}>

                        </div>
                    </div>
                    <div className='carousel-item' data-bs-interval='2000'
                        style={{backgroundImage: `url(${image_01})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100',
                                height: 750 / proporcional}}>
                        <div style={{width: '100%', height: 750 / proporcional, background: 'rgb(26, 41, 72, 0.6)'}}>

                        </div>
                    </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselServicios' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'/>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselServicios' data-bs-slide='prev'>
                    <span className='carousel-control-next-icon' aria-hidden='true'/>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    )
}