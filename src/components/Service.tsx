import { MdSecurity } from "react-icons/md"

export function Service() {
  return (
    <section className="relative h-auto flex flex-col gap-6 items-center bg-white rounded-xl p-6">
      <MdSecurity className="w-12 h-12 text-main" />
      <h3 className="text-2xl">
        Serviço
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