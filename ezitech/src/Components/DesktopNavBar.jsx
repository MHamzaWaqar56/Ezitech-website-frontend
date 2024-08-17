import { FaRegHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function MobileNavBar() {
  return (
    <div className="px-3 lg1:hidden pt-[25px]">
      <nav className="w-[100%] flex items-center justify-evenly">
        <div className="w-[20%] flex justify-center">
          <img
            className="w-[170px]"
            src="http://ezitech.org/wp-content/uploads/2024/07/blue-official.png"
            alt="logo"
          />
        </div>

        {/* mbile navigation menu */}

        <div className="w-[80%]">
          <ul className="text-[16px] font-[700] text-[#555555] flex w-full">
            <li className=" px-[10px] py-[5px] text-black hover:text-[#20a9cc]">
              <NavLink to="/"> HOME </NavLink>
            </li>
            <li className=" text-black  px-[10px] py-[5px] hover:text-[#20a9cc]">
              <NavLink to="/aboutus"> ABOUT US </NavLink>
            </li>

            <li className="relative text-black px-[10px] py-[5px] hover:text-[#20a9cc] group">
              <div className="flex justify-between flex-col relative">
                <span>
                  <NavLink to="/certifications">CERTIFICATIONS</NavLink>
                </span>
              </div>
              <ul className="dropdown w-[170px] text-black bg-white border-t-[3px] border-t-[#20a9cc] list-disc absolute pt-[10px] pl-[15px] pr-[15px] top-full left-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li className="py-2 hover:text-[#20a9cc] text-left text-black font-normal list-none">
                  <NavLink to="/onlinecourses">Online Courses</NavLink>
                </li>
              </ul>
            </li>

            <li className="relative text-black px-[10px] py-[5px] hover:text-[#20a9cc] group">
              <div className="flex justify-between flex-col relative">
                <span>
                  <NavLink to="#">CAREERS</NavLink>
                </span>
              </div>
              <ul className="dropdown w-[200px] border-t-[3px] border-t-[#20a9cc]  text-black bg-white list-disc absolute pt-[10px] pl-[15px] pr-[15px] top-full left-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li className="py-2 hover:text-[#00CBFF] text-left text-black font-normal list-none">
                  <NavLink to="/internships"> Internships </NavLink>
                </li>
                <li className="py-2 hover:text-[#00CBFF] text-left text-black font-normal list-none">
                  <NavLink to="/jobs">Job Oppertunities</NavLink>
                </li>
              </ul>
            </li>

            <li className=" text-black px-[10px] py-[5px] hover:text-[#20a9cc]">
              <NavLink to="/seminars"> SEMINARS </NavLink>
            </li>
            <li className="text-black px-[10px] py-[5px] hover:text-[#20a9cc]">
              <NavLink to="/techblogs"> TECH BLOGS </NavLink>
            </li>
            <li className=" text-black px-[10px] py-[5px] hover:text-[#20a9cc]">
              <NavLink to="/iportallogin">IPORTAL LOGIN </NavLink>
            </li>
            <div className=" flex justify-center w-[17%]  pl-[20px] pt-[4px] pr-[4px] pb-[4px] ">
              <div className="w-[50%] flex justify-center relative before:content-[''] before:absolute before:top-[0px] before:left-[1px] before:h-[30px] before:w-[1px] before:bg-black before:opacity-40 items-center">
                <FaRegHeart className="text-black text-[22px] hover:text-[#61CE70]" />
              </div>
              <div className="w-[22%]">
                <div className="w-full border-3 border-solid p-[2px_2px]  hover:bg-[#20a9cc] hover:border-[#20a9cc] border-[#20a9cc] ">
                  <IoSearch className="text-[#20a9cc] hover:text-white text-[24px]" />
                </div>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MobileNavBar;
