import img from "../assets/ipones.svg";
import arrow from "../assets/adown.svg";
import lock from "../assets/lock.svg";
import bolt from "../assets/bolt.svg";

export function Solutions() {
  return (
    <div className="flex justify-center items-center gap-[105px] text-[#fff] bg-[#0C2027] py-[100px] px-[130px] max-[768px]:px-[39px] max-[768px]:flex-col max-[425px]:px-[20px] solutions">
      <img src={img} alt="" />

      <div className="flex flex-col gap-[26px] solutions">
        <h3 className="font-[500] text-[42px] leading-[55px] max-w-[570px]">Sell invoices with traed’s solutions</h3>
        <p className="font-[400] text-lg leading-8">Sell your claims to traed and get your money immediately</p>
        <ul className="flex flex-col gap-[17px] font-[400] text-lg leading-8">
          <li className="flex items-center gap-[17px]">
            <img src={arrow} alt="" />
            Fast financing solutions{" "}
          </li>
          <li className="flex items-center gap-[17px]">
            <img src={bolt} alt="" />
            Fast and secure growth for your company
          </li>
          <li className="flex items-center gap-[17px]">
            <img src={lock} alt="" />
            Create realtime secured deals
          </li>
        </ul>
      </div>
    </div>
  );
}
