import { url } from "inspector";
import Image from "next/image";
import React from "react";

interface BannerImageCompProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({
  title,
  description,
  cta,
  image,
  onEdit,
}) => {
  return (
    <div className="relative flex flex-col w-full h-[300px] justify-center items-start rounded-lg shadow-xl text-slate-600 hover:scale-110 duration-500">
      <Image
              src={image}
              className="object-cover w-full h-full rounded-3xl"
              alt=""
              fill
              priority
              sizes="100vh"
            />
      <button className="absolute top-2 right-2 text-lg" onClick={onEdit}>
        ✏️
      </button>
      <div className="absolute w-full h-full top-6 pb-8 px-4 flex flex-col justify-between ">
        <div className="flex flex-col w-full h-auto">

      <h3 className="mt-4 text-3xl font-bold">{title}</h3>
      <p className="mt-2 text-lg">{description}</p>
        </div>
      <button className="mb-2 px-4 py-2 bg-[#939185] w-1/2 text-[#EEEDEB] rounded-lg">
        {cta}
      </button>
      </div>
    </div>
  );
};

export default BannerImageComp;
