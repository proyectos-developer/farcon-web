import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles.css'

import PanelHome from './components/home/panel.jsx'
import PanelHomeTablet from './components/home/paneltablet.jsx'
import PanelHomeCell from './components/home/panelcell.jsx'

function App() {
  const [width, setWidth] = useState (window.outerWidth)

  useEffect(() => {
    window.addEventListener('resize', handle_resize)

    return () => {
      window.removeEventListener('resize', handle_resize)
    }
  }, [])

  const handle_resize = () => {
    setWidth(window.outerWidth)
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={width < 500 ? <PanelHomeCell   proporcional={499 / width}/> : 
                                     width < 991 ? <PanelHomeTablet proporcional={991 / width}/> : 
                                                   <PanelHome       proporcional={1920 / width} />}>

            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
