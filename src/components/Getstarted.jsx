import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import step1tab from '../assets/gs-tab.svg'
import step2tab from '../assets/gs-tab-2.svg'
import step3tab from '../assets/gs-tab-3.svg'
import { Step } from "./step";

export function Getstarted() {
  return (
    <div className="bg-[#0C2027] flex flex-col items-center text-[#fff] py-[100px] px-[130px] gap-[80px] max-[768px]:px-[39px] max-[425px]:px-[20px]">
      <div className="getstartedheader flex flex-col items-center text-center max-w-[924px]">
        <h3 className="font-[500] text-[42px] leading-[54px] max-w-[427px]">
          It’s easy. So how is that <span className="text-[#06BA63]">possible?</span>
        </h3>
        <p className="font-[400] text-[18px] leading-[32px]">
          Traed offers a simple and clear accounting software that can be used
          anywhere at any. This allows a maximum of flexibility and convenience
          for you and your customers.
        </p>
      </div>

      <div className="flex gap-6 max-[768px]:flex-col">
        <Step
          imageSrc={step1}
          title="Step 1 - Setup your portal"
          description="Install or Register web portal of traed.ai by clicking on Get Started button."
          tabimagesrc={step3tab}
        />
        <Step
          imageSrc={step2}
          title="Step 2 - Upload your legal docs"
          description="Complete the simple onboarding for your company to get registered on traed."
          tabimagesrc={step2tab}
        />
        <Step
          imageSrc={step3}
          title="Step 3 - Onboard and enjoy"
          description="That’s it!! Start enjoying all features of traed platform to make accounting simple."
          tabimagesrc={step1tab}
        />
      </div>

      <button className="underline font-[400] text-[18px] leading-[32px]">Get Started {">"}{">"}{">"}</button>
    </div>
  );
}
