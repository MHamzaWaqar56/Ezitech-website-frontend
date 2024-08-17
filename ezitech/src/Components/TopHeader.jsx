import {
  FaPhone,
  FaBehance,
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaUser,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";

function TopHeader() {
  return (
    <header className="top-header bg-[#3275db] py-3 text-[12px] font-[400] text-white ">
      <div className="flex flex-col lg:flex-row  lg:items-center  lg:gap-10 gap-5 justify-evenly ">
        <div className="w-[60%] flex justify-end md:flex-row flex-col lg:order-1 md:items-center self-end md:gap-10 gap-3 pr-3">
          <div className="flex md:items-center gap-[5px] self-end ">
            <FaPhone className="text-[16px]" />
            <span>+92 3455555396</span>
          </div>
          <div className="flex md:items-center gap-[5px] self-end ">
            <IoLocationSharp className="text-[16px]" />
            <span>Office #304-B Amna Plaza, Rawalpindi, Pakistan</span>
          </div>
          <div className="flex md:items-center gap-[5px] self-end">
            <MdOutlineWatchLater className="text-[16px]" />
            <span>Mon - Fri 8.00 - 20.00</span>
          </div>
        </div>

        <div className="w-[30%] flex order-1 lg:order-2 items-center sm:gap-10 gap-3 self-end  ">
          <ul className="flex items-center sm:gap-4 gap-3">
            <li>
              <FaFacebook className="text-[14px]" />
            </li>
            <li>
              <FaInstagram className="text-[14px]" />
            </li>
            <li>
              <FaBehance className="text-[14px]" />
            </li>
            <li>
              <FaLinkedinIn className="text-[14px]" />
            </li>
            <li>
              <FaYoutube className="text-[14px]" />
            </li>
          </ul>
          <div className="flex items-center  divide-x-[1px] divide-[#9a9a9a]">
            <div className="flex items-center gap-[5px] px-3 cursor-pointer">
              <FaUser className="text-[16px]" />
              <span>Login</span>
            </div>

            <button className="px-3">Register</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopHeader;
