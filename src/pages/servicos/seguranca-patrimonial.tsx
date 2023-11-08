import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BannerServices } from "@/components/BannerServices"
import { Topic } from "@/components/Topic"

export default function SegurancaPatrimonial() {
  const iconSVG = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>`
  const topics = [
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Vigilância Armada",
      description: "As mais completas soluções, desde a avaliação e diagnósticos de risco até a prestação dos serviços com um nível de entrega estabelecido pela necessidade de segurança patrimonial de cada cliente."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Segurança Pessoal VSPP",
      description: "Os serviços de segurança pessoal (VSPP) trabalham fortemente na prevenção, pois evitar os possíveis eventos de risco é foco de qualquer estratégia de proteção pessoal."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Vigia",
      description: "O olhar preparado desse profissional apoia qualquer estratégia de segurança na manutenção da ordem, na segurança patrimonial dos locais, no controle de acesso de visitantes, colaboradores e prestadores de serviços."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Operador de Monitoramento",
      description: "Os operadores de monitoramento do Grupo Efficiency Service têm capacitação e treinamento constante para poder realizar monitoramento de veículos via satélite, sistemas de CFTV e alarmes de casas e veículos."
    },
  ]

  return (
    <>
      <Header />
      <div className="relative top-[72px] md:top-[76px] lg:top-[80px]">
        <BannerServices banner={{
          image: { src: "/example.jpg", alt: "" },
          title: "Segurança Patrimonial",
          caption: "Soluções Completas, Customizadas e Eficientes",
          infoboxes: [
            { title: "Segurança Patrimonial para Indústrias", iconSVG },
            { title: "Segurança Patrimonial para Condomínios", iconSVG },
            { title: "Segurança Patrimonial para Outros Segmentos", iconSVG },
          ]
        }} />
        <main className="max-w-5xl mx-auto py-12 px-4 xl:px-0">
          <h2 className="text-4xl text-main font-bold pb-6">
            Para cada cliente, existe uma solução da Efficiency Service
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
