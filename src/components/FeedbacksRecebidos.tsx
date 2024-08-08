import React, { useState, useEffect } from 'react';

const feedbacks = [
    "O atendimento foi excelente! Precisei de um chaveiro em uma emergência e fui atendido rapidamente. Além disso, a equipe também fez uma carga na bateria e isso foi muito eficiente e me ajudou a voltar à estrada em pouco tempo. Recomendo a todos!",
    "A qualidade do serviço é inigualável. Sempre rápidos, eficientes e com preços justos. Não escolheria outra empresa!",
    "Impressionado com a rapidez e a qualidade do atendimento. Muito satisfeito com o serviço e com certeza usarei novamente!",
    "Excelente trabalho! O pessoal foi amigável, eficiente e deixou tudo impecável. Recomendo fortemente seus serviços."
];

export default function FeedbacksRecebidos() {
    const [activeFeedback, setActiveFeedback] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveFeedback((currentFeedback) => (currentFeedback + 1) % feedbacks.length);
        }, 10000); // Muda o feedback a cada 10 segundos

        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    }, []);

    return (
        <section>

            <div className="container flex flex-col justify-center items-center p-4 mx-auto space-y-6 md:p-8 min-h-[90vh]">

                <div className="md:text-center sm:text-left md:mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-quinta mt-20 md:mt-0">
                    <h3 className="text-3xl font-semibold">Venha saber um pouco mais</h3>
                    
                    <span className="text-sm font-bold tracking-wider uppercase text-gray-600">
                    O que andam falando sobre nós nas redes e nas avaliações recebidas
                    </span>
                </div>
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16 text-[#00b4d8]">
                    {/* SVG content omitted for brevity */}
                </svg>
                
                <p className="px-6 py-2 text-2xl md:text-5xl font-semibold text-center sm:font-bold sm:text-3xl lg:max-w-2xl xl:max-w-4xl text-gray-700">
                    "{feedbacks[activeFeedback]}"
                </p>

                <div className="flex justify-center space-x-3">
                    <img src="https://source.unsplash.com/80x80/?portrait?2" alt="" className="w-20 h-20 bg-center bg-cover rounded-md" />
                    <div>
                        <p className="leading-tight">João Silva</p>
                        <p className="text-sm leading-tight dark:text-gray-700">5 estrelas - 10/06/2024</p>
                        <a className="flex items-center py-2 space-x-1 text-sm text-[#00b4d8]" href="/FeedbackRecebido">
                            <span>Teve curiosidade? Saiba mais clicando aqui!</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                {/* SVG path omitted for brevity */}
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
