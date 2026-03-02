import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayouts from './componets/leyout/RootLayouts'
import Home from './componets/page/Home'
import About from './componets/page/About'
import Service from './componets/page/Service'
import Contact from './componets/page/Contact'
import Error from './componets/page/Error'







function App() {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App