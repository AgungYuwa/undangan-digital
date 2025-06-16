/* eslint-disable no-unused-vars */
import React from 'react'
import mandiri from "@/assets/mandiri.png"
import dana from "@/assets/dana.png"
import bni from "@/assets/bni.png"
import { Button } from '@/components/ui/button'
import { motion } from "motion/react"
import gift from "@/assets/gift.JPG"

export default function Gift() {
    return (
        <div className=' relative overflow-hidden'>
            <div className='flex flex-col justify-center text-center w-full px-14 py-12 sm:px-52 sm:py-32 font-diphy text-5xl sm:text-7xl text-white space-y-6'>
                <div className='border-2 border-primary bg-cover bg-center rounded-2xl py-10 px-10 sm:py-20 sm:px-20 z-10' style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url('${gift}')`
                }}>

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
                        <div className='mb-8'>
                            <p className='font-gloock'>Wedding</p>
                            <p className='font-great text-primary'>Gift</p>
                        </div>
                    </motion.div>
                    <div className='text-sm sm:text-2xl mb-8'>
                        <p>Doa restu Bapak/Ibuk/Saudara/i merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih, Bapak/Ibuk/Saudara/i dapat memberi kado secara cashless.</p>
                    </div>
                    <div className='grid sm:grid-cols-2 gap-4'>
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
                            <div className='bg-gray-200 flex flex-col justify-center items-center p-2 sm:p-5 rounded-2xl sm:rounded-4xl inset-shadow-sm inset-shadow-gray-700 inset-ring-1 inset-ring-gray-900/50'>
                                <img src={mandiri} alt="" className='scale-50' />
                                <div className='text-sm sm:text-xl text-black font-diphy tracking-widest space-y-2 p-1'>
                                    <div>
                                        <p className='text-xs'>1080026325929</p>
                                        <p className='text-xssm:text-xl'>Mega Aulia Hidayat
                                        </p>
                                    </div>
                                    <Button size='xs' className='bg-background text-white hover:bg-background/70 cursor-pointer text-xs px-2 py-1'>Salin Kode</Button>
                                </div>
                            </div>
                        </motion.div>
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
                            <div className='bg-gray-200 flex flex-col justify-center items-center p-2 sm:p-5 rounded-2xl sm:rounded-4xl inset-shadow-sm inset-shadow-gray-700 inset-ring-1 inset-ring-gray-900/50'>
                                <img src={bni} alt="" className='scale-50' />
                                <div className='text-sm sm:text-xl text-black font-diphy tracking-widest space-y-2 p-1'>
                                    <div>
                                        <p className='text-xs'>1910574611</p>
                                        <p className='text-xssm:text-xl'>Mega Aulia Hidayat
                                        </p>
                                    </div>
                                    <Button size='xs' className='bg-background text-white hover:bg-background/70 cursor-pointer text-xs px-2 py-1'>Salin Kode</Button>
                                </div>
                            </div>
                        </motion.div>
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
                            <div className='bg-gray-200 flex flex-col justify-center items-center p-2 sm:p-5 rounded-2xl sm:rounded-4xl inset-shadow-sm inset-shadow-gray-700 inset-ring-1 inset-ring-gray-900/50'>
                                <img src={dana} alt="" className='scale-50' />
                                <div className='text-sm sm:text-xl text-black font-diphy tracking-widest space-y-2 p-1'>
                                    <div>
                                        <p className='text-xs'>082170584400</p>
                                        <p className='text-xssm:text-xl'>Mega Aulia Hidayat
                                        </p>
                                    </div>
                                    <Button size='xs' className='bg-background text-white hover:bg-background/70 cursor-pointer text-xs px-2 py-1'>Salin Kode</Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
    )
}
