import React from "react";

export default function CourseCard() {
  const courses = [
    {
      id: "1",
      img: "https://ezitech.org/wp-content/uploads/2022/09/javascript.webp",
      title: "From Novice to expert, The Complete JavaScript Course 2024!",
      price: 7600,
    },
    {
      id: "2",
      img: "https://ezitech.org/wp-content/uploads/2022/10/react-1.webp",
      title: "The Complete Guide to React (incl Hooks, React Router, Redux)",
      price: 8000,
    },
    {
      id: "3",
      img: "https://ezitech.org/wp-content/uploads/2022/09/fiverr.webp",
      title: "Sell Fiverr Gigs Like The Top 1% in Freelancing in 2024",
      price: 4500,
    },
    {
      id: "4",
      img: "https://ezitech.org/wp-content/uploads/2022/09/node_green_tutorial-_FILEminimizer_.webp",
      title: "The Complete Bootcamp 2024: Node.js, Express, MongoDB, and More",
      price: 13000,
    },
  ];

  const totalPrice = courses.reduce((sum, courses) => sum + courses.price, 0);

  const SocialCourse = [
    {
      id: "1",
      img: "https://ezitech.org/wp-content/uploads/2022/10/app-tips-google-my-business-00-hero-1.webp",
      title: "TripAdvisor, Google My Business, and Local SEO",
      price: 5000,
    },

    {
      id: "2",
      img: "https://ezitech.org/wp-content/uploads/2022/10/1294-Thumbnail.width-1200.jpg.webp",
      title: "YouTube ads and Google ads",
      price: 5000,
    },
    {
      id: "3",
      img: "https://ezitech.org/wp-content/uploads/2022/10/post-3.jpg.webp",
      title: "Search Engine Optimization (SEO)",
      price: 6000,
    },
    {
      id: "4",
      img: "https://ezitech.org/wp-content/uploads/2022/10/What-is-a-digital-marketing-agency.webp",
      title: "Advance Digital Marketing",
      price: 6500,
    },
    {
      id: "5",
      img: "https://ezitech.org/wp-content/uploads/2022/10/linkedin-search.webp",
      title: "LinkedIn Orientation",
      price: 5000,
    },
    {
      id: "6",
      img: "https://ezitech.org/wp-content/uploads/2022/10/what-is-copywriter-hero-_FILEminimizer_-1.webp",
      title: "Content Marketing & Copywriting",
      price: 5000,
    },
  ];

  const coursePrice = SocialCourse.reduce(
    (sum, SocialCourses) => sum + SocialCourses.price,
    0
  );
  return (
    // General course list
    <div className="flex flex-col pt-[80px]">
      <div className="flex flex-col">
        <h2 className="font-[700] text-[36px] pb-[15px]">
          Limited-Time Summer Course Bundles!
        </h2>
        <p className="font-[400] text-[14px] pb-[10px] text-center mb-[30px]">
          Note : All these bundles have recorded luctures
        </p>
      </div>

      <div className="md:w-[85%] w-[85%] mx-auto flex flex-col md:flex-row gap-5 mb-[8rem]">
        {/* Web Development Course Card */}
        <div className="border w-full md:w-6/12 relative h-96 overflow-hidden hover:h-auto transition-all duration-500 hover:shadow-lg hover:shadow-[#385bce]">
          <div className="bg-[#385bce] text-white">
            <h1 className="text-center p-3 text-xl font-bold pt-[20px]">
              Web Development Course with Industrial Projects
            </h1>
            <h4 className="text-center px-3 py-4">{courses.length} Courses</h4>
          </div>
          {courses.map(({ id, img, title, price }) => (
            <div
              className="flex justify-between items-center p-1 border-b mt-[22px] mr-[22px] ml-[22px] mb-[10px]"
              key={id}
            >
              <img src={img} className="w-25 h-14" alt={title} />
              <p className=" font-[600] py-2 px-[14px] text-left text-[14px] hover:text-[#385bce]">
                {title}
              </p>
              <p className="text-slate-400  font-[600] text-[14px]">
                PKR{price}
              </p>
            </div>
          ))}
          <div className="flex h-[100px] items-end p-[10px]">
            <p className="font-bold p-1 text-right ml-auto">
              PKR
              {courses.reduce((sum, course) => sum + course.price, 0) - 20000}
            </p>
            <p className="p-1">
              <del className="ml-auto">{totalPrice}</del>
            </p>
          </div>
        </div>

        {/* Social Courses Card */}
        <div className="border w-full md:w-6/12 relative h-96 overflow-hidden hover:h-auto transition-all duration-500 mt-20 md:mt-0 hover:shadow-lg hover:shadow-[#385bce]">
          <div className="bg-[#385bce] text-white">
            <h1 className="text-center p-3 text-xl font-bold pt-[20px]">
              Social Media Marketing Courses
            </h1>
            <h4 className="text-center px-3 py-4">
              {SocialCourse.length} Courses
            </h4>
          </div>
          {SocialCourse.map(({ id, img, title, price }) => (
            <div
              className="flex justify-between items-center p-1 border-b mt-[22px] mr-[22px] ml-[22px] mb-[10px] "
              key={id}
            >
              <img src={img} className="w-25 h-14" alt={title} />
              <p className=" font-[600] hover:text-[#385bce] py-2 px-[14px] text-left text-[14px]">
                {title}
              </p>
              <p className="text-slate-400  font-[600] text-[14px]">
                PKR{price}
              </p>
            </div>
          ))}
          <div className="flex h-[150px] items-end p-[10px]">
            <p className="font-bold p-1 text-right ml-auto">
              PKR
              {SocialCourse.reduce((sum, course) => sum + course.price, 0) -
                20000}
            </p>
            <p className="p-1">
              <del className="ml-auto">{coursePrice}</del>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
