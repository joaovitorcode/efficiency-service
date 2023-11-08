import Image from "next/image"

interface Props {
  banner: {
    image: {
      src: string
      alt: string
    }
    title: string
    caption: string
    infoboxe: {
      image: {
        src: string
        alt: string
      }
      title: string
      description: string
    }
  }
}

export function BannerSegments({ banner }: Props) {
  return (
    <section className="relative w-full h-[512px] flex justify-center items-center mb-[512px] md:mb-[240px] lg:mb-[288px]">
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

      <div className="absolute top-[408px] md:-bottom-24 w-full max-w-5xl px-4 lg:px-0">
        <div className="col-span-3 bg-white rounded-md shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="flex flex-col gap-6 p-2 lg:p-12">
            <p className="text-2xl font-bold uppercase text-main">
              {banner.infoboxe.title}
            </p>
            <p className="text-lg text-gray-600 leading-8">
              {banner.infoboxe.description}
            </p>
          </div>
          <Image
            src={banner.infoboxe.image.src}
            alt={banner.infoboxe.image.alt}
            width={0}
            height={0}
            priority
            sizes="100vw"
            className="w-full h-full aspect-video rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  )
}