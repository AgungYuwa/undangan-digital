/* eslint-disable no-unused-vars */
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
import AudioButton from './components/ui/audio'
import { useState } from 'react'
import OpeningScreen from './layouts/opening/Opening'
import { motion } from "motion/react"

function App() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <div className='overflow-x-hidden h-screen' >
        {!isOpened && <OpeningScreen onOpen={() => setIsOpened(true)} />}
        {isOpened && (
          <>
            <AudioButton />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Header />
            </motion.div>
            <Ayat />
            <Pengantin />
            <Jadwal />
            <Galeri />
            <Gift />
            <Penutup />
          </>
        )}
      </div>
    </>
  )
}

export default App
