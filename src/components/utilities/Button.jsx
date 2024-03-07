import { FaArrowRightLong } from "react-icons/fa6";


const Button = ({ content, className }) => {

  return (
    <>
      <div className="">
        <button className={`text-base font-inter font-normal leading-4  relative bg-[#4262FF] text-[#FFF] ${className}`}>{content}
          <FaArrowRightLong className='text-bas absolute top-1/2 -translate-y-1/2 right-7 text-[#FFF]' />
        </button>
      </div>
    </>
  )
}

export default Button