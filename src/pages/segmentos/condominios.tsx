import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BannerSegments } from "@/components/BannerSegments"
import { Infobox } from "@/components/Infobox"

export default function Facilities() {
  const iconSVG = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>`
  const infoboxes = [
    {
      iconSVG: iconSVG,
      title: "Condomínios Residenciais Horizontais",
    },
    {
      iconSVG: iconSVG,
      title: "Condomínios Residenciais Verticais",
    },
    {
      iconSVG: iconSVG,
      title: "Condomínios Corporativos",
    },
    {
      iconSVG: iconSVG,
      title: "Condomínios Logísticos",
    },
    {
      iconSVG: iconSVG,
      title: "Condomínios Industriais",
    },
  ]

  return (
    <>
      <Header />
      <div className="relative top-[72px] md:top-[76px] lg:top-[80px]">
        <BannerSegments banner={{
          image: { src: "/example.jpg", alt: "" },
          title: "Condomínios",
          caption: "Soluções eficazes e Inovadoras para condomínios",
          infoboxe: {
            title: "Segmento de Condomínios",
            description: "Viver em condomínio é uma opção cada vez mais procurada por quem deseja tranquilidade e segurança. Os empreendimentos já têm sido construídos com a estrutura necessária para a instalação de sistemas de segurança eletrônica, pois Proteção é uma necessidade básica desses estabelecimentos.",
            image: { src: "/example.jpg", alt: "" },
          },
        }} />
        <main className="max-w-5xl mx-auto py-12 px-4 xl:px-0">
          <h2 className="text-5xl text-second text-center font-bold pb-6">
            Soluções para diversos tipos de Condomínios
          </h2>
          <p className="text-lg text-center text-gray-600 pb-6">
            Com análise precisa e anos de experiência, oferecemos serviços de Portaria Terceirizada totalmente customizados, desenvolvidos sob medida para diferentes segmentos que necessitem terceirizar serviços de Portaria e Controle de Acesso com qualidade e eficiência.
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
