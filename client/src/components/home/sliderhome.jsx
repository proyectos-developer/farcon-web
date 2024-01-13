import React from 'react'

import home_image_0 from '../../assets/images/home_cero_1920.png'

export default function SliderHome({proporcional}) {
    return (
        <div className='' style={{width: '100%', height: 780 / proporcional,
            backgroundImage: `url(${home_image_0})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className='position-relative' style={{width: '100%', height: 780 / proporcional, background: 'rgba(26, 41, 72, 0.4'}}>
                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                    <p className='' style={{fontSize: 36 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', fontWeight: 400, 
                        fontFamily: 'Montserrat, sans-serif', textAlign: 'center', marginBottom: 20 / proporcional}}>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                    </p>
                    <p className='' style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', fontWeight: 500, 
                        fontFamily: 'Montserrat, sans-serif', textAlign: 'center', marginBottom: 20 / proporcional}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className='d-flex justify-content-center' style={{width: 'auto', height: 50 / proporcional}}>
                        <button className='rounded border-0 rounded' style={{width: 200 / proporcional, height: `${50 / proporcional}px`, background: '#e78138', 
                            color: 'white', fontSize: 16 / proporcional, fontWeight: 600, fontFamily: 'Raleway, sans-serif', marginRight: 20 / proporcional}}>
                                Nuestros servicios
                        </button>
                        <button className='rounded rounded' style={{width: 200 / proporcional, height: `${50 / proporcional}px`, border: '2px solid white', 
                            color: 'white', background: 'transparent', fontSize: 16 / proporcional, fontWeight: 600, fontFamily: 'Raleway, sans-serif', 
                            marginLeft: 20 / proporcional}}>
                                Sobre nosotros
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}