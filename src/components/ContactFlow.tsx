import Link from "next/link";

export default function ContactFlow() {
  return (
    <section className="bg-quinta text-gray-800">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            
            <div className="text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-segunda">
              <h3 className="text-3xl font-bold uppercase mb-5">Get in Touch</h3>
              
              <span className="text-xl md:text-2xl font-bold tracking-wider uppercase text-segunda">
                Customized services tailored to your preferences and schedule
              </span>
            </div>
          </div>

          <div className="relative col-span-12 md:px-4 md:space-y-6 sm:col-span-9">
            
            <div className="col-span-12 space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-quinta">
                <h3 className="text-xl md:text-3xl font-bold tracking-wide uppercase">
                  Step 1: Choose the Service
                </h3>
                <time className="text-md tracking-wide uppercase text-gray-600">
                  Available for you
                </time>
                <p className="mt-3 text-xl">
                  Choose from the services offered, such as residential cleaning, commercial cleaning, post-construction cleaning, and more.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-quinta">
                <h3 className="text-xl md:text-3xl  font-bold tracking-wide uppercase">
                  Step 2: Schedule the Time
                </h3>
                <time className="text-md tracking-wide uppercase text-gray-600">
                  Flexibility is key
                </time>
                <p className="mt-3 text-xl">
                  Choose the date and time that best fits your needs. We offer flexible scheduling to accommodate you.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-quinta">
                <h3 className="text-xl md:text-3xl font-bold tracking-wide uppercase">
                  Step 3: Additional Details
                </h3>
                <time className="text-md tracking-wide uppercase text-gray-600">
                  Better assistance
                </time>
                <p className="mt-3 text-xl">
                Provide additional details, such as whether you have pets, if you need extra services like cleaning inside the refrigerator or the oven, and any other important information we should know to customize the service.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-quinta">
                <h3 className="text-xl md:text-3xl font-bold tracking-wide uppercase">Contact</h3>
                <time className="text-md tracking-wide uppercase text-gray-600">
                  Easy and quick
                </time>
                <p className="mt-3 text-xl">
                  Get in touch with us via Phone: +2063763755, Email: splendidcleaningusa@gmail.com, SMS, or WhatsApp. Our team is available to assist you.
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 font-semibold text-white rounded mt-10 md:mt-0 text-2xl uppercase"
                style={{ backgroundColor: '#1C6F42' }}
              >
                <a href="/#contact">Contact Us</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
