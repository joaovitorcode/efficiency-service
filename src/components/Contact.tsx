import { MdLocationOn, MdPhone, MdAttachEmail } from "react-icons/md"
import { useForm, SubmitHandler } from "react-hook-form"

interface Inputs {
  name: string
  email: string
  message: string
}

export function Contact() {
  const { handleSubmit, register, formState: { errors }, reset } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email
    }

    // emailJs.send(
    //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    //   templateParams,
    //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    // )
    // .then((response) => console.log(`Status: ${response.status}`))
    // .catch((error) => console.log(`Error: ${error}`))

    reset()
  }

  return (
    <section className="w-full flex justify-center bg-main">
      <div className="w-full max-w-5xl py-12 px-4 lg:px-0">
        <h2 className="text-5xl font-bold text-white text-center uppercase mb-12">
          Contato
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="w-full">
            <h3 className="text-3xl text-white font-bold mb-4">
              Endereço
            </h3>
            <p className="flex gap-2 items-center text-white mb-8">
              <MdLocationOn className="w-5 h-5" />
              Rua Coronel Diogo, 946, Aclimação, São Paulo SP, 01545-001, Brasil
            </p>
            <h3 className="text-3xl text-white font-bold mb-4">
              Telefone
            </h3>
            <p className="flex gap-2 items-center text-white mb-8">
              <MdPhone className="w-5 h-5" />
              +55 (11) 4563-5536
            </p>
            <h3 className="text-3xl text-white font-bold mb-4">
              E-mail
            </h3>
            <p className="flex gap-2 items-center text-white mb-8">
              <MdAttachEmail className="w-5 h-5" />
              contato@efficiencyservice.com.br
            </p>
          </div>

          <form
            className="flex flex-col gap-4 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="p-4 rounded-md"
              type="text"
              placeholder="Digite seu nome"
              {...register(
                "name", { 
                required: "O nome é obrigatório.", 
                minLength: { value: 4, message: "O nome deve ter no mínimo 4 caracteres." }, 
                maxLength: { value: 64, message: "O nome deve ter no máximo 64 caracteres." }
              })}
            />
            {errors.name && <span className="text-sm text-white">{errors.name?.message}</span>}
            <input
              className="p-4 rounded-md"
              type="email"
              placeholder="Digite seu e-mail"
              {...register(
                "email", {
                  required: "O e-mail é obrigatório.",
                  minLength: { value: 4, message: "O e-mail deve ter no mínimo 4 caracteres." },
                  maxLength: { value: 128, message: "O nome deve ter no máximo 128 caracteres." }
              })}
            />
            {errors.email && <span className="text-sm text-white">{errors.email?.message}</span>}
            <textarea
              cols={30}
              rows={10}
              className="p-4 rounded-md"
              placeholder="Digite sua mensagem"
              {...register(
                "message", {
                  required: "A mensagem é obrigatória.",
                  minLength: { value: 4, message: "A mensagem deve ter no mínimo 4 caracteres." },
                  maxLength: { value: 512, message: "A mensagem deve ter no máximo 512 caracteres." }
              })}
            />
            {errors.message && <span className="text-sm text-white">{errors.message?.message}</span>}
            <button
              className="text-main font-bold uppercase bg-second p-4 rounded-md"
              type="submit"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}