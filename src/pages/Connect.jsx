import HeadingH2 from '../components/utilities/Heading2'
import P18px from '../components/utilities/P18px'
import ConnectImg from '../assets/svg/connect.svg'
import LearnMore from '../components/utilities/LearnMore'


const Connect = () => {
  return (
    <section>
      <div className="max-w-container mx-auto flex justify-between items-center pb-[120px]">
        <div className="w-[555px] h-[500px] overflow-hidden">
          <img className='w-full h-full object-cover' src={ConnectImg} alt="Connect Img" />
        </div>
        <div className="w-[465px]">
          <HeadingH2 className="w-[450px]" content="Connect your tools, close your tabs" />
          <P18px className="mt-7 mb-[52px] w-[460px] text-justify" content="Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love." />
          <LearnMore />
        </div>

      </div>
    </section>
  )
}

export default Connect