import { Service } from "./service";
import invoice from "../assets/invoice.svg";
import wallet from "../assets/wallet.svg";
import factoring from "../assets/factoring.svg";
import rfactoring from "../assets/rfactoring.svg";
import ios from "../assets/IOS.svg";
import iostab from "../assets/IOS-tab.svg";
import iosphone from '../assets/IOS-phone.svg'

export function Services() {
  return (
    <div className="services bg-[#0C2027] flex flex-col items-center py-[100px] px-[130px] gap-[80px] max-[768px]:px-[39px] max-[425px]:px-[20px]">
      <div className="flex flex-col items-center text-center max-w-[924px]">
        <h2 className="font-[500] text-[42px] leading-[54px] text-[#fff] max-w-[633px]">
          Traed helps your buisness save time every day!
        </h2>
        <p className="font-[400] text-[18px] leading-[32px] text-[#fff]">
          Traed offers a simple and clear accounting software that can be used
          anywhere at any. This allows a maximum of flexibility and convenience
          for you and your customers.
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-6 max-[768px]:flex flex-col">
        <Service
          imageSrc={invoice}
          title="INVOICE DISCOUNTING"
          description="a financing method where a business sells its unpaid invoices to a
            third party at a discount to access immediate cash flow."
        ></Service>

        <div className="row-span-3">
          <picture>
          <source media="(max-width:425px)" srcSet={iosphone} className="h-100% w-100%"/>
            <source media="(max-width:768px)" srcSet={iostab} className="h-100% w-100%"/>

            <img className="max-w-[100%] h-[100%] max-[768px]:w-[100%]" src={ios} alt="" />
          </picture>
        </div>

        {/* <img className="row-span-3" src={ios} alt="" /> */}

        <Service
          imageSrc={factoring}
          title="FACTORING"
          description="a financial service that allows businesses to sell their accounts
            unpaid invoices to a factoring company in exchange for fast cash."
        ></Service>

        <Service
          imageSrc={wallet}
          title="DEALS MANAGING"
          description="overseeing and optimizing various aspects of business transactions,
            from negotiation and documentation to tracking and performance
            analysis."
        ></Service>

        <Service
          imageSrc={rfactoring}
          title="REVERSE FACTORING"
          description="a financial arrangement where a buyer facilitates early payments to
            their suppliers through a third-party financing provider"
        ></Service>
      </div>
    </div>
  );
}
