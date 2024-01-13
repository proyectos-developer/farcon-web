import React from 'react'

import BarraSuperiorTablet from './barrasuperiortablet.jsx'
import { Outlet } from 'react-router-dom'

export default function PanelHome({proporcional}) {

    return (
        <div style={{width: '100%'}}>
            <BarraSuperiorTablet/>
            <Outlet/>
        </div>
    )
}
