/* eslint-disable react/prop-types */
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { useState } from "react";

function Panel({ title, children, index, activeIndex, onToggle }) {
  const isActive = index === activeIndex;

  return (
    <div
      className={
        isActive
          ? "answered-question active border border-[#fff] p-6 rounded-md w-[100%]"
          : "answered-question border border-[#fff] p-6 rounded-md w-[100%]"
      }
      onClick={() => onToggle(index)}
    >
      <div className="question flex ">
        <h5 className="flex-1">{title}</h5>
        <button className="acc-btn">
          {isActive ? <FiMinusCircle /> : <FiPlusCircle /> }
        </button>
      </div>
      {isActive && <p>{children}</p>}
    </div>
  );
}

export function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[#0C2027] py-[100px] px-[130px] text-[#fff] flex flex-col gap-[36px] max-[768px]:px-[39px] max-[425px]:px-[20px]">

      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-[800] text-[36px] leading-[40px]">Frequently Asked Questions</h2>
        <p className="font-[400] text-[16px] leading-6">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <Panel
          title="How traed helps with invoice for selling goods or services overseas?"
          //isActive={activeIndex === 0}
          index={0}
          activeIndex={activeIndex}
          onToggle={handleToggle}
        ></Panel>

        <Panel
          title="How you can convert your invoices into cash?"
          //   isActive={activeIndex === 0}
          index={1}
          activeIndex={activeIndex}
          onToggle={handleToggle}
        >
          Register with Traed.ai Introduce your company Add your buyer and get
          limits Upload invoices Get your cash in 48 hours once your Traed
          contract and Buyer’s notice are signed
        </Panel>

        <Panel
          title="Do you provide ongoing support?"
          //   isActive={activeIndex === 0}
          index={2}
          activeIndex={activeIndex}
          onToggle={handleToggle}
        ></Panel>

        <Panel
          title="What is your web design process?"
          //   isActive={activeIndex === 0}
          index={3}
          activeIndex={activeIndex}
          onToggle={handleToggle}
        ></Panel>
      </div>
    </div>
  );
}
