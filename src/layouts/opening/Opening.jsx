/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const OpeningScreen = ({ onOpen }) => {
    const [opened, setOpened] = useState(false);
    const handleOpen = () => {

        setOpened(true);
        setTimeout(onOpen, 1000);
    };

    return (
        <AnimatePresence>
            {!opened && (
                <motion.div
                    className="fixed inset-0 bg-cover bg-center bg-[url(@/assets/cover.JPG)] flex flex-col items-center justify-end z-50 text-white text-center p-0"
                    initial={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -500, transition: { duration: 1 } }}
                >
                    <div className="w-full h-full bg-black/50 p-6 flex justify-center items-end">
                        <div className="text-white font-diphy text-center mb-4">
                            <p className="text-xl">The Wedding Of</p>
                            <p className="text-4xl sm:text-6xl mb-5 font-medium"> Mega & Panji</p>
                            <p className="text-xl mb-4">27 . 07 . 2025</p>
                            <button
                                onClick={handleOpen}
                                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                            >
                                Buka Undangan
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default OpeningScreen;
