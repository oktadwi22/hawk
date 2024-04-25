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
      
      <footer>
        <div className="container ">
          <div className="lg:flex lg:w-full justify-center items-start">
            <div className="w-full flex px-6 justify-center lg:items-center">
              <div className=" flex flex-col justify-center">
              <Logo className="!w-[170px] flex justify-center !-mt-10 !h-[170px]" />
              <h1 className="text-2xl font-semibold">Hawk Protocol</h1>
              <ComponentTransition  >
                <div className="w-full relative py-5 gap-3 flex justify-center items-center">
                  <div className=" relative">
                  <Link href={'https://t.me/HawkProtocol'}>
                      <FaTelegram
                        size={30}
                        className="text-[#cfcfcf]  hover:text-green-500"
                      />
                    </Link>
                  </div>
                  <div className=" relative">
                  <Link href={'https://twitter.com/HawkProtocol'}>
                      <FaXTwitter
                        size={30}
                        className="text-[#cfcfcf] hover:text-green-500"
                      />
                    </Link>
                  </div>
                  <div className=" relative">
                  <Link href={'https://medium.com/@hawkprotocol'}>
                      <BsMedium
                        size={30}
                        className="text-[#cfcfcf] hover:text-green-500"
                      />
                    </Link>
                  </div>
                </div>
              </ComponentTransition>
              
              </div>
            </div>
            

            <div className="mt-6 lg:mt-0 w-full ">
              <div className="flex justify-around w-full">
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
        <div className='footer text-green-500 mt-10 -mb-4'>
              <a
              className=" font-sans"
                href=""
                target="_blank"
              >
                HAWK PROTOCOL 
              </a>
              © 2024. All rights reserved.
          </div>
        
      </footer>
    </div>
  );
}
