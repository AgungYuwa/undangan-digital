import { MailOpen } from 'lucide-react'
import { Button } from './components/ui/button'
import { Sheet, SheetClose, SheetContent } from './components/ui/sheet'
import './index.css'
import Ayat from './layouts/ayat/Ayat'
import Galeri from './layouts/galeri/Galeri'
import Gift from './layouts/gift/Gift'
import Header from './layouts/header/Header'
import Jadwal from './layouts/jadwal/Jadwal'
import Pengantin from './layouts/pengantin/Pengantin'
import Penutup from './layouts/penutup/Penutup'

function App() {
  return (
    <div className='overflow-x-hidden h-screen'>
      <Header />
      <Ayat />
      <Pengantin />
      <Jadwal />
      <Galeri />
      <Gift />
      <Penutup />
    </div>
  )
}

export default App
