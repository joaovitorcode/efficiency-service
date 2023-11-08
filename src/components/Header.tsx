import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BsFacebook, BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs"
import { MdMenu } from "react-icons/md"
import { DropdownMenu } from "@/components/DropdownMenu"
import { AccordeonMenu } from "@/components/AccordeonMenu"

export function Header() {
  const [showNav, setShowNav] = useState(false)

  return (
    <header className="w-full bg-main fixed z-50 top-0">
      <div className="relative max-w-7xl mx-auto flex justify-end md:justify-center py-6 px-4 lg:px-0">
        <Link
          href="/"
          className="absolute top-0 left-4 lg:left-0 z-10 w-36 lg:w-40 rounded-b-3xl bg-white flex justify-center items-center py-4 px-6 shadow-lg"
        >
          <Image
            src="/logotipo.gif"
            alt="Logotipo da Efficiency Service"
            width={0}
            height={0}
            priority
            sizes="100vw"
            className="w-full"
          />
        </Link>

        <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
          <Link className={`text-xl lg:text-2xl text-white hover:text-second font-bold`} href="/">
            Empresa
          </Link>
          <DropdownMenu
            menu="Serviços"
            items={[
              { value: "Segurança Patrimonial", href: "/servicos/seguranca-patrimonial" },
              { value: "Portaria e Controle de Acesso", href: "/servicos/portaria-e-controle-de-acesso" },
              { value: "Segurança Eletrônica", href: "/servicos/seguranca-eletronica" },
              { value: "Facilities", href: "/servicos/facilities/" },
              { value: "Outros Serviços", href: "/servicos/outros-servicos" }
            ]}
          />
          <DropdownMenu
            menu="Segmentos"
            items={[
              { value: "Condomínios", href: "/segmentos/condominios" },
              { value: "Shoppings e Varejo", href: "/segmentos/shoppings-e-varejo" },
              { value: "Transporte e Logística", href: "/segmentos/transporte-e-logistica" },
              { value: "Saúde", href: "/segmentos/saude" },
              { value: "Educação", href: "/segmentos/educacao" },
              { value: "Indústria", href: "/segmentos/industria" },
              { value: "Agronegócios", href: "/segmentos/agronegocios" },
            ]}
          />
          <DropdownMenu
            menu="Contato"
            items={[
              { value: "Fale Conosco", href: "/contato/fale-conosco" },
              { value: "Solicite uma Cotação", href: "/contato/solicite-uma-cotação" },
              { value: "Trabalhe Conosco", href: "/contato/trabalhe-conosco" },
              { value: "Seja Nosso Parceiro", href: "/contato/seja-nosso-parceiro" },
            ]}
          />
        </nav>

        <div className="md:absolute md:top-0 md:right-4 lg:right-0 z-10 h-full flex gap-4 lg:gap-6 items-center">
          <a href="#">
            <BsFacebook className="w-5 sm:w-6 h-5 sm:h-6 text-white hover:text-second" />
          </a>
          <a href="#">
            <BsInstagram className="w-5 sm:w-6 h-5 sm:h-6 text-white hover:text-second" />
          </a>
          <a href="#">
            <BsWhatsapp className="w-5 sm:w-6 h-5 sm:h-6 text-white hover:text-second" />
          </a>
          <a href="#">
            <BsLinkedin className="w-5 sm:w-6 h-5 sm:h-6 text-white hover:text-second" />
          </a>
        </div>

        <button
          onClick={() => setShowNav(prev => !prev)}
          className="md:hidden ml-6"
        >
          <MdMenu className="w-6 h-6 text-white" />
        </button>
      </div>
      {showNav && <nav className="md:hidden w-full bg-white flex flex-col shadow-md">
        <Link className={`text-xl text-main hover:bg-second font-bold p-6`} href="/">
          Empresa
        </Link>
        <AccordeonMenu
          menu="Serviços"
          items={[
            { value: "Segurança Patrimonial", href: "/servicos/seguranca-patrimonial" },
            { value: "Portaria e Controle de Acesso", href: "/servicos/portaria-e-controle-de-acesso" },
            { value: "Segurança Eletrônica", href: "/servicos/seguranca-eletronica" },
            { value: "Facilities", href: "/servicos/facilities/" },
            { value: "Outros Serviços", href: "/servicos/outros-servicos" },
          ]}
        />
        <AccordeonMenu
          menu="Segmentos"
          items={[
            { value: "Condomínios", href: "/segmentos/condominios" },
            { value: "Shoppings e Varejo", href: "/segmentos/shoppings-e-varejo" },
            { value: "Transporte e Logística", href: "/segmentos/transporte-e-logistica" },
            { value: "Saúde", href: "/segmentos/saude" },
            { value: "Educação", href: "/segmentos/educacao" },
            { value: "Indústria", href: "/segmentos/industria" },
            { value: "Agronegócios", href: "/segmentos/agronegocios" },
          ]}
        />
        <AccordeonMenu
          menu="Contatos"
          items={[
            { value: "Fale Conosco", href: "/contato/fale-conosco" },
            { value: "Solicite uma Cotação", href: "/contato/solicite-uma-cotação" },
            { value: "Trabalhe Conosco", href: "/contato/trabalhe-conosco" },
            { value: "Seja Nosso Parceiro", href: "/contato/seja-nosso-parceiro" },
          ]}
        />
      </nav>}
    </header>
  )
}