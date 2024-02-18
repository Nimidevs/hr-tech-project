import img from '../assets/platform.svg'
import time from '../assets/time.svg'
import msg from '../assets/msg.svg'
import check from '../assets/check.svg'
export function Platform (){
     return(
        <div className="flex justify-center items-center gap-[105px] text-[#fff] bg-[#0C2027] py-[100px] px-[130px] max-[768px]:px-[39px] max-[768px]:flex-col max-[425px]:px-[20px] platform">

        <div className="flex flex-col gap-[26px] font-[400] text-lg leading-8">
          <h3 className="font-[500] text-[42px] leading-[55px] max-w-[570px]">Our smart platform is flexible</h3>
          <p className="">Accounting doesn’t have to be that complicated.</p>
          <ul className="flex flex-col gap-[17px] ">
            <li className="flex items-center gap-[17px]">
              <img src={time} alt="" />
              Easy handling without previous knowledge{" "}
            </li>
            <li className="flex items-center gap-[17px]">
              <img src={check} alt="" />
              Access anywhere and anytime
            </li>
            <li className="flex items-center gap-[17px]">
              <img src={msg} alt="" />
              24/7 Premium Customer Support
            </li>
          </ul>
        </div>

        <img src={img} alt="" />
      </div>
     )
}