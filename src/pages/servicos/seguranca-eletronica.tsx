import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BannerServices } from "@/components/BannerServices"
import { Topic } from "@/components/Topic"

export default function SegurancaEletronica() {
  const iconSVG = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>`
  const topics = [
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Sistemas de CFTV",
      description: "Recepciona as imagens geradas e armazenadas pelo sistema de CFTV de nossos clientes, sejam eles empresas, condomínios ou clientes residenciais."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Monitoramento de Alarme",
      description: "Os equipamentos de monitoramento de alarme já vêm configurados para trabalhar em perfeita harmonia com o ambiente, cobrindo pontos vulneráveis e entregando um eficiente sistema de segurança eletrônica."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Aplicativo de Segurança",
      description: "Aplicativo móvel pelo qual o cliente monitorado pode acompanhar todas as atividades do seu sistema de segurança eletrônica."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Controle de Acesso Inteligente",
      description: "Elimina intermediários e o retrabalho em locais que necessitam controlar o acesso de pessoas proporcionando o acesso imediato e eficiente."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Vigilância e Proteção Perimetral",
      description: "O alarme dispara quando há um rompimento ou aterramento dos fios que constituem a rede de proteção do sistema."
    },
  ]

  return (
    <>
      <Header />
      <div className="relative top-[72px] md:top-[76px] lg:top-[80px]">
        <BannerServices banner={{
          image: { src: "/example.jpg", alt: "" },
          title: "Segurança Eletrônica",
          caption: "Soluções Completas em Segurança Eletrônica",
          infoboxes: [
            { title: "Segurança Eletrônica para Indústrias", iconSVG },
            { title: "Segurança Eletrônica para Condomínios", iconSVG },
            { title: "Segurança Eletrônica para Outros Segmentos", iconSVG },
          ]
        }} />
        <main className="max-w-5xl mx-auto py-12 px-4 xl:px-0">
          <h2 className="text-4xl text-main font-bold pb-6">
            Para cada cliente, existe uma solução do Efficiency Service
          </h2>
          <p className="pb-6">
            Com análise precisa e anos de experiência, oferecemos serviços de Portaria Terceirizada totalmente customizados, desenvolvidos sob medida para diferentes segmentos que necessitem terceirizar serviços de Portaria e Controle de Acesso com qualidade e eficiência.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <Topic key={topic.title} topic={topic} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
