import Principal from "@/components/Principal"
import PlanosServicos from "@/components/PlanosServicos"
import Sobre from "@/components/Sobre"
import Servicos from "@/components/Servicos"
import FluxoContato from "@/components/FluxoContato"
import FormularioContato from "@/components/FormularioContato"
import FotoServicos from "@/components/FotoServicos"
import RedesContatos from "@/components/RedesContatos"
import SobreFeedback from "@/components/SobreFeedback"
import FeedbacksRecebidos from "@/components/FeedbacksRecebidos"

export default function Home() {

  return (
    <div> 
      <Principal />
      <PlanosServicos />
      <Sobre />
      <FluxoContato />
      <Servicos />
      <FormularioContato />
      <FotoServicos />
      <RedesContatos />
      <SobreFeedback />
      <FeedbacksRecebidos/>

    </div>
  )
}