import { ContatoAnimation } from "./ContatoAnimacao";

export default function FormularioContato(){
    return(
        <div className="m-4 md:m-8 p-10">
            
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="text-5xl font-bold">Serviços diferenciado e personalizado especialmente para você</h2>
                <p className="dark:text-gray-600">Atendimento rápido e eficiente para suas emergências veiculares</p>
            </div>

            <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-8">
                
                <div className="mockup-phone border-primary" style={{ borderColor: '#E5332F' }}>
                    
                    <div className="camera"></div>
                    
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            
                            <form className="space-y-4 p-4">
                                <h3 className="text-xl font-semibold">Formulário de contato</h3>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium">Nome</label>
                                    <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium">Tipo de Serviço</label>
                                    <select id="service" className="w-full p-2 border border-gray-300 rounded">
                                        <option>Carga de Bateria</option>
                                        <option>Troca de Pneu</option>
                                        <option>Reboque</option>
                                        <option>Troca de Óleo</option>
                                        <option>Desbloqueio de Porta</option>
                                        <option>Manutenção Preventiva</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium">Localização</label>
                                    <input type="text" id="location" className="w-full p-2 border border-gray-300 rounded" />
                                </div>
                                <div>
                                    <label htmlFor="details" className="block text-sm font-medium">Detalhes Adicionais</label>
                                    <textarea id="details" className="w-full p-2 border border-gray-300 rounded"></textarea>
                                </div>
                                <button type="submit" className="w-full py-2 px-4 font-semibold text-white rounded" style={{ backgroundColor: '#E5332F' }}>Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-4 text-center lg:text-left">
                    <ContatoAnimation/>
                </div>
            </div>

        </div>


    );
}