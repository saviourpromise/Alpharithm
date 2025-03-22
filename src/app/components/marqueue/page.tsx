import React from "react";
import Image from "next/image";
import Catalog from "../../../../public/catalog.svg";
import Circooles from "../../../../public/circooles.svg";
import Quotie from "../../../../public/quotie.svg";
import Sisyphus from "../../../../public/sisyphus.svg";
import Layers from "../../../../public/layers.svg";

const Marqueue = () => {
  return (
    <div className="mt-10 mb-32 overflow-hidden">
      <p className="text-[#667085] font-medium text-base text-center">
        Join 4,000+ companies already growing
      </p>

      <div className="relative mt-6 w-full">
        <div className="flex space-x-14 animate-marquee">
          <Image src={Layers} alt="Layers" className="w-auto h-10" />
          <Image src={Sisyphus} alt="Sisyphus" className="w-auto h-10" />
          <Image src={Circooles} alt="Circooles" className="w-auto h-10" />
          <Image src={Catalog} alt="Catalog" className="w-auto h-10" />
          <Image src={Quotie} alt="Quotie" className="w-auto h-10" />
          
          <Image src={Layers} alt="Layers" className="w-auto h-10" />
          <Image src={Sisyphus} alt="Sisyphus" className="w-auto h-10" />
          <Image src={Circooles} alt="Circooles" className="w-auto h-10" />
          <Image src={Catalog} alt="Catalog" className="w-auto h-10" />
          <Image src={Quotie} alt="Quotie" className="w-auto h-10" />

          <Image src={Layers} alt="Layers" className="w-auto h-10" />
          <Image src={Sisyphus} alt="Sisyphus" className="w-auto h-10" />
          <Image src={Circooles} alt="Circooles" className="w-auto h-10" />
          <Image src={Catalog} alt="Catalog" className="w-auto h-10" />
          <Image src={Quotie} alt="Quotie" className="w-auto h-10" />
        </div>
      </div>
    </div>
  );
};

export default Marqueue;