import HeadingH2 from '../components/utilities/Heading2'
import LearnMore from '../components/utilities/LearnMore'
import KindsOfTeamImg from '../assets/svg/kindsOfTeam.svg'
import Integrate1 from '../assets/images/integrate1.png'
import Integrate2 from '../assets/images/integrate2.png'
import Integrate3 from '../assets/images/integrate3.png'
import Integrate4 from '../assets/images/integrate4.png'
import P18px from '../components/utilities/P18px'


const KindsTeam = () => {
  return (
    <section>
      <div className="max-w-container mx-auto p-[30px] mb-[120px]">
        <HeadingH2 className="mb-8" content="Built for all kinds of teams" />
        <div className="flex gap-2">
          <h6 className='text-sm font-inter font-normal leading-5 text-[#050038] capitalize border border-[#F2F2F2] py-[14px] px-5 rounded-3xl hover:bg-[#F1F3FD] transition-all duration-300'>UX & Design</h6>
          <h6 className='text-sm font-inter font-normal leading-5 text-[#050038] capitalize border border-[#F2F2F2] py-[14px] px-5 rounded-3xl hover:bg-[#F1F3FD] transition-all duration-300'>Marketing</h6>
          <h6 className='text-sm font-inter font-normal leading-5 text-[#050038] capitalize border border-[#F2F2F2] py-[14px] px-5 rounded-3xl hover:bg-[#F1F3FD] transition-all duration-300'>Product Management</h6>
          <h6 className='text-sm font-inter font-normal leading-5 text-[#050038] capitalize border border-[#F2F2F2] py-[14px] px-5 rounded-3xl hover:bg-[#F1F3FD] transition-all duration-300'>Engineering</h6>
          <h6 className='text-sm font-inter font-normal leading-5 text-[#050038] capitalize border border-[#F2F2F2] py-[14px] px-5 rounded-3xl hover:bg-[#F1F3FD] transition-all duration-300'>Consultants</h6>
          <h6 className='text-sm font-inter font-normal leading-5 text-[#050038] capitalize border border-[#F2F2F2] py-[14px] px-5 rounded-3xl hover:bg-[#F1F3FD] transition-all duration-300'>Agile Coaches</h6>
          <h6 className='text-sm font-inter font-normal leading-5 text-[#050038] capitalize border border-[#F2F2F2] py-[14px] px-5 rounded-3xl hover:bg-[#F1F3FD] transition-all duration-300'>Sales</h6>
        </div>
        <div className="flex justify-between mt-10">
          <div className="w-[360px] px-4">
            <ul className='flex gap-4 flex-col mb-9'>
              <li className='text-xl leading-6 font-inter font-normal text-[#050038] opacity-60 pl-8 relative before:border-[#050038] before:w-2 before:h-[18px] before:border-r-[4px] before:border-b-[4px] before:rotate-45 before:absolute before:top-0 before:left-0'>Build low-fi wireframes</li>
              <li className='text-xl leading-6 font-inter font-normal text-[#050038] opacity-60 pl-8 relative before:border-[#050038] before:w-2 before:h-[18px] before:border-r-[4px] before:border-b-[4px] before:rotate-45 before:absolute before:top-0 before:left-0'>Involve stakeholders in the design process</li>
              <li className='text-xl leading-6 font-inter font-normal text-[#050038] opacity-60 pl-8 relative before:border-[#050038] before:w-2 before:h-[18px] before:border-r-[4px] before:border-b-[4px] before:rotate-45 before:absolute before:top-0 before:left-0'>Run engaging design workshops</li>
            </ul>
            <LearnMore />
            <P18px className="mt-[70px] mb-[14px]" content="Integrate your favorite tools" />
            <ul className='flex gap-8'>
              <li className='h-7 w-7 overflow-hidden'>
                <img className='w-full h-full object-cover' src={Integrate4} alt="Integrate4 image" />
              </li>
              <li className='h-7 w-7 overflow-hidden'>
                <img className='w-full h-full object-cover' src={Integrate3} alt="Integrate3 image" />
              </li>
              <li className='h-7 w-8 overflow-hidden'>
                <img className='w-full h-full object-cover' src={Integrate2} alt="Integrate2 image" />
              </li>
              <li className='h-7 w-7 overflow-hidden'>
                <img className='w-full h-full object-cover' src={Integrate1} alt="Integrate1 image" />
              </li>
            </ul>
          </div>
          <div className="w-[700px] h-[468px] overflow-hidden">
            <img className='w-full h-full object-cover' src={KindsOfTeamImg} alt="KindsOfTeam Img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default KindsTeam