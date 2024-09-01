import React, { useState } from 'react';

const servicos = {
  comodos: [
    {
      id: 1,
      nome: 'Cozinha',
      descricaoServico: 'Nosso serviço de limpeza de cozinha oferece uma abordagem abrangente, garantindo superfícies brilhantes, eletrodomésticos sem gordura e um ambiente sanitizado.',
      itensCasa: 'Locais inclusos nos serviços básicos',
      descricaoItensCasa: 'Inclui limpeza de bancadas, fogão, forno, geladeira, pisos e azulejos.',
      agendamentos: 'Tipos de agendamentos que você pode solicitar',
      descricaoAgendamentos: 'Fazemos serviços diários, semanais, quinzenais, mensais ou específicos, de acordo com o seu planejamento.',
      checklist: 'Itens adicionais que você pode personalizar',
      descricaoChecklist: 'Serviços extras que podem ser oferecidos como limpeza do forno, dentro da geladeira, limpeza do armário.',
      imagens: [
        '/assets/Service/cozinha/cozinha1.png',
        '/assets/Service/cozinha/cozinha2.png',
        '/assets/Service/cozinha/cozinha4.png',
        '/assets/Service/cozinha/cozinha3.png'
      ],
      descricaoAdicional: [
        'Nosso serviço de limpeza de cozinha oferece uma abordagem abrangente, garantindo superfícies brilhantes, eletrodomésticos sem gordura e um ambiente sanitizado.',
      ],
      botaoContato: ''
    },
    {
      id: 2,
      nome: 'Banheiro',
      descricaoServico: 'Desinfecção e limpeza profunda de vasos sanitários, pisos e paredes.',
      itensCasa: 'Locais inclusos nos serviços básicos',
      descricaoItensCasa: 'Inclui limpeza de pias, sanitários, box e pisos.',
      agendamentos: 'Tipos de agendamentos que você pode solicitar',
      descricaoAgendamentos: 'Fazemos serviços diários, semanais, quinzenais, mensais ou específicos, de acordo com o seu planejamento.',
      checklist: 'Itens adicionais que você pode personalizar',
      descricaoChecklist: 'Serviços extras que podem ser oferecidos como desinfecção extra, limpeza de azulejos e outros.',
      imagens: [
        '/assets/Service/banheiro/banheiro1.png',
        '/assets/Service/banheiro/banheiro2.png',
        '/assets/Service/banheiro/banheiro3.png',
        '/assets/Service/banheiro/banheiro4.png'
      ],
      descricaoAdicional: [
        'Garantimos um banheiro completamente higienizado e desinfetado, proporcionando um ambiente limpo e seguro para você e sua família.',
      ],
      botaoContato: ''
    },
    {
      id: 3,
      nome: 'Sala de Estar',
      descricaoServico: 'Arranjo e limpeza de sofás, cortinas, tapetes e superfícies.',
      itensCasa: 'Locais inclusos nos serviços básicos',
      descricaoItensCasa: 'Inclui arrumação de móveis, aspiração de tapetes e limpeza de superfícies.',
      agendamentos: 'Tipos de agendamentos que você pode solicitar',
      descricaoAgendamentos: 'Fazemos serviços diários, semanais, quinzenais, mensais ou específicos, de acordo com o seu planejamento.',
      checklist: 'Itens adicionais que você pode personalizar',
      descricaoChecklist: 'Serviços extras que podem ser oferecidos como limpeza profunda de tapetes e polimento de móveis.',
      imagens: [
        '/assets/Service/sala/sala1.png',
        '/assets/Service/sala/sala2.png',
        '/assets/Service/sala/sala3.png',
        '/assets/Service/sala/sala4.png'
      ],
      descricaoAdicional: [
        'Nossa limpeza de sala de estar garante um ambiente aconchegante, com móveis organizados e tapetes impecáveis.',
      ],
      botaoContato: ''
    },
    {
      id: 4,
      nome: 'Quarto',
      descricaoServico: 'Limpeza de móveis, troca de roupas de cama e organização geral do espaço.',
      itensCasa: 'Locais inclusos nos serviços básicos',
      descricaoItensCasa: 'Inclui arrumação da cama, limpeza de superfícies e organização do espaço.',
      agendamentos: 'Tipos de agendamentos que você pode solicitar',
      descricaoAgendamentos: 'Fazemos serviços diários, semanais, quinzenais, mensais ou específicos, de acordo com o seu planejamento.',
      checklist: 'Itens adicionais que você pode personalizar',
      descricaoChecklist: 'Serviços extras que podem ser oferecidos como limpeza de guarda-roupas, polimento de móveis e organização de armários.',
      imagens: [
        '/assets/Service/quarto/quarto1.png',
        '/assets/Service/quarto/quarto2.png',
        '/assets/Service/quarto/quarto3.png',
        '/assets/Service/quarto/quarto4.png'
      ],
      descricaoAdicional: [
        'Proporcionamos um quarto arrumado e limpo, onde você pode relaxar e descansar.',
      ],
      botaoContato: ''
    }
  ]
};

export default function Servicos() {
  const [comodoSelecionadoIndex, setComodoSelecionadoIndex] = useState(0);

  const handlePrevClick = () => {
    setComodoSelecionadoIndex((prevIndex) => (prevIndex === 0 ? servicos.comodos.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setComodoSelecionadoIndex((prevIndex) => (prevIndex === servicos.comodos.length - 1 ? 0 : prevIndex + 1));
  };

  const comodosVisiveis = servicos.comodos.slice(comodoSelecionadoIndex, comodoSelecionadoIndex + 3);

  return (
    <div className="bg-white" id='servicos'>

      <div className="container mx-auto p-4 my-6 space-y-2 text-center pt-20">
        <h2 className="text-6xl font-bold text-start md:text-center leading-tight uppercase">Serviços Diferenciados e Personalizados <br /> <span className="uppercase text-quinta">especialmente para você</span></h2>
      </div>

      <div className="pt-6">

        {/* Seleção de Cômodos */}
        <div className="flex items-center justify-center space-x-4">
          <button onClick={handlePrevClick} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex space-x-4">
            {comodosVisiveis.map((comodo) => (
              <button
                key={comodo.id}
                onClick={() => setComodoSelecionadoIndex(servicos.comodos.findIndex(c => c.id === comodo.id))}
                className={`font-medium text-sm ${
                  comodoSelecionadoIndex === servicos.comodos.findIndex(c => c.id === comodo.id) ? 'text-quinta' : 'text-gray-900 hover:text-gray-600'
                }`}
              >
                {comodo.nome}
              </button>
            ))}
          </div>

          <button onClick={handleNextClick} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Galeria de Imagens */}
        <div className="mx-auto mt-6 max-w-2xl px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg lg:block mb-5 md:mb-0">
            <img
              src={servicos.comodos[comodoSelecionadoIndex].imagens[0]}
              alt={`${servicos.comodos[comodoSelecionadoIndex].nome} imagem 1`}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg">
              <img
                src={servicos.comodos[comodoSelecionadoIndex].imagens[1]}
                alt={`${servicos.comodos[comodoSelecionadoIndex].nome} imagem 2`}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg">
              <img
                src={servicos.comodos[comodoSelecionadoIndex].imagens[2]}
                alt={`${servicos.comodos[comodoSelecionadoIndex].nome} imagem 3`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg lg:block">
            <img
              src={servicos.comodos[comodoSelecionadoIndex].imagens[3]}
              alt={`${servicos.comodos[comodoSelecionadoIndex].nome} imagem 4`}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Descrição do Cômodo */}
        <div className="mx-auto max-w-2xl px-6 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {servicos.comodos[comodoSelecionadoIndex].nome}
          </h1>
          <div className="mt-4 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">{servicos.comodos[comodoSelecionadoIndex].itensCasa}</h2>
            <p className="text-base text-gray-900">{servicos.comodos[comodoSelecionadoIndex].descricaoItensCasa}</p>

            <h2 className="text-xl font-semibold text-gray-800">{servicos.comodos[comodoSelecionadoIndex].agendamentos}</h2>
            <p className="text-base text-gray-900">{servicos.comodos[comodoSelecionadoIndex].descricaoAgendamentos}</p>

            <h2 className="text-xl font-semibold text-gray-800">{servicos.comodos[comodoSelecionadoIndex].checklist}</h2>
            <p className="text-base text-gray-900">{servicos.comodos[comodoSelecionadoIndex].descricaoChecklist}</p>

            <h2 className="text-xl font-semibold text-gray-800">Descrição Adicional</h2>
            {servicos.comodos[comodoSelecionadoIndex].descricaoAdicional.map((line, index) => (
              <p key={index} className="text-base text-gray-900">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
