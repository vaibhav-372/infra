import ContactForm from "./ContactForm";
import LatestProjects from "./LatestProjects";

const Home = () => {
  return (
    <div className="relative ">
      {/* Background Image */}
      <img
        src="src/assets/infra-landing-bg.jpeg"
        className="w-screen max-h-[720px] object-cover"
        alt="landing-bg"
      />

      {/* Contact Form for larger screens */}
      <div className="absolute left-10 top-1/4 transform -translate-y-1/2 hidden md:block">
        {/* Shown only on medium and larger screens */}
        <ContactForm />
      </div>

      {/* Contact Form for small screens */}
      <div className="block md:hidden mt-4 px-4">
        {/* Shown only on small screens */}
        <ContactForm />
      </div>

      {/* Welcome Text */}
      <h1 className="text-3xl font-bold mt-10 text-center">Welcome to Real Estate</h1>
      <div>
        <LatestProjects/>
      </div>
    </div>
  );
};

export default Home;
