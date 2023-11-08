import Image from "next/image"
import Link from "next/link"

interface PostProps {
  title: string
  authorName: string
  authorPicture: {
    url: string
  }
  coverPhoto: {
    url: string
  }
  slug: string
  tag: string
}

interface Props {
  post: PostProps
}

export function Thumbnail() {
  return (
    <Link href={`/blog/1`} >
      <article className="flex flex-col gap-2">
        <Image
          src="/example.jpg"
          alt={`Imagem de capa do artigo`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full aspect-square rounded-2xl object-cover"
        />
        <p className="text-sm uppercase text-main font-bold">
          Tema
        </p>
        <h2 className="font-bold text-gray-900 hover:text-main line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas turpis magna, porttitor quis orci eu, euismod sollicitudin massa. Vestibulum volutpat risus at luctus ultricies.
        </h2>
        <div className="flex items-center gap-1">
          <Image
            src="/logotipo.gif"
            alt={`Foto de perfil do escritor da publicação`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-6 h-6 rounded-full shadow"
          />
          <p className="text-gray-900">
            Efficiency Service
          </p>
        </div>
      </article>
    </Link>
  )
}