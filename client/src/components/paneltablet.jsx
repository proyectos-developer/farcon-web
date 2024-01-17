import React from 'react'

import BarraSuperiorTablet from './barrasuperiortablet.jsx'
import MenuSuperiorTablet from './menusuperiortablet.jsx'
import FooterTablet from './footertablet.jsx'
import FooterSocialTablet from './footersocialtablet.jsx'

import { Outlet } from 'react-router-dom'

export default function PanelHomeTablet({proporcional}) {

    return (
        <div style={{width: '100%'}}>
            <BarraSuperiorTablet proporcional={proporcional}/>
            <MenuSuperiorTablet proporcional={proporcional}/>
            <Outlet/>
            <FooterTablet proporcional={proporcional}/>
            <div style={{width: '100%', height: 1, background: 'rgba(255,255,255,0.10)'}}/>
            <FooterSocialTablet proporcional={proporcional}/>
        </div>
    )
}
