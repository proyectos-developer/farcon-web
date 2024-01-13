import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles.css'

import PanelHome from './components/panel.jsx'
import PanelHomeTablet from './components/paneltablet.jsx'
import PanelHomeCell from './components/panelcell.jsx'

import HomeBegin from './components/home/begin.jsx'
import HomeBeginTablet from './components/home/begintablet.jsx'
import HomeBeginCell from './components/home/begincell.jsx'

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
                <Route index element={width < 500 ? <HomeBeginCell   proporcional={499 / width}/> : 
                                      width < 991 ? <HomeBeginTablet proporcional={991 / width}/> : 
                                                    <HomeBegin       proporcional={1920 / width} />}/>

            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
