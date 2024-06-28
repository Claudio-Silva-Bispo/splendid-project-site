
export default function FotoServicos(){
    return(
        <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
            
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://source.unsplash.com/640x480/?battery" alt="Carga de Bateria" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                        <span className="text-xs uppercase dark:text-gray-600">Serviço 24 Horas</span>
                        <h3 className="text-3xl font-bold">Carga de Bateria</h3>
                        <p className="my-6 dark:text-gray-600">Serviço rápido e eficiente para recarga de baterias descarregadas, disponível 24 horas por dia.</p>
                        <button type="button" className="self-start py-2 px-4 font-semibold rounded-md text-white" style={{ backgroundColor: '#E5332F' }}>Solicitar</button>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="https://source.unsplash.com/640x480/?tire" alt="Troca de Pneu" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                        <span className="text-xs uppercase dark:text-gray-600">Serviço 24 Horas</span>
                        <h3 className="text-3xl font-bold">Troca de Pneu</h3>
                        <p className="my-6 dark:text-gray-600">Substituição segura e rápida de pneus furados ou danificados, com atendimento imediato.</p>
                        <button type="button" className="self-start py-2 px-4 font-semibold rounded-md text-white" style={{ backgroundColor: '#E5332F' }}>Solicitar</button>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://source.unsplash.com/640x480/?tow-truck" alt="Reboque" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                        <span className="text-xs uppercase dark:text-gray-600">Serviço 24 Horas</span>
                        <h3 className="text-3xl font-bold">Reboque</h3>
                        <p className="my-6 dark:text-gray-600">Assistência de reboque para veículos quebrados ou danificados, disponível 24 horas por dia.</p>
                        <button type="button" className="self-start py-2 px-4 font-semibold rounded-md text-white" style={{ backgroundColor: '#E5332F' }}>Solicitar</button>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="https://source.unsplash.com/640x480/?oil-change" alt="Troca de Óleo" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                        <span className="text-xs uppercase dark:text-gray-600">Serviço 24 Horas</span>
                        <h3 className="text-3xl font-bold">Troca de Óleo</h3>
                        <p className="my-6 dark:text-gray-600">Serviço completo de troca de óleo no local, com produtos de alta qualidade e atendimento rápido.</p>
                        <button type="button" className="self-start py-2 px-4 font-semibold rounded-md text-white" style={{ backgroundColor: '#E5332F' }}>Solicitar</button>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://source.unsplash.com/640x480/?car-door" alt="Desbloqueio de Porta" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                        <span className="text-xs uppercase dark:text-gray-600">Serviço 24 Horas</span>
                        <h3 className="text-3xl font-bold">Desbloqueio de Porta</h3>
                        <p className="my-6 dark:text-gray-600">Assistência rápida para desbloqueio de portas de veículos, disponível 24 horas por dia.</p>
                        <button type="button" className="self-start py-2 px-4 font-semibold rounded-md text-white" style={{ backgroundColor: '#E5332F' }}>Solicitar</button>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="https://source.unsplash.com/640x480/?car-maintenance" alt="Manutenção Preventiva" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                        <span className="text-xs uppercase dark:text-gray-600">Serviço 24 Horas</span>
                        <h3 className="text-3xl font-bold">Manutenção Preventiva</h3>
                        <p className="my-6 dark:text-gray-600">Verificações regulares e manutenção preventiva para garantir a segurança e o bom funcionamento do seu veículo.</p>
                        <button type="button" className="self-start py-2 px-4 font-semibold rounded-md text-white" style={{ backgroundColor: '#E5332F' }}>Solicitar</button>
                    </div>
                </div>
            </div>
            
        </section>

    );
}