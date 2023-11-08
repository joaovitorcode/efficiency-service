import Link from "next/link"
import { useState } from "react"
import { DropdownItem } from "@/components/DropdownItem"

interface Item {
  value: string
  href: string
}

interface Props {
  menu: string
  items: Item[]
}

export function DropdownMenu({ menu, items }: Props) {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false)

  const handleMouseEnter = () => {
    setSubMenuVisible(true)
  }

  const handleMouseLeave = () => {
    setSubMenuVisible(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block text-left group"
    >
      <span className="text-xl lg:text-2xl py-2 text-white group-hover:text-second font-bold cursor-default">
        {menu}
      </span>

      {isSubMenuVisible && (
        <div className="absolute -left-4 mt-2 w-64 rounded-[8px] shadow-lg bg-white">
          <div className="p-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map(item => (
              <DropdownItem
                key={item.value}
                item={item}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}