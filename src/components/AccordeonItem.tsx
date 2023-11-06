import Link from "next/link"

interface Props {
  item: {
    value: string
    href: string
  }
}

export function AccordeonItem({ item }: Props) {
  return (
    <Link
        href={item.href}
        className={`w-full text-xl text-main bg-white hover:bg-gray-100 p-4 px-8`}
      >
      {item.value}
    </Link>
  )
}