import React from 'react'

import icono_twitter from '../assets/iconos/icono_twitter_white_96.png'
import icono_facebook from '../assets/iconos/icono_facebook_white_96.png'
import icono_instagram from '../assets/iconos/icono_instagram_white_96.png'
import icono_tiktok from '../assets/iconos/icono_tiktok_white_96.png'

export default function FooterSocial({proporcional}) {

    return (
        <div className='' style={{width: '100%', paddingRight: 60 / proporcional, paddingLeft: 60 / proporcional, paddingTop: 22 / proporcional, 
            background: '#1b2848', paddingBottom: 22/ proporcional}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 16 / proporcional, fontWeight:400, color: '#afafb5', lineHeight: `${28 / proporcional}px`, fontFamily: 'Relaway, sans-serif',
                    marginBottom: 0}}>Copyright @ 2024 <span style={{color: 'red'}}>Developer Ideas</span></p>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <img src={icono_facebook} style={{width: 28 / proporcional, height: 28 / proporcional, marginRight: 20 / proporcional}}/>
                <img src={icono_twitter} style={{width: 28 / proporcional, height: 28 / proporcional, marginRight: 20 / proporcional}}/>
                <img src={icono_instagram} style={{width: 28 / proporcional, height: 28 / proporcional, marginRight: 20 / proporcional}}/>
                <img src={icono_tiktok} style={{width: 28 / proporcional, height: 28 / proporcional}}/>
            </div>
        </div>
    )
}