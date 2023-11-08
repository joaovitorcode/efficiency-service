import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BannerServices } from "@/components/BannerServices"
import { Topic } from "@/components/Topic"

export default function OutrosServicos() {
  const iconSVG = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>`
  const topics = [
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Consultoria em Segurança",
      description: "O Grupo Efficiency Service conta com uma equipe multidisciplinar de consultores com a experiência necessária para criar planos que atendam às necessidades e especificidades de cada cliente."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Inteligência de Segurança",
      description: "Investigação e Análise de risco estão dentro da gama de soluções do Grupo Efficiency Service, com diagnósticos e avaliações das mais diversas situações, sempre com discrição e cuidados necessários."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Brigada de Incêndio",
      description: "Rápido atendimento em intercorrências, incluindo riscos de explosões, incêndios, desabamentos ou outros acidentes."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Segurança Pessoal",
      description: "O Grupo Efficiency Service também oferece o serviço de segurança pessoal com ações preventivas, defensivas e planejadas, evitando a aproximação de estranhos e riscos que possam ocorrer ao cliente."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Soluções Diversas",
      description: "Profissionais preparados para realização de verificação analítica de possíveis riscos do ambiente e estratégias para minimização de acidentes."
    },
  ]

  return (
    <>
      <Header />
      <div className="relative top-[72px] md:top-[76px] lg:top-[80px]">
        <BannerServices banner={{
          image: { src: "/example.jpg", alt: "" },
          title: "Outros Serviços Efficiency Service",
          caption: "Soluções Completas, Customizadas e Eficientes",
          infoboxes: [
            { title: "Segurança e Serviços para Indústrias", iconSVG },
            { title: "Segurança e Serviços para Condomínios", iconSVG },
            { title: "Segurança e Serviços para Outros Segmentos", iconSVG },
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
