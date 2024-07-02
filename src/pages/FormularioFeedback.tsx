import { useState } from "react";

export default function FormularioFeedback() {
    const [formulario, setFormulario] = useState({
        nome: "",
        email: "",
        telefone: "",
        nota: 0,
        mensagem: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Enviando formulário:', formulario);

        try {
            const response = await fetch('https://oficina-project.vercel.app/api/criarFeedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formulario),
            });

            if (response.ok) {
                alert('Mensagem enviada com sucesso');
                setFormulario({
                    nome: "",
                    email: "",
                    telefone: "",
                    nota: 0,
                    mensagem: "",
                });
            } else {
                alert('Erro ao enviar mensagem.' + console.log(formulario));
            }
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            alert('Erro ao enviar mensagem.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormulario({ ...formulario, [e.target.id]: e.target.value });
    };

    const handleStarClick = (nota: number) => {
        setFormulario({ ...formulario, nota });
    };

    return (
        <section className="bg-white">
            <div className="container flex flex-col-reverse lg:flex-row">
                <div className="flex flex-col p-20 space-y-6 rounded-sm lg:w-1/2 xl:w-3/5  text-black">
                    <h1 className="font-bold text-2xl uppercase">Sobre nossos serviços, como foi sua experiência?</h1>
                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug">Carga de Bateria</p>
                            <p className="leading-snug">Serviço rápido e eficiente para recarga de baterias descarregadas.</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug">Troca de Pneu</p>
                            <p className="leading-snug">Substituição segura e rápida de pneus furados ou danificados.</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug">Reboque</p>
                            <p className="leading-snug">Assistência de reboque para veículos quebrados ou danificados.</p>
                        </div>
                    </div>

                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug">Chaveiro</p>
                            <p className="leading-snug">Assistência de chaveiro para veículos com as fechaduras quebrados ou danificados.</p>
                        </div>
                    </div>

                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug">Troca do óleo</p>
                            <p className="leading-snug">Assistência simples e rápida para troca do óleo e água.</p>
                        </div>
                    </div>

                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug">Preventiva</p>
                            <p className="leading-snug">Avaliação rápida e simples para saber a condição do seu veículo, seja para uma viagem, para uma preocupacão sobre algfum barulho.</p>
                        </div>
                    </div>

                </div>

                <div className="lg:w-1/2 xl:w-3/5 bg-white">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
                            
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col items-center w-full">
                                    <h2 className="text-3xl font-semibold text-center">Sua opinião importa para nós</h2>
                                    <div className="flex flex-col items-center py-6 space-y-3">
                                        <span className="text-center">Como foi sua experiência?</span>
                                        <div className="flex space-x-3">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => handleStarClick(star)}
                                                    title={`Rate ${star} stars`}
                                                    aria-label={`Rate ${star} stars`}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className={`w-10 h-10 ${formulario.nota >= star ? 'text-yellow-300' : 'text-gray-400'}`}
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <textarea
                                            rows={5}
                                            placeholder="Mensagem..."
                                            className="p-4 rounded-md resize-none dark:text-gray-800"
                                            id="mensagem"
                                            value={formulario.mensagem}
                                            onChange={handleChange}
                                        ></textarea>

                                        <input
                                            type="text"
                                            placeholder="Nome"
                                            className="p-4 rounded-md resize-none dark:text-gray-800 mt-3"
                                            id="nome"
                                            value={formulario.nome}
                                            onChange={handleChange}
                                        />

                                        <input
                                            type="text"
                                            placeholder="Telefone"
                                            className="p-4 rounded-md resize-none dark:text-gray-800 mt-3"
                                            id="telefone"
                                            value={formulario.telefone}
                                            onChange={handleChange}
                                        />

                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="p-4 rounded-md resize-none dark:text-gray-800 mt-3"
                                            id="email"
                                            value={formulario.email}
                                            onChange={handleChange}
                                        />
                                        

                                        <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-50" style={{ backgroundColor: '#E5332F' }}>
                                            Deixe sua mensagem
                                        </button>
                                    </div>

                                    
                                </div>
                            </form>
                            <div className="flex items-center justify-center">
                                <a rel="noopener noreferrer" href="/" className="text-sm dark:text-gray-600">Retornar ao menu</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
