/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import element1 from "@/assets/element1.png"
import element2 from "@/assets/element2.png"
import ornamentR from "@/assets/ornament-right.png"
import ornamentL from "@/assets/ornament-left.png"
import cover from "@/assets/cover.JPG"
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react"
import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";
import { MailOpen } from "lucide-react";
import galeri from "@/assets/galeri.JPG"


export default function Header() {
    return (
        <>
            {/* <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.9,
                        delay: 0.2,
                        ease: [0, 0.9, 0.9, 1],

                    }}
                >
                    <div className="absolute -top-2 flex justify-between">
                        <img src={element2} alt="" className="w-1/3 sm:w-1/7" />
                        <img src={element1} alt="" className="w-1/3 sm:w-1/7" />
                    </div>
                </motion.div>

                <div className="min-w-full h-screen flex flex-col sm:flex-row justify-center gap-5 sm:gap-40 items-center text-center">
                    <motion.img
                        src={cover}
                        className="bg-gradient-to-b from-primary to-primary-foreground w-1/2 sm:w-1/5 rounded-tl-full rounded-tr-full p-1"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.8,
                            ease: [0, 0.9, 0.9, 1]
                        }}
                    >
                    </motion.img>
                    <div className="text-white font-diphy text-center">
                        <motion.p
                            className="text-xl"
                            initial={{ opacity: 0, scale: 0, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                duration: 0.9,
                                delay: 1.5,
                                ease: [0, 0.9, 0.9, 1]
                            }}
                        >
                            The Wedding Of
                        </motion.p>
                        <motion.p
                            className="text-5xl sm:text-6xl mb-5 font-medium"
                            initial={{ opacity: 0, scale: 0, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                duration: 0.9,
                                delay: 1.8,
                                ease: [0, 0.9, 0.9, 1]
                            }}
                        >
                            Mega & Panji
                        </motion.p>
                        <motion.p
                            className="text-xl"
                            initial={{ opacity: 0, scale: 0, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                duration: 0.9,
                                delay: 2,
                                ease: [0, 0.9, 0.9, 1]
                            }}
                        >
                            27 . 07 . 2025
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.9,
                        delay: 0.2,
                        ease: [0, 0.9, 0.9, 1],

                    }}
                >
                    <img src={ornamentR} alt="" className="w-1/3 sm:w-1/7 absolute -bottom-4 -left-5 sm:-bottom-6 sm:-left-10 -z-10" />
                    <img src={ornamentL} alt="" className="w-1/3 -bottom-4 -right-5 sm:w-1/7 absolute sm:-bottom-6 sm:-right-10 -z-10" />
                </motion.div>
            </div > */}
            <div className="relative">
                <div className='bg-background'>
                    <div
                        className='h-screen bg-cover bg-center relative'
                        style={{ backgroundImage: `url(${cover})` }}
                    >
                        <div className='absolute inset-0 bg-linear-to-t from-background to-transparent'></div>
                    </div>
                </div>
                <div className='absolute bottom-30 flex justify-center items-end text-5xl sm:text-7xl text-white text-center px-14 sm:px-52'>
                    <div className="text-white font-diphy text-center">
                        <p className="text-xl">The Wedding Of</p>
                        <p className="text-5xl sm:text-6xl mb-5 font-medium"> Mega & Panji</p>
                        <p className="text-xl">27 . 07 . 2025</p>
                    </div>
                </div>
            </div>
        </>
    );
}
