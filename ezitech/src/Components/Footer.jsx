import {
  FaBehance,
  FaFacebook,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <section className=" bg-[#042d89] py-10">
      <div className="mt-20 w-[90%] xl:w-[85%] 2xl:w-[75%] px-5 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
        <div>
          <h1 className="text-[18px] font-[700]">ABOUT</h1>
          <p className="text-[13px] font-[400] mt-5">
            Ezitech Institute provides a platform for newcomers to launch their
            IT and freelancing careers. Our emphasis on practical information
            technology courses that are career and work oriented makes us the
            top computer institute in Rawalpindi, Islamabad, Pakistan.
          </p>
        </div>
        <div>
          <h1 className="text-[18px] font-[700]">POPULAR COURSES</h1>
          <div className="flex gap-5 mt-5 hover:text-blue-500">
            <img
              className="w-[50px] h-[50px]"
              src="https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-_FILEminimizer_-75x75.webp"
              alt=""
            />
            <div>
              <h1 className="text-[14px] font-[700] cursor-pointer">
                Online Arbitrage Mastermind 2.0 [R...
              </h1>
              <span className="text-[#AAAAAA] text-[12px] font-[400] ">
                By Husnain Ali
              </span>
            </div>
          </div>
          <div className="flex gap-5 mt-5 hover:text-blue-500">
            <img
              className="w-[50px] h-[50px]"
              src="https://ezitech.org/wp-content/uploads/2023/07/5167842_cafe-75x75.webp"
              alt=""
            />
            <div className="">
              <h1 className="text-[14px] font-[700] cursor-pointer">
                Adobe Illustrator Course With Project...
              </h1>
              <span className="text-[#AAAAAA] text-[12px] font-[400]">
                By Husnain Ali
              </span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[18px] font-[700]">PAGES</h1>
          <ul className="list-disc mt-5 flex flex-col gap-3 pl-3">
            <li className="text-[12px] list-none font-[400] hover:text-[#385bce] cursor-pointer ">
              CONTACT US
            </li>
            <li className="text-[12px] hover:text-[#385bce] list-none font-[400]">
              SHOP
            </li>
            <li className="text-[12px] font-[400] list-none hover:text-[#385bce]">
              INTERNSHIP
            </li>
            <li className="hover:text-[#385bce] text-[12px] font-[400] list-none">
              CODELAB
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] font-[700]">CONTACT</h1>
          <ul className=" mt-5 flex flex-col gap-3">
            <li className="text-[12px] font-[400] ">
              <div className="flex gap-5 ">
                <FaLocationDot className="text-3xl text-[#2575ed]" />
                <span>
                  Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi,
                  Punjab 46000
                </span>
              </div>
            </li>
            <li className="text-[12px] font-[400]">
              <div className="flex gap-5 ">
                <FaPhone className="text-[16px] text-[#2575ed]" />
                <span>+923455555396</span>
              </div>
            </li>
            <li className="text-[12px] font-[400]">
              <div className="flex gap-5 ">
                <IoMail className="text-xl text-[#2575ed]" />
                <span className="hover:text-[#2525ed]">info@ezitech.org</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-white text-[14px] font-[400] text-center mt-20">
        Copyright © 2024 Ezitech Institute | Design & Develop by{" "}
        <span className="cursor-pointer hover:text-[#2575ed]">
          Eziline Software House
        </span>
      </p>

      <div className="w-[80%] mx-auto flex gap-5 justify-end ">
        <FaFacebook className="text-white hover:text-[#2525ed] cursor-pointer" />
        <FaBehance className="text-white hover:text-[#2525ed] cursor-pointer" />
        <FaLinkedinIn className="text-white hover:text-[#2525ed] cursor-pointer" />
      </div>
    </section>
  );
};

export default Footer;
