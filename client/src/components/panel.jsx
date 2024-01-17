import React from 'react'

import BarraSuperior from './barrasuperior.jsx'
import MenuSuperior from './menusuperior.jsx'
import Footer from './footer.jsx'
import FooterSocial from './footersocial.jsx'

import { Outlet } from 'react-router-dom'

export default function PanelHome({proporcional}) {

    return (
        <div style={{width: '100%'}}>
            <BarraSuperior proporcional={proporcional}/>
            <MenuSuperior proporcional={proporcional}/>
            <Outlet/>
            <Footer proporcional={proporcional}/>
            <div style={{width: '100%', height: 1, background: 'rgba(255,255,255,0.10)'}}/>
            <FooterSocial proporcional={proporcional}/>
        </div>
    )
}
