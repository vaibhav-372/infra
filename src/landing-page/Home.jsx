import { Link, Route, Routes } from "react-router-dom";
import ContactForm from "./ContactForm";
import Gallery from "./Gallery";
import LatestProjects from "./LatestProjects";
import OurBenifits from "./OurBenifits";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="relative">
      <div>
        <img
          src="src/assets/infra-landing-bg1.jpg"
          className="w-screen max-h-[720px] object-cover"
          alt="landing-bg"
        />

        <div className="absolute left-10 top-1/4 transform md:scale-75 lg:scale-100 lg:top-1/3 lg:left-7 xl:scale-125 xl:left-24 -translate-y-1/4 md:-translate-y-60 md:left-0  hidden md:block">
          <ContactForm />
        </div>
      </div>
      {/* Contact Form for small screens */}
      <div className="block md:hidden mt-4 px-4">
        {/* Shown only on small screens */}
        <ContactForm />
      </div>

      {/* Welcome Text */}
      <h1 className="text-3xl font-bold mt-10 text-center">Find your dream house</h1>
      <div>
        <LatestProjects />
      </div>
      <div className="p-7 flex justify-center">
        <Link className="cursor-pointer text-center h-7 w-44 font-bold text-xl flex justify-center items-center border-black border-2 rounded-full left-1/2 p-5 bg-green-400"
          to="/gallery"
        >
          explore more
        </Link>
      </div>
      <div className="bg-[#9bda54]/75 m-14">
        <h1 className="text-3xl font-bold text-center p-5 ">Our Benifits</h1>
        <OurBenifits/>
      </div>
      {/* <div>
        <h1 className="text-3xl font-bold text-center p-5">Why Choose Us</h1>
        <WhyChooseUs/>
      </div> */}
      <div>
        <Footer/>
      </div>
      <Routes>
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default Home;
