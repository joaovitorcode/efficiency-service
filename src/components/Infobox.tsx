import { CMSIcon } from "@/components/CMSIcon"

interface Props {
  infobox: {
    iconSVG: string
    title: string
  }
}

export function Infobox({ infobox }: Props) {
  return (
    <div className="w-full md:aspect-video bg-white hover:bg-second rounded-md shadow-md flex flex-col gap-6 justify-center items-center py-8 px-6">
      <CMSIcon icon={infobox.iconSVG} />
      <p className="text-xl text-center uppercase text-main">
        {infobox.title}
      </p>
    </div>
  )
}