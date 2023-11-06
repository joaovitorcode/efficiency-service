export function Banner() {
  return (
    <section className="relative w-full h-[calc(100vh-72px)] md:h-[calc(100vh-76px)] lg:h-[calc(100vh-80px)] flex justify-center items-center">
      <video preload="auto" playsInline autoPlay muted loop className="w-full h-full object-cover">
        <source src="/video_2.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full bg-main opacity-80" />
      
      <div className="absolute max-w-[512px] flex flex-col gap-8">
        <h2 className="text-4xl font-bold text-second text-center">
          Encontre a melhor prestadora de serviços para a sua empresa
        </h2>
        <p className="text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="mx-auto bg-second text-main font-bold py-4 px-16 uppercase">
          Fale Conosco
        </button>
      </div>
    </section>
  )
}