export default function ServicePhotos() {
  return (
    <section
      className="p-4 lg:p-8 bg-terceira text-gray-800"
    >

        <div className="container mx-auto p-2 md:p-4 my-6 space-y-2 text-center" id="about-services">
                
                <h2 className="text-2xl md:text-5xl text-start md:text-center leading-tight uppercase">Discover the Services We Have Created <br /> <span className="uppercase text-primeira font-bold">Especially for You</span></h2>
                
                <p className="text-xl text-left md:text-center">We aim to make your day easier with the best solutions</p>
        </div>

      <div className="container mx-auto space-y-12">
        {/* Residential Cleaning */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="/assets/Novas/imagem1.jpeg"
            className="h-80 bg-gray-500 aspect-video"
          />

          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase bold-bold">Customized Service</span>

            <h3 className="text-xl md:text-3xl text-[#FF7F2C]">Standard Cleaning</h3>

            <p className="my-1 text-md">
              We offer a complete residential cleaning service, ensuring your home is always clean and organized.
            </p>

            <p className="text-md">
              Our service covers all areas of the house, from living rooms and bedrooms to kitchens and bathrooms, with a focus on details and hygiene.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 rounded-md text-white mt-3 font-bold"
              style={{ backgroundColor: '#FF7F2C' }}
            >
              <a href="/#contact">Request</a>
            </button>
          </div>
        </div>

        {/* Commercial Cleaning */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="/assets/Novas/imagem2.jpeg"
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Customized Service
            </span>
            <h3 className="text-xl md:text-3xl text-[#FF7F2C]">Commercial Cleaning</h3>

            <p className="my-1 text-md">
              Keep your workspace clean and professional with our commercial cleaning services.
            </p>

            <p className="my-1 text-md">
              We offer cleaning for offices, stores, and commercial establishments, with flexible hours to avoid disrupting your business operations.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 rounded-md text-white mt-3 font-bold"
              style={{ backgroundColor: '#FF7F2C' }}
            >
              <a href="/#contact">Request</a>
            </button>
          </div>
        </div>

        {/* Post-Construction Cleaning */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="/assets/Novas/imagem3.jpeg"
            alt="Post-Construction Cleaning"
            className="h-80 bg-gray-500 aspect-video"
          />

          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Customized Service
            </span>

            <h3 className="text-xl md:text-3xl text-[#FF7F2C]">Post-Construction Cleaning</h3>

            <p className="my-1 text-md">
              Turn your newly built space into a livable environment with our post-construction cleaning.
            </p>

            <p className="my-1 text-md">
              We remove dirt, debris, and dust, ensuring a clean and safe environment.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 rounded-md text-white mt-3 font-bold"
              style={{ backgroundColor: '#FF7F2C' }}
            >
              <a href="/#contact">Request</a>
            </button>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="/assets/Service/sala/IMG-20200204-WA0028.jpg"
            alt="Window Cleaning"
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Customized Service
            </span>
            <h3 className="text-xl md:text-3xl text-[#FF7F2C]">Move in and Move out Cleaning</h3>

            <p className="my-1 text-md">
            We offer specialized cleaning services for moving moments, ensuring that your new home or apartment is spotless for your arrival (Move In Cleaning) or leaving the space in perfect condition when you move out (Move Out Cleaning). Our team takes care of every detail, providing comfort and peace of mind during this important time.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 rounded-md text-white mt-3 font-bold"
              style={{ backgroundColor: '#FF7F2C' }}
            >
              <a href="/#contact">Request</a>
            </button>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="/assets/Service/mockup/IMG-20230322-WA0238.jpg"
            alt="Upholstery Sanitization"
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Customized Service
            </span>

            <h3 className="text-2xl md:text-3xl text-[#FF7F2C]">Deep Clening</h3>

            <p className="my-3 text-gray-600">
            We offer professional Deep Cleaning services to thoroughly clean and sanitize your space from top to bottom. Ideal for a detailed refresh, our team focuses on every corner, tackling hard-to-reach areas, and ensuring your home or office is spotless and germ-free. Experience a deeper level of cleanliness and enjoy a healthier environment.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 rounded-md text-white mt-3 font-bold"
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
