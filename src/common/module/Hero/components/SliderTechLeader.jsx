import React from "react";
import TechImg from "./TechImg";
import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import { MediaPartnerItem } from "@/common/constant/MediaPartner";
import ComponentTransition from "@/common/component/element/ComponentTransition";

export default function SliderTechLeader() {
  return (
    <div className="w-full relative h-auto flex justify-center py-10">
      <div className="w-52 sm:w-full max-lg:h-[300px] md:grid flex flex-col justify-center items-center lg:grid-cols-3 gap-5 lg:gap-10 lg:px-20">
        {MediaPartnerItem.map((item, index) => (
          <ComponentTransition delay={index * 0.1} key={index} className='w-full h-auto'> 
          <Image
            className="w-[300px] py-2 h-auto object-cover "
            src={item.img}
            alt="Fusion"
            height={200}
            width={200}
            priority
            />
        </ComponentTransition>
          ))}
        
      </div>
    </div>
  );
}
