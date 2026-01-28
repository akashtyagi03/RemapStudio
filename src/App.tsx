import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { Landing } from "./pages/Landing"
import { ServiceDetail } from "./pages/ServiceDetail"
import { ScrollToTop } from "./ScrollToTop"
import { Contactus } from "./pages/Contactus"
import { Toaster } from 'sonner';
import { AboutPage } from "./pages/Aboutpage"
import { PortfolioPage } from "./pages/PortfolioPage"

function App() {

  return (
    <>
    <Toaster 
        theme="dark" 
        position="bottom-right" 
        toastOptions={{
          style: { 
            background: '#18181b',
            border: '1px solid #27272a', 
            color: '#fff' 
          },
        }} 
      />
    <BrowserRouter>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
