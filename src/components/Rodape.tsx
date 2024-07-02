export default function Rodape() {
    return (
      <footer className="footer bg-gray-200 text-base-content p-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <nav className="flex flex-col">
          <h6 className="footer-title uppercase font-bold mb-3">Serviços</h6>
          <a className="link link-hover">Troca de pneu</a>
          <a className="link link-hover">Carga na bateria</a>
          <a className="link link-hover">Resgate de motos</a>
          <a className="link link-hover">Serviços simples</a>
        </nav>
  
        <nav className="flex flex-col">
          <h6 className="footer-title uppercase font-bold mb-3">Empresa</h6>
          <a className="link link-hover">Sobre nós</a>
          <a className="link link-hover">Contato</a>
          <a className="link link-hover">Redes sociais</a>
          <a className="link link-hover">Feedback</a>
        </nav>
  
        <nav className="flex flex-col">
          <h6 className="footer-title uppercase font-bold mb-3">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
  
        <form className="flex flex-col">
          <h6 className="footer-title uppercase text-[#E5332F]">Comunicados</h6>
  
          <fieldset className="form-control w-full flex flex-col gap-5">
            <div>
              <label className="label">
                <span className="label-text">Insira seu e-mail e fique por dentro das novidades</span>
              </label>
            </div>
  
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item p-3 w-full"
              />
            </div>
  
            <div>
              <button
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-semibold rounded bg-[rgb(229,51,47)] dark:text-gray-50"
              >
                Inscreva-se
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    );
  }
  