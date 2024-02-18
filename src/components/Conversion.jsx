import people from "../assets/people.svg";
import phoneimg from "../assets/get-started-phone.svg";
import { HiArrowSmallRight } from "react-icons/hi2";
export function Conversion() {
  return (
    <div className="bg-[#364548] flex justify-center items-center gap-[30px] text-[#fff] py-[100px] px-[130px] max-[768px]:px-[39px] max-[425px]:px-[20px] max-[768px]:flex-col conversion">
      <div className="flex flex-col gap-[30px] max-w-[576px]">
        <h1 className="font-[700] text-[42px] leading-[55.02px] conversion-header">
          Explore endless possibilities with Traed.
        </h1>
        <p className="font-[400] text-[16px] leading-6 conversion-paragraph">
          Secure your seat today at traed. Enjoy early benifits by joining traed
          community now. We are providing simple assets solution every
          successfull company needs.
        </p>
        <div>
          {/* <button className="px-[18px] py-[14px] bg-[#06BA63] rounded-md flex items-center gap-1 max-[425px]:py-[27px] max-[425px]:px-[32px] get-started-btn">
            Get started <HiArrowSmallRight />
          </button> */}
          <button className="px-[18px] py-[14px] bg-[#06BA63] rounded-md flex items-center gap-1 max-[425px]:py-[27px] max-[425px]:px-[32px] font-[700] text-[16px] leading-[16px] get-started-btn">
            <span className="text-uppercase max-[425px]:uppercase">Get started</span>{" "}
            <HiArrowSmallRight className=" max-[425px]:hidden" />
          </button>
        </div>
      </div>

      <picture>
        <source media="(max-width:425px)" srcSet={phoneimg} />

        <img src={people} alt="" />
      </picture>
      {/* <img src={people} alt="" /> */}
    </div>
  );
}
