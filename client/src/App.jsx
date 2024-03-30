import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles.css'

import PanelHome from './components/panel.jsx'
import PanelHomeTablet from './components/paneltablet.jsx'
import PanelHomeCell from './components/panelcell.jsx'

import HomeBegin from './components/home/begin.jsx'
import HomeBeginTablet from './components/home/begintablet.jsx'
import HomeBeginCell from './components/home/begincell.jsx'

import SobreNosotros from './components/nosotros/begin.jsx'
import SobreNosotrosTablet from './components/nosotros/begintablet.jsx'
import SobreNosotrosCell from './components/nosotros/begincell.jsx'

import NuestrosServicios from './components/servicios/begin.jsx'
import NuestrosServiciosTablet from './components/servicios/begintablet.jsx'
import NuestrosServiciosCell from './components/servicios/begincell.jsx'

import Construccion from './components/servicios/construccion/begin.jsx'
import ConstruccionTablet from './components/servicios/construccion/begintablet.jsx'
import ConstruccionCell from './components/servicios/construccion/begincell.jsx'

import Inmobiliaria from './components/servicios/inmobiliaria/begin.jsx'
import InmobiliariaTablet from './components/servicios/inmobiliaria/begintablet.jsx'
import InmobiliariaCell from './components/servicios/inmobiliaria/begincell.jsx'

import DetallesSitio from './components/servicios/inmobiliaria/detalles/begin.jsx'
import DetallesSitioTablet from './components/servicios/inmobiliaria/detalles/begintablet.jsx'
import DetallesSitioCell from './components/servicios/inmobiliaria/detalles/begincell.jsx'

import Galeria from './components/galeria/begin.jsx'
import GaleriaTablet from './components/galeria/begintablet.jsx'
import GaleriaCell from './components/galeria/begincell.jsx'

import Contacto from './components/contacto/begin.jsx'
import ContactoTablet from './components/contacto/begintablet.jsx'
import ContactoCell from './components/contacto/begincell.jsx'

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

                <Route path='sobre-nosotros' element={width < 500 ? <SobreNosotrosCell   proporcional={499 / width}/> : 
                                                      width < 991 ? <SobreNosotrosTablet proporcional={991 / width}/> : 
                                                                    <SobreNosotros       proporcional={1920 / width} />}/>

                <Route path='nuestros-servicios/construccion' element={width < 500 ? <ConstruccionCell   proporcional={499 / width}/> : 
                                                                       width < 991 ? <ConstruccionTablet proporcional={991 / width}/> : 
                                                                                     <Construccion       proporcional={1920 / width} />}/>

                <Route path='nuestros-servicios' element={width < 500 ? <NuestrosServiciosCell   proporcional={499 / width}/> : 
                                                          width < 991 ? <NuestrosServiciosTablet proporcional={991 / width}/> : 
                                                                        <NuestrosServicios       proporcional={1920 / width} />}/>

                <Route path='nuestros-servicios/inmobiliaria' element={width < 500 ? <InmobiliariaCell   proporcional={499 / width}/> : 
                                                                       width < 991 ? <InmobiliariaTablet proporcional={991 / width}/> : 
                                                                                     <Inmobiliaria       proporcional={1920 / width} />}/>

                <Route path='nuestros-servicios/inmobiliaria/:detalles' element={width < 500 ? <DetallesSitioCell   proporcional={499 / width}/> : 
                                                                                 width < 991 ? <DetallesSitioTablet proporcional={991 / width}/> : 
                                                                                               <DetallesSitio       proporcional={1920 / width} />}/>


                <Route path='galeria' element={width < 500 ? <GaleriaCell   proporcional={499 / width}/> : 
                                               width < 991 ? <GaleriaTablet proporcional={991 / width}/> : 
                                                             <Galeria       proporcional={1920 / width} />}/>

                <Route path='contactanos' element={width < 500 ? <ContactoCell   proporcional={499 / width}/> : 
                                                   width < 991 ? <ContactoTablet proporcional={991 / width}/> : 
                                                                 <Contacto       proporcional={1920 / width} />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
