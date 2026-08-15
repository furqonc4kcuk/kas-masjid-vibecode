import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import PortalTransparansi from './pages/PortalTransparansi'
import BukuKas from './pages/BukuKas'

function App() {
  return (
    <BrowserRouter>
      <div className="antialiased min-h-screen flex">
        <Sidebar />
        <main className="flex-1 ml-64 flex flex-col min-h-screen">
          <TopBar />
          <Routes>
            <Route path="/" element={<PortalTransparansi />} />
            <Route path="/buku-kas" element={<BukuKas />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
