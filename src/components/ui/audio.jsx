// import { Pause, Play } from 'lucide-react';
// import React, { useEffect, useRef, useState } from 'react';

// const AudioButton = () => {
//     const audioRef = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(true);

//     useEffect(() => {
//         // Autoplay on load
//         const audio = audioRef.current;
//         const playAudio = () => {
//             audio.play().then(() => setIsPlaying(true)).catch(() => { });
//         };

//         // Autoplay jika pengguna berinteraksi dulu (karena browser kadang block autoplay)
//         window.addEventListener('click', playAudio, { once: true });

//         return () => {
//             window.removeEventListener('click', playAudio);
//         };
//     }, []);

//     const toggleAudio = () => {
//         const audio = audioRef.current;
//         if (isPlaying) {
//             audio.pause();
//         } else {
//             audio.play().catch(() => { });
//         }
//         setIsPlaying(!isPlaying);
//     };

//     return (
//         <div className="fixed bottom-4 right-4 z-50">
//             <audio ref={audioRef} src="/audio/audio.mp3" loop />
//             <button
//                 onClick={toggleAudio}
//                 className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
//             >
//                 {isPlaying ? <Pause /> : <Play />}
//             </button>
//         </div>
//     );
// };

// export default AudioButton;

import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const AudioButton = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;

        const tryAutoplay = () => {
            audio.play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((err) => {
                    // Autoplay gagal, tunggu interaksi user
                    console.log('Autoplay gagal, menunggu klik user...', err);
                });
        };

        tryAutoplay();

        // Tambahkan listener sebagai backup jika autoplay gagal
        const handleUserInteraction = () => {
            tryAutoplay();
            window.removeEventListener('click', handleUserInteraction);
        };

        window.addEventListener('click', handleUserInteraction);

        return () => {
            window.removeEventListener('click', handleUserInteraction);
        };
    }, []);

    const toggleAudio = () => {
        const audio = audioRef.current;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().then(() => setIsPlaying(true)).catch(() => { });
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <audio ref={audioRef} src="/audio/audio.mp3" loop />
            <button
                onClick={toggleAudio}
                className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
                {isPlaying ? <Pause /> : <Play />}
            </button>
        </div>
    );
};

export default AudioButton;
