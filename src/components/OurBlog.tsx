import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Thumbnail } from "@/components/Thumbnail"
import { CustomPrevArrow, CustomNextArrow } from "@/components/CarouselCustoms"

export function OurBlog() {
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
    <section className="w-full flex justify-center">
      <div className="w-full max-w-5xl py-12">
        <h2 className="text-5xl font-bold text-main text-center uppercase mb-12">
          Nosso Blog
        </h2>

        <Slider {...settings} className="max-w-5xl mx-6">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="px-3">
              <Thumbnail />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}