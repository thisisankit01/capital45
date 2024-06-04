import react from 'react'
import Image from 'next/image'
import logoDark from '@/../public/images/logo-dark.svg';
import lightMenu from '@/../public/images/hamburger-light.svg';
import darkMenu from '@/../public/images/hamburger-dark.svg';

type Header2Props = {
    className?: string
    classNameLogo?: string
    classNameBurgerLight?: string
    classNameBurgerDark?: string
}

const Header2 = ({className , classNameLogo, classNameBurgerLight, classNameBurgerDark} : Header2Props) => {
  return (
    <header className={`${className}`}>
    <div className="flex mx-20 max-lg:mx-8 pt-8 justify-between z-10">
     <Image src={logoDark} alt="logo-dark" className={`z-20 ${classNameLogo}`} height={43} width={43} />
      <Image src={lightMenu} alt="logo" height={70} width={70} className={`${classNameBurgerLight}`} />
      <Image src={darkMenu} className={`z-50 lg:hidden ${classNameBurgerDark}`} alt="logo" height={70} width={70} />
  </div>
</header>
  )
}

export default Header2