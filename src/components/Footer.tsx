import { MdLocationOn, MdPhone, MdAttachEmail } from "react-icons/md"
import { BsFacebook, BsInstagram, BsWhatsapp, BsLinkedin } from 'react-icons/bs'

export function Footer() {
  return (
    <section className="w-full flex justify-center bg-main">
      <div className="w-full max-w-5xl px-4 lg:px-0">
        <div className="flex flex-col md:flex-row gap-12 pt-12 pb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7160965329144!2d-46.62145682383123!3d-23.578637862228728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59624b0c2a91%3A0x3c641c0d0eaa0b5f!2sR.%20Cel.%20Diogo%2C%20946%20-%20Jardim%20da%20Gloria%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001545-001!5e0!3m2!1spt-BR!2sbr!4v1693947884101!5m2!1spt-BR!2sbr"
            className="w-full aspect-square rounded-2xl border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="w-full my-auto">
            <h3 className="text-4xl text-white font-bold mb-4">
              Endereço
            </h3>
            <p className="flex gap-2 items-center text-white mb-8">
              <MdLocationOn className="w-5 h-5" />
              Rua Coronel Diogo, 946, Aclimação, São Paulo SP
            </p>
            <h3 className="text-4xl text-white font-bold mb-4">
              Telefone
            </h3>
            <p className="flex gap-2 items-center text-white mb-8">
              <MdPhone className="w-5 h-5" />
              +55 (11) 4563-5536
            </p>
            <h3 className="text-4xl text-white font-bold mb-4">
              E-mail
            </h3>
            <p className="flex gap-2 items-center text-white mb-8">
              <MdAttachEmail className="w-5 h-5" />
              contato@efficiencyservice.com.br
            </p>
          </div>
        </div>
        <p className="text-white text-center mb-6">
          © 2023 Efficiency Service. Todos os Direitos Reservados | Desenvolvido por 
          <a
            href="https://www.linkedin.com/in/joaovitorcode/"
            target="_blank"
            className="ml-1 text-second hover:underline underline-offset-4"
          >
            João Vitor
          </a>
        </p>
      </div>
    </section>
  )
}