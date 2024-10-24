import Hero from "@/components/Hero"
import ServicePlan from "@/components/ServicePlan"
import About from "@/components/About"
import Services from "@/components/Services"
import ContactFlow from "@/components/ContactFlow"
import FormContact from "@/components/FormContact"
import FormQuote from "@/components/FormQuote"
import ServicePhotos from "@/components/ServicePhotos"
import ContactNetworks from "@/components/ContactNetworks"
import SobreFeedback from "@/components/AboutFeedback"
import ReceivedFeedbacks from "@/components/ReceivedFeedbacks"
import Accordion from "@/components/Accordion"

export default function Home() {

  return (
    <div> 
      <Hero />
      <ServicePlan />
      <About />
      <ContactFlow />
      <FormContact />
      <Services />
      <ServicePhotos />
      <FormQuote/>
      <ContactNetworks />
      <SobreFeedback />
      <ReceivedFeedbacks/>
      <Accordion/>
    </div>
    
  )
}