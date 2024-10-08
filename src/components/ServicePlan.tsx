import { GiButterfly } from 'react-icons/gi';

export default function ServicePlan() {
    return (
      <section className="py-10 md:py-20 bg-gray-100 text-gray-800 md:pt-20">
        
        <div className="container md:px-4 mx-auto">
          
          <div className="max-w-2xl mx-auto md:mb-16 md:text-center p-6 md:p-0">
            <span className="tracking-wider uppercase text-primeira text-4xl md:text-6xl">
              Service Plan
            </span>
            <h2 className="text-2xl lg:text-2xl pt-5 md:pt-0">
            choose the best cleaning plan for you
            </h2>
          </div>
  
          <div className="flex flex-wrap items-stretch mx-4 pb-10">
            {/* Plano Interno */}
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl">Daily services</h4>
                  <span className="text-5xl">Essential</span>
                </div>
                <p className="mt-3 leading-relaxed text-black text-xl">
                Essential services to keep your home clean and organized.
                </p>
                
                <ul className="flex-1 mb-6 text-black text-md">
                  
                  <li className="flex mb-2 space-x-2">
                    <GiButterfly className="text-primeira w-8 h-8" />
                    <span>Regular cleaning</span>
                  </li>

                  <li className="flex mb-2 space-x-2">
                  <GiButterfly className="text-primeira w-8 h-8" />
                    <span>Bathroom sanitization</span>
                  </li>

                  <li className="flex mb-2 space-x-2">
                  <GiButterfly className="text-primeira w-8 h-8" />
                    <span>Kitchen cleaning</span>
                  </li>

                  <li className="flex mb-2 space-x-2">
                  <GiButterfly className="text-primeira w-8 h-8" />
                    <span>Check-List</span>
                  </li>

                </ul>

                <button
                  type="button"
                  className="inline-block px-5 py-3 tracking-wider text-center rounded bg-segunda text-gray-50 text-xl uppercase font-bold"
                >
                  Start now
                </button>
              </div>
            </div>
  
            {/* Plano Mensal */}
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-segunda text-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl">Service</h4>
                  <span className="text-5xl">Monthly</span>
                </div>
                <p className="leading-relaxed text-xl">
                Heavy cleaning services performed once a month
                </p>
                <ul className="flex-1 space-y-2 text-xl">
                  <li className="flex items-center space-x-2">
                    <GiButterfly className="text-terceira w-8 h-8" />
                    <span>Essential package</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <GiButterfly className="text-terceira w-8 h-8" />
                    <span>Window washing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <GiButterfly className="text-terceira w-8 h-8" />
                    <span>Define other items</span>
                  </li>
                </ul>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block w-full px-5 py-3 tracking-wider text-center rounded bg-gray-100 text-segunda uppercase font-bold text-xl"
                >
                  Start
                </a>
              </div>
            </div>
  
            {/* Plano Combo */}
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl">Plan</h4>
                  <span className="text-4xl">Customized</span>
                </div>
                <p className="leading-relaxed text-black text-xl">
                A combination of daily and monthly services for a complete cleaning.
                </p>
                <ul className="space-y-2 text-black text-xl">
                  <li className="flex items-start space-x-2">
                    <GiButterfly className="text-primeira w-8 h-8" />
                    <span>All items in the house</span>
                  </li>
                  <li className="flex items-start space-x-2">
                  <GiButterfly className="text-primeira w-8 h-8" />
                    <span>Special discount</span>
                  </li>
                  <li className="flex items-start space-x-2">
                  <GiButterfly className="text-primeira w-8 h-8" />
                    <span>Priority scheduling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                  <GiButterfly className="text-primeira w-8 h-8" />
                    <span>Specify your preferred</span>
                  </li>
                </ul>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block w-full px-5 py-3 tracking-wider text-center rounded bg-segunda text-white uppercase text-xl font-bold"
                >
                  Quote free
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  