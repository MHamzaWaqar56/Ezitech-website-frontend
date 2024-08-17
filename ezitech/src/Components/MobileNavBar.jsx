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
            src="../../public/Images/white-1.png"
            alt="logo"
          />
        </div>

        {/* mbile navigation menu */}

        <div className="w-[80%]">
          <ul className="text-[16px] font-[700] text-[#555555] flex w-full">
            <li className=" px-[10px] py-[5px] text-white hover:text-[#00CBFF]">
              <NavLink to="/"> HOME </NavLink>
            </li>
            <li className=" text-white  px-[10px] py-[5px] hover:text-[#00CBFF]">
              <NavLink to="/aboutus"> ABOUT US </NavLink>
            </li>

            <li className="relative text-white px-[10px] py-[5px] hover:text-[#00CBFF] group">
              <div className="flex justify-between flex-col relative">
                <span>
                  <NavLink to="/certifications">CERTIFICATIONS</NavLink>
                </span>
              </div>
              <ul className="dropdown w-[170px] border-t-[3px] border-t-[#20a9cc]  text-black bg-white list-disc absolute pt-[10px] pl-[15px] pr-[15px] top-[52px] left-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li className="py-2 hover:text-[#00CBFF] text-left text-black font-normal list-none">
                  <NavLink to="/onlinecourses"> Online Courses </NavLink>
                </li>
              </ul>
            </li>

            <li className="relative text-white px-[10px] py-[5px] hover:text-[#00CBFF] group">
              <div className="flex justify-between flex-col relative">
                <span>
                  <NavLink to="#">CAREERS</NavLink>
                </span>
              </div>
              <ul className="dropdown w-[200px] border-t-[3px] border-t-[#20a9cc]  text-black bg-white list-disc absolute pt-[10px] pl-[15px] pr-[15px] top-[52px] left-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li className="py-2 hover:text-[#00CBFF] text-left text-black font-normal list-none">
                  <NavLink to="/internships">Internships</NavLink>
                </li>
                <li className="py-2 hover:text-[#00CBFF] text-left text-black font-normal list-none">
                  <NavLink to="/jobs"> Job Oppertunities </NavLink>
                </li>
              </ul>
            </li>

            <li className=" text-white px-[10px] py-[5px] hover:text-[#00CBFF]">
              <NavLink to="/seminars"> SEMINARS </NavLink>
            </li>
            <li className="text-white px-[10px] py-[5px] hover:text-[#00CBFF]">
              <NavLink to="/techblogs"> TECH BLOGS </NavLink>
            </li>
            <li className=" text-white px-[10px] py-[5px] hover:text-[#00CBFF]">
              <NavLink to="/iportallogin">IPORTAL LOGIN </NavLink>
            </li>
            <div className=" flex justify-center w-[17%]  pl-[20px] pt-[4px] pr-[4px] pb-[4px] ">
              <div className="w-[50%] flex justify-center relative before:content-[''] before:absolute before:top-[0px] before:left-[1px] before:h-[30px] before:w-[1px] before:bg-white before:opacity-40 items-center">
                <FaRegHeart className="text-white text-[22px] hover:text-[#61CE70]" />
              </div>
              <div className="w-[22%]">
                <div className="w-full border-3 border-solid p-[2px_2px] hover:bg-[#20a9cc] hover:border-[#20a9cc] ">
                  <IoSearch className="text-white text-[24px]" />
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
