import Image from "next/image";
import { useState } from "react";

import imagem from "../../public/assets/iPhone 15 Mockup, Perspective.png"

export default function FormContact(){

    const [formulario, setFormulario] = useState({
        nome: "",
        email: "",
        telefone: "",
        servico: "",
        localizacao: "",
        mensagem: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('https://oficina-project.vercel.app/api/criarContato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formulario),
            });

            if (response.ok){
                alert('Mensagem enviada com sucesso');
                setFormulario({
                    nome: "",
                    email: "",
                    telefone: "",
                    servico: "",
                    localizacao: "",
                    mensagem: "",
                });
            } else {
                alert('Erro ao enviar mensagem.');
            }
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            alert('Erro ao enviar mensagem.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormulario({ ...formulario, [e.target.id]: e.target.value });
    };

    return(
        <div className="m-4 md:m-8 md:p-10" id="contact">
            
            <div className="container mx-auto p-4 my-6 space-y-2 text-center bg-segunda text-white pt-20 pb-20 md:pt-10 md:pb-10">
                
                <h2 className="text-3xl font-bold text-start md:text-center leading-relaxed uppercase">Formulário de contato diferenciado, pensando <br /> <span className="uppercase text-white">em você e sem seu negócio</span></h2>
                
                <p className="text-start md:text-center">Atendimento rápido e eficiente para você, sua familía negócios e amigos</p>
            </div>

            <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 border rounded-md ">
                <div className="mockup-phone border-primary w-full p-5" style={{ borderColor: '#E5332F' }}>
                    <div className="camera"></div>
                    
                    <div className="display border rounded-md">
                        <div className="artboard artboard-demo phone-1">
                            <form onSubmit={handleSubmit} className="space-y-4 p-4" name="formulario-contato-oficina">
                                
                                <h3 className="text-xl font-semibold uppercase text-center">Formulário de contato</h3>
                                
                                <div className="grid md:grid-cols-2 gap-5 w-full">
                                    
                                    <div className="min-w-full">
                                        <label htmlFor="nome" className="block text-sm font-medium">Nome</label>
                                        <input type="text" id="nome" className="min-w-full p-2 border border-gray-300 rounded" onChange={handleChange} value={formulario.nome} />
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="telefone" className="block text-sm font-medium">Telefone</label>
                                        <input type="number" id="telefone" className="min-w-full p-2 border border-gray-300 rounded" placeholder="(xx) xxxxx-xxxx" onChange={handleChange} value={formulario.telefone} />
                                    </div>

                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium">E-mail</label>
                                    <input type="mail" id="email" className="w-full p-2 border border-gray-300 rounded" placeholder="seuemail@dominio.com.br" onChange={handleChange} value={formulario.email} />
                                </div>

                                <div>
                                    <label htmlFor="servico" className="block text-sm font-medium">Tipo de Serviço</label>
                                    
                                    <select id="servico" className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} value={formulario.servico}>
                                        <option>Selecione uma opção</option>
                                        <option>Diária</option>
                                        <option>Semanal</option>
                                        <option>Quinzenal</option>
                                        <option>Mensal</option>
                                        <option>Única</option>
                                        <option>Personalizado</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="localizacao" className="block text-sm font-medium">Endereço</label>
                                    <input type="text" id="localizacao" className="w-full p-2 border border-gray-300 rounded text-sm" placeholder="Digite a Rua, número e CEP" onChange={handleChange} value={formulario.localizacao} />
                                </div>

                                <div>
                                    <label htmlFor="mensagem" className="block text-sm font-medium">Detalhes Adicionais</label>
                                    <textarea id="mensagem" className="w-full p-2 border border-gray-300 rounded text-sm" placeholder="Digite mais detalhes do seu endereco e da sua solicitação" onChange={handleChange} value={formulario.mensagem}></textarea>
                                </div>

                                <button type="submit" className="w-full py-2 px-4 font-semibold text-white rounded" style={{ backgroundColor: '#FF7F2C' }}>Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-4 text-center lg:text-left ">
                    <Image src={imagem.src} width={800} height={800} alt="Imagem de dois celular com nossos serviços"></Image>
                </div>
            </div>
        </div>
    );
}
