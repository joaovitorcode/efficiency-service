import Image from "next/image"

export function AboutUs() {
  return (
    <section>
      <div className="max-w-5xl mx-auto py-12 px-4 lg:px-0">
        <h2 className="text-5xl font-bold text-main text-center uppercase mb-12">
          Sobre Nós
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="relative max-h-[512px] md:h-auto bg-main rounded-xl lg:aspect-square shadow-2xl">
            <Image
              src="/about_us.png"
              alt=""
              width={0}
              height={0}
              priority
              sizes="100vw"
              className="md:absolute left-12 top-16 lg:-top-12 w-full h-full lg:h-auto object-contain"
            />
          </div>
          <div className="flex flex-col gap-6 lg:gap-8 md:py-6 lg:py-12">
            <p className="text-base lg:text-lg text-justify">
              Possuímos um corpo técnico e operacional apto a efetuar levantamento de dados e buscar as mais inteligentes soluções levando em consideração a necessidade de cada cliente resultando em eficiência.
            </p>
            <p className="text-base lg:text-lg text-justify">
              Para nossos funcionários, dispomos de programas de treinamento e atualização totalmente compatíveis com o mercado e com a lei vigente, resultando num aumento significativo na qualidade de nossos serviços.
            </p>
            <p className="text-base lg:text-lg text-justify">
              Para quem deseja concentrar as habilidades da mão-de-obra em sua própria área de atuação. A Efficiency Service surge como uma alternativa viável para a prestação desses serviços seculares.
            </p>
            <button className="mr-auto bg-second text-main font-bold py-2 px-8 uppercase">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}