import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Service } from "@/components/Service"
import { CustomPrevArrow, CustomNextArrow } from "@/components/CarouselCustoms"

export function Services() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
    <section className="bg-main">
      <div className="max-w-5xl mx-auto py-12">
        <h2 className="text-5xl font-bold text-white text-center uppercase mb-12">
          Serviços
        </h2>

        <Slider {...settings} className="max-w-5xl mx-6">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="px-3">
              <Service />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}