import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BannerSegments } from "@/components/BannerSegments"
import { Infobox } from "@/components/Infobox"

export default function Industria() {
  const iconSVG = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>`
  const infoboxes = [
    {
      iconSVG: iconSVG,
      title: "Grandes indústrias",
    },
    {
      iconSVG: iconSVG,
      title: "PME - pequenas e médias empresas",
    },
    {
      iconSVG: iconSVG,
      title: "Condomínios industriais",
    }
  ]

  return (
    <>
      <Header />
      <div className="relative top-[72px] md:top-[76px] lg:top-[80px]">
        <BannerSegments banner={{
          image: { src: "/example.jpg", alt: "" },
          title: "Indústria",
          caption: "Soluções eficazes e inovadoras para o segmento da Indústria",
          infobox: {
            title: "Segmento industrial",
            description: "Parceiro estratégico do setor industrial, o Grupo Souza Lima oferece soluções completas em Segurança e Facilities para Indústrias dos mais diversos portes e características, em território nacional. Seja com profissionais treinados com foco total nos processos, seja com sistemas tecnológicos disruptivos, o Grupo Souza Lima tem a solução certa para esse mercado em que a eficiência é um pré-requisito essencial.",
            image: { src: "/example.jpg", alt: "" },
          },
        }} />
        <main className="max-w-5xl mx-auto py-12 px-4 xl:px-0">
          <h2 className="text-5xl text-second text-center font-bold pb-6">
            Soluções para diversos tipos de Segmentos na Indústria
          </h2>
          <p className="text-lg text-center text-gray-600 pb-6">
            Para os projetos de segurança para indústrias, o Grupo Souza Lima tem as mais completas soluções, desde a avaliação de todo o perímetro, cálculo de riscos, rondas em locais e horários estratégicos, análise minuciosa do estabelecimento industrial e elaboração de todo projeto de segurança, até a utilização dos mais modernos e inovadores equipamentos de segurança, com profissionais altamente treinados e capacitados para que a indústria funcione com total segurança e fique longe de riscos e ameaças.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {infoboxes.map((infobox) => (
              <Infobox key={infobox.title} infobox={infobox} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
