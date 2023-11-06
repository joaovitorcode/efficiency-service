import { Header } from "@/components/Header"
import { Banner } from "@/components/Banner"

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative top-[72px] md:top-[76px] lg:top-[80px]">
        <Banner />
      </div>
    </>
  )
}
