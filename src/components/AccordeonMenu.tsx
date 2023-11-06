import Link from "next/link"
import { MdArrowDropDownCircle } from "react-icons/md"
import { AccordeonItem } from "@/components/AccordeonItem"
import { useState } from "react"

interface Item {
  value: string
  href: string
}

interface Props {
  menu: Item
  items: Item[]
}

export function AccordeonMenu({ menu, items }: Props) {
  const [showItems, setShowItems] = useState(false)

  const handleItems = () => {
    setShowItems(prev => !prev)
  }

  return (
    <div className="w-full hover:bg-second">
      <div className="w-full flex justify-between items-center">
        <Link
          href={menu.href}
          className={`w-full text-xl text-main font-bold p-6`}
        >
          {menu.value}
        </Link>
        <MdArrowDropDownCircle
          onClick={handleItems}
          className="absolute right-4 w-8 h-8 text-main cursor-pointer"
        />
      </div>

      {showItems && (
        <div className="w-full flex flex-col">
          {items.map(item => (
            <AccordeonItem
            key={item.value}
            item={{ value: item.value, href: item.href }}
          />
          ))}
        </div>
      )}
    </div>
  )
}