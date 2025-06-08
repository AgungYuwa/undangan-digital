/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "motion/react"
import RumahGadang from "@/assets/rumahgadang.png"
import batikLeft from "@/assets/batik-left.png"
import batikRight from "@/assets/batik-right.png"

export default function Ayat() {
    return (
        <div className='text-white relative overflow-hidden'>
            {/* <img src={batikLeft} alt="" className='absolute -bottom-12 -left-15 w-32' />
            <img src={batikRight} alt="" className='absolute -bottom-12 -right-15 w-32' /> */}
            <div className='flex flex-col justify-center text-center w-full px-14 py-8 sm:px-52 sm:py-32 font-diphy text-sm sm:text-2xl'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.9,
                            ease: [0, 0.9, 0.9, 1],
                        }
                    }}
                >
                    <div className='flex justify-center mb-6'>
                        <img src={RumahGadang} alt="" className='w-1/3 sm:w-xs' />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: {
                            duration: 0.9,
                            ease: [0, 0.9, 0.9, 1],
                            delay: 0.8
                        }
                    }}
                    viewport={{ amount: 0.8 }}
                >
                    <p className='mb-5'>“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”</p>
                    <p>~Ar Rum 21~</p>
                </motion.div>
            </div>
        </div>
    )
}
