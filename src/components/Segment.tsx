import Image from "next/image"

export function Segment() {
  return (
    <section className="relative h-auto flex flex-col gap-6 items-center bg-white rounded-xl p-6">
      <Image
        src="/example.jpg"
        alt={`Imagem de capa do artigo`}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full aspect-square rounded-lg object-cover"
      />
      <h3 className="text-2xl">
        Segmento
      </h3>
      <p className="text-justify text-lg font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nibh ultricies, tincidunt lorem nec, lobortis lectus. Morbi ut dolor felis. Cras vel suscipit ipsum. Nam posuere velit aliquam lacus gravida, nec auctor odio.
      </p>
      <button className="w-full bg-second text-main font-bold py-2 px-8 uppercase rounded">
        Fale Conosco
      </button>
    </section>
  )
}