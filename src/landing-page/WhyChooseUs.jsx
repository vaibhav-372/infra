const WhyChooseUs = () => {
    const cards = [
      { id: 1, name: "Indore GYM", imgSrc: "src/assets/gym.jpg" },
      { id: 2, name: "kids PARK", imgSrc: "src/assets/park.jpg" },
      { id: 3, name: "24/7 cctv security", imgSrc: "src/assets/cctv & security.jpg" },
      { id: 4, name: "EV-Charging Port", imgSrc: "src/assets/ev-port.jpg" },
    ];
  
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5 md:scale-75">
          {cards.map((card) => (
            <div key={card.id} className="border rounded-lg shadow-lg p-4">
              <img
                src={card.imgSrc}
                alt={card.name}
                className="w-full h-full object-cover rounded-md aspect-square"
              />
              <h2 className="text-3xl font-semibold text-center mt-9">{card.name}</h2>
            </div>
          ))}
        </div>
      );
    };
  
  export default WhyChooseUs;
  