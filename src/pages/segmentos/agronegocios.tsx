import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BannerSegments } from "@/components/BannerSegments"
import { Infobox } from "@/components/Infobox"

export default function Agronegocios() {
  const iconSVG = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>`
  const infoboxes = [
    {
      iconSVG: iconSVG,
      title: "Análise de risco",
    },
    {
      iconSVG: iconSVG,
      title: "Profissionais qualificados",
    },
    {
      iconSVG: iconSVG,
      title: "Tecnologia avançada",
    }
  ]

  return (
    <>
      <Header />
      <div className="relative top-[72px] md:top-[76px] lg:top-[80px]">
        <BannerSegments banner={{
          image: { src: "/example.jpg", alt: "" },
          title: "Agronegócios",
          caption: "Soluções eficazes e inovadoras para o segmento de Agronegócios",
          infobox: {
            title: "Segmento Agronegócios",
            description: "O Grupo Efficiency Service acompanha a evolução desse segmento, um dos mais importantes da economia do país, e oferece soluções personalizadas de Segurança e Serviços para toda a cadeia produtiva agrícola e pecuária, unindo profissionais constantemente treinados e tecnologia de ponta.",
            image: { src: "/example.jpg", alt: "" },
          },
        }} />
        <main className="max-w-5xl mx-auto py-12 px-4 xl:px-0">
          <h2 className="text-5xl text-second text-center font-bold pb-6">
            Soluções Completas, Customizadas e Eficientes no Segmento de Agronegócios
          </h2>
          <p className="text-lg text-center text-gray-600 pb-6">
            Um dos mais importantes setores da Economia do país, o Agronegócios, responde por quase um quarto do PIB brasileiro e não para de crescer. O Grupo Efficiency Service acompanha essa evolução e oferece soluções personalizadas de Segurança e Serviços para toda a cadeia produtiva agrícola e pecuária, unindo profissionais qualificados e tecnologia avançada.
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
