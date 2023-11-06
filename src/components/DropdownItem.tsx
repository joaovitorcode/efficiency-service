import Link from "next/link"

interface Props {
  item: {
    value: string
    href: string
  }
}

export function DropdownItem({ item }: Props) {
  return (
    <Link
      href={item.href}
      className="flex items-center gap-4 py-3 px-4 rounded-md text-gray-600 hover:bg-gray-100"
      role="menuitem"
    >
      {item.value}
    </Link>
  )
}