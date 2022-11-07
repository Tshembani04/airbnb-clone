import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className="transition duration-300 ease-out transform cursor-pointer hover:scale-105 " >
      {/* left */}
      <div className="relative rounded-lg w-80 h-80 ">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      {/* bottom */}
      <h3 className="mt-3 text-2xl " >{title}</h3>
    </div>
  );
}

export default MediumCard;
