import React from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

export const CustomPrevArrow = ({ onClick, isBlue }: any) => (
  <div className={`${isBlue ? "text-main" : "text-white"} text-2xl ${isBlue ? "bg-white" : "bg-main"} rounded-full absolute top-[50%] translate-y-[-50%] cursor-pointer z-10 -left-6`} onClick={onClick}>
    <BsFillArrowLeftCircleFill />
  </div>
)


export const CustomNextArrow = ({ onClick, isBlue }: any) => (
  <div className={`${isBlue ? "text-main" : "text-white"} text-2xl ${isBlue ? "bg-white" : "bg-main"} rounded-full absolute top-[50%] translate-y-[-50%] cursor-pointer z-10 -right-6`} onClick={onClick}>
    <BsFillArrowRightCircleFill />
  </div>
)
