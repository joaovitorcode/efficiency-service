import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BannerSegments } from "@/components/BannerSegments"
import { Infobox } from "@/components/Infobox"

export default function TransporteELogistica() {
  const iconSVG = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>`
  const infoboxes = [
    {
      iconSVG: iconSVG,
      title: "Transportadoras",
    },
    {
      iconSVG: iconSVG,
      title: "Armazéns",
    },
    {
      iconSVG: iconSVG,
      title: "Centros de Distribuição",
    }
  ]

  return (
    <>
      <Header />
      <div className="relative top-[72px] md:top-[76px] lg:top-[80px]">
        <BannerSegments banner={{
          image: { src: "/example.jpg", alt: "" },
          title: "Transportes e Logística",
          caption: "Soluções eficazes e Inovadoras para o segmento de Logística",
          infobox: {
            title: "Segmento de transporte e logística",
            description: "O setor de logística é um dos que mais crescem no país. Com o desenvolvimento do comércio online, entregar produtos com rapidez e agilidade tornou-se um diferencial importante. O número de transportadoras, galpões e condomínios logísticos também tem aumentado significativamente, assim como a necessidade de proteção desses locais. O Grupo Efficiency Service tem tradição na prestação de serviços de Segurança e Facilities para o setor logístico. Com mais de 30 anos de mercado, atender transportadoras, centros de distribuição, galpões e condomínios logísticos é uma das especialidades da empresa.",
            image: { src: "/example.jpg", alt: "" },
          },
        }} />
        <main className="max-w-5xl mx-auto py-12 px-4 xl:px-0">
          <h2 className="text-5xl text-second text-center font-bold pb-6">
            Soluções para diversos tipos de Segmentos em Logística
          </h2>
          <p className="text-lg text-center text-gray-600 pb-6">
          O Grupo Efficiency Service possui as soluções mais eficientes e inovadoras para você, grande varejista, que precisa assegurar a segurança das suas mercadorias, colaboradores e clientes. Soluções de monitoramento e controle de acesso inteligente para o seu estoque.
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
