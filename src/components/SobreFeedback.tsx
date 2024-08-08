import { FeedbackAnimation } from "./FeedbackAnimacao";

export default function SobreFeedback() {
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between pt-20 md:pt-0">
                <div className="flex flex-col justify-center md:p-6 md:text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold leading-none sm:text-6xl uppercase md:text-center">
                        A Importância do
                        <span className="dark:text-[#00B4D8]"> Feedback</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-start md:text-center">
                        O feedback é essencial para melhorarmos continuamente nossos serviços. Ele nos permite entender suas necessidades e expectativas, ajudando-nos a oferecer um atendimento cada vez melhor e mais personalizado.
                        <br className="hidden md:inline lg:hidden" />
                        Sua opinião é fundamental para o nosso crescimento e aprimoramento.
                    </p>
                    
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center mb-10 md:mb-0">
                        
                        <a rel="noopener noreferrer" href="/FormularioFeedback" className="px-8 py-3 text-lg font-semibold rounded bg-[#00B4D8]  text-white">
                            Preencha
                        </a>

                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">
                            Retornar ao menu
                        </a>
                    </div>
                </div>
                
                <div>
                    <FeedbackAnimation/>
                </div>

            </div>

        </section>
    );
}
