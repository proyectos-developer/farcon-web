import React from 'react'

import BarraSuperiorCell from './barrasuperiorcell.jsx'
import MenuSuperiorCell from './menusuperiorcell.jsx'
import FooterCell from './footercell.jsx'
import FooterSocialCell from './footersocialcell.jsx'

import { Outlet } from 'react-router-dom'

export default function PanelHomeCell({proporcional}) {

    return (
        <div style={{width: '100%'}}>
            <BarraSuperiorCell proporcional={proporcional}/>
            <MenuSuperiorCell proporcional={proporcional}/>
            <Outlet/>
            <FooterCell proporcional={proporcional}/>
            <div style={{width: '100%', height: 1, background: 'rgba(255,255,255,0.10)'}}/>
            <FooterSocialCell proporcional={proporcional}/>
        </div>
    )
}
