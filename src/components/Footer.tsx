export default function Footer() {
  return (
    <footer className="footer bg-gray-100 text-base-content p-10 grid grid-cols-1 md:grid-cols-4 gap-5">
      <div className="flex flex-col">
        <h6 className="footer-title uppercase font-bold mb-3">Serviços</h6>
        <a className="link link-hover">Limpeza Residencial</a>
        <a className="link link-hover">Limpeza Comercial</a>
        <a className="link link-hover">Limpeza de Eventos</a>
        <a className="link link-hover">Manutenção de Jardins</a>
      </div>

      <div className="flex flex-col">
        <h6 className="footer-title uppercase font-bold mb-3">Empresa</h6>
        <a className="link link-hover">Quem Somos</a>
        <a className="link link-hover">Serviços</a>
        <a className="link link-hover">Mídia</a>
        <a className="link link-hover">Contatos</a>
      </div>

      <div className="flex flex-col">
        <h6 className="footer-title uppercase font-bold mb-3">Legal</h6>
        <a className="link link-hover">Termos de Serviço</a>
        <a className="link link-hover">Política de Privacidade</a>
      </div>

      <div className="flex flex-col">
        <h6 className="footer-title uppercase font-bold mb-3">Informações de Contato</h6>
        <p>CNPJ: 00.000.000/0001-00</p>
        <p>Endereço Matriz: 1234 Rua Fictícia, Cidade Inventada, SP</p>
        <p>Base de Apoio: 5678 Rua Imaginária, Praia dos Sonhos, SP</p>
        <p>Telefone: (11) 4002-8922</p>
      </div>
    </footer>
  );
}
