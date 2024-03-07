import P18px from '../components/utilities/P18px'
import Walmart from '../assets/images/walmart.png'
import Cisco from '../assets/images/cisco.png'
import Deloitte from '../assets/images/deloitte.png'
import Volvo from '../assets/images/volvo.png'
import Okta from '../assets/images/okta.png'


const User = () => {
  return (
    <section>
      <div className="max-w-container mx-auto py-[60px]">
        <P18px className="text-center" content="Trusted by 45M+ users" />
        <div className="flex justify-between items-center px-10 mt-12">
          <div className="h-7 w-[117px] overflow-hidden">
            <img className='h-full w-full object-cover' src={Walmart} alt="Walmart" />
          </div>
          <div className="h-10 w-[71px] overflow-hidden">
            <img className='h-full w-full object-cover' src={Cisco} alt="Cisco" />
          </div>
          <div className="h-[53px] w-[53px] overflow-hidden">
            <img className='h-full w-full object-cover' src={Volvo} alt="Volvo" />
          </div>
          <div className="h-[18px] w-[92px] overflow-hidden">
            <img className='h-full w-full object-cover' src={Deloitte} alt="Deloitte" />
          </div>
          <div className="h-6 w-[71px] overflow-hidden">
            <img className='h-full w-full object-cover' src={Okta} alt="Okta" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default User