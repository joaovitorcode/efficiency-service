import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BannerTemplate } from "@/components/BannerTemplate"
import { Topic } from "@/components/Topic"

export default function PortariaEControleDeAcesso() {
  const iconSVG = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>`
  const topics = [
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Porteiro",
      description: "O Grupo Efficiency Service tem seleção de perfil adequado, com profissionais treinados, com boa apresentação pessoal, cordialidade, simpatia e alta responsabilidade."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Controlador de Acesso",
      description: "A função de controlador de acesso é extremamente importante. Os profissionais do Grupo Efficiency Service são treinados para cumprirem as normas, controlarem o fluxo da Portaria Terceirizada com muito critério."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Fiscal de Piso/Perímetro",
      description: "Fiscalização de Piso / Perímetro tratados com a seriedade e a segurança que só um grupo há mais de 30 anos em Serviços para Portarias Terceirizadas pode garantir."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Atendente",
      description: "Para atendimento pessoal ou telefônico, o Grupo Efficiency Service oferece profissionais aptos a dar o suporte necessário ao cliente ou público em geral."
    },
    {
      image: { src: "/example.jpg", alt: "" },
      title: "Recepcionista",
      description: "Sempre com ótima postura, respeito e cordialidade, as recepcionistas do Grupo Efficiency Service estão aptas a realizar a recepção de seus clientes e convidados, além de serviços administrativos."
    },
  ]

  return (
    <>
      <Header />
      <div className="relative top-[72px] md:top-[76px] lg:top-[80px]">
        <BannerTemplate banner={{
          image: { src: "/example.jpg", alt: "" },
          title: "Portaria e Controle de Acesso",
          caption: "Soluções de controle de acesso Modernas e Eficientes",
          infoboxes: [
            { title: "Portaria e Controle de Acesso para Indústrias", iconSVG },
            { title: "Portaria e Controle de Acesso para Condomínios", iconSVG },
            { title: "Portaria e Controle de Acesso para Outros Segmentos", iconSVG },
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
