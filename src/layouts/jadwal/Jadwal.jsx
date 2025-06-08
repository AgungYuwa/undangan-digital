/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import location from "@/assets/location.png"
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react"
import { Button } from '@/components/ui/button'
import batikRight from "@/assets/batik-right.png"
import batikLeft from "@/assets/batik-left.png"
import akad from "@/assets/akad.JPG"
import resepsi from "@/assets/resepsi.JPG"
import cover from "@/assets/cover.JPG"


export default function Jadwal() {
    const eventTime = new Date("July 27 2025").getTime()
    const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))
    const ref = useRef(null)
    const isInView = useInView(ref)
    const count1 = useMotionValue(0)
    const rounded1 = useTransform(() => Math.round(count1.get()))
    const ref1 = useRef(null)
    const isInView1 = useInView(ref1)

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const timeLeft = eventTime - now

            if (timeLeft < 0) {
                clearInterval(interval)
                return
            }
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

            setTimer({ days, hours, minutes, seconds })
        }, 1000)

        return () => clearInterval(interval)
    }, [eventTime])

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, 27, { duration: 3, })
            return () => controls.stop()
        }
        if (isInView1) {
            const controls1 = animate(count1, 27, { duration: 3, })
            return () => controls1.stop()
        }
    }, [isInView, isInView1, count, count1])
    return (
        <div className='relative overflow-hidden'>
            {/* <img src={batikLeft} alt="" className='absolute -top-5 -left-25 w-1/2' />
            <img src={batikRight} alt="" className='absolute -top-5 -right-25 w-1/2' />

            <img src={batikLeft} alt="" className='absolute top-300 -left-25 w-1/2' />
            <img src={batikRight} alt="" className='absolute top-300 -right-25 w-1/2' />

            <img src={batikLeft} alt="" className='absolute -bottom-5 -left-25 w-1/2' />
            <img src={batikRight} alt="" className='absolute -bottom-5 -right-25 w-1/2' /> */}

            <div className='flex flex-col justify-center text-center w-full px-14 py-12 sm:px-52 sm:py-32 font-diphy text-5xl sm:text-7xl text-white space-y-6 '>
                <div
                    className='absolute inset-0 bg-center bg-cover'
                    style={{
                        backgroundImage: `url('${akad}')`,
                        opacity: 0.2, // set opacity gambar di sini
                        zIndex: 0
                    }}
                ></div>
                <div
                    className='absolute inset-0'
                    style={{
                        backgroundImage: `
        linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 50%, transparent 50%, rgba(0,0,0,0.5))
      `,
                        zIndex: 1
                    }}
                ></div>
                <div className='bg-primary/80 rounded-2xl py-10 px-8 sm:py-20 z-10'>
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
                            <p className='font-great text-primary-foreground'>Event</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0.5, scale: 0 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 0.9,
                                delay: 1,
                                ease: [0, 0.9, 0.9, 1]
                            }
                        }}
                    >
                        <div className='flex justify-evenly items-center gap-5 sm:gap-16 text-xl'>
                            <div className='flex flex-col'>
                                <p className='font-gloock tracking-wider'>{timer.days}</p>
                                <p className='text-sm sm:text-4xl'>Hari</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-gloock tracking-wider'>{timer.hours}</p>
                                <p className='text-sm sm:text-4xl'>Jam</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-gloock tracking-wider'>{timer.minutes}</p>
                                <p className='text-sm sm:text-4xl'>Menit</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-gloock tracking-wider'>{timer.seconds}</p>
                                <p className='text-sm sm:text-4xl'>Detik</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className='grid sm:grid-cols-2 gap-7 z-10'>
                    <div className='border-2 border-primary bg-center bg-cover rounded-2xl py-10 px-5' style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url('${akad}')`
                    }}>
                        <motion.div
                            initial={{ opacity: 0.5, scale: 0 }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 0.9,
                                    ease: [0, 0.9, 0.9, 1]
                                }
                            }}
                        >
                            <div className='mb-8'>
                                <p className='font-gloock'>Akad</p>
                                <p className='font-great text-primary -mt-3'>Nikah</p>
                            </div>
                        </motion.div>
                        <div className='space-y-4'>
                            <motion.p
                                ref={ref}
                                className='font-gloock text-5xl'
                                initial={{ opacity: 0, scale: 0, y: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        ease: [0, 0.9, 0.9, 1]
                                    }
                                }}
                                viewport={{ amount: 0.7 }}
                            >
                                {rounded}
                            </motion.p>
                            <motion.p
                                className='text-xl'
                                initial={{ opacity: 0, scale: 0, y: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.7,
                                        ease: [0, 0.9, 0.9, 1]
                                    }
                                }}
                                viewport={{ amount: 0.7 }}
                            >
                                Juli 2025
                            </motion.p>
                            <motion.p
                                className='text-xl'
                                initial={{ opacity: 0, scale: 0, y: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.7,
                                        ease: [0, 0.9, 0.9, 1]
                                    }
                                }}
                                viewport={{ amount: 0.7 }}
                            >
                                Pukul 08.00 - 10.00 WIB
                            </motion.p>
                        </div>
                        <div className='my-5 '>
                            <img src={location} alt="" />
                        </div>
                        <div className='space-y-4'>
                            <p className='text-2xl'>Gedung Kubung 13</p>
                            <p className='text-xl'>Jln. Ix Korong, Lubuk Sikarah, Kota Solok, Sumatera Barat</p>
                            <Button className='text-black'>
                                <a href="https://maps.app.goo.gl/imyp4RkPpJ3zmJKx6">
                                    Lihat Lokasi
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className='border-2 border-primary bg-center bg-cover rounded-2xl py-10 px-5' style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url('${resepsi}')`
                    }}>
                        <motion.div
                            initial={{ opacity: 0.5, scale: 0 }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 0.9,
                                    ease: [0, 0.9, 0.9, 1]
                                }
                            }}
                        >
                            <div className='mb-8'>
                                <p className='font-gloock'>Resepsi</p>
                                <p className='font-great text-primary -mt-3'>Pernikahan</p>
                            </div>
                        </motion.div>
                        <div className='space-y-4'>
                            <motion.p
                                ref={ref1}
                                className='font-gloock text-5xl'
                                initial={{ opacity: 0, scale: 0, y: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        ease: [0, 0.9, 0.9, 1]
                                    }
                                }}
                                viewport={{ amount: 0.7 }}
                            >
                                {rounded1}
                            </motion.p>
                            <motion.p
                                className='text-xl'
                                initial={{ opacity: 0, scale: 0, y: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.7,
                                        ease: [0, 0.9, 0.9, 1]
                                    }
                                }}
                                viewport={{ amount: 0.7 }}
                            >
                                Juli 2025
                            </motion.p>
                            <motion.p
                                className='text-xl'
                                initial={{ opacity: 0, scale: 0, y: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.7,
                                        ease: [0, 0.9, 0.9, 1]
                                    }
                                }}
                                viewport={{ amount: 0.7 }}
                            >
                                Pukul 10.00 - Selesai
                            </motion.p>
                        </div>
                        <div className='my-5 '>
                            <img src={location} alt="" />
                        </div>
                        <div className='space-y-4'>
                            <p className='text-2xl'>Gedung Kubung 13</p>
                            <p className='text-xl'>Jln. Ix Korong, Lubuk Sikarah, Kota Solok, Sumatera Barat</p>
                            <Button className='text-black'>
                                <a href="https://maps.app.goo.gl/imyp4RkPpJ3zmJKx6">
                                    Lihat Lokasi
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
