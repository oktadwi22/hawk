"use client";
import H1 from "@/common/component/element/H1";
import React from "react";
import dynamic from "next/dynamic";
import HeroText from "@/common/component/element/HeroText";
import Image from "@/common/component/element/Image";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsMedium } from "react-icons/bs";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Button from "@/common/component/element/Button";
import ButtonWarp from "@/common/component/element/ButtonWarp";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px] flex flex-col justify-center lg:justify-start px-5 lg:px-10 pb-48 w-full mt-20 overflow-hidden ">
      <div className="video-background h-[20%] lg:h-[100vh]">
        <video autoPlay loop muted playsInline className="video">
          <source src="/Aset/background.webm" type="video/webm" />
          <source src="/Aset/background.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-full gap-5 lg:mx-20 flex justify-center  items-center mt-28">
        <div className="w-full  z-[9] flex-col py-5 h-auto flex  rounded-2xl px-5">
          <div className="w-full flex justify-center lg:justify-start text-center mt-5 ">
            <HeroText
              texts="Hawk Protocol"
              className="lg:!text-6xl !text-5xl !font-extrabold !text-green-500 !text-center leading-[0.95em] "
            />
          </div>
          <H1
            delay={0.2}
            className="mt-5 w-full lg:!w-[80%] justify-center lg:justify-start !text-lg text-center"
            title="A Gateway to Advanced Decentralized Solutions."
            textColor="normal"
          />
          <ComponentTransition className="w-full overflow-hidden">
            <div className="w-full relative py-5 gap-2 flex justify-center lg:justify-start items-center">
              <div className=" relative">
                <Link href={"https://t.me/HawkProtocol"}>
                  <FaTelegram
                    size={30}
                    className="text-[#cfcfcf]  hover:text-green-500"
                  />
                </Link>
              </div>
              <div className=" relative">
                <Link href={"https://twitter.com/HawkProtocol"}>
                  <FaXTwitter
                    size={30}
                    className="text-[#cfcfcf] hover:text-green-500"
                  />
                </Link>
              </div>
              <div className=" relative">
                <Link href={"https://medium.com/@hawkprotocol"}>
                  <BsMedium
                    size={30}
                    className="text-[#cfcfcf] hover:text-green-500"
                  />
                </Link>
              </div>
            </div>
          </ComponentTransition>
          <div className="w-full flex max-lg:justify-center lg:items-center gap-3 mt-3">
            <div className="mt-2  lg:mt-0">
              <Link href={"https://t.me/HawkProtocol_bot"}>
                <Button
                  title="go To App"
                  className="!ring-1 !text-slate-50 !bg-transparent !ring-green-500"
                />
              </Link>
            </div>
            <div>
              <Link href={"https://hawk-protocol.gitbook.io"}>
                <ButtonWarp label="Documentation" className={'!text-sm '} />
              </Link>
            </div>
          </div>
        </div>

        {/* <ComponentTransition className=" flex w-full relative  justify-center items-center">

          <div className="right-content relative max-lg:mt-40">
          <Image
                className="right-content-img w-full absolute inset-0 top-[60px] left-[-5%]"
                src="/Aset/Smartphone.png"
                alt="Fusion"
                height={400}
                width={400}
                priority
              />
            <div className="right-content-img-items grid grid-cols-4 relative top-[-50px]">
            <Image
                className="right-content-img-safeboc  w-[150px]"
                src="/Aset/SafeBoc.png"
                alt="Fusion"
                height={400}
                width={400}
                priority
              />
            <Image
                className="right-content-img-dollar"
                src="/Aset/DollarCoin.png"
                alt="Fusion"
                height={400}
                width={400}
                priority
              />
            <Image
                className="right-content-img-documentlocked"
                src="/Aset/DocumentLocked.png"
                alt="Fusion"
                height={400}
                width={400}
                priority
              />
            <Image
                className="right-content-img-rocket"
                src="/Aset/Rocket.png"
                alt="Fusion"
                height={400}
                width={400}
                priority
              />
            
            </div>
          </div>
        </ComponentTransition> */}
      </div>
    </div>
  );
}
