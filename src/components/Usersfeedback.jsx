/* eslint-disable react/no-unescaped-entities */
import user from "../assets/user.svg";
export function Usersfeedback() {
  return (
    <div className="flex justify-center bg-[#0C2027] py-[100px] px-[130px] max-[768px]:px-[39px] text-[#fff] feedback max-[425px]:px-[20px]">
      <div className="flex flex-col gap-[39px]">
        <h3 className="font-[700] text-[42px] leading-[55.02px]">
          What our users say?
        </h3>
        <div className="flex gap-6 max-[768px]:flex-col">

          <div className="flex flex-col bg-[#7E8693] bg-opacity-10 rounded-[40px] py-[66px] px-[50px] max-w-[577px] gap-6">
            <p className="font-[400] text-lg leading-8">
              “Traed has been a game-changer for our business. Their factoring
              services have improved our cash flow, allowing us to focus on
              growth and expansion. I recommend Traed to any business looking
              for reliable financial solutions.”
            </p>

            <div className="flex items-center gap-[22px]">
              <img src={user} alt="" />
              <div className="flex flex-col gap-[6px]">
                <h4 className="font-[700] text-base leading-[18px]">
                  JOHN CARTER
                </h4>
                <h5 className="font-[400] text-[16px] leading-[18px]">
                  ROLE, COMPANY
                </h5>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-[#7E8693] bg-opacity-10 rounded-[40px] py-[66px] px-[50px] max-w-[577px] gap-[25px]">
            <p className="font-[400] text-lg leading-8">
              “The Traed team's expertise in the industry is evident, and their
              commitment to our success is unmatched. We're grateful for their
              support and highly recommend their services.”
            </p>

            <div className="flex items-center gap-[22px]">
              <img src={user} alt="" />
              <div className="flex flex-col gap-[6px]">
                <h4 className="font-[700] text-[16px] leading-[18px]">
                  JOHN CARTER
                </h4>
                <h5 className="font-[400] text-[16px] leading-[18px]">
                  ROLE, COMPANY
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
