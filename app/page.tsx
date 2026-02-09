import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { DynamicContactForm } from "@/components/dynamic-contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicServicesSection } from "@/components/dynamic-services-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppFloat } from "@/components/whatsapp-float"

// Domain: corporateturban.com
// Brand: Event Turban
// Location: India

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DynamicHeroSlider location="India" />
      <DynamicAboutSection location="India" />
      <DynamicContactForm location="India" domain="corporateturban.com" />
      <GallerySection />
      <DynamicServicesSection location="India" domain="corporateturban.com" />
      <DynamicFooter location="India" domain="corporateturban.com" />
      <WhatsAppFloat />
    </main>
  )
}
