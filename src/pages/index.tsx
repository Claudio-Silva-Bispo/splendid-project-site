import Principal from "@/components/Principal"
import PlanosServicos from "@/components/PlanosServicos"
import Servicos from "@/components/Servicos"
import FluxoContato from "@/components/FluxoContato"
import FormularioContato from "@/components/FormularioContato"
import FotoServicos from "@/components/FotoServicos"
import FormularioFeedback from "@/pages/FormularioFeedback"
import SobreFeedback from "@/components/SobreFeedback"

export default function Home() {

  return (
    <div> 
      <Principal />
      <PlanosServicos />
      <Servicos />
      <FluxoContato />
      <FormularioContato />
      <FotoServicos />
      <SobreFeedback />

    </div>
  )
}