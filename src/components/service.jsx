/* eslint-disable react/prop-types */

export function Service({ imageSrc, title, description }) {
  return (
    <div className="flex flex-col gap-[18px] px-[24px] py-[30px] bg-[#7E8693] bg-opacity-10 rounded-[40px] max-w-[378px] max-[768px]:max-w-[100%]">
      <img src={imageSrc} alt="" className="w-[68px] h-[68px]" />
      <h3 className="font-[700] text-[18px] leading-[26px] text-[#fff]">
        {title}
      </h3>
      <p className="font-[400] text-[16px] leading-[26px] text-[#fff]">
        {description}
      </p>
    </div>
  );
}
