import React from 'react';
import dynamic from 'next/dynamic';
import ContatoAnimationJson from '../../public/assets/animationcontato.json';

// Carregamento dinâmico do Lottie sem SSR
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

export const ContatoAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ContatoAnimationJson,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="flex justify-center items-center w-[100%] md:w-[100vh]">
            <Lottie options={defaultOptions} style={{ width: '100%', height: '100%' }} />
        </div>
    );
};
