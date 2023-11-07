import { Header } from "@/components/Header"
import { Banner } from "@/components/Banner"
import { AboutUs } from "@/components/AboutUs"
import { Services } from "@/components/Services"
import { OurBlog } from "@/components/OurBlog"
import { Segments } from "@/components/Segments"
import { Testimonials } from "@/components/Testimonials"
import { Contact } from "@/components/Contact"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative top-[72px] md:top-[76px] lg:top-[80px]">
        <Banner />
        <AboutUs />
        <Services />
        <OurBlog />
        <Segments />
        <Testimonials />
        <Contact />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}
