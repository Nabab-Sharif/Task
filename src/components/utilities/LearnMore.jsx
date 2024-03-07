import { FaArrowRightLong } from "react-icons/fa6";


const LearnMore = () => {
  return (
    <>
      <div className="relative w-[148px]">
        <a className='text-xl leading-6 font-inter font-normal text-[#4262FF] underline' href="#">Learn more</a>
        <FaArrowRightLong className='text-xl leading-6 font-inter font-normal absolute top-1/2 -translate-y-1/2 right-2 text-[#4262FF]' />
      </div>
    </>
  )
}

export default LearnMore