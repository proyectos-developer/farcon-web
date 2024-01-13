import React from 'react'

import BarraSuperior from './barrasuperior.jsx'
import MenuSuperior from './menusuperior.jsx'
import { Outlet } from 'react-router-dom'

export default function PanelHome({proporcional}) {

    return (
        <div style={{width: '100%'}}>
            <BarraSuperior proporcional={proporcional}/>
            <MenuSuperior proporcional={proporcional}/>
            <Outlet/>
        </div>
    )
}
