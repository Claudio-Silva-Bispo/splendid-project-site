import Main from "@/components/Main"
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

export default function Home() {

  return (
    <div> 
      <Main />
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
      
    </div>
    
  )
}