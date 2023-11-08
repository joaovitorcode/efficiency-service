import Image from "next/image"
import { CMSIcon } from "@/components/CMSIcon"

interface Props {
  banner: {
    image: {
      src: string
      alt: string
    }
    title: string
    caption: string
    infoboxes: Array<{
      iconSVG: string
      title: string
    }>
  }
}

export function BannerServices({ banner }: Props) {
  return (
    <section className="relative w-full h-[512px] flex justify-center items-center mb-[512px] md:mb-24">
      <Image
        src={banner.image.src}
        alt={banner.image.alt}
        width={0}
        height={0}
        priority
        sizes="100vw"
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-main opacity-80" />
      
      <div className="absolute max-w-[512px] flex flex-col gap-8">
        <h2 className="text-5xl font-bold text-second text-center">
          {banner.title}
        </h2>
        <p className="text-white text-2xl text-center">
          {banner.caption}
        </p>
        <button className="mx-auto bg-second text-main font-bold py-4 px-16 uppercase rounded-md">
          Fale Conosco
        </button>
      </div>

      <div className="absolute top-[408px] md:-bottom-24 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 px-4 lg:px-0">
        {banner.infoboxes.map((infobox) => (
          <div key={infobox.title} className="w-full md:aspect-video bg-white hover:bg-second rounded-md shadow-md flex flex-col gap-6 justify-center items-center py-8 px-6">
            <CMSIcon icon={infobox.iconSVG} />
            <p className="text-xl text-center uppercase text-main">
              {infobox.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}