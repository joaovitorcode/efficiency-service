import Image from "next/image"

interface Props {
  topic: {
    image: {
      src: string
      alt: string
    }
    title: string
    description: string
  }
}

export function Topic({ topic }: Props) {
  return (
    <div className="p-4 flex flex-col sm:flex-row gap-4 bg-white rounded-lg shadow-md">
      <Image
        src={topic.image.src}
        alt={topic.image.alt}
        width={0}
        height={0}
        priority
        sizes="100vw"
        className="w-full sm:w-64 lg:w-40 sm:h-64 lg:h-40 aspect-video sm:aspect-square object-cover rounded"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-main uppercase">
          {topic.title}
        </h3>
        <p className="text-gray-600 text-justify">
          {topic.description}
        </p>
      </div>
    </div>
  )
}