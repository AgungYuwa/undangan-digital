/* eslint-disable no-unused-vars */
import React from 'react'
import galeri from '@/assets/galeri.JPG'
import galeri1 from '@/assets/galeri1.JPG'
import galeri2 from '@/assets/galeri2.JPG'
import galeri3 from '@/assets/galeri3.JPG'
import galeri4 from '@/assets/galeri4.JPG'
import galeri5 from '@/assets/galeri5.JPG'
import { motion } from "motion/react"


export default function Galeri() {
    return (
        <div className='relative px-14 py-12 sm:px-52 sm:py-32'>
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
                <div className='text-white text-5xl sm:text-7xl text-center mb-20'>
                    <p className='font-gloock'>Our</p>
                    <p className='font-great text-5xl sm:text-8xl -mt-3 sm:-mt-4 text-primary'>Gallery</p>
                </div>
            </motion.div>
            <div className='grid sm:grid-cols-4 gap-2 sm:gap-5'>
                <motion.div
                    className='col-span-2'
                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                            duration: 0.9,
                            ease: [0, 0.9, 0.9, 1]
                        }
                    }}
                >
                    <img src={galeri} alt="" className='border-2 border-primary  rounded-2xl sm:rounded-4xl transition hover:scale-110 ' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                            duration: 0.9,
                            ease: [0, 0.9, 0.9, 1]
                        }
                    }}
                >
                    <img src={galeri2} alt="" className='border-2 border-primary rounded-2xl sm:rounded-4xl transition hover:scale-110' />
                    {/* <img src={galeri3} alt="" className='border-2 border-primary rounded-2xl sm:rounded-4xl transition hover:scale-110 col-span-2' /> */}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                            duration: 0.9,
                            ease: [0, 0.9, 0.9, 1]
                        }
                    }}
                >
                    <img src={galeri1} alt="" className='border-2 border-primary rounded-2xl sm:rounded-4xl transition hover:scale-110' />
                    {/* <img src={galeri2} alt="" className='border-2 border-primary rounded-2xl sm:rounded-4xl transition hover:scale-110' /> */}
                </motion.div>
                <motion.div
                    className='col-span-2'
                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                            duration: 0.9,
                            ease: [0, 0.9, 0.9, 1]
                        }
                    }}
                >
                    <img src={galeri3} alt="" className='border-2 border-primary rounded-2xl sm:rounded-4xl transition hover:scale-110 col-span-2' />
                    {/* <img src={galeri1} alt="" className='border-2 border-primary rounded-2xl sm:rounded-4xl transition hover:scale-110' /> */}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                            duration: 0.9,
                            ease: [0, 0.9, 0.9, 1]
                        }
                    }}
                >
                    <img src={galeri4} alt="" className='border-2 border-primary rounded-2xl sm:rounded-4xl transition hover:scale-110' />
                </motion.div>
                <motion.div

                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                            duration: 0.9,
                            ease: [0, 0.9, 0.9, 1]
                        }
                    }}
                >
                    <img src={galeri5} alt="" className='border-2 border-primary rounded-2xl sm:rounded-4xl transition hover:scale-110' />
                </motion.div>
            </div>
        </div>
    )
}
