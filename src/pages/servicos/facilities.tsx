import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BannerTemplate } from "@/components/BannerTemplate"
import { Topic } from "@/components/Topic"

export default function Facilities() {
  const iconSVG = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>`
  const topics = [
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Recepção e Atendimento",
      description: "Eficiência e gentileza ao atender o público de sua empresa. A reputação de sua marca e a experiência do cliente levadas a sério pelos profissionais do Grupo Souza Lima."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Limpeza e Conservação",
      description: "Os serviços de asseio, conservação e limpeza colaboram para a sensação de bem-estar e saúde das pessoas de uma empresa, instituição, prédio, condomínio residencial ou comercial."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Manutenção",
      description: "Confiabilidade e segurança da infraestrutura de sua empresa ou condomínio, com planejamento dos procedimentos e utilização de novas e modernas tecnologias e processos."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Outros Facilities",
      description: "São serviços aprovados pelos clientes e reconhecidos pelo mercado que tornaram a marca uma referência no Brasil."
    },
  ]

  return (
    <>
      <Header />
      <div className="relative top-[72px] md:top-[76px] lg:top-[80px]">
        <BannerTemplate banner={{
          image: { src: "/example.jpg", alt: "" },
          title: "Facilities",
          caption: "A primeira impressão é muito importante",
          infoboxes: [
            { title: "Facilities para Indústrias", iconSVG },
            { title: "Facilities para Condomínios", iconSVG },
            { title: "Facilities para outros segmentos", iconSVG },
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
