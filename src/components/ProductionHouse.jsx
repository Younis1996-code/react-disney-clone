import React from "react";
import disney from "./../assets/images/disney.png";
import marvel from "./../assets/images/marvel.png";
import nationalG from "./../assets/images/nationalG.png";
import pixar from "./../assets/images/pixar.png";
import starwar from "./../assets/images/starwar.png";

import starwarV from "./../assets/Videos/star-wars.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";

function ProductionHouse() {
  const productionHouseList = [
    { id: 1, image: disney, video: disneyV, alt: "Disney" },
    { id: 2, image: pixar, video: pixarV, alt: "Pixar" },
    { id: 3, image: marvel, video: marvelV, alt: "Marvel" },
    { id: 4, image: starwar, video: starwarV, alt: "Star Wars" },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
      alt: "National Geographic",
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {productionHouseList.map((item) => (
        <div
          key={item.id}
          className="relative border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-lg shadow-gray-800"
        >
          <img src={item.image} className="w-full z-10" alt={item.alt} />
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg z-0 opacity-0 hover:opacity-50 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
