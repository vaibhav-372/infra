const Contact = () => {
  return (
    <div className="p-8 flex justify-center animate-fadeIn">
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <div className="bg-white p-6 rounded-lg text-center shadow-xl border-4 border-black">
          <h2 className="text-2xl font-bold mb-4">Indubuildingblocks</h2>
          <p className="mb-2">
            <strong>Mobile:</strong> 9441123957
          </p>
          <p className="mb-2">
            <strong>Email:</strong> <a href="mailto:info@yourwebsite.com" className="text-blue-500 hover:underline">info@yourwebsite.com</a>
          </p>
          <p className="mb-2">
            <strong>Address:</strong> Hotel Kritunga Street, Opp to Sitara Hotel Lane, JN Road, Rajahmundry
          </p>
        </div>
        
        {/* Contact Form */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Get in Touch</h3>
          <form className="bg-slate-400 p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block text-lg mb-1">Name</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 p-2 rounded transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-lg mb-1">Email</label>
              <input 
                type="email" 
                className="w-full border border-gray-300 p-2 rounded transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-lg mb-1">Number</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 p-2 rounded transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your number"
              />
            </div>
            <div>
              <label className="block text-lg mb-1">Message</label>
              <textarea 
                className="w-full border border-gray-300 p-2 rounded transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500" 
                placeholder="Your message here"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-orange-500 text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-105">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
