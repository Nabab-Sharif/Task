import Logo from '../assets/images/logo.png'
import Button from '../components/utilities/Button';
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { useState } from 'react'


const Navbar = () => {
  const [product, setProduct] = useState(false);
  const handleMenu = () => {
    setProduct(!product)
  }

  return (
    <section>
      <div className="w-[1380px] mx-auto flex gap-[280px] items-center justify-between py-6">
        <div className="flex gap-6">
          <div className="w-[91px] h-8 overflow-hidden">
            <img className='w-full h-full object-cover' src={Logo} alt="Logo" />
          </div>

          <div className="flex gap-4 items-center py-2">
            <div className="relative">
              <div className="flex gap-[14px] items-center">
                <li className='list-none text-base font-inter font-normal leading-6 text-[#050038]'>Product</li>
                <div onClick={handleMenu} className='text-sm'>
                  {product ? <IoIosArrowUp /> : <FaChevronDown />}
                </div>
              </div>
              {
                product &&
                <ul className='absolute top-[35px] left-0  bg-gray-100 p-6 flex flex-col gap-y-3'>
                  <li>
                    <a className='text-base font-inter font-normal leading-6 text-[#050038]' href="#">Product1</a>
                  </li>
                  <li>
                    <a className='text-base font-inter font-normal leading-6 text-[#050038]' href="#">Product2</a>
                  </li>
                  <li>
                    <a className='text-base font-inter font-normal leading-6 text-[#050038]' href="#">Product3</a>
                  </li>
                  <li>
                    <a className='text-base font-inter font-normal leading-6 text-[#050038]' href="#">Product4</a>
                  </li>
                </ul>
              }
            </div>
            <div className="flex gap-[14px] items-center">
              <li className='list-none text-base font-inter font-normal leading-6 text-[#050038]'>Solutions</li>
              <FaChevronDown className='text-sm' />
            </div>
            <div className="flex gap-[14px] items-center">
              <li className='list-none text-base font-inter font-normal leading-6 text-[#050038]'>Resources</li>
              <FaChevronDown className='text-sm' />
            </div>
            <div className="flex gap-[14px] items-center">
              <li className='list-none text-base font-inter font-normal leading-6 text-[#050038]'>Enterprise</li>
            </div>
            <div className="flex gap-[14px] items-center">
              <li className='list-none text-base font-inter font-normal leading-6 text-[#050038]'>Pricing</li>
            </div>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex gap-4">
            <div className="flex gap-2 items-center text-base font-inter font-normal leading-6 text-[#050038]">
              <TbWorld className='text-2xl' />
              <li className='list-none text-base font-inter font-normal leading-6 text-[#050038]'>EN</li>
            </div>
            <div className="">
              <li className='list-none text-base font-inter font-normal leading-6 text-[#050038]'>Contact Sales</li>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className='transition-all duration-500 py-4 px-7 rounded-[30px] hover:leading-4 text-[#050038]  hover:bg-[#4262FF] hover:text-[#FFF] leading-4 text-base font-inter font-normal'>Login</button>
            <Button className='py-4 pl-7 pr-14 rounded-[30px]' content='Sing up free' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Navbar