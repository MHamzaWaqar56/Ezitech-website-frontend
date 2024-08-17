import React from "react";
import TopHeader from "../Components/TopHeader";
import Footer from "../Components/Footer";
import DesktopNavBar from "../Components/DesktopNavBar";

const JobOppertunities = () => {
  return (
    <>
      <TopHeader />
      <DesktopNavBar />
      <div className="h-[300px] w-full bg-[#385bce] py-[200px] text-white text-[30px] font-[600]">
        Job Oppertunities Page
      </div>
      <Footer />
    </>
  );
};

export default JobOppertunities;
