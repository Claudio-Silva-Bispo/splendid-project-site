import imagem from "../../public/assets/Logo/imagem-logo-oficial.png"

export default function Footer() {
  return (
    <footer className="px-4 divide-y bg-terceira text-gray-800">
	
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="hidden lg:grid lg:w-1/3">
			<a rel="noopener noreferrer" href="/" className="flex justify-center space-x-3 lg:justify-center">
				<img src="/assets/Logo/imagem-logo-oficial.png" alt="Logo da empresa" className="w-44" />
				
			</a>
		</div>

		<div className="grid text-xl gap-x-3 gap-y-8 lg:w-2/3 md:grid-cols-4 p-5 md:p-0">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase font-bold">Service</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#about-services">Regular cleaning</a>
					</li>

					<li>
						<a rel="noopener noreferrer" href="#about-services">Deep Cleaning</a>
					</li>

					<li>
						<a rel="noopener noreferrer" href="#about-services">Move-in & Move-out</a>
					</li>

					<li>
						<a rel="noopener noreferrer" href="#about-services">Commerial</a>
					</li>

					<li>
						<a rel="noopener noreferrer" href="#about-services">Vacation Home</a>
					</li>

					<li>
						<a rel="noopener noreferrer" href="#about-services">Event</a>
					</li>
				</ul>
			</div>

			<div className="space-y-3">
				<h3 className="tracking-wide uppercase font-bold">Company</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="/AboutCompany">About</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="/#FormQuote">Request a quote</a>
					</li>
         			
					<li>
						<a rel="noopener noreferrer" href="#">Business hours</a>
					</li>
				</ul>
			</div>

			<div className="space-y-3">
				<h3 className="uppercase font-bold">Developers</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Documentation</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="/Dashboard">Dashboard</a>
					</li>
				</ul>
			</div>

			<div className="space-y-3">
				<div className="uppercase font-semibold">Social Media</div>
				<div className="flex justify-start space-x-3">
					<a rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100083121271391&mibextid=ZbWKwL" target="_blank" title="Facebook" className="flex items-center p-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
							<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
						</svg>
					</a>
					
					<a rel="noopener noreferrer" href="https://www.instagram.com/splendidcleaningusa/" target="_blank" title="Instagram" className="flex items-center p-1">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
							<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
						</svg>
					</a>
				</div>
			</div>
			
		</div>

	</div>

	<div className="py-6 text-sm text-center text-gray-600">© 2024 Company Alves Cleaning Service. All rights reserved.</div> 

</footer>

  );
}
