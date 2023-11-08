import Image from "next/image"
import { Inter } from 'next/font/google'

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Thumbnail } from "@/components/Thumbnail"
import { CustomPrevArrow, CustomNextArrow } from "@/components/CarouselCustoms"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow isBlue={true} />,
    nextArrow: <CustomNextArrow isBlue={true} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <>
      <Header />
      <div className="relative top-[72px] md:top-[76px] lg:top-[80px]">
        <main className={`${inter.className} max-w-3xl mx-auto py-8 lg:py-4 xl:px-0`}>
          <div className="flex gap-4 flex-wrap items-center px-4 lg:px-0">
            <p className="text-sm font-medium py-1 px-3 text-main bg-red-100 rounded-2xl">
              Tema
            </p>
            <p className="text-sm text-gray-900">
              01/01/2023
            </p>
            <p className="text-sm text-main font-bold">
              Efficiency Service
            </p>
          </div>
          <h2 className="text-gray-900 font-bold text-2xl mt-6 px-4 lg:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas turpis magna, porttitor quis orci eu, euismod sollicitudin massa.
          </h2>
          <Image
            src="/example.jpg"
            alt="Imagem de capa"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[512px] rounded-2xl object-cover mt-6 px-4 lg:px-0"
          />
          <article className="prose prose-headings:text-start text-justify prose-base sm:prose-lg md:prose-xl mt-6 px-4 lg:px-0">
            <p className="pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec facilisis eros. Aliquam scelerisque lectus sit amet eleifend laoreet. Integer malesuada mattis odio in pellentesque. Mauris consequat commodo dictum. Donec pharetra leo odio, et molestie justo tempor ut. Nullam id tortor convallis, lacinia urna vitae, hendrerit ligula.</p>
            <p className="pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec facilisis eros. Aliquam scelerisque lectus sit amet eleifend laoreet. Integer malesuada mattis odio in pellentesque. Mauris consequat commodo dictum. Donec pharetra leo odio, et molestie justo tempor ut. Nullam id tortor convallis, lacinia urna vitae, hendrerit ligula.</p>
            <p className="pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec facilisis eros. Aliquam scelerisque lectus sit amet eleifend laoreet. Integer malesuada mattis odio in pellentesque. Mauris consequat commodo dictum. Donec pharetra leo odio, et molestie justo tempor ut. Nullam id tortor convallis, lacinia urna vitae, hendrerit ligula.</p>
            <p className="pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec facilisis eros. Aliquam scelerisque lectus sit amet eleifend laoreet. Integer malesuada mattis odio in pellentesque. Mauris consequat commodo dictum. Donec pharetra leo odio, et molestie justo tempor ut. Nullam id tortor convallis, lacinia urna vitae, hendrerit ligula.</p>
          </article>
          <h3 className="text-4xl font-bold pt-12 px-4 lg:px-0">
            Artigos Recomendados
          </h3>
          <Slider {...settings} className="max-w-5xl mx-6 pt-12">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="px-3">
                <Thumbnail />
              </div>
            ))}
          </Slider>
        </main>

        <Footer />
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  const { slug = '' } = context.params

  return {
    props: {
      data: JSON.stringify(slug) || null
    }
  }
}