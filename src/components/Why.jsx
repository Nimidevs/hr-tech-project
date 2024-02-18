import img from "../assets/laptop.svg";
import mag from "../assets/magn.svg";
import stop from "../assets/stopw.svg";
import hour from "../assets/hourg.svg";

export function Why() {
  return (
    <div className="flex justify-center items-center gap-[105px] text-[#fff] bg-[#0C2027] py-[100px] px-[130px] max-[768px]:px-[39px] max-[768px]:flex-col max-[425px]:px-[20px] why">
      <img src={img} alt="" />

      <div className="flex flex-col gap-[26px]">
        <h3 className="font-[500] text-[42px] leading-[55px] max-w-[570px]">Why choosing traed for trade managements?</h3>
        <p className="font-[400] text-lg leading-8 max-w-[562.5px]">Create invoices, quotes & co. automatically with your new digital accounting software.</p>
        <ul className="flex flex-col gap-[17px] font-[400] text-lg leading-8">
          <li className="flex items-center gap-[17px]">
            <img src={hour} alt="" />
            Save valuable time{" "}
          </li>
          <li className="flex items-center gap-[17px]">
            <img src={mag} alt="" />
            Keep the overview
          </li>
          <li className="flex items-center gap-[17px]">
            <img src={stop} alt="" />
            Work flexibly in the cloud
          </li>
        </ul>
      </div>
    </div>
  );
}
