import DesktopNavBar from "../Components/DesktopNavBar";
import Footer from "../Components/Footer";
import TopHeader from "../Components/TopHeader";

const About = () => {
  return (
    <>
      <TopHeader />
      <DesktopNavBar />
      <div className="h-[300px] w-full bg-[#385bce] py-[200px] text-white text-[30px] font-[600]">
        About Us Page
      </div>
      <Footer />
    </>
  );
};

export default About;
