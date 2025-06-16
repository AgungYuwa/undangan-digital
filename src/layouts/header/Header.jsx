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
            <div className="relative">
                <div className='bg-background'>
                    <div
                        className='h-screen bg-cover bg-center relative'
                        style={{ backgroundImage: `url(${cover})` }}
                    >
                        <div className='absolute inset-0 bg-linear-to-t from-background to-transparent'></div>
                    </div>
                </div>
                <div className='absolute bottom-30 flex justify-center items-end text-5xl sm:text-7xl text-white text-center px-12 sm:px-52 w-full'>
                    <div className="text-white font-diphy text-center">
                        <p className="text-xl">The Wedding Of</p>
                        <p className="text-4xl sm:text-6xl mb-5 font-medium"> Mega & Panji</p>
                        <p className="text-xl">27 . 07 . 2025</p>
                    </div>
                </div>
            </div>
        </>
    );
}
