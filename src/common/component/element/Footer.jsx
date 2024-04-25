import { NavigationItem } from "@/common/constant/NavigationItem";
import React from "react";
import LinkSlideHover from "./LinkSlideHover";
import {
  FollowusItem,
  InformationItem,
  ResourcesItem,
} from "@/common/constant/FooterItem";
import Logo from "../navbar/Logo";
import { BsMedium } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import ComponentTransition from "@/common/component/element/ComponentTransition";


export default function Footer() {
  return (
    
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className=" video-background h-[100%] lg:h-[35vh]">
        <video autoPlay loop muted playsInline className="video">
        <source src="/Aset/background.webm" type="video/webm" />
          <source src="/Aset/background.mp4" type="video/mp4" />
        </video>
      </div>
      <footer>
        <div className="container mx-auto">
          <div className="lg:flex lg:w-full justify-center items-start">
            <div className="w-full -mx-6 lg:w-2/5 flex flex-col px-6 justify-center lg:items-center">
              <Logo className="!w-[100px] !h-[100px]" />
              <h1 className="text-xl font-semibold">Hawk Protocol</h1>
              <ComponentTransition  >
                <div className="w-[100px] relative ml-3 md:ml-0 py-5 gap-3 flex justify-center items-center">
                  <div className=" relative">
                    <Link href={"/"}>
                      <FaTelegram
                        size={30}
                        className="text-[#cfcfcf]  hover:text-green-500"
                      />
                    </Link>
                  </div>

                  <div className=" relative">
                    <Link href={"/"}>
                      <FaXTwitter
                        size={30}
                        className="text-[#cfcfcf] hover:text-green-500"
                      />
                    </Link>
                  </div>

                  <div className=" relative">
                    <Link href={"/"}>
                      <BsMedium
                        size={30}
                        className="text-[#cfcfcf] hover:text-green-500"
                      />
                    </Link>
                  </div>
                </div>
              </ComponentTransition>
            </div>

            <div className="mt-6 lg:mt-0 w-full ">
              <div className="grid grid-cols-2 gap-6  sm:grid-cols-2 md:flex md:justify-around w-full">
                <div>
                  <h1 className="text-white font-semibold ">Hawk Protocol</h1>
                  <div className="flex flex-col relative justify-start mt-1 gap-2 items-start w-full">
                    {InformationItem.map((item, index) => (
                      <LinkSlideHover
                        className="text-sm text-[#969696]"
                        key={index}
                        href={item.src}
                        title={item.title}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h1 className="text-white font-semibold ">Product</h1>
                  <div className="flex flex-col relative justify-start mt-1 gap-2 items-start w-full">
                    {ResourcesItem.map((item, index) => (
                      <LinkSlideHover
                        className="text-sm text-[#969696]"
                        key={index}
                        href={item.src}
                        title={item.title}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
