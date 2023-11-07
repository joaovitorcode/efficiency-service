import Image from "next/image"
import { BsFillStarFill, BsPersonCircle } from "react-icons/bs"

interface Props {
  testimonial: {
    name: string
    stars: number
    description: string
    image?: {
      url: string
    }
  }
}

export function Testimonial() {
  return (
    <div className="w-full bg-white rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <BsPersonCircle className="w-8 h-8 text-gray-900" />
        <p className="font-medium text-gray-900">
          Cliente
        </p>
      </div>

      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, sem at interdum finibus, ex libero auctor velit, id blandit felis odio nec libero. Nunc pellentesque urna sed libero accumsan lobortis. Donec a nisi et purus finibus faucibus quis nec mauris. Quisque imperdiet eros quis interdum imperdiet.
      </p>

      <div className="flex gap-2">
        <BsFillStarFill className="w-6 h-6 text-yellow-400" />
        <BsFillStarFill className="w-6 h-6 text-yellow-400" />
        <BsFillStarFill className="w-6 h-6 text-yellow-400" />
        <BsFillStarFill className="w-6 h-6 text-yellow-400" />
        <BsFillStarFill className="w-6 h-6 text-yellow-400" />
      </div>
    </div>
  )
}