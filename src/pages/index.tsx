import Main from "@/components/Main"
import ServicePlan from "@/components/ServicePlan"
import About from "@/components/About"
import Services from "@/components/Services"
import FluxoContato from "@/components/FluxoContato"
import FormularioContato from "@/components/FormContact"
import FotoServicos from "@/components/FotoServicos"
import RedesContatos from "@/components/RedesContatos"
import SobreFeedback from "@/components/AboutFeedback"
import FeedbacksRecebidos from "@/components/FeedbacksRecebidos"

export default function Home() {

  return (
    <div> 
      <Main />
      <ServicePlan />
      <About />
      <FluxoContato />
      <Services />
      <FormularioContato />
      <FotoServicos />
      <RedesContatos />
      <SobreFeedback />
      <FeedbacksRecebidos/>

    </div>
  )
}