import React from 'react';
import dynamic from 'next/dynamic';
import FeedbackAnimationJson from '../../public/assets/feedbackAnimation.json';

// Carregamento dinâmico do Lottie sem SSR
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

export const FeedbackAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: FeedbackAnimationJson,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <Lottie options={defaultOptions} width={650} height={650} />;
};
