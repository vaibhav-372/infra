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
      <div
        className="bg-[url('src/assets/infra-landing-bg1.jpg')] w-full h-[720px] bg-cover bg-no-repeat flex items-center"
      >
        {/* <img  
          src="src/assets/infra-landing-bg1.jpg"
          className="w-screen max-h-[720px] object-cover"
          alt="landing-bg"
        /> */}

        <div className="absolute text-white text-center flex justify-end pr-9 w-full">
          <h1 className="text-5xl text-white font-bold md:text-2xl lg:text-4xl xl:text-5xl">The Evolution of <span className="text-orange-500 font-extrabold">Luxury</span> Starts Here</h1>
        </div>
        <div
          className="absolute left-10 transform md:scale-75 lg:scale-100 lg:left-7 xl:scale-90 xl:left-20 md:left-0 hidden md:block"
        // className="md:block hidden absolute"
        >
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
        <OurBenifits />
      {/* <div>
        <h1 className="text-3xl font-bold text-center p-5">Why Choose Us</h1>
        <WhyChooseUs/>
      </div> */}
      <div>
        <Footer />
      </div>
      <Routes>
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default Home;
