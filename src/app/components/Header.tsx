"use client"

import React from 'react'
import Image from 'next/image'

import logo from '@/../public/images/logo.svg';
import lightBurger from '@/../public/images/hamburger-light.svg';
import { useContext } from 'react';
import { HoverContext } from '@/contexts/hoverContext';
import {motion} from 'framer-motion'

type HeaderProps = {
    className?: string
    classNameLogo?: string
}

const navItems = [
  'HOME',
  'ABOUT',
  'AI DEVELOPMENT',
  'APPLICATIONS',
  'CONTACT',
]

const Header = ( {className, classNameLogo} : HeaderProps) => {
  const { hovered, setHovered } = useContext(HoverContext);
  return (
    <header className={`${className}`}>
        <div className="flex pt-3 justify-between z-10">

        <motion.div
  animate={{ y: hovered ? -100 : 0, opacity: hovered ? 0 : 1 }}
  transition={{ duration: 0.5 }}
>
  <Image src={logo} alt="logo" height={43} width={43} className={`${classNameLogo}`} />
</motion.div>
       <ul className="flex pr-24 items-end h-16 max-lg:hidden navListAnimation"> 
         {navItems.map((item, index) => (
           <li key={index} className="flex items-end px-4 text-xs font-semibold text-white">{item}</li>
          ))}
       </ul>
       <Image src={lightBurger} className='lg:hidden' alt="right-logo" height={70} width={70} />
      </div>
    </header>
  )
}

export default Header