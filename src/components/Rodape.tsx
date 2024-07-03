export default function Rodape() {
  return (
    <footer className="footer bg-gray-200 text-base-content p-10 grid grid-cols-1 md:grid-cols-4">
      <div className="flex flex-col">
        <h6 className="footer-title uppercase font-bold mb-3">Serviços</h6>
        <a className="link link-hover">Troca de pneu</a>
        <a className="link link-hover">Carga na bateria</a>
        <a className="link link-hover">Resgate de motos</a>
        <a className="link link-hover">Serviços simples</a>
      </div>

      <div className="flex flex-col">
        <h6 className="footer-title uppercase font-bold mb-3">Empresa</h6>
        <a className="link link-hover">Sobre nós</a>
        <a className="link link-hover">Contato</a>
        <a className="link link-hover">Redes sociais</a>
        <a className="link link-hover">Feedback</a>
      </div>

      <div className="flex flex-col">
        <h6 className="footer-title uppercase font-bold mb-3">Legal</h6>
        <a className="link link-hover">Documentação</a>
        <a className="link link-hover">Painel de controle</a>
      </div>

      <div className="flex flex-col">
        <h6 className="footer-title uppercase font-bold mb-3">Informações de Contato</h6>
        <p>CNPJ: 54.103.732/0001-36</p>
        <p>Base Matriz: Rua Áurea da Gama - Campo Limpo - São Paulo</p>
        <p>Base de Apoio: Rua Geyza Marcok - Balneário Itaguaí - Mongaguá</p>
        <p>Telefone: (11) 9 8227-0666</p>
      </div>

    </footer>
  );
}
