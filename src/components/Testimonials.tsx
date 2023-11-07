import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Testimonial } from "@/components/Testimonial"
import { CustomPrevArrow, CustomNextArrow } from "@/components/CarouselCustoms"

export function Testimonials() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow isBlue={true} />,
    nextArrow: <CustomNextArrow isBlue={true} />,
    rows: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        }
      }
    ]
  }

  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-5xl py-12">
        <h2 className="text-5xl font-bold text-main text-center uppercase mb-12">
          Segmentos
        </h2>

        <Slider {...settings} className="max-w-5xl mx-6">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div key={index} className="p-3">
              <Testimonial />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}