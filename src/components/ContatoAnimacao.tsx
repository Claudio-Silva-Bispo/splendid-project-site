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

    return <Lottie options={defaultOptions} width={650} height={450} />;
};
