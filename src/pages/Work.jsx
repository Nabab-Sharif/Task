import HeadingH2 from '../components/utilities/Heading2'
import P18px from '../components/utilities/P18px'
import WorkImg from '../assets/svg/work.svg'
import LearnMore from '../components/utilities/LearnMore';


const Work = () => {
  return (
    <section>
      <div className="max-w-container mx-auto flex justify-between items-center pb-[120px]">
        <div className="w-[550px]">
          <HeadingH2 className="w-[450px]" content="Work together, wherever you work" />
          <P18px className="mt-4 mb-10 text-justify w-[450px]" content="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are." />
          <LearnMore />
        </div>
        <div className="w-[555px] h-[535px] overflow-hidden">
          <img className='w-full h-full object-cover' src={WorkImg} alt="Work Img" />
        </div>
      </div>
    </section>
  )
}

export default Work