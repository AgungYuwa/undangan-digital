import React from 'react'
import galeri2 from '@/assets/galeri2.JPG'

export default function Penutup() {
    return (
        <div className='bg-background'>
            <div
                className='h-screen bg-cover bg-center relative'
                style={{ backgroundImage: `url(${galeri2})` }}
            >
                <div className='absolute inset-0 bg-linear-to-t from-background to-transparent'></div>
            </div >
            <div className='grid grid-cols-1 space-y-6 justify-center items-end text-4xl sm:text-7xl text-white text-center px-14 sm:px-52'>
                <p className='font-great text-primary z-10 -mt-20 text-5xl'>Terima Kasih</p>
                <p className='font-diphy text-sm sm:text-xl'>Suatu kebahagian & kehormatan bagi kami, apabila Bapak/Ibuk/Saudara/i, berkenan hadir</p>
                <p className='font-diphy text-sm sm:text-xl'>Atas doa & restunya, kami ucapkan terima kasih.</p>
                <div className='my-10 sm:my-20'>
                    <p className='font-diphy text-primary'>Mega & Panji</p>
                </div>
            </div>
        </div>
    )
}
