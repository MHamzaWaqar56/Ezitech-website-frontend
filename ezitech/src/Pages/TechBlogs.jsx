import TopHeader from "../Components/TopHeader";
import DesktopNavBar from "../Components/DesktopNavBar";
import Footer from "../Components/Footer";

const TechBlogs = () => {
  return (
    <>
      <TopHeader />
      <DesktopNavBar />
      <div className="h-[300px] w-full bg-[#385bce] py-[200px] text-white text-[30px] font-[600]">
        Tech BLogs Page
      </div>
      <Footer />
    </>
  );
};

export default TechBlogs;
