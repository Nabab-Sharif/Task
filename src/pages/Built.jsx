import HeadingH2 from '../components/utilities/Heading2'
import P18px from '../components/utilities/P18px'
import LearnMore from '../components/utilities/LearnMore'
import BuiltImg from '../assets/svg/built.svg'


const Built = () => {
  return (
    <section>
      <div className="max-w-container mx-auto p-[30px] mb-[120px]">
        <HeadingH2 className="mb-8" content="Built for the way you work" />
        <div className="flex justify-between ">
          {/* ============== index.css common-class (h6_14px)=========== */}
          <h6 className='text-sm font-inter font-normal leading-5 text-[#050038] capitalize border border-[#F2F2F2] py-[14px] px-5 rounded-3xl hover:bg-[#F1F3FD] transition-all duration-300'>Brainstorming</h6>
          <h6 className='text-sm font-inter font-normal leading-5 text-[#050038] capitalize border border-[#F2F2F2] py-[14px] px-5 rounded-3xl hover:bg-[#F1F3FD] transition-all duration-300'>Diagramming</h6>
          <h6 className='text-sm font-inter font-normal leading-5 text-[#050038] capitalize border border-[#F2F2F2] py-[14px] px-5 rounded-3xl hover:bg-[#F1F3FD] transition-all duration-300'>Meetings & Workshops</h6>
          <h6 className='text-sm font-inter font-normal leading-5 text-[#050038] capitalize border border-[#F2F2F2] py-[14px] px-5 rounded-3xl hover:bg-[#F1F3FD] transition-all duration-300'>Scrum Events</h6>
          <h6 className='text-sm font-inter font-normal leading-5 text-[#050038] capitalize border border-[#F2F2F2] py-[14px] px-5 rounded-3xl hover:bg-[#F1F3FD] transition-all duration-300'>Mapping</h6>
          <h6 className='text-sm font-inter font-normal leading-5 text-[#050038] capitalize border border-[#F2F2F2] py-[14px] px-5 rounded-3xl hover:bg-[#F1F3FD] transition-all duration-300'>Research & Design</h6>
          <h6 className='text-sm font-inter font-normal leading-5 text-[#050038] capitalize border border-[#F2F2F2] py-[14px] px-5 rounded-3xl hover:bg-[#F1F3FD] transition-all duration-300'>Strategic Planning</h6>
        </div>
        <div className="flex justify-between mt-10">
          <div className="w-[360px] p-4">
            <P18px className="opacity-100" content="Brainstorming" />
            <P18px className="opacity-70 my-7" content="Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on." />
            <LearnMore />
          </div>
          <div className="w-[700px] h-[472px] overflow-hidden">
            <img className='w-full h-full object-cover' src={BuiltImg} alt="Built Img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Built