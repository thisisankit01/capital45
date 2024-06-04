"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import { useContext } from "react";
import { HoverContext } from "@/contexts/hoverContext";
import { motion } from "framer-motion";

export default function Section1() {
    const sections = ["#section-1", "#section-2", "#section-3", "#section-4"];
    const { hovered, setHovered } = useContext(HoverContext);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1020 : false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1020);
            if (window.innerWidth < 1020) {
                setHovered(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[]);

    return (
        <div id="section-1" className="relative w-full h-screen">
            <video
                src={"/assets/bg-video.mp4"}
                className="absolute top-0 left-0 w-screen h-screen object-cover opacity-100"
                loop
                autoPlay
                playsInline
                muted
            />
            <div className="absolute top-0 left-0 w-screen h-screen bg-[#141d29] opacity-50"></div>
            <div className="flex justify-center">
                <Header className="absolute top-0 pt-6 w-[90%]" classNameLogo={`${hovered ? 'opacity-0' : ''}`} />
            </div>
            <div className="absolute bottom-28 z-50 pr-24">
            <motion.h1
  className="mx-16 h-full flex text-4xl font-medium text-white"
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Capital 45 builds cutting edge
  <br />
  AI for the financial sector
</motion.h1>
<motion.div
  className="flex items-center pt-10 mx-8"
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="max-lg:hidden h-[0.1px] w-36 bg-gray-400 mx-3 mr-3"></div>
  <p className="max-lg:hidden text-xs text-gray-400 font-semibold">Begin Scrolling</p>
</motion.div>
            </div>
            <div
                className={`fixed right-0 top-0 h-screen w-40 z-50 flex flex-col items-center justify-center ${hovered ? 'bg-gray-800 animate-slide-left' : 'bg-transparent'}`}
                onMouseEnter={() => !isMobile && setHovered(true)}
                onMouseLeave={() => !isMobile && setHovered(false)}
            >
                <div className="flex flex-col items-center h-full justify-between">
                    <div className={`max-lg:hidden h-2/4 w-0.5 bg-gray-600 ${hovered ? 'mr-8 bg-white' : ''}`}></div>
                    <div className={`flex max-lg:justify-center max-lg:space-y-12 flex-col items-center h-full justify-between py-16 space-y-4`}>
                        {sections.map((section, index) => (
                            <div key={section} className="flex space-x-4 items-center text-white">
                                <a key={section} href={section} className={`w-1 h-1 flex gap-4 bg-white ${hovered ? 'w-2 h-2' : ''}`}></a>
                                {hovered && <span className="text-sm">{"0" + String(index + 1)}</span>}
                            </div>
                        ))}
                    </div>
                    <div className={`max-lg:hidden h-1/4 w-0.5 bg-gray-600 ${hovered? 'mr-8 bg-white' : ''}`}></div>
                </div>
            </div>
            {hovered && (
  <>
    <div className="fixed top-0 left-0 w-screen py-8 bg-gray-800 z-40 max-lg:hidden animate-slide-down"></div>
    <div className="fixed top-0 left-0 h-screen w-14 bg-gray-800 z-[100] max-lg:hidden animate-slide-right"></div>
    <div className="fixed bottom-0 left-0 w-screen py-8 bg-gray-800 z-[30] max-lg:hidden animate-slide-up"></div>
  </>
)}
        </div>
    );
}
