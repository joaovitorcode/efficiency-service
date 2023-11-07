import { useState } from 'react'

interface FAQProps {
  faq: {
    question: string
    answer: string
  }
}

export function AcordeonFAQ() {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={() => setShow(prev => !prev)}
        className="flex justify-between items-center bg-main p-6 rounded-lg text-second font-bold cursor-pointer"
      >
        <p className="">
          Pergunta
        </p>
        <p className="text-4xl leading-6">+</p>
      </div>
      {show && (
        <p className="px-6 text-gray-900 text-justify">
          Resposta
        </p>
      )}
    </div>
  )
}