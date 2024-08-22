export default function ServicePhotos() {
  return (
    <section
      className="p-4 lg:p-8 bg-gray-100 text-gray-800"
    >

        <div className="container mx-auto p-4 my-6 space-y-2 text-center" id="about-services">
                
                <h2 className="text-2xl font-bold text-start md:text-center leading-tight uppercase">Discover the Services We Have Created <br /> <span className="uppercase text-quinta">Especially for You</span></h2>
                
                <p className="text-start md:text-center">We aim to make your day easier with the best solutions</p>
        </div>

      <div className="container mx-auto space-y-12">
        {/* Residential Cleaning */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="/assets/ServicesDone/servico-residencial.png"
            alt="Residential Cleaning"
            className="h-80 bg-gray-500 aspect-video"
          />

          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase">Customized Service</span>

            <h3 className="text-3xl font-bold text-[#FF7F2C]">Residential Cleaning</h3>

            <p className="my-1 text-md">
              We offer a complete residential cleaning service, ensuring your home is always clean and organized.
            </p>

            <p className="text-md">
              Our service covers all areas of the house, from living rooms and bedrooms to kitchens and bathrooms, with a focus on details and hygiene.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 font-semibold rounded-md text-white mt-1"
              style={{ backgroundColor: '#FF7F2C' }}
            >
              <a href="/#contact">Request</a>
            </button>
          </div>
        </div>

        {/* Commercial Cleaning */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="/assets/ServicesDone/servico-comercial.png"
            alt="Commercial Cleaning"
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Customized Service
            </span>
            <h3 className="text-3xl font-bold text-[#FF7F2C]">Commercial Cleaning</h3>

            <p className="my-1 text-md">
              Keep your workspace clean and professional with our commercial cleaning services.
            </p>

            <p className="my-1 text-md">
              We offer cleaning for offices, stores, and commercial establishments, with flexible hours to avoid disrupting your business operations.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 font-semibold rounded-md text-white mt-5"
              style={{ backgroundColor: '#FF7F2C' }}
            >
              <a href="/#contact">Request</a>
            </button>
          </div>
        </div>

        {/* Post-Construction Cleaning */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="/assets/ServicesDone/servico-pos-obra.png"
            alt="Post-Construction Cleaning"
            className="h-80 bg-gray-500 aspect-video"
          />

          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Customized Service
            </span>

            <h3 className="text-3xl font-bold text-[#FF7F2C]">Post-Construction Cleaning</h3>

            <p className="my-1 text-md">
              Turn your newly built space into a livable environment with our post-construction cleaning.
            </p>

            <p className="my-1 text-md">
              We remove dirt, debris, and dust, ensuring a clean and safe environment.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 font-semibold rounded-md text-white mt-5"
              style={{ backgroundColor: '#FF7F2C' }}
            >
              <a href="/#contact">Request</a>
            </button>
          </div>
        </div>

        {/* Window Cleaning */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="/assets/ServicesDone/servico-janelas.png"
            alt="Window Cleaning"
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Customized Service
            </span>
            <h3 className="text-3xl font-bold text-[#FF7F2C]">Window Cleaning</h3>

            <p className="my-1 text-md">
              Keep your windows spotless with our specialized cleaning service.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 font-semibold rounded-md text-white mt-5"
              style={{ backgroundColor: '#FF7F2C' }}
            >
              <a href="/#contact">Request</a>
            </button>
          </div>
        </div>

        {/* Upholstery Sanitization */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="/assets/ServicesDone/servico-moveis.png"
            alt="Upholstery Sanitization"
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Customized Service
            </span>

            <h3 className="text-3xl font-bold text-[#FF7F2C]">Small Details in Furniture</h3>

            <p className="my-3 text-gray-600">
              Take care of your upholstery and furniture with our specialized sanitization, ensuring cleanliness and preservation.
            </p>

            <p className=" text-md text-gray-600">
              We use eco-friendly products and advanced techniques to clean and disinfect your upholstery.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 font-semibold rounded-md text-white mt-5"
              style={{ backgroundColor: '#FF7F2C' }}
            >
              <a href="/#contact">Request</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
