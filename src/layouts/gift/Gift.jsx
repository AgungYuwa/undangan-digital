/* eslint-disable no-unused-vars */
import React from 'react'
import bri from "@/assets/bri.png"
import { Button } from '@/components/ui/button'
import { motion } from "motion/react"
import batikRight from "@/assets/batik-right.png"
import batikLeft from "@/assets/batik-left.png"

export default function Gift() {
    return (
        <div className=' relative overflow-hidden'>
            {/* <img src={batikLeft} alt="" className='absolute -top-30 -left-25 w-1/2' />
            <img src={batikRight} alt="" className='absolute -top-30 -right-25 w-1/2' />
            <img src={batikLeft} alt="" className='absolute -bottom-30 -left-25 w-1/2' />
            <img src={batikRight} alt="" className='absolute -bottom-30 -right-25 w-1/2' /> */}

            <div className='flex flex-col justify-center text-center w-full px-14 py-12 sm:px-52 sm:py-32 font-diphy text-5xl sm:text-7xl text-white space-y-6'>
                <div className='bg-background rounded-2xl py-10 px-10 sm:py-20 sm:px-20 z-10'>
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
                        <p>Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</p>
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
                            <div className='bg-gray-200 grid grid-cols-2 p-2 sm:p-5 rounded-2xl sm:rounded-4xl inset-shadow-sm inset-shadow-gray-700 inset-ring-1 inset-ring-gray-900/50 items-center'>
                                <img src={bri} alt="" className='scale-50' />
                                <div className='text-sm sm:text-xl text-black font-diphy tracking-widest space-y-4'>
                                    <div>
                                        <p className='text-xs'>1234567890</p>
                                        <p className='text-xs sm:text-xl'>Panji Ravidra</p>
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
                            <div className='bg-gray-200 grid grid-cols-2 p-2 sm:p-5 rounded-2xl sm:rounded-4xl inset-shadow-sm inset-shadow-gray-700 inset-ring-1 inset-ring-gray-900/50 items-center'>
                                <img src={bri} alt="" className='scale-50' />
                                <div className='text-sm sm:text-xl text-black font-diphy tracking-widest space-y-4'>
                                    <div>
                                        <p className='text-xs'>1234567890</p>
                                        <p className='text-xs sm:text-xl'>Panji Ravidra</p>
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
