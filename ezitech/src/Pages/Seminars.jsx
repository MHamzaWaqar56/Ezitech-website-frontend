import TopHeader from "../Components/TopHeader";
import DesktopNavBar from "../Components/DesktopNavBar";
import Footer from "../Components/Footer";

const Seminars = () => {
  return (
    <>
      <TopHeader />
      <DesktopNavBar />
      <div className="h-[300px] w-full bg-[#385bce] py-[200px] text-white text-[30px] font-[600]">
        Seminars Page
      </div>
      <Footer />
    </>
  );
};

export default Seminars;
