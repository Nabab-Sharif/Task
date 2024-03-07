import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Heading5 from '../components/utilities/Heading5';
import Path from '../assets/images/path.png'


const Footer = () => {
  return (
    <section className='bg-[#02033B]'>
      <div className="max-w-container mx-auto py-24">
        <div className="flex justify-between">
          <div className="">
            <Heading5 className='text-[#FFF]' content="Scan. Detect. Remove." />
            <div className="flex gap-10 my-12">
              <div className="h-9 w-9 flex items-center justify-center bg-[#FFFFFF] rounded-[5px]">
                <FaFacebookF className='text-2xl cursor-pointer' />
              </div>
              <div className="h-9 w-9 flex items-center justify-center bg-[#FFFFFF] rounded-[5px]">
                <FaTwitter className='text-2xl cursor-pointer' />
              </div>
              <div className="h-9 w-9 flex items-center justify-center bg-[#FFFFFF] rounded-[5px]">
                <FaYoutube className='text-2xl cursor-pointer' />
              </div>
            </div>
            <div className="flex gap-[26px]">
              <a className='text-[11px] font-inter font-normal leading-[15px] text-[#FFFFFF] capitalize underline' href="#">Privacy Policy</a>
              <a className='text-[11px] font-inter font-normal leading-[15px] text-[#FFFFFF] capitalize underline' href="#">Terms of Service</a>
            </div>
            <div className="mt-12">
              <article className='text-[11px] font-inter font-normal leading-[15px] text-[#FFFFFF] capitalize w-[312px]'>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</article>
            </div>
            <div className="mt-5">
              <span className='text-[11px] font-inter font-normal leading-[15px] text-[#FFFFFF] capitalize'>Designed & developed by <a className='text-[11px] font-inter font-normal leading-[15px] text-[#FFFFFF] capitalize underline' href="#">Bigger Picture</a></span>
            </div>
          </div>
          <div className="">
            <div className="">
              <h3 className='text-[35px] font-inter font-extrabold leading-[45px] text-[#FFFFFF]'>Miro.</h3>
              <hr className='w-[178px] mt-[25px] mb-[60px]' />
            </div>
            <ul className='flex flex-col gap-6'>
              {/*.................common class...................*/}
              <li className='phones'>iPhone</li>
              <li className='phones'>Android</li>
              <li className='phones'>Help</li>
              <li className='phones'>About</li>
              <li className='phones'>Insights</li>
            </ul>
          </div>
          <div className="bg-[rgb(253,146,53)] relative w-[436px] h-[232px] rounded-[42px]">
            <div className="h-full w-[190px] absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <img className="h-full w-full" src={Path} alt="Path" />
            </div>
            <div className="absolute top-0 left-0 p-9 z-20">
              <Heading5 content="Sign up to our newsletter" className="text-[#02033B]" />
              <article className='text-[15px] font-inter font-normal leading-5 text-[#02033B] mt-[21px] mb-9'>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</article>
              <div className="w-full h-ful">
                <div className="w-[364px] h-[35px] relative rounded-3xl overflow-hidden">
                  <input type="text" placeholder='Email address' className='text-[15px] font-inter font-normal text-[#02033B] py-2 pl-4 pr-[130px] w-full h-full outline-none' />
                  <button className='text-[15px] font-inter font-extrabold leading-5 text-[#FFFFFF] absolute top-0 right-0 bg-[#02033B] h-full px-7'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <article className='text-[12px] font-inter font-normal leading-[15px] text-[#FFFFFF] w-[550px] mt-[80px]'>Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</article>
      </div>
    </section>
  )
}

export default Footer