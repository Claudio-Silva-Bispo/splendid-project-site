import Image from "next/image";
import imagem from "../../public/assets/Mockup-logo-dois.png"

export default function AboutFeedback() {
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between pt-20 md:pt-0">
                <div className="flex flex-col justify-center md:p-6 md:text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold leading-none sm:text-6xl uppercase md:text-center">
                    The Importance <br />  of
                        <span className="dark:text-[#FF7F2C]"> Feedback</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-start md:text-center">
                    Feedback is essential for continuously improving our services. It allows us to understand your needs and expectations, helping us provide increasingly better and more personalized service.
                        <br className="hidden md:inline lg:hidden" />
                        Your opinion is crucial for our growth and improvement.
                    </p>
                    
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center mb-10 md:mb-0">
                        
                        <a rel="noopener noreferrer" href="/FormFeedback" className="px-8 py-3 text-lg font-semibold rounded bg-[#FF7F2C]  text-white">
                        Fill Out
                        </a>

                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">
                        Return to Menu
                        </a>
                    </div>
                </div>
                
                <div>
                    <Image src={imagem.src} width={800} height={400} alt="Imagem para demonstração do feedback" className="rounded"></Image>
                </div>

            </div>

        </section>
    );
}
