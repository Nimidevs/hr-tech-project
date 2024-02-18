import logo from "../assets/traed-logo.svg";
import fb from "../assets/Facebook.svg";
import tw from "../assets/Twitter.svg";
import ig from "../assets/Instagram.svg";
import li from "../assets/LinkedIn.svg";
import yt from "../assets/YouTube.svg";
export function Footer() {
  return (
    <div className="bg-[#0C2027] text-[#fff] footer">
      <div className="border-b border-solid border-[#5c5c5c] py-[100px] px-[130px] flex justify-around max-[768px]:px-[39px] max-[425px]:px-[20px] max-[768px]:justify-between max-[425px]:flex-col max-[425px]:gap-11">
        <div className="">
          <ul className="flex flex-col gap-[26px]">
            <li>
              <img src={logo} alt="" />
            </li>
            <li>
              <p className="max-w-[303.45px] font-[400] text-[16px] leading-[24px]">
                TraedAI is a trade finance platform that uses AI and machine
                learning technology to provide innovative solutions to
                businesses looking to optimize their trade finance processes.
              </p>
            </li>
            <li>
              <ul className="flex gap-[16px]">
                <li>
                  <img src={fb} alt="" />
                </li>
                <li>
                  <img src={tw} alt="" />
                </li>
                <li>
                  <img src={ig} alt="" />
                </li>
                <li>
                  <img src={li} alt="" />
                </li>
                <li>
                  <img src={yt} alt="" />
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="flex flex-[0.5]  justify-between max-[768px]:flex-[0.9] max-[425px]:flex-[0]">
          <div>
            <ul className="flex flex-col gap-[24px]">
              <li className="font-[600] text-[16px] leading-[22px]">
                About us
              </li>
              <li className="text-[#B4B9C9] font-[400] text-[16px] leading-[22px]">
                Home
              </li>
              <li className="text-[#B4B9C9] font-[400] text-[16px] leading-[22px]">
                Product
              </li>
              <li className="text-[#B4B9C9] font-[400] text-[16px] leading-[22px]">
                Services
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-[24px]">
              <li className="font-[600] text-[16px] leading-[22px]">
                Contact us
              </li>
              <li className="text-[#B4B9C9] font-[400] text-[16px] leading-[22px]">
                Information
              </li>
              <li className="text-[#B4B9C9] font-[400] text-[16px] leading-[22px]">
                Request a quote
              </li>
              <li className="text-[#B4B9C9] font-[400] text-[16px] leading-[22px]">
                Consultation
              </li>
              <li className="text-[#B4B9C9] font-[400] text-[16px] leading-[22px]">
                Help center
              </li>
              <li className="text-[#B4B9C9] font-[400] text-[16px] leading-[22px]">
                Terms and conditions
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-[24px] px-[130px] text-center font-[400] text-[16px] leading-[22px] flex gap-[10px] flex-wrap justify-center">
        <span className="text-[#B4B9C9]">
          Copyright <span className="underline">©2022 Tread LTD</span>
        </span>
        |<span className="text-[#B4B9C9]">All Rights Reserved</span> |
        <span className="text-[#6D758F] underline">Terms and Conditions</span>|
        <span className="text-[#6D758F] underline"> Privacy Policy</span>
      </div>
    </div>
  );
}
