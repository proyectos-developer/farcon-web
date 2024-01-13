import React from 'react'

import BarraSuperiorCell from './barrasuperiorcell.jsx'
import { Outlet } from 'react-router-dom'

export default function PanelHomeCell({proporcional}) {

    return (
        <div style={{width: '100%'}}>
            <BarraSuperiorCell/>
            <Outlet/>
        </div>
    )
}
