/* eslint-disable no-unused-vars */
import React from 'react'
import ornamentR from "@/assets/ornament-right.png"
import ornamentL from "@/assets/ornament-left.png"
import bride from "@/assets/bride2.JPG"
import groom from "@/assets/groom.JPG"
import { motion } from "motion/react"

export default function Pengantin() {
    return (
        <div className='relative px-14 py-12 sm:px-52 sm:py-32'>
            <div>
                <img src={ornamentR} alt="" className="w-1/3 sm:w-1/7 absolute  -left-4 -top-5 sm:-left-6 sm:-top-7 -z-10 rotate-90" />
                <img src={ornamentL} alt="" className="w-1/3 sm:w-1/7 absolute  -right-4 -top-5 sm:-right-6 sm:-top-7 -z-10 -rotate-90" />
            </div>
            <motion.div
                initial={{ opacity: 0.5, scale: 0 }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: 0.9,
                        delay: 0.5,
                        ease: [0, 0.9, 0.9, 1]
                    }
                }}
            >
                <div className='text-white text-5xl sm:text-7xl text-center mb-5'>
                    <p className='font-gloock'>Bride</p>
                    <p className='font-great text-7xl sm:text-8xl -mt-3 -mb-10 sm:-mt-4 sm:-mb-14 text-primary'>&</p>
                    <p className='font-gloock'>Groom</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.9,
                        delay: 0.9,
                        ease: [0, 0.5, 0.7, 1]
                    }
                }}
            >
                <div className='text-white font-diphy text-center text-sm sm:text-2xl flex justify-center mb-5 sm:mb-36'>
                    <div className='sm:w-1/2'>
                        <p>Assalamualaikum Wr. Wb. <br />Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra-putri kami:</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.9,
                        delay: 1,
                        type: 'spring',
                        stiffness: 50
                    }
                }}
            >
                <div className='flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 items-center text-white mb-10 text-center'>
                    <img src={bride} alt="" className="bg-gradient-to-b from-primary to-primary-foreground w-2/3 sm:w-1/3 rounded-tl-full rounded-tr-full p-1 hover:scale-110 transition ease-in-out duration-300" />
                    <div className='text-xl sm:text-2xl font-diphy'>
                        <p className='text-2xl text-center mb-1 sm:text-6xl'>Panji Ravidra</p>
                        <p className='text-sm'>Putra dari Bapak Afnizul
                            & Ibu Wasmarni</p>
                    </div>
                </div>
            </motion.div>

            <div className='text-center text-primary'>
                <p className='font-great text-6xl mb-3'>&</p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.9,
                        delay: 1,
                        type: 'spring',
                        stiffness: 50
                    }
                }}
            >
                <div className='flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 items-center text-white text-center mb-20'>
                    <img src={groom} alt="" className="bg-gradient-to-b from-primary to-primary-foreground w-2/3 sm:w-1/3 rounded-tl-full rounded-tr-full p-1 hover:scale-110 transition ease-in-out duration-300" />
                    <div className='text-xl sm:text-xl font-diphy'>
                        <p className='text-2xl text-center mb-2 sm:text-6xl'>Mega Aulia Hidayat</p>
                        <p className='text-sm'>Putra dari Bapak M. Hidayat
                            & Ibu Mardelina</p>
                    </div>
                </div>
            </motion.div>

            <div>
                <img src={ornamentR} alt="" className="w-1/3 -left-5 -bottom-4 sm:w-1/7 absolute sm:-left-6 sm:-bottom-12 -z-10" />
                <img src={ornamentL} alt="" className="w-1/3 -right-5 -bottom-4 sm:w-1/7 absolute sm:-right-6 sm:-bottom-12 -z-10" />
            </div>
        </div>
    )
}
