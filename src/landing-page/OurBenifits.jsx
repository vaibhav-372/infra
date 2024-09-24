const OurBenifits = () => {
  const cards = [
    { id: 1, name: "Indore GYM", imgSrc: "src/assets/gym.jpg" },
    { id: 2, name: "Kids PARK", imgSrc: "src/assets/park.jpg" },
    { id: 3, name: "24/7 CCTV Security", imgSrc: "src/assets/cctv & security.jpg" },
    { id: 4, name: "EV-Charging Port", imgSrc: "src/assets/ev-port.jpg" },
  ];

  return (
    <div className="bg-[#9bda54]/75 p-10 rounded-lg shadow-lg m-5">
      {/* Title for Our Benefits */}
      <h1 className="text-4xl font-bold text-center mb-10">Our Benefits</h1>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
        {cards.map((card) => (
          <div key={card.id} className="border rounded-lg shadow-lg p-4">
            {/* Square image */}
            <div className="w-full h-0 pb-[100%] relative">
              <img
                src={card.imgSrc}
                alt={card.name}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
              />
            </div>
            {/* Text under the image */}
            <h2 className="text-xl font-bold text-center mt-4">{card.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBenifits;
