import ReportImg from '../assets/svg/report.svg'
import P18px from '../components/utilities/P18px'
import Button from '../components/utilities/Button'


const Report = () => {
  return (
    <section>
      <div className="max-w-container mx-auto pb-[60px]">
        <div className="w-[1020px] h-[500px] mx-auto relative">
          <div className=" overflow-hidden">
            <img className='w-full h-full object-cover' src={ReportImg} alt="Report Img" />
          </div>
          <div className="absolute left-[55%] top-1/2 -translate-y-1/2 w-[420px] text-center">
            <h3 className='text-[22px] leading-9 text-[#050038] font-inter font-bold'>The Ways We Work</h3>
            <P18px className="" content="How has our relationship with work changed?" />
            <Button className="py-3 pl-7 pr-14 leading-6 rounded-3xl" content="View the report" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Report