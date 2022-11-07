import Image from "next/image";
import React from "react";

function SmallCard({ img, distance, location }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 transition duration-200 ease-out transform cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105 " >
      {/* left */}
      <div className="relative w-16 h-16 rounded-lg" >
        <Image
        src={img}
        layout="fill"
        />
      </div>

      {/* right */}

      <div class >
        <h2  >{location}</h2>
        <h2 className="text-gray-500" >{distance}</h2>
      </div>
    </div>
  );
}

export default SmallCard;
