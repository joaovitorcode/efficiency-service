import { AcordeonFAQ } from "@/components/AcordeonFAQ"

export function FAQ() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-5xl py-12 px-4 lg:px-0">
        <h2 className="text-5xl font-bold text-main text-center uppercase mb-12">
          Dúvidas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="w-full">
            <h3 className="text-main font-bold text-2xl sm:text-3xl mb-1 sm:mb-6">
              Tudo o que você precisa saber sobre a Efficiency Service
            </h3>
            <p className="text-base text-main">
              Ainda tem alguma dúvida? Fale conosco pelo
              <a
                href={`https://api.whatsapp.com/send?phone=551145635536`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline underline-offset-4"
              >
                WhatsApp
              </a>
            </p>
          </div>

          <div className="w-full flex flex-col gap-6">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="flex flex-col gap-6">
                <AcordeonFAQ />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}