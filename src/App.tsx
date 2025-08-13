
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { About, AiFeatures, ContactUs, ForDoctors, ForPatients, Home, NotFound } from './pages'
import { Footer, Navbar } from './components'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="app w-full h-full min-h-screen">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/for-patients' element={<ForPatients />} />
            <Route path='/for-doctors' element={<ForDoctors />} />
            <Route path='/ai-features' element={<AiFeatures />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
