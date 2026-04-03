import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ValuesSection } from "@/components/ValuesSection"
import { GuideSection } from "@/components/GuideSection"
import { HighlightsSection } from "@/components/HighlightsSection"
import { ServicesSection } from "@/components/ServicesSection"
import { TestimonialSection } from "@/components/TestimonialSection"
import { SiteFooter } from "@/components/SiteFooter"

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <Navbar />
            <Hero />
            <ValuesSection />
            <HighlightsSection />
            <GuideSection />
            <ServicesSection />
            <TestimonialSection />
            <SiteFooter />
        </main>
    )
}
