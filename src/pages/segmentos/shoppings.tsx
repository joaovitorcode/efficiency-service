import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BannerSegments } from "@/components/BannerSegments"
import { Infobox } from "@/components/Infobox"

export default function Shoppings() {
  const iconSVG = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>`
  const infoboxes = [
    {
      iconSVG: iconSVG,
      title: "Shoppings",
    },
    {
      iconSVG: iconSVG,
      title: "Grandes Varejistas",
    },
    {
      iconSVG: iconSVG,
      title: "Pequenos Negócios",
    }
  ]

  return (
    <>
      <Header />
      <div className="relative top-[72px] md:top-[76px] lg:top-[80px]">
        <BannerSegments banner={{
          image: { src: "/example.jpg", alt: "" },
          title: "Shoppings e Varejo",
          caption: "Soluções eficazes e inovadoras para o segmento varejista",
          infobox: {
            title: "Segmento de Shoppings e Varejo",
            description: "O Grupo Efficiency Service oferece Soluções completas em Segurança e Serviços para Shoppings de todos os portes. Colaboradores treinados, produtos de alta performance e equipamentos com tecnologia de ponta fazem do Grupo Efficiency Service, um parceiro estratégico para o segmento.",
            image: { src: "/example.jpg", alt: "" },
          },
        }} />
        <main className="max-w-5xl mx-auto py-12 px-4 xl:px-0">
          <h2 className="text-5xl text-second text-center font-bold pb-6">
            Soluções para Shopping de todos os portes
          </h2>
          <p className="text-lg text-center text-gray-600 pb-6">
            O Grupo Efficiency Service possui as soluções mais eficientes e inovadoras para shoppings de todos os portes em 13 Estados do país. Limpeza, Segurança, Manobristas, Jardineiros, Fiscais de Piso, Atendentes, uma gama completa de serviços e tecnologia para atender centros comerciais com eficiência.
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
