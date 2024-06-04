
"use client"

import Header2 from "./Header2";
import { useContext } from "react";
import { HoverContext } from "@/contexts/hoverContext";
import { motion }from "framer-motion";


export default function Section2() {
    const { hovered, setHovered } = useContext(HoverContext);
    const sections = ["#section-1", "#section-2", "#section-3", "#section-4"];
    return (
      <div className="relative h-screen bg-white" id="section2">
        <div className="flex justify-center">
        <motion.div
        className="absolute top-0 pt-3 w-screen" 
         animate={{ y: hovered ? -100 : 0, opacity: hovered ? 0 : 1 }}
         transition={{ duration: 0.5 }}
          >
        <Header2 classNameBurgerLight={`${hovered ? 'opacity-0' : ''}`} classNameBurgerDark={`${hovered ? 'opacity-0' : ''}`} classNameLogo={`${hovered ? 'opacity-0' : ''}`}/>
          </motion.div>        
        </div>
        <div className="grid grid-flow-col lg:grid-cols-6 h-full">
          <div className="pt-12 col-span-4 bg-white flex items-center justify-center text-left relative">
            <motion.div className="w-4/6 max-md:w-full"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="max-lg:hidden text-[#1151bb] text-xl">Empowering finance to move forward</h2>
              <h1 className="max-lg:px-12 max-sm:text-2xl max-sm:px-12 font-medium pt-3 text-4xl">
                We support money managers, traders, and banks in developing artificial intelligence
              </h1>
              <p className="max-lg:hidden pt-8 text-lg font-medium text-gray-400">
                At capital 45 we have a wealth of experience in developing stand-alone and integrated AI solutions developed by PHD experts.
              </p>
              <p className="max-lg:hidden pt-3 text-lg font-medium text-gray-400">
                We not only offer development, but also the guidance and expertise needed to succeed.
              </p>
            </motion.div>
          </div>
          <motion.div
  className="flex items-center absolute bottom-20 left-10 max-lg:hidden"
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="h-[0.1px] w-28 bg-gray-400 mx-3 mr-3"></div>
  <p className="text-xs text-blue-600 font-light">what we do</p>
</motion.div>
          <div className="col-span-2 h-full background-2 max-lg:hidden"></div>
      </div>
    </div>
    );
  }