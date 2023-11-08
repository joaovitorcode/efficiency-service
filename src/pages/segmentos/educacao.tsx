import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BannerSegments } from "@/components/BannerSegments"
import { Infobox } from "@/components/Infobox"

export default function Educacao() {
  const iconSVG = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>`
  const infoboxes = [
    {
      iconSVG: iconSVG,
      title: "Escolas",
    },
    {
      iconSVG: iconSVG,
      title: "Universidades",
    },
    {
      iconSVG: iconSVG,
      title: "Educação infantil",
    },
    {
      iconSVG: iconSVG,
      title: "EAD",
    }
  ]

  return (
    <>
      <Header />
      <div className="relative top-[72px] md:top-[76px] lg:top-[80px]">
        <BannerSegments banner={{
          image: { src: "/example.jpg", alt: "" },
          title: "Educação",
          caption: "Soluções eficazes e inovadoras para o segmento da Educação",
          infobox: {
            title: "Segmento educacional",
            description: "O Grupo Efficiency Service tem sido um parceiro estratégico do segmento educacional, fornecendo soluções em tecnologia e serviços que realmente têm feito a diferença em escolas e universidades. O Grupo Efficiency Service tem a solução ideal para esse mercado em que a proteção, a limpeza e conservação e atendimento são alguns diferenciais competitivos decisivos.",
            image: { src: "/example.jpg", alt: "" },
          },
        }} />
        <main className="max-w-5xl mx-auto py-12 px-4 xl:px-0">
          <h2 className="text-5xl text-second text-center font-bold pb-6">
            Soluções para diversos tipos de Segmentos em Educação
          </h2>
          <p className="text-lg text-center text-gray-600 pb-6">
            O Grupo Efficiency Service entende que a prevenção no setor educacional, garante a segurança de todos e é fundamental para gerar um ambiente mais tranquilo e menos vulnerável para o seu negócio.
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
