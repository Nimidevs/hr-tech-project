import logo from '../assets/traed-logo.svg'
import { SlArrowDown } from "react-icons/sl";
import { HiArrowSmallRight } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

export function Header () {
    const [toggleMenu, setToggleMenu] = useState(false)
    return(
        <div className="bg-[#0C2027] flex justify-around py-6 header max-[768px]:justify-between px-[39px] relative max-[768px]:flex-col max-[768px]:items-start">

            <img src={logo} alt="" />

            <ul className={`flex items-center gap-20 max-[1084px]:gap-10 text-[#fff] max-[768px]:flex-col ${toggleMenu ? 'max-[768px]:absolute bg-[#0C2027] w-full' : 'max-[768px]:hidden'}`} style={{ top: '100%', left: 0}}>
                <li className=''>About</li>
                <li className='text-[#F06523]'>Our solutions</li>
                <li className='flex items-center gap-2'>Sectors <SlArrowDown /></li>
                <li className=''>Knowledge</li>
                <li className=''>Company</li>
                <li className='px-[18px] py-[14px] bg-[#06BA63] rounded-md flex items-center gap-1'>Get started <HiArrowSmallRight /></li>
            </ul>
            <button className='hidden max-[768px]:block absolute top-7 right-9' onClick={() => setToggleMenu(!toggleMenu)}><RxHamburgerMenu className='text-[#fff]'/></button>
        </div>
    )
}
